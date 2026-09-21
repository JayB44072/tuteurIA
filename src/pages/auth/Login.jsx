import { useState } from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Moon, Sun, Globe, Bot } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import { useLang } from '../../context/LangContext'

import { isSupabaseConfigured, saveSupabaseConfig, getSupabaseConfig } from '../../lib/supabase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showConfigModal, setShowConfigModal] = useState(false)
  
  const currentConfig = getSupabaseConfig()
  const isConfigured = isSupabaseConfigured()
  const [customUrl, setCustomUrl] = useState(currentConfig.url && !currentConfig.url.includes('placeholder.supabase.co') ? currentConfig.url : '')
  const [customKey, setCustomKey] = useState(currentConfig.key && currentConfig.key !== 'placeholder-key' ? currentConfig.key : '')

  const { login, loginDemo, user, loading: authLoading } = useAuth()
  const navigate = useNavigate()

  if (!authLoading && user) return <Navigate to="/dashboard" replace />
  const { darkMode, toggleDarkMode } = useTheme()
  const { lang, toggleLang } = useLang()

  const TX = {
    fr: {
      title: 'Bon retour !',
      sub: 'Connecte-toi pour continuer.',
      email: 'Email',
      password: 'Mot de passe',
      btn: 'Se connecter',
      loading: 'Connexion…',
      demo: '🎮 Essayer en mode démo',
      or: 'ou',
      noAccount: "Pas encore de compte ?",
      signup: "S'inscrire gratuitement",
      error: 'Email ou mot de passe incorrect.',
      placeholder: 'ton@email.com',
    },
    en: {
      title: 'Welcome back!',
      sub: 'Log in to continue.',
      email: 'Email',
      password: 'Password',
      btn: 'Log in',
      loading: 'Logging in…',
      demo: '🎮 Try demo mode',
      or: 'or',
      noAccount: "Don't have an account?",
      signup: 'Sign up for free',
      error: 'Incorrect email or password.',
      placeholder: 'your@email.com',
    },
  }
  const t = TX[lang]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!isConfigured) {
      setError("Supabase n'est pas configuré (l'URL actuelle est un placeholder). Cliquez sur '⚙️ Configurer Supabase' ci-dessous pour renseigner l'URL et la clé de votre projet.")
      setShowConfigModal(true)
      return
    }

    setLoading(true)
    try {
      await login(email, password)
      navigate('/dashboard')
    } catch (err) {
      console.error('Login error detail:', err)
      const msg = err?.message || ''
      if (msg.includes('Failed to fetch') || msg.includes('NetworkError') || msg.includes('ERR_NAME_NOT_RESOLVED')) {
        setError("Erreur réseau Supabase : Impossible de joindre votre serveur Supabase. Vérifiez que l'URL renseignée est correcte et active.")
      } else if (msg.includes('Invalid login credentials')) {
        setError('Email ou mot de passe incorrect.')
      } else if (msg.includes('Email not confirmed')) {
        setError("Votre email n'a pas encore été confirmé dans Supabase.")
      } else {
        setError(msg || t.error)
      }
    } finally {
      setLoading(false)
    }
  }

  const handleDemo = () => {
    loginDemo()
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 relative overflow-hidden transition-colors duration-300">
      {/* Blobs */}
      <motion.div animate={{ x: [0,40,0], y: [0,-30,0] }} transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <motion.div animate={{ x: [0,-30,0], y: [0,40,0] }} transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top-right controls */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <button onClick={toggleLang}
          className="flex items-center gap-1 px-3 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-white/80 hover:bg-white/20 transition-all">
          <Globe size={13} /> {lang === 'fr' ? 'EN' : 'FR'}
        </button>
        <button onClick={toggleDarkMode}
          className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:bg-white/20 transition-all">
          {darkMode ? <Sun size={15} /> : <Moon size={15} />}
        </button>
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center shadow-lg">
              <Bot size={18} className="text-white" />
            </div>
            <span className="font-black text-2xl text-white">Tuteur<span className="text-sky-400">IA</span></span>
          </Link>
          <h1 className="text-2xl font-black text-white">{t.title}</h1>
          <p className="text-white/60 mt-1 text-sm">{t.sub}</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
          {!isConfigured && (
            <div className="bg-amber-500/15 border border-amber-500/30 rounded-2xl p-4 mb-5 text-left">
              <div className="flex items-start gap-3">
                <span className="text-xl">⚠️</span>
                <div>
                  <h4 className="text-amber-300 font-bold text-xs uppercase tracking-wider">Connexion Supabase Requise</h4>
                  <p className="text-amber-100/80 text-xs mt-1 leading-relaxed">
                    L'URL actuelle est <code className="bg-black/40 px-1 py-0.5 rounded text-amber-300">placeholder.supabase.co</code> (non résolue). Pour vous connecter avec vos vrais identifiants, renseignez votre URL de projet Supabase et votre clé Anon.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <button
                      type="button"
                      onClick={() => setShowConfigModal(true)}
                      className="text-xs font-bold px-3 py-1.5 rounded-lg bg-amber-500 text-gray-950 hover:bg-amber-400 transition-colors shadow-sm"
                    >
                      ⚙️ Configurer Supabase
                    </button>
                    <button
                      type="button"
                      onClick={handleDemo}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                      {t.demo}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {error && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/20 border border-red-500/30 text-red-300 text-sm px-4 py-3 rounded-xl mb-5">
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">{t.email}</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                placeholder={t.placeholder}
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 transition-all" />
            </div>
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">{t.password}</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
                placeholder="••••••••"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 transition-all" />
            </div>
            <button type="submit" disabled={loading}
              className="w-full bg-gradient-to-r from-sky-500 to-violet-600 text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 text-base shadow-lg shadow-sky-500/20">
              {loading ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> {t.loading}</> : t.btn}
            </button>
          </form>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-white/15" />
            <span className="text-white/40 text-sm">{t.or}</span>
            <div className="flex-1 h-px bg-white/15" />
          </div>

          <div className="space-y-2">
            <button onClick={handleDemo} disabled={loading}
              className="w-full bg-white/10 border border-white/20 text-white font-medium py-3 rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
              {t.demo}
            </button>
            <button onClick={() => setShowConfigModal(true)} type="button"
              className="w-full text-xs text-white/50 hover:text-sky-400 py-1 transition-colors flex items-center justify-center gap-1.5">
              ⚙️ Configurer mes clés Supabase
            </button>
          </div>

          <p className="text-center text-white/50 text-sm mt-6">
            {t.noAccount}{' '}
            <Link to="/auth/signup" className="text-sky-400 hover:text-sky-300 font-semibold transition-colors">
              {t.signup}
            </Link>
          </p>
        </div>
      </motion.div>

      {/* Modal de configuration Supabase */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 border border-white/20 rounded-3xl p-6 w-full max-w-lg shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-sky-400 text-xl">⚡</span> Configuration de votre projet Supabase
              </h3>
              <button onClick={() => setShowConfigModal(false)} className="text-white/40 hover:text-white text-lg">✕</button>
            </div>
            <p className="text-white/70 text-xs mb-5 leading-relaxed">
              Pour connecter votre application à votre base de données Supabase, rendez-vous sur{' '}
              <a href="https://supabase.com/dashboard" target="_blank" rel="noreferrer" className="text-sky-400 underline">
                Supabase Dashboard
              </a>{' '}
              → votre projet → <strong>Project Settings</strong> → <strong>API</strong> et copiez :
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-white/80 text-xs font-semibold mb-1">
                  1. Project URL <span className="text-sky-400 font-normal">(ex: https://xyzcompany.supabase.co)</span>
                </label>
                <input
                  type="text"
                  placeholder="https://votre-projet.supabase.co"
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-sky-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-white/80 text-xs font-semibold mb-1">
                  2. Project API Key <span className="text-sky-400 font-normal">(clé anon / public)</span>
                </label>
                <input
                  type="text"
                  placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                  value={customKey}
                  onChange={(e) => setCustomKey(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-sky-400 font-mono break-all"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  if (!customUrl.trim() || !customKey.trim()) {
                    alert('Veuillez renseigner à la fois l\'URL du projet et la clé Anon publique.')
                    return
                  }
                  if (customUrl.includes('placeholder.supabase.co')) {
                    alert('L\'URL ne peut pas être l\'URL placeholder.')
                    return
                  }
                  saveSupabaseConfig(customUrl, customKey)
                }}
                className="flex-1 bg-gradient-to-r from-sky-500 to-violet-600 text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity text-sm shadow-lg shadow-sky-500/20"
              >
                Enregistrer & Reconnecter
              </button>
              <button
                type="button"
                onClick={() => setShowConfigModal(false)}
                className="px-5 py-3 rounded-xl bg-white/10 text-white/70 hover:bg-white/20 transition-colors text-sm"
              >
                Fermer
              </button>
            </div>
            <p className="text-white/40 text-[11px] mt-3 text-center">
              💡 Vous pouvez aussi modifier directement les variables <code className="text-sky-300">VITE_SUPABASE_URL</code> et <code className="text-sky-300">VITE_SUPABASE_ANON_KEY</code> dans le fichier <code className="text-sky-300">.env</code>.
            </p>
          </motion.div>
        </div>
      )}
    </div>
  )
}
