import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const AuthContext = createContext(null)

const DEMO_USER = {
  id: 'demo-user-id',
  email: 'eleve.demo@tuteuria.com',
  user_metadata: { full_name: 'Élève Démo' },
}

const DEMO_PROFILE = {
  id: 'demo-user-id',
  full_name: 'Élève Démo',
  level: 'Baccalauréat',
  is_admin: false,
  preferences: { reminders: true, newQuizzes: false },
}

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  async function fetchProfile(userId) {
    if (userId === DEMO_USER.id) {
      setProfile(DEMO_PROFILE)
      return DEMO_PROFILE
    }
    try {
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()
      setProfile(data || null)
      return data
    } catch (e) {
      return null
    }
  }

  useEffect(() => {
    // Vérifier d'abord s'il y a une session démo locale
    const isDemo = localStorage.getItem('tuteuria_demo_session') === 'true'

    supabase.auth.getSession().then(async ({ data: { session } }) => {
      const u = session?.user ?? null
      if (u) {
        localStorage.removeItem('tuteuria_demo_session')
        setUser(u)
        await fetchProfile(u.id)
      } else if (isDemo) {
        setUser(DEMO_USER)
        setProfile(DEMO_PROFILE)
      } else {
        setUser(null)
        setProfile(null)
      }
      setLoading(false)
    }).catch(() => {
      if (isDemo) {
        setUser(DEMO_USER)
        setProfile(DEMO_PROFILE)
      }
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const u = session?.user ?? null
      if (u) {
        localStorage.removeItem('tuteuria_demo_session')
        setUser(u)
        await fetchProfile(u.id)
      } else if (localStorage.getItem('tuteuria_demo_session') === 'true') {
        setUser(DEMO_USER)
        setProfile(DEMO_PROFILE)
      } else {
        setUser(null)
        setProfile(null)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const login = async (email, password) => {
    localStorage.removeItem('tuteuria_demo_session')
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    if (data.user) await fetchProfile(data.user.id)
    return data
  }

  const loginDemo = () => {
    localStorage.setItem('tuteuria_demo_session', 'true')
    setUser(DEMO_USER)
    setProfile(DEMO_PROFILE)
    return DEMO_USER
  }

  const signup = async (email, password, metadata = {}) => {
    localStorage.removeItem('tuteuria_demo_session')
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: metadata }
    })
    if (error) throw error
    return data
  }

  const logout = async () => {
    try {
      await supabase.auth.signOut()
    } catch (err) {
      console.warn('SignOut warning:', err)
    } finally {
      localStorage.removeItem('tuteuria_demo_session')
      setUser(null)
      setProfile(null)
    }
  }

  const refreshProfile = () => user && fetchProfile(user.id)

  const isAdmin = profile?.is_admin === true

  return (
    <AuthContext.Provider value={{
      user,
      profile,
      loading,
      isAdmin,
      login,
      loginDemo,
      signup,
      logout,
      refreshProfile,
      isAuthenticated: !!user,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
