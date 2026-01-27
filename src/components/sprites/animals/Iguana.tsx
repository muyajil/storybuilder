/**
 * Iguana Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Iguana({ size = 64, color = '#228B22' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="iguanaBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#32CD32" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#006400" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="iguanaHeadGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#32CD32" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#006400" />
        </radialGradient>
        {/* Crest gradient */}
        <linearGradient id="iguanaCrestGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor="#32CD32" />
          <stop offset="100%" stopColor="#90EE90" />
        </linearGradient>
        {/* Tail gradient */}
        <linearGradient id="iguanaTailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#006400" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="iguanaEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFF00" />
          <stop offset="60%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        {/* Foot gradient */}
        <radialGradient id="iguanaFootGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#32CD32" />
          <stop offset="100%" stopColor="#006400" />
        </radialGradient>
        {/* Dewlap gradient */}
        <radialGradient id="iguanaDewlapGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#FF4500" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="36" cy="56" rx="20" ry="4" fill="rgba(0,0,0,0.15)" />

      {/* Tail with gradient and bands */}
      <path d="M54 36 Q62 34 60 42 Q58 50 54 46" stroke="url(#iguanaTailGradient)" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Tail bands */}
      <path d="M56 36 Q58 38 56 40" stroke="#006400" strokeWidth="1" opacity="0.5" />
      <path d="M58 40 Q60 42 58 44" stroke="#006400" strokeWidth="1" opacity="0.5" />

      {/* Back leg */}
      <ellipse cx="46" cy="48" rx="5" ry="3" fill="url(#iguanaFootGradient)" />
      <circle cx="43" cy="50" r="1.2" fill="#006400" />
      <circle cx="46" cy="51" r="1.2" fill="#006400" />
      <circle cx="49" cy="50" r="1.2" fill="#006400" />

      {/* Body with gradient */}
      <ellipse cx="36" cy="36" rx="18" ry="10" fill="url(#iguanaBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="32" cy="32" rx="10" ry="4" fill="rgba(255,255,255,0.15)" />
      {/* Body scales */}
      <circle cx="30" cy="36" r="1.5" fill="rgba(0,100,0,0.3)" />
      <circle cx="36" cy="34" r="1.2" fill="rgba(0,100,0,0.3)" />
      <circle cx="42" cy="36" r="1.5" fill="rgba(0,100,0,0.3)" />
      <circle cx="34" cy="40" r="1" fill="rgba(0,100,0,0.3)" />
      <circle cx="40" cy="40" r="1" fill="rgba(0,100,0,0.3)" />

      {/* Dorsal crest/spines */}
      <polygon points="32,26 34,18 36,26" fill="url(#iguanaCrestGradient)" />
      <polygon points="36,26 38,16 40,26" fill="url(#iguanaCrestGradient)" />
      <polygon points="40,26 42,20 44,26" fill="url(#iguanaCrestGradient)" />
      {/* Crest highlights */}
      <path d="M34 20 L35 24" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
      <path d="M38 18 L39 24" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
      <path d="M42 22 L43 26" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />

      {/* Front leg */}
      <ellipse cx="26" cy="48" rx="5" ry="3" fill="url(#iguanaFootGradient)" />
      <circle cx="23" cy="50" r="1.2" fill="#006400" />
      <circle cx="26" cy="51" r="1.2" fill="#006400" />
      <circle cx="29" cy="50" r="1.2" fill="#006400" />

      {/* Head with gradient */}
      <circle cx="18" cy="32" r="11" fill="url(#iguanaHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="14" cy="28" rx="4" ry="3" fill="rgba(255,255,255,0.2)" />

      {/* Head scales/texture */}
      <circle cx="12" cy="32" r="1" fill="rgba(0,100,0,0.2)" />
      <circle cx="16" cy="28" r="0.8" fill="rgba(0,100,0,0.2)" />
      <circle cx="22" cy="30" r="0.8" fill="rgba(0,100,0,0.2)" />

      {/* Dewlap (throat fan) */}
      <ellipse cx="18" cy="42" rx="4" ry="3" fill="url(#iguanaDewlapGradient)" opacity="0.8" />
      <ellipse cx="17" cy="41" rx="1.5" ry="1" fill="rgba(255,255,255,0.3)" />

      {/* Eye with gradient and detail */}
      <ellipse cx="14" cy="30" rx="4" ry="4.5" fill="url(#iguanaEyeGradient)" />
      <ellipse cx="14" cy="30" rx="1.5" ry="2.5" fill="black" />
      {/* Eye highlight */}
      <circle cx="13" cy="29" r="1" fill="white" opacity="0.8" />

      {/* Eyelid ridge */}
      <path d="M10 28 Q14 26 18 28" stroke="#006400" strokeWidth="1" fill="none" />

      {/* Subtympanic scale (large circular scale) */}
      <circle cx="24" cy="36" r="3" fill={color} stroke="#006400" strokeWidth="0.5" />
      <circle cx="24" cy="36" r="1.5" fill="rgba(255,255,255,0.1)" />

      {/* Nostril */}
      <circle cx="8" cy="30" r="1" fill="#006400" />

      {/* Mouth line */}
      <path d="M8 34 Q12 36 18 35" stroke="#006400" strokeWidth="0.5" fill="none" />

      {/* Cheek spines */}
      <path d="M22 38 L26 40" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M24 40 L28 44" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
