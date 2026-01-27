/**
 * IcePrincess Sprite Component
 * Enhanced with gradients, icy sparkles, and expressive features
 */

import type { SpriteProps } from '../types';

export function IcePrincess({ size = 64, color = '#87CEEB' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Skin gradient */}
        <radialGradient id="icePrincessSkinGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFF5EE" />
          <stop offset="100%" stopColor="#FFE4D6" />
        </radialGradient>
        {/* Hair gradient - icy white-blue */}
        <linearGradient id="icePrincessHairGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F0F8FF" />
          <stop offset="100%" stopColor="#B0E0E6" />
        </linearGradient>
        {/* Dress gradient */}
        <linearGradient id="icePrincessDressGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B0E0FF" />
          <stop offset="30%" stopColor={color} />
          <stop offset="100%" stopColor="#4682B4" />
        </linearGradient>
        {/* Cape gradient */}
        <linearGradient id="icePrincessCapeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.7" />
          <stop offset="100%" stopColor="#4682B4" stopOpacity="0.3" />
        </linearGradient>
        {/* Crown gradient */}
        <linearGradient id="icePrincessCrownGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E0FFFF" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#5F9EA0" />
        </linearGradient>
        {/* Ice sparkle gradient */}
        <radialGradient id="icePrincessSparkleGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#B0E0FF" />
        </radialGradient>
        {/* Frost aura */}
        <radialGradient id="icePrincessAuraGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#B0E0FF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Frost aura effect */}
      <ellipse cx="32" cy="40" rx="30" ry="26" fill="url(#icePrincessAuraGradient)" />

      {/* Flowing icy hair - back */}
      <ellipse cx="32" cy="20" rx="16" ry="18" fill="url(#icePrincessHairGradient)" />
      {/* Hair sides flowing down */}
      <ellipse cx="16" cy="30" rx="5" ry="16" fill="url(#icePrincessHairGradient)" />
      <ellipse cx="48" cy="30" rx="5" ry="16" fill="url(#icePrincessHairGradient)" />
      {/* Hair wisps */}
      <path d="M14 36 Q10 40 12 46" stroke="#B0E0E6" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M50 36 Q54 40 52 46" stroke="#B0E0E6" strokeWidth="2" fill="none" opacity="0.5" />
      {/* Hair shine */}
      <ellipse cx="26" cy="12" rx="5" ry="3" fill="white" opacity="0.6" />

      {/* Head */}
      <circle cx="32" cy="18" r="10" fill="url(#icePrincessSkinGradient)" />

      {/* Delicate eyebrows */}
      <path d="M26 13 Q28 12 30 14" stroke="#B0C4DE" strokeWidth="0.8" fill="none" />
      <path d="M34 14 Q36 12 38 13" stroke="#B0C4DE" strokeWidth="0.8" fill="none" />

      {/* Beautiful ice-blue eyes */}
      <ellipse cx="28" cy="16" rx="2.5" ry="3" fill="#00BFFF" />
      <ellipse cx="36" cy="16" rx="2.5" ry="3" fill="#00BFFF" />
      <circle cx="28" cy="16" r="1.2" fill="#0080C0" />
      <circle cx="36" cy="16" r="1.2" fill="#0080C0" />
      {/* Eye sparkles */}
      <circle cx="27" cy="15" r="0.8" fill="white" />
      <circle cx="35" cy="15" r="0.8" fill="white" />
      <circle cx="29" cy="17" r="0.4" fill="white" />
      <circle cx="37" cy="17" r="0.4" fill="white" />

      {/* Long lashes */}
      <path d="M25 13 L24 11" stroke="#5F9EA0" strokeWidth="0.5" />
      <path d="M27 12 L27 10" stroke="#5F9EA0" strokeWidth="0.5" />
      <path d="M39 13 L40 11" stroke="#5F9EA0" strokeWidth="0.5" />
      <path d="M37 12 L37 10" stroke="#5F9EA0" strokeWidth="0.5" />

      {/* Rosy cheeks with frost tint */}
      <ellipse cx="24" cy="19" rx="2" ry="1.2" fill="#FFB6C1" opacity="0.4" />
      <ellipse cx="40" cy="19" rx="2" ry="1.2" fill="#FFB6C1" opacity="0.4" />

      {/* Gentle smile */}
      <path d="M29 22 Q32 25 35 22" stroke="#DB7093" strokeWidth="1" fill="none" />

      {/* Ice Crown */}
      <polygon points="20,8 24,0 28,6 32,-2 36,6 40,0 44,8 42,12 22,12" fill="url(#icePrincessCrownGradient)" />
      {/* Crown ice crystals */}
      <polygon points="24,4 22,8 26,8" fill="#E0FFFF" opacity="0.8" />
      <polygon points="32,2 30,8 34,8" fill="#E0FFFF" opacity="0.8" />
      <polygon points="40,4 38,8 42,8" fill="#E0FFFF" opacity="0.8" />
      {/* Snowflake gems on crown */}
      <circle cx="26" cy="6" r="2" fill="white" opacity="0.9" />
      <circle cx="34" cy="4" r="2.5" fill="white" opacity="0.9" />
      <circle cx="40" cy="6" r="2" fill="white" opacity="0.9" />
      {/* Gem sparkles */}
      <circle cx="26" cy="6" r="0.5" fill="#00BFFF" />
      <circle cx="34" cy="4" r="0.6" fill="#00BFFF" />

      {/* Elegant ice dress */}
      <path d="M24 28 L14 64 L50 64 L40 28 Z" fill="url(#icePrincessDressGradient)" />
      {/* Dress bodice detail */}
      <path d="M26 28 Q32 32 38 28" fill="#5F9EA0" opacity="0.5" />
      {/* Snowflake pattern on dress */}
      <circle cx="28" cy="40" r="2.5" fill="white" opacity="0.7" />
      <circle cx="36" cy="50" r="3" fill="white" opacity="0.7" />
      <circle cx="30" cy="58" r="2.5" fill="white" opacity="0.7" />
      <circle cx="40" cy="44" r="2" fill="white" opacity="0.6" />
      {/* Snowflake details */}
      <path d="M28 38 L28 42 M26 40 L30 40" stroke="#B0E0FF" strokeWidth="0.5" />
      <path d="M36 48 L36 52 M34 50 L38 50" stroke="#B0E0FF" strokeWidth="0.5" />

      {/* Frost trim on dress */}
      <path d="M16 58 Q32 62 48 58" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M14 64 Q32 68 50 64" stroke="white" strokeWidth="3" fill="none" opacity="0.5" />

      {/* Flowing cape */}
      <path d="M24 28 Q6 34 10 64 L14 64" fill="url(#icePrincessCapeGradient)" />
      <path d="M40 28 Q58 34 54 64 L50 64" fill="url(#icePrincessCapeGradient)" />
      {/* Cape frost edges */}
      <path d="M10 64 Q8 58 10 52" stroke="white" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M54 64 Q56 58 54 52" stroke="white" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Graceful arms */}
      <path d="M24 32 L12 44" stroke="url(#icePrincessSkinGradient)" strokeWidth="4" strokeLinecap="round" />
      <path d="M40 32 L52 44" stroke="url(#icePrincessSkinGradient)" strokeWidth="4" strokeLinecap="round" />
      {/* Delicate hands */}
      <circle cx="11" cy="45" r="3" fill="url(#icePrincessSkinGradient)" />
      <circle cx="53" cy="45" r="3" fill="url(#icePrincessSkinGradient)" />

      {/* Ice magic sparkles around princess */}
      <circle cx="8" cy="20" r="1.5" fill="url(#icePrincessSparkleGradient)" />
      <circle cx="56" cy="18" r="1" fill="url(#icePrincessSparkleGradient)" />
      <circle cx="6" cy="50" r="1.2" fill="url(#icePrincessSparkleGradient)" />
      <circle cx="58" cy="52" r="0.8" fill="url(#icePrincessSparkleGradient)" />
      <circle cx="20" cy="8" r="0.8" fill="url(#icePrincessSparkleGradient)" />
      <circle cx="44" cy="6" r="0.6" fill="url(#icePrincessSparkleGradient)" />

      {/* Floating snowflakes */}
      <circle cx="4" cy="36" r="1" fill="white" opacity="0.6" />
      <circle cx="60" cy="38" r="0.8" fill="white" opacity="0.6" />
      <circle cx="10" cy="58" r="1.2" fill="white" opacity="0.5" />
      <circle cx="54" cy="60" r="1" fill="white" opacity="0.5" />
    </svg>
  );
}
