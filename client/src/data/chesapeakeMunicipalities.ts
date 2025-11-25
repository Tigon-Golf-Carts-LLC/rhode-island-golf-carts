export interface Municipality {
  name: string;
  type: 'City' | 'Borough' | 'Township';
  slug: string;
  url: string;
}

// Chesapeake Virginia area municipalities for golf cart business
export const CHESAPEAKE_MUNICIPALITIES: Municipality[] = [
  // Cities & Main Areas in Chesapeake and Hampton Roads Region
  { name: 'Chesapeake', type: 'City', slug: 'chesapeake', url: '/chesapeake-golf-carts' },
  { name: 'Great Bridge', type: 'City', slug: 'great-bridge', url: '/great-bridge-golf-carts' },
  { name: 'Deep Creek', type: 'City', slug: 'deep-creek', url: '/deep-creek-golf-carts' },
  { name: 'Greenbrier', type: 'City', slug: 'greenbrier', url: '/greenbrier-golf-carts' },
  { name: 'Western Branch', type: 'City', slug: 'western-branch', url: '/western-branch-golf-carts' },
  { name: 'South Norfolk', type: 'City', slug: 'south-norfolk', url: '/south-norfolk-golf-carts' },
  { name: 'Hickory', type: 'City', slug: 'hickory', url: '/hickory-golf-carts' },
  { name: 'Indian River', type: 'City', slug: 'indian-river', url: '/indian-river-golf-carts' },
  { name: 'Norfolk', type: 'City', slug: 'norfolk', url: '/norfolk-golf-carts' },
  { name: 'Virginia Beach', type: 'City', slug: 'virginia-beach', url: '/virginia-beach-golf-carts' },
  { name: 'Portsmouth', type: 'City', slug: 'portsmouth', url: '/portsmouth-golf-carts' },
  { name: 'Suffolk', type: 'City', slug: 'suffolk', url: '/suffolk-golf-carts' },
  { name: 'Hampton', type: 'City', slug: 'hampton', url: '/hampton-golf-carts' },
  { name: 'Newport News', type: 'City', slug: 'newport-news', url: '/newport-news-golf-carts' },
  { name: 'Hampton Roads', type: 'City', slug: 'hampton-roads', url: '/hampton-roads-golf-carts' },
];

// Chesapeake city coordinates (central location)
export const CHESAPEAKE_COORDINATES = {
  latitude: 36.7682,
  longitude: -76.2875
};

// Chesapeake city basic information
export const CHESAPEAKE_INFO = {
  name: 'City of Chesapeake',
  state: 'Virginia',
  totalMunicipalities: 15,
  countySeat: 'Chesapeake',
  population: 249422, // 2020 census
  area: '353 square miles',
  founded: 1963,
  website: 'cityofchesapeake.net'
};
