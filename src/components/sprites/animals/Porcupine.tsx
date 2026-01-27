/**
 * Porcupine Sprite Component
 * Enhanced with gradients, quill texture, and expressive features
 */

import type { SpriteProps } from '../types';

export function Porcupine({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="porcupineBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor="#6B3A0F" stopOpacity="1" />
          <stop offset="100%" stopColor="#4A2A08" stopOpacity="1" />
        </radialGradient>
        {/* Face gradient */}
        <radialGradient id="porcupineFaceGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#6B3A0F" stopOpacity="1" />
        </radialGradient>
        {/* Quill gradient */}
        <linearGradient id="porcupineQuillGradient" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#3D2817" stopOpacity="1" />
          <stop offset="50%" stopColor="#F5DEB3" stopOpacity="1" />
          <stop offset="100%" stopColor="#3D2817" stopOpacity="1" />
        </linearGradient>
        {/* Nose gradient */}
        <radialGradient id="porcupineNoseGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#3D3D3D" stopOpacity="1" />
          <stop offset="100%" stopColor="#1a1a1a" stopOpacity="1" />
        </radialGradient>
        {/* Highlight */}
        <radialGradient id="porcupineHighlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Quills - back layer */}
      {[...Array(14)].map((_, i) => (
        <line
          key={`quill-${i}`}
          x1={18 + i * 2}
          y1={28}
          x2={14 + i * 3}
          y2={8 + (i % 4) * 3}
          stroke="url(#porcupineQuillGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}

      {/* Additional quill details */}
      {[...Array(8)].map((_, i) => (
        <line
          key={`quill-inner-${i}`}
          x1={22 + i * 3}
          y1={30}
          x2={20 + i * 3.5}
          y2={16 + (i % 3) * 2}
          stroke="#5D4037"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
      ))}

      {/* Feet */}
      <ellipse cx="26" cy="54" rx="5" ry="3" fill="#4A2A08" />
      <ellipse cx="44" cy="54" rx="5" ry="3" fill="#4A2A08" />

      {/* Body */}
      <ellipse cx="34" cy="42" rx="20" ry="14" fill="url(#porcupineBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="28" cy="36" rx="10" ry="7" fill="url(#porcupineHighlight)" />

      {/* Belly fur texture */}
      <ellipse cx="34" cy="48" rx="12" ry="6" fill="#6B3A0F" opacity="0.4" />

      {/* Fur texture on body */}
      <path d="M26 40 Q24 44 26 48" stroke="#4A2A08" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M34 38 Q32 44 34 50" stroke="#4A2A08" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M42 40 Q44 44 42 48" stroke="#4A2A08" strokeWidth="0.8" fill="none" opacity="0.4" />

      {/* Head */}
      <circle cx="22" cy="42" r="10" fill="url(#porcupineFaceGradient)" />

      {/* Head highlight */}
      <ellipse cx="18" cy="38" rx="5" ry="4" fill="url(#porcupineHighlight)" />

      {/* Snout */}
      <ellipse cx="14" cy="44" rx="5" ry="4" fill="url(#porcupineFaceGradient)" />

      {/* Nose */}
      <ellipse cx="12" cy="44" rx="3" ry="2.5" fill="url(#porcupineNoseGradient)" />
      <ellipse cx="12" cy="43" rx="1.2" ry="0.6" fill="white" opacity="0.3" />

      {/* Eye */}
      <circle cx="20" cy="40" r="3" fill="white" />
      <circle cx="20" cy="40" r="2" fill="#1a1a1a" />
      <circle cx="19" cy="39" r="0.8" fill="white" />

      {/* Ear */}
      <ellipse cx="26" cy="34" rx="3" ry="4" fill={color} />
      <ellipse cx="26" cy="34" rx="1.5" ry="2" fill="#6B3A0F" opacity="0.5" />

      {/* Whiskers */}
      <line x1="10" y1="42" x2="4" y2="40" stroke="#5D4037" strokeWidth="0.5" opacity="0.6" />
      <line x1="10" y1="44" x2="4" y2="44" stroke="#5D4037" strokeWidth="0.5" opacity="0.6" />
      <line x1="10" y1="46" x2="4" y2="48" stroke="#5D4037" strokeWidth="0.5" opacity="0.6" />

      {/* Cute expression - slight smile */}
      <path d="M12 48 Q14 50 16 48" stroke="#4A2A08" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Small tail */}
      <ellipse cx="54" cy="44" rx="4" ry="3" fill="url(#porcupineBodyGradient)" />
    </svg>
  );
}
