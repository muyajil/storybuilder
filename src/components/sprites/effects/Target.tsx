/**
 * Target Sprite Component
 * Enhanced with depth, glow effects, and professional styling
 */

import type { EffectProps } from '../types';

export function Target({ x = 0, y = 0, size = 32}: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Outer ring gradient */}
        <radialGradient id="targetOuterGrad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FF6666" />
          <stop offset="50%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#990000" />
        </radialGradient>

        {/* White ring gradient */}
        <radialGradient id="targetWhiteGrad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </radialGradient>

        {/* Middle red ring gradient */}
        <radialGradient id="targetMiddleGrad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FF5555" />
          <stop offset="50%" stopColor="#EE0000" />
          <stop offset="100%" stopColor="#AA0000" />
        </radialGradient>

        {/* Center bullseye gradient */}
        <radialGradient id="targetCenterGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F8F8F8" />
          <stop offset="100%" stopColor="#E8E8E8" />
        </radialGradient>

        {/* Outer glow */}
        <radialGradient id="targetGlowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="#FF0000" stopOpacity="0" />
          <stop offset="80%" stopColor="#FF0000" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FF4444" stopOpacity="0.3" />
        </radialGradient>

        {/* Glow filter */}
        <filter id="targetGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Inner shadow filter */}
        <filter id="targetInnerShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Ring shadow filter */}
        <filter id="targetRingShadow" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feOffset in="blur" dx="0.5" dy="0.5" result="offsetBlur" />
          <feMerge>
            <feMergeNode in="offsetBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow aura */}
      <circle cx="16" cy="16" r="15" fill="url(#targetGlowGrad)" />

      {/* Shadow */}
      <circle cx="17" cy="17" r="14" fill="#000" opacity="0.2" />

      {/* Outer red ring */}
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="url(#targetOuterGrad)"
        filter="url(#targetGlow)"
      />

      {/* Outer ring edge highlight */}
      <circle
        cx="16"
        cy="16"
        r="13.5"
        fill="none"
        stroke="#FF8888"
        strokeWidth="0.5"
        opacity="0.4"
      />

      {/* Outer ring shine */}
      <path
        d="M8 8 Q16 4 24 8"
        stroke="white"
        strokeWidth="1"
        fill="none"
        opacity="0.2"
        strokeLinecap="round"
      />

      {/* White ring */}
      <circle
        cx="16"
        cy="16"
        r="10"
        fill="url(#targetWhiteGrad)"
        filter="url(#targetRingShadow)"
      />

      {/* White ring inner highlight */}
      <circle
        cx="16"
        cy="16"
        r="9.5"
        fill="none"
        stroke="white"
        strokeWidth="0.5"
        opacity="0.6"
      />

      {/* Middle red ring */}
      <circle
        cx="16"
        cy="16"
        r="6"
        fill="url(#targetMiddleGrad)"
        filter="url(#targetInnerShadow)"
      />

      {/* Middle ring edge */}
      <circle
        cx="16"
        cy="16"
        r="5.5"
        fill="none"
        stroke="#FF6666"
        strokeWidth="0.3"
        opacity="0.5"
      />

      {/* Center bullseye */}
      <circle
        cx="16"
        cy="16"
        r="2"
        fill="url(#targetCenterGrad)"
        filter="url(#targetInnerShadow)"
      />

      {/* Center highlight */}
      <circle cx="15.5" cy="15.5" r="0.8" fill="white" opacity="0.8" />

      {/* Ring divider lines (subtle) */}
      <circle cx="16" cy="16" r="10" fill="none" stroke="#CC0000" strokeWidth="0.3" opacity="0.3" />
      <circle cx="16" cy="16" r="6" fill="none" stroke="#880000" strokeWidth="0.3" opacity="0.3" />

      {/* Highlight reflections */}
      <ellipse cx="12" cy="10" rx="3" ry="1.5" fill="white" opacity="0.15" />
      <ellipse cx="20" cy="22" rx="2" ry="1" fill="white" opacity="0.1" />

      {/* Crosshair hints */}
      <g opacity="0.15">
        <line x1="16" y1="3" x2="16" y2="7" stroke="#880000" strokeWidth="0.5" />
        <line x1="16" y1="25" x2="16" y2="29" stroke="#880000" strokeWidth="0.5" />
        <line x1="3" y1="16" x2="7" y2="16" stroke="#880000" strokeWidth="0.5" />
        <line x1="25" y1="16" x2="29" y2="16" stroke="#880000" strokeWidth="0.5" />
      </g>
    </svg>
  );
}
