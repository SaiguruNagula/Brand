import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BrandMasalaLogo } from './BrandMasalaLogo';

interface AboutProps {
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="bg-white text-[#111111] py-28 sm:py-36 lg:py-44 border-t border-neutral-100">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Official Brand Masala Logo in Place of Text */}
          <div className="lg:col-span-5">
            <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-neutral-500 block mb-4">
              ABOUT
            </span>
            <div className="inline-block" aria-label="Brand Masala — A Brand Consultancy Firm">
              <BrandMasalaLogo 
                variant="dark" 
                size="lg" 
                layout="stacked" 
                showTagline={true} 
              />
            </div>
          </div>

          {/* Right Column: Concise, Confident Editorial Statement */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-[20px] sm:text-[24px] lg:text-[26px] font-normal tracking-tight text-[#111111] leading-[1.4]">
              We create bold, strategic and result-oriented marketing solutions that help businesses stand out in a competitive world.
            </p>

            <p className="text-[16px] sm:text-[17px] text-neutral-500 font-normal leading-[1.7] max-w-2xl">
              From social media and content to branding and digital experiences, we bring strategy and creative execution together under one roof.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenContact}
                className="group inline-flex items-center gap-2 text-[14px] font-medium tracking-tight text-[#111111] hover:text-neutral-600 transition-colors cursor-pointer"
              >
                <span>Learn how we collaborate</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
