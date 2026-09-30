import React from 'react';

interface DetailingDaddyLogoProps {
  className?: string;
  theme?: 'dark' | 'light' | 'auto';
  showSubtitle?: boolean;
}

export const DetailingDaddyLogo: React.FC<DetailingDaddyLogoProps> = ({
  className = '',
  theme = 'auto',
  showSubtitle = true
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#000000';

  if (!isDark) {
    return <img src="/images/clients/detailing-daddy.webp" alt="Detailing Daddy" className={`h-full w-auto max-w-[210px] object-contain select-none ${className}`} />;
  }

  return (
    <svg 
      viewBox="0 0 620 180" 
      className={`h-full w-auto select-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Detailing Daddy — Car Protection Studio"
    >
      <defs>
        <linearGradient id="ddOrangeGradInline" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7A00" />
          <stop offset="100%" stopColor="#FF5500" />
        </linearGradient>
        <filter id="ddShadowInline" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.25" />
        </filter>
      </defs>

      <g transform="translate(10, 10)">
        {/* 1. ORANGE DIAMOND WITH MASCOT */}
        <g transform="translate(75, 75)">
          <rect 
            x="-65" 
            y="-65" 
            width="130" 
            height="130" 
            rx="14" 
            transform="rotate(45)" 
            fill="url(#ddOrangeGradInline)" 
            filter="url(#ddShadowInline)"
          />
          
          {/* Monkey Mascot Face */}
          <circle cx="-38" cy="-2" r="14" fill="#000000" />
          <circle cx="-38" cy="-2" r="8" fill="#FF8C2A" />
          <circle cx="38" cy="-2" r="14" fill="#000000" />
          <circle cx="38" cy="-2" r="8" fill="#FF8C2A" />

          {/* Head Base */}
          <ellipse cx="0" cy="5" rx="34" ry="32" fill="#000000" />
          <ellipse cx="0" cy="10" rx="30" ry="24" fill="#FF9A3C" />

          {/* Fedora / Hat */}
          <path d="M -36 -12 C -28 -34, 28 -34, 36 -12 C 40 -10, 32 -6, 20 -8 C 0 -11, -20 -8, -36 -12 Z" fill="#1A1A1A" />
          <path d="M -26 -16 C -20 -38, 20 -38, 26 -16 Z" fill="#0B0B0B" />
          <path d="M -28 -14 C -10 -18, 10 -18, 28 -14 C 27 -11, -27 -11, -28 -14 Z" fill="#FF6A00" />

          {/* Sunglasses */}
          <path d="M -28 -6 Q -22 -14 -4 -12 L 0 -10 L 4 -12 Q 22 -14 28 -6 Q 30 8 16 9 Q 2 10 2 0 L -2 0 Q -2 10 -16 9 Q -30 8 -28 -6 Z" fill="#000000" />
          <rect x="-22" y="-3" width="16" height="10" rx="3" fill="#FF9A3C" />
          <text x="-19" y="6" fontFamily="'Space Grotesk', -apple-system, sans-serif" fontWeight="900" fontSize="10" fill="#000000">D</text>
          <rect x="6" y="-3" width="16" height="10" rx="3" fill="#FF9A3C" />
          <text x="9" y="6" fontFamily="'Space Grotesk', -apple-system, sans-serif" fontWeight="900" fontSize="10" fill="#000000">D</text>

          {/* Smile */}
          <path d="M -10 18 Q 0 24 10 18" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <circle cx="-3" cy="14" r="1.5" fill="#000000" />
          <circle cx="3" cy="14" r="1.5" fill="#000000" />
        </g>

        {/* 2. BRAND LOGOTYPE: "DETAILING DADDY" */}
        <g transform="translate(170, 78)">
          <text 
            x="0" 
            y="0" 
            fontFamily="'Impact', 'Arial Black', -apple-system, sans-serif" 
            fontWeight="900" 
            fontSize="52" 
            letterSpacing="2.5px" 
            fill={textColor}
            style={{ fontStretch: 'condensed', textTransform: 'uppercase' }}
          >
            DETAILING DADDY
          </text>
          <text x="408" y="-22" fontFamily="-apple-system, sans-serif" fontWeight="700" fontSize="16" fill={textColor}>®©</text>
        </g>

        {/* 3. SUBTITLE */}
        {showSubtitle && (
          <g transform="translate(175, 122)">
            <path d="M 6 -12 C 0 -12, -4 -7, -4 -2 C -4 3, 6 12, 6 12 C 6 12, 16 3, 16 -2 C 16 -7, 12 -12, 6 -12 Z" fill={textColor} />
            <circle cx="6" cy="-2" r="3.5" fill="#FF6A00" />
            <text x="26" y="2" fontFamily="'Inter', -apple-system, sans-serif" fontWeight="600" fontSize="22" letterSpacing="1.2px" fill={textColor}>
              kompally <tspan fontWeight="300" opacity="0.6">|</tspan> <tspan fontWeight="700" letterSpacing="2px">9989930929</tspan>
            </text>
          </g>
        )}
      </g>
    </svg>
  );
};
