// Chesapeake Golf Carts Branding Constants
// Central source of truth for all branding information

export const BRANDING = {
  // Company Information
  name: "Chesapeake Golf Carts",
  alternateName: "CGC",
  description: "Premier golf cart dealer in Chesapeake, Virginia specializing in DENAGO and EVOLUTION electric vehicles with sales, service, and rentals.",
  
  // Contact Information
  phone: "757-555-1234",
  email: "sales@chesapeakegolfcarts.com",
  
  // Address
  address: {
    street: "1234 Battlefield Blvd",
    city: "Chesapeake",
    state: "VA",
    stateFullName: "Virginia",
    zip: "23322",
    country: "US",
  },
  
  // Coordinates (Chesapeake, VA)
  coordinates: {
    latitude: 36.7682,
    longitude: -76.2875,
  },
  
  // Website
  domain: "chesapeakegolfcarts.com",
  url: "https://chesapeakegolfcarts.com",
  
  // Social Media
  socialMedia: {
    facebook: "https://www.facebook.com/ChesapeakeGolfCarts/",
    youtube: "https://www.youtube.com/@ChesapeakeGolfCarts",
    pinterest: "https://www.pinterest.com/chesapeakegolfcarts/",
  },
  
  // Service Area
  serviceArea: {
    county: "City of Chesapeake",
    state: "Virginia",
    region: "Chesapeake Virginia",
  },
  
  // Business Hours
  hours: {
    weekday: "Mo-Fr 09:00-18:00",
    saturday: "Sa 09:00-17:00",
  },
  
  // Branding
  slogan: "Professional golf cart services delivered to your community",
  foundingYear: "2008",
  
  // Google Maps
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102529.16172010403!2d-76.3567!3d36.7682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bac1e8e1d59d55%3A0x35df9e5df4e08c66!2sChesapeake%2C%20VA!5e0!3m2!1sen!2sus!4v1730145600000!5m2!1sen!2sus",
  googleMapsUrl: "https://www.google.com/maps/place/Chesapeake,+VA",
  
  // Legacy values for reference
  legacy: {
    name: "Chesapeake Golf Carts",
    phone: "757-555-1234",
    url: "https://chesapeakegolfcarts.com",
    location: "Chesapeake, Virginia",
  },
} as const;

// Helper functions
export const getFullAddress = () => {
  const { street, city, state, zip } = BRANDING.address;
  return `${street}, ${city}, ${state} ${zip}`;
};

export const getPhoneFormatted = () => {
  const phone = BRANDING.phone;
  // Format as (757) 555-1234
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};

export const getTelLink = () => `tel:${BRANDING.phone}`;
export const getEmailLink = () => `mailto:${BRANDING.email}`;
