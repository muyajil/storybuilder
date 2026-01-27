/**
 * Lion Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Lion({ size = 64, color = '#D2691E' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Mane outer gradient */}
        <radialGradient id="lionManeOuterGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#CD853F" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#8B4513" />
        </radialGradient>
        {/* Mane inner gradient */}
        <radialGradient id="lionManeInnerGradient" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#DEB887" />
          <stop offset="70%" stopColor="#F4A460" />
          <stop offset="100%" stopColor="#D2691E" />
        </radialGradient>
        {/* Face gradient */}
        <radialGradient id="lionFaceGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFEFD5" />
          <stop offset="70%" stopColor="#FFE4B5" />
          <stop offset="100%" stopColor="#DEB887" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="lionNoseGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#5D3A1A" />
        </radialGradient>
        {/* Ear gradient */}
        <radialGradient id="lionEarGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#CD853F" />
          <stop offset="100%" stopColor="#8B4513" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="60" rx="26" ry="4" fill="rgba(0,0,0,0.15)" />

      {/* Outer mane with gradient */}
      <circle cx="32" cy="32" r="28" fill="url(#lionManeOuterGradient)" />

      {/* Mane fur texture - outer ring */}
      {[...Array(24)].map((_, i) => {
        const angle = (i * 15) * Math.PI / 180;
        const x1 = 32 + Math.cos(angle) * 26;
        const y1 = 32 + Math.sin(angle) * 26;
        const x2 = 32 + Math.cos(angle) * 30;
        const y2 = 32 + Math.sin(angle) * 30;
        return (
          <line
            key={`outer-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#8B4513"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />
        );
      })}

      {/* Inner mane with gradient */}
      <circle cx="32" cy="32" r="20" fill="url(#lionManeInnerGradient)" />

      {/* Mane highlight */}
      <ellipse cx="26" cy="24" rx="8" ry="6" fill="rgba(255,255,255,0.15)" />

      {/* Face with gradient */}
      <ellipse cx="32" cy="38" rx="9" ry="7" fill="url(#lionFaceGradient)" />
      {/* Face highlight */}
      <ellipse cx="30" cy="36" rx="4" ry="3" fill="rgba(255,255,255,0.2)" />

      {/* Ears with gradient */}
      <circle cx="14" cy="18" r="7" fill="url(#lionEarGradient)" />
      <circle cx="50" cy="18" r="7" fill="url(#lionEarGradient)" />
      {/* Inner ears */}
      <circle cx="14" cy="18" r="4" fill="#FFB6C1" opacity="0.5" />
      <circle cx="50" cy="18" r="4" fill="#FFB6C1" opacity="0.5" />

      {/* Eyes with detail */}
      <ellipse cx="25" cy="30" rx="4.5" ry="5" fill="white" />
      <ellipse cx="39" cy="30" rx="4.5" ry="5" fill="white" />

      {/* Irises */}
      <circle cx="26" cy="30" r="3" fill="#B8860B" />
      <circle cx="40" cy="30" r="3" fill="#B8860B" />

      {/* Pupils */}
      <circle cx="26" cy="30" r="1.5" fill="black" />
      <circle cx="40" cy="30" r="1.5" fill="black" />

      {/* Eye highlights */}
      <circle cx="25" cy="29" r="1" fill="white" />
      <circle cx="39" cy="29" r="1" fill="white" />

      {/* Eyebrows (fierce look) */}
      <path d="M21 26 Q25 24 29 26" stroke="#8B4513" strokeWidth="1.5" fill="none" />
      <path d="M35 26 Q39 24 43 26" stroke="#8B4513" strokeWidth="1.5" fill="none" />

      {/* Nose with gradient */}
      <ellipse cx="32" cy="38" rx="4" ry="2.5" fill="url(#lionNoseGradient)" />
      {/* Nose highlight */}
      <ellipse cx="31" cy="37" rx="1.5" ry="1" fill="rgba(255,255,255,0.2)" />

      {/* Mouth and muzzle */}
      <path d="M32 40 L32 44" stroke="#5D3A1A" strokeWidth="1" />
      <path d="M28 44 Q32 47 36 44" stroke="#5D3A1A" strokeWidth="1" fill="none" />

      {/* Whisker dots */}
      <circle cx="26" cy="42" r="1" fill="#8B4513" />
      <circle cx="28" cy="44" r="1" fill="#8B4513" />
      <circle cx="38" cy="42" r="1" fill="#8B4513" />
      <circle cx="36" cy="44" r="1" fill="#8B4513" />

      {/* Whiskers */}
      <line x1="24" y1="42" x2="16" y2="40" stroke="#DEB887" strokeWidth="0.5" opacity="0.7" />
      <line x1="24" y1="44" x2="16" y2="44" stroke="#DEB887" strokeWidth="0.5" opacity="0.7" />
      <line x1="24" y1="46" x2="16" y2="48" stroke="#DEB887" strokeWidth="0.5" opacity="0.7" />
      <line x1="40" y1="42" x2="48" y2="40" stroke="#DEB887" strokeWidth="0.5" opacity="0.7" />
      <line x1="40" y1="44" x2="48" y2="44" stroke="#DEB887" strokeWidth="0.5" opacity="0.7" />
      <line x1="40" y1="46" x2="48" y2="48" stroke="#DEB887" strokeWidth="0.5" opacity="0.7" />

      {/* Mane fur texture - inner details */}
      <path d="M18 26 Q16 30 18 34" stroke="rgba(139,69,19,0.3)" strokeWidth="1" fill="none" />
      <path d="M46 26 Q48 30 46 34" stroke="rgba(139,69,19,0.3)" strokeWidth="1" fill="none" />
      <path d="M24 14 Q26 18 24 22" stroke="rgba(139,69,19,0.3)" strokeWidth="1" fill="none" />
      <path d="M40 14 Q38 18 40 22" stroke="rgba(139,69,19,0.3)" strokeWidth="1" fill="none" />
    </svg>
  );
}
