import { createContext, useContext, useState, useEffect } from 'react'

const LangContext = createContext(null)

export const TRANSLATIONS = {
  // ── Navigation ───────────────────────────────────────────────────
  nav: {
    dashboard:   { fr: 'Tableau de bord', en: 'Dashboard' },
    subjects:    { fr: 'Matières',        en: 'Subjects' },
    qcm:         { fr: 'QCM',            en: 'Quizzes' },
    docQuiz:     { fr: 'Doc → Quiz',      en: 'Doc → Quiz' },
    aiTutor:     { fr: 'Tuteur IA',       en: 'AI Tutor' },
    progress:    { fr: 'Progression',     en: 'Progress' },
    profile:     { fr: 'Mon profil',      en: 'My Profile' },
    logout:      { fr: 'Déconnexion',     en: 'Log out' },
    login:       { fr: 'Connexion',       en: 'Log in' },
    signup:      { fr: "S'inscrire",      en: 'Sign up' },
    newConv:     { fr: 'Nouvelle conv.',  en: 'New chat' },
  },

  // ── Landing ──────────────────────────────────────────────────────
  landing: {
    badge:       { fr: 'Préparation Bac & GCE A-Level — Afrique francophone', en: 'Bac & GCE A-Level Prep — Francophone Africa' },
    heroTitle1:  { fr: 'Réussis ton',     en: 'Ace your' },
    heroWord:    { fr: 'Baccalauréat',    en: 'Baccalaureate' },
    heroTitle2:  { fr: "avec l'intelligence artificielle", en: 'with artificial intelligence' },
    heroSub:     { fr: '12 matières, 200+ QCM, des cours complets et un tuteur IA disponible 24h/24. La plateforme conçue pour les élèves africains.', en: '12 subjects, 200+ quizzes, full courses and an AI tutor available 24/7. The platform built for African students.' },
    startFree:   { fr: 'Commencer gratuitement →', en: 'Get started free →' },
    alreadyHave: { fr: "J'ai déjà un compte", en: 'I already have an account' },
    subjectsTitle: { fr: 'Toutes les matières de ton examen', en: 'All your exam subjects' },
    subjectsSub: { fr: 'Du Bac C au GCE A-Level, toutes les matières sont couvertes.', en: 'From Bac C to GCE A-Level, every subject is covered.' },
    howTitle:    { fr: 'Comment ça marche ?', en: 'How does it work?' },
    ctaTitle:    { fr: 'Prêt à décrocher ton diplôme ?', en: 'Ready to get your diploma?' },
    ctaSub:      { fr: "Rejoins des milliers d'élèves qui préparent leur Bac avec TuteurIA.", en: 'Join thousands of students preparing their exams with TuteurIA.' },
    ctaBtn:      { fr: 'S\'inscrire gratuitement →', en: 'Sign up for free →' },
  },

  // ── Auth ─────────────────────────────────────────────────────────
  auth: {
    loginTitle:  { fr: 'Bon retour !', en: 'Welcome back!' },
    loginSub:    { fr: 'Connecte-toi pour continuer.', en: 'Log in to continue.' },
    signupTitle: { fr: 'Crée ton compte', en: 'Create your account' },
    signupSub:   { fr: 'Inscris-toi et commence à réviser !', en: 'Sign up and start studying!' },
    email:       { fr: 'Email', en: 'Email' },
    password:    { fr: 'Mot de passe', en: 'Password' },
    confirmPass: { fr: 'Confirmer le mot de passe', en: 'Confirm password' },
    fullName:    { fr: 'Nom complet', en: 'Full name' },
    loginBtn:    { fr: 'Se connecter', en: 'Log in' },
    signupBtn:   { fr: 'Créer mon compte gratuitement', en: 'Create my free account' },
    demoBtn:     { fr: 'Essayer en mode démo', en: 'Try demo mode' },
    noAccount:   { fr: "Pas encore de compte ?", en: "Don't have an account?" },
    hasAccount:  { fr: 'Déjà inscrit ?', en: 'Already registered?' },
    linking:     { fr: 'Connexion…', en: 'Logging in…' },
    creating:    { fr: 'Création…', en: 'Creating…' },
    passError:   { fr: 'Les mots de passe ne correspondent pas.', en: 'Passwords do not match.' },
    passLength:  { fr: 'Le mot de passe doit contenir au moins 6 caractères.', en: 'Password must be at least 6 characters.' },
    loginError:  { fr: 'Email ou mot de passe incorrect.', en: 'Incorrect email or password.' },
  },

  // ── Dashboard ────────────────────────────────────────────────────
  dashboard: {
    greeting_morning: { fr: 'Bonjour', en: 'Good morning' },
    greeting_afternoon: { fr: 'Bon après-midi', en: 'Good afternoon' },
    greeting_evening: { fr: 'Bonsoir', en: 'Good evening' },
    subjects:    { fr: 'Matières disponibles', en: 'Available subjects' },
    quizzes:     { fr: 'QCM disponibles', en: 'Quizzes available' },
    lessons:     { fr: 'Leçons de cours', en: 'Course lessons' },
    aiTutor:     { fr: 'Tuteur IA', en: 'AI Tutor' },
    yourSubjects: { fr: 'Tes matières', en: 'Your subjects' },
    seeAll:      { fr: 'Tout voir', en: 'See all' },
    quickActions: { fr: 'Actions rapides', en: 'Quick actions' },
    suggestedQCM: { fr: 'QCM suggérés', en: 'Suggested quizzes' },
    allQCM:      { fr: 'Tous →', en: 'All →' },
    docQuizPromo: { fr: 'Importe tes cours et l\'IA génère des QCM personnalisés automatiquement.', en: 'Import your course and the AI automatically generates personalized quizzes.' },
    tryIt:       { fr: 'Essayer', en: 'Try it' },
    fastProgress: { fr: 'Progression rapide', en: 'Quick progress' },
    seeDetail:   { fr: 'Voir tout le détail', en: 'See full details' },
    chap:        { fr: 'chap.', en: 'ch.' },
    quote:       { fr: '"Le succès n\'est pas final, l\'échec n\'est pas fatal : c\'est le courage de continuer qui compte."', en: '"Success is not final, failure is not fatal: it is the courage to continue that counts."' },
    quoteAuthor: { fr: '— Winston Churchill', en: '— Winston Churchill' },
    doQCM:       { fr: 'Faire un QCM', en: 'Take a quiz' },
    askAI:       { fr: "Poser une question à l'IA", en: 'Ask the AI a question' },
    studyCourse: { fr: 'Réviser un cours', en: 'Study a lesson' },
    importDoc:   { fr: 'Importer un document', en: 'Import a document' },
    seeProgress: { fr: 'Voir ma progression', en: 'View my progress' },
  },

  // ── Subjects ─────────────────────────────────────────────────────
  subjects: {
    title:       { fr: 'Toutes les matières', en: 'All subjects' },
    sub:         { fr: 'Cours, chapitres et QCM pour chaque matière du programme.', en: 'Courses, chapters and quizzes for every subject in the curriculum.' },
    search:      { fr: 'Chercher une matière…', en: 'Search a subject…' },
    all:         { fr: 'Toutes', en: 'All' },
    bac:         { fr: 'Baccalauréat', en: 'Baccalaureate' },
    gce:         { fr: 'GCE A-Level', en: 'GCE A-Level' },
    chap:        { fr: 'chap.', en: 'ch.' },
    lessons:     { fr: 'leçons', en: 'lessons' },
    qcm:         { fr: 'QCM', en: 'Quizzes' },
    see:         { fr: 'Voir', en: 'View' },
    none:        { fr: 'Aucune matière trouvée', en: 'No subject found' },
  },

  // ── Subject Detail ───────────────────────────────────────────────
  subjectDetail: {
    back:        { fr: '← Retour aux matières', en: '← Back to subjects' },
    chapitres:   { fr: 'chapitres', en: 'chapters' },
    lecons:      { fr: 'leçons', en: 'lessons' },
    tabCours:    { fr: 'Cours', en: 'Courses' },
    tabQCM:      { fr: 'QCM', en: 'Quizzes' },
    chapter:     { fr: 'Chapitre', en: 'Chapter' },
    noQCM:       { fr: 'Aucun QCM disponible pour cette matière', en: 'No quizzes available for this subject' },
    start:       { fr: 'Commencer →', en: 'Start →' },
    duration:    { fr: 'min', en: 'min' },
    questions:   { fr: 'questions', en: 'questions' },
  },

  // ── QCM ──────────────────────────────────────────────────────────
  qcm: {
    title:       { fr: 'QCM — Questions à choix multiples', en: 'Quizzes — Multiple choice questions' },
    sub:         { fr: 'exercices disponibles sur toutes les matières.', en: 'exercises available across all subjects.' },
    search:      { fr: 'Chercher un QCM…', en: 'Search a quiz…' },
    filters:     { fr: 'Filtres', en: 'Filters' },
    subject:     { fr: 'Matière', en: 'Subject' },
    allSubjects: { fr: 'Toutes les matières', en: 'All subjects' },
    difficulty:  { fr: 'Difficulté', en: 'Difficulty' },
    allDiff:     { fr: 'Toutes', en: 'All' },
    easy:        { fr: 'Facile', en: 'Easy' },
    medium:      { fr: 'Moyen', en: 'Medium' },
    hard:        { fr: 'Difficile', en: 'Hard' },
    found:       { fr: 'QCM trouvé', en: 'quiz found' },
    founds:      { fr: 'QCM trouvés', en: 'quizzes found' },
    questions:   { fr: 'questions', en: 'questions' },
    start:       { fr: 'Commencer', en: 'Start' },
    noResult:    { fr: 'Aucun QCM trouvé', en: 'No quiz found' },
    reset:       { fr: 'Réinitialiser les filtres', en: 'Reset filters' },
  },

  // ── QCM Take ─────────────────────────────────────────────────────
  qcmTake: {
    questions:   { fr: 'Questions', en: 'Questions' },
    minutes:     { fr: 'Minutes', en: 'Minutes' },
    level:       { fr: 'Niveau', en: 'Level' },
    readCarefully: { fr: 'Lis bien chaque question', en: 'Read each question carefully' },
    oneAnswer:   { fr: 'Une seule réponse correcte par question', en: 'Only one correct answer per question' },
    explShown:   { fr: "Les explications s'affichent après chaque réponse", en: 'Explanations shown after each answer' },
    startBtn:    { fr: 'Commencer le QCM →', en: 'Start the quiz →' },
    back:        { fr: '← Retour aux QCM', en: '← Back to quizzes' },
    question:    { fr: 'Question', en: 'Question' },
    good:        { fr: 'Bonne réponse !', en: 'Correct answer!' },
    wrong:       { fr: 'Mauvaise réponse', en: 'Wrong answer' },
    goodAnswer:  { fr: 'Bonne réponse :', en: 'Correct answer:' },
    yourChoice:  { fr: 'Ton choix :', en: 'Your choice:' },
    next:        { fr: 'Question suivante →', en: 'Next question →' },
    finish:      { fr: 'Voir les résultats', en: 'See results' },
    retry:       { fr: 'Recommencer', en: 'Retry' },
    otherQCM:   { fr: '← Autres QCM', en: '← Other quizzes' },
    correct:     { fr: 'bonnes réponses', en: 'correct answers' },
    revision:    { fr: 'Révision des réponses', en: 'Answer review' },
    excellent:   { fr: 'Excellent travail !', en: 'Excellent work!' },
    good2:       { fr: 'Bien joué !', en: 'Well done!' },
    keep:        { fr: 'Continue les efforts !', en: 'Keep it up!' },
    study:       { fr: 'Il faut réviser davantage.', en: 'You need to study more.' },
    finishedIn:  { fr: 'Quiz terminé ·', en: 'Quiz finished ·' },
  },

  // ── Doc Quiz ─────────────────────────────────────────────────────
  docQuiz: {
    title:       { fr: 'Document → QCM', en: 'Document → Quiz' },
    sub:         { fr: "Importe un document, l'IA l'analyse et génère automatiquement des QCM.", en: 'Import a document, the AI analyses it and automatically generates quizzes.' },
    dropTitle:   { fr: 'Glisse ton document ici', en: 'Drop your document here' },
    dropSub:     { fr: 'ou clique pour parcourir', en: 'or click to browse' },
    maxSize:     { fr: 'Taille max : 10 Mo', en: 'Max size: 10 MB' },
    options:     { fr: 'Options de génération', en: 'Generation options' },
    numQ:        { fr: 'Nombre de questions :', en: 'Number of questions:' },
    difficulty:  { fr: 'Difficulté', en: 'Difficulty' },
    analyze:     { fr: 'Analyser et générer les QCM', en: 'Analyse and generate quizzes' },
    analyzing:   { fr: 'Analyse en cours…', en: 'Analysing…' },
    analyzeStep1: { fr: 'Lecture du document', en: 'Reading document' },
    analyzeStep2: { fr: 'Identification des concepts clés', en: 'Identifying key concepts' },
    analyzeStep3: { fr: 'Génération des questions', en: 'Generating questions' },
    analyzeStep4: { fr: 'Vérification des réponses', en: 'Checking answers' },
    noKey:       { fr: "Clé Gemini non configurée. Des questions de démo seront générées.", en: "Gemini key not configured. Demo questions will be generated." },
    newDoc:      { fr: 'Nouveau doc', en: 'New doc' },
    restart:     { fr: 'Recommencer', en: 'Restart' },
    revision:    { fr: 'Révision', en: 'Review' },
    based:       { fr: 'Basé sur :', en: 'Based on:' },
  },

  // ── AI Tutor ─────────────────────────────────────────────────────
  aiTutor: {
    title:       { fr: 'Tuteur IA', en: 'AI Tutor' },
    available:   { fr: 'Disponible 24/7', en: 'Available 24/7' },
    newConv:     { fr: 'Nouvelle conv.', en: 'New chat' },
    demoMode:    { fr: 'Mode démo', en: 'Demo mode' },
    placeholder: { fr: 'Pose ta question… (Entrée pour envoyer)', en: 'Ask your question… (Enter to send)' },
    shiftEnter:  { fr: 'Shift+Entrée pour un saut de ligne', en: 'Shift+Enter for a new line' },
    suggestions: { fr: 'Suggestions', en: 'Suggestions' },
  },

  // ── Progress ─────────────────────────────────────────────────────
  progress: {
    title:       { fr: 'Ma progression', en: 'My progress' },
    sub:         { fr: 'Analyse tes résultats et identifie tes points faibles.', en: 'Analyse your results and identify weak areas.' },
    tried:       { fr: 'QCM tentés', en: 'Quizzes attempted' },
    avg:         { fr: 'Score moyen', en: 'Average score' },
    subjects:    { fr: 'Matières travaillées', en: 'Subjects covered' },
    rate:        { fr: 'Taux de réussite', en: 'Success rate' },
    chart:       { fr: 'Analyse des performances', en: 'Performance analysis' },
    radar:       { fr: 'Radar', en: 'Radar' },
    evolution:   { fr: 'Évolution', en: 'Evolution' },
    bars:        { fr: 'Matières', en: 'Subjects' },
    bySubject:   { fr: 'Score par matière', en: 'Score by subject' },
    recent:      { fr: 'Activité récente', en: 'Recent activity' },
    week:        { fr: 'Sem', en: 'Wk' },
  },

  // ── Profile ──────────────────────────────────────────────────────
  profile: {
    title:       { fr: 'Mon profil', en: 'My profile' },
    sub:         { fr: 'Gère tes informations et préférences.', en: 'Manage your information and preferences.' },
    freePlan:    { fr: 'Plan gratuit', en: 'Free plan' },
    done:        { fr: 'QCM réalisés', en: 'Quizzes done' },
    avg:         { fr: 'Score moyen', en: 'Average score' },
    active:      { fr: 'Jours actifs', en: 'Active days' },
    prefs:       { fr: 'Préférences', en: 'Preferences' },
    darkMode:    { fr: 'Mode sombre', en: 'Dark mode' },
    darkSub:     { fr: "Thème de l'interface", en: 'Interface theme' },
    reminders:   { fr: "Rappels d'étude", en: 'Study reminders' },
    remindersSub: { fr: 'Notifications pour réviser', en: 'Notifications to revise' },
    newQCM:      { fr: 'Nouveaux QCM', en: 'New quizzes' },
    newQCMSub:   { fr: 'Alertes nouveaux contenus', en: 'New content alerts' },
    save:        { fr: 'Sauvegarder les préférences', en: 'Save preferences' },
    saved:       { fr: 'Sauvegardé !', en: 'Saved!' },
    logout:      { fr: 'Se déconnecter', en: 'Log out' },
  },

  // ── Common ───────────────────────────────────────────────────────
  common: {
    loading:     { fr: 'Chargement…', en: 'Loading…' },
    error:       { fr: 'Une erreur est survenue', en: 'An error occurred' },
    retry:       { fr: 'Réessayer', en: 'Retry' },
    cancel:      { fr: 'Annuler', en: 'Cancel' },
    confirm:     { fr: 'Confirmer', en: 'Confirm' },
    save:        { fr: 'Sauvegarder', en: 'Save' },
    back:        { fr: 'Retour', en: 'Back' },
    next:        { fr: 'Suivant', en: 'Next' },
    previous:    { fr: 'Précédent', en: 'Previous' },
    search:      { fr: 'Rechercher', en: 'Search' },
    notFound:    { fr: 'introuvable', en: 'not found' },
    min:         { fr: 'min', en: 'min' },
    questions:   { fr: 'questions', en: 'questions' },
    easy:        { fr: 'Facile', en: 'Easy' },
    medium:      { fr: 'Moyen', en: 'Medium' },
    hard:        { fr: 'Difficile', en: 'Hard' },
  },
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('tuteur-lang') || 'fr')

  useEffect(() => {
    localStorage.setItem('tuteur-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = (section, key) => {
    const entry = TRANSLATIONS[section]?.[key]
    if (!entry) return key
    return entry[lang] || entry.fr || key
  }

  const toggleLang = () => setLang(l => l === 'fr' ? 'en' : 'fr')

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
