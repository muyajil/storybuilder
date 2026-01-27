/**
 * Tiger Sprite Component
 * Enhanced with gradients, shading, and expressive features
 */

import type { SpriteProps } from '../types';

export function Tiger({ size = 64, color = '#FF8C00' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="tigerBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFA030" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#D06800" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="tigerHeadGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFA030" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#D06800" />
        </radialGradient>
        {/* Face white gradient */}
        <radialGradient id="tigerFaceGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F8F8F8" />
          <stop offset="100%" stopColor="#E8E8E8" />
        </radialGradient>
        {/* Ear inner gradient */}
        <radialGradient id="tigerEarGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8E8E8" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="tigerNoseGradient" cx="30%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FF8090" />
          <stop offset="100%" stopColor="#FF69B4" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="tigerEyeGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="58" rx="22" ry="4" fill="#000" opacity="0.2" />

      {/* Body */}
      <ellipse cx="32" cy="40" rx="20" ry="16" fill="url(#tigerBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="26" cy="34" rx="10" ry="8" fill="#FFA030" opacity="0.4" />

      {/* Body stripes */}
      <path d="M20 34 L16 46" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M44 34 L48 46" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 30 L32 48" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M26 32 L24 44" stroke="black" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 32 L40 44" stroke="black" strokeWidth="2" strokeLinecap="round" />

      {/* Belly */}
      <ellipse cx="32" cy="46" rx="12" ry="6" fill="#F8E8D8" opacity="0.5" />

      {/* Head */}
      <circle cx="32" cy="22" r="16" fill="url(#tigerHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="26" cy="16" rx="6" ry="5" fill="#FFA030" opacity="0.5" />

      {/* Head stripes */}
      <path d="M24 14 L20 26" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M40 14 L44 26" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 10 L32 18" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M28 12 L26 20" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M36 12 L38 20" stroke="black" strokeWidth="1.5" strokeLinecap="round" />

      {/* Ears */}
      <circle cx="18" cy="12" r="6" fill="url(#tigerBodyGradient)" />
      <circle cx="46" cy="12" r="6" fill="url(#tigerBodyGradient)" />

      {/* Ear inner */}
      <circle cx="18" cy="12" r="3.5" fill="url(#tigerEarGradient)" />
      <circle cx="46" cy="12" r="3.5" fill="url(#tigerEarGradient)" />

      {/* Ear stripes */}
      <path d="M16 10 L16 14" stroke="black" strokeWidth="1" strokeLinecap="round" />
      <path d="M44 10 L44 14" stroke="black" strokeWidth="1" strokeLinecap="round" />

      {/* Face white patches */}
      <ellipse cx="32" cy="28" rx="8" ry="6" fill="url(#tigerFaceGradient)" />

      {/* Eye patches white */}
      <ellipse cx="26" cy="20" rx="4" ry="3.5" fill="url(#tigerFaceGradient)" />
      <ellipse cx="38" cy="20" rx="4" ry="3.5" fill="url(#tigerFaceGradient)" />

      {/* Eyes */}
      <circle cx="26" cy="20" r="3" fill="white" />
      <circle cx="38" cy="20" r="3" fill="white" />

      {/* Pupils */}
      <circle cx="26" cy="20" r="1.8" fill="url(#tigerEyeGradient)" />
      <circle cx="38" cy="20" r="1.8" fill="url(#tigerEyeGradient)" />

      {/* Eye shine */}
      <circle cx="26.5" cy="19.5" r="0.7" fill="white" />
      <circle cx="38.5" cy="19.5" r="0.7" fill="white" />

      {/* Nose */}
      <ellipse cx="32" cy="26" rx="3.5" ry="2.5" fill="url(#tigerNoseGradient)" />
      <ellipse cx="32" cy="25.5" rx="2" ry="1.5" fill="#FF8090" opacity="0.5" />

      {/* Nose highlight */}
      <ellipse cx="31" cy="25" rx="0.8" ry="0.5" fill="#FFA0A0" opacity="0.6" />

      {/* Mouth */}
      <path d="M32 28 L32 30" stroke="black" strokeWidth="1" strokeLinecap="round" />
      <path d="M28 30 Q32 34 36 30" stroke="black" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* Whisker dots */}
      <circle cx="24" cy="28" r="0.8" fill="black" opacity="0.4" />
      <circle cx="22" cy="30" r="0.8" fill="black" opacity="0.4" />
      <circle cx="24" cy="32" r="0.8" fill="black" opacity="0.4" />
      <circle cx="40" cy="28" r="0.8" fill="black" opacity="0.4" />
      <circle cx="42" cy="30" r="0.8" fill="black" opacity="0.4" />
      <circle cx="40" cy="32" r="0.8" fill="black" opacity="0.4" />

      {/* Whiskers */}
      <path d="M22 28 L12 26" stroke="#3a3a3a" strokeWidth="0.5" opacity="0.4" />
      <path d="M20 30 L10 30" stroke="#3a3a3a" strokeWidth="0.5" opacity="0.4" />
      <path d="M22 32 L12 34" stroke="#3a3a3a" strokeWidth="0.5" opacity="0.4" />
      <path d="M42 28 L52 26" stroke="#3a3a3a" strokeWidth="0.5" opacity="0.4" />
      <path d="M44 30 L54 30" stroke="#3a3a3a" strokeWidth="0.5" opacity="0.4" />
      <path d="M42 32 L52 34" stroke="#3a3a3a" strokeWidth="0.5" opacity="0.4" />

      {/* Cheek fluff */}
      <ellipse cx="20" cy="26" rx="3" ry="4" fill="#FFA030" opacity="0.3" />
      <ellipse cx="44" cy="26" rx="3" ry="4" fill="#FFA030" opacity="0.3" />

      {/* Tail */}
      <path d="M52 42 Q58 38 56 46 Q54 54 50 50" stroke="url(#tigerBodyGradient)" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M54 40 L54 44 M56 44 L56 48" stroke="black" strokeWidth="1.5" strokeLinecap="round" />

      {/* Front paws */}
      <ellipse cx="24" cy="54" rx="5" ry="3" fill="url(#tigerBodyGradient)" />
      <ellipse cx="40" cy="54" rx="5" ry="3" fill="url(#tigerBodyGradient)" />
      <ellipse cx="24" cy="53" rx="3" ry="2" fill="#F8E8D8" opacity="0.5" />
      <ellipse cx="40" cy="53" rx="3" ry="2" fill="#F8E8D8" opacity="0.5" />
    </svg>
  );
}
