import React from 'react';

export interface BrandMasalaLogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: 'light' | 'dark' | 'black' | 'on-gold' | 'auto';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'hero';
  layout?: 'horizontal' | 'stacked';
  useImage?: boolean;
}

export const BrandMasalaLogo: React.FC<BrandMasalaLogoProps> = ({
  className = '',
  showTagline = true,
  variant = 'auto',
  size = 'md',
  layout = 'horizontal',
  useImage = false
}) => {
  // Official Brand Masala Identity Specs:
  // - Dark background: "brand" in pure white (#FFFFFF), "masala" in saffron (#FFB000), "." in red (#E83828)
  // - Light background: "brand" in black (#000000), "masala" in saffron (#FFB000) or black, "." in red (#E83828)
  // - Gold/Yellow background: "brand" & "masala" in deep black (#000000) with iconic red dot (#E83828)
  // - Tagline: "A BRAND CONSULTANCY FIRM" tracked uppercase

  const isAllBlack = variant === 'black' || variant === 'on-gold';
  const isDarkText = variant === 'dark' || isAllBlack;
  
  const textColor = isDarkText ? 'text-[#000000]' : 'text-white';
  const masalaColor = isAllBlack ? 'text-[#000000]' : 'text-[#FFB000]';
  const taglineColor = isDarkText ? 'text-[#1A1816]' : 'text-neutral-400';

  if (useImage) {
    const src = isDarkText ? '/images/logo-black.svg' : '/images/brand-masala-logo.svg';
    const heightMap = {
      xs: 'h-6',
      sm: 'h-8',
      md: 'h-10 sm:h-12',
      lg: 'h-14 sm:h-16',
      hero: 'h-20 sm:h-24'
    }[size];

    return (
      <img
        src={src}
        alt="Brand Masala — A Brand Consultancy Firm"
        className={`${heightMap} w-auto object-contain select-none ${className}`}
      />
    );
  }

  const sizeConfigs = {
    xs: {
      text: 'text-sm sm:text-base font-black tracking-tight',
      dot: 'text-base sm:text-lg',
      tagline: 'text-[6.5px] tracking-[0.24em] mt-0.5'
    },
    sm: {
      text: 'text-lg sm:text-xl font-black tracking-tight',
      dot: 'text-xl sm:text-2xl',
      tagline: 'text-[7.5px] sm:text-[8px] tracking-[0.24em] mt-0.5'
    },
    md: {
      text: 'text-2xl sm:text-3xl font-black tracking-tight',
      dot: 'text-2xl sm:text-3xl',
      tagline: 'text-[9px] sm:text-[10px] tracking-[0.28em] mt-1'
    },
    lg: {
      text: 'text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight',
      dot: 'text-3xl sm:text-4xl lg:text-5xl',
      tagline: 'text-[11px] sm:text-[12px] tracking-[0.3em] mt-1.5'
    },
    hero: {
      text: 'text-5xl sm:text-6xl md:text-7xl font-black tracking-tight',
      dot: 'text-5xl sm:text-6xl md:text-7xl',
      tagline: 'text-xs sm:text-sm tracking-[0.34em] mt-2'
    }
  }[size];

  if (layout === 'stacked') {
    return (
      <div className={`inline-flex flex-col select-none ${className}`}>
        <div className={`flex flex-col leading-[0.88] ${textColor}`}>
          <span className={`${sizeConfigs.text} leading-none font-black`}>brand</span>
          <div className="flex items-baseline leading-none">
            <span className={`${sizeConfigs.text} ${masalaColor} leading-none font-black`}>masala</span>
            <span className="text-[#E83828] font-black leading-none ml-[0.02em]">.</span>
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
        <span className="font-black">brand</span>
        <span className={`${masalaColor} ml-[0.08em] font-black`}>masala</span>
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
