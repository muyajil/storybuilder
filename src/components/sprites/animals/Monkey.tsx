/**
 * Monkey Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Monkey({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="monkeyBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#5D3A1A" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="monkeyHeadGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#5D3A1A" />
        </radialGradient>
        {/* Face gradient */}
        <radialGradient id="monkeyFaceGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F5DEB3" />
          <stop offset="70%" stopColor="#DEB887" />
          <stop offset="100%" stopColor="#D2B48C" />
        </radialGradient>
        {/* Ear inner gradient */}
        <radialGradient id="monkeyEarGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5DEB3" />
          <stop offset="100%" stopColor="#DEB887" />
        </radialGradient>
        {/* Tail gradient */}
        <linearGradient id="monkeyTailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#5D3A1A" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="60" rx="16" ry="3" fill="rgba(0,0,0,0.15)" />

      {/* Tail with gradient */}
      <path d="M46 44 Q56 40 54 30 Q52 24 48 28" stroke="url(#monkeyTailGradient)" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Tail highlight */}
      <path d="M48 42 Q54 38 52 32" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
      {/* Tail tip curl */}
      <path d="M48 28 Q44 26 46 30" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="46" rx="14" ry="16" fill="url(#monkeyBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="40" rx="6" ry="8" fill="rgba(255,255,255,0.1)" />
      {/* Belly */}
      <ellipse cx="32" cy="50" rx="8" ry="10" fill="#D2B48C" opacity="0.5" />

      {/* Fur texture */}
      <path d="M22 44 Q24 46 22 48" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" fill="none" />
      <path d="M42 44 Q44 46 42 48" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" fill="none" />

      {/* Arms */}
      <path d="M20 42 Q14 46 16 54" stroke={color} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M44 42 Q50 46 48 54" stroke={color} strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Arm highlights */}
      <path d="M21 44 Q17 48 18 52" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="none" />
      <path d="M43 44 Q47 48 46 52" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="none" />

      {/* Hands */}
      <circle cx="16" cy="55" r="4" fill="#DEB887" />
      <circle cx="48" cy="55" r="4" fill="#DEB887" />
      {/* Fingers */}
      <circle cx="13" cy="56" r="1.5" fill="#D2B48C" />
      <circle cx="16" cy="58" r="1.5" fill="#D2B48C" />
      <circle cx="19" cy="56" r="1.5" fill="#D2B48C" />
      <circle cx="45" cy="56" r="1.5" fill="#D2B48C" />
      <circle cx="48" cy="58" r="1.5" fill="#D2B48C" />
      <circle cx="51" cy="56" r="1.5" fill="#D2B48C" />

      {/* Ears with gradient */}
      <circle cx="12" cy="22" r="7" fill={color} />
      <circle cx="52" cy="22" r="7" fill={color} />
      <circle cx="12" cy="22" r="4.5" fill="url(#monkeyEarGradient)" />
      <circle cx="52" cy="22" r="4.5" fill="url(#monkeyEarGradient)" />
      {/* Ear inner detail */}
      <circle cx="12" cy="22" r="2.5" fill="#FFB6C1" opacity="0.4" />
      <circle cx="52" cy="22" r="2.5" fill="#FFB6C1" opacity="0.4" />

      {/* Head with gradient */}
      <circle cx="32" cy="22" r="17" fill="url(#monkeyHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="26" cy="16" rx="6" ry="5" fill="rgba(255,255,255,0.1)" />

      {/* Face with gradient */}
      <ellipse cx="32" cy="26" rx="11" ry="9" fill="url(#monkeyFaceGradient)" />
      {/* Face highlight */}
      <ellipse cx="28" cy="22" rx="4" ry="3" fill="rgba(255,255,255,0.2)" />

      {/* Eyes with detail */}
      <ellipse cx="26" cy="20" rx="4.5" ry="5" fill="white" />
      <ellipse cx="38" cy="20" rx="4.5" ry="5" fill="white" />
      <circle cx="27" cy="20" r="2.5" fill="#4A3728" />
      <circle cx="39" cy="20" r="2.5" fill="#4A3728" />
      <circle cx="27" cy="20" r="1.2" fill="black" />
      <circle cx="39" cy="20" r="1.2" fill="black" />
      {/* Eye highlights */}
      <circle cx="26" cy="19" r="1" fill="white" />
      <circle cx="38" cy="19" r="1" fill="white" />

      {/* Eyebrows */}
      <path d="M22 16 Q26 14 30 16" stroke={color} strokeWidth="1" fill="none" />
      <path d="M34 16 Q38 14 42 16" stroke={color} strokeWidth="1" fill="none" />

      {/* Nose */}
      <ellipse cx="32" cy="28" rx="5" ry="3.5" fill="#D2B48C" />
      {/* Nostrils */}
      <ellipse cx="30" cy="28" rx="1.5" ry="1" fill="#5D3A1A" />
      <ellipse cx="34" cy="28" rx="1.5" ry="1" fill="#5D3A1A" />

      {/* Mouth */}
      <path d="M28 32 Q32 36 36 32" stroke="#5D3A1A" strokeWidth="1" fill="none" />

      {/* Cheek fur tufts */}
      <path d="M18 26 Q16 28 18 30" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M46 26 Q48 28 46 30" stroke={color} strokeWidth="1.5" fill="none" />

      {/* Head fur detail */}
      <path d="M22 8 L24 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M28 6 L29 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M36 6 L35 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M42 8 L40 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
