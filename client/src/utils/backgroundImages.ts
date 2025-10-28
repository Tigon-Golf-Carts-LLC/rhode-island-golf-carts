// Background image utility for Gloucester Golf Carts
// Uses the 8 professional images featuring Gloucester Golf Carts in Virginia

const BACKGROUND_IMAGES = [
  '/attached_assets/Gloucester Golf Carts - Virginia Golf Carts_1761674623462.jpeg',
  '/attached_assets/Gloucester Golf Carts - Virginia Golf Carts 2_1761674623462.jpeg',
  '/attached_assets/Gloucester Golf Carts - Virginia Golf Carts 3_1761674623463.jpeg',
  '/attached_assets/Gloucester Golf Carts - Virginia Golf Carts 4_1761674623463.jpeg',
  '/attached_assets/Gloucester Golf Carts - Virginia Golf Carts 5_1761674623463.jpeg',
  '/attached_assets/Gloucester Golf Carts - Virginia Golf Carts 6_1761674623463.jpeg',
  '/attached_assets/Gloucester Golf Carts - Virginia Golf Carts 7_1761674623464.jpeg',
  '/attached_assets/Gloucester Golf Carts - Virginia Golf Carts 8_1761674623464.jpeg'
];

// Simple hash function to ensure consistent randomization based on seed
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

/**
 * Gets a consistent random background image based on a seed string
 * This ensures the same page always gets the same image, but different pages get different images
 */
export function getRandomBackgroundImage(seed: string): string {
  const index = simpleHash(seed) % BACKGROUND_IMAGES.length;
  return BACKGROUND_IMAGES[index];
}

/**
 * Gets the background style object for hero sections
 * Includes overlay for text readability
 */
export function getHeroBackgroundStyle(seed: string): React.CSSProperties {
  const image = getRandomBackgroundImage(seed);
  return {
    backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.8), rgba(14, 46, 85, 0.6)), url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
}

/**
 * Gets a lighter background style for vehicle pages and other content sections
 */
export function getLightBackgroundStyle(seed: string): React.CSSProperties {
  const image = getRandomBackgroundImage(seed);
  return {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
}

/**
 * Gets background style for call-to-action sections
 */
export function getCTABackgroundStyle(seed: string): React.CSSProperties {
  const image = getRandomBackgroundImage(seed);
  return {
    backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.9), rgba(14, 46, 85, 0.8)), url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
}