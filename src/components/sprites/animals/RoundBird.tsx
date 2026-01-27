/**
 * RoundBird Sprite Component
 * Enhanced with gradients, feather texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function RoundBird({ size = 64, color = '#FF6347' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="roundBirdBodyGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor="#E64A3C" stopOpacity="1" />
          <stop offset="100%" stopColor="#CC3C2E" stopOpacity="1" />
        </radialGradient>
        {/* Belly gradient */}
        <radialGradient id="roundBirdBellyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFF0EE" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFE4E1" stopOpacity="1" />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="roundBirdWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#CC3C2E" stopOpacity="1" />
        </linearGradient>
        {/* Beak gradient */}
        <linearGradient id="roundBirdBeakGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFB347" stopOpacity="1" />
          <stop offset="100%" stopColor="#CC7000" stopOpacity="1" />
        </linearGradient>
        {/* Highlight */}
        <radialGradient id="roundBirdHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Feather crest gradient */}
        <linearGradient id="roundBirdCrestGradient" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#FF8C78" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Head feathers/crest */}
      <ellipse cx="32" cy="12" rx="4" ry="10" fill="url(#roundBirdCrestGradient)" />
      <ellipse cx="26" cy="14" rx="3" ry="8" fill="url(#roundBirdCrestGradient)" />
      <ellipse cx="38" cy="14" rx="3" ry="8" fill="url(#roundBirdCrestGradient)" />

      {/* Feather crest highlights */}
      <ellipse cx="32" cy="10" rx="1.5" ry="5" fill="white" opacity="0.2" />
      <ellipse cx="26" cy="12" rx="1" ry="4" fill="white" opacity="0.2" />
      <ellipse cx="38" cy="12" rx="1" ry="4" fill="white" opacity="0.2" />

      {/* Wings */}
      <ellipse cx="10" cy="38" rx="8" ry="12" fill="url(#roundBirdWingGradient)" />
      <ellipse cx="54" cy="38" rx="8" ry="12" fill="url(#roundBirdWingGradient)" />

      {/* Wing feather details */}
      <path d="M6 32 Q8 38 6 46" stroke="#CC3C2E" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M10 30 Q12 38 10 48" stroke="#CC3C2E" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M58 32 Q56 38 58 46" stroke="#CC3C2E" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M54 30 Q52 38 54 48" stroke="#CC3C2E" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Body - very round */}
      <circle cx="32" cy="36" r="22" fill="url(#roundBirdBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="24" cy="26" rx="12" ry="10" fill="url(#roundBirdHighlight)" />

      {/* Belly */}
      <ellipse cx="32" cy="42" rx="14" ry="12" fill="url(#roundBirdBellyGradient)" />

      {/* Belly highlight */}
      <ellipse cx="28" cy="38" rx="6" ry="5" fill="white" opacity="0.3" />

      {/* Belly feather texture */}
      <path d="M26 42 Q28 48 26 54" stroke="#FFD5D2" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M32 40 Q34 48 32 56" stroke="#FFD5D2" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M38 42 Q36 48 38 54" stroke="#FFD5D2" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Eyes - large and cute */}
      <circle cx="24" cy="32" r="7" fill="white" />
      <circle cx="40" cy="32" r="7" fill="white" />
      <circle cx="25" cy="32" r="4.5" fill="#2F1F1F" />
      <circle cx="41" cy="32" r="4.5" fill="#2F1F1F" />

      {/* Eye highlights */}
      <circle cx="23" cy="30" r="2" fill="white" />
      <circle cx="39" cy="30" r="2" fill="white" />
      <circle cx="26" cy="33" r="1" fill="white" opacity="0.5" />
      <circle cx="42" cy="33" r="1" fill="white" opacity="0.5" />

      {/* Beak */}
      <polygon points="32,40 24,50 40,50" fill="url(#roundBirdBeakGradient)" />
      <polygon points="32,40 27,48 37,48" fill="#FFD700" opacity="0.3" />

      {/* Feet */}
      <path d="M26 58 L22 64 L26 62 L30 64 L26 58" fill="url(#roundBirdBeakGradient)" />
      <path d="M38 58 L34 64 L38 62 L42 64 L38 58" fill="url(#roundBirdBeakGradient)" />

      {/* Cheek blush */}
      <ellipse cx="16" cy="40" rx="5" ry="4" fill="#FFB6C1" opacity="0.4" />
      <ellipse cx="48" cy="40" rx="5" ry="4" fill="#FFB6C1" opacity="0.4" />
    </svg>
  );
}
