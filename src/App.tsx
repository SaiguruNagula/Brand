import React, { useCallback, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoMarquee } from './components/LogoMarquee';
import { ServiceExplorer } from './components/ServiceExplorer';
import { SelectedWork } from './components/SelectedWork';
import { PortfolioSection } from './components/PortfolioSection';
import { About } from './components/About';
import { Clients } from './components/Clients';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CustomCursor } from './components/CustomCursor';
import { SELECTED_PROJECTS, type Project } from './data/portfolioData';
export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeProject = useCallback(() => setSelectedProject(null), []);
  const scrollToContact = useCallback(() => document.getElementById('contact')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }), []);
  return (
    <div className="min-h-screen bg-[#010101] text-white font-sans selection:bg-[#FFBB02] selection:text-black">
      <a className="skip-link" href="#main">Skip to content</a>
      <CustomCursor />
      <Navbar />
      <main id="main">
        <Hero />
        <LogoMarquee />
        <ServiceExplorer />
        {/* Prototype workflow, calculator, comparison and intake components are intentionally not mounted in V1. */}
        <SelectedWork featuredProjects={SELECTED_PROJECTS} onSelectProject={setSelectedProject} />
        <PortfolioSection onSelectProject={setSelectedProject} />
        <About onOpenContact={scrollToContact} />
        <Clients />
        <FinalCTA />
      </main>
      <Footer />
      <ProjectModal project={selectedProject} onClose={closeProject} />
    </div>
  );
}
