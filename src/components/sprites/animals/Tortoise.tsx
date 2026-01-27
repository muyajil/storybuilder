/**
 * Tortoise Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function Tortoise({ size = 64, color = '#556B2F' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Shell outer gradient */}
        <radialGradient id="tortoiseShellOuterGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A08060" />
          <stop offset="50%" stopColor="#8B7355" />
          <stop offset="100%" stopColor="#6B5335" />
        </radialGradient>
        {/* Shell top gradient */}
        <radialGradient id="tortoiseShellTopGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#6B8B3F" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#3A4B1F" />
        </radialGradient>
        {/* Shell pattern gradient */}
        <linearGradient id="tortoisePatternGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8BA050" />
          <stop offset="100%" stopColor="#6B8E23" />
        </linearGradient>
        {/* Skin gradient */}
        <linearGradient id="tortoiseSkinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A08060" />
          <stop offset="50%" stopColor="#8B7355" />
          <stop offset="100%" stopColor="#6B5335" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="tortoiseEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="56" rx="24" ry="4" fill="#000" opacity="0.2" />

      {/* Shell base (rim) */}
      <ellipse cx="32" cy="36" rx="22" ry="16" fill="url(#tortoiseShellOuterGradient)" />

      {/* Shell base highlight */}
      <ellipse cx="28" cy="42" rx="16" ry="8" fill="#B09070" opacity="0.3" />

      {/* Shell top (domed) */}
      <ellipse cx="32" cy="34" rx="18" ry="12" fill="url(#tortoiseShellTopGradient)" />

      {/* Shell highlight */}
      <ellipse cx="26" cy="30" rx="8" ry="6" fill="#7B9B4F" opacity="0.5" />

      {/* Shell scute pattern */}
      <path d="M20 34 L20 28 L26 34 L26 26 L32 34 L32 26 L38 34 L38 28 L44 34" fill="url(#tortoisePatternGradient)" />

      {/* Shell pattern lines */}
      <path d="M22 32 L22 28" stroke="#4A5B1F" strokeWidth="0.8" opacity="0.5" />
      <path d="M28 30 L28 26" stroke="#4A5B1F" strokeWidth="0.8" opacity="0.5" />
      <path d="M34 30 L34 26" stroke="#4A5B1F" strokeWidth="0.8" opacity="0.5" />
      <path d="M40 32 L40 28" stroke="#4A5B1F" strokeWidth="0.8" opacity="0.5" />

      {/* Shell hexagonal patterns */}
      <path d="M26 32 Q28 28 32 30 Q36 28 38 32" stroke="#4A5B1F" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M22 38 Q26 34 32 36 Q38 34 42 38" stroke="#4A5B1F" strokeWidth="0.8" fill="none" opacity="0.4" />

      {/* Head */}
      <circle cx="12" cy="40" r="7" fill="url(#tortoiseSkinGradient)" />

      {/* Head highlight */}
      <ellipse cx="10" cy="38" rx="3" ry="2.5" fill="#B09070" opacity="0.5" />

      {/* Head scales texture */}
      <circle cx="14" cy="42" r="1" fill="#6B5335" opacity="0.3" />
      <circle cx="11" cy="44" r="0.8" fill="#6B5335" opacity="0.3" />

      {/* Eye */}
      <circle cx="10" cy="38" r="2.5" fill="white" />
      <circle cx="10" cy="38" r="1.5" fill="url(#tortoiseEyeGradient)" />
      <circle cx="10.5" cy="37.5" r="0.5" fill="white" opacity="0.8" />

      {/* Nostril */}
      <circle cx="7" cy="40" r="0.5" fill="#5B4325" />

      {/* Mouth line */}
      <path d="M8 43 Q10 44 12 43" stroke="#5B4325" strokeWidth="0.8" fill="none" />

      {/* Beak-like upper mouth */}
      <path d="M6 40 Q8 38 10 40" stroke="#5B4325" strokeWidth="1" fill="none" />

      {/* Front legs */}
      <ellipse cx="18" cy="50" rx="5" ry="4" fill="url(#tortoiseSkinGradient)" />
      <ellipse cx="18" cy="49" rx="3" ry="2.5" fill="#B09070" opacity="0.4" />

      {/* Front leg claws */}
      <circle cx="15" cy="52" r="1" fill="#5B4325" />
      <circle cx="18" cy="53" r="1" fill="#5B4325" />
      <circle cx="21" cy="52" r="1" fill="#5B4325" />

      {/* Back legs */}
      <ellipse cx="46" cy="50" rx="5" ry="4" fill="url(#tortoiseSkinGradient)" />
      <ellipse cx="46" cy="49" rx="3" ry="2.5" fill="#B09070" opacity="0.4" />

      {/* Back leg claws */}
      <circle cx="43" cy="52" r="1" fill="#5B4325" />
      <circle cx="46" cy="53" r="1" fill="#5B4325" />
      <circle cx="49" cy="52" r="1" fill="#5B4325" />

      {/* Tail */}
      <path d="M52 42 Q56 42 54 46" stroke="url(#tortoiseSkinGradient)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M52 42 Q54 42 53 45" stroke="#B09070" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />

      {/* Shell edge details */}
      <path d="M14 42 Q16 46 18 44" stroke="#6B5335" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M50 42 Q48 46 46 44" stroke="#6B5335" strokeWidth="1" fill="none" opacity="0.4" />
    </svg>
  );
}
