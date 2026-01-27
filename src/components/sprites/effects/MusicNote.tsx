/**
 * MusicNote Sprite Component
 * Enhanced with gradients, glow effects, and musical sparkles
 */

import type { EffectProps } from '../types';

export function MusicNote({ x = 0, y = 0, size = 24}: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main note gradient */}
        <linearGradient id="musicNoteMainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="30%" stopColor="#1A1A1A" />
          <stop offset="70%" stopColor="#000000" />
          <stop offset="100%" stopColor="#2A2A2A" />
        </linearGradient>

        {/* Note head gradient */}
        <radialGradient id="musicNoteHeadGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="50%" stopColor="#1A1A1A" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>

        {/* Flag gradient */}
        <linearGradient id="musicNoteFlagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3A3A3A" />
          <stop offset="50%" stopColor="#1A1A1A" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>

        {/* Glow effect */}
        <filter id="musicNoteGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="0.5" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Musical aura */}
        <radialGradient id="musicNoteAura" cx="50%" cy="60%" r="50%">
          <stop offset="50%" stopColor="#FFD700" stopOpacity="0" />
          <stop offset="80%" stopColor="#FFD700" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFA500" stopOpacity="0.3" />
        </radialGradient>

        {/* Sparkle gradient */}
        <radialGradient id="musicNoteSparkle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </radialGradient>
      </defs>

      {/* Musical aura background */}
      <ellipse cx="10" cy="14" rx="11" ry="12" fill="url(#musicNoteAura)" />

      {/* Shadow */}
      <ellipse cx="7" cy="21" rx="5" ry="4" fill="#000" opacity="0.2" transform="translate(1, 1)" />

      {/* Note head with gradient */}
      <ellipse cx="6" cy="20" rx="5" ry="4" fill="url(#musicNoteHeadGrad)" filter="url(#musicNoteGlow)" />

      {/* Note head highlight */}
      <ellipse cx="4" cy="18" rx="2" ry="1.5" fill="white" opacity="0.2" />

      {/* Stem with gradient */}
      <rect x="10" y="4" width="2" height="18" fill="url(#musicNoteMainGrad)" />

      {/* Stem highlight */}
      <rect x="10" y="4" width="0.5" height="18" fill="white" opacity="0.15" />

      {/* Flag with gradient */}
      <path d="M12 4 Q20 2 20 10 L12 8" fill="url(#musicNoteFlagGrad)" filter="url(#musicNoteGlow)" />

      {/* Flag highlight */}
      <path d="M12 5 Q17 4 18 7 L12 6" fill="white" opacity="0.15" />

      {/* Inner note detail */}
      <ellipse cx="6" cy="20" rx="3" ry="2" fill="none" stroke="#333" strokeWidth="0.5" opacity="0.3" />

      {/* Musical sparkles */}
      <g filter="url(#musicNoteGlow)">
        <polygon points="2,12 2.5,13 4,13 2.5,14 3,15 2,14 1,15 1.5,14 0,13 1.5,13" fill="url(#musicNoteSparkle)" opacity="0.8" />
        <polygon points="20,6 20.3,6.6 21,6.6 20.3,7 20.5,7.6 20,7.2 19.5,7.6 19.7,7 19,6.6 19.7,6.6" fill="url(#musicNoteSparkle)" opacity="0.7" />
        <polygon points="16,14 16.3,14.5 17,14.5 16.3,15 16.5,15.5 16,15.1 15.5,15.5 15.7,15 15,14.5 15.7,14.5" fill="url(#musicNoteSparkle)" opacity="0.6" />
      </g>

      {/* Sound wave hints */}
      <path d="M22 10 Q24 12 22 14" stroke="#FFD700" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M23 9 Q25.5 12 23 15" stroke="#FFD700" strokeWidth="0.5" fill="none" opacity="0.3" />
    </svg>
  );
}
