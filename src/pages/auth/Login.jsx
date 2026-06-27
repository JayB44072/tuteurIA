import { useState } from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Moon, Sun, Globe, Bot } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import { useLang } from '../../context/LangContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login, user, loading: authLoading } = useAuth()
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
    setLoading(true)
    try {
      await login(email, password)
      navigate('/dashboard')
    } catch {
      setError(t.error)
    } finally {
      setLoading(false)
    }
  }

  const handleDemo = async () => {
    setLoading(true)
    try {
      await login('demo@tuteuia.com', 'demo123456')
      navigate('/dashboard')
    } catch {
      navigate('/dashboard')
    } finally {
      setLoading(false)
    }
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

          <button onClick={handleDemo} disabled={loading}
            className="w-full bg-white/10 border border-white/20 text-white font-medium py-3 rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
            {t.demo}
          </button>

          <p className="text-center text-white/50 text-sm mt-6">
            {t.noAccount}{' '}
            <Link to="/auth/signup" className="text-sky-400 hover:text-sky-300 font-semibold transition-colors">
              {t.signup}
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
