import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft, BookOpen, PenSquare, ChevronDown, ChevronRight,
  Clock, FileText, CheckCircle, BookMarked, GraduationCap
} from 'lucide-react'
import { getSubject } from '../data/subjects'
import { getQuizzesBySubject, DIFFICULTE_COLORS } from '../data/quizzes'
import CourseReader from '../components/CourseReader'
import { useLang } from '../context/LangContext'

const DIFF_ICONS = { facile: '🟢', moyen: '🟡', difficile: '🔴' }

export default function SubjectDetail() {
  const { id } = useParams()
  const { t } = useLang()
  const subject = getSubject(id)
  const quizzes = getQuizzesBySubject(id)
  const [openChapter, setOpenChapter] = useState(null)
  const [openLesson, setOpenLesson] = useState(null)
  const [tab, setTab] = useState('cours')

  if (!subject) return (
    <div className="flex items-center justify-center min-h-64 px-4">
      <div className="text-center">
        <BookOpen size={48} className="mx-auto text-gray-300 dark:text-gray-700 mb-4" />
        <p className="text-gray-500 dark:text-gray-400 mb-3">{t('common', 'notFound')}</p>
        <Link to="/matieres" className="inline-flex items-center gap-2 text-sky-500 hover:underline text-sm">
          <ArrowLeft size={14} /> {t('subjectDetail', 'back')}
        </Link>
      </div>
    </div>
  )

  const totalLessons = subject.chapitres.reduce((a, c) => a + c.lecons.length, 0)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">

      {/* ── Back button ─────────────────────────────────────────── */}
      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-5">
        <Link
          to="/matieres"
          className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          {t('subjectDetail', 'back')}
        </Link>
      </motion.div>

      {/* ── Hero banner ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-gradient-to-br ${subject.couleur} rounded-2xl p-6 mb-6 text-white relative overflow-hidden`}
      >
        {/* decorative blobs */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2" />

        <div className="relative flex items-start gap-4">
          <span className="text-5xl drop-shadow-lg">{subject.icon}</span>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-1.5 mb-2">
              {subject.niveaux.map(n => (
                <span key={n} className="bg-white/25 backdrop-blur-sm text-white text-xs px-2.5 py-0.5 rounded-full font-semibold">
                  {n}
                </span>
              ))}
            </div>
            <h1 className="text-2xl sm:text-3xl font-black leading-tight mb-1">{subject.nom}</h1>
            <p className="text-white/80 text-sm leading-relaxed">{subject.description}</p>
          </div>
        </div>

        <div className="relative flex flex-wrap gap-4 mt-5 pt-4 border-t border-white/20">
          <div className="flex items-center gap-1.5 text-sm text-white/80">
            <BookOpen size={14} /> <strong className="text-white">{subject.chapitres.length}</strong> {t('subjectDetail', 'chapitres')}
          </div>
          <div className="flex items-center gap-1.5 text-sm text-white/80">
            <FileText size={14} /> <strong className="text-white">{totalLessons}</strong> {t('subjectDetail', 'lecons')}
          </div>
          <div className="flex items-center gap-1.5 text-sm text-white/80">
            <PenSquare size={14} /> <strong className="text-white">{quizzes.length}</strong> QCM
          </div>
        </div>
      </motion.div>

      {/* ── Tabs ────────────────────────────────────────────────── */}
      <div className="flex bg-gray-100 dark:bg-gray-900 rounded-xl p-1 mb-6 gap-1">
        {[
          { key: 'cours', label: t('subjectDetail', 'tabCours'), Icon: BookOpen },
          { key: 'qcm',   label: t('subjectDetail', 'tabQCM'),  Icon: PenSquare },
        ].map(({ key, label, Icon }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              tab === key
                ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            <Icon size={15} /> {label}
          </button>
        ))}
      </div>

      {/* ══ COURS tab ═══════════════════════════════════════════ */}
      <AnimatePresence mode="wait">
        {tab === 'cours' && (
          <motion.div key="cours" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="space-y-3">
              {subject.chapitres.map((chap, ci) => (
                <motion.div
                  key={chap.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: ci * 0.04 }}
                  className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
                >
                  {/* Chapter header */}
                  <button
                    onClick={() => {
                      setOpenChapter(openChapter === chap.id ? null : chap.id)
                      setOpenLesson(null)
                    }}
                    className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${subject.couleur} flex items-center justify-center text-white font-black text-sm flex-shrink-0`}>
                      {ci + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400 font-medium mb-0.5">
                        {t('subjectDetail', 'chapter')} {ci + 1}
                      </p>
                      <h3 className="font-bold text-gray-900 dark:text-white leading-snug truncate">{chap.titre}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">{chap.lecons.length} {t('subjectDetail', 'lecons')}</p>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${openChapter === chap.id ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Lessons list */}
                  <AnimatePresence>
                    {openChapter === chap.id && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-gray-100 dark:border-gray-800 divide-y divide-gray-100 dark:divide-gray-800">
                          {chap.lecons.map((lecon, li) => (
                            <div key={lecon.id}>
                              {/* Lesson row */}
                              <button
                                onClick={() => setOpenLesson(openLesson === lecon.id ? null : lecon.id)}
                                className="w-full flex items-center gap-3 px-5 py-3.5 text-left hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors"
                              >
                                <BookMarked size={14} className="text-gray-400 flex-shrink-0" />
                                <span className="flex-1 text-sm text-gray-700 dark:text-gray-300 font-medium">{lecon.titre}</span>
                                {lecon.duree && (
                                  <span className="flex items-center gap-1 text-xs text-gray-400 flex-shrink-0">
                                    <Clock size={11} /> {lecon.duree} {t('subjectDetail', 'duration')}
                                  </span>
                                )}
                                <ChevronDown
                                  size={14}
                                  className={`text-gray-400 flex-shrink-0 transition-transform ${openLesson === lecon.id ? 'rotate-180' : ''}`}
                                />
                              </button>

                              {/* Lesson content — textbook style */}
                              <AnimatePresence>
                                {openLesson === lecon.id && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-6 pb-6 pt-2 bg-gray-50/60 dark:bg-gray-950/30">
                                      {/* Book-like top border */}
                                      <div className={`h-0.5 bg-gradient-to-r ${subject.couleur} rounded-full mb-5`} />
                                      <CourseReader content={lecon.contenu} title={lecon.titre} />
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ══ QCM tab ═════════════════════════════════════════ */}
        {tab === 'qcm' && (
          <motion.div key="qcm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {quizzes.length === 0 ? (
              <div className="text-center py-16">
                <PenSquare size={40} className="mx-auto text-gray-300 dark:text-gray-700 mb-4" />
                <p className="text-gray-500 dark:text-gray-400">{t('subjectDetail', 'noQCM')}</p>
              </div>
            ) : (
              <div className="space-y-3">
                {quizzes.map((quiz, qi) => (
                  <motion.div
                    key={quiz.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: qi * 0.05 }}
                  >
                    <Link
                      to={`/qcm/${quiz.id}`}
                      className="flex items-center gap-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-lg hover:shadow-violet-500/10 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-950/30 flex items-center justify-center flex-shrink-0">
                        <PenSquare size={16} className="text-violet-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-900 dark:text-white leading-snug mb-1 truncate">{quiz.titre}</h4>
                        <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                          <span className="flex items-center gap-1"><GraduationCap size={11} /> {quiz.questions.length} {t('subjectDetail', 'questions')}</span>
                          <span className="flex items-center gap-1"><Clock size={11} /> {quiz.duree} {t('subjectDetail', 'duration')}</span>
                          <span className={`px-2 py-0.5 rounded-full font-semibold ${DIFFICULTE_COLORS[quiz.difficulte]}`}>
                            {DIFF_ICONS[quiz.difficulte]} {quiz.difficulte}
                          </span>
                        </div>
                      </div>
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-violet-600 dark:text-violet-400 flex-shrink-0 group-hover:gap-2.5 transition-all">
                        {t('subjectDetail', 'start')} <ChevronRight size={15} />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
