import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Captured by ErrorBoundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Rediriger directement vers la page d'accueil (Landing Page) sans afficher de fenêtre d'erreur
      window.location.href = '/'
      return null
    }

    return this.props.children
  }
}
