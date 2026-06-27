import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, X, CheckCircle, XCircle, Lightbulb, Clock, RotateCcw } from 'lucide-react'
import { getQuiz } from '../data/quizzes'
import { SUBJECTS } from '../data/subjects'
import { useLang } from '../context/LangContext'

const OPTION_LETTERS = ['A', 'B', 'C', 'D']

export default function QCMTake() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useLang()
  const quiz = getQuiz(id)

  const [step, setStep] = useState('start')
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const [showExplain, setShowExplain] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [startTime, setStartTime] = useState(null)

  useEffect(() => {
    if (step !== 'quiz') return
    setTimeLeft(quiz.duree * 60)
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { clearInterval(interval); setStep('results'); return 0 }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [step])

  if (!quiz) return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-gray-500 dark:text-gray-400 mb-3">{t('common', 'notFound')}</p>
        <Link to="/qcm" className="inline-flex items-center gap-2 text-sky-500 hover:underline text-sm">
          <ArrowLeft size={14} /> {t('qcmTake', 'back')}
        </Link>
      </div>
    </div>
  )

  const subject = SUBJECTS.find(s => s.id === quiz.subjectId)
  const question = quiz.questions[current]
  const score = answers.filter(a => a.correct).length

  const handleStart = () => {
    setStep('quiz'); setStartTime(Date.now())
    setCurrent(0); setAnswers([]); setSelected(null); setShowExplain(false)
  }

  const handleSelect = (idx) => {
    if (selected !== null) return
    setSelected(idx); setShowExplain(true)
    setAnswers(prev => [...prev, { questionId: question.id, selected: idx, correct: idx === question.correct }])
  }

  const handleNext = () => {
    if (current + 1 >= quiz.questions.length) { setStep('results') }
    else { setCurrent(c => c + 1); setSelected(null); setShowExplain(false) }
  }

  const formatTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
  const timeTaken = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0

  // ── START ────────────────────────────────────────────────────────
  if (step === 'start') return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-5">
        <Link
          to="/qcm"
          className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          {t('qcmTake', 'back')}
        </Link>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
        <div className={`rounded-3xl bg-gradient-to-br ${subject?.couleur || 'from-sky-500 to-sky-600'} p-8 text-white text-center mb-5 relative overflow-hidden`}>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -right-10 -top-10 w-40 h-40 rounded-full border-4 border-white/10"
          />
          <div className="text-5xl mb-3">{subject?.icon}</div>
          <h1 className="text-xl font-black mb-1">{quiz.titre}</h1>
          <p className="text-white/70 text-sm">{subject?.nom}</p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-3 gap-3 mb-6 text-center">
            {[
              { value: quiz.questions.length, label: t('qcmTake', 'questions') },
              { value: quiz.duree, label: t('qcmTake', 'minutes') },
              { value: quiz.difficulte === 'facile' ? '🟢' : quiz.difficulte === 'moyen' ? '🟡' : '🔴', label: t('qcmTake', 'level') }
            ].map(({ value, label }, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3">
                <div className="text-xl font-black text-gray-900 dark:text-white">{value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
              </div>
            ))}
          </div>

          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
            {[
              t('qcmTake', 'readCarefully'),
              t('qcmTake', 'oneAnswer'),
              t('qcmTake', 'explShown'),
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <button
            onClick={handleStart}
            className="w-full bg-gradient-to-r from-sky-500 to-violet-600 text-white font-bold py-4 rounded-2xl text-base hover:opacity-90 transition-all hover:scale-[1.02] shadow-lg"
          >
            {t('qcmTake', 'startBtn')}
          </button>
        </div>
      </motion.div>
    </div>
  )

  // ── RESULTS ──────────────────────────────────────────────────────
  if (step === 'results') {
    const pct = Math.round((score / quiz.questions.length) * 100)
    const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : pct >= 40 ? '💪' : '📚'
    const msg = pct >= 80 ? t('qcmTake', 'excellent') : pct >= 60 ? t('qcmTake', 'good2') : pct >= 40 ? t('qcmTake', 'keep') : t('qcmTake', 'study')
    const scoreGrad = pct >= 80 ? 'from-green-500 to-emerald-600' : pct >= 60 ? 'from-sky-500 to-blue-600' : pct >= 40 ? 'from-amber-500 to-orange-600' : 'from-red-500 to-rose-600'

    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center mb-7">
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.6 }} className="text-7xl mb-3">{emoji}</motion.div>
          <h1 className="text-2xl font-black text-gray-900 dark:text-white mb-1">{msg}</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{t('qcmTake', 'finishedIn')} {formatTime(timeTaken)}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className={`rounded-3xl p-7 text-center mb-5 bg-gradient-to-br ${scoreGrad} text-white`}
        >
          <div className="text-6xl font-black mb-1">{pct}%</div>
          <div className="text-white/80 text-base">{score} / {quiz.questions.length} {t('qcmTake', 'correct')}</div>
        </motion.div>

        {/* Review */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="space-y-3 mb-7">
          <h2 className="font-bold text-gray-900 dark:text-white">{t('qcmTake', 'revision')}</h2>
          {quiz.questions.map((q, i) => {
            const ans = answers[i]
            const ok = ans?.correct
            return (
              <div key={q.id} className={`rounded-2xl p-4 border ${ok ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800'}`}>
                <div className="flex items-start gap-3">
                  {ok
                    ? <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                    : <XCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                  }
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Q{i + 1}. {q.question}</p>
                    {!ok && (
                      <p className="text-xs text-red-600 dark:text-red-400 mb-0.5">
                        {t('qcmTake', 'yourChoice')} {OPTION_LETTERS[ans?.selected]} — {q.options[ans?.selected]}
                      </p>
                    )}
                    <p className="text-xs text-green-600 dark:text-green-400 mb-2">
                      {t('qcmTake', 'goodAnswer')} {OPTION_LETTERS[q.correct]} — {q.options[q.correct]}
                    </p>
                    <div className="flex items-start gap-1.5 bg-white/60 dark:bg-gray-800/50 rounded-lg px-3 py-2">
                      <Lightbulb size={11} className="text-amber-500 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-600 dark:text-gray-400">{q.explication}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleStart}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-violet-600 text-white font-bold py-3 rounded-2xl hover:opacity-90 transition-opacity"
          >
            <RotateCcw size={15} /> {t('qcmTake', 'retry')}
          </button>
          <Link
            to="/qcm"
            className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 font-medium py-3 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-sky-300 transition-colors"
          >
            <ArrowLeft size={15} /> {t('qcmTake', 'otherQCM')}
          </Link>
        </div>
      </div>
    )
  }

  // ── QUIZ ─────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Top bar */}
      <div className="sticky top-14 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate('/qcm')}
            className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex-shrink-0"
          >
            <X size={15} />
          </button>
          <div className="flex-1">
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
              <span>{t('qcmTake', 'question')} {current + 1} / {quiz.questions.length}</span>
              <span className="flex items-center gap-1"><CheckCircle size={11} className="text-green-500" /> {score}</span>
            </div>
            <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-sky-500 to-violet-500 rounded-full"
                animate={{ width: `${(current / quiz.questions.length) * 100}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
          <div className={`flex items-center gap-1 text-xs font-mono font-bold px-2.5 py-1 rounded-lg flex-shrink-0 ${
            timeLeft < 60
              ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
          }`}>
            <Clock size={11} /> {formatTime(timeLeft)}
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25 }}
          >
            {/* Question card */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 sm:p-6 border border-gray-200 dark:border-gray-800 mb-4 shadow-sm">
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                {t('qcmTake', 'question')} {current + 1}
              </span>
              <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mt-2 leading-relaxed">
                {question.question}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-2.5 mb-5">
              {question.options.map((opt, idx) => {
                let cls = 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-sky-300 dark:hover:border-sky-700 cursor-pointer'
                if (selected !== null) {
                  if (idx === question.correct) cls = 'bg-green-50 dark:bg-green-950/30 border-green-400 text-green-800 dark:text-green-300 cursor-default'
                  else if (idx === selected) cls = 'bg-red-50 dark:bg-red-950/30 border-red-400 text-red-700 dark:text-red-300 cursor-default'
                  else cls = 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 cursor-default opacity-60'
                }
                return (
                  <motion.button
                    key={idx}
                    whileHover={selected === null ? { scale: 1.01 } : {}}
                    whileTap={selected === null ? { scale: 0.99 } : {}}
                    onClick={() => handleSelect(idx)}
                    className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 text-left ${cls}`}
                  >
                    <span className="w-7 h-7 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {OPTION_LETTERS[idx]}
                    </span>
                    <span className="text-sm font-medium">{opt}</span>
                    {selected !== null && idx === question.correct && <CheckCircle size={16} className="ml-auto text-green-500 flex-shrink-0" />}
                    {selected !== null && idx === selected && idx !== question.correct && <XCircle size={16} className="ml-auto text-red-500 flex-shrink-0" />}
                  </motion.button>
                )
              })}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {showExplain && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`rounded-xl p-4 mb-4 border ${answers[answers.length - 1]?.correct ? 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800' : 'bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800'}`}
                >
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    {answers[answers.length - 1]?.correct
                      ? `✅ ${t('qcmTake', 'good')}`
                      : `❌ ${t('qcmTake', 'wrong')}`}
                  </p>
                  <div className="flex items-start gap-2">
                    <Lightbulb size={13} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">{question.explication}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {selected !== null && (
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={handleNext}
                className="w-full bg-gradient-to-r from-sky-500 to-violet-600 text-white font-bold py-3.5 rounded-2xl hover:opacity-90 transition-opacity shadow-lg"
              >
                {current + 1 >= quiz.questions.length
                  ? t('qcmTake', 'finish')
                  : t('qcmTake', 'next')}
              </motion.button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
