/**
 * Spotlight Sprite Component
 * Enhanced with improved glow, layered lighting, and atmospheric effects
 */

import type { EffectProps } from '../types';

export function Spotlight({ x = 0, y = 0, size = 60}: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      style={{ position: 'absolute', left: x, top: y, pointerEvents: 'none' }}
    >
      <defs>
        {/* Main spotlight gradient */}
        <radialGradient id="spotlightMainGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFCC" stopOpacity="0.9" />
          <stop offset="20%" stopColor="#FFFF66" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#FFFF00" stopOpacity="0.4" />
          <stop offset="75%" stopColor="#FFD700" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FFA500" stopOpacity="0" />
        </radialGradient>

        {/* Inner bright core */}
        <radialGradient id="spotlightCoreGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="30%" stopColor="#FFFFEE" stopOpacity="0.7" />
          <stop offset="60%" stopColor="#FFFF88" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFFF00" stopOpacity="0" />
        </radialGradient>

        {/* Outer halo */}
        <radialGradient id="spotlightHaloGrad" cx="50%" cy="50%" r="50%">
          <stop offset="40%" stopColor="#FFFF00" stopOpacity="0" />
          <stop offset="60%" stopColor="#FFFF00" stopOpacity="0.1" />
          <stop offset="80%" stopColor="#FFD700" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFA500" stopOpacity="0.2" />
        </radialGradient>

        {/* Warm tint gradient */}
        <radialGradient id="spotlightWarmGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF8DC" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#FFE4B5" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>

        {/* Dust particles gradient */}
        <radialGradient id="spotlightDustGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFFF00" stopOpacity="0" />
        </radialGradient>

        {/* Glow filter */}
        <filter id="spotlightGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Soft glow filter */}
        <filter id="spotlightSoftGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Particle filter */}
        <filter id="spotlightParticle" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer halo ring */}
      <circle cx="30" cy="30" r="29" fill="url(#spotlightHaloGrad)" />

      {/* Main spotlight */}
      <circle cx="30" cy="30" r="28" fill="url(#spotlightMainGrad)" filter="url(#spotlightGlow)" />

      {/* Warm color layer */}
      <circle cx="30" cy="30" r="25" fill="url(#spotlightWarmGrad)" />

      {/* Bright core */}
      <circle cx="30" cy="30" r="15" fill="url(#spotlightCoreGrad)" filter="url(#spotlightSoftGlow)" />

      {/* Central hot spot */}
      <circle cx="30" cy="30" r="6" fill="#FFFFFF" opacity="0.7" />
      <circle cx="30" cy="30" r="3" fill="#FFFFFF" opacity="0.9" />

      {/* Light rays */}
      <g opacity="0.2">
        <line x1="30" y1="5" x2="30" y2="15" stroke="#FFFF88" strokeWidth="2" strokeLinecap="round" />
        <line x1="30" y1="45" x2="30" y2="55" stroke="#FFFF88" strokeWidth="2" strokeLinecap="round" />
        <line x1="5" y1="30" x2="15" y2="30" stroke="#FFFF88" strokeWidth="2" strokeLinecap="round" />
        <line x1="45" y1="30" x2="55" y2="30" stroke="#FFFF88" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Diagonal rays */}
      <g opacity="0.15">
        <line x1="12" y1="12" x2="18" y2="18" stroke="#FFFF88" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="48" y1="12" x2="42" y2="18" stroke="#FFFF88" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="48" x2="18" y2="42" stroke="#FFFF88" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="48" y1="48" x2="42" y2="42" stroke="#FFFF88" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Floating dust particles */}
      <g filter="url(#spotlightParticle)">
        <circle cx="20" cy="22" r="0.8" fill="url(#spotlightDustGrad)" />
        <circle cx="38" cy="18" r="0.6" fill="url(#spotlightDustGrad)" />
        <circle cx="25" cy="35" r="0.5" fill="url(#spotlightDustGrad)" />
        <circle cx="40" cy="38" r="0.7" fill="url(#spotlightDustGrad)" />
        <circle cx="15" cy="32" r="0.4" fill="url(#spotlightDustGrad)" />
        <circle cx="45" cy="25" r="0.5" fill="url(#spotlightDustGrad)" />
        <circle cx="32" cy="42" r="0.4" fill="url(#spotlightDustGrad)" />
        <circle cx="22" cy="15" r="0.3" fill="url(#spotlightDustGrad)" />
      </g>

      {/* Lens flare effect */}
      <ellipse cx="24" cy="24" rx="4" ry="2" fill="white" opacity="0.15" transform="rotate(-45 24 24)" />
      <ellipse cx="36" cy="36" rx="3" ry="1.5" fill="#FFFFAA" opacity="0.1" transform="rotate(-45 36 36)" />
    </svg>
  );
}
