import React from 'react';
import AppLayout from '@/components/AppLayout';
import ExamCountdownCard from './components/ExamCountdownCard';
import MetricsBentoGrid from './components/MetricsBentoGrid';
import SubjectProgressPanel from './components/SubjectProgressPanel';
import RecentAISessions from './components/RecentAISessions';
import QuickActions from './components/QuickActions';
import RecentBadges from './components/RecentBadges';
import ScoreTrendChart from './components/ScoreTrendChart';
import XPProgressChart from './components/XPProgressChart';

export default function StudentDashboardPage() {
  return (
    <AppLayout activePath="/student-dashboard">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-800 text-foreground">
              Bonjour, Aminata 👋
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Bac D · Mercredi 18 juin 2026 · Dernière mise à jour : 09:19
            </p>
          </div>
          <QuickActions />
        </div>

        {/* Exam Countdown — Hero */}
        <ExamCountdownCard />

        {/* Metrics bento grid */}
        <MetricsBentoGrid />

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
          {/* Left: Subject progress + AI sessions */}
          <div className="lg:col-span-1 space-y-6">
            <SubjectProgressPanel />
            <RecentBadges />
          </div>

          {/* Right: Charts */}
          <div className="lg:col-span-2 space-y-6">
            <ScoreTrendChart />
            <XPProgressChart />
          </div>
        </div>

        {/* Recent AI sessions */}
        <RecentAISessions />
      </div>
    </AppLayout>
  );
}