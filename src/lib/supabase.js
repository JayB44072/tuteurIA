import { createClient } from '@supabase/supabase-js'

const DEFAULT_URL = 'https://oovmvqffnetwyogguerk.supabase.co'
const DEFAULT_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vdm12cWZmbmV0d3lvZ2d1ZXJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI1NDc1MDQsImV4cCI6MjA5ODEyMzUwNH0.cMMo9LB2hiyCaS0aUYtKPFbFhj6Or_vM_5KVoJ8ZDwI'

const envUrl = (import.meta.env.VITE_SUPABASE_URL || '').trim()
const envKey = (import.meta.env.VITE_SUPABASE_ANON_KEY || '').trim()

const supabaseUrl = (envUrl && !envUrl.includes('placeholder.supabase.co')) ? envUrl : DEFAULT_URL
const supabaseAnonKey = (envKey && envKey !== 'placeholder-key') ? envKey : DEFAULT_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

