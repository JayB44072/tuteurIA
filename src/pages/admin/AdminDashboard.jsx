import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Users, ShieldCheck, BarChart2, BookOpen, PenSquare,
  Search, Ban, Trash2, Crown, RefreshCw, X, CheckCircle,
  AlertTriangle, Eye, TrendingUp, UserCheck, UserX, ChevronDown,
} from 'lucide-react'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../context/AuthContext'

// ── Helpers ────────────────────────────────────────────────────────────────────
const fmtDate = (d) => d ? new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'
const fmtNum  = (n) => n !== null && n !== undefined ? Number(n).toLocaleString('fr-FR') : '—'

// ── Toast ──────────────────────────────────────────────────────────────────────
function Toast({ msg, type, onClose }) {
  useEffect(() => { const t = setTimeout(onClose, 3500); return () => clearTimeout(t) }, [onClose])
  const colors = {
    success: 'bg-emerald-500',
    error:   'bg-red-500',
    info:    'bg-sky-500',
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] flex items-center gap-3 px-5 py-3 rounded-2xl text-white text-sm font-medium shadow-xl ${colors[type]}`}
    >
      {type === 'success' && <CheckCircle size={16} />}
      {type === 'error'   && <AlertTriangle size={16} />}
      {msg}
      <button onClick={onClose}><X size={14} /></button>
    </motion.div>
  )
}

// ── Modal confirmation ─────────────────────────────────────────────────────────
function ConfirmModal({ title, message, onConfirm, onCancel, danger = true }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-sm shadow-2xl border border-gray-200 dark:border-gray-700"
      >
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto ${danger ? 'bg-red-100 dark:bg-red-900/30' : 'bg-sky-100 dark:bg-sky-900/30'}`}>
          <AlertTriangle size={22} className={danger ? 'text-red-500' : 'text-sky-500'} />
        </div>
        <h3 className="text-base font-bold text-gray-900 dark:text-white text-center mb-2">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">{message}</p>
        <div className="flex gap-3">
          <button onClick={onCancel} className="flex-1 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Annuler
          </button>
          <button onClick={onConfirm} className={`flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-colors ${danger ? 'bg-red-500 hover:bg-red-600' : 'bg-sky-500 hover:bg-sky-600'}`}>
            Confirmer
          </button>
        </div>
      </motion.div>
    </div>
  )
}

// ── Modal bloc ─────────────────────────────────────────────────────────────────
function BlockModal({ user, onConfirm, onCancel }) {
  const [reason, setReason] = useState('')
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-sm shadow-2xl border border-gray-200 dark:border-gray-700"
      >
        <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4 mx-auto">
          <Ban size={22} className="text-orange-500" />
        </div>
        <h3 className="text-base font-bold text-gray-900 dark:text-white text-center mb-1">Bloquer le compte</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-4">
          {user?.full_name || user?.email}
        </p>
        <textarea
          value={reason}
          onChange={e => setReason(e.target.value)}
          placeholder="Raison du blocage (optionnel)..."
          rows={3}
          className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4"
        />
        <div className="flex gap-3">
          <button onClick={onCancel} className="flex-1 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Annuler
          </button>
          <button onClick={() => onConfirm(reason)} className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-colors">
            Bloquer
          </button>
        </div>
      </motion.div>
    </div>
  )
}

