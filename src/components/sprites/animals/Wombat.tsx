/**
 * Wombat Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function Wombat({ size = 64, color = '#8B7355' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="wombatBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A08868" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#6B5340" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="wombatHeadGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#A08868" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#6B5340" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="wombatNoseGradient" cx="30%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="wombatEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Ear gradient */}
        <radialGradient id="wombatEarGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A08868" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="58" rx="22" ry="4" fill="#000" opacity="0.2" />

      {/* Body - chunky wombat body */}
      <ellipse cx="32" cy="42" rx="20" ry="14" fill="url(#wombatBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="26" cy="38" rx="10" ry="7" fill="#A08868" opacity="0.4" />

      {/* Body fur texture */}
      <path d="M22 40 Q24 44 22 48" stroke="#6B5340" strokeWidth="0.8" fill="none" opacity="0.3" />
      <path d="M32 38 Q34 44 32 50" stroke="#6B5340" strokeWidth="0.8" fill="none" opacity="0.3" />
      <path d="M42 40 Q40 44 42 48" stroke="#6B5340" strokeWidth="0.8" fill="none" opacity="0.3" />

      {/* Belly hint */}
      <ellipse cx="32" cy="48" rx="12" ry="6" fill="#9B8668" opacity="0.3" />

      {/* Head */}
      <circle cx="32" cy="26" r="14" fill="url(#wombatHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="28" cy="22" rx="6" ry="5" fill="#A08868" opacity="0.5" />

      {/* Forehead fur texture */}
      <path d="M26 20 Q28 18 30 20" stroke="#6B5340" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M34 20 Q36 18 38 20" stroke="#6B5340" strokeWidth="0.5" fill="none" opacity="0.3" />

      {/* Ears */}
      <circle cx="22" cy="16" r="4.5" fill="url(#wombatEarGradient)" />
      <circle cx="42" cy="16" r="4.5" fill="url(#wombatEarGradient)" />

      {/* Ear inner */}
      <circle cx="22" cy="16" r="2.5" fill="#9B8668" opacity="0.5" />
      <circle cx="42" cy="16" r="2.5" fill="#9B8668" opacity="0.5" />

      {/* Ear fur detail */}
      <path d="M20 14 L20 18" stroke="#6B5340" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M40 14 L40 18" stroke="#6B5340" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Eyes */}
      <circle cx="26" cy="24" r="3.5" fill="white" />
      <circle cx="38" cy="24" r="3.5" fill="white" />

      {/* Eye pupils */}
      <circle cx="26" cy="24" r="2.2" fill="url(#wombatEyeGradient)" />
      <circle cx="38" cy="24" r="2.2" fill="url(#wombatEyeGradient)" />

      {/* Eye shine */}
      <circle cx="27" cy="23" r="0.8" fill="white" />
      <circle cx="39" cy="23" r="0.8" fill="white" />
      <circle cx="25" cy="25" r="0.4" fill="white" opacity="0.5" />
      <circle cx="37" cy="25" r="0.4" fill="white" opacity="0.5" />

      {/* Eye outline */}
      <circle cx="26" cy="24" r="3.5" stroke="#6B5340" strokeWidth="0.5" fill="none" opacity="0.3" />
      <circle cx="38" cy="24" r="3.5" stroke="#6B5340" strokeWidth="0.5" fill="none" opacity="0.3" />

      {/* Big square-ish nose */}
      <ellipse cx="32" cy="32" rx="5" ry="4" fill="url(#wombatNoseGradient)" />

      {/* Nose highlight */}
      <ellipse cx="31" cy="31" rx="2" ry="1.5" fill="#4a4a4a" opacity="0.4" />

      {/* Nostrils */}
      <circle cx="30" cy="33" r="1" fill="#0a0a0a" />
      <circle cx="34" cy="33" r="1" fill="#0a0a0a" />

      {/* Mouth */}
      <path d="M28 36 Q32 38 36 36" stroke="#6B5340" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Cheek fur */}
      <ellipse cx="20" cy="28" rx="3" ry="4" fill="#A08868" opacity="0.3" />
      <ellipse cx="44" cy="28" rx="3" ry="4" fill="#A08868" opacity="0.3" />

      {/* Front paws */}
      <ellipse cx="22" cy="54" rx="5" ry="3" fill="url(#wombatBodyGradient)" />
      <ellipse cx="42" cy="54" rx="5" ry="3" fill="url(#wombatBodyGradient)" />

      {/* Paw highlights */}
      <ellipse cx="22" cy="53" rx="3" ry="2" fill="#A08868" opacity="0.4" />
      <ellipse cx="42" cy="53" rx="3" ry="2" fill="#A08868" opacity="0.4" />

      {/* Claws */}
      <path d="M18 55 L17 57" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 56 L22 58" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M26 55 L27 57" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M38 55 L37 57" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M42 56 L42 58" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M46 55 L47 57" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round" />

      {/* Tail stub (wombats have tiny tails) */}
      <circle cx="50" cy="46" r="3" fill="url(#wombatBodyGradient)" />
      <circle cx="50" cy="46" r="1.5" fill="#A08868" opacity="0.4" />
    </svg>
  );
}
