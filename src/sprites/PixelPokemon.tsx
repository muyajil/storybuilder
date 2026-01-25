/**
 * PIXEL POKEMON - Gameboy Style
 * Einfache Pixel-Pokemon
 */

interface PokemonProps {
  size?: number;
}

// PIKACHU - The Electric Mouse!
export function PixelPikachu({ size = 32 }: PokemonProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      {/* Ears */}
      <rect x="2" y="0" width="2" height="4" fill="#ffd700" />
      <rect x="1" y="1" width="1" height="2" fill="#ffd700" />
      <rect x="2" y="0" width="1" height="1" fill="#222" />
      <rect x="12" y="0" width="2" height="4" fill="#ffd700" />
      <rect x="14" y="1" width="1" height="2" fill="#ffd700" />
      <rect x="13" y="0" width="1" height="1" fill="#222" />
      {/* Head */}
      <rect x="3" y="3" width="10" height="6" fill="#ffd700" />
      <rect x="2" y="4" width="1" height="4" fill="#ffd700" />
      <rect x="13" y="4" width="1" height="4" fill="#ffd700" />
      {/* Cheeks */}
      <rect x="2" y="6" width="2" height="2" fill="#ff4444" />
      <rect x="12" y="6" width="2" height="2" fill="#ff4444" />
      {/* Eyes */}
      <rect x="5" y="5" width="2" height="2" fill="#222" />
      <rect x="9" y="5" width="2" height="2" fill="#222" />
      <rect x="5" y="5" width="1" height="1" fill="#fff" />
      <rect x="9" y="5" width="1" height="1" fill="#fff" />
      {/* Nose */}
      <rect x="7" y="7" width="2" height="1" fill="#222" />
      {/* Body */}
      <rect x="4" y="9" width="8" height="5" fill="#ffd700" />
      <rect x="3" y="10" width="1" height="3" fill="#ffd700" />
      <rect x="12" y="10" width="1" height="3" fill="#ffd700" />
      {/* Tail (lightning bolt shape) */}
      <rect x="13" y="9" width="2" height="1" fill="#b8860b" />
      <rect x="14" y="10" width="2" height="1" fill="#b8860b" />
      <rect x="13" y="11" width="2" height="1" fill="#ffd700" />
      <rect x="12" y="12" width="2" height="1" fill="#ffd700" />
      {/* Feet */}
      <rect x="5" y="14" width="2" height="2" fill="#b8860b" />
      <rect x="9" y="14" width="2" height="2" fill="#b8860b" />
    </svg>
  );
}

// A simple bug Pokemon
export function PixelBug({ size = 32 }: PokemonProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      <rect x="4" y="4" width="8" height="8" fill="#40a040" />
      <rect x="3" y="6" width="2" height="4" fill="#40a040" />
      <rect x="11" y="6" width="2" height="4" fill="#40a040" />
      {/* Eyes */}
      <rect x="5" y="6" width="2" height="2" fill="white" />
      <rect x="9" y="6" width="2" height="2" fill="white" />
      <rect x="6" y="7" width="1" height="1" fill="black" />
      <rect x="10" y="7" width="1" height="1" fill="black" />
      {/* Antenna */}
      <rect x="5" y="2" width="1" height="2" fill="#40a040" />
      <rect x="10" y="2" width="1" height="2" fill="#40a040" />
      {/* Legs */}
      <rect x="5" y="12" width="2" height="2" fill="#306030" />
      <rect x="9" y="12" width="2" height="2" fill="#306030" />
    </svg>
  );
}

// A bird Pokemon
export function PixelBird({ size = 32 }: PokemonProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      {/* Body */}
      <rect x="5" y="6" width="6" height="6" fill="#c09060" />
      {/* Head */}
      <rect x="6" y="3" width="4" height="4" fill="#c09060" />
      {/* Beak */}
      <rect x="10" y="5" width="3" height="2" fill="#ffa000" />
      {/* Eye */}
      <rect x="8" y="4" width="1" height="1" fill="black" />
      {/* Wing */}
      <rect x="3" y="7" width="3" height="4" fill="#a07040" />
      {/* Tail */}
      <rect x="4" y="11" width="2" height="3" fill="#a07040" />
      {/* Legs */}
      <rect x="7" y="12" width="1" height="2" fill="#ffa000" />
      <rect x="9" y="12" width="1" height="2" fill="#ffa000" />
    </svg>
  );
}

