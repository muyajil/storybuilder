/**
 * Buoy Sprite Component
 * Enhanced with gradients, water reflections, and depth
 */

import type { ElementProps } from '../types';

export function Buoy({ x = 0, y = 0, size = 40, color = '#FF0000' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 40 48"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main buoy body gradient */}
        <radialGradient id="buoyBodyGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ff4444" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#aa0000" />
        </radialGradient>
        {/* White stripe gradient */}
        <linearGradient id="buoyStripeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" />
          <stop offset="50%" stopColor="#f5f5f5" />
          <stop offset="100%" stopColor="#e0e0e0" />
        </linearGradient>
        {/* Top cone gradient */}
        <linearGradient id="buoyTopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff4444" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#880000" />
        </linearGradient>
        {/* Metal pole gradient */}
        <linearGradient id="buoyPoleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="30%" stopColor="#4a4a4a" />
          <stop offset="70%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Water reflection gradient */}
        <linearGradient id="buoyWaterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4a90c0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#2a6090" stopOpacity="0.1" />
        </linearGradient>
        {/* Shadow filter */}
        <filter id="buoyShadow">
          <feDropShadow dx="1" dy="2" stdDeviation="1" floodOpacity="0.3" />
        </filter>
        {/* Glow for visibility */}
        <filter id="buoyGlow">
          <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Water ripple effect */}
      <ellipse cx="20" cy="46" rx="18" ry="3" fill="url(#buoyWaterGradient)" />
      <ellipse cx="20" cy="44" rx="14" ry="2" fill="url(#buoyWaterGradient)" opacity="0.5" />

      <g filter="url(#buoyShadow)">
        {/* Main buoy body */}
        <ellipse cx="20" cy="30" rx="15" ry="12" fill="url(#buoyBodyGradient)" />

        {/* White stripe band */}
        <rect x="5" y="26" width="30" height="7" fill="url(#buoyStripeGradient)" />
        {/* Stripe shadow edges */}
        <line x1="5" y1="26" x2="35" y2="26" stroke="#ccc" strokeWidth="0.5" />
        <line x1="5" y1="33" x2="35" y2="33" stroke="#aaa" strokeWidth="0.5" />

        {/* Upper body shadow for 3D effect */}
        <ellipse cx="20" cy="25" rx="14" ry="5" fill="#000" opacity="0.1" />

        {/* Bottom curve of buoy */}
        <ellipse cx="20" cy="38" rx="13" ry="4" fill="#880000" opacity="0.5" />

        {/* Top cone/peak */}
        <polygon points="20,5 12,22 28,22" fill="url(#buoyTopGradient)" />
        {/* Cone highlight */}
        <polygon points="20,7 14,20 20,18" fill="#ff6666" opacity="0.4" />
        {/* Cone edge shadow */}
        <polygon points="20,7 26,20 20,18" fill="#660000" opacity="0.3" />

        {/* Metal pole on top */}
        <rect x="18" y="0" width="4" height="8" fill="url(#buoyPoleGradient)" rx="1" />
        {/* Pole highlight */}
        <rect x="19" y="1" width="1" height="6" fill="#666" opacity="0.5" />

        {/* Light/beacon on top */}
        <circle cx="20" cy="2" r="2" fill="#FFD700" filter="url(#buoyGlow)" />
        <circle cx="20" cy="2" r="1" fill="white" opacity="0.8" />

        {/* Shine/highlight on body */}
        <ellipse cx="14" cy="28" rx="4" ry="6" fill="white" opacity="0.2" />
        <ellipse cx="12" cy="26" rx="2" ry="3" fill="white" opacity="0.3" />

        {/* Mooring ring */}
        <circle cx="20" cy="40" r="2.5" fill="none" stroke="#4a4a4a" strokeWidth="1.5" />
        <circle cx="20" cy="40" r="2" fill="none" stroke="#6a6a6a" strokeWidth="0.5" />
      </g>
    </svg>
  );
}
