import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../layout/SectionHeader';
import { educationData } from '../../data/education';
import { GraduationCap, MapPin, Calendar, CheckCircle2, BookOpen } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const EducationSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-nexus-border relative scroll-mt-24"
      aria-label="Academic Background"
    >
      <SectionHeader
        number="04"
        title="Academic Foundations"
        subtitle="Formal academic trajectory in Computer Applications and advanced software engineering."
      />

      <div className="max-w-4xl mx-auto space-y-8">
        {educationData.map((edu, idx) => {
          const isCurrent = edu.status === 'Current';

          return (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : idx * 0.15 }}
              className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 relative overflow-hidden group shadow-card ${
                isCurrent
                  ? 'bg-nexus-surface border-nexus-crimson/50 hover:border-nexus-crimson'
                  : 'bg-nexus-surface/80 border-nexus-border hover:border-nexus-borderAccent'
              }`}
            >
              {/* Top Accent Line for Current Enrollment */}
              {isCurrent && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-nexus-crimson via-nexus-crimsonBright to-transparent" />
              )}

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                      isCurrent
                        ? 'bg-nexus-elevated border-nexus-crimson/40 text-nexus-crimson'
                        : 'bg-nexus-elevated border-nexus-border text-nexus-muted group-hover:text-nexus-text'
                    }`}
                  >
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-nexus-text group-hover:text-white transition-colors">
                        {edu.degree}
                      </h3>
                      {isCurrent ? (
                        <Badge variant="crimson">Enrolled</Badge>
                      ) : (
                        <Badge variant="neutral">Conferred</Badge>
                      )}
                    </div>
                    <div className="font-sans text-base text-nexus-crimsonBright font-medium">
                      {edu.institution}
                    </div>
                  </div>
                </div>

                {/* Period & Location Badge */}
                <div className="flex flex-row md:flex-col items-start md:items-end gap-2 text-xs font-mono text-nexus-dim">
                  <div className="flex items-center gap-1.5 bg-nexus-elevated px-3 py-1 rounded-md border border-nexus-border">
                    <Calendar className="w-3.5 h-3.5 text-nexus-crimson" />
                    <span className="text-nexus-secondary">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-nexus-elevated px-3 py-1 rounded-md border border-nexus-border">
                    <MapPin className="w-3.5 h-3.5 text-nexus-muted" />
                    <span className="text-nexus-muted">{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Focus Summary */}
              <div className="pt-4 border-t border-nexus-border/60 flex items-start gap-3">
                <BookOpen className="w-4 h-4 text-nexus-crimson shrink-0 mt-0.5" />
                <p className="text-sm text-nexus-secondary leading-relaxed font-sans">
                  {edu.focus}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Verified Statement */}
      <div className="max-w-4xl mx-auto mt-8 p-4 rounded-xl bg-nexus-surface/60 border border-nexus-border text-center">
        <p className="text-xs font-mono text-nexus-muted flex items-center justify-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-nexus-crimson" />
          <span>Verified institutional records from Presidency University & VSKU Ballari</span>
        </p>
      </div>
    </section>
  );
};
