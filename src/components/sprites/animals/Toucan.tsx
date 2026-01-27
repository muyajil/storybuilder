/**
 * Toucan Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function Toucan({ size = 64, color = 'black' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="toucanBodyGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        {/* Beak outer gradient */}
        <linearGradient id="toucanBeakOuterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB830" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#E08000" />
        </linearGradient>
        {/* Beak inner gradient */}
        <linearGradient id="toucanBeakInnerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFDD50" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFC000" />
        </linearGradient>
        {/* Chest gradient */}
        <radialGradient id="toucanChestGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFEE60" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFC000" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="toucanEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Eye ring gradient */}
        <radialGradient id="toucanEyeRingGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4080FF" />
          <stop offset="100%" stopColor="#2060D0" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="24" cy="60" rx="16" ry="3" fill="#000" opacity="0.2" />

      {/* Tail feathers */}
      <rect x="10" y="50" width="6" height="12" rx="1" fill="url(#toucanBodyGradient)" />
      <rect x="10" y="50" width="3" height="10" rx="1" fill="#2a2a2a" opacity="0.3" />

      {/* Body */}
      <ellipse cx="24" cy="40" rx="14" ry="16" fill="url(#toucanBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="20" cy="34" rx="6" ry="8" fill="#2a2a2a" opacity="0.5" />

      {/* Feather texture */}
      <path d="M18 34 Q20 38 18 42" stroke="#1a1a1a" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M24 32 Q26 38 24 44" stroke="#1a1a1a" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M30 34 Q28 38 30 42" stroke="#1a1a1a" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Chest/breast - yellow */}
      <ellipse cx="24" cy="44" rx="8" ry="10" fill="url(#toucanChestGradient)" />

      {/* Chest highlight */}
      <ellipse cx="22" cy="42" rx="4" ry="5" fill="#FFEE60" opacity="0.5" />

      {/* Red chest border */}
      <path d="M16 44 Q18 52 24 54 Q30 52 32 44" stroke="#FF4040" strokeWidth="2" fill="none" />

      {/* Head */}
      <circle cx="28" cy="22" r="12" fill="url(#toucanBodyGradient)" />

      {/* Head highlight */}
      <ellipse cx="24" cy="18" rx="5" ry="4" fill="#2a2a2a" opacity="0.5" />

      {/* White throat patch */}
      <ellipse cx="28" cy="28" rx="6" ry="4" fill="white" />
      <ellipse cx="28" cy="27" rx="4" ry="2.5" fill="#F8F8F8" opacity="0.6" />

      {/* Beak - outer layer (orange) */}
      <ellipse cx="48" cy="26" rx="16" ry="8" fill="url(#toucanBeakOuterGradient)" />

      {/* Beak - inner layer (yellow) */}
      <ellipse cx="48" cy="26" rx="14" ry="6" fill="url(#toucanBeakInnerGradient)" />

      {/* Beak highlight */}
      <ellipse cx="44" cy="23" rx="8" ry="3" fill="#FFEE60" opacity="0.5" />

      {/* Beak tip (black) */}
      <path d="M60 26 L64 26" stroke="black" strokeWidth="2" strokeLinecap="round" />

      {/* Beak ridge */}
      <path d="M36 26 L58 26" stroke="#E08000" strokeWidth="0.8" opacity="0.4" />

      {/* Beak nostril */}
      <ellipse cx="38" cy="24" rx="1" ry="0.5" fill="#E08000" />

      {/* Green band at beak base */}
      <path d="M34 22 Q36 26 34 30" stroke="#228B22" strokeWidth="2" fill="none" />

      {/* Eye - blue ring */}
      <circle cx="32" cy="20" r="5" fill="url(#toucanEyeRingGradient)" />

      {/* Eye - white */}
      <circle cx="32" cy="20" r="4" fill="white" />

      {/* Eye - pupil */}
      <circle cx="33" cy="20" r="2" fill="url(#toucanEyeGradient)" />

      {/* Eye shine */}
      <circle cx="33.5" cy="19.5" r="0.7" fill="white" />
      <circle cx="32" cy="21" r="0.4" fill="white" opacity="0.5" />

      {/* Feet */}
      <path d="M18 54 L14 60 M18 54 L18 60 M18 54 L22 60" stroke="#555" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 54 L24 60 M28 54 L28 60 M28 54 L32 60" stroke="#555" strokeWidth="2" strokeLinecap="round" />

      {/* Wing hint */}
      <path d="M12 36 Q8 38 10 44" stroke="#1a1a1a" strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
  );
}
