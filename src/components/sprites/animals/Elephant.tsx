/**
 * Elephant Sprite Component
 * Enhanced with gradients, wrinkled texture, and gentle expression
 */

import type { SpriteProps } from '../types';

export function Elephant({ size = 64, color = '#808080' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="elephantBodyGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#9A9A9A" />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor="#5A5A5A" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="elephantHeadGrad" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#9A9A9A" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#6A6A6A" />
        </radialGradient>
        {/* Ear gradient */}
        <radialGradient id="elephantEarGrad" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#9A9A9A" />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor="#5A5A5A" />
        </radialGradient>
        {/* Ear inner gradient */}
        <radialGradient id="elephantEarInnerGrad" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#DCCDC8" />
          <stop offset="70%" stopColor="#A9A9A9" />
          <stop offset="100%" stopColor="#8A8A8A" />
        </radialGradient>
        {/* Trunk gradient */}
        <linearGradient id="elephantTrunkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor="#6A6A6A" />
          <stop offset="100%" stopColor="#5A5A5A" />
        </linearGradient>
        {/* Tusk gradient */}
        <linearGradient id="elephantTuskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFF0" />
          <stop offset="50%" stopColor="#F5F5DC" />
          <stop offset="100%" stopColor="#DDD8C4" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="elephantEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#5C4033" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
      </defs>

      {/* Body with gradient */}
      <ellipse cx="32" cy="40" rx="24" ry="18" fill="url(#elephantBodyGrad)" />
      {/* Body highlight */}
      <ellipse cx="26" cy="34" rx="14" ry="8" fill="#A0A0A0" opacity="0.3" />
      {/* Body shadow */}
      <ellipse cx="36" cy="52" rx="18" ry="5" fill="#4A4A4A" opacity="0.2" />
      {/* Body wrinkles */}
      <path d="M18,38 Q22,40 18,42" stroke="#6A6A6A" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M46,38 Q42,40 46,42" stroke="#6A6A6A" strokeWidth="0.8" fill="none" opacity="0.4" />

      {/* Ears with gradient */}
      <ellipse cx="10" cy="24" rx="12" ry="16" fill="url(#elephantEarGrad)" />
      <ellipse cx="54" cy="24" rx="12" ry="16" fill="url(#elephantEarGrad)" />
      {/* Ear inner */}
      <ellipse cx="10" cy="24" rx="8" ry="12" fill="url(#elephantEarInnerGrad)" />
      <ellipse cx="54" cy="24" rx="8" ry="12" fill="url(#elephantEarInnerGrad)" />
      {/* Ear veins */}
      <path d="M8,18 Q10,24 8,30" stroke="#9A8A8A" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M12,16 Q14,24 12,32" stroke="#9A8A8A" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M56,18 Q54,24 56,30" stroke="#9A8A8A" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M52,16 Q50,24 52,32" stroke="#9A8A8A" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Head with gradient */}
      <circle cx="32" cy="24" r="16" fill="url(#elephantHeadGrad)" />
      {/* Head highlight */}
      <ellipse cx="28" cy="18" rx="7" ry="5" fill="#A0A0A0" opacity="0.4" />
      {/* Forehead wrinkles */}
      <path d="M26,14 Q32,12 38,14" stroke="#6A6A6A" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M28,16 Q32,14 36,16" stroke="#6A6A6A" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Trunk with gradient and detail */}
      <path d="M32 32 Q32 44 30 52 Q28 58 26 56 Q24 54 26 52"
            stroke="url(#elephantTrunkGrad)" strokeWidth="8" fill="none" strokeLinecap="round" />
      {/* Trunk highlight */}
      <path d="M30 34 Q30 42 28 48" stroke="#A0A0A0" strokeWidth="2" fill="none" opacity="0.3" />
      {/* Trunk wrinkles */}
      <path d="M28,36 L36,36" stroke="#5A5A5A" strokeWidth="0.8" opacity="0.4" />
      <path d="M27,40 L37,40" stroke="#5A5A5A" strokeWidth="0.8" opacity="0.4" />
      <path d="M26,44 L36,44" stroke="#5A5A5A" strokeWidth="0.8" opacity="0.4" />
      <path d="M26,48 L34,48" stroke="#5A5A5A" strokeWidth="0.6" opacity="0.4" />
      {/* Trunk tip */}
      <ellipse cx="25" cy="55" rx="3" ry="4" fill="#6A6A6A" />

      {/* Eyes with depth */}
      <ellipse cx="26" cy="22" rx="3.5" ry="4" fill="white" />
      <ellipse cx="38" cy="22" rx="3.5" ry="4" fill="white" />
      {/* Pupils */}
      <circle cx="27" cy="22" r="2" fill="url(#elephantEyeGrad)" />
      <circle cx="39" cy="22" r="2" fill="url(#elephantEyeGrad)" />
      {/* Eye sparkles */}
      <circle cx="26" cy="21" r="0.8" fill="white" />
      <circle cx="38" cy="21" r="0.8" fill="white" />
      {/* Gentle eyelids */}
      <path d="M22.5 20 Q26 18 29.5 20" stroke="#6A6A6A" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M34.5 20 Q38 18 41.5 20" stroke="#6A6A6A" strokeWidth="0.8" fill="none" opacity="0.4" />

      {/* Tusks with gradient */}
      <ellipse cx="24" cy="34" rx="2.5" ry="7" fill="url(#elephantTuskGrad)" />
      <ellipse cx="40" cy="34" rx="2.5" ry="7" fill="url(#elephantTuskGrad)" />
      {/* Tusk highlights */}
      <ellipse cx="23" cy="32" rx="1" ry="4" fill="white" opacity="0.3" />
      <ellipse cx="39" cy="32" rx="1" ry="4" fill="white" opacity="0.3" />

      {/* Legs */}
      <ellipse cx="18" cy="56" rx="6" ry="8" fill="url(#elephantBodyGrad)" />
      <ellipse cx="46" cy="56" rx="6" ry="8" fill="url(#elephantBodyGrad)" />
      {/* Leg wrinkles */}
      <path d="M14,52 L22,52" stroke="#5A5A5A" strokeWidth="0.5" opacity="0.4" />
      <path d="M15,55 L21,55" stroke="#5A5A5A" strokeWidth="0.5" opacity="0.4" />
      <path d="M42,52 L50,52" stroke="#5A5A5A" strokeWidth="0.5" opacity="0.4" />
      <path d="M43,55 L49,55" stroke="#5A5A5A" strokeWidth="0.5" opacity="0.4" />

      {/* Toenails */}
      <ellipse cx="14" cy="60" rx="1.5" ry="1" fill="#D0D0D0" />
      <ellipse cx="18" cy="61" rx="1.5" ry="1" fill="#D0D0D0" />
      <ellipse cx="22" cy="60" rx="1.5" ry="1" fill="#D0D0D0" />
      <ellipse cx="42" cy="60" rx="1.5" ry="1" fill="#D0D0D0" />
      <ellipse cx="46" cy="61" rx="1.5" ry="1" fill="#D0D0D0" />
      <ellipse cx="50" cy="60" rx="1.5" ry="1" fill="#D0D0D0" />

      {/* Tail */}
      <path d="M56 42 Q60 46 58 52" stroke={color} strokeWidth="2" fill="none" />
      <ellipse cx="58" cy="54" rx="2" ry="3" fill="#4A4A4A" />
    </svg>
  );
}
