import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { NoiseOverlay } from './components/layout/NoiseOverlay';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/profile/AboutSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { EducationSection } from './components/education/EducationSection';
import { PhilosophySection } from './components/philosophy/PhilosophySection';
import { ContactSection } from './components/contact/ContactSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-nexus-bg text-nexus-text selection:bg-nexus-lime selection:text-black relative">
      <NoiseOverlay />
      <Navbar />

      <main className="relative z-10">
        {/* Section: Hero & 3D Interactive Canvas */}
        <HeroSection />

        {/* Section 01: About & Original Verified Photograph */}
        <AboutSection />

        {/* Section 02: Categorized Technical Capabilities */}
        <SkillsSection />

        {/* Section 03: Projects Showcase & Interactive Case Studies */}
        <ProjectsSection />

        {/* Section 04: Academic Foundations (Presidency University & VSKU) */}
        <EducationSection />

        {/* Section 05: Development Philosophy */}
        <PhilosophySection />

        {/* Section 06: Contact & Verified Social Channels */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
