/**
 * Rhino Sprite Component
 * Enhanced with gradients, skin texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Rhino({ size = 64, color = '#696969' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="rhinoBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor="#505050" stopOpacity="1" />
          <stop offset="100%" stopColor="#383838" stopOpacity="1" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="rhinoHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#505050" stopOpacity="1" />
        </radialGradient>
        {/* Horn gradient */}
        <linearGradient id="rhinoHornGradient" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#808080" stopOpacity="1" />
          <stop offset="50%" stopColor="#C0C0C0" stopOpacity="1" />
          <stop offset="100%" stopColor="#A9A9A9" stopOpacity="1" />
        </linearGradient>
        {/* Leg gradient */}
        <linearGradient id="rhinoLegGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#383838" stopOpacity="1" />
        </linearGradient>
        {/* Highlight */}
        <radialGradient id="rhinoHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.15" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Shadow */}
        <radialGradient id="rhinoShadow" cx="50%" cy="70%" r="50%">
          <stop offset="0%" stopColor="#2D2D2D" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#2D2D2D" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Tail */}
      <path d="M6 38 Q2 42 6 46" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M4 44 Q2 48 6 50" stroke="#505050" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Back legs */}
      <rect x="8" y="48" width="10" height="16" rx="4" fill="url(#rhinoLegGradient)" />

      {/* Front legs */}
      <rect x="36" y="48" width="10" height="16" rx="4" fill="url(#rhinoLegGradient)" />

      {/* Hooves */}
      <rect x="8" y="60" width="10" height="4" rx="2" fill="#2D2D2D" />
      <rect x="36" y="60" width="10" height="4" rx="2" fill="#2D2D2D" />

      {/* Body */}
      <ellipse cx="28" cy="38" rx="22" ry="16" fill="url(#rhinoBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="20" cy="30" rx="12" ry="8" fill="url(#rhinoHighlight)" />

      {/* Body shadow */}
      <ellipse cx="28" cy="48" rx="16" ry="6" fill="url(#rhinoShadow)" />

      {/* Skin folds/wrinkles */}
      <path d="M14 34 Q12 38 14 42" stroke="#404040" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M20 32 Q18 38 20 44" stroke="#404040" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M36 34 Q38 38 36 42" stroke="#404040" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Armor plate effect on back */}
      <path d="M16 28 Q28 24 40 28" stroke="#505050" strokeWidth="2" fill="none" opacity="0.3" />

      {/* Head */}
      <ellipse cx="52" cy="34" rx="12" ry="12" fill="url(#rhinoHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="48" cy="28" rx="6" ry="5" fill="url(#rhinoHighlight)" />

      {/* Snout extension */}
      <ellipse cx="60" cy="36" rx="6" ry="8" fill="url(#rhinoHeadGradient)" />

      {/* Main horn */}
      <polygon points="60,28 56,16 64,16" fill="url(#rhinoHornGradient)" />
      <line x1="60" y1="28" x2="60" y2="16" stroke="#D0D0D0" strokeWidth="1" opacity="0.3" />

      {/* Secondary horn */}
      <polygon points="56,32 53,26 59,26" fill="url(#rhinoHornGradient)" />

      {/* Ears */}
      <ellipse cx="46" cy="22" rx="4" ry="6" fill="url(#rhinoHeadGradient)" />
      <ellipse cx="56" cy="22" rx="4" ry="6" fill="url(#rhinoHeadGradient)" />

      {/* Inner ears */}
      <ellipse cx="46" cy="22" rx="2" ry="4" fill="#505050" opacity="0.5" />
      <ellipse cx="56" cy="22" rx="2" ry="4" fill="#505050" opacity="0.5" />

      {/* Eye */}
      <circle cx="50" cy="32" r="3" fill="white" />
      <circle cx="50" cy="32" r="2" fill="#2F1F1F" />
      <circle cx="49" cy="31" r="0.8" fill="white" />

      {/* Nostril */}
      <ellipse cx="62" cy="38" rx="2" ry="1.5" fill="#2D2D2D" />

      {/* Mouth line */}
      <path d="M58 42 Q62 44 64 42" stroke="#404040" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Skin texture dots */}
      <circle cx="26" cy="36" r="1" fill="#505050" opacity="0.3" />
      <circle cx="32" cy="40" r="1" fill="#505050" opacity="0.3" />
      <circle cx="22" cy="42" r="0.8" fill="#505050" opacity="0.3" />
      <circle cx="38" cy="34" r="0.8" fill="#505050" opacity="0.3" />
    </svg>
  );
}
