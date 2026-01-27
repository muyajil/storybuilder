/**
 * VoltOrb Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function VoltOrb({ size = 64, color = '#FFFF00' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Energy aura gradient */}
        <radialGradient id="voltOrbAuraGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.5" />
          <stop offset="70%" stopColor="#FFE44D" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
        {/* Body outer gradient */}
        <radialGradient id="voltOrbOuterGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFF66" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
        {/* Body inner gradient */}
        <radialGradient id="voltOrbInnerGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="voltOrbEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Electric glow */}
        <radialGradient id="voltOrbGlowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFFF00" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="58" rx="16" ry="4" fill="#B8860B" opacity="0.3" />

      {/* Energy aura - pulsing effect */}
      <circle cx="32" cy="32" r="28" fill="url(#voltOrbAuraGradient)" />

      {/* Energy aura ring */}
      <circle cx="32" cy="32" r="26" stroke="#FFFF00" strokeWidth="0.5" fill="none" opacity="0.3" />

      {/* Body outer */}
      <circle cx="32" cy="32" r="22" fill="url(#voltOrbOuterGradient)" />

      {/* Body inner */}
      <circle cx="32" cy="32" r="18" fill="url(#voltOrbInnerGradient)" />

      {/* Body highlight */}
      <ellipse cx="26" cy="24" rx="8" ry="6" fill="#FFFF88" opacity="0.5" />

      {/* Lightning stripes - left side */}
      <path d="M14 32 L22 28 L18 32 L26 28" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 32 L21 29 L18 32 L24 29" stroke="#333" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />

      {/* Lightning stripes - right side */}
      <path d="M50 32 L42 28 L46 32 L38 28" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M49 32 L43 29 L46 32 L40 29" stroke="#333" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />

      {/* Eyes - white part */}
      <circle cx="26" cy="28" r="6" fill="white" />
      <circle cx="38" cy="28" r="6" fill="white" />

      {/* Eyes - pupils */}
      <circle cx="26" cy="28" r="4" fill="url(#voltOrbEyeGradient)" />
      <circle cx="38" cy="28" r="4" fill="url(#voltOrbEyeGradient)" />

      {/* Eye shine */}
      <circle cx="28" cy="26" r="1.5" fill="white" />
      <circle cx="40" cy="26" r="1.5" fill="white" />
      <circle cx="25" cy="29" r="0.8" fill="white" opacity="0.5" />
      <circle cx="37" cy="29" r="0.8" fill="white" opacity="0.5" />

      {/* Eyebrows - determined look */}
      <path d="M22 24 L28 22" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
      <path d="M42 24 L36 22" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />

      {/* Mouth - happy expression */}
      <path d="M26 40 Q32 46 38 40" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M27 41 Q32 45 37 41" stroke="#333" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.3" />

      {/* Energy dots - cardinal points */}
      <circle cx="32" cy="10" r="2.5" fill="url(#voltOrbGlowGradient)" />
      <circle cx="32" cy="10" r="1.5" fill="#FFF" />

      <circle cx="32" cy="54" r="2.5" fill="url(#voltOrbGlowGradient)" />
      <circle cx="32" cy="54" r="1.5" fill="#FFF" />

      <circle cx="10" cy="32" r="2.5" fill="url(#voltOrbGlowGradient)" />
      <circle cx="10" cy="32" r="1.5" fill="#FFF" />

      <circle cx="54" cy="32" r="2.5" fill="url(#voltOrbGlowGradient)" />
      <circle cx="54" cy="32" r="1.5" fill="#FFF" />

      {/* Additional energy sparks */}
      <circle cx="16" cy="16" r="1" fill="#FFF" opacity="0.6" />
      <circle cx="48" cy="16" r="1" fill="#FFF" opacity="0.6" />
      <circle cx="16" cy="48" r="1" fill="#FFF" opacity="0.6" />
      <circle cx="48" cy="48" r="1" fill="#FFF" opacity="0.6" />

      {/* Electric arcs */}
      <path d="M6 20 L10 22 L8 24" stroke="#FFFF88" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M58 20 L54 22 L56 24" stroke="#FFFF88" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M6 44 L10 42 L8 40" stroke="#FFFF88" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M58 44 L54 42 L56 40" stroke="#FFFF88" strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  );
}
