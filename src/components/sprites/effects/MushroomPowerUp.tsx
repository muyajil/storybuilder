/**
 * MushroomPowerUp Sprite Component
 * Enhanced with vibrant gradients, glow effects, and depth
 */

import type { EffectProps } from '../types';

export function MushroomPowerUp({ x = 0, y = 0, size = 28}: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Stem gradient */}
        <linearGradient id="mushroomStemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFEF0" />
          <stop offset="50%" stopColor="#F5F5DC" />
          <stop offset="100%" stopColor="#D4C896" />
        </linearGradient>

        {/* Cap gradient */}
        <radialGradient id="mushroomCapGrad" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="40%" stopColor="#FF0000" />
          <stop offset="80%" stopColor="#CC0000" />
          <stop offset="100%" stopColor="#990000" />
        </radialGradient>

        {/* Spot gradient */}
        <radialGradient id="mushroomSpotGrad" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F0F0F0" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </radialGradient>

        {/* Glow filter */}
        <filter id="mushroomGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Inner shadow for depth */}
        <filter id="mushroomInnerShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Power-up aura */}
        <radialGradient id="mushroomAura" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="#FF0000" stopOpacity="0" />
          <stop offset="80%" stopColor="#FF6B6B" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FFAAAA" stopOpacity="0.4" />
        </radialGradient>
      </defs>

      {/* Outer glow aura */}
      <ellipse cx="14" cy="14" rx="14" ry="12" fill="url(#mushroomAura)" />

      {/* Stem shadow */}
      <rect x="11" y="19" width="8" height="10" fill="#A09060" opacity="0.3" rx="1" />

      {/* Stem with gradient */}
      <rect x="10" y="18" width="8" height="10" fill="url(#mushroomStemGrad)" rx="1" stroke="#D4C896" strokeWidth="0.5" />

      {/* Stem highlight */}
      <rect x="11" y="19" width="2" height="8" fill="white" opacity="0.3" rx="0.5" />

      {/* Cap shadow */}
      <ellipse cx="14" cy="15" rx="13" ry="10" fill="#660000" opacity="0.3" />

      {/* Main cap with gradient */}
      <ellipse cx="14" cy="14" rx="13" ry="10" fill="url(#mushroomCapGrad)" filter="url(#mushroomGlow)" />

      {/* Cap edge highlight */}
      <ellipse cx="14" cy="14" rx="12.5" ry="9.5" fill="none" stroke="#FF9999" strokeWidth="0.5" opacity="0.5" />

      {/* White spots with gradients */}
      <circle cx="8" cy="12" r="4" fill="url(#mushroomSpotGrad)" filter="url(#mushroomInnerShadow)" />
      <circle cx="18" cy="10" r="3" fill="url(#mushroomSpotGrad)" filter="url(#mushroomInnerShadow)" />
      <circle cx="14" cy="16" r="2" fill="url(#mushroomSpotGrad)" filter="url(#mushroomInnerShadow)" />

      {/* Spot highlights */}
      <ellipse cx="7" cy="11" rx="1.5" ry="1" fill="white" opacity="0.6" />
      <ellipse cx="17" cy="9" rx="1" ry="0.7" fill="white" opacity="0.6" />

      {/* Cap shine */}
      <ellipse cx="8" cy="8" rx="4" ry="2" fill="white" opacity="0.4" />
      <ellipse cx="18" cy="7" rx="2" ry="1" fill="white" opacity="0.3" />

      {/* Sparkle accents */}
      <g filter="url(#mushroomGlow)">
        <polygon points="4,6 4.5,7 6,7 4.5,8 5,9 4,8 3,9 3.5,8 2,7 3.5,7" fill="white" opacity="0.9" />
        <polygon points="22,8 22.3,8.6 23,8.6 22.3,9 22.5,9.6 22,9.2 21.5,9.6 21.7,9 21,8.6 21.7,8.6" fill="white" opacity="0.7" />
      </g>
    </svg>
  );
}
