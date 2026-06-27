'use client';

import { useState } from 'react';
import { useApp } from '@/app/providers';
import { useTranslation } from '@/lib/i18n';
import { createClient } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { toast } from 'sonner';
import { User, Mail, Save, Loader2 } from 'lucide-react';

export default function ProfilePage() {
  const { user, profile, refreshProfile, locale } = useApp();
  const { t } = useTranslation(locale);
  const supabase = createClient();
  const [fullName, setFullName] = useState(profile?.full_name || '');
  const [phone, setPhone] = useState(profile?.phone || '');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!user) return;
    setLoading(true);
    const { error } = await supabase
      .from('profiles')
      .update({ full_name: fullName, phone, updated_at: new Date().toISOString() })
      .eq('id', user.id);
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    await refreshProfile();
    toast.success(t.settings.saved);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t.nav.profile}</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-1">Gérez vos informations personnelles</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-blue-100 text-blue-700 text-xl font-semibold">
                {profile?.full_name?.charAt(0)?.toUpperCase() || 'U'}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold text-slate-900 dark:text-white">{profile?.full_name || 'User'}</h2>
              <p className="text-sm text-slate-500">{user?.email}</p>
              <p className="text-xs text-slate-500 mt-0.5 capitalize">Plan: {profile?.plan || 'free'}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="flex items-center gap-2">
                <User className="h-4 w-4" /> {t.auth.fullName}
              </Label>
              <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> Email
              </Label>
              <Input id="email" value={user?.email || ''} disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input id="phone" placeholder="6XX XXX XXX" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Code de parrainage</Label>
              <div className="flex items-center gap-2">
                <Input value={profile?.referral_code || ''} disabled />
              </div>
            </div>
            <Button onClick={handleSave} disabled={loading} className="w-full gap-2">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              {t.settings.save}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
