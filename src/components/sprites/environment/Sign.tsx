/**
 * Sign Sprite Component
 * Enhanced with wood grain texture, weathering, and natural depth
 */

import type { ElementProps } from '../types';

export function Sign({ x = 0, y = 0, size = 50, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 50 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Post wood gradient */}
        <linearGradient id="signPostGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B4423" />
          <stop offset="30%" stopColor={color} />
          <stop offset="50%" stopColor="#9B6A43" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#5B3413" />
        </linearGradient>

        {/* Sign board gradient */}
        <linearGradient id="signBoardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF8E8" />
          <stop offset="20%" stopColor="#F5F5DC" />
          <stop offset="80%" stopColor="#E8E0C8" />
          <stop offset="100%" stopColor="#D8D0B8" />
        </linearGradient>

        {/* Wood grain pattern for post */}
        <pattern id="signWoodGrain" patternUnits="userSpaceOnUse" width="6" height="30">
          <rect width="6" height="30" fill="transparent" />
          <path d="M1 0 Q2 15 1 30" stroke="#5B3413" strokeWidth="0.3" fill="none" opacity="0.5" />
          <path d="M3 0 Q4 15 3 30" stroke="#6B4423" strokeWidth="0.2" fill="none" opacity="0.4" />
          <path d="M5 0 Q4 15 5 30" stroke="#5B3413" strokeWidth="0.3" fill="none" opacity="0.5" />
        </pattern>

        {/* Arrow gradient */}
        <linearGradient id="signArrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9B6A43" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#6B4423" />
        </linearGradient>

        {/* Nail gradient */}
        <radialGradient id="signNailGradient" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#A0A0A0" />
          <stop offset="50%" stopColor="#707070" />
          <stop offset="100%" stopColor="#505050" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="25" cy="59" rx="8" ry="2" fill="rgba(0,0,0,0.2)" />

      {/* Post shadow */}
      <rect x="23" y="26" width="6" height="34" fill="rgba(0,0,0,0.15)" transform="skewX(-5)" />

      {/* Post with wood grain */}
      <rect x="22" y="25" width="6" height="35" fill="url(#signPostGradient)" />
      <rect x="22" y="25" width="6" height="35" fill="url(#signWoodGrain)" />

      {/* Post cap */}
      <rect x="21" y="24" width="8" height="3" fill={color} rx="1" />
      <rect x="21" y="24" width="8" height="1" fill="#9B6A43" rx="0.5" />

      {/* Post base */}
      <rect x="20" y="57" width="10" height="3" fill="#6B4423" rx="1" />

      {/* Sign plate shadow */}
      <rect x="6" y="7" width="40" height="25" fill="rgba(0,0,0,0.1)" rx="2" />

      {/* Sign plate */}
      <rect x="5" y="5" width="40" height="25" fill="url(#signBoardGradient)" stroke={color} strokeWidth="2" rx="2" />

      {/* Sign board wood edge detail */}
      <line x1="5" y1="8" x2="45" y2="8" stroke="#D8D0B8" strokeWidth="0.5" opacity="0.5" />
      <line x1="5" y1="27" x2="45" y2="27" stroke="#C8C0A8" strokeWidth="0.5" opacity="0.5" />

      {/* Decorative text lines */}
      <line x1="10" y1="13" x2="35" y2="13" stroke="#8B7355" strokeWidth="1.5" opacity="0.4" />
      <line x1="12" y1="18" x2="33" y2="18" stroke="#8B7355" strokeWidth="1" opacity="0.3" />
      <line x1="14" y1="22" x2="31" y2="22" stroke="#8B7355" strokeWidth="0.8" opacity="0.25" />

      {/* Arrow pointer */}
      <polygon points="42,17.5 50,17.5 42,12 42,23" fill="url(#signArrowGradient)" />
      <line x1="42" y1="12" x2="42" y2="23" stroke="#5B3413" strokeWidth="0.5" />

      {/* Arrow shadow */}
      <polygon points="43,18 50,18 43,13 43,23" fill="rgba(0,0,0,0.1)" />

      {/* Nails/mounting */}
      <circle cx="8" cy="8" r="1.5" fill="url(#signNailGradient)" />
      <circle cx="42" cy="8" r="1.5" fill="url(#signNailGradient)" />
      <circle cx="8" cy="27" r="1.5" fill="url(#signNailGradient)" />
      <circle cx="42" cy="27" r="1.5" fill="url(#signNailGradient)" />

      {/* Nail highlights */}
      <circle cx="7.5" cy="7.5" r="0.5" fill="white" opacity="0.4" />
      <circle cx="41.5" cy="7.5" r="0.5" fill="white" opacity="0.4" />

      {/* Weathering marks */}
      <path d="M15 10 Q20 9 18 11" stroke="#C8C0A8" strokeWidth="0.3" fill="none" opacity="0.5" />
      <path d="M30 20 Q35 19 33 21" stroke="#C8C0A8" strokeWidth="0.3" fill="none" opacity="0.5" />

      {/* Sign board highlight */}
      <rect x="6" y="6" width="38" height="3" fill="white" opacity="0.15" rx="1" />
    </svg>
  );
}
