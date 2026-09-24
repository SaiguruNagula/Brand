import React from 'react';

interface ApproachColumn {
  number: string;
  title: string;
  statement: string;
}

const APPROACH_ITEMS: ApproachColumn[] = [
  {
    number: "01",
    title: "STRATEGY",
    statement: "Understand before we create."
  },
  {
    number: "02",
    title: "CREATIVE",
    statement: "Make people stop and look."
  },
  {
    number: "03",
    title: "EXECUTION",
    statement: "Make it work everywhere."
  }
];

export const Approach: React.FC = () => {
  return (
    <section id="approach" className="bg-[#010101] text-white py-28 sm:py-36 lg:py-44">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Minimal Section Header */}
        <div className="mb-20 sm:mb-28 max-w-2xl">
          <span className="text-[12px] font-mono tracking-[0.2em] uppercase text-neutral-500 block mb-4">
            OUR APPROACH
          </span>
          <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-bold tracking-[-0.035em] text-white leading-[1.02]">
            STRATEGY.<br />
            CREATIVITY.<br />
            EXECUTION.
          </h2>
        </div>

        {/* Three Columns — Extremely Minimal, Zero Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 lg:gap-20 pt-12 border-t border-white/10">
          {APPROACH_ITEMS.map((item) => (
            <div key={item.number} className="flex flex-col space-y-4">
              <span className="font-mono text-[12px] text-neutral-500 tracking-wider">
                {item.number}
              </span>
              <h3 className="text-[20px] sm:text-[24px] font-bold tracking-tight text-white uppercase">
                {item.title}
              </h3>
              <p className="text-[16px] sm:text-[18px] text-neutral-400 font-normal leading-relaxed">
                {item.statement}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
