import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { supabase, isSupabaseConfigured, getSupabaseConfig, saveSupabaseConfig } from '../lib/supabase'
import BackButton from '../components/BackButton'

const DEFAULT_PREFS = { reminders: true, newQuizzes: false }

export default function Profile() {
  const { user, profile, refreshProfile, logout } = useAuth()
  const { dark, toggle } = useTheme()
  const navigate = useNavigate()

  const [quizStats, setQuizStats] = useState({ total: 0, avgScore: 0, activeDays: 0 })
  const [prefs, setPrefs] = useState(DEFAULT_PREFS)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  
  const [showConfigModal, setShowConfigModal] = useState(false)
  const currentConfig = getSupabaseConfig()
  const isConfigured = isSupabaseConfigured()
  const [customUrl, setCustomUrl] = useState(currentConfig.url && !currentConfig.url.includes('placeholder.supabase.co') ? currentConfig.url : '')
  const [customKey, setCustomKey] = useState(currentConfig.key && currentConfig.key !== 'placeholder-key' ? currentConfig.key : '')

  const name    = profile?.full_name || user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Élève'
  const email   = user?.email || '—'
  const level   = profile?.level || 'Baccalauréat'
  const initial = name[0]?.toUpperCase()

  useEffect(() => {
    if (!user) return
    fetchQuizStats()
    // Charger les préférences depuis le profil
    if (profile?.preferences) {
      setPrefs({ ...DEFAULT_PREFS, ...profile.preferences })
    }
  }, [user, profile])

  async function fetchQuizStats() {
    const { data } = await supabase
      .from('quiz_results')
      .select('score, completed_at')
      .eq('user_id', user.id)

    if (!data || !data.length) return

    const avgScore   = Math.round(data.reduce((a, r) => a + r.score, 0) / data.length)
    const days       = new Set(data.map(r => r.completed_at?.slice(0, 10))).size
    setQuizStats({ total: data.length, avgScore, activeDays: days })
  }

  const togglePref = (key) => setPrefs(p => ({ ...p, [key]: !p[key] }))

  const handleSave = async () => {
    setSaving(true)
    await supabase
      .from('profiles')
      .update({ preferences: prefs })
      .eq('id', user.id)
    await refreshProfile()
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleLogout = async () => {
    try {
      await logout()
    } catch (e) {
      console.warn('Logout error:', e)
    } finally {
      navigate('/', { replace: true })
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BackButton to="/dashboard" label="Tableau de bord" />
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">👤 Mon profil</h1>
        <p className="text-gray-500 dark:text-gray-400">Gère tes informations et préférences.</p>
      </motion.div>

      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 mb-5"
      >
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center text-3xl font-black text-white shadow-lg shadow-sky-500/20">
            {initial}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{email}</p>
            <span className="inline-block mt-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 text-xs px-2.5 py-1 rounded-full font-medium">
              {level}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Stats réelles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-3 gap-3 mb-5"
      >
        {[
          { label: 'QCM réalisés',  value: quizStats.total || '0',                           icon: '✏️' },
          { label: 'Score moyen',   value: quizStats.avgScore ? `${quizStats.avgScore}%` : '—', icon: '📊' },
          { label: 'Jours actifs',  value: quizStats.activeDays || '0',                       icon: '🔥' },
        ].map((s) => (
          <div key={s.label} className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 text-center">
            <div className="text-2xl">{s.icon}</div>
            <div className="text-lg font-black text-gray-900 dark:text-white">{s.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Préférences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden mb-5"
      >
        <div className="p-5 border-b border-gray-100 dark:border-gray-800">
          <h3 className="font-bold text-gray-900 dark:text-white">Préférences</h3>
        </div>

        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {/* Mode sombre */}
          <div className="flex items-center justify-between px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">{dark ? '🌙' : '☀️'}</span>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Mode sombre</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Thème de l'interface</p>
              </div>
            </div>
            <button
              onClick={toggle}
              className={`w-12 h-6 rounded-full transition-colors duration-300 relative ${dark ? 'bg-sky-500' : 'bg-gray-300 dark:bg-gray-600'}`}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${dark ? 'translate-x-7' : 'translate-x-1'}`} />
            </button>
          </div>

          {/* Rappels d'étude */}
          <div className="flex items-center justify-between px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">🔔</span>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Rappels d'étude</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Notifications pour réviser</p>
              </div>
            </div>
            <button
              onClick={() => togglePref('reminders')}
              className={`w-12 h-6 rounded-full transition-colors relative ${prefs.reminders ? 'bg-sky-500' : 'bg-gray-300 dark:bg-gray-600'}`}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${prefs.reminders ? 'translate-x-7' : 'translate-x-1'}`} />
            </button>
          </div>

          {/* Nouveaux QCM */}
          <div className="flex items-center justify-between px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">📬</span>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Nouveaux QCM</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Alertes nouveaux contenus</p>
              </div>
            </div>
            <button
              onClick={() => togglePref('newQuizzes')}
              className={`w-12 h-6 rounded-full transition-colors relative ${prefs.newQuizzes ? 'bg-sky-500' : 'bg-gray-300 dark:bg-gray-600'}`}
            >
              <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${prefs.newQuizzes ? 'translate-x-7' : 'translate-x-1'}`} />
            </button>
          </div>

          {/* Configuration Supabase */}
          <div className="flex items-center justify-between px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">⚡</span>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Base Supabase</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {isConfigured ? 'Connecté à votre projet' : 'Non configuré (placeholder)'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowConfigModal(true)}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
            >
              {isConfigured ? 'Gérer' : 'Configurer'}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-3"
      >
        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {saved ? '✓ Sauvegardé !' : saving ? 'Sauvegarde...' : '💾 Sauvegarder les préférences'}
        </button>

        <button
          onClick={handleLogout}
          className="w-full bg-white dark:bg-gray-900 border border-red-200 dark:border-red-900/50 text-red-500 font-medium py-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
        >
          🚪 Se déconnecter
        </button>
      </motion.div>

      {/* Modal Supabase */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 w-full max-w-lg shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="text-sky-500 text-xl">⚡</span> Projet Supabase
              </h3>
              <button onClick={() => setShowConfigModal(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-lg">✕</button>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-xs mb-5 leading-relaxed">
              Vos identifiants Supabase (<strong>Project Settings → API</strong>) :
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-xs font-semibold mb-1">
                  Project URL
                </label>
                <input
                  type="text"
                  placeholder="https://votre-projet.supabase.co"
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3.5 py-2.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-sky-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-xs font-semibold mb-1">
                  Project API Key (clé anon / public)
                </label>
                <input
                  type="text"
                  placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                  value={customKey}
                  onChange={(e) => setCustomKey(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3.5 py-2.5 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-sky-500 font-mono break-all"
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
                className="px-5 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm"
              >
                Fermer
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
