import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowUpRight, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  preselectedService
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [selectedCapabilities, setSelectedCapabilities] = useState<string[]>(
    preselectedService ? [preselectedService] : ['Branding']
  );
  const [timeline, setTimeline] = useState('Immediate (Next 30 Days)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const capabilities = [
    'Digital Marketing',
    'Social Media Marketing',
    'Branding',
    'Web Development',
    'Performance Marketing',
    'UGC Content Creation',
    'SEO',
    'App Development'
  ];

  const timelineOptions = [
    'Immediate (Next 30 Days)',
    '1–3 Months',
    'Strategic Partnership (Long-term)'
  ];

  useEffect(() => {
    if (preselectedService && !selectedCapabilities.includes(preselectedService)) {
      setSelectedCapabilities((prev) => [...prev, preselectedService]);
    }
  }, [preselectedService]);

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

  const toggleCapability = (cap: string) => {
    if (selectedCapabilities.includes(cap)) {
      if (selectedCapabilities.length > 1) {
        setSelectedCapabilities(selectedCapabilities.filter((c) => c !== cap));
      }
    } else {
      setSelectedCapabilities([...selectedCapabilities, cap]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please provide your name and work email.');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid work email.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#090909] border border-white/[0.14] shadow-2xl p-6 sm:p-10 max-h-[92vh] overflow-y-auto no-scrollbar animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-[#FFBB02]/10 border border-[#FFBB02]/40 text-[#FFBB02] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-extrabold uppercase tracking-tight text-white">
              Inquiry Dispatched
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-semibold">{name}</span>. Brand Masala leadership will review your requirements and reach out directly within one business day.
            </p>
            <div className="pt-6">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-[#FFBB02] text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="text-xs font-mono tracking-widest text-[#FFBB02] uppercase mb-2">
                Brand Consultation
              </div>
              <h3 id="contact-modal-title" className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                Start a Conversation<span className="text-[#FC3520]">.</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400">
                Tell us about your brand objectives, upcoming campaign, or product launch.
              </p>
            </div>

            {/* Select capabilities */}
            <div>
              <label className="block text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-2">
                Select Required Capabilities
              </label>
              <div className="flex flex-wrap gap-1.5">
                {capabilities.map((cap) => {
                  const isChecked = selectedCapabilities.includes(cap);
                  return (
                    <button
                      type="button"
                      key={cap}
                      onClick={() => toggleCapability(cap)}
                      className={`px-3 py-1.5 text-xs font-mono transition-all border ${
                        isChecked
                          ? 'border-[#FFBB02] bg-[#FFBB02]/15 text-white font-semibold'
                          : 'border-white/10 text-neutral-400 hover:border-white/20 bg-neutral-900/50'
                      }`}
                    >
                      {cap}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Personal & Company Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jordan Hayes"
                  className="w-full px-3.5 py-2.5 bg-[#0e0e0e] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#FFBB02]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jordan@brand.com"
                  className="w-full px-3.5 py-2.5 bg-[#0e0e0e] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#FFBB02]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-1.5">
                  Company / Brand Name
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Acme Corp"
                  className="w-full px-3.5 py-2.5 bg-[#0e0e0e] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#FFBB02]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-1.5">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 / International"
                  className="w-full px-3.5 py-2.5 bg-[#0e0e0e] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#FFBB02]"
                />
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-1.5">
                Expected Timeline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {timelineOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setTimeline(opt)}
                    className={`px-3 py-2 text-left text-xs font-mono border transition-all ${
                      timeline === opt
                        ? 'border-[#FFBB02] bg-[#FFBB02]/10 text-white font-bold'
                        : 'border-white/10 text-neutral-400 bg-neutral-900/40'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Project brief */}
            <div>
              <label className="block text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-1.5">
                Project Overview &amp; Objectives
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Give us a brief overview of your market, existing challenges, and key targets..."
                className="w-full px-3.5 py-2.5 bg-[#0e0e0e] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#FFBB02] resize-none"
              />
            </div>

            {error && (
              <div className="text-xs text-[#FC3520] font-mono">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-white hover:bg-[#FFBB02] text-black font-bold text-xs uppercase tracking-widest transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Submit Inbound Request</span>
              <Send className="w-3.5 h-3.5 text-neutral-800 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
