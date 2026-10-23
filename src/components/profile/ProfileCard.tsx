import React from 'react';
import { MapPin, GraduationCap, Code2, Github, Linkedin, CheckCircle2 } from 'lucide-react';
import { profileData } from '../../data/profile';

export const ProfileCard: React.FC = () => {
  return (
    <div className="relative rounded-2xl bg-nexus-surface border border-nexus-border/80 p-5 sm:p-7 shadow-2xl backdrop-blur-sm group hover:border-nexus-lime/40 transition-all duration-300 max-w-[340px] sm:max-w-none mx-auto">
      
      {/* Top Status & Verification Pill */}
      <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-nexus-border/60">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nexus-lime opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-nexus-lime"></span>
          </span>
          <span className="font-mono text-xs text-nexus-muted">Identity Verified</span>
        </div>
        <div className="flex items-center gap-1 font-mono text-[11px] text-nexus-lime bg-nexus-lime/10 px-2.5 py-0.5 rounded-full border border-nexus-lime/20">
          <CheckCircle2 className="w-3 h-3" />
          <span>NEXUS // 2026</span>
        </div>
      </div>

      {/* Clean Rectangular Image Frame Preserving Original Photograph */}
      <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-nexus-border bg-nexus-card mb-6 shadow-inner">
        <img
          src={profileData.avatarPath}
          alt="Portrait of Tarun Gupta"
          className="w-full h-full object-cover object-[center_20%] select-none transition-transform duration-500 group-hover:scale-[1.01]"
          loading="eager"
        />
        {/* Subtle accent corner marks */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-nexus-lime/60 pointer-events-none" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-nexus-lime/60 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-nexus-lime/60 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-nexus-lime/60 pointer-events-none" />
      </div>

      {/* Identity Info */}
      <div className="space-y-3">
        <div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-nexus-text group-hover:text-nexus-lime transition-colors">
            {profileData.name}
          </h3>
          <p className="font-mono text-xs text-nexus-lime tracking-wide mt-0.5">
            Software Developer
          </p>
        </div>

        <div className="space-y-2 pt-2 border-t border-nexus-border/60 text-xs text-nexus-muted font-sans">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-nexus-cyan shrink-0" />
            <span>MCA Student, Presidency University</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-nexus-lime shrink-0" />
            <span>Bengaluru, Karnataka, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-nexus-dim shrink-0" />
            <span>Java • Spring Boot • Applied AI/ML</span>
          </div>
        </div>

        {/* Quick Social Links */}
        <div className="pt-4 flex items-center gap-3">
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-nexus-card border border-nexus-border hover:border-nexus-lime/50 text-xs font-mono text-nexus-text hover:text-nexus-lime transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-nexus-lime"
            aria-label="Tarun Gupta on GitHub"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={profileData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-nexus-card border border-nexus-border hover:border-nexus-lime/50 text-xs font-mono text-nexus-text hover:text-nexus-lime transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-nexus-lime"
            aria-label="Tarun Gupta on LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};
