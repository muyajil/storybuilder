/**
 * Flower Sprite Component
 * Enhanced with natural petal gradients and organic textures
 */

import type { ElementProps } from '../types';

export function Flower({ x = 0, y = 0, size = 32, color = '#FF69B4' }: ElementProps) {
  // Create color variations for petals
  const darkPetal = '#C71585';
  const lightPetal = '#FFB6C1';
  const stemGreen = '#228B22';
  const stemDark = '#1a6b1a';
  const stemLight = '#32CD32';
  const centerGold = '#FFD700';
  const centerDark = '#DAA520';
  const centerLight = '#FFEC8B';

  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 32 48"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Petal gradient */}
        <radialGradient id="flowerPetalGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor={lightPetal} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={darkPetal} />
        </radialGradient>

        {/* Petal highlight */}
        <radialGradient id="flowerPetalHighlight" cx="40%" cy="20%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>

        {/* Center gradient */}
        <radialGradient id="flowerCenterGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor={centerLight} />
          <stop offset="50%" stopColor={centerGold} />
          <stop offset="100%" stopColor={centerDark} />
        </radialGradient>

        {/* Stem gradient */}
        <linearGradient id="flowerStemGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={stemDark} />
          <stop offset="30%" stopColor={stemGreen} />
          <stop offset="70%" stopColor={stemLight} />
          <stop offset="100%" stopColor={stemDark} />
        </linearGradient>

        {/* Leaf gradient */}
        <linearGradient id="flowerLeafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={stemLight} />
          <stop offset="50%" stopColor={stemGreen} />
          <stop offset="100%" stopColor={stemDark} />
        </linearGradient>

        {/* Leaf highlight */}
        <linearGradient id="flowerLeafHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor={stemDark} stopOpacity="0.1" />
        </linearGradient>

        {/* Drop shadow filter */}
        <filter id="flowerShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="1" stdDeviation="0.5" floodColor="#000" floodOpacity="0.2" />
        </filter>

        {/* Pollen texture filter */}
        <filter id="flowerPollenTexture" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="turbulence" baseFrequency="0.5" numOctaves="3" result="noise" />
          <feComposite in="SourceGraphic" in2="noise" operator="in" />
        </filter>
      </defs>

      {/* Stem shadow */}
      <rect x="15" y="21" width="4" height="27" fill="rgba(0,0,0,0.15)" rx="1" />

      {/* Main stem */}
      <rect x="14" y="20" width="4" height="28" fill="url(#flowerStemGradient)" rx="1" />

      {/* Stem detail lines */}
      <line x1="15" y1="22" x2="15" y2="46" stroke={stemDark} strokeWidth="0.3" opacity="0.4" />
      <line x1="16.5" y1="21" x2="16.5" y2="47" stroke={stemLight} strokeWidth="0.2" opacity="0.5" />

      {/* Left leaf */}
      <ellipse cx="10" cy="36" rx="8" ry="4" fill="url(#flowerLeafGradient)" transform="rotate(-30 10 36)" filter="url(#flowerShadow)" />
      <ellipse cx="10" cy="36" rx="6" ry="2.5" fill="url(#flowerLeafHighlight)" transform="rotate(-30 10 36)" />
      <path d="M6 38 Q10 36 14 38" stroke={stemDark} strokeWidth="0.5" fill="none" opacity="0.5" transform="rotate(-30 10 36)" />

      {/* Right leaf */}
      <ellipse cx="22" cy="36" rx="8" ry="4" fill="url(#flowerLeafGradient)" transform="rotate(30 22 36)" filter="url(#flowerShadow)" />
      <ellipse cx="22" cy="36" rx="6" ry="2.5" fill="url(#flowerLeafHighlight)" transform="rotate(30 22 36)" />
      <path d="M18 38 Q22 36 26 38" stroke={stemDark} strokeWidth="0.5" fill="none" opacity="0.5" transform="rotate(30 22 36)" />

      {/* Back petals (darker for depth) */}
      <g opacity="0.7">
        <circle cx="12" cy="10" r="5" fill={darkPetal} />
        <circle cx="20" cy="10" r="5" fill={darkPetal} />
      </g>

      {/* Main petals */}
      <g filter="url(#flowerShadow)">
        {/* Top petal */}
        <circle cx="16" cy="8" r="6" fill="url(#flowerPetalGradient)" />
        <circle cx="16" cy="8" r="6" fill="url(#flowerPetalHighlight)" />

        {/* Left petal */}
        <circle cx="8" cy="14" r="6" fill="url(#flowerPetalGradient)" />
        <circle cx="8" cy="14" r="6" fill="url(#flowerPetalHighlight)" />

        {/* Right petal */}
        <circle cx="24" cy="14" r="6" fill="url(#flowerPetalGradient)" />
        <circle cx="24" cy="14" r="6" fill="url(#flowerPetalHighlight)" />

        {/* Bottom left petal */}
        <circle cx="10" cy="22" r="6" fill="url(#flowerPetalGradient)" />
        <circle cx="10" cy="22" r="6" fill="url(#flowerPetalHighlight)" />

        {/* Bottom right petal */}
        <circle cx="22" cy="22" r="6" fill="url(#flowerPetalGradient)" />
        <circle cx="22" cy="22" r="6" fill="url(#flowerPetalHighlight)" />
      </g>

      {/* Petal veins */}
      <g stroke={darkPetal} strokeWidth="0.3" opacity="0.3" fill="none">
        <path d="M16 4 Q16 8 16 12" />
        <path d="M5 12 Q8 14 11 16" />
        <path d="M27 12 Q24 14 21 16" />
        <path d="M7 20 Q10 22 13 24" />
        <path d="M25 20 Q22 22 19 24" />
      </g>

      {/* Center */}
      <circle cx="16" cy="15" r="5.5" fill="url(#flowerCenterGradient)" filter="url(#flowerShadow)" />

      {/* Center texture (pollen dots) */}
      <g fill={centerDark} opacity="0.6">
        <circle cx="14" cy="13" r="0.8" />
        <circle cx="17" cy="12" r="0.6" />
        <circle cx="19" cy="14" r="0.7" />
        <circle cx="15" cy="16" r="0.6" />
        <circle cx="18" cy="17" r="0.7" />
        <circle cx="13" cy="15" r="0.5" />
        <circle cx="16" cy="14" r="0.8" />
      </g>

      {/* Center highlight */}
      <ellipse cx="14.5" cy="13.5" rx="2" ry="1.5" fill="white" opacity="0.3" />

      {/* Tiny dewdrop on petal */}
      <ellipse cx="20" cy="8" rx="1.2" ry="1" fill="white" opacity="0.6" />
      <ellipse cx="19.8" cy="7.8" rx="0.5" ry="0.4" fill="white" opacity="0.8" />
    </svg>
  );
}
