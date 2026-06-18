export type UserRole = 'student' | 'parent';
export type SubscriptionTier = 'free' | 'pass_chrono' | 'premium' | 'pass_examen';
export type SubscriptionStatus = 'active' | 'expiring' | 'expired' | 'free';
export type ExamSeries = 'bac_a' | 'bac_c' | 'bac_d' | 'bac_ti' | 'gce_arts' | 'gce_sciences';
export type Language = 'fr' | 'en';
export type SubjectCategory = 'sciences' | 'litterature' | 'histoire' | 'langues' | 'technique';

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  examSeries: ExamSeries;
  language: Language;
  avatarUrl?: string;
  createdAt: string;
  xpTotal: number;
  level: number;
  streakDays: number;
  lastStudyDate: string;
}

export interface Subscription {
  id: string;
  userId: string;
  tier: SubscriptionTier;
  status: SubscriptionStatus;
  startDate: string;
  endDate: string | null;
  priceFcfa: number;
  aiSessionsUsed: number;
  aiSessionsLimit: number | null;
}

export interface Subject {
  id: string;
  name: string;
  nameEn: string;
  category: SubjectCategory;
  icon: string;
  color: string;
  progressPercent: number;
  lastScore: number | null;
  sessionsCount: number;
}

export interface QuizSession {
  id: string;
  userId: string;
  subjectId: string;
  subjectName: string;
  score: number;
  totalQuestions: number;
  duration: number;
  completedAt: string;
  xpEarned: number;
}

export interface Badge {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  icon: string;
  color: string;
  earnedAt: string;
  category: 'streak' | 'score' | 'completion' | 'engagement';
}

export interface AIMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  subjectContext?: string;
  xpAwarded?: number;
}

export interface AISession {
  id: string;
  subjectId: string;
  subjectName: string;
  subjectIcon: string;
  startedAt: string;
  duration: number;
  messagesCount: number;
  xpEarned: number;
  summary: string;
}

export interface ExamCountdown {
  examName: string;
  examSeries: string;
  targetDate: string;
  daysRemaining: number;
  hoursRemaining: number;
}

export interface WeeklyScoreData {
  week: string;
  math: number;
  physique: number;
  svt: number;
  histoire: number;
}

export interface XPProgressData {
  date: string;
  xp: number;
  cumulative: number;
}