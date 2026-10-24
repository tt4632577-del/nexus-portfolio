import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, MapPin, Terminal } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-nexus-border bg-nexus-surface relative overflow-hidden" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand & Summary Column (6 cols) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-nexus-elevated border border-nexus-border flex items-center justify-center text-nexus-crimson">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg text-nexus-text">
                NEXUS <span className="text-nexus-crimson font-mono text-xs uppercase tracking-wider">CRIMSON</span>
              </span>
            </div>
            
            <p className="text-sm text-nexus-secondary max-w-md leading-relaxed font-sans mb-4">
              Software Developer & MCA Student at Presidency University, Bengaluru. Focused on robust Java backend engineering, applied AI systems, and purposeful software development.
            </p>

            <div className="flex flex-col gap-2 text-xs font-mono text-nexus-muted">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-nexus-crimson shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-nexus-crimson shrink-0" />
                <a
                  href="mailto:tt4632577@gmail.com?subject=Portfolio%20Inquiry%20%E2%80%94%20Tarun%20Gupta"
                  className="hover:text-nexus-crimsonBright transition-colors select-all break-all text-nexus-secondary"
                >
                  tt4632577@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs text-nexus-crimson uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-nexus-muted">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-nexus-crimsonBright transition-colors inline-block focus:outline-none focus-visible:ring-1 focus-visible:ring-nexus-crimson rounded"
                  >
                    // {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Profiles & Direct Contact (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-xs text-nexus-crimson uppercase tracking-widest mb-4">
              Verified Profiles
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs font-mono text-nexus-secondary hover:text-white group transition-colors"
                aria-label="Tarun Gupta on GitHub"
              >
                <div className="w-7 h-7 rounded-md bg-nexus-elevated border border-nexus-border flex items-center justify-center group-hover:border-nexus-borderAccent transition-colors">
                  <Github className="w-3.5 h-3.5 text-nexus-muted group-hover:text-nexus-crimsonBright transition-colors" />
                </div>
                <span>GitHub Profile</span>
              </a>

              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs font-mono text-nexus-secondary hover:text-white group transition-colors"
                aria-label="Tarun Gupta on LinkedIn"
              >
                <div className="w-7 h-7 rounded-md bg-nexus-elevated border border-nexus-border flex items-center justify-center group-hover:border-nexus-borderAccent transition-colors">
                  <Linkedin className="w-3.5 h-3.5 text-nexus-muted group-hover:text-nexus-crimsonBright transition-colors" />
                </div>
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={`mailto:${profileData.email}?subject=Portfolio%20Inquiry%20%E2%80%94%20Tarun%20Gupta`}
                className="flex items-center gap-2.5 text-xs font-mono text-nexus-secondary hover:text-white group transition-colors"
                aria-label="Send email to Tarun Gupta"
              >
                <div className="w-7 h-7 rounded-md bg-nexus-elevated border border-nexus-border flex items-center justify-center group-hover:border-nexus-borderAccent transition-colors">
                  <Mail className="w-3.5 h-3.5 text-nexus-muted group-hover:text-nexus-crimsonBright transition-colors" />
                </div>
                <span>Send Direct Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-nexus-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-nexus-muted font-mono">
          <div>
            &copy; {new Date().getFullYear()} Tarun Gupta. NEXUS Crimson Edition. Engineered with precision.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-nexus-muted hover:text-nexus-crimsonBright transition-colors p-1.5 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-nexus-crimson cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-nexus-crimson" />
          </button>
        </div>
      </div>
    </footer>
  );
};
