import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onStartInquiry: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onStartInquiry
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-[#090909] border border-white/[0.12] overflow-y-auto no-scrollbar shadow-2xl flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar inside Modal */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#090909]/95 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#FFBB02] uppercase">
            <span>{project.client}</span>
            <span className="text-neutral-600">·</span>
            <span className="text-neutral-400">{project.category}</span>
            <span className="text-neutral-600">·</span>
            <span className="text-neutral-500">{project.year || '2026'}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Main Visual */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-neutral-950 border border-white/[0.08]">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <h3 id="modal-project-title" className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                {project.title}
              </h3>
              {project.headline && (
                <p className="text-base sm:text-lg font-medium text-[#FFBB02]">
                  "{project.headline}"
                </p>
              )}
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                {project.summary}
              </p>
            </div>

            <div className="lg:col-span-4 p-6 bg-neutral-900/50 border border-white/[0.08] space-y-6">
              <div>
                <div className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 mb-2">
                  Scope &amp; Deliverables
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.deliverables.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono px-2.5 py-1 bg-black border border-white/10 text-neutral-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08]">
                <button
                  onClick={() => {
                    onClose();
                    onStartInquiry(project.title);
                  }}
                  className="w-full py-3 bg-[#FFBB02] hover:bg-white text-black font-bold text-xs font-mono tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inquire Regarding Similar Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FC3520]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
