import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
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
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-nexus-bg/90 backdrop-blur-md border-b border-nexus-border py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Wordmark */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-nexus-crimson rounded-md px-1 py-0.5"
          aria-label="Tarun Gupta - NEXUS Crimson Home"
        >
          <div className="w-8 h-8 rounded-lg bg-nexus-surface border border-nexus-border flex items-center justify-center group-hover:border-nexus-borderAccent transition-colors">
            <Terminal className="w-4 h-4 text-nexus-crimson transition-transform group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-wider text-sm sm:text-base text-nexus-text group-hover:text-nexus-crimsonBright transition-colors">
              NEXUS <span className="text-nexus-dim font-mono text-xs font-normal">CRIMSON</span>
            </span>
            <span className="text-[10px] font-mono text-nexus-dim tracking-widest uppercase">
              Tarun Gupta
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-nexus-surface/80 border border-nexus-border rounded-full px-3 py-1.5 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-nexus-crimson ${
                  isActive
                    ? 'bg-nexus-crimson text-white font-semibold shadow-sm'
                    : 'text-nexus-secondary hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Connect / Status badge */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-nexus-surface border border-nexus-border text-xs text-nexus-muted">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nexus-crimson opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-nexus-crimson"></span>
            </span>
            <span className="font-mono text-[11px] text-nexus-secondary">Software Developer</span>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-nexus-surface border border-nexus-border hover:border-nexus-borderAccent text-xs font-medium text-nexus-text hover:text-nexus-crimsonBright transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-nexus-crimson"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-nexus-crimson" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-nexus-surface border border-nexus-border text-nexus-text hover:text-nexus-crimson focus:outline-none focus-visible:ring-2 focus-visible:ring-nexus-crimson"
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
            className="md:hidden fixed inset-0 top-14 bg-black/80 backdrop-blur-sm z-30"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div 
            className="md:hidden fixed inset-x-0 top-14 bg-nexus-surface/98 backdrop-blur-xl border-b border-nexus-border px-6 py-6 shadow-2xl transition-all z-40 max-h-[calc(100vh-3.5rem)] overflow-y-auto"
            role="navigation"
            aria-label="Mobile Navigation Drawer"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-nexus-crimson text-white font-semibold shadow-sm'
                        : 'text-nexus-secondary hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-nexus-border mt-2 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="flex items-center justify-center gap-2 py-3 rounded-lg bg-nexus-crimson text-white font-semibold text-sm hover:bg-nexus-crimsonHover transition-colors shadow-sm"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
