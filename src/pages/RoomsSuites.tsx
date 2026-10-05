import React, { useState } from 'react';
import { 
  Bed, Users, Maximize2, Wifi, Tv, Coffee, ShieldCheck, 
  Sparkles, CheckCircle2, ChevronRight, Phone, Clock, FileText 
} from 'lucide-react';
import { ROOMS, HOTEL_INFO, Room } from '../data/hotelData';

interface RoomsSuitesProps {
  onOpenBooking: (roomId?: string) => void;
  onNavigate: (path: string) => void;
}

export const RoomsSuites: React.FC<RoomsSuitesProps> = ({ onOpenBooking, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImageMap, setActiveImageMap] = useState<Record<string, string>>({});

  const handleSelectThumbnail = (roomId: string, imgUrl: string) => {
    setActiveImageMap((prev) => ({ ...prev, [roomId]: imgUrl }));
  };

  const filteredRooms = selectedCategory === 'all'
    ? ROOMS
    : ROOMS.filter((r) => r.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0d0514] text-slate-100 pt-24 pb-20">
      
      {/* Luxury Page Header Banner */}
      <section className="relative py-16 bg-gradient-to-b from-[#19092d] via-[#120521] to-[#0d0514] border-b border-[#d4af37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#d4af37]">
            BOSS HOTEL IPOH
          </span>
          <h1 className="font-cinzel text-4xl sm:text-6xl font-black text-white tracking-wider">
            Rooms & Suites
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Discover thoughtfully appointed accommodations designed with rich dark purple velour, gold trim, high-speed Wi-Fi 6, and rainfall showers.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#d4af37]/20 pb-6">
          {[
            { id: 'all', label: 'All Accommodations' },
            { id: 'deluxe', label: 'Deluxe Rooms' },
            { id: 'superior', label: 'Superior Rooms' },
            { id: 'family', label: 'Family Rooms' },
            { id: 'executive', label: 'Executive Suites' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === tab.id
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-[#0d0514] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  : 'bg-[#1a0b2e] text-slate-300 border border-[#d4af37]/25 hover:border-[#d4af37] hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Room Cards Stack */}
        <div className="space-y-10">
          {filteredRooms.map((room) => {
            const currentImg = activeImageMap[room.id] || room.image;
            return (
              <div
                key={room.id}
                className="purple-card rounded-3xl overflow-hidden border border-[#d4af37]/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0 group"
              >
                {/* Room Image Section */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] overflow-hidden">
                  <img
                    src={currentImg}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0514] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#170829]" />

                  {/* Badges Overlay */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                    <span className="bg-[#120521]/90 border border-[#d4af37]/50 backdrop-blur-md text-[#f3e5ab] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      {room.category}
                    </span>
                    {room.popular && (
                      <span className="bg-[#d4af37] text-[#0d0514] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Gallery Thumbnails */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto pb-1 z-10">
                    {room.gallery.map((imgUrl, i) => {
                      const isSelected = currentImg === imgUrl;
                      return (
                        <img
                          key={i}
                          src={imgUrl}
                          alt={`${room.name} photo ${i + 1}`}
                          onClick={() => handleSelectThumbnail(room.id, imgUrl)}
                          className={`w-14 h-10 object-cover rounded-md border cursor-pointer transition-all ${
                            isSelected
                              ? 'border-[#d4af37] scale-105 shadow-[0_0_10px_rgba(212,175,55,0.6)]'
                              : 'border-[#d4af37]/30 opacity-70 hover:opacity-100 hover:border-[#d4af37]'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>

              {/* Room Details Section */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-gradient-to-br from-[#1b0a30] via-[#150726] to-[#10041f]">
                
                <div className="space-y-4">
                  
                  {/* Header Title & Pricing */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#d4af37]/20 pb-4">
                    <div>
                      <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white">
                        {room.name}
                      </h2>
                      <p className="text-xs text-slate-400 mt-1">
                        BOSS HOTEL Ipoh • City View Accommodation
                      </p>
                    </div>

                    <div className="bg-[#2a1248] border border-[#d4af37]/40 px-4 py-2 rounded-xl text-left sm:text-right shrink-0">
                      <span className="text-xs text-slate-300 block">Nightly Rate</span>
                      <span className="font-cinzel text-2xl font-bold text-[#f3e5ab]">
                        RM {room.priceRM}
                      </span>
                      <span className="text-[10px] text-slate-400 block">Nett (Taxes Included)</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {room.description}
                  </p>

                  {/* Room Specs Bar */}
                  <div className="grid grid-cols-3 gap-3 bg-[#11041c] border border-[#d4af37]/20 p-3 rounded-xl text-xs">
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-[#d4af37] shrink-0" />
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase">Bed Info</span>
                        <span className="font-semibold text-white">{room.bedType}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#d4af37] shrink-0" />
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase">Max Guests</span>
                        <span className="font-semibold text-white">{room.capacity}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Maximize2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase">Room Size</span>
                        <span className="font-semibold text-white">{room.roomSize}</span>
                      </div>
                    </div>
                  </div>

                  {/* Room Facilities List */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[#d4af37]">
                      In-Room Amenities & Features
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {room.facilities.map((facility, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 text-xs text-slate-300 bg-[#230d3a] border border-[#d4af37]/20 px-2.5 py-1.5 rounded-lg"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                          <span className="truncate">{facility}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom CTA Bar */}
                <div className="pt-4 border-t border-[#d4af37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Free Cancellation Available • 24/7 Desk Service</span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => onOpenBooking(room.id)}
                      className="gold-button w-full sm:w-auto px-6 py-3 rounded-xl text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 shadow-xl"
                    >
                      <span>Book / Contact Us</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
        </div>

        {/* Hotel Policies Card */}
        <div className="bg-[#170729] border border-[#d4af37]/30 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-[#d4af37]" />
            <h3 className="font-cinzel text-xl font-bold text-white">
              Stay Policies & Information
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300 pt-2">
            <div className="space-y-1">
              <span className="font-bold text-[#f3e5ab] block">Check-in / Check-out</span>
              <p>Check-in from 3:00 PM. Check-out until 12:00 PM (Noon). Early check-in or late check-out available upon request subject to room availability.</p>
            </div>

            <div className="space-y-1">
              <span className="font-bold text-[#f3e5ab] block">Non-Smoking Property</span>
              <p>All guest rooms and indoor areas are 100% non-smoking environments to ensure fresh and clean air quality for all guests.</p>
            </div>

            <div className="space-y-1">
              <span className="font-bold text-[#f3e5ab] block">Direct Reservations</span>
              <p>Contact our front desk directly at {HOTEL_INFO.phoneFormatted} or via WhatsApp for group bookings and corporate rate queries.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
