/**
 * Fire Sprite Component
 * Enhanced with glowing gradients, sparkles, and depth
 */

import type { EffectProps } from '../types';

export function Fire({ x = 0, y = 0, size = 32, color = '#FF4500' }: EffectProps) {
  const id = `fire-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 32 38"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Outer flame gradient */}
        <linearGradient id={`${id}-outer`} x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#8B0000" />
          <stop offset="30%" stopColor={color} />
          <stop offset="60%" stopColor="#FF6347" />
          <stop offset="100%" stopColor="#FF8C00" />
        </linearGradient>
        {/* Middle flame gradient */}
        <linearGradient id={`${id}-middle`} x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#FF8C00" />
          <stop offset="40%" stopColor="#FFD700" />
          <stop offset="80%" stopColor="#FFFF00" />
          <stop offset="100%" stopColor="#FFFACD" />
        </linearGradient>
        {/* Inner flame gradient */}
        <linearGradient id={`${id}-inner`} x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#FFFF00" />
          <stop offset="50%" stopColor="#FFFAF0" />
          <stop offset="100%" stopColor="white" />
        </linearGradient>
        {/* Outer glow */}
        <radialGradient id={`${id}-glow`} cx="50%" cy="70%" r="60%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
        {/* Glow filter */}
        <filter id={`${id}-filter`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow */}
      <ellipse cx="16" cy="24" rx="14" ry="18" fill={`url(#${id}-glow)`} />

      {/* Outer flame */}
      <path
        d="M16 0 Q24 10 22 20 Q28 15 26 28 Q24 38 16 38 Q8 38 6 28 Q4 15 10 20 Q8 10 16 0"
        fill={`url(#${id}-outer)`}
        filter={`url(#${id}-filter)`}
      />

      {/* Secondary outer details */}
      <path
        d="M8 30 Q4 24 7 18"
        stroke="#FF6347"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
        strokeLinecap="round"
      />
      <path
        d="M24 30 Q28 24 25 18"
        stroke="#FF6347"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
        strokeLinecap="round"
      />

      {/* Middle flame */}
      <path
        d="M16 8 Q20 14 18 22 Q22 18 20 30 Q18 36 16 36 Q14 36 12 30 Q10 18 14 22 Q12 14 16 8"
        fill={`url(#${id}-middle)`}
      />

      {/* Inner hottest flame */}
      <path
        d="M16 16 Q18 20 17 26 Q19 24 18 32 Q17 36 16 36 Q15 36 14 32 Q13 24 15 26 Q14 20 16 16"
        fill={`url(#${id}-inner)`}
        opacity="0.9"
      />

      {/* Core white hot */}
      <ellipse cx="16" cy="32" rx="2" ry="3" fill="white" opacity="0.8" />

      {/* Flame edge highlights */}
      <path
        d="M12 6 Q14 12 13 18"
        stroke="white"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
        strokeLinecap="round"
      />

      {/* Spark particles */}
      <circle cx="10" cy="8" r="1" fill="#FFFF00" opacity="0.9" filter={`url(#${id}-filter)`} />
      <circle cx="22" cy="6" r="0.8" fill="#FFD700" opacity="0.8" />
      <circle cx="8" cy="14" r="0.6" fill="#FF8C00" opacity="0.7" />
      <circle cx="24" cy="12" r="0.7" fill="#FFFF00" opacity="0.75" />
      <circle cx="14" cy="4" r="0.5" fill="white" opacity="0.9" />
      <circle cx="18" cy="3" r="0.4" fill="white" opacity="0.8" />

      {/* Rising ember particles */}
      <circle cx="12" cy="2" r="0.6" fill="#FF4500" opacity="0.6" />
      <circle cx="20" cy="1" r="0.5" fill="#FF6347" opacity="0.5" />
    </svg>
  );
}
