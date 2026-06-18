'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import {
  Bell,
  Search,
  Globe,
  Flame,
  Crown,
  Menu,
  X,
  Wifi,
  WifiOff,
  LayoutDashboard,
  Brain,
  ClipboardList,
  BookOpen,
  TrendingUp,
  Users,
  Settings,
} from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


const mobileNavItems = [
  { id: 'mnav-dash', label: 'Accueil', icon: LayoutDashboard, href: '/student-dashboard' },
  { id: 'mnav-tutor', label: 'Tuteur IA', icon: Brain, href: '/ai-tutor-chat' },
  { id: 'mnav-quiz', label: 'Quiz', icon: ClipboardList, href: '/student-dashboard' },
  { id: 'mnav-exams', label: 'Examens', icon: BookOpen, href: '/student-dashboard' },
  { id: 'mnav-progress', label: 'Progression', icon: TrendingUp, href: '/student-dashboard' },
  { id: 'mnav-parent', label: 'Parents', icon: Users, href: '/student-dashboard' },
  { id: 'mnav-settings', label: 'Paramètres', icon: Settings, href: '/student-dashboard' },
];

export default function DashboardTopbar() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const [lowData, setLowData] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="h-[64px] bg-card border-b border-border flex items-center px-4 lg:px-6 gap-3 flex-shrink-0 z-20">
        {/* Mobile logo */}
        <div className="flex items-center gap-2 lg:hidden">
          <AppLogo size={28} />
          <span className="font-bold text-sm text-foreground">EduAI Prep</span>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-sm">
          <div className="relative w-full">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder={lang === 'fr' ? 'Rechercher une matière, un sujet...' : 'Search subject, topic...'}
              className="w-full bg-input border border-border rounded-lg pl-9 pr-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          {/* Streak */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-warning/10 border border-warning/20">
            <Flame size={14} className="text-accent animate-streak" />
            <span className="text-xs font-700 text-accent tabular-nums">7</span>
          </div>

          {/* XP */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
            <Crown size={14} className="text-primary-light" />
            <span className="text-xs font-700 text-primary-light tabular-nums">4 280 XP</span>
          </div>

          {/* Low data toggle */}
          <button
            onClick={() => setLowData(!lowData)}
            className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border transition-all duration-150 text-xs font-500 ${
              lowData
                ? 'bg-success/10 border-success/30 text-success' :'bg-muted/30 border-border text-muted-foreground hover:text-foreground'
            }`}
            title={lowData ? 'Mode économie activé' : 'Activer mode économie'}
          >
            {lowData ? <WifiOff size={13} /> : <Wifi size={13} />}
            <span className="hidden lg:inline">{lowData ? 'Éco' : 'Éco'}</span>
          </button>

          {/* Language */}
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-muted/30 border border-border hover:bg-muted/60 transition-colors text-xs font-600 text-foreground"
          >
            <Globe size={13} className="text-muted-foreground" />
            <span className="uppercase">{lang}</span>
          </button>

          {/* Notifications */}
          <button className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-muted/30 border border-border hover:bg-muted/60 transition-colors">
            <Bell size={16} className="text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
          </button>

          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-gradient-violet flex items-center justify-center text-white text-xs font-bold flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity">
            AD
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-muted/30 border border-border hover:bg-muted/60 transition-colors"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={16} className="text-foreground" />
          </button>
        </div>
      </header>
      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-card border-r border-border flex flex-col animate-slide-up">
            <div className="flex items-center justify-between px-4 py-4 border-b border-border">
              <div className="flex items-center gap-2">
                <AppLogo size={28} />
                <span className="font-bold text-sm text-foreground">EduAI Prep</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted/40 transition-colors"
              >
                <X size={16} className="text-muted-foreground" />
              </button>
            </div>

            <div className="p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-violet flex items-center justify-center text-white text-sm font-bold">
                  AD
                </div>
                <div>
                  <p className="text-sm font-600 text-foreground">Aminata Diallo</p>
                  <p className="text-xs text-muted-foreground">Bac D · Niveau 12</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1.5">
                  <Flame size={14} className="text-accent" />
                  <span className="text-xs font-700 text-accent">7 jours</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Crown size={14} className="text-primary-light" />
                  <span className="text-xs font-700 text-primary-light">4 280 XP</span>
                </div>
              </div>
            </div>

            <nav className="flex-1 px-3 py-3 space-y-0.5 overflow-y-auto">
              {mobileNavItems?.map((item) => {
                const Icon = item?.icon;
                return (
                  <Link
                    key={item?.id}
                    href={item?.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-all duration-150"
                  >
                    <Icon size={18} />
                    <span className="text-[13px] font-500">{item?.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}