import React from 'react';
import { Crown, Phone, MapPin, Mail, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const handleLinkClick = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0312] text-slate-300 border-t border-[#d4af37]/30 pt-16 pb-8 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#d4af37]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] via-[#aa7c11] to-[#2a1307] p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#12061c] rounded-full flex items-center justify-center">
                  <Crown className="w-5 h-5 text-[#d4af37]" />
                </div>
              </div>
              <div>
                <span className="font-cinzel text-2xl font-black tracking-widest text-white">
                  BOSS HOTEL
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] block">
                  Ipoh • Perak
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed italic">
              "Comfort, Elegance & Hospitality in Ipoh"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Experience modern luxury, quiet relaxation, and warm Malaysian service in the heart of Ipoh, Perak.
            </p>

            {/* Direct WhatsApp CTA */}
            <div className="pt-2">
              <a
                href={HOTEL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#f3e5ab] bg-[#1e0a30] border border-[#d4af37]/40 hover:bg-[#2e134a] hover:border-[#d4af37] px-4 py-2.5 rounded-lg transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#d4af37]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-cinzel text-base font-bold tracking-wider text-white border-b border-[#d4af37]/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('/')}
                  className="hover:text-[#f3e5ab] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#d4af37] text-xs">◆</span> Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/rooms')}
                  className="hover:text-[#f3e5ab] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#d4af37] text-xs">◆</span> Rooms & Suites
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/amenities')}
                  className="hover:text-[#f3e5ab] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#d4af37] text-xs">◆</span> Hotel Amenities
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/amenities')}
                  className="hover:text-[#f3e5ab] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#d4af37] text-xs">◆</span> Photo Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/contact')}
                  className="hover:text-[#f3e5ab] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#d4af37] text-xs">◆</span> Contact & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Rooms Category Links */}
          <div className="space-y-4">
            <h3 className="font-cinzel text-base font-bold tracking-wider text-white border-b border-[#d4af37]/30 pb-2">
              Accommodations
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('/rooms')}
                  className="hover:text-[#f3e5ab] transition-colors"
                >
                  Deluxe Room (RM 180)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/rooms')}
                  className="hover:text-[#f3e5ab] transition-colors"
                >
                  Superior Room (RM 230)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/rooms')}
                  className="hover:text-[#f3e5ab] transition-colors"
                >
                  Family Room (RM 330)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/rooms')}
                  className="hover:text-[#f3e5ab] transition-colors"
                >
                  Executive Suite (RM 450)
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="text-xs gold-gradient-text font-bold uppercase tracking-wider flex items-center gap-1.5 hover:underline"
                >
                  <span>Check Availability & Book</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#d4af37]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="font-cinzel text-base font-bold tracking-wider text-white border-b border-[#d4af37]/30 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-slate-300">
                  {HOTEL_INFO.address}
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a
                  href={`tel:${HOTEL_INFO.phone}`}
                  className="text-xs text-[#f3e5ab] hover:underline font-semibold"
                >
                  {HOTEL_INFO.phoneFormatted}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a
                  href={`mailto:${HOTEL_INFO.email}`}
                  className="text-xs hover:underline text-slate-300"
                >
                  {HOTEL_INFO.email}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span className="text-xs text-slate-400">
                  Check-in: {HOTEL_INFO.checkInTime} | Check-out: {HOTEL_INFO.checkOutTime}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Golden Line Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent my-8" />

        {/* Bottom Copyright & Disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} BOSS HOTEL Ipoh, Perak. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#f3e5ab] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#f3e5ab] cursor-pointer">Terms & Conditions</span>
            <a href={HOTEL_INFO.mapsLocationUrl} target="_blank" rel="noreferrer" className="text-[#d4af37] hover:underline">
              Google Maps Location
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
