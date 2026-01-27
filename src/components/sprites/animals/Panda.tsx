/**
 * Panda Sprite Component
 * Enhanced with gradients, fur texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Panda({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* White fur gradient */}
        <radialGradient id="pandaWhiteGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="80%" stopColor="#F0F0F0" stopOpacity="1" />
          <stop offset="100%" stopColor="#E0E0E0" stopOpacity="1" />
        </radialGradient>
        {/* Black fur gradient */}
        <radialGradient id="pandaBlackGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#2D2D2D" stopOpacity="1" />
          <stop offset="100%" stopColor="#1a1a1a" stopOpacity="1" />
        </radialGradient>
        {/* Eye patch gradient */}
        <radialGradient id="pandaEyePatchGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2D2D2D" stopOpacity="1" />
          <stop offset="100%" stopColor="#0D0D0D" stopOpacity="1" />
        </radialGradient>
        {/* Highlight */}
        <radialGradient id="pandaHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="pandaNoseGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#3D3D3D" stopOpacity="1" />
          <stop offset="100%" stopColor="#1a1a1a" stopOpacity="1" />
        </radialGradient>
      </defs>

      {/* Body */}
      <ellipse cx="32" cy="44" rx="18" ry="16" fill="url(#pandaWhiteGradient)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="40" rx="10" ry="8" fill="url(#pandaHighlight)" />

      {/* Head */}
      <circle cx="32" cy="26" r="18" fill="url(#pandaWhiteGradient)" />

      {/* Head highlight */}
      <ellipse cx="26" cy="18" rx="10" ry="8" fill="url(#pandaHighlight)" />

      {/* Ears */}
      <circle cx="14" cy="14" r="8" fill="url(#pandaBlackGradient)" />
      <circle cx="50" cy="14" r="8" fill="url(#pandaBlackGradient)" />
      <circle cx="14" cy="14" r="4" fill="#2D2D2D" opacity="0.5" />
      <circle cx="50" cy="14" r="4" fill="#2D2D2D" opacity="0.5" />

      {/* Eye patches */}
      <ellipse cx="22" cy="26" rx="9" ry="11" fill="url(#pandaEyePatchGradient)" transform="rotate(-10 22 26)" />
      <ellipse cx="42" cy="26" rx="9" ry="11" fill="url(#pandaEyePatchGradient)" transform="rotate(10 42 26)" />

      {/* Eyes */}
      <ellipse cx="22" cy="26" rx="5" ry="4.5" fill="white" />
      <ellipse cx="42" cy="26" rx="5" ry="4.5" fill="white" />
      <circle cx="23" cy="26" r="2.5" fill="#1a1a1a" />
      <circle cx="43" cy="26" r="2.5" fill="#1a1a1a" />

      {/* Eye highlights */}
      <circle cx="21" cy="24" r="1.5" fill="white" />
      <circle cx="41" cy="24" r="1.5" fill="white" />
      <circle cx="24" cy="27" r="0.8" fill="white" opacity="0.5" />
      <circle cx="44" cy="27" r="0.8" fill="white" opacity="0.5" />

      {/* Nose */}
      <ellipse cx="32" cy="34" rx="4" ry="3" fill="url(#pandaNoseGradient)" />
      <ellipse cx="32" cy="33" rx="1.5" ry="0.8" fill="white" opacity="0.3" />

      {/* Mouth */}
      <path d="M32 37 L32 40" stroke="#1a1a1a" strokeWidth="1.5" />
      <path d="M28 40 Q32 44 36 40" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Cheek blush */}
      <ellipse cx="16" cy="32" rx="3" ry="2" fill="#FFB6C1" opacity="0.4" />
      <ellipse cx="48" cy="32" rx="3" ry="2" fill="#FFB6C1" opacity="0.4" />

      {/* Front paws/legs */}
      <ellipse cx="20" cy="56" rx="7" ry="5" fill="url(#pandaBlackGradient)" />
      <ellipse cx="44" cy="56" rx="7" ry="5" fill="url(#pandaBlackGradient)" />

      {/* Paw pads */}
      <ellipse cx="20" cy="57" rx="3" ry="2" fill="#3D3D3D" />
      <ellipse cx="44" cy="57" rx="3" ry="2" fill="#3D3D3D" />
    </svg>
  );
}
