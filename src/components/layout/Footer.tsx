import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-border bg-surface" aria-label="Site Footer">
      <div className="container-shell py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          
          {/* Identity Column (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-surface-elevated border border-border flex items-center justify-center font-mono font-bold text-xs text-accent-text">
                TG
              </div>
              <span className="font-display font-bold text-base text-content-primary">
                Tarun Gupta
              </span>
            </div>
            
            <p className="text-sm text-content-secondary max-w-md leading-relaxed font-sans">
              AI / Software Development Intern & MCA Student (GPA 8.54/10) at Presidency University, Bengaluru. Experienced in building AI-integrated applications with Java, Spring Boot, Python and React.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-content-muted pt-1">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent-text shrink-0" />
                <span>{profileData.location}</span>
              </span>
              <span>•</span>
              <a
                href={`mailto:${profileData.email}`}
                className="hover:text-white transition-colors select-all"
              >
                {profileData.email}
              </a>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-xs font-semibold text-content-primary uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-sans text-content-secondary">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors inline-block focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-sans text-xs font-semibold text-content-primary uppercase tracking-wider mb-3">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-sans text-content-secondary">
              <a
                href="/Tarun_Gupta_Resume.pdf"
                download="Tarun_Gupta_Resume.pdf"
                className="inline-flex items-center gap-2 hover:text-white transition-colors font-medium text-accent-text"
                aria-label="Download Tarun Gupta's Resume"
              >
                <Download className="w-3.5 h-3.5 text-accent-text" />
                <span>Download Resume</span>
              </a>

              <a
                href={profileData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
                aria-label="Tarun Gupta on GitHub"
              >
                <Github className="w-3.5 h-3.5 text-content-muted" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={profileData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
                aria-label="Tarun Gupta on LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 text-content-muted" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
                aria-label="Send direct email"
              >
                <Mail className="w-3.5 h-3.5 text-content-muted" />
                <span>Send Direct Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-content-muted font-sans">
          <div>
            &copy; {new Date().getFullYear()} Tarun Gupta. All rights reserved.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-content-secondary hover:text-white transition-colors p-1 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-accent cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent-text" />
          </button>
        </div>
      </div>
    </footer>
  );
};
