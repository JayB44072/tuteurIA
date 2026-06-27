import { useEffect, useRef, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { useAuth } from '../context/AuthContext'

// ── Bilingual data ──────────────────────────────────────────────────────────
const DATA = {
  fr: {
    badge: 'Préparation Bac & GCE A-Level — Afrique francophone',
    heroTitle1: 'Réussis ton',
    heroWord: 'Baccalauréat',
    heroTitle2: "avec l'intelligence artificielle",
    heroSub: '12 matières, 200+ QCM, des cours complets et un tuteur IA disponible 24h/24. La plateforme conçue pour les élèves africains.',
    startBtn: 'Commencer gratuitement →',
    loginBtn: "J'ai déjà un compte",
    section1Label: 'Programme complet',
    section1Title: 'Toutes les matières de ton examen',
    section1Sub: 'Du Bac C au GCE A-Level, toutes les matières sont couvertes.',
    section2Label: 'Fonctionnalités',
    section2Title: "Tout ce qu'il te faut pour réussir",
    section3Label: 'Simple et efficace',
    section3Title: 'Comment ça marche ?',
    section4Label: 'Témoignages',
    section4Title: 'Ils ont réussi avec TuteurIA',
    ctaTitle: 'Prêt à décrocher ton diplôme ?',
    ctaSub: "Rejoins des milliers d'élèves qui préparent leur Bac avec TuteurIA.",
    ctaBtn: "S'inscrire gratuitement →",
    footerText: 'La plateforme de révision pour les élèves africains.',
    stats: [
      { value: '12+', label: 'Matières couvertes' },
      { value: '200+', label: 'Questions QCM' },
      { value: '50+', label: 'Leçons de cours' },
      { value: '24/7', label: 'Disponible' },
    ],
    features: [
      { icon: '📚', title: '12 matières', desc: 'Toutes les matières du Bac et GCE A-Level couvertes avec des cours complets.' },
      { icon: '✏️', title: '200+ QCM', desc: "Des centaines de questions préparées par des experts pour t'entraîner efficacement." },
      { icon: '🤖', title: 'Tuteur IA', desc: 'Un assistant intelligent disponible 24h/24 pour répondre à tes questions.' },
      { icon: '📊', title: 'Suivi détaillé', desc: 'Visualise ta progression par matière et identifie tes points faibles.' },
      { icon: '🎯', title: 'Objectifs ciblés', desc: "Des plans d'étude personnalisés adaptés à tes besoins." },
      { icon: '🏆', title: "Simulations d'examen", desc: "Reproduis les conditions réelles d'examen pour être prêt le jour J." },
    ],
    steps: [
      { step: '01', title: 'Crée ton compte', desc: 'Inscription gratuite en 30 secondes. Aucune carte bancaire requise.' },
      { step: '02', title: 'Choisis tes matières', desc: 'Sélectionne les matières de ton programme Bac ou GCE A-Level.' },
      { step: '03', title: 'Révise et pratique', desc: "Lis les cours, fais les QCM, pose tes questions au tuteur IA." },
      { step: '04', title: 'Suis ta progression', desc: "Analyse tes résultats et améliore-toi jusqu'à l'examen." },
    ],
    testimonials: [
      { name: 'Fatima K.', school: 'Lycée Général Leclerc, Douala', text: "Grâce à TuteurIA, j'ai amélioré ma moyenne en Maths de 8 à 15 en seulement 2 mois !" },
      { name: 'Emmanuel N.', school: 'Collège Vogt, Yaoundé', text: 'Le tuteur IA est incroyable. Il explique les concepts difficiles de Physique de façon simple.' },
      { name: 'Aïssatou D.', school: 'Lycée de Bafoussam', text: "Les QCM m'ont vraiment aidée à me préparer pour mon Bac. Je recommande à tous !" },
    ],
    subjects: [
      { nom: 'Mathématiques' }, { nom: 'Physique' }, { nom: 'Chimie' },
      { nom: 'SVT' }, { nom: 'Histoire' }, { nom: 'Géographie' },
      { nom: 'Français' }, { nom: 'Anglais' }, { nom: 'Philosophie' },
      { nom: 'Économie' }, { nom: 'Informatique' }, { nom: 'Espagnol' },
    ],
  },
  en: {
    badge: 'Bac & GCE A-Level Prep — Francophone Africa',
    heroTitle1: 'Ace your',
    heroWord: 'Baccalaureate',
    heroTitle2: 'with artificial intelligence',
    heroSub: '12 subjects, 200+ quizzes, full courses and an AI tutor available 24/7. The platform built for African students.',
    startBtn: 'Get started free →',
    loginBtn: 'I already have an account',
    section1Label: 'Full curriculum',
    section1Title: 'All your exam subjects',
    section1Sub: 'From Bac C to GCE A-Level, every subject is covered.',
    section2Label: 'Features',
    section2Title: 'Everything you need to succeed',
    section3Label: 'Simple and effective',
    section3Title: 'How does it work?',
    section4Label: 'Testimonials',
    section4Title: 'They succeeded with TuteurIA',
    ctaTitle: 'Ready to get your diploma?',
    ctaSub: 'Join thousands of students preparing their exams with TuteurIA.',
    ctaBtn: 'Sign up for free →',
    footerText: 'The study platform for African students.',
    stats: [
      { value: '12+', label: 'Subjects covered' },
      { value: '200+', label: 'Quiz questions' },
      { value: '50+', label: 'Course lessons' },
      { value: '24/7', label: 'Available' },
    ],
    features: [
      { icon: '📚', title: '12 subjects', desc: 'All Bac and GCE A-Level subjects covered with full course content.' },
      { icon: '✏️', title: '200+ Quizzes', desc: 'Hundreds of expert-crafted questions to help you practise effectively.' },
      { icon: '🤖', title: 'AI Tutor', desc: 'An intelligent assistant available 24/7 to answer your questions.' },
      { icon: '📊', title: 'Detailed tracking', desc: 'Visualise your progress by subject and identify weak areas.' },
      { icon: '🎯', title: 'Targeted goals', desc: 'Personalised study plans adapted to your needs.' },
      { icon: '🏆', title: 'Exam simulations', desc: 'Recreate real exam conditions to be ready on the day.' },
    ],
    steps: [
      { step: '01', title: 'Create your account', desc: 'Free sign-up in 30 seconds. No credit card required.' },
      { step: '02', title: 'Choose your subjects', desc: 'Select subjects from your Bac or GCE A-Level curriculum.' },
      { step: '03', title: 'Study and practise', desc: 'Read the courses, take quizzes, ask the AI tutor.' },
      { step: '04', title: 'Track your progress', desc: 'Analyse your results and keep improving until exam day.' },
    ],
    testimonials: [
      { name: 'Fatima K.', school: 'Lycée Général Leclerc, Douala', text: 'Thanks to TuteurIA, I improved my Maths average from 8 to 15 in just 2 months!' },
      { name: 'Emmanuel N.', school: 'Collège Vogt, Yaoundé', text: 'The AI tutor is incredible. It explains difficult Physics concepts simply.' },
      { name: 'Aïssatou D.', school: 'Lycée de Bafoussam', text: 'The quizzes really helped me prepare for my Bac. I recommend it to everyone!' },
    ],
    subjects: [
      { nom: 'Mathematics' }, { nom: 'Physics' }, { nom: 'Chemistry' },
      { nom: 'Biology' }, { nom: 'History' }, { nom: 'Geography' },
      { nom: 'French' }, { nom: 'English' }, { nom: 'Philosophy' },
      { nom: 'Economics' }, { nom: 'Computer Science' }, { nom: 'Spanish' },
    ],
  },
}

const SUBJECT_META = [
  { icon: '📐', color: 'from-blue-500 to-blue-600' },
  { icon: '⚛️', color: 'from-emerald-500 to-emerald-600' },
  { icon: '🧪', color: 'from-amber-500 to-amber-600' },
  { icon: '🌱', color: 'from-green-500 to-green-600' },
  { icon: '📜', color: 'from-orange-500 to-orange-600' },
  { icon: '🌍', color: 'from-teal-500 to-teal-600' },
  { icon: '✍️', color: 'from-indigo-500 to-indigo-600' },
  { icon: '🇬🇧', color: 'from-cyan-500 to-cyan-600' },
  { icon: '🧠', color: 'from-violet-500 to-violet-600' },
  { icon: '📊', color: 'from-rose-500 to-rose-600' },
  { icon: '💻', color: 'from-slate-500 to-slate-600' },
  { icon: '🇪🇸', color: 'from-yellow-500 to-yellow-600' },
]

// ── Sub-components ──────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0 }) {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-50px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

function AnimatedCounter({ raw }) {
  const [count, setCount] = useState(0)
  const ref = useRef()
  const inView = useInView(ref, { once: true })
  const num = parseInt(raw)
  const hasPlus = raw.includes('+')

  useEffect(() => {
    if (!inView || isNaN(num)) { setCount(raw); return }
    let cur = 0
    const step = num / 40
    const t = setInterval(() => {
      cur += step
      if (cur >= num) { setCount(num); clearInterval(t) }
      else setCount(Math.floor(cur))
    }, 30)
    return () => clearInterval(t)
  }, [inView])

  return <span ref={ref}>{isNaN(num) ? raw : `${count}${hasPlus ? '+' : ''}`}</span>
}

// ── Page ────────────────────────────────────────────────────────────────────
export default function Landing() {
  const { user, loading } = useAuth()
  const { lang } = useLang()
  const d = DATA[lang]

  const { scrollY } = useScroll()

  if (!loading && user) return <Navigate to="/dashboard" replace />
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const heroY = useTransform(scrollY, [0, 400], [0, -80])
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActiveTestimonial(p => (p + 1) % d.testimonials.length), 4000)
    return () => clearInterval(id)
  }, [d.testimonials.length])

  return (
    <div className="overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <motion.section
        style={{
          opacity: heroOpacity,
          y: heroY,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
        }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ x: [0, 60, 0], y: [0, -40, 0] }} transition={{ duration: 12, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
          <motion.div animate={{ x: [0, -50, 0], y: [0, 60, 0] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl" />
          {[...Array(18)].map((_, i) => (
            <motion.div key={i} animate={{ y: [-20, 20, -20], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              style={{ left: `${5 + i * 5.5}%`, top: `${10 + (i % 5) * 18}%` }} />
          ))}
        </div>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.3) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {d.badge}
          </motion.div>

          {/* Title */}
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            {d.heroTitle1}{' '}
            <span className="gradient-text animate-gradient-x bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400">
              {d.heroWord}
            </span>
            <br />{d.heroTitle2}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            {d.heroSub}
          </motion.p>

          {/* CTA buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/auth/signup"
              className="group relative overflow-hidden bg-gradient-to-r from-sky-500 to-violet-600 text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-2xl shadow-sky-500/30 hover:shadow-sky-500/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center">
              <span className="relative z-10">{d.startBtn}</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            </Link>
            <Link to="/auth/login"
              className="glass text-white font-medium px-8 py-4 rounded-2xl text-lg hover:bg-white/20 transition-all duration-300 w-full sm:w-auto text-center">
              {d.loginBtn}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20">
            {d.stats.map((s, i) => (
              <div key={i} className="glass rounded-2xl p-4">
                <div className="text-3xl font-black text-white">
                  <AnimatedCounter raw={s.value} />
                </div>
                <div className="text-white/60 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </motion.section>

      {/* ── SUBJECTS ─────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-sky-600 dark:text-sky-400 font-semibold text-sm uppercase tracking-wider">{d.section1Label}</span>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mt-2 mb-4">{d.section1Title}</h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">{d.section1Sub}</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {d.subjects.map((s, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <motion.div whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-4 text-center shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700 transition-all cursor-default">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${SUBJECT_META[i].color} flex items-center justify-center text-2xl mx-auto mb-3`}>
                    {SUBJECT_META[i].icon}
                  </div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{s.nom}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-sky-600 dark:text-sky-400 font-semibold text-sm uppercase tracking-wider">{d.section2Label}</span>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mt-2">{d.section2Title}</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.features.map((f, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <motion.div whileHover={{ y: -6 }}
                  className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-sky-300 dark:hover:border-sky-700 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">{f.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-sky-600 dark:text-sky-400 font-semibold text-sm uppercase tracking-wider">{d.section3Label}</span>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white mt-2">{d.section3Title}</h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center text-white font-black text-lg mx-auto mb-4 shadow-lg shadow-sky-500/20">
                    {step.step}
                  </div>
                  <h3 className="font-black text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-sky-600 dark:text-sky-400 font-semibold text-sm uppercase tracking-wider">{d.section4Label}</span>
            <h2 className="text-4xl font-black text-gray-900 dark:text-white mt-2 mb-12">{d.section4Title}</h2>
          </FadeIn>
          <div className="relative h-44">
            {d.testimonials.map((t2, i) => (
              <motion.div key={i}
                animate={{ opacity: activeTestimonial === i ? 1 : 0, y: activeTestimonial === i ? 0 : 16 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 flex flex-col items-center justify-center px-4 ${activeTestimonial === i ? '' : 'pointer-events-none'}`}>
                <div className="text-3xl mb-3">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-4">"{t2.text}"</p>
                <p className="font-bold text-gray-900 dark:text-white">{t2.name}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{t2.school}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-2">
            {d.testimonials.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)}
                className={`h-2 rounded-full transition-all duration-300 ${activeTestimonial === i ? 'w-6 bg-sky-500' : 'w-2 bg-gray-300 dark:bg-gray-700'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-sky-500 to-violet-600">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl font-black text-white mb-4">{d.ctaTitle}</h2>
            <p className="text-white/70 text-lg mb-10">{d.ctaSub}</p>
            <Link to="/auth/signup"
              className="inline-block bg-white text-sky-600 font-bold px-10 py-4 rounded-2xl text-lg hover:bg-gray-50 transition-all shadow-2xl hover:scale-105 duration-300">
              {d.ctaBtn}
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer className="bg-gray-950 dark:bg-black text-gray-500 py-10 text-center text-sm">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center">
            <span className="text-white text-xs font-black">T</span>
          </div>
          <span className="text-white font-black">TuteurIA</span>
        </div>
        <p>© {new Date().getFullYear()} TuteurIA — {d.footerText}</p>
      </footer>
    </div>
  )
}
