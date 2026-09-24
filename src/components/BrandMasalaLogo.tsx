import React from 'react';

interface BrandMasalaLogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: 'light' | 'dark' | 'auto';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'hero';
  layout?: 'horizontal' | 'stacked';
}

export const BrandMasalaLogo: React.FC<BrandMasalaLogoProps> = ({
  className = '',
  showTagline = true,
  variant = 'auto',
  size = 'md',
  layout = 'horizontal'
}) => {
  // Official Brand Masala Identity Specs from Logo3.png:
  // "brand": Black (#000000) on light / White (#FFFFFF) on dark
  // "masala": Warm Saffron Gold (#FFB000 / #FFBB02)
  // ".": Crimson Coral Red (#E83828 / #FC3520)
  // "A BRAND CONSULTANCY FIRM": Crisp tracked uppercase

  const textColor = variant === 'dark' ? 'text-black' : variant === 'light' ? 'text-white' : 'text-white';
  const taglineColor = variant === 'dark' ? 'text-neutral-700' : 'text-neutral-400';

  const sizeConfigs = {
    xs: {
      text: 'text-sm sm:text-base font-extrabold tracking-tighter',
      dot: 'text-base sm:text-lg',
      tagline: 'text-[6.5px] tracking-[0.24em] mt-0.5'
    },
    sm: {
      text: 'text-lg sm:text-xl font-extrabold tracking-tighter',
      dot: 'text-xl sm:text-2xl',
      tagline: 'text-[7.5px] sm:text-[8px] tracking-[0.24em] mt-0.5'
    },
    md: {
      text: 'text-2xl sm:text-3xl font-black tracking-tighter',
      dot: 'text-2xl sm:text-3xl',
      tagline: 'text-[9px] sm:text-[10px] tracking-[0.28em] mt-1'
    },
    lg: {
      text: 'text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter',
      dot: 'text-3xl sm:text-4xl lg:text-5xl',
      tagline: 'text-[11px] sm:text-[12px] tracking-[0.3em] mt-1.5'
    },
    hero: {
      text: 'text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter',
      dot: 'text-5xl sm:text-6xl md:text-7xl',
      tagline: 'text-xs sm:text-sm tracking-[0.34em] mt-2'
    }
  }[size];

  if (layout === 'stacked') {
    return (
      <div className={`inline-flex flex-col select-none ${className}`}>
        <div className={`flex flex-col leading-[0.88] ${textColor}`}>
          <span className={`${sizeConfigs.text} leading-none`}>brand</span>
          <div className="flex items-baseline leading-none">
            <span className={`${sizeConfigs.text} text-[#FFB000] leading-none`}>masala</span>
            <span className={`text-[#E83828] font-black leading-none ml-[0.02em]`}>.</span>
          </div>
        </div>
        {showTagline && (
          <span className={`font-bold uppercase ${sizeConfigs.tagline} ${taglineColor}`}>
            A Brand Consultancy Firm
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <div className={`flex items-baseline leading-none ${sizeConfigs.text} ${textColor}`}>
        <span>brand</span>
        <span className="text-[#FFB000] ml-[0.08em]">masala</span>
        <span className="text-[#E83828] font-black leading-none ml-[0.02em] inline-block transform translate-y-[-0.04em]">.</span>
      </div>
      {showTagline && (
        <span className={`font-bold uppercase ${sizeConfigs.tagline} ${taglineColor}`}>
          A Brand Consultancy Firm
        </span>
      )}
    </div>
  );
};
