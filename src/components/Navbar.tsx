import React, { useState, useEffect } from 'react';
import { BrandMasalaLogo } from './BrandMasalaLogo';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal dock navigation after user scrolls past top hero region
      setVisible(window.scrollY > 320);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Work', href: '#selected-work' },
    { label: 'Why Us', href: '#comparison' },
    { label: 'Scope', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Clients', href: '#clients' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible
          ? 'translate-y-0 opacity-100 bg-[#000000]/92 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl'
          : '-translate-y-full opacity-0 pointer-events-none py-3.5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Masala Logo Zone */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group cursor-pointer focus:outline-none"
            aria-label="Brand Masala Home"
          >
            <BrandMasalaLogo size="sm" showTagline={false} />
          </a>
          <span className="hidden xl:inline-block text-[10px] font-mono text-neutral-400 uppercase tracking-widest pl-4 border-l border-white/10">
            A Brand Consultancy Firm
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-wider uppercase text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#FFBB02] transition-colors duration-200 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Zone */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-[#FFBB02] text-black hover:bg-[#FFAA00] transition-colors cursor-pointer shadow-lg shadow-[#FFBB02]/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Book Consultation</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#FFBB02] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090909] border-b border-white/[0.08] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-mono tracking-wider uppercase">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-300 hover:text-[#FFBB02] py-1 border-b border-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 text-center rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-[#FFBB02] text-black"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
