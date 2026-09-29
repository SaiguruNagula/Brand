import React, { useState } from 'react';
import { ALL_PORTFOLIO_PROJECTS, type Project } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
const categories = [
  { label: 'All', value: 'ALL' }, { label: 'Social Media', value: 'Social Media' },
  { label: 'Print', value: 'Print Media' }, { label: 'Web', value: 'Website Development' },
  { label: 'Branding', value: 'Branding' },
];
export const PortfolioSection: React.FC<{onSelectProject: (project: Project) => void}> = ({ onSelectProject }) => {
  const [active, setActive] = useState('ALL');
  const projects = ALL_PORTFOLIO_PROJECTS.filter(project => active === 'ALL' || project.category === active);
  return <section id="portfolio" className="bg-white text-[#111111] py-24 sm:py-32 border-t border-neutral-100">
    <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
      <div className="mb-12 sm:mb-20 border-b border-neutral-200 pb-8">
        <span className="text-xs font-mono tracking-[0.2em] uppercase text-neutral-500 block mb-4">Portfolio</span>
        <h2 className="text-[32px] sm:text-[46px] lg:text-[52px] font-semibold leading-tight mb-8">From feed to full experience.</h2>
        <div className="flex flex-wrap gap-x-7 gap-y-3" role="group" aria-label="Filter portfolio">
          {categories.map(category => <button key={category.value} onClick={() => setActive(category.value)} aria-pressed={active === category.value} className={`py-2 text-xs font-mono uppercase tracking-wider border-b-2 transition-colors ${active === category.value ? 'border-black text-black' : 'border-transparent text-neutral-500 hover:text-black'}`}>{category.label}</button>)}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-14 sm:gap-y-20">
        {projects.map(project => <ProjectCard key={project.id} project={project} onSelect={onSelectProject} />)}
      </div>
      <p className="sr-only" aria-live="polite">{projects.length} projects shown.</p>
    </div>
  </section>;
};
