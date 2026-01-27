/**
 * PhantomJelly Sprite Component
 * Enhanced with gradients, ethereal glow effects, and ghostly features
 */

import type { SpriteProps } from '../types';

export function PhantomJelly({ size = 64, color = '#9932CC' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Ghost body gradient */}
        <radialGradient id="phantomJellyBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="0.7" />
          <stop offset="60%" stopColor="#8B008B" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4B0082" stopOpacity="0.4" />
        </radialGradient>
        {/* Inner glow */}
        <radialGradient id="phantomJellyInnerGlow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#DDA0DD" stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0.3" />
        </radialGradient>
        {/* Tentacle gradient */}
        <linearGradient id="phantomJellyTentacleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor="#4B0082" stopOpacity="0.2" />
        </linearGradient>
        {/* Eye glow */}
        <radialGradient id="phantomJellyEyeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="70%" stopColor="#E6E6FA" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D8BFD8" stopOpacity="0.8" />
        </radialGradient>
        {/* Sparkle glow */}
        <radialGradient id="phantomJellySparkle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.8" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Outer ethereal glow */}
        <radialGradient id="phantomJellyOuterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="70%" stopColor={color} stopOpacity="0.1" />
          <stop offset="100%" stopColor={color} stopOpacity="0.3" />
        </radialGradient>
      </defs>

      {/* Outer ethereal glow aura */}
      <ellipse cx="32" cy="28" rx="26" ry="22" fill="url(#phantomJellyOuterGlow)" />

      {/* Ghost tentacles */}
      <path d="M16 36 Q10 48 16 62" stroke="url(#phantomJellyTentacleGradient)" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M24 38 Q20 52 26 66" stroke="url(#phantomJellyTentacleGradient)" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M32 40 Q32 56 32 68" stroke="url(#phantomJellyTentacleGradient)" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M40 38 Q44 52 38 66" stroke="url(#phantomJellyTentacleGradient)" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M48 36 Q54 48 48 62" stroke="url(#phantomJellyTentacleGradient)" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.6" />

      {/* Tentacle bioluminescent spots */}
      <circle cx="13" cy="50" r="1.5" fill="#DDA0DD" opacity="0.5" />
      <circle cx="15" cy="58" r="1" fill="#DDA0DD" opacity="0.4" />
      <circle cx="22" cy="52" r="1.5" fill="#DDA0DD" opacity="0.5" />
      <circle cx="25" cy="60" r="1" fill="#DDA0DD" opacity="0.4" />
      <circle cx="32" cy="52" r="1.5" fill="#DDA0DD" opacity="0.5" />
      <circle cx="32" cy="62" r="1" fill="#DDA0DD" opacity="0.4" />
      <circle cx="42" cy="52" r="1.5" fill="#DDA0DD" opacity="0.5" />
      <circle cx="39" cy="60" r="1" fill="#DDA0DD" opacity="0.4" />
      <circle cx="51" cy="50" r="1.5" fill="#DDA0DD" opacity="0.5" />
      <circle cx="49" cy="58" r="1" fill="#DDA0DD" opacity="0.4" />

      {/* Ghost bell - main body */}
      <ellipse cx="32" cy="24" rx="18" ry="16" fill="url(#phantomJellyBodyGradient)" />

      {/* Inner bell layer */}
      <ellipse cx="32" cy="28" rx="14" ry="10" fill="url(#phantomJellyInnerGlow)" />

      {/* Surface texture/veins */}
      <path d="M20 20 Q24 28 20 36" stroke="#4B0082" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M32 16 Q34 24 32 32" stroke="#4B0082" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M44 20 Q40 28 44 36" stroke="#4B0082" strokeWidth="0.5" fill="none" opacity="0.3" />

      {/* Eyes - ethereal glow */}
      <ellipse cx="26" cy="22" rx="6" ry="5" fill="url(#phantomJellyEyeGlow)" />
      <ellipse cx="38" cy="22" rx="6" ry="5" fill="url(#phantomJellyEyeGlow)" />

      {/* Pupils - deep purple */}
      <ellipse cx="26" cy="22" rx="3.5" ry="3" fill="#4B0082" />
      <ellipse cx="38" cy="22" rx="3.5" ry="3" fill="#4B0082" />

      {/* Eye highlights */}
      <circle cx="24" cy="20" r="1.5" fill="white" opacity="0.9" />
      <circle cx="36" cy="20" r="1.5" fill="white" opacity="0.9" />
      <circle cx="27" cy="23" r="0.8" fill="white" opacity="0.5" />
      <circle cx="39" cy="23" r="0.8" fill="white" opacity="0.5" />

      {/* Mouth - ghostly smile */}
      <ellipse cx="32" cy="30" rx="4" ry="2.5" fill="#4B0082" opacity="0.4" />
      <path d="M29 30 Q32 33 35 30" stroke="#4B0082" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Ghost sparkles - floating around */}
      <circle cx="18" cy="14" r="2.5" fill="url(#phantomJellySparkle)" />
      <circle cx="46" cy="12" r="2" fill="url(#phantomJellySparkle)" />
      <circle cx="32" cy="8" r="1.5" fill="url(#phantomJellySparkle)" />
      <circle cx="52" cy="24" r="1.5" fill="url(#phantomJellySparkle)" />
      <circle cx="12" cy="26" r="1.5" fill="url(#phantomJellySparkle)" />

      {/* Star-like sparkles */}
      <path d="M10 18 L12 20 L10 22 L8 20 Z" fill="white" opacity="0.4" />
      <path d="M54 18 L56 20 L54 22 L52 20 Z" fill="white" opacity="0.4" />
      <path d="M32 4 L33 6 L32 8 L31 6 Z" fill="white" opacity="0.5" />
    </svg>
  );
}
