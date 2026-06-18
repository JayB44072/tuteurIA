'use client';

import React, { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import {
  Users,
  TrendingUp,
  Clock,
  Star,
  Award,
  BookOpen,
  Flame,
  Crown,
  Download,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import {
  mockUser,
  mockSubjects,
  mockBadges,
  mockQuizSessions,
  mockSubscription,
} from '@/lib/mockData';

const weeklyStudyData = [
  { day: 'Lun', minutes: 45 },
  { day: 'Mar', minutes: 60 },
  { day: 'Mer', minutes: 30 },
  { day: 'Jeu', minutes: 75 },
  { day: 'Ven', minutes: 50 },
  { day: 'Sam', minutes: 90 },
  { day: 'Dim', minutes: 20 },
];

const totalMinutes = weeklyStudyData?.reduce((a, b) => a + b?.minutes, 0);
const avgScore =
  mockSubjects?.reduce((acc, s) => acc + (s?.lastScore ?? 0), 0) /
  mockSubjects?.filter((s) => s?.lastScore)?.length;

export default function ParentPage() {
  const [reportGenerated, setReportGenerated] = useState(false);

  const handleExport = () => {
    setReportGenerated(true);
    setTimeout(() => setReportGenerated(false), 3000);
  };

  return (
    <AppLayout activePath="/dashboard/parent">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-800 text-foreground flex items-center gap-2">
              <Users size={24} className="text-primary-light" />
              Espace Parent
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Suivi de la progression de <span className="font-600 text-foreground">{mockUser?.fullName}</span> · Bac D
            </p>
          </div>
          <button
            onClick={handleExport}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-600 transition-all duration-200 ${
              reportGenerated
                ? 'bg-success/20 text-success' :'bg-primary/10 text-primary-light hover:bg-primary/20'
            }`}
          >
            {reportGenerated ? (
              <>
                <CheckCircle size={15} />
                Rapport exporté !
              </>
            ) : (
              <>
                <Download size={15} />
                Exporter le rapport
              </>
            )}
          </button>
        </div>

        {/* Student summary card */}
        <div className="card p-5 flex items-center gap-5 flex-wrap">
          <div className="w-16 h-16 rounded-2xl bg-gradient-violet flex items-center justify-center text-white text-xl font-800 flex-shrink-0">
            {mockUser?.fullName?.split(' ')?.map((n) => n?.[0])?.join('')}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-lg font-800 text-foreground">{mockUser?.fullName}</p>
            <p className="text-sm text-muted-foreground">
              {mockUser?.examSeries === 'bac_d' ? 'Baccalauréat Série D' : mockUser?.examSeries} · Niveau {mockUser?.level}
            </p>
            <div className="flex items-center gap-4 mt-2 flex-wrap">
              <div className="flex items-center gap-1.5">
                <Flame size={13} className="text-accent" />
                <span className="text-xs font-600 text-accent">{mockUser?.streakDays} jours consécutifs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Crown size={13} className="text-primary-light" />
                <span className="text-xs font-600 text-primary-light">{mockUser?.xpTotal?.toLocaleString('fr-FR')} XP</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star size={13} className="text-warning" />
                <span className="text-xs font-600 text-warning">Moy. {avgScore?.toFixed(1)}/20</span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 text-right">
            <p className="text-xs text-muted-foreground">Abonnement</p>
            <p className="text-sm font-700 text-foreground capitalize">
              {mockSubscription?.tier === 'pass_chrono' ? 'Pass Chrono' : mockSubscription?.tier}
            </p>
            <p className="text-[11px] text-warning">Expire le {mockSubscription?.endDate}</p>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: <Clock size={18} className="text-primary-light" />,
              label: 'Temps d\'étude (semaine)',
              value: `${Math.round(totalMinutes / 60)}h ${totalMinutes % 60}min`,
              bg: 'bg-primary/10',
            },
            {
              icon: <Star size={18} className="text-warning" />,
              label: 'Score moyen',
              value: `${avgScore?.toFixed(1)}/20`,
              bg: 'bg-warning/10',
            },
            {
              icon: <Award size={18} className="text-accent" />,
              label: 'Badges obtenus',
              value: `${mockBadges?.length}`,
              bg: 'bg-accent/10',
            },
            {
              icon: <BookOpen size={18} className="text-success" />,
              label: 'Quiz complétés',
              value: `${mockQuizSessions?.length}`,
              bg: 'bg-success/10',
            },
          ]?.map((kpi, i) => (
            <div key={i} className="card p-4 flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl ${kpi?.bg} flex items-center justify-center flex-shrink-0`}>
                {kpi?.icon}
              </div>
              <div>
                <p className="text-xs text-muted-foreground leading-tight">{kpi?.label}</p>
                <p className="text-lg font-800 text-foreground">{kpi?.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts + details */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Weekly study time chart */}
          <div className="card p-5 lg:col-span-3">
            <h3 className="text-sm font-700 text-foreground mb-4 flex items-center gap-2">
              <Clock size={15} className="text-primary-light" />
              Temps d'étude cette semaine (minutes)
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={weeklyStudyData} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} />
                <YAxis tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} />
                <Tooltip
                  contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }}
                  formatter={(v) => [`${v} min`, 'Étude']}
                />
                <Bar dataKey="minutes" fill="#7C3AED" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Subject scores */}
          <div className="card p-5 lg:col-span-2">
            <h3 className="text-sm font-700 text-foreground mb-4 flex items-center gap-2">
              <TrendingUp size={15} className="text-primary-light" />
              Scores par matière
            </h3>
            <div className="space-y-3">
              {mockSubjects?.slice(0, 5)?.map((s) => (
                <div key={s?.id} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground truncate">{s?.name}</span>
                    <span className="font-700 text-foreground ml-2 flex-shrink-0">
                      {s?.lastScore ?? '—'}/20
                    </span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${((s?.lastScore ?? 0) / 20) * 100}%`,
                        background: s?.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="card p-5">
          <h3 className="text-sm font-700 text-foreground mb-4 flex items-center gap-2">
            <Award size={15} className="text-accent" />
            Badges récents obtenus
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {mockBadges?.map((badge) => (
              <div
                key={badge?.id}
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-muted/30 text-center"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${badge?.color}20` }}
                >
                  {badge?.icon}
                </div>
                <p className="text-xs font-600 text-foreground leading-tight">{badge?.name}</p>
                <p className="text-[10px] text-muted-foreground">{badge?.earnedAt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent quiz history */}
        <div className="card p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-700 text-foreground flex items-center gap-2">
              <BookOpen size={15} className="text-primary-light" />
              Historique des quiz
            </h3>
            <button className="text-xs text-primary-light flex items-center gap-1 hover:underline">
              Tout voir <ChevronRight size={12} />
            </button>
          </div>
          <div className="space-y-2">
            {mockQuizSessions?.map((q) => (
              <div
                key={q?.id}
                className="flex items-center gap-4 p-3 rounded-xl bg-muted/30"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen size={14} className="text-primary-light" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-600 text-foreground">{q?.subjectName}</p>
                  <p className="text-xs text-muted-foreground">{q?.totalQuestions} questions · {q?.duration} min</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p
                    className={`text-sm font-800 ${
                      q?.score >= 14 ? 'text-success' : q?.score >= 10 ? 'text-warning' : 'text-error'
                    }`}
                  >
                    {q?.score}/20
                  </p>
                  <p className="text-[11px] text-muted-foreground">{q?.completedAt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
