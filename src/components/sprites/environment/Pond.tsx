/**
 * Pond Sprite Component
 * Enhanced with water reflections, ripples, lily pads with detail, and natural depth
 */

import type { ElementProps } from '../types';

export function Pond({ x = 0, y = 0, size = 100, color = '#4169E1' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 100 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Water gradient with depth */}
        <radialGradient id="pondWaterMain" cx="50%" cy="40%" rx="50%" ry="40%">
          <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.7" />
          <stop offset="40%" stopColor={color} stopOpacity="0.8" />
          <stop offset="80%" stopColor="#1E4A7A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0A2A4A" stopOpacity="0.95" />
        </radialGradient>

        {/* Surface reflection */}
        <linearGradient id="pondReflection" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="30%" stopColor="white" stopOpacity="0.1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        {/* Lily pad gradient */}
        <radialGradient id="pondLilyPad" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#3CB371" />
          <stop offset="50%" stopColor="#228B22" />
          <stop offset="100%" stopColor="#1A6B1A" />
        </radialGradient>

        {/* Flower gradient */}
        <radialGradient id="pondFlowerPink" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#FFB6C1" />
          <stop offset="50%" stopColor="#FF69B4" />
          <stop offset="100%" stopColor="#FF1493" />
        </radialGradient>

        {/* Mud/shore gradient */}
        <linearGradient id="pondShore" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#8B7355" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#6B5335" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Muddy shore edge */}
      <ellipse cx="50" cy="36" rx="49" ry="24" fill="url(#pondShore)" />

      {/* Main water body */}
      <ellipse cx="50" cy="35" rx="47" ry="22" fill="url(#pondWaterMain)" />

      {/* Water surface reflection */}
      <ellipse cx="35" cy="28" rx="25" ry="10" fill="url(#pondReflection)" />

      {/* Ripple circles */}
      <ellipse cx="50" cy="35" rx="40" ry="18" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      <ellipse cx="50" cy="35" rx="30" ry="13" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
      <ellipse cx="50" cy="35" rx="20" ry="8" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />

      {/* Lily pad 1 with detail */}
      <g transform="translate(22, 27)">
        <ellipse cx="8" cy="4" rx="10" ry="5" fill="url(#pondLilyPad)" />
        {/* Lily pad notch */}
        <path d="M8 4 L1 0 L8 -1" fill="#4169E1" />
        {/* Leaf veins */}
        <line x1="8" y1="4" x2="15" y2="2" stroke="#1A5A1A" strokeWidth="0.5" opacity="0.5" />
        <line x1="8" y1="4" x2="14" y2="6" stroke="#1A5A1A" strokeWidth="0.5" opacity="0.5" />
        <line x1="8" y1="4" x2="3" y2="6" stroke="#1A5A1A" strokeWidth="0.5" opacity="0.5" />
      </g>

      {/* Lily pad 2 */}
      <g transform="translate(62, 37)">
        <ellipse cx="6" cy="3" rx="8" ry="4" fill="url(#pondLilyPad)" />
        <path d="M6 3 L0 0 L6 -1" fill="#4169E1" />
        <line x1="6" y1="3" x2="12" y2="2" stroke="#1A5A1A" strokeWidth="0.4" opacity="0.5" />
        <line x1="6" y1="3" x2="11" y2="5" stroke="#1A5A1A" strokeWidth="0.4" opacity="0.5" />
      </g>

      {/* Water lily flower */}
      <g transform="translate(26, 24)">
        {/* Outer petals */}
        <ellipse cx="4" cy="0" rx="3" ry="1.5" fill="url(#pondFlowerPink)" transform="rotate(-30)" />
        <ellipse cx="4" cy="0" rx="3" ry="1.5" fill="url(#pondFlowerPink)" transform="rotate(30)" />
        <ellipse cx="4" cy="0" rx="3" ry="1.5" fill="url(#pondFlowerPink)" transform="rotate(90)" />
        <ellipse cx="4" cy="0" rx="3" ry="1.5" fill="url(#pondFlowerPink)" transform="rotate(-90)" />
        {/* Inner petals */}
        <ellipse cx="2.5" cy="0" rx="2" ry="1" fill="#FFB6C1" transform="rotate(-60)" />
        <ellipse cx="2.5" cy="0" rx="2" ry="1" fill="#FFB6C1" transform="rotate(60)" />
        {/* Center */}
        <circle cx="0" cy="0" r="1.5" fill="#FFD700" />
      </g>

      {/* Small ripples near lily pads */}
      <ellipse cx="30" cy="30" rx="4" ry="1.5" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.3" />
      <ellipse cx="68" cy="40" rx="3" ry="1" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.3" />

      {/* Underwater shadows/depth hints */}
      <ellipse cx="40" cy="42" rx="8" ry="3" fill="rgba(0,20,40,0.2)" />
      <ellipse cx="65" cy="38" rx="5" ry="2" fill="rgba(0,20,40,0.15)" />

      {/* Sparkle highlights */}
      <circle cx="25" cy="25" r="1" fill="white" opacity="0.6" />
      <circle cx="60" cy="30" r="0.8" fill="white" opacity="0.5" />
      <circle cx="45" cy="28" r="0.6" fill="white" opacity="0.4" />
    </svg>
  );
}
