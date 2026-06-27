'use client';

import { useEffect, useState } from 'react';
import { useApp } from '@/app/providers';
import { useTranslation } from '@/lib/i18n';
import { createClient } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { Bell, CheckCircle2, BellRing, BookOpen, Sparkles, AlertTriangle, Zap } from 'lucide-react';

export default function NotificationsPage() {
  const { user, locale } = useApp();
  const { t } = useTranslation(locale);
  const supabase = createClient();
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (!user) return;
    const load = async () => {
      const { data } = await supabase
        .from('notifications')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      setNotifications(data || []);
      setLoading(false);
    };
    load();
  }, [user]);

  const markAsRead = async (id: string) => {
    await supabase.from('notifications').update({ read: true }).eq('id', id);
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  const markAllAsRead = async () => {
    if (!user) return;
    await supabase.from('notifications').update({ read: true }).eq('user_id', user.id);
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
    toast.success('Toutes les notifications marquées comme lues');
  };

  const filtered = filter === 'all' ? notifications : notifications.filter((n) => n.type === filter);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const typeIcons: Record<string, any> = {
    system: Bell,
    pedagogical: BookOpen,
    ai: Sparkles,
    push: Zap,
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Bell className="h-6 w-6" /> {t.notifications.title}
            {unreadCount > 0 && (
              <Badge variant="destructive" className="ml-2">{unreadCount}</Badge>
            )}
          </h1>
        </div>
        <Button variant="outline" size="sm" onClick={markAllAsRead}>
          <CheckCircle2 className="h-4 w-4 mr-1" /> {t.notifications.markAllRead}
        </Button>
      </div>

      <div className="flex gap-2">
        {['all', 'system', 'pedagogical', 'ai'].map((f) => (
          <Button key={f} variant={filter === f ? 'default' : 'outline'} size="sm" onClick={() => setFilter(f)}>
            {f === 'all' ? t.common.all : t.notifications[f as keyof typeof t.notifications]}
          </Button>
        ))}
      </div>

      <div className="space-y-3">
        {filtered.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            <BellRing className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p>{t.notifications.empty}</p>
          </div>
        )}
        {filtered.map((n) => {
          const Icon = typeIcons[n.type] || Bell;
          return (
            <Card key={n.id} className={n.read ? 'opacity-60' : ''}>
              <CardContent className="flex items-start gap-3 pt-5">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  n.type === 'system' ? 'bg-blue-100 text-blue-600' :
                  n.type === 'pedagogical' ? 'bg-amber-100 text-amber-600' :
                  n.type === 'ai' ? 'bg-purple-100 text-purple-600' :
                  'bg-slate-100 text-slate-600'
                }`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-sm text-slate-900 dark:text-white">
                    {locale === 'fr' ? n.title_fr : n.title_en}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                    {locale === 'fr' ? n.message_fr : n.message_en}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs text-slate-500">
                      {new Date(n.created_at).toLocaleDateString()}
                    </span>
                    {!n.read && (
                      <button onClick={() => markAsRead(n.id)} className="text-xs text-blue-600 hover:underline">
                        {t.notifications.markRead}
                      </button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
