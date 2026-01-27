/**
 * Star Sprite Component
 * Enhanced with golden glow, shimmering gradients, and sparkle effects
 */

import type { EffectProps } from '../types';

export function Star({ x = 0, y = 0, size = 30}: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main star gradient */}
        <linearGradient id="starMainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF9C4" />
          <stop offset="25%" stopColor="#FFE082" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="75%" stopColor="#FFC107" />
          <stop offset="100%" stopColor="#FF8F00" />
        </linearGradient>

        {/* Inner highlight gradient */}
        <linearGradient id="starInnerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#FFFDE7" />
          <stop offset="100%" stopColor="#FFF9C4" />
        </linearGradient>

        {/* Outer glow */}
        <radialGradient id="starGlowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="30%" stopColor="#FFD700" stopOpacity="0" />
          <stop offset="60%" stopColor="#FFD700" stopOpacity="0.3" />
          <stop offset="80%" stopColor="#FFC107" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FF8F00" stopOpacity="0.5" />
        </radialGradient>

        {/* Radial shine */}
        <radialGradient id="starShineGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="30%" stopColor="#FFF9C4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>

        {/* Glow filter */}
        <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Inner glow filter */}
        <filter id="starInnerGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Sparkle filter */}
        <filter id="starSparkle" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow aura */}
      <circle cx="15" cy="15" r="14" fill="url(#starGlowGrad)" />

      {/* Main star shape with gradient */}
      <polygon
        points="15,0 18,11 30,11 21,18 24,30 15,23 6,30 9,18 0,11 12,11"
        fill="url(#starMainGrad)"
        filter="url(#starGlow)"
      />

      {/* Star edge highlight */}
      <polygon
        points="15,1 17.5,11.5 29,11.5 20.5,18 23.5,29 15,22.5 6.5,29 9.5,18 1,11.5 12.5,11.5"
        fill="none"
        stroke="#FFE082"
        strokeWidth="0.5"
        opacity="0.6"
      />

      {/* Inner highlight star */}
      <polygon
        points="15,5 17,12 24,12 18,17 20,24 15,20 10,24 12,17 6,12 13,12"
        fill="url(#starInnerGrad)"
        opacity="0.5"
        filter="url(#starInnerGlow)"
      />

      {/* Center shine */}
      <circle cx="15" cy="14" r="5" fill="url(#starShineGrad)" />

      {/* Bright center */}
      <circle cx="14" cy="13" r="2" fill="white" opacity="0.7" />
      <circle cx="14" cy="13" r="1" fill="white" opacity="0.9" />

      {/* Point highlights */}
      <circle cx="15" cy="2" r="1" fill="white" opacity="0.6" filter="url(#starSparkle)" />
      <circle cx="28" cy="11" r="0.8" fill="white" opacity="0.5" filter="url(#starSparkle)" />
      <circle cx="23" cy="28" r="0.7" fill="white" opacity="0.4" filter="url(#starSparkle)" />
      <circle cx="7" cy="28" r="0.7" fill="white" opacity="0.4" filter="url(#starSparkle)" />
      <circle cx="2" cy="11" r="0.8" fill="white" opacity="0.5" filter="url(#starSparkle)" />

      {/* Sparkle accents */}
      <g filter="url(#starSparkle)">
        <polygon points="4,4 4.5,5.5 6,6 4.5,6.5 5,8 4,6.5 3,8 3.5,6.5 2,6 3.5,5.5" fill="white" opacity="0.7" />
        <polygon points="26,4 26.3,5 27.5,5 26.3,5.5 26.5,6.5 26,6 25.5,6.5 25.7,5.5 24.5,5 25.7,5" fill="#FFF9C4" opacity="0.6" />
        <polygon points="26,24 26.2,24.5 27,24.5 26.2,25 26.4,25.5 26,25 25.6,25.5 25.8,25 25,24.5 25.8,24.5" fill="white" opacity="0.5" />
        <polygon points="4,24 4.2,24.5 5,24.5 4.2,25 4.4,25.5 4,25 3.6,25.5 3.8,25 3,24.5 3.8,24.5" fill="#FFFDE7" opacity="0.5" />
      </g>

      {/* Shimmer lines */}
      <line x1="15" y1="3" x2="15" y2="7" stroke="white" strokeWidth="0.5" opacity="0.4" strokeLinecap="round" />
      <line x1="25" y1="11" x2="22" y2="13" stroke="white" strokeWidth="0.5" opacity="0.3" strokeLinecap="round" />
    </svg>
  );
}
