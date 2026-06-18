'use client';

import React from 'react';
import { Flame, Crown, Zap, Target, TrendingUp, AlertCircle } from 'lucide-react';
import { mockUser, mockSubscription } from '@/lib/mockData';

function XPLevelProgress({ xp, level }: { xp: number; level: number }) {
  const xpForNextLevel = (level + 1) * 500;
  const xpForCurrentLevel = level * 500;
  const progress = ((xp - xpForCurrentLevel) / (xpForNextLevel - xpForCurrentLevel)) * 100;

  return (
    <div className="mt-3">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[10px] text-muted-foreground">Niv. {level}</span>
        <span className="text-[10px] text-muted-foreground">Niv. {level + 1}</span>
      </div>
      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-violet rounded-full transition-all duration-500"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <p className="text-[10px] text-muted-foreground mt-1">
        {xp - xpForCurrentLevel} / {xpForNextLevel - xpForCurrentLevel} XP
      </p>
    </div>
  );
}

export default function MetricsBentoGrid() {
  const user = mockUser;
  const sub = mockSubscription;

  const subLabel =
    sub.tier === 'pass_chrono' ?'Pass Chrono'
      : sub.tier === 'premium' ?'Premium'
      : sub.tier === 'pass_examen' ?'Pass Examen' :'Gratuit';

  const subVariant = sub.status === 'expiring' ? 'warning' : sub.status === 'expired' ? 'error' : 'success';

  return (
    // 4 cards → grid-cols-4 single row on xl, 2x2 on md
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
      {/* Card 1: Streak — accent */}
      <div className="bg-card border border-warning/20 rounded-2xl p-4 shadow-card hover:shadow-card-hover transition-all duration-200 group">
        <div className="flex items-center justify-between mb-3">
          <div className="w-9 h-9 rounded-xl bg-warning/15 flex items-center justify-center">
            <Flame size={18} className="text-accent animate-streak" />
          </div>
          <span className="text-[10px] font-600 uppercase tracking-widest text-muted-foreground">
            Série
          </span>
        </div>
        <p className="text-3xl font-800 text-accent tabular-nums countdown-digit">
          {user.streakDays}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5 font-500">jours consécutifs</p>
        <div className="mt-3 flex gap-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={`streak-dot-${i + 1}`}
              className={`flex-1 h-1.5 rounded-full ${
                i < user.streakDays ? 'bg-accent' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Card 2: XP + Level */}
      <div className="bg-card border border-primary/20 rounded-2xl p-4 shadow-card hover:shadow-card-hover transition-all duration-200">
        <div className="flex items-center justify-between mb-3">
          <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center">
            <Crown size={18} className="text-primary-light" />
          </div>
          <span className="text-[10px] font-600 uppercase tracking-widest text-muted-foreground">
            XP
          </span>
        </div>
        <p className="text-3xl font-800 text-primary-light tabular-nums countdown-digit">
          {user.xpTotal.toLocaleString('fr-FR')}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5 font-500">points d&apos;expérience</p>
        <XPLevelProgress xp={user.xpTotal} level={user.level} />
      </div>

      {/* Card 3: Average Score */}
      <div className="bg-card border border-success/20 rounded-2xl p-4 shadow-card hover:shadow-card-hover transition-all duration-200">
        <div className="flex items-center justify-between mb-3">
          <div className="w-9 h-9 rounded-xl bg-success/15 flex items-center justify-center">
            <Target size={18} className="text-success" />
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp size={11} className="text-success" />
            <span className="text-[10px] font-600 text-success">+1.5</span>
          </div>
        </div>
        <p className="text-3xl font-800 text-foreground tabular-nums countdown-digit">
          13.2
        </p>
        <p className="text-xs text-muted-foreground mt-0.5 font-500">moyenne générale / 20</p>
        <div className="mt-3 h-1.5 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-success rounded-full" style={{ width: '66%' }} />
        </div>
        <p className="text-[10px] text-muted-foreground mt-1">Objectif : 16/20</p>
      </div>

      {/* Card 4: Subscription — warning state */}
      <div
        className={`rounded-2xl p-4 shadow-card hover:shadow-card-hover transition-all duration-200 border ${
          subVariant === 'warning' ?'bg-warning/5 border-warning/25'
            : subVariant === 'error' ?'bg-error/5 border-error/25' :'bg-card border-border'
        }`}
      >
        <div className="flex items-center justify-between mb-3">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center ${
              subVariant === 'warning' ? 'bg-warning/15' : 'bg-success/15'
            }`}
          >
            <Zap
              size={18}
              className={subVariant === 'warning' ? 'text-warning' : 'text-success'}
            />
          </div>
          {subVariant === 'warning' && (
            <AlertCircle size={14} className="text-warning" />
          )}
        </div>
        <p
          className={`text-lg font-800 ${
            subVariant === 'warning' ? 'text-warning' : 'text-foreground'
          }`}
        >
          {subLabel}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5 font-500">
          {subVariant === 'warning' ?'Expire demain — 19 juin'
            : sub.endDate
            ? `Expire le ${sub.endDate}`
            : 'Plan actuel'}
        </p>
        <button
          className={`mt-3 w-full py-1.5 rounded-lg text-xs font-700 transition-all duration-150 ${
            subVariant === 'warning' ?'bg-warning/15 text-warning hover:bg-warning/25 border border-warning/25' :'bg-primary/15 text-primary-light hover:bg-primary/25 border border-primary/20'
          }`}
        >
          {subVariant === 'warning' ? 'Renouveler' : 'Gérer'}
        </button>
      </div>
    </div>
  );
}