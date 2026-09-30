import React from 'react';
import { ClientBrandLockup } from './ClientBrandLockup';

interface ClientItem {
  name: string;
  category: string;
}

const FEATURED_CLIENTS: ClientItem[] = [
  { name: "DETAILING DADDY", category: "Car Protection Studio" },
  { name: "TATA MOTORS", category: "Automotive" },
  { name: "TURTLE WAX", category: "Surface Care" },
  { name: "SOHO JUBILEE HILLS", category: "Luxury Residences" },
  { name: "KULTURE", category: "Architectural Veneers" },
  { name: "MERCEDES-BENZ", category: "Luxury Automotive" },
  { name: "ATHER ENERGY", category: "Electric Mobility" },
  { name: "SVC REALTY", category: "Infrastructure" },
  { name: "RAWPCHIC", category: "Bespoke Furniture" },
  { name: "ROCH", category: "Hospitality" },
  { name: "TRILIGHT", category: "Commercial Spaces" },
  { name: "JAINS RADHAKRISHNA", category: "Real Estate" }
];

export const Clients: React.FC = () => {
  return (
    <section id="clients" className="bg-[#F7F7F5] text-[#111111] py-28 sm:py-36 lg:py-44">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-20 sm:mb-28 max-w-2xl">
          <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-neutral-500 block mb-3">
            COLLABORATIONS
          </span>
          <h2 className="text-[34px] sm:text-[46px] lg:text-[52px] font-bold tracking-[-0.035em] text-[#111111] leading-tight">
            BRANDS WE'VE WORKED WITH
          </h2>
        </div>

        {/* Quiet, Spacious Monochrome Presentation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-12 sm:gap-x-16 gap-y-12 sm:gap-y-16 border-t border-neutral-300/70 pt-12">
          {FEATURED_CLIENTS.map((client) => (
            <div key={client.name} className="flex flex-col space-y-1">
              <div className="flex items-center min-h-[36px]">
                <ClientBrandLockup 
                  client={client.name} 
                  logoClassName="h-7 sm:h-8"
                  textClassName="text-[17px] sm:text-[19px] font-semibold tracking-tight text-[#111111]/90 hover:text-black transition-colors"
                />
              </div>
              <span className="text-[12px] font-mono tracking-wider text-neutral-400 uppercase">
                {client.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
