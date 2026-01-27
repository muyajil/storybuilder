/**
 * Rock Sprite Component
 * Enhanced with stone texture, moss details, weathering effects, and depth
 */

import type { ElementProps } from '../types';

export function Rock({ x = 0, y = 0, size = 40, color = '#808080' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 40 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main rock gradient */}
        <radialGradient id="rockMainGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0A0A0" />
          <stop offset="40%" stopColor={color} />
          <stop offset="80%" stopColor="#606060" />
          <stop offset="100%" stopColor="#404040" />
        </radialGradient>

        {/* Secondary rock gradient */}
        <radialGradient id="rockSecondaryGradient" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#B0B0B0" />
          <stop offset="50%" stopColor="#909090" />
          <stop offset="100%" stopColor="#505050" />
        </radialGradient>

        {/* Tertiary rock gradient */}
        <radialGradient id="rockTertiaryGradient" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#959595" />
          <stop offset="50%" stopColor="#757575" />
          <stop offset="100%" stopColor="#454545" />
        </radialGradient>

        {/* Stone texture pattern */}
        <pattern id="rockTexturePattern" patternUnits="userSpaceOnUse" width="8" height="8">
          <rect width="8" height="8" fill="transparent" />
          <circle cx="2" cy="2" r="0.5" fill="#555" opacity="0.3" />
          <circle cx="6" cy="5" r="0.3" fill="#777" opacity="0.2" />
          <circle cx="4" cy="7" r="0.4" fill="#555" opacity="0.25" />
        </pattern>

        {/* Moss gradient */}
        <linearGradient id="rockMossGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A7A4A" />
          <stop offset="100%" stopColor="#2A5A2A" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="20" cy="23" rx="18" ry="3" fill="rgba(0,0,0,0.2)" />

      {/* Back rock section */}
      <ellipse cx="20" cy="16" rx="18" ry="8" fill="url(#rockMainGradient)" />

      {/* Texture overlay on main rock */}
      <ellipse cx="20" cy="16" rx="18" ry="8" fill="url(#rockTexturePattern)" opacity="0.5" />

      {/* Left rock section */}
      <ellipse cx="14" cy="12" rx="10" ry="8" fill="url(#rockSecondaryGradient)" />
      <ellipse cx="14" cy="12" rx="10" ry="8" fill="url(#rockTexturePattern)" opacity="0.4" />

      {/* Right rock section */}
      <ellipse cx="28" cy="14" rx="8" ry="6" fill="url(#rockTertiaryGradient)" />
      <ellipse cx="28" cy="14" rx="8" ry="6" fill="url(#rockTexturePattern)" opacity="0.4" />

      {/* Cracks and crevices */}
      <path d="M12 10 Q14 13 13 16" stroke="#404040" strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M22 12 L24 15 L23 18" stroke="#505050" strokeWidth="0.4" fill="none" opacity="0.5" />
      <path d="M8 14 Q10 15 9 17" stroke="#404040" strokeWidth="0.3" fill="none" opacity="0.5" />

      {/* Weathering marks */}
      <ellipse cx="16" cy="14" rx="2" ry="1" fill="#606060" opacity="0.4" />
      <ellipse cx="25" cy="11" rx="1.5" ry="0.8" fill="#707070" opacity="0.3" />

      {/* Moss patches */}
      <ellipse cx="8" cy="16" rx="3" ry="1.5" fill="url(#rockMossGradient)" opacity="0.6" />
      <ellipse cx="18" cy="19" rx="2.5" ry="1" fill="url(#rockMossGradient)" opacity="0.5" />
      <ellipse cx="30" cy="17" rx="2" ry="1" fill="url(#rockMossGradient)" opacity="0.4" />

      {/* Highlight reflections */}
      <ellipse cx="11" cy="9" rx="3" ry="1.5" fill="white" opacity="0.2" />
      <ellipse cx="26" cy="10" rx="2" ry="1" fill="white" opacity="0.15" />
      <ellipse cx="18" cy="7" rx="2.5" ry="1" fill="white" opacity="0.1" />

      {/* Small detail pebbles */}
      <circle cx="5" cy="20" r="1.5" fill="#707070" />
      <circle cx="35" cy="19" r="1" fill="#606060" />
      <circle cx="32" cy="21" r="0.8" fill="#555555" />

      {/* Edge definition */}
      <path d="M2 16 Q10 8 20 8 Q30 8 38 16" stroke="#404040" strokeWidth="0.5" fill="none" opacity="0.3" />
    </svg>
  );
}
