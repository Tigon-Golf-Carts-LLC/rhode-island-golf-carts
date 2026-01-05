// Rhode Island Golf Carts Branding Constants
// Central source of truth for all branding information

export const BRANDING = {
  // Company Information
  name: "Rhode Island Golf Carts",
  alternateName: "RIGC",
  description: "Premier golf cart dealer in Rhode Island specializing in DENAGO and EVOLUTION electric vehicles with sales, service, and rentals serving all of Rhode Island.",

  // Contact Information
  phone: "844-844-6638",
  email: "sales@rhodeislandgolfcarts.com",

  // Address (Rhode Island Showroom)
  address: {
    street: "Rhode Island",
    city: "Newport",
    state: "RI",
    stateFullName: "Rhode Island",
    zip: "02840",
    country: "US",
  },

  // Coordinates (Rhode Island)
  coordinates: {
    latitude: 41.5801,
    longitude: -71.4774,
  },

  // Website
  domain: "rhodeislandgolfcarts.com",
  url: "https://rhodeislandgolfcarts.com",

  // Social Media
  socialMedia: {
    facebook: "https://www.facebook.com/RhodeIslandGolfCarts/",
    youtube: "https://www.youtube.com/@RhodeIslandGolfCarts",
    pinterest: "https://www.pinterest.com/rhodeislandgolfcarts/",
  },

  // Service Area
  serviceArea: {
    county: "Rhode Island",
    state: "Rhode Island",
    region: "Rhode Island",
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
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.7!2d-71.4774!3d41.5801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDM0JzQ4LjQiTiA3McKwMjgnMzguNiJX!5e0!3m2!1sen!2sus!4v1733145600000!5m2!1sen!2sus",
  googleMapsUrl: "https://www.google.com/maps/place/Rhode+Island",

  // Legacy values for reference
  legacy: {
    name: "Rhode Island Golf Carts",
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
