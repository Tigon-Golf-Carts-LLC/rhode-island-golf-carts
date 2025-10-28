// Gloucester Golf Carts Branding Constants
// Central source of truth for all branding information

export const BRANDING = {
  // Company Information
  name: "Gloucester Golf Carts",
  alternateName: "GGC",
  description: "Premier golf cart dealer in Gloucester, Virginia specializing in DENAGO and EVOLUTION electric vehicles with sales, service, and rentals.",
  
  // Contact Information
  phone: "804-210-6567",
  email: "sales@tigongolfcarts.com",
  
  // Address
  address: {
    street: "6109 George Washington Memorial Hwy",
    city: "Gloucester",
    state: "VA",
    stateFullName: "Virginia",
    zip: "23061",
    country: "US",
  },
  
  // Coordinates
  coordinates: {
    latitude: 37.4093,
    longitude: -76.5275,
  },
  
  // Website
  domain: "gloucestergolfcarts.com",
  url: "https://gloucestergolfcarts.com",
  
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
    region: "Gloucester Virginia",
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
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.9902440058717!2d-76.5298!3d37.4093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b077d8f7a1968b%3A0x6b6fedc7e21baa97!2s6109%20George%20Washington%20Memorial%20Hwy%2C%20Gloucester%2C%20VA%2023061!5e0!3m2!1sen!2sus!4v1730145600000!5m2!1sen!2sus",
  googleMapsUrl: "https://www.google.com/maps/place/6109+George+Washington+Memorial+Hwy,+Gloucester,+VA+23061",
  
  // Legacy values for reference
  legacy: {
    name: "Pike County Golf Carts",
    phone: "570-535-1535",
    url: "https://pikecountygolfcarts.com",
    location: "Pike County, Pennsylvania",
  },
} as const;

// Helper functions
export const getFullAddress = () => {
  const { street, city, state, zip } = BRANDING.address;
  return `${street}, ${city}, ${state} ${zip}`;
};

export const getPhoneFormatted = () => {
  const phone = BRANDING.phone;
  // Format as (804) 792-0234
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};

export const getTelLink = () => `tel:${BRANDING.phone}`;
export const getEmailLink = () => `mailto:${BRANDING.email}`;
