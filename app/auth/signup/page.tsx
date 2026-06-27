'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase';
import { useApp } from '@/app/providers';
import { useTranslation } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { toast } from 'sonner';
import { Loader2, Chrome, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

export default function SignupPage() {
  const router = useRouter();
  const { locale } = useApp();
  const { t } = useTranslation(locale);
  const supabase = createClient();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName) errs.fullName = t.auth.required;
    if (!email) errs.email = t.auth.required;
    else if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = t.auth.invalidEmail;
    if (!password) errs.password = t.auth.required;
    else if (password.length < 6) errs.password = t.auth.weakPassword;
    if (password !== confirmPassword) errs.confirmPassword = t.auth.passwordMismatch;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success(t.auth.signupSuccess);
    router.push('/dashboard');
    router.refresh();
  };

  const handleGoogleSignup = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
    if (error) toast.error(error.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{t.app.name}</h1>
          <p className="text-slate-600 dark:text-slate-300 mt-2">{t.app.tagline}</p>
        </div>
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle>{t.auth.signupTitle}</CardTitle>
            <CardDescription>{t.auth.signupSubtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">{t.auth.fullName}</Label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <Input id="fullName" placeholder="Jean Dupont" className="pl-10" value={fullName} onChange={(e) => { setFullName(e.target.value); setErrors({ ...errors, fullName: '' }); }} />
                </div>
                {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">{t.auth.email}</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <Input id="email" type="email" placeholder="you@example.com" className="pl-10" value={email} onChange={(e) => { setEmail(e.target.value); setErrors({ ...errors, email: '' }); }} />
                </div>
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">{t.auth.password}</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <Input id="password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" className="pl-10 pr-10" value={password} onChange={(e) => { setPassword(e.target.value); setErrors({ ...errors, password: '' }); }} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600">
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">{t.auth.confirmPassword}</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <Input id="confirmPassword" type="password" placeholder="••••••••" className="pl-10" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value); setErrors({ ...errors, confirmPassword: '' }); }} />
                </div>
                {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                {t.auth.signupButton}
              </Button>
            </form>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white dark:bg-slate-950 px-2 text-slate-500">{t.auth.orContinueWith}</span>
              </div>
            </div>
            <Button variant="outline" className="w-full" onClick={handleGoogleSignup}>
              <Chrome className="h-4 w-4 mr-2" />
              {t.auth.google}
            </Button>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-sm text-slate-600">
              {t.auth.haveAccount}{' '}
              <Link href="/auth/login" className="text-blue-600 hover:underline font-medium">{t.auth.login}</Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
