/**
 * Hedgehog Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function Hedgehog({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="hedgehogBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#5D3A1A" />
        </radialGradient>
        {/* Face gradient */}
        <radialGradient id="hedgehogFaceGradient" cx="60%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#F5DEB3" />
          <stop offset="70%" stopColor="#DEB887" />
          <stop offset="100%" stopColor="#D2B48C" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="hedgehogNoseGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </radialGradient>
        {/* Spine gradient */}
        <linearGradient id="hedgehogSpineGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#5D3A1A" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#D2B48C" />
        </linearGradient>
        {/* Foot gradient */}
        <radialGradient id="hedgehogFootGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#F5DEB3" />
          <stop offset="100%" stopColor="#C4A47A" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="36" cy="58" rx="22" ry="4" fill="rgba(0,0,0,0.15)" />

      {/* Spines - multiple rows for depth */}
      {/* Back row (darker) */}
      {[...Array(14)].map((_, i) => (
        <line
          key={`back-${i}`}
          x1={14 + i * 3}
          y1={26 + Math.sin(i * 0.8) * 3}
          x2={12 + i * 3}
          y2={10 + Math.sin(i * 0.8) * 3}
          stroke="#5D3A1A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}
      {/* Middle row */}
      {[...Array(12)].map((_, i) => (
        <line
          key={`mid-${i}`}
          x1={16 + i * 3}
          y1={28 + Math.sin(i * 0.7) * 2}
          x2={14 + i * 3}
          y2={14 + Math.sin(i * 0.7) * 2}
          stroke="url(#hedgehogSpineGradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
      {/* Front row (lighter tips) */}
      {[...Array(10)].map((_, i) => (
        <line
          key={`front-${i}`}
          x1={20 + i * 3}
          y1={30 + Math.sin(i * 0.6) * 2}
          x2={18 + i * 3}
          y2={18 + Math.sin(i * 0.6) * 2}
          stroke="#D2B48C"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.7"
        />
      ))}

      {/* Body with gradient */}
      <ellipse cx="32" cy="42" rx="22" ry="16" fill="url(#hedgehogBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="38" rx="10" ry="6" fill="rgba(255,255,255,0.1)" />

      {/* Face with gradient */}
      <ellipse cx="52" cy="44" rx="12" ry="12" fill="url(#hedgehogFaceGradient)" />
      {/* Face highlight */}
      <ellipse cx="48" cy="40" rx="5" ry="4" fill="rgba(255,255,255,0.2)" />

      {/* Cheek blush */}
      <ellipse cx="48" cy="48" rx="3" ry="2" fill="#FFB6C1" opacity="0.4" />

      {/* Nose with gradient and shine */}
      <ellipse cx="62" cy="46" rx="4" ry="3" fill="url(#hedgehogNoseGradient)" />
      <circle cx="60" cy="44" r="1" fill="white" opacity="0.4" />

      {/* Eye with detail */}
      <ellipse cx="54" cy="40" rx="3" ry="3.5" fill="black" />
      <circle cx="53" cy="39" r="1" fill="white" opacity="0.7" />
      <circle cx="55" cy="41" r="0.5" fill="white" opacity="0.4" />

      {/* Eyebrow */}
      <path d="M51 36 Q54 35 57 36" stroke="#8B4513" strokeWidth="0.5" fill="none" />

      {/* Ear */}
      <ellipse cx="46" cy="36" rx="3" ry="4" fill="#DEB887" />
      <ellipse cx="46" cy="36" rx="1.5" ry="2" fill="#FFB6C1" opacity="0.5" />

      {/* Mouth */}
      <path d="M58 50 Q60 51 62 50" stroke="#8B4513" strokeWidth="0.5" fill="none" />

      {/* Whiskers */}
      <line x1="58" y1="46" x2="64" y2="44" stroke="#A0522D" strokeWidth="0.3" opacity="0.5" />
      <line x1="58" y1="48" x2="64" y2="48" stroke="#A0522D" strokeWidth="0.3" opacity="0.5" />
      <line x1="58" y1="50" x2="64" y2="52" stroke="#A0522D" strokeWidth="0.3" opacity="0.5" />

      {/* Feet with gradient */}
      <ellipse cx="20" cy="56" rx="5" ry="3.5" fill="url(#hedgehogFootGradient)" />
      <ellipse cx="44" cy="56" rx="5" ry="3.5" fill="url(#hedgehogFootGradient)" />
      {/* Toe details */}
      <circle cx="17" cy="57" r="1.2" fill="#C4A47A" />
      <circle cx="20" cy="58" r="1.2" fill="#C4A47A" />
      <circle cx="23" cy="57" r="1.2" fill="#C4A47A" />
      <circle cx="41" cy="57" r="1.2" fill="#C4A47A" />
      <circle cx="44" cy="58" r="1.2" fill="#C4A47A" />
      <circle cx="47" cy="57" r="1.2" fill="#C4A47A" />
    </svg>
  );
}
