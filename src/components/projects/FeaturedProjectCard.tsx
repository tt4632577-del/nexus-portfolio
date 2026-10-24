import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ProjectItem } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ArrowUpRight, Github } from 'lucide-react';

interface FeaturedProjectCardProps {
  project: ProjectItem;
  index: number;
  onSelect: (project: ProjectItem) => void;
}

export const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
  project,
  index,
  onSelect,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : index * 0.08 }}
      className="rounded-2xl bg-surface border border-border p-6 sm:p-8 shadow-card hover:border-accent/40 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Header Telemetry */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-border">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-accent-text">
              Featured 0{index + 1}
            </span>
            <span className="text-border">•</span>
            <Badge variant="crimson">{project.category}</Badge>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-sans text-content-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>{project.status}</span>
          </div>
        </div>

        {/* Project Title & Subtitle */}
        <div className="mb-3">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-content-primary mb-1">
            {project.title}
          </h3>
          <p className="font-sans text-sm text-accent-text font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* One-Line Summary / Tagline */}
        <p className="font-sans text-sm sm:text-base text-content-primary font-medium mb-3 leading-relaxed">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="font-sans text-xs sm:text-sm text-content-secondary leading-relaxed mb-6 prose-measure">
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="mb-6">
          <div className="text-[11px] font-sans text-content-muted uppercase tracking-wider mb-2">
            Core Technologies
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

      {/* Action Footer */}
      <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs font-sans text-content-muted">
          Architecture & Implementation Details Available
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              icon={<Github className="w-3.5 h-3.5" />}
              iconPosition="left"
            >
              GitHub
            </Button>
          )}

          <Button
            variant="primary"
            size="sm"
            onClick={() => onSelect(project)}
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
          >
            View Case Study
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
