/**
 * Lemur Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Lemur({ size = 64, color = '#808080' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="lemurBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0A0A0" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#505050" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="lemurHeadGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#A0A0A0" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#505050" />
        </radialGradient>
        {/* Face mask gradient */}
        <radialGradient id="lemurFaceGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="lemurEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFF00" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        {/* Chest gradient */}
        <radialGradient id="lemurChestGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8E8E8" />
        </radialGradient>
        {/* Tail gradient */}
        <linearGradient id="lemurTailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#505050" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="36" cy="58" rx="16" ry="3" fill="rgba(0,0,0,0.15)" />

      {/* Tail with stripes */}
      <path d="M48 40 Q52 36 52 48 Q52 60 48 56" stroke="url(#lemurTailGradient)" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Tail white stripes */}
      <path d="M48 42 L52 46" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <path d="M48 48 L52 52" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <path d="M49 54 L51 56" stroke="white" strokeWidth="3" strokeLinecap="round" />
      {/* Tail dark stripes (over white) */}
      <path d="M49 45 L51 47" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M49 51 L51 53" stroke={color} strokeWidth="2" strokeLinecap="round" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="40" rx="14" ry="12" fill="url(#lemurBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="36" rx="6" ry="5" fill="rgba(255,255,255,0.1)" />

      {/* Chest with gradient */}
      <ellipse cx="32" cy="42" rx="10" ry="8" fill="url(#lemurChestGradient)" />

      {/* Arms */}
      <path d="M20 36 Q14 40 16 48" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M44 36 Q50 40 48 48" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Hands */}
      <circle cx="16" cy="49" r="3" fill="#606060" />
      <circle cx="48" cy="49" r="3" fill="#606060" />
      {/* Fingers */}
      <circle cx="14" cy="50" r="1" fill="#505050" />
      <circle cx="16" cy="51" r="1" fill="#505050" />
      <circle cx="18" cy="50" r="1" fill="#505050" />
      <circle cx="46" cy="50" r="1" fill="#505050" />
      <circle cx="48" cy="51" r="1" fill="#505050" />
      <circle cx="50" cy="50" r="1" fill="#505050" />

      {/* Feet */}
      <ellipse cx="28" cy="52" rx="5" ry="3" fill="#606060" />
      <ellipse cx="36" cy="52" rx="5" ry="3" fill="#606060" />

      {/* Head with gradient */}
      <circle cx="32" cy="24" r="13" fill="url(#lemurHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="28" cy="18" rx="5" ry="4" fill="rgba(255,255,255,0.1)" />

      {/* White face mask */}
      <circle cx="32" cy="26" r="10" fill="url(#lemurFaceGradient)" />

      {/* Black eye rings (characteristic of lemurs) */}
      <circle cx="26" cy="24" r="6" fill="#1A1A1A" />
      <circle cx="38" cy="24" r="6" fill="#1A1A1A" />

      {/* Eyes with gradient */}
      <circle cx="26" cy="24" r="5" fill="url(#lemurEyeGradient)" stroke="black" strokeWidth="1.5" />
      <circle cx="38" cy="24" r="5" fill="url(#lemurEyeGradient)" stroke="black" strokeWidth="1.5" />

      {/* Pupils */}
      <circle cx="26" cy="24" r="3" fill="black" />
      <circle cx="38" cy="24" r="3" fill="black" />

      {/* Eye highlights */}
      <circle cx="25" cy="23" r="1.5" fill="white" />
      <circle cx="37" cy="23" r="1.5" fill="white" />
      <circle cx="27" cy="25" r="0.8" fill="white" opacity="0.5" />
      <circle cx="39" cy="25" r="0.8" fill="white" opacity="0.5" />

      {/* Nose */}
      <ellipse cx="32" cy="32" rx="2.5" ry="2" fill="#1A1A1A" />
      <ellipse cx="31" cy="31" rx="1" ry="0.8" fill="rgba(255,255,255,0.2)" />

      {/* Mouth */}
      <path d="M30 34 Q32 36 34 34" stroke="#505050" strokeWidth="0.5" fill="none" />

      {/* Ears */}
      <ellipse cx="20" cy="16" rx="4" ry="6" fill={color} />
      <ellipse cx="44" cy="16" rx="4" ry="6" fill={color} />
      {/* Inner ears */}
      <ellipse cx="20" cy="16" rx="2" ry="4" fill="#FFB6C1" opacity="0.5" />
      <ellipse cx="44" cy="16" rx="2" ry="4" fill="#FFB6C1" opacity="0.5" />

      {/* Fur tufts */}
      <path d="M22 12 L20 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 11 L23 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M40 11 L41 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M42 12 L44 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />

      {/* Snout detail */}
      <ellipse cx="32" cy="30" rx="4" ry="2" fill="rgba(255,255,255,0.5)" />
    </svg>
  );
}
