/**
 * Donkey Sprite Component
 * Enhanced with gradients, fur texture, and gentle expression
 */

import type { SpriteProps } from '../types';

export function Donkey({ size = 64, color = '#808080' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="donkeyBodyGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#9A9A9A" />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor="#5A5A5A" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="donkeyHeadGrad" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#9A9A9A" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#6A6A6A" />
        </radialGradient>
        {/* Snout gradient */}
        <radialGradient id="donkeySnoutGrad" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="70%" stopColor="#DEB887" />
          <stop offset="100%" stopColor="#C4A574" />
        </radialGradient>
        {/* Ear inner gradient */}
        <radialGradient id="donkeyEarInnerGrad" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFDAB9" />
          <stop offset="100%" stopColor="#DEB887" />
        </radialGradient>
        {/* Mane gradient */}
        <linearGradient id="donkeyManeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="50%" stopColor="#2F2F2F" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        {/* Leg gradient */}
        <linearGradient id="donkeyLegGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="80%" stopColor="#5A5A5A" />
          <stop offset="100%" stopColor="#3A3A3A" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="donkeyEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#4a3728" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
      </defs>

      {/* Body with gradient */}
      <ellipse cx="28" cy="40" rx="18" ry="12" fill="url(#donkeyBodyGrad)" />
      {/* Body highlight */}
      <ellipse cx="24" cy="36" rx="10" ry="6" fill="#A0A0A0" opacity="0.3" />
      {/* Body shadow */}
      <ellipse cx="30" cy="48" rx="14" ry="4" fill="#4A4A4A" opacity="0.2" />

      {/* Belly lighter area */}
      <ellipse cx="28" cy="44" rx="12" ry="6" fill="#B0B0B0" opacity="0.3" />

      {/* Head with gradient */}
      <ellipse cx="48" cy="28" rx="10" ry="10" fill="url(#donkeyHeadGrad)" />
      {/* Head highlight */}
      <ellipse cx="44" cy="24" rx="5" ry="4" fill="#A0A0A0" opacity="0.4" />

      {/* Long ears with gradient */}
      <ellipse cx="42" cy="12" rx="4" ry="13" fill="url(#donkeyHeadGrad)" />
      <ellipse cx="54" cy="12" rx="4" ry="13" fill="url(#donkeyHeadGrad)" />
      {/* Ear inner */}
      <ellipse cx="42" cy="12" rx="2.5" ry="10" fill="url(#donkeyEarInnerGrad)" />
      <ellipse cx="54" cy="12" rx="2.5" ry="10" fill="url(#donkeyEarInnerGrad)" />
      {/* Ear tips darker */}
      <ellipse cx="42" cy="3" rx="2" ry="3" fill="#5A5A5A" opacity="0.5" />
      <ellipse cx="54" cy="3" rx="2" ry="3" fill="#5A5A5A" opacity="0.5" />

      {/* Snout with gradient */}
      <ellipse cx="56" cy="32" rx="7" ry="5" fill="url(#donkeySnoutGrad)" />
      {/* Snout highlight */}
      <ellipse cx="54" cy="30" rx="3" ry="2" fill="#FAEBD7" opacity="0.5" />
      {/* Nostrils */}
      <circle cx="54" cy="33" r="1.2" fill="#4A4A4A" />
      <circle cx="58" cy="33" r="1.2" fill="#4A4A4A" />

      {/* Eyes with depth */}
      <ellipse cx="46" cy="26" rx="2.5" ry="3" fill="white" />
      <ellipse cx="52" cy="26" rx="2.5" ry="3" fill="white" />
      {/* Pupils */}
      <circle cx="46" cy="26" r="1.5" fill="url(#donkeyEyeGrad)" />
      <circle cx="52" cy="26" r="1.5" fill="url(#donkeyEyeGrad)" />
      {/* Eye sparkles */}
      <circle cx="45.5" cy="25.5" r="0.5" fill="white" />
      <circle cx="51.5" cy="25.5" r="0.5" fill="white" />

      {/* Gentle eyelids */}
      <path d="M43.5 24 Q46 23 48.5 24" stroke="#6A6A6A" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M49.5 24 Q52 23 54.5 24" stroke="#6A6A6A" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Mane with gradient */}
      <path d="M44 20 Q42 22 44 26 L52 26 Q54 22 52 20 Z" fill="url(#donkeyManeGrad)" />
      {/* Mane texture */}
      <path d="M46,21 L46,25" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.5" />
      <path d="M48,20 L48,25" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.5" />
      <path d="M50,21 L50,25" stroke="#1A1A1A" strokeWidth="0.5" opacity="0.5" />

      {/* Back of mane continuing on body */}
      <rect x="38" y="34" width="6" height="8" fill="url(#donkeyManeGrad)" rx="1" />

      {/* Legs with gradient */}
      <rect x="16" y="48" width="5" height="14" fill="url(#donkeyLegGrad)" rx="1" />
      <rect x="36" y="48" width="5" height="14" fill="url(#donkeyLegGrad)" rx="1" />
      {/* Leg highlights */}
      <rect x="17" y="49" width="1.5" height="10" fill="#A0A0A0" opacity="0.3" rx="0.5" />
      <rect x="37" y="49" width="1.5" height="10" fill="#A0A0A0" opacity="0.3" rx="0.5" />

      {/* Hooves */}
      <rect x="15" y="60" width="7" height="4" fill="#2F2F2F" rx="1" />
      <rect x="35" y="60" width="7" height="4" fill="#2F2F2F" rx="1" />

      {/* Tail */}
      <path d="M10 40 Q6 44 10 48" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Tail tuft */}
      <ellipse cx="10" cy="50" rx="3" ry="4" fill="url(#donkeyManeGrad)" />

      {/* Fur texture hints */}
      <path d="M20,38 Q22,40 20,42" stroke="#6A6A6A" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M34,38 Q32,40 34,42" stroke="#6A6A6A" strokeWidth="0.5" fill="none" opacity="0.3" />
    </svg>
  );
}
