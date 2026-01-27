/**
 * Squirrel Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function Squirrel({ size = 64, color = '#D2691E' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="squirrelBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E88040" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#A04810" />
        </linearGradient>
        {/* Tail gradient */}
        <radialGradient id="squirrelTailGradient" cx="60%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#E88040" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#8B4513" />
        </radialGradient>
        {/* Belly gradient */}
        <radialGradient id="squirrelBellyGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="70%" stopColor="#DEB887" />
          <stop offset="100%" stopColor="#D2B48C" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="squirrelHeadGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#E88040" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#A04810" />
        </radialGradient>
        {/* Nut gradient */}
        <radialGradient id="squirrelNutGradient" cx="30%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#B87333" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#5D3A1A" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="squirrelEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="58" rx="18" ry="4" fill="#000" opacity="0.2" />

      {/* Fluffy tail */}
      <path d="M12 32 Q4 24 8 16 Q16 8 24 16 Q28 24 20 32" fill="url(#squirrelTailGradient)" />
      {/* Tail highlight */}
      <path d="M14 28 Q10 22 12 18 Q16 14 20 18" fill="#E88040" opacity="0.5" />
      {/* Tail fur texture */}
      <path d="M10 24 Q12 20 10 16" stroke="#A04810" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M16 22 Q18 18 16 14" stroke="#A04810" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M20 26 Q22 22 20 18" stroke="#A04810" strokeWidth="0.8" fill="none" opacity="0.4" />

      {/* Body */}
      <ellipse cx="32" cy="44" rx="14" ry="12" fill="url(#squirrelBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="40" rx="6" ry="5" fill="#E88040" opacity="0.4" />

      {/* Belly patch */}
      <ellipse cx="34" cy="46" rx="8" ry="6" fill="url(#squirrelBellyGradient)" />

      {/* Head */}
      <circle cx="44" cy="32" r="12" fill="url(#squirrelHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="40" cy="28" rx="5" ry="4" fill="#E88040" opacity="0.5" />

      {/* Ears with tufts */}
      <polygon points="38,22 36,14 42,20" fill="url(#squirrelBodyGradient)" />
      <polygon points="50,22 52,14 48,20" fill="url(#squirrelBodyGradient)" />
      {/* Ear inner */}
      <polygon points="38,22 37,17 41,21" fill="#DEB887" opacity="0.6" />
      <polygon points="50,22 51,17 49,21" fill="#DEB887" opacity="0.6" />
      {/* Ear tufts */}
      <path d="M36 14 L34 10 M36 14 L38 11" stroke="#A04810" strokeWidth="1" strokeLinecap="round" />
      <path d="M52 14 L54 10 M52 14 L50 11" stroke="#A04810" strokeWidth="1" strokeLinecap="round" />

      {/* Cheek / face */}
      <ellipse cx="50" cy="36" rx="4" ry="3" fill="url(#squirrelBellyGradient)" />

      {/* Eye */}
      <circle cx="42" cy="30" r="3.5" fill="url(#squirrelEyeGradient)" />
      {/* Eye shine */}
      <circle cx="43" cy="29" r="1" fill="white" />
      <circle cx="41" cy="31" r="0.5" fill="white" opacity="0.6" />

      {/* Nose */}
      <circle cx="52" cy="34" r="2" fill="#2a2a2a" />
      <ellipse cx="52" cy="33.5" rx="1" ry="0.7" fill="#4a4a4a" opacity="0.5" />

      {/* Whiskers */}
      <path d="M50 36 L56 34" stroke="#A04810" strokeWidth="0.5" opacity="0.5" />
      <path d="M50 38 L56 40" stroke="#A04810" strokeWidth="0.5" opacity="0.5" />

      {/* Mouth */}
      <path d="M50 38 Q52 40 54 38" stroke="#5D3A1A" strokeWidth="0.8" fill="none" />

      {/* Front paws holding nut */}
      <ellipse cx="40" cy="48" rx="4" ry="3" fill="url(#squirrelBodyGradient)" />
      <ellipse cx="44" cy="48" rx="4" ry="3" fill="url(#squirrelBodyGradient)" />

      {/* Paw details */}
      <path d="M38 48 L36 50 M40 49 L39 51 M42 49 L42 51" stroke="#8B4513" strokeWidth="0.8" strokeLinecap="round" />
      <path d="M44 49 L44 51 M46 49 L47 51 M48 48 L50 50" stroke="#8B4513" strokeWidth="0.8" strokeLinecap="round" />

      {/* Acorn / Nut */}
      <ellipse cx="46" cy="44" rx="3.5" ry="5" fill="url(#squirrelNutGradient)" />
      {/* Nut cap */}
      <path d="M43 40 Q46 38 49 40" fill="#5D3A1A" />
      <ellipse cx="46" cy="40" rx="3.5" ry="1.5" fill="#6B4423" />
      {/* Nut stem */}
      <rect x="45" y="37" width="2" height="2" fill="#4A3020" rx="1" />
      {/* Nut texture */}
      <path d="M44 42 L44 46" stroke="#5D3A1A" strokeWidth="0.5" opacity="0.4" />
      <path d="M46 41 L46 47" stroke="#5D3A1A" strokeWidth="0.5" opacity="0.4" />
      <path d="M48 42 L48 46" stroke="#5D3A1A" strokeWidth="0.5" opacity="0.4" />

      {/* Back leg */}
      <ellipse cx="22" cy="52" rx="5" ry="4" fill="url(#squirrelBodyGradient)" />
    </svg>
  );
}
