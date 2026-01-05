export interface Municipality {
  name: string;
  type: 'City' | 'Town';
  slug: string;
  url: string;
  region: 'rhode-island';
  county: string;
  population?: number;
}

// All 39 Rhode Island municipalities served by Rhode Island Golf Carts
export const RHODE_ISLAND_MUNICIPALITIES: Municipality[] = [
  // Providence County
  { name: 'Barrington', type: 'Town', slug: 'barrington', url: '/barrington-golf-carts', region: 'rhode-island', county: 'Bristol' },
  { name: 'Bristol', type: 'Town', slug: 'bristol', url: '/bristol-golf-carts', region: 'rhode-island', county: 'Bristol' },
  { name: 'Burrillville', type: 'Town', slug: 'burrillville', url: '/burrillville-golf-carts', region: 'rhode-island', county: 'Providence' },
  { name: 'Central Falls', type: 'City', slug: 'central-falls', url: '/central-falls-golf-carts', region: 'rhode-island', county: 'Providence' },
  { name: 'Charlestown', type: 'Town', slug: 'charlestown', url: '/charlestown-golf-carts', region: 'rhode-island', county: 'Washington' },
  { name: 'Coventry', type: 'Town', slug: 'coventry', url: '/coventry-golf-carts', region: 'rhode-island', county: 'Kent' },
  { name: 'Cranston', type: 'City', slug: 'cranston', url: '/cranston-golf-carts', region: 'rhode-island', county: 'Providence' },
  { name: 'Cumberland', type: 'Town', slug: 'cumberland', url: '/cumberland-golf-carts', region: 'rhode-island', county: 'Providence' },
  { name: 'East Greenwich', type: 'Town', slug: 'east-greenwich', url: '/east-greenwich-golf-carts', region: 'rhode-island', county: 'Kent' },
  { name: 'East Providence', type: 'City', slug: 'east-providence', url: '/east-providence-golf-carts', region: 'rhode-island', county: 'Providence' },
  { name: 'Exeter', type: 'Town', slug: 'exeter', url: '/exeter-golf-carts', region: 'rhode-island', county: 'Washington' },
  { name: 'Foster', type: 'Town', slug: 'foster', url: '/foster-golf-carts', region: 'rhode-island', county: 'Providence' },
  { name: 'Glocester', type: 'Town', slug: 'glocester', url: '/glocester-golf-carts', region: 'rhode-island', county: 'Providence' },
  { name: 'Hopkinton', type: 'Town', slug: 'hopkinton', url: '/hopkinton-golf-carts', region: 'rhode-island', county: 'Washington' },
  { name: 'Jamestown', type: 'Town', slug: 'jamestown', url: '/jamestown-golf-carts', region: 'rhode-island', county: 'Newport' },
  { name: 'Johnston', type: 'Town', slug: 'johnston', url: '/johnston-golf-carts', region: 'rhode-island', county: 'Providence' },
  { name: 'Lincoln', type: 'Town', slug: 'lincoln', url: '/lincoln-golf-carts', region: 'rhode-island', county: 'Providence' },
  { name: 'Little Compton', type: 'Town', slug: 'little-compton', url: '/little-compton-golf-carts', region: 'rhode-island', county: 'Newport' },
  { name: 'Middletown', type: 'Town', slug: 'middletown', url: '/middletown-golf-carts', region: 'rhode-island', county: 'Newport' },
  { name: 'Narragansett', type: 'Town', slug: 'narragansett', url: '/narragansett-golf-carts', region: 'rhode-island', county: 'Washington' },
  { name: 'Newport', type: 'City', slug: 'newport', url: '/newport-golf-carts', region: 'rhode-island', county: 'Newport' },
  { name: 'New Shoreham', type: 'Town', slug: 'new-shoreham', url: '/new-shoreham-golf-carts', region: 'rhode-island', county: 'Washington' },
  { name: 'North Kingstown', type: 'Town', slug: 'north-kingstown', url: '/north-kingstown-golf-carts', region: 'rhode-island', county: 'Washington' },
  { name: 'North Providence', type: 'Town', slug: 'north-providence', url: '/north-providence-golf-carts', region: 'rhode-island', county: 'Providence' },
  { name: 'North Smithfield', type: 'Town', slug: 'north-smithfield', url: '/north-smithfield-golf-carts', region: 'rhode-island', county: 'Providence' },
  { name: 'Pawtucket', type: 'City', slug: 'pawtucket', url: '/pawtucket-golf-carts', region: 'rhode-island', county: 'Providence' },
  { name: 'Portsmouth', type: 'Town', slug: 'portsmouth', url: '/portsmouth-golf-carts', region: 'rhode-island', county: 'Newport' },
  { name: 'Providence', type: 'City', slug: 'providence', url: '/providence-golf-carts', region: 'rhode-island', county: 'Providence' },
  { name: 'Richmond', type: 'Town', slug: 'richmond', url: '/richmond-golf-carts', region: 'rhode-island', county: 'Washington' },
  { name: 'Scituate', type: 'Town', slug: 'scituate', url: '/scituate-golf-carts', region: 'rhode-island', county: 'Providence' },
  { name: 'Smithfield', type: 'Town', slug: 'smithfield', url: '/smithfield-golf-carts', region: 'rhode-island', county: 'Providence' },
  { name: 'South Kingstown', type: 'Town', slug: 'south-kingstown', url: '/south-kingstown-golf-carts', region: 'rhode-island', county: 'Washington' },
  { name: 'Tiverton', type: 'Town', slug: 'tiverton', url: '/tiverton-golf-carts', region: 'rhode-island', county: 'Newport' },
  { name: 'Warren', type: 'Town', slug: 'warren', url: '/warren-golf-carts', region: 'rhode-island', county: 'Bristol' },
  { name: 'Warwick', type: 'City', slug: 'warwick', url: '/warwick-golf-carts', region: 'rhode-island', county: 'Kent' },
  { name: 'Westerly', type: 'Town', slug: 'westerly', url: '/westerly-golf-carts', region: 'rhode-island', county: 'Washington' },
  { name: 'West Greenwich', type: 'Town', slug: 'west-greenwich', url: '/west-greenwich-golf-carts', region: 'rhode-island', county: 'Kent' },
  { name: 'West Warwick', type: 'Town', slug: 'west-warwick', url: '/west-warwick-golf-carts', region: 'rhode-island', county: 'Kent' },
  { name: 'Woonsocket', type: 'City', slug: 'woonsocket', url: '/woonsocket-golf-carts', region: 'rhode-island', county: 'Providence' },
];

// Helper functions
export const getMunicipalityBySlug = (slug: string): Municipality | undefined => {
  return RHODE_ISLAND_MUNICIPALITIES.find(m => m.slug === slug);
};

export const getMunicipalitiesByCounty = (county: string): Municipality[] => {
  return RHODE_ISLAND_MUNICIPALITIES.filter(m => m.county === county);
};

export const getCities = (): Municipality[] => {
  return RHODE_ISLAND_MUNICIPALITIES.filter(m => m.type === 'City');
};

export const getTowns = (): Municipality[] => {
  return RHODE_ISLAND_MUNICIPALITIES.filter(m => m.type === 'Town');
};

// Export count for reference
export const TOTAL_MUNICIPALITIES = RHODE_ISLAND_MUNICIPALITIES.length; // 39
