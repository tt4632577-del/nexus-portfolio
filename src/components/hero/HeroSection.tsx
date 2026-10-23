import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin, Terminal, Sparkles } from 'lucide-react';
import { HeroCanvas } from './HeroCanvas';
import { Button } from '../ui/Button';
import { profileData } from '../../data/profile';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Tarun Gupta - Hero Presentation"
    >
      {/* 3D Geometric Interactive Background */}
      <HeroCanvas />

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        
        {/* Telemetry Capsule Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex max-w-[95vw] items-center gap-2.5 px-3 py-1.5 rounded-full bg-nexus-surface/90 border border-nexus-border backdrop-blur-md mb-6 shadow-card hover:border-nexus-lime/40 transition-colors"
        >
          {/* Subtle profile thumbnail badge */}
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden border border-nexus-lime/50 shrink-0">
            <img
              src={profileData.avatarPath}
              alt="Portrait of Tarun Gupta"
              className="w-full h-full object-cover object-[center_20%]"
            />
          </div>

          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-mono truncate">
            <span className="text-nexus-lime font-semibold shrink-0">// NEXUS</span>
            <span className="text-nexus-border">|</span>
            <span className="text-nexus-muted truncate">MCA @ Presidency University</span>
          </div>

          <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono text-nexus-dim pl-2 border-l border-nexus-border shrink-0">
            <MapPin className="w-3 h-3 text-nexus-cyan" />
            Bengaluru
          </span>
        </motion.div>

        {/* Primary Name Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <h1 className="font-display font-extrabold text-3xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-nexus-text mb-4 break-words">
            TARUN <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexus-lime via-white to-nexus-cyan">GUPTA</span>
          </h1>
        </motion.div>

        {/* Professional Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg md:text-xl font-medium text-nexus-text/90 mb-6 font-display"
        >
          <span className="text-nexus-lime">Software Developer</span>
          <span className="text-nexus-dim">•</span>
          <span className="text-white">Java Developer</span>
          <span className="text-nexus-dim">•</span>
          <span className="text-nexus-cyan">AI & Machine Learning Enthusiast</span>
        </motion.div>

        {/* Introduction Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-base sm:text-lg text-nexus-muted max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          {profileData.bioIntro}
        </motion.p>

        {/* Action Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <Button
            href="#projects"
            variant="primary"
            size="lg"
            icon={<ArrowDown className="w-4 h-4" />}
          >
            Explore My Work
          </Button>

          <Button
            href="#contact"
            variant="secondary"
            size="lg"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Let's Connect
          </Button>

          <Button
            href={profileData.githubUrl}
            target="_blank"
            variant="outline"
            size="lg"
            icon={<Github className="w-4 h-4" />}
            iconPosition="left"
          >
            GitHub
          </Button>

          <Button
            href={profileData.linkedinUrl}
            target="_blank"
            variant="outline"
            size="lg"
            icon={<Linkedin className="w-4 h-4" />}
            iconPosition="left"
          >
            LinkedIn
          </Button>
        </motion.div>

        {/* Verified Systems Telemetry */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto w-full text-left"
        >
          <div className="p-3 rounded-lg bg-nexus-surface/60 border border-nexus-border/60 backdrop-blur-sm">
            <div className="text-[10px] font-mono text-nexus-dim uppercase tracking-wider mb-1 flex items-center gap-1">
              <Terminal className="w-3 h-3 text-nexus-lime" />
              Primary Core
            </div>
            <div className="text-xs sm:text-sm font-semibold text-nexus-text">
              Java & Spring Boot
            </div>
          </div>

          <div className="p-3 rounded-lg bg-nexus-surface/60 border border-nexus-border/60 backdrop-blur-sm">
            <div className="text-[10px] font-mono text-nexus-dim uppercase tracking-wider mb-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-nexus-cyan" />
              Applied Focus
            </div>
            <div className="text-xs sm:text-sm font-semibold text-nexus-text">
              Vision & Local LLMs
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 p-3 rounded-lg bg-nexus-surface/60 border border-nexus-border/60 backdrop-blur-sm">
            <div className="text-[10px] font-mono text-nexus-dim uppercase tracking-wider mb-1 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-nexus-lime" />
              Base Location
            </div>
            <div className="text-xs sm:text-sm font-semibold text-nexus-text">
              Bengaluru, India
            </div>
          </div>
        </motion.div>

      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group cursor-pointer text-nexus-dim hover:text-nexus-lime transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-nexus-lime rounded-full p-2"
        aria-label="Scroll down to About section"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-nexus-dim group-hover:text-nexus-lime transition-colors">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-nexus-border group-hover:border-nexus-lime/60 flex items-start justify-center p-1 transition-colors">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-nexus-lime"
          />
        </div>
      </motion.a>
    </section>
  );
};
