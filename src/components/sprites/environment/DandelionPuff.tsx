/**
 * DandelionPuff Sprite Component
 * Enhanced with delicate seed details, soft glow, and ethereal atmosphere
 */

import type { ElementProps } from '../types';

export function DandelionPuff({ x = 0, y = 0, size = 40 }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 40 56"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Stem gradient */}
        <linearGradient id="dandelionPuffStemGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B8E23" />
          <stop offset="30%" stopColor="#90EE90" />
          <stop offset="70%" stopColor="#7CCD7C" />
          <stop offset="100%" stopColor="#6B8E23" />
        </linearGradient>
        {/* Seed head center gradient */}
        <radialGradient id="dandelionPuffCenterGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5f5dc" />
          <stop offset="100%" stopColor="#c0b090" />
        </radialGradient>
        {/* Seed fluff gradient */}
        <radialGradient id="dandelionPuffFluffGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f0f0f0" stopOpacity="0.5" />
        </radialGradient>
        {/* Outer glow for ethereal effect */}
        <radialGradient id="dandelionPuffGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="70%" stopColor="white" stopOpacity="0.1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Soft blur for seeds */}
        <filter id="dandelionPuffSoftGlow">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Shadow filter */}
        <filter id="dandelionPuffShadow">
          <feDropShadow dx="0.5" dy="1" stdDeviation="0.5" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="20" cy="55" rx="8" ry="2" fill="#000" opacity="0.1" />

      {/* Ethereal glow around puff */}
      <circle cx="20" cy="15" r="18" fill="url(#dandelionPuffGlow)" />

      <g filter="url(#dandelionPuffShadow)">
        {/* Stem */}
        <rect x="18" y="25" width="4" height="31" fill="url(#dandelionPuffStemGradient)" rx="1" />
        {/* Stem highlight */}
        <rect x="19" y="26" width="1.5" height="29" fill="white" opacity="0.2" />

        {/* Seed head center (receptacle) */}
        <circle cx="20" cy="24" r="3" fill="url(#dandelionPuffCenterGradient)" />

        {/* Puff outline circle (barely visible) */}
        <circle cx="20" cy="15" r="14" fill="none" stroke="#e8e8e8" strokeWidth="0.3" opacity="0.3" />

        {/* Seed stalks and pappus (fluffy parts) */}
        <g filter="url(#dandelionPuffSoftGlow)">
          {[...Array(24)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 24;
            const length = 13 + (i % 3) * 0.5; // Varying lengths
            const endX = 20 + Math.cos(angle) * length;
            const endY = 15 + Math.sin(angle) * length;

            return (
              <g key={`seed-${i}`}>
                {/* Seed stalk (thin line from center) */}
                <line
                  x1="20"
                  y1="15"
                  x2={endX}
                  y2={endY}
                  stroke="#d0d0c0"
                  strokeWidth="0.4"
                  opacity="0.6"
                />
                {/* Pappus (fluffy end) */}
                <circle
                  cx={endX}
                  cy={endY}
                  r={1.8 + (i % 2) * 0.3}
                  fill="url(#dandelionPuffFluffGradient)"
                />
                {/* Small highlight on each pappus */}
                <circle
                  cx={endX - 0.3}
                  cy={endY - 0.3}
                  r="0.5"
                  fill="white"
                  opacity="0.6"
                />
              </g>
            );
          })}
        </g>

        {/* Inner ring of smaller seeds */}
        <g filter="url(#dandelionPuffSoftGlow)">
          {[...Array(12)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 12 + Math.PI / 24;
            const length = 7;
            const endX = 20 + Math.cos(angle) * length;
            const endY = 15 + Math.sin(angle) * length;

            return (
              <g key={`inner-seed-${i}`}>
                <line
                  x1="20"
                  y1="15"
                  x2={endX}
                  y2={endY}
                  stroke="#d8d8c8"
                  strokeWidth="0.3"
                  opacity="0.5"
                />
                <circle
                  cx={endX}
                  cy={endY}
                  r="1.2"
                  fill="url(#dandelionPuffFluffGradient)"
                  opacity="0.8"
                />
              </g>
            );
          })}
        </g>

        {/* Floating seeds (some detaching) */}
        <g opacity="0.7">
          <circle cx="36" cy="8" r="1.5" fill="url(#dandelionPuffFluffGradient)" />
          <line x1="35" y1="9" x2="36" y2="8" stroke="#d0d0c0" strokeWidth="0.3" />

          <circle cx="4" cy="12" r="1.3" fill="url(#dandelionPuffFluffGradient)" />
          <line x1="5" y1="13" x2="4" y2="12" stroke="#d0d0c0" strokeWidth="0.3" />

          <circle cx="38" cy="20" r="1.2" fill="url(#dandelionPuffFluffGradient)" opacity="0.6" />
          <line x1="37" y1="21" x2="38" y2="20" stroke="#d0d0c0" strokeWidth="0.2" />
        </g>
      </g>
    </svg>
  );
}
