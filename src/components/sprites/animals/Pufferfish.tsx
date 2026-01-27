/**
 * Pufferfish Sprite Component
 * Enhanced with gradients, spike texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Pufferfish({ size = 64, color = '#FFD700' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="pufferfishBodyGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFEC8B" stopOpacity="1" />
          <stop offset="50%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#DAA520" stopOpacity="1" />
        </radialGradient>
        {/* Belly gradient */}
        <radialGradient id="pufferfishBellyGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFACD" stopOpacity="1" />
          <stop offset="100%" stopColor="#F5DEB3" stopOpacity="1" />
        </radialGradient>
        {/* Spike gradient */}
        <linearGradient id="pufferfishSpikeGradient" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#8B4513" stopOpacity="1" />
          <stop offset="50%" stopColor="#D2B48C" stopOpacity="1" />
          <stop offset="100%" stopColor="#8B4513" stopOpacity="0.8" />
        </linearGradient>
        {/* Highlight */}
        <radialGradient id="pufferfishHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="pufferfishEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="#F0F0F0" stopOpacity="1" />
        </radialGradient>
        {/* Fin gradient */}
        <linearGradient id="pufferfishFinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor="#DAA520" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Spikes - all around the body */}
      {[...Array(20)].map((_, i) => {
        const angle = (i * Math.PI * 2) / 20;
        const x1 = 32 + 20 * Math.cos(angle);
        const y1 = 32 + 20 * Math.sin(angle);
        const x2 = 32 + 28 * Math.cos(angle);
        const y2 = 32 + 28 * Math.sin(angle);
        return (
          <line
            key={`spike-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#pufferfishSpikeGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        );
      })}

      {/* Secondary smaller spikes */}
      {[...Array(20)].map((_, i) => {
        const angle = ((i + 0.5) * Math.PI * 2) / 20;
        const x1 = 32 + 19 * Math.cos(angle);
        const y1 = 32 + 19 * Math.sin(angle);
        const x2 = 32 + 24 * Math.cos(angle);
        const y2 = 32 + 24 * Math.sin(angle);
        return (
          <line
            key={`spike-small-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#A0826D"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
        );
      })}

      {/* Tail fin */}
      <ellipse cx="6" cy="32" rx="6" ry="8" fill="url(#pufferfishFinGradient)" />
      <path d="M8 28 Q4 32 8 36" stroke="#DAA520" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Body - main round shape */}
      <circle cx="32" cy="32" r="20" fill="url(#pufferfishBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="26" cy="24" rx="10" ry="8" fill="url(#pufferfishHighlight)" />

      {/* Belly area */}
      <ellipse cx="32" cy="38" rx="12" ry="8" fill="url(#pufferfishBellyGradient)" opacity="0.6" />

      {/* Body pattern spots */}
      <circle cx="22" cy="30" r="2" fill="#DAA520" opacity="0.4" />
      <circle cx="42" cy="30" r="2" fill="#DAA520" opacity="0.4" />
      <circle cx="32" cy="40" r="1.5" fill="#DAA520" opacity="0.4" />
      <circle cx="26" cy="36" r="1" fill="#DAA520" opacity="0.3" />
      <circle cx="38" cy="36" r="1" fill="#DAA520" opacity="0.3" />

      {/* Dorsal fin */}
      <ellipse cx="32" cy="14" rx="6" ry="4" fill="url(#pufferfishFinGradient)" />

      {/* Side fins */}
      <ellipse cx="50" cy="32" rx="4" ry="6" fill="url(#pufferfishFinGradient)" />

      {/* Eyes - wide and surprised looking */}
      <ellipse cx="24" cy="28" rx="5" ry="4.5" fill="url(#pufferfishEyeGradient)" />
      <ellipse cx="40" cy="28" rx="5" ry="4.5" fill="url(#pufferfishEyeGradient)" />

      {/* Pupils */}
      <circle cx="25" cy="28" r="2.5" fill="#1a1a1a" />
      <circle cx="41" cy="28" r="2.5" fill="#1a1a1a" />

      {/* Eye highlights */}
      <circle cx="23.5" cy="27" r="1" fill="white" />
      <circle cx="39.5" cy="27" r="1" fill="white" />
      <circle cx="26" cy="29" r="0.5" fill="white" opacity="0.5" />
      <circle cx="42" cy="29" r="0.5" fill="white" opacity="0.5" />

      {/* Mouth - small and pouty */}
      <ellipse cx="32" cy="38" rx="4" ry="2.5" fill="#8B4513" opacity="0.7" />
      <ellipse cx="32" cy="37" rx="2" ry="1" fill="#DAA520" opacity="0.3" />

      {/* Cheek blush */}
      <ellipse cx="20" cy="34" rx="3" ry="2" fill="#FFB6C1" opacity="0.4" />
      <ellipse cx="44" cy="34" rx="3" ry="2" fill="#FFB6C1" opacity="0.4" />
    </svg>
  );
}
