import React from 'react';
import { BrandMasalaLogo } from './BrandMasalaLogo';
import { V1_NAV } from './Navbar';
export const Footer: React.FC = () => (
  <footer id="footer" className="bg-[#010101] text-neutral-400 py-14 sm:py-20 border-t border-white/10">
    <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
        <a href="#home" aria-label="Brand Masala home"><BrandMasalaLogo size="md" /></a>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-7 gap-y-4 text-sm">
          {[...V1_NAV, {label:'Contact',href:'#contact'}].map(link => <a key={link.href} href={link.href} className="hover:text-white">{link.label}</a>)}
        </nav>
      </div>
      <p className="mt-12 pt-6 border-t border-white/10 text-xs font-mono">Brand Masala · A Brand Consultancy Firm</p>
    </div>
  </footer>
);
