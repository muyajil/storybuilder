/**
 * Shield Sprite Component
 * Enhanced with metallic gradients, glow effects, and depth
 */

import type { EffectProps } from '../types';

export function Shield({ x = 0, y = 0, size = 32}: EffectProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 32 38"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main shield gradient */}
        <linearGradient id="shieldMainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6495ED" />
          <stop offset="30%" stopColor="#4169E1" />
          <stop offset="70%" stopColor="#3154B5" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>

        {/* Shield edge gradient */}
        <linearGradient id="shieldEdgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A6FC9" />
          <stop offset="50%" stopColor="#2A4A8A" />
          <stop offset="100%" stopColor="#1A3060" />
        </linearGradient>

        {/* Highlight gradient */}
        <linearGradient id="shieldHighlightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="50%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        {/* Diamond/gem gradient */}
        <linearGradient id="shieldGemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFED8A" />
          <stop offset="30%" stopColor="#FFD700" />
          <stop offset="70%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>

        {/* Gem glow */}
        <radialGradient id="shieldGemGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FFD700" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>

        {/* Outer glow */}
        <radialGradient id="shieldOuterGlow" cx="50%" cy="40%" r="60%">
          <stop offset="50%" stopColor="#4169E1" stopOpacity="0" />
          <stop offset="80%" stopColor="#6495ED" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#87CEFA" stopOpacity="0.4" />
        </radialGradient>

        {/* Glow filter */}
        <filter id="shieldGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.5" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Inner shadow */}
        <filter id="shieldInnerShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Sparkle filter */}
        <filter id="shieldSparkle" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow aura */}
      <path d="M16 0 L0 6 L0 18 Q0 34 16 38 Q32 34 32 18 L32 6 Z" fill="url(#shieldOuterGlow)" />

      {/* Shadow */}
      <path d="M17 3 L3 9 L3 19 Q3 33 17 37 Q31 33 31 19 L31 9 Z" fill="#0A1A4A" opacity="0.3" />

      {/* Main shield body */}
      <path
        d="M16 2 L2 8 L2 18 Q2 32 16 36 Q30 32 30 18 L30 8 Z"
        fill="url(#shieldMainGrad)"
        stroke="url(#shieldEdgeGrad)"
        strokeWidth="2"
        filter="url(#shieldGlow)"
      />

      {/* Inner border */}
      <path
        d="M16 5 L5 10 L5 18 Q5 29 16 33 Q27 29 27 18 L27 10 Z"
        fill="none"
        stroke="#6495ED"
        strokeWidth="0.5"
        opacity="0.5"
      />

      {/* Left highlight */}
      <path d="M16 6 L6 10 L6 18 Q6 28 16 32" fill="url(#shieldHighlightGrad)" />

      {/* Top shine arc */}
      <path d="M8 10 Q16 6 24 10" fill="none" stroke="white" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />

      {/* Gem glow background */}
      <ellipse cx="16" cy="18" rx="8" ry="8" fill="url(#shieldGemGlow)" />

      {/* Central gem/diamond */}
      <polygon
        points="16,12 20,18 16,24 12,18"
        fill="url(#shieldGemGrad)"
        filter="url(#shieldInnerShadow)"
      />

      {/* Gem highlight */}
      <polygon
        points="16,14 18,18 16,22 14,18"
        fill="#FFF9C4"
        opacity="0.4"
      />

      {/* Gem shine spot */}
      <circle cx="14" cy="15" r="1.5" fill="white" opacity="0.7" />

      {/* Gem facet lines */}
      <line x1="16" y1="12" x2="16" y2="24" stroke="#B8860B" strokeWidth="0.3" opacity="0.5" />
      <line x1="12" y1="18" x2="20" y2="18" stroke="#B8860B" strokeWidth="0.3" opacity="0.5" />

      {/* Decorative rivets */}
      <circle cx="8" cy="14" r="1.5" fill="#6495ED" stroke="#3154B5" strokeWidth="0.5" />
      <circle cx="24" cy="14" r="1.5" fill="#6495ED" stroke="#3154B5" strokeWidth="0.5" />
      <circle cx="16" cy="28" r="1.5" fill="#6495ED" stroke="#3154B5" strokeWidth="0.5" />

      {/* Rivet highlights */}
      <circle cx="7.5" cy="13.5" r="0.5" fill="white" opacity="0.5" />
      <circle cx="23.5" cy="13.5" r="0.5" fill="white" opacity="0.5" />
      <circle cx="15.5" cy="27.5" r="0.5" fill="white" opacity="0.5" />

      {/* Sparkle accents */}
      <g filter="url(#shieldSparkle)">
        <polygon points="6,8 6.3,8.8 7,9 6.3,9.2 6.5,10 6,9.4 5.5,10 5.7,9.2 5,9 5.7,8.8" fill="white" opacity="0.8" />
        <polygon points="26,8 26.3,8.6 27,8.6 26.3,9 26.5,9.6 26,9.2 25.5,9.6 25.7,9 25,8.6 25.7,8.6" fill="#87CEFA" opacity="0.7" />
        <polygon points="16,6 16.2,6.5 17,6.5 16.2,7 16.4,7.5 16,7.1 15.6,7.5 15.8,7 15,6.5 15.8,6.5" fill="white" opacity="0.6" />
      </g>
    </svg>
  );
}
