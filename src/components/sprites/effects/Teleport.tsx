/**
 * Teleport Sprite Component
 * Enhanced with portal effects, swirling gradients, and magical energy
 */

import type { EffectProps } from '../types';

export function Teleport({ x = 0, y = 0, size = 40 }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Portal ring gradient */}
        <linearGradient id="teleportRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E040FB" />
          <stop offset="50%" stopColor="#9400D3" />
          <stop offset="100%" stopColor="#4A148C" />
        </linearGradient>

        {/* Outer glow gradient */}
        <radialGradient id="teleportOuterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="40%" stopColor="#9400D3" stopOpacity="0" />
          <stop offset="60%" stopColor="#9400D3" stopOpacity="0.2" />
          <stop offset="80%" stopColor="#E040FB" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#EA80FC" stopOpacity="0.4" />
        </radialGradient>

        {/* Inner void gradient */}
        <radialGradient id="teleportVoidGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1A0033" />
          <stop offset="50%" stopColor="#0D001A" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>

        {/* Center energy gradient */}
        <radialGradient id="teleportCenterGrad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#FFF59D" />
          <stop offset="70%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA000" />
        </radialGradient>

        {/* Particle gradient */}
        <radialGradient id="teleportParticleGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#EA80FC" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#9400D3" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#4A148C" stopOpacity="0" />
        </radialGradient>

        {/* Glow filter */}
        <filter id="teleportGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Ring glow filter */}
        <filter id="teleportRingGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Center glow filter */}
        <filter id="teleportCenterGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Sparkle filter */}
        <filter id="teleportSparkle" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer magical aura */}
      <circle cx="20" cy="20" r="19" fill="url(#teleportOuterGlow)" />

      {/* Portal rings with gradient */}
      {[...Array(4)].map((_, i) => (
        <ellipse
          key={i}
          cx="20"
          cy="20"
          rx={18 - i * 4}
          ry={6 - i}
          fill="none"
          stroke="url(#teleportRingGrad)"
          strokeWidth={2.5 - i * 0.3}
          opacity={0.9 - i * 0.15}
          filter="url(#teleportRingGlow)"
        />
      ))}

      {/* Inner highlight rings */}
      {[...Array(3)].map((_, i) => (
        <ellipse
          key={`highlight-${i}`}
          cx="20"
          cy="20"
          rx={17 - i * 4}
          ry={5.5 - i}
          fill="none"
          stroke="#EA80FC"
          strokeWidth="0.5"
          opacity={0.4 - i * 0.1}
        />
      ))}

      {/* Void center */}
      <ellipse cx="20" cy="20" rx="4" ry="1.5" fill="url(#teleportVoidGrad)" />

      {/* Center energy orb */}
      <circle cx="20" cy="20" r="4" fill="url(#teleportCenterGrad)" filter="url(#teleportCenterGlow)" />

      {/* Energy orb core */}
      <circle cx="19" cy="19" r="2" fill="white" opacity="0.8" />
      <circle cx="19" cy="19" r="1" fill="white" />

      {/* Swirling energy particles */}
      <g filter="url(#teleportSparkle)">
        <circle cx="10" cy="18" r="1.5" fill="url(#teleportParticleGrad)" />
        <circle cx="30" cy="22" r="1.5" fill="url(#teleportParticleGrad)" />
        <circle cx="15" cy="24" r="1" fill="url(#teleportParticleGrad)" />
        <circle cx="25" cy="16" r="1" fill="url(#teleportParticleGrad)" />
        <circle cx="8" cy="20" r="0.8" fill="#EA80FC" opacity="0.6" />
        <circle cx="32" cy="20" r="0.8" fill="#EA80FC" opacity="0.6" />
      </g>

      {/* Vertical energy beams */}
      <g opacity="0.4">
        <line x1="20" y1="4" x2="20" y2="10" stroke="#EA80FC" strokeWidth="1" strokeLinecap="round" />
        <line x1="20" y1="30" x2="20" y2="36" stroke="#EA80FC" strokeWidth="1" strokeLinecap="round" />
      </g>

      {/* Sparkle accents */}
      <g filter="url(#teleportSparkle)">
        <polygon points="6,10 6.5,11.5 8,12 6.5,12.5 7,14 6,12.5 5,14 5.5,12.5 4,12 5.5,11.5" fill="#EA80FC" opacity="0.8" />
        <polygon points="34,28 34.3,29 35.5,29 34.3,29.5 34.5,30.5 34,30 33.5,30.5 33.7,29.5 32.5,29 33.7,29" fill="#E040FB" opacity="0.7" />
        <polygon points="12,6 12.2,6.8 13,7 12.2,7.2 12.4,8 12,7.4 11.6,8 11.8,7.2 11,7 11.8,6.8" fill="white" opacity="0.6" />
        <polygon points="28,34 28.2,34.6 29,34.6 28.2,35 28.4,35.6 28,35.2 27.6,35.6 27.8,35 27,34.6 27.8,34.6" fill="#FFD700" opacity="0.7" />
      </g>

      {/* Ring rotation hint lines */}
      <path d="M8 20 Q12 16 16 20" stroke="#9400D3" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M24 20 Q28 24 32 20" stroke="#9400D3" strokeWidth="0.5" fill="none" opacity="0.3" />
    </svg>
  );
}
