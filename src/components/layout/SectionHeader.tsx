import React from 'react';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
  align = 'left',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 sm:mb-16 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}>
      <div className={`flex items-center gap-2 mb-3 ${isCenter ? 'justify-center' : ''}`}>
        <span className="font-mono text-xs text-nexus-lime tracking-widest uppercase">
          // {number}
        </span>
        <div className="h-[1px] w-8 bg-nexus-lime/40" />
      </div>
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-nexus-text">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-nexus-muted leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};
