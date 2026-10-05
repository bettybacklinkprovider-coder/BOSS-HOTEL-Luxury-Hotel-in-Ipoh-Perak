import React, { useState } from 'react';
import { 
  ArrowRight, Phone, Shield, Sparkles, Wifi, Wind, BedDouble, 
  Clock, Car, MapPin, HeartHandshake, Moon, Tag, Star, ChevronRight, CheckCircle2,
  Image as ImageIcon
} from 'lucide-react';
import { ROOMS, HOTEL_INFO, WHY_CHOOSE_US, AMENITIES } from '../data/hotelData';

interface HomeProps {
  onNavigate: (path: string) => void;
  onOpenBooking: (roomId?: string) => void;
}

const HERO_IMAGES = [
  {
    title: 'Hotel Exterior',
    url: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1791194697/unnamed.jpg'
  },
  {
    title: 'Executive Suite',
    url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2000&q=90'
  },
  {
    title: 'Superior King Room',
    url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=90'
  },
  {
    title: 'Grand Reception',
    url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2000&q=90'
  }
];

export const Home: React.FC<HomeProps> = ({ onNavigate, onOpenBooking }) => {
  const [heroBgIndex, setHeroBgIndex] = useState(0);

  return (
    <div className="min-h-screen bg-[#0d0514] text-slate-100">

      {/* ==========================================
          SECTION 1 — LUXURY HERO
          ========================================== */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
        {/* Full-screen Background Hotel Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-all duration-1000"
          style={{
            backgroundImage: `url('${HERO_IMAGES[heroBgIndex].url}')`
          }}
        />

        {/* Subtle Dark Purple Luxury Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0514] via-[#12061f]/85 to-[#0b0312]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e0a30]/80 border border-[#d4af37]/50 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Star className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#f3e5ab]">
              Welcome to Ipoh, Perak
            </span>
            <Star className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
          </div>

          {/* Main Title */}
          <div className="space-y-3">
            <h1 className="font-cinzel text-5xl sm:text-7xl lg:text-8xl font-black tracking-wider text-white drop-shadow-2xl">
              BOSS HOTEL
            </h1>
            <p className="font-playfair text-xl sm:text-2xl lg:text-3xl text-[#f3e5ab] italic font-normal tracking-wide">
              "Experience Comfort, Elegance & Exceptional Hospitality"
            </p>
          </div>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            Situated on Jalan Ali Pitchay in Taman Jubilee, Ipoh. Discover luxurious accommodations, refined guest rooms, and memorable Malaysian service.
          </p>

          {/* Two Elegant Gold Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => {
                onNavigate('/rooms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="gold-button w-full sm:w-auto px-8 py-4 rounded-xl uppercase tracking-wider text-xs font-bold flex items-center justify-center gap-2 shadow-2xl group"
            >
              <span>Explore Rooms</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                onNavigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="outline-gold-button w-full sm:w-auto px-8 py-4 rounded-xl uppercase tracking-wider text-xs font-bold flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Contact Hotel</span>
            </button>
          </div>

          {/* Interactive Hero Image Switcher */}
          <div className="pt-4 flex items-center justify-center gap-2 flex-wrap">
            <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider flex items-center gap-1 mr-2">
              <ImageIcon className="w-3.5 h-3.5 text-[#d4af37]" /> Preview Views:
            </span>
            {HERO_IMAGES.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setHeroBgIndex(idx)}
                className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all backdrop-blur-md ${
                  heroBgIndex === idx
                    ? 'bg-[#d4af37] text-[#0d0514] shadow-[0_0_12px_rgba(212,175,55,0.4)]'
                    : 'bg-[#180829]/80 text-slate-300 border border-[#d4af37]/30 hover:border-[#d4af37]'
                }`}
              >
                {img.title}
              </button>
            ))}
          </div>

          {/* Location Quick Info Pill */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-2 bg-[#170829]/70 border border-[#d4af37]/20 px-4 py-2 rounded-full">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Taman Jubilee, 30250 Ipoh</span>
            </div>
            <div className="flex items-center gap-2 bg-[#170829]/70 border border-[#d4af37]/20 px-4 py-2 rounded-full">
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{HOTEL_INFO.phoneFormatted}</span>
            </div>
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 2 — WELCOME TO BOSS HOTEL
          ========================================== */}
      <section className="py-20 bg-gradient-to-b from-[#0d0514] via-[#150724] to-[#0d0514] border-y border-[#d4af37]/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Text Column */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#d4af37]">
                  About Our Hotel
                </span>
                <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Welcome to <span className="gold-gradient-text">BOSS HOTEL</span>
                </h2>
                <div className="w-20 h-[2px] bg-gradient-to-r from-[#d4af37] to-transparent" />
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                Nestled strategically on Jalan Ali Pitchay in Taman Jubilee, Ipoh, <strong>BOSS HOTEL</strong> is crafted for travelers who appreciate refined comfort, quiet elegance, and genuine Malaysian warmth.
              </p>

              {/* Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#1e0a30] border border-[#d4af37]/25 p-4 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-xs text-white">Comfortable Accommodation</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Plush bedding, climate control & sound-insulated rooms.</p>
                  </div>
                </div>

                <div className="bg-[#1e0a30] border border-[#d4af37]/25 p-4 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-xs text-white">Elegant Atmosphere</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Stylish dark purple and gold interior detailing.</p>
                  </div>
                </div>

                <div className="bg-[#1e0a30] border border-[#d4af37]/25 p-4 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-xs text-white">Convenient Location</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">Minutes away from Ipoh Parade & food hotspots.</p>
                  </div>
                </div>

                <div className="bg-[#1e0a30] border border-[#d4af37]/25 p-4 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-xs text-white">Friendly Hospitality</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">24/7 dedicated front desk staff at your service.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('/contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="gold-button px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2"
                >
                  <span>Plan Your Relaxing Stay</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Luxury Hotel Image Side */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/40 shadow-2xl gold-border-glow">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
                  alt="BOSS HOTEL Luxury Guest Room"
                  className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0418] via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#1a082e]/90 border border-[#d4af37]/40 backdrop-blur-md p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-[#f3e5ab] font-cinzel">BOSS HOTEL IPOH</p>
                    <p className="text-[11px] text-slate-300">Jalan Ali Pitchay, Taman Jubilee</p>
                  </div>
                  <span className="text-xs font-bold text-[#d4af37] bg-[#2d1248] px-3 py-1.5 rounded-lg border border-[#d4af37]/30">
                    4.8 ★ Rated
                  </span>
                </div>
              </div>

              {/* Decorative Frame Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#d4af37] pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#d4af37] pointer-events-none" />
            </div>

          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 3 — FEATURED ROOMS
          ========================================== */}
      <section className="py-20 bg-[#0d0514] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#d4af37]">
              Accommodations
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
              Featured Rooms & Suites
            </h2>
            <p className="text-sm text-slate-300">
              Select from our meticulously designed rooms featuring dark purple velour trim, golden accents, and modern amenities.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROOMS.map((room) => (
              <div
                key={room.id}
                className="purple-card rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#140726] via-transparent to-transparent" />
                    
                    {room.popular && (
                      <span className="absolute top-3 right-3 bg-[#d4af37] text-[#0d0514] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                        Popular Choice
                      </span>
                    )}

                    <div className="absolute bottom-3 left-3 bg-[#0f0418]/80 backdrop-blur-sm border border-[#d4af37]/30 px-2.5 py-1 rounded-md text-[11px] font-semibold text-[#f3e5ab]">
                      {room.roomSize} • {room.capacity}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-cinzel text-base font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                        {room.name}
                      </h3>
                      <div className="text-right">
                        <span className="text-xs font-bold text-[#d4af37]">RM {room.priceRM}</span>
                        <span className="text-[10px] text-slate-400 block">/ night</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {room.shortDesc}
                    </p>

                    {/* Key Facilities Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {room.facilities.slice(0, 3).map((fac, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-[#270e3f] text-slate-300 px-2 py-0.5 rounded border border-[#d4af37]/20"
                        >
                          {fac}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="w-full gold-button py-2.5 rounded-xl text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <span>View Room & Book</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => {
                onNavigate('/rooms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="outline-gold-button px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2"
            >
              <span>View All Rooms & Pricing Details</span>
              <ArrowRight className="w-4 h-4 text-[#d4af37]" />
            </button>
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 4 — HOTEL AMENITIES
          ========================================== */}
      <section className="py-20 bg-gradient-to-b from-[#120521] via-[#1b0830] to-[#120521] border-y border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#d4af37]">
              Guest Comforts
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
              Hotel Amenities & Services
            </h2>
            <p className="text-sm text-slate-300">
              Designed with dark purple cards and gold accents to ensure your Ipoh visit is seamless and restful.
            </p>
          </div>

          {/* 6 Essential Amenities Grid with High Quality Hotel Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AMENITIES.slice(0, 6).map((item) => {
              const renderIcon = (name: string) => {
                switch (name) {
                  case 'Bed': return <BedDouble className="w-5 h-5 text-[#d4af37]" />;
                  case 'Wifi': return <Wifi className="w-5 h-5 text-[#d4af37]" />;
                  case 'Wind': return <Wind className="w-5 h-5 text-[#d4af37]" />;
                  case 'Clock': return <Clock className="w-5 h-5 text-[#d4af37]" />;
                  case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#d4af37]" />;
                  case 'Car': return <Car className="w-5 h-5 text-[#d4af37]" />;
                  default: return <Sparkles className="w-5 h-5 text-[#d4af37]" />;
                }
              };

              return (
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#150727] via-[#150727]/50 to-transparent" />
                    
                    {/* Floating Gold Icon Badge */}
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-[#120521]/90 border border-[#d4af37]/60 backdrop-blur-md flex items-center justify-center shadow-lg">
                      {renderIcon(item.iconName)}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-2 bg-[#150727] flex-1">
                    <h3 className="font-cinzel text-base font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => {
                onNavigate('/amenities');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="outline-gold-button px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2"
            >
              <span>View Full Amenities & Photo Gallery</span>
              <ChevronRight className="w-4 h-4 text-[#d4af37]" />
            </button>
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 5 — WHY CHOOSE BOSS HOTEL
          ========================================== */}
      <section className="py-20 bg-[#0d0514] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#d4af37]">
              The BOSS HOTEL Standard
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
              Why Choose BOSS HOTEL
            </h2>
            <p className="text-sm text-slate-300">
              Discover what makes our Ipoh hotel the preferred choice for business travelers, couples, and families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, index) => (
              <div
                key={index}
                className="purple-card rounded-2xl overflow-hidden border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300 shadow-2xl flex flex-col group"
              >
                {/* Image Header Container */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150727] via-[#150727]/60 to-transparent" />

                  {/* Golden Number Badge */}
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-[#120521]/90 border border-[#d4af37] backdrop-blur-md flex items-center justify-center text-[#d4af37] font-bold font-cinzel text-xs shadow-lg group-hover:bg-[#d4af37] group-hover:text-[#0d0514] transition-colors">
                    0{index + 1}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 bg-[#150727] flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-[#f3e5ab] transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                    </h3>

                    <div className="w-12 h-[2px] bg-gradient-to-r from-[#d4af37] to-transparent group-hover:w-20 transition-all duration-300" />

                    <p className="text-xs text-slate-300 leading-relaxed font-light pt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ==========================================
          SECTION 6 — CALL TO ACTION
          ========================================== */}
      <section className="py-24 relative overflow-hidden border-t-2 border-[#d4af37]/40">
        {/* Background Hotel Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/k7og2ybq/image/upload/v1791194697/unnamed.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#11041c]/95 via-[#230b3d]/90 to-[#11041c]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2)_0%,transparent_70%)]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          
          <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center mx-auto">
            <Shield className="w-6 h-6 text-[#d4af37]" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-white tracking-wider">
            "Your Comfortable Stay Starts Here"
          </h2>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
            Discover a relaxing and memorable stay at BOSS HOTEL in Ipoh. Book directly with us for guaranteed best rates and personalized service.
          </p>

          {/* Action Buttons & Phone */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                onNavigate('/rooms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="gold-button w-full sm:w-auto px-8 py-4 rounded-xl text-xs uppercase tracking-wider font-bold shadow-2xl flex items-center justify-center gap-2"
            >
              <span>Explore Rooms</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                onNavigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="outline-gold-button w-full sm:w-auto px-8 py-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2"
            >
              <span>Contact Us</span>
            </button>
          </div>

          {/* Prominent Phone Number Highlight */}
          <div className="pt-4 border-t border-[#d4af37]/30 max-w-md mx-auto">
            <p className="text-xs text-slate-300 uppercase tracking-widest font-semibold mb-1">
              Direct Reception Call
            </p>
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="inline-flex items-center gap-2 text-xl sm:text-2xl font-bold font-cinzel text-[#f3e5ab] hover:underline"
            >
              <Phone className="w-5 h-5 text-[#d4af37]" />
              <span>{HOTEL_INFO.phoneFormatted}</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
