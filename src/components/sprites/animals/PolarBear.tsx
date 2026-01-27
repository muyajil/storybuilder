/**
 * PolarBear Sprite Component
 * Enhanced with gradients, fur texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function PolarBear({ size = 64, color = '#F5F5F5' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="polarBearBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor="#E8E8E8" stopOpacity="1" />
          <stop offset="100%" stopColor="#D0D0D0" stopOpacity="1" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="polarBearHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#E8E8E8" stopOpacity="1" />
        </radialGradient>
        {/* Snout gradient */}
        <radialGradient id="polarBearSnoutGradient" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#E0E0E0" stopOpacity="1" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="polarBearNoseGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#3D3D3D" stopOpacity="1" />
          <stop offset="100%" stopColor="#1a1a1a" stopOpacity="1" />
        </radialGradient>
        {/* Highlight */}
        <radialGradient id="polarBearHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Shadow */}
        <radialGradient id="polarBearShadow" cx="50%" cy="70%" r="50%">
          <stop offset="0%" stopColor="#C0C0C0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#C0C0C0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Back legs */}
      <ellipse cx="16" cy="54" rx="7" ry="5" fill="url(#polarBearBodyGradient)" />
      <ellipse cx="40" cy="54" rx="7" ry="5" fill="url(#polarBearBodyGradient)" />

      {/* Paw pads */}
      <ellipse cx="16" cy="56" rx="4" ry="2.5" fill="#D0D0D0" opacity="0.6" />
      <ellipse cx="40" cy="56" rx="4" ry="2.5" fill="#D0D0D0" opacity="0.6" />

      {/* Body */}
      <ellipse cx="28" cy="40" rx="20" ry="16" fill="url(#polarBearBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="22" cy="34" rx="12" ry="8" fill="url(#polarBearHighlight)" />

      {/* Body shadow */}
      <ellipse cx="28" cy="48" rx="14" ry="6" fill="url(#polarBearShadow)" />

      {/* Fur texture on body */}
      <path d="M18 36 Q16 40 18 44" stroke="#E0E0E0" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M28 34 Q26 40 28 46" stroke="#E0E0E0" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M38 36 Q40 40 38 44" stroke="#E0E0E0" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Neck connection */}
      <ellipse cx="42" cy="32" rx="8" ry="10" fill="url(#polarBearBodyGradient)" />

      {/* Head */}
      <circle cx="48" cy="28" r="14" fill="url(#polarBearHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="44" cy="22" rx="8" ry="6" fill="url(#polarBearHighlight)" />

      {/* Ears */}
      <circle cx="40" cy="16" r="5" fill="url(#polarBearBodyGradient)" />
      <circle cx="56" cy="18" r="5" fill="url(#polarBearBodyGradient)" />

      {/* Inner ears */}
      <circle cx="40" cy="16" r="2.5" fill="#D0D0D0" opacity="0.5" />
      <circle cx="56" cy="18" r="2.5" fill="#D0D0D0" opacity="0.5" />

      {/* Snout */}
      <ellipse cx="56" cy="32" rx="7" ry="6" fill="url(#polarBearSnoutGradient)" />

      {/* Snout highlight */}
      <ellipse cx="54" cy="30" rx="3" ry="2" fill="white" opacity="0.3" />

      {/* Nose */}
      <ellipse cx="58" cy="30" rx="3.5" ry="2.5" fill="url(#polarBearNoseGradient)" />
      <ellipse cx="58" cy="29" rx="1.5" ry="0.8" fill="white" opacity="0.3" />

      {/* Eyes */}
      <circle cx="46" cy="26" r="3" fill="#1a1a1a" />
      <circle cx="54" cy="26" r="3" fill="#1a1a1a" />

      {/* Eye highlights */}
      <circle cx="45" cy="25" r="1" fill="white" />
      <circle cx="53" cy="25" r="1" fill="white" />

      {/* Mouth */}
      <path d="M54 36 Q58 38 62 36" stroke="#1a1a1a" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Fur details on face */}
      <path d="M42 32 Q44 34 42 36" stroke="#E0E0E0" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M50 34 Q52 36 50 38" stroke="#E0E0E0" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Cheek fur */}
      <ellipse cx="44" cy="34" rx="3" ry="2" fill={color} opacity="0.5" />
    </svg>
  );
}
