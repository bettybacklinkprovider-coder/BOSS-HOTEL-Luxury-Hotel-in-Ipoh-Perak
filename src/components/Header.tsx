import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Crown, ChevronRight } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBooking: (roomId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms & Suites', path: '/rooms' },
    { name: 'Amenities & Gallery', path: '/amenities' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#12061c]/95 backdrop-blur-md border-b border-[#d4af37]/30 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0f0418]/90 via-[#0f0418]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('/')}
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] via-[#aa7c11] to-[#3a2007] p-[1px] flex items-center justify-center shadow-lg group-hover:shadow-[#d4af37]/20 transition-all">
              <div className="w-full h-full bg-[#12061c] rounded-full flex items-center justify-center">
                <Crown className="w-5 h-5 text-[#d4af37] group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-black tracking-widest text-white group-hover:text-[#f3e5ab] transition-colors block leading-none">
                BOSS HOTEL
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37]/80 font-medium block mt-1">
                Ipoh • Perak
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#1a0b2e]/60 border border-[#d4af37]/20 rounded-full px-5 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`px-4 py-2 rounded-full text-xs lg:text-sm font-medium transition-all relative ${
                    isActive
                      ? 'text-[#f3e5ab] font-semibold bg-[#2a1347] border border-[#d4af37]/40 shadow-[0_0_12px_rgba(212,175,55,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="flex items-center gap-2 text-xs text-[#f3e5ab] hover:text-white bg-[#25103a] border border-[#d4af37]/30 px-3.5 py-2 rounded-lg transition-all hover:border-[#d4af37]"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="font-medium">{HOTEL_INFO.phoneFormatted}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="gold-button flex items-center gap-2 text-xs uppercase font-bold tracking-wider px-5 py-2.5 rounded-lg shadow-lg hover:brightness-110 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              <span>Book / Contact</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="gold-button p-2.5 rounded-lg text-xs flex items-center justify-center shadow-md"
              aria-label="Book Now"
            >
              <Calendar className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#f3e5ab] bg-[#1d0b30] border border-[#d4af37]/30 hover:bg-[#2c1247] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#12061c]/98 border-b border-[#d4af37]/30 px-4 pt-4 pb-6 mt-3 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-2 mb-6">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium text-sm transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#2e134f] to-[#1e0a35] text-[#f3e5ab] border border-[#d4af37]/40 font-bold'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#d4af37]' : 'text-slate-500'}`} />
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#d4af37]/20 space-y-3">
            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 text-sm text-[#f3e5ab] bg-[#220d38] border border-[#d4af37]/30 py-3 rounded-xl"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Call Hotel: {HOTEL_INFO.phoneFormatted}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full gold-button py-3 rounded-xl text-sm uppercase font-bold tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Room or Send Inquiry</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
