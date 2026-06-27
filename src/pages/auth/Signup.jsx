import { useState } from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Moon, Sun, Globe, Bot } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import { useLang } from '../../context/LangContext'

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
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
    if (form.password !== form.confirm) { setError(t.errPass); return }
    if (form.password.length < 6) { setError(t.errLen); return }
    setLoading(true)
    try {
      await signup(form.email, form.password, { full_name: form.name })
      navigate('/dashboard')
    } catch (err) {
      setError(err.message || 'Erreur lors de l\'inscription.')
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
    </div>
  )
}
