import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Upload, FileText, Sparkles, CheckCircle, XCircle,
  RefreshCw, ChevronRight, ChevronLeft,
  AlertCircle, Loader2, FileUp, Brain, Eye
} from 'lucide-react'
import * as pdfjsLib from 'pdfjs-dist'
import mammoth from 'mammoth'
import BackButton from '../components/BackButton'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'

// Point vers le worker PDF.js fourni par le paquet
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.mjs',
  import.meta.url,
).toString()

const ACCEPTED_EXT = ['.pdf', '.txt', '.doc', '.docx']
const MAX_CHARS = 12000   // ~3 000 tokens envoyés à Groq

// ── Extraction TXT ────────────────────────────────────────────────────────────
function extractTxt(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = e => resolve(e.target.result || '')
    reader.onerror = reject
    reader.readAsText(file, 'UTF-8')
  })
}

// ── Extraction PDF ─────────────────────────────────────────────────────────────
async function extractPdf(file) {
  const arrayBuffer = await file.arrayBuffer()
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise
  const parts = []
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const content = await page.getTextContent()
    const pageText = content.items.map(item => item.str).join(' ')
    parts.push(pageText)
    // Stop early if we have enough text
    if (parts.join('\n').length > MAX_CHARS * 1.5) break
  }
  return parts.join('\n').trim()
}

// ── Extraction DOCX / DOC ──────────────────────────────────────────────────────
async function extractDocx(file) {
  const arrayBuffer = await file.arrayBuffer()
  const result = await mammoth.extractRawText({ arrayBuffer })
  return result.value || ''
}

// ── Dispatcher ────────────────────────────────────────────────────────────────
async function extractTextFromFile(file) {
  const ext = '.' + file.name.split('.').pop().toLowerCase()
  let text = ''
  if (ext === '.txt') {
    text = await extractTxt(file)
  } else if (ext === '.pdf') {
    text = await extractPdf(file)
  } else if (ext === '.docx' || ext === '.doc') {
    text = await extractDocx(file)
  } else {
    // fallback brut
    text = await extractTxt(file)
  }
  // Nettoyer et tronquer
  return text
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .slice(0, MAX_CHARS)
}

function parseQuizzesFromAI(text) {
  const questions = []
  // Try to parse JSON block first
  const jsonMatch = text.match(/```json\s*([\s\S]*?)```/) || text.match(/\[\s*\{[\s\S]*\}\s*\]/)
  if (jsonMatch) {
    try {
      const raw = jsonMatch[1] || jsonMatch[0]
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) return parsed
    } catch {}
  }

  // Fallback: parse numbered questions
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean)
  let current = null
  let optionIndex = 0
  for (const line of lines) {
    const qMatch = line.match(/^(\d+)[.)]\s+(.+)/)
    if (qMatch) {
      if (current) questions.push(current)
      current = { question: qMatch[2], options: [], correct: 0, explication: '' }
      optionIndex = 0
      continue
    }
    const optMatch = line.match(/^[A-Da-d][.)]\s+(.+)/)
    if (optMatch && current) {
      current.options.push(optMatch[1])
      optionIndex++
      continue
    }
    const corrMatch = line.match(/(?:réponse|answer|correct)[^:]*:\s*([A-Da-d])/i)
    if (corrMatch && current) {
      const letter = corrMatch[1].toUpperCase()
      current.correct = ['A', 'B', 'C', 'D'].indexOf(letter)
      continue
    }
    const explMatch = line.match(/(?:explication|explanation)[^:]*:\s*(.+)/i)
    if (explMatch && current) {
      current.explication = explMatch[1]
    }
  }
  if (current?.options.length >= 2) questions.push(current)
  return questions
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D']

