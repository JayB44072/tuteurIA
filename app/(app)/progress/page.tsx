'use client';

import { useEffect, useState } from 'react';
import { useApp } from '@/app/providers';
import { useTranslation } from '@/lib/i18n';
import { createClient } from '@/lib/supabase';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t.nav.progress}</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-1">Suivez votre évolution et identifiez vos points forts</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card><CardContent className="pt-6 text-center"><Trophy className="h-6 w-6 text-amber-500 mx-auto mb-2" /><div className="text-2xl font-bold">{attempts.length}</div><p className="text-xs text-slate-500">Quiz passés</p></CardContent></Card>
        <Card><CardContent className="pt-6 text-center"><TrendingUp className="h-6 w-6 text-green-500 mx-auto mb-2" /><div className="text-2xl font-bold">{avgScore}%</div><p className="text-xs text-slate-500">Moyenne</p></CardContent></Card>
        <Card><CardContent className="pt-6 text-center"><BookOpen className="h-6 w-6 text-blue-500 mx-auto mb-2" /><div className="text-2xl font-bold">{progress.length}</div><p className="text-xs text-slate-500">Matières suivies</p></CardContent></Card>
        <Card><CardContent className="pt-6 text-center"><Target className="h-6 w-6 text-purple-500 mx-auto mb-2" /><div className="text-2xl font-bold">{Math.round(attempts.filter((a) => (a.score / a.total_questions) >= 0.6).length / Math.max(attempts.length, 1) * 100)}%</div><p className="text-xs text-slate-500">Taux de réussite</p></CardContent></Card>
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
