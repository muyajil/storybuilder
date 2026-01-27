/**
 * Skull Sprite Component
 * Enhanced with eerie glow effects, bone gradients, and spooky depth
 */

import type { EffectProps } from '../types';

export function Skull({ x = 0, y = 0, size = 28}: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Bone gradient */}
        <radialGradient id="skullBoneGrad" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFF0" />
          <stop offset="40%" stopColor="#F5F5DC" />
          <stop offset="80%" stopColor="#D4C8A0" />
          <stop offset="100%" stopColor="#A09070" />
        </radialGradient>

        {/* Jaw gradient */}
        <linearGradient id="skullJawGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5F5DC" />
          <stop offset="50%" stopColor="#E0D8B8" />
          <stop offset="100%" stopColor="#C0B090" />
        </linearGradient>

        {/* Eye socket gradient */}
        <radialGradient id="skullEyeGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1A0A0A" />
          <stop offset="70%" stopColor="#000000" />
          <stop offset="100%" stopColor="#1A0505" />
        </radialGradient>

        {/* Eerie glow */}
        <radialGradient id="skullEerieGlow" cx="50%" cy="50%" r="50%">
          <stop offset="50%" stopColor="#F5F5DC" stopOpacity="0" />
          <stop offset="70%" stopColor="#90EE90" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#00FF00" stopOpacity="0.2" />
        </radialGradient>

        {/* Eye glow */}
        <radialGradient id="skullEyeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF0000" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#FF0000" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FF0000" stopOpacity="0" />
        </radialGradient>

        {/* Glow filter */}
        <filter id="skullGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Shadow filter */}
        <filter id="skullShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Tooth gradient */}
        <linearGradient id="skullToothGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1A1A1A" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
      </defs>

      {/* Eerie outer glow */}
      <ellipse cx="14" cy="14" rx="14" ry="13" fill="url(#skullEerieGlow)" />

      {/* Shadow */}
      <ellipse cx="15" cy="13" rx="12" ry="10" fill="#2A2010" opacity="0.3" />

      {/* Main skull with gradient */}
      <ellipse cx="14" cy="12" rx="12" ry="10" fill="url(#skullBoneGrad)" filter="url(#skullGlow)" />

      {/* Forehead highlight */}
      <ellipse cx="11" cy="8" rx="5" ry="3" fill="white" opacity="0.3" />

      {/* Skull texture details */}
      <path d="M8 8 Q10 6 14 6 Q18 6 20 8" stroke="#C0B090" strokeWidth="0.5" fill="none" opacity="0.3" />

      {/* Temple shadows */}
      <ellipse cx="6" cy="12" rx="2" ry="4" fill="#C0B090" opacity="0.3" />
      <ellipse cx="22" cy="12" rx="2" ry="4" fill="#C0B090" opacity="0.3" />

      {/* Jaw shadow */}
      <rect x="9" y="21" width="12" height="8" fill="#3D3020" opacity="0.3" rx="2" />

      {/* Jaw with gradient */}
      <rect x="8" y="20" width="12" height="8" fill="url(#skullJawGrad)" rx="2" filter="url(#skullShadow)" />

      {/* Jaw highlight */}
      <rect x="9" y="20.5" width="4" height="2" fill="white" opacity="0.2" rx="1" />

      {/* Eye socket glow */}
      <ellipse cx="9" cy="12" rx="5" ry="6" fill="url(#skullEyeGlow)" />
      <ellipse cx="19" cy="12" rx="5" ry="6" fill="url(#skullEyeGlow)" />

      {/* Eye sockets with gradient */}
      <ellipse cx="9" cy="12" rx="4" ry="5" fill="url(#skullEyeGrad)" />
      <ellipse cx="19" cy="12" rx="4" ry="5" fill="url(#skullEyeGrad)" />

      {/* Eye socket rim */}
      <ellipse cx="9" cy="12" rx="4" ry="5" fill="none" stroke="#A09070" strokeWidth="0.5" opacity="0.5" />
      <ellipse cx="19" cy="12" rx="4" ry="5" fill="none" stroke="#A09070" strokeWidth="0.5" opacity="0.5" />

      {/* Creepy red eye glint */}
      <circle cx="8" cy="11" r="1" fill="#FF0000" opacity="0.4" />
      <circle cx="18" cy="11" r="1" fill="#FF0000" opacity="0.4" />
      <circle cx="8.5" cy="11.5" r="0.5" fill="#FF6666" opacity="0.6" />
      <circle cx="18.5" cy="11.5" r="0.5" fill="#FF6666" opacity="0.6" />

      {/* Nose hole */}
      <polygon points="14,14 12,20 16,20" fill="url(#skullEyeGrad)" />
      <polygon points="14,15 13,18 15,18" fill="#1A0A0A" opacity="0.5" />

      {/* Nose bridge */}
      <path d="M14 8 L14 14" stroke="#D4C8A0" strokeWidth="0.5" opacity="0.4" />

      {/* Teeth with gradient */}
      <rect x="9" y="22" width="2" height="6" fill="url(#skullToothGrad)" rx="0.5" />
      <rect x="13" y="22" width="2" height="6" fill="url(#skullToothGrad)" rx="0.5" />
      <rect x="17" y="22" width="2" height="6" fill="url(#skullToothGrad)" rx="0.5" />

      {/* Teeth gaps */}
      <line x1="11.5" y1="22" x2="11.5" y2="28" stroke="#000" strokeWidth="0.5" opacity="0.5" />
      <line x1="15.5" y1="22" x2="15.5" y2="28" stroke="#000" strokeWidth="0.5" opacity="0.5" />

      {/* Crack details */}
      <path d="M18 4 Q19 6 18 8 Q19 10 18 11" stroke="#A09070" strokeWidth="0.5" fill="none" opacity="0.5" />
      <path d="M6 10 L8 12" stroke="#A09070" strokeWidth="0.3" fill="none" opacity="0.4" />

      {/* Bone highlight */}
      <ellipse cx="14" cy="5" rx="4" ry="1" fill="white" opacity="0.2" />
    </svg>
  );
}
