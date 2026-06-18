import React from 'react';
import { mockSubjects } from '@/lib/mockData';
import { TrendingUp } from 'lucide-react';

export default function SubjectProgressPanel() {
  const subjects = mockSubjects;

  return (
    <div className="bg-card border border-border rounded-2xl p-5 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[15px] font-700 text-foreground">Progression par matière</h3>
        <button className="text-xs text-primary-light hover:text-primary transition-colors font-500">
          Voir tout
        </button>
      </div>
      <div className="space-y-3.5">
        {subjects?.map((subject) => (
          <div key={subject?.id} className="group">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 font-700"
                style={{
                  backgroundColor: `${subject?.color}20`,
                  color: subject?.color,
                }}
              >
                {subject?.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[13px] font-600 text-foreground truncate">
                    {subject?.name}
                  </span>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                    {subject?.lastScore !== null && (
                      <span className="text-[11px] font-700 text-foreground tabular-nums">
                        {subject?.lastScore}/20
                      </span>
                    )}
                    <span className="text-[11px] text-muted-foreground tabular-nums">
                      {subject?.progressPercent}%
                    </span>
                  </div>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${subject?.progressPercent}%`,
                      backgroundColor: subject?.color,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <TrendingUp size={13} className="text-success" />
          <span className="text-xs text-muted-foreground">Meilleure matière :</span>
          <span className="text-xs font-700 text-success">SVT (81%)</span>
        </div>
        <span className="text-xs text-muted-foreground tabular-nums">
          {subjects?.length} matières
        </span>
      </div>
    </div>
  );
}