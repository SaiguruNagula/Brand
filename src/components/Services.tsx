import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onInquireService?: (serviceName: string) => void;
}

interface ServiceRow {
  number: string;
  name: string;
  description: string;
}

const SERVICES_LIST: ServiceRow[] = [
  {
    number: "01",
    name: "Performance Marketing",
    description: "Data-led paid campaigns across Meta and Google built around clear acquisition targets and measurable ROAS."
  },
  {
    number: "02",
    name: "Social Media Marketing",
    description: "Strategic feed curation and audience engagement designed to make your brand recognizable and memorable."
  },
  {
    number: "03",
    name: "Content Creation",
    description: "Editorial photography, short-form video, and persuasive copy engineered for high attention in crowded channels."
  },
  {
    number: "04",
    name: "Branding",
    description: "Comprehensive visual systems, typography standards, and brand identity guidelines with lasting distinction."
  },
  {
    number: "05",
    name: "SEO",
    description: "Technical architecture optimization and intent-based content strategies compounding organic search visibility."
  },
  {
    number: "06",
    name: "Web Development",
    description: "Fast, bespoke digital web experiences and component systems engineered for seamless conversion and elegance."
  },
  {
    number: "07",
    name: "App Development",
    description: "Functional digital products, mobile applications, and custom workflows tailored to solve genuine business needs."
  }
];

export const Services: React.FC<ServicesProps> = ({ onInquireService }) => {
  return (
    <section id="services" className="bg-[#F7F7F5] text-[#111111] py-28 sm:py-36 lg:py-44">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 max-w-3xl">
          <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-neutral-500 block mb-3">
            WHAT WE DO
          </span>
          <h2 className="text-[34px] sm:text-[44px] lg:text-[50px] font-bold tracking-[-0.035em] text-[#111111] leading-[1.05]">
            EVERYTHING YOUR BRAND NEEDS<br className="hidden sm:inline" /> TO MOVE FORWARD.
          </h2>
        </div>

        {/* Minimal Editorial List (Zero Cards, Zero Blocks) */}
        <div className="border-t border-neutral-300/80 divide-y divide-neutral-200">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.number}
              onClick={() => onInquireService && onInquireService(service.name)}
              className="group py-8 sm:py-10 transition-colors duration-200 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-8"
            >
              {/* Left: Number + Title */}
              <div className="flex items-baseline gap-6 sm:gap-10 md:w-5/12">
                <span className="font-mono text-[12px] text-neutral-400 group-hover:text-[#FFBB02] transition-colors">
                  {service.number}
                </span>
                <h3 className="text-[22px] sm:text-[26px] font-semibold tracking-tight text-[#111111] group-hover:text-neutral-600 transition-colors">
                  {service.name}
                </h3>
              </div>

              {/* Middle: One-line Description */}
              <p className="text-[14px] sm:text-[15px] text-neutral-500 font-normal leading-relaxed md:w-6/12 pl-10 md:pl-0">
                {service.description}
              </p>

              {/* Right: Clean Action Arrow */}
              <div className="md:w-1/12 flex justify-end items-center pl-10 md:pl-0">
                <div className="w-8 h-8 rounded-full border border-neutral-300 group-hover:border-neutral-900 flex items-center justify-center transition-all duration-200">
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
