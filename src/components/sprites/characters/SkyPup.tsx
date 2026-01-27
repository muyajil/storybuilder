/**
 * SkyPup Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function SkyPup({ size = 64, color = '#00CED1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Fur gradient */}
        <radialGradient id="skyPupFurGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="70%" stopColor="#F5DEB3" />
          <stop offset="100%" stopColor="#DEB887" />
        </radialGradient>
        {/* Inner ear gradient */}
        <radialGradient id="skyPupEarGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#E8C9A0" />
          <stop offset="70%" stopColor="#D2B48C" />
          <stop offset="100%" stopColor="#C4A67C" />
        </radialGradient>
        {/* Goggles gradient */}
        <linearGradient id="skyPupGogglesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF85B3" />
          <stop offset="50%" stopColor="#FF69B4" />
          <stop offset="100%" stopColor="#DB5A9C" />
        </linearGradient>
        {/* Goggles lens gradient */}
        <radialGradient id="skyPupLensGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE4F0" />
          <stop offset="50%" stopColor="#FFB6D9" />
          <stop offset="100%" stopColor="#FF69B4" />
        </radialGradient>
        {/* Uniform gradient */}
        <linearGradient id="skyPupUniformGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#20E8E8" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#00A5A5" />
        </linearGradient>
        {/* Nose gradient */}
        <radialGradient id="skyPupNoseGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#444" />
          <stop offset="70%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#000" />
        </radialGradient>
        {/* Snout gradient */}
        <radialGradient id="skyPupSnoutGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFF5E6" />
          <stop offset="70%" stopColor="#FFEFD5" />
          <stop offset="100%" stopColor="#F5DEB3" />
        </radialGradient>
      </defs>

      {/* Aviator goggles on forehead */}
      <ellipse cx="24" cy="14" rx="9" ry="7" fill="url(#skyPupGogglesGradient)" />
      <ellipse cx="40" cy="14" rx="9" ry="7" fill="url(#skyPupGogglesGradient)" />
      <rect x="31" y="12" width="2" height="4" fill="url(#skyPupGogglesGradient)" />
      {/* Goggle lenses */}
      <ellipse cx="24" cy="14" rx="6" ry="5" fill="url(#skyPupLensGradient)" />
      <ellipse cx="40" cy="14" rx="6" ry="5" fill="url(#skyPupLensGradient)" />
      {/* Goggle shine */}
      <ellipse cx="22" cy="12" rx="2" ry="1.5" fill="white" opacity="0.5" />
      <ellipse cx="38" cy="12" rx="2" ry="1.5" fill="white" opacity="0.5" />
      {/* Goggle strap */}
      <path d="M15 14 Q10 14 8 18" stroke="#FF69B4" strokeWidth="2" fill="none" />
      <path d="M49 14 Q54 14 56 18" stroke="#FF69B4" strokeWidth="2" fill="none" />

      {/* Ears */}
      <ellipse cx="14" cy="18" rx="7" ry="12" fill="url(#skyPupFurGradient)" />
      <ellipse cx="50" cy="18" rx="7" ry="12" fill="url(#skyPupFurGradient)" />
      {/* Inner ears */}
      <ellipse cx="14" cy="20" rx="4" ry="8" fill="url(#skyPupEarGradient)" />
      <ellipse cx="50" cy="20" rx="4" ry="8" fill="url(#skyPupEarGradient)" />

      {/* Head */}
      <ellipse cx="32" cy="26" rx="17" ry="15" fill="url(#skyPupFurGradient)" />
      {/* Cheek fluff */}
      <ellipse cx="18" cy="30" rx="4" ry="3" fill="#FFF8DC" opacity="0.6" />
      <ellipse cx="46" cy="30" rx="4" ry="3" fill="#FFF8DC" opacity="0.6" />

      {/* Snout */}
      <ellipse cx="32" cy="32" rx="9" ry="7" fill="url(#skyPupSnoutGradient)" />

      {/* Nose */}
      <ellipse cx="32" cy="28" rx="5" ry="4" fill="url(#skyPupNoseGradient)" />
      {/* Nose shine */}
      <ellipse cx="30" cy="27" rx="1.5" ry="1" fill="#555" opacity="0.5" />

      {/* Eyes */}
      <ellipse cx="24" cy="24" rx="5" ry="4" fill="white" />
      <ellipse cx="40" cy="24" rx="5" ry="4" fill="white" />
      {/* Pupils */}
      <circle cx="25" cy="24" r="2.5" fill="black" />
      <circle cx="41" cy="24" r="2.5" fill="black" />
      {/* Eye shine */}
      <circle cx="24" cy="23" r="1" fill="white" />
      <circle cx="40" cy="23" r="1" fill="white" />

      {/* Happy mouth */}
      <path d="M28 34 Q32 37 36 34" stroke="#8B4513" strokeWidth="1.5" fill="none" />
      {/* Tongue */}
      <ellipse cx="32" cy="36" rx="3" ry="2" fill="#FF6B6B" />

      {/* Pilot uniform body */}
      <rect x="19" y="40" width="26" height="18" fill="url(#skyPupUniformGradient)" rx="4" />
      {/* Uniform collar */}
      <path d="M22 40 L26 44 L32 40 L38 44 L42 40" stroke="#00A5A5" strokeWidth="1.5" fill="none" />

      {/* Wing emblem */}
      <polygon points="32,44 24,50 32,48 40,50" fill="white" />
      <polygon points="32,45 28,49 32,47.5 36,49" fill="#FFD700" />
      {/* Center star */}
      <circle cx="32" cy="47" r="1.5" fill="#FFD700" />

      {/* Uniform buttons */}
      <circle cx="32" cy="53" r="1" fill="#B0B0B0" />
      <circle cx="32" cy="56" r="1" fill="#B0B0B0" />

      {/* Legs */}
      <rect x="21" y="56" width="9" height="10" fill="url(#skyPupFurGradient)" rx="4" />
      <rect x="34" y="56" width="9" height="10" fill="url(#skyPupFurGradient)" rx="4" />

      {/* Paw pads */}
      <ellipse cx="25.5" cy="64" rx="4" ry="2" fill="#DEB887" />
      <ellipse cx="38.5" cy="64" rx="4" ry="2" fill="#DEB887" />
      {/* Toe beans */}
      <circle cx="23" cy="63" r="1" fill="#C4A67C" />
      <circle cx="25.5" cy="62" r="1" fill="#C4A67C" />
      <circle cx="28" cy="63" r="1" fill="#C4A67C" />
      <circle cx="36" cy="63" r="1" fill="#C4A67C" />
      <circle cx="38.5" cy="62" r="1" fill="#C4A67C" />
      <circle cx="41" cy="63" r="1" fill="#C4A67C" />
    </svg>
  );
}
