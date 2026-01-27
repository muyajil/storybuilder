/**
 * Chimpanzee Sprite Component
 * Enhanced with gradients, fur texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Chimpanzee({ size = 64, color = '#4a3728' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="chimpBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#5a4738" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="chimpHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#5a4738" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Face skin gradient */}
        <radialGradient id="chimpFaceGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F5DEB3" />
          <stop offset="100%" stopColor="#DEB887" />
        </radialGradient>
        {/* Ear gradient */}
        <radialGradient id="chimpEarGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8D4B8" />
          <stop offset="100%" stopColor="#DEB887" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="chimpEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#6B4423" />
          <stop offset="100%" stopColor="#3a2010" />
        </radialGradient>
        {/* Fur shine */}
        <linearGradient id="chimpShineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.15" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Fur texture */}
        <pattern id="chimpFurPattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <path d="M0 2 Q2 0 4 2" stroke={color} strokeWidth="0.4" fill="none" opacity="0.3" />
        </pattern>
      </defs>

      {/* Arms */}
      <ellipse cx="10" cy="42" rx="6" ry="14" fill="url(#chimpBodyGradient)" />
      <ellipse cx="54" cy="42" rx="6" ry="14" fill="url(#chimpBodyGradient)" />
      {/* Hands */}
      <ellipse cx="10" cy="54" rx="5" ry="4" fill="url(#chimpFaceGradient)" />
      <ellipse cx="54" cy="54" rx="5" ry="4" fill="url(#chimpFaceGradient)" />
      {/* Fingers */}
      <g fill="#DEB887">
        <ellipse cx="7" cy="56" rx="1.5" ry="2" />
        <ellipse cx="10" cy="57" rx="1.5" ry="2" />
        <ellipse cx="13" cy="56" rx="1.5" ry="2" />
        <ellipse cx="51" cy="56" rx="1.5" ry="2" />
        <ellipse cx="54" cy="57" rx="1.5" ry="2" />
        <ellipse cx="57" cy="56" rx="1.5" ry="2" />
      </g>

      {/* Body */}
      <ellipse cx="32" cy="46" rx="16" ry="16" fill="url(#chimpBodyGradient)" />
      {/* Body fur texture */}
      <ellipse cx="32" cy="46" rx="16" ry="16" fill="url(#chimpFurPattern)" />
      {/* Body shine */}
      <ellipse cx="26" cy="40" rx="8" ry="6" fill="url(#chimpShineGradient)" />
      {/* Belly - lighter */}
      <ellipse cx="32" cy="50" rx="10" ry="8" fill="#5a4738" opacity="0.3" />

      {/* Feet */}
      <ellipse cx="22" cy="60" rx="6" ry="4" fill="url(#chimpFaceGradient)" />
      <ellipse cx="42" cy="60" rx="6" ry="4" fill="url(#chimpFaceGradient)" />
      {/* Toes */}
      <g fill="#DEB887">
        <ellipse cx="18" cy="62" rx="1.5" ry="2" />
        <ellipse cx="22" cy="63" rx="1.5" ry="2" />
        <ellipse cx="26" cy="62" rx="1.5" ry="2" />
        <ellipse cx="38" cy="62" rx="1.5" ry="2" />
        <ellipse cx="42" cy="63" rx="1.5" ry="2" />
        <ellipse cx="46" cy="62" rx="1.5" ry="2" />
      </g>

      {/* Head */}
      <circle cx="32" cy="22" r="16" fill="url(#chimpHeadGradient)" />
      {/* Head fur texture */}
      <circle cx="32" cy="22" r="16" fill="url(#chimpFurPattern)" />
      {/* Head shine */}
      <ellipse cx="26" cy="14" rx="6" ry="4" fill="url(#chimpShineGradient)" />

      {/* Ears - large and prominent */}
      <circle cx="14" cy="22" r="8" fill={color} />
      <circle cx="50" cy="22" r="8" fill={color} />
      {/* Ear inner */}
      <circle cx="14" cy="22" r="5" fill="url(#chimpEarGradient)" />
      <circle cx="50" cy="22" r="5" fill="url(#chimpEarGradient)" />
      {/* Ear detail */}
      <path d="M12 20 Q14 22 12 24" stroke="#C4A484" strokeWidth="0.5" fill="none" />
      <path d="M52 20 Q50 22 52 24" stroke="#C4A484" strokeWidth="0.5" fill="none" />

      {/* Face - skin colored area */}
      <ellipse cx="32" cy="26" rx="12" ry="10" fill="url(#chimpFaceGradient)" />

      {/* Brow ridge */}
      <path d="M22 18 Q32 14 42 18" fill={color} />
      <path d="M24 18 Q32 16 40 18" fill={color} opacity="0.5" />

      {/* Eyes - expressive */}
      <ellipse cx="26" cy="22" rx="3.5" ry="4" fill="white" />
      <ellipse cx="38" cy="22" rx="3.5" ry="4" fill="white" />
      <ellipse cx="26" cy="22" rx="2.5" ry="3" fill="url(#chimpEyeGradient)" />
      <ellipse cx="38" cy="22" rx="2.5" ry="3" fill="url(#chimpEyeGradient)" />
      {/* Eye shine */}
      <circle cx="25" cy="21" r="1" fill="white" />
      <circle cx="37" cy="21" r="1" fill="white" />
      <circle cx="27" cy="23" r="0.5" fill="white" opacity="0.5" />
      <circle cx="39" cy="23" r="0.5" fill="white" opacity="0.5" />

      {/* Nose - wide and flat */}
      <ellipse cx="32" cy="28" rx="5" ry="4" fill="#C4A484" />
      {/* Nostrils */}
      <ellipse cx="30" cy="29" rx="2" ry="1.5" fill="#8B7355" />
      <ellipse cx="34" cy="29" rx="2" ry="1.5" fill="#8B7355" />
      {/* Nose highlight */}
      <ellipse cx="32" cy="27" rx="2" ry="1" fill="white" opacity="0.2" />

      {/* Mouth - friendly smile */}
      <path d="M26 34 Q32 40 38 34" stroke="#5a4030" strokeWidth="2" fill="none" />
      {/* Upper lip detail */}
      <path d="M28 32 Q32 34 36 32" stroke="#C4A484" strokeWidth="1" fill="none" />

      {/* Wrinkles around mouth */}
      <g stroke="#C4A484" strokeWidth="0.5" opacity="0.4">
        <path d="M24 30 Q22 32 24 34" fill="none" />
        <path d="M40 30 Q42 32 40 34" fill="none" />
      </g>

      {/* Hair tuft on top */}
      <g fill={color}>
        <ellipse cx="28" cy="8" rx="3" ry="4" />
        <ellipse cx="32" cy="6" rx="3" ry="5" />
        <ellipse cx="36" cy="8" rx="3" ry="4" />
      </g>

      {/* Cheek blush */}
      <ellipse cx="22" cy="28" rx="3" ry="2" fill="#FFB6C1" opacity="0.2" />
      <ellipse cx="42" cy="28" rx="3" ry="2" fill="#FFB6C1" opacity="0.2" />
    </svg>
  );
}
