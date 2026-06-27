'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useApp } from '@/app/providers';
import { useTranslation } from '@/lib/i18n';
import { createClient } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import {
  Sparkles, BookOpen, Trophy, Zap, TrendingUp, Clock, Target,
  ChevronRight, Star, AlertTriangle, CheckCircle2
} from 'lucide-react';

interface DashboardStats {
  totalQuizzes: number;
  averageScore: number;
  studyStreak: number;
  aiQuestionsUsed: number;
  aiQuestionsLimit: number;
  recentAttempts: any[];
  weakSubjects: any[];
  recommendedQuiz: any;
  notifications: any[];
}

export default function DashboardPage() {
  const router = useRouter();
  const { user, profile, locale } = useApp();
  const { t } = useTranslation(locale);
  const supabase = createClient();
  const [stats, setStats] = useState<DashboardStats>({
    totalQuizzes: 0,
    averageScore: 0,
    studyStreak: 0,
    aiQuestionsUsed: 0,
    aiQuestionsLimit: 10,
    recentAttempts: [],
    weakSubjects: [],
    recommendedQuiz: null,
    notifications: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const loadStats = async () => {
      const { data: attempts } = await supabase
        .from('quiz_attempts')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      const { data: settings } = await supabase
        .from('user_settings')
        .select('*')
        .eq('user_id', user.id)
        .single();

      const { data: progress } = await supabase
        .from('progress_records')
        .select('*, subjects(name_fr, name_en)')
        .eq('user_id', user.id)
        .order('quiz_average', { ascending: true })
        .limit(5);

      const { data: recentAttempts } = await supabase
        .from('quiz_attempts')
        .select('*, quizzes(title_fr, title_en)')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(5);

      const { data: allQuizzes } = await supabase
        .from('quizzes')
        .select('*, subjects(name_fr, name_en)')
        .limit(1);

      const total = attempts?.length || 0;
      const avg = total > 0
        ? Math.round((attempts?.reduce((s: number, a: any) => s + (a.score / a.total_questions) * 100, 0) || 0) / total)
        : 0;

      setStats({
        totalQuizzes: total,
        averageScore: avg,
        studyStreak: 0,
        aiQuestionsUsed: settings?.ai_usage_count || 0,
        aiQuestionsLimit: settings?.ai_daily_limit || 10,
        recentAttempts: recentAttempts || [],
        weakSubjects: progress?.filter((p: any) => p.quiz_average < 60) || [],
        recommendedQuiz: allQuizzes?.[0] || null,
        notifications: [],
      });
      setLoading(false);
    };
    loadStats();
  }, [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  const planLabel = profile?.plan === 'free' ? 'Gratuit' :
    profile?.plan === 'student_premium' ? 'Premium Étudiant' :
    profile?.plan === 'excellence_premium' ? 'Premium Excellence' : profile?.plan;

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <RevealOnScroll direction="left" delay={0}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t.dashboard.welcome}, {profile?.full_name?.split(' ')[0] || 'Student'}!
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mt-1">
              {t.app.tagline}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant={profile?.plan === 'free' ? 'secondary' : 'default'} className="text-sm px-3 py-1">
              <Star className="h-3 w-3 mr-1" /> {planLabel}
            </Badge>
            {profile?.plan === 'free' && (
              <Link href="/subscription">
                <Button size="sm">{t.subscription.upgrade}</Button>
              </Link>
            )}
          </div>
        </div>
      </RevealOnScroll>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <RevealOnScroll direction="bottom" delay={0} className="w-full">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="h-4 w-4 text-amber-500" />
                <span className="text-sm text-slate-500">{t.dashboard.totalQuizzes}</span>
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">{stats.totalQuizzes}</div>
            </CardContent>
          </Card>
        </RevealOnScroll>
        <RevealOnScroll direction="left" delay={80} className="w-full">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-sm text-slate-500">{t.dashboard.averageScore}</span>
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">{stats.averageScore}%</div>
            </CardContent>
          </Card>
        </RevealOnScroll>
        <RevealOnScroll direction="right" delay={160} className="w-full">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-4 w-4 text-blue-500" />
                <span className="text-sm text-slate-500">{t.dashboard.studyStreak}</span>
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">{stats.studyStreak} jours</div>
            </CardContent>
          </Card>
        </RevealOnScroll>
        <RevealOnScroll direction="bottom" delay={240} className="w-full">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-purple-500" />
                <span className="text-sm text-slate-500">{t.ai.dailyLimit}</span>
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                {stats.aiQuestionsUsed}/{stats.aiQuestionsLimit}
              </div>
            </CardContent>
          </Card>
        </RevealOnScroll>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Daily Goal */}
          <RevealOnScroll direction="right" delay={120}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Target className="h-5 w-5 text-blue-600" />
                  {t.dashboard.dailyGoal}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Progression quotidienne</span>
                    <span className="font-medium">{Math.min(stats.totalQuizzes * 20, 100)}%</span>
                  </div>
                  <Progress value={Math.min(stats.totalQuizzes * 20, 100)} className="h-2" />
                  <div className="flex gap-2 flex-wrap">
                    <Link href="/subjects">
                      <Button variant="outline" size="sm" className="gap-1">
                        <BookOpen className="h-3 w-3" /> Explorer les matières
                      </Button>
                    </Link>
                    <Link href="/quiz">
                      <Button size="sm" className="gap-1">
                        <Trophy className="h-3 w-3" /> Faire un quiz
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </RevealOnScroll>

          {/* Recommended Quiz */}
          {stats.recommendedQuiz && (
            <RevealOnScroll direction="left" delay={160}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Star className="h-5 w-5 text-amber-500" />
                    {t.dashboard.recommendedQuiz}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {locale === 'fr' ? stats.recommendedQuiz.title_fr : stats.recommendedQuiz.title_en}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">
                        {locale === 'fr' ? stats.recommendedQuiz.subjects?.name_fr : stats.recommendedQuiz.subjects?.name_en}
                      </p>
                    </div>
                    <Link href={`/quiz/${stats.recommendedQuiz.id}`}>
                      <Button size="sm">{t.quiz.start}</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>
          )}

          {/* Recent Activity */}
          <RevealOnScroll direction="bottom" delay={200}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Clock className="h-5 w-5 text-slate-600" />
                  {t.dashboard.recentActivity}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {stats.recentAttempts.length === 0 ? (
                  <div className="text-center py-8 text-slate-500">
                    <p>Aucune activité récente</p>
                    <Link href="/quiz">
                      <Button variant="outline" size="sm" className="mt-3">
                        Faire votre premier quiz
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {stats.recentAttempts.map((attempt: any) => (
                      <div key={attempt.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800">
                        <div>
                          <p className="font-medium text-sm text-slate-900 dark:text-white">
                            {locale === 'fr' ? attempt.quizzes?.title_fr : attempt.quizzes?.title_en}
                          </p>
                          <p className="text-xs text-slate-500">
                            {new Date(attempt.created_at).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US')}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={attempt.score / attempt.total_questions >= 0.6 ? 'default' : 'destructive'}>
                            {Math.round((attempt.score / attempt.total_questions) * 100)}%
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </RevealOnScroll>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Weak Areas */}
          <RevealOnScroll direction="right" delay={220}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  {t.dashboard.weakAreas}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {stats.weakSubjects.length === 0 ? (
                  <p className="text-sm text-slate-500 text-center py-4">
                    Continuez à faire des quiz pour identifier vos points faibles.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {stats.weakSubjects.map((s: any) => (
                      <div key={s.id} className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-700 dark:text-slate-200">
                            {locale === 'fr' ? s.subjects?.name_fr : s.subjects?.name_en}
                          </span>
                          <span className="text-red-500 font-medium">{s.quiz_average}%</span>
                        </div>
                        <Progress value={s.quiz_average} className="h-1.5" />
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </RevealOnScroll>

          {/* Quick Actions */}
          <RevealOnScroll direction="bottom" delay={260}>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Actions rapides</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/ai-tutor">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Sparkles className="h-4 w-4" /> Tuteur IA
                  </Button>
                </Link>
                <Link href="/study-plan">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Target className="h-4 w-4" /> Plan de révision
                  </Button>
                </Link>
                <Link href="/progress">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <TrendingUp className="h-4 w-4" /> Voir ma progression
                  </Button>
                </Link>
                <Link href="/referral">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Zap className="h-4 w-4" /> Parrainer un ami
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
