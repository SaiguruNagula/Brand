import React, { useEffect, useRef } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { type Project } from '../data/portfolioData';
interface Props { project: Project | null; onClose: () => void; }
export const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!project || !dialog.current) return;
    const element = dialog.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [project]);
  return <dialog ref={dialog} className="project-dialog" aria-labelledby="modal-project-title" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    {project && <div className="bg-[#090909] text-white">
      <div className="sticky top-0 z-10 bg-[#090909]/95 backdrop-blur-md flex items-start justify-between gap-4 px-5 sm:px-8 py-5 border-b border-white/10">
        <div className="min-w-0">
          <h2 id="modal-project-title" className="text-lg sm:text-2xl font-semibold">{project.client}</h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">{project.title}</p>
        </div>
        <button autoFocus onClick={onClose} className="p-2 hover:bg-white/10 rounded-full shrink-0" aria-label="Close project"><X size={22} /></button>
      </div>
      <div className="p-4 sm:p-8 space-y-5">
        <img src={project.image} alt={`${project.client} — ${project.title} artwork`} className="w-full h-auto rounded-md" decoding="async" />
        {project.summary && <p className="text-neutral-300 leading-relaxed">{project.summary}</p>}
        {project.year && <p className="text-sm text-neutral-400">{project.year}</p>}
        {!!project.deliverables?.length && <ul className="text-sm text-neutral-300">{project.deliverables.map(item => <li key={item}>{item}</li>)}</ul>}
        <a href={project.image} target="_blank" rel="noopener noreferrer" className="inline-flex gap-2 items-center text-xs text-neutral-300 underline underline-offset-4">View full-size artwork <ArrowUpRight size={14} /></a>
      </div>
    </div>}
  </dialog>;
};
