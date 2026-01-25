/**
 * PIXEL TILES - Gameboy Style
 * Alle Tile-Grafiken im Retro-Look
 */

interface TileProps {
  size?: number;
}

// Gameboy color palette
const GB = {
  darkest: '#0f380f',
  dark: '#306230',
  light: '#8bac0f',
  lightest: '#9bbc0f',
};

export function PixelGrass({ size = 32 }: TileProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      <rect width="16" height="16" fill={GB.light} />
      <rect x="2" y="12" width="2" height="2" fill={GB.dark} />
      <rect x="10" y="8" width="2" height="2" fill={GB.dark} />
      <rect x="6" y="4" width="1" height="1" fill={GB.dark} />
      <rect x="14" y="14" width="1" height="1" fill={GB.dark} />
    </svg>
  );
}

export function PixelTallGrass({ size = 32 }: TileProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      <rect width="16" height="16" fill={GB.light} />
      {/* Grass blades */}
      <rect x="2" y="4" width="2" height="12" fill={GB.dark} />
      <rect x="1" y="2" width="2" height="2" fill={GB.dark} />
      <rect x="6" y="6" width="2" height="10" fill={GB.dark} />
      <rect x="5" y="4" width="2" height="2" fill={GB.dark} />
      <rect x="10" y="5" width="2" height="11" fill={GB.dark} />
      <rect x="9" y="3" width="2" height="2" fill={GB.dark} />
      <rect x="13" y="7" width="2" height="9" fill={GB.dark} />
      <rect x="12" y="5" width="2" height="2" fill={GB.dark} />
    </svg>
  );
}

export function PixelTree({ size = 32 }: TileProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      <rect width="16" height="16" fill={GB.light} />
      {/* Trunk */}
      <rect x="6" y="10" width="4" height="6" fill={GB.darkest} />
      {/* Leaves */}
      <rect x="4" y="2" width="8" height="8" fill={GB.dark} />
      <rect x="2" y="4" width="2" height="4" fill={GB.dark} />
      <rect x="12" y="4" width="2" height="4" fill={GB.dark} />
      {/* Highlights */}
      <rect x="5" y="3" width="2" height="2" fill={GB.light} />
    </svg>
  );
}

export function PixelWater({ size = 32 }: TileProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      <rect width="16" height="16" fill="#0f5090" />
      {/* Waves */}
      <rect x="0" y="4" width="4" height="2" fill="#2070b0" />
      <rect x="8" y="4" width="4" height="2" fill="#2070b0" />
      <rect x="4" y="10" width="4" height="2" fill="#2070b0" />
      <rect x="12" y="10" width="4" height="2" fill="#2070b0" />
      {/* Highlights */}
      <rect x="2" y="2" width="2" height="1" fill="#4090d0" />
      <rect x="10" y="8" width="2" height="1" fill="#4090d0" />
    </svg>
  );
}

export function PixelPath({ size = 32 }: TileProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      <rect width="16" height="16" fill="#c0a060" />
      {/* Texture */}
      <rect x="2" y="2" width="2" height="2" fill="#a08040" />
      <rect x="10" y="6" width="2" height="2" fill="#a08040" />
      <rect x="4" y="12" width="2" height="2" fill="#a08040" />
      <rect x="12" y="10" width="2" height="2" fill="#a08040" />
    </svg>
  );
}

export function PixelHouse({ size = 32 }: TileProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      <rect width="16" height="16" fill={GB.light} />
      {/* Roof */}
      <polygon points="8,1 1,7 15,7" fill="#a04040" />
      <rect x="2" y="7" width="12" height="1" fill="#802020" />
      {/* Walls */}
      <rect x="2" y="8" width="12" height="8" fill="#e0d0b0" />
      {/* Door */}
      <rect x="6" y="10" width="4" height="6" fill="#604020" />
      <rect x="9" y="12" width="1" height="1" fill="#ffd700" />
      {/* Window */}
      <rect x="11" y="10" width="2" height="2" fill="#4090d0" />
    </svg>
  );
}

// Water world tiles
export function PixelDeepWater({ size = 32 }: TileProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      <rect width="16" height="16" fill="#0a3060" />
      <rect x="2" y="4" width="3" height="1" fill="#0a4080" />
      <rect x="10" y="8" width="3" height="1" fill="#0a4080" />
      <rect x="5" y="12" width="3" height="1" fill="#0a4080" />
    </svg>
  );
}

export function PixelSeaweed({ size = 32 }: TileProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      <rect width="16" height="16" fill="#0a3060" />
      {/* Seaweed */}
      <rect x="3" y="6" width="2" height="10" fill="#206030" />
      <rect x="2" y="4" width="2" height="2" fill="#206030" />
      <rect x="9" y="4" width="2" height="12" fill="#206030" />
      <rect x="10" y="2" width="2" height="2" fill="#206030" />
      <rect x="13" y="8" width="2" height="8" fill="#308040" />
    </svg>
  );
}

export function PixelCoral({ size = 32 }: TileProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      <rect width="16" height="16" fill="#0a3060" />
      {/* Coral */}
      <rect x="4" y="8" width="8" height="8" fill="#ff6060" />
      <rect x="6" y="6" width="4" height="2" fill="#ff6060" />
      <rect x="2" y="10" width="2" height="4" fill="#ff8080" />
      <rect x="12" y="10" width="2" height="4" fill="#ff8080" />
      <rect x="7" y="4" width="2" height="2" fill="#ff8080" />
    </svg>
  );
}

export function PixelSand({ size = 32 }: TileProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      <rect width="16" height="16" fill="#d0c090" />
      <rect x="2" y="4" width="2" height="2" fill="#c0b080" />
      <rect x="10" y="10" width="2" height="2" fill="#c0b080" />
      <rect x="6" y="14" width="1" height="1" fill="#b0a070" />
    </svg>
  );
}
