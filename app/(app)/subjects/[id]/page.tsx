'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useApp } from '@/app/providers';
import { useTranslation } from '@/lib/i18n';
import { createClient } from '@/lib/supabase';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Trophy, ArrowLeft, ChevronRight } from 'lucide-react';

export default function SubjectDetailPage() {
  const params = useParams();
  const { locale } = useApp();
  const { t } = useTranslation(locale);
  const supabase = createClient();
  const [subject, setSubject] = useState<any>(null);
  const [chapters, setChapters] = useState<any[]>([]);
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data: subjectData } = await supabase.from('subjects').select('*').eq('id', params.id).single();
      setSubject(subjectData);

      const { data: chaptersData } = await supabase.from('chapters').select('*').eq('subject_id', params.id).order('order_index');
      setChapters(chaptersData || []);

      const { data: quizzesData } = await supabase.from('quizzes').select('*').eq('subject_id', params.id);
      setQuizzes(quizzesData || []);

      setLoading(false);
    };
    load();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (!subject) return <div className="text-center py-20">Matière introuvable</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Link href="/subjects">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" /> {t.common.back}
          </Button>
        </Link>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          {locale === 'fr' ? subject.name_fr : subject.name_en}
        </h1>
        <p className="text-slate-600 dark:text-slate-300 mt-1">
          {locale === 'fr' ? subject.description_fr : subject.description_en}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                Chapitres
              </h2>
              <div className="space-y-3">
                {chapters.map((chapter, i) => (
                  <div key={chapter.id} className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-sm font-semibold text-blue-600">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900 dark:text-white">
                          {locale === 'fr' ? chapter.title_fr : chapter.title_en}
                        </h3>
                        <p className="text-xs text-slate-500">
                          {locale === 'fr' ? chapter.description_fr : chapter.description_en}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </div>
                ))}
                {chapters.length === 0 && (
                  <p className="text-sm text-slate-500 text-center py-4">Aucun chapitre disponible</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-amber-500" />
                Quiz disponibles
              </h2>
              <div className="space-y-3">
                {quizzes.map((quiz) => (
                  <Link key={quiz.id} href={`/quiz/${quiz.id}`}>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors mb-2">
                      <div>
                        <h3 className="font-medium text-sm text-slate-900 dark:text-white">
                          {locale === 'fr' ? quiz.title_fr : quiz.title_en}
                        </h3>
                        <Badge variant="outline" className="mt-1 text-xs capitalize">{quiz.difficulty}</Badge>
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-400" />
                    </div>
                  </Link>
                ))}
                {quizzes.length === 0 && (
                  <p className="text-sm text-slate-500 text-center py-4">Aucun quiz disponible</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
