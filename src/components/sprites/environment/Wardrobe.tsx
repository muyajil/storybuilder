/**
 * Wardrobe Sprite Component
 * High quality with wood grain texture, decorative details, and realistic doors
 */

import type { ElementProps } from '../types';

export function Wardrobe({ x = 0, y = 0, size = 80, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size * 0.8}
      height={size}
      viewBox="0 0 64 80"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main body gradient */}
        <linearGradient id="wardrobeBodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B3A0A" />
          <stop offset="15%" stopColor="#7A4010" />
          <stop offset="50%" stopColor={color} />
          <stop offset="85%" stopColor="#7A4010" />
          <stop offset="100%" stopColor="#6B3A0A" />
        </linearGradient>
        {/* Door panel gradient */}
        <linearGradient id="wardrobeDoorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B5A2B" />
          <stop offset="30%" stopColor="#A0522D" />
          <stop offset="70%" stopColor="#9A5020" />
          <stop offset="100%" stopColor="#8B4A20" />
        </linearGradient>
        {/* Door inner panel gradient */}
        <linearGradient id="wardrobePanelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A06030" />
          <stop offset="50%" stopColor="#8B5020" />
          <stop offset="100%" stopColor="#7A4010" />
        </linearGradient>
        {/* Top molding gradient */}
        <linearGradient id="wardrobeMoldingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A06838" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#6B3A0A" />
        </linearGradient>
        {/* Handle gradient */}
        <radialGradient id="wardrobeHandleGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        {/* Wood grain pattern */}
        <pattern id="wardrobeWoodGrain" width="8" height="15" patternUnits="userSpaceOnUse">
          <line x1="2" y1="0" x2="2" y2="15" stroke="#5D3000" strokeWidth="0.4" opacity="0.25" />
          <line x1="5" y1="0" x2="5" y2="15" stroke="#6B3A0A" strokeWidth="0.3" opacity="0.2" />
          <path d="M0 5 Q4 6 8 5" stroke="#5D3000" strokeWidth="0.2" fill="none" opacity="0.15" />
          <path d="M0 10 Q4 9 8 10" stroke="#5D3000" strokeWidth="0.2" fill="none" opacity="0.15" />
        </pattern>
        {/* Door panel pattern */}
        <pattern id="wardrobeDoorPattern" width="6" height="12" patternUnits="userSpaceOnUse">
          <line x1="1.5" y1="0" x2="1.5" y2="12" stroke="#7A4010" strokeWidth="0.3" opacity="0.2" />
          <line x1="4" y1="0" x2="4" y2="12" stroke="#6B3A0A" strokeWidth="0.2" opacity="0.15" />
        </pattern>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="32" cy="79" rx="28" ry="3" fill="#000000" opacity="0.2" />

      {/* Main body / Korpus */}
      <rect x="2" y="5" width="60" height="70" fill="url(#wardrobeBodyGradient)" rx="1" />
      <rect x="2" y="5" width="60" height="70" fill="url(#wardrobeWoodGrain)" />

      {/* Top crown molding */}
      <rect x="0" y="2" width="64" height="5" fill="url(#wardrobeMoldingGradient)" rx="1" />
      <rect x="1" y="0" width="62" height="3" fill="#9A5830" rx="0.5" />
      {/* Molding details */}
      <line x1="2" y1="4" x2="62" y2="4" stroke="#A07040" strokeWidth="0.5" opacity="0.5" />
      <line x1="3" y1="1" x2="61" y2="1" stroke="#B08050" strokeWidth="0.3" opacity="0.4" />

      {/* Left door / Linke Tür */}
      <rect x="4" y="8" width="27" height="64" fill="url(#wardrobeDoorGradient)" rx="1" />
      <rect x="4" y="8" width="27" height="64" fill="url(#wardrobeDoorPattern)" />
      {/* Left door inner panel */}
      <rect x="7" y="12" width="21" height="25" fill="url(#wardrobePanelGradient)" rx="1" />
      <rect x="8" y="13" width="19" height="23" fill="#8B5525" rx="0.5" />
      <rect x="7" y="42" width="21" height="25" fill="url(#wardrobePanelGradient)" rx="1" />
      <rect x="8" y="43" width="19" height="23" fill="#8B5525" rx="0.5" />
      {/* Panel highlights */}
      <rect x="9" y="14" width="8" height="1" fill="#A07040" opacity="0.3" rx="0.5" />
      <rect x="9" y="44" width="8" height="1" fill="#A07040" opacity="0.3" rx="0.5" />

      {/* Right door / Rechte Tür */}
      <rect x="33" y="8" width="27" height="64" fill="url(#wardrobeDoorGradient)" rx="1" />
      <rect x="33" y="8" width="27" height="64" fill="url(#wardrobeDoorPattern)" />
      {/* Right door inner panel */}
      <rect x="36" y="12" width="21" height="25" fill="url(#wardrobePanelGradient)" rx="1" />
      <rect x="37" y="13" width="19" height="23" fill="#8B5525" rx="0.5" />
      <rect x="36" y="42" width="21" height="25" fill="url(#wardrobePanelGradient)" rx="1" />
      <rect x="37" y="43" width="19" height="23" fill="#8B5525" rx="0.5" />
      {/* Panel highlights */}
      <rect x="38" y="14" width="8" height="1" fill="#A07040" opacity="0.3" rx="0.5" />
      <rect x="38" y="44" width="8" height="1" fill="#A07040" opacity="0.3" rx="0.5" />

      {/* Center divider / Mittelleiste */}
      <rect x="30" y="7" width="4" height="66" fill="#7A4010" />
      <line x1="32" y1="7" x2="32" y2="73" stroke="#6B3A0A" strokeWidth="0.5" />

      {/* Door handles / Griffe */}
      <circle cx="28" cy="40" r="3.5" fill="url(#wardrobeHandleGradient)" />
      <circle cx="28" cy="40" r="2" fill="#B8860B" opacity="0.5" />
      <circle cx="27" cy="39" r="1" fill="#FFEE88" opacity="0.6" />

      <circle cx="36" cy="40" r="3.5" fill="url(#wardrobeHandleGradient)" />
      <circle cx="36" cy="40" r="2" fill="#B8860B" opacity="0.5" />
      <circle cx="35" cy="39" r="1" fill="#FFEE88" opacity="0.6" />

      {/* Keyhole */}
      <ellipse cx="32" cy="45" rx="1" ry="1.5" fill="#2a2a2a" />
      <rect x="31.5" y="45" width="1" height="3" fill="#2a2a2a" />

      {/* Feet / Beine */}
      <rect x="4" y="73" width="10" height="6" fill={color} rx="1" />
      <rect x="5" y="74" width="8" height="1" fill="#A06838" opacity="0.4" />
      <rect x="50" y="73" width="10" height="6" fill={color} rx="1" />
      <rect x="51" y="74" width="8" height="1" fill="#A06838" opacity="0.4" />

      {/* Edge shadows */}
      <rect x="2" y="5" width="2" height="70" fill="#5D3000" opacity="0.3" />
      <rect x="60" y="5" width="2" height="70" fill="#A06838" opacity="0.2" />
    </svg>
  );
}
