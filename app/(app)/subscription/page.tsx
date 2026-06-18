'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '@/app/providers';
import { useTranslation } from '@/lib/i18n';
import { createClient } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { CheckCircle2, Star, Zap, Crown, Building2, ArrowRight } from 'lucide-react';

const plans = [
  {
    key: 'free',
    name: { fr: 'Gratuit', en: 'Free' },
    price: 0,
    icon: Zap,
    color: 'slate',
    features: [
      'unlimitedRevisions',
      'accessCourses',
      'standardQuizzes',
      'historyResults',
      'dashboard',
      'translation',
      'darkMode',
      'economyMode',
    ],
    limits: ['limit10Questions', 'noSmartPlan', 'noAdvancedAnalysis'],
  },
  {
    key: 'student_premium',
    name: { fr: 'Premium Étudiant', en: 'Student Premium' },
    price: 2500,
    icon: Star,
    color: 'blue',
    popular: true,
    features: [
      'unlimitedRevisions',
      'unlimitedAI',
      'customQuizzes',
      'weaknessAnalysis',
      'detailedExplanations',
      'studyPlans',
      'examSimulations',
      'advancedStats',
    ],
    limits: [],
  },
  {
    key: 'excellence_premium',
    name: { fr: 'Premium Excellence', en: 'Excellence Premium' },
    price: 5000,
    icon: Crown,
    color: 'amber',
    features: [
      'unlimitedRevisions',
      'unlimitedAI',
      'customQuizzes',
      'weaknessAnalysis',
      'detailedExplanations',
      'studyPlans',
      'examSimulations',
      'advancedStats',
      'advancedCoach',
      'bacPrep',
      'gradePredictions',
      'autoRecommendations',
      'prioritySupport',
    ],
    limits: [],
  },
  {
    key: 'school',
    name: { fr: 'Établissement scolaire', en: 'School' },
    price: 50000,
    icon: Building2,
    color: 'emerald',
    features: [
      'teacherAccounts',
      'studentAccounts',
      'classStats',
      'schoolAdmin',
      'pdfReports',
      'schoolDashboard',
    ],
    limits: [],
  },
];

const featureLabels: Record<string, string> = {
  unlimitedRevisions: 'Révisions illimitées',
  accessCourses: 'Accès aux cours',
  standardQuizzes: 'Quiz standards',
  historyResults: 'Historique des résultats',
  dashboard: 'Tableau de bord',
  translation: 'Traduction FR/EN',
  darkMode: 'Mode sombre',
  economyMode: 'Mode économie',
  unlimitedAI: 'IA illimitée',
  customQuizzes: 'Quiz personnalisés',
  weaknessAnalysis: 'Analyse des faiblesses',
  detailedExplanations: 'Explications détaillées',
  studyPlans: 'Plans de révision personnalisés',
  examSimulations: 'Simulations d\'examens',
  advancedStats: 'Statistiques avancées',
  advancedCoach: 'Coach IA avancé',
  bacPrep: 'Préparation Bac/GCE complète',
  gradePredictions: 'Prévisions de notes',
  autoRecommendations: 'Recommandations automatiques',
  prioritySupport: 'Assistance IA prioritaire',
  teacherAccounts: 'Comptes enseignants',
  studentAccounts: 'Comptes élèves',
  classStats: 'Statistiques de classe',
  schoolAdmin: 'Administration scolaire',
  pdfReports: 'Rapports PDF',
  schoolDashboard: 'Tableau de bord établissement',
  limit10Questions: '10 questions IA/jour',
  noSmartPlan: 'Pas de plan d\'étude intelligent',
  noAdvancedAnalysis: 'Pas d\'analyse avancée',
};

export default function SubscriptionPage() {
  const router = useRouter();
  const { profile, locale } = useApp();
  const { t } = useTranslation(locale);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSubscribe = (planKey: string) => {
    setSelectedPlan(planKey);
    router.push(`/payment?plan=${planKey}`);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{t.subscription.title}</h1>
        <p className="text-slate-600 dark:text-slate-300 mt-1">{t.subscription.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => {
          const isCurrent = profile?.plan === plan.key;
          const Icon = plan.icon;
          return (
            <Card
              key={plan.key}
              className={`relative flex flex-col ${plan.popular ? 'border-2 border-blue-500 shadow-lg' : 'border'} ${
                isCurrent ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Populaire
                </div>
              )}
              {isCurrent && (
                <div className="absolute -top-3 right-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Actuel
                </div>
              )}
              <CardContent className="pt-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-${plan.color}-100 dark:bg-${plan.color}-900/30 flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 text-${plan.color}-600`} />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {locale === 'fr' ? plan.name.fr : plan.name.en}
                  </h3>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">
                    {plan.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-slate-500"> {t.subscription.perMonth}</span>
                </div>
                <div className="space-y-2 flex-1">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{featureLabels[f] || f}</span>
                    </div>
                  ))}
                  {plan.limits.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm">
                      <div className="h-4 w-4 rounded-full border-2 border-slate-300 flex-shrink-0" />
                      <span className="text-slate-500">{featureLabels[f] || f}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full mt-6"
                  variant={isCurrent ? 'outline' : plan.popular ? 'default' : 'outline'}
                  disabled={isCurrent}
                  onClick={() => handleSubscribe(plan.key)}
                >
                  {isCurrent ? 'Abonnement actif' : t.subscription.subscribe}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
