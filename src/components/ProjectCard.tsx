import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { type Project } from '../data/portfolioData';

export const ProjectCard: React.FC<{ project: Project; onSelect: (project: Project) => void }> = ({ project, onSelect }) => (
  <button type="button" onClick={() => onSelect(project)} className="project-card group text-left min-w-0 w-full" aria-label={`View ${project.client} — ${project.title}`}>
    <span className="block aspect-[16/11] rounded-[14px] overflow-hidden bg-[#f1f1ef]">
      <img src={project.image} alt={`${project.client} — ${project.title}`} loading="lazy" decoding="async" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.015]" />
    </span>
    <span className="flex justify-between items-start gap-4 mt-5">
      <span className="min-w-0">
        <span className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">{project.category}</span>
        <span className="block text-lg sm:text-2xl font-semibold tracking-tight leading-tight">{project.client}</span>
        <span className="block text-sm text-neutral-500 mt-2">{project.title}</span>
      </span>
      <span className="flex items-center justify-center rounded-full border border-neutral-300 w-10 h-10 shrink-0 group-hover:bg-black group-hover:text-white transition-colors"><ArrowUpRight size={17} /></span>
    </span>
  </button>
);
