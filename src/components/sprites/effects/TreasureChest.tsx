/**
 * TreasureChest Sprite Component
 * Enhanced with golden shine, wood texture, and glowing treasures
 */

import type { EffectProps } from '../types';

export function TreasureChest({ x = 0, y = 0, size = 48}: EffectProps) {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 48 36"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Wood grain gradient */}
        <linearGradient id="treasureWoodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="30%" stopColor="#8B4513" />
          <stop offset="70%" stopColor="#6B3410" />
          <stop offset="100%" stopColor="#4A2508" />
        </linearGradient>

        {/* Lid wood gradient */}
        <linearGradient id="treasureLidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B8652D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#6B3410" />
        </linearGradient>

        {/* Gold metal gradient */}
        <linearGradient id="treasureGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF9C4" />
          <stop offset="25%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#DAA520" />
          <stop offset="75%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>

        {/* Lock gold gradient */}
        <radialGradient id="treasureLockGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFF9C4" />
          <stop offset="40%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>

        {/* Gold glow */}
        <radialGradient id="treasureGoldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FFD700" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>

        {/* Treasure glow from inside */}
        <radialGradient id="treasureInnerGlow" cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#FFA500" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
        </radialGradient>

        {/* Glow filter */}
        <filter id="treasureGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Shadow filter */}
        <filter id="treasureShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feOffset in="blur" dx="1" dy="1" result="offsetBlur" />
          <feMerge>
            <feMergeNode in="offsetBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Metal shine filter */}
        <filter id="treasureShine" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Shadow */}
      <rect x="4" y="18" width="44" height="20" fill="#1A0A02" opacity="0.3" rx="3" />

      {/* Chest body */}
      <rect x="2" y="16" width="44" height="20" fill="url(#treasureWoodGrad)" rx="2" filter="url(#treasureShadow)" />

      {/* Wood grain lines */}
      <g stroke="#5A2A08" strokeWidth="0.5" opacity="0.3">
        <line x1="5" y1="20" x2="43" y2="20" />
        <line x1="5" y1="26" x2="43" y2="26" />
        <line x1="5" y1="32" x2="43" y2="32" />
      </g>

      {/* Body highlight */}
      <rect x="3" y="17" width="20" height="18" fill="white" opacity="0.1" rx="1" />

      {/* Lid shadow */}
      <path d="M3 17 Q24 3 45 17" fill="#2A1408" opacity="0.3" />

      {/* Chest lid */}
      <path d="M2 16 Q24 2 46 16" fill="url(#treasureLidGrad)" filter="url(#treasureShadow)" />

      {/* Lid highlight */}
      <path d="M6 14 Q24 4 42 14" fill="white" opacity="0.15" />

      {/* Lid edge */}
      <path d="M2 16 Q24 2 46 16" fill="none" stroke="#4A2508" strokeWidth="0.5" />

      {/* Horizontal metal band */}
      <rect x="0" y="14" width="48" height="4" fill="url(#treasureGoldGrad)" filter="url(#treasureShine)" />

      {/* Band rivets */}
      <circle cx="6" cy="16" r="1.5" fill="url(#treasureLockGrad)" />
      <circle cx="42" cy="16" r="1.5" fill="url(#treasureLockGrad)" />

      {/* Rivet highlights */}
      <circle cx="5.5" cy="15.5" r="0.5" fill="white" opacity="0.6" />
      <circle cx="41.5" cy="15.5" r="0.5" fill="white" opacity="0.6" />

      {/* Vertical metal band */}
      <rect x="20" y="4" width="8" height="32" fill="url(#treasureGoldGrad)" filter="url(#treasureShine)" />

      {/* Band decorative lines */}
      <line x1="21" y1="4" x2="21" y2="36" stroke="#DAA520" strokeWidth="0.5" opacity="0.5" />
      <line x1="27" y1="4" x2="27" y2="36" stroke="#8B6914" strokeWidth="0.5" opacity="0.5" />

      {/* Vertical band highlight */}
      <rect x="21" y="4" width="2" height="32" fill="white" opacity="0.2" />

      {/* Lock glow background */}
      <circle cx="24" cy="24" r="6" fill="url(#treasureGoldGlow)" />

      {/* Lock circle */}
      <circle cx="24" cy="24" r="4" fill="url(#treasureLockGrad)" filter="url(#treasureGlow)" />

      {/* Lock circle edge */}
      <circle cx="24" cy="24" r="3.5" fill="none" stroke="#DAA520" strokeWidth="0.5" />

      {/* Lock highlight */}
      <circle cx="23" cy="23" r="1.5" fill="white" opacity="0.5" />

      {/* Keyhole */}
      <rect x="22" y="24" width="4" height="6" fill="url(#treasureLockGrad)" rx="1" />

      {/* Keyhole shadow */}
      <circle cx="24" cy="25.5" r="1" fill="#4A2508" />
      <rect x="23" y="26" width="2" height="3" fill="#4A2508" />

      {/* Corner brackets */}
      <g fill="url(#treasureGoldGrad)" filter="url(#treasureShine)">
        <path d="M2 16 L6 16 L6 20 L2 20 Z" />
        <path d="M42 16 L46 16 L46 20 L42 20 Z" />
        <path d="M2 32 L6 32 L6 36 L2 36 Z" />
        <path d="M42 32 L46 32 L46 36 L42 36 Z" />
      </g>

      {/* Bracket highlights */}
      <rect x="2" y="16" width="1" height="4" fill="white" opacity="0.3" />
      <rect x="42" y="16" width="1" height="4" fill="white" opacity="0.3" />

      {/* Sparkle accents */}
      <g filter="url(#treasureGlow)">
        <polygon points="10,10 10.5,11.5 12,12 10.5,12.5 11,14 10,12.5 9,14 9.5,12.5 8,12 9.5,11.5" fill="#FFD700" opacity="0.8" />
        <polygon points="38,8 38.3,9 39.5,9 38.3,9.5 38.5,10.5 38,10 37.5,10.5 37.7,9.5 36.5,9 37.7,9" fill="#FFF9C4" opacity="0.7" />
        <polygon points="30,28 30.2,28.5 31,28.5 30.2,29 30.4,29.5 30,29 29.6,29.5 29.8,29 29,28.5 29.8,28.5" fill="white" opacity="0.6" />
      </g>
    </svg>
  );
}
