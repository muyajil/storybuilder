/**
 * Crown Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Crown({ x = 0, y = 0, size = 32, color = '#FFD700' }: EffectProps) {
  const id = `crown-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 32 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main crown gradient */}
        <linearGradient id={`${id}-body`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Outer glow */}
        <radialGradient id={`${id}-glow`} cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        {/* Ruby gradient */}
        <radialGradient id={`${id}-ruby`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="50%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#8B0000" />
        </radialGradient>
        {/* Sapphire gradient */}
        <radialGradient id={`${id}-sapphire`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="50%" stopColor="#00BFFF" />
          <stop offset="100%" stopColor="#00008B" />
        </radialGradient>
        {/* Emerald gradient */}
        <radialGradient id={`${id}-emerald`} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#90EE90" />
          <stop offset="50%" stopColor="#00FF00" />
          <stop offset="100%" stopColor="#006400" />
        </radialGradient>
        {/* Shine gradient */}
        <linearGradient id={`${id}-shine`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.8" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Glow filter */}
        <filter id={`${id}-filter`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow */}
      <polygon points="16,0 22,12 32,8 28,22 4,22 0,8 10,12" fill={`url(#${id}-glow)`} />

      {/* Main crown body */}
      <polygon points="2,20 4,8 10,14 16,4 22,14 28,8 30,20" fill={`url(#${id}-body)`} />

      {/* Base band */}
      <rect x="2" y="20" width="28" height="4" fill={`url(#${id}-body)`} />

      {/* Inner shadow for depth */}
      <polygon points="4,18 6,10 10,14 16,6 22,14 26,10 28,18" fill="#B8860B" opacity="0.3" />

      {/* Shine highlights on points */}
      <polygon points="4,8 5,10 7,12 6,9" fill="white" opacity="0.5" />
      <polygon points="16,4 17,6 18,10 16,7" fill="white" opacity="0.6" />
      <polygon points="28,8 27,10 25,12 26,9" fill="white" opacity="0.5" />

      {/* Point orbs with gradients */}
      <circle cx="4" cy="8" r="2.5" fill={`url(#${id}-body)`} />
      <circle cx="4" cy="7" r="1" fill="white" opacity="0.7" />

      <circle cx="16" cy="4" r="2.5" fill={`url(#${id}-body)`} />
      <circle cx="16" cy="3" r="1" fill="white" opacity="0.7" />

      <circle cx="28" cy="8" r="2.5" fill={`url(#${id}-body)`} />
      <circle cx="28" cy="7" r="1" fill="white" opacity="0.7" />

      {/* Gemstones */}
      <circle cx="8" cy="22" r="2.2" fill={`url(#${id}-ruby)`} filter={`url(#${id}-filter)`} />
      <ellipse cx="7" cy="21" rx="0.8" ry="0.6" fill="white" opacity="0.7" />

      <circle cx="16" cy="22" r="2.2" fill={`url(#${id}-sapphire)`} filter={`url(#${id}-filter)`} />
      <ellipse cx="15" cy="21" rx="0.8" ry="0.6" fill="white" opacity="0.7" />

      <circle cx="24" cy="22" r="2.2" fill={`url(#${id}-emerald)`} filter={`url(#${id}-filter)`} />
      <ellipse cx="23" cy="21" rx="0.8" ry="0.6" fill="white" opacity="0.7" />

      {/* Band decoration */}
      <line x1="4" y1="21" x2="28" y2="21" stroke="#B8860B" strokeWidth="0.5" opacity="0.5" />

      {/* Sparkle effects */}
      <circle cx="16" cy="2" r="1" fill="white" opacity="0.95" filter={`url(#${id}-filter)`} />
      <circle cx="3" cy="6" r="0.7" fill="white" opacity="0.8" />
      <circle cx="29" cy="6" r="0.7" fill="white" opacity="0.8" />
      <circle cx="10" cy="12" r="0.5" fill="white" opacity="0.6" />
      <circle cx="22" cy="12" r="0.5" fill="white" opacity="0.6" />
    </svg>
  );
}
