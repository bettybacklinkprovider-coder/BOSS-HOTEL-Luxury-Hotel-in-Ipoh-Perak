import React, { useState } from 'react';
import { 
  Phone, MapPin, Mail, Clock, MessageSquare, Send, CheckCircle2, 
  ExternalLink, Compass, ShieldCheck, Crown, Navigation 
} from 'lucide-react';
import { HOTEL_INFO, ATTRACTIONS } from '../data/hotelData';

export const ContactLocation: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Room Inquiry');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello BOSS HOTEL Ipoh!\n\n` +
      `👤 *Name:* ${fullName || 'Guest'}\n` +
      `📞 *Phone:* ${phone || 'N/A'}\n` +
      `✉️ *Email:* ${email || 'N/A'}\n` +
      `📅 *Dates:* ${checkIn || 'Flexible'} to ${checkOut || 'Flexible'}\n` +
      `💬 *Message:* ${message || 'Inquiry regarding room reservation'}`
    );
    window.open(`https://wa.me/60168672646?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0d0514] text-slate-100 pt-24 pb-20">
      
      {/* Page Header */}
      <section className="relative py-16 bg-gradient-to-b from-[#19092d] via-[#120521] to-[#0d0514] border-b border-[#d4af37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#d4af37]">
            GET IN TOUCH
          </span>
          <h1 className="font-cinzel text-4xl sm:text-6xl font-black text-white tracking-wider">
            Contact & Location
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Reach out to our front desk team for room bookings, directions, or special stay arrangements in Ipoh, Perak.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Top Prominent Call Button Banner */}
        <div className="bg-gradient-to-r from-[#210c3b] via-[#33135c] to-[#210c3b] border border-[#d4af37]/50 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-full bg-[#d4af37] text-[#0d0514] flex items-center justify-center shrink-0 shadow-xl">
              <Phone className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold block">
                Immediate Reception Hotline
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white">
                Call BOSS HOTEL
              </h2>
              <p className="text-xs text-slate-300 mt-0.5">
                Speak directly with our front desk staff in Ipoh for quick availability checks.
              </p>
            </div>
          </div>

          <a
            href={`tel:${HOTEL_INFO.phone}`}
            className="gold-button px-8 py-4 rounded-xl text-sm uppercase font-extrabold tracking-wider flex items-center gap-2 shadow-2xl shrink-0 w-full md:w-auto justify-center"
          >
            <Phone className="w-4 h-4" />
            <span>Call {HOTEL_INFO.phoneFormatted}</span>
          </a>
        </div>

        {/* Contact Info & Contact Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="purple-card p-8 rounded-2xl space-y-6 border border-[#d4af37]/30">
              <div className="flex items-center gap-3">
                <Crown className="w-6 h-6 text-[#d4af37]" />
                <h3 className="font-cinzel text-xl font-bold text-white">
                  Hotel Business Details
                </h3>
              </div>

              <div className="space-y-5 text-sm">
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2b1248] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#d4af37] block">Hotel Address</span>
                    <p className="text-sm font-semibold text-white leading-relaxed mt-0.5">
                      {HOTEL_INFO.name}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {HOTEL_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2b1248] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#d4af37] block">Telephone</span>
                    <a
                      href={`tel:${HOTEL_INFO.phone}`}
                      className="text-base font-bold text-[#f3e5ab] hover:underline block"
                    >
                      {HOTEL_INFO.phoneFormatted}
                    </a>
                    <span className="text-[11px] text-slate-400">Lines open 24/7</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2b1248] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#d4af37] block">WhatsApp Reservations</span>
                    <a
                      href={HOTEL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-emerald-400 hover:underline font-semibold block mt-0.5"
                    >
                      Chat on WhatsApp (+60 16-867 2646)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2b1248] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#d4af37] block">Email Enquiries</span>
                    <a
                      href={`mailto:${HOTEL_INFO.email}`}
                      className="text-xs text-slate-300 hover:underline font-medium block mt-0.5"
                    >
                      {HOTEL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2b1248] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#d4af37] block">Front Desk Hours</span>
                    <p className="text-xs text-slate-300 mt-0.5">
                      24 Hours / 7 Days a week
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Standard Check-in: 3:00 PM | Check-out: 12:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Navigation Note */}
            <div className="bg-[#18072b] border border-[#d4af37]/25 rounded-2xl p-6 text-xs text-slate-300 space-y-2">
              <span className="font-bold text-[#f3e5ab] flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#d4af37]" />
                How to Reach Us in Ipoh
              </span>
              <p className="leading-relaxed">
                BOSS HOTEL is conveniently positioned in Taman Jubilee along Jalan Ali Pitchay, roughly 6 minutes drive from Ipoh Train Station and 15 minutes from Sultan Azlan Shah Airport (IPH).
              </p>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="purple-card p-8 rounded-2xl space-y-6 border border-[#d4af37]/30">
              
              <div>
                <h3 className="font-cinzel text-2xl font-bold text-white">
                  Send Hotel Inquiry
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Fill in your details below and our reservations team will contact you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-[#1e0936] border border-emerald-500/40 rounded-2xl text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-cinzel text-xl font-bold text-white">
                    Inquiry Successfully Sent!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{fullName}</strong>. We have logged your request. Our reception desk will contact you via phone or email shortly.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={handleWhatsAppSend}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Also Send via WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="outline-gold-button text-xs px-5 py-3 rounded-xl font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#d4af37] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ahmad Razak"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-[#18082c] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#d4af37] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +60 12-345 6789"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#18082c] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#d4af37] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#18082c] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#d4af37] mb-1">
                        Inquiry Topic
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-[#18082c] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                      >
                        <option value="Room Inquiry">Room Inquiry & Rates</option>
                        <option value="Group Reservation">Group or Family Reservation</option>
                        <option value="Directions & Parking">Directions & Parking</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Check-in Date (Optional)
                      </label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full bg-[#18082c] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Check-out Date (Optional)
                      </label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full bg-[#18082c] border border-[#d4af37]/30 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#d4af37] mb-1">
                      Your Message or Special Request *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please let us know how many guests, preferred room type, or any questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#18082c] border border-[#d4af37]/30 rounded-xl p-4 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button
                      type="submit"
                      className="gold-button py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Online Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

        {/* Location & Map Section */}
        <div className="space-y-6 pt-6">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#d4af37]">
              HOTEL LOCATION
            </span>
            <h2 className="font-cinzel text-3xl font-extrabold text-white">
              Map & Surrounding Area
            </h2>
            <p className="text-xs text-slate-300">
              Jalan Ali Pitchay, Taman Jubilee, 30250 Ipoh, Perak, Malaysia
            </p>
          </div>

          {/* Map Frame */}
          <div className="rounded-2xl overflow-hidden border-2 border-[#d4af37]/40 shadow-2xl relative h-[450px]">
            <iframe
              title="BOSS HOTEL Location Map"
              src={HOTEL_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Map Overlay Button */}
            <div className="absolute bottom-4 right-4 z-10">
              <a
                href={HOTEL_INFO.mapsLocationUrl}
                target="_blank"
                rel="noreferrer"
                className="gold-button px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xl"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Nearby Attractions */}
        <div className="bg-[#150726] border border-[#d4af37]/30 rounded-2xl p-8 space-y-6">
          <div className="flex items-center gap-3">
            <Compass className="w-6 h-6 text-[#d4af37]" />
            <div>
              <h3 className="font-cinzel text-xl font-bold text-white">
                Nearby Ipoh Landmarks & Attractions
              </h3>
              <p className="text-xs text-slate-300">
                Key tourist destinations and culinary highlights within short distance from BOSS HOTEL.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ATTRACTIONS.map((attraction, i) => (
              <div
                key={i}
                className="purple-card rounded-2xl overflow-hidden border border-[#d4af37]/25 hover:border-[#d4af37] transition-all duration-300 shadow-xl flex flex-col group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150727] via-[#150727]/40 to-transparent" />
                  
                  <span className="absolute top-3 right-3 bg-[#120521]/90 border border-[#d4af37]/50 backdrop-blur-md text-[#f3e5ab] text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md">
                    {attraction.distance}
                  </span>

                  <span className="absolute bottom-3 left-3 bg-[#d4af37] text-[#0d0514] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-md">
                    {attraction.type}
                  </span>
                </div>

                <div className="p-4 space-y-2 bg-[#150727] flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-cinzel font-bold text-sm text-white group-hover:text-[#f3e5ab] transition-colors">
                      {attraction.name}
                    </h4>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-light mt-1">
                      {attraction.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
