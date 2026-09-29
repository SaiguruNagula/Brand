import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
export const Hero: React.FC = () => (
  <section id="home" className="hero-page v1-hero" aria-label="Brand Masala — A Brand Consultancy Firm">
    <div className="hero-bg v1-hero-atmosphere" aria-hidden="true" />
    <div className="hero-center">
      <p className="font-mono text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#FFBB02] mb-7 anim">Brand Masala · A Brand Consultancy Firm</p>
      <h1 className="headline">
        <span className="line-1">A unique story.</span>
        <span className="line-2">A powerful presence.</span>
      </h1>
      <p className="subhead anim" style={{ '--d': '0.28s' } as React.CSSProperties}>A dynamic marketing agency built on the belief that every brand deserves both.</p>
      <div className="cta-group anim" style={{ '--d': '0.4s' } as React.CSSProperties}>
        <a href="#selected-work" className="cta-btn">EXPLORE OUR WORK <ArrowRight size={16} /></a>
        <a href="#contact" className="cta-secondary-btn">LET'S TALK <ArrowRight size={16} /></a>
      </div>
    </div>
    <a href="#selected-work" className="relative z-10 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 pb-4">Discover the work <ArrowDown size={14} /></a>
  </section>
);
