/**
 * Renders markdown-like course content as a beautifully styled textbook page.
 *
 * Supported syntax in the `content` string:
 *   # Title           → chapter title (h1)
 *   ## Section        → section heading (h2)
 *   ### Sub-section   → sub-section heading (h3)
 *   **bold**          → bold
 *   *italic*          → italic
 *   `inline code`     → monospace highlight
 *   ```               → code / formula block
 *   > blockquote      → definition / theorem box
 *   !! important text → alert / important box
 *   - item            → bullet list
 *   1. item           → numbered list
 *   ---               → horizontal divider
 *   [blank line]      → paragraph break
 */

import { motion } from 'framer-motion'

function parseInline(text) {
  // bold, italic, inline code
  const parts = []
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`)/g
  let last = 0, m
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) parts.push(<span key={last}>{text.slice(last, m.index)}</span>)
    if (m[2]) parts.push(<strong key={m.index} className="font-bold text-gray-900 dark:text-white">{m[2]}</strong>)
    else if (m[3]) parts.push(<em key={m.index} className="italic text-gray-700 dark:text-gray-300">{m[3]}</em>)
    else if (m[4]) parts.push(<code key={m.index} className="bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 font-mono text-[0.85em] px-1.5 py-0.5 rounded">{m[4]}</code>)
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push(<span key={last}>{text.slice(last)}</span>)
  return parts.length ? parts : text
}

export default function CourseReader({ content, title }) {
  if (!content) return null

  const lines = content.split('\n')
  const elements = []
  let i = 0
  let listBuf = []
  let olBuf = []

  const flushLists = () => {
    if (listBuf.length) {
      elements.push(
        <ul key={`ul-${i}`} className="my-4 space-y-1.5 pl-2">
          {listBuf.map((item, j) => (
            <li key={j} className="flex gap-2.5 text-gray-700 dark:text-gray-300 text-[0.95rem] leading-relaxed">
              <span className="mt-1.5 w-2 h-2 rounded-full bg-sky-400 flex-shrink-0" />
              <span>{parseInline(item)}</span>
            </li>
          ))}
        </ul>
      )
      listBuf = []
    }
    if (olBuf.length) {
      elements.push(
        <ol key={`ol-${i}`} className="my-4 space-y-1.5 pl-2">
          {olBuf.map((item, j) => (
            <li key={j} className="flex gap-2.5 text-gray-700 dark:text-gray-300 text-[0.95rem] leading-relaxed">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-100 dark:bg-sky-950/50 text-sky-700 dark:text-sky-400 text-xs font-bold flex items-center justify-center mt-0.5">{j + 1}</span>
              <span>{parseInline(item)}</span>
            </li>
          ))}
        </ol>
      )
      olBuf = []
    }
  }

  while (i < lines.length) {
    const line = lines[i]
    const trimmed = line.trim()

    // H1
    if (trimmed.startsWith('# ') && !trimmed.startsWith('## ')) {
      flushLists()
      elements.push(
        <h1 key={i} className="text-2xl font-black text-gray-900 dark:text-white mt-8 mb-4 pb-2 border-b-2 border-sky-200 dark:border-sky-900">
          {parseInline(trimmed.slice(2))}
        </h1>
      )
    }
    // H2
    else if (trimmed.startsWith('## ') && !trimmed.startsWith('### ')) {
      flushLists()
      elements.push(
        <h2 key={i} className="text-lg font-black text-gray-900 dark:text-white mt-7 mb-3 flex items-center gap-2">
          <span className="w-1 h-5 rounded-full bg-sky-500 flex-shrink-0" />
          {parseInline(trimmed.slice(3))}
        </h2>
      )
    }
    // H3
    else if (trimmed.startsWith('### ')) {
      flushLists()
      elements.push(
        <h3 key={i} className="text-base font-bold text-sky-700 dark:text-sky-400 mt-5 mb-2">
          {parseInline(trimmed.slice(4))}
        </h3>
      )
    }
    // Code / formula block
    else if (trimmed.startsWith('```')) {
      flushLists()
      const codeLines = []
      i++
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      elements.push(
        <div key={i} className="my-4 bg-gray-900 dark:bg-black rounded-xl overflow-hidden border border-gray-800">
          <div className="flex items-center gap-1.5 px-4 py-2 border-b border-gray-800">
            {['bg-red-500','bg-yellow-500','bg-green-500'].map((c,j) => (
              <span key={j} className={`w-2.5 h-2.5 rounded-full ${c}`} />
            ))}
          </div>
          <pre className="px-4 py-3 text-sm text-green-300 font-mono overflow-x-auto leading-relaxed">
            {codeLines.join('\n')}
          </pre>
        </div>
      )
    }
    // Blockquote (theorem / definition)
    else if (trimmed.startsWith('> ')) {
      flushLists()
      elements.push(
        <div key={i} className="my-4 bg-violet-50 dark:bg-violet-950/20 border-l-4 border-violet-400 dark:border-violet-600 rounded-r-xl px-5 py-3.5">
          <p className="text-sm font-bold text-violet-700 dark:text-violet-400 mb-1 uppercase tracking-wide">Définition / Théorème</p>
          <p className="text-gray-800 dark:text-gray-200 text-[0.95rem] leading-relaxed italic">
            {parseInline(trimmed.slice(2))}
          </p>
        </div>
      )
    }
    // Important alert
    else if (trimmed.startsWith('!! ')) {
      flushLists()
      elements.push(
        <div key={i} className="my-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl px-5 py-3.5 flex gap-3">
          <span className="text-amber-500 text-lg flex-shrink-0">⚠️</span>
          <p className="text-amber-800 dark:text-amber-300 text-[0.95rem] leading-relaxed font-medium">
            {parseInline(trimmed.slice(3))}
          </p>
        </div>
      )
    }
    // Bullet list
    else if (trimmed.startsWith('- ')) {
      listBuf.push(trimmed.slice(2))
    }
    // Ordered list
    else if (/^\d+\.\s/.test(trimmed)) {
      olBuf.push(trimmed.replace(/^\d+\.\s/, ''))
    }
    // Horizontal rule
    else if (trimmed === '---') {
      flushLists()
      elements.push(<hr key={i} className="my-6 border-gray-200 dark:border-gray-800" />)
    }
    // Empty line
    else if (trimmed === '') {
      flushLists()
    }
    // Regular paragraph
    else if (trimmed.length > 0) {
      flushLists()
      elements.push(
        <p key={i} className="text-gray-700 dark:text-gray-300 leading-[1.85] text-[0.97rem] my-3">
          {parseInline(trimmed)}
        </p>
      )
    }

    i++
  }
  flushLists()

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="course-content max-w-none"
    >
      {elements}
    </motion.article>
  )
}
