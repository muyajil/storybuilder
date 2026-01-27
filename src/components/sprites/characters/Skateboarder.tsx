/**
 * Skateboarder Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function Skateboarder({ size = 64, color = '#FF6347' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Helmet gradient */}
        <radialGradient id="skaterHelmetGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="70%" stopColor="#333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Skin gradient */}
        <radialGradient id="skaterSkinGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="70%" stopColor="#FFDAB9" />
          <stop offset="100%" stopColor="#DEB887" />
        </radialGradient>
        {/* Shirt gradient */}
        <linearGradient id="skaterShirtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7F6B" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#E5533D" />
        </linearGradient>
        {/* Jeans gradient */}
        <linearGradient id="skaterJeansGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5B7BB5" />
          <stop offset="30%" stopColor="#4169E1" />
          <stop offset="70%" stopColor="#4169E1" />
          <stop offset="100%" stopColor="#2E4A8E" />
        </linearGradient>
        {/* Skateboard deck gradient */}
        <linearGradient id="skaterBoardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
        {/* Wheel gradient */}
        <radialGradient id="skaterWheelGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#555" />
          <stop offset="70%" stopColor="#333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
      </defs>

      {/* Helmet */}
      <ellipse cx="32" cy="12" rx="13" ry="9" fill="url(#skaterHelmetGradient)" />
      {/* Helmet vents */}
      <ellipse cx="26" cy="10" rx="2" ry="1" fill="#555" />
      <ellipse cx="32" cy="8" rx="2" ry="1" fill="#555" />
      <ellipse cx="38" cy="10" rx="2" ry="1" fill="#555" />
      {/* Helmet shine */}
      <ellipse cx="28" cy="9" rx="4" ry="2" fill="#555" opacity="0.4" />

      {/* Head */}
      <circle cx="32" cy="17" r="8" fill="url(#skaterSkinGradient)" />

      {/* Eyes */}
      <ellipse cx="29" cy="16" rx="2.5" ry="2" fill="white" />
      <ellipse cx="35" cy="16" rx="2.5" ry="2" fill="white" />
      <circle cx="29" cy="16" r="1.5" fill="black" />
      <circle cx="35" cy="16" r="1.5" fill="black" />
      <circle cx="28.5" cy="15.5" r="0.5" fill="white" />
      <circle cx="34.5" cy="15.5" r="0.5" fill="white" />

      {/* Excited smile */}
      <path d="M28 20 Q32 24 36 20" stroke="#8B4513" strokeWidth="1.5" fill="none" />

      {/* T-Shirt */}
      <rect x="24" y="24" width="16" height="14" fill="url(#skaterShirtGradient)" rx="2" />
      {/* Shirt graphic */}
      <polygon points="32,27 28,33 36,33" fill="white" opacity="0.8" />

      {/* Arms stretched for balance */}
      <path d="M24 28 L8 22" stroke="url(#skaterShirtGradient)" strokeWidth="6" strokeLinecap="round" />
      <path d="M40 28 L56 22" stroke="url(#skaterShirtGradient)" strokeWidth="6" strokeLinecap="round" />
      {/* Arm highlights */}
      <path d="M24 27 L10 21" stroke="#FF8866" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M40 27 L54 21" stroke="#FF8866" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

      {/* Hands */}
      <circle cx="7" cy="22" r="4" fill="url(#skaterSkinGradient)" />
      <circle cx="57" cy="22" r="4" fill="url(#skaterSkinGradient)" />
      {/* Fingers spread for balance */}
      <circle cx="4" cy="20" r="1.5" fill="#FFDAB9" />
      <circle cx="60" cy="20" r="1.5" fill="#FFDAB9" />

      {/* Jeans/Shorts */}
      <rect x="24" y="38" width="16" height="10" fill="url(#skaterJeansGradient)" />
      {/* Pocket detail */}
      <path d="M26 40 L26 44 L30 44" stroke="#2E4A8E" strokeWidth="0.5" fill="none" />

      {/* Bent legs */}
      <rect x="24" y="46" width="6" height="9" fill="url(#skaterJeansGradient)" rx="2" />
      <rect x="34" y="46" width="6" height="9" fill="url(#skaterJeansGradient)" rx="2" />

      {/* Shoes */}
      <rect x="23" y="53" width="8" height="4" fill="#333" rx="1" />
      <rect x="33" y="53" width="8" height="4" fill="#333" rx="1" />
      {/* Shoe details */}
      <rect x="23" y="54" width="8" height="1" fill="#555" />
      <rect x="33" y="54" width="8" height="1" fill="#555" />

      {/* Skateboard deck */}
      <rect x="10" y="56" width="44" height="5" fill="url(#skaterBoardGradient)" rx="3" />
      {/* Deck graphic */}
      <rect x="20" y="57" width="24" height="3" fill="#FF6347" opacity="0.5" rx="1" />
      {/* Grip tape texture */}
      <rect x="12" y="56" width="40" height="1" fill="#1a1a1a" opacity="0.3" />

      {/* Trucks */}
      <rect x="15" y="60" width="8" height="2" fill="#C0C0C0" />
      <rect x="41" y="60" width="8" height="2" fill="#C0C0C0" />

      {/* Wheels */}
      <circle cx="17" cy="63" r="3.5" fill="url(#skaterWheelGradient)" />
      <circle cx="47" cy="63" r="3.5" fill="url(#skaterWheelGradient)" />
      {/* Wheel bearings */}
      <circle cx="17" cy="63" r="1.5" fill="#888" />
      <circle cx="47" cy="63" r="1.5" fill="#888" />

      {/* Motion lines */}
      <line x1="2" y1="58" x2="6" y2="58" stroke="#999" strokeWidth="1" opacity="0.5" />
      <line x1="0" y1="60" x2="5" y2="60" stroke="#999" strokeWidth="1" opacity="0.4" />
      <line x1="1" y1="62" x2="4" y2="62" stroke="#999" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}