// A rat Pokemon
export function PixelRat({ size = 32 }: PokemonProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      {/* Body */}
      <rect x="4" y="7" width="8" height="5" fill="#a080c0" />
      {/* Head */}
      <rect x="8" y="4" width="5" height="5" fill="#a080c0" />
      {/* Ears */}
      <rect x="9" y="2" width="2" height="2" fill="#a080c0" />
      <rect x="12" y="3" width="2" height="2" fill="#a080c0" />
      {/* Eye */}
      <rect x="11" y="5" width="1" height="1" fill="black" />
      {/* Nose */}
      <rect x="13" y="7" width="1" height="1" fill="#ff8080" />
      {/* Tail */}
      <rect x="2" y="9" width="3" height="1" fill="#806090" />
      <rect x="1" y="10" width="2" height="1" fill="#806090" />
      {/* Feet */}
      <rect x="5" y="12" width="2" height="2" fill="#806090" />
      <rect x="9" y="12" width="2" height="2" fill="#806090" />
    </svg>
  );
}

// A fish Pokemon
export function PixelFish({ size = 32 }: PokemonProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      {/* Body */}
      <rect x="4" y="5" width="8" height="6" fill="#ff8040" />
      <rect x="3" y="6" width="1" height="4" fill="#ff8040" />
      {/* Tail */}
      <rect x="1" y="4" width="2" height="3" fill="#ff6020" />
      <rect x="1" y="9" width="2" height="3" fill="#ff6020" />
      {/* Fins */}
      <rect x="7" y="3" width="3" height="2" fill="#ff6020" />
      <rect x="7" y="11" width="3" height="2" fill="#ff6020" />
      {/* Eye */}
      <rect x="10" y="6" width="2" height="2" fill="white" />
      <rect x="11" y="7" width="1" height="1" fill="black" />
      {/* Mouth */}
      <rect x="12" y="8" width="2" height="1" fill="#ff6020" />
    </svg>
  );
}

// A jellyfish Pokemon
export function PixelJelly({ size = 32 }: PokemonProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      {/* Head */}
      <rect x="3" y="2" width="10" height="6" fill="#8080ff" />
      <rect x="5" y="1" width="6" height="1" fill="#8080ff" />
      {/* Eyes */}
      <rect x="5" y="4" width="2" height="2" fill="white" />
      <rect x="9" y="4" width="2" height="2" fill="white" />
      <rect x="6" y="5" width="1" height="1" fill="black" />
      <rect x="10" y="5" width="1" height="1" fill="black" />
      {/* Tentacles */}
      <rect x="4" y="8" width="1" height="6" fill="#6060d0" />
      <rect x="6" y="8" width="1" height="5" fill="#6060d0" />
      <rect x="8" y="8" width="1" height="7" fill="#6060d0" />
      <rect x="10" y="8" width="1" height="5" fill="#6060d0" />
      <rect x="12" y="8" width="1" height="6" fill="#6060d0" />
    </svg>
  );
}

// A crab Pokemon
export function PixelCrab({ size = 32 }: PokemonProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
      {/* Body */}
      <rect x="4" y="6" width="8" height="6" fill="#ff4040" />
      {/* Claws */}
      <rect x="1" y="4" width="3" height="4" fill="#ff6060" />
      <rect x="0" y="5" width="1" height="2" fill="#ff6060" />
      <rect x="12" y="4" width="3" height="4" fill="#ff6060" />
      <rect x="15" y="5" width="1" height="2" fill="#ff6060" />
      {/* Eyes */}
      <rect x="6" y="4" width="1" height="2" fill="black" />
      <rect x="9" y="4" width="1" height="2" fill="black" />
      <rect x="6" y="3" width="1" height="1" fill="#ff4040" />
      <rect x="9" y="3" width="1" height="1" fill="#ff4040" />
      {/* Legs */}
      <rect x="5" y="12" width="1" height="2" fill="#c03030" />
      <rect x="7" y="12" width="1" height="2" fill="#c03030" />
      <rect x="9" y="12" width="1" height="2" fill="#c03030" />
      <rect x="11" y="12" width="1" height="2" fill="#c03030" />
    </svg>
  );
}
