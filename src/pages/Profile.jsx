import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const { user, logout } = useAuth()
  const { dark, toggle } = useTheme()
  const navigate = useNavigate()
  const [saved, setSaved] = useState(false)

  const name = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Élève'
  const email = user?.email || 'demo@tuteuia.com'
  const initial = name[0]?.toUpperCase()

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">👤 Mon profil</h1>
        <p className="text-gray-500 dark:text-gray-400">Gère tes informations et préférences.</p>
      </motion.div>

      {/* Avatar section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 mb-5"
      >
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center text-3xl font-black text-white shadow-lg shadow-sky-500/20">
              {initial}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h2>
            <p className="text-gray-500 dark:text-gray-400">{email}</p>
            <span className="inline-block mt-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400 text-xs px-2.5 py-1 rounded-full font-medium">
              Plan gratuit
            </span>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-3 gap-3 mb-5"
      >
        {[
          { label: 'QCM réalisés', value: '24', icon: '✏️' },
          { label: 'Score moyen', value: '72%', icon: '📊' },
          { label: 'Jours actifs', value: '12', icon: '🔥' },
        ].map((s, i) => (
          <div key={s.label} className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800 text-center">
            <div className="text-2xl">{s.icon}</div>
            <div className="text-lg font-black text-gray-900 dark:text-white">{s.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Settings */}
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
          {/* Dark mode */}
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

          {/* Notifications */}
          {[
            { label: 'Rappels d\'étude', desc: 'Notifications pour réviser', icon: '🔔', on: true },
            { label: 'Nouveaux QCM', desc: 'Alertes nouveaux contenus', icon: '📬', on: false },
          ].map((s, i) => (
            <div key={s.label} className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">{s.icon}</span>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{s.label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{s.desc}</p>
                </div>
              </div>
              <button
                className={`w-12 h-6 rounded-full transition-colors relative ${s.on ? 'bg-sky-500' : 'bg-gray-300 dark:bg-gray-600'}`}
              >
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${s.on ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
            </div>
          ))}
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
          className="w-full bg-gradient-to-r from-sky-500 to-violet-600 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          {saved ? '✓ Sauvegardé !' : '💾 Sauvegarder les préférences'}
        </button>

        <button
          onClick={handleLogout}
          className="w-full bg-white dark:bg-gray-900 border border-red-200 dark:border-red-900/50 text-red-500 font-medium py-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
        >
          🚪 Se déconnecter
        </button>
      </motion.div>
    </div>
  )
}
