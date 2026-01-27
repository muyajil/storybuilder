/**
 * Witch Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function Witch({ size = 64, color = '#1a1a1a' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Hat gradient */}
        <linearGradient id="witchHatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        {/* Green skin gradient */}
        <radialGradient id="witchSkinGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ADFF9F" />
          <stop offset="50%" stopColor="#90EE90" />
          <stop offset="100%" stopColor="#6B8E23" />
        </radialGradient>
        {/* Robe gradient */}
        <linearGradient id="witchRobeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        {/* Broom handle gradient */}
        <linearGradient id="witchBroomGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
        {/* Broom bristles gradient */}
        <linearGradient id="witchBristlesGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Wart gradient */}
        <radialGradient id="witchWartGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
      </defs>

      {/* Hat */}
      <polygon points="32,0 18,22 46,22" fill="url(#witchHatGradient)" />
      {/* Hat highlight */}
      <polygon points="32,4 24,18 32,16" fill="#333" opacity="0.4" />
      {/* Hat brim */}
      <ellipse cx="32" cy="22" rx="16" ry="5" fill="url(#witchHatGradient)" />
      {/* Hat band */}
      <rect x="22" y="18" width="20" height="3" fill="#4B0082" rx="1" />
      {/* Hat buckle */}
      <rect x="29" y="17" width="6" height="5" fill="#DAA520" rx="1" />
      <rect x="30" y="18" width="4" height="3" fill="#FFD700" rx="0.5" />

      {/* Head */}
      <circle cx="32" cy="26" r="11" fill="url(#witchSkinGradient)" />
      {/* Cheek shading */}
      <ellipse cx="26" cy="28" rx="3" ry="2" fill="#7CFC00" opacity="0.3" />
      <ellipse cx="38" cy="28" rx="3" ry="2" fill="#7CFC00" opacity="0.3" />

      {/* Pointed nose */}
      <path d="M32 26 L28 32 L32 34 Z" fill="#90EE90" />
      <ellipse cx="30" cy="32" rx="2" ry="1.5" fill="#6B8E23" />

      {/* Wart on nose */}
      <circle cx="30" cy="30" r="2" fill="url(#witchWartGradient)" />
      {/* Wart highlight */}
      <circle cx="29" cy="29" r="0.5" fill="#333" />

      {/* Eyes */}
      <ellipse cx="27" cy="24" rx="3" ry="2.5" fill="white" />
      <ellipse cx="37" cy="24" rx="3" ry="2.5" fill="white" />
      {/* Pupils - sinister looking */}
      <ellipse cx="27" cy="24" rx="1.8" ry="2" fill="black" />
      <ellipse cx="37" cy="24" rx="1.8" ry="2" fill="black" />
      {/* Eye shine */}
      <circle cx="26" cy="23" r="0.6" fill="white" />
      <circle cx="36" cy="23" r="0.6" fill="white" />
      {/* Evil eyebrows */}
      <path d="M23 21 L29 23" stroke="#6B8E23" strokeWidth="1.5" />
      <path d="M41 21 L35 23" stroke="#6B8E23" strokeWidth="1.5" />

      {/* Cackling mouth */}
      <path d="M27 30 Q32 34 37 30" stroke="#2F4F2F" strokeWidth="1.5" fill="none" />
      {/* Teeth showing */}
      <rect x="30" y="30" width="2" height="2" fill="white" />
      <rect x="33" y="30" width="2" height="2" fill="white" />

      {/* Robe */}
      <path d="M18 36 L14 62 L50 62 L46 36" fill="url(#witchRobeGradient)" />
      {/* Robe folds */}
      <path d="M24 40 L22 60" stroke="#0a0a0a" strokeWidth="0.5" />
      <path d="M40 40 L42 60" stroke="#0a0a0a" strokeWidth="0.5" />
      <path d="M32 38 L32 58" stroke="#0a0a0a" strokeWidth="0.5" />
      {/* Robe highlight */}
      <path d="M20 38 L18 58" stroke="#333" strokeWidth="1" opacity="0.3" />

      {/* Arms */}
      <rect x="4" y="38" width="14" height="6" fill="url(#witchRobeGradient)" rx="2" />
      <rect x="46" y="38" width="14" height="6" fill="url(#witchRobeGradient)" rx="2" />

      {/* Green hands */}
      <circle cx="4" cy="40" r="4" fill="url(#witchSkinGradient)" />
      <circle cx="60" cy="40" r="4" fill="url(#witchSkinGradient)" />
      {/* Fingers */}
      <ellipse cx="1" cy="38" rx="1.5" ry="2" fill="#90EE90" />
      <ellipse cx="62" cy="38" rx="1.5" ry="2" fill="#90EE90" />

      {/* Broom handle */}
      <rect x="56" y="30" width="5" height="32" fill="url(#witchBroomGradient)" rx="1" />
      {/* Broom handle shine */}
      <rect x="57" y="30" width="1.5" height="30" fill="#A0522D" opacity="0.4" />

      {/* Broom bristles */}
      <ellipse cx="58.5" cy="26" rx="8" ry="5" fill="url(#witchBristlesGradient)" />
      {/* Bristle details */}
      <line x1="52" y1="24" x2="52" y2="28" stroke="#B8860B" strokeWidth="0.5" />
      <line x1="54" y1="23" x2="54" y2="29" stroke="#B8860B" strokeWidth="0.5" />
      <line x1="56" y1="22" x2="56" y2="30" stroke="#B8860B" strokeWidth="0.5" />
      <line x1="60" y1="22" x2="60" y2="30" stroke="#B8860B" strokeWidth="0.5" />
      <line x1="62" y1="23" x2="62" y2="29" stroke="#B8860B" strokeWidth="0.5" />
      <line x1="64" y1="24" x2="64" y2="28" stroke="#B8860B" strokeWidth="0.5" />

      {/* Magical sparkles */}
      <circle cx="10" cy="48" r="1" fill="#9370DB" opacity="0.6" />
      <circle cx="50" cy="52" r="0.8" fill="#9370DB" opacity="0.5" />
      <circle cx="8" cy="56" r="0.6" fill="#BA55D3" opacity="0.4" />
    </svg>
  );
}
