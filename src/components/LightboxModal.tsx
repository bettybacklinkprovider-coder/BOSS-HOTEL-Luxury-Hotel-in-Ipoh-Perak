import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Crown } from 'lucide-react';
import { GalleryItem } from '../data/hotelData';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigateIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigateIndex,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const prev = (currentIndex - 1 + items.length) % items.length;
        onNavigateIndex(prev);
      }
      if (e.key === 'ArrowRight') {
        const next = (currentIndex + 1) % items.length;
        onNavigateIndex(next);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items, onClose, onNavigateIndex]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handlePrev = () => {
    const prev = (currentIndex - 1 + items.length) % items.length;
    onNavigateIndex(prev);
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % items.length;
    onNavigateIndex(next);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg p-4 animate-in fade-in duration-200">
      
      {/* Top Header Controls */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <Crown className="w-5 h-5 text-[#d4af37]" />
          <span className="font-cinzel text-sm font-bold text-white tracking-widest">
            BOSS HOTEL GALLERY
          </span>
          <span className="text-xs text-[#d4af37]/80 font-mono ml-2">
            ({currentIndex + 1} / {items.length})
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-[#d4af37] text-white hover:text-[#0f0418] transition-all"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative w-full max-w-5xl h-full max-h-[80vh] flex flex-col items-center justify-center">
        
        {/* Navigation Left */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#1b0a2a]/80 border border-[#d4af37]/40 text-[#f3e5ab] hover:bg-[#d4af37] hover:text-[#0f0418] transition-all shadow-xl"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Navigation Right */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#1b0a2a]/80 border border-[#d4af37]/40 text-[#f3e5ab] hover:bg-[#d4af37] hover:text-[#0f0418] transition-all shadow-xl"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="max-w-full max-h-[70vh] object-contain rounded-xl border border-[#d4af37]/30 shadow-2xl"
        />

        {/* Image Info Overlay */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-[#d4af37] bg-[#2a1345] px-3 py-1 rounded-full border border-[#d4af37]/30 mb-1">
            {currentItem.category}
          </span>
          <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">
            {currentItem.title}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {currentItem.caption}
          </p>
        </div>

      </div>
    </div>
  );
};
