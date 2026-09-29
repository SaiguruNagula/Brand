import React from 'react';
export interface BrandMasalaLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'black' | 'on-gold' | 'auto';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'hero';
  layout?: 'horizontal' | 'stacked';
  showTagline?: boolean;
  useImage?: boolean;
}
// A light surface keeps the unchanged approved master legible on dark sections.
export const BrandMasalaLogo: React.FC<BrandMasalaLogoProps> = ({ className = '', size = 'md', variant = 'auto' }) => (
  <span className={`brand-logo brand-logo--${size} ${variant === 'dark' || variant === 'black' ? '' : 'brand-logo--surface'} ${className}`}>
    <img src="/images/brand/brand-masala-logo.webp" alt="Brand Masala — A Brand Consultancy Firm" />
  </span>
);
