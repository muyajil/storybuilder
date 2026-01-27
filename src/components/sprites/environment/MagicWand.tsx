/**
 * MagicWand Sprite Component
 * Enhanced with sparkle effects and magical aura
 */

import type { ElementProps } from '../types';

export function MagicWand({ x = 0, y = 0, size = 50, color = '#4a4a4a' }: ElementProps) {
  // Create color variations
  const wandDark = '#2a2a2a';
  const wandLight = '#666666';
  const handleBrown = '#8B4513';
  const handleDark = '#5D3A1A';
  const handleLight = '#A0522D';
  const tipGold = '#FFD700';
  const tipLight = '#FFEC8B';
  const tipDark = '#B8860B';
  const sparkleWhite = '#FFFFFF';
  const sparklePink = '#FF69B4';
  const sparkleBlue = '#87CEEB';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Wand body gradient */}
        <linearGradient id="magicWandBodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={wandDark} />
          <stop offset="30%" stopColor={color} />
          <stop offset="50%" stopColor={wandLight} />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor={wandDark} />
        </linearGradient>

        {/* Handle wood gradient */}
        <linearGradient id="magicWandHandleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={handleDark} />
          <stop offset="30%" stopColor={handleBrown} />
          <stop offset="50%" stopColor={handleLight} />
          <stop offset="70%" stopColor={handleBrown} />
          <stop offset="100%" stopColor={handleDark} />
        </linearGradient>

        {/* Gold tip gradient */}
        <radialGradient id="magicWandTipGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor={tipLight} />
          <stop offset="40%" stopColor={tipGold} />
          <stop offset="100%" stopColor={tipDark} />
        </radialGradient>

        {/* Star gradient */}
        <radialGradient id="magicWandStarGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" />
          <stop offset="40%" stopColor={tipLight} />
          <stop offset="100%" stopColor={tipGold} />
        </radialGradient>

        {/* Sparkle glow gradient */}
        <radialGradient id="magicWandSparkleGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={sparkleWhite} />
          <stop offset="100%" stopColor={sparkleWhite} stopOpacity="0" />
        </radialGradient>

        {/* Magic aura gradient */}
        <radialGradient id="magicWandAuraGradient" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={tipGold} stopOpacity="0.4" />
          <stop offset="50%" stopColor={sparklePink} stopOpacity="0.2" />
          <stop offset="100%" stopColor={sparkleBlue} stopOpacity="0" />
        </radialGradient>

        {/* Drop shadow filter */}
        <filter id="magicWandShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.3" />
        </filter>

        {/* Glow filter */}
        <filter id="magicWandGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Star sparkle filter */}
        <filter id="magicWandStarGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="1.5" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Magic aura around tip */}
      <ellipse cx="44" cy="8" rx="12" ry="12" fill="url(#magicWandAuraGradient)" />

      {/* Outer sparkle ring */}
      <g opacity="0.5">
        <circle cx="35" cy="4" r="1" fill={sparkleBlue} filter="url(#magicWandStarGlow)" />
        <circle cx="48" cy="15" r="1" fill={sparklePink} filter="url(#magicWandStarGlow)" />
        <circle cx="38" cy="18" r="0.8" fill={sparkleWhite} filter="url(#magicWandStarGlow)" />
      </g>

      {/* Wand shadow */}
      <g opacity="0.2" transform="translate(2, 2) rotate(-30 22 25)">
        <rect x="5" y="22" width="35" height="6" fill="#000" rx="2" />
      </g>

      {/* Main wand body */}
      <g transform="rotate(-30 22 25)">
        {/* Wand shaft */}
        <rect x="5" y="22" width="35" height="6" fill="url(#magicWandBodyGradient)" rx="2" filter="url(#magicWandShadow)" />

        {/* Wand shaft highlight */}
        <rect x="5" y="22" width="35" height="2" fill={wandLight} opacity="0.3" rx="1" />

        {/* Wand shaft shadow */}
        <rect x="5" y="26" width="35" height="2" fill={wandDark} opacity="0.3" rx="1" />

        {/* Decorative rings on wand */}
        <rect x="15" y="21" width="3" height="8" fill={wandLight} opacity="0.4" rx="0.5" />
        <rect x="25" y="21" width="2" height="8" fill={wandLight} opacity="0.3" rx="0.5" />

        {/* Handle */}
        <rect x="2" y="35" width="12" height="8" fill="url(#magicWandHandleGradient)" rx="2" />

        {/* Handle wood grain */}
        <g stroke={handleDark} strokeWidth="0.3" opacity="0.4">
          <line x1="4" y1="35" x2="4" y2="43" />
          <line x1="7" y1="35" x2="7" y2="43" />
          <line x1="10" y1="35" x2="10" y2="43" />
        </g>

        {/* Handle highlight */}
        <rect x="2" y="35" width="12" height="2.5" fill={handleLight} opacity="0.3" rx="1" />

        {/* Handle end cap */}
        <ellipse cx="8" cy="43" rx="6" ry="2" fill={handleDark} />
        <ellipse cx="8" cy="42.5" rx="4" ry="1.2" fill={handleLight} opacity="0.4" />

        {/* Handle to wand junction */}
        <ellipse cx="11" cy="38" rx="2" ry="4" fill={wandDark} />
        <ellipse cx="11" cy="37" rx="1.5" ry="2.5" fill={wandLight} opacity="0.3" />
      </g>

      {/* Golden star tip */}
      <g filter="url(#magicWandStarGlow)">
        <polygon
          points="44,2 46,6 50,7 47,10 48,14 44,12 40,14 41,10 38,7 42,6"
          fill="url(#magicWandStarGradient)"
          transform="rotate(-10 44 8)"
        />
        {/* Star highlight */}
        <polygon
          points="44,3 45,6 48,6.5 46,8.5 46.5,11 44,10 41.5,11 42,8.5 40,6.5 43,6"
          fill={tipLight}
          opacity="0.5"
          transform="rotate(-10 44 8)"
        />
      </g>

      {/* Sparkle effects around tip */}
      <g filter="url(#magicWandStarGlow)">
        {/* Main sparkles */}
        <circle cx="42" cy="8" r="2" fill="url(#magicWandSparkleGlow)" />
        <circle cx="46" cy="12" r="1.5" fill="url(#magicWandSparkleGlow)" />
        <circle cx="44" cy="3" r="1.5" fill="url(#magicWandSparkleGlow)" />
        <circle cx="48" cy="6" r="1" fill="url(#magicWandSparkleGlow)" />

        {/* Colored sparkles */}
        <circle cx="38" cy="5" r="1.2" fill={sparklePink} opacity="0.8" />
        <circle cx="49" cy="10" r="1" fill={sparkleBlue} opacity="0.8" />
        <circle cx="40" cy="12" r="0.8" fill={tipGold} opacity="0.9" />
      </g>

      {/* Tiny star sparkles */}
      <g fill={sparkleWhite} opacity="0.8">
        <polygon points="36,3 36.5,4 37.5,4 36.7,4.6 37,5.6 36,5 35,5.6 35.3,4.6 34.5,4 35.5,4" />
        <polygon points="50,4 50.3,4.6 51,4.6 50.5,5 50.6,5.6 50,5.2 49.4,5.6 49.5,5 49,4.6 49.7,4.6" transform="scale(0.8) translate(12, 1)" />
      </g>

      {/* Magic trail suggestion */}
      <g stroke={tipGold} strokeWidth="0.5" fill="none" opacity="0.3">
        <path d="M44 8 Q38 15 32 18" strokeDasharray="2,2" />
        <path d="M44 8 Q48 14 45 20" strokeDasharray="2,2" />
      </g>
    </svg>
  );
}
