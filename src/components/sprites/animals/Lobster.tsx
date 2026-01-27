/**
 * Lobster Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Lobster({ size = 64, color = '#FF4500' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="lobsterBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF6347" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#CC3700" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="lobsterHeadGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FF6347" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#CC3700" />
        </radialGradient>
        {/* Claw gradient */}
        <radialGradient id="lobsterClawGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF6347" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#B22222" />
        </radialGradient>
        {/* Shell segment gradient */}
        <linearGradient id="lobsterSegmentGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6347" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#CC3700" />
        </linearGradient>
        {/* Leg gradient */}
        <linearGradient id="lobsterLegGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#B22222" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="60" rx="16" ry="3" fill="rgba(0,0,0,0.2)" />

      {/* Tail fan */}
      <ellipse cx="32" cy="56" rx="10" ry="5" fill="url(#lobsterSegmentGradient)" />
      <ellipse cx="28" cy="58" rx="5" ry="3" fill={color} />
      <ellipse cx="36" cy="58" rx="5" ry="3" fill={color} />
      {/* Tail fan ridges */}
      <path d="M28 54 L28 60" stroke="#CC3700" strokeWidth="0.5" opacity="0.5" />
      <path d="M32 54 L32 60" stroke="#CC3700" strokeWidth="0.5" opacity="0.5" />
      <path d="M36 54 L36 60" stroke="#CC3700" strokeWidth="0.5" opacity="0.5" />

      {/* Tail segments */}
      <path d="M32 52 L28 58 M32 52 L32 60 M32 52 L36 58" stroke="url(#lobsterLegGradient)" strokeWidth="3" strokeLinecap="round" />

      {/* Abdomen segments */}
      <ellipse cx="32" cy="46" rx="10" ry="6" fill="url(#lobsterBodyGradient)" />
      <ellipse cx="32" cy="40" rx="11" ry="5" fill="url(#lobsterBodyGradient)" />
      {/* Segment lines */}
      <path d="M22 46 Q32 48 42 46" stroke="#CC3700" strokeWidth="0.5" opacity="0.6" />
      <path d="M21 40 Q32 42 43 40" stroke="#CC3700" strokeWidth="0.5" opacity="0.6" />
      {/* Segment highlights */}
      <ellipse cx="28" cy="44" rx="3" ry="2" fill="rgba(255,255,255,0.15)" />
      <ellipse cx="28" cy="38" rx="3" ry="1.5" fill="rgba(255,255,255,0.15)" />

      {/* Walking legs */}
      <path d="M24 42 L16 48 L12 52" stroke="url(#lobsterLegGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M24 38 L14 42 L10 48" stroke="url(#lobsterLegGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M24 34 L12 36 L8 42" stroke="url(#lobsterLegGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M40 42 L48 48 L52 52" stroke="url(#lobsterLegGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M40 38 L50 42 L54 48" stroke="url(#lobsterLegGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M40 34 L52 36 L56 42" stroke="url(#lobsterLegGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Thorax/body */}
      <ellipse cx="32" cy="34" rx="12" ry="8" fill="url(#lobsterBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="30" rx="5" ry="3" fill="rgba(255,255,255,0.2)" />

      {/* Claws */}
      {/* Left claw */}
      <path d="M20 28 L8 24" stroke="url(#lobsterLegGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <ellipse cx="6" cy="22" rx="6" ry="8" fill="url(#lobsterClawGradient)" transform="rotate(-20 6 22)" />
      {/* Claw pincer */}
      <path d="M4 18 L2 14" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M8 16 L10 12" stroke={color} strokeWidth="3" strokeLinecap="round" />
      {/* Claw highlight */}
      <ellipse cx="5" cy="20" rx="2" ry="3" fill="rgba(255,255,255,0.2)" transform="rotate(-20 5 20)" />
      {/* Claw serrations */}
      <circle cx="4" cy="24" r="1" fill="#B22222" />
      <circle cx="6" cy="26" r="1" fill="#B22222" />

      {/* Right claw */}
      <path d="M44 28 L56 24" stroke="url(#lobsterLegGradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <ellipse cx="58" cy="22" rx="6" ry="8" fill="url(#lobsterClawGradient)" transform="rotate(20 58 22)" />
      {/* Claw pincer */}
      <path d="M60 18 L62 14" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M56 16 L54 12" stroke={color} strokeWidth="3" strokeLinecap="round" />
      {/* Claw highlight */}
      <ellipse cx="59" cy="20" rx="2" ry="3" fill="rgba(255,255,255,0.2)" transform="rotate(20 59 20)" />
      {/* Claw serrations */}
      <circle cx="60" cy="24" r="1" fill="#B22222" />
      <circle cx="58" cy="26" r="1" fill="#B22222" />

      {/* Head/carapace */}
      <circle cx="32" cy="20" r="9" fill="url(#lobsterHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="29" cy="16" rx="4" ry="2" fill="rgba(255,255,255,0.2)" />

      {/* Antennae */}
      <path d="M28 14 Q24 8 22 4" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M36 14 Q40 8 42 4" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Antennae tips */}
      <circle cx="22" cy="4" r="1" fill="#CC3700" />
      <circle cx="42" cy="4" r="1" fill="#CC3700" />

      {/* Shorter antennules */}
      <path d="M30 14 L28 8" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M34 14 L36 8" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Eyes */}
      <circle cx="28" cy="18" r="3" fill="black" />
      <circle cx="36" cy="18" r="3" fill="black" />
      {/* Eye highlights */}
      <circle cx="27" cy="17" r="1" fill="white" />
      <circle cx="35" cy="17" r="1" fill="white" />

      {/* Rostrum (nose spike) */}
      <path d="M32 12 L32 8" stroke={color} strokeWidth="2" strokeLinecap="round" />

      {/* Mouth parts */}
      <ellipse cx="32" cy="24" rx="2" ry="1" fill="#CC3700" />
    </svg>
  );
}
