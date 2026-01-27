/**
 * MountainClimber Sprite Component
 * Enhanced with gradients, detailed gear, and expressive features
 */

import type { SpriteProps } from '../types';

export function MountainClimber({ size = 64, color = '#FF4500' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Helmet gradient */}
        <linearGradient id="mountainClimberHelmetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6633" />
          <stop offset="50%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
        {/* Skin gradient */}
        <linearGradient id="mountainClimberSkinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </linearGradient>
        {/* Jacket gradient */}
        <linearGradient id="mountainClimberJacketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6633" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#CC3300" />
        </linearGradient>
        {/* Harness gradient */}
        <linearGradient id="mountainClimberHarnessGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Pants gradient */}
        <linearGradient id="mountainClimberPantsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="50%" stopColor="#333333" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        {/* Boot gradient */}
        <linearGradient id="mountainClimberBootGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#5C3317" />
        </linearGradient>
        {/* Metal gradient */}
        <linearGradient id="mountainClimberMetalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0E0E0" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#909090" />
        </linearGradient>
        {/* Glove gradient */}
        <linearGradient id="mountainClimberGloveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#333333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
      </defs>

      {/* Helmet / Helm */}
      <ellipse cx="32" cy="6" rx="9" ry="5" fill="url(#mountainClimberHelmetGradient)" />
      <ellipse cx="32" cy="5" rx="7" ry="3" fill="#FF6633" opacity="0.4" />
      {/* Helmet vent */}
      <ellipse cx="32" cy="4" rx="3" ry="1" fill="#CC0000" />
      {/* Helmet strap */}
      <path d="M24 8 Q24 14 28 16" stroke="#333333" strokeWidth="1" fill="none" />
      <path d="M40 8 Q40 14 36 16" stroke="#333333" strokeWidth="1" fill="none" />

      {/* Head / Kopf */}
      <circle cx="32" cy="14" r="9" fill="url(#mountainClimberSkinGradient)" />

      {/* Face highlight */}
      <ellipse cx="30" cy="12" rx="4" ry="3" fill="#FFF5E6" opacity="0.3" />

      {/* Goggles */}
      <rect x="24" y="10" width="16" height="5" fill="#333333" rx="2" />
      <rect x="25" y="11" width="6" height="3" fill="#87CEEB" rx="1" />
      <rect x="33" y="11" width="6" height="3" fill="#87CEEB" rx="1" />
      <rect x="31" y="11" width="2" height="3" fill="#333333" />

      {/* Nose */}
      <ellipse cx="32" cy="16" rx="1.5" ry="1" fill="#EEB89B" />

      {/* Smile */}
      <path d="M29 18 Q32 21 35 18" stroke="#333333" strokeWidth="1" fill="none" />

      {/* Rosy cheeks from cold */}
      <circle cx="26" cy="16" r="2" fill="#FF6B6B" opacity="0.4" />
      <circle cx="38" cy="16" r="2" fill="#FF6B6B" opacity="0.4" />

      {/* Jacket / Jacke */}
      <rect x="23" y="22" width="18" height="19" fill="url(#mountainClimberJacketGradient)" rx="3" />

      {/* Jacket details */}
      <rect x="23" y="22" width="6" height="19" fill="#CC3300" opacity="0.3" rx="3" />

      {/* Zipper */}
      <line x1="32" y1="24" x2="32" y2="40" stroke="#FFD700" strokeWidth="1" />

      {/* Harness / Klettergurt */}
      <rect x="26" y="24" width="12" height="7" fill="url(#mountainClimberHarnessGradient)" rx="1" />
      <rect x="28" y="25" width="8" height="5" fill="#CC3300" rx="1" />
      {/* Harness buckle */}
      <rect x="30" y="26" width="4" height="3" fill="url(#mountainClimberMetalGradient)" rx="0.5" />

      {/* Carabiner on harness */}
      <ellipse cx="24" cy="30" rx="2" ry="3" fill="none" stroke="url(#mountainClimberMetalGradient)" strokeWidth="2" />

      {/* Arms / Arme */}
      <rect x="7" y="24" width="16" height="5" fill="url(#mountainClimberJacketGradient)" rx="2" />
      <rect x="41" y="24" width="16" height="5" fill="url(#mountainClimberJacketGradient)" rx="2" />

      {/* Gloves / Handschuhe */}
      <circle cx="7" cy="26" r="4" fill="url(#mountainClimberGloveGradient)" />
      <circle cx="57" cy="26" r="4" fill="url(#mountainClimberGloveGradient)" />

      {/* Grip highlights */}
      <circle cx="6" cy="25" r="1" fill="#4A4A4A" />
      <circle cx="56" cy="25" r="1" fill="#4A4A4A" />

      {/* Pants / Hose */}
      <rect x="25" y="40" width="5" height="15" fill="url(#mountainClimberPantsGradient)" rx="2" />
      <rect x="34" y="40" width="5" height="15" fill="url(#mountainClimberPantsGradient)" rx="2" />

      {/* Knee pads */}
      <ellipse cx="27.5" cy="48" rx="3" ry="2" fill="#4A4A4A" />
      <ellipse cx="36.5" cy="48" rx="3" ry="2" fill="#4A4A4A" />

      {/* Boots / Stiefel */}
      <ellipse cx="27" cy="55" rx="5" ry="4" fill="url(#mountainClimberBootGradient)" />
      <ellipse cx="37" cy="55" rx="5" ry="4" fill="url(#mountainClimberBootGradient)" />

      {/* Boot soles with grip */}
      <rect x="23" y="57" width="8" height="2" fill="#1A1A1A" rx="1" />
      <rect x="33" y="57" width="8" height="2" fill="#1A1A1A" rx="1" />

      {/* Ice axe / Eispickel */}
      <rect x="16" y="36" width="3" height="24" fill="url(#mountainClimberMetalGradient)" />
      {/* Axe head */}
      <polygon points="12,36 22,36 17,32" fill="url(#mountainClimberMetalGradient)" />
      {/* Axe spike */}
      <polygon points="17,60 19,60 18,64" fill="url(#mountainClimberMetalGradient)" />
      {/* Axe grip */}
      <rect x="15" y="42" width="5" height="6" fill="#FF4500" rx="1" />

      {/* Rope coil on back */}
      <ellipse cx="44" cy="32" rx="4" ry="6" fill="none" stroke="#FFD700" strokeWidth="2" />
      <ellipse cx="45" cy="32" rx="3" ry="5" fill="none" stroke="#DAA520" strokeWidth="1" />

      {/* Backpack hint */}
      <rect x="38" y="24" width="6" height="12" fill="#CC3300" rx="2" />
      <rect x="39" y="25" width="4" height="3" fill="#FF4500" opacity="0.5" rx="1" />
    </svg>
  );
}
