/**
 * Cowboy Sprite Component
 * Enhanced with gradients and detailed features
 */

import type { SpriteProps } from '../types';

export function Cowboy({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Hat gradient */}
        <linearGradient id="cowboyHatGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#5D3A1A" />
        </linearGradient>
        {/* Hat brim gradient */}
        <linearGradient id="cowboyBrimGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5D3A1A" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#5D3A1A" />
        </linearGradient>
        {/* Skin gradient */}
        <radialGradient id="cowboySkinGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </radialGradient>
        {/* Shirt gradient */}
        <linearGradient id="cowboyShirtGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E6C35C" />
          <stop offset="50%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Jeans gradient */}
        <linearGradient id="cowboyJeansGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5B7AB8" />
          <stop offset="100%" stopColor="#4169E1" />
        </linearGradient>
        {/* Boot gradient */}
        <linearGradient id="cowboyBootGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#5D3A1A" />
        </linearGradient>
      </defs>

      {/* Hat brim */}
      <ellipse cx="32" cy="10" rx="18" ry="4" fill="url(#cowboyBrimGradient)" />
      {/* Hat crown */}
      <ellipse cx="32" cy="8" rx="10" ry="7" fill="url(#cowboyHatGradient)" />
      {/* Hat band */}
      <ellipse cx="32" cy="10" rx="10" ry="2" fill="#5D3A1A" />
      {/* Hat highlight */}
      <ellipse cx="28" cy="5" rx="4" ry="2" fill="#B8784E" opacity="0.4" />
      {/* Hat dent */}
      <path d="M26 4 Q32 8 38 4" stroke="#5D3A1A" strokeWidth="0.5" fill="none" />

      {/* Kopf / Head */}
      <circle cx="32" cy="18" r="10" fill="url(#cowboySkinGradient)" />

      {/* Augen / Eyes */}
      <ellipse cx="28" cy="16" rx="2.5" ry="2" fill="white" />
      <ellipse cx="36" cy="16" rx="2.5" ry="2" fill="white" />
      <circle cx="28" cy="16" r="1.5" fill="#4A7C59" />
      <circle cx="36" cy="16" r="1.5" fill="#4A7C59" />
      {/* Pupils */}
      <circle cx="28" cy="16" r="0.8" fill="#1a1a1a" />
      <circle cx="36" cy="16" r="0.8" fill="#1a1a1a" />
      {/* Eye sparkle */}
      <circle cx="27" cy="15" r="0.5" fill="white" />
      <circle cx="35" cy="15" r="0.5" fill="white" />

      {/* Eyebrows - confident */}
      <path d="M25 13 Q28 12 30 13" stroke="#6B3510" strokeWidth="1" fill="none" />
      <path d="M34 13 Q36 12 39 13" stroke="#6B3510" strokeWidth="1" fill="none" />

      {/* Friendly smile */}
      <path d="M28 22 Q32 25 36 22" stroke="#8B4513" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Cheeks */}
      <circle cx="24" cy="20" r="2" fill="#FFB6C1" opacity="0.3" />
      <circle cx="40" cy="20" r="2" fill="#FFB6C1" opacity="0.3" />

      {/* Hemd / Shirt */}
      <rect x="22" y="28" width="20" height="20" fill="url(#cowboyShirtGradient)" rx="3" />
      {/* Shirt collar */}
      <path d="M26 28 L30 34 L32 30 L34 34 L38 28" fill="#E6C35C" />
      {/* Shirt buttons */}
      <circle cx="32" cy="36" r="1.5" fill="#B8860B" />
      <circle cx="32" cy="42" r="1.5" fill="#B8860B" />

      {/* Neckerchief triangle */}
      <polygon points="32,32 28,40 36,40" fill={color} />
      <polygon points="32,32 29,38 35,38" fill="#A0522D" opacity="0.5" />

      {/* Arme / Arms */}
      <rect x="8" y="30" width="14" height="5" fill="url(#cowboyShirtGradient)" rx="2" />
      <rect x="42" y="30" width="14" height="5" fill="url(#cowboyShirtGradient)" rx="2" />

      {/* Hände / Hands */}
      <circle cx="8" cy="32" r="3.5" fill="url(#cowboySkinGradient)" />
      <circle cx="56" cy="32" r="3.5" fill="url(#cowboySkinGradient)" />

      {/* Jeans */}
      <rect x="24" y="48" width="6" height="14" fill="url(#cowboyJeansGradient)" rx="2" />
      <rect x="34" y="48" width="6" height="14" fill="url(#cowboyJeansGradient)" rx="2" />
      {/* Jean pockets */}
      <path d="M25 50 L26 54 L29 54 L29 50" stroke="#3B5998" strokeWidth="0.5" fill="none" />
      <path d="M35 50 L36 54 L39 54 L39 50" stroke="#3B5998" strokeWidth="0.5" fill="none" />
      {/* Belt */}
      <rect x="22" y="46" width="20" height="3" fill="#5D3A1A" />
      {/* Belt buckle */}
      <rect x="29" y="45" width="6" height="5" fill="#FFD700" rx="1" />
      <rect x="30" y="46" width="4" height="3" fill="#CC9900" rx="0.5" />

      {/* Stiefel / Boots */}
      <ellipse cx="27" cy="62" rx="5" ry="2.5" fill="url(#cowboyBootGradient)" />
      <ellipse cx="37" cy="62" rx="5" ry="2.5" fill="url(#cowboyBootGradient)" />
      {/* Boot tops */}
      <rect x="23" y="58" width="8" height="4" fill="url(#cowboyBootGradient)" rx="1" />
      <rect x="33" y="58" width="8" height="4" fill="url(#cowboyBootGradient)" rx="1" />
      {/* Spurs */}
      <ellipse cx="27" cy="60" rx="2" ry="2" fill="#C0C0C0" />
      <ellipse cx="37" cy="60" rx="2" ry="2" fill="#C0C0C0" />
      <circle cx="27" cy="60" r="1" fill="#888" />
      <circle cx="37" cy="60" r="1" fill="#888" />

      {/* Lasso hint */}
      <circle cx="8" cy="40" r="5" fill="none" stroke="#C4A57B" strokeWidth="2" />
    </svg>
  );
}
