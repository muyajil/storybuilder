/**
 * IceDragon Sprite Component
 * Enhanced with gradients, shading, and detailed textures
 */

import type { SpriteProps } from '../types';

export function IceDragon({ size = 64, color = '#B0E0E6' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="iceDragonBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#E0FFFF" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#87CEEB" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="iceDragonHeadGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#F0FFFF" />
          <stop offset="70%" stopColor={color} />
          <stop offset="100%" stopColor="#87CEEB" />
        </radialGradient>
        {/* Ice crystal gradient */}
        <linearGradient id="iceDragonCrystalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#E0FFFF" />
          <stop offset="100%" stopColor="#ADD8E6" />
        </linearGradient>
        {/* Wing gradient */}
        <linearGradient id="iceDragonWingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0FFFF" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#87CEEB" />
        </linearGradient>
        {/* Ice horn gradient */}
        <linearGradient id="iceDragonHornGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#ADD8E6" />
          <stop offset="50%" stopColor="#E0FFFF" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        {/* Leg gradient */}
        <linearGradient id="iceDragonLegGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#87CEEB" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="iceDragonEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="50%" stopColor="#4169E1" />
          <stop offset="100%" stopColor="#191970" />
        </radialGradient>
        {/* Frost breath gradient */}
        <radialGradient id="iceDragonFrostGradient" cx="0%" cy="50%" r="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="50%" stopColor="rgba(224,255,255,0.5)" />
          <stop offset="100%" stopColor="rgba(176,224,230,0)" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="32" cy="62" rx="20" ry="3" fill="rgba(0,0,0,0.1)" />

      {/* Frost breath effect */}
      <ellipse cx="68" cy="32" rx="8" ry="4" fill="url(#iceDragonFrostGradient)" opacity="0.7" />

      {/* Ice tail with crystals */}
      <polygon points="2,42 10,38 6,42 14,40 8,46 16,42" fill="url(#iceDragonCrystalGradient)" />
      {/* Tail crystal sparkle */}
      <circle cx="6" cy="40" r="1" fill="white" opacity="0.8" />
      <circle cx="12" cy="42" r="0.8" fill="white" opacity="0.6" />

      {/* Wings */}
      {/* Back wing */}
      <polygon points="28,26 16,8 8,28 18,32" fill="url(#iceDragonWingGradient)" />
      {/* Wing membrane lines */}
      <path d="M26 26 L18 12" stroke="rgba(135,206,235,0.5)" strokeWidth="0.5" />
      <path d="M22 28 L14 16" stroke="rgba(135,206,235,0.5)" strokeWidth="0.5" />

      {/* Inner wing crystal */}
      <polygon points="32,26 22,12 16,28" fill="url(#iceDragonCrystalGradient)" opacity="0.5" />
      {/* Wing highlight */}
      <ellipse cx="20" cy="20" rx="3" ry="5" fill="rgba(255,255,255,0.2)" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="44" rx="18" ry="14" fill="url(#iceDragonBodyGradient)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="40" rx="8" ry="6" fill="rgba(255,255,255,0.2)" />
      {/* Body scale pattern */}
      <path d="M24 42 Q26 44 24 46" stroke="rgba(135,206,235,0.3)" strokeWidth="0.5" fill="none" />
      <path d="M30 44 Q32 46 30 48" stroke="rgba(135,206,235,0.3)" strokeWidth="0.5" fill="none" />
      <path d="M38 42 Q40 44 38 46" stroke="rgba(135,206,235,0.3)" strokeWidth="0.5" fill="none" />

      {/* Ice crystal belly */}
      <polygon points="32,36 24,46 32,52 40,46" fill="url(#iceDragonCrystalGradient)" />
      {/* Belly highlight */}
      <polygon points="32,38 28,44 32,48 34,44" fill="rgba(255,255,255,0.3)" />

      {/* Head with gradient */}
      <ellipse cx="52" cy="32" rx="13" ry="11" fill="url(#iceDragonHeadGradient)" />
      {/* Head highlight */}
      <ellipse cx="48" cy="28" rx="5" ry="4" fill="rgba(255,255,255,0.25)" />

      {/* Ice horns with gradient */}
      <polygon points="45,24 40,10 50,20" fill="url(#iceDragonHornGradient)" />
      <polygon points="55,22 60,6 58,20" fill="url(#iceDragonHornGradient)" />
      {/* Horn sparkles */}
      <circle cx="44" cy="14" r="1" fill="white" opacity="0.9" />
      <circle cx="58" cy="10" r="1" fill="white" opacity="0.9" />
      {/* Horn highlights */}
      <path d="M46 20 L44 14" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
      <path d="M57 18 L58 12" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />

      {/* Eyes with gradient */}
      <ellipse cx="49" cy="30" rx="5" ry="4.5" fill="white" />
      <ellipse cx="57" cy="30" rx="5" ry="4.5" fill="white" />
      <ellipse cx="50" cy="30" rx="3" ry="2.5" fill="url(#iceDragonEyeGradient)" />
      <ellipse cx="58" cy="30" rx="3" ry="2.5" fill="url(#iceDragonEyeGradient)" />
      {/* Slit pupils */}
      <ellipse cx="50" cy="30" rx="1" ry="2" fill="#0A0A30" />
      <ellipse cx="58" cy="30" rx="1" ry="2" fill="#0A0A30" />
      {/* Eye highlights */}
      <circle cx="48" cy="29" r="1" fill="white" />
      <circle cx="56" cy="29" r="1" fill="white" />

      {/* Snout */}
      <ellipse cx="62" cy="36" rx="4" ry="3" fill={color} />
      <ellipse cx="62" cy="35" rx="2" ry="1.5" fill="rgba(255,255,255,0.2)" />

      {/* Nose with frost */}
      <circle cx="64" cy="36" r="2" fill="#4682B4" />
      <circle cx="63" cy="35" r="0.8" fill="white" opacity="0.5" />

      {/* Frost wisps from nose */}
      <path d="M66 34 Q70 30 68 26" stroke="rgba(224,255,255,0.6)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M66 36 Q72 34 70 30" stroke="rgba(224,255,255,0.4)" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Mouth */}
      <path d="M58 40 Q62 42 66 40" stroke="#4682B4" strokeWidth="0.5" fill="none" />

      {/* Legs with gradient */}
      <rect x="22" y="54" width="7" height="10" fill="url(#iceDragonLegGradient)" rx="2" />
      <rect x="36" y="54" width="7" height="10" fill="url(#iceDragonLegGradient)" rx="2" />
      {/* Leg highlights */}
      <rect x="23" y="55" width="2" height="6" fill="rgba(255,255,255,0.2)" rx="1" />
      <rect x="37" y="55" width="2" height="6" fill="rgba(255,255,255,0.2)" rx="1" />

      {/* Ice claws */}
      <path d="M22 62 L20 66" stroke="#E0FFFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M25 63 L25 67" stroke="#E0FFFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M29 62 L31 66" stroke="#E0FFFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M36 62 L34 66" stroke="#E0FFFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M39 63 L39 67" stroke="#E0FFFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M43 62 L45 66" stroke="#E0FFFF" strokeWidth="2" strokeLinecap="round" />

      {/* Floating ice crystals around */}
      <polygon points="8,20 6,24 10,24" fill="rgba(224,255,255,0.5)" />
      <polygon points="58,52 56,56 60,56" fill="rgba(224,255,255,0.5)" />
      <circle cx="14" cy="14" r="1.5" fill="rgba(255,255,255,0.6)" />
      <circle cx="50" cy="54" r="1" fill="rgba(255,255,255,0.6)" />
    </svg>
  );
}
