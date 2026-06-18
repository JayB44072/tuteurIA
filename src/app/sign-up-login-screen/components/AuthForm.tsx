'use client';

import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import AppLogo from '@/components/ui/AppLogo';
import {
  Eye,
  EyeOff,
  Globe,
  Mail,
  Lock,
  User,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Copy,
  Check,
} from 'lucide-react';
import { examSeriesOptions } from '@/lib/mockData';

type AuthTab = 'login' | 'signup';
type UserRole = 'student' | 'parent';

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface SignupFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
  examSeries: string;
  language: 'fr' | 'en';
  acceptTerms: boolean;
}

const demoCredentials = [
  {
    id: 'cred-student',
    role: 'Élève',
    roleEn: 'Student',
    email: 'aminata.diallo@eduaiprep.cm',
    password: 'EduBac2026!',
  },
  {
    id: 'cred-parent',
    role: 'Parent',
    roleEn: 'Parent',
    email: 'mamadou.diallo@eduaiprep.cm',
    password: 'Parent2026!',
  },
];

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState<AuthTab>('login');
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const loginForm = useForm<LoginFormData>({
    defaultValues: { email: '', password: '', rememberMe: false },
  });

  const signupForm = useForm<SignupFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'student',
      examSeries: 'bac_d',
      language: 'fr',
      acceptTerms: false,
    },
  });

  const handleLoginSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    // BACKEND INTEGRATION POINT: POST /api/auth/login with email + password
    await new Promise((r) => setTimeout(r, 1400));

    const validCreds = demoCredentials.find(
      (c) => c.email === data.email && c.password === data.password
    );

    if (!validCreds) {
      toast.error(
        lang === 'fr' ?'Identifiants invalides — utilisez les comptes de démo ci-dessous' :'Invalid credentials — use the demo accounts below'
      );
      setIsLoading(false);
      return;
    }

    toast.success(lang === 'fr' ? 'Connexion réussie ! Redirection...' : 'Login successful! Redirecting...');
    await new Promise((r) => setTimeout(r, 600));
    window.location.href = '/student-dashboard';
    setIsLoading(false);
  };

  const handleSignupSubmit = async (data: SignupFormData) => {
    if (data.password !== data.confirmPassword) {
      signupForm.setError('confirmPassword', {
        message: lang === 'fr' ? 'Les mots de passe ne correspondent pas' : 'Passwords do not match',
      });
      return;
    }
    setIsLoading(true);
    // BACKEND INTEGRATION POINT: POST /api/auth/signup — create profile in Supabase with role + examSeries
    await new Promise((r) => setTimeout(r, 1600));
    toast.success(
      lang === 'fr' ?'Compte créé ! Bienvenue sur EduAI Prep 🎉' :'Account created! Welcome to EduAI Prep 🎉'
    );
    setActiveTab('login');
    setIsLoading(false);
  };

  const autofillCredential = (cred: (typeof demoCredentials)[0]) => {
    loginForm.setValue('email', cred.email);
    loginForm.setValue('password', cred.password);
    toast.success(lang === 'fr' ? `Compte ${cred.role} sélectionné` : `${cred.roleEn} account selected`);
  };

  const copyToClipboard = async (text: string, fieldId: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="w-full max-w-md">
      {/* Mobile logo */}
      <div className="flex items-center justify-between mb-8 lg:hidden">
        <div className="flex items-center gap-2">
          <AppLogo size={30} />
          <span className="font-bold text-base text-foreground">EduAI Prep</span>
        </div>
        <button
          onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-muted border border-border text-xs font-600 text-foreground hover:bg-muted/80 transition-colors"
        >
          <Globe size={12} className="text-muted-foreground" />
          <span className="uppercase">{lang}</span>
        </button>
      </div>

      {/* Language toggle — desktop */}
      <div className="hidden lg:flex justify-end mb-6">
        <button
          onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted border border-border text-xs font-600 text-foreground hover:bg-muted/80 transition-colors"
        >
          <Globe size={12} className="text-muted-foreground" />
          <span className="uppercase">{lang}</span>
          <ChevronDown size={10} className="text-muted-foreground" />
        </button>
      </div>

      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-800 text-foreground">
          {activeTab === 'login'
            ? lang === 'fr' ? 'Bon retour ! 👋' : 'Welcome back! 👋'
            : lang === 'fr' ? 'Crée ton compte 🚀' : 'Create your account 🚀'}
        </h2>
        <p className="text-sm text-muted-foreground mt-1.5">
          {activeTab === 'login'
            ? lang === 'fr' ?'Connecte-toi pour reprendre ta révision' :'Log in to continue your revision'
            : lang === 'fr' ?'Rejoins 12 400+ élèves qui révisent avec l\'IA' :'Join 12,400+ students studying with AI'}
        </p>
      </div>

      {/* Tab switcher */}
      <div className="flex bg-muted rounded-xl p-1 mb-6">
        {(['login', 'signup'] as AuthTab[]).map((tab) => (
          <button
            key={`tab-${tab}`}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 rounded-lg text-sm font-600 transition-all duration-200 ${
              activeTab === tab
                ? 'bg-card text-foreground shadow-card'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab === 'login'
              ? lang === 'fr' ? 'Connexion' : 'Log In'
              : lang === 'fr' ? 'Inscription' : 'Sign Up'}
          </button>
        ))}
      </div>

      {/* Google OAuth */}
      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 py-2.5 rounded-xl border border-border bg-card-elevated hover:bg-muted/60 transition-all duration-150 text-sm font-600 text-foreground mb-5 active:scale-[0.99]"
      >
        {/* Google SVG icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        {lang === 'fr' ? 'Continuer avec Google' : 'Continue with Google'}
      </button>

      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground font-500">
          {lang === 'fr' ? 'ou' : 'or'}
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* LOGIN FORM */}
      {activeTab === 'login' && (
        <form onSubmit={loginForm.handleSubmit(handleLoginSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-xs font-600 text-foreground mb-1.5">
              {lang === 'fr' ? 'Adresse e-mail' : 'Email address'}
            </label>
            <div className="relative">
              <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                placeholder={lang === 'fr' ? 'ton.email@exemple.com' : 'your.email@example.com'}
                className={`w-full bg-input border rounded-xl pl-9 pr-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all ${
                  loginForm.formState.errors.email ? 'border-error' : 'border-border'
                }`}
                {...loginForm.register('email', {
                  required: lang === 'fr' ? 'L\'e-mail est requis' : 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: lang === 'fr' ? 'E-mail invalide' : 'Invalid email',
                  },
                })}
              />
            </div>
            {loginForm.formState.errors.email && (
              <p className="mt-1 text-xs text-error flex items-center gap-1">
                <AlertCircle size={11} />
                {loginForm.formState.errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-600 text-foreground mb-1.5">
              {lang === 'fr' ? 'Mot de passe' : 'Password'}
            </label>
            <div className="relative">
              <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className={`w-full bg-input border rounded-xl pl-9 pr-10 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all ${
                  loginForm.formState.errors.password ? 'border-error' : 'border-border'
                }`}
                {...loginForm.register('password', {
                  required: lang === 'fr' ? 'Le mot de passe est requis' : 'Password is required',
                  minLength: {
                    value: 8,
                    message: lang === 'fr' ? 'Minimum 8 caractères' : 'Minimum 8 characters',
                  },
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
            {loginForm.formState.errors.password && (
              <p className="mt-1 text-xs text-error flex items-center gap-1">
                <AlertCircle size={11} />
                {loginForm.formState.errors.password.message}
              </p>
            )}
          </div>

          {/* Remember me + Forgot */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 rounded border-border bg-input accent-primary"
                {...loginForm.register('rememberMe')}
              />
              <span className="text-xs text-muted-foreground">
                {lang === 'fr' ? 'Se souvenir de moi' : 'Remember me'}
              </span>
            </label>
            <button type="button" className="text-xs text-primary-light hover:text-primary transition-colors">
              {lang === 'fr' ? 'Mot de passe oublié ?' : 'Forgot password?'}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-700 text-sm transition-all duration-150 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-violet"
          >
            {isLoading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                {lang === 'fr' ? 'Connexion...' : 'Signing in...'}
              </>
            ) : (
              <>{lang === 'fr' ? 'Se connecter' : 'Log In'}</>
            )}
          </button>

          {/* Demo credentials */}
          <div className="mt-4 p-3 rounded-xl bg-info/8 border border-info/20">
            <p className="text-[11px] font-600 text-info mb-2 flex items-center gap-1.5">
              <CheckCircle2 size={11} />
              {lang === 'fr' ? 'Comptes de démo — cliquez pour remplir automatiquement' : 'Demo accounts — click to autofill'}
            </p>
            <div className="space-y-1.5">
              {demoCredentials.map((cred) => (
                <div
                  key={cred.id}
                  className="flex items-center gap-2 p-2 rounded-lg bg-card/60 border border-border hover:border-info/30 cursor-pointer transition-all duration-150 group"
                  onClick={() => autofillCredential(cred)}
                >
                  <span className="text-[10px] font-700 text-info/80 w-12 flex-shrink-0">
                    {lang === 'fr' ? cred.role : cred.roleEn}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-muted-foreground truncate font-mono">{cred.email}</p>
                    <p className="text-[10px] text-muted-foreground font-mono">{cred.password}</p>
                  </div>
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); copyToClipboard(cred.email, `${cred.id}-email`); }}
                      className="p-1 rounded hover:bg-muted/60 transition-colors"
                      title="Copier l'email"
                    >
                      {copiedField === `${cred.id}-email` ? (
                        <Check size={10} className="text-success" />
                      ) : (
                        <Copy size={10} className="text-muted-foreground" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>
      )}

      {/* SIGNUP FORM */}
      {activeTab === 'signup' && (
        <form onSubmit={signupForm.handleSubmit(handleSignupSubmit)} className="space-y-4">
          {/* Role selector */}
          <div>
            <label className="block text-xs font-600 text-foreground mb-2">
              {lang === 'fr' ? 'Je suis...' : 'I am...'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(['student', 'parent'] as UserRole[]).map((role) => (
                <button
                  key={`role-${role}`}
                  type="button"
                  onClick={() => {
                    setSelectedRole(role);
                    signupForm.setValue('role', role);
                  }}
                  className={`py-2.5 px-3 rounded-xl border text-sm font-600 transition-all duration-150 flex items-center justify-center gap-2 ${
                    selectedRole === role
                      ? 'border-primary bg-primary/15 text-primary-light shadow-violet'
                      : 'border-border bg-input text-muted-foreground hover:text-foreground hover:border-border/80'
                  }`}
                >
                  <User size={14} />
                  {role === 'student'
                    ? lang === 'fr' ? 'Élève' : 'Student'
                    : lang === 'fr' ? 'Parent' : 'Parent'}
                </button>
              ))}
            </div>
          </div>

          {/* Full name */}
          <div>
            <label className="block text-xs font-600 text-foreground mb-1.5">
              {lang === 'fr' ? 'Nom complet' : 'Full name'}
            </label>
            <div className="relative">
              <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder={lang === 'fr' ? 'Aminata Diallo' : 'Aminata Diallo'}
                className={`w-full bg-input border rounded-xl pl-9 pr-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all ${
                  signupForm.formState.errors.fullName ? 'border-error' : 'border-border'
                }`}
                {...signupForm.register('fullName', {
                  required: lang === 'fr' ? 'Le nom est requis' : 'Name is required',
                  minLength: {
                    value: 2,
                    message: lang === 'fr' ? 'Minimum 2 caractères' : 'Minimum 2 characters',
                  },
                })}
              />
            </div>
            {signupForm.formState.errors.fullName && (
              <p className="mt-1 text-xs text-error flex items-center gap-1">
                <AlertCircle size={11} />
                {signupForm.formState.errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-600 text-foreground mb-1.5">
              {lang === 'fr' ? 'Adresse e-mail' : 'Email address'}
            </label>
            <div className="relative">
              <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                placeholder={lang === 'fr' ? 'ton.email@exemple.com' : 'your.email@example.com'}
                className={`w-full bg-input border rounded-xl pl-9 pr-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all ${
                  signupForm.formState.errors.email ? 'border-error' : 'border-border'
                }`}
                {...signupForm.register('email', {
                  required: lang === 'fr' ? 'L\'e-mail est requis' : 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: lang === 'fr' ? 'E-mail invalide' : 'Invalid email',
                  },
                })}
              />
            </div>
            {signupForm.formState.errors.email && (
              <p className="mt-1 text-xs text-error flex items-center gap-1">
                <AlertCircle size={11} />
                {signupForm.formState.errors.email.message}
              </p>
            )}
          </div>

          {/* Exam series (only for students) */}
          {selectedRole === 'student' && (
            <div>
              <label className="block text-xs font-600 text-foreground mb-1.5">
                {lang === 'fr' ? 'Série d\'examen' : 'Exam series'}
              </label>
              <p className="text-[11px] text-muted-foreground mb-1.5">
                {lang === 'fr' ?'Sélectionne ta série pour personnaliser le contenu' :'Select your series to personalize content'}
              </p>
              <div className="relative">
                <select
                  className="w-full bg-input border border-border rounded-xl px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all appearance-none"
                  {...signupForm.register('examSeries', { required: true })}
                >
                  {examSeriesOptions.map((opt) => (
                    <option key={`series-${opt.value}`} value={opt.value} className="bg-card">
                      {lang === 'fr' ? opt.label : opt.labelEn}
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          )}

          {/* Language preference */}
          <div>
            <label className="block text-xs font-600 text-foreground mb-1.5">
              {lang === 'fr' ? 'Langue préférée' : 'Preferred language'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(['fr', 'en'] as const).map((l) => (
                <button
                  key={`lang-pref-${l}`}
                  type="button"
                  onClick={() => signupForm.setValue('language', l)}
                  className={`py-2 rounded-xl border text-sm font-600 transition-all duration-150 ${
                    signupForm.watch('language') === l
                      ? 'border-primary bg-primary/15 text-primary-light' :'border-border bg-input text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {l === 'fr' ? '🇫🇷 Français' : '🇬🇧 English'}
                </button>
              ))}
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-600 text-foreground mb-1.5">
              {lang === 'fr' ? 'Mot de passe' : 'Password'}
            </label>
            <p className="text-[11px] text-muted-foreground mb-1.5">
              {lang === 'fr' ? 'Minimum 8 caractères' : 'Minimum 8 characters'}
            </p>
            <div className="relative">
              <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className={`w-full bg-input border rounded-xl pl-9 pr-10 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all ${
                  signupForm.formState.errors.password ? 'border-error' : 'border-border'
                }`}
                {...signupForm.register('password', {
                  required: lang === 'fr' ? 'Le mot de passe est requis' : 'Password is required',
                  minLength: {
                    value: 8,
                    message: lang === 'fr' ? 'Minimum 8 caractères' : 'Minimum 8 characters',
                  },
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
            {signupForm.formState.errors.password && (
              <p className="mt-1 text-xs text-error flex items-center gap-1">
                <AlertCircle size={11} />
                {signupForm.formState.errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm password */}
          <div>
            <label className="block text-xs font-600 text-foreground mb-1.5">
              {lang === 'fr' ? 'Confirmer le mot de passe' : 'Confirm password'}
            </label>
            <div className="relative">
              <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className={`w-full bg-input border rounded-xl pl-9 pr-10 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-all ${
                  signupForm.formState.errors.confirmPassword ? 'border-error' : 'border-border'
                }`}
                {...signupForm.register('confirmPassword', {
                  required: lang === 'fr' ? 'Confirmez votre mot de passe' : 'Confirm your password',
                })}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showConfirmPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
            {signupForm.formState.errors.confirmPassword && (
              <p className="mt-1 text-xs text-error flex items-center gap-1">
                <AlertCircle size={11} />
                {signupForm.formState.errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Terms */}
          <div>
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 rounded border-border bg-input accent-primary mt-0.5 flex-shrink-0"
                {...signupForm.register('acceptTerms', {
                  required: lang === 'fr' ? 'Acceptez les conditions' : 'Accept terms to continue',
                })}
              />
              <span className="text-xs text-muted-foreground leading-relaxed">
                {lang === 'fr' ? 'J\'accepte les ' : 'I accept the '}
                <button type="button" className="text-primary-light hover:underline">
                  {lang === 'fr' ? 'conditions d\'utilisation' : 'terms of service'}
                </button>
                {lang === 'fr' ? ' et la ' : ' and '}
                <button type="button" className="text-primary-light hover:underline">
                  {lang === 'fr' ? 'politique de confidentialité' : 'privacy policy'}
                </button>
              </span>
            </label>
            {signupForm.formState.errors.acceptTerms && (
              <p className="mt-1 text-xs text-error flex items-center gap-1">
                <AlertCircle size={11} />
                {signupForm.formState.errors.acceptTerms.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-700 text-sm transition-all duration-150 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-violet"
          >
            {isLoading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                {lang === 'fr' ? 'Création du compte...' : 'Creating account...'}
              </>
            ) : (
              <>{lang === 'fr' ? 'Créer mon compte' : 'Create Account'}</>
            )}
          </button>
        </form>
      )}

      {/* Switch tab link */}
      <p className="mt-5 text-center text-xs text-muted-foreground">
        {activeTab === 'login'
          ? lang === 'fr' ? 'Pas encore de compte ? ' : 'No account yet? '
          : lang === 'fr' ? 'Déjà un compte ? ' : 'Already have an account? '}
        <button
          onClick={() => setActiveTab(activeTab === 'login' ? 'signup' : 'login')}
          className="text-primary-light hover:text-primary font-600 transition-colors"
        >
          {activeTab === 'login'
            ? lang === 'fr' ? 'Inscris-toi gratuitement' : 'Sign up for free'
            : lang === 'fr' ? 'Se connecter' : 'Log in'}
        </button>
      </p>
    </div>
  );
}