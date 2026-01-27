/**
 * Beaver Sprite Component
 * Enhanced with gradients, fur texture, and detailed features
 */

import type { SpriteProps } from '../types';

export function Beaver({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="beaverBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0652D" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="beaverHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0652D" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Tail gradient */}
        <radialGradient id="beaverTailGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#5a4030" />
          <stop offset="100%" stopColor="#3a2818" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="beaverNoseGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* Teeth gradient */}
        <linearGradient id="beaverTeethGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFEF0" />
          <stop offset="100%" stopColor="#F5E6C8" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="beaverEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4a3520" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Fur shine */}
        <linearGradient id="beaverShineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Fur texture */}
        <pattern id="beaverFurPattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <path d="M0 2 Q2 0 4 2" stroke={color} strokeWidth="0.4" fill="none" opacity="0.3" />
        </pattern>
      </defs>

      {/* Tail - flat paddle shape */}
      <ellipse cx="54" cy="48" rx="10" ry="8" fill="url(#beaverTailGradient)" />
      {/* Tail scale pattern */}
      <g opacity="0.4">
        <path d="M48 44 L48 52" stroke="#2a1a10" strokeWidth="0.5" />
        <path d="M51 43 L51 53" stroke="#2a1a10" strokeWidth="0.5" />
        <path d="M54 42 L54 54" stroke="#2a1a10" strokeWidth="0.5" />
        <path d="M57 43 L57 53" stroke="#2a1a10" strokeWidth="0.5" />
        <path d="M60 44 L60 52" stroke="#2a1a10" strokeWidth="0.5" />
        <path d="M46 46 L62 46" stroke="#2a1a10" strokeWidth="0.5" />
        <path d="M45 48 L63 48" stroke="#2a1a10" strokeWidth="0.5" />
        <path d="M46 50 L62 50" stroke="#2a1a10" strokeWidth="0.5" />
      </g>

      {/* Body */}
      <ellipse cx="32" cy="42" rx="20" ry="14" fill="url(#beaverBodyGradient)" />
      {/* Body fur texture */}
      <ellipse cx="32" cy="42" rx="20" ry="14" fill="url(#beaverFurPattern)" />
      {/* Body highlight */}
      <ellipse cx="26" cy="36" rx="8" ry="5" fill="url(#beaverShineGradient)" />

      {/* Belly - lighter */}
      <ellipse cx="32" cy="46" rx="10" ry="6" fill="#DEB887" opacity="0.3" />

      {/* Front paws */}
      <ellipse cx="18" cy="50" rx="4" ry="5" fill={color} />
      <ellipse cx="46" cy="50" rx="4" ry="5" fill={color} />

      {/* Head */}
      <circle cx="32" cy="24" r="16" fill="url(#beaverHeadGradient)" />
      {/* Head fur texture */}
      <circle cx="32" cy="24" r="16" fill="url(#beaverFurPattern)" />
      {/* Head highlight */}
      <ellipse cx="26" cy="18" rx="6" ry="4" fill="url(#beaverShineGradient)" />

      {/* Cheeks - chubby */}
      <ellipse cx="20" cy="28" rx="6" ry="5" fill={color} />
      <ellipse cx="44" cy="28" rx="6" ry="5" fill={color} />
      <ellipse cx="20" cy="28" rx="4" ry="3" fill="#DEB887" opacity="0.3" />
      <ellipse cx="44" cy="28" rx="4" ry="3" fill="#DEB887" opacity="0.3" />

      {/* Ears */}
      <ellipse cx="18" cy="12" rx="4" ry="5" fill={color} />
      <ellipse cx="46" cy="12" rx="4" ry="5" fill={color} />
      <ellipse cx="18" cy="12" rx="2" ry="3" fill="#DEB887" opacity="0.5" />
      <ellipse cx="46" cy="12" rx="2" ry="3" fill="#DEB887" opacity="0.5" />

      {/* Eyes */}
      <ellipse cx="25" cy="22" rx="4" ry="4.5" fill="white" />
      <ellipse cx="39" cy="22" rx="4" ry="4.5" fill="white" />
      <ellipse cx="25" cy="22" rx="2.5" ry="3" fill="url(#beaverEyeGradient)" />
      <ellipse cx="39" cy="22" rx="2.5" ry="3" fill="url(#beaverEyeGradient)" />
      {/* Eye shine */}
      <circle cx="24" cy="21" r="1" fill="white" />
      <circle cx="38" cy="21" r="1" fill="white" />
      <circle cx="26" cy="23" r="0.5" fill="white" opacity="0.5" />
      <circle cx="40" cy="23" r="0.5" fill="white" opacity="0.5" />

      {/* Nose */}
      <ellipse cx="32" cy="30" rx="4" ry="3" fill="url(#beaverNoseGradient)" />
      {/* Nose highlight */}
      <ellipse cx="31" cy="29" rx="1.5" ry="1" fill="white" opacity="0.3" />

      {/* Prominent beaver teeth */}
      <rect x="27" y="33" width="4" height="8" rx="1" fill="url(#beaverTeethGradient)" stroke="#d4c4a8" strokeWidth="0.5" />
      <rect x="33" y="33" width="4" height="8" rx="1" fill="url(#beaverTeethGradient)" stroke="#d4c4a8" strokeWidth="0.5" />
      {/* Tooth lines */}
      <line x1="29" y1="34" x2="29" y2="40" stroke="#e8d8c0" strokeWidth="0.5" />
      <line x1="35" y1="34" x2="35" y2="40" stroke="#e8d8c0" strokeWidth="0.5" />

      {/* Whisker dots */}
      <circle cx="22" cy="30" r="0.8" fill="#5a3d1a" />
      <circle cx="24" cy="32" r="0.8" fill="#5a3d1a" />
      <circle cx="42" cy="30" r="0.8" fill="#5a3d1a" />
      <circle cx="40" cy="32" r="0.8" fill="#5a3d1a" />

      {/* Whiskers */}
      <g stroke="#5a3d1a" strokeWidth="0.5" opacity="0.6">
        <line x1="18" y1="28" x2="10" y2="26" />
        <line x1="18" y1="30" x2="10" y2="30" />
        <line x1="46" y1="28" x2="54" y2="26" />
        <line x1="46" y1="30" x2="54" y2="30" />
      </g>

      {/* Feet with webbing hint */}
      <ellipse cx="22" cy="56" rx="5" ry="3" fill={color} />
      <ellipse cx="42" cy="56" rx="5" ry="3" fill={color} />
      <g stroke="#6a4523" strokeWidth="0.5" opacity="0.4">
        <line x1="19" y1="55" x2="19" y2="58" />
        <line x1="22" y1="55" x2="22" y2="58" />
        <line x1="25" y1="55" x2="25" y2="58" />
        <line x1="39" y1="55" x2="39" y2="58" />
        <line x1="42" y1="55" x2="42" y2="58" />
        <line x1="45" y1="55" x2="45" y2="58" />
      </g>
    </svg>
  );
}