// ── Carte stat ─────────────────────────────────────────────────────────────────
function StatCard({ icon: Icon, label, value, color, sub }) {
  const colors = {
    blue:   'from-sky-500 to-blue-600',
    violet: 'from-violet-500 to-purple-600',
    green:  'from-emerald-500 to-teal-600',
    orange: 'from-orange-500 to-amber-600',
    red:    'from-red-500 to-rose-600',
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-200 dark:border-gray-800 shadow-sm"
    >
      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colors[color]} flex items-center justify-center mb-3 shadow-md`}>
        <Icon size={20} className="text-white" />
      </div>
      <p className="text-2xl font-black text-gray-900 dark:text-white">{value}</p>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
      {sub && <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{sub}</p>}
    </motion.div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
// COMPOSANT PRINCIPAL
// ══════════════════════════════════════════════════════════════════════════════
export default function AdminDashboard() {
  const { user: currentUser } = useAuth()

  const [tab, setTab]         = useState('users')  // 'users' | 'stats' | 'content'
  const [users, setUsers]     = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch]   = useState('')
  const [filter, setFilter]   = useState('all')    // 'all' | 'active' | 'blocked' | 'admin'
  const [toast, setToast]     = useState(null)
  const [confirm, setConfirm] = useState(null)
  const [blockTarget, setBlockTarget] = useState(null)
  const [stats, setStats]     = useState({ total: 0, active: 0, blocked: 0, admins: 0, quizzes: 0, avgScore: 0 })
  const [expandedId, setExpandedId] = useState(null)

  // ── Fetch utilisateurs ───────────────────────────────────────────────────────
  const fetchUsers = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('profiles')
      .select(`
        id, email, full_name, level, is_admin, is_blocked,
        blocked_at, block_reason, created_at,
        quiz_results(id, score, completed_at)
      `)
      .order('created_at', { ascending: false })

    if (error) {
      setToast({ msg: 'Erreur lors du chargement des utilisateurs', type: 'error' })
      setLoading(false)
      return
    }

    const enriched = (data || []).map(u => ({
      ...u,
      totalQuizzes: u.quiz_results?.length || 0,
      avgScore: u.quiz_results?.length
        ? Math.round(u.quiz_results.reduce((a, q) => a + q.score, 0) / u.quiz_results.length)
        : null,
      lastActivity: u.quiz_results?.length
        ? u.quiz_results.sort((a, b) => new Date(b.completed_at) - new Date(a.completed_at))[0]?.completed_at
        : null,
    }))

    setUsers(enriched)
    setStats({
      total:    enriched.length,
      active:   enriched.filter(u => !u.is_blocked).length,
      blocked:  enriched.filter(u => u.is_blocked).length,
      admins:   enriched.filter(u => u.is_admin).length,
      quizzes:  enriched.reduce((a, u) => a + u.totalQuizzes, 0),
      avgScore: enriched.filter(u => u.avgScore !== null).length
        ? Math.round(enriched.filter(u => u.avgScore !== null).reduce((a, u) => a + u.avgScore, 0) / enriched.filter(u => u.avgScore !== null).length)
        : 0,
    })
    setLoading(false)
  }, [])

  useEffect(() => { fetchUsers() }, [fetchUsers])

  // ── Actions ─────────────────────────────────────────────────────────────────
  const blockUser = async (userId, reason) => {
    const { error } = await supabase
      .from('profiles')
      .update({ is_blocked: true, blocked_at: new Date().toISOString(), block_reason: reason || null })
      .eq('id', userId)
    if (error) return setToast({ msg: 'Erreur lors du blocage', type: 'error' })
    setToast({ msg: 'Compte bloqué avec succès', type: 'success' })
    setBlockTarget(null)
    fetchUsers()
  }

  const unblockUser = async (userId) => {
    const { error } = await supabase
      .from('profiles')
      .update({ is_blocked: false, blocked_at: null, block_reason: null })
      .eq('id', userId)
    if (error) return setToast({ msg: 'Erreur lors du déblocage', type: 'error' })
    setToast({ msg: 'Compte débloqué avec succès', type: 'success' })
    fetchUsers()
  }

  const toggleAdmin = async (userId, currentIsAdmin) => {
    if (userId === currentUser?.id) return setToast({ msg: 'Vous ne pouvez pas modifier votre propre rôle', type: 'error' })
    const { error } = await supabase
      .from('profiles')
      .update({ is_admin: !currentIsAdmin })
      .eq('id', userId)
    if (error) return setToast({ msg: 'Erreur lors de la modification du rôle', type: 'error' })
    setToast({ msg: currentIsAdmin ? 'Droits admin retirés' : 'Droits admin accordés', type: 'success' })
    fetchUsers()
  }

  const deleteUser = async (userId) => {
    if (userId === currentUser?.id) return setToast({ msg: 'Vous ne pouvez pas supprimer votre propre compte', type: 'error' })
    const { error } = await supabase
      .from('profiles')
      .delete()
      .eq('id', userId)
    if (error) return setToast({ msg: 'Erreur lors de la suppression', type: 'error' })
    setToast({ msg: 'Utilisateur supprimé', type: 'success' })
    setConfirm(null)
    fetchUsers()
  }

  // ── Filtrage ─────────────────────────────────────────────────────────────────
  const filtered = users.filter(u => {
    const matchSearch = !search || [u.email, u.full_name, u.level].some(f => f?.toLowerCase().includes(search.toLowerCase()))
    const matchFilter = filter === 'all'
      || (filter === 'active'  && !u.is_blocked && !u.is_admin)
      || (filter === 'blocked' && u.is_blocked)
      || (filter === 'admin'   && u.is_admin)
    return matchSearch && matchFilter
  })

  // ── Badges ───────────────────────────────────────────────────────────────────
  const Badge = ({ u }) => {
    if (u.is_admin)   return <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400">Admin</span>
    if (u.is_blocked) return <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">Bloqué</span>
    return <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">Actif</span>
  }

  // ══════════════════════════════════════════════════════════════════════════════
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* ── En-tête ──────────────────────────────────────────────────────────── */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center shadow-lg">
              <ShieldCheck size={20} className="text-white" />
            </div>
            <h1 className="text-2xl font-black text-gray-900 dark:text-white">Tableau de bord Admin</h1>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 ml-13">
            Gestion de la plateforme TuteurIA — {stats.total} utilisateur{stats.total > 1 ? 's' : ''}
          </p>
        </div>
        <button
          onClick={fetchUsers}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
          Actualiser
        </button>
      </motion.div>

      {/* ── Statistiques ─────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        <StatCard icon={Users}     label="Total"       value={fmtNum(stats.total)}    color="blue"   />
        <StatCard icon={UserCheck} label="Actifs"      value={fmtNum(stats.active)}   color="green"  />
        <StatCard icon={UserX}     label="Bloqués"     value={fmtNum(stats.blocked)}  color="red"    />
        <StatCard icon={Crown}     label="Admins"      value={fmtNum(stats.admins)}   color="violet" />
        <StatCard icon={PenSquare} label="QCM passés"  value={fmtNum(stats.quizzes)}  color="orange" />
        <StatCard icon={TrendingUp}label="Score moy."  value={stats.avgScore ? `${stats.avgScore}%` : '—'} color="blue" />
      </div>

      {/* ── Onglets ──────────────────────────────────────────────────────────── */}
      <div className="flex gap-1 mb-6 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl w-fit">
        {[
          { key: 'users',   label: 'Utilisateurs', icon: Users },
          { key: 'stats',   label: 'Statistiques', icon: BarChart2 },
          { key: 'content', label: 'Contenus',     icon: BookOpen },
        ].map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              tab === key
                ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </div>

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* ONGLET UTILISATEURS                                                   */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {tab === 'users' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

          {/* Barre de recherche + filtres */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Rechercher par nom, email, niveau..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <X size={14} />
                </button>
              )}
            </div>
            <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
              {[
                { key: 'all',     label: 'Tous' },
                { key: 'active',  label: 'Actifs' },
                { key: 'blocked', label: 'Bloqués' },
                { key: 'admin',   label: 'Admins' },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    filter === key
                      ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Résultat */}
          <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
            {filtered.length} utilisateur{filtered.length > 1 ? 's' : ''} affiché{filtered.length > 1 ? 's' : ''}
          </p>

          {/* Liste */}
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <Users size={40} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm">Aucun utilisateur trouvé</p>
            </div>
          ) : (
            <div className="space-y-2">
              {filtered.map((u, i) => (
                <motion.div
                  key={u.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className={`bg-white dark:bg-gray-900 border rounded-2xl overflow-hidden transition-all ${
                    u.is_blocked
                      ? 'border-red-200 dark:border-red-900/40'
                      : 'border-gray-200 dark:border-gray-800'
                  }`}
                >
                  {/* Ligne principale */}
                  <div className="flex items-center gap-3 p-4">
                    {/* Avatar */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${
                      u.is_admin ? 'bg-gradient-to-br from-violet-500 to-purple-700'
                      : u.is_blocked ? 'bg-gradient-to-br from-red-400 to-rose-600'
                      : 'bg-gradient-to-br from-sky-500 to-blue-600'
                    }`}>
                      {(u.full_name || u.email || 'U')[0].toUpperCase()}
                    </div>

                    {/* Infos */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                          {u.full_name || '(sans nom)'}
                        </span>
                        <Badge u={u} />
                        {u.id === currentUser?.id && (
                          <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400">Vous</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 dark:text-gray-500 truncate">{u.email}</p>
                      {u.is_blocked && u.block_reason && (
                        <p className="text-xs text-red-400 mt-0.5">Raison : {u.block_reason}</p>
                      )}
                    </div>

                    {/* Stats mini */}
                    <div className="hidden sm:flex items-center gap-4 text-xs text-gray-400 flex-shrink-0">
                      <div className="text-center">
                        <p className="font-bold text-gray-700 dark:text-gray-300">{u.totalQuizzes}</p>
                        <p>QCM</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-gray-700 dark:text-gray-300">{u.avgScore !== null ? `${u.avgScore}%` : '—'}</p>
                        <p>Score</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-gray-700 dark:text-gray-300">{fmtDate(u.created_at)}</p>
                        <p>Inscrit</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {/* Voir détail */}
                      <button
                        onClick={() => setExpandedId(expandedId === u.id ? null : u.id)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        title="Voir détail"
                      >
                        <ChevronDown size={15} className={`transition-transform ${expandedId === u.id ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Bloquer / Débloquer */}
                      {!u.is_admin && u.id !== currentUser?.id && (
                        u.is_blocked ? (
                          <button
                            onClick={() => unblockUser(u.id)}
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                            title="Débloquer"
                          >
                            <CheckCircle size={15} />
                          </button>
                        ) : (
                          <button
                            onClick={() => setBlockTarget(u)}
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                            title="Bloquer"
                          >
                            <Ban size={15} />
                          </button>
                        )
                      )}

                      {/* Toggle admin */}
                      {u.id !== currentUser?.id && (
                        <button
                          onClick={() => setConfirm({
                            title: u.is_admin ? 'Retirer les droits admin ?' : 'Accorder les droits admin ?',
                            message: `Cette action modifiera les permissions de ${u.full_name || u.email}.`,
                            danger: false,
                            onConfirm: () => { toggleAdmin(u.id, u.is_admin); setConfirm(null) },
                          })}
                          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                            u.is_admin
                              ? 'text-violet-500 hover:bg-violet-50 dark:hover:bg-violet-900/20'
                              : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                          }`}
                          title={u.is_admin ? 'Retirer admin' : 'Rendre admin'}
                        >
                          <Crown size={15} />
                        </button>
                      )}

                      {/* Supprimer */}
                      {u.id !== currentUser?.id && (
                        <button
                          onClick={() => setConfirm({
                            title: 'Supprimer ce compte ?',
                            message: `Le compte de ${u.full_name || u.email} et toutes ses données seront définitivement supprimés.`,
                            danger: true,
                            onConfirm: () => deleteUser(u.id),
                          })}
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                          title="Supprimer"
                        >
                          <Trash2 size={15} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Détail expandé */}
                  <AnimatePresence>
                    {expandedId === u.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-gray-100 dark:border-gray-800"
                      >
                        <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-gray-50 dark:bg-gray-900/50">
                          {[
                            { label: 'Niveau', value: u.level || '—' },
                            { label: 'Inscrit le', value: fmtDate(u.created_at) },
                            { label: 'Dernière activité', value: fmtDate(u.lastActivity) },
                            { label: 'QCM / Score moy.', value: `${u.totalQuizzes} / ${u.avgScore !== null ? u.avgScore + '%' : '—'}` },
                          ].map(({ label, value }) => (
                            <div key={label} className="bg-white dark:bg-gray-900 rounded-xl p-3 border border-gray-200 dark:border-gray-800">
                              <p className="text-[10px] text-gray-400 mb-0.5">{label}</p>
                              <p className="text-sm font-semibold text-gray-900 dark:text-white">{value}</p>
                            </div>
                          ))}
                          {u.is_blocked && (
                            <div className="col-span-2 sm:col-span-4 bg-red-50 dark:bg-red-900/20 rounded-xl p-3 border border-red-200 dark:border-red-900/40">
                              <p className="text-[10px] text-red-400 mb-0.5">Bloqué le {fmtDate(u.blocked_at)}</p>
                              <p className="text-sm text-red-600 dark:text-red-400">{u.block_reason || 'Aucune raison précisée'}</p>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* ONGLET STATISTIQUES                                                   */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {tab === 'stats' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          {/* Top utilisateurs */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center gap-2">
              <TrendingUp size={16} className="text-sky-500" />
              <h3 className="font-bold text-gray-900 dark:text-white">Top 10 — Meilleurs scores</h3>
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {[...users]
                .filter(u => u.avgScore !== null)
                .sort((a, b) => (b.avgScore - a.avgScore) || (b.totalQuizzes - a.totalQuizzes))
                .slice(0, 10)
                .map((u, i) => (
                  <div key={u.id} className="flex items-center gap-3 px-5 py-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                      i === 0 ? 'bg-amber-400 text-white'
                      : i === 1 ? 'bg-gray-300 text-gray-700'
                      : i === 2 ? 'bg-orange-400 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                    }`}>{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{u.full_name || u.email}</p>
                      <p className="text-xs text-gray-400">{u.totalQuizzes} QCM passés</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-100 dark:bg-gray-800 rounded-full h-1.5">
                        <div className="bg-gradient-to-r from-sky-500 to-violet-500 h-1.5 rounded-full" style={{ width: `${u.avgScore}%` }} />
                      </div>
                      <span className="text-sm font-bold text-gray-900 dark:text-white w-10 text-right">{u.avgScore}%</span>
                    </div>
                  </div>
                ))}
              {users.filter(u => u.avgScore !== null).length === 0 && (
                <p className="text-center py-10 text-sm text-gray-400">Aucun QCM passé pour l'instant</p>
              )}
            </div>
          </div>

          {/* Activité par mois */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Users size={16} className="text-violet-500" />
              <h3 className="font-bold text-gray-900 dark:text-white">Inscriptions par mois</h3>
            </div>
            {(() => {
              const byMonth = {}
              users.forEach(u => {
                if (!u.created_at) return
                const key = new Date(u.created_at).toLocaleDateString('fr-FR', { month: 'short', year: '2-digit' })
                byMonth[key] = (byMonth[key] || 0) + 1
              })
              const months = Object.entries(byMonth).slice(-6)
              const max = Math.max(...months.map(([, v]) => v), 1)
              return months.length === 0 ? (
                <p className="text-sm text-gray-400 text-center py-6">Aucune donnée</p>
              ) : (
                <div className="flex items-end gap-3 h-28">
                  {months.map(([month, count]) => (
                    <div key={month} className="flex-1 flex flex-col items-center gap-1">
                      <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{count}</span>
                      <div className="w-full rounded-t-lg bg-gradient-to-t from-sky-500 to-violet-500 transition-all" style={{ height: `${(count / max) * 80}px` }} />
                      <span className="text-[10px] text-gray-400">{month}</span>
                    </div>
                  ))}
                </div>
              )
            })()}
          </div>
        </motion.div>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {/* ONGLET CONTENUS                                                       */}
      {/* ═══════════════════════════════════════════════════════════════════════ */}
      {tab === 'content' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { icon: BookOpen, label: 'Matières disponibles', value: '12', color: 'from-sky-500 to-blue-600',    sub: 'Bac & GCE A-Level' },
              { icon: Eye,      label: 'Leçons au catalogue',  value: '50+', color: 'from-emerald-500 to-teal-600', sub: 'Contenu textbook' },
              { icon: PenSquare,label: 'QCM au catalogue',     value: '200+', color: 'from-orange-500 to-amber-600', sub: 'Questions interactives' },
            ].map(({ icon: Icon, label, value, color, sub }) => (
              <div key={label} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-3 shadow`}>
                  <Icon size={20} className="text-white" />
                </div>
                <p className="text-2xl font-black text-gray-900 dark:text-white">{value}</p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{sub}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/40 rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-amber-800 dark:text-amber-400">Contenus statiques</p>
                <p className="text-sm text-amber-700 dark:text-amber-500 mt-1">
                  Les matières, leçons et QCM sont actuellement définis dans les fichiers <code className="bg-amber-100 dark:bg-amber-900/40 px-1 rounded">src/data/subjects.js</code> et <code className="bg-amber-100 dark:bg-amber-900/40 px-1 rounded">src/data/quizzes.js</code>. Pour les modifier, éditez ces fichiers directement dans le code source.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ── Modals ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {confirm && (
          <ConfirmModal
            title={confirm.title}
            message={confirm.message}
            danger={confirm.danger}
            onConfirm={confirm.onConfirm}
            onCancel={() => setConfirm(null)}
          />
        )}
        {blockTarget && (
          <BlockModal
            user={blockTarget}
            onConfirm={(reason) => blockUser(blockTarget.id, reason)}
            onCancel={() => setBlockTarget(null)}
          />
        )}
        {toast && (
          <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}
