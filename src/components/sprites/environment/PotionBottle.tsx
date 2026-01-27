/**
 * PotionBottle Sprite Component
 * Enhanced with glass reflections, liquid glow, magical bubbles, and depth
 */

import type { ElementProps } from '../types';

export function PotionBottle({ x = 0, y = 0, size = 35, color = '#9400D3' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 35 49"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Glass bottle gradient */}
        <linearGradient id="potionBottleGlass" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(200,220,255,0.4)" />
          <stop offset="30%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="50%" stopColor="rgba(200,220,255,0.15)" />
          <stop offset="70%" stopColor="rgba(255,255,255,0.25)" />
          <stop offset="100%" stopColor="rgba(180,200,240,0.35)" />
        </linearGradient>

        {/* Liquid gradient with magical glow */}
        <radialGradient id="potionBottleLiquid" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="0.9" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#4A0070" />
        </radialGradient>

        {/* Cork wood texture */}
        <linearGradient id="potionBottleCork" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B4423" />
          <stop offset="30%" stopColor="#8B5A33" />
          <stop offset="50%" stopColor="#9B6A43" />
          <stop offset="70%" stopColor="#8B5A33" />
          <stop offset="100%" stopColor="#5B3413" />
        </linearGradient>

        {/* Magical glow filter */}
        <filter id="potionBottleGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Bubble gradient */}
        <radialGradient id="potionBottleBubble" cx="30%" cy="30%">
          <stop offset="0%" stopColor="white" stopOpacity="0.8" />
          <stop offset="50%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Shadow under bottle */}
      <ellipse cx="17.5" cy="47" rx="10" ry="2" fill="rgba(0,0,0,0.2)" />

      {/* Bottle body - back glass */}
      <ellipse cx="17.5" cy="35" rx="14" ry="12" fill="rgba(100,120,180,0.2)" />
      <rect x="12" y="10" width="11" height="15" fill="rgba(100,120,180,0.15)" />

      {/* Liquid in bottle */}
      <ellipse cx="17.5" cy="36" rx="12" ry="10" fill="url(#potionBottleLiquid)" />
      <rect x="13" y="18" width="9" height="10" fill={color} opacity="0.7" />

      {/* Magical glow around liquid */}
      <ellipse cx="17.5" cy="36" rx="13" ry="11" fill="none" stroke={color} strokeWidth="2" opacity="0.3" filter="url(#potionBottleGlow)" />

      {/* Bottle glass overlay */}
      <ellipse cx="17.5" cy="35" rx="14" ry="12" fill="url(#potionBottleGlass)" />
      <rect x="12" y="10" width="11" height="15" fill="url(#potionBottleGlass)" />

      {/* Bottle neck */}
      <rect x="14" y="5" width="7" height="8" fill="url(#potionBottleGlass)" />
      <rect x="14" y="5" width="7" height="8" fill="rgba(200,220,255,0.3)" />

      {/* Cork with texture */}
      <rect x="13" y="0" width="9" height="6" fill="url(#potionBottleCork)" rx="1" />
      {/* Cork grain lines */}
      <line x1="14" y1="1" x2="14" y2="5" stroke="#5B3413" strokeWidth="0.5" opacity="0.5" />
      <line x1="17" y1="0" x2="17" y2="6" stroke="#5B3413" strokeWidth="0.3" opacity="0.4" />
      <line x1="20" y1="1" x2="20" y2="5" stroke="#5B3413" strokeWidth="0.5" opacity="0.5" />

      {/* Animated bubbles */}
      <circle cx="14" cy="32" r="2.5" fill="url(#potionBottleBubble)" />
      <circle cx="20" cy="36" r="2" fill="url(#potionBottleBubble)" />
      <circle cx="16" cy="40" r="1.5" fill="url(#potionBottleBubble)" />
      <circle cx="19" cy="30" r="1" fill="url(#potionBottleBubble)" />
      <circle cx="15" cy="38" r="1.2" fill="url(#potionBottleBubble)" />

      {/* Glass highlights */}
      <ellipse cx="11" cy="28" rx="2" ry="5" fill="white" opacity="0.4" />
      <ellipse cx="11" cy="38" rx="1.5" ry="4" fill="white" opacity="0.25" />

      {/* Rim highlight */}
      <ellipse cx="17.5" cy="10" rx="5" ry="1" fill="white" opacity="0.3" />

      {/* Sparkle effects */}
      <circle cx="22" cy="32" r="0.8" fill="white" opacity="0.7" />
      <circle cx="13" cy="25" r="0.5" fill="white" opacity="0.6" />

      {/* Magical particles around bottle */}
      <circle cx="8" cy="30" r="1" fill={color} opacity="0.4" filter="url(#potionBottleGlow)" />
      <circle cx="27" cy="35" r="0.8" fill={color} opacity="0.3" filter="url(#potionBottleGlow)" />
      <circle cx="25" cy="25" r="0.6" fill={color} opacity="0.35" filter="url(#potionBottleGlow)" />
    </svg>
  );
}
