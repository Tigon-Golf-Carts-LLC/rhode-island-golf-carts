export interface Municipality {
  name: string;
  type: 'City' | 'Borough' | 'Township';
  slug: string;
  url: string;
}

// Gloucester Virginia area municipalities for golf cart business
export const NEW_LACKAWANNA_COUNTY_MUNICIPALITIES: Municipality[] = [
  // Cities & Main Areas
  { name: 'Gloucester', type: 'City', slug: 'gloucester', url: '/gloucester-golf-carts' },
  { name: 'Gloucester Point', type: 'City', slug: 'gloucester-point', url: '/gloucester-point-golf-carts' },
  { name: 'Gloucester Courthouse', type: 'City', slug: 'gloucester-courthouse', url: '/gloucester-courthouse-golf-carts' },
  { name: 'Yorktown', type: 'City', slug: 'yorktown', url: '/yorktown-golf-carts' },
  { name: 'Hayes', type: 'City', slug: 'hayes', url: '/hayes-golf-carts' },
  { name: 'Seaford', type: 'City', slug: 'seaford', url: '/seaford-golf-carts' },
  { name: 'Ordinary', type: 'City', slug: 'ordinary', url: '/ordinary-golf-carts' },
  { name: 'Ware Neck', type: 'City', slug: 'ware-neck', url: '/ware-neck-golf-carts' },
  { name: 'Wicomico', type: 'City', slug: 'wicomico', url: '/wicomico-golf-carts' },
  { name: 'Achilles', type: 'City', slug: 'achilles', url: '/achilles-golf-carts' },
  { name: 'Mathews', type: 'City', slug: 'mathews', url: '/mathews-golf-carts' },
  { name: 'Williamsburg', type: 'City', slug: 'williamsburg', url: '/williamsburg-golf-carts' },
  { name: 'Poquoson', type: 'City', slug: 'poquoson', url: '/poquoson-golf-carts' },
  { name: 'Hampton', type: 'City', slug: 'hampton', url: '/hampton-golf-carts' },
  { name: 'Newport News', type: 'City', slug: 'newport-news', url: '/newport-news-golf-carts' },
  { name: 'York County', type: 'City', slug: 'york-county', url: '/york-county-golf-carts' },
  { name: 'James City County', type: 'City', slug: 'james-city-county', url: '/james-city-county-golf-carts' },
  { name: 'Toano', type: 'City', slug: 'toano', url: '/toano-golf-carts' },
  { name: 'Norge', type: 'City', slug: 'norge', url: '/norge-golf-carts' },
];

// Gloucester County coordinates (showroom location)
export const NEW_LACKAWANNA_COUNTY_COORDINATES = {
  latitude: 37.4093,
  longitude: -76.5275
};

// Gloucester County basic information
export const NEW_LACKAWANNA_COUNTY_INFO = {
  name: 'Gloucester County',
  state: 'Virginia',
  totalMunicipalities: 19,
  countySeat: 'Gloucester Courthouse',
  population: 38711, // 2020 census
  area: '288 square miles',
  founded: 1651,
  website: 'gloucesterva.info'
};
