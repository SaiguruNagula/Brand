import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface AnnouncementBarProps {
  onOpenConsultation: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenConsultation }) => {
  return (
    <div className="bg-[#0e0e0e] border-b border-white/[0.08] text-neutral-300 py-2.5 px-4 text-xs font-mono tracking-wide relative z-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between sm:justify-center gap-3">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFBB02] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFBB02]" />
          </span>
          <span className="font-black bg-white text-neutral-950 px-2 py-0.5 uppercase tracking-widest text-[10px] shadow-sm">
            CREATIVE-AS-A-SERVICE
          </span>
          <span className="hidden sm:inline text-neutral-500">|</span>
          <span className="hidden sm:inline text-neutral-300">
            Brand Masala dedicated creative partner for high-growth brands
          </span>
        </div>

        <button
          onClick={onOpenConsultation}
          className="flex items-center gap-1.5 px-2.5 py-0.5 bg-white/10 hover:bg-[#FFBB02] text-white hover:text-black font-bold transition-all duration-200 cursor-pointer text-[11px] uppercase tracking-wider group"
        >
          <span>Book a Strategy Call</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};
