/**
 * Potion Sprite Component
 * Enhanced with magical liquid effects, glowing gradients, and bubbles
 */

import type { EffectProps } from '../types';

export function Potion({ x = 0, y = 0, size = 24}: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Cork gradient */}
        <linearGradient id="potionCorkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0E0E0" />
          <stop offset="30%" stopColor="#C0C0C0" />
          <stop offset="70%" stopColor="#A0A0A0" />
          <stop offset="100%" stopColor="#808080" />
        </linearGradient>

        {/* Glass gradient */}
        <linearGradient id="potionGlassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
        </linearGradient>

        {/* Liquid gradient */}
        <linearGradient id="potionLiquidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#BA68C8" />
          <stop offset="30%" stopColor="#9400D3" />
          <stop offset="70%" stopColor="#7B1FA2" />
          <stop offset="100%" stopColor="#4A148C" />
        </linearGradient>

        {/* Magical glow */}
        <radialGradient id="potionMagicGlow" cx="50%" cy="70%" r="50%">
          <stop offset="0%" stopColor="#E040FB" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#9400D3" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4A148C" stopOpacity="0" />
        </radialGradient>

        {/* Bubble gradient */}
        <radialGradient id="potionBubbleGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#E1BEE7" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#9400D3" stopOpacity="0.2" />
        </radialGradient>

        {/* Glow filter */}
        <filter id="potionGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Sparkle filter */}
        <filter id="potionSparkle" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Magical aura */}
      <ellipse cx="12" cy="16" rx="8" ry="6" fill="url(#potionMagicGlow)" />

      {/* Cork shadow */}
      <rect x="10" y="3" width="6" height="4" fill="#666" opacity="0.3" rx="1" transform="translate(0.5, 0.5)" />

      {/* Cork with gradient */}
      <rect x="9" y="2" width="6" height="4" fill="url(#potionCorkGrad)" rx="1" stroke="#888" strokeWidth="0.5" />

      {/* Cork highlight */}
      <rect x="10" y="2.5" width="2" height="3" fill="white" opacity="0.3" rx="0.5" />

      {/* Neck */}
      <rect x="10" y="5" width="4" height="3" fill="url(#potionGlassGrad)" stroke="#AAA" strokeWidth="0.3" />

      {/* Flask shadow */}
      <path d="M11 9 L7 15 L7 23 L19 23 L19 15 L15 9 Z" fill="#333" opacity="0.2" transform="translate(0.5, 0.5)" />

      {/* Flask glass body */}
      <path d="M10 8 L6 14 L6 22 L18 22 L18 14 L14 8 Z" fill="url(#potionGlassGrad)" stroke="#AAA" strokeWidth="0.5" />

      {/* Liquid fill */}
      <path d="M10 8 L6 14 L6 22 L18 22 L18 14 L14 8 Z" fill="url(#potionLiquidGrad)" opacity="0.85" filter="url(#potionGlow)" />

      {/* Liquid surface shine */}
      <ellipse cx="12" cy="10" rx="2" ry="0.5" fill="white" opacity="0.4" />

      {/* Glass reflection */}
      <path d="M7 12 L7 20 Q7 21 8 21" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round" />

      {/* Bubbles with gradient */}
      <circle cx="10" cy="16" r="1.2" fill="url(#potionBubbleGrad)" />
      <circle cx="14" cy="14" r="1" fill="url(#potionBubbleGrad)" />
      <circle cx="9" cy="19" r="0.8" fill="url(#potionBubbleGrad)" />
      <circle cx="15" cy="18" r="0.6" fill="url(#potionBubbleGrad)" />
      <circle cx="11" cy="12" r="0.5" fill="url(#potionBubbleGrad)" />

      {/* Rising bubbles */}
      <circle cx="13" cy="11" r="0.4" fill="white" opacity="0.6" />
      <circle cx="11" cy="10" r="0.3" fill="white" opacity="0.5" />

      {/* Bottom glow */}
      <ellipse cx="12" cy="20" rx="4" ry="1.5" fill="#E040FB" opacity="0.2" />

      {/* Magical sparkles */}
      <g filter="url(#potionSparkle)">
        <polygon points="4,10 4.3,10.8 5,11 4.3,11.2 4.5,12 4,11.4 3.5,12 3.7,11.2 3,11 3.7,10.8" fill="#E040FB" opacity="0.8" />
        <polygon points="20,14 20.3,14.6 21,14.6 20.3,15 20.5,15.6 20,15.2 19.5,15.6 19.7,15 19,14.6 19.7,14.6" fill="#BA68C8" opacity="0.7" />
        <polygon points="5,18 5.2,18.5 6,18.5 5.2,19 5.4,19.5 5,19.1 4.6,19.5 4.8,19 4,18.5 4.8,18.5" fill="white" opacity="0.6" />
      </g>

      {/* Steam wisps */}
      <path d="M10 4 Q9 2 10 1" stroke="#E1BEE7" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M12 4 Q13 1 12 0" stroke="#E1BEE7" strokeWidth="0.5" fill="none" opacity="0.4" />
    </svg>
  );
}
