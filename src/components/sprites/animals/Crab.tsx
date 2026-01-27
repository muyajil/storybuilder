/**
 * Crab Sprite Component
 * Enhanced with gradients, shell texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Crab({ size = 64, color = '#FF4500' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="crabBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF6633" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Claw gradient */}
        <radialGradient id="crabClawGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF6633" />
          <stop offset="100%" stopColor="#CC3700" />
        </radialGradient>
        {/* Eye stalk gradient */}
        <linearGradient id="crabEyeStalkGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#FF6633" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="crabEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* Shell shine */}
        <linearGradient id="crabShineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Shell texture pattern */}
        <pattern id="crabShellPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="1.5" fill="#CC3700" opacity="0.2" />
        </pattern>
        {/* Claw pincer gradient */}
        <linearGradient id="crabPincerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6633" />
          <stop offset="100%" stopColor="#CC3700" />
        </linearGradient>
      </defs>

      {/* Legs */}
      <g stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Left legs */}
        <path d="M18 44 L10 54 L4 52" />
        <path d="M22 46 L14 58 L8 56" />
        <path d="M26 48 L22 60 L16 58" />
        {/* Right legs */}
        <path d="M46 44 L54 54 L60 52" />
        <path d="M42 46 L50 58 L56 56" />
        <path d="M38 48 L42 60 L48 58" />
      </g>
      {/* Leg joints */}
      <g fill="#CC3700">
        <circle cx="10" cy="54" r="2" />
        <circle cx="14" cy="58" r="2" />
        <circle cx="22" cy="60" r="2" />
        <circle cx="54" cy="54" r="2" />
        <circle cx="50" cy="58" r="2" />
        <circle cx="42" cy="60" r="2" />
      </g>

      {/* Arms connecting to claws */}
      <rect x="10" y="26" width="10" height="5" rx="2" fill="url(#crabBodyGradient)" />
      <rect x="44" y="26" width="10" height="5" rx="2" fill="url(#crabBodyGradient)" />

      {/* Left claw */}
      <g>
        <ellipse cx="6" cy="26" rx="9" ry="7" fill="url(#crabClawGradient)" />
        {/* Claw pincer top */}
        <ellipse cx="2" cy="22" rx="5" ry="7" fill="url(#crabPincerGradient)" transform="rotate(-20 2 22)" />
        {/* Claw pincer bottom */}
        <ellipse cx="4" cy="30" rx="4" ry="5" fill="url(#crabPincerGradient)" transform="rotate(10 4 30)" />
        {/* Claw gap */}
        <path d="M0 24 L6 26" stroke="#CC3700" strokeWidth="1" />
        {/* Claw shine */}
        <ellipse cx="4" cy="24" rx="3" ry="2" fill="url(#crabShineGradient)" />
        {/* Claw texture bumps */}
        <circle cx="8" cy="24" r="1" fill="#CC3700" opacity="0.4" />
        <circle cx="6" cy="28" r="0.8" fill="#CC3700" opacity="0.4" />
      </g>

      {/* Right claw */}
      <g>
        <ellipse cx="58" cy="26" rx="9" ry="7" fill="url(#crabClawGradient)" />
        {/* Claw pincer top */}
        <ellipse cx="62" cy="22" rx="5" ry="7" fill="url(#crabPincerGradient)" transform="rotate(20 62 22)" />
        {/* Claw pincer bottom */}
        <ellipse cx="60" cy="30" rx="4" ry="5" fill="url(#crabPincerGradient)" transform="rotate(-10 60 30)" />
        {/* Claw gap */}
        <path d="M64 24 L58 26" stroke="#CC3700" strokeWidth="1" />
        {/* Claw shine */}
        <ellipse cx="60" cy="24" rx="3" ry="2" fill="url(#crabShineGradient)" />
        {/* Claw texture bumps */}
        <circle cx="56" cy="24" r="1" fill="#CC3700" opacity="0.4" />
        <circle cx="58" cy="28" r="0.8" fill="#CC3700" opacity="0.4" />
      </g>

      {/* Body/Shell */}
      <ellipse cx="32" cy="38" rx="20" ry="16" fill="url(#crabBodyGradient)" />
      {/* Shell texture */}
      <ellipse cx="32" cy="38" rx="20" ry="16" fill="url(#crabShellPattern)" />
      {/* Shell shine */}
      <ellipse cx="26" cy="32" rx="10" ry="6" fill="url(#crabShineGradient)" />

      {/* Shell ridge details */}
      <g stroke="#CC3700" strokeWidth="1" opacity="0.4" fill="none">
        <path d="M18 36 Q32 32 46 36" />
        <path d="M20 42 Q32 38 44 42" />
      </g>

      {/* Shell bumps */}
      <g fill="#CC3700" opacity="0.3">
        <circle cx="26" cy="40" r="2" />
        <circle cx="32" cy="36" r="2.5" />
        <circle cx="38" cy="40" r="2" />
        <circle cx="32" cy="44" r="1.5" />
      </g>

      {/* Eye stalks */}
      <rect x="24" y="18" width="4" height="10" rx="2" fill="url(#crabEyeStalkGradient)" />
      <rect x="36" y="18" width="4" height="10" rx="2" fill="url(#crabEyeStalkGradient)" />

      {/* Eyes */}
      <circle cx="26" cy="14" r="6" fill="url(#crabBodyGradient)" />
      <circle cx="38" cy="14" r="6" fill="url(#crabBodyGradient)" />
      {/* Eye whites */}
      <circle cx="26" cy="14" r="4" fill="white" />
      <circle cx="38" cy="14" r="4" fill="white" />
      {/* Eye pupils */}
      <circle cx="26" cy="14" r="2.5" fill="url(#crabEyeGradient)" />
      <circle cx="38" cy="14" r="2.5" fill="url(#crabEyeGradient)" />
      {/* Eye shine */}
      <circle cx="25" cy="13" r="1" fill="white" />
      <circle cx="37" cy="13" r="1" fill="white" />
      <circle cx="27" cy="15" r="0.5" fill="white" opacity="0.5" />
      <circle cx="39" cy="15" r="0.5" fill="white" opacity="0.5" />

      {/* Cute mouth */}
      <path d="M28 46 Q32 50 36 46" stroke="#CC3700" strokeWidth="1.5" fill="none" />

      {/* Blush */}
      <ellipse cx="24" cy="44" rx="3" ry="2" fill="#FFB6C1" opacity="0.4" />
      <ellipse cx="40" cy="44" rx="3" ry="2" fill="#FFB6C1" opacity="0.4" />

      {/* Bubble detail */}
      <circle cx="32" cy="52" r="2" fill="white" opacity="0.4" />
      <circle cx="36" cy="50" r="1" fill="white" opacity="0.3" />
    </svg>
  );
}
