/**
 * Rose Sprite Component
 * Enhanced with layered petals, realistic stem, thorns, and natural depth
 */

import type { ElementProps } from '../types';

export function Rose({ x = 0, y = 0, size = 40, color = '#FF1744' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 40 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Stem gradient */}
        <linearGradient id="roseStemGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1A6B1A" />
          <stop offset="30%" stopColor="#228B22" />
          <stop offset="50%" stopColor="#2A9B2A" />
          <stop offset="70%" stopColor="#228B22" />
          <stop offset="100%" stopColor="#1A5A1A" />
        </linearGradient>

        {/* Leaf gradient */}
        <linearGradient id="roseLeafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2AAB2A" />
          <stop offset="50%" stopColor="#228B22" />
          <stop offset="100%" stopColor="#1A6B1A" />
        </linearGradient>

        {/* Petal gradients for depth */}
        <radialGradient id="rosePetalOuter" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} />
          <stop offset="60%" stopColor="#CC1133" />
          <stop offset="100%" stopColor="#990022" />
        </radialGradient>

        <radialGradient id="rosePetalMiddle" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FF4466" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#BB1133" />
        </radialGradient>

        <radialGradient id="rosePetalInner" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF6677" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>

        <radialGradient id="roseCenterGradient" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#660011" />
          <stop offset="50%" stopColor="#550010" />
          <stop offset="100%" stopColor="#440008" />
        </radialGradient>

        {/* Thorn gradient */}
        <linearGradient id="roseThornGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A5A1A" />
          <stop offset="100%" stopColor="#0A3A0A" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="20" cy="58" rx="8" ry="2" fill="rgba(0,0,0,0.15)" />

      {/* Stem with gradient */}
      <path d="M18 25 Q19 35 19 45 Q19 52 20 60" stroke="url(#roseStemGradient)" strokeWidth="4" fill="none" />
      <path d="M22 25 Q21 35 21 45 Q21 52 20 60" stroke="url(#roseStemGradient)" strokeWidth="4" fill="none" />

      {/* Stem center line */}
      <path d="M20 26 Q20 40 20 58" stroke="#1A5A1A" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Thorns with gradient */}
      <polygon points="18,34 13,30 17,31" fill="url(#roseThornGradient)" />
      <polygon points="18,35 14,33 17,33" fill="#0A3A0A" opacity="0.5" />

      <polygon points="22,42 27,38 23,40" fill="url(#roseThornGradient)" />
      <polygon points="22,43 26,41 23,41" fill="#0A3A0A" opacity="0.5" />

      <polygon points="18,50 14,47 17,48" fill="url(#roseThornGradient)" />

      {/* Leaves with veins */}
      <g transform="translate(4, 42) rotate(-45)">
        <ellipse cx="8" cy="0" rx="10" ry="5" fill="url(#roseLeafGradient)" />
        <path d="M0 0 L16 0" stroke="#1A5A1A" strokeWidth="0.5" opacity="0.6" />
        <path d="M4 0 L6 -2" stroke="#1A5A1A" strokeWidth="0.3" opacity="0.4" />
        <path d="M8 0 L10 -2.5" stroke="#1A5A1A" strokeWidth="0.3" opacity="0.4" />
        <path d="M12 0 L13 -1.5" stroke="#1A5A1A" strokeWidth="0.3" opacity="0.4" />
        <path d="M4 0 L6 2" stroke="#1A5A1A" strokeWidth="0.3" opacity="0.4" />
        <path d="M8 0 L10 2.5" stroke="#1A5A1A" strokeWidth="0.3" opacity="0.4" />
      </g>

      <g transform="translate(28, 48) rotate(45)">
        <ellipse cx="0" cy="0" rx="9" ry="4" fill="url(#roseLeafGradient)" />
        <path d="M-9 0 L9 0" stroke="#1A5A1A" strokeWidth="0.5" opacity="0.6" />
        <path d="M-4 0 L-5 -1.5" stroke="#1A5A1A" strokeWidth="0.3" opacity="0.4" />
        <path d="M2 0 L3 -2" stroke="#1A5A1A" strokeWidth="0.3" opacity="0.4" />
        <path d="M-4 0 L-5 1.5" stroke="#1A5A1A" strokeWidth="0.3" opacity="0.4" />
      </g>

      {/* Blossom - Back petals (darkest) */}
      <ellipse cx="14" cy="17" rx="8" ry="7" fill="url(#rosePetalOuter)" />
      <ellipse cx="26" cy="17" rx="8" ry="7" fill="url(#rosePetalOuter)" />
      <ellipse cx="20" cy="20" rx="7" ry="8" fill="url(#rosePetalOuter)" />

      {/* Middle layer petals */}
      <ellipse cx="16" cy="14" rx="7" ry="6" fill="url(#rosePetalMiddle)" />
      <ellipse cx="24" cy="14" rx="7" ry="6" fill="url(#rosePetalMiddle)" />
      <ellipse cx="20" cy="17" rx="6" ry="6" fill="url(#rosePetalMiddle)" />

      {/* Inner petals */}
      <ellipse cx="17" cy="12" rx="5" ry="5" fill="url(#rosePetalInner)" />
      <ellipse cx="23" cy="12" rx="5" ry="5" fill="url(#rosePetalInner)" />

      {/* Center swirl */}
      <ellipse cx="20" cy="12" rx="5" ry="5" fill={color} />
      <circle cx="20" cy="12" r="4" fill="url(#roseCenterGradient)" />

      {/* Petal highlights */}
      <ellipse cx="13" cy="14" rx="2" ry="1.5" fill="white" opacity="0.15" />
      <ellipse cx="27" cy="14" rx="1.5" ry="1" fill="white" opacity="0.1" />
      <ellipse cx="20" cy="9" rx="1.5" ry="1" fill="white" opacity="0.1" />

      {/* Dew drops */}
      <circle cx="15" cy="18" r="0.8" fill="white" opacity="0.6" />
      <circle cx="25" cy="16" r="0.6" fill="white" opacity="0.5" />
      <circle cx="10" cy="45" r="0.7" fill="white" opacity="0.5" />
    </svg>
  );
}
