'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import SkeletonBlock from '@/components/ui/SkeletonBlock';

const XPProgressChartInner = dynamic(
  () => import('./XPProgressChartInner'),
  {
    ssr: false,
    loading: () => (
      <div className="bg-card border border-border rounded-2xl p-5 shadow-card">
        <SkeletonBlock height="h-5" width="w-40" className="mb-4" />
        <SkeletonBlock height="h-[160px]" />
      </div>
    ),
  }
);

export default function XPProgressChart() {
  return <XPProgressChartInner />;
}