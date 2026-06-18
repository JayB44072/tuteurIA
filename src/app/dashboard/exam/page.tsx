'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import AppLayout from '@/components/AppLayout';
import {
  BookOpen, Clock, Trophy, CheckCircle2, XCircle, AlertTriangle,
  BarChart2, Target, RotateCcw, Zap, ChevronRight, ChevronLeft,
  Play, Pause, Flag, TrendingUp, Star, Award
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ExamQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctId: string;
  explanation: string;
  subject: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  curriculumRef: string;
  points: number;
}

interface ExamConfig {
  title: string;
  subject: string;
  durationMinutes: number;
  totalPoints: number;
}

type ExamPhase = 'setup' | 'active' | 'report';

// ─── Exam banks ───────────────────────────────────────────────────────────────

const EXAM_TEMPLATES: (ExamConfig & { questions: ExamQuestion[] })[] = [
  {
    title: 'Examen Blanc — Mathématiques Bac D',
    subject: 'Mathématiques',
    durationMinutes: 20,
    totalPoints: 20,
    questions: [
      {
        id: 'ex-m1',
        question: 'Calculer la dérivée de f(x) = x³ − 4x² + 7x − 2',
        options: [
          { id: 'a', text: 'f\'(x) = 3x² − 8x + 7' },
          { id: 'b', text: 'f\'(x) = 3x² − 4x + 7' },
          { id: 'c', text: 'f\'(x) = x² − 8x + 7' },
          { id: 'd', text: 'f\'(x) = 3x³ − 8x + 7' },
        ],
        correctId: 'a',
        explanation: 'Règle de dérivation : d/dx(xⁿ) = nxⁿ⁻¹. Donc : 3x², −8x, +7, 0.',
        subject: 'Mathématiques',
        topic: 'Dérivées',
        difficulty: 'easy',
        curriculumRef: 'Bac D — Analyse · Ch.3',
        points: 2,
      },
      {
        id: 'ex-m2',
        question: 'Résoudre l\'inéquation : x² − 5x + 6 < 0',
        options: [
          { id: 'a', text: 'x ∈ ]−∞, 2[ ∪ ]3, +∞[' },
          { id: 'b', text: 'x ∈ ]2, 3[' },
          { id: 'c', text: 'x ∈ [2, 3]' },
          { id: 'd', text: 'x ∈ ]−∞, 2] ∪ [3, +∞[' },
        ],
        correctId: 'b',
        explanation: 'x² − 5x + 6 = (x−2)(x−3). Le trinôme est négatif entre ses racines : x ∈ ]2, 3[.',
        subject: 'Mathématiques',
        topic: 'Inéquations',
        difficulty: 'medium',
        curriculumRef: 'Bac D — Algèbre · Ch.2',
        points: 3,
      },
      {
        id: 'ex-m3',
        question: 'Calculer ∫₀¹ (2x + 1) dx',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: '2' },
          { id: 'c', text: '3' },
          { id: 'd', text: '4' },
        ],
        correctId: 'b',
        explanation: '∫(2x+1)dx = x² + x. Évalué de 0 à 1 : (1+1) − (0+0) = 2.',
        subject: 'Mathématiques',
        topic: 'Intégrales',
        difficulty: 'medium',
        curriculumRef: 'Bac D — Analyse · Ch.5',
        points: 3,
      },
      {
        id: 'ex-m4',
        question: 'Dans un repère orthonormé, quelle est la distance entre A(1,2) et B(4,6) ?',
        options: [
          { id: 'a', text: '5' },
          { id: 'b', text: '7' },
          { id: 'c', text: '√7' },
          { id: 'd', text: '√25 = 5' },
        ],
        correctId: 'a',
        explanation: 'd = √((4−1)² + (6−2)²) = √(9+16) = √25 = 5.',
        subject: 'Mathématiques',
        topic: 'Géométrie analytique',
        difficulty: 'easy',
        curriculumRef: 'Bac D — Géométrie · Ch.1',
        points: 2,
      },
      {
        id: 'ex-m5',
        question: 'Quelle est la somme des termes d\'une suite géométrique de raison q=2, premier terme u₀=1, sur 5 termes ?',
        options: [
          { id: 'a', text: '15' },
          { id: 'b', text: '31' },
          { id: 'c', text: '32' },
          { id: 'd', text: '16' },
        ],
        correctId: 'b',
        explanation: 'Sₙ = u₀ × (qⁿ − 1)/(q − 1) = 1 × (2⁵ − 1)/(2−1) = 31.',
        subject: 'Mathématiques',
        topic: 'Suites',
        difficulty: 'hard',
        curriculumRef: 'Bac D — Algèbre · Ch.4',
        points: 4,
      },
      {
        id: 'ex-m6',
        question: 'Si cos(θ) = −1/2 et θ ∈ [π, 2π], quelle est la valeur de θ ?',
        options: [
          { id: 'a', text: 'θ = 2π/3' },
          { id: 'b', text: 'θ = 4π/3' },
          { id: 'c', text: 'θ = π/3' },
          { id: 'd', text: 'θ = 5π/3' },
        ],
        correctId: 'b',
        explanation: 'cos(θ) = −1/2 donne θ = 2π/3 ou θ = 4π/3. Dans [π, 2π], c\'est θ = 4π/3.',
        subject: 'Mathématiques',
        topic: 'Trigonométrie',
        difficulty: 'hard',
        curriculumRef: 'Bac D — Géométrie · Ch.6',
        points: 3,
      },
      {
        id: 'ex-m7',
        question: 'Quelle est la valeur de log₁₀(1000) ?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '10' },
          { id: 'd', text: '100' },
        ],
        correctId: 'b',
        explanation: 'log₁₀(1000) = log₁₀(10³) = 3.',
        subject: 'Mathématiques',
        topic: 'Logarithmes',
        difficulty: 'easy',
        curriculumRef: 'Bac D — Analyse · Ch.6',
        points: 3,
      },
    ],
  },
  {
    title: 'Examen Blanc — Sciences de la Vie Bac D',
    subject: 'Sciences de la Vie',
    durationMinutes: 15,
    totalPoints: 20,
    questions: [
      {
        id: 'ex-svt1',
        question: 'Quelle est la structure de l\'ADN décrite par Watson et Crick ?',
        options: [
          { id: 'a', text: 'Simple brin linéaire' },
          { id: 'b', text: 'Double hélice antiparallèle' },
          { id: 'c', text: 'Triple hélice' },
          { id: 'd', text: 'Anneau circulaire' },
        ],
        correctId: 'b',
        explanation: 'Watson et Crick ont décrit l\'ADN comme une double hélice antiparallèle en 1953, avec des bases complémentaires (A-T, G-C).',
        subject: 'Sciences de la Vie',
        topic: 'Structure de l\'ADN',
        difficulty: 'easy',
        curriculumRef: 'Bac D — SVT · Ch.1',
        points: 2,
      },
      {
        id: 'ex-svt2',
        question: 'Lors de la méiose, combien de cellules filles sont produites à partir d\'une cellule mère ?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '4' },
          { id: 'c', text: '8' },
          { id: 'd', text: '1' },
        ],
        correctId: 'b',
        explanation: 'La méiose produit 4 cellules filles haploïdes à partir d\'une cellule mère diploïde, via deux divisions successives.',
        subject: 'Sciences de la Vie',
        topic: 'Méiose',
        difficulty: 'easy',
        curriculumRef: 'Bac D — SVT · Ch.4',
        points: 2,
      },
      {
        id: 'ex-svt3',
        question: 'Quel est le rôle de l\'ARN polymérase dans la transcription ?',
        options: [
          { id: 'a', text: 'Synthétiser l\'ADN à partir d\'ARN' },
          { id: 'b', text: 'Synthétiser l\'ARNm à partir de l\'ADN' },
          { id: 'c', text: 'Traduire l\'ARNm en protéines' },
          { id: 'd', text: 'Répliquer l\'ADN' },
        ],
        correctId: 'b',
        explanation: 'L\'ARN polymérase catalyse la synthèse d\'ARN messager (ARNm) à partir du brin matrice de l\'ADN lors de la transcription.',
        subject: 'Sciences de la Vie',
        topic: 'Expression génétique',
        difficulty: 'medium',
        curriculumRef: 'Bac D — SVT · Ch.2',
        points: 3,
      },
      {
        id: 'ex-svt4',
        question: 'Quelle est la différence entre phénotype et génotype ?',
        options: [
          { id: 'a', text: 'Le phénotype est l\'ensemble des gènes, le génotype est l\'expression visible' },
          { id: 'b', text: 'Le génotype est l\'ensemble des allèles, le phénotype est l\'expression observable' },
          { id: 'c', text: 'Ils sont identiques' },
          { id: 'd', text: 'Le phénotype est héréditaire, le génotype ne l\'est pas' },
        ],
        correctId: 'b',
        explanation: 'Le génotype désigne la composition allélique d\'un individu. Le phénotype est l\'expression observable résultant du génotype et de l\'environnement.',
        subject: 'Sciences de la Vie',
        topic: 'Génétique',
        difficulty: 'medium',
        curriculumRef: 'Bac D — SVT · Ch.6',
        points: 3,
      },
      {
        id: 'ex-svt5',
        question: 'Quel est le produit final de la glycolyse ?',
        options: [
          { id: 'a', text: 'Acétyl-CoA' },
          { id: 'b', text: 'ATP uniquement' },
          { id: 'c', text: 'Pyruvate' },
          { id: 'd', text: 'CO₂' },
        ],
        correctId: 'c',
        explanation: 'La glycolyse dégrade le glucose en 2 molécules de pyruvate, produisant 2 ATP et 2 NADH dans le cytoplasme.',
        subject: 'Sciences de la Vie',
        topic: 'Métabolisme énergétique',
        difficulty: 'hard',
        curriculumRef: 'Bac D — SVT · Ch.5',
        points: 4,
      },
      {
        id: 'ex-svt6',
        question: 'Quel type de mutation entraîne un décalage du cadre de lecture ?',
        options: [
          { id: 'a', text: 'Mutation ponctuelle (substitution)' },
          { id: 'b', text: 'Insertion ou délétion d\'une base' },
          { id: 'c', text: 'Inversion chromosomique' },
          { id: 'd', text: 'Translocation' },
        ],
        correctId: 'b',
        explanation: 'L\'insertion ou la délétion d\'une ou plusieurs bases (non multiples de 3) décale le cadre de lecture et modifie tous les codons en aval.',
        subject: 'Sciences de la Vie',
        topic: 'Mutations',
        difficulty: 'hard',
        curriculumRef: 'Bac D — SVT · Ch.3',
        points: 3,
      },
      {
        id: 'ex-svt7',
        question: 'Quel est le rôle des lymphocytes T cytotoxiques ?',
        options: [
          { id: 'a', text: 'Produire des anticorps' },
          { id: 'b', text: 'Détruire les cellules infectées ou cancéreuses' },
          { id: 'c', text: 'Présenter les antigènes' },
          { id: 'd', text: 'Activer les lymphocytes B' },
        ],
        correctId: 'b',
        explanation: 'Les lymphocytes T cytotoxiques (CD8+) reconnaissent et détruisent les cellules présentant des antigènes étrangers (cellules infectées, tumorales).',
        subject: 'Sciences de la Vie',
        topic: 'Immunologie',
        difficulty: 'medium',
        curriculumRef: 'Bac D — SVT · Ch.8',
        points: 3,
      },
    ],
  },
  {
    title: 'Examen Blanc — Physique-Chimie Bac D',
    subject: 'Physique-Chimie',
    durationMinutes: 18,
    totalPoints: 20,
    questions: [
      {
        id: 'ex-pc1',
        question: 'Un objet de masse 5 kg est lancé à 10 m/s. Quelle est son énergie cinétique ?',
        options: [
          { id: 'a', text: '50 J' },
          { id: 'b', text: '250 J' },
          { id: 'c', text: '500 J' },
          { id: 'd', text: '25 J' },
        ],
        correctId: 'b',
        explanation: 'Ec = ½mv² = ½ × 5 × 10² = ½ × 5 × 100 = 250 J.',
        subject: 'Physique-Chimie',
        topic: 'Mécanique',
        difficulty: 'easy',
        curriculumRef: 'Bac D — Physique · Ch.2',
        points: 2,
      },
      {
        id: 'ex-pc2',
        question: 'Quelle est la résistance d\'un conducteur de longueur L=2m, section S=1mm², résistivité ρ=1.7×10⁻⁸ Ω·m ?',
        options: [
          { id: 'a', text: '0.034 Ω' },
          { id: 'b', text: '0.34 Ω' },
          { id: 'c', text: '3.4 Ω' },
          { id: 'd', text: '34 Ω' },
        ],
        correctId: 'a',
        explanation: 'R = ρL/S = (1.7×10⁻⁸ × 2) / (10⁻⁶) = 3.4×10⁻⁸/10⁻⁶ = 0.034 Ω.',
        subject: 'Physique-Chimie',
        topic: 'Électricité',
        difficulty: 'hard',
        curriculumRef: 'Bac D — Physique · Ch.7',
        points: 4,
      },
      {
        id: 'ex-pc3',
        question: 'Quelle est la concentration molaire d\'une solution de 4g de NaOH (M=40g/mol) dans 500mL ?',
        options: [
          { id: 'a', text: '0.1 mol/L' },
          { id: 'b', text: '0.2 mol/L' },
          { id: 'c', text: '0.4 mol/L' },
          { id: 'd', text: '0.8 mol/L' },
        ],
        correctId: 'b',
        explanation: 'n = m/M = 4/40 = 0.1 mol. C = n/V = 0.1/0.5 = 0.2 mol/L.',
        subject: 'Physique-Chimie',
        topic: 'Chimie des solutions',
        difficulty: 'medium',
        curriculumRef: 'Bac D — Chimie · Ch.3',
        points: 3,
      },
      {
        id: 'ex-pc4',
        question: 'Quel est l\'indice de réfraction d\'un milieu si la lumière passe de l\'air (n=1) à ce milieu avec un angle d\'incidence de 30° et un angle de réfraction de 20° ?',
        options: [
          { id: 'a', text: 'n ≈ 1.46' },
          { id: 'b', text: 'n ≈ 0.68' },
          { id: 'c', text: 'n ≈ 1.5' },
          { id: 'd', text: 'n ≈ 2' },
        ],
        correctId: 'a',
        explanation: 'Loi de Snell-Descartes : n₁sin(θ₁) = n₂sin(θ₂). n₂ = sin(30°)/sin(20°) = 0.5/0.342 ≈ 1.46.',
        subject: 'Physique-Chimie',
        topic: 'Optique',
        difficulty: 'hard',
        curriculumRef: 'Bac D — Physique · Ch.11',
        points: 4,
      },
      {
        id: 'ex-pc5',
        question: 'Quelle est la période d\'un pendule simple de longueur L=1m (g=10 m/s²) ?',
        options: [
          { id: 'a', text: 'T ≈ 2 s' },
          { id: 'b', text: 'T ≈ 1 s' },
          { id: 'c', text: 'T ≈ 3.14 s' },
          { id: 'd', text: 'T ≈ 0.5 s' },
        ],
        correctId: 'a',
        explanation: 'T = 2π√(L/g) = 2π√(1/10) = 2π × 0.316 ≈ 1.99 ≈ 2 s.',
        subject: 'Physique-Chimie',
        topic: 'Oscillations',
        difficulty: 'medium',
        curriculumRef: 'Bac D — Physique · Ch.8',
        points: 3,
      },
      {
        id: 'ex-pc6',
        question: 'Équilibrer la réaction : H₂ + O₂ → H₂O. Quelle est la forme équilibrée ?',
        options: [
          { id: 'a', text: 'H₂ + O₂ → H₂O' },
          { id: 'b', text: '2H₂ + O₂ → 2H₂O' },
          { id: 'c', text: 'H₂ + 2O₂ → 2H₂O' },
          { id: 'd', text: '4H₂ + O₂ → 4H₂O' },
        ],
        correctId: 'b',
        explanation: 'Pour équilibrer : 2H₂ + O₂ → 2H₂O. On a 4H et 2O de chaque côté.',
        subject: 'Physique-Chimie',
        topic: 'Réactions chimiques',
        difficulty: 'easy',
        curriculumRef: 'Bac D — Chimie · Ch.1',
        points: 2,
      },
      {
        id: 'ex-pc7',
        question: 'Quelle est l\'énergie potentielle d\'un objet de 2 kg à une hauteur de 5 m (g=10 m/s²) ?',
        options: [
          { id: 'a', text: '10 J' },
          { id: 'b', text: '50 J' },
          { id: 'c', text: '100 J' },
          { id: 'd', text: '25 J' },
        ],
        correctId: 'c',
        explanation: 'Ep = mgh = 2 × 10 × 5 = 100 J.',
        subject: 'Physique-Chimie',
        topic: 'Énergie potentielle',
        difficulty: 'easy',
        curriculumRef: 'Bac D — Physique · Ch.2',
        points: 2,
      },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function getScoreGrade(pct: number) {
  if (pct >= 80) return { label: 'Excellent', color: 'text-success', bg: 'bg-success/10 border-success/30' };
  if (pct >= 60) return { label: 'Bien', color: 'text-info', bg: 'bg-info/10 border-info/30' };
  if (pct >= 50) return { label: 'Passable', color: 'text-warning', bg: 'bg-warning/10 border-warning/30' };
  return { label: 'Insuffisant', color: 'text-error', bg: 'bg-error/10 border-error/30' };
}

// ─── Setup Screen ─────────────────────────────────────────────────────────────

function ExamSetup({ onStart }: { onStart: (exam: typeof EXAM_TEMPLATES[0]) => void }) {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-2">
          <BookOpen size={28} className="text-accent" />
        </div>
        <h2 className="text-xl font-700 text-foreground">Choisir un Examen Blanc</h2>
        <p className="text-sm text-muted-foreground">
          Mode chronométré · Interface sans distraction · Correction automatique
        </p>
      </div>

      <div className="grid gap-4 max-w-2xl mx-auto">
        {EXAM_TEMPLATES.map((exam, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-2xl p-5 hover:border-primary/40 transition-all duration-150 group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-700 text-foreground group-hover:text-primary-light transition-colors">
                  {exam.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={12} /> {exam.durationMinutes} min
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Target size={12} /> {exam.questions.length} questions
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star size={12} /> {exam.totalPoints} pts
                  </span>
                  <span className="flex items-center gap-1 text-xs text-info">
                    <BookOpen size={12} /> Bac D
                  </span>
                </div>
              </div>
              <button
                onClick={() => onStart(exam)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-700 transition-all duration-150 flex-shrink-0"
              >
                <Play size={13} /> Démarrer
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info banner */}
      <div className="max-w-2xl mx-auto flex items-start gap-3 p-4 rounded-xl bg-warning/5 border border-warning/20">
        <AlertTriangle size={16} className="text-warning mt-0.5 flex-shrink-0" />
        <div className="space-y-1">
          <p className="text-xs font-600 text-warning">Mode Examen Blanc</p>
          <p className="text-xs text-muted-foreground">
            Une fois démarré, le chronomètre ne peut pas être mis en pause. L'interface passe en mode sans distraction. Assurez-vous d'être prêt(e).
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Active Exam (distraction-free) ──────────────────────────────────────────

function ActiveExam({
  exam,
  onFinish,
}: {
  exam: typeof EXAM_TEMPLATES[0];
  onFinish: (answers: Record<string, string>, timeUsed: number) => void;
}) {
  const totalSeconds = exam.durationMinutes * 60;
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [paused, setPaused] = useState(false);
  const startTimeRef = useRef(Date.now());
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleFinish = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    const elapsed = Math.round((Date.now() - startTimeRef.current) / 1000);
    onFinish(answers, elapsed);
  }, [answers, onFinish]);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          handleFinish();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, handleFinish]);

  const q = exam.questions[currentIndex];
  const answered = Object.keys(answers).length;
  const pctTime = (timeLeft / totalSeconds) * 100;
  const isUrgent = timeLeft < 120;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Distraction-free top bar */}
      <div className={`sticky top-0 z-50 border-b border-border px-4 py-3 flex items-center justify-between gap-4 ${isUrgent ? 'bg-error/10' : 'bg-card'}`}>
        <div className="flex items-center gap-3">
          <BookOpen size={16} className="text-primary-light" />
          <span className="text-sm font-700 text-foreground hidden sm:block truncate max-w-[200px]">
            {exam.title}
          </span>
        </div>

        {/* Timer */}
        <div className={`flex items-center gap-2 px-4 py-1.5 rounded-xl border font-mono text-lg font-700 tabular-nums ${
          isUrgent ? 'border-error/50 bg-error/10 text-error' : 'border-border bg-muted/30 text-foreground'
        }`}>
          <Clock size={16} className={isUrgent ? 'text-error animate-pulse' : 'text-muted-foreground'} />
          {formatTime(timeLeft)}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">{answered}/{exam.questions.length}</span>
          <button
            onClick={() => setPaused((p) => !p)}
            className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            {paused ? <Play size={14} /> : <Pause size={14} />}
          </button>
          <button
            onClick={handleFinish}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-accent hover:bg-accent/80 text-accent-foreground text-xs font-700 transition-all duration-150"
          >
            <Flag size={13} /> Terminer
          </button>
        </div>
      </div>

      {/* Time progress bar */}
      <div className="h-1 bg-muted">
        <div
          className={`h-full transition-all duration-1000 ${isUrgent ? 'bg-error' : 'bg-primary'}`}
          style={{ width: `${pctTime}%` }}
        />
      </div>

      {/* Paused overlay */}
      {paused && (
        <div className="fixed inset-0 z-40 bg-background/95 flex items-center justify-center">
          <div className="text-center space-y-4">
            <Pause size={48} className="text-muted-foreground mx-auto" />
            <p className="text-xl font-700 text-foreground">Examen en pause</p>
            <button
              onClick={() => setPaused(false)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-700 mx-auto"
            >
              <Play size={16} /> Reprendre
            </button>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex">
        {/* Question navigator (sidebar) */}
        <div className="hidden lg:flex flex-col w-48 border-r border-border p-3 gap-1.5 overflow-y-auto">
          <p className="text-xs font-600 text-muted-foreground px-1 mb-1">Questions</p>
          {exam.questions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-600 transition-all duration-150 ${
                i === currentIndex
                  ? 'bg-primary/10 text-primary-light border border-primary/30'
                  : answers[exam.questions[i].id]
                  ? 'bg-success/10 text-success border border-success/20' :'text-muted-foreground hover:text-foreground hover:bg-muted/30 border border-transparent'
              }`}
            >
              <span className="w-5 h-5 rounded-full border flex items-center justify-center text-[10px] flex-shrink-0 border-current">
                {i + 1}
              </span>
              <span className="truncate">{exam.questions[i].topic}</span>
            </button>
          ))}
        </div>

        {/* Question area */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-2xl mx-auto space-y-5">
            {/* Question header */}
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-600 text-muted-foreground">Q{currentIndex + 1}/{exam.questions.length}</span>
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary-light text-xs font-600">
                    {q.points} pt{q.points > 1 ? 's' : ''}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen size={11} className="text-info" />
                  <span className="text-xs text-info/80">{q.curriculumRef}</span>
                </div>
              </div>
            </div>

            {/* Question */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <p className="text-base font-600 text-foreground leading-relaxed">{q.question}</p>
            </div>

            {/* Options */}
            <div className="space-y-2.5">
              {q.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.id }))}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border text-sm font-500 text-left transition-all duration-150 ${
                    answers[q.id] === opt.id
                      ? 'border-primary bg-primary/10 text-primary-light' :'border-border text-foreground hover:border-primary/40 hover:bg-muted/30'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-700 flex-shrink-0 ${
                    answers[q.id] === opt.id ? 'border-primary bg-primary text-white' : 'border-border text-muted-foreground'
                  }`}>
                    {opt.id.toUpperCase()}
                  </span>
                  {opt.text}
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                disabled={currentIndex === 0}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-150"
              >
                <ChevronLeft size={16} /> Précédent
              </button>
              {currentIndex < exam.questions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex((i) => i + 1)}
                  className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-primary hover:bg-primary-dark text-white text-sm font-600 transition-all duration-150"
                >
                  Suivant <ChevronRight size={16} />
                </button>
              ) : (
                <button
                  onClick={handleFinish}
                  className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-accent hover:bg-accent/80 text-accent-foreground text-sm font-700 transition-all duration-150"
                >
                  <Flag size={15} /> Soumettre
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Report Screen ────────────────────────────────────────────────────────────

function ExamReport({
  exam,
  answers,
  timeUsed,
  onRetry,
  onNew,
}: {
  exam: typeof EXAM_TEMPLATES[0];
  answers: Record<string, string>;
  timeUsed: number;
  onRetry: () => void;
  onNew: () => void;
}) {
  const earnedPoints = exam.questions.reduce((acc, q) => {
    return acc + (answers[q.id] === q.correctId ? q.points : 0);
  }, 0);
  const totalPoints = exam.questions.reduce((acc, q) => acc + q.points, 0);
  const pct = Math.round((earnedPoints / totalPoints) * 100);
  const score = ((earnedPoints / totalPoints) * 20).toFixed(1);
  const grade = getScoreGrade(pct);

  const weakTopics = exam.questions
    .filter((q) => answers[q.id] !== q.correctId)
    .map((q) => q.topic);
  const uniqueWeak = [...new Set(weakTopics)];

  const byDifficulty = {
    easy: exam.questions.filter((q) => q.difficulty === 'easy'),
    medium: exam.questions.filter((q) => q.difficulty === 'medium'),
    hard: exam.questions.filter((q) => q.difficulty === 'hard'),
  };

  const diffScore = (qs: ExamQuestion[]) => {
    const correct = qs.filter((q) => answers[q.id] === q.correctId).length;
    return qs.length > 0 ? Math.round((correct / qs.length) * 100) : 0;
  };

  return (
    <AppLayout activePath="/dashboard/exam">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-800 text-foreground flex items-center gap-2">
              <Award size={22} className="text-accent" />
              Rapport d'Examen
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">{exam.title}</p>
          </div>
        </div>

        {/* Score hero */}
        <div className={`rounded-2xl border p-6 text-center space-y-3 ${grade.bg}`}>
          <div className={`text-5xl font-800 tabular-nums ${grade.color}`}>
            {score}<span className="text-2xl">/20</span>
          </div>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-700 ${grade.color} bg-current/10`}>
            <Trophy size={14} /> {grade.label}
          </div>
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span>{earnedPoints}/{totalPoints} pts</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock size={11} /> {formatTime(timeUsed)} utilisé</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden mx-auto max-w-xs">
            <div
              className={`h-full rounded-full transition-all duration-700 ${pct >= 80 ? 'bg-success' : pct >= 60 ? 'bg-info' : pct >= 50 ? 'bg-warning' : 'bg-error'}`}
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Correctes', value: exam.questions.filter((q) => answers[q.id] === q.correctId).length, icon: CheckCircle2, color: 'text-success' },
            { label: 'Incorrectes', value: exam.questions.filter((q) => answers[q.id] !== q.correctId).length, icon: XCircle, color: 'text-error' },
            { label: 'Non répondues', value: exam.questions.filter((q) => !answers[q.id]).length, icon: AlertTriangle, color: 'text-warning' },
          ].map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-xl p-3 text-center">
              <s.icon size={18} className={`${s.color} mx-auto mb-1`} />
              <div className={`text-xl font-700 tabular-nums ${s.color}`}>{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Performance by difficulty */}
        <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
          <h3 className="text-sm font-700 text-foreground flex items-center gap-2">
            <BarChart2 size={16} className="text-primary-light" />
            Performance par niveau
          </h3>
          {[
            { label: 'Facile', key: 'easy' as const, color: 'bg-success' },
            { label: 'Moyen', key: 'medium' as const, color: 'bg-warning' },
            { label: 'Difficile', key: 'hard' as const, color: 'bg-error' },
          ].map(({ label, key, color }) => {
            const qs = byDifficulty[key];
            if (qs.length === 0) return null;
            const pctD = diffScore(qs);
            return (
              <div key={key} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="font-600 text-foreground">{pctD}%</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className={`h-full ${color} rounded-full transition-all duration-700`} style={{ width: `${pctD}%` }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Weak points */}
        {uniqueWeak.length > 0 && (
          <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-warning" />
              <h3 className="text-sm font-700 text-foreground">Points faibles à travailler</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {uniqueWeak.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-warning/10 border border-warning/20 text-xs font-600 text-warning">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Consultez le Tuteur IA pour des explications approfondies sur ces chapitres.
            </p>
          </div>
        )}

        {/* Detailed correction */}
        <div className="space-y-3">
          <h3 className="text-sm font-700 text-foreground flex items-center gap-2">
            <Target size={16} className="text-primary-light" />
            Correction complète
          </h3>
          {exam.questions.map((q, i) => {
            const isCorrect = answers[q.id] === q.correctId;
            const userOpt = q.options.find((o) => o.id === answers[q.id]);
            const correctOpt = q.options.find((o) => o.id === q.correctId);
            return (
              <div key={q.id} className={`rounded-xl border p-4 space-y-3 ${isCorrect ? 'border-success/30 bg-success/5' : 'border-error/30 bg-error/5'}`}>
                <div className="flex items-start gap-2">
                  {isCorrect ? (
                    <CheckCircle2 size={16} className="text-success mt-0.5 flex-shrink-0" />
                  ) : (
                    <XCircle size={16} className="text-error mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-600 text-foreground">{i + 1}. {q.question}</p>
                      <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary-light text-xs font-600">{q.points}pt</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <BookOpen size={11} className="text-info" />
                      <span className="text-xs text-info/70">{q.curriculumRef}</span>
                    </div>
                  </div>
                </div>
                {!isCorrect && (
                  <div className="space-y-1 pl-6">
                    <p className="text-xs text-error">Votre réponse : {userOpt?.text || 'Non répondu'}</p>
                    <p className="text-xs text-success">Bonne réponse : {correctOpt?.text}</p>
                  </div>
                )}
                <div className="pl-6 p-3 rounded-lg bg-muted/30 border border-border">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <span className="font-600 text-foreground">Explication : </span>
                    {q.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pb-6">
          <button
            onClick={onRetry}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-border text-sm font-600 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-150"
          >
            <RotateCcw size={15} /> Refaire
          </button>
          <button
            onClick={onNew}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white text-sm font-700 transition-all duration-150"
          >
            <Zap size={15} /> Autre examen
          </button>
        </div>
      </div>
    </AppLayout>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ExamPage() {
  const [phase, setPhase] = useState<ExamPhase>('setup');
  const [selectedExam, setSelectedExam] = useState<typeof EXAM_TEMPLATES[0] | null>(null);
  const [examAnswers, setExamAnswers] = useState<Record<string, string>>({});
  const [timeUsed, setTimeUsed] = useState(0);

  const handleStart = (exam: typeof EXAM_TEMPLATES[0]) => {
    setSelectedExam(exam);
    setExamAnswers({});
    setTimeUsed(0);
    setPhase('active');
  };

  const handleFinish = (answers: Record<string, string>, elapsed: number) => {
    setExamAnswers(answers);
    setTimeUsed(elapsed);
    setPhase('report');
  };

  const handleRetry = () => {
    if (selectedExam) handleStart(selectedExam);
  };

  const handleNew = () => {
    setPhase('setup');
    setSelectedExam(null);
    setExamAnswers({});
    setTimeUsed(0);
  };

  // Active exam is full-screen (no AppLayout)
  if (phase === 'active' && selectedExam) {
    return <ActiveExam exam={selectedExam} onFinish={handleFinish} />;
  }

  if (phase === 'report' && selectedExam) {
    return (
      <ExamReport
        exam={selectedExam}
        answers={examAnswers}
        timeUsed={timeUsed}
        onRetry={handleRetry}
        onNew={handleNew}
      />
    );
  }

  return (
    <AppLayout activePath="/dashboard/exam">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-800 text-foreground flex items-center gap-2">
            <BookOpen size={24} className="text-accent" />
            Examens Blancs
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Simulations chronométrées · Interface sans distraction · Barème officiel Bac D / GCE
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: Trophy, label: 'Examens passés', value: '4', color: 'text-accent' },
            { icon: TrendingUp, label: 'Meilleur score', value: '15.5/20', color: 'text-success' },
            { icon: Clock, label: 'Temps moyen', value: '16 min', color: 'text-info' },
          ].map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-xl p-3 flex items-center gap-3">
              <s.icon size={18} className={s.color} />
              <div>
                <div className={`text-sm font-700 ${s.color}`}>{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        <ExamSetup onStart={handleStart} />
      </div>
    </AppLayout>
  );
}
