import React from 'react';
import { motion } from 'framer-motion';
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-2xl bg-nexus-surface border border-nexus-border p-6 flex flex-col justify-between hover:border-nexus-lime/30 transition-all duration-300 group shadow-card"
    >
      <div>
        {/* Category & Status */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <Badge variant="cyan">{project.category}</Badge>
          <span className="font-mono text-[11px] text-nexus-dim">{project.status}</span>
        </div>

        {/* Title & Subtitle */}
        <h4 className="font-display font-bold text-xl text-nexus-text group-hover:text-nexus-lime transition-colors mb-1">
          {project.title}
        </h4>
        <p className="font-mono text-xs text-nexus-lime/90 mb-3">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="font-sans text-xs sm:text-sm text-nexus-muted leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-nexus-card border border-nexus-border text-[11px] font-mono text-nexus-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-nexus-border/60 flex items-center justify-between gap-3">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-nexus-card border border-nexus-border text-nexus-muted hover:text-nexus-lime hover:border-nexus-lime/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-nexus-lime"
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
