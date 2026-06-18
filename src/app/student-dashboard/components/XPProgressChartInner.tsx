'use client';

import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { mockXPProgress } from '@/lib/mockData';
import { Crown, Zap } from 'lucide-react';

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; name: string }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card-elevated border border-border rounded-xl p-3 shadow-card text-xs">
      <p className="font-700 text-foreground mb-1">{label}</p>
      <div className="flex items-center gap-2">
        <Zap size={10} className="text-accent" />
        <span className="text-muted-foreground">XP gagné :</span>
        <span className="font-700 text-accent tabular-nums">+{payload[0]?.value}</span>
      </div>
      {payload[1] && (
        <div className="flex items-center gap-2 mt-1">
          <Crown size={10} className="text-primary-light" />
          <span className="text-muted-foreground">Total :</span>
          <span className="font-700 text-primary-light tabular-nums">{payload[1]?.value}</span>
        </div>
      )}
    </div>
  );
}

export default function XPProgressChartInner() {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-[15px] font-700 text-foreground">XP gagnés — 18 derniers jours</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Activité quotidienne d&apos;apprentissage</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20">
          <Crown size={11} className="text-primary-light" />
          <span className="text-[11px] font-700 text-primary-light tabular-nums">1 480 XP</span>
          <span className="text-[10px] text-muted-foreground">ce mois</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={160}>
        <AreaChart data={mockXPProgress} margin={{ top: 4, right: 4, left: -24, bottom: 0 }}>
          <defs>
            <linearGradient id="xpGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.4} />
              <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="cumulativeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.2} />
              <stop offset="95%" stopColor="var(--accent)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 10, fill: 'var(--muted-foreground)', fontFamily: 'var(--font-sans)' }}
            axisLine={false}
            tickLine={false}
            interval={2}
          />
          <YAxis
            tick={{ fontSize: 10, fill: 'var(--muted-foreground)', fontFamily: 'var(--font-sans)' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="xp"
            name="XP journalier"
            stroke="var(--primary)"
            strokeWidth={2}
            fill="url(#xpGradient)"
            dot={false}
            activeDot={{ r: 4, fill: 'var(--primary)', strokeWidth: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}