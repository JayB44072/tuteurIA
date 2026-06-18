'use client';

import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useApp } from '@/app/providers';
import { useTranslation } from '@/lib/i18n';
import { createClient } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { Loader2, ArrowLeft, Smartphone, CreditCard, CheckCircle2, Copy } from 'lucide-react';

const planPrices: Record<string, number> = {
  free: 0,
  student_premium: 2500,
  excellence_premium: 5000,
  school: 50000,
};

const planNames: Record<string, { fr: string; en: string }> = {
  free: { fr: 'Gratuit', en: 'Free' },
  student_premium: { fr: 'Premium Étudiant', en: 'Student Premium' },
  excellence_premium: { fr: 'Premium Excellence', en: 'Excellence Premium' },
  school: { fr: 'Établissement scolaire', en: 'School' },
};

function PaymentForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || 'student_premium';
  const { user, locale } = useApp();
  const { t } = useTranslation(locale);
  const supabase = createClient();

  const [method, setMethod] = useState<'mtn_momo' | 'orange_money' | 'card'>('mtn_momo');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [reference, setReference] = useState('');
  const [step, setStep] = useState<'form' | 'confirm' | 'success'>('form');
  const [loading, setLoading] = useState(false);

  const price = planPrices[plan] || 2500;
  const planName = planNames[plan] || planNames.student_premium;

  const generateReference = () => {
    return 'WD' + Math.random().toString(36).substring(2, 8).toUpperCase() + Date.now().toString().slice(-4);
  };

  const handleConfirm = () => {
    const ref = generateReference();
    setReference(ref);
    setStep('confirm');
  };

  const handlePayment = async () => {
    setLoading(true);
    // Simulate payment processing
    await new Promise((r) => setTimeout(r, 2000));

    if (user) {
      await supabase.from('subscriptions').insert({
        user_id: user.id,
        plan,
        status: 'active',
        payment_method: method,
        payment_reference: reference,
        amount: price,
        expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      });
      await supabase.from('profiles').update({ plan }).eq('id', user.id);
    }

    setLoading(false);
    setStep('success');
    toast.success(t.payment.paymentSuccess);
  };

  const copyRef = () => {
    navigator.clipboard.writeText(reference);
    toast.success('Référence copiée !');
  };

  if (step === 'success') {
    return (
      <div className="max-w-md mx-auto text-center py-12">
        <div className="w-20 h-20 rounded-full bg-green-100 mx-auto mb-6 flex items-center justify-center">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {t.payment.paymentSuccess}
        </h1>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Votre abonnement <strong>{locale === 'fr' ? planName.fr : planName.en}</strong> est maintenant actif.
        </p>
        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 mb-6 text-left">
          <p className="text-sm text-slate-500">Référence</p>
          <p className="font-mono font-semibold text-slate-900 dark:text-white">{reference}</p>
          <p className="text-sm text-slate-500 mt-2">Montant</p>
          <p className="font-semibold text-slate-900 dark:text-white">{price.toLocaleString()} FCFA</p>
        </div>
        <Button onClick={() => router.push('/dashboard')}>
          Retour au tableau de bord
        </Button>
      </div>
    );
  }

  if (step === 'confirm') {
    return (
      <div className="max-w-md mx-auto">
        <Card className="shadow-lg">
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                <Smartphone className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Confirmer le paiement</h2>
              <p className="text-sm text-slate-500 mt-1">
                {method === 'mtn_momo'
                  ? `${t.payment.mtnInstruction}${reference}${t.payment.codeSuffix}`
                  : method === 'orange_money'
                  ? `${t.payment.orangeInstruction}${reference}${t.payment.codeSuffix}`
                  : 'Validation de la carte bancaire'}
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-500">{t.payment.reference}</span>
                <button onClick={copyRef} className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1">
                  <Copy className="h-3 w-3" /> Copier
                </button>
              </div>
              <p className="font-mono font-semibold text-lg text-slate-900 dark:text-white">{reference}</p>
              <div className="flex items-center justify-between mt-3 pt-3 border-t">
                <span className="text-sm text-slate-500">{t.payment.amount}</span>
                <span className="font-bold text-slate-900 dark:text-white">{price.toLocaleString()} FCFA</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => setStep('form')}>
                {t.payment.cancel}
              </Button>
              <Button className="flex-1" onClick={handlePayment} disabled={loading}>
                {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                {t.payment.confirm}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="ghost" size="sm" onClick={() => router.push('/subscription')}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">{t.payment.title}</h1>
      </div>

      <Card className="shadow-lg mb-6">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4 pb-4 border-b">
            <div>
              <p className="text-sm text-slate-500">Plan</p>
              <p className="font-semibold text-slate-900 dark:text-white">
                {locale === 'fr' ? planName.fr : planName.en}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-500">Prix</p>
              <p className="font-bold text-slate-900 dark:text-white">{price.toLocaleString()} FCFA</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2">
              <button
                onClick={() => setMethod('mtn_momo')}
                className={`flex-1 p-3 rounded-lg border-2 text-center transition-all ${
                  method === 'mtn_momo'
                    ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <Smartphone className="h-6 w-6 mx-auto mb-1 text-yellow-600" />
                <span className="text-sm font-medium">MTN MoMo</span>
              </button>
              <button
                onClick={() => setMethod('orange_money')}
                className={`flex-1 p-3 rounded-lg border-2 text-center transition-all ${
                  method === 'orange_money'
                    ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <Smartphone className="h-6 w-6 mx-auto mb-1 text-orange-600" />
                <span className="text-sm font-medium">Orange Money</span>
              </button>
              <button
                onClick={() => setMethod('card')}
                className={`flex-1 p-3 rounded-lg border-2 text-center transition-all ${
                  method === 'card'
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <CreditCard className="h-6 w-6 mx-auto mb-1 text-blue-600" />
                <span className="text-sm font-medium">Carte</span>
              </button>
            </div>

            {method === 'mtn_momo' || method === 'orange_money' ? (
              <div className="space-y-2">
                <Label htmlFor="phone">{t.payment.phoneNumber}</Label>
                <Input
                  id="phone"
                  placeholder="6XX XXX XXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            ) : (
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="cardHolder">{t.payment.cardHolder}</Label>
                  <Input id="cardHolder" placeholder="Nom du titulaire" value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">{t.payment.cardNumber}</Label>
                  <Input id="cardNumber" placeholder="0000 0000 0000 0000" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                </div>
                <div className="flex gap-3">
                  <div className="space-y-2 flex-1">
                    <Label htmlFor="expiry">{t.payment.expiryDate}</Label>
                    <Input id="expiry" placeholder="MM/AA" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
                  </div>
                  <div className="space-y-2 w-24">
                    <Label htmlFor="cvv">{t.payment.cvv}</Label>
                    <Input id="cvv" placeholder="123" value={cvv} onChange={(e) => setCvv(e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            <Button className="w-full" onClick={handleConfirm}>
              {t.payment.confirm}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-96"><Loader2 className="h-8 w-8 animate-spin" /></div>}>
      <PaymentForm />
    </Suspense>
  );
}
