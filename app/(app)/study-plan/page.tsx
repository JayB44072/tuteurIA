'use client';

import { useEffect, useState } from 'react';
import { useApp } from '@/app/providers';
import { useTranslation } from '@/lib/i18n';
import { createClient } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Plus, Target, Calendar, CheckCircle2, BookOpen, Loader2 } from 'lucide-react';

export default function StudyPlanPage() {
  const { user, locale } = useApp();
  const { t } = useTranslation(locale);
  const supabase = createClient();
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [newTitle, setNewTitle] = useState('');
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    if (!user) return;
    const load = async () => {
      const { data } = await supabase
        .from('study_plans')
        .select('*, study_plan_items(*)')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      setPlans(data || []);
      setLoading(false);
    };
    load();
  }, [user]);

  const createPlan = async () => {
    if (!user || !newTitle.trim()) return;
    setCreating(true);
    const { data } = await supabase
      .from('study_plans')
      .insert({ user_id: user.id, title: newTitle })
      .select()
      .single();
    if (data) {
      setPlans([{ ...data, study_plan_items: [] }, ...plans]);
      setNewTitle('');
      toast.success('Plan de révision créé !');
    }
    setCreating(false);
  };

  const toggleItem = async (itemId: string, planId: string, completed: boolean) => {
    await supabase.from('study_plan_items').update({ completed: !completed }).eq('id', itemId);
    setPlans(plans.map((p) => {
      if (p.id !== planId) return p;
      return {
        ...p,
        study_plan_items: p.study_plan_items.map((i: any) =>
          i.id === itemId ? { ...i, completed: !completed } : i
        ),
      };
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t.nav.studyPlan}</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-1">Organisez votre révision et suivez vos objectifs</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-2">
            <Input
              placeholder="Nom du plan de révision..."
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') createPlan(); }}
            />
            <Button onClick={createPlan} disabled={creating || !newTitle.trim()}>
              {creating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {plans.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            <Target className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p>Aucun plan de révision. Créez votre premier plan !</p>
          </div>
        )}
        {plans.map((plan) => {
          const items = plan.study_plan_items || [];
          const completed = items.filter((i: any) => i.completed).length;
          const percent = items.length > 0 ? Math.round((completed / items.length) * 100) : 0;
          return (
            <Card key={plan.id}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold text-slate-900 dark:text-white">{plan.title}</h3>
                  </div>
                  <span className="text-xs text-slate-500">{percent}%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mb-4">
                  <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: percent + '%' }} />
                </div>
                <div className="space-y-2">
                  {items.length === 0 && (
                    <p className="text-sm text-slate-500">Aucune tâche dans ce plan</p>
                  )}
                  {items.map((item: any) => (
                    <div key={item.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                      <Checkbox
                        checked={item.completed}
                        onCheckedChange={() => toggleItem(item.id, plan.id, item.completed)}
                      />
                      <span className={`text-sm ${item.completed ? 'line-through text-slate-400' : 'text-slate-700 dark:text-slate-300'}`}>
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
