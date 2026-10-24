import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../layout/SectionHeader';
import { profileData } from '../../data/profile';
import { Mail, Linkedin, Github, Copy, Check, MapPin, Terminal, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export const ContactSection: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const shouldReduceMotion = useReducedMotion();

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(profileData.email);
        setCopyStatus('copied');
        setTimeout(() => setCopyStatus('idle'), 3000);
        return;
      }
      // Fallback for older browsers or restricted clipboard contexts
      const textArea = document.createElement('textarea');
      textArea.value = profileData.email;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      textArea.setAttribute('readonly', '');
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      if (successful) {
        setCopyStatus('copied');
        setTimeout(() => setCopyStatus('idle'), 3000);
      } else {
        setCopyStatus('error');
      }
    } catch {
      setCopyStatus('error');
    }
  };

  const mailtoHref = `mailto:${profileData.email}?subject=Portfolio%20Inquiry%20%E2%80%94%20Tarun%20Gupta`;

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative scroll-mt-24"
      aria-label="Contact and Networking"
    >
      <SectionHeader
        number="06"
        title="Get in Touch"
        subtitle="Direct channel for engineering opportunities, technical discussions, and professional inquiries."
        align="center"
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="rounded-3xl bg-nexus-surface border border-nexus-border p-6 sm:p-12 shadow-2xl relative overflow-hidden group hover:border-nexus-borderAccent transition-colors"
        >
          {/* Subtle Ambient Crimson Glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-nexus-crimson/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 bg-nexus-crimsonMuted blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-8 text-center">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nexus-elevated border border-nexus-border text-xs font-mono text-nexus-secondary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nexus-crimson opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-nexus-crimson"></span>
              </span>
              <span>Open for Software Engineering Opportunities</span>
            </div>

            {/* Requested Master Prompt Heading */}
            <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white max-w-xl mx-auto tracking-tight">
              LET'S BUILD SOMETHING MEANINGFUL.
            </h3>

            {/* Requested Supporting Text */}
            <p className="font-sans text-sm sm:text-base text-nexus-secondary max-w-lg mx-auto leading-relaxed">
              "I'm interested in software development, AI-driven applications, and opportunities to build useful technology. Feel free to contact me."
            </p>

            {/* Interactive Email Showcase Card */}
            <div className="p-4 sm:p-6 rounded-2xl bg-nexus-elevated border border-nexus-border flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto text-left shadow-card">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="w-12 h-12 rounded-xl bg-nexus-surface border border-nexus-border flex items-center justify-center text-nexus-crimson shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-mono text-nexus-muted uppercase tracking-wider">
                    Professional Contact Email
                  </div>
                  <div className="font-mono text-sm sm:text-base text-white font-medium select-all break-all tracking-wide">
                    {profileData.email}
                  </div>
                </div>
              </div>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto shrink-0 px-4 py-2.5 rounded-lg bg-nexus-surface hover:bg-nexus-surfaceHover border border-nexus-border hover:border-nexus-borderAccent text-xs font-mono text-nexus-text hover:text-white transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-nexus-crimson cursor-pointer"
                aria-label="Copy email address"
              >
                {copyStatus === 'copied' ? (
                  <>
                    <Check className="w-4 h-4 text-nexus-crimsonBright" />
                    <span className="text-nexus-crimsonBright font-semibold">Email copied!</span>
                  </>
                ) : copyStatus === 'error' ? (
                  <>
                    <AlertCircle className="w-4 h-4 text-nexus-crimson" />
                    <span className="text-nexus-secondary">Select to copy</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-nexus-muted" />
                    <span className="font-medium">COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>

            {/* Accessible Confirmation Banner for Screen Readers */}
            <div aria-live="polite" className="sr-only">
              {copyStatus === 'copied' && 'Email address tt4632577@gmail.com successfully copied to clipboard.'}
              {copyStatus === 'error' && 'Clipboard access unavailable. Please select and copy tt4632577@gmail.com manually.'}
            </div>

            {/* Primary Action: Send Me an Email Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                href={mailtoHref}
                variant="primary"
                size="lg"
                icon={<Mail className="w-4 h-4" />}
                iconPosition="left"
                className="w-full sm:w-auto font-mono tracking-wider uppercase text-xs sm:text-sm px-8 py-3.5"
              >
                SEND ME AN EMAIL
              </Button>
            </div>

            {/* Notice clarifying email application handler */}
            <p className="text-[11px] font-mono text-nexus-muted">
              Opens your default email application. Review and dispatch the message at your convenience.
            </p>

            {/* Direct Verified Social Profiles */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-nexus-border/60">
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-nexus-elevated border border-nexus-border hover:border-nexus-borderAccent text-xs font-mono text-nexus-secondary hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-nexus-crimson"
                aria-label="Tarun Gupta on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-nexus-crimson" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-nexus-elevated border border-nexus-border hover:border-nexus-borderAccent text-xs font-mono text-nexus-secondary hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-nexus-crimson"
                aria-label="Tarun Gupta on GitHub"
              >
                <Github className="w-4 h-4 text-nexus-crimson" />
                <span>GitHub Profile</span>
              </a>
            </div>

            {/* Location & Academic Base Note */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-nexus-muted">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-nexus-crimson" />
                Bengaluru, Karnataka, India
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-nexus-secondary" />
                Presidency University MCA (2025–2027)
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
