import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'lime' | 'cyan' | 'neutral' | 'outline';
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
    lime: 'bg-nexus-lime/10 text-nexus-lime border-nexus-lime/20',
    cyan: 'bg-nexus-cyan/10 text-nexus-cyan border-nexus-cyan/20',
    neutral: 'bg-white/5 text-nexus-muted border-nexus-border',
    outline: 'bg-transparent text-nexus-dim border-nexus-border',
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
