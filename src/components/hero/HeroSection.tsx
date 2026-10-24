import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin, Mail, GraduationCap, Download } from 'lucide-react';
import { Button } from '../ui/Button';
import { profileData } from '../../data/profile';

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const itemVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4,
        delay: shouldReduceMotion ? 0 : customDelay,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-border scroll-mt-20"
      aria-label="Tarun Gupta - Introduction"
    >
      {/* Red Ambient Atmospheric Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-accent/15 via-accent/5 to-transparent rounded-full blur-[120px] pointer-events-none animate-subtle-pulse -z-10" 
        aria-hidden="true" 
      />

      <div className="container-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Identity, Value Proposition, Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <motion.div
              custom={0.05}
              variants={itemVariant}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-border text-xs text-content-secondary mb-5 shadow-subtle"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-sans font-medium text-content-primary">MCA Candidate (GPA 8.54/10)</span>
              <span className="text-border-active">•</span>
              <span className="text-content-muted">Presidency University, Bengaluru</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              custom={0.12}
              variants={itemVariant}
              initial="hidden"
              animate="visible"
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-content-primary tracking-tight mb-3"
            >
              {profileData.name}
            </motion.h1>

            {/* Role Headline */}
            <motion.p
              custom={0.18}
              variants={itemVariant}
              initial="hidden"
              animate="visible"
              className="font-sans text-base sm:text-lg md:text-xl font-medium text-accent-text mb-4 tracking-tight"
            >
              {profileData.headline}
            </motion.p>

            {/* Value Statement */}
            <motion.p
              custom={0.24}
              variants={itemVariant}
              initial="hidden"
              animate="visible"
              className="font-sans text-base sm:text-lg text-content-secondary prose-measure mb-8 leading-relaxed"
            >
              "{profileData.bioIntro}"
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              custom={0.3}
              variants={itemVariant}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto"
            >
              <Button
                href="#projects"
                variant="primary"
                size="md"
                className="w-full sm:w-auto px-6 py-2.5 font-sans font-semibold text-sm"
                icon={<ArrowDown className="w-4 h-4" />}
              >
                View Projects
              </Button>

              <Button
                href="/Tarun_Gupta_Resume.pdf"
                download="Tarun_Gupta_Resume.pdf"
                variant="secondary"
                size="md"
                className="w-full sm:w-auto px-5 py-2.5 font-sans text-sm font-medium"
                icon={<Download className="w-4 h-4 text-accent-text" />}
                iconPosition="left"
              >
                Download Resume
              </Button>

              <Button
                href="#contact"
                variant="outline"
                size="md"
                className="w-full sm:w-auto px-5 py-2.5 font-sans text-sm"
                icon={<ArrowUpRight className="w-4 h-4 text-accent-text" />}
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Verified Direct Links */}
            <motion.div
              custom={0.36}
              variants={itemVariant}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4 pt-4 border-t border-border w-full text-xs font-sans text-content-secondary"
            >
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-0.5"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 text-content-muted" />
                <span>GitHub</span>
              </a>

              <span className="text-border">•</span>

              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-0.5"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-content-muted" />
                <span>LinkedIn</span>
              </a>

              <span className="text-border">•</span>

              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-0.5"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4 text-content-muted" />
                <span>{profileData.email}</span>
              </a>

              <span className="text-border">•</span>

              <span className="inline-flex items-center gap-1.5 text-content-muted">
                <MapPin className="w-4 h-4 text-accent-text" />
                <span>{profileData.location}</span>
              </span>
            </motion.div>
          </div>

          {/* Right Column: Verified Profile Portrait (5 cols) */}
          <motion.div
            custom={0.2}
            variants={itemVariant}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Refined Portrait Frame */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-surface-elevated border border-border shadow-card group hover:border-accent/50 hover:shadow-card-hover transition-all duration-300">
                <img
                  src={profileData.avatarPath}
                  alt="Portrait of Tarun Gupta"
                  width="400"
                  height="500"
                  decoding="async"
                  className="w-full h-full object-cover object-[center_20%] select-none transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="eager"
                />
                
                {/* Subtle bottom shadow vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-canvas/90 via-transparent to-transparent pointer-events-none" />
                
                {/* Embedded Credential Tag */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-surface/90 backdrop-blur-md border border-border text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap className="w-4 h-4 text-accent-text shrink-0" />
                    <span className="font-display font-semibold text-xs text-content-primary">
                      {profileData.currentDegree}
                    </span>
                  </div>
                  <p className="text-[11px] font-sans text-content-muted pl-6">
                    {profileData.currentUniversity} • {profileData.currentPeriod} {profileData.currentGpa && `(GPA ${profileData.currentGpa})`}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
