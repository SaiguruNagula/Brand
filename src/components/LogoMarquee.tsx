import React from 'react';
import { CLIENTS_LIST } from '../data/portfolioData';

export const LogoMarquee: React.FC = () => {
  // Split clients into two rows for dynamic multi-directional movement
  const row1 = CLIENTS_LIST.slice(0, 12);
  const row2 = CLIENTS_LIST.slice(12);

  return (
    <section className="py-14 bg-[#FAF3DF] border-y border-[#E5D5B3] overflow-hidden relative selection:bg-[#FFB000] selection:text-black">
      {/* Soft warm light-yellow ambient glow */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#FFF9EC] via-[#FAF3DF] to-[#FFF9EC] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-[1400px] mx-auto px-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D97706] shadow-[0_0_8px_rgba(217,119,6,0.5)]" />
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#1F1D1A] font-bold">
            Trusted by Ambitious Brands &amp; Enterprises
          </span>
        </div>
        <div className="text-[11px] font-mono text-[#786E5E] uppercase tracking-wider font-semibold">
          Automotive · Real Estate · Architecture · Luxury Retail
        </div>
      </div>

      {/* Row 1: Leftward Infinite Marquee */}
      <div className="relative w-full overflow-hidden flex mb-4">
        {/* Left & Right Smooth Edge Fade Out for light yellowish background */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#FAF3DF] via-[#FAF3DF]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#FAF3DF] via-[#FAF3DF]/90 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-5 py-2">
          {[...row1, ...row1, ...row1].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center justify-center px-6 py-3.5 bg-white border border-[#E5D5B3] shadow-[0_2px_8px_rgba(180,140,40,0.06)] hover:border-[#D97706] hover:shadow-[0_4px_16px_rgba(217,119,6,0.16)] transition-all duration-200 group shrink-0 min-w-[175px] rounded-sm"
            >
              <div className="text-center">
                <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#1A1816] group-hover:text-black transition-colors">
                  {client.name}
                </span>
                <span className="block text-[9.5px] font-mono font-medium text-[#7C7262] group-hover:text-[#B45309] transition-colors mt-0.5">
                  {client.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Rightward / Reverse Infinite Marquee */}
      <div className="relative w-full overflow-hidden flex">
        {/* Left & Right Smooth Edge Fade Out for light yellowish background */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#FAF3DF] via-[#FAF3DF]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#FAF3DF] via-[#FAF3DF]/90 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-reverse flex items-center gap-5 py-2">
          {[...row2, ...row2, ...row2].map((client, idx) => (
            <div
              key={`${client.name}-rev-${idx}`}
              className="flex items-center justify-center px-6 py-3.5 bg-white border border-[#E5D5B3] shadow-[0_2px_8px_rgba(180,140,40,0.06)] hover:border-[#D97706] hover:shadow-[0_4px_16px_rgba(217,119,6,0.16)] transition-all duration-200 group shrink-0 min-w-[175px] rounded-sm"
            >
              <div className="text-center">
                <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#1A1816] group-hover:text-black transition-colors">
                  {client.name}
                </span>
                <span className="block text-[9.5px] font-mono font-medium text-[#7C7262] group-hover:text-[#B45309] transition-colors mt-0.5">
                  {client.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
