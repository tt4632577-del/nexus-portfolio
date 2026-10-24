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
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-10 sm:mb-12 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}
    >
      <div className={`flex items-center gap-2.5 mb-2.5 ${isCenter ? 'justify-center' : ''}`}>
        <span className="font-mono text-xs font-semibold text-accent-text tracking-wider uppercase">
          {number}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
      </div>
      <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-content-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2.5 text-sm sm:text-base text-content-secondary leading-relaxed prose-measure">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
