import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar,
} from 'recharts'
import { SUBJECTS } from '../data/subjects'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'
import BackButton from '../components/BackButton'

const EMPTY_STATS = { total: 0, avgScore: 0, subjects: 0, successRate: 0 }

export default function Progress() {
  const { user } = useAuth()
  const [chartTab, setChartTab]     = useState('radar')
  const [results, setResults]       = useState([])
  const [stats, setStats]           = useState(EMPTY_STATS)
  const [weeklyData, setWeeklyData] = useState([])
  const [subjectData, setSubjectData] = useState([])
  const [radarData, setRadarData]   = useState([])
  const [loading, setLoading]       = useState(true)

  useEffect(() => {
    if (!user) { setLoading(false); return }
    fetchResults()
  }, [user])

  async function fetchResults() {
    setLoading(true)
    const { data, error } = await supabase
      .from('quiz_results')
      .select('quiz_id, subject_id, score, correct_q, total_q, completed_at')
      .eq('user_id', user.id)
      .order('completed_at', { ascending: false })

    if (error || !data) { setLoading(false); return }

    setResults(data)
    computeStats(data)
    setLoading(false)
  }

  function computeStats(data) {
    if (!data.length) return

    // Stats globales
    const avgScore    = Math.round(data.reduce((a, r) => a + r.score, 0) / data.length)
    const successRate = Math.round(data.filter(r => r.score >= 60).length / data.length * 100)
    const subjectSet  = new Set(data.map(r => r.subject_id).filter(Boolean))
    setStats({ total: data.length, avgScore, subjects: subjectSet.size, successRate })

    // Évolution hebdomadaire (8 dernières semaines)
    const now     = Date.now()
    const weeks   = Array.from({ length: 8 }, (_, i) => {
      const start = now - (7 - i) * 7 * 86400000
      const end   = start + 7 * 86400000
      const week  = data.filter(r => {
        const t = new Date(r.completed_at).getTime()
        return t >= start && t < end
      })
      return {
        semaine: `S${i + 1}`,
        score: week.length ? Math.round(week.reduce((a, r) => a + r.score, 0) / week.length) : null,
      }
    }).filter(w => w.score !== null)
    setWeeklyData(weeks.length ? weeks : [])

    // Score par matière
    const bySubject = {}
    data.forEach(r => {
      if (!r.subject_id) return
      if (!bySubject[r.subject_id]) bySubject[r.subject_id] = []
      bySubject[r.subject_id].push(r.score)
    })
    const subjArr = Object.entries(bySubject).map(([sid, scores]) => {
      const subject = SUBJECTS.find(s => s.id === sid)
      return {
        subject: subject?.nom?.slice(0, 6) ?? sid,
        fullName: subject?.nom ?? sid,
        icon: subject?.icon ?? '📖',
        couleur: subject?.couleur ?? 'from-sky-500 to-sky-600',
        score: Math.round(scores.reduce((a, s) => a + s, 0) / scores.length),
        count: scores.length,
      }
    }).sort((a, b) => b.score - a.score)
    setSubjectData(subjArr)

    // Radar (les 6 premières matières travaillées)
    setRadarData(subjArr.slice(0, 6).map(s => ({ subject: s.fullName, niveau: s.score })))
  }

  const fmtDate = (d) => new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })

  // ── Écran vide ─────────────────────────────────────────────────────
  const isEmpty = !loading && results.length === 0

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BackButton to="/dashboard" label="Tableau de bord" />
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">📈 Ma progression</h1>
        <p className="text-gray-500 dark:text-gray-400">Analyse tes résultats et identifie tes points faibles.</p>
      </motion.div>

      {loading && (
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {!loading && isEmpty && (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">📊</div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Aucune donnée encore</h2>
          <p className="text-gray-500 dark:text-gray-400">Passe des QCM pour voir ta progression ici !</p>
        </div>
      )}

      {!loading && !isEmpty && (
        <>
          {/* Stats globales */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'QCM tentés',         value: stats.total,              icon: '✏️',  color: 'text-sky-600' },
              { label: 'Score moyen',         value: `${stats.avgScore}%`,     icon: '📊',  color: 'text-violet-600' },
              { label: 'Matières travaillées',value: stats.subjects,           icon: '📚',  color: 'text-emerald-600' },
              { label: 'Taux de réussite',    value: `${stats.successRate}%`,  icon: '🏆',  color: 'text-amber-600' },
            ].map((s, i) => (
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
            {/* Graphiques */}
            <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-gray-900 dark:text-white">Analyse des performances</h2>
                <div className="flex gap-1">
                  {[
                    { key: 'radar',     label: 'Radar' },
                    { key: 'evolution', label: 'Évolution' },
                    { key: 'barres',    label: 'Matières' },
                  ].map(tab => (
                    <button
                      key={tab.key}
                      onClick={() => setChartTab(tab.key)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${chartTab === tab.key ? 'bg-sky-500 text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-64">
                {chartTab === 'radar' && (
                  radarData.length >= 3 ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData}>
                        <PolarGrid stroke="#e5e7eb" />
                        <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: '#6b7280' }} />
                        <Radar dataKey="niveau" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.25} strokeWidth={2} />
                      </RadarChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="h-full flex items-center justify-center text-sm text-gray-400">
                      Passe des QCM dans au moins 3 matières pour voir le radar.
                    </div>
                  )
                )}
                {chartTab === 'evolution' && (
                  weeklyData.length >= 2 ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={weeklyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="semaine" tick={{ fontSize: 11, fill: '#6b7280' }} />
                        <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#6b7280' }} />
                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} formatter={v => [`${v}%`, 'Score']} />
                        <Line type="monotone" dataKey="score" stroke="#0ea5e9" strokeWidth={3} dot={{ fill: '#0ea5e9', r: 5 }} activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="h-full flex items-center justify-center text-sm text-gray-400">
                      Pas encore assez de données pour l'évolution.
                    </div>
                  )
                )}
                {chartTab === 'barres' && (
                  subjectData.length ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={subjectData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="subject" tick={{ fontSize: 11, fill: '#6b7280' }} />
                        <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#6b7280' }} />
                        <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} formatter={(v, n, p) => [`${v}%`, p.payload.fullName]} />
                        <Bar dataKey="score" fill="#0ea5e9" radius={[6, 6, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="h-full flex items-center justify-center text-sm text-gray-400">
                      Aucune donnée par matière.
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Score par matière */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
              <h2 className="font-bold text-gray-900 dark:text-white mb-5">Score par matière</h2>
              {subjectData.length === 0 ? (
                <p className="text-sm text-gray-400 text-center py-10">Aucune matière travaillée.</p>
              ) : (
                <div className="space-y-4">
                  {subjectData.slice(0, 6).map((s, i) => (
                    <motion.div
                      key={s.subject}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span>{s.icon}</span>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate max-w-[120px]">{s.fullName}</span>
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
                      <p className="text-[10px] text-gray-400 mt-0.5">{s.count} QCM passé{s.count > 1 ? 's' : ''}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Activité récente */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
          >
            <h2 className="font-bold text-gray-900 dark:text-white mb-5">Activité récente</h2>
            {results.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-8">Aucune activité récente.</p>
            ) : (
              <div className="space-y-3">
                {results.slice(0, 8).map((r, i) => {
                  const subject = SUBJECTS.find(s => s.id === r.subject_id)
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${subject?.couleur ?? 'from-sky-500 to-sky-600'} flex items-center justify-center text-lg flex-shrink-0`}>
                        {subject?.icon ?? '📖'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {subject?.nom ?? r.quiz_id}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {r.correct_q}/{r.total_q} bonnes réponses · {fmtDate(r.completed_at)}
                        </p>
                      </div>
                      <div className={`text-sm font-bold ${r.score >= 70 ? 'text-green-500' : r.score >= 50 ? 'text-amber-500' : 'text-red-500'}`}>
                        {r.score}%
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            )}
          </motion.div>
        </>
      )}
    </div>
  )
}
