import { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, BookOpen, PenSquare, Bot, TrendingUp,
  User, LogOut, Menu, X, Moon, Sun, FileUp, ChevronDown, Globe, ShieldCheck
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import { useLang } from '../../context/LangContext'

const NAV_KEYS = [
  { to: '/dashboard',   labelKey: 'dashboard', shortKey: 'Home', Icon: LayoutDashboard },
  { to: '/matieres',    labelKey: 'subjects',   shortKey: null,   Icon: BookOpen },
  { to: '/qcm',         labelKey: 'qcm',        shortKey: null,   Icon: PenSquare },
  { to: '/doc-quiz',    labelKey: 'docQuiz',    shortKey: 'Doc',  Icon: FileUp },
  { to: '/ai-tuteur',   labelKey: 'aiTutor',    shortKey: 'IA',   Icon: Bot },
  { to: '/progression', labelKey: 'progress',   shortKey: null,   Icon: TrendingUp },
]

export default function Navbar() {
  const { user, logout, isAdmin } = useAuth()
  const { darkMode, toggleDarkMode } = useTheme()
  const { lang, toggleLang, t } = useLang()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const profileRef = useRef()

  useEffect(() => {
    const handler = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleLogout = async () => {
    setProfileOpen(false); setMobileOpen(false)
    await logout()
    navigate('/')
  }

  return (
    <>
      {/* ─── Top Bar ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link to={user ? '/dashboard' : '/'} className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center shadow">
              <Bot size={16} className="text-white" />
            </div>
            <span className="font-black text-gray-900 dark:text-white text-lg tracking-tight hidden sm:block">
              Tuteur<span className="gradient-text gradient-primary">IA</span>
            </span>
          </Link>

          {/* Desktop nav (logged in) */}
          {user && (
            <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
              {NAV_KEYS.map(({ to, labelKey, Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon size={15} className={isActive ? 'text-sky-500' : ''} />
                      {t('nav', labelKey)}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          )}

          {/* Right cluster */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {/* Lang toggle */}
            <button
              onClick={toggleLang}
              title={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-sky-400 hover:text-sky-600 dark:hover:text-sky-400 transition-all bg-white dark:bg-gray-900"
            >
              <Globe size={13} />
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>

            {/* Dark mode */}
            <button
              onClick={toggleDarkMode}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {user ? (
              <>
                {/* Profile dropdown (desktop) */}
                <div className="relative hidden lg:block" ref={profileRef}>
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center gap-2 pl-2 pr-2.5 py-1 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center text-white text-xs font-bold">
                      {(user.user_metadata?.full_name || user.email || 'U')[0].toUpperCase()}
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium max-w-[90px] truncate">
                      {user.user_metadata?.full_name?.split(' ')[0] || user.email?.split('@')[0]}
                    </span>
                    <ChevronDown size={13} className={`text-gray-400 transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {profileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.97 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 top-full mt-2 w-52 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden"
                      >
                        <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                          <p className="text-xs font-semibold text-gray-900 dark:text-white truncate">
                            {user.user_metadata?.full_name || 'Utilisateur'}
                          </p>
                          <p className="text-xs text-gray-400 truncate">{user.email}</p>
                        </div>
                        {isAdmin && (
                          <Link
                            to="/admin"
                            onClick={() => setProfileOpen(false)}
                            className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/20 transition-colors font-medium"
                          >
                            <ShieldCheck size={14} /> Admin
                          </Link>
                        )}
                        <Link
                          to="/profil"
                          onClick={() => setProfileOpen(false)}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <User size={14} /> {t('nav', 'profile')}
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors w-full text-left"
                        >
                          <LogOut size={14} /> {t('nav', 'logout')}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Hamburger (mobile/tablet) */}
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/auth/login" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 px-2 transition-colors">
                  {t('nav', 'login')}
                </Link>
                <Link to="/auth/signup" className="text-sm font-semibold bg-gradient-to-r from-sky-500 to-violet-600 text-white px-4 py-1.5 rounded-xl hover:opacity-90 transition-opacity shadow-sm">
                  {t('nav', 'signup')}
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile/tablet slide-down menu */}
        <AnimatePresence>
          {mobileOpen && user && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden lg:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950"
            >
              <div className="px-4 py-3 space-y-1">
                {NAV_KEYS.map(({ to, labelKey, Icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`
                    }
                  >
                    <Icon size={17} />
                    {t('nav', labelKey)}
                  </NavLink>
                ))}
                <div className="border-t border-gray-100 dark:border-gray-800 pt-2 mt-2 space-y-1">
                  {isAdmin && (
                    <Link
                      to="/admin"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/20"
                    >
                      <ShieldCheck size={17} /> Administration
                    </Link>
                  )}
                  <Link
                    to="/profil"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <User size={17} /> {t('nav', 'profile')}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 w-full"
                  >
                    <LogOut size={17} /> {t('nav', 'logout')}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ─── Mobile Bottom Tab Bar ───────────────────────────────── */}
      {user && (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 safe-area-inset-bottom">
          <div className="grid grid-cols-6 h-16">
            {NAV_KEYS.map(({ to, labelKey, shortKey, Icon }) => {
              const short = shortKey || (lang === 'fr'
                ? { subjects: 'Matières', qcm: 'QCM', progress: 'Stats' }[labelKey]
                : { subjects: 'Subj.', qcm: 'Quiz', progress: 'Stats' }[labelKey])
              return (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex flex-col items-center justify-center gap-0.5 text-[9px] font-medium transition-all ${
                      isActive ? 'text-sky-600 dark:text-sky-400' : 'text-gray-500 dark:text-gray-500'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className={`w-8 h-5 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-sky-100 dark:bg-sky-950/60' : ''}`}>
                        <Icon size={15} />
                      </div>
                      <span className="leading-none truncate w-full text-center px-0.5">{short}</span>
                    </>
                  )}
                </NavLink>
              )
            })}
          </div>
        </nav>
      )}
    </>
  )
}
