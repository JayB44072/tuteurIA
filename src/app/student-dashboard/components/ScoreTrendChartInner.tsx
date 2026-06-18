'use client';

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,  } from 'recharts';
import { mockWeeklyScores } from '@/lib/mockData';
import { TrendingUp } from 'lucide-react';

const subjectLines = [
  { id: 'line-math', key: 'math', label: 'Mathématiques', color: '#7C3AED' },
  { id: 'line-physique', key: 'physique', label: 'Physique-Chimie', color: '#3B82F6' },
  { id: 'line-svt', key: 'svt', label: 'SVT', color: '#10B981' },
  { id: 'line-histoire', key: 'histoire', label: 'Histoire-Géo', color: '#F59E0B' },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-card-elevated border border-border rounded-xl p-3 shadow-card text-xs">
      <p className="font-700 text-foreground mb-2">{label}</p>
      {payload.map((entry) => (
        <div key={`tt-${entry.name}`} className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: entry.color }} />
          <span className="text-muted-foreground">{entry.name}:</span>
          <span className="font-700 text-foreground tabular-nums">{entry.value}/20</span>
        </div>
      ))}
    </div>
  );
}

export default function ScoreTrendChartInner() {
  const [hiddenLines, setHiddenLines] = useState<Set<string>>(new Set());

  const toggleLine = (key: string) => {
    setHiddenLines((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-5 shadow-card">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-[15px] font-700 text-foreground">Évolution des notes</h3>
          <p className="text-xs text-muted-foreground mt-0.5">7 semaines · Mai — Juin 2026</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-success/10 border border-success/20">
          <TrendingUp size={11} className="text-success" />
          <span className="text-[11px] font-700 text-success">+4.5 pts</span>
        </div>
      </div>

      {/* Custom legend */}
      <div className="flex flex-wrap gap-2 mb-4">
        {subjectLines.map((line) => (
          <button
            key={line.id}
            onClick={() => toggleLine(line.key)}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-600 transition-all duration-150 ${
              hiddenLines.has(line.key)
                ? 'border-border text-muted-foreground bg-transparent opacity-50'
                : 'border-border/60 text-foreground bg-card-elevated'
            }`}
          >
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: hiddenLines.has(line.key) ? 'var(--muted-foreground)' : line.color }}
            />
            {line.label}
          </button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={mockWeeklyScores} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
          <defs>
            {subjectLines.map((line) => (
              <linearGradient key={`grad-${line.id}`} id={`grad-${line.key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={line.color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={line.color} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis
            dataKey="week"
            tick={{ fontSize: 10, fill: 'var(--muted-foreground)', fontFamily: 'var(--font-sans)' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[6, 20]}
            tick={{ fontSize: 10, fill: 'var(--muted-foreground)', fontFamily: 'var(--font-sans)' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          {subjectLines.map((line) => (
            <Line
              key={line.id}
              type="monotone"
              dataKey={line.key}
              name={line.label}
              stroke={line.color}
              strokeWidth={hiddenLines.has(line.key) ? 0 : 2}
              dot={{ fill: line.color, strokeWidth: 0, r: 3 }}
              activeDot={{ r: 5, strokeWidth: 0 }}
              hide={hiddenLines.has(line.key)}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}