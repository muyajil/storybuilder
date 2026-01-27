/**
 * ScoreDisplay Sprite Component
 * Enhanced with shine effects, gradients, and depth
 */

import type { EffectProps } from '../types';

export function ScoreDisplay({ x = 0, y = 0, score = 0}: EffectProps & { score?: number }) {
  return (
    <svg
      width={80}
      height={28}
      viewBox="0 0 80 28"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Background gradient */}
        <linearGradient id="scoreDisplayBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(30,30,30,0.9)" />
          <stop offset="50%" stopColor="rgba(0,0,0,0.85)" />
          <stop offset="100%" stopColor="rgba(20,20,20,0.9)" />
        </linearGradient>

        {/* Star gradient */}
        <linearGradient id="scoreDisplayStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF9C4" />
          <stop offset="30%" stopColor="#FFE082" />
          <stop offset="70%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA000" />
        </linearGradient>

        {/* Star glow */}
        <radialGradient id="scoreDisplayStarGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#FFD700" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>

        {/* Text glow gradient */}
        <linearGradient id="scoreDisplayTextGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F0F0F0" />
          <stop offset="100%" stopColor="#D0D0D0" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="scoreDisplayGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Sparkle filter */}
        <filter id="scoreDisplaySparkle" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Shadow */}
      <rect x="1" y="1" width="80" height="28" fill="#000" opacity="0.4" rx="5" />

      {/* Background */}
      <rect x="0" y="0" width="80" height="28" fill="url(#scoreDisplayBgGrad)" rx="4" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

      {/* Top shine */}
      <rect x="2" y="1" width="76" height="8" fill="white" opacity="0.05" rx="3" />

      {/* Inner border */}
      <rect x="1" y="1" width="78" height="26" fill="none" rx="3" stroke="rgba(255,215,0,0.2)" strokeWidth="1" />

      {/* Star glow background */}
      <circle cx="14" cy="14" r="10" fill="url(#scoreDisplayStarGlow)" />

      {/* Star shape with gradient */}
      <polygon
        points="8,14 12,8 20,8 16,14 20,20 12,20"
        fill="url(#scoreDisplayStarGrad)"
        filter="url(#scoreDisplayGlow)"
      />

      {/* Star inner highlight */}
      <polygon
        points="10,14 13,10 17,10 14,14 17,18 13,18"
        fill="#FFF9C4"
        opacity="0.4"
      />

      {/* Star shine spot */}
      <circle cx="12" cy="10" r="1.5" fill="white" opacity="0.7" />

      {/* Score text with shadow */}
      <text
        x="45"
        y="21"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fill="#000"
        opacity="0.3"
      >
        {score}
      </text>

      {/* Score text */}
      <text
        x="45"
        y="20"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fill="url(#scoreDisplayTextGrad)"
        filter="url(#scoreDisplaySparkle)"
      >
        {score}
      </text>

      {/* Sparkle accents */}
      <g filter="url(#scoreDisplaySparkle)">
        <polygon points="4,6 4.3,6.8 5,7 4.3,7.2 4.5,8 4,7.4 3.5,8 3.7,7.2 3,7 3.7,6.8" fill="#FFD700" opacity="0.8" />
        <polygon points="24,10 24.2,10.4 25,10.4 24.2,10.8 24.4,11.2 24,11 23.6,11.2 23.8,10.8 23,10.4 23.8,10.4" fill="white" opacity="0.6" />
        <polygon points="70,8 70.2,8.5 71,8.5 70.2,9 70.4,9.5 70,9 69.6,9.5 69.8,9 69,8.5 69.8,8.5" fill="white" opacity="0.5" />
      </g>

      {/* Decorative line */}
      <line x1="26" y1="6" x2="26" y2="22" stroke="rgba(255,215,0,0.3)" strokeWidth="1" />
    </svg>
  );
}
