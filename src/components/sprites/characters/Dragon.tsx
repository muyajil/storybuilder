/**
 * Dragon Sprite Component
 * Enhanced with gradients and detailed features
 */

import type { SpriteProps } from '../types';

export function Dragon({ size = 64, color = '#228B22' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="dragonBodyGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#3CB371" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#145214" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="dragonHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#2E8B2E" />
          <stop offset="100%" stopColor="#145214" />
        </radialGradient>
        {/* Belly gradient */}
        <radialGradient id="dragonBellyGradient" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#B8E0B8" />
          <stop offset="100%" stopColor="#90EE90" />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="dragonWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3CB371" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#145214" />
        </linearGradient>
        {/* Horn gradient */}
        <linearGradient id="dragonHornGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D2B48C" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#5D3A1A" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="dragonEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFEB3B" />
          <stop offset="100%" stopColor="#FFA000" />
        </radialGradient>
        {/* Fire gradient */}
        <radialGradient id="dragonFireGradient" cx="30%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#FFFF00" />
          <stop offset="50%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#FF4500" />
        </radialGradient>
      </defs>

      {/* Schwanz / Tail */}
      <path d="M12 40 Q2 36 4 28 L8 32 Q6 38 12 40" fill="url(#dragonBodyGradient)" />
      {/* Tail spikes */}
      <polygon points="4,28 2,24 6,28" fill="url(#dragonHornGradient)" />
      <polygon points="6,32 3,28 7,32" fill="url(#dragonHornGradient)" />

      {/* Körper / Body */}
      <ellipse cx="32" cy="40" rx="20" ry="14" fill="url(#dragonBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="34" rx="8" ry="5" fill="#4CAF50" opacity="0.3" />

      {/* Bauch / Belly */}
      <ellipse cx="32" cy="44" rx="14" ry="9" fill="url(#dragonBellyGradient)" />
      {/* Belly segments */}
      <path d="M22 40 Q32 42 42 40" stroke="#7BC67B" strokeWidth="0.5" fill="none" />
      <path d="M20 44 Q32 46 44 44" stroke="#7BC67B" strokeWidth="0.5" fill="none" />
      <path d="M22 48 Q32 50 42 48" stroke="#7BC67B" strokeWidth="0.5" fill="none" />

      {/* Flügel / Wings - Left */}
      <path d="M24 38 L8 18 L14 26 L10 14 L20 24 L18 10 L26 28" fill="url(#dragonWingGradient)" opacity="0.9" />
      {/* Wing membrane detail */}
      <path d="M12 20 L20 32" stroke="#145214" strokeWidth="0.5" fill="none" />
      <path d="M14 16 L22 28" stroke="#145214" strokeWidth="0.5" fill="none" />

      {/* Flügel / Wings - Right (back wing, visible from side) */}
      <path d="M38 42 L52 58 L46 52 L50 62 L42 54 L44 64 L38 50" fill="url(#dragonWingGradient)" opacity="0.7" />
      {/* Wing membrane detail */}
      <path d="M48 56 L42 48" stroke="#145214" strokeWidth="0.5" fill="none" />

      {/* Kopf / Head */}
      <ellipse cx="52" cy="28" rx="12" ry="10" fill="url(#dragonHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="48" cy="22" rx="4" ry="3" fill="#3CB371" opacity="0.4" />

      {/* Schnauze / Snout */}
      <ellipse cx="60" cy="30" rx="6" ry="4" fill="url(#dragonHeadGradient)" />
      {/* Nostril */}
      <circle cx="62" cy="28" r="1" fill="#145214" />

      {/* Hörner / Horns */}
      <polygon points="46,18 42,8 50,16" fill="url(#dragonHornGradient)" />
      <polygon points="54,16 56,6 58,14" fill="url(#dragonHornGradient)" />
      {/* Horn highlights */}
      <line x1="44" y1="10" x2="48" y2="17" stroke="#C4A57B" strokeWidth="0.5" opacity="0.5" />
      <line x1="56" y1="8" x2="57" y2="14" stroke="#C4A57B" strokeWidth="0.5" opacity="0.5" />

      {/* Augen / Eyes */}
      <ellipse cx="54" cy="26" rx="4" ry="3.5" fill="url(#dragonEyeGradient)" />
      {/* Pupil - cat-like slit */}
      <ellipse cx="55" cy="26" rx="1" ry="2.5" fill="black" />
      {/* Eye sparkle */}
      <circle cx="53" cy="24" r="1" fill="white" opacity="0.7" />
      {/* Eye ridge */}
      <path d="M50 23 Q54 21 58 23" stroke="#145214" strokeWidth="1" fill="none" />

      {/* Feuer / Fire */}
      <ellipse cx="66" cy="32" rx="5" ry="7" fill="url(#dragonFireGradient)" />
      <ellipse cx="66" cy="32" rx="3" ry="5" fill="#FFFF00" />
      <ellipse cx="66" cy="32" rx="1.5" ry="3" fill="white" opacity="0.7" />
      {/* Fire flickers */}
      <ellipse cx="68" cy="28" rx="2" ry="3" fill="#FF8C00" opacity="0.7" />
      <ellipse cx="68" cy="36" rx="2" ry="3" fill="#FF8C00" opacity="0.7" />

      {/* Legs */}
      <ellipse cx="24" cy="52" rx="5" ry="4" fill="url(#dragonBodyGradient)" />
      <ellipse cx="40" cy="52" rx="5" ry="4" fill="url(#dragonBodyGradient)" />
      {/* Claws */}
      <path d="M20 54 L18 58 L20 56 L22 58 L24 54" fill="#145214" />
      <path d="M36 54 L34 58 L36 56 L38 58 L40 54" fill="#145214" />

      {/* Spikes along back */}
      <polygon points="30,28 28,22 32,28" fill="url(#dragonHornGradient)" />
      <polygon points="38,26 37,20 40,26" fill="url(#dragonHornGradient)" />
      <polygon points="46,26 46,20 49,26" fill="url(#dragonHornGradient)" />
    </svg>
  );
}
