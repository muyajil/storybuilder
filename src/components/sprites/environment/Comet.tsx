/**
 * Comet Sprite Component
 * Enhanced with glowing effects, particle trail, and cosmic atmosphere
 */

import type { ElementProps } from '../types';

export function Comet({ x = 0, y = 0, size = 60, color = '#FFD700' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 60 30"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main tail gradient - fades out */}
        <linearGradient id="cometTailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="30%" stopColor={color} stopOpacity="0.1" />
          <stop offset="70%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0.8" />
        </linearGradient>
        {/* Inner tail gradient - brighter */}
        <linearGradient id="cometInnerTailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="50%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0.9" />
        </linearGradient>
        {/* Core outer glow */}
        <radialGradient id="cometOuterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} />
          <stop offset="60%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        {/* Core inner gradient */}
        <radialGradient id="cometCoreGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="white" />
          <stop offset="40%" stopColor="#FFFACD" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Particle glow */}
        <radialGradient id="cometParticleGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        {/* Main glow filter */}
        <filter id="cometGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Subtle particle glow */}
        <filter id="cometParticleGlow">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer tail (widest, most transparent) */}
      <polygon points="0,15 52,8 52,22" fill="url(#cometTailGradient)" opacity="0.4" />

      {/* Middle tail layer */}
      <polygon points="10,15 52,10 52,20" fill="url(#cometTailGradient)" opacity="0.6" />

      {/* Inner tail (brightest) */}
      <polygon points="25,15 52,12 52,18" fill="url(#cometInnerTailGradient)" />

      {/* Particle trail */}
      <g filter="url(#cometParticleGlow)">
        <circle cx="12" cy="14" r="1" fill={color} opacity="0.3" />
        <circle cx="18" cy="16" r="0.8" fill={color} opacity="0.4" />
        <circle cx="25" cy="13" r="1.2" fill={color} opacity="0.5" />
        <circle cx="32" cy="17" r="0.7" fill={color} opacity="0.5" />
        <circle cx="35" cy="14" r="1" fill={color} opacity="0.6" />
        <circle cx="40" cy="16" r="0.9" fill="white" opacity="0.6" />
        <circle cx="44" cy="14" r="1.1" fill="white" opacity="0.7" />
        <circle cx="48" cy="15" r="0.8" fill="white" opacity="0.8" />
      </g>

      {/* Outer glow halo */}
      <circle cx="55" cy="15" r="8" fill="url(#cometOuterGlow)" filter="url(#cometGlow)" />

      {/* Comet core */}
      <g filter="url(#cometGlow)">
        {/* Main core body */}
        <circle cx="55" cy="15" r="5" fill="url(#cometCoreGradient)" />

        {/* Hot white center */}
        <circle cx="54" cy="14" r="2.5" fill="white" opacity="0.9" />

        {/* Bright highlight */}
        <circle cx="53" cy="13" r="1.2" fill="white" />
      </g>

      {/* Additional sparkles near head */}
      <g filter="url(#cometParticleGlow)">
        <circle cx="50" cy="11" r="0.6" fill="white" opacity="0.8" />
        <circle cx="52" cy="19" r="0.5" fill="white" opacity="0.7" />
        <circle cx="58" cy="12" r="0.4" fill="white" opacity="0.6" />
        <circle cx="59" cy="17" r="0.5" fill="white" opacity="0.5" />
      </g>

      {/* Subtle color variations in tail */}
      <ellipse cx="40" cy="15" rx="8" ry="3" fill={color} opacity="0.15" />
      <ellipse cx="30" cy="15" rx="6" ry="2" fill={color} opacity="0.1" />
    </svg>
  );
}
