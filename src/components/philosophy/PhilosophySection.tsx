import React from 'react';
import { motion } from 'framer-motion';
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
  return (
    <section
      id="philosophy"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-nexus-border/40 relative"
      aria-label="Development Philosophy"
    >
      <SectionHeader
        number="05"
        title="Engineering Philosophy"
        subtitle="Core principles guiding how I conceptualize, architect, and ship software systems."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {principles.map((principle, idx) => {
          const Icon = principle.icon;

          return (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl bg-nexus-surface border border-nexus-border p-6 sm:p-8 hover:border-nexus-lime/30 transition-all duration-300 group shadow-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-nexus-card border border-nexus-border flex items-center justify-center text-nexus-lime group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-nexus-lime bg-nexus-lime/10 px-2.5 py-0.5 rounded-full border border-nexus-lime/20">
                    {principle.tag}
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-mono text-xs text-nexus-dim">{principle.number}.</span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-nexus-text group-hover:text-nexus-lime transition-colors">
                    {principle.title}
                  </h3>
                </div>

                <p className="text-sm text-nexus-muted leading-relaxed font-sans">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
