import React, { useState } from 'react';
import { 
  Wifi, Wind, BedDouble, Clock, Sparkles, Car, ShieldCheck, 
  Coffee, Maximize2, Camera, Eye, Crown, CheckCircle
} from 'lucide-react';
import { AMENITIES, GALLERY, GalleryItem } from '../data/hotelData';
import { LightboxModal } from '../components/LightboxModal';

interface AmenitiesGalleryProps {
  onOpenBooking: () => void;
}

export const AmenitiesGallery: React.FC<AmenitiesGalleryProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'amenities' | 'gallery'>('amenities');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi': return <Wifi className="w-6 h-6 text-[#d4af37]" />;
      case 'Wind': return <Wind className="w-6 h-6 text-[#d4af37]" />;
      case 'Bed': return <BedDouble className="w-6 h-6 text-[#d4af37]" />;
      case 'Clock': return <Clock className="w-6 h-6 text-[#d4af37]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#d4af37]" />;
      case 'Car': return <Car className="w-6 h-6 text-[#d4af37]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#d4af37]" />;
      case 'Coffee': return <Coffee className="w-6 h-6 text-[#d4af37]" />;
      default: return <Sparkles className="w-6 h-6 text-[#d4af37]" />;
    }
  };

  const filteredGallery = selectedCategory === 'all'
    ? GALLERY
    : GALLERY.filter((g) => g.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0d0514] text-slate-100 pt-24 pb-20">
      
      {/* Page Header */}
      <section className="relative py-16 bg-gradient-to-b from-[#19092d] via-[#120521] to-[#0d0514] border-b border-[#d4af37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#d4af37]">
            BOSS HOTEL IPOH
          </span>
          <h1 className="font-cinzel text-4xl sm:text-6xl font-black text-white tracking-wider">
            Amenities & Photo Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Explore our comprehensive list of hotel facilities and browse high-resolution photography showcasing our rooms, reception, and Ipoh atmosphere.
          </p>

          {/* Section Switcher Tabs */}
          <div className="flex justify-center gap-3 pt-4">
            <button
              onClick={() => setActiveTab('amenities')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'amenities'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-[#0d0514] shadow-lg'
                  : 'bg-[#1c0a32] text-slate-300 border border-[#d4af37]/30 hover:border-[#d4af37]'
              }`}
            >
              Hotel Amenities
            </button>

            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'gallery'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-[#0d0514] shadow-lg'
                  : 'bg-[#1c0a32] text-slate-300 border border-[#d4af37]/30 hover:border-[#d4af37]'
              }`}
            >
              Photo Gallery ({GALLERY.length})
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* ================= AMENITIES SECTION ================= */}
        {activeTab === 'amenities' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white">
                Comprehensive Guest Facilities
              </h2>
              <p className="text-xs text-slate-300">
                Crafted to provide a smooth, restful, and convenient stay in Ipoh, Perak.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {AMENITIES.map((item) => (
                <div
                  key={item.id}
                  className="purple-card rounded-2xl overflow-hidden flex flex-col group border border-[#d4af37]/30 shadow-xl transition-all duration-300 hover:border-[#d4af37]"
                >
                  {/* Card Image Banner */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#160829] via-[#160829]/50 to-transparent" />
                    
                    {/* Floating Gold Icon Badge */}
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-[#120521]/90 border border-[#d4af37]/60 backdrop-blur-md flex items-center justify-center shadow-lg">
                      {getAmenityIcon(item.iconName)}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-2 bg-[#160829] flex-1 flex flex-col justify-between">
                    <div className="space-y-1">
                      <h3 className="font-cinzel text-base font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 flex items-center gap-1.5 text-[10px] uppercase font-semibold text-[#d4af37]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>Complimentary for Guests</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Highlight Card */}
            <div className="bg-gradient-to-r from-[#1c0a32] via-[#2a1048] to-[#1c0a32] border border-[#d4af37]/40 rounded-2xl p-8 text-center space-y-4 max-w-3xl mx-auto shadow-2xl">
              <Crown className="w-10 h-10 text-[#d4af37] mx-auto" />
              <h3 className="font-cinzel text-2xl font-bold text-white">
                Need Special Guest Assistance?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our front desk team is on duty 24/7 at BOSS HOTEL to assist with luggage storage, taxi call services, local Ipoh culinary recommendations, and extra room requirements.
              </p>
              <button
                onClick={onOpenBooking}
                className="gold-button px-6 py-3 rounded-xl text-xs uppercase font-bold tracking-wider inline-block shadow-lg"
              >
                Contact Reception Desk
              </button>
            </div>
          </div>
        )}

        {/* ================= PHOTO GALLERY SECTION ================= */}
        {activeTab === 'gallery' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Gallery Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pb-4">
              {[
                { id: 'all', label: 'All Photos' },
                { id: 'exterior', label: 'Exterior & Lobby' },
                { id: 'rooms', label: 'Guest Rooms' },
                { id: 'amenities', label: 'Amenities & Bathrooms' },
                { id: 'surroundings', label: 'Ipoh Surroundings' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === tab.id
                      ? 'bg-[#d4af37] text-[#0d0514] font-bold shadow-md'
                      : 'bg-[#1e0a33] text-slate-300 border border-[#d4af37]/20 hover:border-[#d4af37]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredGallery.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(index)}
                  className="purple-card rounded-2xl overflow-hidden cursor-pointer group relative shadow-lg"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0514] via-[#0d0514]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Category Pill */}
                    <span className="absolute top-3 left-3 bg-[#120521]/90 border border-[#d4af37]/40 text-[#f3e5ab] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>

                    {/* Hover Zoom Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <div className="w-12 h-12 rounded-full bg-[#d4af37] text-[#0d0514] flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                        <Eye className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Caption Footer */}
                  <div className="p-4 space-y-1 bg-[#170729]">
                    <h3 className="font-cinzel text-sm font-bold text-white group-hover:text-[#f3e5ab] transition-colors truncate">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 line-clamp-1 font-light">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>

      {/* Lightbox Modal Component */}
      <LightboxModal
        items={filteredGallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigateIndex={(idx) => setLightboxIndex(idx)}
      />

    </div>
  );
};
