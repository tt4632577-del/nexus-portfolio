import React, { useState } from 'react';
import { SectionHeader } from '../layout/SectionHeader';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { projectsData } from '../../data/projects';
import { ProjectItem } from '../../types';
import { CheckCircle2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featuredProjects = projectsData.filter((p) => p.featured);
  const additionalProjects = projectsData.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-24 border-b border-border scroll-mt-20"
      aria-label="Projects Showcase"
    >
      <div className="container-shell">
        <SectionHeader
          number="03"
          title="Featured Engineering Work"
          subtitle="Practical full-stack and AI systems spanning real-time phishing detection, voice-first GovTech PWAs, local LLM desktop automation, and ONNX inference."
        />

        {/* Featured Projects Showcase (Top 3) */}
        <div className="space-y-6 mb-12">
          {featuredProjects.map((project, idx) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Specialized Applications Divider */}
        <div className="mb-6 pt-8 border-t border-border flex items-center justify-between">
          <div>
            <h3 className="font-display font-bold text-lg sm:text-xl text-content-primary">
              Specialized Applications & Systems
            </h3>
            <p className="text-xs text-content-muted mt-0.5 font-sans">
              Additional implementations in enterprise ONNX intrusion detection and computer vision.
            </p>
          </div>
          <span className="text-xs font-mono text-content-muted hidden sm:inline">
            {additionalProjects.length} Systems
          </span>
        </div>

        {/* Additional Projects Uniform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {additionalProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Engineering Integrity Verification Note */}
        <div className="mt-8 p-4 rounded-xl bg-surface border border-border flex items-center gap-2.5 text-xs text-content-muted">
          <CheckCircle2 className="w-4 h-4 text-accent-text shrink-0" />
          <span>All 5 projects represent genuine technical architectures, prototypes, and code implementations.</span>
        </div>

        {/* Case Study Detail Modal */}
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
