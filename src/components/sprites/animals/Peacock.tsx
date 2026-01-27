/**
 * Peacock Sprite Component
 * Enhanced with gradients, feather iridescence, and expressive features
 */

import type { SpriteProps } from '../types';

export function Peacock({ size = 64, color = '#0000CD' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="peacockBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor="#0000AA" stopOpacity="1" />
          <stop offset="100%" stopColor="#000066" stopOpacity="1" />
        </radialGradient>
        {/* Feather gradient */}
        <radialGradient id="peacockFeatherGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00CED1" stopOpacity="1" />
          <stop offset="50%" stopColor="#008B8B" stopOpacity="1" />
          <stop offset="100%" stopColor="#006666" stopOpacity="1" />
        </radialGradient>
        {/* Eye spot gradient */}
        <radialGradient id="peacockEyeSpot" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="40%" stopColor="#4169E1" stopOpacity="1" />
          <stop offset="100%" stopColor="#000066" stopOpacity="1" />
        </radialGradient>
        {/* Gold ring gradient */}
        <radialGradient id="peacockGoldRing" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
          <stop offset="100%" stopColor="#B8860B" stopOpacity="1" />
        </radialGradient>
        {/* Crown gradient */}
        <linearGradient id="peacockCrownGradient" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#00CED1" stopOpacity="1" />
        </linearGradient>
        {/* Beak gradient */}
        <linearGradient id="peacockBeakGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFB347" stopOpacity="1" />
          <stop offset="100%" stopColor="#CC8800" stopOpacity="1" />
        </linearGradient>
        {/* Highlight */}
        <radialGradient id="peacockHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Tail feathers - fan display */}
      {[...Array(7)].map((_, i) => (
        <g key={i}>
          {/* Feather base */}
          <ellipse cx={32} cy={8 + i * 4} rx={28 - i * 3} ry={4} fill="url(#peacockFeatherGradient)" />

          {/* Eye spots - left */}
          <circle cx={12 + i * 3} cy={8 + i * 4} r={3.5} fill="url(#peacockGoldRing)" />
          <circle cx={12 + i * 3} cy={8 + i * 4} r={2.5} fill="url(#peacockEyeSpot)" />
          <circle cx={12 + i * 3} cy={8 + i * 4} r={1} fill="#1a1a1a" />
          <circle cx={11.5 + i * 3} cy={7.5 + i * 4} r={0.4} fill="white" opacity="0.7" />

          {/* Eye spots - right */}
          <circle cx={52 - i * 3} cy={8 + i * 4} r={3.5} fill="url(#peacockGoldRing)" />
          <circle cx={52 - i * 3} cy={8 + i * 4} r={2.5} fill="url(#peacockEyeSpot)" />
          <circle cx={52 - i * 3} cy={8 + i * 4} r={1} fill="#1a1a1a" />
          <circle cx={51.5 - i * 3} cy={7.5 + i * 4} r={0.4} fill="white" opacity="0.7" />
        </g>
      ))}

      {/* Body */}
      <ellipse cx="32" cy="50" rx="12" ry="10" fill="url(#peacockBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="46" rx="6" ry="5" fill="url(#peacockHighlight)" />

      {/* Neck */}
      <ellipse cx="32" cy="42" rx="5" ry="6" fill="url(#peacockBodyGradient)" />

      {/* Head */}
      <circle cx="32" cy="38" r="6" fill="url(#peacockBodyGradient)" />

      {/* Crown feathers */}
      <line x1="30" y1="32" x2="28" y2="26" stroke="url(#peacockCrownGradient)" strokeWidth="1.5" />
      <line x1="32" y1="32" x2="32" y2="24" stroke="url(#peacockCrownGradient)" strokeWidth="1.5" />
      <line x1="34" y1="32" x2="36" y2="26" stroke="url(#peacockCrownGradient)" strokeWidth="1.5" />

      {/* Crown tips */}
      <circle cx="28" cy="26" r="2.5" fill="url(#peacockFeatherGradient)" />
      <circle cx="32" cy="24" r="2.5" fill="url(#peacockFeatherGradient)" />
      <circle cx="36" cy="26" r="2.5" fill="url(#peacockFeatherGradient)" />
      <circle cx="28" cy="26" r="1" fill="url(#peacockGoldRing)" />
      <circle cx="32" cy="24" r="1" fill="url(#peacockGoldRing)" />
      <circle cx="36" cy="26" r="1" fill="url(#peacockGoldRing)" />

      {/* Eye */}
      <circle cx="34" cy="37" r="2" fill="white" />
      <circle cx="34.5" cy="37" r="1.2" fill="#1a1a1a" />
      <circle cx="34" cy="36.5" r="0.5" fill="white" />

      {/* Beak */}
      <polygon points="32,42 29,47 35,47" fill="url(#peacockBeakGradient)" />

      {/* Feet */}
      <path d="M28 58 L26 64 M28 58 L28 64 M28 58 L30 64" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M36 58 L34 64 M36 58 L36 64 M36 58 L38 64" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
