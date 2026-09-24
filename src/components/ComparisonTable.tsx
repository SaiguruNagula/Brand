import React from 'react';
import { Check, X, Sparkles, ArrowRight } from 'lucide-react';

interface ComparisonTableProps {
  onOpenConsultation: () => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onOpenConsultation }) => {
  const comparisonRows = [
    {
      metric: 'Turnaround Speed',
      brandMasala: '24–48 Hours',
      brandMasalaHighlight: true,
      agency: '2–4 Weeks',
      inHouse: 'Backlogged / Slow',
      freelancer: 'Unpredictable'
    },
    {
      metric: 'Pricing Predictability',
      brandMasala: 'Flat Transparent Scope',
      brandMasalaHighlight: true,
      agency: 'Billable Hours Creep',
      inHouse: '$120k+ Salaries + Benefits',
      freelancer: 'Hourly Surprises'
    },
    {
      metric: 'Creative Breadth',
      brandMasala: 'Full 360° Suite (Branding to Web)',
      brandMasalaHighlight: true,
      agency: 'Limited by Department',
      inHouse: 'Single Skillset',
      freelancer: 'Only 1 Discipline'
    },
    {
      metric: 'Revision Policy',
      brandMasala: 'Unlimited Until Approved',
      brandMasalaHighlight: true,
      agency: 'Extra Change Orders',
      inHouse: 'Internal Fatigue',
      freelancer: '2 Rounds Max'
    },
    {
      metric: 'Onboarding Time',
      brandMasala: 'Same-Day / Immediate',
      brandMasalaHighlight: true,
      agency: '3–6 Weeks Scoping',
      inHouse: '60–90 Days Hiring',
      freelancer: 'Hit or Miss'
    },
    {
      metric: 'Source File Ownership',
      brandMasala: '100% Full Commercial Rights',
      brandMasalaHighlight: true,
      agency: 'Often Held Hostage',
      inHouse: 'Full Ownership',
      freelancer: 'Extra Licensing Fees'
    }
  ];

  return (
    <section id="comparison" className="py-24 sm:py-32 bg-[#F6F7F9] text-neutral-900 border-y border-neutral-300/80 relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#D97706] uppercase mb-4">
            Why Choose Brand Masala
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-neutral-950 leading-tight">
            How we stack up<span className="text-[#FC3520]">.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600">
            Compare the Brand Masala creative engine with traditional agencies, full-time in-house hiring, and marketplace freelancers.
          </p>
        </div>

        {/* Comparison Matrix Table (Crisp white architectural card) */}
        <div className="overflow-x-auto no-scrollbar border border-neutral-200 bg-white shadow-xl shadow-black/5">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="border-b border-neutral-200 bg-[#F0F2F5]">
                <th className="p-6 text-xs font-mono uppercase tracking-widest text-neutral-600 font-bold w-1/4">
                  Feature / Capability
                </th>
                <th className="p-6 text-xs font-mono uppercase tracking-widest text-black bg-[#FFBB02] font-black w-1/4 shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 fill-black" />
                    <span>Brand Masala</span>
                  </div>
                </th>
                <th className="p-6 text-xs font-mono uppercase tracking-widest text-neutral-600 font-semibold w-1/6">
                  Traditional Agency
                </th>
                <th className="p-6 text-xs font-mono uppercase tracking-widest text-neutral-600 font-semibold w-1/6">
                  In-House Team
                </th>
                <th className="p-6 text-xs font-mono uppercase tracking-widest text-neutral-600 font-semibold w-1/6">
                  Freelancers
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 text-xs sm:text-sm font-medium">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-neutral-50/80 transition-colors">
                  <td className="p-6 text-neutral-900 font-semibold font-mono text-xs uppercase tracking-wider">
                    {row.metric}
                  </td>
                  <td className="p-6 bg-[#FFBB02]/15 text-neutral-950 font-bold border-x border-[#FFBB02]/40">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 stroke-[3]" />
                      <span className="text-black font-extrabold">{row.brandMasala}</span>
                    </div>
                  </td>
                  <td className="p-6 text-neutral-600">
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-neutral-400 shrink-0" />
                      <span>{row.agency}</span>
                    </div>
                  </td>
                  <td className="p-6 text-neutral-600">
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-neutral-400 shrink-0" />
                      <span>{row.inHouse}</span>
                    </div>
                  </td>
                  <td className="p-6 text-neutral-600">
                    <div className="flex items-center gap-2">
                      <X className="w-4 h-4 text-neutral-400 shrink-0" />
                      <span>{row.freelancer}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-8 p-6 bg-neutral-900 text-white border border-neutral-800 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-neutral-200 font-mono">
            Ready to experience frictionless creative execution?
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 bg-[#FFBB02] hover:bg-white text-black text-xs font-mono font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <span>Discuss Your Requirements</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
