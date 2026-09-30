import React from 'react';

interface FinalCTAProps {
  onOpenContactModal: () => void;
  prefilledService?: string;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContactModal }) => {
  return (
    <section id="contact" className="bg-[#010101] text-white py-32 sm:py-44 lg:py-52">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="max-w-3xl space-y-8">
          
          {/* Small Label */}
          <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-neutral-500 block">
            HAVE SOMETHING IN MIND?
          </span>

          {/* Heading (Max 64px Desktop, NOT 100px+) */}
          <h2 className="text-[38px] sm:text-[50px] md:text-[58px] lg:text-[64px] font-bold tracking-[-0.035em] text-white leading-[0.98]">
            LET'S MAKE<br />
            SOMETHING MEMORABLE.
          </h2>

          {/* Supporting Text */}
          <p className="text-[17px] sm:text-[19px] text-neutral-400 font-normal leading-relaxed max-w-xl">
            Tell us what you're building, launching or trying to change.
          </p>

          {/* Action Button */}
          <div className="pt-4">
            <button
              onClick={onOpenContactModal}
              className="px-8 py-4 rounded-full bg-[#FFBB02] hover:bg-white text-black font-semibold text-[15px] tracking-tight transition-all duration-200 cursor-pointer inline-flex items-center gap-2 group shadow-sm"
            >
              <span>START A CONVERSATION</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
