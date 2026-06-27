import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, BookOpen, PenSquare, FileText, ChevronRight } from 'lucide-react'
import { SUBJECTS } from '../data/subjects'
import { getQuizzesBySubject } from '../data/quizzes'

const FILTERS = [
  { key: 'tous', label: 'Toutes' },
  { key: 'Bac', label: 'Baccalauréat' },
  { key: 'GCE', label: 'GCE A-Level' },
]

export default function Subjects() {
  const [filter, setFilter] = useState('tous')
  const [search, setSearch] = useState('')

  const filtered = SUBJECTS.filter(s => {
    const matchFilter = filter === 'tous' || s.niveaux.includes(filter)
    const matchSearch = s.nom.toLowerCase().includes(search.toLowerCase())
    return matchFilter && matchSearch
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-7">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-9 h-9 rounded-xl bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
            <BookOpen size={19} className="text-sky-600 dark:text-sky-400" />
          </div>
          <h1 className="text-2xl font-black text-gray-900 dark:text-white">Toutes les matières</h1>
        </div>
        <p className="text-gray-500 dark:text-gray-400 ml-12">Cours, chapitres et QCM pour chaque matière du programme.</p>
      </motion.div>

      {/* Search & Filters */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-col sm:flex-row gap-3 mb-7">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Chercher une matière..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 transition-all"
          />
        </div>
        <div className="flex gap-2">
          {FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                filter === f.key
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-sky-300 dark:hover:border-sky-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </motion.div>

      <p className="text-xs text-gray-400 mb-4">{filtered.length} matière{filtered.length > 1 ? 's' : ''}</p>

      {/* Grid */}
      <AnimatePresence mode="popLayout">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((s, i) => {
            const quizCount = getQuizzesBySubject(s.id).length
            const lessonCount = s.chapitres.reduce((acc, c) => acc + c.lecons.length, 0)
            return (
              <motion.div
                key={s.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ y: -5 }}
              >
                <Link
                  to={`/matieres/${s.id}`}
                  className="block bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-sky-300 dark:hover:border-sky-700 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300"
                >
                  {/* Banner */}
                  <div className={`h-20 bg-gradient-to-br ${s.couleur} flex items-center justify-center relative overflow-hidden`}>
                    <motion.span
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
                      className="text-4xl"
                    >
                      {s.icon}
                    </motion.span>
                    <div className="absolute top-2 right-2 flex gap-1">
                      {s.niveaux.map(n => (
                        <span key={n} className="bg-white/25 backdrop-blur-sm text-white text-[10px] px-1.5 py-0.5 rounded font-semibold">
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{s.nom}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 line-clamp-2">{s.description}</p>

                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><BookOpen size={11} /> {s.chapitres.length} chap.</span>
                      <span className="flex items-center gap-1"><FileText size={11} /> {lessonCount} leçons</span>
                      <span className="flex items-center gap-1"><PenSquare size={11} /> {quizCount} QCM</span>
                    </div>

                    <div className="flex items-center justify-end mt-3">
                      <span className="flex items-center gap-1 text-xs text-sky-600 dark:text-sky-400 font-medium">
                        Voir <ChevronRight size={13} />
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
          <p className="text-gray-500 dark:text-gray-400">Aucune matière trouvée pour "{search}"</p>
        </motion.div>
      )}
    </div>
  )
}
