/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoMarquee } from './components/LogoMarquee';
import { ServiceExplorer } from './components/ServiceExplorer';
import { HowItWorks } from './components/HowItWorks';
import { CreativeCalculator } from './components/CreativeCalculator';
import { ComparisonTable } from './components/ComparisonTable';
import { SelectedWork } from './components/SelectedWork';
import { PortfolioSection } from './components/PortfolioSection';
import { About } from './components/About';
import { Clients } from './components/Clients';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { ShowreelModal } from './components/ShowreelModal';
import { CustomCursor } from './components/CustomCursor';
import { SELECTED_PROJECTS, Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('');

  const handleOpenContact = (service?: string) => {
    if (service) {
      setPrefilledService(service);
    }
    setIsContactModalOpen(true);
  };

  const handleExploreWork = () => {
    const el = document.getElementById('selected-work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectInquiry = (projectName: string) => {
    setPrefilledService(`Project: ${projectName}`);
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#010101] text-white flex flex-col font-sans selection:bg-[#FFBB02] selection:text-black">
      {/* Custom Interactive Subtle Cursor */}
      <CustomCursor />

      {/* Floating dock navbar revealed on scroll */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      <main className="flex-grow">
        {/* 01 — FULL-BLEED VIDEO HERO (INTELLIGENCE DESIGNED TO EVOLVE) */}
        <Hero
          onOpenContact={() => handleOpenContact()}
          onExploreWork={handleExploreWork}
          onOpenShowreel={() => setIsShowreelOpen(true)}
        />

        {/* 03 — INFINITE LOGO MARQUEE (DUAL SCROLLING CLIENT PARTNERS) */}
        <LogoMarquee />

        {/* 04 — INTERACTIVE SERVICES EXPLORER (DESIGN PICKLE TABBED CAPABILITIES) */}
        <ServiceExplorer onOpenConsultation={(cap) => handleOpenContact(cap)} />

        {/* 05 — HOW IT WORKS & INTERACTIVE REQUEST BRIEF SANDBOX */}
        <HowItWorks onOpenConsultation={() => handleOpenContact('Creative Workflow Demo')} />

        {/* 06 — INTERACTIVE CREATIVE VOLUME & SCOPE CALCULATOR */}
        <CreativeCalculator onOpenConsultation={() => handleOpenContact('Custom Plan Scope')} />

        {/* 07 — COMPARISON MATRIX (WHY BRAND MASALA VS AGENCIES & FREELANCERS) */}
        <ComparisonTable onOpenConsultation={() => handleOpenContact()} />

        {/* 08 — SELECTED WORK SHOWCASE */}
        <SelectedWork
          featuredProjects={SELECTED_PROJECTS}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 09 — PORTFOLIO WORK GALLERY WITH FILTER TABS */}
        <PortfolioSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 10 — ABOUT & FOUNDER SPOTLIGHT */}
        <About onOpenContact={() => handleOpenContact()} />

        {/* 11 — CLIENT COLLABORATION ARCHIVE */}
        <Clients />

        {/* 12 — FINAL HIGH-CONVERSION CTA & INBOUND BRIEF SCHEDULER */}
        <FinalCTA
          onOpenContactModal={() => handleOpenContact()}
          prefilledService={prefilledService}
        />
      </main>

      {/* 13 — FOOTER */}
      <Footer />

      {/* Interactive Modal: Studio Video Showreel */}
      <ShowreelModal
        isOpen={isShowreelOpen}
        onClose={() => setIsShowreelOpen(false)}
        onOpenConsultation={() => handleOpenContact('Showreel Inquiry')}
      />

      {/* Interactive Modal: Project Inspector */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartInquiry={handleProjectInquiry}
      />

      {/* Interactive Modal: Inbound Consultation Drawer */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        preselectedService={prefilledService}
      />
    </div>
  );
}
