/**
 * Laser Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Laser({ x = 0, y = 0, width = 100, color = '#FF0000' }: EffectProps & { width?: number }) {
  const id = `laser-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={width}
      height={12}
      viewBox={`0 0 ${width} 12`}
      style={{ position: 'absolute', left: x, top: y - 2 }}
    >
      <defs>
        {/* Main laser gradient */}
        <linearGradient id={`${id}-beam`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.8" />
        </linearGradient>
        {/* Core gradient */}
        <linearGradient id={`${id}-core`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="50%" stopColor="white" />
          <stop offset="100%" stopColor="white" stopOpacity="0.9" />
        </linearGradient>
        {/* Outer glow gradient */}
        <linearGradient id={`${id}-glow`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="30%" stopColor={color} stopOpacity="0.3" />
          <stop offset="50%" stopColor={color} stopOpacity="0.5" />
          <stop offset="70%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
        {/* Glow filter */}
        <filter id={`${id}-filter`} x="-5%" y="-100%" width="110%" height="300%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Intense glow filter */}
        <filter id={`${id}-intense`} x="-5%" y="-50%" width="110%" height="200%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow layer */}
      <rect x="0" y="0" width={width} height="12" fill={`url(#${id}-glow)`} filter={`url(#${id}-filter)`} />

      {/* Main beam outer */}
      <rect x="0" y="3" width={width} height="6" rx="3" fill={`url(#${id}-beam)`} filter={`url(#${id}-intense)`} />

      {/* Main beam inner */}
      <rect x="0" y="4" width={width} height="4" rx="2" fill={color} />

      {/* Core white hot center */}
      <rect x="0" y="5" width={width} height="2" rx="1" fill={`url(#${id}-core)`} opacity="0.9" />

      {/* Leading edge flare */}
      <ellipse cx={width - 2} cy="6" rx="3" ry="4" fill={color} opacity="0.6" filter={`url(#${id}-filter)`} />
      <ellipse cx={width - 1} cy="6" rx="2" ry="3" fill="white" opacity="0.8" />

      {/* Trailing edge */}
      <ellipse cx="2" cy="6" rx="2" ry="3" fill="white" opacity="0.5" />

      {/* Energy particles along beam */}
      {[...Array(Math.floor(width / 15))].map((_, i) => (
        <g key={i}>
          <circle
            cx={10 + i * 15 + (i % 2) * 5}
            cy={5 + (i % 3)}
            r={0.8 + (i % 2) * 0.4}
            fill="white"
            opacity={0.7 + (i % 3) * 0.1}
          />
        </g>
      ))}

      {/* Sparkle at tip */}
      <circle cx={width - 2} cy="6" r="1.5" fill="white" opacity="1" filter={`url(#${id}-intense)`} />
    </svg>
  );
}
