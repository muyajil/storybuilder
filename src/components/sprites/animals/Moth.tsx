/**
 * Moth Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Moth({ size = 64, color = '#D2B48C' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="mothBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0896A" />
          <stop offset="50%" stopColor="#8B7355" />
          <stop offset="100%" stopColor="#6B5344" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="mothHeadGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#A0896A" />
          <stop offset="100%" stopColor="#6B5344" />
        </radialGradient>
        {/* Wing gradient */}
        <radialGradient id="mothWingGradient" cx="30%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#E8D4B8" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#A0896A" />
        </radialGradient>
        {/* Wing spot gradient */}
        <radialGradient id="mothSpotGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#6B4423" />
          <stop offset="100%" stopColor="#4A3020" />
        </radialGradient>
        {/* Eye spot gradient */}
        <radialGradient id="mothEyeSpotGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="40%" stopColor="#8B4513" />
          <stop offset="70%" stopColor="#2F1810" />
          <stop offset="100%" stopColor="#1A0A05" />
        </radialGradient>
        {/* Antenna gradient */}
        <linearGradient id="mothAntennaGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#8B7355" />
          <stop offset="100%" stopColor="#D2B48C" />
        </linearGradient>
        {/* Fluffy body gradient */}
        <radialGradient id="mothFluffGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="70%" stopColor="#D2B48C" />
          <stop offset="100%" stopColor="#A0896A" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="56" rx="22" ry="4" fill="rgba(0,0,0,0.15)" />

      {/* Wings with gradient */}
      {/* Left wing */}
      <ellipse cx="16" cy="32" rx="15" ry="12" fill="url(#mothWingGradient)" />
      {/* Right wing */}
      <ellipse cx="48" cy="32" rx="15" ry="12" fill="url(#mothWingGradient)" />

      {/* Wing patterns */}
      {/* Left wing patterns */}
      <ellipse cx="12" cy="30" rx="4" ry="3" fill="rgba(139,69,19,0.3)" />
      <ellipse cx="18" cy="36" rx="3" ry="2" fill="rgba(139,69,19,0.3)" />
      {/* Left wing edge scallop */}
      <path d="M4 28 Q6 32 4 36" stroke="rgba(107,83,68,0.5)" strokeWidth="1" fill="none" />
      <path d="M8 38 Q10 42 8 44" stroke="rgba(107,83,68,0.5)" strokeWidth="1" fill="none" />

      {/* Right wing patterns */}
      <ellipse cx="52" cy="30" rx="4" ry="3" fill="rgba(139,69,19,0.3)" />
      <ellipse cx="46" cy="36" rx="3" ry="2" fill="rgba(139,69,19,0.3)" />
      {/* Right wing edge scallop */}
      <path d="M60 28 Q58 32 60 36" stroke="rgba(107,83,68,0.5)" strokeWidth="1" fill="none" />
      <path d="M56 38 Q54 42 56 44" stroke="rgba(107,83,68,0.5)" strokeWidth="1" fill="none" />

      {/* Wing eye spots */}
      <circle cx="12" cy="32" r="5" fill="url(#mothEyeSpotGradient)" />
      <circle cx="52" cy="32" r="5" fill="url(#mothEyeSpotGradient)" />
      {/* Eye spot highlights */}
      <circle cx="11" cy="31" r="1" fill="white" opacity="0.5" />
      <circle cx="51" cy="31" r="1" fill="white" opacity="0.5" />

      {/* Wing veins */}
      <path d="M20 28 L10 24" stroke="rgba(139,69,19,0.3)" strokeWidth="0.5" />
      <path d="M20 32 L6 32" stroke="rgba(139,69,19,0.3)" strokeWidth="0.5" />
      <path d="M20 36 L10 40" stroke="rgba(139,69,19,0.3)" strokeWidth="0.5" />
      <path d="M44 28 L54 24" stroke="rgba(139,69,19,0.3)" strokeWidth="0.5" />
      <path d="M44 32 L58 32" stroke="rgba(139,69,19,0.3)" strokeWidth="0.5" />
      <path d="M44 36 L54 40" stroke="rgba(139,69,19,0.3)" strokeWidth="0.5" />

      {/* Wing edge highlights */}
      <ellipse cx="16" cy="24" rx="8" ry="3" fill="rgba(255,255,255,0.15)" />
      <ellipse cx="48" cy="24" rx="8" ry="3" fill="rgba(255,255,255,0.15)" />

      {/* Fuzzy body with gradient */}
      <ellipse cx="32" cy="38" rx="7" ry="14" fill="url(#mothBodyGradient)" />
      {/* Body fluff texture */}
      <ellipse cx="32" cy="36" rx="5" ry="10" fill="url(#mothFluffGradient)" opacity="0.5" />
      {/* Body segment lines */}
      <path d="M28 32 Q32 34 36 32" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" fill="none" />
      <path d="M28 38 Q32 40 36 38" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" fill="none" />
      <path d="M28 44 Q32 46 36 44" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" fill="none" />

      {/* Fuzzy head with gradient */}
      <circle cx="32" cy="22" r="7" fill="url(#mothHeadGradient)" />
      {/* Head fluff */}
      <circle cx="32" cy="22" r="5" fill="url(#mothFluffGradient)" opacity="0.6" />
      {/* Head highlight */}
      <ellipse cx="30" cy="19" rx="2" ry="1.5" fill="rgba(255,255,255,0.15)" />

      {/* Fluffy collar */}
      <ellipse cx="32" cy="26" rx="8" ry="3" fill="url(#mothFluffGradient)" />

      {/* Eyes */}
      <circle cx="29" cy="20" r="2.5" fill="black" />
      <circle cx="35" cy="20" r="2.5" fill="black" />
      {/* Eye highlights */}
      <circle cx="28" cy="19" r="0.8" fill="white" opacity="0.6" />
      <circle cx="34" cy="19" r="0.8" fill="white" opacity="0.6" />

      {/* Feathery antennae */}
      <path d="M28 16 Q24 8 20 12" stroke="url(#mothAntennaGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M36 16 Q40 8 44 12" stroke="url(#mothAntennaGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Antenna feathers */}
      <path d="M24 10 L22 8" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M25 12 L23 10" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M26 14 L24 12" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M40 10 L42 8" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M39 12 L41 10" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <path d="M38 14 L40 12" stroke={color} strokeWidth="1" strokeLinecap="round" />

      {/* Proboscis (curled tongue) */}
      <path d="M32 24 Q30 28 32 26 Q34 24 32 28" stroke="#6B5344" strokeWidth="1" fill="none" />

      {/* Legs */}
      <path d="M28 42 L24 48" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 44 L28 52" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M36 42 L40 48" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M34 44 L36 52" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
