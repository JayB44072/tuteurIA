'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import SkeletonBlock from '@/components/ui/SkeletonBlock';

const ScoreTrendChartInner = dynamic(
  () => import('./ScoreTrendChartInner'),
  {
    ssr: false,
    loading: () => (
      <div className="bg-card border border-border rounded-2xl p-5 shadow-card">
        <SkeletonBlock height="h-5" width="w-48" className="mb-4" />
        <SkeletonBlock height="h-[220px]" />
      </div>
    ),
  }
);

export default function ScoreTrendChart() {
  return <ScoreTrendChartInner />;
}