'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/app/providers';
import { useTranslation } from '@/lib/i18n';
import { createClient } from '@/lib/supabase';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calculator, Atom, FlaskConical, Dna, BookOpen, Globe, PenTool, Languages, Sparkles, TrendingUp } from 'lucide-react';

const iconMap: Record<string, any> = {
  Calculator, Atom, FlaskConical, Dna, BookOpen, Globe, PenTool, Languages, Sparkles, TrendingUp,
};

export default function SubjectsPage() {
  const { locale } = useApp();
  const { t } = useTranslation(locale);
  const supabase = createClient();
  const [subjects, setSubjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.from('subjects').select('*').order('name_fr');
      setSubjects(data || []);
      setLoading(false);
    };
    load();
  }, []);

  const filtered = filter === 'all' ? subjects : subjects.filter((s) => s.level === filter || s.level === 'both');

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
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t.subjects.title}</h1>
          <p className="text-slate-600 dark:text-slate-300 mt-1">{t.subjects.subtitle}</p>
        </div>
        <div className="flex gap-2">
          {[
            { key: 'all', label: t.subjects.allSubjects },
            { key: 'bac', label: t.subjects.bac },
            { key: 'gce_alevel', label: t.subjects.gce },
          ].map((f) => (
            <Button key={f.key} variant={filter === f.key ? 'default' : 'outline'} size="sm" onClick={() => setFilter(f.key)}>
              {f.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((subject) => {
          const Icon = iconMap[subject.icon] || BookOpen;
          return (
            <Link key={subject.id} href={`/subjects/${subject.id}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-${subject.color}-100 dark:bg-${subject.color}-900/30 flex items-center justify-center`}>
                      <Icon className={`h-6 w-6 text-${subject.color}-600`} />
                    </div>
                    <Badge variant="outline" className="capitalize">
                      {subject.level === 'both' ? t.subjects.both : subject.level === 'bac' ? t.subjects.bac : t.subjects.gce}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-1">
                    {locale === 'fr' ? subject.name_fr : subject.name_en}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                    {locale === 'fr' ? subject.description_fr : subject.description_en}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" /> Chapitres
                    </span>
                    <span className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" /> Quiz
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
