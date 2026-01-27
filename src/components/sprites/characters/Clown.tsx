/**
 * Clown Sprite Component
 * Enhanced with gradients and detailed features
 */

import type { SpriteProps } from '../types';

export function Clown({ size = 64, color = '#FF4500' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Suit gradient */}
        <linearGradient id="clownSuitGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6633" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#CC3300" />
        </linearGradient>
        {/* Face gradient */}
        <radialGradient id="clownFaceGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="clownNoseGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="100%" stopColor="#CC0000" />
        </radialGradient>
        {/* Hair gradient red */}
        <radialGradient id="clownHairRedGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="100%" stopColor="#CC0000" />
        </radialGradient>
        {/* Hat gradient */}
        <linearGradient id="clownHatGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF66FF" />
          <stop offset="100%" stopColor="#CC00CC" />
        </linearGradient>
        {/* Shoe gradient yellow */}
        <radialGradient id="clownShoeYellowGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFF66" />
          <stop offset="100%" stopColor="#CCCC00" />
        </radialGradient>
        {/* Shoe gradient magenta */}
        <radialGradient id="clownShoeMagentaGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF66FF" />
          <stop offset="100%" stopColor="#CC00CC" />
        </radialGradient>
      </defs>

      {/* Haare / Hair - colorful puffs */}
      <circle cx="16" cy="18" r="8" fill="url(#clownHairRedGradient)" />
      <circle cx="48" cy="18" r="8" fill="url(#clownHairRedGradient)" />
      <circle cx="24" cy="10" r="6" fill="#00CC00" />
      <circle cx="24" cy="10" r="3" fill="#00FF00" opacity="0.5" />
      <circle cx="40" cy="10" r="6" fill="#0000CC" />
      <circle cx="40" cy="10" r="3" fill="#0000FF" opacity="0.5" />

      {/* Hut / Hat */}
      <polygon points="32,0 26,16 38,16" fill="url(#clownHatGradient)" />
      {/* Hat highlight */}
      <polygon points="32,2 29,14 32,14" fill="white" opacity="0.3" />
      {/* Hat pom-pom */}
      <circle cx="32" cy="0" r="3" fill="#FFFF00" />

      {/* Kopf / Head */}
      <circle cx="32" cy="22" r="12" fill="url(#clownFaceGradient)" />

      {/* Augen / Eyes - big and expressive */}
      <circle cx="24" cy="18" r="5" fill="white" />
      <circle cx="40" cy="18" r="5" fill="white" />
      <circle cx="24" cy="18" r="3" fill="#4169E1" />
      <circle cx="40" cy="18" r="3" fill="#4169E1" />
      <circle cx="24" cy="18" r="1.5" fill="black" />
      <circle cx="40" cy="18" r="1.5" fill="black" />
      {/* Eye sparkle */}
      <circle cx="23" cy="16" r="1" fill="white" />
      <circle cx="39" cy="16" r="1" fill="white" />

      {/* Augenbrauen / Eyebrows - exaggerated */}
      <path d="M19 12 Q24 8 29 12" stroke="black" strokeWidth="2.5" fill="none" />
      <path d="M35 12 Q40 8 45 12" stroke="black" strokeWidth="2.5" fill="none" />

      {/* Große rote Nase / Big red nose */}
      <circle cx="32" cy="24" r="6" fill="url(#clownNoseGradient)" />
      {/* Nose highlight */}
      <ellipse cx="30" cy="22" rx="2" ry="1.5" fill="white" opacity="0.5" />

      {/* Großer Mund / Big mouth */}
      <path d="M22 30 Q32 42 42 30" fill="#FF0000" />
      {/* Mouth highlight */}
      <path d="M24 31 Q32 38 40 31" fill="#FF4444" />
      {/* Teeth */}
      <rect x="28" y="30" width="8" height="4" fill="white" />

      {/* Anzug / Suit */}
      <rect x="20" y="36" width="24" height="20" fill="url(#clownSuitGradient)" rx="3" />
      {/* Suit pattern - polka dots */}
      <circle cx="26" cy="44" r="2" fill="#FFFF00" opacity="0.7" />
      <circle cx="38" cy="48" r="2" fill="#00FFFF" opacity="0.7" />
      <circle cx="30" cy="52" r="2" fill="#FF00FF" opacity="0.7" />

      {/* Große Knöpfe / Big buttons */}
      <circle cx="32" cy="42" r="4" fill="#FFFF00" />
      <circle cx="32" cy="42" r="2" fill="#CCCC00" />
      <circle cx="32" cy="52" r="4" fill="#00FF00" />
      <circle cx="32" cy="52" r="2" fill="#00CC00" />

      {/* Kragen / Collar - ruffle */}
      <ellipse cx="24" cy="38" rx="7" ry="5" fill="#FF00FF" />
      <ellipse cx="24" cy="38" rx="5" ry="3" fill="#FF66FF" />
      <ellipse cx="40" cy="38" rx="7" ry="5" fill="#00FFFF" />
      <ellipse cx="40" cy="38" rx="5" ry="3" fill="#66FFFF" />

      {/* Große Schuhe / Big shoes */}
      <ellipse cx="24" cy="62" rx="12" ry="5" fill="url(#clownShoeYellowGradient)" />
      <ellipse cx="24" cy="61" rx="8" ry="3" fill="#FFFF99" opacity="0.5" />
      <ellipse cx="40" cy="62" rx="12" ry="5" fill="url(#clownShoeMagentaGradient)" />
      <ellipse cx="40" cy="61" rx="8" ry="3" fill="#FF99FF" opacity="0.5" />
      {/* Shoe bows */}
      <circle cx="18" cy="60" r="3" fill="#FF00FF" />
      <circle cx="46" cy="60" r="3" fill="#FFFF00" />

      {/* Arms (hidden behind suit) */}
      <rect x="10" y="38" width="10" height="5" fill="url(#clownSuitGradient)" rx="2" />
      <rect x="44" y="38" width="10" height="5" fill="url(#clownSuitGradient)" rx="2" />

      {/* Balloon string in hand */}
      <path d="M54 40 Q58 30 56 20" stroke="#333" strokeWidth="1" fill="none" />
      <ellipse cx="56" cy="16" rx="4" ry="5" fill="#FF6666" />
      <ellipse cx="55" cy="14" rx="1.5" ry="2" fill="white" opacity="0.4" />
    </svg>
  );
}
