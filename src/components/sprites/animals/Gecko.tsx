/**
 * Gecko Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Gecko({ size = 64, color = '#90EE90' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="geckoBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="geckoHeadGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#B8FFB8" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="geckoEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFF00" />
          <stop offset="60%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        {/* Foot gradient */}
        <radialGradient id="geckoFootGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </radialGradient>
        {/* Tail gradient */}
        <linearGradient id="geckoTailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="56" rx="18" ry="4" fill="rgba(0,0,0,0.15)" />

      {/* Tail with gradient and texture */}
      <path d="M44 32 Q52 30 56 36 Q58 42 54 40" stroke="url(#geckoTailGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M46 32 Q50 32 52 35" stroke="#228B22" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Body with gradient and texture */}
      <ellipse cx="32" cy="32" rx="14" ry="7" fill="url(#geckoBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="30" cy="30" rx="8" ry="3" fill="rgba(255,255,255,0.2)" />
      {/* Body spots/texture */}
      <circle cx="28" cy="33" r="1.5" fill="rgba(0,100,0,0.3)" />
      <circle cx="34" cy="31" r="1" fill="rgba(0,100,0,0.3)" />
      <circle cx="38" cy="33" r="1.2" fill="rgba(0,100,0,0.3)" />

      {/* Head with gradient */}
      <circle cx="20" cy="30" r="9" fill="url(#geckoHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="18" cy="27" rx="4" ry="2" fill="rgba(255,255,255,0.25)" />

      {/* Left eye with gradient */}
      <ellipse cx="15" cy="26" rx="4.5" ry="5" fill="url(#geckoEyeGradient)" />
      <ellipse cx="15" cy="26" rx="2" ry="3" fill="black" />
      <circle cx="14" cy="25" r="1" fill="white" opacity="0.8" />

      {/* Right eye with gradient */}
      <ellipse cx="24" cy="26" rx="4.5" ry="5" fill="url(#geckoEyeGradient)" />
      <ellipse cx="24" cy="26" rx="2" ry="3" fill="black" />
      <circle cx="23" cy="25" r="1" fill="white" opacity="0.8" />

      {/* Nostril */}
      <circle cx="12" cy="30" r="0.8" fill="#006400" />

      {/* Mouth line */}
      <path d="M12 32 Q16 33 19 32" stroke="#006400" strokeWidth="0.5" fill="none" />

      {/* Feet with sticky toe pads */}
      {/* Front left foot */}
      <ellipse cx="22" cy="44" rx="5" ry="3" fill="url(#geckoFootGradient)" />
      <circle cx="19" cy="45" r="1.5" fill="#228B22" />
      <circle cx="22" cy="46" r="1.5" fill="#228B22" />
      <circle cx="25" cy="45" r="1.5" fill="#228B22" />

      {/* Front right foot */}
      <ellipse cx="30" cy="46" rx="5" ry="3" fill="url(#geckoFootGradient)" />
      <circle cx="27" cy="47" r="1.5" fill="#228B22" />
      <circle cx="30" cy="48" r="1.5" fill="#228B22" />
      <circle cx="33" cy="47" r="1.5" fill="#228B22" />

      {/* Back left foot */}
      <ellipse cx="34" cy="46" rx="5" ry="3" fill="url(#geckoFootGradient)" />
      <circle cx="31" cy="47" r="1.5" fill="#228B22" />
      <circle cx="34" cy="48" r="1.5" fill="#228B22" />
      <circle cx="37" cy="47" r="1.5" fill="#228B22" />

      {/* Back right foot */}
      <ellipse cx="42" cy="44" rx="5" ry="3" fill="url(#geckoFootGradient)" />
      <circle cx="39" cy="45" r="1.5" fill="#228B22" />
      <circle cx="42" cy="46" r="1.5" fill="#228B22" />
      <circle cx="45" cy="45" r="1.5" fill="#228B22" />
    </svg>
  );
}
