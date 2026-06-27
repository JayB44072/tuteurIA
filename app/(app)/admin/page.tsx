'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '@/app/providers';
import { useTranslation } from '@/lib/i18n';
import { createClient } from '@/lib/supabase';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, BookOpen, Trophy, Sparkles, CreditCard, TrendingUp } from 'lucide-react';

export default function AdminPage() {
  const router = useRouter();
  const { user, profile, locale } = useApp();
  const { t } = useTranslation(locale);
  const supabase = createClient();
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalQuizzes: 0,
    totalAttempts: 0,
    totalAiSessions: 0,
    totalSubscriptions: 0,
  });
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (profile?.role !== 'admin') {
      router.push('/dashboard');
      return;
    }
    const load = async () => {
      const { count: userCount } = await supabase.from('profiles').select('*', { count: 'exact', head: true });
      const { count: quizCount } = await supabase.from('quizzes').select('*', { count: 'exact', head: true });
      const { count: attemptCount } = await supabase.from('quiz_attempts').select('*', { count: 'exact', head: true });
      const { count: aiCount } = await supabase.from('ai_sessions').select('*', { count: 'exact', head: true });
      const { count: subCount } = await supabase.from('subscriptions').select('*', { count: 'exact', head: true });
      const { data: usersData } = await supabase.from('profiles').select('*, subscriptions(*)').order('created_at', { ascending: false }).limit(20);
      setStats({
        totalUsers: userCount || 0,
        totalQuizzes: quizCount || 0,
        totalAttempts: attemptCount || 0,
        totalAiSessions: aiCount || 0,
        totalSubscriptions: subCount || 0,
      });
      setUsers(usersData || []);
      setLoading(false);
    };
    load();
  }, [profile, router]);

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
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t.nav.admin}</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-1">Vue d'ensemble de la plateforme</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card><CardContent className="pt-6 text-center"><Users className="h-6 w-6 text-blue-600 mx-auto mb-2" /><div className="text-2xl font-bold">{stats.totalUsers}</div><p className="text-xs text-slate-500">Utilisateurs</p></CardContent></Card>
        <Card><CardContent className="pt-6 text-center"><BookOpen className="h-6 w-6 text-green-600 mx-auto mb-2" /><div className="text-2xl font-bold">{stats.totalQuizzes}</div><p className="text-xs text-slate-500">Quiz</p></CardContent></Card>
        <Card><CardContent className="pt-6 text-center"><Trophy className="h-6 w-6 text-amber-600 mx-auto mb-2" /><div className="text-2xl font-bold">{stats.totalAttempts}</div><p className="text-xs text-slate-500">Tentatives</p></CardContent></Card>
        <Card><CardContent className="pt-6 text-center"><Sparkles className="h-6 w-6 text-purple-600 mx-auto mb-2" /><div className="text-2xl font-bold">{stats.totalAiSessions}</div><p className="text-xs text-slate-500">Sessions IA</p></CardContent></Card>
        <Card><CardContent className="pt-6 text-center"><CreditCard className="h-6 w-6 text-emerald-600 mx-auto mb-2" /><div className="text-2xl font-bold">{stats.totalSubscriptions}</div><p className="text-xs text-slate-500">Abonnements</p></CardContent></Card>
      </div>

      <Card>
        <CardContent className="pt-6">
          <h2 className="font-semibold text-slate-900 dark:text-white mb-4">Utilisateurs récents</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-3">Nom</th>
                  <th className="text-left py-2 px-3">Plan</th>
                  <th className="text-left py-2 px-3">Rôle</th>
                  <th className="text-left py-2 px-3">Inscription</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b hover:bg-slate-50 dark:hover:bg-slate-800">
                    <td className="py-2 px-3">{u.full_name || '—'}</td>
                    <td className="py-2 px-3"><Badge variant="outline" className="capitalize">{u.plan}</Badge></td>
                    <td className="py-2 px-3"><Badge variant="outline" className="capitalize">{u.role}</Badge></td>
                    <td className="py-2 px-3 text-slate-500">{new Date(u.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
