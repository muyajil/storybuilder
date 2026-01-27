/**
 * Magic Sprite Component
 * Enhanced with glowing gradients, sparkle effects, and dynamic shapes
 */

import type { EffectProps } from '../types';

export function Magic({ x = 0, y = 0, size = 36 }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Radial glow for outer aura */}
        <radialGradient id="magicOuterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF69B4" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#9400D3" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#4B0082" stopOpacity="0" />
        </radialGradient>

        {/* Gradient for pink star */}
        <linearGradient id="magicPinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9ED2" />
          <stop offset="50%" stopColor="#FF69B4" />
          <stop offset="100%" stopColor="#DB3E93" />
        </linearGradient>

        {/* Gradient for purple star */}
        <linearGradient id="magicPurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BA68C8" />
          <stop offset="50%" stopColor="#9400D3" />
          <stop offset="100%" stopColor="#6A0DAD" />
        </linearGradient>

        {/* Gradient for cyan star */}
        <linearGradient id="magicCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5EE7FF" />
          <stop offset="50%" stopColor="#00BFFF" />
          <stop offset="100%" stopColor="#0080FF" />
        </linearGradient>

        {/* Gradient for gold star */}
        <linearGradient id="magicGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFED8A" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>

        {/* Gradient for orange star */}
        <linearGradient id="magicOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8C5A" />
          <stop offset="50%" stopColor="#FF4500" />
          <stop offset="100%" stopColor="#CC3700" />
        </linearGradient>

        {/* Inner glow filter */}
        <filter id="magicGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Sparkle glow */}
        <filter id="magicSparkleGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer magical aura */}
      <circle cx="18" cy="18" r="17" fill="url(#magicOuterGlow)" />

      {/* Layered stars with gradients */}
      {[
        { fill: 'url(#magicPinkGrad)', opacity: 0.9, rotate: 0, scale: 1 },
        { fill: 'url(#magicPurpleGrad)', opacity: 0.75, rotate: 15, scale: 0.85 },
        { fill: 'url(#magicCyanGrad)', opacity: 0.65, rotate: 30, scale: 0.7 },
        { fill: 'url(#magicGoldGrad)', opacity: 0.55, rotate: 45, scale: 0.55 },
        { fill: 'url(#magicOrangeGrad)', opacity: 0.5, rotate: 60, scale: 0.4 },
      ].map((star, i) => (
        <polygon
          key={i}
          points="18,4 20,14 30,14 22,20 24,30 18,24 12,30 14,20 6,14 16,14"
          fill={star.fill}
          opacity={star.opacity}
          transform={`rotate(${star.rotate} 18 18) scale(${star.scale})`}
          style={{ transformOrigin: 'center' }}
          filter="url(#magicGlow)"
        />
      ))}

      {/* Central bright core */}
      <circle cx="18" cy="18" r="3" fill="white" opacity="0.9" />
      <circle cx="18" cy="18" r="1.5" fill="#FFE4F0" />

      {/* Sparkle accents */}
      <g filter="url(#magicSparkleGlow)">
        <polygon points="6,6 7,8 9,8 7.5,9.5 8,12 6,10 4,12 4.5,9.5 3,8 5,8" fill="white" opacity="0.8" />
        <polygon points="30,8 30.5,9.5 32,10 30.5,10.5 30,12 29.5,10.5 28,10 29.5,9.5" fill="white" opacity="0.7" />
        <polygon points="28,26 28.5,27 30,27 28.5,28 29,30 28,28.5 27,30 27.5,28 26,27 27.5,27" fill="#FFD700" opacity="0.8" />
        <polygon points="8,28 8.5,29 10,29 8.5,30 9,32 8,30.5 7,32 7.5,30 6,29 7.5,29" fill="#00BFFF" opacity="0.7" />
      </g>
    </svg>
  );
}
