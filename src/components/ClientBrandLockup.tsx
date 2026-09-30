import React from 'react';
import { DetailingDaddyLogo } from './DetailingDaddyLogo';

interface ClientBrandLockupProps {
  client: string;
  className?: string;
  logoClassName?: string;
  textClassName?: string;
  theme?: 'dark' | 'light' | 'auto';
  showSubtitle?: boolean;
}

export const ClientBrandLockup: React.FC<ClientBrandLockupProps> = ({
  client,
  className = '',
  logoClassName = '',
  textClassName = '',
  theme = 'auto',
  showSubtitle = true
}) => {
  const normalized = client.trim().toUpperCase();

  // 1. Detailing Daddy: Official Logo over Text with Name behind for SEO
  if (normalized.includes('DETAILING DADDY')) {
    return (
      <span className={`inline-flex items-center relative group/brand ${className}`}>
        {/* SEO Anchor Text: Indexable by crawlers, screen readers & semantic outline */}
        <span className="sr-only">Detailing Daddy Car Protection Studio</span>
        <span 
          className="absolute inset-0 opacity-0 pointer-events-none select-none -z-10 font-bold tracking-wider" 
          aria-hidden="true"
        >
          DETAILING DADDY
        </span>

        {/* Official Logo Displayed Over the Text */}
        <div className={`flex items-center ${logoClassName || 'h-7 sm:h-8'}`}>
          <DetailingDaddyLogo 
            theme={theme} 
            showSubtitle={showSubtitle}
            className="h-full w-auto max-w-[210px] transition-transform duration-200 group-hover/brand:scale-105" 
          />
        </div>
      </span>
    );
  }

  // Fallback for companies whose custom logos will be added one by one
  return (
    <span className={`font-semibold tracking-wider uppercase ${textClassName} ${className}`}>
      {client}
    </span>
  );
};
