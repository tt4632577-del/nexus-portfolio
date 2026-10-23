import React, { useEffect } from 'react';
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
  // Close on Escape key & Lock background scroll
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
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
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-nexus-surface border border-nexus-border rounded-2xl sm:rounded-3xl shadow-2xl overflow-y-auto z-10 flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-8 bg-nexus-surface/95 backdrop-blur-md border-b border-nexus-border">
            <div className="space-y-1 pr-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={project.featured ? 'lime' : 'cyan'}>
                  {project.category}
                </Badge>
                <Badge variant="outline">
                  {project.status}
                </Badge>
              </div>
              <h2 id="modal-title" className="font-display font-bold text-xl sm:text-3xl text-nexus-text">
                {project.title}
              </h2>
              <p className="font-mono text-xs sm:text-sm text-nexus-lime">
                {project.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 sm:p-2.5 rounded-xl bg-nexus-card border border-nexus-border text-nexus-muted hover:text-nexus-text hover:border-nexus-lime/50 transition-colors shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-nexus-lime"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8 text-nexus-text/90">
            {/* Tagline Summary */}
            <div className="p-4 rounded-xl bg-nexus-card border border-nexus-border/80 text-sm font-sans text-nexus-text leading-relaxed">
              <span className="font-mono text-xs text-nexus-lime block mb-1 uppercase tracking-wider">// Overview</span>
              {project.tagline}
            </div>

            {/* Problem Statement */}
            <div className="space-y-2">
              <h4 className="font-display font-semibold text-lg text-nexus-text flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-nexus-lime" />
                Problem Statement & Motivation
              </h4>
              <p className="text-sm text-nexus-muted leading-relaxed font-sans pl-6 border-l border-nexus-border">
                {project.problemStatement}
              </p>
            </div>

            {/* Technical Architecture */}
            <div className="space-y-2">
              <h4 className="font-display font-semibold text-lg text-nexus-text flex items-center gap-2">
                <Layers className="w-4 h-4 text-nexus-cyan" />
                System Architecture
              </h4>
              <p className="text-sm text-nexus-muted leading-relaxed font-sans pl-6 border-l border-nexus-border">
                {project.architectureDetails}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="font-display font-semibold text-lg text-nexus-text flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-nexus-lime" />
                Key Engineering Features
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {project.keyFeatures.map((feature, i) => (
                  <div 
                    key={i}
                    className="p-3 rounded-lg bg-nexus-card/50 border border-nexus-border flex items-start gap-3 text-xs sm:text-sm text-nexus-text"
                  >
                    <ChevronRight className="w-4 h-4 text-nexus-lime shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Implementation Highlights & Challenges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Highlights */}
              <div className="space-y-2">
                <h5 className="font-display font-semibold text-sm text-nexus-text flex items-center gap-2">
                  <Wrench className="w-3.5 h-3.5 text-nexus-lime" />
                  Implementation Highlights
                </h5>
                <ul className="space-y-2 text-xs text-nexus-muted">
                  {project.implementationHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2 bg-nexus-card/30 p-2.5 rounded-lg border border-nexus-border/60">
                      <span className="text-nexus-lime font-mono">•</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Solutions */}
              <div className="space-y-2">
                <h5 className="font-display font-semibold text-sm text-nexus-text flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-nexus-cyan" />
                  Engineering Challenges Solved
                </h5>
                <ul className="space-y-2 text-xs text-nexus-muted">
                  {project.challengesAndSolutions.map((cs, i) => (
                    <li key={i} className="flex items-start gap-2 bg-nexus-card/30 p-2.5 rounded-lg border border-nexus-border/60">
                      <span className="text-nexus-cyan font-mono">•</span>
                      <span>{cs}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="space-y-2 pt-2">
              <div className="font-mono text-xs text-nexus-dim uppercase tracking-wider">
                Technology Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-nexus-card border border-nexus-border text-xs font-mono text-nexus-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="sticky bottom-0 z-20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 sm:p-6 bg-nexus-surface/95 backdrop-blur-md border-t border-nexus-border">
            <div className="text-[11px] sm:text-xs font-mono text-nexus-dim text-center sm:text-left">
              Verified artifact from Tarun Gupta's engineering portfolio
            </div>

            <div className="flex flex-wrap items-center justify-end gap-2.5">
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
