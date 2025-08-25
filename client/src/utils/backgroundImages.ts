// Background image utility for Pike County Golf Carts
// Uses the 8 professional showroom images featuring the modern Pike County Golf Carts dealership

const BACKGROUND_IMAGES = [
  '/attached_assets/a-photograph-captures-a-modern-golf-cart_rLoOKN00QDCYiu5YsJ0p9w_Dz9OzmyNQhyGya_DTODF2A_1756144059395.jpeg',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_UxqLO1InQtGjDCklOHe0fA_Dz9OzmyNQhyGya_DTODF2A_1756144059396.jpeg',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_Th3nwXNXQ2CQPoVdYBg6Jg_Dz9OzmyNQhyGya_DTODF2A_1756144059396.jpeg',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_HwaTErKvQGq-sH0qdYI8Pw_Dz9OzmyNQhyGya_DTODF2A_1756144059396.jpeg',
  '/attached_assets/a-photograph-of-a-friendly-young-woman-s_y5lzYwROQWiqEejijrDhqA_4I_G2VlRQP6tVB7Lk85ndw_1756144059397.jpeg',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_sDrTTlooRa-KMxJFm6b9DQ_4I_G2VlRQP6tVB7Lk85ndw_1756144059397.jpeg',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_qTxyHWkHTpqA5-VAcbsH3A_4I_G2VlRQP6tVB7Lk85ndw_1756144059397.jpeg',
  '/attached_assets/a-photograph-of-a-modern-golf-cart-deale_eccoMiKlQSC-Qm1jCegrgw_4I_G2VlRQP6tVB7Lk85ndw_1756144059398.jpeg'
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