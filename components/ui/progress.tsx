'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, ...props }, ref) => {
    const safeValue = Math.min(100, Math.max(0, value || 0));
    return (
      <div
        ref={ref}
        className={cn(
          'relative h-4 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800',
          className
        )}
        {...props}
      >
        <div
          className="h-full w-full flex-1 bg-slate-900 dark:bg-slate-100 transition-all"
          style={{ transform: 'translateX(-' + (100 - safeValue) + '%)' }}
        />
      </div>
    );
  }
);
Progress.displayName = 'Progress';

export { Progress };
