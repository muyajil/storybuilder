/**
 * MedicPup Sprite Component
 * Enhanced with gradients, detailed fur, and expressive features
 */

import type { SpriteProps } from '../types';

export function MedicPup({ size = 64, color = '#FF69B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Main fur gradient */}
        <linearGradient id="medicPupFurGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFAF0" />
          <stop offset="50%" stopColor="#F5F5DC" />
          <stop offset="100%" stopColor="#E8DCC8" />
        </linearGradient>
        {/* Pink patch gradient */}
        <linearGradient id="medicPupPinkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFB6C1" />
          <stop offset="100%" stopColor="#FF91A4" />
        </linearGradient>
        {/* Uniform gradient */}
        <linearGradient id="medicPupUniformGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF85B3" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#DB5C8C" />
        </linearGradient>
        {/* Snout gradient */}
        <radialGradient id="medicPupSnoutGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="medicPupNoseGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </radialGradient>
        {/* Cross gradient */}
        <linearGradient id="medicPupCrossGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
      </defs>

      {/* Head / Kopf */}
      <ellipse cx="32" cy="20" rx="17" ry="15" fill="url(#medicPupFurGradient)" />

      {/* Ears / Ohren */}
      <ellipse cx="13" cy="14" rx="7" ry="11" fill="url(#medicPupPinkGradient)" />
      <ellipse cx="51" cy="14" rx="7" ry="11" fill="url(#medicPupPinkGradient)" />
      <ellipse cx="13" cy="14" rx="4" ry="7" fill="#FFD1DC" opacity="0.5" />
      <ellipse cx="51" cy="14" rx="4" ry="7" fill="#FFD1DC" opacity="0.5" />

      {/* Fur pattern / Fell-Muster */}
      <ellipse cx="23" cy="16" rx="7" ry="6" fill="url(#medicPupPinkGradient)" />
      <ellipse cx="41" cy="16" rx="7" ry="6" fill="url(#medicPupPinkGradient)" />

      {/* Head highlight */}
      <ellipse cx="32" cy="16" rx="10" ry="8" fill="#FFFFFF" opacity="0.3" />

      {/* Snout / Schnauze */}
      <ellipse cx="32" cy="26" rx="9" ry="7" fill="url(#medicPupSnoutGradient)" />

      {/* Nose / Nase */}
      <ellipse cx="32" cy="24" rx="5" ry="3.5" fill="url(#medicPupNoseGradient)" />
      <ellipse cx="31" cy="23" rx="1.5" ry="1" fill="#666666" opacity="0.4" />

      {/* Mouth */}
      <path d="M32 27 L32 30" stroke="#333" strokeWidth="1" strokeLinecap="round" />
      <path d="M28 30 Q32 33 36 30" stroke="#333" strokeWidth="1" fill="none" />

      {/* Tongue */}
      <ellipse cx="32" cy="32" rx="3" ry="2" fill="#FF91A4" />

      {/* Eyes / Augen */}
      <circle cx="24" cy="18" r="5" fill="white" />
      <circle cx="40" cy="18" r="5" fill="white" />
      <circle cx="24" cy="18" r="3" fill="#3D2314" />
      <circle cx="40" cy="18" r="3" fill="#3D2314" />
      <circle cx="24" cy="18" r="1.5" fill="black" />
      <circle cx="40" cy="18" r="1.5" fill="black" />
      <circle cx="25" cy="17" r="1.2" fill="white" />
      <circle cx="41" cy="17" r="1.2" fill="white" />

      {/* Happy eyebrows */}
      <path d="M20 14 Q24 12 28 14" stroke="#333" strokeWidth="1" fill="none" />
      <path d="M36 14 Q40 12 44 14" stroke="#333" strokeWidth="1" fill="none" />

      {/* Body / Körper */}
      <rect x="19" y="34" width="26" height="19" fill="url(#medicPupUniformGradient)" rx="5" />

      {/* Uniform shading */}
      <rect x="19" y="34" width="9" height="19" fill="#DB5C8C" opacity="0.3" rx="5" />

      {/* Collar */}
      <rect x="24" y="34" width="16" height="4" fill="#FF85B3" />

      {/* Medical cross / Kreuz */}
      <rect x="28" y="38" width="8" height="14" fill="url(#medicPupCrossGradient)" rx="1" />
      <rect x="25" y="43" width="14" height="4" fill="url(#medicPupCrossGradient)" rx="1" />

      {/* Cross shadow */}
      <rect x="28" y="38" width="8" height="14" fill="#DB5C8C" opacity="0.1" rx="1" />

      {/* Legs / Beine */}
      <rect x="21" y="51" width="9" height="11" fill="url(#medicPupFurGradient)" rx="4" />
      <rect x="34" y="51" width="9" height="11" fill="url(#medicPupFurGradient)" rx="4" />

      {/* Paw pads */}
      <ellipse cx="25" cy="62" rx="5" ry="2" fill="#E8DCC8" />
      <ellipse cx="39" cy="62" rx="5" ry="2" fill="#E8DCC8" />
      <circle cx="23" cy="61" r="1" fill="#FFB6C1" />
      <circle cx="27" cy="61" r="1" fill="#FFB6C1" />
      <circle cx="37" cy="61" r="1" fill="#FFB6C1" />
      <circle cx="41" cy="61" r="1" fill="#FFB6C1" />

      {/* Tail */}
      <ellipse cx="48" cy="42" rx="4" ry="6" fill="url(#medicPupFurGradient)" transform="rotate(20 48 42)" />
    </svg>
  );
}
