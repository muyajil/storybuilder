/**
 * Farmer Sprite Component
 * Enhanced with gradients, detailed clothing, and expressive features
 */

import type { SpriteProps } from '../types';

export function Farmer({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Skin gradient */}
        <radialGradient id="farmerSkinGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#D4A574" />
        </radialGradient>
        {/* Straw hat gradient */}
        <linearGradient id="farmerHatGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5DEB3" />
          <stop offset="50%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Shirt gradient */}
        <linearGradient id="farmerShirtGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#5C3317" />
        </linearGradient>
        {/* Overalls gradient */}
        <linearGradient id="farmerOverallsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5B7BC0" />
          <stop offset="50%" stopColor="#4169E1" />
          <stop offset="100%" stopColor="#2E4A8A" />
        </linearGradient>
        {/* Boot gradient */}
        <linearGradient id="farmerBootGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#5C3317" />
        </linearGradient>
      </defs>

      {/* Straw Hat - brim */}
      <ellipse cx="32" cy="8" rx="16" ry="5" fill="url(#farmerHatGradient)" />
      {/* Hat crown */}
      <ellipse cx="32" cy="6" rx="11" ry="8" fill="url(#farmerHatGradient)" />
      {/* Hat band */}
      <ellipse cx="32" cy="10" rx="11" ry="2" fill="#8B0000" />
      {/* Hat texture */}
      <path d="M22 4 Q27 2 32 4 Q37 2 42 4" stroke="#B8860B" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M24 6 Q32 4 40 6" stroke="#B8860B" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Head */}
      <circle cx="32" cy="18" r="10" fill="url(#farmerSkinGradient)" />

      {/* Friendly eyebrows */}
      <path d="M26 13 Q28 12 30 14" stroke="#8B4513" strokeWidth="1" fill="none" />
      <path d="M34 14 Q36 12 38 13" stroke="#8B4513" strokeWidth="1" fill="none" />

      {/* Kind eyes */}
      <ellipse cx="28" cy="16" rx="2" ry="2.2" fill="#4A4A4A" />
      <ellipse cx="36" cy="16" rx="2" ry="2.2" fill="#4A4A4A" />
      <circle cx="27.5" cy="15.5" r="0.8" fill="white" />
      <circle cx="35.5" cy="15.5" r="0.8" fill="white" />

      {/* Rosy sun-kissed cheeks */}
      <circle cx="24" cy="20" r="2" fill="#E8A0A0" opacity="0.4" />
      <circle cx="40" cy="20" r="2" fill="#E8A0A0" opacity="0.4" />

      {/* Warm smile */}
      <path d="M28 22 Q32 26 36 22" stroke="#8B4513" strokeWidth="1.2" fill="none" />

      {/* Plaid Shirt */}
      <rect x="22" y="28" width="20" height="20" fill="url(#farmerShirtGradient)" rx="2" />
      {/* Plaid pattern */}
      <line x1="27" y1="28" x2="27" y2="48" stroke="#6B3A1F" strokeWidth="1" opacity="0.3" />
      <line x1="32" y1="28" x2="32" y2="48" stroke="#6B3A1F" strokeWidth="1" opacity="0.3" />
      <line x1="37" y1="28" x2="37" y2="48" stroke="#6B3A1F" strokeWidth="1" opacity="0.3" />
      <line x1="22" y1="34" x2="42" y2="34" stroke="#6B3A1F" strokeWidth="1" opacity="0.3" />
      <line x1="22" y1="40" x2="42" y2="40" stroke="#6B3A1F" strokeWidth="1" opacity="0.3" />

      {/* Collar */}
      <path d="M28 28 L32 34 L36 28" fill="none" stroke="url(#farmerShirtGradient)" strokeWidth="2" />

      {/* Overalls bib */}
      <rect x="26" y="32" width="12" height="16" fill="url(#farmerOverallsGradient)" rx="1" />
      {/* Overalls straps */}
      <rect x="26" y="28" width="3" height="8" fill="url(#farmerOverallsGradient)" />
      <rect x="35" y="28" width="3" height="8" fill="url(#farmerOverallsGradient)" />
      {/* Pocket */}
      <rect x="28" y="38" width="8" height="6" fill="#3458A0" rx="1" />
      <line x1="32" y1="38" x2="32" y2="44" stroke="#2E4A8A" strokeWidth="0.5" />
      {/* Buttons */}
      <circle cx="27" cy="33" r="1.2" fill="#C0C0C0" />
      <circle cx="37" cy="33" r="1.2" fill="#C0C0C0" />

      {/* Sleeves */}
      <rect x="10" y="30" width="12" height="5" fill="url(#farmerShirtGradient)" rx="2" />
      <rect x="42" y="30" width="12" height="5" fill="url(#farmerShirtGradient)" rx="2" />

      {/* Work-worn hands */}
      <circle cx="10" cy="32" r="4" fill="url(#farmerSkinGradient)" />
      <circle cx="54" cy="32" r="4" fill="url(#farmerSkinGradient)" />
      {/* Fingers */}
      <circle cx="7" cy="33" r="1.5" fill="url(#farmerSkinGradient)" />
      <circle cx="57" cy="33" r="1.5" fill="url(#farmerSkinGradient)" />

      {/* Overalls legs */}
      <rect x="24" y="48" width="6" height="14" fill="url(#farmerOverallsGradient)" rx="1" />
      <rect x="34" y="48" width="6" height="14" fill="url(#farmerOverallsGradient)" rx="1" />
      {/* Leg seams */}
      <line x1="27" y1="48" x2="27" y2="62" stroke="#2E4A8A" strokeWidth="0.5" />
      <line x1="37" y1="48" x2="37" y2="62" stroke="#2E4A8A" strokeWidth="0.5" />

      {/* Sturdy work boots */}
      <ellipse cx="27" cy="62" rx="6" ry="3" fill="url(#farmerBootGradient)" />
      <ellipse cx="37" cy="62" rx="6" ry="3" fill="url(#farmerBootGradient)" />
      {/* Boot details */}
      <ellipse cx="27" cy="60" rx="5" ry="2" fill="#6B3A1F" />
      <ellipse cx="37" cy="60" rx="5" ry="2" fill="#6B3A1F" />
      {/* Boot soles */}
      <rect x="22" y="62" width="10" height="2" fill="#3D2410" rx="1" />
      <rect x="32" y="62" width="10" height="2" fill="#3D2410" rx="1" />
    </svg>
  );
}
