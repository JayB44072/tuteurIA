'use client';

import React, { useState } from 'react';
import { mockAISessions, mockSubjects } from '@/lib/mockData';
import { Brain, Clock, Zap, ChevronRight, Plus, Search } from 'lucide-react';

export default function ChatSidebar() {
  const [selectedSubject, setSelectedSubject] = useState('subj-math');
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const filteredSessions = mockAISessions?.filter((s) =>
    s?.subjectName?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
    s?.summary?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-72 xl:w-80 bg-card border-r border-border flex-shrink-0 overflow-hidden">
        {/* Header */}
        <div className="px-4 py-4 border-b border-border">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
                <Brain size={14} className="text-primary-light" />
              </div>
              <span className="text-[14px] font-700 text-foreground">Tuteur IA</span>
            </div>
            <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-primary/15 border border-primary/20 text-primary-light text-[11px] font-600 hover:bg-primary/25 transition-all duration-150">
              <Plus size={11} />
              Nouveau
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e?.target?.value)}
              placeholder="Rechercher une session..."
              className="w-full bg-input border border-border rounded-lg pl-8 pr-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
            />
          </div>
        </div>

        {/* Subject selector */}
        <div className="px-4 py-3 border-b border-border">
          <p className="text-[10px] font-600 uppercase tracking-widest text-muted-foreground mb-2">
            Matière active
          </p>
          <div className="flex flex-wrap gap-1.5">
            {mockSubjects?.slice(0, 4)?.map((subject) => (
              <button
                key={subject?.id}
                onClick={() => setSelectedSubject(subject?.id)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-600 transition-all duration-150 border ${
                  selectedSubject === subject?.id
                    ? 'text-white border-transparent' :'bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-border/80'
                }`}
                style={
                  selectedSubject === subject?.id
                    ? { backgroundColor: subject?.color, borderColor: subject?.color }
                    : {}
                }
              >
                {subject?.icon} {subject?.name?.split(' ')?.[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Session history */}
        <div className="flex-1 overflow-y-auto scrollbar-thin px-3 py-3">
          <p className="text-[10px] font-600 uppercase tracking-widest text-muted-foreground px-1 mb-2">
            Historique ({filteredSessions?.length})
          </p>
          <div className="space-y-1.5">
            {filteredSessions?.map((session, idx) => (
              <div
                key={session?.id}
                className={`p-3 rounded-xl border cursor-pointer transition-all duration-150 group ${
                  idx === 0
                    ? 'border-primary/25 bg-primary/8' :'border-border bg-card-elevated hover:border-primary/15 hover:bg-primary/5'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center text-sm flex-shrink-0">
                    {session?.subjectIcon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[12px] font-700 text-foreground truncate">
                        {session?.subjectName}
                      </span>
                      <ChevronRight
                        size={11}
                        className="text-muted-foreground group-hover:text-primary-light flex-shrink-0 ml-1 transition-colors"
                      />
                    </div>
                    <p className="text-[10px] text-muted-foreground line-clamp-2 leading-snug mb-2">
                      {session?.summary}
                    </p>
                    <div className="flex items-center gap-2.5 text-[10px] text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock size={9} />
                        <span>{session?.duration} min</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Zap size={9} className="text-accent" />
                        <span className="text-accent font-600">+{session?.xpEarned}</span>
                      </div>
                      <span className="ml-auto">
                        {session?.startedAt?.split('T')?.[0]?.split('-')?.reverse()?.slice(0, 2)?.join('/')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Session stats footer */}
        <div className="px-4 py-3 border-t border-border">
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'stat-total', label: 'Sessions', value: '18' },
              { id: 'stat-xp', label: 'XP IA', value: '860' },
              { id: 'stat-time', label: 'Heures', value: '12h' },
            ]?.map((stat) => (
              <div key={stat?.id} className="text-center p-2 rounded-lg bg-card-elevated">
                <p className="text-[13px] font-800 text-foreground tabular-nums">{stat?.value}</p>
                <p className="text-[9px] text-muted-foreground mt-0.5">{stat?.label}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}