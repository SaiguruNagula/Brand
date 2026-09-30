import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, Sparkles, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenContact: (service?: string) => void;
  onExploreWork: () => void;
  onOpenShowreel?: () => void;
}

interface StatConfig {
  icon: string;
  target: number;
  suffix: string;
  decimals: number;
  label: string;
  delay: string;
  duration: number;
  startOffset: number;
}

const STATS_DATA: StatConfig[] = [
  {
    icon: '<',
    target: 150,
    suffix: '+',
    decimals: 0,
    label: 'Campaigns Delivered',
    delay: '0.5s',
    duration: 1500,
    startOffset: 480
  },
  {
    icon: '%',
    target: 99.4,
    suffix: '%',
    decimals: 1,
    label: 'Client Retention',
    delay: '0.58s',
    duration: 1580,
    startOffset: 570
  },
  {
    icon: '*',
    target: 24,
    suffix: '/7',
    decimals: 0,
    label: 'Creative Velocity',
    delay: '0.66s',
    duration: 1660,
    startOffset: 660
  },
  {
    icon: '#',
    target: 2.4,
    suffix: 'M+',
    decimals: 1,
    label: 'Audience Reach',
    delay: '0.74s',
    duration: 1740,
    startOffset: 750
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreWork, onOpenShowreel }) => {
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'work' | 'about' | 'clients'>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [statValues, setStatValues] = useState<string[]>(['0', '0.0', '0', '0.0']);

  const statsContainerRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);

  // Stats count-up animation using easeOutCubic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25 && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;

            STATS_DATA.forEach((stat, idx) => {
              setTimeout(() => {
                let startTimestamp: number | null = null;

                const step = (timestamp: number) => {
                  if (!startTimestamp) startTimestamp = timestamp;
                  const elapsed = timestamp - startTimestamp;
                  const progress = Math.min(elapsed / stat.duration, 1);
                  const eased = 1 - Math.pow(1 - progress, 3);
                  const currentVal = eased * stat.target;

                  setStatValues((prev) => {
                    const next = [...prev];
                    next[idx] = currentVal.toFixed(stat.decimals);
                    return next;
                  });

                  if (progress < 1) {
                    requestAnimationFrame(step);
                  } else {
                    setStatValues((prev) => {
                      const next = [...prev];
                      next[idx] = stat.target.toFixed(stat.decimals);
                      return next;
                    });
                  }
                };

                requestAnimationFrame(step);
              }, stat.startOffset);
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (statsContainerRef.current) {
      observer.observe(statsContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Keyboard and resize listeners for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 720) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavClick = (tab: 'home' | 'services' | 'work' | 'about' | 'clients') => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);

    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'services') {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'work') {
      onExploreWork();
    } else if (tab === 'about') {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'clients') {
      const el = document.getElementById('clients');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-page" aria-label="Brand Masala — A Brand Consultancy Firm">
      {/* EXACT FULL-VIEWPORT BACKGROUND VIDEO COVER */}
      <div className="hero-bg" aria-hidden="true">
        <video className="bg-video" autoPlay muted loop playsInline>
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4"
            type="video/mp4"
          />
        </video>
        {/* Subtle cinematic gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
      </div>

      {/* =========================================================================
          1) HEADER REGION (TOP, SHRINK 0)
         ========================================================================= */}
      <header className="hero-header">
        <div className="header-inner">
          {/* Left Region: BIG BRAND MASALA LOGO (SHIFTED TO TOP LEFT, NOT IN CIRCLE) */}
          <div className="header-left">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="top-left-brand-logo"
              title="Brand Masala — Home"
              aria-label="Brand Masala Home"
            >
              <div className="brand-title">
                <span className="brand-word">brand</span>
                <div className="masala-row">
                  <span className="masala-word">masala</span>
                  <span className="masala-dot">.</span>
                </div>
              </div>
              <span className="brand-tagline">
                A Brand Consultancy Firm
              </span>
            </a>
          </div>

          {/* Center Region: White Navigation Pill */}
          <div className="header-center">
            <nav className="nav-pill desktop-nav" aria-label="Brand Masala navigation">
              <button
                onClick={() => handleNavClick('home')}
                className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className={`nav-item ${activeTab === 'services' ? 'active' : ''}`}
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('work')}
                className={`nav-item ${activeTab === 'work' ? 'active' : ''}`}
              >
                Work
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`nav-item ${activeTab === 'about' ? 'active' : ''}`}
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('clients')}
                className={`nav-item ${activeTab === 'clients' ? 'active' : ''}`}
              >
                Clients
              </button>
            </nav>
          </div>

          {/* Right Region: Let's Talk pill on desktop, Burger on mobile */}
          <div className="header-right">
            <button
              onClick={() => onOpenContact('Brand Consultation')}
              className="signin-btn desktop-signin"
            >
              Let's Talk
            </button>

            {/* Mobile Circular Burger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`mobile-burger ${isMobileMenuOpen ? 'open' : ''}`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="burger-bar" />
              <span className="burger-bar" />
              <span className="burger-bar" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay & Sheet (≤720px) */}
      {isMobileMenuOpen && (
        <>
          <div
            className="mobile-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="mobile-sheet" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-1">
              <span className="text-xs font-black tracking-tight text-black flex items-baseline">
                <span>brand</span>
                <span className="text-[#FFB000] ml-0.5">masala</span>
                <span className="text-[#E83828] ml-0.5">.</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">Consultancy</span>
            </div>
            <button
              onClick={() => handleNavClick('home')}
              className={`sheet-link ${activeTab === 'home' ? 'active' : ''}`}
              style={{ animationDelay: '0.04s' }}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`sheet-link ${activeTab === 'services' ? 'active' : ''}`}
              style={{ animationDelay: '0.08s' }}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('work')}
              className={`sheet-link ${activeTab === 'work' ? 'active' : ''}`}
              style={{ animationDelay: '0.12s' }}
            >
              Portfolio Work
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`sheet-link ${activeTab === 'about' ? 'active' : ''}`}
              style={{ animationDelay: '0.16s' }}
            >
              About &amp; Leadership
            </button>
            <button
              onClick={() => handleNavClick('clients')}
              className={`sheet-link ${activeTab === 'clients' ? 'active' : ''}`}
              style={{ animationDelay: '0.20s' }}
            >
              Clients
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenContact('Direct Inquiry');
              }}
              className="sheet-signin"
              style={{ animationDelay: '0.24s' }}
            >
              Schedule Consultation
            </button>
          </div>
        </>
      )}

      {/* =========================================================================
          2) HERO REGION (CENTER, FLEX 1)
         ========================================================================= */}
      <div className="hero-center">
        {/* Trust Row: Overlapping Avatar Rings with Real Brand Masala Clients */}
        <div className="trust-row anim" style={{ '--d': '0.05s' } as React.CSSProperties}>
          {/* Avatar 1: Mercedes-Benz */}
          <div className="trust-avatar" title="Mercedes-Benz Partner">
            <div className="trust-inner-circle">
              <i className="fa-brands fa-mercedes" aria-hidden="true" />
            </div>
          </div>

          {/* Avatar 2: Amazon / Global Brand */}
          <div className="trust-avatar" title="Amazon & Enterprise Clients">
            <div className="trust-inner-circle">
              <i className="fa-brands fa-amazon" aria-hidden="true" />
            </div>
          </div>

          {/* Avatar 3: Google */}
          <div className="trust-avatar" title="Google & Digital Growth">
            <div className="trust-inner-circle">
              <i className="fa-brands fa-google" aria-hidden="true" />
            </div>
          </div>

          {/* Overlapping Trust Pill with Brand Masala Authority */}
          <div className="trust-pill">
            Trusted by 200+ Leading Brands &amp; Enterprises
          </div>
        </div>

        {/* Exact Headline: Solid White, BubbledotICG-FinePos, Per-Line Fade */}
        <h1 className="headline" aria-label="Brands Crafted To Lead and Evolve">
          <span className="line-1">Brands Crafted</span>
          <span className="line-2">To Lead &amp; Evolve</span>
        </h1>

        {/* Subhead: Brand Masala Positioning */}
        <p className="subhead anim" style={{ '--d': '0.28s' } as React.CSSProperties}>
          We create bold, strategic, and result-oriented marketing solutions — from high-impact brand identities to viral social campaigns and bespoke web platforms.
        </p>

        {/* Primary & Secondary Dual CTAs */}
        <div className="cta-group anim" style={{ '--d': '0.4s' } as React.CSSProperties}>
          <button
            onClick={onExploreWork}
            className="cta-btn"
          >
            <span>Explore Portfolio</span>
            <ArrowRight className="w-4 h-4 ml-1 text-black" />
          </button>

          {onOpenShowreel && (
            <button
              onClick={onOpenShowreel}
              className="cta-secondary-btn"
            >
              <Play className="w-3.5 h-3.5 fill-[#FFBB02] text-[#FFBB02]" />
              <span>Watch Showreel</span>
            </button>
          )}

          <button
            onClick={() => onOpenContact('Brand Strategy')}
            className="cta-secondary-btn"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFBB02]" />
            <span>Book Consultation</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          3) STATS FOOTER REGION (BOTTOM, SHRINK 0)
         ========================================================================= */}
      <footer ref={statsContainerRef} className="hero-stats">
        <div className="stats-grid">
          {STATS_DATA.map((item, idx) => (
            <div
              key={item.label}
              className="stat-item anim"
              style={{ '--d': item.delay } as React.CSSProperties}
            >
              {/* Retro dot-matrix icon glyph */}
              <div className="stat-icon" aria-hidden="true">
                {item.icon}
              </div>

              {/* Counting tabular value */}
              <div className="stat-val-row">
                <span className="stat-count">{statValues[idx]}</span>
                <span>{item.suffix}</span>
              </div>

              {/* Muted label */}
              <div className="stat-label">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </footer>
    </section>
  );
};
