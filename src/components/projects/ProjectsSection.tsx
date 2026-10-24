import React, { useState } from 'react';
import { SectionHeader } from '../layout/SectionHeader';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { projectsData } from '../../data/projects';
import { ProjectItem } from '../../types';
import { Layers, Terminal, Sparkles } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featuredProjects = projectsData.filter((p) => p.featured);
  const additionalProjects = projectsData.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-nexus-border relative scroll-mt-24"
      aria-label="Projects Showcase"
    >
      <SectionHeader
        number="03"
        title="Featured Engineering Work"
        subtitle="Practical projects exploring local speech AI, perimeter video analytics, citizen public-service assistants, and secure architectures."
      />

      {/* Prominent Featured Projects Showcase (Top 3) */}
      <div className="space-y-8 mb-16">
        {featuredProjects.map((project, idx) => (
          <FeaturedProjectCard
            key={project.id}
            project={project}
            index={idx}
            onSelect={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {/* Additional Projects Section Divider */}
      <div className="mb-10 pt-8 border-t border-nexus-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs text-nexus-crimson mb-1">
            <Layers className="w-3.5 h-3.5" />
            <span>EXTENDED ARTIFACTS</span>
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-nexus-text">
            Specialized Prototypes & Systems
          </h3>
        </div>
        <div className="text-xs font-mono text-nexus-dim flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-nexus-crimson" />
          <span className="text-nexus-muted">Showing 3 additional systems</span>
        </div>
      </div>

      {/* Additional Projects Grid (Bottom 3) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {additionalProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            onSelect={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {/* Verification Transparency Callout */}
      <div className="mt-12 p-5 rounded-2xl bg-nexus-surface border border-nexus-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-nexus-dim">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-nexus-crimson shrink-0" />
          <span className="text-nexus-secondary">All 6 projects represent real technical architectures, prototypes, and genuine engineering exploration.</span>
        </div>
        <div className="text-nexus-muted">
          No fabricated metrics or unsupported claims
        </div>
      </div>

      {/* Interactive Project Detail Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
