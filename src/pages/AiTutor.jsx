import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Send, Sparkles, RotateCcw, AlertCircle, ArrowLeft } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

const SUGGESTIONS = [
  'Explique le théorème de Pythagore',
  'Comment résoudre une équation du 2nd degré ?',
  'Qu\'est-ce que la photosynthèse ?',
  'Explique les lois de Newton',
  'Résume l\'Empire du Mali',
  'Comment rédiger une dissertation ?',
  'Impératif catégorique de Kant',
  'Cycle de l\'ADN expliqué simplement',
]

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.13 }}
          className="w-2 h-2 rounded-full bg-sky-400"
        />
      ))}
    </div>
  )
}

function Message({ msg }) {
  const isUser = msg.role === 'user'
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex gap-2.5 ${isUser ? 'flex-row-reverse' : ''}`}
    >
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm shadow-sm ${
        isUser
          ? 'bg-gradient-to-br from-sky-500 to-violet-600 text-white'
          : 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white'
      }`}>
        {isUser ? '👤' : <Bot size={15} />}
      </div>
      <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
        isUser
          ? 'bg-gradient-to-br from-sky-500 to-violet-600 text-white rounded-tr-sm'
          : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-tl-sm'
      }`}>
        <pre className="whitespace-pre-wrap font-sans">{msg.content}</pre>
      </div>
    </motion.div>
  )
}

export default function AiTutor() {
  const [messages, setMessages] = useState([{
    role: 'assistant',
    content: `Salut ! Je suis ton tuteur IA propulsé par Groq, disponible 24h/24 pour toutes tes matières du Baccalauréat et GCE A-Level. 🎓\n\nPose-moi tes questions sur les cours, les méthodes de résolution d'exercices, les formules ou la rédaction.\n\nQue souhaites-tu travailler aujourd'hui ? 💪`
  }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showKeyModal, setShowKeyModal] = useState(false)
  const [apiKeyInput, setApiKeyInput] = useState('')
  const bottomRef = useRef()
  const inputRef = useRef()

const DEFAULT_GROQ_KEY = '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'

  const [activeKey, setActiveKey] = useState(() => {
    return import.meta.env.VITE_GROQ_API_KEY || localStorage.getItem('tuteuria_groq_api_key') || DEFAULT_GROQ_KEY
  })

  const GROQ_MODEL = import.meta.env.VITE_GROQ_MODEL || 'openai/gpt-oss-20b'

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

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

  const sendMessage = async (text = input) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return
    setInput('')
    const userMsg = { role: 'user', content: trimmed }
    setMessages(prev => [...prev, userMsg])
    setLoading(true)

    try {
      let aiResponse = ''
      if (activeKey) {
        const history = [...messages, userMsg].map(m => ({
          role: m.role === 'user' ? 'user' : 'assistant',
          content: m.content,
        }))
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
                content: "Tu es un tuteur d'excellence pour les élèves préparant le Baccalauréat (programme francophone africain / camerounais) et le GCE A-Level (Cameroon GCE Board). Adapte ta langue à celle de l'élève (Français pour Bac, Anglais pour GCE). Sois très clair, méthodique, encourageant et rigoureux sur les démonstrations scientifiques, formules et analyses de textes. Utilise des titres markdown et des puces pour bien aérer tes explications.",
              },
              ...history,
            ],
            temperature: 0.6,
            max_tokens: 1500,
          }),
        })

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}))
          const errorMsg = errData?.error?.message || `Erreur HTTP ${res.status}`
          throw new Error(`[Groq ${GROQ_MODEL}] ${errorMsg}`)
        }

        const data = await res.json()
        aiResponse = data.choices?.[0]?.message?.content || "Désolé, aucune réponse générée par l'IA."
      } else {
        await new Promise(r => setTimeout(r, 600))
        aiResponse = generateFallbackResponse(trimmed)
      }
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }])
    } catch (err) {
      console.error('Groq API error:', err)
      const fallbackAns = generateFallbackResponse(trimmed)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `${fallbackAns}\n\n---\n*💡 **Note d'information :** La clé API Groq actuelle a produit une erreur (${err.message}). Une réponse du tuteur local de secours a été fournie ci-dessus. Tu peux ajouter ta propre clé Groq gratuite dans "🔑 Clé Groq" en haut à droite.*`
      }])
    } finally {
      setLoading(false)
      inputRef.current?.focus()
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
  }

  const clearChat = () => {
    setMessages([{
      role: 'assistant',
      content: 'Nouvelle conversation démarrée ! Que veux-tu apprendre aujourd\'hui ? 🚀'
    }])
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5 flex flex-col" style={{ height: 'calc(100dvh - 4rem - 5rem)' }}>
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <Link to="/dashboard" className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex-shrink-0">
            <ArrowLeft size={16} />
          </Link>
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Bot size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-lg font-black text-gray-900 dark:text-white">Tuteur IA</h1>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
              <span className={`w-1.5 h-1.5 rounded-full ${activeKey ? 'bg-green-400 animate-pulse' : 'bg-amber-400'}`} />
              <span>Modèle : <strong className="font-semibold text-emerald-600 dark:text-emerald-400">{GROQ_MODEL}</strong></span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => { setApiKeyInput(activeKey); setShowKeyModal(true) }}
            className={`flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg border transition-colors ${
              activeKey
                ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300'
                : 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-800 text-amber-700 dark:text-amber-400'
            }`}
          >
            <Sparkles size={12} />
            {activeKey ? 'Groq activé' : 'Configurer clé Groq'}
          </button>
          <button onClick={clearChat} className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg transition-colors">
            <RotateCcw size={13} /> Nouvelle conv.
          </button>
        </div>
      </motion.div>

      {/* Modal configuration Clé Groq */}
      <AnimatePresence>
        {showKeyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-md border border-gray-200 dark:border-gray-800 shadow-2xl">
              <h3 className="text-base font-black text-gray-900 dark:text-white mb-1">Configuration Groq API</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                Le Tuteur IA utilise exclusivement l'API Groq avec le modèle <strong className="text-emerald-600 dark:text-emerald-400">{GROQ_MODEL}</strong>.
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
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-emerald-500"
                />
                <p className="text-[11px] text-gray-400 mt-1">
                  Obtenez une clé gratuite sur <a href="https://console.groq.com/keys" target="_blank" rel="noreferrer" className="text-emerald-500 underline">console.groq.com</a>.
                </p>
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
                  className="flex-1 py-2 text-xs font-semibold text-white bg-emerald-600 rounded-xl hover:bg-emerald-500"
                >
                  Enregistrer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-3 pb-3 min-h-0">
        {messages.map((msg, i) => <Message key={i} msg={msg} />)}
        {loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
              <Bot size={15} className="text-white" />
            </div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl rounded-tl-sm shadow-sm">
              <TypingDots />
            </div>
          </motion.div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggestions */}
      <AnimatePresence>
        {messages.length <= 1 && !loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-shrink-0 mb-3">
            <p className="text-xs text-gray-400 mb-2 flex items-center gap-1"><Sparkles size={11} /> Suggestions</p>
            <div className="flex flex-wrap gap-1.5">
              {SUGGESTIONS.slice(0, 5).map(s => (
                <button key={s} onClick={() => sendMessage(s)} className="text-xs bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full hover:border-emerald-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  {s}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input */}
      <div className="flex-shrink-0">
        <div className="flex gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-3 focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all shadow-sm">
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Pose ta question... (Entrée pour envoyer)"
            rows={1}
            className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 text-sm resize-none focus:outline-none leading-relaxed"
            style={{ minHeight: '24px', maxHeight: '100px' }}
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || loading}
            className="w-9 h-9 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-40 flex-shrink-0 shadow-sm"
          >
            {loading
              ? <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              : <Send size={15} />
            }
          </button>
        </div>
        <p className="text-xs text-center text-gray-300 dark:text-gray-600 mt-1.5">
          Shift+Entrée pour un saut de ligne
        </p>
      </div>
    </div>
  )
}

function generateFallbackResponse(question) {
  const q = question.toLowerCase()
  if (q.includes('pythagore')) return `📐 Théorème de Pythagore\n\nDans un triangle rectangle :\na² + b² = c²\noù c est l'hypoténuse (côté opposé à l'angle droit).\n\nExemple : a=3, b=4\nc² = 9 + 16 = 25 → c = 5 ✓`
  if (q.includes('newton') || q.includes('mécanique')) return `⚙️ Lois de Newton\n\n1ère loi : Un objet reste en MRU si ΣF = 0\n\n2ème loi : ΣF = m·a (Force = masse × accélération)\n\n3ème loi : Toute action entraîne une réaction égale et opposée\n\nExemple : F=20N, m=5kg → a = 20/5 = 4 m/s²`
  if (q.includes('photosynthèse')) return `🌱 Photosynthèse\n\n6CO₂ + 6H₂O + lumière → C₆H₁₂O₆ + 6O₂\n\nSe déroule dans les chloroplastes :\n1. Phase lumineuse : capture de l'énergie solaire\n2. Cycle de Calvin : fixation du CO₂ en glucose`
  if (q.includes('dissertation')) return `✍️ Structure de la dissertation\n\n1. Introduction\n   • Accroche → Présentation → Problématique → Plan\n\n2. Développement (2-3 parties)\n   • Argument + Exemple + Analyse\n   • Transitions entre parties\n\n3. Conclusion\n   • Synthèse + Réponse + Ouverture\n\nConseils : Pas de "je", citer les œuvres entre guillemets.`
  if (q.includes('mali') || q.includes('empire')) return `📜 Empire du Mali (XIIIe-XVe s.)\n\nFondateur : Soundiata Keita (bataille de Kirina, 1235)\n\nApogée sous Mansa Moussa :\n• Commerce de l'or et du sel\n• Pèlerinage à La Mecque (1324)\n• Université de Tombouctou\n\nHéritage : Centre culturel islamique majeur d'Afrique de l'Ouest`
  if (q.includes('kant') || q.includes('impératif')) return `🧠 Impératif catégorique (Kant)\n\n"Agis seulement selon la maxime par laquelle tu peux vouloir en même temps qu'elle devienne une loi universelle."\n\nAutrement dit : avant d'agir, demande-toi si tout le monde pouvait faire la même chose.\n\nContraste avec l'utilitarisme (Bentham) : le devoir prime sur les conséquences.`
  if (q.includes('adn') || q.includes('dna')) return `🧬 L'ADN\n\nDouble hélice de nucléotides (A-T, G-C)\n\nRéplication : semi-conservative\n(chaque brin parental sert de matrice)\n\nExpression génétique :\n1. Transcription (ADN → ARNm) dans le noyau\n2. Traduction (ARNm → Protéine) sur les ribosomes\n\nMutation : substitution, délétion ou insertion d'une base`
  return `🤖 Je peux t'aider sur cette question !\n\nPour des réponses IA complètes, configure VITE_GROQ_API_KEY dans ton fichier .env\n\nJe suis disponible sur :\n• Mathématiques\n• Physique / Chimie\n• SVT / Biologie\n• Histoire / Géographie\n• Français / Littérature\n• Philosophie / Économie\n\nPose ta question plus précisément ! 💪`
}
