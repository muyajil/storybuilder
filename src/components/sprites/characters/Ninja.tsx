/**
 * Ninja Sprite Component
 * Enhanced with gradients, detailed gear, and stealthy appearance
 */

import type { SpriteProps } from '../types';

export function Ninja({ size = 64, color = '#1a1a1a' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Ninja suit gradient */}
        <linearGradient id="ninjaSuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#333333" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        {/* Skin gradient */}
        <linearGradient id="ninjaSkinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </linearGradient>
        {/* Belt gradient */}
        <linearGradient id="ninjaBeltGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A00000" />
          <stop offset="50%" stopColor="#8B0000" />
          <stop offset="100%" stopColor="#660000" />
        </linearGradient>
        {/* Sword blade gradient */}
        <linearGradient id="ninjaSwordGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#E0E0E0" />
          <stop offset="70%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#A0A0A0" />
        </linearGradient>
        {/* Sword handle gradient */}
        <linearGradient id="ninjaHandleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="50%" stopColor="#5C3317" />
          <stop offset="100%" stopColor="#3D2314" />
        </linearGradient>
        {/* Eye glow */}
        <radialGradient id="ninjaEyeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </radialGradient>
      </defs>

      {/* Hood shadow */}
      <circle cx="33" cy="19" r="14" fill="#0D0D0D" opacity="0.5" />

      {/* Hood / Kapuze */}
      <circle cx="32" cy="18" r="14" fill="url(#ninjaSuitGradient)" />

      {/* Hood folds/details */}
      <path d="M20 14 Q24 10 32 10 Q40 10 44 14" stroke="#333333" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M22 20 Q26 18 32 18 Q38 18 42 20" stroke="#0D0D0D" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Eye slit / Augen-Schlitz */}
      <rect x="19" y="14" width="26" height="9" fill="url(#ninjaSkinGradient)" rx="2" />

      {/* Eye slit shadow */}
      <rect x="19" y="14" width="26" height="2" fill="#0D0D0D" opacity="0.2" />

      {/* Eyes / Augen */}
      <ellipse cx="26" cy="18" rx="3" ry="2.5" fill="url(#ninjaEyeGlow)" />
      <ellipse cx="38" cy="18" rx="3" ry="2.5" fill="url(#ninjaEyeGlow)" />
      <circle cx="26" cy="18" r="2" fill="#1A1A1A" />
      <circle cx="38" cy="18" r="2" fill="#1A1A1A" />
      {/* Eye shine */}
      <circle cx="27" cy="17" r="0.8" fill="white" />
      <circle cx="39" cy="17" r="0.8" fill="white" />

      {/* Intense eyebrows */}
      <path d="M23 15 L29 16" stroke="#333333" strokeWidth="1" />
      <path d="M41 15 L35 16" stroke="#333333" strokeWidth="1" />

      {/* Body / Körper */}
      <rect x="19" y="32" width="26" height="21" fill="url(#ninjaSuitGradient)" rx="3" />

      {/* Body shading */}
      <rect x="19" y="32" width="9" height="21" fill="#0D0D0D" opacity="0.3" rx="3" />

      {/* Chest wrap detail */}
      <path d="M22 34 L42 38" stroke="#333333" strokeWidth="1" opacity="0.5" />
      <path d="M22 38 L42 42" stroke="#333333" strokeWidth="1" opacity="0.5" />

      {/* Belt / Gürtel */}
      <rect x="17" y="40" width="30" height="5" fill="url(#ninjaBeltGradient)" rx="1" />
      {/* Belt knot */}
      <circle cx="32" cy="42" r="3" fill="#8B0000" />
      <path d="M32 45 L30 52" stroke="#8B0000" strokeWidth="2" />
      <path d="M32 45 L34 50" stroke="#8B0000" strokeWidth="2" />

      {/* Arms / Arme */}
      <rect x="7" y="32" width="12" height="6" fill="url(#ninjaSuitGradient)" rx="3" />
      <rect x="45" y="32" width="12" height="6" fill="url(#ninjaSuitGradient)" rx="3" />

      {/* Arm wrappings */}
      <line x1="9" y1="33" x2="17" y2="36" stroke="#333333" strokeWidth="0.5" opacity="0.5" />
      <line x1="47" y1="33" x2="55" y2="36" stroke="#333333" strokeWidth="0.5" opacity="0.5" />

      {/* Hands / Hände */}
      <circle cx="7" cy="35" r="4" fill="url(#ninjaSuitGradient)" />
      <circle cx="57" cy="35" r="4" fill="url(#ninjaSuitGradient)" />

      {/* Finger details */}
      <path d="M4 33 L3 31" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" />
      <path d="M6 32 L5 30" stroke="#1A1A1A" strokeWidth="1" strokeLinecap="round" />

      {/* Sword on back / Schwert */}
      <rect x="44" y="6" width="4" height="38" fill="url(#ninjaSwordGradient)" />
      {/* Sword edge highlight */}
      <rect x="44" y="6" width="1" height="38" fill="#FFFFFF" opacity="0.5" />
      {/* Sword tip */}
      <polygon points="44,6 48,6 46,2" fill="url(#ninjaSwordGradient)" />

      {/* Sword handle / Griff */}
      <rect x="42" y="42" width="8" height="8" fill="url(#ninjaHandleGradient)" rx="1" />
      {/* Handle wrap pattern */}
      <path d="M43 43 L49 49" stroke="#3D2314" strokeWidth="1" />
      <path d="M43 46 L49 46" stroke="#3D2314" strokeWidth="1" />
      <path d="M43 49 L49 43" stroke="#3D2314" strokeWidth="1" />

      {/* Sword guard / Tsuba */}
      <ellipse cx="46" cy="42" rx="5" ry="2" fill="#333333" />

      {/* Legs / Beine */}
      <rect x="21" y="52" width="9" height="12" fill="url(#ninjaSuitGradient)" rx="2" />
      <rect x="34" y="52" width="9" height="12" fill="url(#ninjaSuitGradient)" rx="2" />

      {/* Leg wrappings */}
      <line x1="22" y1="54" x2="29" y2="56" stroke="#333333" strokeWidth="0.5" opacity="0.5" />
      <line x1="22" y1="58" x2="29" y2="60" stroke="#333333" strokeWidth="0.5" opacity="0.5" />
      <line x1="35" y1="54" x2="42" y2="56" stroke="#333333" strokeWidth="0.5" opacity="0.5" />
      <line x1="35" y1="58" x2="42" y2="60" stroke="#333333" strokeWidth="0.5" opacity="0.5" />

      {/* Tabi boots */}
      <path d="M21 62 L21 64 L26 64 L26 62" fill="#1A1A1A" />
      <path d="M26 62 L26 64 L30 64 L30 62" fill="#1A1A1A" />
      <path d="M34 62 L34 64 L38 64 L38 62" fill="#1A1A1A" />
      <path d="M38 62 L38 64 L43 64 L43 62" fill="#1A1A1A" />

      {/* Throwing stars on belt */}
      <polygon points="20,42 22,40 24,42 22,44" fill="#C0C0C0" transform="scale(0.5) translate(28, 76)" />
    </svg>
  );
}
