export interface Municipality {
  name: string;
  type: 'City' | 'Borough' | 'Township';
  slug: string;
  url: string;
}

// Pike County municipalities for golf cart business
export const PIKE_COUNTY_MUNICIPALITIES: Municipality[] = [
  // Boroughs
  { name: 'Milford', type: 'Borough', slug: 'milford', url: '/milford-golf-carts' },
  { name: 'Hawley', type: 'Borough', slug: 'hawley', url: '/hawley-golf-carts' },
  { name: 'Matamoras', type: 'Borough', slug: 'matamoras', url: '/matamoras-golf-carts' },

  // Townships
  { name: 'Blooming Grove', type: 'Township', slug: 'blooming-grove-township', url: '/blooming-grove-township-golf-carts' },
  { name: 'Delaware', type: 'Township', slug: 'delaware-township', url: '/delaware-township-golf-carts' },
  { name: 'Dingman', type: 'Township', slug: 'dingman-township', url: '/dingman-township-golf-carts' },
  { name: 'Greene', type: 'Township', slug: 'greene-township', url: '/greene-township-golf-carts' },
  { name: 'Lackawaxen', type: 'Township', slug: 'lackawaxen-township', url: '/lackawaxen-township-golf-carts' },
  { name: 'Lehman', type: 'Township', slug: 'lehman-township', url: '/lehman-township-golf-carts' },
  { name: 'Milford', type: 'Township', slug: 'milford-township', url: '/milford-township-golf-carts' },
  { name: 'Palmyra', type: 'Township', slug: 'palmyra-township', url: '/palmyra-township-golf-carts' },
  { name: 'Porter', type: 'Township', slug: 'porter-township', url: '/porter-township-golf-carts' },
  { name: 'Shohola', type: 'Township', slug: 'shohola-township', url: '/shohola-township-golf-carts' },
  { name: 'Westfall', type: 'Township', slug: 'westfall-township', url: '/westfall-township-golf-carts' },
  { name: 'Middle Smithfield', type: 'Township', slug: 'middle-smithfield-township', url: '/middle-smithfield-township-golf-carts' },
];

// Pike County coordinates (center of county near Milford)
export const PIKE_COUNTY_COORDINATES = {
  latitude: 41.3223,
  longitude: -74.8021
};

// Pike County basic information
export const PIKE_COUNTY_INFO = {
  name: 'Pike County',
  state: 'Pennsylvania',
  totalMunicipalities: 15, // 3 boroughs + 12 townships
  countySeat: 'Milford',
  population: 58535, // 2020 census
  area: '547 square miles',
  founded: 1814,
  website: 'pikepa.org'
};