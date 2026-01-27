/**
 * Sailboat Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function Sailboat({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Mast gradient */}
        <linearGradient id="sailboatMastGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
        {/* Main sail gradient */}
        <linearGradient id="sailboatMainSailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </linearGradient>
        {/* Jib sail gradient */}
        <linearGradient id="sailboatJibGradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF7F50" />
          <stop offset="50%" stopColor="#FF6347" />
          <stop offset="100%" stopColor="#CD5C5C" />
        </linearGradient>
        {/* Hull gradient */}
        <linearGradient id="sailboatHullGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
        {/* Water gradient */}
        <linearGradient id="sailboatWaterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4169E1" />
          <stop offset="100%" stopColor="#1E90FF" />
        </linearGradient>
        {/* Sky reflection on water */}
        <radialGradient id="sailboatWaterReflection" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4169E1" stopOpacity="0.3" />
        </radialGradient>
      </defs>

      {/* Water reflection/wake */}
      <ellipse cx="32" cy="58" rx="30" ry="5" fill="url(#sailboatWaterGradient)" opacity="0.6" />
      <ellipse cx="32" cy="58" rx="26" ry="3" fill="url(#sailboatWaterReflection)" />

      {/* Mast */}
      <rect x="30" y="10" width="4" height="40" fill="url(#sailboatMastGradient)" />
      {/* Mast highlight */}
      <rect x="30" y="10" width="1.5" height="40" fill="#C4A484" opacity="0.5" />
      {/* Mast top ornament */}
      <circle cx="32" cy="10" r="2" fill="#FFD700" />

      {/* Main sail */}
      <polygon points="34,12 34,44 58,44" fill="url(#sailboatMainSailGradient)" stroke="#CCC" strokeWidth="0.5" />
      {/* Sail seams */}
      <line x1="34" y1="20" x2="50" y2="44" stroke="#DDD" strokeWidth="0.5" />
      <line x1="34" y1="28" x2="42" y2="44" stroke="#DDD" strokeWidth="0.5" />
      {/* Sail shadow */}
      <polygon points="34,38 34,44 50,44" fill="#AAA" opacity="0.2" />

      {/* Jib sail (front) */}
      <polygon points="30,16 30,40 10,40" fill="url(#sailboatJibGradient)" stroke="#DDD" strokeWidth="0.5" />
      {/* Jib highlight */}
      <polygon points="30,18 30,30 20,30" fill="#FF9988" opacity="0.3" />

      {/* Hull */}
      <path d="M8 48 Q16 40 32 44 Q48 40 56 48 L60 54 Q32 60 4 54 Z" fill="url(#sailboatHullGradient)" />
      {/* Hull highlight */}
      <path d="M10 48 Q18 42 32 45 Q38 43 42 44" stroke="#C4A484" strokeWidth="1" fill="none" opacity="0.6" />
      {/* Hull stripe */}
      <path d="M12 50 Q32 54 52 50" stroke="#654321" strokeWidth="1.5" fill="none" />

      {/* Porthole */}
      <circle cx="32" cy="49" r="2.5" fill="#87CEEB" stroke="#654321" strokeWidth="0.5" />
      <circle cx="31" cy="48" r="0.8" fill="white" opacity="0.6" />

      {/* Railing posts */}
      <rect x="20" y="42" width="1" height="6" fill="#654321" />
      <rect x="44" y="42" width="1" height="6" fill="#654321" />
    </svg>
  );
}
