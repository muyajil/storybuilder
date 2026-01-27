/**
 * SeaStar Sprite Component
 * Enhanced with textured surface, bumps, gradient coloring, and natural depth
 */

import type { ElementProps } from '../types';

export function SeaStar({ x = 0, y = 0, size = 30, color = '#FF6347' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main body gradient */}
        <radialGradient id="seaStarBodyGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FF8367" />
          <stop offset="40%" stopColor={color} />
          <stop offset="80%" stopColor="#E04327" />
          <stop offset="100%" stopColor="#C03317" />
        </radialGradient>

        {/* Arm gradient for depth */}
        <linearGradient id="seaStarArmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7357" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#D04327" />
        </linearGradient>

        {/* Center gradient */}
        <radialGradient id="seaStarCenterGradient" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#FF5530" />
          <stop offset="50%" stopColor="#FF4500" />
          <stop offset="100%" stopColor="#CC3500" />
        </radialGradient>

        {/* Bump gradient */}
        <radialGradient id="seaStarBumpGradient" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#FF7050" />
          <stop offset="100%" stopColor="#FF4500" />
        </radialGradient>

        {/* Texture pattern */}
        <pattern id="seaStarTexturePattern" patternUnits="userSpaceOnUse" width="6" height="6">
          <rect width="6" height="6" fill="transparent" />
          <circle cx="2" cy="2" r="0.5" fill="#CC3500" opacity="0.3" />
          <circle cx="5" cy="4" r="0.3" fill="#DD4510" opacity="0.25" />
        </pattern>
      </defs>

      {/* Shadow */}
      <polygon
        points="15,2 18,12 28,12 20,18 23,28 15,23 7,28 10,18 2,12 12,12"
        fill="rgba(0,0,0,0.15)"
        transform="translate(1, 1)"
      />

      {/* Main star body */}
      <polygon
        points="15,0 18,11 29,11 20,18 23,29 15,22 7,29 10,18 1,11 12,11"
        fill="url(#seaStarBodyGradient)"
      />

      {/* Texture overlay */}
      <polygon
        points="15,0 18,11 29,11 20,18 23,29 15,22 7,29 10,18 1,11 12,11"
        fill="url(#seaStarTexturePattern)"
      />

      {/* Arm detail lines */}
      <line x1="15" y1="15" x2="15" y2="2" stroke="#CC3500" strokeWidth="0.5" opacity="0.4" />
      <line x1="15" y1="15" x2="27" y2="11" stroke="#CC3500" strokeWidth="0.5" opacity="0.4" />
      <line x1="15" y1="15" x2="22" y2="27" stroke="#CC3500" strokeWidth="0.5" opacity="0.4" />
      <line x1="15" y1="15" x2="8" y2="27" stroke="#CC3500" strokeWidth="0.5" opacity="0.4" />
      <line x1="15" y1="15" x2="3" y2="11" stroke="#CC3500" strokeWidth="0.5" opacity="0.4" />

      {/* Center with gradient */}
      <circle cx="15" cy="15" r="4.5" fill="url(#seaStarCenterGradient)" />
      <circle cx="15" cy="15" r="3" fill="#FF4500" />

      {/* Main bumps on arms */}
      <circle cx="15" cy="5" r="1.5" fill="url(#seaStarBumpGradient)" />
      <circle cx="24" cy="13" r="1.5" fill="url(#seaStarBumpGradient)" />
      <circle cx="20" cy="24" r="1.5" fill="url(#seaStarBumpGradient)" />
      <circle cx="10" cy="24" r="1.5" fill="url(#seaStarBumpGradient)" />
      <circle cx="6" cy="13" r="1.5" fill="url(#seaStarBumpGradient)" />

      {/* Secondary bumps */}
      <circle cx="15" cy="8" r="0.8" fill="#FF5530" opacity="0.8" />
      <circle cx="21" cy="12" r="0.8" fill="#FF5530" opacity="0.8" />
      <circle cx="19" cy="21" r="0.8" fill="#FF5530" opacity="0.8" />
      <circle cx="11" cy="21" r="0.8" fill="#FF5530" opacity="0.8" />
      <circle cx="9" cy="12" r="0.8" fill="#FF5530" opacity="0.8" />

      {/* Small texture bumps */}
      <circle cx="12" cy="10" r="0.5" fill="#FF6040" opacity="0.6" />
      <circle cx="18" cy="10" r="0.5" fill="#FF6040" opacity="0.6" />
      <circle cx="20" cy="16" r="0.5" fill="#FF6040" opacity="0.6" />
      <circle cx="17" cy="20" r="0.5" fill="#FF6040" opacity="0.6" />
      <circle cx="13" cy="20" r="0.5" fill="#FF6040" opacity="0.6" />
      <circle cx="10" cy="16" r="0.5" fill="#FF6040" opacity="0.6" />

      {/* Highlights */}
      <ellipse cx="13" cy="13" rx="1.5" ry="1" fill="white" opacity="0.2" />
      <circle cx="14" cy="6" r="0.5" fill="white" opacity="0.3" />
      <circle cx="7" cy="12" r="0.4" fill="white" opacity="0.25" />
    </svg>
  );
}
