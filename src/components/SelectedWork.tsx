import React from 'react';
import { type Project } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
interface Props { onSelectProject: (project: Project) => void; featuredProjects: Project[]; }
export const SelectedWork: React.FC<Props> = ({ onSelectProject, featuredProjects }) => (
  <section id="selected-work" className="bg-white text-[#111111] py-24 sm:py-32 lg:py-40">
    <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-20 gap-6 border-b border-neutral-200 pb-8">
        <div><span className="text-xs font-mono tracking-[0.2em] uppercase text-neutral-500 block mb-4">Selected Work</span>
          <h2 className="text-[36px] sm:text-[48px] lg:text-[54px] font-semibold leading-tight">Ideas made visible.</h2></div>
        <a href="#portfolio" className="text-sm underline underline-offset-8">Explore the portfolio</a>
      </div>
      <div className="grid md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-14 sm:gap-y-20">
        {featuredProjects.map(project => <ProjectCard key={project.id} project={project} onSelect={onSelectProject} />)}
      </div>
    </div>
  </section>
);
