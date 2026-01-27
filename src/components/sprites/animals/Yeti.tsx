/**
 * Yeti Sprite Component
 */

import type { SpriteProps } from '../types';

export function Yeti({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="yetiBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} />
          <stop offset="60%" stopColor="#F0F0F0" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </radialGradient>
        {/* Fur highlight gradient */}
        <linearGradient id="yetiFurHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="#F5F5F5" />
        </linearGradient>
        {/* Ice blue tint gradient */}
        <radialGradient id="yetiIceTint" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8F4FF" />
          <stop offset="100%" stopColor="#D0E8FF" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="yetiEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#6495ED" />
          <stop offset="100%" stopColor="#4169E1" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="yetiNoseGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#C8E0FF" />
          <stop offset="100%" stopColor="#ADD8E6" />
        </radialGradient>
        {/* Arm gradient */}
        <linearGradient id="yetiArmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#E8E8E8" />
        </linearGradient>
        {/* Shadow gradient */}
        <radialGradient id="yetiShadowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C0D0E0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#A0B0C0" stopOpacity="0.1" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="60" rx="22" ry="4" fill="#000" opacity="0.15" />

      {/* Arms behind body */}
      <path d="M10 36 Q4 42 8 54" stroke="url(#yetiArmGradient)" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M54 36 Q60 42 56 54" stroke="url(#yetiArmGradient)" strokeWidth="10" fill="none" strokeLinecap="round" />
      {/* Arm fur details */}
      <path d="M6 48 L4 52" stroke="#E0E0E0" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 50 L6 54" stroke="#E0E0E0" strokeWidth="2" strokeLinecap="round" />
      <path d="M58 48 L60 52" stroke="#E0E0E0" strokeWidth="2" strokeLinecap="round" />
      <path d="M56 50 L58 54" stroke="#E0E0E0" strokeWidth="2" strokeLinecap="round" />

      {/* Body */}
      <ellipse cx="32" cy="44" rx="20" ry="16" fill="url(#yetiBodyGradient)" />

      {/* Body ice tint overlay */}
      <ellipse cx="32" cy="48" rx="14" ry="10" fill="url(#yetiIceTint)" opacity="0.3" />

      {/* Body highlight */}
      <ellipse cx="26" cy="38" rx="8" ry="6" fill="white" opacity="0.4" />

      {/* Fur texture on body */}
      <path d="M18 50 Q16 54 18 58" stroke="#D8D8D8" strokeWidth="1.5" fill="none" />
      <path d="M24 52 Q22 56 24 60" stroke="#D8D8D8" strokeWidth="1.5" fill="none" />
      <path d="M40 52 Q42 56 40 60" stroke="#D8D8D8" strokeWidth="1.5" fill="none" />
      <path d="M46 50 Q48 54 46 58" stroke="#D8D8D8" strokeWidth="1.5" fill="none" />

      {/* Head */}
      <circle cx="32" cy="22" r="14" fill="url(#yetiBodyGradient)" />

      {/* Head highlight */}
      <ellipse cx="26" cy="16" rx="6" ry="5" fill="white" opacity="0.4" />

      {/* Fur on head top */}
      <path d="M22 10 Q20 6 22 8" stroke="#E8E8E8" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M28 8 Q28 4 30 6" stroke="#E8E8E8" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M34 8 Q34 4 36 6" stroke="#E8E8E8" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M40 10 Q42 6 42 8" stroke="#E8E8E8" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Brow ridge */}
      <path d="M20 16 Q26 14 32 16 Q38 14 44 16" stroke="#D0D8E0" strokeWidth="2" fill="none" opacity="0.5" />

      {/* Eyes - outer white */}
      <circle cx="26" cy="20" r="5" fill="white" stroke="#B0C4DE" strokeWidth="1" />
      <circle cx="38" cy="20" r="5" fill="white" stroke="#B0C4DE" strokeWidth="1" />

      {/* Eyes - iris */}
      <circle cx="26" cy="20" r="3" fill="url(#yetiEyeGradient)" />
      <circle cx="38" cy="20" r="3" fill="url(#yetiEyeGradient)" />

      {/* Eyes - pupil */}
      <circle cx="26" cy="20" r="1.5" fill="#1a1a4e" />
      <circle cx="38" cy="20" r="1.5" fill="#1a1a4e" />

      {/* Eye shine */}
      <circle cx="27" cy="19" r="1" fill="white" />
      <circle cx="39" cy="19" r="1" fill="white" />
      <circle cx="25" cy="21" r="0.5" fill="white" opacity="0.6" />
      <circle cx="37" cy="21" r="0.5" fill="white" opacity="0.6" />

      {/* Nose */}
      <ellipse cx="32" cy="28" rx="4" ry="3" fill="url(#yetiNoseGradient)" />
      {/* Nose highlight */}
      <ellipse cx="30" cy="27" rx="1.5" ry="1" fill="white" opacity="0.4" />
      {/* Nostrils */}
      <ellipse cx="30" cy="29" rx="0.8" ry="0.5" fill="#8AB8D8" />
      <ellipse cx="34" cy="29" rx="0.8" ry="0.5" fill="#8AB8D8" />

      {/* Mouth */}
      <path d="M28 32 Q32 34 36 32" stroke="#B0C4DE" strokeWidth="1" fill="none" opacity="0.6" />

      {/* Fangs/teeth hint */}
      <path d="M29 32 L30 34" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M35 32 L34 34" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

      {/* Cheek fur */}
      <path d="M16 22 Q14 26 16 28" stroke="#E8E8E8" strokeWidth="2" fill="none" />
      <path d="M48 22 Q50 26 48 28" stroke="#E8E8E8" strokeWidth="2" fill="none" />

      {/* Snow/ice particles around */}
      <circle cx="8" cy="20" r="1" fill="#E8F4FF" opacity="0.7" />
      <circle cx="56" cy="18" r="1.5" fill="#E8F4FF" opacity="0.6" />
      <circle cx="12" cy="44" r="1" fill="#E8F4FF" opacity="0.5" />
      <circle cx="52" cy="42" r="1.2" fill="#E8F4FF" opacity="0.6" />
    </svg>
  );
}
