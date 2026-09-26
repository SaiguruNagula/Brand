import React, { useState, useEffect, useRef } from 'react';
import { Upload, Image as ImageIcon, CheckCircle, Sparkles, MapPin, Phone, Car, Loader2, Trash2 } from 'lucide-react';
import { DetailingDaddyLogo } from './DetailingDaddyLogo';
import { getClientAsset, saveClientAsset, clearClientAsset, optimizeImageFile } from '../utils/clientMediaStorage';

interface DetailingDaddyShowcaseProps {
  onOpenConsultation?: () => void;
  className?: string;
  isModal?: boolean;
}

export const DetailingDaddyShowcase: React.FC<DetailingDaddyShowcaseProps> = ({
  onOpenConsultation,
  className = '',
  isModal = false
}) => {
  const [userImages, setUserImages] = useState<string[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load any previously selected original photos from IndexedDB
  useEffect(() => {
    let isMounted = true;

    const loadAssets = async () => {
      try {
        const asset = await getClientAsset('detailing-daddy');
        if (!isMounted) return;
        if (asset?.gallery && asset.gallery.length > 0) {
          setUserImages(asset.gallery);
        } else if (asset?.coverImage) {
          setUserImages([asset.coverImage]);
        }
      } catch (err) {
        console.error('Failed to load asset from storage:', err);
      }
    };

    loadAssets();

    const handler = (e: any) => {
      if (e.detail?.clientId === 'detailing-daddy') {
        loadAssets();
      }
    };
    window.addEventListener('client-assets-updated', handler);
    return () => {
      isMounted = false;
      window.removeEventListener('client-assets-updated', handler);
    };
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsProcessing(true);
    try {
      // Optimize each image: downscale massive camera megapixels to web-ready high quality
      // to guarantee zero memory pressure and zero quota issues
      const optimizedImages: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        try {
          const optimizedDataUrl = await optimizeImageFile(file, 2048, 0.88);
          optimizedImages.push(optimizedDataUrl);
        } catch (fileErr) {
          console.error('Error optimizing file:', file.name, fileErr);
        }
      }

      if (optimizedImages.length > 0) {
        const combined = [...optimizedImages, ...userImages];
        setUserImages(combined);
        setActiveIdx(0);

        // Store into IndexedDB (supports hundreds of MBs reliably)
        await saveClientAsset('detailing-daddy', {
          coverImage: combined[0],
          gallery: combined
        });
      }
    } catch (err) {
      console.error('Failed to process and store images:', err);
    } finally {
      setIsProcessing(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleClearPhotos = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setUserImages([]);
    setActiveIdx(0);
    await clearClientAsset('detailing-daddy');
  };

  const hasCustomPhotos = userImages.length > 0;
  const currentPhoto = userImages[activeIdx];

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Photo Frame Container */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[21/10] rounded-[16px] overflow-hidden bg-[#0A0A0A] border border-neutral-800 shadow-2xl flex flex-col justify-between">
        {hasCustomPhotos ? (
          /* User's Original Unaltered Photo */
          <div className="relative w-full h-full">
            <img
              src={currentPhoto}
              alt="Detailing Daddy — Original Client Project Car (Mahindra XUV700 TG 10 BA 5186)"
              className="w-full h-full object-cover object-center"
            />
            {/* Hexagonal Studio Overlay Subtle Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
          </div>
        ) : (
          /* Studio Branded Cover echoing the Real Workshop */
          <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 bg-gradient-to-br from-[#121110] via-[#0A0A0A] to-[#171410]">
            {/* Hexagonal Honeycomb Ceiling Lights Vector Motif */}
            <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 80 L140 100 L140 150 L100 170 L60 150 L60 100 Z" stroke="#FFFFFF" strokeWidth="4" />
                <path d="M180 80 L220 100 L220 150 L180 170 L140 150 L140 100 Z" stroke="#FFFFFF" strokeWidth="4" />
                <path d="M260 80 L300 100 L300 150 L260 170 L220 150 L220 100 Z" stroke="#FFFFFF" strokeWidth="4" />
                <path d="M340 80 L380 100 L380 150 L340 170 L300 150 L300 100 Z" stroke="#FFFFFF" strokeWidth="4" />
                <path d="M420 80 L460 100 L460 150 L420 170 L380 150 L380 100 Z" stroke="#FFFFFF" strokeWidth="4" />
                <path d="M500 80 L540 100 L540 150 L500 170 L460 150 L460 100 Z" stroke="#FFFFFF" strokeWidth="4" />
                <path d="M580 80 L620 100 L620 150 L580 170 L540 150 L540 100 Z" stroke="#FFFFFF" strokeWidth="4" />
                <path d="M660 80 L700 100 L700 150 L660 170 L620 150 L620 100 Z" stroke="#FFFFFF" strokeWidth="4" />
              </svg>
            </div>

            {/* Top Bar: Official Logo & Location */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 shadow-lg">
                <DetailingDaddyLogo theme="dark" showSubtitle={true} className="h-8 sm:h-10 w-auto" />
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF7A00]/15 border border-[#FF7A00]/30 text-[11px] font-mono text-[#FF7A00] font-bold">
                <Car className="w-3.5 h-3.5" />
                <span>TG 10 BA 5186 • MAHINDRA XUV700</span>
              </div>
            </div>

            {/* Center: Studio Headline */}
            <div className="relative z-10 my-auto text-center space-y-2 py-4">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#FF7A00] uppercase font-bold block">
                CAR PROTECTION STUDIO • KOMPALLY
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Mirror-Finish Ceramic Armor &amp; Self-Healing PPF
              </h2>
              <p className="text-sm text-neutral-400 max-w-xl mx-auto font-normal">
                Multi-stage paint correction under hexagonal overhead LED illumination with high-pressure wash bay prep.
              </p>
            </div>

            {/* Bottom Bar: Actionable Prompt to Attach Original Camera Photos */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>Kompally Branch | Contact: 9989930929</span>
              </div>

              <button
                type="button"
                disabled={isProcessing}
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF7A00] hover:bg-[#FF8A1A] disabled:opacity-50 text-black font-mono font-bold text-xs uppercase tracking-wider rounded-md transition-all shadow-md cursor-pointer"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Processing Photos...</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-3.5 h-3.5" />
                    <span>Select Original Camera Photos</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Floating Upload / Add Button when photos exist */}
        {hasCustomPhotos && (
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <button
              type="button"
              disabled={isProcessing}
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/80 hover:bg-black disabled:opacity-50 backdrop-blur-md border border-white/20 text-white font-mono text-[11px] font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer shadow-lg"
              title="Add more original photos"
            >
              {isProcessing ? (
                <Loader2 className="w-3 h-3 text-[#FF7A00] animate-spin" />
              ) : (
                <Upload className="w-3 h-3 text-[#FF7A00]" />
              )}
              <span>{isProcessing ? 'Optimizing...' : 'Add Photos'}</span>
            </button>

            <button
              type="button"
              onClick={handleClearPhotos}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-black/80 hover:bg-red-950/80 backdrop-blur-md border border-white/20 hover:border-red-500/50 text-neutral-300 hover:text-red-400 font-mono text-[11px] font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer shadow-lg"
              title="Reset to default showcase"
            >
              <Trash2 className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Hidden File Input for Original User Photos */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>

      {/* Multi-Photo Carousel Strip if more than 1 image loaded */}
      {userImages.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {userImages.map((img, idx) => (
            <button
              key={`user-photo-${idx}`}
              onClick={() => setActiveIdx(idx)}
              className={`relative w-24 sm:w-32 aspect-[16/10] rounded-md overflow-hidden border-2 transition-all cursor-pointer ${
                activeIdx === idx
                  ? 'border-[#FF7A00] ring-2 ring-[#FF7A00]/40 scale-105'
                  : 'border-white/10 opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`Angle ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
