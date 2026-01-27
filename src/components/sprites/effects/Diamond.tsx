/**
 * Diamond Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Diamond({ x = 0, y = 0, size = 24, color = '#00BFFF' }: EffectProps) {
  const id = `diamond-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main diamond gradient */}
        <linearGradient id={`${id}-body`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0FFFF" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#1E90FF" />
          <stop offset="100%" stopColor="#00008B" />
        </linearGradient>
        {/* Outer glow */}
        <radialGradient id={`${id}-glow`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        {/* Top facet gradient */}
        <linearGradient id={`${id}-top`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#E0FFFF" stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0.4" />
        </linearGradient>
        {/* Left facet */}
        <linearGradient id={`${id}-left`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E90FF" />
          <stop offset="100%" stopColor="#00008B" />
        </linearGradient>
        {/* Right facet */}
        <linearGradient id={`${id}-right`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#4169E1" />
        </linearGradient>
        {/* Center facet */}
        <linearGradient id={`${id}-center`} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#1E90FF" />
        </linearGradient>
        {/* Sparkle filter */}
        <filter id={`${id}-sparkle`} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow */}
      <polygon points="12,0 24,10 12,24 0,10" fill={`url(#${id}-glow)`} />

      {/* Main diamond outline */}
      <polygon points="12,2 22,10 12,22 2,10" fill={`url(#${id}-body)`} />

      {/* Top left facet - brightest */}
      <polygon points="12,2 7,10 12,10" fill={`url(#${id}-top)`} />

      {/* Top right facet */}
      <polygon points="12,2 17,10 12,10" fill="#87CEEB" opacity="0.7" />

      {/* Left facet - darker */}
      <polygon points="2,10 7,10 12,10 12,22" fill={`url(#${id}-left)`} opacity="0.8" />

      {/* Right facet - medium */}
      <polygon points="22,10 17,10 12,10 12,22" fill={`url(#${id}-right)`} opacity="0.7" />

      {/* Center highlight line */}
      <line x1="12" y1="10" x2="12" y2="20" stroke="white" strokeWidth="0.5" opacity="0.3" />

      {/* Top edge highlight */}
      <line x1="4" y1="10" x2="12" y2="2" stroke="white" strokeWidth="1" opacity="0.6" strokeLinecap="round" />

      {/* Inner facet lines */}
      <line x1="7" y1="10" x2="12" y2="22" stroke="#4169E1" strokeWidth="0.5" opacity="0.5" />
      <line x1="17" y1="10" x2="12" y2="22" stroke="#1E90FF" strokeWidth="0.5" opacity="0.4" />

      {/* Crown highlight */}
      <polygon points="12,2 9,6 12,6 15,6" fill="white" opacity="0.5" />

      {/* Sparkle effects */}
      <circle cx="12" cy="2" r="1.5" fill="white" opacity="1" filter={`url(#${id}-sparkle)`} />
      <circle cx="5" cy="10" r="1" fill="white" opacity="0.9" />
      <circle cx="19" cy="10" r="0.8" fill="white" opacity="0.7" />
      <circle cx="8" cy="6" r="0.6" fill="white" opacity="0.8" />
      <circle cx="16" cy="6" r="0.5" fill="white" opacity="0.6" />
      <circle cx="12" cy="18" r="0.7" fill="#E0FFFF" opacity="0.5" />

      {/* Rainbow refraction hint */}
      <line x1="9" y1="12" x2="7" y2="14" stroke="#FF69B4" strokeWidth="0.5" opacity="0.4" />
      <line x1="15" y1="12" x2="17" y2="14" stroke="#90EE90" strokeWidth="0.5" opacity="0.4" />
    </svg>
  );
}
