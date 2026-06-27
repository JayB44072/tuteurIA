import { useState } from 'react'
import { motion } from 'framer-motion'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from 'recharts'
import { SUBJECTS } from '../data/subjects'
import { QUIZZES } from '../data/quizzes'

const MOCK_SCORES = [
  { semaine: 'Sem 1', score: 55 },
  { semaine: 'Sem 2', score: 62 },
  { semaine: 'Sem 3', score: 58 },
  { semaine: 'Sem 4', score: 70 },
  { semaine: 'Sem 5', score: 74 },
  { semaine: 'Sem 6', score: 68 },
  { semaine: 'Sem 7', score: 80 },
  { semaine: 'Sem 8', score: 85 },
]

const MOCK_SUBJECT_SCORES = SUBJECTS.slice(0, 8).map(s => ({
  subject: s.nom.slice(0, 6),
  score: Math.floor(Math.random() * 40 + 50),
  fullName: s.nom,
  icon: s.icon,
}))

const RADAR_DATA = SUBJECTS.slice(0, 6).map(s => ({
  subject: s.nom,
  niveau: Math.floor(Math.random() * 50 + 40),
}))

const GLOBAL_STATS = [
  { label: 'QCM tentés', value: '24', icon: '✏️', color: 'text-sky-600' },
  { label: 'Score moyen', value: '72%', icon: '📊', color: 'text-violet-600' },
  { label: 'Matières travaillées', value: '8', icon: '📚', color: 'text-emerald-600' },
  { label: 'Taux de réussite', value: '68%', icon: '🏆', color: 'text-amber-600' },
]

export default function Progress() {
  const [chartTab, setChartTab] = useState('radar')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">📈 Ma progression</h1>
        <p className="text-gray-500 dark:text-gray-400">Analyse tes résultats et identifie tes points faibles.</p>
      </motion.div>

      {/* Global stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {GLOBAL_STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-200 dark:border-gray-800 text-center"
          >
            <div className="text-3xl mb-1">{s.icon}</div>
            <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        {/* Charts */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-gray-900 dark:text-white">Analyse des performances</h2>
            <div className="flex gap-1">
              {[
                { key: 'radar', label: 'Radar' },
                { key: 'evolution', label: 'Évolution' },
                { key: 'barres', label: 'Matières' },
              ].map(t => (
                <button
                  key={t.key}
                  onClick={() => setChartTab(t.key)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${chartTab === t.key ? 'bg-sky-500 text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              {chartTab === 'radar' ? (
                <RadarChart data={RADAR_DATA}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: '#6b7280' }} />
                  <Radar dataKey="niveau" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.25} strokeWidth={2} />
                </RadarChart>
              ) : chartTab === 'evolution' ? (
                <LineChart data={MOCK_SCORES}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="semaine" tick={{ fontSize: 11, fill: '#6b7280' }} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#6b7280' }} />
                  <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
                  <Line type="monotone" dataKey="score" stroke="#0ea5e9" strokeWidth={3} dot={{ fill: '#0ea5e9', r: 5 }} activeDot={{ r: 8 }} />
                </LineChart>
              ) : (
                <BarChart data={MOCK_SUBJECT_SCORES}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="subject" tick={{ fontSize: 11, fill: '#6b7280' }} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#6b7280' }} />
                  <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} formatter={(v, n, p) => [v + '%', p.payload.fullName]} />
                  <Bar dataKey="score" fill="#0ea5e9" radius={[6, 6, 0, 0]} />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>

        {/* Subject progress */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
          <h2 className="font-bold text-gray-900 dark:text-white mb-5">Score par matière</h2>
          <div className="space-y-4">
            {MOCK_SUBJECT_SCORES.slice(0, 6).map((s, i) => (
              <motion.div
                key={s.subject}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span>{s.icon}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{s.fullName}</span>
                  </div>
                  <span className={`text-xs font-bold ${s.score >= 70 ? 'text-green-500' : s.score >= 50 ? 'text-amber-500' : 'text-red-500'}`}>
                    {s.score}%
                  </span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${s.score}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className={`h-full rounded-full ${s.score >= 70 ? 'bg-green-400' : s.score >= 50 ? 'bg-amber-400' : 'bg-red-400'}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
      >
        <h2 className="font-bold text-gray-900 dark:text-white mb-5">Activité récente</h2>
        <div className="space-y-3">
          {QUIZZES.slice(0, 6).map((q, i) => {
            const subject = SUBJECTS.find(s => s.id === q.subjectId)
            const mockScore = Math.floor(Math.random() * 5 + 5)
            const total = q.questions.length
            const pct = Math.round((mockScore / total) * 100)
            return (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.06 }}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${subject?.couleur} flex items-center justify-center text-lg flex-shrink-0`}>
                  {subject?.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{q.titre}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{subject?.nom} · {q.questions.length} questions</p>
                </div>
                <div className={`text-sm font-bold ${pct >= 70 ? 'text-green-500' : pct >= 50 ? 'text-amber-500' : 'text-red-500'}`}>
                  {pct}%
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
