/**
 * UFO Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function UFO({ size = 64, color = '#C0C0C0' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Saucer body gradient */}
        <linearGradient id="ufoBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#808080" />
        </linearGradient>
        {/* Dome gradient */}
        <radialGradient id="ufoDomeGradient" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#B0E0FF" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#4682B4" />
        </radialGradient>
        {/* Inner dome gradient */}
        <radialGradient id="ufoInnerDomeGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#E0FFFF" />
          <stop offset="50%" stopColor="#ADD8E6" />
          <stop offset="100%" stopColor="#87CEEB" />
        </radialGradient>
        {/* Light gradients */}
        <radialGradient id="ufoGoldLightGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFFF66" />
          <stop offset="70%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
        <radialGradient id="ufoRedLightGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FF6666" />
          <stop offset="70%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#CC0000" />
        </radialGradient>
        <radialGradient id="ufoGreenLightGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#66FF66" />
          <stop offset="70%" stopColor="#00FF00" />
          <stop offset="100%" stopColor="#00CC00" />
        </radialGradient>
        <radialGradient id="ufoBlueLightGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#6666FF" />
          <stop offset="70%" stopColor="#0000FF" />
          <stop offset="100%" stopColor="#0000CC" />
        </radialGradient>
        {/* Beam gradient */}
        <linearGradient id="ufoBeamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#ADD8E6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#B0E0FF" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Tractor beam */}
      <path d="M26 42 L20 62 M38 42 L44 62" stroke="url(#ufoBeamGradient)" strokeWidth="4" />
      <path d="M30 42 L26 58 M34 42 L38 58" stroke="#87CEEB" strokeWidth="2" opacity="0.3" />
      {/* Beam glow */}
      <ellipse cx="32" cy="56" rx="14" ry="6" fill="#87CEEB" opacity="0.15" />

      {/* Main saucer body */}
      <ellipse cx="32" cy="32" rx="30" ry="10" fill="url(#ufoBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="32" cy="28" rx="24" ry="6" fill="white" opacity="0.2" />
      {/* Body rim */}
      <ellipse cx="32" cy="32" rx="30" ry="10" fill="none" stroke="#888" strokeWidth="1" />
      {/* Body details */}
      <ellipse cx="32" cy="34" rx="26" ry="6" fill="none" stroke="#999" strokeWidth="0.5" strokeDasharray="4,2" />

      {/* Dome - outer */}
      <ellipse cx="32" cy="28" rx="17" ry="13" fill="url(#ufoDomeGradient)" />
      {/* Dome - inner */}
      <ellipse cx="32" cy="24" rx="13" ry="9" fill="url(#ufoInnerDomeGradient)" />
      {/* Dome highlight */}
      <ellipse cx="26" cy="20" rx="5" ry="4" fill="white" opacity="0.4" />
      {/* Dome frame */}
      <ellipse cx="32" cy="28" rx="17" ry="13" fill="none" stroke="#4682B4" strokeWidth="1" />

      {/* Alien eyes inside dome */}
      <ellipse cx="28" cy="22" rx="3" ry="4" fill="#1a1a1a" opacity="0.6" />
      <ellipse cx="36" cy="22" rx="3" ry="4" fill="#1a1a1a" opacity="0.6" />
      {/* Eye shine */}
      <circle cx="27" cy="21" r="1" fill="#333" opacity="0.4" />
      <circle cx="35" cy="21" r="1" fill="#333" opacity="0.4" />

      {/* Running lights around rim */}
      <circle cx="8" cy="34" r="3.5" fill="url(#ufoGoldLightGradient)" />
      <circle cx="8" cy="34" r="5" fill="#FFD700" opacity="0.3" />

      <circle cx="20" cy="38" r="3.5" fill="url(#ufoRedLightGradient)" />
      <circle cx="20" cy="38" r="5" fill="#FF0000" opacity="0.3" />

      <circle cx="32" cy="40" r="3.5" fill="url(#ufoGreenLightGradient)" />
      <circle cx="32" cy="40" r="5" fill="#00FF00" opacity="0.3" />

      <circle cx="44" cy="38" r="3.5" fill="url(#ufoBlueLightGradient)" />
      <circle cx="44" cy="38" r="5" fill="#0000FF" opacity="0.3" />

      <circle cx="56" cy="34" r="3.5" fill="url(#ufoGoldLightGradient)" />
      <circle cx="56" cy="34" r="5" fill="#FFD700" opacity="0.3" />

      {/* Panel details */}
      <rect x="14" y="30" width="4" height="2" fill="#888" rx="0.5" />
      <rect x="46" y="30" width="4" height="2" fill="#888" rx="0.5" />
    </svg>
  );
}
