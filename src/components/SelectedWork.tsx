import React, { useEffect, useRef } from 'react';
import { Project } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { ClientBrandLockup } from './ClientBrandLockup';
import { DetailingDaddyShowcase } from './DetailingDaddyShowcase';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
  featuredProjects: Project[];
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  onSelectProject,
  featuredProjects
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const targets = sectionRef.current.querySelectorAll<HTMLElement>('[data-work-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('work-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -10% 0px' });

    targets.forEach((target) => {
      if (target.getBoundingClientRect().top < window.innerHeight) return;
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);

  // Select projects dynamically
  const pDetailingDaddy = featuredProjects.find((p) => p.client === 'DETAILING DADDY') || featuredProjects[0];
  const pKulture = featuredProjects.find((p) => p.client === 'KULTURE');
  const pSoho = featuredProjects.find((p) => p.client.includes('SOHO'));
  const pTurtleWax = featuredProjects.find((p) => p.client === 'TURTLE WAX');
  const pTata = featuredProjects.find((p) => p.client === 'TATA MOTORS');

  return (
    <section ref={sectionRef} id="selected-work" className="bg-transparent text-[#111111] py-28 sm:py-36 lg:py-44 2xl:py-48">
      <div className="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6 border-b border-neutral-200/80 pb-10">
          <div>
            <span data-work-reveal className="text-[12px] font-mono tracking-[0.2em] uppercase text-neutral-500 block mb-3">
              Selected Work
            </span>
            <h2 data-work-reveal style={{ animationDelay: '80ms' }} className="text-[36px] sm:text-[46px] lg:text-[60px] 2xl:text-[72px] font-bold tracking-[-0.035em] text-[#111111] leading-tight">
              Ideas made visible.
            </h2>
          </div>
          <p data-work-reveal style={{ animationDelay: '160ms' }} className="text-[15px] sm:text-[16px] lg:text-[18px] text-neutral-500 max-w-sm font-normal leading-relaxed">
            Curated brand systems, campaign storytelling, and digital interfaces crafted for lasting distinction.
          </p>
        </div>

        {/* Curated Exhibition Grid */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-36">
          
          {/* Item 01: Hero Lead Feature — DETAILING DADDY */}
          {pDetailingDaddy && (
            <div data-work-reveal className="flex flex-col space-y-6">
              <DetailingDaddyShowcase onOpenConsultation={() => onSelectProject(pDetailingDaddy)} />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-2">
                <div className="space-y-2 max-w-2xl">
                  {/* Company Logo over Text with Name behind for SEO */}
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-neutral-500">
                    <ClientBrandLockup 
                      client={pDetailingDaddy.client} 
                      logoClassName="h-7 sm:h-8"
                    />
                    <span>—</span>
                    <span>{pDetailingDaddy.category}</span>
                    {pDetailingDaddy.location && (
                      <>
                        <span className="hidden sm:inline">·</span>
                        <span className="hidden sm:inline text-neutral-400 font-mono text-[11px]">{pDetailingDaddy.location}</span>
                      </>
                    )}
                  </div>

                  <h3 
                    onClick={() => onSelectProject(pDetailingDaddy)}
                    className="text-[24px] sm:text-[30px] lg:text-[34px] font-semibold tracking-tight text-[#111111] hover:text-neutral-600 transition-colors cursor-pointer"
                  >
                    {pDetailingDaddy.title}
                  </h3>
                  
                  {pDetailingDaddy.headline && (
                    <p className="text-[15px] lg:text-[16px] font-medium text-[#FF6A00]">
                      "{pDetailingDaddy.headline}"
                    </p>
                  )}

                  <p className="text-[15px] lg:text-[17px] text-neutral-500 leading-relaxed pt-0.5">
                    {pDetailingDaddy.summary}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectProject(pDetailingDaddy)}
                  className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-[#111111] transition-colors shrink-0 cursor-pointer"
                >
                  <span>View Project Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 hover:translate-x-0.5 hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          )}

          {/* Items 02 & 03: Supporting Visuals — KULTURE & SOHO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
            
            {/* Supporting Visual 1: KULTURE */}
            {pKulture && (
              <div
                onClick={() => onSelectProject(pKulture)}
                data-work-reveal className="group cursor-pointer flex flex-col space-y-5"
              >
                <div className="relative w-full aspect-[4/3] rounded-[14px] overflow-hidden bg-neutral-100">
                  <img
                    src={pKulture.image}
                    alt={pKulture.title}
                    className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-neutral-500">
                    <ClientBrandLockup client={pKulture.client} />
                    <span>—</span>
                    <span>{pKulture.category}</span>
                  </div>
                  <h4 className="text-[20px] sm:text-[24px] lg:text-[27px] font-semibold tracking-tight text-[#111111] group-hover:text-neutral-600 transition-colors">
                    {pKulture.title}
                  </h4>
                  <p className="text-[14px] lg:text-[16px] text-neutral-500 leading-relaxed">
                    {pKulture.summary}
                  </p>
                </div>
              </div>
            )}

            {/* Supporting Visual 2: SOHO */}
            {pSoho && (
              <div
                onClick={() => onSelectProject(pSoho)}
                data-work-reveal style={{ animationDelay: '100ms' }} className="group cursor-pointer flex flex-col space-y-5"
              >
                <div className="relative w-full aspect-[4/3] rounded-[14px] overflow-hidden bg-neutral-100">
                  <img
                    src={pSoho.image}
                    alt={pSoho.title}
                    className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-neutral-500">
                    <ClientBrandLockup client={pSoho.client} />
                    <span>—</span>
                    <span>{pSoho.category}</span>
                  </div>
                  <h4 className="text-[20px] sm:text-[24px] lg:text-[27px] font-semibold tracking-tight text-[#111111] group-hover:text-neutral-600 transition-colors">
                    {pSoho.title}
                  </h4>
                  <p className="text-[14px] lg:text-[16px] text-neutral-500 leading-relaxed">
                    {pSoho.summary}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Item 04: Supporting Visual — TATA MOTORS */}
          {pTata && (
            <div
              onClick={() => onSelectProject(pTata)}
              data-work-reveal className="group cursor-pointer flex flex-col space-y-6"
            >
              <div className="relative w-full aspect-[16/10] sm:aspect-[21/10] rounded-[16px] overflow-hidden bg-neutral-100">
                <img
                  src={pTata.image}
                  alt={pTata.title}
                  className="w-full h-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pt-2">
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-neutral-500">
                    <ClientBrandLockup client={pTata.client} />
                    <span>—</span>
                    <span>{pTata.category}</span>
                  </div>
                  <h3 className="text-[22px] sm:text-[28px] lg:text-[32px] font-semibold tracking-tight text-[#111111] group-hover:text-neutral-600 transition-colors">
                    {pTata.title}
                  </h3>
                  <p className="text-[15px] lg:text-[17px] text-neutral-500 leading-relaxed pt-1">
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
