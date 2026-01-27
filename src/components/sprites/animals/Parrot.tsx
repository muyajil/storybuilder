/**
 * Parrot Sprite Component
 * Enhanced with gradients, feather texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Parrot({ size = 64, color = '#FF0000' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="parrotBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor="#CC0000" stopOpacity="1" />
          <stop offset="100%" stopColor="#990000" stopOpacity="1" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="parrotHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#CC0000" stopOpacity="1" />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="parrotWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FF00" stopOpacity="1" />
          <stop offset="50%" stopColor="#00CC00" stopOpacity="1" />
          <stop offset="100%" stopColor="#009900" stopOpacity="1" />
        </linearGradient>
        {/* Tail feathers */}
        <linearGradient id="parrotTailGreen" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#00FF00" stopOpacity="1" />
          <stop offset="100%" stopColor="#006600" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="parrotTailBlue" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#000099" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="parrotTailYellow" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFFF00" stopOpacity="1" />
          <stop offset="100%" stopColor="#CC9900" stopOpacity="1" />
        </linearGradient>
        {/* Beak gradient */}
        <linearGradient id="parrotBeakGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4D4D4D" stopOpacity="1" />
          <stop offset="100%" stopColor="#1a1a1a" stopOpacity="1" />
        </linearGradient>
        {/* Highlight */}
        <radialGradient id="parrotHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Tail feathers - colorful */}
      <rect x="28" y="48" width="8" height="16" rx="2" fill="url(#parrotTailGreen)" />
      <rect x="23" y="52" width="6" height="12" rx="1" fill="url(#parrotTailBlue)" />
      <rect x="35" y="52" width="6" height="12" rx="1" fill="url(#parrotTailYellow)" />

      {/* Tail feather details */}
      <line x1="32" y1="50" x2="32" y2="62" stroke="#009900" strokeWidth="0.5" opacity="0.5" />
      <line x1="26" y1="54" x2="26" y2="62" stroke="#000066" strokeWidth="0.5" opacity="0.5" />
      <line x1="38" y1="54" x2="38" y2="62" stroke="#996600" strokeWidth="0.5" opacity="0.5" />

      {/* Body */}
      <ellipse cx="32" cy="38" rx="14" ry="16" fill="url(#parrotBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="32" rx="8" ry="10" fill="url(#parrotHighlight)" />

      {/* Breast feather texture */}
      <path d="M26 36 Q28 40 26 44" stroke="#CC0000" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M32 34 Q34 40 32 46" stroke="#CC0000" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M38 36 Q36 40 38 44" stroke="#CC0000" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Head */}
      <circle cx="32" cy="20" r="14" fill="url(#parrotHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="28" cy="14" rx="8" ry="6" fill="url(#parrotHighlight)" />

      {/* Eye ring (white patch) */}
      <ellipse cx="38" cy="18" rx="6" ry="5" fill="white" />

      {/* Eye */}
      <circle cx="38" cy="18" r="4" fill="white" />
      <circle cx="38" cy="18" r="2.5" fill="#1a1a1a" />
      <circle cx="37" cy="17" r="1" fill="white" />

      {/* Beak - curved parrot beak */}
      <path d="M42 24 Q52 26 46 34 Q42 36 40 32" fill="url(#parrotBeakGradient)" />
      <path d="M42 28 Q48 30 44 34" fill="#666" opacity="0.5" />

      {/* Lower beak */}
      <path d="M42 28 Q46 30 44 34 Q42 36 40 32" fill="#2D2D2D" />

      {/* Beak nostril */}
      <circle cx="44" cy="26" r="1" fill="#1a1a1a" />

      {/* Wing */}
      <ellipse cx="22" cy="38" rx="9" ry="13" fill="url(#parrotWingGradient)" />

      {/* Wing feather details */}
      <path d="M16 34 Q18 38 16 44" stroke="#006600" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M20 32 Q22 40 20 48" stroke="#006600" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M24 34 Q26 40 24 46" stroke="#006600" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Feet */}
      <path d="M28 52 L26 56 L24 54 M28 52 L28 56 M28 52 L30 56" stroke="#666" strokeWidth="2" strokeLinecap="round" />
      <path d="M36 52 L34 56 M36 52 L36 56 L38 54" stroke="#666" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
