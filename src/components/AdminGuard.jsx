import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function AdminGuard({ children }) {
  const { user, isAdmin, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!user) return <Navigate to="/auth/login" replace />
  if (!isAdmin) return <Navigate to="/dashboard" replace />

  return children
}
