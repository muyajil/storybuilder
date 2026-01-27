/**
 * Brontosaurus Sprite Component
 * Enhanced with gradients, skin texture, and detailed features
 */

import type { SpriteProps } from '../types';

export function Brontosaurus({ size = 64, color = '#6B8E23' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="brontoBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#8AAE43" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Belly gradient */}
        <linearGradient id="brontoBellyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A8C86A" />
          <stop offset="100%" stopColor="#8AAE43" />
        </linearGradient>
        {/* Neck gradient */}
        <linearGradient id="brontoNeckGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor="#8AAE43" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="brontoHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#8AAE43" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="brontoEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#5a4a30" />
          <stop offset="100%" stopColor="#2a2a1a" />
        </radialGradient>
        {/* Shine gradient */}
        <linearGradient id="brontoShineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Skin texture */}
        <pattern id="brontoSkinPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="1" fill="#5a7a13" opacity="0.2" />
        </pattern>
      </defs>

      {/* Tail */}
      <path d="M0 44 Q4 42 8 44 Q12 46 16 44" stroke="url(#brontoNeckGradient)" strokeWidth="7" fill="none" strokeLinecap="round" />
      {/* Tail tip */}
      <circle cx="2" cy="44" r="3" fill={color} />

      {/* Back legs */}
      <rect x="36" y="50" width="8" height="14" rx="3" fill="url(#brontoBodyGradient)" />
      <ellipse cx="40" cy="62" rx="5" ry="2" fill="#5a7a13" />

      {/* Front legs */}
      <rect x="18" y="50" width="8" height="14" rx="3" fill="url(#brontoBodyGradient)" />
      <ellipse cx="22" cy="62" rx="5" ry="2" fill="#5a7a13" />

      {/* Body */}
      <ellipse cx="32" cy="44" rx="20" ry="14" fill="url(#brontoBodyGradient)" />
      {/* Body skin texture */}
      <ellipse cx="32" cy="44" rx="20" ry="14" fill="url(#brontoSkinPattern)" />
      {/* Body highlight */}
      <ellipse cx="26" cy="38" rx="10" ry="6" fill="url(#brontoShineGradient)" />
      {/* Belly */}
      <ellipse cx="32" cy="48" rx="14" ry="8" fill="url(#brontoBellyGradient)" opacity="0.4" />

      {/* Neck - curved and elegant */}
      <path d="M44 40 Q52 32 54 20 Q56 12 54 8" stroke="url(#brontoNeckGradient)" strokeWidth="10" fill="none" strokeLinecap="round" />
      {/* Neck shading */}
      <path d="M44 40 Q52 32 54 20 Q56 12 54 8" stroke="#5a7a13" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.2" />
      {/* Neck highlight */}
      <path d="M46 38 Q52 30 54 18" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.15" />

      {/* Neck belly (lighter underside) */}
      <path d="M42 42 Q48 36 50 24 Q52 16 50 10" stroke="#A8C86A" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.4" />

      {/* Head */}
      <ellipse cx="54" cy="8" rx="10" ry="7" fill="url(#brontoHeadGradient)" />
      {/* Head texture */}
      <ellipse cx="54" cy="8" rx="10" ry="7" fill="url(#brontoSkinPattern)" />
      {/* Head highlight */}
      <ellipse cx="52" cy="5" rx="4" ry="2.5" fill="url(#brontoShineGradient)" />

      {/* Snout */}
      <ellipse cx="60" cy="10" rx="4" ry="3" fill={color} />

      {/* Eye - large and gentle */}
      <ellipse cx="56" cy="6" rx="3" ry="3.5" fill="white" />
      <ellipse cx="56" cy="6" rx="2" ry="2.5" fill="url(#brontoEyeGradient)" />
      {/* Eye shine */}
      <circle cx="55" cy="5" r="0.8" fill="white" />
      <circle cx="57" cy="7" r="0.4" fill="white" opacity="0.5" />

      {/* Nostril */}
      <ellipse cx="62" cy="9" rx="1" ry="0.8" fill="#4a6a13" />

      {/* Friendly smile */}
      <path d="M58 12 Q60 14 62 12" stroke="#4a6a13" strokeWidth="1" fill="none" />

      {/* Cute blush */}
      <ellipse cx="52" cy="10" rx="2" ry="1.5" fill="#C19A6B" opacity="0.3" />

      {/* Back ridge - small bumps */}
      <g fill={color} opacity="0.6">
        <circle cx="24" cy="32" r="2" />
        <circle cx="30" cy="31" r="2.5" />
        <circle cx="36" cy="32" r="2" />
        <circle cx="42" cy="34" r="1.5" />
      </g>

      {/* Leg details - toenails */}
      <g fill="#4a6a13">
        <ellipse cx="19" cy="63" rx="1.5" ry="1" />
        <ellipse cx="22" cy="63" rx="1.5" ry="1" />
        <ellipse cx="25" cy="63" rx="1.5" ry="1" />
        <ellipse cx="37" cy="63" rx="1.5" ry="1" />
        <ellipse cx="40" cy="63" rx="1.5" ry="1" />
        <ellipse cx="43" cy="63" rx="1.5" ry="1" />
      </g>
    </svg>
  );
}
