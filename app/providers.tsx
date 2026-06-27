'use client';

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { Toaster } from 'sonner';
import { createClient } from '@/lib/supabase';
import type { Locale } from '@/lib/i18n';

interface UserProfile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  phone: string | null;
  role: string;
  plan: string;
  referral_code: string;
  language: Locale;
  theme: string;
}

interface AppContextType {
  user: any;
  profile: UserProfile | null;
  loading: boolean;
  locale: Locale;
  setLocale: (l: Locale) => void;
  refreshProfile: () => Promise<void>;
}

const AppContext = createContext<AppContextType>({
  user: null,
  profile: null,
  loading: true,
  locale: 'fr',
  setLocale: () => {},
  refreshProfile: async () => {},
});

export function useApp() {
  return useContext(AppContext);
}

export function Providers({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [locale, setLocaleState] = useState<Locale>('fr');
  const supabase = createClient();

  const refreshProfile = async () => {
    if (!user?.id) return;
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();
    if (data) {
      setProfile(data);
      setLocaleState(data.language || 'fr');
      if (data.theme && data.theme !== 'light') {
        document.documentElement.classList.add(data.theme);
      }
    }
  };

  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        await refreshProfile();
      }
      setLoading(false);
    };
    init();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session?.user || null);
      if (session?.user) {
        await refreshProfile();
      } else {
        setProfile(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (user?.id) {
      supabase.from('profiles').update({ language: l }).eq('id', user.id);
    }
    localStorage.setItem('locale', l);
  };

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale;
    if (saved) setLocaleState(saved);
  }, []);

  return (
    <AppContext.Provider value={{ user, profile, loading, locale, setLocale, refreshProfile }}>
      <Toaster position="top-right" richColors />
      {children}
    </AppContext.Provider>
  );
}
