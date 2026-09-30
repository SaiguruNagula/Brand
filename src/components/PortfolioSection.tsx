import React, { useState, useMemo } from 'react';
import { ALL_PORTFOLIO_PROJECTS, Project } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { ClientBrandLockup } from './ClientBrandLockup';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
}

type CategoryFilter = 'ALL' | 'Social Media' | 'Print Media' | 'Website Development' | 'Branding';

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('ALL');

  const categories: { label: string; value: CategoryFilter }[] = [
    { label: 'ALL', value: 'ALL' },
    { label: 'SOCIAL MEDIA', value: 'Social Media' },
    { label: 'PRINT', value: 'Print Media' },
    { label: 'WEB', value: 'Website Development' },
    { label: 'BRANDING', value: 'Branding' }
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'ALL') {
      return ALL_PORTFOLIO_PROJECTS;
    }
    return ALL_PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="bg-transparent text-[#111111] py-28 sm:py-36 lg:py-44 2xl:py-48">
      <div className="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-24 pb-8 border-b border-neutral-200/80">
          <div>
            <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-neutral-500 block mb-3">
              PORTFOLIO
            </span>
            <h2 className="text-[34px] sm:text-[46px] lg:text-[58px] 2xl:text-[70px] font-bold tracking-[-0.035em] text-[#111111] leading-tight">
              FROM FEED TO FULL EXPERIENCE.
            </h2>
          </div>

          {/* Minimal Filter Tabs (Quiet, No giant pills) */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-mono tracking-wider">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`py-1 transition-colors cursor-pointer relative ${
                    isActive
                      ? 'text-[#111111] font-semibold'
                      : 'text-neutral-400 hover:text-neutral-700'
                  }`}
                >
                  <span>{cat.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#111111]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Large Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col space-y-4"
            >
              {/* Large Image Frame */}
              <div className="relative w-full aspect-[16/11] rounded-[14px] overflow-hidden bg-neutral-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full ${project.image.startsWith('/images/work/') ? 'object-contain' : 'object-cover'} transition-transform duration-700 ease-out group-hover:scale-[1.02]`}
                />
              </div>

              {/* Minimal Metadata */}
              <div className="flex items-baseline justify-between pt-1">
                <div>
                  <div className="flex items-center gap-2 text-[11px] lg:text-[12px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                    <ClientBrandLockup client={project.client} logoClassName="h-5 sm:h-6" />
                    <span>•</span>
                    <span>{project.category}</span>
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold text-[#111111] group-hover:text-neutral-600 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="w-8 h-8 rounded-full border border-neutral-200 group-hover:border-neutral-900 flex items-center justify-center transition-colors shrink-0 ml-4">
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#111111] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
