// Chesapeake Golf Carts Branding Constants
// Central source of truth for all branding information

export const BRANDING = {
  // Company Information
  name: "Chesapeake Golf Carts",
  alternateName: "CGC",
  description: "Premier golf cart dealer in Gloucester Point, Virginia specializing in DENAGO and EVOLUTION electric vehicles with sales, service, and rentals serving Hampton Roads.",
  
  // Contact Information
  phone: "804-792-0234",
  email: "sales@chesapeakegolfcarts.com",
  
  // Address (Gloucester Point Showroom)
  address: {
    street: "2810 George Washington Memorial Hwy",
    city: "Gloucester Point",
    state: "VA",
    stateFullName: "Virginia",
    zip: "23072",
    country: "US",
  },
  
  // Coordinates (Gloucester Point, VA)
  coordinates: {
    latitude: 37.2850625,
    longitude: -76.5074161,
  },
  
  // Website
  domain: "chesapeakegolfcarts.com",
  url: "https://chesapeakegolfcarts.com",
  
  // Social Media
  socialMedia: {
    facebook: "https://www.facebook.com/TigonGolfCartsGloucesterPoint/",
    youtube: "https://www.youtube.com/@TIGONGolfCartsGloucesterPoint",
    pinterest: "https://www.pinterest.com/tigongolfcarts/gloucester-point-virginia/",
  },
  
  // Service Area
  serviceArea: {
    county: "Gloucester County",
    state: "Virginia",
    region: "Hampton Roads Virginia",
  },
  
  // Business Hours
  hours: {
    weekday: "Mo-Fr 09:00-17:00",
    saturday: "Sa 09:00-17:00",
  },
  
  // Branding
  slogan: "Professional golf cart services delivered to your community",
  foundingYear: "2008",
  
  // Google Maps
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.7!2d-76.5074161!3d37.2850625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b07f28d0e1c0d5%3A0xe79e7d0e1c4b2ae1!2s2810%20George%20Washington%20Memorial%20Hwy%2C%20Gloucester%20Point%2C%20VA%2023072!5e0!3m2!1sen!2sus!4v1733145600000!5m2!1sen!2sus",
  googleMapsUrl: "https://www.google.com/maps?cid=16682967888503617377",
  
  // Legacy values for reference
  legacy: {
    name: "Chesapeake Golf Carts",
    phone: "804-792-0234",
    url: "https://chesapeakegolfcarts.com",
    location: "Gloucester Point, Virginia",
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
