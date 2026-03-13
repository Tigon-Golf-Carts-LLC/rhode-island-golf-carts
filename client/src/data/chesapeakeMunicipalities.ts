// Re-export everything from rhodeIslandMunicipalities for backward compatibility
export type { Municipality } from './rhodeIslandMunicipalities';
export { RHODE_ISLAND_MUNICIPALITIES, RHODE_ISLAND_MUNICIPALITIES as CHESAPEAKE_MUNICIPALITIES } from './rhodeIslandMunicipalities';

// Rhode Island coordinates (central location)
export const CHESAPEAKE_COORDINATES = {
  latitude: 41.5801,
  longitude: -71.4774
};

// Rhode Island basic information
export const CHESAPEAKE_INFO = {
  name: 'Rhode Island',
  state: 'Rhode Island',
  totalLocations: 39,
  countySeat: 'Providence',
  population: 1097379,
  area: '1,214 square miles',
  founded: 1790,
  website: 'ri.gov'
};

// Legacy helper functions - now filter by RI data
export const getChesapeakeNeighborhoods = () => {
  const { RHODE_ISLAND_MUNICIPALITIES } = require('./rhodeIslandMunicipalities');
  return RHODE_ISLAND_MUNICIPALITIES.filter((m: any) => m.county === 'Providence');
};

export const getHamptonRoadsCities = () => {
  const { RHODE_ISLAND_MUNICIPALITIES } = require('./rhodeIslandMunicipalities');
  return RHODE_ISLAND_MUNICIPALITIES.filter((m: any) => m.type === 'City');
};

export const getNorthCarolinaTowns = () => {
  const { RHODE_ISLAND_MUNICIPALITIES } = require('./rhodeIslandMunicipalities');
  return RHODE_ISLAND_MUNICIPALITIES.filter((m: any) => m.county === 'Washington');
};
