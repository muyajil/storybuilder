/**
 * Chest Sprite Component
 * Enhanced with wood grain, metal bands, and treasure-like details
 */

import type { ElementProps } from '../types';

export function Chest({ x = 0, y = 0, size = 50, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 50 40"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main wood body gradient */}
        <linearGradient id="chestWoodGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5a3515" />
          <stop offset="20%" stopColor={color} />
          <stop offset="50%" stopColor="#9a5a23" />
          <stop offset="80%" stopColor={color} />
          <stop offset="100%" stopColor="#5a3515" />
        </linearGradient>
        {/* Lid wood gradient */}
        <linearGradient id="chestLidGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#7a4518" />
          <stop offset="50%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#C4773a" />
        </linearGradient>
        {/* Gold metal gradient */}
        <linearGradient id="chestGoldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="30%" stopColor="#FFD700" />
          <stop offset="70%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Lock gold gradient */}
        <radialGradient id="chestLockGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        {/* Wood grain pattern */}
        <pattern id="chestWoodPattern" patternUnits="userSpaceOnUse" width="6" height="40">
          <line x1="0" y1="0" x2="0" y2="40" stroke="#4a2510" strokeWidth="0.4" opacity="0.3" />
          <line x1="3" y1="0" x2="3" y2="40" stroke="#4a2510" strokeWidth="0.3" opacity="0.2" />
        </pattern>
        {/* Shine effect for gold */}
        <linearGradient id="chestGoldShine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="50%" stopColor="white" stopOpacity="0" />
          <stop offset="100%" stopColor="white" stopOpacity="0.3" />
        </linearGradient>
        {/* Shadow filter */}
        <filter id="chestShadow">
          <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodOpacity="0.3" />
        </filter>
        {/* Inner glow for treasure hint */}
        <radialGradient id="chestInnerGlow" cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="25" cy="39" rx="24" ry="3" fill="#000" opacity="0.2" />

      <g filter="url(#chestShadow)">
        {/* Chest body */}
        <rect x="2" y="18" width="46" height="20" fill="url(#chestWoodGradient)" rx="2" />
        <rect x="2" y="18" width="46" height="20" fill="url(#chestWoodPattern)" rx="2" />
        {/* Body shadow at bottom */}
        <rect x="2" y="34" width="46" height="4" fill="#000" opacity="0.15" rx="1" />

        {/* Chest lid with curved top */}
        <path d="M2 18 Q25 4 48 18 L48 18 L2 18" fill="url(#chestLidGradient)" />
        {/* Lid planks */}
        <path d="M10 17 Q25 7 40 17" fill="none" stroke="#5a3515" strokeWidth="0.5" opacity="0.3" />
        <path d="M15 16 Q25 9 35 16" fill="none" stroke="#5a3515" strokeWidth="0.5" opacity="0.3" />
        {/* Lid highlight */}
        <path d="M4 17 Q25 6 46 17" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />

        {/* Top gold band */}
        <rect x="0" y="15" width="50" height="5" fill="url(#chestGoldGradient)" rx="1" />
        <rect x="0" y="15" width="50" height="5" fill="url(#chestGoldShine)" rx="1" />
        {/* Rivet details on top band */}
        <circle cx="5" cy="17.5" r="1.2" fill="#B8860B" />
        <circle cx="5" cy="17.5" r="0.6" fill="#FFE55C" opacity="0.5" />
        <circle cx="45" cy="17.5" r="1.2" fill="#B8860B" />
        <circle cx="45" cy="17.5" r="0.6" fill="#FFE55C" opacity="0.5" />

        {/* Middle gold band */}
        <rect x="0" y="27" width="50" height="4" fill="url(#chestGoldGradient)" rx="1" />
        <rect x="0" y="27" width="50" height="4" fill="url(#chestGoldShine)" rx="1" />
        {/* Rivet details on middle band */}
        <circle cx="5" cy="29" r="1" fill="#B8860B" />
        <circle cx="45" cy="29" r="1" fill="#B8860B" />

        {/* Lock plate */}
        <rect x="18" y="20" width="14" height="14" fill="url(#chestLockGradient)" rx="2" />
        {/* Lock plate edge */}
        <rect x="18" y="20" width="14" height="14" fill="none" stroke="#B8860B" strokeWidth="1" rx="2" />
        {/* Lock plate shine */}
        <rect x="19" y="21" width="5" height="3" fill="white" opacity="0.4" rx="1" />

        {/* Keyhole */}
        <circle cx="25" cy="26" r="3" fill="#1a1a1a" />
        <rect x="24" y="26" width="2" height="5" fill="#1a1a1a" />
        {/* Keyhole inner ring */}
        <circle cx="25" cy="26" r="2" fill="none" stroke="#333" strokeWidth="0.5" />

        {/* Corner decorations */}
        <circle cx="6" cy="10" r="2.5" fill="url(#chestLockGradient)" />
        <circle cx="6" cy="10" r="1.5" fill="white" opacity="0.3" />
        <circle cx="44" cy="10" r="2.5" fill="url(#chestLockGradient)" />
        <circle cx="44" cy="10" r="1.5" fill="white" opacity="0.3" />

        {/* Side handles */}
        {/* Left handle */}
        <ellipse cx="4" cy="26" rx="2" ry="3" fill="none" stroke="url(#chestGoldGradient)" strokeWidth="2" />
        {/* Right handle */}
        <ellipse cx="46" cy="26" rx="2" ry="3" fill="none" stroke="url(#chestGoldGradient)" strokeWidth="2" />

        {/* Treasure glow hint from lid edge */}
        <rect x="3" y="17" width="44" height="2" fill="url(#chestInnerGlow)" />

        {/* Wood grain details on body */}
        <line x1="12" y1="20" x2="12" y2="36" stroke="#4a2510" strokeWidth="0.3" opacity="0.4" />
        <line x1="38" y1="20" x2="38" y2="36" stroke="#4a2510" strokeWidth="0.3" opacity="0.4" />
      </g>
    </svg>
  );
}
