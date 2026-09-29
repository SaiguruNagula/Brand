import React from 'react';
import { CLIENTS_LIST } from '../data/portfolioData';
import { ClientBrandLockup } from './ClientBrandLockup';
export const Clients: React.FC = () => (
  <section id="clients" className="bg-[#F7F7F5] text-[#111111] py-24 sm:py-32">
    <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
      <span className="text-xs font-mono tracking-[0.2em] uppercase text-neutral-500 block mb-4">Collaborations</span>
      <h2 className="text-[32px] sm:text-[46px] font-semibold leading-tight mb-12">Brands we've worked with.</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 sm:gap-x-10">
        {CLIENTS_LIST.map(client => <div key={client.name} className="min-h-32 flex items-center justify-center text-center py-6 border-t border-neutral-200">
          <ClientBrandLockup client={client.name} className="max-w-full" textClassName="text-sm sm:text-base" />
        </div>)}
      </div>
    </div>
  </section>
);
