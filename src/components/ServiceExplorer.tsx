import React, { useState } from 'react';
import { Sparkles, Clock, Check, ArrowRight, Layers, FileCode2, Palette, Video, Globe, Megaphone } from 'lucide-react';

interface ServiceExplorerProps {
  onOpenConsultation: (capability?: string) => void;
}

interface CapabilityTab {
  id: string;
  name: string;
  icon: React.ElementType;
  headline: string;
  description: string;
  turnaround: string;
  deliverables: string[];
  image: string;
  featuredWork: string;
  client: string;
  badge: string;
}

export const ServiceExplorer: React.FC<ServiceExplorerProps> = ({ onOpenConsultation }) => {
  const [activeTabId, setActiveTabId] = useState<string>('social');

  const capabilities: CapabilityTab[] = [
    {
      id: 'social',
      name: 'Social Media & Content',
      icon: Megaphone,
      headline: 'Stop-the-scroll social campaigns that build lasting brand equity.',
      description: 'Daily feeds, high-converting carousels, campaign key visuals, and short-form motion engineered for algorithms and human attention alike.',
      turnaround: '24–48h',
      deliverables: ['Editorial Feed Architecture', 'Instagram & LinkedIn Carousels', 'Motion Video & Reels', 'Brand Guidelines Ad Stills', 'Paid Media Visuals'],
      image: '/images/social-kulture.jpg',
      featuredWork: 'Kulture Tactile Veneers Campaign',
      client: 'KULTURE',
      badge: 'High Velocity'
    },
    {
      id: 'branding',
      name: 'Brand Identity & Systems',
      icon: Palette,
      headline: 'Distinctive visual identities designed to outlast short-lived market trends.',
      description: 'Comprehensive brand standards, typography hierarchy, primary and secondary marks, color theory, and tactile packaging architecture.',
      turnaround: '3–5 Days',
      deliverables: ['Primary & Secondary Marks', 'Comprehensive Guidelines Book', 'Typography & Color Systems', 'Packaging & Spatial Collateral', 'Iconography System'],
      image: '/images/web-soho-residences.jpg',
      featuredWork: 'Altossa & SOHO Luxury Identity',
      client: 'SOHO RESIDENCES',
      badge: 'Core Identity'
    },
    {
      id: 'web',
      name: 'Web & Digital Experiences',
      icon: Globe,
      headline: 'Clean, high-performance digital touchpoints that convert visitors into clients.',
      description: 'Modern, responsive web applications and landing destinations built on performant front-ends with fluid UX, micro-interactions, and flawless typography.',
      turnaround: '3–7 Days',
      deliverables: ['Bespoke Web Pages', 'Interactive Portfolios', 'Figma Design Architecture', 'Design System Components', 'SEO Metadata & Microdata'],
      image: '/images/web-svc-realty.jpg',
      featuredWork: 'SVC Realty Construction Platform',
      client: 'SVC REALTY',
      badge: 'Interactive UI'
    },
    {
      id: 'performance',
      name: 'Performance & Paid Ads',
      icon: Layers,
      headline: 'Data-informed creative iterations engineered for measurable return on ad spend.',
      description: 'High-intent visual assets paired with multi-variant testing hooks, clear benefit callouts, and laser-targeted product framing.',
      turnaround: '24–48h',
      deliverables: ['Performance Display Banners', 'Retargeting Ad Creative Suite', 'Lead Generation Creatives', 'A/B Test Variations', 'Headline & Hook Testing'],
      image: '/images/social-turtlewax.jpg',
      featuredWork: 'Turtle Wax Graphene Protection',
      client: 'TURTLE WAX',
      badge: 'ROI Focused'
    },
    {
      id: 'print',
      name: 'Print & Environmental',
      icon: FileCode2,
      headline: 'Tangible editorial collateral, luxury monographs, and architectural signage.',
      description: 'High-touch tactile print executions, embossed luxury monographs, newspaper broadsheets, and large-format outdoor architectural presences.',
      turnaround: '48–72h',
      deliverables: ['Hardbound Editorial Brochures', 'Front-Page Broadsheets', 'Architectural Facade Signage', 'Corporate Stationery Suites', 'Foil & Emboss Tooling'],
      image: '/images/social-soho.jpg',
      featuredWork: 'SOHO Jubilee Hills Monograph',
      client: 'SOHO LIVING',
      badge: 'Tactile Craft'
    }
  ];

  const activeTab = capabilities.find((c) => c.id === activeTabId) || capabilities[0];
  const IconComponent = activeTab.icon;

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#030304] border-t border-white/[0.08] relative overflow-hidden">
      {/* Subtle Apple-style duo atmospheric glow (Titanium Azure + Soft Saffron) */}
      <div 
        className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-[#3B82F6]/[0.035] rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-24 left-1/4 w-[450px] h-[450px] bg-[#FFB000]/[0.025] rounded-full blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Minimalist Apple-inspired Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            {/* Apple-style Capsule Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-300 font-medium">
                What We Deliver
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-semibold tracking-[-0.03em] text-white leading-[1.08]">
              Crafted for brands that demand perfection<span className="text-[#3B82F6]">.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 font-normal max-w-md leading-relaxed">
            One dedicated brand consultancy. Full-spectrum creative execution across social feeds, print collateral, and responsive web platforms.
          </p>
        </div>

        {/* Apple Segmented Floating Pill Bar */}
        <div className="flex justify-start sm:justify-center mb-10 overflow-x-auto no-scrollbar py-1">
          <div className="inline-flex p-1 rounded-full bg-white/[0.035] border border-white/[0.08] backdrop-blur-xl gap-1 shrink-0">
            {capabilities.map((tab) => {
              const isActive = activeTabId === tab.id;
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs font-medium tracking-tight transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-black shadow-lg shadow-black/20 font-semibold'
                      : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <TabIcon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-neutral-400'}`} />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Minimal Bento Stage (Apple Inspired) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#09090C] border border-white/[0.09] rounded-3xl p-6 sm:p-10 lg:p-12 relative shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          {/* Left Details Panel */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#60A5FA] text-[11px] font-mono font-medium tracking-wider uppercase">
                  {activeTab.badge}
                </span>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-neutral-400">
                  <Clock className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>Avg. Turnaround: <strong className="text-white font-medium">{activeTab.turnaround}</strong></span>
                </div>
              </div>

              {/* Headline */}
              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-[-0.02em] leading-snug">
                {activeTab.headline}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
                {activeTab.description}
              </p>

              {/* Minimal Apple-style Deliverable List */}
              <div className="pt-2 space-y-3">
                <div className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                  Included In This Discipline
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeTab.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <div className="w-4 h-4 rounded-full bg-[#3B82F6]/15 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#60A5FA]" />
                      </div>
                      <span className="font-normal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-5">
              <button
                onClick={() => onOpenConsultation(activeTab.name)}
                className="px-6 py-3 rounded-full bg-white hover:bg-neutral-200 text-black font-semibold text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-2 group shadow-sm"
              >
                <span>Inquire {activeTab.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#3B82F6] transition-transform group-hover:translate-x-1" />
              </button>

              <div className="text-xs font-mono text-neutral-400">
                100% Commercial Rights · Native Figma &amp; Adobe Files
              </div>
            </div>
          </div>

          {/* Right Visual Stage */}
          <div className="lg:col-span-6 relative flex flex-col justify-center">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] bg-black rounded-2xl border border-white/[0.09] overflow-hidden group shadow-2xl">
              <img
                src={activeTab.image}
                alt={activeTab.featuredWork}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              {/* Top Floating Glass Badge */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-xl px-3.5 py-1.5 rounded-full border border-white/15 text-[11px] font-mono tracking-wider text-white">
                Partner: <span className="text-[#60A5FA] font-semibold">{activeTab.client}</span>
              </div>

              {/* Bottom Showcase Strip */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/70 backdrop-blur-xl rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#60A5FA] uppercase tracking-widest font-medium">
                    Delivered Project
                  </div>
                  <div className="text-sm font-semibold text-white tracking-tight">
                    {activeTab.featuredWork}
                  </div>
                </div>

                <button
                  onClick={() => onOpenConsultation(activeTab.featuredWork)}
                  className="px-3.5 py-1.5 rounded-full bg-white/[0.1] hover:bg-white text-white hover:text-black text-xs font-mono font-medium transition-all duration-200 border border-white/20"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
