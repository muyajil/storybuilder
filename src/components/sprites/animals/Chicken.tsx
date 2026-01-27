/**
 * Chicken Sprite Component
 * Enhanced with gradients, feather texture, and cute features
 */

import type { SpriteProps } from '../types';

export function Chicken({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="chickenBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F5F5F5" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="chickenHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </radialGradient>
        {/* Comb gradient */}
        <linearGradient id="chickenCombGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#CC0000" />
          <stop offset="50%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#FF3333" />
        </linearGradient>
        {/* Wattle gradient */}
        <radialGradient id="chickenWattleGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF3333" />
          <stop offset="100%" stopColor="#CC0000" />
        </radialGradient>
        {/* Beak gradient */}
        <linearGradient id="chickenBeakGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>
        {/* Leg gradient */}
        <linearGradient id="chickenLegGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFB347" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="chickenEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4a3a20" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Feather shine */}
        <linearGradient id="chickenShineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Feather texture */}
        <pattern id="chickenFeatherPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M0 4 Q4 2 8 4" stroke="#e8e8e8" strokeWidth="0.5" fill="none" />
        </pattern>
      </defs>

      {/* Tail feathers */}
      <g>
        <ellipse cx="52" cy="34" rx="6" ry="10" fill={color} transform="rotate(-20 52 34)" />
        <ellipse cx="54" cy="38" rx="5" ry="8" fill={color} transform="rotate(-10 54 38)" />
        <ellipse cx="50" cy="30" rx="4" ry="9" fill={color} transform="rotate(-30 50 30)" />
        {/* Tail feather lines */}
        <g stroke="#e0e0e0" strokeWidth="0.5" opacity="0.5">
          <path d="M50 28 L52 38" />
          <path d="M52 30 L54 42" />
          <path d="M54 34 L55 44" />
        </g>
      </g>

      {/* Body */}
      <ellipse cx="32" cy="42" rx="20" ry="16" fill="url(#chickenBodyGradient)" />
      {/* Body feather texture */}
      <ellipse cx="32" cy="42" rx="20" ry="16" fill="url(#chickenFeatherPattern)" />
      {/* Body shine */}
      <ellipse cx="26" cy="36" rx="10" ry="6" fill="url(#chickenShineGradient)" />

      {/* Wing */}
      <ellipse cx="36" cy="44" rx="10" ry="8" fill="#F8F8F8" />
      <ellipse cx="36" cy="44" rx="10" ry="8" fill="url(#chickenFeatherPattern)" />
      {/* Wing feather lines */}
      <g stroke="#e0e0e0" strokeWidth="0.8" opacity="0.6">
        <path d="M30 40 Q36 42 42 40" fill="none" />
        <path d="M28 44 Q36 46 44 44" fill="none" />
        <path d="M30 48 Q36 50 42 48" fill="none" />
      </g>

      {/* Legs */}
      <g fill="none" stroke="url(#chickenLegGradient)" strokeWidth="3" strokeLinecap="round">
        <line x1="26" y1="54" x2="26" y2="62" />
        <line x1="38" y1="54" x2="38" y2="62" />
      </g>

      {/* Feet */}
      <g fill="none" stroke="url(#chickenLegGradient)" strokeWidth="2" strokeLinecap="round">
        {/* Left foot */}
        <path d="M22 62 L26 62 L30 62" />
        <line x1="26" y1="62" x2="26" y2="64" />
        {/* Right foot */}
        <path d="M34 62 L38 62 L42 62" />
        <line x1="38" y1="62" x2="38" y2="64" />
      </g>

      {/* Head */}
      <circle cx="32" cy="20" r="14" fill="url(#chickenHeadGradient)" />
      {/* Head feather texture */}
      <circle cx="32" cy="20" r="14" fill="url(#chickenFeatherPattern)" />
      {/* Head shine */}
      <ellipse cx="28" cy="14" rx="6" ry="4" fill="url(#chickenShineGradient)" />

      {/* Comb - detailed */}
      <path d="M24 8 Q26 4 28 8 L28 12" fill="url(#chickenCombGradient)" />
      <path d="M28 6 Q30 2 32 6 L32 12" fill="url(#chickenCombGradient)" />
      <path d="M32 6 Q34 2 36 6 L36 10" fill="url(#chickenCombGradient)" />
      <path d="M36 8 Q38 4 40 8 L38 12" fill="url(#chickenCombGradient)" />
      {/* Comb shine */}
      <g fill="white" opacity="0.2">
        <ellipse cx="27" cy="8" rx="1" ry="2" />
        <ellipse cx="31" cy="6" rx="1" ry="2" />
        <ellipse cx="35" cy="7" rx="1" ry="2" />
      </g>

      {/* Eyes */}
      <ellipse cx="27" cy="18" rx="3" ry="3.5" fill="white" />
      <ellipse cx="37" cy="18" rx="3" ry="3.5" fill="white" />
      <ellipse cx="27" cy="18" rx="2" ry="2.5" fill="url(#chickenEyeGradient)" />
      <ellipse cx="37" cy="18" rx="2" ry="2.5" fill="url(#chickenEyeGradient)" />
      {/* Eye shine */}
      <circle cx="26" cy="17" r="0.8" fill="white" />
      <circle cx="36" cy="17" r="0.8" fill="white" />

      {/* Beak */}
      <path d="M32 22 L26 26 L32 30 L38 26 Z" fill="url(#chickenBeakGradient)" />
      {/* Beak highlight */}
      <path d="M32 22 L28 25 L32 28" fill="white" opacity="0.2" />
      {/* Beak line */}
      <line x1="26" y1="26" x2="38" y2="26" stroke="#E69500" strokeWidth="0.5" />

      {/* Wattle */}
      <ellipse cx="32" cy="32" rx="4" ry="5" fill="url(#chickenWattleGradient)" />
      {/* Wattle shine */}
      <ellipse cx="31" cy="30" rx="1.5" ry="2" fill="white" opacity="0.2" />

      {/* Blush */}
      <ellipse cx="22" cy="22" rx="3" ry="2" fill="#FFB6C1" opacity="0.3" />
      <ellipse cx="42" cy="22" rx="3" ry="2" fill="#FFB6C1" opacity="0.3" />

      {/* Small feather tufts on head */}
      <g fill="#F8F8F8">
        <ellipse cx="20" cy="16" rx="2" ry="3" transform="rotate(-20 20 16)" />
        <ellipse cx="44" cy="16" rx="2" ry="3" transform="rotate(20 44 16)" />
      </g>
    </svg>
  );
}
