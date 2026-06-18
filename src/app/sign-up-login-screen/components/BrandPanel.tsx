import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import { Flame, Crown, Star, BookOpen, Brain } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const planHighlights = [
  { id: 'plan-free', label: 'Gratuit', price: '0 FCFA', desc: '3 diagnostics IA / semaine' },
  { id: 'plan-chrono', label: 'Pass Chrono', price: '500 FCFA', desc: 'IA illimitée pendant 7 jours', highlight: true },
  { id: 'plan-premium', label: 'Premium', price: '1 500 FCFA / mois', desc: 'IA + Examens blancs + Espace parent' },
  { id: 'plan-examen', label: 'Pass Examen', price: '5 000 FCFA', desc: 'Accès intensif période d\'examen' },
];

const testimonials = [
  {
    id: 'test-001',
    name: 'Kouamé Assi',
    role: 'Élève Bac C, Abidjan',
    text: 'J\'ai amélioré ma moyenne en maths de 8/20 à 14/20 en 3 semaines grâce au tuteur IA.',
    avatar: 'KA',
    score: '14/20',
  },
  {
    id: 'test-002',
    name: 'Fatou Ndiaye',
    role: 'Élève Bac D, Dakar',
    text: 'L\'IA explique vraiment bien, elle ne donne pas la réponse directement — ça m\'oblige à réfléchir.',
    avatar: 'FN',
    score: '16/20',
  },
];

const stats = [
  { id: 'stat-students', value: '12 400+', label: 'Élèves actifs' },
  { id: 'stat-sessions', value: '98 000+', label: 'Sessions IA' },
  { id: 'stat-pass', label: 'Taux de réussite', value: '87%' },
];

export default function BrandPanel() {
  return (
    <div className="relative w-full h-full bg-gradient-brand flex flex-col overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[300px] h-[300px] rounded-full bg-accent/8 blur-[100px] pointer-events-none" />
      <div className="relative z-10 flex flex-col h-full px-10 xl:px-14 py-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <AppLogo size={36} />
          <span className="font-bold text-xl text-foreground tracking-tight">EduAI Prep</span>
        </div>

        {/* Hero text */}
        <div className="mt-10 xl:mt-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/25 mb-5">
            <Brain size={12} className="text-primary-light" />
            <span className="text-xs font-600 text-primary-light">Tuteur IA Adaptatif</span>
          </div>
          <h1 className="text-3xl xl:text-4xl font-800 text-foreground leading-tight">
            Réussis ton{' '}
            <span className="text-gradient-violet">Bac & GCE</span>
            <br />
            avec l&apos;intelligence artificielle
          </h1>
          <p className="mt-4 text-[15px] text-secondary-foreground leading-relaxed max-w-md">
            Un tuteur IA qui s&apos;adapte à ton niveau, des quiz intelligents, des examens blancs
            chronométrés — tout ce qu&apos;il faut pour décrocher ton diplôme.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 flex items-center gap-6">
          {stats?.map((stat) => (
            <div key={stat?.id} className="text-center">
              <p className="text-xl font-800 text-foreground tabular-nums">{stat?.value}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{stat?.label}</p>
            </div>
          ))}
        </div>

        {/* Pricing teaser */}
        <div className="mt-8">
          <p className="text-xs font-600 text-muted-foreground uppercase tracking-widest mb-3">
            Tarifs accessibles en FCFA
          </p>
          <div className="grid grid-cols-2 gap-2">
            {planHighlights?.map((plan) => (
              <div
                key={plan?.id}
                className={`p-3 rounded-xl border transition-all duration-150 ${
                  plan?.highlight
                    ? 'border-accent/40 bg-accent/8 shadow-amber'
                    : 'border-border bg-card/60'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-700 text-foreground">{plan?.label}</span>
                  {plan?.highlight && <Star size={10} className="text-accent fill-accent" />}
                </div>
                <p className="text-[13px] font-800 text-accent">{plan?.price}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5 leading-snug">
                  {plan?.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-auto pt-8">
          <div className="p-4 rounded-xl bg-card/60 border border-border">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-violet flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                {testimonials?.[0]?.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] text-foreground leading-relaxed">
                  &ldquo;{testimonials?.[0]?.text}&rdquo;
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[11px] font-600 text-foreground">
                    {testimonials?.[0]?.name}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {testimonials?.[0]?.role}
                  </span>
                  <span className="ml-auto text-[11px] font-700 text-success">
                    {testimonials?.[0]?.score}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Features row */}
          <div className="flex items-center gap-4 mt-4">
            {[
              { id: 'feat-offline', icon: Flame, text: 'Mode hors-ligne' },
              { id: 'feat-streak', icon: Crown, text: 'Gamification' },
              { id: 'feat-exams', icon: BookOpen, text: 'Bac & GCE' },
            ]?.map((feat) => {
              const Icon = feat?.icon;
              return (
                <div key={feat?.id} className="flex items-center gap-1.5">
                  <Icon size={12} className="text-muted-foreground" />
                  <span className="text-[11px] text-muted-foreground">{feat?.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}