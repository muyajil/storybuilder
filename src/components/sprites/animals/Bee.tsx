/**
 * Bee Sprite Component
 * Enhanced with gradients, fuzzy texture, and detailed features
 */

import type { SpriteProps } from '../types';

export function Bee({ size = 64, color = '#FFD700' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="beeBodyGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Wing gradient */}
        <radialGradient id="beeWingGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#E8F4FF" stopOpacity="0.6" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="beeHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="beeEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#e8e8e8" />
          <stop offset="100%" stopColor="#d0d0d0" />
        </radialGradient>
        {/* Stripe gradient for 3D effect */}
        <linearGradient id="beeStripeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="50%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#2a2a2a" />
        </linearGradient>
        {/* Fuzzy texture */}
        <filter id="beeFuzzy" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
        </filter>
        {/* Shine gradient */}
        <linearGradient id="beeShineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Wings with vein details */}
      <g>
        {/* Left wing */}
        <ellipse cx="22" cy="18" rx="14" ry="10" fill="url(#beeWingGradient)" />
        <ellipse cx="22" cy="18" rx="12" ry="8" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5" />
        <path d="M14 18 Q22 14 30 18" stroke="#cce8ff" strokeWidth="0.5" fill="none" opacity="0.6" />
        <path d="M16 20 Q22 16 28 20" stroke="#cce8ff" strokeWidth="0.5" fill="none" opacity="0.6" />

        {/* Right wing */}
        <ellipse cx="42" cy="18" rx="14" ry="10" fill="url(#beeWingGradient)" />
        <ellipse cx="42" cy="18" rx="12" ry="8" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5" />
        <path d="M34 18 Q42 14 50 18" stroke="#cce8ff" strokeWidth="0.5" fill="none" opacity="0.6" />
        <path d="M36 20 Q42 16 48 20" stroke="#cce8ff" strokeWidth="0.5" fill="none" opacity="0.6" />
      </g>

      {/* Body */}
      <ellipse cx="32" cy="36" rx="14" ry="18" fill="url(#beeBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="28" rx="6" ry="8" fill="url(#beeShineGradient)" />

      {/* Stripes with rounded edges */}
      <path d="M18 30 Q32 28 46 30 Q46 34 32 32 Q18 34 18 30" fill="url(#beeStripeGradient)" />
      <path d="M18 38 Q32 36 46 38 Q46 42 32 40 Q18 42 18 38" fill="url(#beeStripeGradient)" />
      <path d="M20 46 Q32 44 44 46 Q44 50 32 48 Q20 50 20 46" fill="url(#beeStripeGradient)" />

      {/* Fuzzy texture overlay */}
      <ellipse cx="32" cy="36" rx="13" ry="17" fill={color} opacity="0.1" />

      {/* Head */}
      <circle cx="32" cy="14" r="11" fill="url(#beeHeadGradient)" />
      {/* Head shine */}
      <ellipse cx="28" cy="10" rx="4" ry="3" fill="white" opacity="0.15" />

      {/* Eyes - large and cute */}
      <ellipse cx="27" cy="12" rx="4" ry="4.5" fill="url(#beeEyeGradient)" />
      <ellipse cx="37" cy="12" rx="4" ry="4.5" fill="url(#beeEyeGradient)" />
      {/* Eye pupils */}
      <ellipse cx="27" cy="13" rx="2" ry="2.5" fill="#1a1a1a" />
      <ellipse cx="37" cy="13" rx="2" ry="2.5" fill="#1a1a1a" />
      {/* Eye shine */}
      <circle cx="26" cy="11" r="1.2" fill="white" />
      <circle cx="36" cy="11" r="1.2" fill="white" />
      <circle cx="28" cy="14" r="0.6" fill="white" opacity="0.5" />
      <circle cx="38" cy="14" r="0.6" fill="white" opacity="0.5" />

      {/* Cute smile */}
      <path d="M29 18 Q32 20 35 18" stroke="#4a4a4a" strokeWidth="1" fill="none" />

      {/* Antennae with bounce */}
      <path d="M27 6 Q24 2 22 0" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M37 6 Q40 2 42 0" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Antennae tips */}
      <circle cx="22" cy="0" r="2" fill="#1a1a1a" />
      <circle cx="42" cy="0" r="2" fill="#1a1a1a" />

      {/* Stinger */}
      <polygon points="32,54 29,58 32,62 35,58" fill="#2a2a2a" />
      {/* Stinger highlight */}
      <polygon points="32,54 30,57 32,60" fill="#4a4a4a" opacity="0.3" />

      {/* Legs */}
      <g stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round">
        <path d="M22 34 L16 40 L14 44" />
        <path d="M22 40 L14 46 L12 50" />
        <path d="M42 34 L48 40 L50 44" />
        <path d="M42 40 L50 46 L52 50" />
      </g>

      {/* Pollen baskets on legs - cute detail */}
      <circle cx="14" cy="44" r="2" fill="#FFA500" opacity="0.7" />
      <circle cx="50" cy="44" r="2" fill="#FFA500" opacity="0.7" />
    </svg>
  );
}
