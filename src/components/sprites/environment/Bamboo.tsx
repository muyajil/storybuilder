/**
 * Bamboo Sprite Component
 * Enhanced with natural gradients, segment textures, and layered leaves
 */

import type { ElementProps } from '../types';

export function Bamboo({ x = 0, y = 0, size = 120, color = '#90EE90' }: ElementProps) {
  return (
    <svg
      width={size * 0.3}
      height={size}
      viewBox="0 0 36 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main stalk gradient for cylindrical effect */}
        <linearGradient id="bambooStalkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#228B22" />
          <stop offset="20%" stopColor={color} />
          <stop offset="50%" stopColor="#ADFF2F" />
          <stop offset="80%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
        {/* Secondary stalk gradient */}
        <linearGradient id="bambooStalkGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2E8B2E" />
          <stop offset="25%" stopColor="#7CCD7C" />
          <stop offset="50%" stopColor="#98FB98" />
          <stop offset="75%" stopColor="#7CCD7C" />
          <stop offset="100%" stopColor="#2E8B2E" />
        </linearGradient>
        {/* Node gradient for segments */}
        <linearGradient id="bambooNodeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a6b1a" />
          <stop offset="50%" stopColor="#228B22" />
          <stop offset="100%" stopColor="#1a6b1a" />
        </linearGradient>
        {/* Leaf gradient */}
        <linearGradient id="bambooLeafGradient" x1="0%" y1="0%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#228B22" />
          <stop offset="40%" stopColor="#32CD32" />
          <stop offset="100%" stopColor="#1a6b1a" />
        </linearGradient>
        {/* Leaf highlight */}
        <linearGradient id="bambooLeafHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#90EE90" />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
      </defs>

      {/* Left stalk with segments */}
      <rect x="5" y="0" width="8" height="120" fill="url(#bambooStalkGradient)" rx="1" />
      {/* Stalk highlight */}
      <rect x="7" y="0" width="2" height="120" fill="white" opacity="0.2" />

      {/* Right stalk */}
      <rect x="22" y="10" width="8" height="110" fill="url(#bambooStalkGradient2)" rx="1" />
      <rect x="24" y="10" width="2" height="110" fill="white" opacity="0.2" />

      {/* Left stalk nodes with 3D effect */}
      <ellipse cx="9" cy="25" rx="5" ry="2" fill="url(#bambooNodeGradient)" />
      <ellipse cx="9" cy="24" rx="4" ry="1" fill="#3a9a3a" opacity="0.5" />
      <ellipse cx="9" cy="50" rx="5" ry="2" fill="url(#bambooNodeGradient)" />
      <ellipse cx="9" cy="49" rx="4" ry="1" fill="#3a9a3a" opacity="0.5" />
      <ellipse cx="9" cy="75" rx="5" ry="2" fill="url(#bambooNodeGradient)" />
      <ellipse cx="9" cy="74" rx="4" ry="1" fill="#3a9a3a" opacity="0.5" />
      <ellipse cx="9" cy="100" rx="5" ry="2" fill="url(#bambooNodeGradient)" />
      <ellipse cx="9" cy="99" rx="4" ry="1" fill="#3a9a3a" opacity="0.5" />

      {/* Right stalk nodes */}
      <ellipse cx="26" cy="35" rx="5" ry="2" fill="url(#bambooNodeGradient)" />
      <ellipse cx="26" cy="34" rx="4" ry="1" fill="#3a9a3a" opacity="0.5" />
      <ellipse cx="26" cy="60" rx="5" ry="2" fill="url(#bambooNodeGradient)" />
      <ellipse cx="26" cy="59" rx="4" ry="1" fill="#3a9a3a" opacity="0.5" />
      <ellipse cx="26" cy="85" rx="5" ry="2" fill="url(#bambooNodeGradient)" />
      <ellipse cx="26" cy="84" rx="4" ry="1" fill="#3a9a3a" opacity="0.5" />

      {/* Leaves with gradients and layering */}
      {/* Top left leaves */}
      <ellipse cx="0" cy="12" rx="12" ry="3" fill="url(#bambooLeafGradient)" transform="rotate(-35 0 12)" />
      <ellipse cx="-2" cy="10" rx="10" ry="2.5" fill="url(#bambooLeafHighlight)" transform="rotate(-40 -2 10)" opacity="0.7" />

      {/* Top center leaves */}
      <ellipse cx="16" cy="3" rx="14" ry="3" fill="url(#bambooLeafGradient)" transform="rotate(8 16 3)" />
      <ellipse cx="18" cy="1" rx="12" ry="2.5" fill="url(#bambooLeafHighlight)" transform="rotate(5 18 1)" opacity="0.7" />

      {/* Top right leaves */}
      <ellipse cx="34" cy="15" rx="12" ry="3" fill="url(#bambooLeafGradient)" transform="rotate(35 34 15)" />
      <ellipse cx="36" cy="13" rx="10" ry="2.5" fill="url(#bambooLeafHighlight)" transform="rotate(30 36 13)" opacity="0.7" />

      {/* Mid-level leaves */}
      <ellipse cx="0" cy="45" rx="10" ry="2.5" fill="url(#bambooLeafGradient)" transform="rotate(-25 0 45)" />
      <ellipse cx="36" cy="55" rx="10" ry="2.5" fill="url(#bambooLeafGradient)" transform="rotate(25 36 55)" />

      {/* Leaf veins (subtle) */}
      <line x1="-5" y1="12" x2="8" y2="12" stroke="#1a5a1a" strokeWidth="0.3" transform="rotate(-35 0 12)" opacity="0.5" />
      <line x1="8" y1="3" x2="28" y2="3" stroke="#1a5a1a" strokeWidth="0.3" transform="rotate(8 16 3)" opacity="0.5" />
    </svg>
  );
}
