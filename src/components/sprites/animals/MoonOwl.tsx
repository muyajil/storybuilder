/**
 * MoonOwl Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function MoonOwl({ size = 64, color = '#4B0082' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="moonOwlBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#6B238E" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#2E0854" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="moonOwlHeadGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#6B238E" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#2E0854" />
        </radialGradient>
        {/* Chest gradient */}
        <radialGradient id="moonOwlChestGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F5F5FA" />
          <stop offset="70%" stopColor="#E6E6FA" />
          <stop offset="100%" stopColor="#D8BFD8" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="moonOwlEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFF00" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </radialGradient>
        {/* Wing gradient */}
        <linearGradient id="moonOwlWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B238E" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#2E0854" />
        </linearGradient>
        {/* Moon aura gradient */}
        <radialGradient id="moonOwlAuraGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(230,230,250,0.4)" />
          <stop offset="70%" stopColor="rgba(230,230,250,0.1)" />
          <stop offset="100%" stopColor="rgba(230,230,250,0)" />
        </radialGradient>
        {/* Beak gradient */}
        <linearGradient id="moonOwlBeakGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FF8C00" />
        </linearGradient>
      </defs>

      {/* Moon aura effect */}
      <circle cx="32" cy="32" r="30" fill="url(#moonOwlAuraGradient)" />

      {/* Magical stars */}
      <circle cx="6" cy="18" r="1.5" fill="#FFD700">
        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="58" cy="16" r="2" fill="#FFD700">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="10" cy="50" r="1" fill="#FFD700">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="54" cy="52" r="1.2" fill="#FFD700">
        <animate attributeName="opacity" values="1;0.5;1" dur="2.2s" repeatCount="indefinite" />
      </circle>

      {/* Wings with gradient */}
      <ellipse cx="10" cy="42" rx="10" ry="16" fill="url(#moonOwlWingGradient)" />
      <ellipse cx="54" cy="42" rx="10" ry="16" fill="url(#moonOwlWingGradient)" />
      {/* Wing feather details */}
      <path d="M6 36 Q4 42 6 48" stroke="#2E0854" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M10 34 Q8 42 10 50" stroke="#2E0854" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M58 36 Q60 42 58 48" stroke="#2E0854" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M54 34 Q56 42 54 50" stroke="#2E0854" strokeWidth="0.5" fill="none" opacity="0.5" />
      {/* Wing highlights */}
      <ellipse cx="8" cy="38" rx="3" ry="5" fill="rgba(255,255,255,0.1)" />
      <ellipse cx="56" cy="38" rx="3" ry="5" fill="rgba(255,255,255,0.1)" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="44" rx="16" ry="14" fill="url(#moonOwlBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="40" rx="6" ry="5" fill="rgba(255,255,255,0.1)" />

      {/* Chest pattern with gradient */}
      <ellipse cx="32" cy="48" rx="10" ry="9" fill="url(#moonOwlChestGradient)" />
      {/* Chest feather pattern */}
      <path d="M28 44 Q30 46 28 48" stroke="rgba(75,0,130,0.2)" strokeWidth="1" fill="none" />
      <path d="M32 44 Q34 46 32 48" stroke="rgba(75,0,130,0.2)" strokeWidth="1" fill="none" />
      <path d="M36 44 Q38 46 36 48" stroke="rgba(75,0,130,0.2)" strokeWidth="1" fill="none" />
      <path d="M30 50 Q32 52 30 54" stroke="rgba(75,0,130,0.2)" strokeWidth="1" fill="none" />
      <path d="M34 50 Q36 52 34 54" stroke="rgba(75,0,130,0.2)" strokeWidth="1" fill="none" />

      {/* Head with gradient */}
      <circle cx="32" cy="24" r="17" fill="url(#moonOwlHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="26" cy="18" rx="6" ry="5" fill="rgba(255,255,255,0.1)" />

      {/* Ear tufts with detail */}
      <polygon points="17,14 12,2 26,10" fill={color} />
      <polygon points="47,14 52,2 38,10" fill={color} />
      {/* Ear tuft highlights */}
      <path d="M16 12 L14 6" stroke="#6B238E" strokeWidth="1" opacity="0.5" />
      <path d="M48 12 L50 6" stroke="#6B238E" strokeWidth="1" opacity="0.5" />
      {/* Inner ear tufts */}
      <polygon points="18,13 15,6 23,10" fill="#6B238E" opacity="0.5" />
      <polygon points="46,13 49,6 41,10" fill="#6B238E" opacity="0.5" />

      {/* Facial disc (owl characteristic) */}
      <ellipse cx="32" cy="26" rx="14" ry="12" fill="rgba(230,230,250,0.2)" />

      {/* Large eyes with gradient */}
      <circle cx="24" cy="24" r="9" fill="url(#moonOwlEyeGradient)" />
      <circle cx="40" cy="24" r="9" fill="url(#moonOwlEyeGradient)" />
      {/* Eye outer ring */}
      <circle cx="24" cy="24" r="9" fill="none" stroke="#2E0854" strokeWidth="1" />
      <circle cx="40" cy="24" r="9" fill="none" stroke="#2E0854" strokeWidth="1" />
      {/* Pupils */}
      <circle cx="24" cy="24" r="5" fill="black" />
      <circle cx="40" cy="24" r="5" fill="black" />
      {/* Eye highlights */}
      <circle cx="26" cy="22" r="2.5" fill="white" />
      <circle cx="42" cy="22" r="2.5" fill="white" />
      <circle cx="23" cy="26" r="1" fill="white" opacity="0.5" />
      <circle cx="39" cy="26" r="1" fill="white" opacity="0.5" />

      {/* Beak with gradient */}
      <polygon points="32,32 27,40 37,40" fill="url(#moonOwlBeakGradient)" />
      {/* Beak highlight */}
      <polygon points="32,33 29,38 32,38" fill="rgba(255,255,255,0.2)" />

      {/* Moon crescent on forehead */}
      <path d="M28 12 Q32 8 36 12 Q34 10 32 10 Q30 10 28 12" fill="#FFD700" />
      <circle cx="32" cy="10" r="1" fill="#FFF8DC" />

      {/* Feet with gradient */}
      <path d="M26 56 L22 62 L26 60 L30 62 L26 56" fill="url(#moonOwlBeakGradient)" />
      <path d="M38 56 L34 62 L38 60 L42 62 L38 56" fill="url(#moonOwlBeakGradient)" />
      {/* Talons */}
      <path d="M22 62 L20 64" stroke="#FF8C00" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M26 62 L26 65" stroke="#FF8C00" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 62 L32 64" stroke="#FF8C00" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M34 62 L32 64" stroke="#FF8C00" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M38 62 L38 65" stroke="#FF8C00" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M42 62 L44 64" stroke="#FF8C00" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
