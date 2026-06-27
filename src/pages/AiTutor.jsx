import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Send, Sparkles, RotateCcw, AlertCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

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
    content: `Salut ! Je suis ton tuteur IA, disponible pour toutes tes matières du Bac et GCE A-Level. 🎓\n\nPose-moi n'importe quelle question sur les mathématiques, la physique, l'histoire, la littérature, la philosophie...\n\nJe suis là pour expliquer, résumer et t'aider à comprendre ! 💪`
  }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef()
  const inputRef = useRef()
  const GROQ_KEY = import.meta.env.VITE_GROQ_API_KEY

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const sendMessage = async (text = input) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return
    setInput('')
    const userMsg = { role: 'user', content: trimmed }
    setMessages(prev => [...prev, userMsg])
    setLoading(true)

    try {
      let aiResponse = ''
      if (GROQ_KEY) {
        const history = [...messages, userMsg].map(m => ({
          role: m.role === 'user' ? 'user' : 'assistant',
          content: m.content,
        }))
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GROQ_KEY}`,
          },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
              {
                role: 'system',
                content: "Tu es un tuteur IA expert pour la préparation au Baccalauréat et GCE A-Level en Afrique francophone. Réponds toujours en français sauf si l'élève écrit en anglais. Sois pédagogique, clair, bienveillant. Utilise des exemples concrets africains quand c'est pertinent. Structure tes réponses avec des titres (##) quand la réponse est longue.",
              },
              ...history,
            ],
            temperature: 0.7,
            max_tokens: 1024,
          }),
        })
        const data = await res.json()
        aiResponse = data.choices?.[0]?.message?.content || "Désolé, je n'ai pas pu générer une réponse."
      } else {
        await new Promise(r => setTimeout(r, 1200))
        aiResponse = generateFallbackResponse(trimmed)
      }
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }])
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: generateFallbackResponse(trimmed) }])
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
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Bot size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-lg font-black text-gray-900 dark:text-white">Tuteur IA</h1>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Disponible 24/7
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {!GROQ_KEY && (
            <div className="flex items-center gap-1.5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400 text-xs px-2.5 py-1.5 rounded-lg">
              <AlertCircle size={12} /> Mode démo
            </div>
          )}
          <button onClick={clearChat} className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg transition-colors">
            <RotateCcw size={13} /> Nouvelle conv.
          </button>
        </div>
      </motion.div>

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
