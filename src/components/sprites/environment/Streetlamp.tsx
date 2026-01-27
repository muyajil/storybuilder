/**
 * Streetlamp Sprite Component
 * High quality with metallic gradients, lamp glow, and atmospheric effects
 */

import type { ElementProps } from '../types';

export function Streetlamp({ x = 0, y = 0, size = 100, color = '#333' }: ElementProps) {
  return (
    <svg
      width={size * 0.4}
      height={size}
      viewBox="0 0 40 100"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Post metallic gradient */}
        <linearGradient id="streetlampPostGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="25%" stopColor="#3d3d3d" />
          <stop offset="50%" stopColor="#4a4a4a" />
          <stop offset="75%" stopColor="#3d3d3d" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Lantern frame gradient */}
        <linearGradient id="streetlampLanternGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        {/* Warm lamp glow */}
        <radialGradient id="streetlampGlowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFCC" />
          <stop offset="40%" stopColor="#FFEE88" />
          <stop offset="70%" stopColor="#FFDD44" />
          <stop offset="100%" stopColor="#FFCC00" />
        </radialGradient>
        {/* Outer glow effect */}
        <radialGradient id="streetlampOuterGlow" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#FFFF99" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#FFD700" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFA500" stopOpacity="0" />
        </radialGradient>
        {/* Cap metallic gradient */}
        <linearGradient id="streetlampCapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="50%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Glow filter */}
        <filter id="streetlampGlowFilter" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Atmospheric glow around lamp */}
      <ellipse cx="20" cy="14" rx="18" ry="16" fill="url(#streetlampOuterGlow)" filter="url(#streetlampGlowFilter)" />

      {/* Base / Basis */}
      <rect x="10" y="95" width="20" height="5" fill="url(#streetlampPostGradient)" rx="1" />
      <rect x="12" y="93" width="16" height="3" fill="url(#streetlampPostGradient)" rx="1" />

      {/* Post / Stange */}
      <rect x="17" y="20" width="6" height="75" fill="url(#streetlampPostGradient)" />
      {/* Post detail lines */}
      <line x1="18" y1="20" x2="18" y2="95" stroke="#5a5a5a" strokeWidth="0.5" />
      <line x1="22" y1="20" x2="22" y2="95" stroke="#1a1a1a" strokeWidth="0.5" />
      {/* Decorative rings */}
      <rect x="16" y="22" width="8" height="2" fill="#4a4a4a" rx="0.5" />
      <rect x="16" y="88" width="8" height="2" fill="#4a4a4a" rx="0.5" />

      {/* Lantern frame / Laterne */}
      <rect x="8" y="5" width="24" height="18" fill="url(#streetlampLanternGradient)" rx="2" />
      {/* Frame inner border */}
      <rect x="9" y="6" width="22" height="16" fill="none" stroke="#1a1a1a" strokeWidth="0.5" rx="1.5" />

      {/* Glass panels / Glasscheiben */}
      <rect x="10" y="7" width="8" height="14" fill="url(#streetlampGlowGradient)" rx="1" />
      <rect x="22" y="7" width="8" height="14" fill="url(#streetlampGlowGradient)" rx="1" />
      {/* Glass reflection */}
      <rect x="11" y="8" width="2" height="10" fill="rgba(255,255,255,0.4)" rx="0.5" />
      <rect x="23" y="8" width="2" height="10" fill="rgba(255,255,255,0.4)" rx="0.5" />

      {/* Center divider */}
      <rect x="18" y="7" width="4" height="14" fill="url(#streetlampLanternGradient)" />

      {/* Cap / Kappe */}
      <polygon points="20,0 3,5 37,5" fill="url(#streetlampCapGradient)" />
      {/* Cap detail */}
      <polygon points="20,1 6,5 34,5" fill="none" stroke="#5a5a5a" strokeWidth="0.3" />
      {/* Top finial */}
      <circle cx="20" cy="1" r="1.5" fill="#4a4a4a" />

      {/* Mounting bracket / Halterung */}
      <path d="M17 20 L8 12 L8 23 L17 20" fill="url(#streetlampPostGradient)" />
      <path d="M23 20 L32 12 L32 23 L23 20" fill="url(#streetlampPostGradient)" />
    </svg>
  );
}
