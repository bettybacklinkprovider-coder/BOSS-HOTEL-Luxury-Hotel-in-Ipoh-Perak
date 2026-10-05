export interface Room {
  id: string;
  name: string;
  category: 'deluxe' | 'superior' | 'family' | 'executive';
  shortDesc: string;
  description: string;
  priceRM: number;
  capacity: string;
  bedType: string;
  roomSize: string;
  image: string;
  gallery: string[];
  facilities: string[];
  popular: boolean;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'essential' | 'comfort' | 'service';
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'exterior' | 'rooms' | 'amenities' | 'surroundings';
  image: string;
  caption: string;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Attraction {
  name: string;
  distance: string;
  description: string;
  type: string;
  image: string;
}

export const HOTEL_INFO = {
  name: 'BOSS HOTEL',
  tagline: 'Experience Comfort, Elegance & Exceptional Hospitality',
  phone: '+60168672646',
  phoneFormatted: '+60 16-867 2646',
  rawPhone: '60168672646',
  email: 'reservations@bosshotel.com.my',
  address: 'Jalan Ali Pitchay, Taman Jubilee, 30250 Ipoh, Perak, Malaysia',
  city: 'Ipoh',
  state: 'Perak',
  postcode: '30250',
  country: 'Malaysia',
  checkInTime: '3:00 PM',
  checkOutTime: '12:00 PM',
  whatsappUrl: 'https://wa.me/60168672646',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.81977755106!2d101.0828!3d4.5925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31caec7a54452179%3A0xa144422e1b12345!2sJalan%20Ali%20Pitchay%2C%20Taman%20Jubilee%2C%2030250%20Ipoh%2C%20Perak%2C%20Malaysia!5e0!3m2!1sen!2smy!4v1710000000000!5m2!1sen!2smy',
  mapsLocationUrl: 'https://maps.google.com/?q=Jalan+Ali+Pitchay+Taman+Jubilee+30250+Ipoh+Perak'
};

export const ROOMS: Room[] = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    category: 'deluxe',
    shortDesc: 'Elegantly designed cozy retreat perfect for business travelers and couples seeking contemporary comfort.',
    description: 'Our Deluxe Room offers a blend of sophisticated dark purple upholstery, golden accents, and serene city views. Features crisp premium linen, ambient dimmable lighting, and a modern rainfall shower bathroom.',
    priceRM: 180,
    capacity: '2 Adults',
    bedType: '1 Queen Bed or 2 Twin Beds',
    roomSize: '24 m²',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: [
      'Free Wi-Fi 6',
      'Individual Air Conditioning',
      '43" Smart TV with Streaming',
      'Rainfall Shower',
      'Work Desk & Chair',
      'Complimentary Coffee & Tea',
      'Hairdryer & Vanity Amenities',
      'In-Room Electronic Safe'
    ],
    popular: false
  },
  {
    id: 'superior-room',
    name: 'Superior Room',
    category: 'superior',
    shortDesc: 'Spacious accommodation with enhanced luxury furnishings, ideal for relaxing after a day exploring Ipoh.',
    description: 'Elevate your stay in our Superior Room featuring a plush King Bed, plush duvet, dedicated reading nook, and sleek workstation. Experience true peace with sound-insulated windows and bespoke guest amenities.',
    priceRM: 230,
    capacity: '2 Adults, 1 Child',
    bedType: '1 King Bed',
    roomSize: '28 m²',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: [
      'Free High-Speed Wi-Fi',
      'Quiet Multi-Speed Aircon',
      '50" Ultra HD Smart TV',
      'Rainfall Shower & Plush Towels',
      'Mini Fridge Bar',
      'Tea & Espresso Station',
      'Slippers & Luxury Bathrobes',
      'Daily Maid Service'
    ],
    popular: true
  },
  {
    id: 'family-room',
    name: 'Family Room',
    category: 'family',
    shortDesc: 'Generous suite layout crafted specifically for families and groups desiring spacious and cozy comfort.',
    description: 'Designed with extra room for all your family needs, our Family Room features two plush Queen beds, ample luggage space, double vanity washbasins, and a cozy seating area so everyone feels right at home.',
    priceRM: 330,
    capacity: '4 Adults',
    bedType: '2 Queen Beds',
    roomSize: '38 m²',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: [
      'High-Speed Wi-Fi',
      'Dual Zone Air Conditioning',
      '55" Smart TV',
      'Spacious Bathroom & Shower',
      'Mini Refrigerator',
      'Complimentary Bottled Water & Drinks',
      'Electric Kettle & Tea Set',
      'Extra Storage Wardrobes'
    ],
    popular: false
  },
  {
    id: 'executive-room',
    name: 'Executive Suite',
    category: 'executive',
    shortDesc: 'The pinnacle of luxury at BOSS HOTEL featuring a private lounge zone, premium bath tub, and VIP amenities.',
    description: 'Indulge in ultimate refinement in our Executive Suite. Styled with rich golden accents, dark purple velour trim, a separate living area, marble bathroom with luxury soaking tub, and VIP concierge services.',
    priceRM: 450,
    capacity: '2-3 Adults',
    bedType: '1 Super King Bed + Sofa Bed',
    roomSize: '48 m²',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: [
      'VIP High-Speed Wi-Fi',
      'Climate-Controlled AC',
      '65" 4K Smart TV',
      'Luxury Soaking Tub & Rain Shower',
      'Sofa Lounge & Coffee Table',
      'Nespresso Machine & Premium Tea',
      'In-Room Safe & Executive Desk',
      'Complimentary Welcome Fruit Basket'
    ],
    popular: true
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: 'beds',
    title: 'Comfortable Rooms',
    description: 'Plush mattresses, Egyptian cotton linens, and blackout curtains for serene restful sleep.',
    iconName: 'Bed',
    category: 'comfort',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'wifi',
    title: 'Free Wi-Fi 6',
    description: 'Uninterrupted high-speed optical Wi-Fi coverage across all guest rooms, lobby, and common corridors.',
    iconName: 'Wifi',
    category: 'essential',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ac',
    title: 'Air Conditioning',
    description: 'Quiet, individual digital climate control units in every room for tailored cooling.',
    iconName: 'Wind',
    category: 'essential',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'reception',
    title: '24/7 Reception',
    description: 'Round-the-clock front desk concierge available for express check-in and assistance.',
    iconName: 'Clock',
    category: 'service',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'housekeeping',
    title: 'Daily Housekeeping',
    description: 'Meticulous daily room sanitization, towel refreshment, and vanity restocking.',
    iconName: 'Sparkles',
    category: 'service',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'parking',
    title: 'Convenient Parking',
    description: 'Secure, accessible parking bays available for registered hotel guests.',
    iconName: 'Car',
    category: 'essential',
    image: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1791194697/unnamed.jpg'
  },
  {
    id: 'security',
    title: '24/7 CCTV & Keycard Entry',
    description: 'Electronic keycard room locks and comprehensive CCTV monitoring for full guest peace of mind.',
    iconName: 'ShieldCheck',
    category: 'essential',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'coffee',
    title: 'Tea & Coffee Facilities',
    description: 'In-room electric kettles, complimentary premium teas, instant coffee, and bottled mineral water.',
    iconName: 'Coffee',
    category: 'comfort',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'BOSS HOTEL Exterior & Entrance',
    category: 'exterior',
    image: 'https://res.cloudinary.com/k7og2ybq/image/upload/v1791194697/unnamed.jpg',
    caption: 'Modern luxury facade located conveniently on Jalan Ali Pitchay in Taman Jubilee, Ipoh.'
  },
  {
    id: 'g2',
    title: 'Grand Reception & Lounge',
    category: 'exterior',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
    caption: 'Welcoming 24/7 reception lobby with plush seating and golden ambient light fixtures.'
  },
  {
    id: 'g3',
    title: 'Superior King Room Interior',
    category: 'rooms',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    caption: 'Spacious Superior Room with dark purple velvet accents and premium King size bed.'
  },
  {
    id: 'g4',
    title: 'Deluxe Twin Suite Bedding',
    category: 'rooms',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    caption: 'Cozy Deluxe room layout crafted for utmost rest and quiet relaxation.'
  },
  {
    id: 'g5',
    title: 'Executive Suite Lounge',
    category: 'rooms',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
    caption: 'Sophisticated executive suite lounge area with smart TV and workspace.'
  },
  {
    id: 'g6',
    title: 'Ensuite Rainfall Bathroom',
    category: 'amenities',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    caption: 'Sleek luxury shower bathroom stocked with fresh vanity toiletries and soft towels.'
  },
  {
    id: 'g7',
    title: 'In-Room Coffee & Tea Corner',
    category: 'amenities',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    caption: 'Complimentary tea, coffee, and refreshment setups provided in every guest room.'
  },
  {
    id: 'g8',
    title: 'Ipoh Town Surrounding Atmosphere',
    category: 'surroundings',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
    caption: 'Explore historic Ipoh street murals, famous local eateries, and heritage landmarks nearby.'
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: 'Prime Ipoh Location',
    description: 'Situated in Taman Jubilee on Jalan Ali Pitchay, putting you minutes away from Ipoh Parade, historic Concubine Lane, and famous food streets.',
    icon: 'MapPin',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Comfortable Accommodation',
    description: 'Thoughtfully designed rooms equipped with premium mattresses, blackout curtains, and soundproofing for deep, restful sleep.',
    icon: 'BedDouble',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Modern Facilities',
    description: 'Enjoy high-speed Wi-Fi 6, smart TVs, individual climate control, and electronic keycard security for effortless convenience.',
    icon: 'Sparkle',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Professional Hospitality',
    description: 'Our warm, attentive front desk staff are dedicated to delivering genuine Malaysian hospitality around the clock.',
    icon: 'HeartHandshake',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Relaxing Environment',
    description: 'Quiet, serene atmosphere in a stylish dark purple and gold interior setting designed for tranquility.',
    icon: 'Moon',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Great Value for Guests',
    description: 'Luxury aesthetics and premium comfort at transparent, competitive rates without hidden charges.',
    icon: 'Tag',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
  }
];

export const ATTRACTIONS: Attraction[] = [
  {
    name: 'Ipoh Parade Mall',
    distance: '3 mins (1.2 km)',
    description: 'Major shopping mall featuring retail brands, cinemas, restaurants, and entertainment.',
    type: 'Shopping',
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Concubine Lane (Panglima Lane)',
    distance: '5 mins (1.8 km)',
    description: 'Historic heritage alley filled with handicraft shops, street art, and famous local snacks.',
    type: 'Heritage & Food',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Lou Wong Bean Sprout Chicken',
    distance: '4 mins (1.5 km)',
    description: 'World-famous Ipoh signature dish legendary among tourists and locals alike.',
    type: 'Local Cuisine',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Ipoh Railway Station (Taj Mahal of Ipoh)',
    distance: '6 mins (2.4 km)',
    description: 'Stunning colonial architecture and beautiful gardens located in the heart of town.',
    type: 'Landmark',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Perak Cave Temple & Kek Lok Tong',
    distance: '12 mins (6.5 km)',
    description: 'Breathtaking limestone caves with intricate Buddhist murals, statues, and tranquil gardens.',
    type: 'Attraction',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
  }
];
