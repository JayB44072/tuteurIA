import { createClient } from '@supabase/supabase-js'

const envUrl = (import.meta.env.VITE_SUPABASE_URL || '').trim()
const envKey = (import.meta.env.VITE_SUPABASE_ANON_KEY || '').trim()

const localUrl = typeof window !== 'undefined' ? (localStorage.getItem('tuteuria_supabase_url') || '').trim() : ''
const localKey = typeof window !== 'undefined' ? (localStorage.getItem('tuteuria_supabase_anon_key') || '').trim() : ''

// Prioritize valid localStorage or valid non-placeholder env variable
const effectiveUrl = localUrl || (envUrl && !envUrl.includes('placeholder.supabase.co') ? envUrl : '') || envUrl || 'https://placeholder.supabase.co'
const effectiveKey = localKey || (envKey && envKey !== 'placeholder-key' ? envKey : '') || envKey || 'placeholder-key'

export const isSupabaseConfigured = () => {
  return Boolean(
    effectiveUrl &&
    effectiveKey &&
    !effectiveUrl.includes('placeholder.supabase.co') &&
    effectiveKey !== 'placeholder-key'
  )
}

export const getSupabaseConfig = () => ({
  url: effectiveUrl,
  key: effectiveKey,
  isConfigured: isSupabaseConfigured()
})

export const saveSupabaseConfig = (url, key) => {
  if (url) localStorage.setItem('tuteuria_supabase_url', url.trim())
  if (key) localStorage.setItem('tuteuria_supabase_anon_key', key.trim())
  window.location.reload()
}

export const clearCustomSupabaseConfig = () => {
  localStorage.removeItem('tuteuria_supabase_url')
  localStorage.removeItem('tuteuria_supabase_anon_key')
  window.location.reload()
}

export const supabase = createClient(effectiveUrl, effectiveKey)

