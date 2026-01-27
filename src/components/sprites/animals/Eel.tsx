/**
 * Eel Sprite Component
 * Enhanced with gradients, sleek body, and electric accents
 */

import type { SpriteProps } from '../types';

export function Eel({ size = 64, color = '#4a5568' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="eelBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5A6A7A" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#3A4A58" />
          <stop offset="100%" stopColor="#2A3A48" />
        </linearGradient>
        {/* Belly gradient */}
        <linearGradient id="eelBellyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8A9AAA" />
          <stop offset="100%" stopColor="#6A7A8A" />
        </linearGradient>
        {/* Electric glow gradient */}
        <linearGradient id="eelElectricGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00BFFF" stopOpacity="0" />
          <stop offset="50%" stopColor="#00FFFF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00BFFF" stopOpacity="0" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="eelHeadGrad" cx="30%" cy="40%">
          <stop offset="0%" stopColor="#6A7A8A" />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor="#3A4A58" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="eelEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* Glow filter */}
        <filter id="eelGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main body - sinuous shape */}
      <path d="M10 32 Q18 22 32 26 Q46 30 54 22 Q58 18 56 28 Q54 36 42 33 Q30 30 18 36 Q10 42 10 32"
            fill="url(#eelBodyGrad)" stroke="url(#eelBodyGrad)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />

      {/* Body highlight */}
      <path d="M12 30 Q20 22 32 25 Q44 28 52 22"
            stroke="#7A8A9A" strokeWidth="3" fill="none" opacity="0.4" strokeLinecap="round" />

      {/* Belly lighter area */}
      <path d="M14 34 Q22 30 34 32 Q46 34 52 30"
            stroke="url(#eelBellyGrad)" strokeWidth="4" fill="none" opacity="0.5" strokeLinecap="round" />

      {/* Electric stripe pattern */}
      <path d="M16 32 Q24 26 36 28 Q48 30 54 26"
            stroke="url(#eelElectricGrad)" strokeWidth="1.5" fill="none" filter="url(#eelGlow)" />

      {/* Body segments/texture */}
      <path d="M20,28 L20,36" stroke="#3A4A58" strokeWidth="0.5" opacity="0.3" />
      <path d="M28,26 L28,34" stroke="#3A4A58" strokeWidth="0.5" opacity="0.3" />
      <path d="M36,26 L36,34" stroke="#3A4A58" strokeWidth="0.5" opacity="0.3" />
      <path d="M44,26 L44,32" stroke="#3A4A58" strokeWidth="0.5" opacity="0.3" />

      {/* Head with gradient */}
      <ellipse cx="10" cy="32" rx="6" ry="5" fill="url(#eelHeadGrad)" />
      {/* Head highlight */}
      <ellipse cx="8" cy="30" rx="3" ry="2" fill="#7A8A9A" opacity="0.4" />

      {/* Eye with electric glow */}
      <ellipse cx="10" cy="30" rx="2.5" ry="3" fill="white" />
      <ellipse cx="10" cy="30" rx="2" ry="2.5" fill="url(#eelEyeGrad)" />
      {/* Eye sparkle */}
      <circle cx="9.5" cy="29" r="0.7" fill="white" />
      {/* Electric eye glow */}
      <circle cx="10" cy="30" r="3" fill="#00FFFF" opacity="0.2" filter="url(#eelGlow)" />

      {/* Mouth */}
      <path d="M4 33 Q6 35 8 34" stroke="#2A3A48" strokeWidth="1" fill="none" />

      {/* Gill slits */}
      <path d="M14,30 L14,34" stroke="#3A4A58" strokeWidth="0.8" opacity="0.6" />
      <path d="M16,30 L16,34" stroke="#3A4A58" strokeWidth="0.6" opacity="0.5" />

      {/* Tail fin */}
      <path d="M54 26 Q60 20 58 28 Q62 24 60 32 Q58 38 54 32" fill="url(#eelBodyGrad)" />
      {/* Tail fin detail */}
      <path d="M56,24 L58,28" stroke="#3A4A58" strokeWidth="0.5" opacity="0.4" />
      <path d="M58,26 L60,30" stroke="#3A4A58" strokeWidth="0.5" opacity="0.4" />

      {/* Dorsal fin line */}
      <path d="M20 26 Q28 22 36 24 Q44 22 52 20"
            stroke={color} strokeWidth="2" fill="none" opacity="0.6" />

      {/* Electric sparks */}
      <g filter="url(#eelGlow)">
        <circle cx="24" cy="24" r="1" fill="#00FFFF" opacity="0.7" />
        <circle cx="40" cy="22" r="0.8" fill="#00FFFF" opacity="0.6" />
        <circle cx="50" cy="20" r="0.6" fill="#00FFFF" opacity="0.5" />
        <path d="M22,26 L24,22 L26,26" stroke="#00FFFF" strokeWidth="0.5" fill="none" opacity="0.5" />
      </g>

      {/* Water bubbles */}
      <circle cx="6" cy="26" r="1" fill="#87CEEB" opacity="0.4" />
      <circle cx="4" cy="28" r="0.6" fill="#87CEEB" opacity="0.3" />
    </svg>
  );
}
