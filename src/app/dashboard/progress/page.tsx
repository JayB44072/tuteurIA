'use client';

import React, { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import {
  TrendingUp,
  Flame,
  Crown,
  Star,
  BookOpen,
  Target,
  Award,
  ChevronRight,
  BarChart2,
} from 'lucide-react';
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { mockSubjects, mockBadges, mockQuizSessions, mockXPProgress, mockUser,  } from '@/lib/mockData';

const radarData = [
  { subject: 'Maths', score: 72 },
  { subject: 'Physique', score: 58 },
  { subject: 'SVT', score: 81 },
  { subject: 'Histoire', score: 44 },
  { subject: 'Français', score: 65 },
  { subject: 'Philo', score: 35 },
];

const badgeCategoryLabel: Record<string, string> = {
  streak: 'Assiduité',
  score: 'Performance',
  completion: 'Complétion',
  engagement: 'Engagement',
};

export default function ProgressPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'subjects' | 'badges'>('overview');

  const avgScore =
    mockSubjects.reduce((acc, s) => acc + (s.lastScore ?? 0), 0) / mockSubjects.filter((s) => s.lastScore).length;

  const totalSessions = mockSubjects.reduce((acc, s) => acc + s.sessionsCount, 0);

  return (
    <AppLayout activePath="/dashboard/progress">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-800 text-foreground flex items-center gap-2">
            <TrendingUp size={24} className="text-primary-light" />
            Ma Progression
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Bac D · Suivi complet de vos performances et accomplissements
          </p>
        </div>

        {/* KPI strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: <Crown size={18} className="text-primary-light" />,
              label: 'XP Total',
              value: mockUser.xpTotal.toLocaleString('fr-FR'),
              sub: `Niveau ${mockUser.level}`,
              bg: 'bg-primary/10',
            },
            {
              icon: <Flame size={18} className="text-accent" />,
              label: 'Série actuelle',
              value: `${mockUser.streakDays} jours`,
              sub: 'Consécutifs',
              bg: 'bg-accent/10',
            },
            {
              icon: <Star size={18} className="text-warning" />,
              label: 'Moyenne générale',
              value: `${avgScore.toFixed(1)}/20`,
              sub: 'Sur toutes matières',
              bg: 'bg-warning/10',
            },
            {
              icon: <BookOpen size={18} className="text-success" />,
              label: 'Sessions d\'étude',
              value: totalSessions.toString(),
              sub: 'Toutes matières',
              bg: 'bg-success/10',
            },
          ].map((kpi, i) => (
            <div key={i} className="card p-4 flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl ${kpi.bg} flex items-center justify-center flex-shrink-0`}>
                {kpi.icon}
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{kpi.label}</p>
                <p className="text-lg font-800 text-foreground leading-tight">{kpi.value}</p>
                <p className="text-[11px] text-muted-foreground">{kpi.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-muted/40 p-1 rounded-xl w-fit">
          {(['overview', 'subjects', 'badges'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-600 transition-all duration-150 ${
                activeTab === tab
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab === 'overview' ? 'Vue d\'ensemble' : tab === 'subjects' ? 'Matières' : 'Badges'}
            </button>
          ))}
        </div>

        {/* Tab: Overview */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Radar chart */}
            <div className="card p-5 lg:col-span-2">
              <h3 className="text-sm font-700 text-foreground mb-4 flex items-center gap-2">
                <BarChart2 size={15} className="text-primary-light" />
                Profil de compétences
              </h3>
              <ResponsiveContainer width="100%" height={240}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="var(--border)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} />
                  <Radar
                    name="Score"
                    dataKey="score"
                    stroke="#7C3AED"
                    fill="#7C3AED"
                    fillOpacity={0.25}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* XP area chart */}
            <div className="card p-5 lg:col-span-3">
              <h3 className="text-sm font-700 text-foreground mb-4 flex items-center gap-2">
                <Crown size={15} className="text-primary-light" />
                Évolution XP — Juin 2026
              </h3>
              <ResponsiveContainer width="100%" height={240}>
                <AreaChart data={mockXPProgress} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="xpGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis dataKey="date" tick={{ fontSize: 10, fill: 'var(--muted-foreground)' }} />
                  <YAxis tick={{ fontSize: 10, fill: 'var(--muted-foreground)' }} />
                  <Tooltip
                    contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="cumulative"
                    stroke="#7C3AED"
                    strokeWidth={2}
                    fill="url(#xpGrad)"
                    name="XP cumulé"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Quiz history */}
            <div className="card p-5 lg:col-span-5">
              <h3 className="text-sm font-700 text-foreground mb-4 flex items-center gap-2">
                <Target size={15} className="text-accent" />
                Historique des quiz récents
              </h3>
              <div className="space-y-3">
                {mockQuizSessions.map((q) => (
                  <div key={q.id} className="flex items-center gap-4 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen size={16} className="text-primary-light" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-600 text-foreground">{q.subjectName}</p>
                      <p className="text-xs text-muted-foreground">{q.totalQuestions} questions · {q.duration} min · {q.completedAt}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className={`text-sm font-800 ${q.score >= 14 ? 'text-success' : q.score >= 10 ? 'text-warning' : 'text-error'}`}>
                        {q.score}/20
                      </p>
                      <p className="text-[11px] text-primary-light">+{q.xpEarned} XP</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab: Subjects */}
        {activeTab === 'subjects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockSubjects.map((subject) => (
              <div key={subject.id} className="card p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                      style={{ background: `${subject.color}20` }}
                    >
                      {subject.icon}
                    </div>
                    <div>
                      <p className="text-sm font-700 text-foreground">{subject.name}</p>
                      <p className="text-xs text-muted-foreground">{subject.sessionsCount} sessions</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className="text-lg font-800"
                      style={{ color: subject.color }}
                    >
                      {subject.lastScore ?? '—'}/20
                    </p>
                    <p className="text-[11px] text-muted-foreground">Dernier score</p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Progression</span>
                    <span className="font-700 text-foreground">{subject.progressPercent}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${subject.progressPercent}%`, background: subject.color }}
                    />
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span
                    className="text-[10px] font-600 px-2 py-0.5 rounded-full"
                    style={{ background: `${subject.color}20`, color: subject.color }}
                  >
                    {subject.category}
                  </span>
                  <button className="text-xs text-primary-light flex items-center gap-1 hover:underline">
                    Voir détails <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Badges */}
        {activeTab === 'badges' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockBadges.map((badge) => (
              <div key={badge.id} className="card p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${badge.color}20` }}
                >
                  {badge.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-700 text-foreground">{badge.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{badge.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span
                      className="text-[10px] font-600 px-2 py-0.5 rounded-full"
                      style={{ background: `${badge.color}20`, color: badge.color }}
                    >
                      {badgeCategoryLabel[badge.category]}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{badge.earnedAt}</span>
                  </div>
                </div>
                <Award size={16} className="text-muted-foreground/40 flex-shrink-0 ml-auto" />
              </div>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
}
