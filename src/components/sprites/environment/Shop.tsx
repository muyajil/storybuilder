/**
 * Shop Sprite Component
 * Enhanced with detailed awning, window displays, signage, and depth
 */

import type { ElementProps } from '../types';

export function Shop({ x = 0, y = 0, size = 80, color = '#FFD700' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Building wall gradient */}
        <linearGradient id="shopWallGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="50%" stopColor="#DEB887" />
          <stop offset="100%" stopColor="#C9A875" />
        </linearGradient>

        {/* Awning gradient */}
        <linearGradient id="shopAwningGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor="#E6C200" />
          <stop offset="100%" stopColor="#CC9900" />
        </linearGradient>

        {/* Awning stripe gradient */}
        <linearGradient id="shopStripeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#E8E8E8" />
        </linearGradient>

        {/* Window glass gradient */}
        <linearGradient id="shopWindowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B0D4F1" />
          <stop offset="30%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#6BB8E0" />
        </linearGradient>

        {/* Door wood gradient */}
        <linearGradient id="shopDoorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B4423" />
          <stop offset="30%" stopColor="#8B5A33" />
          <stop offset="50%" stopColor="#9B6A43" />
          <stop offset="70%" stopColor="#8B5A33" />
          <stop offset="100%" stopColor="#5B3413" />
        </linearGradient>

        {/* Sign gradient */}
        <linearGradient id="shopSignGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#444444" />
          <stop offset="50%" stopColor="#333333" />
          <stop offset="100%" stopColor="#222222" />
        </linearGradient>

        {/* Gold handle gradient */}
        <radialGradient id="shopHandleGradient" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="40" cy="79" rx="35" ry="3" fill="rgba(0,0,0,0.2)" />

      {/* Building main structure */}
      <rect x="5" y="25" width="70" height="55" fill="url(#shopWallGradient)" />
      {/* Building side shadow */}
      <rect x="60" y="25" width="15" height="55" fill="rgba(0,0,0,0.08)" />

      {/* Awning base */}
      <path d="M0 25 L40 10 L80 25 L80 35 L0 35 Z" fill="url(#shopAwningGradient)" />

      {/* Awning stripes */}
      <rect x="0" y="25" width="10" height="10" fill="url(#shopStripeGradient)" />
      <rect x="20" y="25" width="10" height="10" fill="url(#shopStripeGradient)" />
      <rect x="40" y="25" width="10" height="10" fill="url(#shopStripeGradient)" />
      <rect x="60" y="25" width="10" height="10" fill="url(#shopStripeGradient)" />

      {/* Awning scalloped edge */}
      <path d="M0 35 Q5 38 10 35 Q15 38 20 35 Q25 38 30 35 Q35 38 40 35 Q45 38 50 35 Q55 38 60 35 Q65 38 70 35 Q75 38 80 35"
            fill="none" stroke={color} strokeWidth="2" />

      {/* Awning shadow on wall */}
      <rect x="5" y="35" width="70" height="5" fill="rgba(0,0,0,0.15)" />

      {/* Display window with frame */}
      <rect x="10" y="40" width="25" height="25" fill="url(#shopWindowGradient)" />
      <rect x="10" y="40" width="25" height="25" stroke="#4A3A2A" strokeWidth="2" fill="none" />
      {/* Window dividers */}
      <line x1="22.5" y1="40" x2="22.5" y2="65" stroke="#4A3A2A" strokeWidth="1" />
      <line x1="10" y1="52.5" x2="35" y2="52.5" stroke="#4A3A2A" strokeWidth="1" />
      {/* Window reflection */}
      <rect x="11" y="41" width="8" height="10" fill="white" opacity="0.25" />

      {/* Items in display window */}
      <rect x="13" y="55" width="6" height="8" fill="#FF6B6B" rx="1" />
      <rect x="21" y="56" width="5" height="7" fill="#4ECDC4" rx="1" />
      <circle cx="30" cy="59" r="4" fill="#FFE66D" />

      {/* Door with panels */}
      <rect x="45" y="40" width="25" height="40" fill="url(#shopDoorGradient)" rx="1" />
      {/* Door panels */}
      <rect x="48" y="43" width="8" height="12" fill="#5B3413" rx="1" />
      <rect x="59" y="43" width="8" height="12" fill="#5B3413" rx="1" />
      <rect x="48" y="58" width="8" height="18" fill="#5B3413" rx="1" />
      <rect x="59" y="58" width="8" height="18" fill="#5B3413" rx="1" />

      {/* Door window */}
      <rect x="50" y="45" width="15" height="8" fill="url(#shopWindowGradient)" rx="1" />
      <rect x="51" y="46" width="4" height="3" fill="white" opacity="0.2" />

      {/* Door handle */}
      <circle cx="67" cy="60" r="3.5" fill="url(#shopHandleGradient)" />
      <circle cx="67" cy="60" r="2" fill="#8B6914" />

      {/* Sign board */}
      <rect x="15" y="12" width="50" height="12" fill="url(#shopSignGradient)" rx="2" />
      {/* Sign text placeholder (decorative lines) */}
      <line x1="20" y1="18" x2="60" y2="18" stroke="#888" strokeWidth="2" />
      <line x1="25" y1="21" x2="55" y2="21" stroke="#666" strokeWidth="1" />

      {/* Sign mounting brackets */}
      <rect x="18" y="10" width="3" height="5" fill="#555" />
      <rect x="59" y="10" width="3" height="5" fill="#555" />

      {/* Flower box under display window */}
      <rect x="8" y="65" width="29" height="6" fill="#6B4020" />
      <ellipse cx="14" cy="65" rx="4" ry="3" fill="#228B22" />
      <ellipse cx="22" cy="64" rx="3" ry="3" fill="#228B22" />
      <ellipse cx="30" cy="65" rx="4" ry="3" fill="#228B22" />
      {/* Flowers */}
      <circle cx="14" cy="62" r="2" fill="#FF69B4" />
      <circle cx="22" cy="61" r="1.5" fill="#FFD700" />
      <circle cx="30" cy="62" r="2" fill="#FF6B6B" />

      {/* Welcome mat */}
      <rect x="47" y="78" width="21" height="2" fill="#8B6914" rx="0.5" />

      {/* Light fixtures */}
      <rect x="3" y="30" width="3" height="6" fill="#333" />
      <circle cx="4.5" cy="38" r="2" fill="#FFFFCC" opacity="0.8" />
      <rect x="74" y="30" width="3" height="6" fill="#333" />
      <circle cx="75.5" cy="38" r="2" fill="#FFFFCC" opacity="0.8" />
    </svg>
  );
}
