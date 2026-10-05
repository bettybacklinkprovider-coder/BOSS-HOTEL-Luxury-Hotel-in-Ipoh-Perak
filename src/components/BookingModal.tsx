import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Mail, MessageSquare, CheckCircle, Crown, ShieldCheck } from 'lucide-react';
import { ROOMS, HOTEL_INFO, Room } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, selectedRoomId }) => {
  const [roomId, setRoomId] = useState<string>(selectedRoomId || ROOMS[0].id);
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [guests, setGuests] = useState<number>(2);
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  useEffect(() => {
    if (selectedRoomId) {
      setRoomId(selectedRoomId);
    }
  }, [selectedRoomId]);

  useEffect(() => {
    // Set default check-in tomorrow and check-out 2 days later
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date(today);
    dayAfter.setDate(dayAfter.getDate() + 2);

    setCheckIn(tomorrow.toISOString().split('T')[0]);
    setCheckOut(dayAfter.toISOString().split('T')[0]);
  }, []);

  if (!isOpen) return null;

  const currentRoom = ROOMS.find((r) => r.id === roomId) || ROOMS[0];

  // Calculate nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const nights = calculateNights();
  const totalPriceRM = currentRoom.priceRM * nights;

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello BOSS HOTEL Ipoh! I would like to reserve a room:\n\n` +
      `🏨 *Room Type:* ${currentRoom.name}\n` +
      `📅 *Check-in:* ${checkIn}\n` +
      `📅 *Check-out:* ${checkOut} (${nights} night${nights > 1 ? 's' : ''})\n` +
      `👥 *Guests:* ${guests}\n` +
      `💰 *Est. Total:* RM ${totalPriceRM}\n\n` +
      `👤 *Guest Name:* ${guestName || 'Not specified'}\n` +
      `📞 *Phone:* ${guestPhone || 'Not specified'}\n` +
      `✉️ *Email:* ${guestEmail || 'Not specified'}\n` +
      `📝 *Special Requests:* ${specialRequests || 'None'}\n\n` +
      `Please confirm availability.`
    );
    window.open(`https://wa.me/60168672646?text=${text}`, '_blank');
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const refNum = 'BH-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refNum);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#150824] border border-[#d4af37]/40 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative text-slate-100">
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#19092c] border-b border-[#d4af37]/30 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center">
              <Crown className="w-4 h-4 text-[#d4af37]" />
            </div>
            <div>
              <h2 className="font-cinzel text-lg font-bold text-white tracking-wider">
                BOSS HOTEL Reservation Inquiry
              </h2>
              <p className="text-xs text-[#d4af37]/90">
                Ipoh, Perak • Best Rate Guaranteed
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-emerald-400" />
            </div>

            <div className="space-y-2">
              <h3 className="font-cinzel text-2xl font-bold text-white">
                Inquiry Received!
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{guestName || 'Valued Guest'}</strong>. Our reception desk at BOSS HOTEL will review your request and contact you shortly.
              </p>
            </div>

            <div className="bg-[#1f0b36] border border-[#d4af37]/30 rounded-xl p-4 max-w-md mx-auto text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-[#d4af37]/20 pb-2">
                <span className="text-slate-400">Reference Number:</span>
                <span className="font-mono font-bold text-[#f3e5ab]">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Selected Room:</span>
                <span className="font-semibold text-white">{currentRoom.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Dates:</span>
                <span className="text-white">{checkIn} to {checkOut} ({nights} night{nights > 1 ? 's' : ''})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Est. Total:</span>
                <span className="font-bold text-[#d4af37]">RM {totalPriceRM}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={handleWhatsAppBooking}
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs px-5 py-3 rounded-xl transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm Instantly via WhatsApp</span>
              </button>

              <button
                onClick={resetForm}
                className="outline-gold-button text-xs px-5 py-3 rounded-xl font-semibold"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmitInquiry} className="p-6 space-y-5">
            
            {/* Room Selection */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-2">
                Select Accommodation Room
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ROOMS.map((room) => (
                  <div
                    key={room.id}
                    onClick={() => setRoomId(room.id)}
                    className={`cursor-pointer rounded-xl p-3 border transition-all flex items-center justify-between ${
                      roomId === room.id
                        ? 'bg-[#2b1248] border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                        : 'bg-[#180829] border-[#d4af37]/20 hover:border-[#d4af37]/50'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs text-white">{room.name}</div>
                      <div className="text-[11px] text-slate-400">{room.bedType} • {room.capacity}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-[#f3e5ab]">RM {room.priceRM}</div>
                      <div className="text-[10px] text-slate-400">per night</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dates & Guests Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs text-slate-300 font-medium mb-1">Check-in Date</label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                    className="w-full bg-[#1e0a33] border border-[#d4af37]/30 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                  <Calendar className="w-3.5 h-3.5 text-[#d4af37] absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 font-medium mb-1">Check-out Date</label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                    className="w-full bg-[#1e0a33] border border-[#d4af37]/30 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                  <Calendar className="w-3.5 h-3.5 text-[#d4af37] absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 font-medium mb-1">Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full bg-[#1e0a33] border border-[#d4af37]/30 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                  <option value={5}>5+ Guests</option>
                </select>
              </div>
            </div>

            {/* Guest Info */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
                Guest Contact Information
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    required
                    className="w-full bg-[#1e0a33] border border-[#d4af37]/30 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone / Mobile *"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    required
                    className="w-full bg-[#1e0a33] border border-[#d4af37]/30 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                </div>
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  className="w-full bg-[#1e0a33] border border-[#d4af37]/30 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                />
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>

              <div>
                <textarea
                  placeholder="Special requests (e.g. early check-in, late arrival, quiet floor)..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  rows={2}
                  className="w-full bg-[#1e0a33] border border-[#d4af37]/30 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>

            {/* Price Summary Box */}
            <div className="bg-[#240e3d] border border-[#d4af37]/40 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <div className="text-xs text-slate-300">
                  Rate Summary: <span className="font-semibold text-white">{currentRoom.name}</span>
                </div>
                <div className="text-xs text-slate-400">
                  RM {currentRoom.priceRM} × {nights} night{nights > 1 ? 's' : ''}
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs text-slate-400 uppercase tracking-wider">Estimated Total</div>
                <div className="text-xl font-bold font-cinzel text-[#f3e5ab]">
                  RM {totalPriceRM}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Reserve via WhatsApp</span>
              </button>

              <button
                type="submit"
                className="gold-button font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Send Direct Inquiry</span>
              </button>
            </div>

            <p className="text-[11px] text-slate-400 text-center">
              No immediate payment required. Reception will verify room availability.
            </p>

          </form>
        )}

      </div>
    </div>
  );
};
