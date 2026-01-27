/**
 * Triceratops Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function Triceratops({ size = 64, color = '#CD853F' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="triceratopsBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DDA060" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#A06830" />
        </linearGradient>
        {/* Frill gradient */}
        <radialGradient id="triceratopsFrillGradient" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#DDA060" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#8B5828" />
        </radialGradient>
        {/* Horn gradient */}
        <linearGradient id="triceratopsHornGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#D8D0C0" />
          <stop offset="50%" stopColor="#F5F5DC" />
          <stop offset="100%" stopColor="#FFFFF0" />
        </linearGradient>
        {/* Leg gradient */}
        <linearGradient id="triceratopsLegGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C08048" />
          <stop offset="100%" stopColor="#8B5828" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="triceratopsEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="36" cy="62" rx="24" ry="4" fill="#000" opacity="0.2" />

      {/* Tail */}
      <polygon points="4,42 14,38 14,46" fill="url(#triceratopsBodyGradient)" />
      <polygon points="6,42 14,39 14,45" fill="#DDA060" opacity="0.4" />

      {/* Body */}
      <ellipse cx="28" cy="40" rx="20" ry="14" fill="url(#triceratopsBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="24" cy="36" rx="10" ry="7" fill="#DDA060" opacity="0.4" />

      {/* Body texture */}
      <circle cx="20" cy="38" r="1.5" fill="#8B5828" opacity="0.2" />
      <circle cx="28" cy="36" r="2" fill="#8B5828" opacity="0.2" />
      <circle cx="36" cy="40" r="1.5" fill="#8B5828" opacity="0.2" />
      <circle cx="24" cy="44" r="1" fill="#8B5828" opacity="0.2" />

      {/* Belly */}
      <ellipse cx="28" cy="46" rx="14" ry="6" fill="#E8C090" opacity="0.4" />

      {/* Head frill */}
      <ellipse cx="52" cy="24" rx="12" ry="14" fill="url(#triceratopsFrillGradient)" />

      {/* Frill highlight */}
      <ellipse cx="48" cy="20" rx="6" ry="7" fill="#DDA060" opacity="0.5" />

      {/* Frill edge details */}
      <path d="M42 14 Q40 12 42 10" stroke="#A06830" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M46 12 Q44 10 46 8" stroke="#A06830" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M52 10 Q52 8 54 8" stroke="#A06830" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M58 12 Q60 10 62 12" stroke="#A06830" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M62 16 Q64 14 64 18" stroke="#A06830" strokeWidth="2" fill="none" opacity="0.5" />

      {/* Frill pattern */}
      <path d="M44 20 Q48 24 44 28" stroke="#8B5828" strokeWidth="1" fill="none" opacity="0.3" />
      <path d="M50 18 Q54 24 50 30" stroke="#8B5828" strokeWidth="1" fill="none" opacity="0.3" />
      <path d="M56 20 Q60 24 56 28" stroke="#8B5828" strokeWidth="1" fill="none" opacity="0.3" />

      {/* Head */}
      <ellipse cx="56" cy="36" rx="10" ry="8" fill="url(#triceratopsBodyGradient)" />

      {/* Head highlight */}
      <ellipse cx="54" cy="34" rx="5" ry="4" fill="#DDA060" opacity="0.5" />

      {/* Brow horns */}
      <polygon points="46,20 44,6 50,8" fill="url(#triceratopsHornGradient)" />
      <polygon points="46,20 45,10 48,10" fill="#FFFFF0" opacity="0.4" />

      <polygon points="54,18 52,4 58,6" fill="url(#triceratopsHornGradient)" />
      <polygon points="54,18 53,8 56,8" fill="#FFFFF0" opacity="0.4" />

      {/* Nose horn */}
      <polygon points="62,34 68,30 66,36" fill="url(#triceratopsHornGradient)" />
      <polygon points="62,34 66,31 65,35" fill="#FFFFF0" opacity="0.4" />

      {/* Eye */}
      <circle cx="56" cy="32" r="2.5" fill="white" />
      <circle cx="56" cy="32" r="1.5" fill="url(#triceratopsEyeGradient)" />
      <circle cx="56.5" cy="31.5" r="0.5" fill="white" opacity="0.8" />

      {/* Nostril */}
      <circle cx="64" cy="36" r="1" fill="#8B5828" />

      {/* Mouth */}
      <path d="M60 40 Q62 42 64 40" stroke="#8B5828" strokeWidth="0.8" fill="none" />

      {/* Beak-like mouth */}
      <path d="M62 38 Q66 36 66 40" fill="#B08050" />

      {/* Cheek */}
      <circle cx="58" cy="38" r="2" fill="#E8C090" opacity="0.4" />

      {/* Legs */}
      <rect x="14" y="50" width="8" height="12" rx="3" fill="url(#triceratopsLegGradient)" />
      <rect x="14" y="50" width="4" height="10" rx="2" fill="#DDA060" opacity="0.3" />

      <rect x="34" y="50" width="8" height="12" rx="3" fill="url(#triceratopsLegGradient)" />
      <rect x="34" y="50" width="4" height="10" rx="2" fill="#DDA060" opacity="0.3" />

      {/* Feet */}
      <ellipse cx="18" cy="62" rx="5" ry="2" fill="#8B5828" />
      <ellipse cx="38" cy="62" rx="5" ry="2" fill="#8B5828" />

      {/* Toes */}
      <circle cx="15" cy="62" r="1.2" fill="#6B4818" />
      <circle cx="18" cy="62" r="1.2" fill="#6B4818" />
      <circle cx="21" cy="62" r="1.2" fill="#6B4818" />
      <circle cx="35" cy="62" r="1.2" fill="#6B4818" />
      <circle cx="38" cy="62" r="1.2" fill="#6B4818" />
      <circle cx="41" cy="62" r="1.2" fill="#6B4818" />
    </svg>
  );
}
