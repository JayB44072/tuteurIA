'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/app/providers';
import { useTranslation } from '@/lib/i18n';
import { createClient } from '@/lib/supabase';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Trophy, Sparkles, ArrowRight, Filter } from 'lucide-react';

export default function QuizListPage() {
  const { locale, profile } = useApp();
  const { t } = useTranslation(locale);
  const supabase = createClient();
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState('all');

  useEffect(() => {
    const load = async () => {
      const { data: quizData } = await supabase.from('quizzes').select('*, subjects(name_fr, name_en)').order('created_at', { ascending: false });
      const { data: subjectData } = await supabase.from('subjects').select('*');
      setQuizzes(quizData || []);
      setSubjects(subjectData || []);
      setLoading(false);
    };
    load();
  }, []);

  const filtered = quizzes.filter((q) => {
    const matchSubject = subjectFilter === 'all' || q.subject_id === subjectFilter;
    const matchDifficulty = difficultyFilter === 'all' || q.difficulty === difficultyFilter;
    return matchSubject && matchDifficulty;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t.quiz.title}</h1>
          <p className="text-slate-600 dark:text-slate-300 mt-1">Testez vos connaissances avec nos quiz adaptatifs</p>
        </div>
        <div className="flex gap-2">
          <Select value={subjectFilter} onValueChange={setSubjectFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Matière" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les matières</SelectItem>
              {subjects.map((s) => (
                <SelectItem key={s.id} value={s.id}>{locale === 'fr' ? s.name_fr : s.name_en}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Difficulté" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes</SelectItem>
              <SelectItem value="easy">Facile</SelectItem>
              <SelectItem value="medium">Moyen</SelectItem>
              <SelectItem value="hard">Difficile</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* AI Quiz Generator Card */}
      <Card className="border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
        <CardContent className="flex flex-col md:flex-row items-center justify-between py-6 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">Quiz généré par IA</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">Générez un quiz personnalisé sur n'importe quel sujet</p>
            </div>
          </div>
          <Link href="/ai-tutor">
            <Button className="gap-2">
              <Sparkles className="h-4 w-4" /> {t.quiz.generateAI}
            </Button>
          </Link>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((quiz) => (
          <Link key={quiz.id} href={`/quiz/${quiz.id}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className="capitalize">{quiz.difficulty}</Badge>
                  {quiz.ai_generated && (
                    <Badge variant="secondary" className="gap-1">
                      <Sparkles className="h-3 w-3" /> IA
                    </Badge>
                  )}
                </div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-1">
                  {locale === 'fr' ? quiz.title_fr : quiz.title_en}
                </h3>
                <p className="text-sm text-slate-500 mb-3">
                  {locale === 'fr' ? quiz.subjects?.name_fr : quiz.subjects?.name_en}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{new Date(quiz.created_at).toLocaleDateString()}</span>
                  <ArrowRight className="h-4 w-4 text-blue-600" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-12 text-slate-500">
            <Trophy className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Aucun quiz ne correspond à vos critères</p>
          </div>
        )}
      </div>
    </div>
  );
}
