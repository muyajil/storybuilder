/**
 * Sparrow Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function Sparrow({ size = 64, color = '#A0522D' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="sparrowBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8733D" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#7A4020" />
        </linearGradient>
        {/* Breast gradient */}
        <radialGradient id="sparrowBreastGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#E8D4B8" />
          <stop offset="70%" stopColor="#D2B48C" />
          <stop offset="100%" stopColor="#C4A070" />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="sparrowWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5A2B" />
          <stop offset="50%" stopColor="#6B4020" />
          <stop offset="100%" stopColor="#4A2810" />
        </linearGradient>
        {/* Beak gradient */}
        <linearGradient id="sparrowBeakGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB030" />
          <stop offset="50%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#E07000" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="sparrowHeadGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#B8733D" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#7A4020" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="sparrowEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="56" rx="14" ry="3" fill="#000" opacity="0.2" />

      {/* Tail feathers */}
      <path d="M18 44 Q12 48 10 54" stroke="url(#sparrowWingGradient)" strokeWidth="3" fill="none" />
      <path d="M20 44 Q16 50 14 56" stroke="url(#sparrowWingGradient)" strokeWidth="3" fill="none" />
      <path d="M22 44 Q20 52 18 58" stroke="url(#sparrowWingGradient)" strokeWidth="3" fill="none" />

      {/* Body */}
      <ellipse cx="32" cy="38" rx="12" ry="14" fill="url(#sparrowBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="34" rx="5" ry="6" fill="#B8733D" opacity="0.4" />

      {/* Breast patch */}
      <ellipse cx="32" cy="42" rx="8" ry="6" fill="url(#sparrowBreastGradient)" />

      {/* Wing patterns */}
      <path d="M26 32 Q22 34 24 40" stroke="#6B4020" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M38 32 Q42 34 40 40" stroke="#6B4020" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Left wing */}
      <path d="M20 36 Q14 34 16 42" fill="url(#sparrowWingGradient)" />
      <path d="M20 36 Q16 35 17 40" fill="#8B5A2B" opacity="0.5" />

      {/* Right wing */}
      <path d="M44 36 Q50 34 48 42" fill="url(#sparrowWingGradient)" />
      <path d="M44 36 Q48 35 47 40" fill="#8B5A2B" opacity="0.5" />

      {/* Head */}
      <circle cx="32" cy="22" r="10" fill="url(#sparrowHeadGradient)" />

      {/* Head stripe (characteristic sparrow marking) */}
      <path d="M26 18 Q32 14 38 18" stroke="#4A2810" strokeWidth="2" fill="none" />

      {/* Head highlight */}
      <ellipse cx="28" cy="18" rx="4" ry="3" fill="#B8733D" opacity="0.5" />

      {/* Eyes */}
      <circle cx="28" cy="20" r="2.5" fill="url(#sparrowEyeGradient)" />
      <circle cx="36" cy="20" r="2.5" fill="url(#sparrowEyeGradient)" />

      {/* Eye shine */}
      <circle cx="28.5" cy="19.5" r="0.8" fill="white" opacity="0.8" />
      <circle cx="36.5" cy="19.5" r="0.8" fill="white" opacity="0.8" />

      {/* Eye ring */}
      <circle cx="28" cy="20" r="2.5" stroke="#C4A070" strokeWidth="0.5" fill="none" opacity="0.5" />
      <circle cx="36" cy="20" r="2.5" stroke="#C4A070" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Cheek patches */}
      <circle cx="24" cy="24" r="2" fill="#D2B48C" opacity="0.5" />
      <circle cx="40" cy="24" r="2" fill="#D2B48C" opacity="0.5" />

      {/* Beak */}
      <polygon points="32,24 26,28 38,28" fill="url(#sparrowBeakGradient)" />
      <polygon points="32,24 28,27 36,27" fill="#FFB030" opacity="0.5" />

      {/* Beak line */}
      <path d="M28 27 L36 27" stroke="#E07000" strokeWidth="0.5" opacity="0.6" />

      {/* Legs */}
      <path d="M28 50 L28 56 L24 58 M28 56 L28 58 M28 56 L32 58" stroke="#8B6040" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M36 50 L36 56 L32 58 M36 56 L36 58 M36 56 L40 58" stroke="#8B6040" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Feather details on body */}
      <path d="M28 36 Q26 38 28 40" stroke="#7A4020" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M36 36 Q38 38 36 40" stroke="#7A4020" strokeWidth="0.5" fill="none" opacity="0.4" />
    </svg>
  );
}
