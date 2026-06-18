import React from 'react';
import { mockBadges } from '@/lib/mockData';
import { Trophy } from 'lucide-react';

export default function RecentBadges() {
  const badges = mockBadges?.slice(0, 4);

  return (
    <div className="bg-card border border-border rounded-2xl p-5 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[15px] font-700 text-foreground">Badges récents</h3>
        <span className="text-xs text-muted-foreground">{mockBadges?.length} total</span>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {badges?.map((badge) => (
          <div
            key={badge?.id}
            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-card-elevated border border-border hover:border-primary/20 transition-all duration-150 group cursor-pointer"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
              style={{ backgroundColor: `${badge?.color}18` }}
            >
              {badge?.icon}
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-700 text-foreground truncate leading-tight">
                {badge?.name}
              </p>
              <p className="text-[10px] text-muted-foreground truncate mt-0.5 leading-tight">
                {badge?.earnedAt?.split('-')?.reverse()?.join('/')}
              </p>
            </div>
          </div>
        ))}
      </div>
      {mockBadges?.length > 4 && (
        <button className="mt-3 w-full py-2 rounded-xl border border-dashed border-border text-xs text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-150 flex items-center justify-center gap-1.5">
          <Trophy size={12} />
          Voir les {mockBadges?.length - 4} autres badges
        </button>
      )}
    </div>
  );
}