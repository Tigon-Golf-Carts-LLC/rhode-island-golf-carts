// Background image utility for Rhode Island Golf Carts
// Uses the 10 professional showroom images featuring Rhode Island Golf Carts in Virginia

const BACKGROUND_IMAGES = [
  '/attached_assets/Rhode Island%20Golf%20Carts%20-Rhode Island%20Virginia%20-%20LSV-NEV-MSV-PTV-UTV-%20STREET%20LEGAL_1764175757942.jpeg',
  '/attached_assets/Rhode Island%20Golf%20Carts%20-Rhode Island%20Virginia%20-%20LSV-NEV-MSV-PTV-UTV-%20STREET%20LEGAL%201_1764175757942.jpeg',
  '/attached_assets/Rhode Island%20Golf%20Carts%20-Rhode Island%20Virginia%20-%20LSV-NEV-MSV-PTV-UTV-%20STREET%20LEGAL%202_1764175757942.jpeg',
  '/attached_assets/Rhode Island%20Golf%20Carts%20-Rhode Island%20Virginia%20-%20LSV-NEV-MSV-PTV-UTV-%20STREET%20LEGAL%203_1764175757943.jpeg',
  '/attached_assets/Rhode Island%20Golf%20Carts%20-Rhode Island%20Virginia%20-%20LSV-NEV-MSV-PTV-UTV-%20STREET%20LEGAL%204_1764175757943.jpeg',
  '/attached_assets/Rhode Island%20Golf%20Carts%20-Rhode Island%20Virginia%20-%20LSV-NEV-MSV-PTV-UTV-%20STREET%20LEGAL%205_1764175757943.jpeg',
  '/attached_assets/Rhode Island%20Golf%20Carts%20-Rhode Island%20Virginia%20-%20LSV-NEV-MSV-PTV-UTV-%20STREET%20LEGAL%206_1764175757943.jpeg',
  '/attached_assets/Rhode Island%20Golf%20Carts%20-Rhode Island%20Virginia%20-%20LSV-NEV-MSV-PTV-UTV-%20STREET%20LEGAL%207_1764175757944.jpeg',
  '/attached_assets/Rhode Island%20Golf%20Carts%20-Rhode Island%20Virginia%20-%20LSV-NEV-MSV-PTV-UTV-%20STREET%20LEGAL%208_1764175757944.jpeg',
  '/attached_assets/Rhode Island%20Golf%20Carts%20-Rhode Island%20Virginia%20-%20LSV-NEV-MSV-PTV-UTV-%20STREET%20LEGAL%209_1764175757944.jpeg'
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
    backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.75), rgba(14, 46, 85, 0.6)), url('${image}')`,
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
