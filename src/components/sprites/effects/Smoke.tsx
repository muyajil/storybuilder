/**
 * Smoke Sprite Component
 * Enhanced with wispy gradients, layered opacity, and atmospheric depth
 */

import type { EffectProps } from '../types';

export function Smoke({ x = 0, y = 0, size = 40}: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Base smoke gradient */}
        <radialGradient id="smokeBaseGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A0A0A0" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#808080" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#606060" stopOpacity="0" />
        </radialGradient>

        {/* Light wisp gradient */}
        <radialGradient id="smokeLightWisp" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#C0C0C0" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#A0A0A0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#808080" stopOpacity="0" />
        </radialGradient>

        {/* Dark wisp gradient */}
        <radialGradient id="smokeDarkWisp" cx="60%" cy="60%" r="60%">
          <stop offset="0%" stopColor="#707070" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#606060" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#505050" stopOpacity="0" />
        </radialGradient>

        {/* Rising smoke gradient */}
        <linearGradient id="smokeRisingGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#808080" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#909090" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#B0B0B0" stopOpacity="0.1" />
        </linearGradient>

        {/* Atmospheric blur filter */}
        <filter id="smokeBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Soft edge filter */}
        <filter id="smokeSoftEdge" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Wisp filter */}
        <filter id="smokeWisp" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background atmospheric layer */}
      <ellipse cx="20" cy="22" rx="18" ry="16" fill="url(#smokeRisingGrad)" opacity="0.3" filter="url(#smokeBlur)" />

      {/* Bottom smoke puff - largest */}
      <circle cx="12" cy="28" r="10" fill="url(#smokeBaseGrad)" filter="url(#smokeSoftEdge)" />
      <circle cx="12" cy="28" r="7" fill="url(#smokeLightWisp)" opacity="0.5" />

      {/* Right bottom puff */}
      <circle cx="28" cy="26" r="10" fill="url(#smokeBaseGrad)" filter="url(#smokeSoftEdge)" />
      <circle cx="28" cy="26" r="6" fill="url(#smokeDarkWisp)" opacity="0.4" />

      {/* Central rising smoke */}
      <circle cx="20" cy="22" r="12" fill="url(#smokeLightWisp)" filter="url(#smokeWisp)" />
      <circle cx="20" cy="22" r="8" fill="url(#smokeBaseGrad)" opacity="0.5" />

      {/* Upper smoke wisps */}
      <circle cx="20" cy="14" r="10" fill="url(#smokeLightWisp)" filter="url(#smokeWisp)" />
      <circle cx="20" cy="14" r="6" fill="url(#smokeBaseGrad)" opacity="0.3" />

      {/* Top dissipating smoke */}
      <circle cx="16" cy="8" r="6" fill="url(#smokeLightWisp)" opacity="0.25" filter="url(#smokeBlur)" />
      <circle cx="24" cy="10" r="5" fill="url(#smokeLightWisp)" opacity="0.2" filter="url(#smokeBlur)" />

      {/* Smallest wisps at top */}
      <circle cx="20" cy="4" r="4" fill="url(#smokeLightWisp)" opacity="0.15" filter="url(#smokeBlur)" />
      <circle cx="12" cy="6" r="3" fill="url(#smokeLightWisp)" opacity="0.1" filter="url(#smokeBlur)" />
      <circle cx="28" cy="8" r="3" fill="url(#smokeLightWisp)" opacity="0.1" filter="url(#smokeBlur)" />

      {/* Side wisps */}
      <ellipse cx="6" cy="20" rx="5" ry="8" fill="url(#smokeDarkWisp)" opacity="0.25" filter="url(#smokeWisp)" />
      <ellipse cx="34" cy="18" rx="5" ry="7" fill="url(#smokeDarkWisp)" opacity="0.2" filter="url(#smokeWisp)" />

      {/* Inner highlights */}
      <circle cx="18" cy="20" r="3" fill="white" opacity="0.1" />
      <circle cx="22" cy="26" r="2" fill="white" opacity="0.08" />
      <circle cx="14" cy="14" r="2" fill="white" opacity="0.08" />

      {/* Swirl details */}
      <path d="M15 25 Q20 20 25 25" stroke="#A0A0A0" strokeWidth="0.5" fill="none" opacity="0.2" />
      <path d="M18 18 Q20 14 22 18" stroke="#B0B0B0" strokeWidth="0.5" fill="none" opacity="0.15" />
      <path d="M12 12 Q16 8 20 12" stroke="#C0C0C0" strokeWidth="0.5" fill="none" opacity="0.1" />
    </svg>
  );
}
