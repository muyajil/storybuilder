/**
 * Dog Sprite Component
 * Enhanced with gradients, fur texture, and friendly expression
 */

import type { SpriteProps } from '../types';

export function Dog({ size = 64, color = '#D2691E' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="dogBodyGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#E0975E" />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor="#8B4513" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="dogHeadGrad" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#E0975E" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#A0522D" />
        </radialGradient>
        {/* Snout gradient */}
        <radialGradient id="dogSnoutGrad" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#F5DEB3" />
          <stop offset="70%" stopColor="#DEB887" />
          <stop offset="100%" stopColor="#C8A070" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="dogNoseGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="dogEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#4a3728" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* Tail gradient */}
        <linearGradient id="dogTailGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#A0522D" />
        </linearGradient>
        {/* Leg gradient */}
        <linearGradient id="dogLegGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#8B4513" />
        </linearGradient>
      </defs>

      {/* Body with gradient */}
      <ellipse cx="32" cy="42" rx="18" ry="14" fill="url(#dogBodyGrad)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="38" rx="10" ry="6" fill="#E0A060" opacity="0.3" />
      {/* Body shadow */}
      <ellipse cx="34" cy="50" rx="14" ry="4" fill="#6B4226" opacity="0.2" />

      {/* Chest marking */}
      <ellipse cx="38" cy="46" rx="6" ry="5" fill="#F5DEB3" opacity="0.7" />

      {/* Tail with gradient */}
      <path d="M50 42 Q58 36 54 48 Q52 54 48 50" fill="url(#dogBodyGrad)" />
      {/* Tail highlight */}
      <path d="M52 40 Q56 38 54 44" stroke="#E0A060" strokeWidth="2" fill="none" opacity="0.4" />

      {/* Head with gradient */}
      <circle cx="32" cy="22" r="14" fill="url(#dogHeadGrad)" />
      {/* Head highlight */}
      <ellipse cx="28" cy="16" rx="6" ry="5" fill="#E0A060" opacity="0.4" />

      {/* Ears with floppy look */}
      <ellipse cx="16" cy="14" rx="6" ry="12" fill="url(#dogHeadGrad)" />
      <ellipse cx="48" cy="14" rx="6" ry="12" fill="url(#dogHeadGrad)" />
      {/* Ear inner shading */}
      <ellipse cx="17" cy="16" rx="3" ry="8" fill="#A0522D" opacity="0.3" />
      <ellipse cx="47" cy="16" rx="3" ry="8" fill="#A0522D" opacity="0.3" />

      {/* Snout with gradient */}
      <ellipse cx="32" cy="28" rx="8" ry="6" fill="url(#dogSnoutGrad)" />
      {/* Snout highlight */}
      <ellipse cx="30" cy="26" rx="4" ry="3" fill="#FAEBD7" opacity="0.5" />

      {/* Eyes with depth */}
      <ellipse cx="26" cy="20" rx="4.5" ry="5" fill="white" />
      <ellipse cx="38" cy="20" rx="4.5" ry="5" fill="white" />
      {/* Eye shadow */}
      <ellipse cx="26" cy="21" rx="4" ry="4.5" fill="#f5f5f5" />
      <ellipse cx="38" cy="21" rx="4" ry="4.5" fill="#f5f5f5" />
      {/* Pupils */}
      <circle cx="27" cy="20" r="2.5" fill="url(#dogEyeGrad)" />
      <circle cx="39" cy="20" r="2.5" fill="url(#dogEyeGrad)" />
      {/* Eye sparkles */}
      <circle cx="26" cy="19" r="1" fill="white" />
      <circle cx="38" cy="19" r="1" fill="white" />
      <circle cx="28" cy="21" r="0.5" fill="white" />
      <circle cx="40" cy="21" r="0.5" fill="white" />

      {/* Eyebrows for expression */}
      <path d="M22 15 Q26 14 30 16" stroke="#8B4513" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M34 16 Q38 14 42 15" stroke="#8B4513" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Nose with gradient */}
      <ellipse cx="32" cy="26" rx="4" ry="3" fill="url(#dogNoseGrad)" />
      {/* Nose highlight */}
      <ellipse cx="30.5" cy="25" rx="1.5" ry="1" fill="#555" opacity="0.4" />
      {/* Nostrils */}
      <circle cx="30" cy="27" r="0.8" fill="#000" />
      <circle cx="34" cy="27" r="0.8" fill="#000" />

      {/* Happy mouth */}
      <path d="M28 30 Q32 34 36 30" stroke="#5C4033" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Tongue */}
      <ellipse cx="32" cy="33" rx="3" ry="4" fill="#FF6B8A" />
      <path d="M32 31 L32 35" stroke="#E85A73" strokeWidth="0.8" />

      {/* Legs with gradient */}
      <rect x="18" y="52" width="6" height="10" fill="url(#dogLegGrad)" rx="3" />
      <rect x="40" y="52" width="6" height="10" fill="url(#dogLegGrad)" rx="3" />
      {/* Leg highlights */}
      <rect x="19" y="53" width="2" height="7" fill="#E0A060" opacity="0.3" rx="1" />
      <rect x="41" y="53" width="2" height="7" fill="#E0A060" opacity="0.3" rx="1" />

      {/* Paws */}
      <ellipse cx="21" cy="62" rx="4" ry="2" fill="#A0522D" />
      <ellipse cx="43" cy="62" rx="4" ry="2" fill="#A0522D" />

      {/* Fur texture hints */}
      <path d="M24,38 Q26,40 24,42" stroke="#8B4513" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M40,38 Q38,40 40,42" stroke="#8B4513" strokeWidth="0.5" fill="none" opacity="0.3" />
    </svg>
  );
}
