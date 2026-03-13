export interface Municipality {
  name: string;
  type: 'City' | 'Neighborhood' | 'Community' | 'Town';
  slug: string;
  url: string;
  region: 'chesapeake' | 'hampton-roads' | 'north-carolina';
}

// All 37 service area locations for Rhode Island Golf Carts
export const CHESAPEAKE_MUNICIPALITIES: Municipality[] = [
  // Chesapeake Neighborhoods & Communities (20)
  { name: 'Great Bridge', type: 'Neighborhood', slug: 'great-bridge', url: '/great-bridge-golf-carts', region: 'chesapeake' },
  { name: 'Greenbrier', type: 'Neighborhood', slug: 'greenbrier', url: '/greenbrier-golf-carts', region: 'chesapeake' },
  { name: 'Western Branch', type: 'Neighborhood', slug: 'western-branch', url: '/western-branch-golf-carts', region: 'chesapeake' },
  { name: 'Deep Creek', type: 'Neighborhood', slug: 'deep-creek', url: '/deep-creek-golf-carts', region: 'chesapeake' },
  { name: 'South Norfolk', type: 'Neighborhood', slug: 'south-norfolk', url: '/south-norfolk-golf-carts', region: 'chesapeake' },
  { name: 'Hickory', type: 'Community', slug: 'hickory', url: '/hickory-golf-carts', region: 'chesapeake' },
  { name: 'Grassfield', type: 'Community', slug: 'grassfield', url: '/grassfield-golf-carts', region: 'chesapeake' },
  { name: 'Indian River', type: 'Neighborhood', slug: 'indian-river', url: '/indian-river-golf-carts', region: 'chesapeake' },
  { name: 'Pleasant Grove', type: 'Community', slug: 'pleasant-grove', url: '/pleasant-grove-golf-carts', region: 'chesapeake' },
  { name: 'Portlock', type: 'Neighborhood', slug: 'portlock', url: '/portlock-golf-carts', region: 'chesapeake' },
  { name: 'Bowers Hill', type: 'Community', slug: 'bowers-hill', url: '/bowers-hill-golf-carts', region: 'chesapeake' },
  { name: 'Camelot', type: 'Community', slug: 'camelot', url: '/camelot-golf-carts', region: 'chesapeake' },
  { name: 'Wallaceton', type: 'Community', slug: 'wallaceton', url: '/wallaceton-golf-carts', region: 'chesapeake' },
  { name: 'Crestwood', type: 'Community', slug: 'crestwood', url: '/crestwood-golf-carts', region: 'chesapeake' },
  { name: 'Sunnyside', type: 'Community', slug: 'sunnyside', url: '/sunnyside-golf-carts', region: 'chesapeake' },
  { name: 'Albemarle Acres', type: 'Community', slug: 'albemarle-acres', url: '/albemarle-acres-golf-carts', region: 'chesapeake' },
  { name: 'Norfolk Highlands', type: 'Neighborhood', slug: 'norfolk-highlands', url: '/norfolk-highlands-golf-carts', region: 'chesapeake' },
  { name: 'Sunray', type: 'Community', slug: 'sunray', url: '/sunray-golf-carts', region: 'chesapeake' },
  { name: 'Butts Station', type: 'Community', slug: 'butts-station', url: '/butts-station-golf-carts', region: 'chesapeake' },
  { name: 'Oak Grove', type: 'Community', slug: 'oak-grove', url: '/oak-grove-golf-carts', region: 'chesapeake' },

  // Rhode Island Cities (6)
  { name: 'Norfolk', type: 'City', slug: 'norfolk', url: '/norfolk-golf-carts', region: 'hampton-roads' },
  { name: 'Virginia Beach', type: 'City', slug: 'virginia-beach', url: '/virginia-beach-golf-carts', region: 'hampton-roads' },
  { name: 'Portsmouth', type: 'City', slug: 'portsmouth', url: '/portsmouth-golf-carts', region: 'hampton-roads' },
  { name: 'Suffolk', type: 'City', slug: 'suffolk', url: '/suffolk-golf-carts', region: 'hampton-roads' },
  { name: 'Hampton', type: 'City', slug: 'hampton', url: '/hampton-golf-carts', region: 'hampton-roads' },
  { name: 'Newport News', type: 'City', slug: 'newport-news', url: '/newport-news-golf-carts', region: 'hampton-roads' },

  // Virginia Beach Neighborhoods (4)
  { name: 'Kempsville', type: 'Neighborhood', slug: 'kempsville', url: '/kempsville-golf-carts', region: 'hampton-roads' },
  { name: 'Ocean View', type: 'Neighborhood', slug: 'ocean-view', url: '/ocean-view-golf-carts', region: 'hampton-roads' },
  { name: 'Princess Anne', type: 'Neighborhood', slug: 'princess-anne', url: '/princess-anne-golf-carts', region: 'hampton-roads' },

  // Norfolk Neighborhoods (1)
  { name: 'Ghent', type: 'Neighborhood', slug: 'ghent', url: '/ghent-golf-carts', region: 'hampton-roads' },

  // Portsmouth Neighborhoods (2)
  { name: 'Churchland', type: 'Neighborhood', slug: 'churchland', url: '/churchland-golf-carts', region: 'hampton-roads' },
  { name: 'Driver', type: 'Community', slug: 'driver', url: '/driver-golf-carts', region: 'hampton-roads' },

  // Northeastern North Carolina (5)
  { name: 'Moyock', type: 'Town', slug: 'moyock', url: '/moyock-golf-carts', region: 'north-carolina' },
  { name: 'Currituck', type: 'Town', slug: 'currituck', url: '/currituck-golf-carts', region: 'north-carolina' },
  { name: 'South Mills', type: 'Town', slug: 'south-mills', url: '/south-mills-golf-carts', region: 'north-carolina' },
  { name: 'Camden', type: 'Town', slug: 'camden', url: '/camden-golf-carts', region: 'north-carolina' },
  { name: 'Elizabeth City', type: 'City', slug: 'elizabeth-city', url: '/elizabeth-city-golf-carts', region: 'north-carolina' },
];

// Helper functions to get municipalities by region
export const getChesapeakeNeighborhoods = () => 
  CHESAPEAKE_MUNICIPALITIES.filter(m => m.region === 'chesapeake');

export const getHamptonRoadsCities = () => 
  CHESAPEAKE_MUNICIPALITIES.filter(m => m.region === 'hampton-roads');

export const getNorthCarolinaTowns = () => 
  CHESAPEAKE_MUNICIPALITIES.filter(m => m.region === 'north-carolina');

// Chesapeake city coordinates (central location)
export const CHESAPEAKE_COORDINATES = {
  latitude: 37.2850625,
  longitude: -76.5074161
};

// Chesapeake city basic information
export const CHESAPEAKE_INFO = {
  name: 'City of Chesapeake',
  state: 'Virginia',
  totalLocations: 37,
  countySeat: 'Chesapeake',
  population: 249422,
  area: '353 square miles',
  founded: 1963,
  website: 'cityofchesapeake.net'
};

export { CHESAPEAKE_MUNICIPALITIES as RHODE_ISLAND_MUNICIPALITIES };
