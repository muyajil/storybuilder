/**
 * Question Sprite Component
 * Enhanced with glowing gradients, depth effects, and sparkles
 */

import type { EffectProps } from '../types';

export function Question({ x = 0, y = 0, size = 24}: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Background gradient */}
        <radialGradient id="questionBgGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#6495ED" />
          <stop offset="50%" stopColor="#4169E1" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </radialGradient>

        {/* Outer glow */}
        <radialGradient id="questionOuterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="#4169E1" stopOpacity="0" />
          <stop offset="80%" stopColor="#6495ED" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#87CEFA" stopOpacity="0.5" />
        </radialGradient>

        {/* Question mark gradient */}
        <linearGradient id="questionMarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#E8F0FF" />
          <stop offset="100%" stopColor="#D0E0FF" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="questionGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Inner shadow */}
        <filter id="questionInnerShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Sparkle filter */}
        <filter id="questionSparkle" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow aura */}
      <circle cx="12" cy="12" r="12" fill="url(#questionOuterGlow)" />

      {/* Shadow */}
      <circle cx="12.5" cy="12.5" r="11" fill="#0A1A4A" opacity="0.3" />

      {/* Main circle with gradient */}
      <circle cx="12" cy="12" r="11" fill="url(#questionBgGrad)" filter="url(#questionGlow)" />

      {/* Inner ring */}
      <circle cx="12" cy="12" r="9.5" fill="none" stroke="#6495ED" strokeWidth="0.5" opacity="0.5" />

      {/* Highlight arc */}
      <path d="M6 8 A8 8 0 0 1 18 8" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />

      {/* Question mark shadow */}
      <path
        d="M8.5 8.5 Q8.5 4.5 12.5 4.5 Q16.5 4.5 16.5 8.5 Q16.5 11.5 12.5 12.5 L12.5 14.5"
        stroke="#0A1A4A"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.3"
      />
      <circle cx="12.5" cy="18.5" r="2" fill="#0A1A4A" opacity="0.3" />

      {/* Question mark with gradient */}
      <path
        d="M8 8 Q8 4 12 4 Q16 4 16 8 Q16 11 12 12 L12 14"
        stroke="url(#questionMarkGrad)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        filter="url(#questionInnerShadow)"
      />

      {/* Question mark highlight */}
      <path
        d="M9 7 Q9 5 11 4.5"
        stroke="white"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Dot shadow */}
      <circle cx="12.3" cy="18.3" r="2" fill="#0A1A4A" opacity="0.3" />

      {/* Question mark dot */}
      <circle cx="12" cy="18" r="2" fill="url(#questionMarkGrad)" filter="url(#questionInnerShadow)" />

      {/* Dot highlight */}
      <circle cx="11.5" cy="17.5" r="0.8" fill="white" opacity="0.6" />

      {/* Circle highlight */}
      <ellipse cx="8" cy="8" rx="3" ry="2" fill="white" opacity="0.2" />

      {/* Sparkle accents */}
      <g filter="url(#questionSparkle)">
        <polygon points="4,4 4.5,5 6,5 4.5,6 5,7 4,6 3,7 3.5,6 2,5 3.5,5" fill="white" opacity="0.8" />
        <polygon points="20,6 20.3,6.6 21,6.6 20.3,7 20.5,7.6 20,7.2 19.5,7.6 19.7,7 19,6.6 19.7,6.6" fill="#87CEFA" opacity="0.7" />
        <polygon points="18,18 18.2,18.4 19,18.4 18.2,18.8 18.4,19.2 18,19 17.6,19.2 17.8,18.8 17,18.4 17.8,18.4" fill="white" opacity="0.6" />
      </g>
    </svg>
  );
}
