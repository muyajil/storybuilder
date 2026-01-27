/**
 * Whale Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function Whale({ size = 64, color = '#4169E1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="whaleBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5080F0" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#2A50B0" />
        </linearGradient>
        {/* Belly gradient */}
        <radialGradient id="whaleBellyGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#D8E8F8" />
          <stop offset="70%" stopColor="#B0C4DE" />
          <stop offset="100%" stopColor="#90A8C8" />
        </radialGradient>
        {/* Tail gradient */}
        <linearGradient id="whaleTailGradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5080F0" />
          <stop offset="100%" stopColor="#2A50B0" />
        </linearGradient>
        {/* Fin gradient */}
        <linearGradient id="whaleFinGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#2A50B0" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
        {/* Spout gradient */}
        <linearGradient id="whaleSpoutGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#A0D0FF" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#E0F0FF" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="whaleEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="56" rx="26" ry="4" fill="#2A50B0" opacity="0.3" />

      {/* Tail flukes */}
      <path d="M4 36 Q0 28 4 24 M4 36 Q0 44 4 48" stroke="url(#whaleTailGradient)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M4 36 Q2 30 4 26 M4 36 Q2 42 4 46" stroke="#5080F0" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />

      {/* Tail connection */}
      <ellipse cx="8" cy="36" rx="6" ry="8" fill="url(#whaleBodyGradient)" />

      {/* Body */}
      <ellipse cx="32" cy="36" rx="28" ry="16" fill="url(#whaleBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="26" cy="30" rx="14" ry="7" fill="#5080F0" opacity="0.4" />

      {/* Belly */}
      <ellipse cx="36" cy="42" rx="18" ry="8" fill="url(#whaleBellyGradient)" />

      {/* Belly stripes/grooves */}
      <path d="M22 44 Q36 48 50 44" stroke="#90A8C8" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M24 46 Q36 50 48 46" stroke="#90A8C8" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M26 48 Q36 52 46 48" stroke="#90A8C8" strokeWidth="0.8" fill="none" opacity="0.4" />

      {/* Dorsal fin */}
      <polygon points="32,24 28,14 38,24" fill="url(#whaleFinGradient)" />
      <polygon points="32,24 30,18 36,24" fill="#5080F0" opacity="0.4" />

      {/* Pectoral fin */}
      <ellipse cx="44" cy="44" rx="8" ry="4" fill="url(#whaleFinGradient)" transform="rotate(-15 44 44)" />
      <ellipse cx="44" cy="43" rx="5" ry="2.5" fill="#5080F0" opacity="0.4" transform="rotate(-15 44 43)" />

      {/* Blowhole */}
      <ellipse cx="52" cy="26" rx="2" ry="1" fill="#2A50B0" />

      {/* Water spout */}
      <path d="M52 24 Q54 16 50 12 M52 24 Q56 16 58 12" stroke="url(#whaleSpoutGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M52 24 Q54 18 51 14 M52 24 Q55 17 57 14" stroke="#E0F0FF" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />

      {/* Spout droplets */}
      <circle cx="48" cy="10" r="1.5" fill="#E0F0FF" opacity="0.7" />
      <circle cx="56" cy="8" r="1" fill="#E0F0FF" opacity="0.6" />
      <circle cx="60" cy="12" r="1.2" fill="#E0F0FF" opacity="0.5" />
      <circle cx="52" cy="6" r="0.8" fill="#E0F0FF" opacity="0.5" />

      {/* Eye */}
      <circle cx="50" cy="32" r="3.5" fill="white" />
      <circle cx="50" cy="32" r="2.5" fill="url(#whaleEyeGradient)" />
      <circle cx="50.5" cy="31.5" r="0.8" fill="white" />

      {/* Eye crinkle (friendly expression) */}
      <path d="M54 30 Q56 32 54 34" stroke="#2A50B0" strokeWidth="0.8" fill="none" opacity="0.4" />

      {/* Smile */}
      <path d="M54 38 Q56 40 58 38" stroke="#2A50B0" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Cheek blush */}
      <circle cx="52" cy="36" r="2" fill="#90A8C8" opacity="0.4" />

      {/* Body texture spots */}
      <circle cx="20" cy="34" r="1" fill="#2A50B0" opacity="0.2" />
      <circle cx="28" cy="38" r="1.2" fill="#2A50B0" opacity="0.2" />
      <circle cx="38" cy="32" r="1" fill="#2A50B0" opacity="0.2" />

      {/* Bubbles */}
      <circle cx="58" cy="44" r="2" fill="#E0F0FF" opacity="0.4" />
      <circle cx="62" cy="38" r="1.5" fill="#E0F0FF" opacity="0.3" />
      <circle cx="60" cy="50" r="1" fill="#E0F0FF" opacity="0.3" />
    </svg>
  );
}
