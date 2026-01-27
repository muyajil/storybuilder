/**
 * WaterSprite Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function WaterSprite({ size = 64, color = '#1E90FF' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="waterSpriteBodyGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#60B0FF" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#0060C0" />
        </radialGradient>
        {/* Inner glow gradient */}
        <radialGradient id="waterSpriteInnerGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#A0D8FF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#87CEEB" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#60B0FF" stopOpacity="0" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="waterSpriteEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#0000A0" />
          <stop offset="100%" stopColor="#000080" />
        </radialGradient>
        {/* Hand gradient */}
        <radialGradient id="waterSpriteHandGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#60B0FF" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Shine gradient */}
        <linearGradient id="waterSpriteShineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        {/* Bubble gradient */}
        <radialGradient id="waterSpriteBubbleGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#87CEEB" stopOpacity="0.2" />
        </radialGradient>
      </defs>

      {/* Shadow / Reflection */}
      <ellipse cx="32" cy="58" rx="14" ry="3" fill="#0060C0" opacity="0.3" />

      {/* Water ripple base */}
      <ellipse cx="32" cy="56" rx="16" ry="2" fill="#87CEEB" opacity="0.2" />

      {/* Drop shape body */}
      <path
        d="M32 8 Q48 24 48 40 Q48 56 32 56 Q16 56 16 40 Q16 24 32 8"
        fill="url(#waterSpriteBodyGradient)"
      />

      {/* Inner glow / transparency effect */}
      <path
        d="M32 14 Q42 26 42 38 Q42 50 32 50 Q22 50 22 38 Q22 26 32 14"
        fill="url(#waterSpriteInnerGradient)"
      />

      {/* Main highlight / shine */}
      <ellipse cx="24" cy="20" rx="4" ry="6" fill="url(#waterSpriteShineGradient)" opacity="0.8" />

      {/* Secondary highlight */}
      <ellipse cx="38" cy="26" rx="2" ry="3" fill="white" opacity="0.4" />

      {/* Eyes - white part */}
      <circle cx="26" cy="34" r="5" fill="white" />
      <circle cx="38" cy="34" r="5" fill="white" />

      {/* Eyes - iris */}
      <circle cx="26" cy="34" r="3.5" fill="url(#waterSpriteEyeGradient)" />
      <circle cx="38" cy="34" r="3.5" fill="url(#waterSpriteEyeGradient)" />

      {/* Eyes - pupils */}
      <circle cx="26" cy="34" r="1.5" fill="#1a1a1a" />
      <circle cx="38" cy="34" r="1.5" fill="#1a1a1a" />

      {/* Eye shine */}
      <circle cx="27" cy="33" r="1.2" fill="white" />
      <circle cx="39" cy="33" r="1.2" fill="white" />
      <circle cx="25" cy="35" r="0.5" fill="white" opacity="0.5" />
      <circle cx="37" cy="35" r="0.5" fill="white" opacity="0.5" />

      {/* Cheeks - rosy glow */}
      <circle cx="22" cy="38" r="2.5" fill="#A0D8FF" opacity="0.5" />
      <circle cx="42" cy="38" r="2.5" fill="#A0D8FF" opacity="0.5" />

      {/* Mouth - happy smile */}
      <path d="M28 42 Q32 46 36 42" stroke="#000080" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Mouth highlight */}
      <path d="M29 43 Q32 45 35 43" stroke="#0080D0" strokeWidth="0.5" fill="none" strokeLinecap="round" opacity="0.5" />

      {/* Hands / water appendages */}
      <ellipse cx="12" cy="40" rx="4" ry="6" fill="url(#waterSpriteHandGradient)" />
      <ellipse cx="12" cy="38" rx="2" ry="3" fill="#87CEEB" opacity="0.5" />

      <ellipse cx="52" cy="40" rx="4" ry="6" fill="url(#waterSpriteHandGradient)" />
      <ellipse cx="52" cy="38" rx="2" ry="3" fill="#87CEEB" opacity="0.5" />

      {/* Hand sparkles */}
      <circle cx="10" cy="36" r="1" fill="#FFFFFF" opacity="0.6" />
      <circle cx="54" cy="36" r="1" fill="#FFFFFF" opacity="0.6" />

      {/* Water droplets around */}
      <path d="M8 28 Q10 26 12 28 Q10 30 8 28" fill="#87CEEB" opacity="0.6" />
      <path d="M52 24 Q54 22 56 24 Q54 26 52 24" fill="#87CEEB" opacity="0.6" />
      <path d="M4 36 Q5 34 6 36 Q5 38 4 36" fill="#87CEEB" opacity="0.5" />

      {/* Bubbles */}
      <circle cx="18" cy="14" r="2" fill="url(#waterSpriteBubbleGradient)" />
      <circle cx="46" cy="12" r="1.5" fill="url(#waterSpriteBubbleGradient)" />
      <circle cx="50" cy="18" r="1" fill="url(#waterSpriteBubbleGradient)" />
      <circle cx="14" cy="10" r="1" fill="url(#waterSpriteBubbleGradient)" />

      {/* Surface tension lines on body */}
      <path d="M24 28 Q26 32 24 36" stroke="#A0D8FF" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M40 28 Q38 32 40 36" stroke="#A0D8FF" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Crown sparkle */}
      <circle cx="32" cy="10" r="1.5" fill="#FFFFFF" opacity="0.8" />
      <path d="M32 8 L33 6 M32 8 L31 6 M32 8 L32 5" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.6" />
    </svg>
  );
}
