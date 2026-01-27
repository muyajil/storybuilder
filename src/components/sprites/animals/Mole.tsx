/**
 * Mole Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Mole({ size = 64, color = '#4a3728' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="moleBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#6B5344" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#2A1B12" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="moleHeadGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#6B5344" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#2A1B12" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="moleNoseGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFB6C1" />
          <stop offset="100%" stopColor="#FF8FAB" />
        </radialGradient>
        {/* Paw gradient */}
        <radialGradient id="molePawGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#6B5344" />
          <stop offset="100%" stopColor="#3A2820" />
        </radialGradient>
        {/* Claw gradient */}
        <linearGradient id="moleClawGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5DEB3" />
          <stop offset="100%" stopColor="#DEB887" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="58" rx="22" ry="4" fill="rgba(0,0,0,0.2)" />

      {/* Digging paws (large front paws) */}
      {/* Left paw */}
      <ellipse cx="12" cy="46" rx="10" ry="5" fill="url(#molePawGradient)" />
      {/* Claws */}
      <path d="M6 44 L2 40" stroke="url(#moleClawGradient)" strokeWidth="3" strokeLinecap="round" />
      <path d="M10 42 L8 36" stroke="url(#moleClawGradient)" strokeWidth="3" strokeLinecap="round" />
      <path d="M14 42 L14 36" stroke="url(#moleClawGradient)" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 44 L20 40" stroke="url(#moleClawGradient)" strokeWidth="3" strokeLinecap="round" />
      {/* Paw pads */}
      <ellipse cx="12" cy="48" rx="4" ry="2" fill="#3A2820" opacity="0.5" />

      {/* Right paw */}
      <ellipse cx="52" cy="46" rx="10" ry="5" fill="url(#molePawGradient)" />
      {/* Claws */}
      <path d="M46 44 L44 40" stroke="url(#moleClawGradient)" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 42 L50 36" stroke="url(#moleClawGradient)" strokeWidth="3" strokeLinecap="round" />
      <path d="M54 42 L56 36" stroke="url(#moleClawGradient)" strokeWidth="3" strokeLinecap="round" />
      <path d="M58 44 L62 40" stroke="url(#moleClawGradient)" strokeWidth="3" strokeLinecap="round" />
      {/* Paw pads */}
      <ellipse cx="52" cy="48" rx="4" ry="2" fill="#3A2820" opacity="0.5" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="42" rx="18" ry="14" fill="url(#moleBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="38" rx="8" ry="5" fill="rgba(255,255,255,0.1)" />
      {/* Fur texture */}
      <path d="M22 40 Q24 42 22 44" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" fill="none" />
      <path d="M28 38 Q30 40 28 42" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" fill="none" />
      <path d="M38 40 Q40 42 38 44" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" fill="none" />

      {/* Head with gradient */}
      <ellipse cx="32" cy="28" rx="13" ry="15" fill="url(#moleHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="28" cy="22" rx="5" ry="4" fill="rgba(255,255,255,0.1)" />

      {/* Snout (long and pointed) */}
      <ellipse cx="32" cy="38" rx="5" ry="8" fill={color} />
      {/* Snout highlight */}
      <ellipse cx="30" cy="36" rx="2" ry="3" fill="rgba(255,255,255,0.1)" />

      {/* Pink nose with gradient */}
      <ellipse cx="32" cy="42" rx="4" ry="3" fill="url(#moleNoseGradient)" />
      {/* Nose highlight */}
      <ellipse cx="31" cy="41" rx="1.5" ry="1" fill="rgba(255,255,255,0.4)" />
      {/* Nostrils */}
      <circle cx="30" cy="43" r="0.8" fill="#FF6B8A" />
      <circle cx="34" cy="43" r="0.8" fill="#FF6B8A" />

      {/* Tiny eyes (moles have very small eyes) */}
      <circle cx="26" cy="26" r="2" fill="black" />
      <circle cx="38" cy="26" r="2" fill="black" />
      {/* Eye highlights */}
      <circle cx="25" cy="25" r="0.6" fill="white" opacity="0.5" />
      <circle cx="37" cy="25" r="0.6" fill="white" opacity="0.5" />

      {/* Whiskers */}
      <line x1="28" y1="38" x2="20" y2="36" stroke="#8B7355" strokeWidth="0.5" opacity="0.7" />
      <line x1="28" y1="40" x2="18" y2="40" stroke="#8B7355" strokeWidth="0.5" opacity="0.7" />
      <line x1="28" y1="42" x2="20" y2="44" stroke="#8B7355" strokeWidth="0.5" opacity="0.7" />
      <line x1="36" y1="38" x2="44" y2="36" stroke="#8B7355" strokeWidth="0.5" opacity="0.7" />
      <line x1="36" y1="40" x2="46" y2="40" stroke="#8B7355" strokeWidth="0.5" opacity="0.7" />
      <line x1="36" y1="42" x2="44" y2="44" stroke="#8B7355" strokeWidth="0.5" opacity="0.7" />

      {/* Ears (small and hidden in fur) */}
      <ellipse cx="22" cy="20" rx="3" ry="4" fill={color} />
      <ellipse cx="42" cy="20" rx="3" ry="4" fill={color} />
      <ellipse cx="22" cy="20" rx="1.5" ry="2" fill="#FFB6C1" opacity="0.3" />
      <ellipse cx="42" cy="20" rx="1.5" ry="2" fill="#FFB6C1" opacity="0.3" />

      {/* Star-nosed detail (tentacles around nose) */}
      <circle cx="28" cy="44" r="1" fill="#FFB6C1" opacity="0.7" />
      <circle cx="30" cy="45" r="1" fill="#FFB6C1" opacity="0.7" />
      <circle cx="34" cy="45" r="1" fill="#FFB6C1" opacity="0.7" />
      <circle cx="36" cy="44" r="1" fill="#FFB6C1" opacity="0.7" />

      {/* Back feet (small) */}
      <ellipse cx="24" cy="54" rx="4" ry="2" fill={color} />
      <ellipse cx="40" cy="54" rx="4" ry="2" fill={color} />
    </svg>
  );
}
