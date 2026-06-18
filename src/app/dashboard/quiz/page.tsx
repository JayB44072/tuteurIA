'use client';

import React, { useState, useCallback } from 'react';
import AppLayout from '@/components/AppLayout';
import {
  ClipboardList, ChevronRight, ChevronLeft, CheckCircle2, XCircle,
  RotateCcw, Trophy, Target, TrendingUp, BookOpen, Zap, AlertTriangle,
  BarChart2, Star, Clock, Brain
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface QCMOption {
  id: string;
  text: string;
}

interface QCMQuestion {
  id: string;
  question: string;
  options: QCMOption[];
  correctId: string;
  explanation: string;
  subject: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  curriculumRef: string;
}

interface QuizConfig {
  subject: string;
  difficulty: 'mixed' | 'easy' | 'medium' | 'hard';
  count: number;
}

type QuizPhase = 'setup' | 'active' | 'report';

// ─── Mock question bank ────────────────────────────────────────────────────────

const QUESTION_BANK: Record<string, QCMQuestion[]> = {
  Mathématiques: [
    {
      id: 'q-math-1',
      question: 'Quelle est la dérivée de f(x) = 3x² + 2x − 5 ?',
      options: [
        { id: 'a', text: 'f\'(x) = 6x + 2' },
        { id: 'b', text: 'f\'(x) = 3x + 2' },
        { id: 'c', text: 'f\'(x) = 6x − 5' },
        { id: 'd', text: 'f\'(x) = 6x² + 2' },
      ],
      correctId: 'a',
      explanation: 'La règle de dérivation donne : d/dx(3x²) = 6x, d/dx(2x) = 2, d/dx(−5) = 0. Donc f\'(x) = 6x + 2.',
      subject: 'Mathématiques',
      topic: 'Dérivées',
      difficulty: 'easy',
      curriculumRef: 'Bac D — Analyse · Chapitre 3',
    },
    {
      id: 'q-math-2',
      question: 'Résoudre l\'équation : 2x² − 8 = 0',
      options: [
        { id: 'a', text: 'x = ±4' },
        { id: 'b', text: 'x = ±2' },
        { id: 'c', text: 'x = 2 seulement' },
        { id: 'd', text: 'x = ±√8' },
      ],
      correctId: 'b',
      explanation: '2x² = 8 → x² = 4 → x = ±2. Les deux solutions sont x = 2 et x = −2.',
      subject: 'Mathématiques',
      topic: 'Équations du second degré',
      difficulty: 'easy',
      curriculumRef: 'Bac D — Algèbre · Chapitre 1',
    },
    {
      id: 'q-math-3',
      question: 'Calculer la limite : lim(x→+∞) (3x² − x) / (x² + 1)',
      options: [
        { id: 'a', text: '0' },
        { id: 'b', text: '+∞' },
        { id: 'c', text: '3' },
        { id: 'd', text: '1' },
      ],
      correctId: 'c',
      explanation: 'On divise numérateur et dénominateur par x² : (3 − 1/x) / (1 + 1/x²) → 3/1 = 3 quand x→+∞.',
      subject: 'Mathématiques',
      topic: 'Limites',
      difficulty: 'medium',
      curriculumRef: 'Bac D — Analyse · Chapitre 2',
    },
    {
      id: 'q-math-4',
      question: 'Quelle est la primitive de f(x) = 4x³ − 6x + 1 ?',
      options: [
        { id: 'a', text: 'F(x) = x⁴ − 3x² + x + C' },
        { id: 'b', text: 'F(x) = 12x² − 6 + C' },
        { id: 'c', text: 'F(x) = 4x⁴ − 6x² + x + C' },
        { id: 'd', text: 'F(x) = x⁴ − 3x + C' },
      ],
      correctId: 'a',
      explanation: '∫4x³dx = x⁴, ∫−6x dx = −3x², ∫1 dx = x. Donc F(x) = x⁴ − 3x² + x + C.',
      subject: 'Mathématiques',
      topic: 'Primitives',
      difficulty: 'medium',
      curriculumRef: 'Bac D — Analyse · Chapitre 4',
    },
    {
      id: 'q-math-5',
      question: 'Dans un triangle rectangle, si sin(θ) = 3/5, quelle est la valeur de cos(θ) ?',
      options: [
        { id: 'a', text: '4/5' },
        { id: 'b', text: '3/4' },
        { id: 'c', text: '5/3' },
        { id: 'd', text: '1/5' },
      ],
      correctId: 'a',
      explanation: 'sin²(θ) + cos²(θ) = 1 → cos²(θ) = 1 − 9/25 = 16/25 → cos(θ) = 4/5.',
      subject: 'Mathématiques',
      topic: 'Trigonométrie',
      difficulty: 'medium',
      curriculumRef: 'Bac D — Géométrie · Chapitre 5',
    },
    {
      id: 'q-math-6',
      question: 'Quel est le déterminant de la matrice [[2, 3], [1, 4]] ?',
      options: [
        { id: 'a', text: '5' },
        { id: 'b', text: '11' },
        { id: 'c', text: '8' },
        { id: 'd', text: '−1' },
      ],
      correctId: 'a',
      explanation: 'det([[2,3],[1,4]]) = (2×4) − (3×1) = 8 − 3 = 5.',
      subject: 'Mathématiques',
      topic: 'Matrices',
      difficulty: 'hard',
      curriculumRef: 'Bac D — Algèbre · Chapitre 6',
    },
  ],
  'Physique-Chimie': [
    {
      id: 'q-phys-1',
      question: 'Quelle est la loi d\'Ohm ?',
      options: [
        { id: 'a', text: 'U = R × I' },
        { id: 'b', text: 'U = I / R' },
        { id: 'c', text: 'U = R + I' },
        { id: 'd', text: 'U = R² × I' },
      ],
      correctId: 'a',
      explanation: 'La loi d\'Ohm stipule que la tension U (en Volts) est égale au produit de la résistance R (en Ohms) par l\'intensité I (en Ampères) : U = R × I.',
      subject: 'Physique-Chimie',
      topic: 'Électricité',
      difficulty: 'easy',
      curriculumRef: 'Bac D — Physique · Chapitre 7',
    },
    {
      id: 'q-phys-2',
      question: 'Quelle est la formule de l\'énergie cinétique ?',
      options: [
        { id: 'a', text: 'Ec = m × v' },
        { id: 'b', text: 'Ec = ½ × m × v²' },
        { id: 'c', text: 'Ec = m × g × h' },
        { id: 'd', text: 'Ec = m × v²' },
      ],
      correctId: 'b',
      explanation: 'L\'énergie cinétique est Ec = ½mv², où m est la masse en kg et v la vitesse en m/s.',
      subject: 'Physique-Chimie',
      topic: 'Mécanique',
      difficulty: 'easy',
      curriculumRef: 'Bac D — Physique · Chapitre 2',
    },
    {
      id: 'q-phys-3',
      question: 'Dans un circuit RC, quelle est la constante de temps τ ?',
      options: [
        { id: 'a', text: 'τ = R + C' },
        { id: 'b', text: 'τ = R / C' },
        { id: 'c', text: 'τ = R × C' },
        { id: 'd', text: 'τ = C / R' },
      ],
      correctId: 'c',
      explanation: 'La constante de temps d\'un circuit RC est τ = R × C, exprimée en secondes quand R est en Ohms et C en Farads.',
      subject: 'Physique-Chimie',
      topic: 'Circuits RC',
      difficulty: 'medium',
      curriculumRef: 'Bac D — Physique · Chapitre 9',
    },
    {
      id: 'q-phys-4',
      question: 'Quel est le pH d\'une solution avec [H₃O⁺] = 10⁻³ mol/L ?',
      options: [
        { id: 'a', text: 'pH = 11' },
        { id: 'b', text: 'pH = 3' },
        { id: 'c', text: 'pH = −3' },
        { id: 'd', text: 'pH = 7' },
      ],
      correctId: 'b',
      explanation: 'pH = −log[H₃O⁺] = −log(10⁻³) = 3. La solution est acide.',
      subject: 'Physique-Chimie',
      topic: 'Chimie des solutions',
      difficulty: 'medium',
      curriculumRef: 'Bac D — Chimie · Chapitre 4',
    },
    {
      id: 'q-phys-5',
      question: 'Quelle est la vitesse de la lumière dans le vide ?',
      options: [
        { id: 'a', text: '3 × 10⁸ m/s' },
        { id: 'b', text: '3 × 10⁶ m/s' },
        { id: 'c', text: '3 × 10¹⁰ m/s' },
        { id: 'd', text: '3 × 10⁵ km/s' },
      ],
      correctId: 'a',
      explanation: 'La vitesse de la lumière dans le vide est c ≈ 3 × 10⁸ m/s, soit environ 300 000 km/s.',
      subject: 'Physique-Chimie',
      topic: 'Optique',
      difficulty: 'easy',
      curriculumRef: 'Bac D — Physique · Chapitre 11',
    },
    {
      id: 'q-phys-6',
      question: 'Quelle est la formule de la force gravitationnelle entre deux masses ?',
      options: [
        { id: 'a', text: 'F = G × m₁ × m₂ / d²' },
        { id: 'b', text: 'F = G × (m₁ + m₂) / d' },
        { id: 'c', text: 'F = G × m₁ × m₂ × d²' },
        { id: 'd', text: 'F = m × g' },
      ],
      correctId: 'a',
      explanation: 'La loi de gravitation universelle de Newton : F = G × m₁ × m₂ / d², où G est la constante gravitationnelle.',
      subject: 'Physique-Chimie',
      topic: 'Gravitation',
      difficulty: 'medium',
      curriculumRef: 'Bac D — Physique · Chapitre 1',
    },
  ],
  'Sciences de la Vie': [
    {
      id: 'q-svt-1',
      question: 'Quelle molécule est le support de l\'information génétique ?',
      options: [
        { id: 'a', text: 'ARN' },
        { id: 'b', text: 'Protéine' },
        { id: 'c', text: 'ADN' },
        { id: 'd', text: 'ATP' },
      ],
      correctId: 'c',
      explanation: 'L\'ADN (Acide DésoxyriboNucléique) est la molécule qui porte l\'information génétique dans les cellules eucaryotes.',
      subject: 'Sciences de la Vie',
      topic: 'Génétique',
      difficulty: 'easy',
      curriculumRef: 'Bac D — SVT · Chapitre 1',
    },
    {
      id: 'q-svt-2',
      question: 'Combien de chromosomes possède une cellule humaine diploïde ?',
      options: [
        { id: 'a', text: '23' },
        { id: 'b', text: '46' },
        { id: 'c', text: '48' },
        { id: 'd', text: '92' },
      ],
      correctId: 'b',
      explanation: 'Une cellule humaine diploïde (2n) possède 46 chromosomes, soit 23 paires. Les gamètes (haploïdes) en ont 23.',
      subject: 'Sciences de la Vie',
      topic: 'Cytologie',
      difficulty: 'easy',
      curriculumRef: 'Bac D — SVT · Chapitre 2',
    },
    {
      id: 'q-svt-3',
      question: 'Quel organite est responsable de la synthèse des protéines ?',
      options: [
        { id: 'a', text: 'Mitochondrie' },
        { id: 'b', text: 'Ribosome' },
        { id: 'c', text: 'Noyau' },
        { id: 'd', text: 'Appareil de Golgi' },
      ],
      correctId: 'b',
      explanation: 'Les ribosomes sont les organites responsables de la traduction de l\'ARNm en protéines.',
      subject: 'Sciences de la Vie',
      topic: 'Biologie cellulaire',
      difficulty: 'easy',
      curriculumRef: 'Bac D — SVT · Chapitre 3',
    },
    {
      id: 'q-svt-4',
      question: 'Quelle est la phase de la mitose où les chromosomes s\'alignent au centre de la cellule ?',
      options: [
        { id: 'a', text: 'Prophase' },
        { id: 'b', text: 'Anaphase' },
        { id: 'c', text: 'Métaphase' },
        { id: 'd', text: 'Télophase' },
      ],
      correctId: 'c',
      explanation: 'La métaphase est la phase où les chromosomes s\'alignent sur la plaque équatoriale (plan médian de la cellule).',
      subject: 'Sciences de la Vie',
      topic: 'Cycle cellulaire',
      difficulty: 'medium',
      curriculumRef: 'Bac D — SVT · Chapitre 4',
    },
    {
      id: 'q-svt-5',
      question: 'Quel est le rôle principal des mitochondries ?',
      options: [
        { id: 'a', text: 'Synthèse des protéines' },
        { id: 'b', text: 'Production d\'ATP par respiration cellulaire' },
        { id: 'c', text: 'Stockage de l\'ADN' },
        { id: 'd', text: 'Photosynthèse' },
      ],
      correctId: 'b',
      explanation: 'Les mitochondries sont le siège de la respiration cellulaire aérobie, produisant l\'ATP nécessaire à l\'énergie cellulaire.',
      subject: 'Sciences de la Vie',
      topic: 'Métabolisme',
      difficulty: 'easy',
      curriculumRef: 'Bac D — SVT · Chapitre 5',
    },
    {
      id: 'q-svt-6',
      question: 'Quelle est la définition d\'un allèle dominant ?',
      options: [
        { id: 'a', text: 'Un allèle présent en deux copies' },
        { id: 'b', text: 'Un allèle qui s\'exprime même en présence d\'un autre allèle' },
        { id: 'c', text: 'Un allèle qui ne s\'exprime qu\'en homozygotie' },
        { id: 'd', text: 'Un allèle muté' },
      ],
      correctId: 'b',
      explanation: 'Un allèle dominant s\'exprime phénotypiquement même lorsqu\'il est présent en une seule copie (hétérozygote).',
      subject: 'Sciences de la Vie',
      topic: 'Génétique mendélienne',
      difficulty: 'medium',
      curriculumRef: 'Bac D — SVT · Chapitre 6',
    },
  ],
  'Histoire-Géographie': [
    {
      id: 'q-hist-1',
      question: 'En quelle année a eu lieu la conférence de Berlin sur le partage de l\'Afrique ?',
      options: [
        { id: 'a', text: '1870' },
        { id: 'b', text: '1884-1885' },
        { id: 'c', text: '1900' },
        { id: 'd', text: '1919' },
      ],
      correctId: 'b',
      explanation: 'La Conférence de Berlin s\'est tenue de novembre 1884 à février 1885. Elle a organisé le partage colonial de l\'Afrique entre les puissances européennes.',
      subject: 'Histoire-Géographie',
      topic: 'Colonisation africaine',
      difficulty: 'medium',
      curriculumRef: 'Bac D — Histoire · Chapitre 3',
    },
    {
      id: 'q-hist-2',
      question: 'Quel pays africain n\'a jamais été colonisé ?',
      options: [
        { id: 'a', text: 'Sénégal' },
        { id: 'b', text: 'Éthiopie' },
        { id: 'c', text: 'Ghana' },
        { id: 'd', text: 'Côte d\'Ivoire' },
      ],
      correctId: 'b',
      explanation: 'L\'Éthiopie est le seul pays africain à n\'avoir jamais été colonisé, ayant résisté à l\'invasion italienne lors de la bataille d\'Adoua en 1896.',
      subject: 'Histoire-Géographie',
      topic: 'Résistances africaines',
      difficulty: 'easy',
      curriculumRef: 'Bac D — Histoire · Chapitre 4',
    },
    {
      id: 'q-hist-3',
      question: 'Quelle organisation régionale regroupe les pays d\'Afrique de l\'Ouest ?',
      options: [
        { id: 'a', text: 'UA' },
        { id: 'b', text: 'CEDEAO' },
        { id: 'c', text: 'SADC' },
        { id: 'd', text: 'COMESA' },
      ],
      correctId: 'b',
      explanation: 'La CEDEAO (Communauté Économique des États de l\'Afrique de l\'Ouest) regroupe 15 pays d\'Afrique de l\'Ouest depuis 1975.',
      subject: 'Histoire-Géographie',
      topic: 'Géopolitique africaine',
      difficulty: 'easy',
      curriculumRef: 'Bac D — Géographie · Chapitre 8',
    },
    {
      id: 'q-hist-4',
      question: 'Quelle est la capitale du Cameroun ?',
      options: [
        { id: 'a', text: 'Douala' },
        { id: 'b', text: 'Bafoussam' },
        { id: 'c', text: 'Yaoundé' },
        { id: 'd', text: 'Garoua' },
      ],
      correctId: 'c',
      explanation: 'Yaoundé est la capitale politique du Cameroun. Douala est la capitale économique et la plus grande ville du pays.',
      subject: 'Histoire-Géographie',
      topic: 'Géographie du Cameroun',
      difficulty: 'easy',
      curriculumRef: 'Bac D — Géographie · Chapitre 1',
    },
    {
      id: 'q-hist-5',
      question: 'Quelle est la principale cause de la Première Guerre mondiale ?',
      options: [
        { id: 'a', text: 'L\'assassinat de l\'archiduc François-Ferdinand' },
        { id: 'b', text: 'L\'invasion de la Pologne' },
        { id: 'c', text: 'La révolution russe' },
        { id: 'd', text: 'La crise économique de 1929' },
      ],
      correctId: 'a',
      explanation: 'L\'assassinat de l\'archiduc François-Ferdinand d\'Autriche à Sarajevo le 28 juin 1914 a déclenché la Première Guerre mondiale.',
      subject: 'Histoire-Géographie',
      topic: 'Première Guerre mondiale',
      difficulty: 'medium',
      curriculumRef: 'Bac D — Histoire · Chapitre 7',
    },
    {
      id: 'q-hist-6',
      question: 'Quel fleuve est le plus long d\'Afrique ?',
      options: [
        { id: 'a', text: 'Congo' },
        { id: 'b', text: 'Niger' },
        { id: 'c', text: 'Nil' },
        { id: 'd', text: 'Zambèze' },
      ],
      correctId: 'c',
      explanation: 'Le Nil est le fleuve le plus long d\'Afrique avec environ 6 650 km. Il traverse 11 pays dont l\'Égypte et le Soudan.',
      subject: 'Histoire-Géographie',
      topic: 'Géographie physique',
      difficulty: 'easy',
      curriculumRef: 'Bac D — Géographie · Chapitre 2',
    },
  ],
};

const SUBJECTS = Object.keys(QUESTION_BANK);

// ─── Helpers ──────────────────────────────────────────────────────────────────

function generateQuiz(config: QuizConfig): QCMQuestion[] {
  const pool = QUESTION_BANK[config.subject] || [];
  const filtered =
    config.difficulty === 'mixed'
      ? pool
      : pool.filter((q) => q.difficulty === config.difficulty);
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(config.count, shuffled.length));
}

