/**
 * FluffyPup Sprite Component
 * Enhanced with soft gradients, fluffy fur texture, and adorable expression
 */

import type { SpriteProps } from '../types';

export function FluffyPup({ size = 64, color = '#DEB887' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="fluffyPupBodyGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#F0D8B0" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#C4A06A" />
        </radialGradient>
        {/* Cream belly gradient */}
        <radialGradient id="fluffyPupBellyGrad" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#FFFAF0" />
          <stop offset="70%" stopColor="#F5DEB3" />
          <stop offset="100%" stopColor="#EED9B6" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="fluffyPupHeadGrad" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#F0D8B0" />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor="#C8A87A" />
        </radialGradient>
        {/* Ear gradient */}
        <radialGradient id="fluffyPupEarGrad" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#E8D0A0" />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor="#B89860" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="fluffyPupEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#4a2500" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="fluffyPupNoseGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Tongue gradient */}
        <linearGradient id="fluffyPupTongueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF85A0" />
          <stop offset="100%" stopColor="#FF69B4" />
        </linearGradient>
      </defs>

      {/* Fluffy tail - multiple layers */}
      <circle cx="10" cy="40" r="9" fill="url(#fluffyPupBodyGrad)" />
      <circle cx="7" cy="38" r="7" fill="url(#fluffyPupBodyGrad)" />
      <circle cx="5" cy="36" r="5" fill="url(#fluffyPupBellyGrad)" />
      {/* Tail fluff texture */}
      <path d="M4,38 Q6,36 4,34" stroke="#C4A06A" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M8,42 Q10,40 8,38" stroke="#C4A06A" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="42" rx="18" ry="14" fill="url(#fluffyPupBodyGrad)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="38" rx="10" ry="7" fill="#F5E0C0" opacity="0.4" />
      {/* Body shadow */}
      <ellipse cx="34" cy="52" rx="14" ry="4" fill="#8B7355" opacity="0.15" />

      {/* Fluff pattern on body */}
      <ellipse cx="32" cy="44" rx="14" ry="10" fill="url(#fluffyPupBellyGrad)" />
      {/* Fluffy texture lines */}
      <path d="M24,42 Q26,44 24,46" stroke="#EED9B6" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M32,40 Q34,42 32,44" stroke="#EED9B6" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M40,42 Q38,44 40,46" stroke="#EED9B6" strokeWidth="0.8" fill="none" opacity="0.5" />

      {/* Head with gradient */}
      <circle cx="48" cy="30" r="16" fill="url(#fluffyPupHeadGrad)" />
      {/* Head highlight */}
      <ellipse cx="44" cy="24" rx="8" ry="6" fill="#F5E0C0" opacity="0.4" />
      {/* Fluffy cheeks */}
      <ellipse cx="40" cy="34" rx="6" ry="5" fill="url(#fluffyPupBellyGrad)" opacity="0.6" />
      <ellipse cx="56" cy="34" rx="6" ry="5" fill="url(#fluffyPupBellyGrad)" opacity="0.6" />

      {/* Fluffy ears */}
      <circle cx="38" cy="16" r="9" fill="url(#fluffyPupEarGrad)" />
      <circle cx="58" cy="18" r="9" fill="url(#fluffyPupEarGrad)" />
      {/* Ear inner fluff */}
      <circle cx="38" cy="16" r="6" fill="url(#fluffyPupBellyGrad)" />
      <circle cx="58" cy="18" r="6" fill="url(#fluffyPupBellyGrad)" />
      {/* Ear texture */}
      <path d="M36,14 Q38,12 40,14" stroke="#C4A06A" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M56,16 Q58,14 60,16" stroke="#C4A06A" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Eyes with depth */}
      <ellipse cx="44" cy="28" rx="6" ry="6.5" fill="white" />
      <ellipse cx="54" cy="28" rx="6" ry="6.5" fill="white" />
      {/* Eye shadow */}
      <ellipse cx="44" cy="29" rx="5.5" ry="6" fill="#f8f8f8" />
      <ellipse cx="54" cy="29" rx="5.5" ry="6" fill="#f8f8f8" />
      {/* Pupils with gradient */}
      <circle cx="44" cy="28" r="4.5" fill="url(#fluffyPupEyeGrad)" />
      <circle cx="54" cy="28" r="4.5" fill="url(#fluffyPupEyeGrad)" />
      {/* Eye sparkles */}
      <circle cx="43" cy="26" r="1.8" fill="white" />
      <circle cx="53" cy="26" r="1.8" fill="white" />
      <circle cx="45" cy="30" r="0.7" fill="white" />
      <circle cx="55" cy="30" r="0.7" fill="white" />

      {/* Eyebrows - happy expression */}
      <path d="M40 22 Q44 20 48 22" stroke="#C4A06A" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M50 22 Q54 20 58 22" stroke="#C4A06A" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Nose with gradient */}
      <ellipse cx="49" cy="36" rx="4" ry="3.2" fill="url(#fluffyPupNoseGrad)" />
      {/* Nose highlight */}
      <ellipse cx="48" cy="35" rx="1.5" ry="1" fill="#555" opacity="0.4" />

      {/* Happy tongue */}
      <ellipse cx="49" cy="44" rx="4" ry="5" fill="url(#fluffyPupTongueGrad)" />
      {/* Tongue detail */}
      <path d="M49 40 L49 46" stroke="#E85A73" strokeWidth="1" opacity="0.6" />
      {/* Tongue highlight */}
      <ellipse cx="48" cy="42" rx="1.5" ry="2" fill="#FFB0C0" opacity="0.4" />

      {/* Mouth around tongue */}
      <path d="M44 40 Q49 38 54 40" stroke="#8B4513" strokeWidth="1" fill="none" opacity="0.3" />

      {/* Fluffy legs/paws */}
      <ellipse cx="22" cy="54" rx="7" ry="5" fill="url(#fluffyPupBodyGrad)" />
      <ellipse cx="42" cy="54" rx="7" ry="5" fill="url(#fluffyPupBodyGrad)" />
      {/* Paw highlights */}
      <ellipse cx="20" cy="53" rx="4" ry="3" fill="#F5E0C0" opacity="0.4" />
      <ellipse cx="40" cy="53" rx="4" ry="3" fill="#F5E0C0" opacity="0.4" />
      {/* Paw pads hint */}
      <ellipse cx="22" cy="56" rx="4" ry="2" fill="url(#fluffyPupBellyGrad)" />
      <ellipse cx="42" cy="56" rx="4" ry="2" fill="url(#fluffyPupBellyGrad)" />

      {/* Fluffy chest tuft */}
      <ellipse cx="36" cy="36" rx="4" ry="3" fill="url(#fluffyPupBellyGrad)" opacity="0.7" />
    </svg>
  );
}
