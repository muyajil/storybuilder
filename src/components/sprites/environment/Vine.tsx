/**
 * Vine Sprite Component
 * High quality with natural curves, leaf gradients, and organic details
 */

import type { ElementProps } from '../types';

export function Vine({ x = 0, y = 0, size = 100, color = '#228B22' }: ElementProps) {
  return (
    <svg
      width={size * 0.4}
      height={size}
      viewBox="0 0 40 100"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main vine stem gradient */}
        <linearGradient id="vineMainStemGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a5a1a" />
          <stop offset="30%" stopColor="#2a7a2a" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#1a6a1a" />
        </linearGradient>
        {/* Leaf gradient */}
        <radialGradient id="vineLeafGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#3aaa3a" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#1a6a1a" />
        </radialGradient>
        {/* Darker leaf for depth */}
        <radialGradient id="vineLeafDarkGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#2a8a2a" />
          <stop offset="100%" stopColor="#156015" />
        </radialGradient>
        {/* Tendril gradient */}
        <linearGradient id="vineTendrilGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2a9a2a" />
          <stop offset="100%" stopColor="#1a7a1a" />
        </linearGradient>
      </defs>

      {/* Main vine stem / Ranke */}
      <path
        d="M20 0 Q8 15 18 30 Q28 45 15 60 Q5 75 20 100"
        stroke="url(#vineMainStemGradient)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      {/* Stem highlight */}
      <path
        d="M20 0 Q8 15 18 30 Q28 45 15 60 Q5 75 20 100"
        stroke="#3aaa3a"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        opacity="0.3"
      />

      {/* Node bumps along stem */}
      <circle cx="18" cy="30" r="2.5" fill="#2a7a2a" />
      <circle cx="15" cy="60" r="2.5" fill="#2a7a2a" />

      {/* Tendrils / Rankenspiralen */}
      <path d="M18 15 Q5 12 8 8 Q12 5 10 2" stroke="url(#vineTendrilGradient)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M22 45 Q35 42 32 38 Q28 35 30 32" stroke="url(#vineTendrilGradient)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M12 75 Q0 72 3 68 Q7 65 5 62" stroke="url(#vineTendrilGradient)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Leaf 1 - top left */}
      <g transform="rotate(-40 10 20)">
        <ellipse cx="6" cy="20" rx="9" ry="5.5" fill="url(#vineLeafGradient)" />
        {/* Leaf vein */}
        <path d="M-2 20 L14 20" stroke="#1a5a1a" strokeWidth="0.5" opacity="0.5" />
        <path d="M3 18 L6 20 L3 22" stroke="#1a5a1a" strokeWidth="0.3" fill="none" opacity="0.4" />
        <path d="M9 18 L6 20 L9 22" stroke="#1a5a1a" strokeWidth="0.3" fill="none" opacity="0.4" />
        {/* Leaf highlight */}
        <ellipse cx="4" cy="19" rx="3" ry="2" fill="#4aba4a" opacity="0.3" />
      </g>

      {/* Leaf 2 - top right */}
      <g transform="rotate(35 30 40)">
        <ellipse cx="32" cy="40" rx="9" ry="5.5" fill="url(#vineLeafGradient)" />
        <path d="M24 40 L40 40" stroke="#1a5a1a" strokeWidth="0.5" opacity="0.5" />
        <path d="M28 38 L32 40 L28 42" stroke="#1a5a1a" strokeWidth="0.3" fill="none" opacity="0.4" />
        <ellipse cx="30" cy="39" rx="3" ry="2" fill="#4aba4a" opacity="0.3" />
      </g>

      {/* Leaf 3 - middle left (darker for depth) */}
      <g transform="rotate(-35 8 60)">
        <ellipse cx="5" cy="60" rx="8" ry="5" fill="url(#vineLeafDarkGradient)" />
        <path d="M-2 60 L12 60" stroke="#104a10" strokeWidth="0.5" opacity="0.5" />
        <ellipse cx="3" cy="59" rx="2.5" ry="1.5" fill="#2a9a2a" opacity="0.3" />
      </g>

      {/* Leaf 4 - bottom right */}
      <g transform="rotate(40 32 80)">
        <ellipse cx="33" cy="80" rx="9" ry="5.5" fill="url(#vineLeafGradient)" />
        <path d="M25 80 L41 80" stroke="#1a5a1a" strokeWidth="0.5" opacity="0.5" />
        <path d="M29 78 L33 80 L29 82" stroke="#1a5a1a" strokeWidth="0.3" fill="none" opacity="0.4" />
        <ellipse cx="31" cy="79" rx="3" ry="2" fill="#4aba4a" opacity="0.3" />
      </g>

      {/* Small developing leaves */}
      <ellipse cx="14" cy="8" rx="4" ry="2.5" fill="#3aaa3a" opacity="0.7" transform="rotate(-20 14 8)" />
      <ellipse cx="24" cy="92" rx="4" ry="2.5" fill="#3aaa3a" opacity="0.7" transform="rotate(25 24 92)" />

      {/* Tiny flower buds */}
      <circle cx="8" cy="35" r="2" fill="#FFB6C1" opacity="0.6" />
      <circle cx="28" cy="55" r="1.5" fill="#FFB6C1" opacity="0.5" />
    </svg>
  );
}
