/**
 * Hippo Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Hippo({ size = 64, color = '#808080' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="hippoBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0A0A0" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#5A5A5A" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="hippoHeadGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#A0A0A0" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#606060" />
        </radialGradient>
        {/* Snout gradient */}
        <radialGradient id="hippoSnoutGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#C0C0C0" />
          <stop offset="70%" stopColor="#A0A0A0" />
          <stop offset="100%" stopColor="#808080" />
        </radialGradient>
        {/* Ear gradient */}
        <radialGradient id="hippoEarGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#909090" />
          <stop offset="100%" stopColor="#606060" />
        </radialGradient>
        {/* Leg gradient */}
        <linearGradient id="hippoLegGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#5A5A5A" />
        </linearGradient>
        {/* Inner mouth gradient */}
        <radialGradient id="hippoMouthGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF9999" />
          <stop offset="100%" stopColor="#CC6666" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="62" rx="24" ry="4" fill="rgba(0,0,0,0.2)" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="40" rx="24" ry="18" fill="url(#hippoBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="26" cy="34" rx="12" ry="8" fill="rgba(255,255,255,0.1)" />
      {/* Body water droplet details */}
      <ellipse cx="20" cy="38" rx="1.5" ry="2" fill="rgba(255,255,255,0.2)" />
      <ellipse cx="28" cy="44" rx="1" ry="1.5" fill="rgba(255,255,255,0.2)" />
      <ellipse cx="40" cy="36" rx="1.2" ry="1.8" fill="rgba(255,255,255,0.2)" />

      {/* Legs with gradient */}
      <rect x="13" y="50" width="9" height="12" fill="url(#hippoLegGradient)" rx="4" />
      <rect x="42" y="50" width="9" height="12" fill="url(#hippoLegGradient)" rx="4" />
      {/* Leg highlights */}
      <rect x="14" y="51" width="3" height="8" fill="rgba(255,255,255,0.1)" rx="1" />
      <rect x="43" y="51" width="3" height="8" fill="rgba(255,255,255,0.1)" rx="1" />
      {/* Toes */}
      <circle cx="14" cy="62" r="2" fill="#5A5A5A" />
      <circle cx="18" cy="62" r="2" fill="#5A5A5A" />
      <circle cx="22" cy="62" r="2" fill="#5A5A5A" />
      <circle cx="43" cy="62" r="2" fill="#5A5A5A" />
      <circle cx="47" cy="62" r="2" fill="#5A5A5A" />
      <circle cx="51" cy="62" r="2" fill="#5A5A5A" />

      {/* Head with gradient */}
      <ellipse cx="52" cy="34" rx="13" ry="15" fill="url(#hippoHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="48" cy="28" rx="6" ry="5" fill="rgba(255,255,255,0.1)" />

      {/* Ears with gradient */}
      <ellipse cx="43" cy="21" rx="4" ry="7" fill="url(#hippoEarGradient)" />
      <ellipse cx="55" cy="21" rx="4" ry="7" fill="url(#hippoEarGradient)" />
      {/* Inner ears */}
      <ellipse cx="43" cy="22" rx="2" ry="4" fill="#FFB6C1" opacity="0.5" />
      <ellipse cx="55" cy="22" rx="2" ry="4" fill="#FFB6C1" opacity="0.5" />

      {/* Snout with gradient */}
      <ellipse cx="60" cy="40" rx="9" ry="11" fill="url(#hippoSnoutGradient)" />
      {/* Snout highlight */}
      <ellipse cx="58" cy="36" rx="4" ry="4" fill="rgba(255,255,255,0.15)" />

      {/* Nostrils */}
      <ellipse cx="56" cy="38" rx="2.5" ry="2" fill="#4A4A4A" />
      <ellipse cx="64" cy="38" rx="2.5" ry="2" fill="#4A4A4A" />
      {/* Nostril inner */}
      <ellipse cx="56" cy="38" rx="1.2" ry="1" fill="#2A2A2A" />
      <ellipse cx="64" cy="38" rx="1.2" ry="1" fill="#2A2A2A" />

      {/* Mouth line */}
      <path d="M54 46 Q60 48 66 46" stroke="#5A5A5A" strokeWidth="1.5" fill="none" />

      {/* Eyes with detail */}
      <ellipse cx="47" cy="30" rx="4" ry="4.5" fill="white" />
      <ellipse cx="57" cy="30" rx="4" ry="4.5" fill="white" />
      <circle cx="48" cy="30" r="2.5" fill="#4A3728" />
      <circle cx="58" cy="30" r="2.5" fill="#4A3728" />
      <circle cx="48" cy="30" r="1.2" fill="black" />
      <circle cx="58" cy="30" r="1.2" fill="black" />
      {/* Eye highlights */}
      <circle cx="47" cy="29" r="1" fill="white" />
      <circle cx="57" cy="29" r="1" fill="white" />

      {/* Eyebrow ridges */}
      <path d="M44 26 Q47 25 50 26" stroke="#5A5A5A" strokeWidth="1" fill="none" />
      <path d="M54 26 Q57 25 60 26" stroke="#5A5A5A" strokeWidth="1" fill="none" />

      {/* Teeth (just visible) */}
      <rect x="58" cy="46" width="3" height="3" fill="white" rx="0.5" />
      <rect x="54" cy="46" width="3" height="3" fill="white" rx="0.5" />

      {/* Tail */}
      <path d="M8 40 Q4 42 6 46" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
      <ellipse cx="6" cy="47" rx="2" ry="1" fill="#606060" />
    </svg>
  );
}
