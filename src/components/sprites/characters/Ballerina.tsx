/**
 * Ballerina Sprite Component
 * Enhanced with gradients and detailed features
 */

import type { SpriteProps } from '../types';

export function Ballerina({ size = 64, color = '#FF69B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Hair gradient */}
        <radialGradient id="ballerinaHairGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#8B4513" />
        </radialGradient>
        {/* Hair bun gradient */}
        <radialGradient id="ballerinaBunGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#B5651D" />
          <stop offset="100%" stopColor="#8B4513" />
        </radialGradient>
        {/* Skin gradient */}
        <radialGradient id="ballerinaSkinGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </radialGradient>
        {/* Tutu gradient */}
        <linearGradient id="ballerinaTutuGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF85C0" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#FF4DA6" />
        </linearGradient>
        {/* Leotard gradient */}
        <linearGradient id="ballerinaLeotardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF7EB8" />
          <stop offset="100%" stopColor="#FF4DA6" />
        </linearGradient>
        {/* Pointe shoe gradient */}
        <linearGradient id="ballerinaShoeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFB6C1" />
          <stop offset="100%" stopColor="#FF8FAB" />
        </linearGradient>
      </defs>

      {/* Hair base */}
      <ellipse cx="32" cy="10" rx="8" ry="6" fill="url(#ballerinaHairGradient)" />
      {/* Hair bun */}
      <circle cx="32" cy="5" r="5" fill="url(#ballerinaBunGradient)" />
      {/* Bun highlight */}
      <ellipse cx="30" cy="4" rx="2" ry="1.5" fill="#C4813D" opacity="0.5" />
      {/* Hair ribbon */}
      <ellipse cx="32" cy="8" rx="6" ry="1" fill="#FFD700" />
      <path d="M26 8 L24 12 L28 10 Z" fill="#FFD700" />
      <path d="M38 8 L40 12 L36 10 Z" fill="#FFD700" />

      {/* Head */}
      <circle cx="32" cy="16" r="8" fill="url(#ballerinaSkinGradient)" />

      {/* Eyes */}
      <ellipse cx="29" cy="14" rx="2" ry="2.5" fill="white" />
      <ellipse cx="35" cy="14" rx="2" ry="2.5" fill="white" />
      <circle cx="29" cy="15" r="1.5" fill="#4A7C59" />
      <circle cx="35" cy="15" r="1.5" fill="#4A7C59" />
      {/* Pupils */}
      <circle cx="29" cy="15" r="0.8" fill="#1a1a1a" />
      <circle cx="35" cy="15" r="0.8" fill="#1a1a1a" />
      {/* Eye sparkle */}
      <circle cx="28" cy="14" r="0.5" fill="white" />
      <circle cx="34" cy="14" r="0.5" fill="white" />

      {/* Eyelashes */}
      <path d="M27 12 L26 11" stroke="#333" strokeWidth="0.5" />
      <path d="M29 12 L29 11" stroke="#333" strokeWidth="0.5" />
      <path d="M35 12 L35 11" stroke="#333" strokeWidth="0.5" />
      <path d="M37 12 L38 11" stroke="#333" strokeWidth="0.5" />

      {/* Blush */}
      <ellipse cx="26" cy="17" rx="2" ry="1" fill="#FFB6C1" opacity="0.5" />
      <ellipse cx="38" cy="17" rx="2" ry="1" fill="#FFB6C1" opacity="0.5" />

      {/* Smile */}
      <path d="M29 19 Q32 21 35 19" stroke="#E91E63" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Neck */}
      <rect x="30" y="24" width="4" height="2" fill="url(#ballerinaSkinGradient)" />

      {/* Leotard body */}
      <rect x="27" y="26" width="10" height="12" fill="url(#ballerinaLeotardGradient)" rx="2" />
      {/* Leotard details */}
      <path d="M27 26 Q32 30 37 26" fill="#FF85C0" />

      {/* Tutu - layered for fluffy effect */}
      <ellipse cx="32" cy="38" rx="18" ry="5" fill="url(#ballerinaTutuGradient)" opacity="0.5" />
      <ellipse cx="32" cy="37" rx="16" ry="5" fill="url(#ballerinaTutuGradient)" opacity="0.7" />
      <ellipse cx="32" cy="36" rx="14" ry="5" fill="url(#ballerinaTutuGradient)" />
      {/* Tutu sparkles */}
      <circle cx="24" cy="36" r="0.8" fill="white" opacity="0.8" />
      <circle cx="40" cy="37" r="0.8" fill="white" opacity="0.8" />
      <circle cx="32" cy="35" r="0.8" fill="white" opacity="0.8" />

      {/* Arms - graceful position */}
      <path d="M27 28 Q20 26 12 28" stroke="url(#ballerinaSkinGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M37 28 Q44 26 52 28" stroke="url(#ballerinaSkinGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Hands */}
      <ellipse cx="12" cy="28" rx="2.5" ry="2" fill="url(#ballerinaSkinGradient)" />
      <ellipse cx="52" cy="28" rx="2.5" ry="2" fill="url(#ballerinaSkinGradient)" />

      {/* Legs */}
      <rect x="28" y="40" width="3" height="18" fill="url(#ballerinaSkinGradient)" />
      <rect x="33" y="40" width="3" height="18" fill="url(#ballerinaSkinGradient)" />

      {/* Pointe shoes */}
      <ellipse cx="29.5" cy="60" rx="3.5" ry="4" fill="url(#ballerinaShoeGradient)" />
      <ellipse cx="34.5" cy="60" rx="3.5" ry="4" fill="url(#ballerinaShoeGradient)" />
      {/* Shoe ribbons */}
      <path d="M27 56 Q26 52 28 50" stroke="#FFB6C1" strokeWidth="1" fill="none" />
      <path d="M32 56 Q31 52 33 50" stroke="#FFB6C1" strokeWidth="1" fill="none" />
      <path d="M37 56 Q38 52 36 50" stroke="#FFB6C1" strokeWidth="1" fill="none" />
    </svg>
  );
}
