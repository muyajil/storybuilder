/**
 * Teacher Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function Teacher({ size = 64, color = '#4682B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Hair gradient */}
        <radialGradient id="teacherHairGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="70%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#654321" />
        </radialGradient>
        {/* Skin gradient */}
        <radialGradient id="teacherSkinGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="70%" stopColor="#FFDAB9" />
          <stop offset="100%" stopColor="#DEB887" />
        </radialGradient>
        {/* Blouse gradient */}
        <linearGradient id="teacherBlouseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5B9BD5" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#36648B" />
        </linearGradient>
        {/* Book gradient */}
        <linearGradient id="teacherBookGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
        {/* Pants gradient */}
        <linearGradient id="teacherPantsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#404040" />
          <stop offset="50%" stopColor="#333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Glasses lens gradient */}
        <radialGradient id="teacherGlassesGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="white" />
          <stop offset="70%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </radialGradient>
      </defs>

      {/* Hair */}
      <rect x="18" y="4" width="28" height="12" fill="url(#teacherHairGradient)" rx="4" />
      <ellipse cx="32" cy="8" rx="14" ry="6" fill="url(#teacherHairGradient)" />
      {/* Hair highlights */}
      <ellipse cx="26" cy="6" rx="4" ry="2" fill="#A0522D" opacity="0.5" />

      {/* Head */}
      <circle cx="32" cy="14" r="10" fill="url(#teacherSkinGradient)" />

      {/* Glasses frame */}
      <rect x="24" y="10" width="16" height="4" fill="#333" rx="1" />
      {/* Left lens */}
      <circle cx="28" cy="12" r="3" fill="url(#teacherGlassesGradient)" stroke="#333" strokeWidth="1" />
      <circle cx="27" cy="11" r="1" fill="white" opacity="0.5" />
      {/* Right lens */}
      <circle cx="36" cy="12" r="3" fill="url(#teacherGlassesGradient)" stroke="#333" strokeWidth="1" />
      <circle cx="35" cy="11" r="1" fill="white" opacity="0.5" />

      {/* Eyes behind glasses */}
      <circle cx="28" cy="12" r="1.5" fill="black" />
      <circle cx="36" cy="12" r="1.5" fill="black" />
      <circle cx="27.7" cy="11.7" r="0.4" fill="white" />
      <circle cx="35.7" cy="11.7" r="0.4" fill="white" />

      {/* Warm smile */}
      <path d="M28 18 Q32 21 36 18" stroke="#8B4513" strokeWidth="1.5" fill="none" />

      {/* Blouse */}
      <rect x="22" y="24" width="20" height="24" fill="url(#teacherBlouseGradient)" rx="2" />
      {/* Collar */}
      <path d="M26 24 L32 30 L38 24" fill="white" />
      <path d="M27 24 L32 28 L37 24" fill="#F5F5F5" opacity="0.5" />
      {/* Button line */}
      <line x1="32" y1="30" x2="32" y2="46" stroke="#36648B" strokeWidth="0.5" />
      {/* Buttons */}
      <circle cx="32" cy="34" r="1" fill="white" />
      <circle cx="32" cy="40" r="1" fill="white" />

      {/* Arms */}
      <rect x="10" y="26" width="12" height="6" fill="url(#teacherBlouseGradient)" rx="2" />
      <rect x="42" y="26" width="12" height="6" fill="url(#teacherBlouseGradient)" rx="2" />

      {/* Hands */}
      <circle cx="10" cy="29" r="4" fill="url(#teacherSkinGradient)" />
      <circle cx="54" cy="29" r="4" fill="url(#teacherSkinGradient)" />

      {/* Pants */}
      <rect x="24" y="48" width="6" height="14" fill="url(#teacherPantsGradient)" rx="1" />
      <rect x="34" y="48" width="6" height="14" fill="url(#teacherPantsGradient)" rx="1" />

      {/* Shoes */}
      <ellipse cx="27" cy="62" rx="5" ry="2" fill="#1a1a1a" />
      <ellipse cx="37" cy="62" rx="5" ry="2" fill="#1a1a1a" />
      {/* Shoe shine */}
      <ellipse cx="25" cy="61" rx="1.5" ry="0.8" fill="#444" opacity="0.5" />
      <ellipse cx="35" cy="61" rx="1.5" ry="0.8" fill="#444" opacity="0.5" />

      {/* Book in hand */}
      <rect x="48" y="22" width="12" height="16" fill="url(#teacherBookGradient)" rx="1" />
      {/* Book pages */}
      <rect x="50" y="24" width="8" height="12" fill="#FFF8DC" />
      {/* Book text lines */}
      <line x1="51" y1="26" x2="57" y2="26" stroke="#CCC" strokeWidth="0.5" />
      <line x1="51" y1="28" x2="56" y2="28" stroke="#CCC" strokeWidth="0.5" />
      <line x1="51" y1="30" x2="57" y2="30" stroke="#CCC" strokeWidth="0.5" />
      <line x1="51" y1="32" x2="55" y2="32" stroke="#CCC" strokeWidth="0.5" />
      {/* Book spine */}
      <rect x="48" y="22" width="2" height="16" fill="#654321" />

      {/* Apple on desk (implied) */}
      <circle cx="6" cy="36" r="4" fill="#FF4444" />
      <rect x="5" y="31" width="2" height="3" fill="#8B4513" />
      <ellipse cx="8" cy="32" rx="2" ry="1" fill="#228B22" />
    </svg>
  );
}
