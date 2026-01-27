/**
 * Mouse Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Mouse({ size = 64, color = '#808080' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="mouseBodyGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0A0A0" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#505050" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="mouseHeadGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#A0A0A0" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#505050" />
        </radialGradient>
        {/* Ear gradient */}
        <radialGradient id="mouseEarGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0A0A0" />
          <stop offset="100%" stopColor="#707070" />
        </radialGradient>
        {/* Inner ear gradient */}
        <radialGradient id="mouseInnerEarGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFB6C1" />
          <stop offset="100%" stopColor="#FF9AAB" />
        </radialGradient>
        {/* Snout gradient */}
        <radialGradient id="mouseSnoutGradient" cx="60%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFD0D6" />
          <stop offset="70%" stopColor="#FFB6C1" />
          <stop offset="100%" stopColor="#FF9AAB" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="mouseNoseGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </radialGradient>
        {/* Tail gradient */}
        <linearGradient id="mouseTailGradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#FFB6C1" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="36" cy="56" rx="18" ry="3" fill="rgba(0,0,0,0.15)" />

      {/* Tail with gradient */}
      <path d="M10 40 Q4 36 6 44 Q8 52 4 48" stroke="url(#mouseTailGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Tail highlight */}
      <path d="M8 42 Q6 46 8 48" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
      {/* Tail rings */}
      <path d="M9 42 Q10 43 9 44" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" fill="none" />
      <path d="M7 46 Q8 47 7 48" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" fill="none" />

      {/* Body with gradient */}
      <ellipse cx="28" cy="42" rx="18" ry="14" fill="url(#mouseBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="24" cy="38" rx="8" ry="6" fill="rgba(255,255,255,0.1)" />
      {/* Belly */}
      <ellipse cx="28" cy="46" rx="10" ry="8" fill="rgba(255,255,255,0.1)" />
      {/* Fur texture */}
      <path d="M18 40 Q20 42 18 44" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" fill="none" />
      <path d="M26 42 Q28 44 26 46" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" fill="none" />
      <path d="M36 40 Q38 42 36 44" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" fill="none" />

      {/* Back feet */}
      <ellipse cx="20" cy="54" rx="4" ry="2.5" fill="#707070" />
      <ellipse cx="36" cy="54" rx="4" ry="2.5" fill="#707070" />
      {/* Toes */}
      <circle cx="17" cy="55" r="1" fill="#606060" />
      <circle cx="20" cy="56" r="1" fill="#606060" />
      <circle cx="23" cy="55" r="1" fill="#606060" />
      <circle cx="33" cy="55" r="1" fill="#606060" />
      <circle cx="36" cy="56" r="1" fill="#606060" />
      <circle cx="39" cy="55" r="1" fill="#606060" />

      {/* Head with gradient */}
      <ellipse cx="48" cy="38" rx="13" ry="11" fill="url(#mouseHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="44" cy="34" rx="5" ry="4" fill="rgba(255,255,255,0.15)" />

      {/* Ears with gradient */}
      <circle cx="44" cy="26" r="9" fill="url(#mouseEarGradient)" />
      <circle cx="56" cy="28" r="9" fill="url(#mouseEarGradient)" />
      {/* Inner ears with gradient */}
      <circle cx="44" cy="26" r="6" fill="url(#mouseInnerEarGradient)" />
      <circle cx="56" cy="28" r="6" fill="url(#mouseInnerEarGradient)" />
      {/* Ear detail */}
      <circle cx="44" cy="26" r="3" fill="rgba(255,150,160,0.3)" />
      <circle cx="56" cy="28" r="3" fill="rgba(255,150,160,0.3)" />

      {/* Snout with gradient */}
      <ellipse cx="58" cy="40" rx="5" ry="4" fill="url(#mouseSnoutGradient)" />
      {/* Snout highlight */}
      <ellipse cx="56" cy="38" rx="2" ry="1.5" fill="rgba(255,255,255,0.3)" />

      {/* Nose with gradient */}
      <circle cx="62" cy="38" r="2.5" fill="url(#mouseNoseGradient)" />
      {/* Nose highlight */}
      <circle cx="61" cy="37" r="0.8" fill="white" opacity="0.4" />

      {/* Eye with detail */}
      <ellipse cx="52" cy="36" rx="3" ry="3.5" fill="black" />
      {/* Eye highlight */}
      <circle cx="51" cy="35" r="1" fill="white" />
      <circle cx="53" cy="37" r="0.5" fill="white" opacity="0.5" />

      {/* Whiskers */}
      <line x1="58" y1="38" x2="64" y2="35" stroke="#4A4A4A" strokeWidth="0.5" opacity="0.7" />
      <line x1="58" y1="40" x2="64" y2="40" stroke="#4A4A4A" strokeWidth="0.5" opacity="0.7" />
      <line x1="58" y1="42" x2="64" y2="45" stroke="#4A4A4A" strokeWidth="0.5" opacity="0.7" />
      {/* Left side whiskers */}
      <line x1="56" y1="36" x2="50" y2="34" stroke="#4A4A4A" strokeWidth="0.5" opacity="0.5" />
      <line x1="56" y1="42" x2="50" y2="44" stroke="#4A4A4A" strokeWidth="0.5" opacity="0.5" />

      {/* Mouth */}
      <path d="M56 44 Q58 46 60 44" stroke="#505050" strokeWidth="0.5" fill="none" />

      {/* Front paws */}
      <ellipse cx="42" cy="50" rx="3" ry="2" fill="#A0A0A0" />
      <circle cx="40" cy="51" r="1" fill="#909090" />
      <circle cx="42" cy="52" r="1" fill="#909090" />
      <circle cx="44" cy="51" r="1" fill="#909090" />

      {/* Cheek fluff */}
      <ellipse cx="46" cy="42" rx="2" ry="3" fill="rgba(255,255,255,0.1)" />
    </svg>
  );
}
