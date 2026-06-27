'use client';

import { useState } from 'react';
import { useApp } from '@/app/providers';
import { useTranslation } from '@/lib/i18n';
import { createClient } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { Globe, Moon, Sun, Battery, Bell, Mail, Save, Loader2 } from 'lucide-react';

export default function SettingsPage() {
  const { user, profile, locale, setLocale } = useApp();
  const { t } = useTranslation(locale);
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(profile?.theme || 'light');
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    study: true,
  });

  const handleSave = async () => {
    if (!user) return;
    setLoading(true);
    await supabase.from('profiles').update({ theme, language: locale }).eq('id', user.id);
    toast.success(t.settings.saved);
    setLoading(false);
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark', 'economy');
    if (newTheme !== 'light') document.documentElement.classList.add(newTheme);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t.settings.title}</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-1">Personnalisez votre expérience</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Globe className="h-5 w-5" /> {t.settings.language}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Button variant={locale === 'fr' ? 'default' : 'outline'} onClick={() => setLocale('fr')}>
            Français
          </Button>
          <Button variant={locale === 'en' ? 'default' : 'outline'} onClick={() => setLocale('en')}>
            English
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Moon className="h-5 w-5" /> {t.settings.theme}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Button variant={theme === 'light' ? 'default' : 'outline'} onClick={() => handleThemeChange('light')} className="gap-2">
            <Sun className="h-4 w-4" /> {t.theme.light}
          </Button>
          <Button variant={theme === 'dark' ? 'default' : 'outline'} onClick={() => handleThemeChange('dark')} className="gap-2">
            <Moon className="h-4 w-4" /> {t.theme.dark}
          </Button>
          <Button variant={theme === 'economy' ? 'default' : 'outline'} onClick={() => handleThemeChange('economy')} className="gap-2">
            <Battery className="h-4 w-4" /> {t.theme.economy}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Bell className="h-5 w-5" /> {t.settings.notifications}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-slate-500" />
              <Label>{t.settings.emailNotifications}</Label>
            </div>
            <Switch checked={notifications.email} onCheckedChange={(v) => setNotifications({ ...notifications, email: v })} />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-slate-500" />
              <Label>{t.settings.pushNotifications}</Label>
            </div>
            <Switch checked={notifications.push} onCheckedChange={(v) => setNotifications({ ...notifications, push: v })} />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4 text-slate-500" />
              <Label>{t.settings.studyReminders}</Label>
            </div>
            <Switch checked={notifications.study} onCheckedChange={(v) => setNotifications({ ...notifications, study: v })} />
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSave} disabled={loading} className="w-full gap-2">
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
        {t.settings.save}
      </Button>
    </div>
  );
}
