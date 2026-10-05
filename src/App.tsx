import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Home } from './pages/Home';
import { RoomsSuites } from './pages/RoomsSuites';
import { AmenitiesGallery } from './pages/AmenitiesGallery';
import { ContactLocation } from './pages/ContactLocation';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (roomId?: string) => {
    setSelectedRoomId(roomId);
    setIsBookingOpen(true);
  };

  // Render active page based on pathname
  const renderPage = () => {
    switch (currentPath) {
      case '/rooms':
        return (
          <RoomsSuites
            onOpenBooking={handleOpenBooking}
            onNavigate={navigate}
          />
        );
      case '/amenities':
        return (
          <AmenitiesGallery
            onOpenBooking={() => handleOpenBooking()}
          />
        );
      case '/contact':
        return <ContactLocation />;
      case '/':
      default:
        return (
          <Home
            onNavigate={navigate}
            onOpenBooking={handleOpenBooking}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0514] text-slate-100 font-sans selection:bg-[#d4af37]/30 selection:text-[#f3e5ab] flex flex-col justify-between">
      <div>
        {/* Sticky Luxury Navigation Header */}
        <Header
          currentPath={currentPath}
          onNavigate={navigate}
          onOpenBooking={handleOpenBooking}
        />

        {/* Page Content */}
        <main>{renderPage()}</main>
      </div>

      {/* Luxury Dark Footer */}
      <Footer
        onNavigate={navigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Reservation / Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedRoomId={selectedRoomId}
      />
    </div>
  );
}
