/**
 * Octopus Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function Octopus({ size = 64, color = '#9932CC' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="octopusBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="60%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor="#4B0082" stopOpacity="1" />
        </radialGradient>
        {/* Highlight gradient */}
        <radialGradient id="octopusHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Tentacle gradient */}
        <linearGradient id="octopusTentacleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#4B0082" stopOpacity="0.8" />
        </linearGradient>
        {/* Eye shine */}
        <radialGradient id="octopusEyeShine" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="#E8E8E8" stopOpacity="1" />
        </radialGradient>
      </defs>

      {/* Tentacles with suckers */}
      <g>
        {/* Left outer tentacle */}
        <path d="M12 36 Q4 44 8 56 Q12 60 16 52" stroke="url(#octopusTentacleGradient)" strokeWidth="5" fill="none" strokeLinecap="round" />
        <circle cx="9" cy="48" r="1.5" fill="#E6E6FA" opacity="0.7" />
        <circle cx="11" cy="52" r="1.5" fill="#E6E6FA" opacity="0.7" />

        {/* Left inner tentacle */}
        <path d="M20 40 Q12 52 18 60 Q24 64 26 54" stroke="url(#octopusTentacleGradient)" strokeWidth="5" fill="none" strokeLinecap="round" />
        <circle cx="17" cy="52" r="1.5" fill="#E6E6FA" opacity="0.7" />
        <circle cx="20" cy="58" r="1.5" fill="#E6E6FA" opacity="0.7" />

        {/* Center left tentacle */}
        <path d="M28 42 Q26 56 24 64" stroke="url(#octopusTentacleGradient)" strokeWidth="5" fill="none" strokeLinecap="round" />
        <circle cx="27" cy="54" r="1.5" fill="#E6E6FA" opacity="0.7" />
        <circle cx="25" cy="60" r="1.5" fill="#E6E6FA" opacity="0.7" />

        {/* Center right tentacle */}
        <path d="M36 42 Q38 56 40 64" stroke="url(#octopusTentacleGradient)" strokeWidth="5" fill="none" strokeLinecap="round" />
        <circle cx="37" cy="54" r="1.5" fill="#E6E6FA" opacity="0.7" />
        <circle cx="39" cy="60" r="1.5" fill="#E6E6FA" opacity="0.7" />

        {/* Right inner tentacle */}
        <path d="M44 40 Q52 52 46 60 Q40 64 38 54" stroke="url(#octopusTentacleGradient)" strokeWidth="5" fill="none" strokeLinecap="round" />
        <circle cx="47" cy="52" r="1.5" fill="#E6E6FA" opacity="0.7" />
        <circle cx="44" cy="58" r="1.5" fill="#E6E6FA" opacity="0.7" />

        {/* Right outer tentacle */}
        <path d="M52 36 Q60 44 56 56 Q52 60 48 52" stroke="url(#octopusTentacleGradient)" strokeWidth="5" fill="none" strokeLinecap="round" />
        <circle cx="55" cy="48" r="1.5" fill="#E6E6FA" opacity="0.7" />
        <circle cx="53" cy="52" r="1.5" fill="#E6E6FA" opacity="0.7" />
      </g>

      {/* Body */}
      <ellipse cx="32" cy="26" rx="20" ry="18" fill="url(#octopusBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="20" rx="12" ry="10" fill="url(#octopusHighlight)" />

      {/* Body texture spots */}
      <circle cx="20" cy="30" r="2" fill="#8B008B" opacity="0.3" />
      <circle cx="44" cy="28" r="2.5" fill="#8B008B" opacity="0.3" />
      <circle cx="36" cy="34" r="1.5" fill="#8B008B" opacity="0.3" />

      {/* Eyes */}
      <ellipse cx="24" cy="24" rx="7" ry="6" fill="url(#octopusEyeShine)" />
      <ellipse cx="40" cy="24" rx="7" ry="6" fill="url(#octopusEyeShine)" />

      {/* Pupils */}
      <circle cx="25" cy="24" r="3.5" fill="#1a1a1a" />
      <circle cx="41" cy="24" r="3.5" fill="#1a1a1a" />

      {/* Eye highlights */}
      <circle cx="23" cy="22" r="1.5" fill="white" />
      <circle cx="39" cy="22" r="1.5" fill="white" />
      <circle cx="26" cy="25" r="0.8" fill="white" opacity="0.6" />
      <circle cx="42" cy="25" r="0.8" fill="white" opacity="0.6" />

      {/* Cute smile */}
      <path d="M28 32 Q32 36 36 32" stroke="#4B0082" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}
