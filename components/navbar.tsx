'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useApp } from '@/app/providers';
import { useTranslation } from '@/lib/i18n';
import { createClient } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { toast } from 'sonner';
import {
  Menu, X, Sun, Moon, Battery, Globe, Bell, LogOut, User, Settings,
  LayoutDashboard, BookOpen, Sparkles, Trophy, CreditCard, Users, ChevronDown,
} from 'lucide-react';

export function Navbar() {
  const router = useRouter();
  const { user, profile, locale, setLocale } = useApp();
  const { t } = useTranslation(locale);
  const supabase = createClient();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success(t.auth.logoutSuccess);
    router.push('/');
    router.refresh();
  };

  const navLinks = user
    ? [
        { href: '/dashboard', label: t.nav.dashboard, icon: LayoutDashboard },
        { href: '/subjects', label: t.nav.subjects, icon: BookOpen },
        { href: '/quiz', label: t.nav.quizzes, icon: Trophy },
        { href: '/ai-tutor', label: t.nav.aiTutor, icon: Sparkles },
        { href: '/study-plan', label: t.nav.studyPlan, icon: BookOpen },
        { href: '/progress', label: t.nav.progress, icon: Trophy },
      ]
    : [];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900 dark:text-white">
          <Sparkles className="h-6 w-6 text-blue-600" />
          {t.app.name}
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {user && (
            <Link href="/notifications" className="relative p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
              <Bell className="h-5 w-5 text-slate-700 dark:text-slate-200" />
            </Link>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-1">
                <Globe className="h-4 w-4" />
                <span className="uppercase text-xs font-semibold">{locale}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLocale('fr')}>Français</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLocale('en')}>English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-blue-100 text-blue-700 text-sm font-semibold">
                      {profile?.full_name?.charAt(0)?.toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium">{profile?.full_name || 'User'}</p>
                  <p className="text-xs text-slate-500">{user?.email}</p>
                  <p className="text-xs text-blue-600 font-semibold mt-0.5 capitalize">{profile?.plan || 'free'}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push('/profile')}>
                  <User className="mr-2 h-4 w-4" /> {t.nav.profile}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/settings')}>
                  <Settings className="mr-2 h-4 w-4" /> {t.nav.settings}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/subscription')}>
                  <CreditCard className="mr-2 h-4 w-4" /> {t.nav.subscription}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push('/referral')}>
                  <Users className="mr-2 h-4 w-4" /> {t.nav.referral}
                </DropdownMenuItem>
                {profile?.role === 'admin' && (
                  <DropdownMenuItem onClick={() => router.push('/admin')}>
                    <LayoutDashboard className="mr-2 h-4 w-4" /> {t.nav.admin}
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" /> {t.nav.logout}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" onClick={() => router.push('/auth/login')}>
                {t.nav.login}
              </Button>
              <Button onClick={() => router.push('/auth/signup')}>
                {t.nav.signup}
              </Button>
            </div>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t bg-white dark:bg-slate-950 px-4 py-3 space-y-1">
          {user ? (
            <>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setMobileOpen(false)}
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Link>
              ))}
              <div className="border-t pt-2 mt-2 space-y-1">
                <Link href="/profile" className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
                  <User className="h-4 w-4" /> {t.nav.profile}
                </Link>
                <Link href="/settings" className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
                  <Settings className="h-4 w-4" /> {t.nav.settings}
                </Link>
                <Link href="/subscription" className="flex items-center gap-2 px-3 py-2 rounded-md text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
                  <CreditCard className="h-4 w-4" /> {t.nav.subscription}
                </Link>
                <button onClick={handleLogout} className="flex items-center gap-2 px-3 py-2 rounded-md text-sm w-full text-left hover:bg-slate-100 dark:hover:bg-slate-800">
                  <LogOut className="h-4 w-4" /> {t.nav.logout}
                </button>
              </div>
            </>
          ) : (
            <div className="space-y-2">
              <Button className="w-full" onClick={() => { router.push('/auth/login'); setMobileOpen(false); }}>
                {t.nav.login}
              </Button>
              <Button variant="outline" className="w-full" onClick={() => { router.push('/auth/signup'); setMobileOpen(false); }}>
                {t.nav.signup}
              </Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
