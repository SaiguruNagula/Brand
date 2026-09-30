import React from 'react';
import { BrandMasalaLogo } from './BrandMasalaLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#010101] text-neutral-400 py-16 sm:py-20 border-t border-white/[0.08]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          {/* Logo */}
          <div>
            <BrandMasalaLogo size="md" showTagline={false} variant="light" />
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-8 text-[14px] font-normal text-neutral-400">
            <a href="#selected-work" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-6 text-[14px] text-neutral-400">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600 font-mono">
          <p>© {new Date().getFullYear()} Brand Masala. All rights reserved.</p>
          <p>A Brand Consultancy Firm</p>
        </div>

      </div>
    </footer>
  );
};
