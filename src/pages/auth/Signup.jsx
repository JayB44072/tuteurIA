import { useState } from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Moon, Sun, Globe, Bot } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import { useLang } from '../../context/LangContext'

import { isSupabaseConfigured, saveSupabaseConfig, getSupabaseConfig } from '../../lib/supabase'

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showConfigModal, setShowConfigModal] = useState(false)

  const currentConfig = getSupabaseConfig()
  const isConfigured = isSupabaseConfigured()
  const [customUrl, setCustomUrl] = useState(currentConfig.url && !currentConfig.url.includes('placeholder.supabase.co') ? currentConfig.url : '')
  const [customKey, setCustomKey] = useState(currentConfig.key && currentConfig.key !== 'placeholder-key' ? currentConfig.key : '')

  const { signup, user, loading: authLoading } = useAuth()
  const navigate = useNavigate()

  if (!authLoading && user) return <Navigate to="/dashboard" replace />
  const { darkMode, toggleDarkMode } = useTheme()
  const { lang, toggleLang } = useLang()

  const TX = {
    fr: {
      title: 'Crée ton compte',
      sub: 'Inscris-toi et commence à réviser !',
      name: 'Nom complet',
      email: 'Email',
      password: 'Mot de passe',
      confirm: 'Confirmer le mot de passe',
      btn: 'Créer mon compte gratuitement',
      loading: 'Création…',
      hasAccount: 'Déjà inscrit ?',
      login: 'Se connecter',
      errPass: 'Les mots de passe ne correspondent pas.',
      errLen: 'Le mot de passe doit contenir au moins 6 caractères.',
      namePlaceholder: 'Kouamé Jean-Baptiste',
    },
    en: {
      title: 'Create your account',
      sub: 'Sign up and start studying!',
      name: 'Full name',
      email: 'Email',
      password: 'Password',
      confirm: 'Confirm password',
      btn: 'Create my free account',
      loading: 'Creating…',
      hasAccount: 'Already registered?',
      login: 'Log in',
      errPass: 'Passwords do not match.',
      errLen: 'Password must be at least 6 characters.',
      namePlaceholder: 'John Doe',
    },
  }
  const t = TX[lang]

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!isConfigured) {
      setError("Supabase n'est pas encore configuré. Renseignez l'URL et la clé de votre projet pour créer un compte.")
      setShowConfigModal(true)
      return
    }

    if (form.password !== form.confirm) { setError(t.errPass); return }
    if (form.password.length < 6) { setError(t.errLen); return }
    setLoading(true)
    try {
      await signup(form.email, form.password, { full_name: form.name })
      navigate('/dashboard')
    } catch (err) {
      console.error('Signup error detail:', err)
      const msg = err?.message || ''
      if (msg.includes('Failed to fetch') || msg.includes('NetworkError') || msg.includes('ERR_NAME_NOT_RESOLVED')) {
        setError("Erreur réseau : Impossible de joindre votre serveur Supabase. Vérifiez l'URL de votre projet Supabase.")
      } else {
        setError(msg || 'Erreur lors de l\'inscription.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 relative overflow-hidden py-12 transition-colors duration-300">
      <motion.div animate={{ x: [0,40,0], y: [0,-30,0] }} transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <motion.div animate={{ x: [0,-30,0], y: [0,40,0] }} transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Controls top-right */}
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
                    L'application pointe sur <code className="bg-black/40 px-1 py-0.5 rounded text-amber-300">placeholder.supabase.co</code>. Renseignez votre URL Supabase pour pouvoir créer un compte.
                  </p>
                  <div className="flex gap-2 mt-3">
                    <button
                      type="button"
                      onClick={() => setShowConfigModal(true)}
                      className="text-xs font-bold px-3 py-1.5 rounded-lg bg-amber-500 text-gray-950 hover:bg-amber-400 transition-colors"
                    >
                      ⚙️ Configurer Supabase
                    </button>
                    <Link
                      to="/auth/login"
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center"
                    >
                      Mode démo (sur Login)
                    </Link>
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

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { key: 'name',     label: t.name,     type: 'text',     ph: t.namePlaceholder },
              { key: 'email',    label: t.email,    type: 'email',    ph: 'your@email.com' },
              { key: 'password', label: t.password, type: 'password', ph: '6 min.' },
              { key: 'confirm',  label: t.confirm,  type: 'password', ph: '••••••••' },
            ].map(({ key, label, type, ph }) => (
              <div key={key}>
                <label className="block text-white/80 text-sm font-medium mb-2">{label}</label>
                <input type={type} value={form[key]} onChange={set(key)} required placeholder={ph}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 transition-all" />
              </div>
            ))}

            <button type="submit" disabled={loading}
              className="w-full bg-gradient-to-r from-sky-500 to-violet-600 text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 text-base shadow-lg shadow-sky-500/20 mt-2">
              {loading ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> {t.loading}</> : t.btn}
            </button>
          </form>

          <p className="text-center text-white/50 text-sm mt-6">
            {t.hasAccount}{' '}
            <Link to="/auth/login" className="text-sky-400 hover:text-sky-300 font-semibold transition-colors">
              {t.login}
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
              → votre projet → <strong>Project Settings</strong> → <strong>API</strong> :
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
