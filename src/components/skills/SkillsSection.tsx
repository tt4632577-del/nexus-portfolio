import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../layout/SectionHeader';
import { skillsData, skillCategories } from '../../data/skills';
import { Code, Server, Cpu, Database, Wrench, Sparkles, Terminal } from 'lucide-react';

const categoryIcons = {
  Programming: Code,
  Backend: Server,
  'AI & Intelligent Systems': Cpu,
  Databases: Database,
  'Tools & Platforms': Wrench,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = selectedCategory
    ? skillCategories.filter((c) => c.category === selectedCategory)
    : skillCategories;

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-nexus-border relative scroll-mt-24"
      aria-label="Technical Skills"
    >
      <SectionHeader
        number="02"
        title="Technical Capabilities"
        subtitle="Curated core technologies spanning systems engineering, backend frameworks, and intelligent algorithms."
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          type="button"
          onClick={() => setSelectedCategory(null)}
          className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-nexus-crimson ${
            selectedCategory === null
              ? 'bg-nexus-crimson text-white font-semibold shadow-sm'
              : 'bg-nexus-surface border border-nexus-border text-nexus-secondary hover:text-white'
          }`}
        >
          All Domains ({skillsData.length})
        </button>

        {skillCategories.map((cat) => {
          const count = skillsData.filter((s) => s.category === cat.category).length;
          const isSelected = selectedCategory === cat.category;
          return (
            <button
              key={cat.category}
              type="button"
              onClick={() => setSelectedCategory(isSelected ? null : cat.category)}
              className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-nexus-crimson ${
                isSelected
                  ? 'bg-nexus-crimson text-white font-semibold shadow-sm'
                  : 'bg-nexus-surface border border-nexus-border text-nexus-secondary hover:text-white'
              }`}
            >
              {cat.title} ({count})
            </button>
          );
        })}
      </div>

      {/* Categorized Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((cat, idx) => {
          const Icon = categoryIcons[cat.category] || Terminal;
          const categorySkills = skillsData.filter((s) => s.category === cat.category);

          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-2xl bg-nexus-surface border border-nexus-border p-6 flex flex-col justify-between hover:border-nexus-borderAccent transition-all duration-300 group shadow-card"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-nexus-elevated border border-nexus-border flex items-center justify-center text-nexus-crimson group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] text-nexus-dim uppercase tracking-wider">
                    // 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-nexus-text mb-2 group-hover:text-nexus-crimsonBright transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-nexus-secondary leading-relaxed mb-6 font-sans">
                  {cat.description}
                </p>
              </div>

              {/* Skills Badges Matrix */}
              <div className="pt-4 border-t border-nexus-border/60">
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all ${
                        skill.highlight
                          ? 'bg-nexus-elevated border-nexus-crimson/40 text-white hover:border-nexus-crimson'
                          : 'bg-nexus-surface border-nexus-border text-nexus-secondary hover:text-white'
                      }`}
                    >
                      {skill.highlight && (
                        <Sparkles className="w-3 h-3 text-nexus-crimson shrink-0" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Technical Philosophy Note */}
      <div className="mt-10 p-5 rounded-xl bg-nexus-surface border border-nexus-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-nexus-dim">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-nexus-crimson shrink-0" />
          <span className="text-nexus-secondary">Continuous Engineering: Focused on building robust, typed, and production-tested systems.</span>
        </div>
        <div className="text-nexus-muted">
          All skills verified through real implementations
        </div>
      </div>
    </section>
  );
};
