import React, { useState } from 'react';
import { ArrowUpRight, Globe, Megaphone, Palette, MousePointer2, Video, Search, Smartphone, Layers } from 'lucide-react';
const services = [
  { name: 'Digital Marketing', description: 'Marketing across digital channels, bringing together content, campaigns and brand communication.', icon: Globe },
  { name: 'Social Media Marketing', description: 'Content and communication for a brand’s social media presence.', icon: Megaphone, image: 'kulture-social.webp', client: 'KULTURE', label: 'Social Media' },
  { name: 'Branding', description: 'The visual identity and expression of a brand.', icon: Palette, image: 'altossa-branding.webp', client: 'ALTOSSA', label: 'Branding' },
  { name: 'Web Development', description: 'Designing and developing websites for a brand’s digital presence.', icon: MousePointer2, image: 'svc-realty-website.webp', client: 'SVC REALTY', label: 'Website — Designing & Development' },
  { name: 'Performance Marketing', description: 'Digital marketing focused on campaign objectives and measurement.', icon: Layers },
  { name: 'UGC Content Creation', description: 'Creator-led content that brings a personal perspective to brand communication.', icon: Video },
  { name: 'SEO', description: 'Search engine optimization: the structure and content of a website in the context of search.', icon: Search },
  { name: 'App Development', description: 'Designing and developing application experiences.', icon: Smartphone },
];
export const ServiceExplorer: React.FC = () => {
  const [active, setActive] = useState(0);
  const service = services[active];
  const Icon = service.icon;
  return <section id="services" className="py-24 sm:py-32 bg-[#030304] border-t border-white/10">
    <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
      <div className="max-w-2xl mb-12">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FFBB02]">Our services</span>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight mt-5">Strategy. Creativity.<br />A brand's presence.</h2>
      </div>
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Choose a service">
        {services.map((item, index) => <button key={item.name} onClick={() => setActive(index)} aria-pressed={active === index} aria-controls="service-panel" className={`px-4 py-3 rounded-full text-xs sm:text-sm border transition-colors ${active === index ? 'bg-white text-black border-white' : 'text-neutral-400 border-white/15 hover:text-white hover:border-white/40'}`}>{item.name}</button>)}
      </div>
      <div id="service-panel" className="grid lg:grid-cols-2 gap-10 lg:gap-16 bg-[#09090C] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12">
        <div className="flex flex-col justify-between gap-8" aria-live="polite">
          <div>
            <Icon className="text-[#FFBB02] mb-8" size={32} strokeWidth={1.25} />
            <h3 className="text-2xl sm:text-3xl font-semibold">{service.name}</h3>
            <p className="text-neutral-400 leading-relaxed mt-5 max-w-md">{service.description}</p>
          </div>
          <a href="#portfolio" className="text-sm inline-flex items-center gap-2 text-white underline underline-offset-8">Explore our work <ArrowUpRight size={16} /></a>
        </div>
        {service.image ? <figure className="self-center">
          <img src={`/images/work/${service.image}`} alt={`${service.client} — ${service.label}`} loading="lazy" decoding="async" width="2000" height="1125" className="w-full h-auto rounded-xl" />
          <figcaption className="text-xs text-neutral-400 mt-4">{service.client} · {service.label}</figcaption>
        </figure> : <div className="min-h-48 sm:min-h-64 border border-white/10 rounded-2xl flex items-center justify-center text-[#FFBB02]/75 bg-[#0d0d10]" aria-hidden="true"><Icon size={104} strokeWidth={0.65} /></div>}
      </div>
    </div>
  </section>;
};
