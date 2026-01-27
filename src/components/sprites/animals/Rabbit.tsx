/**
 * Rabbit Sprite Component
 * Enhanced with gradients, fur texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Rabbit({ size = 64, color = '#F5F5F5' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="rabbitBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor="#E8E8E8" stopOpacity="1" />
          <stop offset="100%" stopColor="#D8D8D8" stopOpacity="1" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="rabbitHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#E8E8E8" stopOpacity="1" />
        </radialGradient>
        {/* Ear gradient */}
        <linearGradient id="rabbitEarGradient" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#E8E8E8" stopOpacity="1" />
        </linearGradient>
        {/* Inner ear gradient */}
        <linearGradient id="rabbitInnerEarGradient" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#FFB6C1" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFC0CB" stopOpacity="0.8" />
        </linearGradient>
        {/* Nose gradient */}
        <radialGradient id="rabbitNoseGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFB6C1" stopOpacity="1" />
          <stop offset="100%" stopColor="#FF9CAC" stopOpacity="1" />
        </radialGradient>
        {/* Highlight */}
        <radialGradient id="rabbitHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Tail gradient */}
        <radialGradient id="rabbitTailGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#E0E0E0" stopOpacity="1" />
        </radialGradient>
      </defs>

      {/* Ears */}
      <ellipse cx="24" cy="12" rx="6" ry="16" fill="url(#rabbitEarGradient)" />
      <ellipse cx="40" cy="12" rx="6" ry="16" fill="url(#rabbitEarGradient)" />

      {/* Inner ears */}
      <ellipse cx="24" cy="12" rx="3" ry="12" fill="url(#rabbitInnerEarGradient)" />
      <ellipse cx="40" cy="12" rx="3" ry="12" fill="url(#rabbitInnerEarGradient)" />

      {/* Ear highlights */}
      <ellipse cx="23" cy="8" rx="1.5" ry="6" fill="white" opacity="0.2" />
      <ellipse cx="39" cy="8" rx="1.5" ry="6" fill="white" opacity="0.2" />

      {/* Tail */}
      <circle cx="48" cy="52" r="7" fill="url(#rabbitTailGradient)" />
      <circle cx="46" cy="50" r="3" fill="white" opacity="0.3" />

      {/* Back feet */}
      <ellipse cx="22" cy="58" rx="8" ry="4" fill="url(#rabbitBodyGradient)" />
      <ellipse cx="42" cy="58" rx="8" ry="4" fill="url(#rabbitBodyGradient)" />

      {/* Foot pads */}
      <ellipse cx="22" cy="59" rx="4" ry="2" fill="#FFB6C1" opacity="0.4" />
      <ellipse cx="42" cy="59" rx="4" ry="2" fill="#FFB6C1" opacity="0.4" />

      {/* Body */}
      <ellipse cx="32" cy="48" rx="16" ry="14" fill="url(#rabbitBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="26" cy="42" rx="8" ry="7" fill="url(#rabbitHighlight)" />

      {/* Body fur texture */}
      <path d="M24 44 Q22 48 24 52" stroke="#E0E0E0" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M40 44 Q42 48 40 52" stroke="#E0E0E0" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Head */}
      <circle cx="32" cy="32" r="14" fill="url(#rabbitHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="26" cy="26" rx="8" ry="6" fill="url(#rabbitHighlight)" />

      {/* Cheeks - fluffy */}
      <ellipse cx="22" cy="36" rx="5" ry="4" fill={color} />
      <ellipse cx="42" cy="36" rx="5" ry="4" fill={color} />

      {/* Eyes */}
      <circle cx="26" cy="30" r="4" fill="white" />
      <circle cx="38" cy="30" r="4" fill="white" />
      <circle cx="27" cy="30" r="2.5" fill="#2F1F1F" />
      <circle cx="39" cy="30" r="2.5" fill="#2F1F1F" />

      {/* Eye highlights */}
      <circle cx="25.5" cy="29" r="1" fill="white" />
      <circle cx="37.5" cy="29" r="1" fill="white" />
      <circle cx="28" cy="31" r="0.5" fill="white" opacity="0.5" />
      <circle cx="40" cy="31" r="0.5" fill="white" opacity="0.5" />

      {/* Nose */}
      <ellipse cx="32" cy="36" rx="3.5" ry="2.5" fill="url(#rabbitNoseGradient)" />
      <ellipse cx="32" cy="35" rx="1.5" ry="0.8" fill="white" opacity="0.3" />

      {/* Mouth - Y shape */}
      <path d="M32 38 L32 40" stroke="#888" strokeWidth="1" />
      <path d="M30 42 Q32 40 34 42" stroke="#888" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Whiskers */}
      <line x1="24" y1="36" x2="12" y2="34" stroke="#A0A0A0" strokeWidth="0.8" opacity="0.6" />
      <line x1="24" y1="38" x2="12" y2="40" stroke="#A0A0A0" strokeWidth="0.8" opacity="0.6" />
      <line x1="24" y1="40" x2="14" y2="44" stroke="#A0A0A0" strokeWidth="0.8" opacity="0.6" />
      <line x1="40" y1="36" x2="52" y2="34" stroke="#A0A0A0" strokeWidth="0.8" opacity="0.6" />
      <line x1="40" y1="38" x2="52" y2="40" stroke="#A0A0A0" strokeWidth="0.8" opacity="0.6" />
      <line x1="40" y1="40" x2="50" y2="44" stroke="#A0A0A0" strokeWidth="0.8" opacity="0.6" />

      {/* Cheek blush */}
      <ellipse cx="20" cy="36" rx="3" ry="2" fill="#FFB6C1" opacity="0.4" />
      <ellipse cx="44" cy="36" rx="3" ry="2" fill="#FFB6C1" opacity="0.4" />
    </svg>
  );
}
