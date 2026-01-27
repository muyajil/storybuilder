/**
 * Stegosaurus Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function Stegosaurus({ size = 64, color = '#556B2F' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="stegosaurusBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B8B3F" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#3A4B1F" />
        </linearGradient>
        {/* Plate gradient */}
        <linearGradient id="stegosaurusPlateGradient" x1="0%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#6B3503" />
        </linearGradient>
        {/* Tail spike gradient */}
        <linearGradient id="stegosaurusSpikeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#CD853F" />
        </linearGradient>
        {/* Leg gradient */}
        <linearGradient id="stegosaurusLegGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5A7B2F" />
          <stop offset="100%" stopColor="#3A4B1F" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="stegosaurusEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="62" rx="24" ry="3" fill="#000" opacity="0.2" />

      {/* Tail with spikes */}
      <path d="M4 44 Q10 42 16 44" stroke="url(#stegosaurusBodyGradient)" strokeWidth="5" fill="none" strokeLinecap="round" />

      {/* Tail spikes */}
      <polygon points="6,40 4,32 12,40" fill="url(#stegosaurusSpikeGradient)" />
      <polygon points="6,40 5,34 10,39" fill="#CD853F" opacity="0.4" />
      <polygon points="10,40 8,32 16,40" fill="url(#stegosaurusSpikeGradient)" />
      <polygon points="10,40 9,34 14,39" fill="#CD853F" opacity="0.4" />

      {/* Body */}
      <ellipse cx="32" cy="44" rx="18" ry="10" fill="url(#stegosaurusBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="40" rx="10" ry="5" fill="#6B8B3F" opacity="0.4" />

      {/* Belly */}
      <ellipse cx="32" cy="48" rx="14" ry="5" fill="#7B9B4F" opacity="0.3" />

      {/* Back plates - from back to front */}
      <polygon points="20,34 18,22 26,34" fill="url(#stegosaurusPlateGradient)" />
      <polygon points="20,34 19,26 24,33" fill="#A0522D" opacity="0.4" />

      <polygon points="28,32 26,18 34,32" fill="url(#stegosaurusPlateGradient)" />
      <polygon points="28,32 27,22 32,31" fill="#A0522D" opacity="0.4" />

      <polygon points="36,32 34,18 42,32" fill="url(#stegosaurusPlateGradient)" />
      <polygon points="36,32 35,22 40,31" fill="#A0522D" opacity="0.4" />

      <polygon points="44,34 42,22 50,34" fill="url(#stegosaurusPlateGradient)" />
      <polygon points="44,34 43,26 48,33" fill="#A0522D" opacity="0.4" />

      {/* Head */}
      <ellipse cx="54" cy="44" rx="8" ry="6" fill="url(#stegosaurusBodyGradient)" />

      {/* Head highlight */}
      <ellipse cx="52" cy="42" rx="4" ry="3" fill="#6B8B3F" opacity="0.5" />

      {/* Snout */}
      <ellipse cx="60" cy="46" rx="4" ry="3" fill="url(#stegosaurusBodyGradient)" />

      {/* Eye */}
      <circle cx="58" cy="42" r="2.5" fill="white" />
      <circle cx="58" cy="42" r="1.5" fill="url(#stegosaurusEyeGradient)" />
      <circle cx="58.5" cy="41.5" r="0.5" fill="white" opacity="0.8" />

      {/* Nostril */}
      <circle cx="62" cy="44" r="0.8" fill="#3A4B1F" />

      {/* Mouth line */}
      <path d="M58 48 Q60 49 62 48" stroke="#3A4B1F" strokeWidth="0.8" fill="none" />

      {/* Cheek */}
      <circle cx="56" cy="46" r="1.5" fill="#7B9B4F" opacity="0.4" />

      {/* Legs */}
      <rect x="22" y="50" width="6" height="12" rx="2" fill="url(#stegosaurusLegGradient)" />
      <rect x="22" y="50" width="3" height="10" rx="1" fill="#6B8B3F" opacity="0.3" />

      <rect x="38" y="50" width="6" height="12" rx="2" fill="url(#stegosaurusLegGradient)" />
      <rect x="38" y="50" width="3" height="10" rx="1" fill="#6B8B3F" opacity="0.3" />

      {/* Feet */}
      <ellipse cx="25" cy="62" rx="4" ry="2" fill="#3A4B1F" />
      <ellipse cx="41" cy="62" rx="4" ry="2" fill="#3A4B1F" />

      {/* Toes */}
      <circle cx="23" cy="62" r="1" fill="#2A3B0F" />
      <circle cx="25" cy="62" r="1" fill="#2A3B0F" />
      <circle cx="27" cy="62" r="1" fill="#2A3B0F" />
      <circle cx="39" cy="62" r="1" fill="#2A3B0F" />
      <circle cx="41" cy="62" r="1" fill="#2A3B0F" />
      <circle cx="43" cy="62" r="1" fill="#2A3B0F" />

      {/* Body texture */}
      <circle cx="26" cy="44" r="1" fill="#3A4B1F" opacity="0.2" />
      <circle cx="34" cy="42" r="1.5" fill="#3A4B1F" opacity="0.2" />
      <circle cx="40" cy="46" r="1" fill="#3A4B1F" opacity="0.2" />
    </svg>
  );
}
