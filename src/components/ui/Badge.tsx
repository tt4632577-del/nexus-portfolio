import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'crimson' | 'lime' | 'cyan' | 'neutral' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'sm',
  className,
}) => {
  const variants = {
    crimson: 'bg-accent-subtle text-accent-text border-accent-border',
    lime: 'bg-accent-subtle text-accent-text border-accent-border',
    cyan: 'bg-surface-elevated text-content-secondary border-border',
    neutral: 'bg-surface-elevated text-content-secondary border-border',
    outline: 'bg-transparent text-content-muted border-border',
  };

  const sizes = {
    sm: 'text-[11px] px-2.5 py-0.5',
    md: 'text-xs px-3 py-1',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-md border font-mono font-medium',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
};
