import { Component } from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Captured by ErrorBoundary:', error, errorInfo)
    this.setState({ errorInfo })
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4 text-white">
          <div className="max-w-md w-full bg-gray-900 border border-white/10 rounded-3xl p-6 sm:p-8 text-center shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center mx-auto mb-5 border border-red-500/30">
              <AlertTriangle size={28} />
            </div>

            <h2 className="text-xl font-black text-white mb-2">
              Oups, une erreur inattendue est survenue
            </h2>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              L'application a intercepté un problème d'affichage pour éviter un écran blanc.
            </p>

            {this.state.error?.message && (
              <div className="bg-black/40 border border-white/10 rounded-xl p-3 mb-6 text-left overflow-x-auto text-xs text-red-300 font-mono">
                {this.state.error.message}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={this.handleReset}
                className="flex-1 bg-gradient-to-r from-sky-500 to-violet-600 text-white font-bold py-3 px-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm shadow-lg shadow-sky-500/20"
              >
                <RefreshCw size={15} /> Recharger la page
              </button>
              <Link
                to="/dashboard"
                onClick={() => this.setState({ hasError: false })}
                className="px-4 py-3 rounded-xl bg-white/10 text-white/80 hover:bg-white/20 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
              >
                <Home size={15} /> Tableau de bord
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
