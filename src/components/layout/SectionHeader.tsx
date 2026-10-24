import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

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
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 sm:mb-16 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}
    >
      <div className={`flex items-center gap-2 mb-3 ${isCenter ? 'justify-center' : ''}`}>
        <span className="font-mono text-xs text-nexus-crimson tracking-widest uppercase">
          // {number}
        </span>
        <div className="h-[1px] w-12 bg-gradient-to-r from-nexus-crimson to-transparent relative overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-nexus-crimsonBright animate-line-pulse" />
        </div>
      </div>
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-nexus-text">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-nexus-secondary leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
