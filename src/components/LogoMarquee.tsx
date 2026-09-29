import React, { useState } from 'react';
import { CLIENTS_LIST } from '../data/portfolioData';
import { ClientBrandLockup } from './ClientBrandLockup';
export const LogoMarquee: React.FC = () => {
  const [paused, setPaused] = useState(false);
  const clients = CLIENTS_LIST.filter(client => client.logo);
  return <section className="py-12 sm:py-16 bg-[#FAF3DF] text-[#1A1816] border-y border-[#E5D5B3] overflow-hidden" aria-label="Client collaborations">
    <div className="max-w-[1360px] mx-auto px-6 sm:px-10 flex flex-wrap justify-between gap-4 mb-8">
      <p className="text-xs font-mono uppercase tracking-[0.2em]">Brands we've worked with</p>
      <button className="text-xs underline underline-offset-4" onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? 'Play logo animation' : 'Pause logo animation'}</button>
    </div>
    <div className="animate-marquee v1-marquee" style={{ animationPlayState: paused ? 'paused' : undefined }}>
      {[0,1].map(copy => <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1 ? true : undefined}>
        {clients.map(client => <div key={client.name} className="w-[190px] sm:w-[230px] h-24 mx-3 flex items-center justify-center px-7 bg-white rounded-xl"><ClientBrandLockup client={client.name} /></div>)}
      </div>)}
    </div>
  </section>;
};
