import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, PenSquare, Clock, ChevronRight, SlidersHorizontal } from 'lucide-react'
import { QUIZZES, DIFFICULTE_COLORS } from '../data/quizzes'
import { SUBJECTS } from '../data/subjects'
import BackButton from '../components/BackButton'

const DIFFS = ['tous', 'facile', 'moyen', 'difficile']

const DIFF_ICONS = { facile: '🟢', moyen: '🟡', difficile: '🔴' }

export default function QCMList() {
  const [subjectFilter, setSubjectFilter] = useState('tous')
  const [diffFilter, setDiffFilter] = useState('tous')
  const [search, setSearch] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = QUIZZES.filter(q => {
    const matchSubject = subjectFilter === 'tous' || q.subjectId === subjectFilter
    const matchDiff = diffFilter === 'tous' || q.difficulte === diffFilter
    const matchSearch = q.titre.toLowerCase().includes(search.toLowerCase())
    return matchSubject && matchDiff && matchSearch
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <BackButton to="/dashboard" label="Tableau de bord" />
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-7">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-9 h-9 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
            <PenSquare size={19} className="text-violet-600 dark:text-violet-400" />
          </div>
          <h1 className="text-2xl font-black text-gray-900 dark:text-white">QCM</h1>
        </div>
        <p className="text-gray-500 dark:text-gray-400 ml-12">{QUIZZES.length} exercices disponibles sur toutes les matières.</p>
      </motion.div>

      {/* Search + filter toggle */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mb-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Chercher un QCM..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${showFilters ? 'bg-violet-500 text-white border-violet-500' : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-violet-300'}`}
          >
            <SlidersHorizontal size={15} />
            Filtres
          </button>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-3 space-y-3">
                {/* Matière */}
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-2">Matière</p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSubjectFilter('tous')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${subjectFilter === 'tous' ? 'bg-violet-500 text-white' : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-violet-300'}`}
                    >
                      Toutes
                    </button>
                    {SUBJECTS.map(s => (
                      <button
                        key={s.id}
                        onClick={() => setSubjectFilter(s.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 transition-all ${subjectFilter === s.id ? 'bg-violet-500 text-white' : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-violet-300'}`}
                      >
                        {s.icon} {s.nom}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Difficulté */}
                <div>
                  <p className="text-xs text-gray-400 font-medium mb-2">Difficulté</p>
                  <div className="flex gap-2">
                    {DIFFS.map(d => (
                      <button
                        key={d}
                        onClick={() => setDiffFilter(d)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${diffFilter === d ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-400'}`}
                      >
                        {d === 'tous' ? 'Toutes' : <>{DIFF_ICONS[d]} {d}</>}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <p className="text-xs text-gray-400 mb-4">{filtered.length} QCM trouvé{filtered.length > 1 ? 's' : ''}</p>

      {/* Grid */}
      <AnimatePresence mode="popLayout">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((q, i) => {
            const subject = SUBJECTS.find(s => s.id === q.subjectId)
            return (
              <motion.div
                key={q.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ y: -5 }}
              >
                <Link
                  to={`/qcm/${q.id}`}
                  className="flex flex-col bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 h-full"
                >
                  <div className={`h-1.5 bg-gradient-to-r ${subject?.couleur}`} />
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{subject?.icon}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{subject?.nom}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-lg font-semibold flex-shrink-0 ${DIFFICULTE_COLORS[q.difficulte]}`}>
                        {DIFF_ICONS[q.difficulte]} {q.difficulte}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-4 leading-snug flex-1">{q.titre}</h3>
                    <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-3 mt-auto">
                      <span className="flex items-center gap-1"><PenSquare size={11} /> {q.questions.length} questions</span>
                      <span className="flex items-center gap-1"><Clock size={11} /> {q.duree} min</span>
                      <span className="flex items-center gap-1 text-violet-600 dark:text-violet-400 font-medium">
                        Commencer <ChevronRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
          <Search size={40} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
          <p className="text-gray-500 dark:text-gray-400 mb-3">Aucun QCM trouvé</p>
          <button
            onClick={() => { setSubjectFilter('tous'); setDiffFilter('tous'); setSearch('') }}
            className="text-violet-500 hover:underline text-sm"
          >
            Réinitialiser les filtres
          </button>
        </motion.div>
      )}
    </div>
  )
}
