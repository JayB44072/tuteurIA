import React from 'react';
import Link from 'next/link';
import { mockAISessions } from '@/lib/mockData';
import { Brain, Clock, Zap, ArrowRight } from 'lucide-react';

export default function RecentAISessions() {
  const sessions = mockAISessions;

  return (
    <div className="bg-card border border-border rounded-2xl p-5 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-[15px] font-700 text-foreground">Sessions IA récentes</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Tes dernières interactions avec le tuteur</p>
        </div>
        <Link
          href="/ai-tutor-chat"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/15 border border-primary/20 text-primary-light text-xs font-600 hover:bg-primary/25 transition-all duration-150"
        >
          <Brain size={12} />
          Nouvelle session
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
        {sessions?.map((session) => (
          <div
            key={session?.id}
            className="p-3.5 rounded-xl bg-card-elevated border border-border hover:border-primary/20 hover:bg-primary/5 transition-all duration-200 group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center text-base">
                {session?.subjectIcon}
              </div>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-success/10 border border-success/20">
                <Zap size={9} className="text-success" />
                <span className="text-[10px] font-700 text-success tabular-nums">+{session?.xpEarned}</span>
              </div>
            </div>

            <p className="text-[12px] font-700 text-foreground leading-tight mb-1">
              {session?.subjectName}
            </p>
            <p className="text-[11px] text-muted-foreground leading-snug mb-2.5 line-clamp-2">
              {session?.summary}
            </p>

            <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock size={9} />
                <span>{session?.duration} min</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-border" />
              <span>{session?.messagesCount} messages</span>
            </div>

            <div className="mt-2.5 pt-2.5 border-t border-border flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground">
                {session?.startedAt?.split('T')?.[0]?.split('-')?.reverse()?.join('/')}
              </span>
              <ArrowRight
                size={12}
                className="text-muted-foreground group-hover:text-primary-light group-hover:translate-x-0.5 transition-all duration-150"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}