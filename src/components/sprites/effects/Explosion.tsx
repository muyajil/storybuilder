/**
 * Explosion Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Explosion({ x = 0, y = 0, size = 50, color = '#FF4500' }: EffectProps) {
  const id = `explosion-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      style={{ position: 'absolute', left: x - size/2, top: y - size/2 }}
    >
      <defs>
        {/* Outer ray gradient */}
        <radialGradient id={`${id}-ray`} cx="0%" cy="50%" r="100%">
          <stop offset="0%" stopColor="#FFFF00" />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor="#8B0000" />
        </radialGradient>
        {/* Outer glow */}
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="70%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        {/* Inner yellow gradient */}
        <radialGradient id={`${id}-inner`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="white" />
          <stop offset="30%" stopColor="#FFFACD" />
          <stop offset="70%" stopColor="#FFFF00" />
          <stop offset="100%" stopColor="#FFD700" />
        </radialGradient>
        {/* Center white gradient */}
        <radialGradient id={`${id}-center`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="white" />
          <stop offset="50%" stopColor="#FFFAF0" />
          <stop offset="100%" stopColor="#FFFFE0" />
        </radialGradient>
        {/* Glow filter */}
        <filter id={`${id}-filter`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow circle */}
      <circle cx="25" cy="25" r="24" fill={`url(#${id}-glow)`} />

      {/* Outer rays */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * Math.PI * 2) / 12;
        const innerR = 8;
        const outerR = 22 + (i % 2) * 3;
        const spread = 0.18;
        return (
          <polygon
            key={i}
            points={`
              25,25
              ${25 + Math.cos(angle - spread) * innerR},${25 + Math.sin(angle - spread) * innerR}
              ${25 + Math.cos(angle) * outerR},${25 + Math.sin(angle) * outerR}
              ${25 + Math.cos(angle + spread) * innerR},${25 + Math.sin(angle + spread) * innerR}
            `}
            fill={`url(#${id}-ray)`}
            opacity={0.9}
          />
        );
      })}

      {/* Secondary smaller rays */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * Math.PI * 2) / 12 + Math.PI / 12;
        const innerR = 10;
        const outerR = 16;
        const spread = 0.12;
        return (
          <polygon
            key={`small-${i}`}
            points={`
              25,25
              ${25 + Math.cos(angle - spread) * innerR},${25 + Math.sin(angle - spread) * innerR}
              ${25 + Math.cos(angle) * outerR},${25 + Math.sin(angle) * outerR}
              ${25 + Math.cos(angle + spread) * innerR},${25 + Math.sin(angle + spread) * innerR}
            `}
            fill="#FFFF00"
            opacity={0.7}
          />
        );
      })}

      {/* Inner yellow circle */}
      <circle cx="25" cy="25" r="10" fill={`url(#${id}-inner)`} />

      {/* Center white hot core */}
      <circle cx="25" cy="25" r="5" fill={`url(#${id}-center)`} filter={`url(#${id}-filter)`} />

      {/* Core highlight */}
      <circle cx="23" cy="23" r="2" fill="white" opacity="0.9" />

      {/* Sparkle effects around explosion */}
      <circle cx="10" cy="10" r="1.5" fill="white" opacity="0.9" filter={`url(#${id}-filter)`} />
      <circle cx="40" cy="10" r="1.2" fill="white" opacity="0.8" />
      <circle cx="10" cy="40" r="1" fill="white" opacity="0.7" />
      <circle cx="40" cy="40" r="1.3" fill="white" opacity="0.85" />
      <circle cx="25" cy="5" r="0.8" fill="#FFFF00" opacity="0.9" />
      <circle cx="45" cy="25" r="0.7" fill="#FFFF00" opacity="0.8" />
      <circle cx="5" cy="25" r="0.6" fill="#FFFF00" opacity="0.7" />
      <circle cx="25" cy="45" r="0.9" fill="#FFFF00" opacity="0.85" />
    </svg>
  );
}
