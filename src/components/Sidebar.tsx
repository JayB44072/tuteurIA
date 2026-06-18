'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { LayoutDashboard, Brain, ClipboardList, TrendingUp, Users, Settings, ChevronLeft, ChevronRight, Flame, Crown, LogOut, BookOpen, User } from 'lucide-react';
import Icon from '@/components/ui/AppIcon';


interface NavItem {
  id: string;
  label: string;
  labelEn: string;
  icon: React.ElementType;
  href: string;
  badge?: number;
  badgeColor?: string;
}

const navItems: NavItem[] = [
  {
    id: 'nav-dashboard',
    label: 'Accueil',
    labelEn: 'Home',
    icon: LayoutDashboard,
    href: '/student-dashboard',
  },
  {
    id: 'nav-tutor',
    label: 'Tuteur IA',
    labelEn: 'AI Tutor',
    icon: Brain,
    href: '/ai-tutor-chat',
    badge: 3,
    badgeColor: 'bg-primary',
  },
  {
    id: 'nav-quiz',
    label: 'Quiz',
    labelEn: 'Quiz',
    icon: ClipboardList,
    href: '/dashboard/quiz',
    badge: 2,
    badgeColor: 'bg-accent',
  },
  {
    id: 'nav-exams',
    label: 'Examens Blancs',
    labelEn: 'Mock Exams',
    icon: BookOpen,
    href: '/dashboard/exam',
  },
  {
    id: 'nav-progress',
    label: 'Progression',
    labelEn: 'Progress',
    icon: TrendingUp,
    href: '/dashboard/progress',
  },
  {
    id: 'nav-parent',
    label: 'Espace Parent',
    labelEn: 'Parent Space',
    icon: Users,
    href: '/dashboard/parent',
  },
  {
    id: 'nav-settings',
    label: 'Paramètres',
    labelEn: 'Settings',
    icon: Settings,
    href: '/dashboard/settings',
  },
  {
    id: 'nav-account',
    label: 'Mon Compte',
    labelEn: 'My Account',
    icon: User,
    href: '/dashboard/account',
  },
];

interface SidebarProps {
  activePath?: string;
}

export default function Sidebar({ activePath }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className="hidden lg:flex flex-col bg-card border-r border-border transition-all duration-300 ease-in-out flex-shrink-0 relative"
      style={{ width: collapsed ? '72px' : '240px' }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-border min-h-[68px]">
        <div className="flex-shrink-0">
          <AppLogo size={32} />
        </div>
        {!collapsed && (
          <span className="font-bold text-[15px] text-foreground tracking-tight whitespace-nowrap overflow-hidden">
            EduAI Prep
          </span>
        )}
      </div>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-[80px] w-6 h-6 bg-card-elevated border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors duration-150 z-10"
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? (
          <ChevronRight size={12} className="text-muted-foreground" />
        ) : (
          <ChevronLeft size={12} className="text-muted-foreground" />
        )}
      </button>

      {/* User mini card */}
      <div className="px-3 py-3 border-b border-border">
        <div
          className={`flex items-center gap-3 p-2 rounded-lg bg-muted/30 ${collapsed ? 'justify-center' : ''}`}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-violet flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
            AD
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-xs font-600 text-foreground truncate leading-tight">
                Aminata Diallo
              </p>
              <p className="text-[10px] text-muted-foreground truncate">Bac D · Niveau 12</p>
            </div>
          )}
        </div>
      </div>

      {/* Streak & XP */}
      {!collapsed && (
        <div className="px-3 py-2 border-b border-border flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <Flame size={14} className="text-accent animate-streak" />
            <span className="text-xs font-700 text-accent tabular-nums">7</span>
            <span className="text-[10px] text-muted-foreground">jours</span>
          </div>
          <div className="w-px h-3 bg-border" />
          <div className="flex items-center gap-1.5">
            <Crown size={14} className="text-primary-light animate-xp" />
            <span className="text-xs font-700 text-primary-light tabular-nums">4 280</span>
            <span className="text-[10px] text-muted-foreground">XP</span>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 px-2 py-3 space-y-0.5 overflow-y-auto no-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePath === item.href;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 group relative ${
                isActive
                  ? 'sidebar-item-active' :'text-muted-foreground hover:text-foreground hover:bg-muted/40'
              } ${collapsed ? 'justify-center' : ''}`}
              title={collapsed ? item.label : undefined}
            >
              <Icon
                size={18}
                className={`flex-shrink-0 ${isActive ? 'text-primary-light' : ''}`}
              />
              {!collapsed && (
                <>
                  <span className="text-[13px] font-500 whitespace-nowrap flex-1">
                    {item.label}
                  </span>
                  {item.badge && (
                    <span
                      className={`nav-badge text-white ${item.badgeColor || 'bg-primary'}`}
                    >
                      {item.badge}
                    </span>
                  )}
                </>
              )}
              {collapsed && item.badge && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom: Subscription + Logout */}
      <div className="px-2 py-3 border-t border-border space-y-1">
        {!collapsed && (
          <div className="mx-1 mb-2 p-2 rounded-lg border-amber-glow bg-warning/5">
            <div className="flex items-center gap-2">
              <Crown size={12} className="text-accent flex-shrink-0" />
              <span className="text-[10px] font-600 text-accent">Pass Chrono</span>
              <span className="ml-auto text-[10px] text-warning/80 font-mono">1j</span>
            </div>
            <p className="text-[10px] text-muted-foreground mt-1">Expire demain</p>
          </div>
        )}
        <button
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-error hover:bg-error/10 transition-all duration-150 ${
            collapsed ? 'justify-center' : ''
          }`}
          title={collapsed ? 'Déconnexion' : undefined}
        >
          <LogOut size={16} />
          {!collapsed && <span className="text-[13px] font-500">Déconnexion</span>}
        </button>
      </div>
    </aside>
  );
}