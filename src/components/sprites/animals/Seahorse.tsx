/**
 * Seahorse Sprite Component
 * Enhanced with gradients, scale texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Seahorse({ size = 64, color = '#FFD700' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="seahorseBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFEC8B" stopOpacity="1" />
          <stop offset="50%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#DAA520" stopOpacity="1" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="seahorseHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFEC8B" stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </radialGradient>
        {/* Snout gradient */}
        <linearGradient id="seahorseSnoutGradient" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#DAA520" stopOpacity="1" />
        </linearGradient>
        {/* Fin gradient */}
        <radialGradient id="seahorseFinGradient" cx="30%" cy="50%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor="#DAA520" stopOpacity="0.6" />
        </radialGradient>
        {/* Crown gradient */}
        <linearGradient id="seahorseCrownGradient" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#FFEC8B" stopOpacity="1" />
        </linearGradient>
        {/* Highlight */}
        <radialGradient id="seahorseHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Tail - curled */}
      <path d="M32 44 Q36 50 34 56 Q32 62 28 60 Q24 58 28 54 Q32 50 30 48" stroke="url(#seahorseBodyGradient)" strokeWidth="7" fill="none" strokeLinecap="round" />

      {/* Tail ridge details */}
      <path d="M34 48 L38 50" stroke="#DAA520" strokeWidth="1" opacity="0.5" />
      <path d="M33 52 L36 54" stroke="#DAA520" strokeWidth="1" opacity="0.5" />
      <path d="M30 56 L32 58" stroke="#DAA520" strokeWidth="1" opacity="0.5" />

      {/* Body - curved */}
      <path d="M32 10 Q46 14 46 26 Q46 38 38 46" stroke="url(#seahorseBodyGradient)" strokeWidth="10" fill="none" strokeLinecap="round" />

      {/* Body segments/ridges */}
      <path d="M42 18 L48 20" stroke="#DAA520" strokeWidth="1.5" opacity="0.5" />
      <path d="M44 24 L50 26" stroke="#DAA520" strokeWidth="1.5" opacity="0.5" />
      <path d="M44 30 L50 32" stroke="#DAA520" strokeWidth="1.5" opacity="0.5" />
      <path d="M42 36 L48 38" stroke="#DAA520" strokeWidth="1.5" opacity="0.5" />

      {/* Belly ridge texture */}
      <path d="M36 20 L32 22" stroke="#FFEC8B" strokeWidth="1" opacity="0.4" />
      <path d="M38 26 L34 28" stroke="#FFEC8B" strokeWidth="1" opacity="0.4" />
      <path d="M38 32 L34 34" stroke="#FFEC8B" strokeWidth="1" opacity="0.4" />

      {/* Dorsal fin */}
      <path d="M46 24 Q54 20 52 28 Q58 24 56 32 Q62 30 58 38 Q56 42 50 36" fill="url(#seahorseFinGradient)" />

      {/* Fin membrane details */}
      <path d="M48 24 Q52 28 50 34" stroke="#DAA520" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M52 26 Q56 30 54 36" stroke="#DAA520" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Head */}
      <circle cx="32" cy="12" r="9" fill="url(#seahorseHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="28" cy="8" rx="5" ry="4" fill="url(#seahorseHighlight)" />

      {/* Snout */}
      <ellipse cx="22" cy="14" rx="8" ry="3.5" fill="url(#seahorseSnoutGradient)" />

      {/* Snout detail */}
      <ellipse cx="20" cy="14" rx="1" ry="0.5" fill="#DAA520" opacity="0.5" />

      {/* Crown/coronet */}
      <polygon points="32,3 28,-2 30,2 32,-3 34,2 36,-2 32,3" fill="url(#seahorseCrownGradient)" />
      <polygon points="30,4 28,0 32,2" fill="url(#seahorseCrownGradient)" />
      <polygon points="34,4 36,0 32,2" fill="url(#seahorseCrownGradient)" />

      {/* Eye */}
      <circle cx="34" cy="10" r="3" fill="white" />
      <circle cx="34" cy="10" r="2" fill="#2F1F1F" />
      <circle cx="33" cy="9" r="0.8" fill="white" />

      {/* Eye ring */}
      <circle cx="34" cy="10" r="3.5" fill="none" stroke="#DAA520" strokeWidth="0.5" />

      {/* Cheek */}
      <ellipse cx="30" cy="16" rx="2" ry="1.5" fill="#FF9" opacity="0.4" />

      {/* Pectoral fin */}
      <ellipse cx="38" cy="18" rx="4" ry="3" fill="url(#seahorseFinGradient)" transform="rotate(30 38 18)" />

      {/* Sparkle effects for magical look */}
      <circle cx="18" cy="10" r="1" fill="white" opacity="0.6" />
      <circle cx="54" cy="34" r="1" fill="white" opacity="0.5" />
      <circle cx="26" cy="50" r="0.8" fill="white" opacity="0.4" />
    </svg>
  );
}
