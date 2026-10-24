import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  as: Component = 'button',
  href,
  target,
  rel,
  children,
  icon,
  iconPosition = 'right',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-nexus-crimson disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variants = {
    primary:
      'bg-nexus-crimson text-white hover:bg-nexus-crimsonHover font-semibold shadow-sm hover:shadow-glow-crimson active:scale-[0.98]',
    secondary:
      'bg-nexus-surface text-nexus-text border border-nexus-border hover:border-nexus-borderAccent hover:bg-nexus-elevated active:scale-[0.98]',
    outline:
      'bg-transparent text-nexus-text border border-nexus-border hover:border-nexus-crimson hover:text-nexus-crimsonBright active:scale-[0.98]',
    ghost:
      'bg-transparent text-nexus-secondary hover:text-nexus-text hover:bg-white/5',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (Component === 'a' || href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        className={combinedClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
