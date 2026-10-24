import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Philosophy', href: '#philosophy' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['hero', 'about', 'skills', 'projects', 'philosophy', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key & manage scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-canvas/90 backdrop-blur-md border-b border-border py-2.5 shadow-subtle'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-shell flex items-center justify-between">
        {/* Brand / Name */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md px-1 py-0.5"
          aria-label="Tarun Gupta - Home"
        >
          <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-border flex items-center justify-center font-mono font-bold text-xs text-accent-text group-hover:border-border-active transition-colors">
            TG
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm sm:text-base text-content-primary group-hover:text-white transition-colors tracking-tight">
              Tarun Gupta
            </span>
            <span className="text-[11px] font-sans text-content-muted leading-none">
              AI / Software Development Intern
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-surface border border-border rounded-full px-2 py-1 backdrop-blur-md shadow-subtle">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-1 text-xs rounded-full transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? 'bg-surface-elevated text-content-primary font-semibold border border-border-active shadow-subtle'
                    : 'text-content-secondary hover:text-content-primary hover:bg-white/5'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Available Status, Resume & Contact CTA */}
        <div className="hidden lg:flex items-center gap-2.5">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-border text-xs text-content-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-sans">Available for Roles</span>
          </div>

          <a
            href="/Tarun_Gupta_Resume.pdf"
            download="Tarun_Gupta_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-elevated hover:bg-surface-subtle border border-border hover:border-border-active text-content-primary hover:text-white text-xs font-medium shadow-subtle transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Download Tarun Gupta's Resume"
          >
            <Download className="w-3.5 h-3.5 text-accent-text" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accent text-white hover:bg-accent-hover text-xs font-semibold shadow-subtle transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-surface border border-border text-content-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Backdrop & Drawer */}
      {mobileMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-14 bg-black/70 backdrop-blur-sm z-30"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div 
            className="md:hidden fixed inset-x-0 top-14 bg-surface border-b border-border px-6 py-5 shadow-elevated transition-all z-40 max-h-[calc(100vh-3.5rem)] overflow-y-auto"
            role="navigation"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-surface-elevated text-content-primary font-semibold border border-border-active'
                        : 'text-content-secondary hover:text-content-primary hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-3 border-t border-border mt-2 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-accent text-white font-semibold text-sm hover:bg-accent-hover transition-colors shadow-subtle"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="/Tarun_Gupta_Resume.pdf"
                  download="Tarun_Gupta_Resume.pdf"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-surface-elevated border border-border text-content-primary font-medium text-sm hover:border-border-active hover:text-white transition-colors"
                  aria-label="Download Tarun Gupta's Resume PDF"
                >
                  <Download className="w-4 h-4 text-accent-text" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
