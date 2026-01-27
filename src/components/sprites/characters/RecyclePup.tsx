/**
 * RecyclePup Sprite Component
 * Enhanced with gradients, detailed fur, and expressive features
 */

import type { SpriteProps } from '../types';

export function RecyclePup({ size = 64, color = '#32CD32' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Main fur gradient */}
        <linearGradient id="recyclePupFurGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C08050" />
          <stop offset="50%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#804020" />
        </linearGradient>
        {/* Dark ear gradient */}
        <linearGradient id="recyclePupEarGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#5C3317" />
        </linearGradient>
        {/* Snout gradient */}
        <linearGradient id="recyclePupSnoutGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5DEB3" />
          <stop offset="50%" stopColor="#DEB887" />
          <stop offset="100%" stopColor="#C9A86C" />
        </linearGradient>
        {/* Uniform gradient */}
        <linearGradient id="recyclePupUniformGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3CB371" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
        {/* Cap gradient */}
        <linearGradient id="recyclePupCapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3CB371" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
        {/* Nose gradient */}
        <radialGradient id="recyclePupNoseGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </radialGradient>
        {/* Recycle symbol gradient */}
        <linearGradient id="recyclePupSymbolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8E8E8" />
        </linearGradient>
      </defs>

      {/* Cap brim / Mützenschirm */}
      <ellipse cx="32" cy="11" rx="15" ry="6" fill="url(#recyclePupCapGradient)" />
      <ellipse cx="32" cy="10" rx="13" ry="4" fill="#3CB371" opacity="0.3" />

      {/* Cap top / Mütze */}
      <rect x="17" y="6" width="30" height="7" fill="url(#recyclePupCapGradient)" rx="3" />
      <rect x="19" y="7" width="26" height="3" fill="#3CB371" opacity="0.3" />

      {/* Recycle symbol on cap */}
      <circle cx="32" cy="9" r="4" fill="url(#recyclePupSymbolGradient)" />
      <path d="M30,7 L32,10 L34,7" stroke="#32CD32" strokeWidth="1.5" fill="none" />
      <path d="M34,10 L31,12 L34,12" stroke="#32CD32" strokeWidth="1.5" fill="none" />
      <path d="M30,12 L30,10 L28,11" stroke="#32CD32" strokeWidth="1.5" fill="none" />

      {/* Head / Kopf */}
      <ellipse cx="32" cy="26" rx="17" ry="15" fill="url(#recyclePupFurGradient)" />

      {/* Head highlight */}
      <ellipse cx="30" cy="22" rx="8" ry="6" fill="#C08050" opacity="0.4" />

      {/* Ears / Ohren - floppy */}
      <ellipse cx="13" cy="20" rx="7" ry="12" fill="url(#recyclePupEarGradient)" />
      <ellipse cx="51" cy="20" rx="7" ry="12" fill="url(#recyclePupEarGradient)" />

      {/* Inner ear */}
      <ellipse cx="13" cy="20" rx="4" ry="8" fill="#FFB6C1" opacity="0.4" />
      <ellipse cx="51" cy="20" rx="4" ry="8" fill="#FFB6C1" opacity="0.4" />

      {/* Snout / Schnauze */}
      <ellipse cx="32" cy="32" rx="9" ry="7" fill="url(#recyclePupSnoutGradient)" />

      {/* Nose / Nase */}
      <ellipse cx="32" cy="29" rx="5" ry="3.5" fill="url(#recyclePupNoseGradient)" />
      <ellipse cx="31" cy="28" rx="1.5" ry="1" fill="#666666" opacity="0.4" />

      {/* Mouth */}
      <path d="M32 32 L32 35" stroke="#333" strokeWidth="1" strokeLinecap="round" />
      <path d="M28 35 Q32 38 36 35" stroke="#333" strokeWidth="1" fill="none" />

      {/* Happy tongue */}
      <ellipse cx="32" cy="37" rx="3" ry="2.5" fill="#FF91A4" />
      <ellipse cx="32" cy="36" rx="2" ry="1.5" fill="#FFB6C1" opacity="0.5" />

      {/* Eyes / Augen */}
      <circle cx="24" cy="24" r="5" fill="white" />
      <circle cx="40" cy="24" r="5" fill="white" />
      <circle cx="24" cy="24" r="3" fill="#3D2314" />
      <circle cx="40" cy="24" r="3" fill="#3D2314" />
      <circle cx="24" cy="24" r="1.5" fill="black" />
      <circle cx="40" cy="24" r="1.5" fill="black" />
      <circle cx="25" cy="23" r="1.2" fill="white" />
      <circle cx="41" cy="23" r="1.2" fill="white" />

      {/* Happy eyebrows */}
      <path d="M20 20 Q24 18 28 20" stroke="#8B4513" strokeWidth="1.2" fill="none" />
      <path d="M36 20 Q40 18 44 20" stroke="#8B4513" strokeWidth="1.2" fill="none" />

      {/* Body / Körper - Uniform vest */}
      <rect x="19" y="40" width="26" height="18" fill="url(#recyclePupUniformGradient)" rx="5" />

      {/* Uniform shading */}
      <rect x="19" y="40" width="9" height="18" fill="#228B22" opacity="0.2" rx="5" />

      {/* Collar */}
      <rect x="24" y="40" width="16" height="4" fill="#3CB371" />

      {/* Recycling symbol on chest */}
      <circle cx="32" cy="50" r="6" fill="url(#recyclePupSymbolGradient)" />

      {/* Proper recycling arrows */}
      <path d="M29,47 L32,51 L35,47" stroke="#32CD32" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M35,51 L31,54 L35,54" stroke="#32CD32" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M29,54 L29,51 L26,52" stroke="#32CD32" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Utility pockets */}
      <rect x="20" y="52" width="5" height="4" fill="#228B22" rx="1" />
      <rect x="39" y="52" width="5" height="4" fill="#228B22" rx="1" />

      {/* Legs / Beine */}
      <rect x="21" y="56" width="9" height="10" fill="url(#recyclePupFurGradient)" rx="4" />
      <rect x="34" y="56" width="9" height="10" fill="url(#recyclePupFurGradient)" rx="4" />

      {/* Paw pads */}
      <ellipse cx="25" cy="66" rx="5" ry="2" fill="#804020" />
      <ellipse cx="39" cy="66" rx="5" ry="2" fill="#804020" />

      {/* Paw toes */}
      <circle cx="23" cy="65" r="1" fill="#5C3317" />
      <circle cx="27" cy="65" r="1" fill="#5C3317" />
      <circle cx="37" cy="65" r="1" fill="#5C3317" />
      <circle cx="41" cy="65" r="1" fill="#5C3317" />

      {/* Wagging tail */}
      <ellipse cx="48" cy="46" rx="5" ry="7" fill="url(#recyclePupFurGradient)" transform="rotate(25 48 46)" />

      {/* Leaf accent on cap */}
      <path d="M42 8 Q46 4 44 10 Q42 8 42 8" fill="#228B22" />
      <path d="M43 8 L44 10" stroke="#3CB371" strokeWidth="0.5" />
    </svg>
  );
}
