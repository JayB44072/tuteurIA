import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function BackButton({ to, label = 'Retour' }) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (to) navigate(to)
    else if (window.history.length > 1) navigate(-1)
    else navigate('/dashboard')
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors group mb-5"
    >
      <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
      {label}
    </button>
  )
}