function getDifficultyColor(d: string) {
  if (d === 'easy') return 'text-success bg-success/10';
  if (d === 'medium') return 'text-warning bg-warning/10';
  return 'text-error bg-error/10';
}

function getDifficultyLabel(d: string) {
  if (d === 'easy') return 'Facile';
  if (d === 'medium') return 'Moyen';
  return 'Difficile';
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SetupScreen({ onStart }: { onStart: (cfg: QuizConfig) => void }) {
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [difficulty, setDifficulty] = useState<QuizConfig['difficulty']>('mixed');
  const [count, setCount] = useState(5);

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-2">
          <Brain size={28} className="text-primary-light" />
        </div>
        <h2 className="text-xl font-700 text-foreground">Configurer votre Quiz</h2>
        <p className="text-sm text-muted-foreground">
          L'IA génère des questions adaptées à votre programme officiel
        </p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
        {/* Subject */}
        <div className="space-y-2">
          <label className="text-sm font-600 text-foreground">Matière</label>
          <div className="grid grid-cols-2 gap-2">
            {SUBJECTS.map((s) => (
              <button
                key={s}
                onClick={() => setSubject(s)}
                className={`px-3 py-2.5 rounded-xl text-sm font-500 border transition-all duration-150 text-left ${
                  subject === s
                    ? 'border-primary bg-primary/10 text-primary-light': 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty */}
        <div className="space-y-2">
          <label className="text-sm font-600 text-foreground">Niveau de difficulté</label>
          <div className="grid grid-cols-4 gap-2">
            {(['mixed', 'easy', 'medium', 'hard'] as const).map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`px-2 py-2 rounded-xl text-xs font-600 border transition-all duration-150 ${
                  difficulty === d
                    ? 'border-primary bg-primary/10 text-primary-light': 'border-border text-muted-foreground hover:border-primary/40'
                }`}
              >
                {d === 'mixed' ? 'Mixte' : getDifficultyLabel(d)}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <div className="space-y-2">
          <label className="text-sm font-600 text-foreground">
            Nombre de questions : <span className="text-primary-light">{count}</span>
          </label>
          <input
            type="range"
            min={3}
            max={6}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>3</span><span>6</span>
          </div>
        </div>

        {/* Curriculum note */}
        <div className="flex items-start gap-2 p-3 rounded-xl bg-info/5 border border-info/20">
          <BookOpen size={14} className="text-info mt-0.5 flex-shrink-0" />
          <p className="text-xs text-info/80">
            Questions alignées sur le programme officiel Bac D / GCE A-Level
          </p>
        </div>
      </div>

      <button
        onClick={() => onStart({ subject, difficulty, count })}
        className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-700 text-sm transition-all duration-150 flex items-center justify-center gap-2"
      >
        <Zap size={16} />
        Générer le Quiz
      </button>
    </div>
  );
}

function QuestionCard({
  question,
  index,
  total,
  selected,
  onSelect,
  onNext,
  onPrev,
  isFirst,
  isLast,
}: {
  question: QCMQuestion;
  index: number;
  total: number;
  selected: string | null;
  onSelect: (id: string) => void;
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}) {
  return (
    <div className="max-w-2xl mx-auto space-y-5">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Question {index + 1} / {total}</span>
          <span className={`px-2 py-0.5 rounded-full text-xs font-600 ${getDifficultyColor(question.difficulty)}`}>
            {getDifficultyLabel(question.difficulty)}
          </span>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-500"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Curriculum tag */}
      <div className="flex items-center gap-1.5">
        <BookOpen size={12} className="text-info" />
        <span className="text-xs text-info/80 font-500">{question.curriculumRef}</span>
      </div>

      {/* Question */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <p className="text-base font-600 text-foreground leading-relaxed">{question.question}</p>
      </div>

      {/* Options */}
      <div className="space-y-2.5">
        {question.options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border text-sm font-500 text-left transition-all duration-150 ${
              selected === opt.id
                ? 'border-primary bg-primary/10 text-primary-light': 'border-border text-foreground hover:border-primary/40 hover:bg-muted/30'
            }`}
          >
            <span className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-700 flex-shrink-0 ${
              selected === opt.id ? 'border-primary bg-primary text-white' : 'border-border text-muted-foreground'
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
          onClick={onPrev}
          disabled={isFirst}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-150"
        >
          <ChevronLeft size={16} /> Précédent
        </button>
        <button
          onClick={onNext}
          disabled={!selected}
          className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-primary hover:bg-primary-dark text-white text-sm font-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150"
        >
          {isLast ? 'Terminer' : 'Suivant'} <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}

function ReportScreen({
  questions,
  answers,
  onRetry,
  onNew,
}: {
  questions: QCMQuestion[];
  answers: Record<string, string>;
  onRetry: () => void;
  onNew: () => void;
}) {
  const correct = questions.filter((q) => answers[q.id] === q.correctId).length;
  const total = questions.length;
  const pct = Math.round((correct / total) * 100);
  const score = ((correct / total) * 20).toFixed(1);

  const weakTopics = questions
    .filter((q) => answers[q.id] !== q.correctId)
    .map((q) => q.topic);
  const uniqueWeak = [...new Set(weakTopics)];

  const scoreColor =
    pct >= 70 ? 'text-success' : pct >= 50 ? 'text-warning' : 'text-error';
  const scoreBg =
    pct >= 70 ? 'bg-success/10 border-success/30' : pct >= 50 ? 'bg-warning/10 border-warning/30' : 'bg-error/10 border-error/30';

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Score card */}
      <div className={`rounded-2xl border p-6 text-center space-y-3 ${scoreBg}`}>
        <div className="flex items-center justify-center gap-2">
          <Trophy size={24} className={scoreColor} />
          <h2 className="text-lg font-700 text-foreground">Résultats du Quiz</h2>
        </div>
        <div className={`text-5xl font-800 tabular-nums ${scoreColor}`}>{score}<span className="text-2xl">/20</span></div>
        <p className="text-sm text-muted-foreground">{correct} bonne{correct > 1 ? 's' : ''} réponse{correct > 1 ? 's' : ''} sur {total}</p>
        <div className="h-2 bg-muted rounded-full overflow-hidden mx-auto max-w-xs">
          <div
            className={`h-full rounded-full transition-all duration-700 ${pct >= 70 ? 'bg-success' : pct >= 50 ? 'bg-warning' : 'bg-error'}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Correctes', value: correct, icon: CheckCircle2, color: 'text-success' },
          { label: 'Incorrectes', value: total - correct, icon: XCircle, color: 'text-error' },
          { label: 'Score %', value: `${pct}%`, icon: BarChart2, color: 'text-primary-light' },
        ].map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-3 text-center">
            <s.icon size={18} className={`${s.color} mx-auto mb-1`} />
            <div className={`text-xl font-700 tabular-nums ${s.color}`}>{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Weak points */}
      {uniqueWeak.length > 0 && (
        <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2">
            <AlertTriangle size={16} className="text-warning" />
            <h3 className="text-sm font-700 text-foreground">Points faibles identifiés</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {uniqueWeak.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-warning/10 border border-warning/20 text-xs font-600 text-warning">
                {t}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Travaillez ces chapitres avec le Tuteur IA pour progresser rapidement.
          </p>
        </div>
      )}

      {/* Detailed review */}
      <div className="space-y-3">
        <h3 className="text-sm font-700 text-foreground flex items-center gap-2">
          <Target size={16} className="text-primary-light" />
          Correction détaillée
        </h3>
        {questions.map((q, i) => {
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
                  <p className="text-sm font-600 text-foreground">{i + 1}. {q.question}</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <BookOpen size={11} className="text-info" />
                    <span className="text-xs text-info/70">{q.curriculumRef}</span>
                  </div>
                </div>
              </div>
              {!isCorrect && (
                <div className="space-y-1 pl-6">
                  <p className="text-xs text-error">Votre réponse : {userOpt?.text || '—'}</p>
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
      <div className="flex gap-3">
        <button
          onClick={onRetry}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-border text-sm font-600 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-150"
        >
          <RotateCcw size={15} /> Réessayer
        </button>
        <button
          onClick={onNew}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white text-sm font-700 transition-all duration-150"
        >
          <Zap size={15} /> Nouveau Quiz
        </button>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function QuizPage() {
  const [phase, setPhase] = useState<QuizPhase>('setup');
  const [config, setConfig] = useState<QuizConfig | null>(null);
  const [questions, setQuestions] = useState<QCMQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleStart = useCallback((cfg: QuizConfig) => {
    const qs = generateQuiz(cfg);
    setConfig(cfg);
    setQuestions(qs);
    setCurrentIndex(0);
    setAnswers({});
    setPhase('active');
  }, []);

  const handleSelect = (optId: string) => {
    const qId = questions[currentIndex].id;
    setAnswers((prev) => ({ ...prev, [qId]: optId }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setPhase('report');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  const handleRetry = () => {
    if (config) handleStart(config);
  };

  const handleNew = () => {
    setPhase('setup');
    setConfig(null);
    setQuestions([]);
    setAnswers({});
    setCurrentIndex(0);
  };

  return (
    <AppLayout activePath="/dashboard/quiz">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-800 text-foreground flex items-center gap-2">
              <ClipboardList size={24} className="text-primary-light" />
              Quiz Adaptatif
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Questions générées dynamiquement · Alignées sur le programme officiel
            </p>
          </div>
          {phase !== 'setup' && (
            <button
              onClick={handleNew}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border text-xs text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all duration-150"
            >
              <RotateCcw size={13} /> Nouveau
            </button>
          )}
        </div>

        {/* Stats bar (setup only) */}
        {phase === 'setup' && (
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Star, label: 'Quiz complétés', value: '12', color: 'text-accent' },
              { icon: TrendingUp, label: 'Score moyen', value: '13.5/20', color: 'text-success' },
              { icon: Clock, label: 'Temps moyen', value: '18 min', color: 'text-info' },
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
        )}

        {/* Content */}
        {phase === 'setup' && <SetupScreen onStart={handleStart} />}
        {phase === 'active' && questions.length > 0 && (
          <QuestionCard
            question={questions[currentIndex]}
            index={currentIndex}
            total={questions.length}
            selected={answers[questions[currentIndex].id] ?? null}
            onSelect={handleSelect}
            onNext={handleNext}
            onPrev={handlePrev}
            isFirst={currentIndex === 0}
            isLast={currentIndex === questions.length - 1}
          />
        )}
        {phase === 'report' && (
          <ReportScreen
            questions={questions}
            answers={answers}
            onRetry={handleRetry}
            onNew={handleNew}
          />
        )}
      </div>
    </AppLayout>
  );
}
