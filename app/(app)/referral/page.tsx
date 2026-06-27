'use client';

import { useEffect, useState } from 'react';
import { useApp } from '@/app/providers';
import { useTranslation } from '@/lib/i18n';
import { createClient } from '@/lib/supabase';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Copy, Share2, Users, Trophy, Star, Zap, Gift } from 'lucide-react';

export default function ReferralPage() {
  const { user, profile, locale } = useApp();
  const { t } = useTranslation(locale);
  const supabase = createClient();
  const [referrals, setReferrals] = useState<any[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!user) return;
    const load = async () => {
      const { data } = await supabase
        .from('referrals')
        .select('*')
        .eq('referrer_id', user.id)
        .order('created_at', { ascending: false });
      setReferrals(data || []);
    };
    load();
  }, [user]);

  const referralCode = profile?.referral_code || '';
  const referralUrl = typeof window !== 'undefined' ? `${window.location.origin}/auth/signup?ref=${referralCode}` : '';
  const completedCount = referrals.filter((r) => r.status === 'completed').length;
  const daysEarned = completedCount * 7;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    toast.success('Code copié !');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Rejoins WhiteDuke',
          text: `Utilise mon code ${referralCode} pour t'inscrire à WhiteDuke et obtenir 7 jours Premium !`,
          url: referralUrl,
        });
      } catch {
        // user cancelled
      }
    } else {
      navigator.clipboard.writeText(referralUrl);
      toast.success('Lien copié !');
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t.referral.title}</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-1">{t.referral.subtitle}</p>
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200">
        <CardContent className="pt-6 text-center">
          <div className="w-16 h-16 rounded-full bg-blue-600 mx-auto mb-4 flex items-center justify-center">
            <Gift className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{t.referral.yourCode}</h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-3 font-mono text-xl font-bold text-slate-900 dark:text-white border">
              {referralCode}
            </div>
            <Button variant="outline" size="icon" onClick={handleCopy}>
              <Copy className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleShare}>
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-slate-600">{copied ? 'Copié !' : 'Copiez et partagez ce code avec vos amis'}</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6 text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900 dark:text-white">{completedCount}</div>
            <p className="text-sm text-slate-500">{t.referral.friendsInvited}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <Trophy className="h-8 w-8 text-amber-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-slate-900 dark:text-white">{daysEarned}</div>
            <p className="text-sm text-slate-500">{t.referral.daysEarned}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="pt-6">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-4">{t.referral.howItWorks}</h3>
          <div className="space-y-3">
            {[
              { step: '1', text: t.referral.step1 },
              { step: '2', text: t.referral.step2 },
              { step: '3', text: t.referral.step3 },
              { step: '4', text: t.referral.step4 },
            ].map((s) => (
              <div key={s.step} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-sm font-semibold text-blue-600">
                  {s.step}
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">{s.text}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
