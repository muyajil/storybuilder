/**
 * Dolphin Sprite Component
 * Enhanced with gradients, smooth aquatic appearance, and playful expression
 */

import type { SpriteProps } from '../types';

export function Dolphin({ size = 64, color = '#4682B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="dolphinBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5A9FD4" />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor="#36648B" />
        </linearGradient>
        {/* Belly gradient */}
        <linearGradient id="dolphinBellyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8F4FC" />
          <stop offset="50%" stopColor="#B0C4DE" />
          <stop offset="100%" stopColor="#87CEEB" />
        </linearGradient>
        {/* Fin gradient */}
        <linearGradient id="dolphinFinGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#36648B" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="dolphinEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#2F2F2F" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* Highlight gradient */}
        <linearGradient id="dolphinHighlightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Body with gradient */}
      <ellipse cx="32" cy="32" rx="24" ry="12" fill="url(#dolphinBodyGrad)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="28" rx="16" ry="6" fill="url(#dolphinHighlightGrad)" />

      {/* Snout with gradient */}
      <ellipse cx="8" cy="32" rx="8" ry="4" fill="url(#dolphinBodyGrad)" />
      {/* Snout highlight */}
      <ellipse cx="6" cy="30" rx="5" ry="2" fill="#5A9FD4" opacity="0.5" />

      {/* Belly with gradient */}
      <ellipse cx="32" cy="36" rx="18" ry="7" fill="url(#dolphinBellyGrad)" />

      {/* Tail fin with gradient */}
      <polygon points="56,32 64,22 59,32 64,42" fill="url(#dolphinFinGrad)" />
      {/* Tail detail line */}
      <path d="M58,28 Q60,32 58,36" stroke="#36648B" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Dorsal fin with gradient */}
      <polygon points="32,20 38,6 44,20" fill="url(#dolphinFinGrad)" />
      {/* Fin highlight */}
      <path d="M34,18 L38,8" stroke="#5A9FD4" strokeWidth="1" opacity="0.4" />

      {/* Side fins */}
      <ellipse cx="28" cy="38" rx="6" ry="3" fill="url(#dolphinFinGrad)" transform="rotate(-20 28 38)" />
      <ellipse cx="40" cy="38" rx="6" ry="3" fill="url(#dolphinFinGrad)" transform="rotate(20 40 38)" />

      {/* Eye with depth */}
      <ellipse cx="16" cy="29" rx="3.5" ry="4" fill="white" />
      {/* Eye shadow */}
      <ellipse cx="16" cy="30" rx="3" ry="3.5" fill="#f0f0f0" />
      {/* Pupil */}
      <circle cx="17" cy="29" r="2" fill="url(#dolphinEyeGrad)" />
      {/* Eye sparkle */}
      <circle cx="16" cy="28" r="0.8" fill="white" />
      <circle cx="18" cy="30" r="0.4" fill="white" />

      {/* Eyebrow ridge */}
      <path d="M12 26 Q16 24 20 26" stroke="#36648B" strokeWidth="0.8" fill="none" opacity="0.4" />

      {/* Blowhole */}
      <ellipse cx="24" cy="24" rx="1.5" ry="0.8" fill="#36648B" />

      {/* Mouth with smile */}
      <path d="M2 34 Q6 38 12 35" stroke="#36648B" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* Water splash effect */}
      <circle cx="4" cy="24" r="1" fill="#87CEEB" opacity="0.6" />
      <circle cx="8" cy="22" r="0.8" fill="#87CEEB" opacity="0.5" />
      <circle cx="6" cy="20" r="0.6" fill="#B0E0E6" opacity="0.4" />

      {/* Body texture - subtle lines */}
      <path d="M20,30 Q24,32 20,34" stroke="#36648B" strokeWidth="0.5" fill="none" opacity="0.2" />
      <path d="M36,30 Q40,32 36,34" stroke="#36648B" strokeWidth="0.5" fill="none" opacity="0.2" />
      <path d="M46,30 Q50,32 46,34" stroke="#36648B" strokeWidth="0.5" fill="none" opacity="0.2" />

      {/* Shine on body */}
      <ellipse cx="24" cy="28" rx="8" ry="2" fill="white" opacity="0.15" />
    </svg>
  );
}
