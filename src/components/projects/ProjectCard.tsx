import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ProjectItem } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ArrowUpRight, Github } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onSelect,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.25, delay: shouldReduceMotion ? 0 : index * 0.05 }}
      className="rounded-2xl bg-surface border border-border p-5 sm:p-6 flex flex-col justify-between hover:border-accent/40 hover:shadow-card-hover transition-all duration-300 shadow-subtle group"
    >
      <div>
        {/* Category & Status */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-border">
          <Badge variant="neutral">{project.category}</Badge>
          <span className="font-sans text-[11px] text-content-muted">{project.status}</span>
        </div>

        {/* Title & Subtitle */}
        <h4 className="font-display font-bold text-lg text-content-primary mb-1">
          {project.title}
        </h4>
        <p className="font-sans text-xs text-accent-text font-medium mb-2.5">
          {project.subtitle}
        </p>

        {/* Summary Description */}
        <p className="font-sans text-xs sm:text-sm text-content-secondary leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-surface-elevated border border-border text-[11px] font-mono text-content-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-3.5 border-t border-border flex items-center justify-between gap-2">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-surface-elevated border border-border text-content-secondary hover:text-white hover:border-border-active transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github className="w-4 h-4" />
          </a>
        ) : (
          <div />
        )}

        <Button
          variant="outline"
          size="sm"
          onClick={() => onSelect(project)}
          icon={<ArrowUpRight className="w-3.5 h-3.5" />}
        >
          View Details
        </Button>
      </div>
    </motion.div>
  );
};
