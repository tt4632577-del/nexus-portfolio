import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeader } from '../layout/SectionHeader';
import { profileData } from '../../data/profile';
import { Mail, Linkedin, Github, Copy, Check, MapPin, AlertCircle, Download } from 'lucide-react';
import { Button } from '../ui/Button';

export const ContactSection: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const shouldReduceMotion = useReducedMotion();

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(profileData.email);
        setCopyStatus('copied');
        setTimeout(() => setCopyStatus('idle'), 2500);
        return;
      }
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
        setTimeout(() => setCopyStatus('idle'), 2500);
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
      className="py-16 sm:py-20 md:py-24 border-b border-border scroll-mt-20"
      aria-label="Contact and Networking"
    >
      <div className="container-shell">
        <SectionHeader
          number="05"
          title="Get in Touch"
          subtitle="Direct channel for software engineering opportunities, technical discussions, and professional inquiries."
          align="center"
        />

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
            className="rounded-2xl bg-surface border border-border p-6 sm:p-10 shadow-card text-center space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-border text-xs text-content-secondary">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-sans font-medium text-content-primary">Open for Software Engineering Opportunities</span>
            </div>

            {/* Headline */}
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-content-primary tracking-tight">
              LET'S BUILD SOMETHING MEANINGFUL.
            </h3>

            {/* Supporting Bio Text */}
            <p className="font-sans text-sm sm:text-base text-content-secondary max-w-lg mx-auto leading-relaxed">
              "{profileData.bioIntro}"
            </p>

            {/* Interactive Email Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-surface-elevated border border-border flex flex-col sm:flex-row items-center justify-between gap-4 max-w-lg mx-auto text-left">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-accent-text shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-sans text-content-muted uppercase tracking-wider">
                    Direct Email
                  </div>
                  <div className="font-mono text-sm sm:text-base text-content-primary font-medium select-all break-all">
                    {profileData.email}
                  </div>
                </div>
              </div>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto shrink-0 px-3.5 py-2 rounded-lg bg-surface hover:bg-surface-subtle border border-border hover:border-border-active text-xs font-sans text-content-primary transition-colors flex items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
                aria-label="Copy email address"
              >
                {copyStatus === 'copied' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : copyStatus === 'error' ? (
                  <>
                    <AlertCircle className="w-4 h-4 text-accent-text" />
                    <span>Select to copy</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-content-muted" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Accessible Confirmation Banner for Screen Readers */}
            <div aria-live="polite" className="sr-only">
              {copyStatus === 'copied' && 'Email address tt4632577@gmail.com copied to clipboard.'}
              {copyStatus === 'error' && 'Clipboard access unavailable. Please select and copy tt4632577@gmail.com manually.'}
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                href={mailtoHref}
                variant="primary"
                size="md"
                icon={<Mail className="w-4 h-4" />}
                iconPosition="left"
                className="w-full sm:w-auto px-6 py-2.5 font-semibold text-sm"
              >
                Send Me an Email
              </Button>

              <Button
                href="/Tarun_Gupta_Resume.pdf"
                download="Tarun_Gupta_Resume.pdf"
                variant="secondary"
                size="md"
                icon={<Download className="w-4 h-4 text-accent-text" />}
                iconPosition="left"
                className="w-full sm:w-auto px-6 py-2.5 font-medium text-sm"
              >
                Download Resume (PDF)
              </Button>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-border">
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-elevated border border-border hover:border-border-active text-xs font-sans text-content-secondary hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Tarun Gupta on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-accent-text" />
                <span>LinkedIn</span>
              </a>

              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-elevated border border-border hover:border-border-active text-xs font-sans text-content-secondary hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Tarun Gupta on GitHub"
              >
                <Github className="w-4 h-4 text-accent-text" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Location & Academic Note */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-sans text-content-muted">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-accent-text" />
                <span>{profileData.location}</span>
              </span>
              <span>•</span>
              <span>Presidency University MCA ({profileData.currentPeriod})</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
