import React, { useEffect, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle2 } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeFrame, setActiveFrame] = useState(0);

  const frames = [
    {
      title: "Kulture Woodcraft & Veneers",
      subtitle: "Tactile architectural textures & luxury product visuals",
      client: "Kulture Natural Surfaces",
      image: "/images/social-kulture.jpg",
      metric: "⚡ +168% Feed Engagement",
      timestamp: "00:15 / 01:45"
    },
    {
      title: "SOHO Residences Prime Tower",
      subtitle: "Full digital brand experience & architectural brochure",
      client: "SOHO Living Jubilee Hills",
      image: "/images/social-soho.jpg",
      metric: "🏢 40-Floor Architectural Landmark",
      timestamp: "00:45 / 01:45"
    },
    {
      title: "Turtle Wax Graphene Protection",
      subtitle: "High-performance automotive PPF social ads & storytelling",
      client: "Turtle Wax Global Automotive",
      image: "/images/social-turtlewax.jpg",
      metric: "🛡️ Graphene Shield Campaign",
      timestamp: "01:15 / 01:45"
    },
    {
      title: "Tata Motors Altroz & Punch Mobility",
      subtitle: "National mobility campaign & aspirational creative assets",
      client: "Tata Motors Commercial & Passenger",
      image: "/images/social-tatamotors.jpg",
      metric: "🚗 Pride On Wheels Campaign",
      timestamp: "01:40 / 01:45"
    }
  ];

  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % frames.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying, frames.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const current = frames[activeFrame];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-5xl bg-[#080808] border border-white/[0.14] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0c0c0c]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FC3520] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              Brand Masala Showreel · 2026 Studio Reel
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Stage */}
        <div className="relative aspect-[16/9] w-full bg-black overflow-hidden group">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out scale-[1.02] filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          {/* Floating Live Badge */}
          <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#FFBB02] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{current.metric}</span>
          </div>

          {/* Bottom Info Overlay */}
          <div className="absolute bottom-16 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono tracking-widest text-[#FFBB02] uppercase mb-1">
                {current.client}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                {current.title}
              </h3>
              <p className="text-sm text-neutral-300 mt-1 max-w-lg">
                {current.subtitle}
              </p>
            </div>

            <div className="text-xs font-mono text-neutral-400 tracking-wider">
              {current.timestamp}
            </div>
          </div>

          {/* Player Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between gap-4 border-t border-white/[0.08]">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-9 h-9 rounded-full bg-[#FFBB02] text-black flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black translate-x-0.5" />}
              </button>

              <div className="flex gap-1.5">
                {frames.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveFrame(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeFrame === idx ? 'w-8 bg-[#FFBB02]' : 'w-3 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Frame ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="px-4 py-2 bg-white hover:bg-[#FFBB02] text-black text-xs font-mono font-bold tracking-widest uppercase transition-colors"
            >
              Start A Project With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
