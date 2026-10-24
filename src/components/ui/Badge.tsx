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
    crimson: 'bg-nexus-crimson/15 text-nexus-crimsonBright border-nexus-crimson/30',
    lime: 'bg-nexus-crimson/15 text-nexus-crimsonBright border-nexus-crimson/30', // Aliased for seamless compatibility
    cyan: 'bg-white/5 text-nexus-text border-nexus-border',
    neutral: 'bg-nexus-surface text-nexus-secondary border-nexus-border',
    outline: 'bg-transparent text-nexus-muted border-nexus-border',
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
