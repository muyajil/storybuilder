/**
 * Swordfish Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function Swordfish({ size = 64, color = '#4682B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="swordfishBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5A9AD4" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#3668A4" />
          <stop offset="100%" stopColor="#2A5080" />
        </linearGradient>
        {/* Belly gradient */}
        <linearGradient id="swordfishBellyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="100%" stopColor="#C8D8E8" />
        </linearGradient>
        {/* Sword gradient */}
        <linearGradient id="swordfishSwordGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D8D8D8" />
          <stop offset="30%" stopColor="#C0C0C0" />
          <stop offset="70%" stopColor="#A8A8A8" />
          <stop offset="100%" stopColor="#888888" />
        </linearGradient>
        {/* Fin gradient */}
        <linearGradient id="swordfishFinGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#3668A4" />
          <stop offset="100%" stopColor="#5090C4" />
        </linearGradient>
        {/* Tail gradient */}
        <linearGradient id="swordfishTailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3668A4" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="swordfishEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="36" cy="48" rx="20" ry="3" fill="#2A5080" opacity="0.2" />

      {/* Tail fin */}
      <polygon points="54,32 62,24 62,40" fill="url(#swordfishTailGradient)" />
      <polygon points="54,32 60,26 60,38" fill="#5A9AD4" opacity="0.4" />

      {/* Tail fin details */}
      <path d="M56 30 L60 26" stroke="#3668A4" strokeWidth="0.5" opacity="0.5" />
      <path d="M56 34 L60 38" stroke="#3668A4" strokeWidth="0.5" opacity="0.5" />

      {/* Body */}
      <ellipse cx="36" cy="32" rx="18" ry="10" fill="url(#swordfishBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="32" cy="28" rx="12" ry="4" fill="#6AAAE4" opacity="0.4" />

      {/* Belly */}
      <ellipse cx="36" cy="36" rx="14" ry="5" fill="url(#swordfishBellyGradient)" opacity="0.6" />

      {/* Lateral line */}
      <path d="M20 32 L52 32" stroke="#3668A4" strokeWidth="0.8" opacity="0.4" />

      {/* Dorsal fin */}
      <polygon points="36,22 42,10 38,22" fill="url(#swordfishFinGradient)" />
      <polygon points="36,22 40,14 38,22" fill="#5A9AD4" opacity="0.4" />

      {/* Dorsal fin rays */}
      <path d="M38 20 L40 14" stroke="#2A5080" strokeWidth="0.5" opacity="0.4" />
      <path d="M37 21 L39 16" stroke="#2A5080" strokeWidth="0.5" opacity="0.4" />

      {/* Pectoral fin */}
      <ellipse cx="30" cy="36" rx="6" ry="3" fill="url(#swordfishFinGradient)" transform="rotate(-20 30 36)" />

      {/* Sword/Bill */}
      <polygon points="4,32 18,28 18,36" fill="url(#swordfishSwordGradient)" />
      <polygon points="6,32 18,29 18,35" fill="#E8E8E8" opacity="0.4" />

      {/* Sword edge detail */}
      <path d="M6 32 L18 32" stroke="#888888" strokeWidth="0.5" />

      {/* Sword tip highlight */}
      <circle cx="6" cy="32" r="1" fill="#F0F0F0" opacity="0.6" />

      {/* Head detail */}
      <ellipse cx="22" cy="32" rx="4" ry="6" fill="url(#swordfishBodyGradient)" />

      {/* Eye */}
      <circle cx="22" cy="30" r="3.5" fill="white" />
      <circle cx="22" cy="30" r="2.5" fill="url(#swordfishEyeGradient)" />
      <circle cx="22.5" cy="29.5" r="0.8" fill="white" />

      {/* Secondary eye shine */}
      <circle cx="21" cy="31" r="0.4" fill="white" opacity="0.5" />

      {/* Gill */}
      <path d="M26 28 Q28 32 26 36" stroke="#3668A4" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Scales texture */}
      <circle cx="32" cy="30" r="0.8" fill="#3668A4" opacity="0.2" />
      <circle cx="38" cy="32" r="0.8" fill="#3668A4" opacity="0.2" />
      <circle cx="44" cy="30" r="0.8" fill="#3668A4" opacity="0.2" />
      <circle cx="36" cy="34" r="0.8" fill="#3668A4" opacity="0.2" />
      <circle cx="42" cy="34" r="0.8" fill="#3668A4" opacity="0.2" />

      {/* Bubbles */}
      <circle cx="12" cy="26" r="1.5" fill="#E8F0FF" opacity="0.5" />
      <circle cx="8" cy="38" r="1" fill="#E8F0FF" opacity="0.4" />
      <circle cx="16" cy="40" r="0.8" fill="#E8F0FF" opacity="0.3" />
    </svg>
  );
}
