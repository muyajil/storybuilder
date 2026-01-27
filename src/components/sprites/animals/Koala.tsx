/**
 * Koala Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Koala({ size = 64, color = '#808080' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="koalaBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0A0A0" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#606060" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="koalaHeadGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#A0A0A0" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#606060" />
        </radialGradient>
        {/* Ear gradient */}
        <radialGradient id="koalaEarGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#909090" />
          <stop offset="100%" stopColor="#606060" />
        </radialGradient>
        {/* Ear fluff gradient */}
        <radialGradient id="koalaEarFluffGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8E8E8" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="koalaNoseGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#3A3A3A" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </radialGradient>
        {/* Chest gradient */}
        <radialGradient id="koalaChestGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="60" rx="18" ry="3" fill="rgba(0,0,0,0.15)" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="46" rx="16" ry="14" fill="url(#koalaBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="42" rx="6" ry="5" fill="rgba(255,255,255,0.1)" />

      {/* Chest with gradient */}
      <ellipse cx="32" cy="48" rx="10" ry="8" fill="url(#koalaChestGradient)" opacity="0.8" />

      {/* Arms */}
      <path d="M18 44 Q12 48 14 56" stroke={color} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M46 44 Q52 48 50 56" stroke={color} strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* Arm highlights */}
      <path d="M17 46 Q14 50 15 54" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
      <path d="M47 46 Q50 50 49 54" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />

      {/* Paws */}
      <circle cx="14" cy="57" r="4" fill="#707070" />
      <circle cx="50" cy="57" r="4" fill="#707070" />
      {/* Claws */}
      <circle cx="12" cy="59" r="1" fill="#4A4A4A" />
      <circle cx="14" cy="60" r="1" fill="#4A4A4A" />
      <circle cx="16" cy="59" r="1" fill="#4A4A4A" />
      <circle cx="48" cy="59" r="1" fill="#4A4A4A" />
      <circle cx="50" cy="60" r="1" fill="#4A4A4A" />
      <circle cx="52" cy="59" r="1" fill="#4A4A4A" />

      {/* Ears with gradient - behind head */}
      <circle cx="14" cy="20" r="11" fill="url(#koalaEarGradient)" />
      <circle cx="50" cy="20" r="11" fill="url(#koalaEarGradient)" />
      {/* Ear fluff with gradient */}
      <circle cx="14" cy="20" r="7" fill="url(#koalaEarFluffGradient)" />
      <circle cx="50" cy="20" r="7" fill="url(#koalaEarFluffGradient)" />
      {/* Ear inner detail */}
      <circle cx="14" cy="20" r="4" fill="rgba(255,200,200,0.3)" />
      <circle cx="50" cy="20" r="4" fill="rgba(255,200,200,0.3)" />

      {/* Head with gradient */}
      <circle cx="32" cy="26" r="18" fill="url(#koalaHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="26" cy="20" rx="6" ry="5" fill="rgba(255,255,255,0.15)" />

      {/* Fur texture on head */}
      <path d="M20 18 Q22 16 24 18" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" fill="none" />
      <path d="M38 16 Q40 14 42 16" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" fill="none" />
      <path d="M28 14 Q30 12 32 14" stroke="rgba(0,0,0,0.05)" strokeWidth="0.5" fill="none" />

      {/* White face patch */}
      <ellipse cx="32" cy="30" rx="12" ry="10" fill="rgba(255,255,255,0.4)" />

      {/* Eyes with detail */}
      <ellipse cx="24" cy="26" rx="5" ry="5.5" fill="black" />
      <ellipse cx="40" cy="26" rx="5" ry="5.5" fill="black" />
      {/* Eye highlights */}
      <circle cx="25" cy="25" r="2" fill="white" />
      <circle cx="41" cy="25" r="2" fill="white" />
      {/* Secondary highlights */}
      <circle cx="23" cy="27" r="0.8" fill="white" opacity="0.5" />
      <circle cx="39" cy="27" r="0.8" fill="white" opacity="0.5" />

      {/* Sleepy eyelids (koalas sleep a lot!) */}
      <path d="M19 24 Q24 22 29 24" stroke={color} strokeWidth="1" fill="none" />
      <path d="M35 24 Q40 22 45 24" stroke={color} strokeWidth="1" fill="none" />

      {/* Nose with gradient and detail */}
      <ellipse cx="32" cy="34" rx="7" ry="5" fill="url(#koalaNoseGradient)" />
      {/* Nose texture */}
      <ellipse cx="32" cy="35" rx="5" ry="3" fill="#2A2A2A" />
      {/* Nose highlight */}
      <ellipse cx="30" cy="32" rx="2" ry="1.5" fill="rgba(255,255,255,0.2)" />

      {/* Mouth */}
      <path d="M32 38 L30 40" stroke="#4A4A4A" strokeWidth="1" strokeLinecap="round" />
      <path d="M32 38 L34 40" stroke="#4A4A4A" strokeWidth="1" strokeLinecap="round" />

      {/* Cheek fluff */}
      <ellipse cx="18" cy="30" rx="3" ry="4" fill="rgba(255,255,255,0.3)" />
      <ellipse cx="46" cy="30" rx="3" ry="4" fill="rgba(255,255,255,0.3)" />

      {/* Feet */}
      <ellipse cx="26" cy="58" rx="5" ry="3" fill="#707070" />
      <ellipse cx="38" cy="58" rx="5" ry="3" fill="#707070" />
      {/* Foot claws */}
      <circle cx="23" cy="59" r="1" fill="#4A4A4A" />
      <circle cx="26" cy="60" r="1" fill="#4A4A4A" />
      <circle cx="29" cy="59" r="1" fill="#4A4A4A" />
      <circle cx="35" cy="59" r="1" fill="#4A4A4A" />
      <circle cx="38" cy="60" r="1" fill="#4A4A4A" />
      <circle cx="41" cy="59" r="1" fill="#4A4A4A" />
    </svg>
  );
}
