/**
 * ProgressBar Sprite Component
 * Enhanced with gradient fills, glow effects, and depth
 */

import type { EffectProps } from '../types';

export function ProgressBar({ x = 0, y = 0, width = 100, progress = 50}: EffectProps & { width?: number; progress?: number }) {
  const percentage = Math.max(0, Math.min(100, progress));
  const fillWidth = (width - 4) * percentage / 100;

  return (
    <svg
      width={width}
      height={16}
      viewBox={`0 0 ${width} 16`}
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Background gradient */}
        <linearGradient id="progressBarBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="50%" stopColor="#333333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>

        {/* Fill gradient */}
        <linearGradient id="progressBarFillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6495ED" />
          <stop offset="30%" stopColor="#4169E1" />
          <stop offset="70%" stopColor="#3154B5" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>

        {/* Shine gradient */}
        <linearGradient id="progressBarShineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="50%" stopColor="white" stopOpacity="0.1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        {/* Glow effect for fill */}
        <filter id="progressBarGlow" x="-10%" y="-50%" width="120%" height="200%">
          <feGaussianBlur stdDeviation="2" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Inner shadow */}
        <filter id="progressBarInnerShadow" x="-5%" y="-20%" width="110%" height="140%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* End cap glow */}
        <radialGradient id="progressBarEndGlow" cx="100%" cy="50%" r="100%">
          <stop offset="0%" stopColor="#6495ED" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#4169E1" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#4169E1" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <rect x="1" y="2" width={width} height="14" fill="#000" opacity="0.3" rx="7" />

      {/* Background bar */}
      <rect x="0" y="0" width={width} height="14" fill="url(#progressBarBgGrad)" rx="7" stroke="#555" strokeWidth="1" />

      {/* Inner track */}
      <rect x="2" y="2" width={width - 4} height="10" fill="#222" rx="5" />

      {/* Track inner highlight */}
      <rect x="2" y="2" width={width - 4} height="5" fill="white" opacity="0.05" rx="5" />

      {/* Progress fill with glow */}
      {percentage > 0 && (
        <>
          {/* Glow behind fill */}
          <rect x="2" y="2" width={fillWidth} height="10" fill="#4169E1" rx="5" opacity="0.5" filter="url(#progressBarGlow)" />

          {/* Main fill */}
          <rect x="2" y="2" width={fillWidth} height="10" fill="url(#progressBarFillGrad)" rx="5" />

          {/* Fill shine */}
          <rect x="2" y="2" width={fillWidth} height="5" fill="url(#progressBarShineGrad)" rx="5" />

          {/* Progress edge glow */}
          {percentage < 100 && (
            <ellipse cx={2 + fillWidth} cy="7" rx="4" ry="5" fill="url(#progressBarEndGlow)" />
          )}

          {/* Small sparkles on fill */}
          {percentage > 20 && (
            <circle cx={fillWidth * 0.3 + 2} cy="5" r="1" fill="white" opacity="0.6" />
          )}
          {percentage > 50 && (
            <circle cx={fillWidth * 0.6 + 2} cy="6" r="0.8" fill="white" opacity="0.5" />
          )}
          {percentage > 80 && (
            <circle cx={fillWidth * 0.85 + 2} cy="5" r="0.6" fill="white" opacity="0.4" />
          )}
        </>
      )}

      {/* Top highlight */}
      <rect x="4" y="1" width={width - 8} height="1" fill="white" opacity="0.1" rx="0.5" />

      {/* Border highlight */}
      <rect x="0" y="0" width={width} height="14" fill="none" rx="7" stroke="white" strokeWidth="0.5" opacity="0.1" />
    </svg>
  );
}
