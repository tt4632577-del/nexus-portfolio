import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../layout/SectionHeader';
import { skillsData, skillCategories } from '../../data/skills';
import { Code, Server, AppWindow, Brain, Database, Wrench, Layers, CheckCircle2 } from 'lucide-react';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Languages: Code,
  Backend: Server,
  'Frontend & App': AppWindow,
  'AI / ML & GenAI': Brain,
  Databases: Database,
  Tools: Wrench,
  'Core Concepts': Layers,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const filteredCategories = selectedCategory
    ? skillCategories.filter((c) => c.category === selectedCategory)
    : skillCategories;

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 md:py-24 border-b border-border scroll-mt-20"
      aria-label="Technical Skills"
    >
      <div className="container-shell">
        <SectionHeader
          number="02"
          title="Technical Capabilities"
          subtitle="Curated core technologies spanning systems engineering, backend frameworks, and intelligent algorithms."
        />

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            type="button"
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1.5 rounded-lg font-sans text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer ${
              selectedCategory === null
                ? 'bg-accent text-white font-semibold shadow-subtle'
                : 'bg-surface border border-border text-content-secondary hover:text-content-primary hover:bg-surface-elevated'
            }`}
          >
            All Disciplines ({skillsData.length})
          </button>

          {skillCategories.map((cat) => {
            const count = skillsData.filter((s) => s.category === cat.category).length;
            const isSelected = selectedCategory === cat.category;
            return (
              <button
                key={cat.category}
                type="button"
                onClick={() => setSelectedCategory(isSelected ? null : cat.category)}
                className={`px-3 py-1.5 rounded-lg font-sans text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer ${
                  isSelected
                    ? 'bg-accent text-white font-semibold shadow-subtle'
                    : 'bg-surface border border-border text-content-secondary hover:text-content-primary hover:bg-surface-elevated'
                }`}
              >
                {cat.title} ({count})
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((cat, idx) => {
            const Icon = categoryIcons[cat.category] || Code;
            const categorySkills = skillsData.filter((s) => s.category === cat.category);

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.25, delay: shouldReduceMotion ? 0 : idx * 0.05 }}
                className="rounded-2xl bg-surface border border-border p-5 sm:p-6 flex flex-col justify-between hover:border-border-active transition-colors shadow-subtle"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-accent-text shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-base text-content-primary">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-xs text-content-muted leading-relaxed mb-5 font-sans">
                    {cat.description}
                  </p>
                </div>

                {/* Skill Chips Matrix (No percentage bars) */}
                <div className="pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                          skill.highlight
                            ? 'bg-surface-elevated border border-accent-border text-content-primary font-medium'
                            : 'bg-surface-subtle/70 border border-border text-content-secondary'
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quality Statement */}
        <div className="mt-8 p-4 rounded-xl bg-surface border border-border flex items-center gap-2.5 text-xs text-content-muted">
          <CheckCircle2 className="w-4 h-4 text-accent-text shrink-0" />
          <span>Every skill demonstrated through practical implementations in active projects and repositories.</span>
        </div>
      </div>
    </section>
  );
};
