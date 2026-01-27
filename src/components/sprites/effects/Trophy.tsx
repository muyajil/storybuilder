/**
 * Trophy Sprite Component
 * Enhanced with metallic shine, golden gradients, and celebratory sparkles
 */

import type { EffectProps } from '../types';

export function Trophy({ x = 0, y = 0, size = 40}: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main cup gradient */}
        <linearGradient id="trophyCupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF9C4" />
          <stop offset="25%" stopColor="#FFE082" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="75%" stopColor="#FFC107" />
          <stop offset="100%" stopColor="#FF8F00" />
        </linearGradient>

        {/* Cup shine gradient */}
        <linearGradient id="trophyShineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.6" />
          <stop offset="50%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        {/* Handle gradient */}
        <linearGradient id="trophyHandleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFC107" />
          <stop offset="100%" stopColor="#FF8F00" />
        </linearGradient>

        {/* Base gradient */}
        <linearGradient id="trophyBaseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#DAA520" />
          <stop offset="50%" stopColor="#B8860B" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>

        {/* Golden glow */}
        <radialGradient id="trophyGoldenGlow" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#FFD700" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>

        {/* Outer aura */}
        <radialGradient id="trophyAura" cx="50%" cy="40%" r="50%">
          <stop offset="40%" stopColor="#FFD700" stopOpacity="0" />
          <stop offset="70%" stopColor="#FFD700" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FFA500" stopOpacity="0.3" />
        </radialGradient>

        {/* Glow filter */}
        <filter id="trophyGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.5" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Shine filter */}
        <filter id="trophyShine" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Sparkle filter */}
        <filter id="trophySparkle" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer golden aura */}
      <ellipse cx="20" cy="20" rx="19" ry="18" fill="url(#trophyAura)" />

      {/* Cup shadow */}
      <path d="M11 5 L11 17 Q11 25 21 29 Q31 25 31 17 L31 5 Z" fill="#5A4508" opacity="0.2" />

      {/* Main cup body */}
      <path
        d="M10 4 L10 16 Q10 24 20 28 Q30 24 30 16 L30 4 Z"
        fill="url(#trophyCupGrad)"
        filter="url(#trophyGlow)"
      />

      {/* Cup inner edge */}
      <path
        d="M11 5 L11 16 Q11 23 20 27 Q29 23 29 16 L29 5 Z"
        fill="none"
        stroke="#FFE082"
        strokeWidth="0.5"
        opacity="0.6"
      />

      {/* Cup shine overlay */}
      <path
        d="M10 4 L10 16 Q10 24 20 28"
        fill="url(#trophyShineGrad)"
      />

      {/* Golden glow inside cup */}
      <ellipse cx="20" cy="12" rx="8" ry="6" fill="url(#trophyGoldenGlow)" />

      {/* Left handle shadow */}
      <path d="M11 9 Q3 9 3 15 Q3 21 11 21" stroke="#5A4508" strokeWidth="4" fill="none" opacity="0.2" />

      {/* Left handle */}
      <path
        d="M10 8 Q2 8 2 14 Q2 20 10 20"
        stroke="url(#trophyHandleGrad)"
        strokeWidth="3"
        fill="none"
        filter="url(#trophyShine)"
      />

      {/* Left handle highlight */}
      <path d="M10 9 Q4 9 4 13" stroke="white" strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round" />

      {/* Right handle shadow */}
      <path d="M31 9 Q39 9 39 15 Q39 21 31 21" stroke="#5A4508" strokeWidth="4" fill="none" opacity="0.2" />

      {/* Right handle */}
      <path
        d="M30 8 Q38 8 38 14 Q38 20 30 20"
        stroke="url(#trophyHandleGrad)"
        strokeWidth="3"
        fill="none"
        filter="url(#trophyShine)"
      />

      {/* Right handle highlight */}
      <path d="M30 9 Q36 9 36 13" stroke="white" strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round" />

      {/* Main cup shine spot */}
      <ellipse cx="16" cy="12" rx="3" ry="5" fill="white" opacity="0.5" />
      <ellipse cx="15" cy="10" rx="1.5" ry="2.5" fill="white" opacity="0.7" />

      {/* Cup top edge */}
      <ellipse cx="20" cy="4" rx="10" ry="2" fill="none" stroke="#FFE082" strokeWidth="1" />
      <ellipse cx="20" cy="4" rx="9" ry="1.5" fill="url(#trophyCupGrad)" />

      {/* Stem */}
      <rect x="16" y="28" width="8" height="4" fill="url(#trophyCupGrad)" filter="url(#trophyShine)" />
      <rect x="17" y="28" width="2" height="4" fill="white" opacity="0.2" />

      {/* Middle base */}
      <rect x="12" y="32" width="16" height="4" fill="url(#trophyCupGrad)" filter="url(#trophyShine)" />
      <rect x="13" y="32" width="4" height="4" fill="white" opacity="0.15" />

      {/* Bottom base */}
      <rect x="10" y="36" width="20" height="4" fill="url(#trophyBaseGrad)" rx="1" filter="url(#trophyShine)" />

      {/* Base highlight */}
      <rect x="11" y="36" width="6" height="2" fill="white" opacity="0.2" rx="0.5" />

      {/* Base edge */}
      <rect x="10" y="36" width="20" height="4" fill="none" rx="1" stroke="#DAA520" strokeWidth="0.5" />

      {/* Sparkle accents */}
      <g filter="url(#trophySparkle)">
        <polygon points="6,4 6.5,5.5 8,6 6.5,6.5 7,8 6,6.5 5,8 5.5,6.5 4,6 5.5,5.5" fill="white" opacity="0.9" />
        <polygon points="34,4 34.3,5 35.5,5 34.3,5.5 34.5,6.5 34,6 33.5,6.5 33.7,5.5 32.5,5 33.7,5" fill="#FFF9C4" opacity="0.8" />
        <polygon points="20,1 20.3,2 21.5,2 20.3,2.5 20.5,3.5 20,3 19.5,3.5 19.7,2.5 18.5,2 19.7,2" fill="white" opacity="0.7" />
        <polygon points="8,24 8.2,24.5 9,24.5 8.2,25 8.4,25.5 8,25 7.6,25.5 7.8,25 7,24.5 7.8,24.5" fill="#FFD700" opacity="0.6" />
        <polygon points="32,24 32.2,24.5 33,24.5 32.2,25 32.4,25.5 32,25 31.6,25.5 31.8,25 31,24.5 31.8,24.5" fill="#FFD700" opacity="0.6" />
      </g>

      {/* Number 1 on cup (winner) */}
      <text x="20" y="18" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#B8860B" opacity="0.6">1</text>
    </svg>
  );
}
