'use client';

import React, { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import {
  User,
  Mail,
  BookOpen,
  Globe,
  Edit3,
  Save,
  X,
  LogOut,
  Crown,
  Shield,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';
import { mockUser, mockSubscription, examSeriesOptions } from '@/lib/mockData';

const languageOptions = [
  { value: 'fr', label: 'Français' },
  { value: 'en', label: 'English' },
];

const tierLabels: Record<string, string> = {
  free: 'Gratuit',
  pass_chrono: 'Pass Chrono',
  premium: 'Mensuel Premium',
  pass_examen: 'Pass Examen',
};

export default function AccountPage() {
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const [form, setForm] = useState({
    fullName: mockUser.fullName,
    email: mockUser.email,
    examSeries: mockUser.examSeries,
    language: mockUser.language,
  });

  const handleSave = () => {
    setSaved(true);
    setEditing(false);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleCancel = () => {
    setForm({
      fullName: mockUser.fullName,
      email: mockUser.email,
      examSeries: mockUser.examSeries,
      language: mockUser.language,
    });
    setEditing(false);
  };

  return (
    <AppLayout activePath="/dashboard/account">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-800 text-foreground flex items-center gap-2">
            <User size={24} className="text-primary-light" />
            Mon Compte
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Gérez vos informations personnelles et préférences
          </p>
        </div>

        {/* Save success banner */}
        {saved && (
          <div className="flex items-center gap-3 p-3 rounded-xl bg-success/10 border border-success/20 text-success text-sm font-600">
            <CheckCircle size={16} />
            Profil mis à jour avec succès !
          </div>
        )}

        {/* Avatar + name card */}
        <div className="card p-6 flex items-center gap-5">
          <div className="w-20 h-20 rounded-2xl bg-gradient-violet flex items-center justify-center text-white text-2xl font-800 flex-shrink-0">
            {form.fullName.split(' ').map((n) => n[0]).join('').slice(0, 2)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xl font-800 text-foreground">{form.fullName}</p>
            <p className="text-sm text-muted-foreground">{form.email}</p>
            <div className="flex items-center gap-3 mt-2 flex-wrap">
              <span className="flex items-center gap-1.5 text-xs font-600 text-primary-light">
                <Crown size={12} />
                Niveau {mockUser.level} · {mockUser.xpTotal.toLocaleString('fr-FR')} XP
              </span>
              <span className="flex items-center gap-1.5 text-xs font-600 text-accent">
                <Shield size={12} />
                {tierLabels[mockSubscription.tier] ?? mockSubscription.tier}
              </span>
            </div>
          </div>
          {!editing && (
            <button
              onClick={() => setEditing(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary-light text-sm font-600 hover:bg-primary/20 transition-colors flex-shrink-0"
            >
              <Edit3 size={14} />
              Modifier
            </button>
          )}
        </div>

        {/* Profile form */}
        <div className="card p-6 space-y-5">
          <h2 className="text-sm font-700 text-foreground">Informations personnelles</h2>

          {/* Full name */}
          <div className="space-y-1.5">
            <label className="text-xs font-600 text-muted-foreground flex items-center gap-1.5">
              <User size={12} />
              Nom complet
            </label>
            {editing ? (
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              />
            ) : (
              <p className="px-4 py-2.5 rounded-xl bg-muted/20 text-sm text-foreground">{form.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-600 text-muted-foreground flex items-center gap-1.5">
              <Mail size={12} />
              Adresse email
            </label>
            {editing ? (
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              />
            ) : (
              <p className="px-4 py-2.5 rounded-xl bg-muted/20 text-sm text-foreground">{form.email}</p>
            )}
          </div>

          {/* Exam series */}
          <div className="space-y-1.5">
            <label className="text-xs font-600 text-muted-foreground flex items-center gap-1.5">
              <BookOpen size={12} />
              Série d'examen
            </label>
            {editing ? (
              <select
                value={form.examSeries}
                onChange={(e) => setForm({ ...form, examSeries: e.target.value as typeof form.examSeries })}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              >
                {examSeriesOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : (
              <p className="px-4 py-2.5 rounded-xl bg-muted/20 text-sm text-foreground">
                {examSeriesOptions.find((o) => o.value === form.examSeries)?.label ?? form.examSeries}
              </p>
            )}
          </div>

          {/* Language */}
          <div className="space-y-1.5">
            <label className="text-xs font-600 text-muted-foreground flex items-center gap-1.5">
              <Globe size={12} />
              Langue préférée
            </label>
            {editing ? (
              <select
                value={form.language}
                onChange={(e) => setForm({ ...form, language: e.target.value as 'fr' | 'en' })}
                className="w-full px-4 py-2.5 rounded-xl bg-muted/40 border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              >
                {languageOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : (
              <p className="px-4 py-2.5 rounded-xl bg-muted/20 text-sm text-foreground">
                {languageOptions.find((o) => o.value === form.language)?.label ?? form.language}
              </p>
            )}
          </div>

          {/* Action buttons */}
          {editing && (
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-600 hover:bg-primary/90 transition-colors"
              >
                <Save size={14} />
                Enregistrer
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-muted/40 text-muted-foreground text-sm font-600 hover:bg-muted/60 transition-colors"
              >
                <X size={14} />
                Annuler
              </button>
            </div>
          )}
        </div>

        {/* Subscription info */}
        <div className="card p-6 space-y-4">
          <h2 className="text-sm font-700 text-foreground flex items-center gap-2">
            <Crown size={15} className="text-accent" />
            Abonnement actuel
          </h2>
          <div className="flex items-center justify-between p-4 rounded-xl bg-accent/5 border border-accent/20">
            <div>
              <p className="text-sm font-700 text-foreground">
                {tierLabels[mockSubscription.tier]}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {mockSubscription.endDate
                  ? `Expire le ${mockSubscription.endDate}`
                  : 'Accès illimité'}
              </p>
            </div>
            <button className="px-4 py-2 rounded-xl bg-accent/10 text-accent text-xs font-600 hover:bg-accent/20 transition-colors">
              Mettre à niveau
            </button>
          </div>
        </div>

        {/* Danger zone — Sign out */}
        <div className="card p-6 space-y-4 border-error/20">
          <h2 className="text-sm font-700 text-error flex items-center gap-2">
            <AlertTriangle size={15} />
            Zone de déconnexion
          </h2>

          {!showLogoutConfirm ? (
            <button
              onClick={() => setShowLogoutConfirm(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-error/30 text-error text-sm font-600 hover:bg-error/10 transition-colors"
            >
              <LogOut size={15} />
              Se déconnecter
            </button>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Êtes-vous sûr(e) de vouloir vous déconnecter ?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    /* sign out logic */
                    setShowLogoutConfirm(false);
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-error text-white text-sm font-600 hover:bg-error/90 transition-colors"
                >
                  <LogOut size={14} />
                  Confirmer la déconnexion
                </button>
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  className="px-5 py-2.5 rounded-xl bg-muted/40 text-muted-foreground text-sm font-600 hover:bg-muted/60 transition-colors"
                >
                  Annuler
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
