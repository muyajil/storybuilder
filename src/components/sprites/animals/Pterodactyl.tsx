/**
 * Pterodactyl Sprite Component
 * Enhanced with gradients, membrane texture, and prehistoric features
 */

import type { SpriteProps } from '../types';

export function Pterodactyl({ size = 64, color = '#8FBC8F' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="pterodactylBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor="#6B8E6B" stopOpacity="1" />
          <stop offset="100%" stopColor="#4A6B4A" stopOpacity="1" />
        </radialGradient>
        {/* Wing membrane gradient */}
        <linearGradient id="pterodactylWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.9" />
          <stop offset="50%" stopColor="#A8C8A8" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#6B8E6B" stopOpacity="0.8" />
        </linearGradient>
        {/* Crest gradient */}
        <linearGradient id="pterodactylCrestGradient" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#B8D8B8" stopOpacity="1" />
        </linearGradient>
        {/* Beak gradient */}
        <linearGradient id="pterodactylBeakGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFB347" stopOpacity="1" />
          <stop offset="100%" stopColor="#CC7000" stopOpacity="1" />
        </linearGradient>
        {/* Highlight */}
        <radialGradient id="pterodactylHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Wings - membrane */}
      <polygon points="32,32 0,18 6,30 0,34 10,36 32,32" fill="url(#pterodactylWingGradient)" />
      <polygon points="32,32 64,18 58,30 64,34 54,36 32,32" fill="url(#pterodactylWingGradient)" />

      {/* Wing bone structure */}
      <line x1="32" y1="32" x2="4" y2="22" stroke="#4A6B4A" strokeWidth="1.5" opacity="0.5" />
      <line x1="32" y1="32" x2="8" y2="32" stroke="#4A6B4A" strokeWidth="1" opacity="0.4" />
      <line x1="32" y1="32" x2="60" y2="22" stroke="#4A6B4A" strokeWidth="1.5" opacity="0.5" />
      <line x1="32" y1="32" x2="56" y2="32" stroke="#4A6B4A" strokeWidth="1" opacity="0.4" />

      {/* Wing membrane veins */}
      <path d="M10 24 Q16 28 20 30" stroke="#6B8E6B" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M54 24 Q48 28 44 30" stroke="#6B8E6B" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Wing finger tips */}
      <circle cx="2" cy="20" r="2" fill="#4A6B4A" />
      <circle cx="62" cy="20" r="2" fill="#4A6B4A" />

      {/* Body */}
      <ellipse cx="32" cy="34" rx="10" ry="8" fill="url(#pterodactylBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="30" rx="5" ry="4" fill="url(#pterodactylHighlight)" />

      {/* Body scales/texture */}
      <path d="M28 32 Q30 36 28 40" stroke="#4A6B4A" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M36 32 Q34 36 36 40" stroke="#4A6B4A" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Head */}
      <ellipse cx="32" cy="22" rx="6" ry="8" fill="url(#pterodactylBodyGradient)" />

      {/* Head highlight */}
      <ellipse cx="30" cy="18" rx="3" ry="4" fill="url(#pterodactylHighlight)" />

      {/* Crest */}
      <polygon points="32,14 26,4 38,14" fill="url(#pterodactylCrestGradient)" />
      <polygon points="32,14 28,6 36,14" fill="#B8D8B8" opacity="0.3" />

      {/* Beak */}
      <polygon points="32,26 24,36 32,32 40,36" fill="url(#pterodactylBeakGradient)" />
      <line x1="32" y1="26" x2="32" y2="32" stroke="#CC7000" strokeWidth="0.5" opacity="0.5" />

      {/* Beak highlight */}
      <polygon points="32,26 28,32 32,30 36,32" fill="#FFD700" opacity="0.2" />

      {/* Eyes */}
      <circle cx="28" cy="20" r="2.5" fill="white" />
      <circle cx="36" cy="20" r="2.5" fill="white" />
      <circle cx="28" cy="20" r="1.5" fill="#8B0000" />
      <circle cx="36" cy="20" r="1.5" fill="#8B0000" />

      {/* Eye highlights */}
      <circle cx="27.5" cy="19.5" r="0.6" fill="white" />
      <circle cx="35.5" cy="19.5" r="0.6" fill="white" />

      {/* Legs */}
      <path d="M28 42 L24 54 L20 52 L24 54 L26 52 L24 54 L28 52" stroke="url(#pterodactylBodyGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M36 42 L40 54 L44 52 L40 54 L38 52 L40 54 L36 52" stroke="url(#pterodactylBodyGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Claws */}
      <circle cx="20" cy="52" r="1.5" fill="#4A6B4A" />
      <circle cx="26" cy="52" r="1.5" fill="#4A6B4A" />
      <circle cx="28" cy="52" r="1.5" fill="#4A6B4A" />
      <circle cx="44" cy="52" r="1.5" fill="#4A6B4A" />
      <circle cx="38" cy="52" r="1.5" fill="#4A6B4A" />
      <circle cx="36" cy="52" r="1.5" fill="#4A6B4A" />
    </svg>
  );
}
