/**
 * Sparkle Sprite Component
 * Enhanced with brilliant shine, radiant gradients, and magical glow
 */

import type { EffectProps } from '../types';

export function Sparkle({ x = 0, y = 0, size = 30}: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      style={{ position: 'absolute', left: x - size/2, top: y - size/2 }}
    >
      <defs>
        {/* Main sparkle gradient */}
        <linearGradient id="sparkleMainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFACD" />
          <stop offset="30%" stopColor="#FFE082" />
          <stop offset="60%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA000" />
        </linearGradient>

        {/* Inner bright gradient */}
        <linearGradient id="sparkleInnerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#FFFDE7" />
          <stop offset="100%" stopColor="#FFF9C4" />
        </linearGradient>

        {/* Radial glow */}
        <radialGradient id="sparkleGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
          <stop offset="30%" stopColor="#FFD700" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#FFA500" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
        </radialGradient>

        {/* Outer aura */}
        <radialGradient id="sparkleAura" cx="50%" cy="50%" r="50%">
          <stop offset="30%" stopColor="#FFD700" stopOpacity="0" />
          <stop offset="60%" stopColor="#FFD700" stopOpacity="0.2" />
          <stop offset="80%" stopColor="#FFEB3B" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFFDE7" stopOpacity="0.5" />
        </radialGradient>

        {/* Glow filter */}
        <filter id="sparkleGlowFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Bright core filter */}
        <filter id="sparkleCoreFilter" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Ray filter */}
        <filter id="sparkleRayFilter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer magical aura */}
      <circle cx="15" cy="15" r="14" fill="url(#sparkleAura)" />

      {/* Radial glow background */}
      <circle cx="15" cy="15" r="12" fill="url(#sparkleGlow)" />

      {/* Main sparkle shape with gradient */}
      <polygon
        points="15,0 17,12 30,15 17,18 15,30 13,18 0,15 13,12"
        fill="url(#sparkleMainGrad)"
        filter="url(#sparkleGlowFilter)"
      />

      {/* Outer edge glow */}
      <polygon
        points="15,1 16.5,12.5 29,15 16.5,17.5 15,29 13.5,17.5 1,15 13.5,12.5"
        fill="none"
        stroke="#FFD700"
        strokeWidth="0.5"
        opacity="0.5"
      />

      {/* Inner bright sparkle */}
      <polygon
        points="15,5 16,13 25,15 16,17 15,25 14,17 5,15 14,13"
        fill="url(#sparkleInnerGrad)"
        opacity="0.8"
        filter="url(#sparkleCoreFilter)"
      />

      {/* Central core */}
      <circle cx="15" cy="15" r="3" fill="#FFFFFF" opacity="0.9" filter="url(#sparkleCoreFilter)" />
      <circle cx="15" cy="15" r="1.5" fill="#FFFFFF" />

      {/* Ray highlights */}
      <line x1="15" y1="2" x2="15" y2="6" stroke="white" strokeWidth="1" opacity="0.6" strokeLinecap="round" filter="url(#sparkleRayFilter)" />
      <line x1="15" y1="24" x2="15" y2="28" stroke="white" strokeWidth="1" opacity="0.6" strokeLinecap="round" filter="url(#sparkleRayFilter)" />
      <line x1="2" y1="15" x2="6" y2="15" stroke="white" strokeWidth="1" opacity="0.6" strokeLinecap="round" filter="url(#sparkleRayFilter)" />
      <line x1="24" y1="15" x2="28" y2="15" stroke="white" strokeWidth="1" opacity="0.6" strokeLinecap="round" filter="url(#sparkleRayFilter)" />

      {/* Diagonal mini sparkles */}
      <polygon points="6,6 7,8 9,8 7,9 7.5,11 6,9.5 4.5,11 5,9 3,8 5,8" fill="white" opacity="0.7" filter="url(#sparkleRayFilter)" />
      <polygon points="24,6 24.5,7.5 26,7.5 24.5,8.5 25,10 24,9 23,10 23.5,8.5 22,7.5 23.5,7.5" fill="white" opacity="0.6" filter="url(#sparkleRayFilter)" />
      <polygon points="6,24 6.5,25 8,25 6.5,26 7,27 6,26 5,27 5.5,26 4,25 5.5,25" fill="white" opacity="0.6" filter="url(#sparkleRayFilter)" />
      <polygon points="24,24 24.3,25 25.5,25 24.3,25.5 24.5,26.5 24,26 23.5,26.5 23.7,25.5 22.5,25 23.7,25" fill="white" opacity="0.5" filter="url(#sparkleRayFilter)" />

      {/* Extra shine dots */}
      <circle cx="10" cy="10" r="0.8" fill="white" opacity="0.5" />
      <circle cx="20" cy="10" r="0.6" fill="white" opacity="0.4" />
      <circle cx="10" cy="20" r="0.6" fill="white" opacity="0.4" />
      <circle cx="20" cy="20" r="0.5" fill="white" opacity="0.3" />
    </svg>
  );
}
