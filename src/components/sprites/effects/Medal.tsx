/**
 * Medal Sprite Component
 * Enhanced with metallic gradients, shine effects, and rich colors
 */

import type { EffectProps } from '../types';

export function Medal({ x = 0, y = 0, size = 32}: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Red ribbon gradient */}
        <linearGradient id="medalRedRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="30%" stopColor="#FF0000" />
          <stop offset="70%" stopColor="#CC0000" />
          <stop offset="100%" stopColor="#990000" />
        </linearGradient>

        {/* Blue ribbon gradient */}
        <linearGradient id="medalBlueRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4488FF" />
          <stop offset="30%" stopColor="#0044FF" />
          <stop offset="70%" stopColor="#0000CC" />
          <stop offset="100%" stopColor="#000099" />
        </linearGradient>

        {/* Gold medal gradient */}
        <radialGradient id="medalGoldGrad" cx="35%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FFF9C4" />
          <stop offset="30%" stopColor="#FFE082" />
          <stop offset="60%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>

        {/* Medal edge gradient */}
        <linearGradient id="medalEdge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DAA520" />
          <stop offset="50%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>

        {/* Star gradient on medal */}
        <linearGradient id="medalStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DAA520" />
          <stop offset="50%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>

        {/* Shine filter */}
        <filter id="medalShine" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Glow effect */}
        <filter id="medalGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ribbon shadows */}
      <polygon points="10,0 14,14 8,14" fill="#660000" opacity="0.3" transform="translate(1, 1)" />
      <polygon points="22,0 18,14 24,14" fill="#000066" opacity="0.3" transform="translate(1, 1)" />

      {/* Band / Ribbon with gradients */}
      <polygon points="10,0 14,14 8,14" fill="url(#medalRedRibbon)" />
      <polygon points="22,0 18,14 24,14" fill="url(#medalBlueRibbon)" />

      {/* Ribbon highlights */}
      <polygon points="10,0 12,7 10,7" fill="white" opacity="0.3" />
      <polygon points="22,0 20,7 22,7" fill="white" opacity="0.3" />

      {/* Medal shadow */}
      <circle cx="17" cy="23" r="10" fill="#000" opacity="0.2" />

      {/* Medal body with gradient */}
      <circle cx="16" cy="22" r="10" fill="url(#medalGoldGrad)" stroke="url(#medalEdge)" strokeWidth="2" filter="url(#medalGlow)" />

      {/* Inner decorative ring */}
      <circle cx="16" cy="22" r="7" fill="none" stroke="url(#medalEdge)" strokeWidth="1" opacity="0.7" />
      <circle cx="16" cy="22" r="6" fill="none" stroke="#FFF9C4" strokeWidth="0.5" opacity="0.5" />

      {/* Central star with gradient */}
      <polygon
        points="16,16 17,20 21,20 18,23 19,27 16,25 13,27 14,23 11,20 15,20"
        fill="url(#medalStarGrad)"
        filter="url(#medalShine)"
      />

      {/* Star highlight */}
      <polygon
        points="16,17 16.5,19.5 19,20 17,21.5 17.5,24 16,23 14.5,24 15,21.5 13,20 15.5,19.5"
        fill="#FFF9C4"
        opacity="0.4"
      />

      {/* Shine spots */}
      <ellipse cx="12" cy="18" rx="2" ry="3" fill="white" opacity="0.5" />
      <circle cx="20" cy="26" r="1" fill="white" opacity="0.3" />

      {/* Sparkle accents */}
      <g filter="url(#medalShine)">
        <polygon points="8,18 8.5,19 10,19 8.5,20 9,21 8,20 7,21 7.5,20 6,19 7.5,19" fill="white" opacity="0.8" />
        <polygon points="24,20 24.3,20.6 25,20.6 24.3,21 24.5,21.6 24,21.2 23.5,21.6 23.7,21 23,20.6 23.7,20.6" fill="white" opacity="0.6" />
      </g>
    </svg>
  );
}
