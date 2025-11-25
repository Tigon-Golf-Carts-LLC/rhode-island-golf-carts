// Background image utility for Chesapeake Golf Carts
// Uses the 8 professional images featuring Chesapeake Golf Carts in Virginia

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

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export function getRandomBackgroundImage(seed: string): string {
  const index = simpleHash(seed) % BACKGROUND_IMAGES.length;
  return BACKGROUND_IMAGES[index];
}

export function getHeroBackgroundStyle(seed: string): React.CSSProperties {
  const image = getRandomBackgroundImage(seed);
  return {
    backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.8), rgba(14, 46, 85, 0.6)), url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
}

export function getLightBackgroundStyle(seed: string): React.CSSProperties {
  const image = getRandomBackgroundImage(seed);
  return {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
}

export function getCTABackgroundStyle(seed: string): React.CSSProperties {
  const image = getRandomBackgroundImage(seed);
  return {
    backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.9), rgba(14, 46, 85, 0.8)), url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
}
