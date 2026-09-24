import React from 'react';
import { Project } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
  featuredProjects: Project[];
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onSelectProject,
  featuredProjects
}) => {
  const pKulture = featuredProjects[0]; // Kulture Woodcraft
  const pSoho = featuredProjects[1]; // Soho Residences
  const pTurtleWax = featuredProjects[2]; // Turtle Wax
  const pTata = featuredProjects[3]; // Tata Motors

  return (
    <section id="selected-work" className="bg-white text-[#111111] py-28 sm:py-36 lg:py-44">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6 border-b border-neutral-200/80 pb-10">
          <div>
            <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-neutral-500 block mb-3">
              Selected Work
            </span>
            <h2 className="text-[36px] sm:text-[46px] lg:text-[54px] font-bold tracking-[-0.035em] text-[#111111] leading-tight">
              Ideas made visible.
            </h2>
          </div>
          <p className="text-[15px] sm:text-[16px] text-neutral-500 max-w-sm font-normal leading-relaxed">
            Curated brand systems, campaign storytelling, and digital interfaces crafted for lasting distinction.
          </p>
        </div>

        {/* Curated Exhibition Grid: 1 Large Feature + 2 Supporting Visuals + 1 Large Feature */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-36">
          
          {/* Item 01: Large Feature — KULTURE WOODCRAFT */}
          {pKulture && (
            <div
              onClick={() => onSelectProject(pKulture)}
              className="group cursor-pointer flex flex-col space-y-6"
            >
              <div className="relative w-full aspect-[16/10] sm:aspect-[21/10] rounded-[16px] overflow-hidden bg-neutral-100">
                <img
                  src={pKulture.image}
                  alt={pKulture.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-2">
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-neutral-500">
                    <span className="text-[#FC3520] font-semibold">{pKulture.client}</span>
                    <span>—</span>
                    <span>{pKulture.category}</span>
                  </div>
                  <h3 className="text-[22px] sm:text-[28px] font-semibold tracking-tight text-[#111111] group-hover:text-neutral-600 transition-colors">
                    {pKulture.title}
                  </h3>
                  <p className="text-[15px] text-neutral-500 leading-relaxed pt-1">
                    {pKulture.summary}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-500 group-hover:text-[#111111] transition-colors shrink-0">
                  <span>View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          )}

          {/* Items 02 & 03: Two Supporting Visuals — SOHO & TURTLE WAX */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
            
            {/* Supporting Visual 1: SOHO */}
            {pSoho && (
              <div
                onClick={() => onSelectProject(pSoho)}
                className="group cursor-pointer flex flex-col space-y-5"
              >
                <div className="relative w-full aspect-[4/3] rounded-[14px] overflow-hidden bg-neutral-100">
                  <img
                    src={pSoho.image}
                    alt={pSoho.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-neutral-500">
                    <span className="text-[#FFBB02] font-semibold">{pSoho.client}</span>
                    <span>—</span>
                    <span>{pSoho.category}</span>
                  </div>
                  <h4 className="text-[20px] sm:text-[24px] font-semibold tracking-tight text-[#111111] group-hover:text-neutral-600 transition-colors">
                    {pSoho.title}
                  </h4>
                  <p className="text-[14px] text-neutral-500 leading-relaxed">
                    {pSoho.summary}
                  </p>
                </div>
              </div>
            )}

            {/* Supporting Visual 2: TURTLE WAX */}
            {pTurtleWax && (
              <div
                onClick={() => onSelectProject(pTurtleWax)}
                className="group cursor-pointer flex flex-col space-y-5"
              >
                <div className="relative w-full aspect-[4/3] rounded-[14px] overflow-hidden bg-neutral-100">
                  <img
                    src={pTurtleWax.image}
                    alt={pTurtleWax.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-neutral-500">
                    <span className="text-[#FFBB02] font-semibold">{pTurtleWax.client}</span>
                    <span>—</span>
                    <span>{pTurtleWax.category}</span>
                  </div>
                  <h4 className="text-[20px] sm:text-[24px] font-semibold tracking-tight text-[#111111] group-hover:text-neutral-600 transition-colors">
                    {pTurtleWax.title}
                  </h4>
                  <p className="text-[14px] text-neutral-500 leading-relaxed">
                    {pTurtleWax.summary}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Item 04: Large Feature — TATA MOTORS */}
          {pTata && (
            <div
              onClick={() => onSelectProject(pTata)}
              className="group cursor-pointer flex flex-col space-y-6"
            >
              <div className="relative w-full aspect-[16/10] sm:aspect-[21/10] rounded-[16px] overflow-hidden bg-neutral-100">
                <img
                  src={pTata.image}
                  alt={pTata.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-2">
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-neutral-500">
                    <span className="text-[#FC3520] font-semibold">{pTata.client}</span>
                    <span>—</span>
                    <span>{pTata.category}</span>
                  </div>
                  <h3 className="text-[22px] sm:text-[28px] font-semibold tracking-tight text-[#111111] group-hover:text-neutral-600 transition-colors">
                    {pTata.title}
                  </h3>
                  <p className="text-[15px] text-neutral-500 leading-relaxed pt-1">
                    {pTata.summary}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-500 group-hover:text-[#111111] transition-colors shrink-0">
                  <span>View Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
