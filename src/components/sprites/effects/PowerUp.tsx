/**
 * PowerUp Sprite Component
 * Enhanced with energy glow effects, pulsing gradients, and dynamic sparkles
 */

import type { EffectProps } from '../types';

export function PowerUp({ x = 0, y = 0, size = 32}: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Outer energy aura */}
        <radialGradient id="powerUpOuterAura" cx="50%" cy="50%" r="50%">
          <stop offset="30%" stopColor="#00FF00" stopOpacity="0" />
          <stop offset="60%" stopColor="#00FF00" stopOpacity="0.2" />
          <stop offset="80%" stopColor="#7FFF00" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ADFF2F" stopOpacity="0.5" />
        </radialGradient>

        {/* Middle ring gradient */}
        <radialGradient id="powerUpMiddleGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ADFF2F" />
          <stop offset="50%" stopColor="#00FF00" />
          <stop offset="100%" stopColor="#228B22" />
        </radialGradient>

        {/* Inner core gradient */}
        <radialGradient id="powerUpCoreGrad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#E8FFE8" />
          <stop offset="70%" stopColor="#ADFF2F" />
          <stop offset="100%" stopColor="#00FF00" />
        </radialGradient>

        {/* Arrow gradient */}
        <linearGradient id="powerUpArrowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#E8FFE8" />
          <stop offset="100%" stopColor="#CCFFCC" />
        </linearGradient>

        {/* Energy glow filter */}
        <filter id="powerUpGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Inner glow filter */}
        <filter id="powerUpInnerGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Sparkle filter */}
        <filter id="powerUpSparkle" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer energy aura */}
      <circle cx="16" cy="16" r="15" fill="url(#powerUpOuterAura)" />

      {/* Pulsing outer ring */}
      <circle cx="16" cy="16" r="14" fill="url(#powerUpMiddleGrad)" opacity="0.3" filter="url(#powerUpGlow)" />

      {/* Middle energy ring */}
      <circle cx="16" cy="16" r="10" fill="url(#powerUpMiddleGrad)" opacity="0.5" filter="url(#powerUpInnerGlow)" />

      {/* Energy ring highlight */}
      <circle cx="16" cy="16" r="10" fill="none" stroke="#ADFF2F" strokeWidth="1" opacity="0.4" />

      {/* Up arrow with gradient */}
      <polygon points="16,4 20,14 16,12 12,14" fill="url(#powerUpArrowGrad)" filter="url(#powerUpInnerGlow)" />

      {/* Down arrow with gradient */}
      <polygon points="16,28 12,18 16,20 20,18" fill="url(#powerUpArrowGrad)" filter="url(#powerUpInnerGlow)" />

      {/* Arrow outlines for depth */}
      <polygon points="16,4 20,14 16,12 12,14" fill="none" stroke="#00FF00" strokeWidth="0.5" opacity="0.5" />
      <polygon points="16,28 12,18 16,20 20,18" fill="none" stroke="#00FF00" strokeWidth="0.5" opacity="0.5" />

      {/* Central core */}
      <circle cx="16" cy="16" r="4" fill="url(#powerUpCoreGrad)" filter="url(#powerUpInnerGlow)" />

      {/* Core inner highlight */}
      <circle cx="15" cy="15" r="2" fill="white" opacity="0.6" />
      <circle cx="15" cy="15" r="1" fill="white" opacity="0.9" />

      {/* Energy particles */}
      <g filter="url(#powerUpSparkle)">
        <circle cx="6" cy="10" r="1" fill="#ADFF2F" opacity="0.8" />
        <circle cx="26" cy="10" r="0.8" fill="#00FF00" opacity="0.7" />
        <circle cx="6" cy="22" r="0.8" fill="#7FFF00" opacity="0.7" />
        <circle cx="26" cy="22" r="1" fill="#ADFF2F" opacity="0.8" />
      </g>

      {/* Sparkle accents */}
      <g filter="url(#powerUpSparkle)">
        <polygon points="4,16 5,17.5 7,17.5 5,18.5 5.5,20 4,18.5 2.5,20 3,18.5 1,17.5 3,17.5" fill="white" opacity="0.9" />
        <polygon points="28,16 28.5,17 30,17 28.5,18 29,19 28,18 27,19 27.5,18 26,17 27.5,17" fill="#ADFF2F" opacity="0.8" />
        <polygon points="16,1 16.3,2 17,2.3 16.3,2.6 16.5,3.5 16,3 15.5,3.5 15.7,2.6 15,2.3 15.7,2" fill="white" opacity="0.7" />
        <polygon points="16,29 16.3,30 17,30.3 16.3,30.6 16.5,31.5 16,31 15.5,31.5 15.7,30.6 15,30.3 15.7,30" fill="#7FFF00" opacity="0.7" />
      </g>

      {/* Rotating energy lines */}
      <g opacity="0.3">
        <line x1="16" y1="2" x2="16" y2="6" stroke="#00FF00" strokeWidth="0.5" />
        <line x1="16" y1="26" x2="16" y2="30" stroke="#00FF00" strokeWidth="0.5" />
        <line x1="2" y1="16" x2="6" y2="16" stroke="#00FF00" strokeWidth="0.5" />
        <line x1="26" y1="16" x2="30" y2="16" stroke="#00FF00" strokeWidth="0.5" />
      </g>
    </svg>
  );
}
