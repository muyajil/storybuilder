/**
 * Crow Sprite Component
 * Enhanced with gradients, feather detail, and expressive features
 */

import type { SpriteProps } from '../types';

export function Crow({ size = 64, color = '#1a1a1a' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="crowBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="crowHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="crowWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
        {/* Beak gradient */}
        <linearGradient id="crowBeakGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5a5a5a" />
          <stop offset="100%" stopColor="#3a3a3a" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="crowEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Feather shine */}
        <linearGradient id="crowShineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.15" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Iridescent purple/blue */}
        <linearGradient id="crowIridescentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4B0082" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#191970" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#006400" stopOpacity="0.1" />
        </linearGradient>
        {/* Feather texture pattern */}
        <pattern id="crowFeatherPattern" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 3 Q3 1 6 3" stroke="#2a2a2a" strokeWidth="0.3" fill="none" opacity="0.4" />
        </pattern>
      </defs>

      {/* Tail feathers */}
      <g fill="url(#crowWingGradient)">
        <ellipse cx="50" cy="48" rx="6" ry="12" transform="rotate(-15 50 48)" />
        <ellipse cx="54" cy="46" rx="5" ry="10" transform="rotate(-5 54 46)" />
        <ellipse cx="46" cy="50" rx="5" ry="10" transform="rotate(-25 46 50)" />
      </g>
      {/* Tail feather lines */}
      <g stroke="#2a2a2a" strokeWidth="0.5" opacity="0.4">
        <line x1="48" y1="40" x2="52" y2="56" />
        <line x1="52" y1="40" x2="56" y2="54" />
        <line x1="44" y1="42" x2="46" y2="58" />
      </g>

      {/* Body */}
      <ellipse cx="32" cy="38" rx="16" ry="18" fill="url(#crowBodyGradient)" />
      {/* Body feather texture */}
      <ellipse cx="32" cy="38" rx="16" ry="18" fill="url(#crowFeatherPattern)" />
      {/* Iridescent sheen */}
      <ellipse cx="32" cy="38" rx="16" ry="18" fill="url(#crowIridescentGradient)" />
      {/* Body shine */}
      <ellipse cx="26" cy="32" rx="8" ry="6" fill="url(#crowShineGradient)" />

      {/* Wings */}
      <path d="M16 32 Q6 28 8 42 Q10 50 16 46" fill="url(#crowWingGradient)" />
      <path d="M48 32 Q58 28 56 42 Q54 50 48 46" fill="url(#crowWingGradient)" />
      {/* Wing feather details */}
      <g stroke="#2a2a2a" strokeWidth="0.5" opacity="0.5">
        <path d="M12 34 Q8 38 10 44" fill="none" />
        <path d="M14 36 Q10 40 12 46" fill="none" />
        <path d="M52 34 Q56 38 54 44" fill="none" />
        <path d="M50 36 Q54 40 52 46" fill="none" />
      </g>
      {/* Wing iridescence */}
      <path d="M16 32 Q6 28 8 42 Q10 50 16 46" fill="url(#crowIridescentGradient)" />
      <path d="M48 32 Q58 28 56 42 Q54 50 48 46" fill="url(#crowIridescentGradient)" />

      {/* Feet/Legs */}
      <g stroke="#4a4a4a" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M26 54 L26 60 L22 62" />
        <path d="M26 60 L26 64" />
        <path d="M26 60 L30 62" />
        <path d="M38 54 L38 60 L34 62" />
        <path d="M38 60 L38 64" />
        <path d="M38 60 L42 62" />
      </g>

      {/* Head */}
      <circle cx="32" cy="18" r="12" fill="url(#crowHeadGradient)" />
      {/* Head feather texture */}
      <circle cx="32" cy="18" r="12" fill="url(#crowFeatherPattern)" />
      {/* Head iridescence */}
      <circle cx="32" cy="18" r="12" fill="url(#crowIridescentGradient)" />
      {/* Head shine */}
      <ellipse cx="28" cy="14" rx="5" ry="4" fill="url(#crowShineGradient)" />

      {/* Beak */}
      <polygon points="32,22 22,30 32,34 42,30" fill="url(#crowBeakGradient)" />
      {/* Beak highlight */}
      <polygon points="32,22 26,28 32,32" fill="white" opacity="0.1" />
      {/* Beak nostril */}
      <circle cx="30" cy="26" r="1" fill="#2a2a2a" />
      {/* Beak line */}
      <line x1="22" y1="30" x2="42" y2="30" stroke="#2a2a2a" strokeWidth="0.5" />

      {/* Eyes - intelligent and shiny */}
      <ellipse cx="27" cy="16" rx="3.5" ry="4" fill="white" />
      <ellipse cx="37" cy="16" rx="3.5" ry="4" fill="white" />
      <ellipse cx="27" cy="16" rx="2.5" ry="3" fill="url(#crowEyeGradient)" />
      <ellipse cx="37" cy="16" rx="2.5" ry="3" fill="url(#crowEyeGradient)" />
      {/* Eye shine - multiple for intelligent look */}
      <circle cx="26" cy="15" r="1" fill="white" />
      <circle cx="36" cy="15" r="1" fill="white" />
      <circle cx="28" cy="17" r="0.5" fill="white" opacity="0.6" />
      <circle cx="38" cy="17" r="0.5" fill="white" opacity="0.6" />

      {/* Eyebrow feathers */}
      <path d="M24 12 Q27 10 30 12" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M34 12 Q37 10 40 12" stroke={color} strokeWidth="1.5" fill="none" />

      {/* Head feather tufts */}
      <g fill={color}>
        <ellipse cx="26" cy="8" rx="2" ry="3" transform="rotate(-15 26 8)" />
        <ellipse cx="32" cy="6" rx="2" ry="4" />
        <ellipse cx="38" cy="8" rx="2" ry="3" transform="rotate(15 38 8)" />
      </g>

      {/* Chest feathers - lighter area */}
      <ellipse cx="32" cy="42" rx="8" ry="6" fill="#2a2a2a" opacity="0.3" />

      {/* Subtle blush for friendliness */}
      <ellipse cx="24" cy="20" rx="2" ry="1.5" fill="#8B0000" opacity="0.15" />
      <ellipse cx="40" cy="20" rx="2" ry="1.5" fill="#8B0000" opacity="0.15" />
    </svg>
  );
}
