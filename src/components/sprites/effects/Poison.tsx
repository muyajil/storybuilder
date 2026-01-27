/**
 * Poison Sprite Component
 * Enhanced with toxic glow effects, bubbling gradients, and eerie depth
 */

import type { EffectProps } from '../types';

export function Poison({ x = 0, y = 0, size = 24}: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Toxic outer glow */}
        <radialGradient id="poisonOuterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="40%" stopColor="#32CD32" stopOpacity="0" />
          <stop offset="70%" stopColor="#32CD32" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00FF00" stopOpacity="0.5" />
        </radialGradient>

        {/* Main body gradient */}
        <radialGradient id="poisonBodyGrad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#7FFF00" />
          <stop offset="40%" stopColor="#32CD32" />
          <stop offset="80%" stopColor="#228B22" />
          <stop offset="100%" stopColor="#006400" />
        </radialGradient>

        {/* Inner toxic gradient */}
        <radialGradient id="poisonInnerGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ADFF2F" />
          <stop offset="50%" stopColor="#32CD32" />
          <stop offset="100%" stopColor="#228B22" />
        </radialGradient>

        {/* Eye socket gradient */}
        <radialGradient id="poisonEyeGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#1A1A1A" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>

        {/* Bubble gradient */}
        <radialGradient id="poisonBubbleGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#90EE90" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#32CD32" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#228B22" stopOpacity="0.3" />
        </radialGradient>

        {/* Glow filter */}
        <filter id="poisonGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Drip filter */}
        <filter id="poisonDrip" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Toxic aura */}
      <circle cx="12" cy="12" r="11" fill="url(#poisonOuterGlow)" />

      {/* Outer glow ring */}
      <circle cx="12" cy="12" r="10" fill="url(#poisonBodyGrad)" opacity="0.6" filter="url(#poisonGlow)" />

      {/* Main body */}
      <circle cx="12" cy="12" r="6" fill="url(#poisonInnerGrad)" filter="url(#poisonGlow)" />

      {/* Face highlight */}
      <ellipse cx="10" cy="10" rx="2" ry="1.5" fill="#ADFF2F" opacity="0.4" />

      {/* Evil eyes */}
      <circle cx="8" cy="10" r="2" fill="url(#poisonEyeGrad)" />
      <circle cx="16" cy="10" r="2" fill="url(#poisonEyeGrad)" />

      {/* Eye glow */}
      <circle cx="8" cy="10" r="2.5" fill="none" stroke="#00FF00" strokeWidth="0.5" opacity="0.5" />
      <circle cx="16" cy="10" r="2.5" fill="none" stroke="#00FF00" strokeWidth="0.5" opacity="0.5" />

      {/* Eye reflections */}
      <circle cx="7.5" cy="9.5" r="0.5" fill="#32CD32" opacity="0.6" />
      <circle cx="15.5" cy="9.5" r="0.5" fill="#32CD32" opacity="0.6" />

      {/* Sinister mouth */}
      <path d="M8 16 Q12 12 16 16" stroke="#000" strokeWidth="2" fill="none" filter="url(#poisonDrip)" />
      <path d="M8.5 15.5 Q12 12.5 15.5 15.5" stroke="#003300" strokeWidth="1" fill="none" />

      {/* Floating toxic bubbles */}
      <circle cx="6" cy="6" r="3" fill="url(#poisonBubbleGrad)" filter="url(#poisonGlow)" />
      <circle cx="18" cy="18" r="2" fill="url(#poisonBubbleGrad)" filter="url(#poisonGlow)" />
      <circle cx="4" cy="14" r="1.5" fill="url(#poisonBubbleGrad)" opacity="0.6" />
      <circle cx="20" cy="8" r="1" fill="url(#poisonBubbleGrad)" opacity="0.5" />

      {/* Bubble highlights */}
      <circle cx="5" cy="5" r="0.8" fill="white" opacity="0.5" />
      <circle cx="17.5" cy="17" r="0.5" fill="white" opacity="0.4" />

      {/* Dripping effect */}
      <path d="M10 18 Q10 21 11 22" stroke="#32CD32" strokeWidth="1" fill="none" opacity="0.7" filter="url(#poisonDrip)" />
      <ellipse cx="11" cy="22.5" rx="1" ry="0.8" fill="#32CD32" opacity="0.6" />

      {/* Toxic sparkles */}
      <g filter="url(#poisonGlow)">
        <polygon points="3,3 3.3,3.8 4,4 3.3,4.2 3.5,5 3,4.4 2.5,5 2.7,4.2 2,4 2.7,3.8" fill="#00FF00" opacity="0.8" />
        <polygon points="21,5 21.2,5.5 22,5.5 21.2,6 21.4,6.5 21,6.1 20.6,6.5 20.8,6 20,5.5 20.8,5.5" fill="#ADFF2F" opacity="0.6" />
      </g>
    </svg>
  );
}
