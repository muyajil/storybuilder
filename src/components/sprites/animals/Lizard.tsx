/**
 * Lizard Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Lizard({ size = 64, color = '#32CD32' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="lizardBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#90EE90" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="lizardHeadGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#90EE90" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="lizardEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFF00" />
          <stop offset="60%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        {/* Tail gradient */}
        <linearGradient id="lizardTailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
        {/* Leg gradient */}
        <linearGradient id="lizardLegGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="56" rx="20" ry="4" fill="rgba(0,0,0,0.15)" />

      {/* Tail with gradient */}
      <path d="M46 32 Q54 30 58 36 Q60 42 56 40" stroke="url(#lizardTailGradient)" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Tail pattern */}
      <path d="M48 32 Q52 32 54 34" stroke="#228B22" strokeWidth="1" opacity="0.5" />
      <path d="M52 34 Q56 36 56 38" stroke="#228B22" strokeWidth="1" opacity="0.5" />
      {/* Tail highlight */}
      <path d="M48 31 Q52 30 54 32" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />

      {/* Back legs */}
      <path d="M36 40 L38 52" stroke="url(#lizardLegGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M40 40 L44 50" stroke="url(#lizardLegGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Back toes */}
      <circle cx="37" cy="53" r="1.5" fill="#228B22" />
      <circle cx="39" cy="54" r="1.5" fill="#228B22" />
      <circle cx="41" cy="53" r="1.5" fill="#228B22" />
      <circle cx="43" cy="51" r="1.5" fill="#228B22" />
      <circle cx="45" cy="52" r="1.5" fill="#228B22" />
      <circle cx="47" cy="51" r="1.5" fill="#228B22" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="32" rx="15" ry="9" fill="url(#lizardBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="29" rx="8" ry="4" fill="rgba(255,255,255,0.2)" />
      {/* Body scales */}
      <circle cx="26" cy="32" r="1.2" fill="rgba(0,100,0,0.3)" />
      <circle cx="32" cy="30" r="1" fill="rgba(0,100,0,0.3)" />
      <circle cx="38" cy="32" r="1.2" fill="rgba(0,100,0,0.3)" />
      <circle cx="30" cy="35" r="0.8" fill="rgba(0,100,0,0.3)" />
      <circle cx="36" cy="35" r="0.8" fill="rgba(0,100,0,0.3)" />

      {/* Spine ridge */}
      <path d="M22 30 Q27 28 32 30 Q37 28 42 30" stroke="#228B22" strokeWidth="1.5" fill="none" opacity="0.5" />

      {/* Front legs */}
      <path d="M24 40 L20 50" stroke="url(#lizardLegGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M28 40 L26 52" stroke="url(#lizardLegGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Front toes */}
      <circle cx="18" cy="51" r="1.5" fill="#228B22" />
      <circle cx="20" cy="52" r="1.5" fill="#228B22" />
      <circle cx="22" cy="51" r="1.5" fill="#228B22" />
      <circle cx="24" cy="53" r="1.5" fill="#228B22" />
      <circle cx="26" cy="54" r="1.5" fill="#228B22" />
      <circle cx="28" cy="53" r="1.5" fill="#228B22" />

      {/* Head with gradient */}
      <circle cx="18" cy="30" r="9" fill="url(#lizardHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="15" cy="27" rx="4" ry="2" fill="rgba(255,255,255,0.25)" />

      {/* Head scales */}
      <circle cx="14" cy="32" r="0.8" fill="rgba(0,100,0,0.2)" />
      <circle cx="20" cy="28" r="0.6" fill="rgba(0,100,0,0.2)" />

      {/* Eye with gradient */}
      <ellipse cx="15" cy="28" rx="3" ry="3.5" fill="url(#lizardEyeGradient)" />
      <ellipse cx="15" cy="28" rx="1.2" ry="2" fill="black" />
      {/* Eye highlight */}
      <circle cx="14" cy="27" r="0.8" fill="white" opacity="0.8" />

      {/* Eyelid ridge */}
      <path d="M12 26 Q15 24 18 26" stroke="#228B22" strokeWidth="1" fill="none" />

      {/* Tongue */}
      <path d="M10 30 L4 32" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 32 L2 30" stroke="#FF6B6B" strokeWidth="1" strokeLinecap="round" />
      <path d="M4 32 L2 34" stroke="#FF6B6B" strokeWidth="1" strokeLinecap="round" />

      {/* Nostril */}
      <circle cx="10" cy="28" r="0.8" fill="#006400" />

      {/* Mouth line */}
      <path d="M10 32 Q14 34 18 32" stroke="#228B22" strokeWidth="0.5" fill="none" />
    </svg>
  );
}
