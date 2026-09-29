import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandMasalaLogo } from './BrandMasalaLogo';
export const V1_NAV = [
  { label: 'Services', href: '#services' }, { label: 'Work', href: '#selected-work' },
  { label: 'Portfolio', href: '#portfolio' }, { label: 'About', href: '#about' },
  { label: 'Clients', href: '#clients' },
];
export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape' && open) { setOpen(false); trigger.current?.focus(); } };
    const resize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener('keydown', close);
    window.addEventListener('resize', resize);
    return () => { window.removeEventListener('keydown', close); window.removeEventListener('resize', resize); };
  }, [open]);
  return <header className="v1-navbar">
    <div className="max-w-[1400px] mx-auto px-5 sm:px-8 flex items-center justify-between gap-4">
      <a href="#home" aria-label="Brand Masala home" onClick={() => setOpen(false)}><BrandMasalaLogo size="sm" /></a>
      <nav className="nav-pill v1-desktop-nav" aria-label="Main navigation">
        {V1_NAV.map(link => <a key={link.href} href={link.href} className="nav-item">{link.label}</a>)}
      </nav>
      <a href="#contact" className="v1-desktop-contact cta-secondary-btn">Let's Talk</a>
      <button ref={trigger} type="button" className="lg:hidden p-3 text-white" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </div>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="lg:hidden px-6 py-5 bg-[#090909] border-t border-white/10">
      {[...V1_NAV, { label: "Let's Talk", href: '#contact' }].map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-3 text-sm border-b border-white/10">{link.label}</a>)}
    </nav>}
  </header>;
};
