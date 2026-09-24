import React, { useState } from 'react';
import { Send, CheckCircle2, Clock, Zap, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  onOpenConsultation: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenConsultation }) => {
  const [requestType, setRequestType] = useState('Instagram Carousel');
  const [urgency, setUrgency] = useState('Standard (24h)');
  const [briefSubmitted, setBriefSubmitted] = useState(false);

  const sampleTypes = [
    { title: 'Instagram Carousel', speed: '24h', icon: '📱' },
    { title: 'Brand Identity Suite', speed: '48h', icon: '🎨' },
    { title: 'Landing Page UI', speed: '48h', icon: '💻' },
    { title: 'Luxury Brochure & Monograph', speed: '48h', icon: '📖' },
    { title: 'Performance Video Reel', speed: '24h', icon: '🎬' }
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-[#010101] border-t border-white/[0.08] relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#FFBB02] uppercase mb-4">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Creative production<br />
            without the friction<span className="text-[#FC3520]">.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-normal">
            Say goodbye to endless agency email chains and unpredictable freelance invoices. Here is how Brand Masala delivers consistent creative momentum:
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 sm:mb-20">
          {/* Step 1 */}
          <div className="p-8 bg-[#0c0c0c] border border-white/[0.08] relative group hover:border-[#FFBB02]/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
                <span className="font-mono text-xs px-2.5 py-1 bg-white text-neutral-950 uppercase tracking-widest font-black shadow-sm">
                  STEP 01
                </span>
                <span className="text-xs font-mono text-neutral-400">10 MIN SETUP</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-3">
                Drop Your Creative Brief
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                Submit requests through our streamlined portal, Slack channel, or direct partner email. Upload assets, reference links, and goals in seconds.
              </p>
            </div>
            <div className="pt-6 mt-8 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-neutral-400">
              <Zap className="w-3.5 h-3.5 text-[#FFBB02]" />
              <span>Unlimited Active Queue</span>
            </div>
          </div>

          {/* Step 2 (Signature Crisp White Focal Step) */}
          <div className="p-8 bg-white text-neutral-950 border border-neutral-200 shadow-2xl relative group transition-all duration-300 flex flex-col justify-between transform md:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200">
                <span className="font-mono text-xs px-2.5 py-1 bg-[#FFBB02] text-neutral-950 uppercase tracking-widest font-black shadow-sm">
                  STEP 02
                </span>
                <span className="text-xs font-mono text-neutral-600 font-semibold">DEDICATED TALENT</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-950 uppercase tracking-tight mb-3">
                Specialist Production Begins
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                Your dedicated creative director and specialized designers get to work immediately. Every asset is built precisely to your brand guidelines.
              </p>
            </div>
            <div className="pt-6 mt-8 border-t border-neutral-200 flex items-center gap-2 text-xs font-mono text-neutral-700 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-black" />
              <span>Senior Creative Oversight Included</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-8 bg-[#0c0c0c] border border-white/[0.08] relative group hover:border-[#FFBB02]/50 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
                <span className="font-mono text-xs px-2.5 py-1 bg-white text-neutral-950 uppercase tracking-widest font-black shadow-sm">
                  STEP 03
                </span>
                <span className="text-xs font-mono text-neutral-400">24-48H TURNAROUND</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-3">
                Review, Revise &amp; Launch
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                Receive organized, production-ready deliverables. Need an adjustment? Revisions are rapid and unlimited until you are completely satisfied.
              </p>
            </div>
            <div className="pt-6 mt-8 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-neutral-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#FFBB02]" />
              <span>Full Source Files (.FIG, .AI)</span>
            </div>
          </div>
        </div>

        {/* Interactive Request Simulator Sandbox (Design Pickle signature interactive feature) */}
        <div className="p-6 sm:p-10 bg-[#0c0c0c] border border-white/[0.12] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#FFBB02] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Creative Request Sandbox</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
                Try Submitting a Request
              </h4>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
              <span>Avg. Queue Time: <strong className="text-white">~2.4 hrs</strong></span>
              <span>·</span>
              <span>Next Day Delivery Available</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2.5">
                  Select Project Type:
                </label>
                <div className="flex flex-wrap gap-2">
                  {sampleTypes.map((t) => (
                    <button
                      key={t.title}
                      onClick={() => setRequestType(t.title)}
                      className={`px-3.5 py-2 text-xs font-mono transition-all border ${
                        requestType === t.title
                          ? 'border-[#FFBB02] bg-[#FFBB02]/15 text-white font-bold'
                          : 'border-white/10 text-neutral-300 hover:border-white/20 bg-neutral-900'
                      }`}
                    >
                      <span className="mr-1.5">{t.icon}</span>
                      <span>{t.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2.5">
                  Delivery Speed:
                </label>
                <div className="flex gap-2">
                  {['Standard (24-48h)', 'Expedited Priority (Same Day)'].map((spd) => (
                    <button
                      key={spd}
                      onClick={() => setUrgency(spd)}
                      className={`px-3.5 py-2 text-xs font-mono transition-all border ${
                        urgency === spd
                          ? 'border-white bg-white text-black font-bold'
                          : 'border-white/10 text-neutral-300 hover:border-white/20 bg-neutral-900'
                      }`}
                    >
                      {spd}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Live Simulation Ticket (Crisp White Physical Docket) */}
            <div className="lg:col-span-5 bg-white text-neutral-950 border border-neutral-200 shadow-xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-200 text-[11px] font-mono text-neutral-500">
                  <span className="bg-neutral-900 text-white px-2 py-0.5 font-bold tracking-wider">TICKET #BM-2026</span>
                  <span className="text-emerald-700 font-bold">● DISPATCH READY</span>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="text-base font-bold text-neutral-950">
                    Deliverable: <span className="text-[#D97706] font-extrabold">{requestType}</span>
                  </div>
                  <div className="text-xs text-neutral-600 font-mono">
                    Priority SLA: <strong className="text-neutral-950">{urgency}</strong>
                  </div>
                  <div className="text-xs text-neutral-600 font-mono">
                    Assigned Pod: Senior Art Director + Dedicated Designer
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-200">
                {briefSubmitted ? (
                  <div className="p-3 bg-[#FFBB02]/20 border border-[#FFBB02] text-center text-xs text-neutral-950 font-mono font-bold">
                    ✓ Mock brief initialized! Ready for your strategy session.
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setBriefSubmitted(true);
                      setTimeout(() => onOpenConsultation(), 700);
                    }}
                    className="w-full py-3.5 bg-neutral-950 hover:bg-[#FFBB02] text-white hover:text-black font-mono font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Simulate Queue &amp; Book Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
