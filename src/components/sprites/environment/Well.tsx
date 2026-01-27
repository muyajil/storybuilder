/**
 * Well Sprite Component
 * High quality with stone texture, wooden details, and water reflections
 */

import type { ElementProps } from '../types';

export function Well({ x = 0, y = 0, size = 50, color = '#696969' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Stone wall gradient */}
        <linearGradient id="wellStoneGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="25%" stopColor="#5a5a5a" />
          <stop offset="50%" stopColor={color} />
          <stop offset="75%" stopColor="#5a5a5a" />
          <stop offset="100%" stopColor="#4a4a4a" />
        </linearGradient>
        {/* Stone top rim gradient */}
        <linearGradient id="wellRimGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7a7a7a" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#4a4a4a" />
        </linearGradient>
        {/* Inner well shadow */}
        <radialGradient id="wellInnerGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="70%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#4a4a4a" />
        </radialGradient>
        {/* Water gradient */}
        <radialGradient id="wellWaterGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#6090E0" />
          <stop offset="50%" stopColor="#4169E1" />
          <stop offset="100%" stopColor="#2050A0" />
        </radialGradient>
        {/* Wood gradient */}
        <linearGradient id="wellWoodGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5D3000" />
          <stop offset="30%" stopColor="#8B4513" />
          <stop offset="70%" stopColor="#7A4010" />
          <stop offset="100%" stopColor="#5D3000" />
        </linearGradient>
        {/* Roof gradient */}
        <linearGradient id="wellRoofGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#5D3000" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#A05520" />
        </linearGradient>
        {/* Rope gradient */}
        <linearGradient id="wellRopeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B7355" />
          <stop offset="50%" stopColor="#C0A080" />
          <stop offset="100%" stopColor="#8B7355" />
        </linearGradient>
        {/* Stone pattern */}
        <pattern id="wellStonePattern" width="6" height="5" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="6" height="5" fill="none" />
          <line x1="0" y1="2.5" x2="6" y2="2.5" stroke="#4a4a4a" strokeWidth="0.5" opacity="0.3" />
          <line x1="3" y1="0" x2="3" y2="2.5" stroke="#5a5a5a" strokeWidth="0.3" opacity="0.2" />
        </pattern>
        {/* Bucket metal gradient */}
        <linearGradient id="wellBucketGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#808080" />
          <stop offset="50%" stopColor="#696969" />
          <stop offset="100%" stopColor="#505050" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="25" cy="49" rx="18" ry="3" fill="#000000" opacity="0.2" />

      {/* Well base / Basis */}
      <ellipse cx="25" cy="42" rx="20" ry="8" fill="url(#wellStoneGradient)" />
      <ellipse cx="25" cy="42" rx="20" ry="8" fill="url(#wellStonePattern)" />

      {/* Well wall / Wand */}
      <rect x="5" y="30" width="40" height="14" fill="url(#wellStoneGradient)" />
      <rect x="5" y="30" width="40" height="14" fill="url(#wellStonePattern)" />

      {/* Stone detail lines */}
      <line x1="5" y1="36" x2="45" y2="36" stroke="#4a4a4a" strokeWidth="0.5" opacity="0.4" />
      <line x1="15" y1="30" x2="15" y2="36" stroke="#5a5a5a" strokeWidth="0.3" opacity="0.3" />
      <line x1="25" y1="36" x2="25" y2="44" stroke="#5a5a5a" strokeWidth="0.3" opacity="0.3" />
      <line x1="35" y1="30" x2="35" y2="36" stroke="#5a5a5a" strokeWidth="0.3" opacity="0.3" />

      {/* Well rim / Rand */}
      <ellipse cx="25" cy="30" rx="20" ry="8" fill="url(#wellRimGradient)" />
      <ellipse cx="25" cy="30" rx="18" ry="7" fill="none" stroke="#5a5a5a" strokeWidth="0.5" />

      {/* Inner well / Inneres */}
      <ellipse cx="25" cy="30" rx="16" ry="6" fill="url(#wellInnerGradient)" />

      {/* Water / Wasser */}
      <ellipse cx="25" cy="32" rx="14" ry="5" fill="url(#wellWaterGradient)" />
      {/* Water reflection */}
      <ellipse cx="23" cy="31" rx="5" ry="2" fill="#80B0F0" opacity="0.4" />
      <ellipse cx="28" cy="33" rx="3" ry="1" fill="#FFFFFF" opacity="0.3" />

      {/* Support posts / Stützen */}
      <rect x="7" y="5" width="5" height="28" fill="url(#wellWoodGradient)" rx="1" />
      <line x1="9" y1="5" x2="9" y2="33" stroke="#5D3000" strokeWidth="0.5" opacity="0.4" />
      <rect x="38" y="5" width="5" height="28" fill="url(#wellWoodGradient)" rx="1" />
      <line x1="41" y1="5" x2="41" y2="33" stroke="#5D3000" strokeWidth="0.5" opacity="0.4" />

      {/* Cross beam */}
      <rect x="9" y="6" width="32" height="3" fill="url(#wellWoodGradient)" rx="0.5" />

      {/* Roof / Dach */}
      <polygon points="25,0 3,13 47,13" fill="url(#wellRoofGradient)" />
      {/* Roof shingle lines */}
      <line x1="25" y1="2" x2="8" y2="12" stroke="#4a2a0a" strokeWidth="0.5" opacity="0.3" />
      <line x1="25" y1="2" x2="42" y2="12" stroke="#A06030" strokeWidth="0.3" opacity="0.2" />
      <line x1="25" y1="6" x2="12" y2="12" stroke="#4a2a0a" strokeWidth="0.3" opacity="0.25" />
      <line x1="25" y1="6" x2="38" y2="12" stroke="#A06030" strokeWidth="0.3" opacity="0.2" />

      {/* Pulley wheel / Rolle */}
      <circle cx="25" cy="10" r="3" fill="#5a5a5a" />
      <circle cx="25" cy="10" r="2" fill="#4a4a4a" />
      <circle cx="25" cy="10" r="0.8" fill="#3a3a3a" />

      {/* Rope / Seil */}
      <path d="M25 13 L25 28" stroke="url(#wellRopeGradient)" strokeWidth="2" fill="none" />
      {/* Rope texture */}
      <path d="M24 15 L26 17 M24 19 L26 21 M24 23 L26 25" stroke="#6B5335" strokeWidth="0.5" opacity="0.5" />

      {/* Bucket / Eimer */}
      <path d="M21 26 L21 32 L29 32 L29 26 Q25 25 21 26" fill="url(#wellBucketGradient)" />
      {/* Bucket rim */}
      <ellipse cx="25" cy="26" rx="4" ry="1.5" fill="#7a7a7a" />
      {/* Bucket handle */}
      <path d="M22 26 Q25 23 28 26" stroke="#5a5a5a" strokeWidth="1" fill="none" />
      {/* Bucket detail */}
      <line x1="21" y1="29" x2="29" y2="29" stroke="#5a5a5a" strokeWidth="0.5" opacity="0.4" />

      {/* Crank handle hint */}
      <rect x="43" y="8" width="4" height="2" fill="#5a5a5a" rx="0.5" />
      <circle cx="46" cy="9" r="1.5" fill="#4a4a4a" />
    </svg>
  );
}
