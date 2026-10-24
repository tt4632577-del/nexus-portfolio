import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../layout/SectionHeader';
import { Target, Hammer, Wrench, ShieldCheck } from 'lucide-react';

const principles = [
  {
    icon: Target,
    number: '01',
    title: 'Solve Practical Problems',
    description:
      'Code creates real value when it addresses tangible challenges—such as perimeter surveillance automation or multilingual public welfare accessibility—rather than abstract vanity metrics.',
    tag: 'Problem-First',
  },
  {
    icon: Hammer,
    number: '02',
    title: 'Build Useful Software',
    description:
      'A completed, dependable utility that works consistently beats an over-engineered proof-of-concept. I prioritize rock-solid error handling, predictable performance, and intuitive usability.',
    tag: 'Reliability',
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Learn by Implementing',
    description:
      'Theoretical knowledge gains depth through hands-on implementation. Building end-to-end applications forces confrontation with real bottlenecks, memory leaks, concurrency, and edge conditions.',
    tag: 'Empirical Mastery',
  },
  {
    icon: ShieldCheck,
    number: '04',
    title: 'Grounded Intelligent Systems',
    description:
      'Machine learning models are only as powerful as the software engineering surrounding them. I integrate neural models inside robust, typed backend services with strict validation boundaries.',
    tag: 'Systems Architecture',
  },
];

export const PhilosophySection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="philosophy"
      className="py-16 sm:py-20 md:py-24 border-b border-border scroll-mt-20"
      aria-label="Development Philosophy"
    >
      <div className="container-shell">
        <SectionHeader
          number="04"
          title="Engineering Philosophy"
          subtitle="Core principles guiding how I conceptualize, architect, and ship software systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {principles.map((principle, idx) => {
            const Icon = principle.icon;

            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.25, delay: shouldReduceMotion ? 0 : idx * 0.05 }}
                className="rounded-2xl bg-surface border border-border p-5 sm:p-6 hover:border-border-active transition-colors shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-accent-text">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-sans text-[11px] font-medium text-accent-text bg-accent-subtle px-2 py-0.5 rounded border border-accent-border">
                      {principle.tag}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-mono text-xs text-content-muted">{principle.number}.</span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-content-primary">
                      {principle.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed font-sans">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
