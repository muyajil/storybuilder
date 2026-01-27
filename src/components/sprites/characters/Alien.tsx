/**
 * Alien Sprite Component
 * Enhanced with gradients and detailed features
 */

import type { SpriteProps } from '../types';

export function Alien({ size = 64, color = '#90EE90' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Head gradient */}
        <radialGradient id="alienHeadGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#B8FFB8" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#5CB85C" />
        </radialGradient>
        {/* Body gradient */}
        <radialGradient id="alienBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A8EEA8" />
          <stop offset="100%" stopColor="#6BBF6B" />
        </radialGradient>
        {/* Eye glow */}
        <radialGradient id="alienEyeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#333" />
          <stop offset="70%" stopColor="#000" />
          <stop offset="100%" stopColor="#111" />
        </radialGradient>
        {/* Eye reflection */}
        <radialGradient id="alienEyeReflect" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#C8FFC8" />
          <stop offset="100%" stopColor="#90EE90" />
        </radialGradient>
      </defs>

      {/* Antenna */}
      <line x1="26" y1="6" x2="26" y2="2" stroke="#6BBF6B" strokeWidth="2" strokeLinecap="round" />
      <line x1="38" y1="6" x2="38" y2="2" stroke="#6BBF6B" strokeWidth="2" strokeLinecap="round" />
      <circle cx="26" cy="1" r="2" fill="#FFD700" />
      <circle cx="38" cy="1" r="2" fill="#FFD700" />

      {/* Kopf / Head with gradient */}
      <ellipse cx="32" cy="24" rx="20" ry="22" fill="url(#alienHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="26" cy="14" rx="8" ry="6" fill="white" opacity="0.2" />

      {/* Large almond eyes */}
      <ellipse cx="24" cy="24" rx="9" ry="11" fill="url(#alienEyeGlow)" />
      <ellipse cx="40" cy="24" rx="9" ry="11" fill="url(#alienEyeGlow)" />
      {/* Eye inner glow */}
      <ellipse cx="24" cy="24" rx="7" ry="9" fill="#1a1a1a" />
      <ellipse cx="40" cy="24" rx="7" ry="9" fill="#1a1a1a" />
      {/* Eye reflection */}
      <ellipse cx="22" cy="21" rx="4" ry="5" fill="url(#alienEyeReflect)" />
      <ellipse cx="38" cy="21" rx="4" ry="5" fill="url(#alienEyeReflect)" />
      {/* Small bright reflection */}
      <ellipse cx="20" cy="19" rx="2" ry="2.5" fill="white" opacity="0.8" />
      <ellipse cx="36" cy="19" rx="2" ry="2.5" fill="white" opacity="0.8" />

      {/* Small mouth */}
      <ellipse cx="32" cy="38" rx="3" ry="1.5" fill="#5CB85C" />

      {/* Körper / Body with gradient */}
      <ellipse cx="32" cy="52" rx="12" ry="10" fill="url(#alienBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="30" cy="48" rx="5" ry="3" fill="white" opacity="0.15" />

      {/* Arme / Arms with gradient effect */}
      <path d="M20 44 Q8 40 6 52" stroke="url(#alienBodyGradient)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M44 44 Q56 40 58 52" stroke="url(#alienBodyGradient)" strokeWidth="5" fill="none" strokeLinecap="round" />

      {/* Finger / Fingers with slight gradient */}
      <circle cx="4" cy="52" r="3.5" fill="#7BCF7B" />
      <circle cx="8" cy="56" r="3.5" fill="#7BCF7B" />
      <circle cx="3" cy="56" r="2.5" fill="#7BCF7B" />
      <circle cx="60" cy="52" r="3.5" fill="#7BCF7B" />
      <circle cx="56" cy="56" r="3.5" fill="#7BCF7B" />
      <circle cx="61" cy="56" r="2.5" fill="#7BCF7B" />
    </svg>
  );
}
