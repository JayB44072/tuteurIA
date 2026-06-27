'use client';

import { useEffect, useState } from 'react';
import { useApp } from '@/app/providers';
import { useTranslation } from '@/lib/i18n';
import { createClient } from '@/lib/supabase';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { TrendingUp, Trophy, BookOpen, Target, AlertTriangle } from 'lucide-react';

export default function ProgressPage() {
  const { user, locale } = useApp();
  const { t } = useTranslation(locale);
  const supabase = createClient();
  const [attempts, setAttempts] = useState<any[]>([]);
  const [progress, setProgress] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const load = async () => {
      const { data: attemptsData } = await supabase
        .from('quiz_attempts')
        .select('*, quizzes(title_fr, title_en, subject_id, subjects(name_fr, name_en))')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      const { data: progressData } = await supabase
        .from('progress_records')
        .select('*, subjects(name_fr, name_en)')
        .eq('user_id', user.id);
      setAttempts(attemptsData || []);
      setProgress(progressData || []);
      setLoading(false);
    };
    load();
  }, [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  const avgScore = attempts.length > 0
    ? Math.round(attempts.reduce((s, a) => s + (a.score / a.total_questions) * 100, 0) / attempts.length)
    : 0;

  const successRate = attempts.length > 0
    ? Math.round(attempts.filter((a) => (a.score / a.total_questions) >= 0.6).length / attempts.length * 100)
    : 0;

  const subjectRadarData = progress.length > 0
    ? progress.map((p) => ({
        subject: locale === 'fr'
          ? p.subjects?.name_fr || p.subjects?.name_en || 'Matière'
          : p.subjects?.name_en || p.subjects?.name_fr || 'Subject',
        score: Number(p.quiz_average ?? 0),
      }))
    : Object.values(
        attempts.reduce((acc: Record<string, { subject: string; total: number; count: number }>, a) => {
          const subject = locale === 'fr'
            ? a.quizzes?.subjects?.name_fr || a.quizzes?.subjects?.name_en || 'Matière'
            : a.quizzes?.subjects?.name_en || a.quizzes?.subjects?.name_fr || 'Subject';
          if (!subject) return acc;
          const key = subject;
          const score = Number(((a.score / a.total_questions) * 100).toFixed(0));
          if (!acc[key]) acc[key] = { subject, total: 0, count: 0 };
          acc[key].total += score;
          acc[key].count += 1;
          return acc;
        }, {}),
      ).map(({ subject, total, count }) => ({ subject, score: Math.round(total / count) }));

  const scoreHistoryData = attempts
    .slice()
    .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
    .map((a) => ({
      name: new Date(a.created_at).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', {
        day: 'numeric',
        month: 'short',
      }),
      score: Number(((a.score / a.total_questions) * 100).toFixed(0)),
    }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t.nav.progress}</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-1">Suivez votre évolution et identifiez vos points forts</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <RevealOnScroll direction="left" delay={0} className="w-full">
          <Card>
            <CardContent className="pt-6 text-center">
              <Trophy className="h-6 w-6 text-amber-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">{attempts.length}</div>
              <p className="text-xs text-slate-500">Quiz passés</p>
            </CardContent>
          </Card>
        </RevealOnScroll>
        <RevealOnScroll direction="bottom" delay={80} className="w-full">
          <Card>
            <CardContent className="pt-6 text-center">
              <TrendingUp className="h-6 w-6 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">{avgScore}%</div>
              <p className="text-xs text-slate-500">Moyenne</p>
            </CardContent>
          </Card>
        </RevealOnScroll>
        <RevealOnScroll direction="right" delay={160} className="w-full">
          <Card>
            <CardContent className="pt-6 text-center">
              <BookOpen className="h-6 w-6 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">{progress.length}</div>
              <p className="text-xs text-slate-500">Matières suivies</p>
            </CardContent>
          </Card>
        </RevealOnScroll>
        <RevealOnScroll direction="left" delay={240} className="w-full">
          <Card>
            <CardContent className="pt-6 text-center">
              <Target className="h-6 w-6 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">{successRate}%</div>
              <p className="text-xs text-slate-500">Taux de réussite</p>
            </CardContent>
          </Card>
        </RevealOnScroll>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevealOnScroll direction="left" delay={320}>
          <Card>
            <CardContent className="pt-6">
              <h2 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" /> Profil de compétences
              </h2>
              {subjectRadarData.length > 0 ? (
                <ResponsiveContainer width="100%" height={280}>
                  <RadarChart data={subjectRadarData} outerRadius="80%">
                    <PolarGrid stroke="var(--border)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} />
                    <Radar
                      name="Score"
                      dataKey="score"
                      stroke="#7C3AED"
                      fill="#7C3AED"
                      fillOpacity={0.25}
                      strokeWidth={2}
                      animationDuration={900}
                    />
                    <Tooltip formatter={(value: number) => `${value}%`} />
                  </RadarChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-sm text-slate-500 text-center py-8">Aucune donnée de progression disponible.</p>
              )}
            </CardContent>
          </Card>
        </RevealOnScroll>

        <RevealOnScroll direction="right" delay={360}>
          <Card>
            <CardContent className="pt-6">
              <h2 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" /> Évolution des scores
              </h2>
              {scoreHistoryData.length > 0 ? (
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={scoreHistoryData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis dataKey="name" tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} />
                    <YAxis tick={{ fontSize: 11, fill: 'var(--muted-foreground)' }} />
                    <Tooltip contentStyle={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 12 }} formatter={(value: number) => `${value}%`} />
                    <Area
                      type="monotone"
                      dataKey="score"
                      stroke="#22C55E"
                      strokeWidth={2}
                      fill="url(#scoreGrad)"
                      animationDuration={900}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-sm text-slate-500 text-center py-8">Aucun score historique disponible pour générer le graphique.</p>
              )}
            </CardContent>
          </Card>
        </RevealOnScroll>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <h2 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" /> Historique des scores
            </h2>
            <div className="space-y-3">
              {attempts.length === 0 ? (
                <p className="text-sm text-slate-500 text-center py-4">Aucun quiz passé pour le moment</p>
              ) : (
                attempts.slice(0, 10).map((a) => (
                  <div key={a.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                    <div>
                      <p className="font-medium text-sm text-slate-900 dark:text-white">{locale === 'fr' ? a.quizzes?.title_fr : a.quizzes?.title_en}</p>
                      <p className="text-xs text-slate-500">{new Date(a.created_at).toLocaleDateString()}</p>
                    </div>
                    <Badge variant={a.score / a.total_questions >= 0.6 ? 'default' : 'destructive'}>
                      {Math.round((a.score / a.total_questions) * 100)}%
                    </Badge>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" /> Points faibles
            </h2>
            <div className="space-y-3">
              {progress.length === 0 ? (
                <p className="text-sm text-slate-500 text-center py-4">Passez des quiz pour identifier vos points faibles</p>
              ) : (
                progress.map((p) => (
                  <div key={p.id} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-700 dark:text-slate-200">{locale === 'fr' ? p.subjects?.name_fr : p.subjects?.name_en}</span>
                      <span className="font-medium">{p.quiz_average}%</span>
                    </div>
                    <Progress value={p.quiz_average} className="h-2" />
                    <p className="text-xs text-slate-500">
                      {p.completion_percent}% complété
                    </p>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