export default function DocQuiz() {
  const { user } = useAuth()
  const [file, setFile] = useState(null)
  const [dragOver, setDragOver] = useState(false)
  const [step, setStep] = useState('upload') // upload | analyzing | quiz | results
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const [showExplain, setShowExplain] = useState(false)
  const [error, setError] = useState('')
  const [numQ, setNumQ] = useState(10)
  const [difficulty, setDifficulty] = useState('moyen')
  const [extractedText, setExtractedText] = useState('')
  const [preview, setPreview] = useState('')      // aperçu texte extrait
  const [previewing, setPreviewing] = useState(false)
  const [analyzeStep, setAnalyzeStep] = useState(0) // 0=lecture, 1=analyse, 2=génération
  const [showKeyModal, setShowKeyModal] = useState(false)
  const [apiKeyInput, setApiKeyInput] = useState('')
  const fileRef = useRef()

  const DEFAULT_GROQ_KEY = ''

  const [activeKey, setActiveKey] = useState(() => {
    return import.meta.env.VITE_GROQ_API_KEY || localStorage.getItem('tuteuria_groq_api_key') || DEFAULT_GROQ_KEY
  })

  const GROQ_MODEL = import.meta.env.VITE_GROQ_MODEL || 'openai/gpt-oss-20b'

  const saveApiKey = (key) => {
    const trimmed = key.trim()
    if (trimmed) {
      localStorage.setItem('tuteuria_groq_api_key', trimmed)
      setActiveKey(trimmed)
    } else {
      localStorage.removeItem('tuteuria_groq_api_key')
      setActiveKey(import.meta.env.VITE_GROQ_API_KEY || DEFAULT_GROQ_KEY)
    }
    setShowKeyModal(false)
  }

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    setDragOver(false)
    const dropped = e.dataTransfer.files[0]
    if (dropped) handleFileSelect(dropped)
  }, [])

  const handleFileSelect = async (f) => {
    if (!f) return
    const ext = '.' + f.name.split('.').pop().toLowerCase()
    if (!ACCEPTED_EXT.includes(ext)) {
      setError('Format non supporté. Utilise un fichier .txt, .pdf, .doc ou .docx')
      return
    }
    if (f.size > 10 * 1024 * 1024) { setError('Fichier trop volumineux (max 10 Mo)'); return }
    setError('')
    setFile(f)
    setPreview('')
    // Pré-extraction pour aperçu
    try {
      const t = await extractTextFromFile(f)
      setPreview(t.slice(0, 500))
    } catch {}
  }

  const saveDocQuizResult = async (correctCount, totalCount) => {
    const pct = totalCount > 0 ? Math.min(100, Math.max(0, Math.round((correctCount / totalCount) * 100))) : 0
    const nowIso = new Date().toISOString()
    const record = {
      id: 'doc_' + Date.now(),
      quiz_id: 'doc-quiz',
      subject_id: 'doc-quiz',
      score: pct,
      total_q: totalCount,
      correct_q: correctCount,
      time_taken: 60,
      completed_at: nowIso,
    }

    try {
      const existing = JSON.parse(localStorage.getItem('tuteuria_quiz_results') || '[]')
      existing.unshift(record)
      localStorage.setItem('tuteuria_quiz_results', JSON.stringify(existing.slice(0, 100)))
    } catch (e) {
      console.warn('LocalStorage save error:', e)
    }

    if (user && user.id !== 'demo-user-id') {
      try {
        await supabase.from('quiz_results').insert({
          user_id: user.id,
          quiz_id: 'doc-quiz',
          subject_id: 'doc-quiz',
          score: pct,
          total_q: totalCount,
          correct_q: correctCount,
          time_taken: 60,
        })
      } catch (e) {
        console.warn('Supabase save error:', e)
      }
    }
  }

  const analyzeDocument = async () => {
    if (!file) return
    setStep('analyzing')
    setError('')

    try {
      // ── 1. Extraction du texte ────────────────────────────────────
      setAnalyzeStep(0)
      let text = ''
      try {
        text = await extractTextFromFile(file)
      } catch (extractErr) {
        throw new Error(`Impossible de lire le document : ${extractErr.message}`)
      }

      if (!text || text.trim().length < 50) {
        throw new Error(
          'Le document semble vide ou illisible. Vérifie que le fichier contient du texte sélectionnable (pas une image scannée).'
        )
      }

      setExtractedText(text)
      setAnalyzeStep(1)

      // ── 2. Prompt Groq STRICTEMENT AXÉ SUR LE CONTENU ─────────────
      const prompt = `Tu es un concepteur pédagogique expert pour les examens du Baccalauréat et du GCE A-Level.
Tu dois analyser le cours/document ci-dessous et créer exactement ${numQ} questions à choix multiples (QCM) de niveau ${difficulty} pour évaluer la compréhension approfondie du FOND et des SAVOIRS enseignés.

DOCUMENT :
"""
${text}
"""

RÈGLES IMPÉRATIVES :
1. INTERDICTION FORMELLE : Ne pose JAMAIS de question portant sur la forme, le format de fichier (.pdf/.docx/.txt), la taille, l'auteur, le titre du fichier ou la méthodologie générale de lecture.
2. TOUTES les questions doivent porter EXCLUSIVEMENT sur les NOTIONS DU COURS : théorèmes, lois scientifiques, définitions conceptuelles, formules, réactions chimiques, dates et faits historiques, règles ou principes expliqués dans le texte.
3. Chaque question doit proposer exactement 4 choix (A, B, C, D). Une seule option est correcte. Les 3 autres options doivent être des distracteurs plausibles mais inexacts selon le document.
4. "correct" est l'index entier de la bonne réponse (0 pour la 1ère option, 1 pour la 2ème, 2 pour la 3ème, 3 pour la 4ème).
5. "explication" doit citer ou expliquer clairement pourquoi cette réponse est vraie en se basant sur le document.

Réponds STRICTEMENT avec un tableau JSON valide au format exact suivant, sans aucun commentaire :
\`\`\`json
[
  {
    "question": "Question portant sur une notion du texte ?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correct": 0,
    "explication": "Justification basée sur le cours."
  }
]
\`\`\``

      let rawQuestions = []

      if (activeKey) {
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${activeKey}`,
          },
          body: JSON.stringify({
            model: GROQ_MODEL,
            messages: [
              {
                role: 'system',
                content: 'Tu es un générateur de QCM pédagogiques. Tu crées des questions rigoureusement centrées sur le contenu conceptuel et théorique du document. Tu ne poses JAMAIS de questions sur la forme ou la nature du fichier. Tu réponds UNIQUEMENT avec un bloc JSON valide.',
              },
              { role: 'user', content: prompt },
            ],
            temperature: 0.3,
            max_tokens: 4096,
          }),
        })

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}))
          throw new Error(`[Groq ${GROQ_MODEL}] (${res.status}) : ${errData?.error?.message || res.statusText}`)
        }

        setAnalyzeStep(2)
        const data = await res.json()
        const aiText = data.choices?.[0]?.message?.content || ''
        rawQuestions = parseQuizzesFromAI(aiText)

        if (rawQuestions.length === 0) {
          const jsonOnly = aiText.replace(/```json|```/g, '').trim()
          try {
            const parsed = JSON.parse(jsonOnly)
            if (Array.isArray(parsed)) rawQuestions = parsed
          } catch {}
        }
      } else {
        await new Promise(r => setTimeout(r, 1500))
        rawQuestions = generateContentQuestions(text, numQ)
      }

      if (rawQuestions.length === 0) {
        // En cas d'échec du parsing IA, utiliser l'analyseur de contenu local
        rawQuestions = generateContentQuestions(text, numQ)
      }

      setQuestions(rawQuestions.slice(0, numQ))
      setCurrent(0)
      setSelected(null)
      setAnswers([])
      setShowExplain(false)
      setStep('quiz')
    } catch (err) {
      console.warn('DocQuiz AI generation fallback:', err)
      // Si une erreur survient avec l'API, basculer sur l'analyseur de contenu local
      try {
        const fallbackQ = generateContentQuestions(extractedText || (await extractTextFromFile(file)), numQ)
        setQuestions(fallbackQ.slice(0, numQ))
        setCurrent(0)
        setSelected(null)
        setAnswers([])
        setShowExplain(false)
        setStep('quiz')
      } catch (fallbackErr) {
        setError(err.message || 'Erreur lors de l\'analyse. Réessaie.')
        setStep('upload')
      }
    }
  }

  const handleSelect = (idx) => {
    if (selected !== null) return
    setSelected(idx)
    setShowExplain(true)
    setAnswers(prev => [...prev, { selected: idx, correct: idx === questions[current].correct }])
  }

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      const correctCount = answers.filter(a => a.correct).length
      saveDocQuizResult(correctCount, questions.length)
      setStep('results')
      return
    }
    setCurrent(c => c + 1)
    setSelected(null)
    setShowExplain(false)
  }

  const handlePrev = () => {
    if (current === 0) return
    setCurrent(c => c - 1)
    setSelected(null)
    setShowExplain(false)
  }

  const reset = () => {
    setFile(null); setStep('upload'); setQuestions([]); setAnswers([])
    setCurrent(0); setSelected(null); setError(''); setExtractedText('')
  }

  const score = answers.filter(a => a.correct).length

  // ── UPLOAD STEP ────────────────────────────────────────────────
  if (step === 'upload') return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 pb-24 lg:pb-8">
      <BackButton to="/dashboard" label="Tableau de bord" />
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 to-pink-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
              <Brain size={20} className="text-white" />
            </div>
            <h1 className="text-2xl font-black text-gray-900 dark:text-white">Document → QCM</h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Importe un cours, l'IA Groq ({GROQ_MODEL}) analyse son contenu conceptuel et génère des QCM.
          </p>
        </div>
        <button
          onClick={() => { setApiKeyInput(activeKey); setShowKeyModal(true) }}
          className={`flex items-center gap-1.5 text-xs px-3 py-2 rounded-xl border font-semibold transition-all ${
            activeKey
              ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300'
              : 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-800 text-amber-700 dark:text-amber-400'
          }`}
        >
          <Sparkles size={13} />
          {activeKey ? 'Groq activé' : 'Configurer clé Groq'}
        </button>
      </motion.div>

      {/* Modal configuration Clé Groq */}
      <AnimatePresence>
        {showKeyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-md border border-gray-200 dark:border-gray-800 shadow-2xl">
              <h3 className="text-base font-black text-gray-900 dark:text-white mb-1">Configuration Groq API</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                Doc → Quiz utilise l'API Groq avec le modèle <strong className="text-violet-600 dark:text-violet-400">{GROQ_MODEL}</strong>.
              </p>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Clé API Groq (gsk_...)
                </label>
                <input
                  type="password"
                  value={apiKeyInput}
                  onChange={e => setApiKeyInput(e.target.value)}
                  placeholder="gsk_..."
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-violet-500"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowKeyModal(false)}
                  className="flex-1 py-2 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200"
                >
                  Annuler
                </button>
                <button
                  onClick={() => saveApiKey(apiKeyInput)}
                  className="flex-1 py-2 text-xs font-semibold text-white bg-violet-600 rounded-xl hover:bg-violet-500"
                >
                  Enregistrer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Drop zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        onDragOver={e => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileRef.current?.click()}
        className={`relative cursor-pointer rounded-3xl border-2 border-dashed transition-all duration-300 p-10 text-center mb-6 ${
          dragOver
            ? 'border-violet-500 bg-violet-50 dark:bg-violet-900/20 scale-[1.01]'
            : file
              ? 'border-green-400 bg-green-50 dark:bg-green-900/20'
              : 'border-gray-300 dark:border-gray-700 hover:border-violet-400 hover:bg-violet-50/50 dark:hover:bg-violet-900/10 bg-gray-50 dark:bg-gray-900'
        }`}
      >
        <input
          ref={fileRef}
          type="file"
          accept=".pdf,.txt,.doc,.docx"
          className="hidden"
          onChange={e => handleFileSelect(e.target.files[0])}
        />

        <AnimatePresence mode="wait">
          {file ? (
            <motion.div key="file" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
              <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900/40 flex items-center justify-center mx-auto mb-4">
                <FileText size={30} className="text-green-500" />
              </div>
              <p className="font-bold text-gray-900 dark:text-white text-lg">{file.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {(file.size / 1024).toFixed(1)} Ko · Clique pour changer
              </p>
            </motion.div>
          ) : (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="w-16 h-16 rounded-2xl bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center mx-auto mb-4">
                <Upload size={28} className="text-violet-500" />
              </div>
              <p className="font-bold text-gray-700 dark:text-gray-200 text-lg mb-1">
                Glisse ton document ici
              </p>
              <p className="text-sm text-gray-400">ou clique pour parcourir</p>
              <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
                {['.PDF', '.TXT', '.DOC', '.DOCX'].map(ext => (
                  <span key={ext} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-xs px-2.5 py-1 rounded-lg font-mono">
                    {ext}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">Taille max : 10 Mo</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {error && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-xl px-4 py-3 mb-4 text-sm">
          <AlertCircle size={16} className="flex-shrink-0" />
          {error}
        </motion.div>
      )}

      {/* Aperçu texte extrait */}
      {file && preview && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
          <button
            onClick={() => setPreviewing(v => !v)}
            className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors mb-2"
          >
            <Eye size={13} />
            {previewing ? 'Masquer l\'aperçu' : 'Voir le texte extrait'}
            <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-1.5 py-0.5 rounded-full text-[10px] font-semibold">
              ✓ Lu avec succès
            </span>
          </button>
          {previewing && (
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-3 text-xs text-gray-600 dark:text-gray-400 font-mono leading-relaxed max-h-32 overflow-y-auto whitespace-pre-wrap">
              {preview}…
            </div>
          )}
        </motion.div>
      )}

      {/* Options */}
      {file && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-5 mb-6 space-y-5">
          <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Sparkles size={17} className="text-violet-500" /> Options de génération
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nombre de questions : <span className="text-violet-600 font-bold">{numQ}</span>
              </label>
              <input
                type="range" min={5} max={20} step={1} value={numQ}
                onChange={e => setNumQ(+e.target.value)}
                className="w-full accent-violet-500"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1"><span>5</span><span>20</span></div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Difficulté</label>
              <div className="flex gap-2">
                {[
                  { v: 'facile', label: 'Facile', color: 'text-green-600 border-green-300 bg-green-50 dark:bg-green-900/20 dark:border-green-700 dark:text-green-400' },
                  { v: 'moyen', label: 'Moyen', color: 'text-amber-600 border-amber-300 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-700 dark:text-amber-400' },
                  { v: 'difficile', label: 'Difficile', color: 'text-red-600 border-red-300 bg-red-50 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400' },
                ].map(d => (
                  <button
                    key={d.v}
                    onClick={() => setDifficulty(d.v)}
                    className={`flex-1 py-2 rounded-xl border text-xs font-semibold transition-all ${
                      difficulty === d.v ? d.color + ' border-2' : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-gray-300'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {!activeKey && (
            <div className="flex items-start gap-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-3">
              <AlertCircle size={15} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-amber-700 dark:text-amber-400">
                Clé Groq non configurée — mode local actif. Ajoute <code className="font-mono bg-amber-100 dark:bg-amber-900/40 px-1 rounded">VITE_GROQ_API_KEY</code> dans <code className="font-mono">.env</code> pour activer l'IA Groq.
              </p>
            </div>
          )}
        </motion.div>
      )}

      <motion.button
        onClick={analyzeDocument}
        disabled={!file}
        whileHover={file ? { scale: 1.02 } : {}}
        whileTap={file ? { scale: 0.98 } : {}}
        className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-violet-500 to-pink-600 text-white font-bold py-4 rounded-2xl text-lg shadow-lg shadow-violet-500/20 hover:opacity-95 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <Brain size={22} />
        Analyser et générer les QCM
      </motion.button>
    </div>
  )

  // ── ANALYZING STEP ─────────────────────────────────────────────
  if (step === 'analyzing') {
    const steps = [
      { label: 'Lecture du document', sub: 'Extraction du texte en cours…' },
      { label: 'Analyse du contenu', sub: `${extractedText ? (extractedText.length / 1000).toFixed(1) + ' Ko de texte extrait' : 'Identification des concepts clés…'}` },
      { label: 'Génération des QCM par l\'IA', sub: `Création de ${numQ} questions niveau ${difficulty}…` },
    ]
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-sm w-full">
          {/* Spinner */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="w-24 h-24 rounded-full border-4 border-violet-100 dark:border-violet-900/30" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-violet-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Brain size={28} className="text-violet-500" />
            </div>
          </div>

          <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-1">Analyse en cours…</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{file?.name}</p>

          {/* Étapes */}
          <div className="space-y-3 text-left">
            {steps.map((s, i) => {
              const done    = i < analyzeStep
              const active  = i === analyzeStep
              const pending = i > analyzeStep
              return (
                <div key={i} className={`flex items-start gap-3 p-3 rounded-xl transition-all ${active ? 'bg-violet-50 dark:bg-violet-900/20' : ''}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    done    ? 'bg-emerald-500'
                    : active  ? 'bg-violet-500'
                    : 'bg-gray-200 dark:bg-gray-700'
                  }`}>
                    {done
                      ? <CheckCircle size={14} className="text-white" />
                      : active
                        ? <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                            <Loader2 size={14} className="text-white" />
                          </motion.div>
                        : <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500" />
                    }
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${done || active ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-600'}`}>
                      {s.label}
                    </p>
                    {active && (
                      <p className="text-xs text-violet-600 dark:text-violet-400 mt-0.5">{s.sub}</p>
                    )}
                    {done && i === 1 && extractedText && (
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">
                        ✓ {(extractedText.length / 1000).toFixed(1)} Ko extraits
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    )
  }

  // ── RESULTS STEP ───────────────────────────────────────────────
  if (step === 'results') {
    const pct = Math.round((score / questions.length) * 100)
    const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : pct >= 40 ? '💪' : '📚'
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 pb-24 lg:pb-8">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center mb-8">
          <div className="text-6xl mb-3">{emoji}</div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-1">
            {pct >= 80 ? 'Excellent !' : pct >= 60 ? 'Bien joué !' : 'Continue !'}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">Basé sur : {file?.name}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-3xl p-8 text-center text-white mb-6 ${pct >= 80 ? 'bg-gradient-to-br from-green-500 to-emerald-600' : pct >= 60 ? 'bg-gradient-to-br from-sky-500 to-blue-600' : pct >= 40 ? 'bg-gradient-to-br from-amber-500 to-orange-600' : 'bg-gradient-to-br from-red-500 to-rose-600'}`}
        >
          <div className="text-6xl font-black mb-1">{pct}%</div>
          <div className="text-white/80 text-lg">{score} / {questions.length} bonnes réponses</div>
        </motion.div>

        <div className="space-y-3 mb-8">
          <h2 className="font-bold text-gray-900 dark:text-white">Révision</h2>
          {questions.map((q, i) => {
            const ans = answers[i]
            return (
              <div key={i} className={`rounded-2xl p-4 border text-sm ${ans?.correct ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'}`}>
                <div className="flex items-start gap-2">
                  {ans?.correct
                    ? <CheckCircle size={17} className="text-green-500 flex-shrink-0 mt-0.5" />
                    : <XCircle size={17} className="text-red-500 flex-shrink-0 mt-0.5" />
                  }
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">Q{i + 1}. {q.question}</p>
                    {!ans?.correct && (
                      <p className="text-red-600 dark:text-red-400 mb-1 text-xs">
                        Ton choix : {OPTION_LETTERS[ans?.selected]} — {q.options[ans?.selected] || '—'}
                      </p>
                    )}
                    <p className="text-green-700 dark:text-green-400 mb-1 text-xs">
                      Bonne réponse : {OPTION_LETTERS[q.correct]} — {q.options[q.correct]}
                    </p>
                    {q.explication && (
                      <p className="text-gray-600 dark:text-gray-400 text-xs bg-white/60 dark:bg-gray-800/60 rounded-lg px-2 py-1.5">
                        💡 {q.explication}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex gap-3">
          <button onClick={() => { setCurrent(0); setSelected(null); setAnswers([]); setShowExplain(false); setStep('quiz') }} className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 to-pink-600 text-white font-bold py-3 rounded-2xl hover:opacity-90 transition-opacity">
            <RefreshCw size={17} /> Recommencer
          </button>
          <button onClick={reset} className="flex-1 flex items-center justify-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium py-3 rounded-2xl hover:border-violet-300 transition-colors">
            <FileUp size={17} /> Nouveau doc
          </button>
        </div>
      </div>
    )
  }

  // ── QUIZ STEP ──────────────────────────────────────────────────
  const question = questions[current]
  const progressPct = (current / questions.length) * 100

  return (
    <div className="max-w-2xl mx-auto px-4 pb-24 lg:pb-8">
      {/* Header */}
      <div className="sticky top-16 z-30 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md py-3 mb-4 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
          <div className="flex items-center gap-2">
            <FileText size={14} className="text-violet-500" />
            <span className="truncate max-w-[140px] text-xs">{file?.name}</span>
          </div>
          <span className="font-medium">{current + 1} / {questions.length}</span>
        </div>
        <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.25 }}
        >
          {/* Question */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-200 dark:border-gray-800 mb-4">
            <span className="text-xs font-semibold text-violet-500 uppercase tracking-wider">Question {current + 1}</span>
            <p className="text-base font-bold text-gray-900 dark:text-white mt-2 leading-relaxed">{question.question}</p>
          </div>

          {/* Options */}
          <div className="space-y-2.5 mb-4">
            {question.options.map((opt, idx) => {
              let cls = 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-violet-400 cursor-pointer'
              if (selected !== null) {
                if (idx === question.correct) cls = 'bg-green-50 dark:bg-green-900/30 border-green-400 text-green-800 dark:text-green-300 cursor-default'
                else if (idx === selected) cls = 'bg-red-50 dark:bg-red-900/30 border-red-400 text-red-700 dark:text-red-300 cursor-default'
                else cls = 'bg-gray-50 dark:bg-gray-800/40 border-gray-200 dark:border-gray-700 text-gray-400 cursor-default'
              }
              return (
                <motion.button
                  key={idx}
                  whileHover={selected === null ? { scale: 1.01 } : {}}
                  onClick={() => handleSelect(idx)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 transition-all text-left text-sm ${cls}`}
                >
                  <span className={`w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-xs font-black flex-shrink-0`}>
                    {OPTION_LETTERS[idx]}
                  </span>
                  <span className="font-medium leading-snug">{opt}</span>
                  {selected !== null && idx === question.correct && <CheckCircle size={18} className="ml-auto text-green-500 flex-shrink-0" />}
                  {selected !== null && idx === selected && idx !== question.correct && <XCircle size={18} className="ml-auto text-red-500 flex-shrink-0" />}
                </motion.button>
              )
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {showExplain && question.explication && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-xl p-4 mb-4 border text-sm ${answers[answers.length - 1]?.correct ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800'}`}
              >
                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  {answers[answers.length - 1]?.correct ? '✓ Bonne réponse !' : '✗ Mauvaise réponse'}
                </p>
                <p className="text-gray-600 dark:text-gray-400">💡 {question.explication}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Nav */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              disabled={current === 0}
              className="flex items-center gap-1.5 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 disabled:opacity-30 hover:border-gray-300 transition-colors"
            >
              <ChevronLeft size={17} /> Précédent
            </button>
            {selected !== null && (
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={handleNext}
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 to-pink-600 text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                {current + 1 >= questions.length ? 'Voir les résultats' : 'Suivant'}
                <ChevronRight size={17} />
              </motion.button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function generateContentQuestions(text, n = 5) {
  const clean = (text || '')
    .replace(/\r\n/g, '\n')
    .split(/\n+|\.\s+/)
    .map(s => s.trim())
    .filter(s => s.length > 25 && !s.startsWith('#') && !s.toLowerCase().includes('page') && !s.toLowerCase().includes('table des') && !s.toLowerCase().includes('sommaire'))

  const questions = []

  for (let i = 0; i < clean.length && questions.length < n; i++) {
    const sentence = clean[i]
    const words = sentence.split(/\s+/).filter(Boolean)
    if (words.length < 5) continue

    const subjectPart = words.slice(0, Math.min(5, words.length)).join(' ')
    const predicatePart = words.slice(Math.min(5, words.length)).join(' ')

    questions.push({
      question: `Selon les notions expliquées dans le document, que retenir concernant : "${subjectPart}..." ?`,
      options: [
        `${predicatePart.charAt(0).toUpperCase() + predicatePart.slice(1)}`,
        `Cette propriété est formellement réfutée dans le reste du cours.`,
        `Il s'agit d'un cas marginal sans implication dans les applications.`,
        `Ce résultat n'est valable que sous des conditions totalement inverses.`
      ],
      correct: 0,
      explication: `Extrait directement du cours : "${sentence}"`
    })
  }

  if (questions.length === 0) {
    const snippet = (text || 'Notion fondamentale étudiée').slice(0, 80)
    questions.push({
      question: `D'après le cours fourni, quel principe ou résultat fondamental est énoncé ?`,
      options: [
        `Le principe exposé : "${snippet}..."`,
        `Une conclusion opposée aux arguments démontrés dans le document.`,
        `Une hypothèse purement intuitive sans validation théorique.`,
        `Un résultat non applicable au programme d'examen.`
      ],
      correct: 0,
      explication: `Tiré directement des enseignements du document analysé.`
    })
  }

  return questions.slice(0, n)
}
