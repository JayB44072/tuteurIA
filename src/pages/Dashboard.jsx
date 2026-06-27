import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  BookOpen, PenSquare, FileText, Bot,
  TrendingUp, ChevronRight, Flame, Target, Award, Clock
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useLang } from '../context/LangContext'
import { SUBJECTS } from '../data/subjects'
import { QUIZZES } from '../data/quizzes'
import { supabase } from '../lib/supabase'

export default function Dashboard() {
  const { user } = useAuth()
  const { t, lang } = useLang()

  const recentQuizzes = QUIZZES.slice(0, 4)
  const subjectList = SUBJECTS.slice(0, 6)

  const [subjectScores, setSubjectScores] = useState({})

  useEffect(() => {
    if (!user) return
    fetchSubjectScores()
  }, [user])

  async function fetchSubjectScores() {
    const { data } = await supabase
      .from('quiz_results')
      .select('subject_id, score')
      .eq('user_id', user.id)

    if (!data || !data.length) return

    const bySubject = {}
    for (const r of data) {
      if (!r.subject_id) continue
      if (!bySubject[r.subject_id]) bySubject[r.subject_id] = []
      bySubject[r.subject_id].push(r.score)
    }
    const avgBySubject = {}
    for (const [sid, scores] of Object.entries(bySubject)) {
      avgBySubject[sid] = Math.round(scores.reduce((a, s) => a + s, 0) / scores.length)
    }
    setSubjectScores(avgBySubject)
  }

  const QUICK_STATS = [
    { label: t('dashboard', 'subjects'),  value: '12',   Icon: BookOpen,   color: 'from-sky-500 to-sky-600' },
    { label: t('dashboard', 'quizzes'),   value: '200+', Icon: PenSquare,  color: 'from-violet-500 to-violet-600' },
    { label: t('dashboard', 'lessons'),   value: '50+',  Icon: FileText,   color: 'from-emerald-500 to-emerald-600' },
    { label: t('dashboard', 'aiTutor'),   value: '24/7', Icon: Bot,        color: 'from-amber-500 to-amber-600' },
  ]

  const QUICK_ACTIONS = [
    { to: '/qcm',        Icon: PenSquare,   label: t('dashboard', 'doQCM'),       color: 'text-sky-600 dark:text-sky-400',       bg: 'bg-sky-50 dark:bg-sky-900/20' },
    { to: '/ai-tuteur',  Icon: Bot,         label: t('dashboard', 'askAI'),       color: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-50 dark:bg-violet-900/20' },
    { to: '/matieres',   Icon: BookOpen,    label: t('dashboard', 'studyCourse'), color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
    { to: '/doc-quiz',   Icon: FileText,    label: t('dashboard', 'importDoc'),   color: 'text-pink-600 dark:text-pink-400',     bg: 'bg-pink-50 dark:bg-pink-900/20' },
    { to: '/progression',Icon: TrendingUp,  label: t('dashboard', 'seeProgress'), color: 'text-amber-600 dark:text-amber-400',   bg: 'bg-amber-50 dark:bg-amber-900/20' },
  ]

  // Les 4 premières matières avec score réel (ou null si pas encore travaillée)
  const progressSubjects = SUBJECTS.slice(0, 4).map(s => ({
    ...s,
    pct: subjectScores[s.id] ?? null,
  }))
  const hasAnyScore = progressSubjects.some(s => s.pct !== null)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Stats plateforme */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {QUICK_STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            whileHover={{ y: -4 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm"
          >
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-3 shadow-sm`}>
              <s.Icon size={20} className="text-white" />
            </div>
            <div className="text-2xl font-black text-gray-900 dark:text-white">{s.value}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Citation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 p-5 mb-6 text-white relative overflow-hidden"
      >
        <div className="absolute right-5 top-1/2 -translate-y-1/2 opacity-20">
          <Target size={80} />
        </div>
        <p className="text-white/70 text-xs mb-1 flex items-center gap-1.5">
          <Flame size={13} /> {lang === 'fr' ? 'Citation du jour' : 'Quote of the day'}
        </p>
        <p className="font-bold text-base sm:text-lg max-w-lg leading-snug">
          {t('dashboard', 'quote')}
        </p>
        <p className="text-white/50 text-xs mt-2">{t('dashboard', 'quoteAuthor')}</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Colonne gauche */}
        <div className="lg:col-span-2 space-y-5">

          {/* Matières */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <BookOpen size={17} className="text-sky-500" /> {t('dashboard', 'yourSubjects')}
              </h2>
              <Link to="/matieres" className="text-sky-600 dark:text-sky-400 text-sm font-medium flex items-center gap-1 hover:underline">
                {t('dashboard', 'seeAll')} <ChevronRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {subjectList.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                >
                  <Link
                    to={`/matieres/${s.id}`}
                    className="flex items-center gap-3 bg-white dark:bg-gray-900 rounded-xl p-3 border border-gray-200 dark:border-gray-800 hover:border-sky-300 dark:hover:border-sky-700 hover:shadow-sm transition-all"
                  >
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${s.couleur} flex items-center justify-center text-lg flex-shrink-0`}>
                      {s.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm truncate">{s.nom}</p>
                      <p className="text-xs text-gray-400">{s.chapitres.length} {t('dashboard', 'chap')}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Actions rapides */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.46 }}>
            <h2 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
              <Target size={17} className="text-violet-500" /> {t('dashboard', 'quickActions')}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {QUICK_ACTIONS.map((a, i) => (
                <motion.div key={a.to} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48 + i * 0.05 }} whileHover={{ scale: 1.03 }}>
                  <Link to={a.to} className={`flex items-center gap-2.5 px-3 py-3 rounded-xl ${a.bg} border border-transparent hover:border-current/10 transition-all`}>
                    <a.Icon size={17} className={a.color} />
                    <span className={`text-sm font-medium ${a.color}`}>{a.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Colonne droite */}
        <div className="space-y-4">
          {/* QCM suggérés */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.52 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <PenSquare size={16} className="text-sky-500" /> {t('dashboard', 'suggestedQCM')}
              </h3>
              <Link to="/qcm" className="text-sky-600 dark:text-sky-400 text-xs flex items-center gap-0.5 hover:underline">
                {t('dashboard', 'allQCM')} <ChevronRight size={12} />
              </Link>
            </div>
            <div className="space-y-3">
              {recentQuizzes.map(q => {
                const subject = SUBJECTS.find(s => s.id === q.subjectId)
                return (
                  <Link key={q.id} to={`/qcm/${q.id}`} className="flex items-center gap-3 group">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${subject?.couleur} flex items-center justify-center text-base flex-shrink-0`}>
                      {subject?.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">{q.titre}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="flex items-center gap-1"><Clock size={10} /> {q.duree} {t('common', 'min')}</span>
                        <span>{q.questions.length} {t('common', 'questions')}</span>
                      </div>
                    </div>
                    <ChevronRight size={14} className="text-gray-300 dark:text-gray-600 group-hover:text-sky-500 flex-shrink-0" />
                  </Link>
                )
              })}
            </div>
          </motion.div>

          {/* Doc → Quiz promo */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
            <Link to="/doc-quiz"
              className="block rounded-2xl bg-gradient-to-br from-violet-500 to-pink-600 p-5 text-white hover:opacity-95 transition-opacity">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="font-bold mb-1">Document → QCM</p>
                  <p className="text-white/70 text-xs leading-relaxed">{t('dashboard', 'docQuizPromo')}</p>
                  <span className="inline-flex items-center gap-1 mt-2 text-xs font-semibold bg-white/20 px-2 py-1 rounded-lg">
                    {t('dashboard', 'tryIt')} <ChevronRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Progression rapide — données réelles */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.66 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-200 dark:border-gray-800">
            <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
              <Award size={16} className="text-amber-500" /> {t('dashboard', 'fastProgress')}
            </h3>

            {!hasAnyScore ? (
              <div className="text-center py-4">
                <p className="text-sm text-gray-400 mb-3">Pas encore de QCM passés.</p>
                <Link to="/qcm" className="inline-flex items-center gap-1.5 text-xs font-semibold bg-sky-500 text-white px-3 py-1.5 rounded-lg hover:bg-sky-600 transition-colors">
                  <PenSquare size={12} /> Commencer un QCM
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {progressSubjects.map((s, i) => (
                  <div key={s.id}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
                        {s.icon} {s.nom}
                      </span>
                      {s.pct !== null ? (
                        <span className={`font-bold ${s.pct >= 70 ? 'text-green-500' : s.pct >= 50 ? 'text-amber-500' : 'text-red-400'}`}>
                          {s.pct}%
                        </span>
                      ) : (
                        <span className="text-gray-300 dark:text-gray-600">—</span>
                      )}
                    </div>
                    <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      {s.pct !== null && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${s.pct}%` }}
                          transition={{ delay: 0.7 + i * 0.1, duration: 0.8 }}
                          className={`h-full rounded-full ${s.pct >= 70 ? 'bg-green-400' : s.pct >= 50 ? 'bg-amber-400' : 'bg-red-400'}`}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <Link to="/progression" className="flex items-center justify-center gap-1 mt-4 text-xs text-sky-600 dark:text-sky-400 hover:underline">
              <TrendingUp size={12} /> {t('dashboard', 'seeDetail')}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
