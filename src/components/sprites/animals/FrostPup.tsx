/**
 * FrostPup Sprite Component
 * Enhanced with icy gradients, crystalline effects, and magical frost details
 */

import type { SpriteProps } from '../types';

export function FrostPup({ size = 64, color = '#87CEEB' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="frostPupBodyGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#B0E0FF" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#5CACEE" />
        </radialGradient>
        {/* Ice gradient */}
        <linearGradient id="frostPupIceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#E0FFFF" />
          <stop offset="70%" stopColor="#B0E0E6" />
          <stop offset="100%" stopColor="#87CEEB" />
        </linearGradient>
        {/* Belly gradient */}
        <radialGradient id="frostPupBellyGrad" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#F0FFFF" />
          <stop offset="70%" stopColor="#E0FFFF" />
          <stop offset="100%" stopColor="#B0E0E6" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="frostPupEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#6495ED" />
          <stop offset="50%" stopColor="#4169E1" />
          <stop offset="100%" stopColor="#00008B" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="frostPupNoseGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#5F9EA0" />
          <stop offset="100%" stopColor="#4682B4" />
        </radialGradient>
        {/* Frost glow filter */}
        <filter id="frostPupGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Sparkle filter */}
        <filter id="frostPupSparkle" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ice tail with crystalline effect */}
      <polygon points="4,38 12,34 8,38 14,36 10,42 16,38" fill="url(#frostPupIceGrad)" />
      {/* Tail glow */}
      <g filter="url(#frostPupGlow)">
        <polygon points="4,38 10,36 8,40" fill="#E0FFFF" opacity="0.6" />
      </g>
      {/* Tail sparkles */}
      <g filter="url(#frostPupSparkle)">
        <circle cx="6" cy="36" r="1" fill="white" opacity="0.8" />
        <circle cx="10" cy="38" r="0.6" fill="#E0FFFF" />
      </g>

      {/* Body with gradient */}
      <ellipse cx="32" cy="40" rx="16" ry="12" fill="url(#frostPupBodyGrad)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="36" rx="8" ry="5" fill="#C0E8FF" opacity="0.4" />
      {/* Body shadow */}
      <ellipse cx="34" cy="48" rx="12" ry="4" fill="#4682B4" opacity="0.15" />
      {/* Icy belly */}
      <ellipse cx="32" cy="42" rx="10" ry="6" fill="url(#frostPupBellyGrad)" />
      {/* Frost pattern on belly */}
      <path d="M28,40 Q30,42 28,44" stroke="#B0E0E6" strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M36,40 Q34,42 36,44" stroke="#B0E0E6" strokeWidth="0.5" fill="none" opacity="0.6" />

      {/* Head with gradient */}
      <circle cx="48" cy="30" r="14" fill="url(#frostPupBodyGrad)" />
      {/* Head highlight */}
      <ellipse cx="44" cy="24" rx="6" ry="5" fill="#C0E8FF" opacity="0.4" />

      {/* Ice crystal ears */}
      <polygon points="38,18 34,4 44,14" fill="url(#frostPupIceGrad)" />
      <polygon points="56,16 58,2 62,14" fill="url(#frostPupIceGrad)" />
      {/* Ear crystal detail lines */}
      <path d="M36,12 L40,16" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.6" />
      <path d="M38,8 L40,14" stroke="#E0FFFF" strokeWidth="0.3" opacity="0.5" />
      <path d="M58,8 L60,14" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.6" />
      <path d="M58,4 L58,12" stroke="#E0FFFF" strokeWidth="0.3" opacity="0.5" />
      {/* Ear glow */}
      <g filter="url(#frostPupGlow)">
        <ellipse cx="36" cy="6" rx="2" ry="3" fill="#E0FFFF" opacity="0.5" />
        <ellipse cx="58" cy="4" rx="2" ry="3" fill="#E0FFFF" opacity="0.5" />
      </g>

      {/* Eyes with icy depth */}
      <ellipse cx="44" cy="28" rx="5" ry="5.5" fill="white" />
      <ellipse cx="54" cy="28" rx="5" ry="5.5" fill="white" />
      {/* Eye inner glow */}
      <ellipse cx="44" cy="28" rx="5" ry="5.5" fill="#E0FFFF" opacity="0.3" />
      <ellipse cx="54" cy="28" rx="5" ry="5.5" fill="#E0FFFF" opacity="0.3" />
      {/* Pupils with gradient */}
      <circle cx="44" cy="28" r="3.5" fill="url(#frostPupEyeGrad)" />
      <circle cx="54" cy="28" r="3.5" fill="url(#frostPupEyeGrad)" />
      {/* Eye sparkles */}
      <circle cx="43" cy="27" r="1.2" fill="white" />
      <circle cx="53" cy="27" r="1.2" fill="white" />
      <circle cx="45" cy="29" r="0.5" fill="white" />
      <circle cx="55" cy="29" r="0.5" fill="white" />
      {/* Icy eye ring */}
      <circle cx="44" cy="28" r="4" fill="none" stroke="#B0E0E6" strokeWidth="0.3" opacity="0.5" />
      <circle cx="54" cy="28" r="4" fill="none" stroke="#B0E0E6" strokeWidth="0.3" opacity="0.5" />

      {/* Nose with cool gradient */}
      <ellipse cx="49" cy="36" rx="3" ry="2.2" fill="url(#frostPupNoseGrad)" />
      {/* Nose highlight */}
      <ellipse cx="48" cy="35.5" rx="1" ry="0.6" fill="#87CEEB" opacity="0.5" />

      {/* Frosty breath hint */}
      <g opacity="0.3">
        <ellipse cx="52" cy="40" rx="2" ry="1" fill="#E0FFFF" />
        <ellipse cx="56" cy="42" rx="1.5" ry="0.8" fill="#E0FFFF" />
      </g>

      {/* Legs with gradient */}
      <rect x="22" y="48" width="6" height="10" fill="url(#frostPupBodyGrad)" rx="2" />
      <rect x="36" y="48" width="6" height="10" fill="url(#frostPupBodyGrad)" rx="2" />
      {/* Leg highlights */}
      <rect x="23" y="49" width="2" height="6" fill="#C0E8FF" opacity="0.4" rx="1" />
      <rect x="37" y="49" width="2" height="6" fill="#C0E8FF" opacity="0.4" rx="1" />

      {/* Icy paws */}
      <ellipse cx="25" cy="58" rx="4" ry="2.5" fill="url(#frostPupIceGrad)" />
      <ellipse cx="39" cy="58" rx="4" ry="2.5" fill="url(#frostPupIceGrad)" />
      {/* Paw frost detail */}
      <path d="M23,58 L25,56 L27,58" stroke="#B0E0E6" strokeWidth="0.3" fill="none" />
      <path d="M37,58 L39,56 L41,58" stroke="#B0E0E6" strokeWidth="0.3" fill="none" />

      {/* Snowflakes floating around */}
      <g filter="url(#frostPupSparkle)">
        <text x="58" y="18" fontSize="7" fill="#FFF" opacity="0.9">*</text>
        <text x="36" y="22" fontSize="5" fill="#E0FFFF" opacity="0.8">*</text>
        <text x="16" y="34" fontSize="4" fill="#FFF" opacity="0.6">*</text>
        <text x="54" y="10" fontSize="4" fill="#E0FFFF" opacity="0.7">*</text>
      </g>

      {/* Frost sparkles on body */}
      <g filter="url(#frostPupSparkle)">
        <circle cx="40" cy="36" r="0.8" fill="white" opacity="0.7" />
        <circle cx="26" cy="40" r="0.6" fill="#E0FFFF" opacity="0.6" />
        <circle cx="46" cy="22" r="0.5" fill="white" opacity="0.5" />
      </g>
    </svg>
  );
}
