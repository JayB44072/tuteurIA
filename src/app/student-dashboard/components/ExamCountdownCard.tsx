'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BookOpen, Brain, Calendar, AlertTriangle } from 'lucide-react';
import { mockExamCountdown } from '@/lib/mockData';

export default function ExamCountdownCard() {
  const countdown = mockExamCountdown;

  const [days, setDays] = useState(countdown?.daysRemaining);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date('2026-07-15T08:00:00')?.getTime();

    const tick = () => {
      const now = Date.now();
      const diff = target - now;
      if (diff <= 0) return;

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const urgencyLevel = days <= 7 ? 'critical' : days <= 14 ? 'warning' : 'normal';

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-5 sm:p-6 animate-countdown ${
        urgencyLevel === 'critical' ?'border-error/30 bg-error/5'
          : urgencyLevel === 'warning' ?'border-warning/30 bg-warning/5' :'border-primary/25 bg-primary/5'
      }`}
    >
      {/* Background glow */}
      <div
        className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none ${
          urgencyLevel === 'critical' ?'bg-error/10'
            : urgencyLevel === 'warning' ?'bg-warning/10' :'bg-primary/10'
        }`}
      />
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-5">
        {/* Left: Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {urgencyLevel !== 'normal' && (
              <AlertTriangle
                size={14}
                className={urgencyLevel === 'critical' ? 'text-error' : 'text-warning'}
              />
            )}
            <span
              className={`text-xs font-700 uppercase tracking-widest ${
                urgencyLevel === 'critical' ?'text-error'
                  : urgencyLevel === 'warning' ?'text-warning' :'text-primary-light'
              }`}
            >
              Compte à rebours
            </span>
          </div>
          <h2 className="text-xl font-800 text-foreground">{countdown?.examName}</h2>
          <div className="flex items-center gap-2 mt-1.5">
            <Calendar size={13} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">15 juillet 2026</span>
          </div>
        </div>

        {/* Center: Countdown digits */}
        <div className="flex items-center gap-2 sm:gap-3">
          {[
            { id: 'cd-days', value: days, label: 'Jours' },
            { id: 'cd-hours', value: hours, label: 'Heures' },
            { id: 'cd-min', value: minutes, label: 'Min' },
            { id: 'cd-sec', value: seconds, label: 'Sec' },
          ]?.map((unit, idx) => (
            <React.Fragment key={unit?.id}>
              {idx > 0 && (
                <span className="text-xl font-800 text-muted-foreground mb-3">:</span>
              )}
              <div className="flex flex-col items-center">
                <div
                  className={`w-14 sm:w-16 h-14 sm:h-16 rounded-xl flex items-center justify-center border ${
                    urgencyLevel === 'critical' ?'bg-error/10 border-error/25'
                      : urgencyLevel === 'warning' ?'bg-warning/10 border-warning/25' :'bg-primary/10 border-primary/20'
                  }`}
                >
                  <span
                    className={`countdown-digit text-xl sm:text-2xl ${
                      urgencyLevel === 'critical' ?'text-error'
                        : urgencyLevel === 'warning' ?'text-warning' :'text-primary-light'
                    }`}
                  >
                    {String(unit?.value)?.padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[10px] text-muted-foreground mt-1 font-500">
                  {unit?.label}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Right: CTAs */}
        <div className="flex flex-col gap-2 sm:min-w-[160px]">
          <Link
            href="/ai-tutor-chat"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white text-sm font-700 transition-all duration-150 active:scale-[0.98] shadow-violet"
          >
            <Brain size={14} />
            Réviser avec l&apos;IA
          </Link>
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-card/60 hover:bg-muted/40 text-foreground text-sm font-600 transition-all duration-150 active:scale-[0.98]">
            <BookOpen size={14} />
            Examen blanc
          </button>
        </div>
      </div>
    </div>
  );
}