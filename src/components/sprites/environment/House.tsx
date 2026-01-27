/**
 * House Sprite Component
 * Enhanced with architectural details and textures
 */

import type { ElementProps } from '../types';

export function House({ x = 0, y = 0, size = 80, color = '#DEB887' }: ElementProps) {
  // Create color variations
  const wallDark = '#C4A06A';
  const wallLight = '#F5DEB3';
  const roofRed = '#8B0000';
  const roofDark = '#5C0000';
  const roofLight = '#A52A2A';
  const doorBrown = '#8B4513';
  const doorDark = '#5D3A1A';
  const doorLight = '#A0522D';
  const windowBlue = '#87CEEB';
  const windowDark = '#5BA3C7';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Wall gradient */}
        <linearGradient id="houseWallGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={wallLight} />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor={wallDark} />
          <stop offset="100%" stopColor={wallDark} />
        </linearGradient>

        {/* Wall side shadow */}
        <linearGradient id="houseWallShadow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.1)" />
          <stop offset="20%" stopColor="transparent" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.05)" />
        </linearGradient>

        {/* Roof gradient */}
        <linearGradient id="houseRoofGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={roofLight} />
          <stop offset="30%" stopColor={roofRed} />
          <stop offset="70%" stopColor={roofDark} />
          <stop offset="100%" stopColor={roofDark} />
        </linearGradient>

        {/* Roof highlight */}
        <linearGradient id="houseRoofHighlight" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="40%" stopColor={roofLight} stopOpacity="0.3" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>

        {/* Door gradient */}
        <linearGradient id="houseDoorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={doorDark} />
          <stop offset="30%" stopColor={doorBrown} />
          <stop offset="70%" stopColor={doorLight} />
          <stop offset="100%" stopColor={doorDark} />
        </linearGradient>

        {/* Window gradient */}
        <linearGradient id="houseWindowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B0E0FF" />
          <stop offset="30%" stopColor={windowBlue} />
          <stop offset="100%" stopColor={windowDark} />
        </linearGradient>

        {/* Window reflection */}
        <linearGradient id="houseWindowReflection" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="50%" stopColor="white" stopOpacity="0.1" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>

        {/* Drop shadow filter */}
        <filter id="houseShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#000" floodOpacity="0.25" />
        </filter>

        {/* Brick texture pattern */}
        <pattern id="houseBrickPattern" x="0" y="0" width="12" height="6" patternUnits="userSpaceOnUse">
          <rect width="12" height="6" fill={color} />
          <rect x="0" y="0" width="5.5" height="2.5" fill={wallLight} opacity="0.1" rx="0.3" />
          <rect x="6" y="0" width="5.5" height="2.5" fill={wallDark} opacity="0.1" rx="0.3" />
          <rect x="3" y="3" width="5.5" height="2.5" fill={wallLight} opacity="0.1" rx="0.3" />
          <rect x="9" y="3" width="2.5" height="2.5" fill={wallDark} opacity="0.1" rx="0.3" />
        </pattern>

        {/* Roof tile pattern */}
        <pattern id="houseRoofTiles" x="0" y="0" width="8" height="4" patternUnits="userSpaceOnUse">
          <rect width="8" height="4" fill={roofRed} />
          <path d="M0 4 Q4 2 8 4" fill="none" stroke={roofDark} strokeWidth="0.5" />
          <path d="M4 0 L4 4" stroke={roofDark} strokeWidth="0.3" opacity="0.5" />
        </pattern>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="42" cy="79" rx="35" ry="4" fill="rgba(0,0,0,0.15)" />

      {/* Roof shadow on ground */}
      <polygon points="40,5 0,38 12,38 12,35 68,35 68,38 80,38" fill="rgba(0,0,0,0.1)" transform="translate(2, 42)" />

      {/* Main wall */}
      <rect x="10" y="35" width="60" height="45" fill="url(#houseWallGradient)" filter="url(#houseShadow)" />

      {/* Brick texture overlay */}
      <rect x="10" y="35" width="60" height="45" fill="url(#houseBrickPattern)" opacity="0.3" />

      {/* Wall shadow overlay */}
      <rect x="10" y="35" width="60" height="45" fill="url(#houseWallShadow)" />

      {/* Foundation */}
      <rect x="8" y="76" width="64" height="4" fill="#696969" rx="1" />
      <rect x="8" y="76" width="64" height="1.5" fill="#888" opacity="0.5" rx="1" />

      {/* Roof shadow */}
      <polygon points="40,7 3,37 77,37" fill="rgba(0,0,0,0.2)" />

      {/* Main roof */}
      <polygon points="40,5 5,35 75,35" fill="url(#houseRoofGradient)" filter="url(#houseShadow)" />

      {/* Roof tiles overlay */}
      <polygon points="40,5 5,35 75,35" fill="url(#houseRoofTiles)" opacity="0.4" />

      {/* Roof highlight */}
      <polygon points="40,5 5,35 40,35" fill="url(#houseRoofHighlight)" />

      {/* Roof edge trim */}
      <line x1="5" y1="35" x2="75" y2="35" stroke={roofDark} strokeWidth="2" />
      <line x1="5" y1="35" x2="40" y2="5" stroke={roofLight} strokeWidth="1" opacity="0.5" />

      {/* Chimney */}
      <rect x="55" y="12" width="10" height="20" fill="#8B4513" />
      <rect x="55" y="12" width="10" height="20" fill="url(#houseBrickPattern)" opacity="0.5" />
      <rect x="54" y="10" width="12" height="4" fill="#5D3A1A" rx="1" />
      <rect x="54" y="10" width="12" height="1.5" fill="#8B4513" opacity="0.6" rx="1" />
      {/* Chimney smoke suggestion */}
      <ellipse cx="60" cy="8" rx="3" ry="2" fill="#ccc" opacity="0.3" />

      {/* Door frame */}
      <rect x="30" y="48" width="20" height="32" fill={doorDark} rx="1" />

      {/* Door */}
      <rect x="32" y="50" width="16" height="30" fill="url(#houseDoorGradient)" rx="1" />

      {/* Door wood grain lines */}
      <g stroke={doorDark} strokeWidth="0.3" opacity="0.3">
        <line x1="35" y1="50" x2="35" y2="80" />
        <line x1="40" y1="50" x2="40" y2="80" />
        <line x1="45" y1="50" x2="45" y2="80" />
      </g>

      {/* Door panels */}
      <rect x="34" y="52" width="5" height="10" fill={doorDark} opacity="0.2" rx="0.5" />
      <rect x="41" y="52" width="5" height="10" fill={doorDark} opacity="0.2" rx="0.5" />
      <rect x="34" y="65" width="5" height="12" fill={doorDark} opacity="0.2" rx="0.5" />
      <rect x="41" y="65" width="5" height="12" fill={doorDark} opacity="0.2" rx="0.5" />

      {/* Door knob */}
      <circle cx="44" cy="66" r="2.5" fill="#FFD700" />
      <circle cx="43.5" cy="65.5" r="1" fill="#FFEC8B" opacity="0.6" />
      <circle cx="44" cy="66" r="1.5" fill="#B8860B" opacity="0.3" />

      {/* Door step */}
      <rect x="28" y="78" width="24" height="3" fill="#696969" rx="0.5" />

      {/* Left window */}
      <g>
        <rect x="14" y="43" width="14" height="14" fill="#555" rx="1" />
        <rect x="16" y="45" width="10" height="10" fill="url(#houseWindowGradient)" rx="1" />
        <rect x="16" y="45" width="10" height="10" fill="url(#houseWindowReflection)" rx="1" />
        {/* Window cross frame */}
        <line x1="21" y1="45" x2="21" y2="55" stroke="white" strokeWidth="1.5" />
        <line x1="16" y1="50" x2="26" y2="50" stroke="white" strokeWidth="1.5" />
        {/* Window sill */}
        <rect x="14" y="57" width="14" height="2" fill={wallDark} />
      </g>

      {/* Right window */}
      <g>
        <rect x="52" y="43" width="14" height="14" fill="#555" rx="1" />
        <rect x="54" y="45" width="10" height="10" fill="url(#houseWindowGradient)" rx="1" />
        <rect x="54" y="45" width="10" height="10" fill="url(#houseWindowReflection)" rx="1" />
        {/* Window cross frame */}
        <line x1="59" y1="45" x2="59" y2="55" stroke="white" strokeWidth="1.5" />
        <line x1="54" y1="50" x2="64" y2="50" stroke="white" strokeWidth="1.5" />
        {/* Window sill */}
        <rect x="52" y="57" width="14" height="2" fill={wallDark} />
      </g>

      {/* Window box flowers (left) */}
      <rect x="15" y="58" width="12" height="3" fill="#5D3A1A" rx="0.5" />
      <circle cx="18" cy="57" r="2" fill="#FF69B4" />
      <circle cx="21" cy="56" r="2" fill="#FF69B4" />
      <circle cx="24" cy="57" r="2" fill="#FF69B4" />
      <circle cx="19.5" cy="56" r="1" fill="#FFD700" />
      <circle cx="22.5" cy="55.5" r="1" fill="#FFD700" />

      {/* Window box flowers (right) */}
      <rect x="53" y="58" width="12" height="3" fill="#5D3A1A" rx="0.5" />
      <circle cx="56" cy="57" r="2" fill="#9370DB" />
      <circle cx="59" cy="56" r="2" fill="#9370DB" />
      <circle cx="62" cy="57" r="2" fill="#9370DB" />
      <circle cx="57.5" cy="56" r="1" fill="#FFD700" />
      <circle cx="60.5" cy="55.5" r="1" fill="#FFD700" />

      {/* Attic window */}
      <circle cx="40" cy="22" r="5" fill="#555" />
      <circle cx="40" cy="22" r="4" fill="url(#houseWindowGradient)" />
      <circle cx="40" cy="22" r="4" fill="url(#houseWindowReflection)" />
      <line x1="40" y1="18" x2="40" y2="26" stroke="white" strokeWidth="1" />
      <line x1="36" y1="22" x2="44" y2="22" stroke="white" strokeWidth="1" />
    </svg>
  );
}
