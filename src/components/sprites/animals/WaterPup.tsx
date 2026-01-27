/**
 * WaterPup Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function WaterPup({ size = 64, color = '#4169E1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="waterPupBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#6090F0" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#2A50B0" />
        </radialGradient>
        {/* Fin pattern gradient */}
        <linearGradient id="waterPupFinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0D0FF" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#6BB8DC" />
        </linearGradient>
        {/* Tail gradient */}
        <radialGradient id="waterPupTailGradient" cx="30%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="waterPupEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#0000A0" />
          <stop offset="100%" stopColor="#000080" />
        </radialGradient>
        {/* Bubble gradient */}
        <radialGradient id="waterPupBubbleGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#87CEEB" stopOpacity="0.3" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="36" cy="58" rx="20" ry="4" fill="#2A50B0" opacity="0.3" />

      {/* Water tail */}
      <ellipse cx="10" cy="38" rx="8" ry="6" fill="url(#waterPupTailGradient)" opacity="0.8" />
      <ellipse cx="8" cy="36" rx="6" ry="8" fill="url(#waterPupBodyGradient)" />

      {/* Tail highlight */}
      <ellipse cx="6" cy="34" rx="3" ry="4" fill="#A0D0FF" opacity="0.5" />

      {/* Tail fin detail */}
      <path d="M4 32 Q2 36 4 40" stroke="#6BB8DC" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Body */}
      <ellipse cx="32" cy="40" rx="16" ry="12" fill="url(#waterPupBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="36" rx="8" ry="5" fill="#6090F0" opacity="0.5" />

      {/* Fin pattern on body */}
      <ellipse cx="32" cy="36" rx="12" ry="6" fill="url(#waterPupFinGradient)" opacity="0.6" />

      {/* Body scales/water texture */}
      <path d="M24 38 Q26 42 24 46" stroke="#2A50B0" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M32 36 Q34 42 32 48" stroke="#2A50B0" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M40 38 Q38 42 40 46" stroke="#2A50B0" strokeWidth="0.5" fill="none" opacity="0.3" />

      {/* Head */}
      <circle cx="48" cy="30" r="14" fill="url(#waterPupBodyGradient)" />

      {/* Head highlight */}
      <ellipse cx="44" cy="24" rx="5" ry="4" fill="#6090F0" opacity="0.6" />

      {/* Ears/Fins - outer */}
      <ellipse cx="38" cy="18" rx="4" ry="10" fill="url(#waterPupBodyGradient)" />
      <ellipse cx="58" cy="18" rx="4" ry="10" fill="url(#waterPupBodyGradient)" />

      {/* Ears/Fins - inner pattern */}
      <ellipse cx="38" cy="18" rx="2" ry="8" fill="url(#waterPupFinGradient)" />
      <ellipse cx="58" cy="18" rx="2" ry="8" fill="url(#waterPupFinGradient)" />

      {/* Ear highlights */}
      <ellipse cx="38" cy="14" rx="1" ry="4" fill="#A0D0FF" opacity="0.5" />
      <ellipse cx="58" cy="14" rx="1" ry="4" fill="#A0D0FF" opacity="0.5" />

      {/* Eyes - white */}
      <circle cx="44" cy="28" r="5" fill="white" />
      <circle cx="54" cy="28" r="5" fill="white" />

      {/* Eyes - iris */}
      <circle cx="44" cy="28" r="3.5" fill="url(#waterPupEyeGradient)" />
      <circle cx="54" cy="28" r="3.5" fill="url(#waterPupEyeGradient)" />

      {/* Eyes - pupils */}
      <circle cx="44" cy="28" r="1.5" fill="#1a1a1a" />
      <circle cx="54" cy="28" r="1.5" fill="#1a1a1a" />

      {/* Eye shine */}
      <circle cx="45" cy="27" r="1.2" fill="white" />
      <circle cx="55" cy="27" r="1.2" fill="white" />
      <circle cx="43" cy="29" r="0.5" fill="white" opacity="0.5" />
      <circle cx="53" cy="29" r="0.5" fill="white" opacity="0.5" />

      {/* Nose */}
      <ellipse cx="49" cy="36" rx="3.5" ry="2.5" fill="#1a1a1a" />
      <ellipse cx="49" cy="35.5" rx="2" ry="1.5" fill="#2a2a2a" />
      <ellipse cx="48" cy="35" rx="0.8" ry="0.5" fill="#4a4a4a" opacity="0.5" />

      {/* Mouth */}
      <path d="M46 40 Q49 42 52 40" stroke="#2A50B0" strokeWidth="1" fill="none" />

      {/* Whiskers */}
      <path d="M42 36 L34 34" stroke="#87CEEB" strokeWidth="0.5" opacity="0.5" />
      <path d="M42 38 L34 40" stroke="#87CEEB" strokeWidth="0.5" opacity="0.5" />
      <path d="M56 36 L64 34" stroke="#87CEEB" strokeWidth="0.5" opacity="0.5" />
      <path d="M56 38 L64 40" stroke="#87CEEB" strokeWidth="0.5" opacity="0.5" />

      {/* Legs/flippers */}
      <ellipse cx="25" cy="54" rx="5" ry="4" fill="url(#waterPupBodyGradient)" />
      <ellipse cx="39" cy="54" rx="5" ry="4" fill="url(#waterPupBodyGradient)" />

      {/* Flipper highlights */}
      <ellipse cx="25" cy="53" rx="3" ry="2.5" fill="#6090F0" opacity="0.5" />
      <ellipse cx="39" cy="53" rx="3" ry="2.5" fill="#6090F0" opacity="0.5" />

      {/* Flipper webbing hints */}
      <path d="M22 56 L20 58 M25 57 L25 59 M28 56 L30 58" stroke="#2A50B0" strokeWidth="0.5" opacity="0.4" />
      <path d="M36 56 L34 58 M39 57 L39 59 M42 56 L44 58" stroke="#2A50B0" strokeWidth="0.5" opacity="0.4" />

      {/* Bubbles */}
      <circle cx="60" cy="22" r="2.5" fill="url(#waterPupBubbleGradient)" />
      <circle cx="64" cy="18" r="1.5" fill="url(#waterPupBubbleGradient)" opacity="0.6" />
      <circle cx="62" cy="14" r="1" fill="url(#waterPupBubbleGradient)" opacity="0.4" />
      <circle cx="56" cy="12" r="0.8" fill="url(#waterPupBubbleGradient)" opacity="0.3" />

      {/* Water droplet on head */}
      <path d="M50 18 Q52 14 54 18 Q52 20 50 18" fill="#A0D0FF" opacity="0.6" />
    </svg>
  );
}
