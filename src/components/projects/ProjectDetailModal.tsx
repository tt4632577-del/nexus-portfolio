import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectItem } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { 
  X, 
  Github, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  Wrench, 
  Cpu, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key, Lock background scroll, and Trap Focus
  useEffect(() => {
    if (!project) return;

    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.97, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 12 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-surface border border-border rounded-2xl shadow-elevated overflow-y-auto z-10 flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-5 sm:p-6 bg-surface/95 backdrop-blur-md border-b border-border">
            <div className="space-y-1 pr-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={project.featured ? 'crimson' : 'neutral'}>
                  {project.category}
                </Badge>
                <Badge variant="outline">
                  {project.status}
                </Badge>
              </div>
              <h2 id="modal-title" className="font-display font-bold text-xl sm:text-2xl text-content-primary">
                {project.title}
              </h2>
              <p className="font-sans text-xs sm:text-sm text-accent-text font-medium">
                {project.subtitle}
              </p>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-surface-elevated border border-border text-content-secondary hover:text-content-primary hover:border-border-active transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-6 space-y-6 text-content-secondary text-sm">
            {/* Tagline Summary */}
            <div className="p-4 rounded-xl bg-surface-elevated border border-border text-content-primary leading-relaxed">
              <span className="font-mono text-xs text-accent-text block mb-1 font-semibold uppercase tracking-wider">Overview</span>
              {project.tagline}
            </div>

            {/* Problem Statement if provided */}
            {project.problemStatement && (
              <div className="space-y-2">
                <h4 className="font-display font-semibold text-base text-content-primary flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-accent-text" />
                  Problem Statement & Motivation
                </h4>
                <p className="leading-relaxed font-sans pl-6 border-l border-border">
                  {project.problemStatement}
                </p>
              </div>
            )}

            {/* Technical Architecture if provided */}
            {project.architectureDetails && (
              <div className="space-y-2">
                <h4 className="font-display font-semibold text-base text-content-primary flex items-center gap-2">
                  <Layers className="w-4 h-4 text-accent-text" />
                  System Architecture
                </h4>
                <p className="leading-relaxed font-sans pl-6 border-l border-border">
                  {project.architectureDetails}
                </p>
              </div>
            )}

            {/* Key Contributions & Features */}
            <div className="space-y-3">
              <h4 className="font-display font-semibold text-base text-content-primary flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-text" />
                Key Project Contributions
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {project.keyFeatures.map((feature, i) => (
                  <div 
                    key={i}
                    className="p-3.5 rounded-lg bg-surface-elevated/70 border border-border flex items-start gap-2.5 text-xs sm:text-sm text-content-primary leading-relaxed"
                  >
                    <ChevronRight className="w-4 h-4 text-accent-text shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Implementation Highlights & Challenges if provided */}
            {((project.implementationHighlights && project.implementationHighlights.length > 0) ||
              (project.challengesAndSolutions && project.challengesAndSolutions.length > 0)) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                {project.implementationHighlights && project.implementationHighlights.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="font-display font-semibold text-xs text-content-primary flex items-center gap-1.5 uppercase tracking-wider">
                      <Wrench className="w-3.5 h-3.5 text-accent-text" />
                      Implementation Highlights
                    </h5>
                    <ul className="space-y-1.5 text-xs">
                      {project.implementationHighlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2 bg-surface-elevated/50 p-2.5 rounded-lg border border-border">
                          <span className="text-accent-text font-bold">•</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.challengesAndSolutions && project.challengesAndSolutions.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="font-display font-semibold text-xs text-content-primary flex items-center gap-1.5 uppercase tracking-wider">
                      <Cpu className="w-3.5 h-3.5 text-accent-text" />
                      Challenges Solved
                    </h5>
                    <ul className="space-y-1.5 text-xs">
                      {project.challengesAndSolutions.map((cs, i) => (
                        <li key={i} className="flex items-start gap-2 bg-surface-elevated/50 p-2.5 rounded-lg border border-border">
                          <span className="text-accent-text font-bold">•</span>
                          <span>{cs}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Technologies Used */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-sans text-content-muted uppercase tracking-wider">
                Technology Stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-surface-elevated border border-border text-xs font-mono text-content-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="sticky bottom-0 z-20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 sm:p-5 bg-surface/95 backdrop-blur-md border-t border-border">
            <div className="text-xs font-sans text-content-muted text-center sm:text-left">
              Verified artifact from Tarun Gupta's engineering portfolio
            </div>

            <div className="flex flex-wrap items-center justify-end gap-2">
              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                  icon={<Github className="w-3.5 h-3.5" />}
                  iconPosition="left"
                  className="flex-1 sm:flex-initial"
                >
                  GitHub
                </Button>
              )}

              {project.liveDemoUrl && (
                <Button
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                  icon={<ExternalLink className="w-3.5 h-3.5" />}
                  className="flex-1 sm:flex-initial"
                >
                  Live Demo
                </Button>
              )}

              <Button
                variant="secondary"
                size="sm"
                onClick={onClose}
                className="flex-1 sm:flex-initial"
              >
                Close
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
