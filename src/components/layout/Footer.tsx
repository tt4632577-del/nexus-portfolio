import React from 'react';
import { ArrowUp, Github, Linkedin, MapPin, Terminal } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-nexus-border bg-nexus-surface/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-nexus-card border border-nexus-border flex items-center justify-center">
                <Terminal className="w-4 h-4 text-nexus-lime" />
              </div>
              <span className="font-display font-bold text-lg text-nexus-text">
                NEXUS <span className="text-nexus-lime font-mono text-xs">/ Tarun Gupta</span>
              </span>
            </div>
            <p className="text-sm text-nexus-muted max-w-md leading-relaxed">
              Software Developer & MCA Student at Presidency University, Bengaluru. Focused on robust Java backend engineering, practical AI systems, and purposeful software development.
            </p>
            <div className="flex items-center gap-2 mt-4 text-xs font-mono text-nexus-dim">
              <MapPin className="w-3.5 h-3.5 text-nexus-lime" />
              <span>Bengaluru, Karnataka, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs text-nexus-lime uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-nexus-muted">
              {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-nexus-lime transition-colors inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Connect */}
          <div>
            <h4 className="font-mono text-xs text-nexus-lime uppercase tracking-widest mb-4">
              Verified Profiles
            </h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-nexus-muted hover:text-nexus-text group transition-colors"
                aria-label="Tarun Gupta on GitHub"
              >
                <Github className="w-4 h-4 group-hover:text-nexus-lime transition-colors" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-nexus-muted hover:text-nexus-text group transition-colors"
                aria-label="Tarun Gupta on LinkedIn"
              >
                <Linkedin className="w-4 h-4 group-hover:text-nexus-lime transition-colors" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-nexus-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-nexus-dim font-mono">
          <div>
            &copy; {new Date().getFullYear()} Tarun Gupta. Built with React, Vite, Tailwind CSS & Three.js.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-nexus-lime transition-colors p-1 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-nexus-lime"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
