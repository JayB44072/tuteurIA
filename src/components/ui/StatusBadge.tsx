import React from 'react';

type BadgeVariant =
  | 'success' |'warning' |'error' |'info' |'primary' |'muted' |'accent';

interface StatusBadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  dot?: boolean;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  success: 'bg-success/15 text-success border border-success/25',
  warning: 'bg-warning/15 text-warning border border-warning/25',
  error: 'bg-error/15 text-error border border-error/25',
  info: 'bg-info/15 text-info border border-info/25',
  primary: 'bg-primary/15 text-primary-light border border-primary/25',
  muted: 'bg-muted text-muted-foreground border border-border',
  accent: 'bg-accent/15 text-accent border border-accent/25',
};

const dotColors: Record<BadgeVariant, string> = {
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
  info: 'bg-info',
  primary: 'bg-primary-light',
  muted: 'bg-muted-foreground',
  accent: 'bg-accent',
};

export default function StatusBadge({
  label,
  variant = 'muted',
  size = 'sm',
  dot = false,
  className = '',
}: StatusBadgeProps) {
  const sizeClass = size === 'sm' ? 'text-[11px] px-2 py-0.5' : 'text-xs px-2.5 py-1';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-600 tracking-wide ${sizeClass} ${variantClasses[variant]} ${className}`}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotColors[variant]}`} />
      )}
      {label}
    </span>
  );
}