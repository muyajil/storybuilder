/**
 * Scroll Sprite Component
 * Enhanced with parchment texture, aged gradients, and depth
 */

import type { EffectProps } from '../types';

export function Scroll({ x = 0, y = 0, size = 32}: EffectProps) {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 32 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Parchment main gradient */}
        <linearGradient id="scrollParchmentGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="30%" stopColor="#F5DEB3" />
          <stop offset="70%" stopColor="#DEB887" />
          <stop offset="100%" stopColor="#D2B48C" />
        </linearGradient>

        {/* Left roll gradient */}
        <radialGradient id="scrollLeftRollGrad" cx="70%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="40%" stopColor="#F5DEB3" />
          <stop offset="80%" stopColor="#D2B48C" />
          <stop offset="100%" stopColor="#8B7355" />
        </radialGradient>

        {/* Right roll gradient */}
        <radialGradient id="scrollRightRollGrad" cx="30%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="40%" stopColor="#F5DEB3" />
          <stop offset="80%" stopColor="#D2B48C" />
          <stop offset="100%" stopColor="#8B7355" />
        </radialGradient>

        {/* Inner roll shadow */}
        <linearGradient id="scrollInnerRoll" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B7355" />
          <stop offset="50%" stopColor="#A08060" />
          <stop offset="100%" stopColor="#8B7355" />
        </linearGradient>

        {/* Text line gradient */}
        <linearGradient id="scrollTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B4423" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#6B4423" stopOpacity="0.6" />
        </linearGradient>

        {/* Parchment texture filter */}
        <filter id="scrollTexture" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" xChannelSelector="R" yChannelSelector="G" />
        </filter>

        {/* Shadow filter */}
        <filter id="scrollShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Glow filter for aged effect */}
        <filter id="scrollGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Shadow */}
      <rect x="5" y="5" width="24" height="16" fill="#3D2914" opacity="0.3" rx="1" />
      <ellipse cx="5" cy="13" rx="4" ry="10" fill="#3D2914" opacity="0.2" />
      <ellipse cx="29" cy="13" rx="4" ry="10" fill="#3D2914" opacity="0.2" />

      {/* Main parchment body */}
      <rect x="4" y="4" width="24" height="16" fill="url(#scrollParchmentGrad)" filter="url(#scrollGlow)" />

      {/* Parchment texture overlay */}
      <rect x="4" y="4" width="24" height="16" fill="#8B7355" opacity="0.05" />

      {/* Left scroll roll */}
      <ellipse cx="4" cy="12" rx="4" ry="10" fill="url(#scrollLeftRollGrad)" filter="url(#scrollShadow)" />

      {/* Left roll inner shadow */}
      <ellipse cx="4" cy="12" rx="2" ry="8" fill="url(#scrollInnerRoll)" />

      {/* Left roll highlight */}
      <ellipse cx="3" cy="10" rx="1" ry="4" fill="white" opacity="0.3" />

      {/* Right scroll roll */}
      <ellipse cx="28" cy="12" rx="4" ry="10" fill="url(#scrollRightRollGrad)" filter="url(#scrollShadow)" />

      {/* Right roll inner shadow */}
      <ellipse cx="28" cy="12" rx="2" ry="8" fill="url(#scrollInnerRoll)" />

      {/* Right roll highlight */}
      <ellipse cx="27" cy="10" rx="1" ry="4" fill="white" opacity="0.3" />

      {/* Aged edges */}
      <path d="M4 4 L28 4" stroke="#D2B48C" strokeWidth="0.5" opacity="0.5" />
      <path d="M4 20 L28 20" stroke="#8B7355" strokeWidth="0.5" opacity="0.5" />

      {/* Text lines with gradient */}
      <line x1="10" y1="8" x2="22" y2="8" stroke="url(#scrollTextGrad)" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="10" y1="12" x2="22" y2="12" stroke="url(#scrollTextGrad)" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="10" y1="16" x2="18" y2="16" stroke="url(#scrollTextGrad)" strokeWidth="1.2" strokeLinecap="round" />

      {/* Decorative dots */}
      <circle cx="8" cy="8" r="0.5" fill="#8B4513" opacity="0.5" />
      <circle cx="8" cy="12" r="0.5" fill="#8B4513" opacity="0.5" />

      {/* Parchment highlights */}
      <rect x="6" y="5" width="20" height="2" fill="white" opacity="0.15" />

      {/* Aged corner stains */}
      <circle cx="6" cy="6" r="2" fill="#D2B48C" opacity="0.3" />
      <circle cx="26" cy="18" r="1.5" fill="#D2B48C" opacity="0.25" />

      {/* Roll ring details */}
      <ellipse cx="4" cy="3" rx="3" ry="1" fill="#D2B48C" opacity="0.5" />
      <ellipse cx="4" cy="21" rx="3" ry="1" fill="#8B7355" opacity="0.5" />
      <ellipse cx="28" cy="3" rx="3" ry="1" fill="#D2B48C" opacity="0.5" />
      <ellipse cx="28" cy="21" rx="3" ry="1" fill="#8B7355" opacity="0.5" />
    </svg>
  );
}
