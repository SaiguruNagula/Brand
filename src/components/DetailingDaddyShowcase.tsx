import React from 'react';
import { MapPin, Car } from 'lucide-react';
import { DetailingDaddyLogo } from './DetailingDaddyLogo';

interface DetailingDaddyShowcaseProps {
  onOpenConsultation?: () => void;
  className?: string;
  isModal?: boolean;
}

export const DetailingDaddyShowcase: React.FC<DetailingDaddyShowcaseProps> = ({
  onOpenConsultation,
  className = '',
  isModal = false
}) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Photo Frame Container */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[21/10] rounded-[16px] overflow-hidden bg-[#0A0A0A] border border-neutral-800 shadow-2xl flex flex-col justify-between">
        {/* Studio Branded Cover with approved Detailing Daddy media */}
          <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 bg-gradient-to-br from-[#121110] via-[#0A0A0A] to-[#171410]">
            <img src="/images/homepage/hero4.webp" alt="Detailing Daddy car-care artwork" className="absolute inset-0 w-full h-full object-contain opacity-30 pointer-events-none" />
            {/* Hexagonal Honeycomb Ceiling Lights Vector Motif */}
            <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 80 L140 100 L140 150 L100 170 L60 150 L60 100 Z" stroke="#FFFFFF" strokeWidth="4" />
                <path d="M180 80 L220 100 L220 150 L180 170 L140 150 L140 100 Z" stroke="#FFFFFF" strokeWidth="4" />
                <path d="M260 80 L300 100 L300 150 L260 170 L220 150 L220 100 Z" stroke="#FFFFFF" strokeWidth="4" />
                <path d="M340 80 L380 100 L380 150 L340 170 L300 150 L300 100 Z" stroke="#FFFFFF" strokeWidth="4" />
                <path d="M420 80 L460 100 L460 150 L420 170 L380 150 L380 100 Z" stroke="#FFFFFF" strokeWidth="4" />
                <path d="M500 80 L540 100 L540 150 L500 170 L460 150 L460 100 Z" stroke="#FFFFFF" strokeWidth="4" />
                <path d="M580 80 L620 100 L620 150 L580 170 L540 150 L540 100 Z" stroke="#FFFFFF" strokeWidth="4" />
                <path d="M660 80 L700 100 L700 150 L660 170 L620 150 L620 100 Z" stroke="#FFFFFF" strokeWidth="4" />
              </svg>
            </div>

            {/* Top Bar: Official Logo & Location */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 shadow-lg">
                <DetailingDaddyLogo theme="dark" showSubtitle={true} className="h-8 sm:h-10 w-auto" />
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF7A00]/15 border border-[#FF7A00]/30 text-[11px] font-mono text-[#FF7A00] font-bold">
                <Car className="w-3.5 h-3.5" />
                <span>TG 10 BA 5186 • MAHINDRA XUV700</span>
              </div>
            </div>

            {/* Center: Studio Headline */}
            <div className="relative z-10 my-auto text-center space-y-2 py-4">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#FF7A00] uppercase font-bold block">
                CAR PROTECTION STUDIO • KOMPALLY
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Mirror-Finish Ceramic Armor &amp; Self-Healing PPF
              </h2>
              <p className="text-sm text-neutral-400 max-w-xl mx-auto font-normal">
                Multi-stage paint correction under hexagonal overhead LED illumination with high-pressure wash bay prep.
              </p>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>Kompally Branch | Contact: 9989930929</span>
              </div>

            </div>
          </div>
      </div>
    </div>
  );
};
