import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/layout/Navbar'
import Landing from './pages/Landing'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Dashboard from './pages/Dashboard'
import Subjects from './pages/Subjects'
import SubjectDetail from './pages/SubjectDetail'
import QCMList from './pages/QCMList'
import QCMTake from './pages/QCMTake'
import AiTutor from './pages/AiTutor'
import Progress from './pages/Progress'
import Profile from './pages/Profile'
import DocQuiz from './pages/DocQuiz'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminGuard from './components/AdminGuard'

/* Pages with top navbar + mobile bottom nav */
function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pb-20 lg:pb-0">{children}</main>
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          {/* dark class on <html>, transition on root div */}
          <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            <Routes>
              {/* Public */}
              <Route path="/"            element={<><Navbar /><Landing /></>} />
              <Route path="/auth/login"  element={<Login />} />
              <Route path="/auth/signup" element={<Signup />} />

              {/* App (requires auth via Navbar redirect logic) */}
              <Route path="/dashboard"   element={<AppLayout><Dashboard /></AppLayout>} />
              <Route path="/matieres"    element={<AppLayout><Subjects /></AppLayout>} />
              <Route path="/matieres/:id" element={<AppLayout><SubjectDetail /></AppLayout>} />
              <Route path="/qcm"         element={<AppLayout><QCMList /></AppLayout>} />
              <Route path="/qcm/:id"     element={<AppLayout><QCMTake /></AppLayout>} />
              <Route path="/doc-quiz"    element={<AppLayout><DocQuiz /></AppLayout>} />
              <Route path="/ai-tuteur"   element={<AppLayout><AiTutor /></AppLayout>} />
              <Route path="/progression" element={<AppLayout><Progress /></AppLayout>} />
              <Route path="/profil"      element={<AppLayout><Profile /></AppLayout>} />

              {/* Admin */}
              <Route path="/admin" element={
                <AdminGuard>
                  <AppLayout><AdminDashboard /></AppLayout>
                </AdminGuard>
              } />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
