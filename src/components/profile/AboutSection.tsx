import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../layout/SectionHeader';
import { ProfileCard } from './ProfileCard';
import { Badge } from '../ui/Badge';
import { Cpu, Server, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-nexus-border relative scroll-mt-24"
      aria-label="About Tarun Gupta"
    >
      <SectionHeader
        number="01"
        title="A Developer Who Builds With Purpose"
        subtitle="Bridging reliable backend software engineering with practical, intelligent AI systems."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Authentic Profile Card with Original Photo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 max-w-md mx-auto w-full lg:sticky lg:top-24"
        >
          <ProfileCard />
        </motion.div>

        {/* Right Column: Editorial Biography & Technical Focus */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-8"
        >
          {/* Narrative Paragraphs */}
          <div className="space-y-5 text-nexus-text/90 leading-relaxed font-sans text-base sm:text-lg">
            <p>
              I am an <strong className="text-white font-semibold">MCA student at Presidency University, Bengaluru</strong>, specializing in software development, backend engineering, and applied artificial intelligence.
            </p>
            <p className="text-nexus-secondary">
              My engineering focus is centered on combining foundational programming principles with intelligent systems to create software that solves genuine, day-to-day challenges. Rather than chasing fleeting AI hype, I build dependable tools—ranging from offline desktop assistants and perimeter video intelligence to public-service accessibility applications.
            </p>
            <p className="text-nexus-secondary">
              I hold a Bachelor of Computer Applications from Vijayanagara Sri Krishnadevaraya University, Ballari, where I developed strong core capabilities in object-oriented programming, data structures, and database management. Currently, I am expanding those foundations into modern microservice design, edge inference, and enterprise systems.
            </p>
          </div>

          {/* Core Engineering Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-nexus-surface border border-nexus-border hover:border-nexus-borderAccent transition-colors">
              <div className="w-8 h-8 rounded-lg bg-nexus-elevated border border-nexus-border flex items-center justify-center text-nexus-crimson mb-3">
                <Server className="w-4 h-4" />
              </div>
              <h4 className="font-display font-semibold text-sm text-nexus-text mb-1">
                Backend Systems
              </h4>
              <p className="text-xs text-nexus-muted leading-relaxed">
                Clean Java architectures, Spring Boot services, and reliable RESTful API communication.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-nexus-surface border border-nexus-border hover:border-nexus-borderAccent transition-colors">
              <div className="w-8 h-8 rounded-lg bg-nexus-elevated border border-nexus-border flex items-center justify-center text-white mb-3">
                <Cpu className="w-4 h-4" />
              </div>
              <h4 className="font-display font-semibold text-sm text-nexus-text mb-1">
                Applied AI & ML
              </h4>
              <p className="text-xs text-nexus-muted leading-relaxed">
                Computer vision pipelines, local speech synthesis, and edge neural model integrations.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-nexus-surface border border-nexus-border hover:border-nexus-borderAccent transition-colors">
              <div className="w-8 h-8 rounded-lg bg-nexus-elevated border border-nexus-border flex items-center justify-center text-nexus-secondary mb-3">
                <Compass className="w-4 h-4" />
              </div>
              <h4 className="font-display font-semibold text-sm text-nexus-text mb-1">
                Purposeful Design
              </h4>
              <p className="text-xs text-nexus-muted leading-relaxed">
                Pragmatic problem-solving focused on real utility, accessibility, and high reliability.
              </p>
            </div>
          </div>

          {/* Academic Milestone Summary Callout */}
          <div className="p-5 rounded-xl bg-nexus-surface border border-nexus-border">
            <div className="text-xs font-mono text-nexus-crimson uppercase tracking-widest mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Academic Alignment & Current Status</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="font-display font-bold text-nexus-text">
                  Master of Computer Applications (MCA)
                </div>
                <div className="text-xs text-nexus-secondary">
                  Presidency University, Bengaluru • 2025–2027
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="crimson">Enrolled</Badge>
                <Badge variant="neutral">Bengaluru, India</Badge>
              </div>
            </div>
          </div>

          {/* Quick link to philosophy */}
          <div className="pt-2 flex items-center gap-2">
            <a
              href="#philosophy"
              className="inline-flex items-center gap-2 text-xs font-mono text-nexus-crimson hover:text-nexus-crimsonBright transition-colors group"
            >
              <span>Explore my development philosophy</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
