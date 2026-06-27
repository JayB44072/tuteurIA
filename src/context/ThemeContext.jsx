import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('tuteur-theme')
    return saved === 'dark'
  })

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('tuteur-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('tuteur-theme', 'light')
    }
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark, darkMode: dark, toggle: () => setDark(d => !d), toggleDarkMode: () => setDark(d => !d) }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
