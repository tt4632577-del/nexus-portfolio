import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../layout/SectionHeader';
import { Server, Cpu, Compass, GraduationCap, Calendar, MapPin, CheckCircle2, Award, Languages } from 'lucide-react';
import { educationData, certificationsData, spokenLanguagesData } from '../../data/education';

export const AboutSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeIn = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.35,
        delay: shouldReduceMotion ? 0 : customDelay,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 border-b border-border scroll-mt-20"
      aria-label="About Tarun Gupta"
    >
      <div className="container-shell">
        <SectionHeader
          number="01"
          title="About & Engineering Focus"
          subtitle="MCA Candidate at Presidency University specializing in AI-integrated software, REST APIs, and scalable backend applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Exact Resume Narrative & Engineering Pillars (7 cols) */}
          <motion.div
            custom={0.1}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-content-secondary leading-relaxed font-sans text-base prose-measure">
              <p className="text-content-primary font-medium text-lg">
                I am an <strong className="text-white font-semibold">MCA student (GPA 8.54/10) at Presidency University</strong> with hands-on experience building AI-integrated applications using Java, Spring Boot, Python and React.
              </p>
              <p>
                Skilled in developing REST APIs, integrating LLM and machine learning models (Ollama, ONNX Runtime) and delivering full-stack projects, including a real-time phishing detection platform and a multilingual voice-first PWA.
              </p>
              <p>
                I use GenAI-assisted development tools to work efficiently while reviewing, testing and understanding all delivered code. Seeking an AI Engineer / App / Web Development internship to contribute to production-quality software and grow as an engineer.
              </p>
            </div>

            {/* Three Core Engineering Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-surface border border-border">
                <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-accent-text mb-3">
                  <Server className="w-4 h-4" />
                </div>
                <h4 className="font-display font-semibold text-sm text-content-primary mb-1">
                  Backend Systems
                </h4>
                <p className="text-xs text-content-muted leading-relaxed">
                  Spring Boot REST APIs, FastAPI inference services, and MySQL/MongoDB persistence.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-border">
                <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-white mb-3">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="font-display font-semibold text-sm text-content-primary mb-1">
                  AI & Intelligent ML
                </h4>
                <p className="text-xs text-content-muted leading-relaxed">
                  Ollama LLM integration, ONNX Runtime edge inference, OpenCV, and voice synthesis.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-border">
                <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-content-secondary mb-3">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="font-display font-semibold text-sm text-content-primary mb-1">
                  Modern Web & App
                </h4>
                <p className="text-xs text-content-muted leading-relaxed">
                  React 18 PWAs, Manifest V3 Chrome extensions, and Vaadin full-stack UI design.
                </p>
              </div>
            </div>

            {/* Spoken Languages Card */}
            <div className="p-4 rounded-xl bg-surface border border-border">
              <div className="flex items-center gap-2 mb-2.5">
                <Languages className="w-4 h-4 text-accent-text shrink-0" />
                <h4 className="font-display font-semibold text-sm text-content-primary">
                  Spoken Languages
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {spokenLanguagesData.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 rounded-md bg-surface-elevated border border-border text-xs font-sans text-content-primary"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Academic Trajectory & Certifications (5 cols) */}
          <motion.div
            custom={0.2}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="lg:col-span-5 w-full space-y-5"
          >
            {/* Education Card */}
            <div className="rounded-2xl bg-surface border border-border p-5 sm:p-6 shadow-card space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-accent-text" />
                  <span className="font-display font-bold text-sm text-content-primary">
                    Education
                  </span>
                </div>
                <span className="text-[11px] font-sans text-content-muted">
                  Formal Qualifications
                </span>
              </div>

              <div className="space-y-4">
                {educationData.map((edu) => {
                  const isCurrent = edu.status === 'Current';
                  return (
                    <div
                      key={edu.degree}
                      className={`p-4 rounded-xl border transition-colors ${
                        isCurrent
                          ? 'bg-surface-elevated border-border-active'
                          : 'bg-surface-subtle/50 border-border/80'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-display font-bold text-sm text-content-primary leading-tight">
                          {edu.degree}
                        </span>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {edu.gpa && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                              GPA {edu.gpa}
                            </span>
                          )}
                          <span
                            className={`text-[10px] font-sans px-2 py-0.5 rounded-full font-medium ${
                              isCurrent
                                ? 'bg-accent-subtle text-accent-text border border-accent-border'
                                : 'bg-surface text-content-muted border border-border'
                            }`}
                          >
                            {isCurrent ? 'Current' : 'Completed'}
                          </span>
                        </div>
                      </div>

                      <div className="text-xs font-medium text-accent-text mb-2">
                        {edu.institution}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-[11px] text-content-muted mb-2.5">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-content-muted" />
                          <span>{edu.period}</span>
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-content-muted" />
                          <span>{edu.location}</span>
                        </span>
                      </div>

                      <p className="text-xs text-content-secondary leading-relaxed pt-2 border-t border-border/60">
                        {edu.focus}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 flex items-center gap-2 text-[11px] text-content-muted">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-text shrink-0" />
                <span>Verified academic records from Presidency University & VSKU Ballari</span>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="rounded-2xl bg-surface border border-border p-5 sm:p-6 shadow-card space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent-text" />
                  <span className="font-display font-bold text-sm text-content-primary">
                    Certifications
                  </span>
                </div>
                <span className="text-[11px] font-sans text-content-muted">
                  Technical Credentials
                </span>
              </div>

              <div className="space-y-2.5">
                {certificationsData.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-surface-elevated/70 border border-border text-xs font-medium text-content-primary"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-text shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
