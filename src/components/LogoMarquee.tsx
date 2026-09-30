import React from 'react';
import { CLIENTS_LIST } from '../data/portfolioData';
import { BrandMasalaLogo } from './BrandMasalaLogo';
import { clientLogoSrc } from './ClientBrandLockup';
import { DetailingDaddyLogo } from './DetailingDaddyLogo';
import { Sparkles } from 'lucide-react';

export const LogoMarquee: React.FC = () => {
  // Ensure Detailing Daddy is explicitly featured in BOTH rows with its official logo
  const detailingDaddyClient = { name: "DETAILING DADDY", category: "Car Protection Studio" };
  
  const allOtherClients = CLIENTS_LIST.filter(c => c.name !== "DETAILING DADDY");
  
  // Row 1: Detailing Daddy placed as 2nd card
  const row1Base = allOtherClients.slice(0, 9);
  const row1 = [row1Base[0], detailingDaddyClient, ...row1Base.slice(1)];

  // Row 2: Detailing Daddy placed right after 1st card
  const row2Base = allOtherClients.slice(9);
  const row2 = [row2Base[0], detailingDaddyClient, ...row2Base.slice(1)];

  // Brand Masala ticker phrases with star/cross glyphs
  const tickerItems = [
    { text: 'A BRAND CONSULTANCY FIRM', highlight: true },
    { text: 'CREATIVE DIRECTION & BRAND ARCHITECTURE', highlight: false },
    { text: 'HIGH-VELOCITY SOCIAL MEDIA & CONTENT', highlight: false },
    { text: 'BESPOKE WEB EXPERIENCES & UI/UX', highlight: false },
    { text: 'PRINT, MONOGRAPHS & LUXURY COLLATERAL', highlight: false },
    { text: 'TRUSTED BY 200+ INDUSTRY LEADERS', highlight: true },
    { text: 'INTELLIGENCE DESIGNED TO EVOLVE', highlight: false },
  ];

  return (
    <section 
      id="clients-marquee" 
      className="py-14 sm:py-16 bg-[#FAF3DF] border-y border-[#E5D5B3] overflow-hidden relative selection:bg-[#FFB000] selection:text-black"
      aria-label="Brand Masala Client Partnerships and Marquee"
    >
      {/* Soft warm light-yellow ambient glow */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#FFF9EC] via-[#FAF3DF] to-[#FFF9EC] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Top Header Row with Brand Masala Logo in Black */}
      <div className="max-w-[1400px] mx-auto px-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-5 relative z-10">
        {/* Left: Official Brand Masala Black Logo */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group inline-flex items-center transition-transform hover:scale-[1.02] focus:outline-none"
            aria-label="Brand Masala — Home"
            title="Brand Masala"
          >
            <BrandMasalaLogo variant="black" size="md" layout="horizontal" showTagline={true} useImage={true} />
          </a>

          <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-[#E5D5B3]">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1A1816] text-[#FAF3DF] text-[10px] font-mono font-bold tracking-wider uppercase shadow-sm">
              <span className="text-[#FFB000]">✦</span>
              <span>CREATIVE PARTNER</span>
            </span>
          </div>
        </div>

        {/* Right: Category Specs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] font-mono text-[#5A5245] uppercase tracking-wider font-semibold">
          <span className="text-[#1A1816] font-bold">Trusted by Industry Leaders:</span>
          <span>Automotive</span>
          <span className="text-[#D97706]">✦</span>
          <span>Real Estate</span>
          <span className="text-[#D97706]">✦</span>
          <span>Architecture</span>
          <span className="text-[#D97706]">✦</span>
          <span>Luxury Retail</span>
          <span className="text-[#D97706]">✦</span>
          <span>D2C</span>
        </div>
      </div>

      {/* Dynamic Gold/Yellow Kinetic Ticker Ribbon (Brand Masala Logo + Star/Cross Icons ✦) */}
      <div className="relative w-full overflow-hidden flex bg-[#F3E7C4] border-y border-[#E2CF9F] py-2.5 mb-6 shadow-inner">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F3E7C4] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F3E7C4] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-ticker flex items-center gap-8 py-0.5 whitespace-nowrap">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={`ticker-${idx}`} className="flex items-center gap-4 shrink-0">
              {/* Brand Masala Micro Lockup */}
              <div className="flex items-baseline font-black tracking-tight text-xs text-black">
                <span>brand</span>
                <span className="text-[#D97706] ml-0.5">masala</span>
                <span className="text-[#E83828] ml-0.5">.</span>
              </div>

              {/* Star / Cross Glyph */}
              <span className="text-[#D97706] text-xs font-bold select-none">✦</span>

              {/* Editorial Phrase */}
              <span className={`text-[11px] font-mono tracking-[0.2em] uppercase font-bold ${
                item.highlight ? 'text-black bg-[#EBD8A8] px-2 py-0.5 rounded-sm' : 'text-[#2D2820]'
              }`}>
                {item.text}
              </span>

              {/* Secondary Star / Cross Glyph */}
              <span className="text-[#7C7262] text-xs select-none">✕</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 1: Leftward Infinite Marquee with Brand Masala Anchor Cards */}
      <div className="relative w-full overflow-hidden flex mb-4">
        {/* Left & Right Smooth Edge Fade Out */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#FAF3DF] via-[#FAF3DF]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#FAF3DF] via-[#FAF3DF]/90 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-4 py-2">
          {[...row1, ...row1, ...row1].map((client, idx) => {
            const isBrandCard = idx > 0 && idx % 6 === 0;

            if (isBrandCard) {
              return (
                <React.Fragment key={`bm-card-r1-wrap-${idx}`}>
                  <div
                    key={`bm-card-r1-${idx}`}
                    className="flex items-center justify-center px-6 py-3.5 bg-[#141312] border-2 border-[#D97706] shadow-[0_4px_16px_rgba(217,119,6,0.18)] transition-all duration-200 group shrink-0 min-w-[190px] rounded-sm"
                  >
                    <div className="text-center">
                      <div className="flex items-baseline justify-center text-sm font-black tracking-tight text-white">
                        <span>brand</span>
                        <span className="text-[#FFB000] ml-1">masala</span>
                        <span className="text-[#E83828] ml-0.5 font-black">.</span>
                      </div>
                      <span className="block text-[8.5px] font-mono font-bold tracking-[0.22em] text-[#FFB000] uppercase mt-0.5">
                        ✦ THE CREATIVE ENGINE
                      </span>
                    </div>
                  </div>

                  <div
                    key={`${client.name}-${idx}`}
                    className="flex items-center justify-center px-6 py-3.5 bg-white border border-[#E5D5B3] shadow-[0_2px_8px_rgba(180,140,40,0.06)] hover:border-[#D97706] hover:shadow-[0_4px_16px_rgba(217,119,6,0.16)] transition-all duration-200 group shrink-0 min-w-[185px] rounded-sm"
                  >
                    {client.name === "DETAILING DADDY" ? (
                      <div className="text-center flex flex-col items-center justify-center min-h-[38px] relative">
                        <span className="sr-only">Detailing Daddy Car Protection Studio</span>
                        <span className="absolute inset-0 opacity-0 pointer-events-none select-none -z-10 font-bold tracking-wider" aria-hidden="true">
                          DETAILING DADDY
                        </span>
                        <DetailingDaddyLogo showSubtitle={true} className="h-7 sm:h-8 w-auto transition-transform group-hover:scale-105" />
                      </div>
                    ) : (
                      <div className="text-center flex flex-col items-center justify-center min-h-[36px]">
                        {clientLogoSrc(client.name) ? <img src={clientLogoSrc(client.name)} alt={client.name} className="max-w-[140px] max-h-[28px] object-contain" /> : <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#1A1816] group-hover:text-black transition-colors">{client.name}</span>}
                        <span className="block text-[9.5px] font-mono font-medium text-[#7C7262] group-hover:text-[#B45309] transition-colors mt-0.5">
                          {client.category}
                        </span>
                      </div>
                    )}
                  </div>
                </React.Fragment>
              );
            }

            return (
              <div
                key={`${client.name}-${idx}`}
                className={`flex items-center justify-center px-6 py-3.5 bg-white border shadow-[0_2px_8px_rgba(180,140,40,0.06)] hover:border-[#D97706] hover:shadow-[0_4px_16px_rgba(217,119,6,0.16)] transition-all duration-200 group shrink-0 rounded-sm ${
                  client.name === "DETAILING DADDY" ? 'border-[#FF7A00] min-w-[210px] ring-1 ring-[#FF7A00]/20' : 'border-[#E5D5B3] min-w-[180px]'
                }`}
              >
                {client.name === "DETAILING DADDY" ? (
                  <div className="text-center flex flex-col items-center justify-center min-h-[38px] relative">
                    <span className="sr-only">Detailing Daddy Car Protection Studio</span>
                    <span className="absolute inset-0 opacity-0 pointer-events-none select-none -z-10 font-bold tracking-wider" aria-hidden="true">
                      DETAILING DADDY
                    </span>
                    <DetailingDaddyLogo showSubtitle={true} className="h-7 sm:h-8 w-auto transition-transform group-hover:scale-105" />
                  </div>
                ) : (
                  <div className="text-center flex flex-col items-center justify-center min-h-[36px]">
                    {clientLogoSrc(client.name) ? <img src={clientLogoSrc(client.name)} alt={client.name} className="max-w-[140px] max-h-[28px] object-contain" /> : <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#1A1816] group-hover:text-black transition-colors">{client.name}</span>}
                    <span className="block text-[9.5px] font-mono font-medium text-[#7C7262] group-hover:text-[#B45309] transition-colors mt-0.5">
                      {client.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2: Rightward / Reverse Infinite Marquee with Brand Masala Anchor Cards */}
      <div className="relative w-full overflow-hidden flex">
        {/* Left & Right Smooth Edge Fade Out */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#FAF3DF] via-[#FAF3DF]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#FAF3DF] via-[#FAF3DF]/90 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-reverse flex items-center gap-4 py-2">
          {[...row2, ...row2, ...row2].map((client, idx) => {
            const isBrandCard = idx > 0 && idx % 6 === 3;

            if (isBrandCard) {
              return (
                <React.Fragment key={`bm-card-r2-wrap-${idx}`}>
                  <div
                    key={`bm-card-r2-${idx}`}
                    className="flex items-center justify-center px-6 py-3.5 bg-white border-2 border-[#1A1816] shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-200 group shrink-0 min-w-[190px] rounded-sm"
                  >
                    <div className="text-center">
                      <div className="flex items-baseline justify-center text-sm font-black tracking-tight text-black">
                        <span>brand</span>
                        <span className="text-[#D97706] ml-1">masala</span>
                        <span className="text-[#E83828] ml-0.5 font-black">.</span>
                      </div>
                      <span className="block text-[8.5px] font-mono font-bold tracking-[0.2em] text-[#5A5245] uppercase mt-0.5">
                        A BRAND CONSULTANCY FIRM
                      </span>
                    </div>
                  </div>

                  <div
                    key={`${client.name}-rev-${idx}`}
                    className="flex items-center justify-center px-6 py-3.5 bg-white border border-[#E5D5B3] shadow-[0_2px_8px_rgba(180,140,40,0.06)] hover:border-[#D97706] hover:shadow-[0_4px_16px_rgba(217,119,6,0.16)] transition-all duration-200 group shrink-0 min-w-[185px] rounded-sm"
                  >
                    {client.name === "DETAILING DADDY" ? (
                      <div className="text-center flex flex-col items-center justify-center min-h-[38px] relative">
                        <span className="sr-only">Detailing Daddy Car Protection Studio</span>
                        <span className="absolute inset-0 opacity-0 pointer-events-none select-none -z-10 font-bold tracking-wider" aria-hidden="true">
                          DETAILING DADDY
                        </span>
                        <DetailingDaddyLogo showSubtitle={true} className="h-7 sm:h-8 w-auto transition-transform group-hover:scale-105" />
                      </div>
                    ) : (
                      <div className="text-center flex flex-col items-center justify-center min-h-[36px]">
                        {clientLogoSrc(client.name) ? <img src={clientLogoSrc(client.name)} alt={client.name} className="max-w-[140px] max-h-[28px] object-contain" /> : <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#1A1816] group-hover:text-black transition-colors">{client.name}</span>}
                        <span className="block text-[9.5px] font-mono font-medium text-[#7C7262] group-hover:text-[#B45309] transition-colors mt-0.5">
                          {client.category}
                        </span>
                      </div>
                    )}
                  </div>
                </React.Fragment>
              );
            }

            return (
              <div
                key={`${client.name}-rev-${idx}`}
                className={`flex items-center justify-center px-6 py-3.5 bg-white border shadow-[0_2px_8px_rgba(180,140,40,0.06)] hover:border-[#D97706] hover:shadow-[0_4px_16px_rgba(217,119,6,0.16)] transition-all duration-200 group shrink-0 rounded-sm ${
                  client.name === "DETAILING DADDY" ? 'border-[#FF7A00] min-w-[210px] ring-1 ring-[#FF7A00]/20' : 'border-[#E5D5B3] min-w-[180px]'
                }`}
              >
                {client.name === "DETAILING DADDY" ? (
                  <div className="text-center flex flex-col items-center justify-center min-h-[38px] relative">
                    <span className="sr-only">Detailing Daddy Car Protection Studio</span>
                    <span className="absolute inset-0 opacity-0 pointer-events-none select-none -z-10 font-bold tracking-wider" aria-hidden="true">
                      DETAILING DADDY
                    </span>
                    <DetailingDaddyLogo showSubtitle={true} className="h-7 sm:h-8 w-auto transition-transform group-hover:scale-105" />
                  </div>
                ) : (
                  <div className="text-center flex flex-col items-center justify-center min-h-[36px]">
                    {clientLogoSrc(client.name) ? <img src={clientLogoSrc(client.name)} alt={client.name} className="max-w-[140px] max-h-[28px] object-contain" /> : <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#1A1816] group-hover:text-black transition-colors">{client.name}</span>}
                    <span className="block text-[9.5px] font-mono font-medium text-[#7C7262] group-hover:text-[#B45309] transition-colors mt-0.5">
                      {client.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
