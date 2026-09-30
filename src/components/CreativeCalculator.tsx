import React, { useState } from 'react';
import { Calculator, ArrowRight, Zap, CheckCircle2, Clock, Users } from 'lucide-react';

interface CreativeCalculatorProps {
  onOpenConsultation: () => void;
}

export const CreativeCalculator: React.FC<CreativeCalculatorProps> = ({ onOpenConsultation }) => {
  const [socialVolume, setSocialVolume] = useState<number>(20);
  const [webPages, setWebPages] = useState<number>(3);
  const [needBranding, setNeedBranding] = useState<boolean>(true);

  // Dynamic calculations
  const totalAssetsEstimate = socialVolume + (webPages * 5) + (needBranding ? 12 : 0);
  const recommendedTier = totalAssetsEstimate < 25 ? 'Starter Growth' : totalAssetsEstimate < 50 ? 'Scale Enterprise' : 'Flagship Dedicated';
  const turnaround = totalAssetsEstimate < 25 ? '24–48 Hours' : 'Daily Constant Flow';
  const teamSize = totalAssetsEstimate < 25 ? '1 Senior Art Director + 1 Specialist' : totalAssetsEstimate < 50 ? '1 Creative Director + 2 Specialists' : 'Full Dedicated Creative Pod (3-4 Specialists)';

  return (
    <section id="pricing" className="py-24 sm:py-32 lg:py-36 bg-[#010101] border-t border-white/[0.08] relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#FFBB02] uppercase mb-4">
            Plans &amp; Creative Scope
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Estimate your creative scope<span className="text-[#FC3520]">.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Tailor your monthly creative engine. Select your projected monthly volume to see turnaround times and recommended creative pod composition.
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#0c0c0c] border border-white/[0.12] p-6 sm:p-10 lg:p-12">
          {/* Sliders & Controls */}
          <div className="lg:col-span-7 space-y-8">
            {/* Slider 1: Social & Ad Creatives */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  Social &amp; Performance Ad Creatives / Month
                </label>
                <span className="px-3.5 py-1 bg-white text-neutral-950 border border-neutral-200 font-mono font-bold text-sm shadow-sm">
                  {socialVolume} Assets
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                step="5"
                value={socialVolume}
                onChange={(e) => setSocialVolume(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#FFBB02]"
              />
              <div className="flex justify-between text-[11px] font-mono text-neutral-400 mt-2">
                <span>5 / mo (Starter)</span>
                <span>30 / mo (Growth)</span>
                <span>60+ / mo (High-Volume)</span>
              </div>
            </div>

            {/* Slider 2: Digital Web Pages or Landing Funnels */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  Web Pages &amp; Digital Interfaces / Month
                </label>
                <span className="px-3.5 py-1 bg-white text-neutral-950 border border-neutral-200 font-mono font-bold text-sm shadow-sm">
                  {webPages} Pages
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                value={webPages}
                onChange={(e) => setWebPages(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-white"
              />
              <div className="flex justify-between text-[11px] font-mono text-neutral-400 mt-2">
                <span>0 Pages</span>
                <span>5 Pages</span>
                <span>10+ Pages</span>
              </div>
            </div>

            {/* Toggle 3: Brand Identity & Packaging */}
            <div className="pt-4 border-t border-white/[0.08]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                    Include Brand Identity &amp; Print System
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Logo guidelines, typography hierarchy, print collateral, packaging
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setNeedBranding(!needBranding)}
                  className={`px-4 py-2 text-xs font-mono font-bold uppercase transition-colors border ${
                    needBranding
                      ? 'bg-[#FFBB02] text-black border-[#FFBB02]'
                      : 'bg-white text-neutral-900 border-white hover:bg-neutral-200'
                  }`}
                >
                  {needBranding ? 'Included ✓' : 'Add to Scope +'}
                </button>
              </div>
            </div>
          </div>

          {/* Right Summary Result Box (Crisp white high-contrast editorial card) */}
          <div className="lg:col-span-5 bg-white text-neutral-950 border border-neutral-200 shadow-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest font-semibold">
                  Recommended Creative Model
                </span>
                <span className="text-[10px] font-mono bg-[#FFBB02] text-neutral-950 px-2 py-0.5 uppercase font-bold tracking-wider">
                  ★ Custom Tailored
                </span>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-black text-neutral-950 uppercase tracking-tight">
                  {recommendedTier}
                </div>
                <div className="text-xs text-neutral-600 mt-1 font-medium">
                  Estimated Monthly Output: <strong className="text-black font-extrabold">~{totalAssetsEstimate} deliverables</strong>
                </div>
              </div>

              {/* Key Specs */}
              <div className="space-y-3 pt-4 border-t border-neutral-200 text-xs lg:text-sm font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D97706]" />
                    Turnaround:
                  </span>
                  <span className="text-neutral-950 font-bold">{turnaround}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#D97706]" />
                    Creative Pod:
                  </span>
                  <span className="text-neutral-950 font-bold text-right">{teamSize}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-600 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#D97706]" />
                    Revisions:
                  </span>
                  <span className="text-neutral-950 font-bold">Unlimited Active</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-neutral-200">
              <button
                onClick={onOpenConsultation}
                className="w-full py-4 bg-neutral-950 hover:bg-[#FFBB02] text-white hover:text-black font-mono font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Book Strategy Call For This Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <div className="text-center text-[10px] font-mono text-neutral-500 uppercase tracking-wider mt-3">
                No Long-Term Lock-in · Scale or Pause Any Time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
