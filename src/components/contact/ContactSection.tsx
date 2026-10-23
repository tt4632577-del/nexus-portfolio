import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../layout/SectionHeader';
import { profileData } from '../../data/profile';
import { Mail, Linkedin, Github, Copy, Check, MapPin, Terminal } from 'lucide-react';
import { Button } from '../ui/Button';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    // Copy placeholder address
    navigator.clipboard.writeText(profileData.emailPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
      aria-label="Contact and Networking"
    >
      <SectionHeader
        number="06"
        title="Have a problem worth building for?"
        subtitle="I'm interested in software development, AI-driven applications, and opportunities to build useful technology."
        align="center"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-nexus-surface border border-nexus-border p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-nexus-lime/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-nexus-cyan/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8 text-center">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nexus-card border border-nexus-border text-xs font-mono text-nexus-muted">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nexus-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-nexus-lime"></span>
              </span>
              <span>Open for Software Engineering & AI Internships</span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-nexus-text max-w-xl mx-auto">
              Let's connect and discuss building impactful software.
            </h3>

            <p className="font-sans text-sm sm:text-base text-nexus-muted max-w-lg mx-auto leading-relaxed">
              Whether you are looking for an MCA intern, exploring Java backend engineering, or want to collaborate on applied machine learning projects, I'd welcome the conversation.
            </p>

            {/* Email Channel Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-nexus-card border border-nexus-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-lg mx-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-nexus-surface border border-nexus-border flex items-center justify-center text-nexus-lime shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-mono text-nexus-dim uppercase tracking-wider">
                    Direct Contact / Inquiries
                  </div>
                  <div className="font-mono text-xs sm:text-sm text-nexus-text font-medium select-all break-all">
                    {profileData.emailPlaceholder}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-4 py-2 rounded-lg bg-nexus-surface hover:bg-white/5 border border-nexus-border hover:border-nexus-lime/50 text-xs font-mono text-nexus-text hover:text-nexus-lime transition-all flex items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-nexus-lime"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-nexus-lime" />
                    <span className="text-nexus-lime">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Verified External Channels */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                icon={<Linkedin className="w-4 h-4" />}
                iconPosition="left"
              >
                Connect on LinkedIn
              </Button>

              <Button
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                icon={<Github className="w-4 h-4" />}
                iconPosition="left"
              >
                Follow on GitHub
              </Button>
            </div>

            {/* Location & Academic Base Note */}
            <div className="pt-6 border-t border-nexus-border/60 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-nexus-dim">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-nexus-lime" />
                Bengaluru, Karnataka, India
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-nexus-cyan" />
                Presidency University MCA (2025–2027)
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
