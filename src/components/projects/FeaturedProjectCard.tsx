import React from 'react';
import { motion } from 'framer-motion';
import { ProjectItem } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ArrowUpRight, Github, Terminal, Layers } from 'lucide-react';

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
  const numberStr = (index + 1).toString().padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative rounded-3xl bg-nexus-surface border border-nexus-border/90 p-7 sm:p-9 md:p-10 shadow-2xl hover:border-nexus-lime/40 transition-all duration-300 group flex flex-col justify-between overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-nexus-lime/5 rounded-full blur-3xl group-hover:bg-nexus-lime/10 transition-colors pointer-events-none" />

      <div>
        {/* Top telemetry bar */}
        <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-nexus-border/60">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-nexus-lime font-bold">
              // {numberStr}
            </span>
            <span className="text-nexus-border">|</span>
            <Badge variant="lime">{project.category}</Badge>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-nexus-lime"></span>
            </span>
            <span className="font-mono text-xs text-nexus-dim">{project.status}</span>
          </div>
        </div>

        {/* Project Header */}
        <div className="mb-4">
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-nexus-text group-hover:text-nexus-lime transition-colors">
            {project.title}
          </h3>
          <p className="font-mono text-xs sm:text-sm text-nexus-lime/90 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Tagline */}
        <p className="font-sans text-sm sm:text-base text-nexus-text/90 font-medium mb-4 leading-relaxed">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="font-sans text-xs sm:text-sm text-nexus-muted leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <div className="text-[10px] font-mono text-nexus-dim uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Layers className="w-3 h-3 text-nexus-cyan" />
            Core Technologies
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-nexus-card border border-nexus-border text-xs font-mono text-nexus-muted group-hover:border-nexus-lime/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-6 border-t border-nexus-border/60 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono text-nexus-dim">
          <Terminal className="w-3.5 h-3.5 text-nexus-lime" />
          <span>Detailed Case Study Available</span>
        </div>

        <div className="flex items-center gap-3">
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
