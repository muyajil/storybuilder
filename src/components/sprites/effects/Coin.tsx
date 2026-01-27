/**
 * Coin Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Coin({ x = 0, y = 0, size = 24, color = '#FFD700' }: EffectProps) {
  const id = `coin-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main coin gradient */}
        <radialGradient id={`${id}-body`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
        {/* Outer glow */}
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        {/* Edge gradient */}
        <linearGradient id={`${id}-edge`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DAA520" />
          <stop offset="50%" stopColor="#8B6914" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Symbol gradient */}
        <linearGradient id={`${id}-symbol`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B6914" />
          <stop offset="50%" stopColor="#654321" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        {/* Shine gradient */}
        <linearGradient id={`${id}-shine`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Glow filter */}
        <filter id={`${id}-filter`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow */}
      <circle cx="12" cy="12" r="13" fill={`url(#${id}-glow)`} />

      {/* Main coin body */}
      <circle cx="12" cy="12" r="11" fill={`url(#${id}-body)`} />

      {/* Edge ring */}
      <circle cx="12" cy="12" r="11" fill="none" stroke={`url(#${id}-edge)`} strokeWidth="2" />

      {/* Inner decorative ring */}
      <circle cx="12" cy="12" r="8" fill="none" stroke="#B8860B" strokeWidth="1" opacity="0.6" />

      {/* Inner fill for depth */}
      <circle cx="12" cy="12" r="7.5" fill="none" stroke="#DAA520" strokeWidth="0.5" opacity="0.4" />

      {/* Top arc highlight */}
      <path d="M5 8 A8 8 0 0 1 19 8" fill="none" stroke={`url(#${id}-shine)`} strokeWidth="3" opacity="0.5" strokeLinecap="round" />

      {/* Dollar symbol with depth */}
      <text x="12" y="17" textAnchor="middle" fontSize="11" fontWeight="bold" fill={`url(#${id}-symbol)`} filter={`url(#${id}-filter)`}>$</text>

      {/* Symbol highlight */}
      <text x="11.5" y="16.5" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white" opacity="0.3">$</text>

      {/* Sparkle effects */}
      <circle cx="6" cy="6" r="1.2" fill="white" opacity="0.95" filter={`url(#${id}-filter)`} />
      <circle cx="8" cy="4" r="0.7" fill="white" opacity="0.8" />
      <circle cx="4" cy="8" r="0.5" fill="white" opacity="0.6" />
      <circle cx="18" cy="18" r="0.8" fill="#FFF8DC" opacity="0.7" />

      {/* Edge sparkles */}
      <circle cx="20" cy="10" r="0.6" fill="white" opacity="0.5" />
      <circle cx="4" cy="14" r="0.5" fill="white" opacity="0.4" />
    </svg>
  );
}
