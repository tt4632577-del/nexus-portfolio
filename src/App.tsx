import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { NoiseOverlay } from './components/layout/NoiseOverlay';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/profile/AboutSection';
import { SkillsSection } from './components/skills/SkillsSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { PhilosophySection } from './components/philosophy/PhilosophySection';
import { ContactSection } from './components/contact/ContactSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-canvas text-content-primary selection:bg-accent selection:text-white relative">
      <NoiseOverlay />
      <Navbar />

      <main className="relative z-10">
        {/* Section 00: Recruiter-Ready Hero */}
        <HeroSection />

        {/* Section 01: About & Compact Academic Background */}
        <AboutSection />

        {/* Section 02: Categorized Technical Capabilities */}
        <SkillsSection />

        {/* Section 03: Projects Showcase & Case Studies */}
        <ProjectsSection />

        {/* Section 04: Engineering Philosophy */}
        <PhilosophySection />

        {/* Section 05: Contact & Verified Social Channels */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
