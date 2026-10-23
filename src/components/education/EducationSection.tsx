import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../layout/SectionHeader';
import { educationData } from '../../data/education';
import { GraduationCap, MapPin, Calendar, CheckCircle2, BookOpen } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-nexus-border/40 relative"
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 relative overflow-hidden ${
                isCurrent
                  ? 'bg-nexus-surface border-nexus-lime/40 shadow-card'
                  : 'bg-nexus-surface/60 border-nexus-border'
              }`}
            >
              {/* Top Accent Line for Current Enrollment */}
              {isCurrent && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-nexus-lime to-nexus-cyan" />
              )}

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
                      isCurrent
                        ? 'bg-nexus-lime/10 border-nexus-lime/40 text-nexus-lime'
                        : 'bg-nexus-card border-nexus-border text-nexus-muted'
                    }`}
                  >
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-nexus-text">
                        {edu.degree}
                      </h3>
                      {isCurrent ? (
                        <Badge variant="lime">Enrolled</Badge>
                      ) : (
                        <Badge variant="neutral">Conferred</Badge>
                      )}
                    </div>
                    <div className="font-sans text-base text-nexus-lime/90 font-medium">
                      {edu.institution}
                    </div>
                  </div>
                </div>

                {/* Period & Location Badge */}
                <div className="flex flex-row md:flex-col items-start md:items-end gap-2 text-xs font-mono text-nexus-dim">
                  <div className="flex items-center gap-1.5 bg-nexus-card px-3 py-1 rounded-md border border-nexus-border">
                    <Calendar className="w-3.5 h-3.5 text-nexus-lime" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-nexus-card px-3 py-1 rounded-md border border-nexus-border">
                    <MapPin className="w-3.5 h-3.5 text-nexus-cyan" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Focus Summary */}
              <div className="pt-4 border-t border-nexus-border/60 flex items-start gap-3">
                <BookOpen className="w-4 h-4 text-nexus-lime shrink-0 mt-0.5" />
                <p className="text-sm text-nexus-muted leading-relaxed font-sans">
                  {edu.focus}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Verified Statement */}
      <div className="max-w-4xl mx-auto mt-8 p-4 rounded-xl bg-nexus-card/40 border border-nexus-border/40 text-center">
        <p className="text-xs font-mono text-nexus-dim flex items-center justify-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-nexus-lime" />
          <span>Verified institutional records from Presidency University & VSKU Ballari</span>
        </p>
      </div>
    </section>
  );
};
