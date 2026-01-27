/**
 * Gem Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Gem({ x = 0, y = 0, size = 24, color = '#9400D3' }: EffectProps) {
  const id = `gem-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main gem gradient */}
        <linearGradient id={`${id}-body`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DA70D6" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#8B008B" />
          <stop offset="100%" stopColor="#4B0082" />
        </linearGradient>
        {/* Outer glow */}
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        {/* Top facet gradient */}
        <linearGradient id={`${id}-top`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#E6E6FA" stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0.3" />
        </linearGradient>
        {/* Left facet */}
        <linearGradient id={`${id}-left`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9932CC" />
          <stop offset="100%" stopColor="#4B0082" />
        </linearGradient>
        {/* Right facet */}
        <linearGradient id={`${id}-right`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#BA55D3" />
          <stop offset="100%" stopColor="#8B008B" />
        </linearGradient>
        {/* Sparkle filter */}
        <filter id={`${id}-sparkle`} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow */}
      <polygon points="12,0 22,8 22,18 12,24 2,18 2,8" fill={`url(#${id}-glow)`} />

      {/* Main gem body */}
      <polygon points="12,2 20,8 20,16 12,22 4,16 4,8" fill={`url(#${id}-body)`} />

      {/* Top facet - brightest */}
      <polygon points="12,2 4,8 12,12 20,8" fill={`url(#${id}-top)`} />

      {/* Left facet - darker */}
      <polygon points="4,8 4,16 12,12" fill={`url(#${id}-left)`} opacity="0.85" />

      {/* Right facet - medium */}
      <polygon points="20,8 20,16 12,12" fill={`url(#${id}-right)`} opacity="0.75" />

      {/* Bottom left facet */}
      <polygon points="4,16 12,22 12,12" fill="#4B0082" opacity="0.6" />

      {/* Bottom right facet */}
      <polygon points="20,16 12,22 12,12" fill="#8B008B" opacity="0.5" />

      {/* Center highlight line */}
      <line x1="12" y1="12" x2="12" y2="20" stroke="white" strokeWidth="0.5" opacity="0.25" />

      {/* Top edge highlights */}
      <line x1="5" y1="8" x2="12" y2="2" stroke="white" strokeWidth="1" opacity="0.6" strokeLinecap="round" />
      <line x1="12" y1="2" x2="19" y2="8" stroke="white" strokeWidth="0.5" opacity="0.4" strokeLinecap="round" />

      {/* Facet edge lines */}
      <line x1="4" y1="8" x2="4" y2="16" stroke="#E6E6FA" strokeWidth="0.5" opacity="0.3" />
      <line x1="20" y1="8" x2="20" y2="16" stroke="#DA70D6" strokeWidth="0.5" opacity="0.2" />

      {/* Sparkle effects */}
      <circle cx="12" cy="2" r="1.2" fill="white" opacity="1" filter={`url(#${id}-sparkle)`} />
      <circle cx="6" cy="8" r="0.8" fill="white" opacity="0.9" />
      <circle cx="18" cy="8" r="0.6" fill="white" opacity="0.7" />
      <circle cx="8" cy="5" r="0.5" fill="white" opacity="0.8" />
      <circle cx="16" cy="5" r="0.4" fill="white" opacity="0.6" />

      {/* Internal sparkle */}
      <circle cx="10" cy="10" r="0.6" fill="white" opacity="0.5" />
      <circle cx="14" cy="14" r="0.4" fill="#E6E6FA" opacity="0.4" />
    </svg>
  );
}
