/**
 * Police Sprite Component
 * Enhanced with gradients, detailed uniform, and expressive features
 */

import type { SpriteProps } from '../types';

export function Police({ size = 64, color = '#191970' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Uniform gradient */}
        <linearGradient id="policeUniformGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2E2E8B" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#0F0F4A" />
        </linearGradient>
        {/* Cap gradient */}
        <linearGradient id="policeCapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2E2E8B" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#0F0F4A" />
        </linearGradient>
        {/* Skin gradient */}
        <linearGradient id="policeSkinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </linearGradient>
        {/* Badge gradient */}
        <linearGradient id="policeBadgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Belt gradient */}
        <linearGradient id="policeBeltGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A4A4A" />
          <stop offset="50%" stopColor="#333333" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        {/* Shoe gradient */}
        <linearGradient id="policeShoeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#333333" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
      </defs>

      {/* Cap brim / Mützenschirm */}
      <ellipse cx="32" cy="11" rx="13" ry="6" fill="url(#policeCapGradient)" />
      <ellipse cx="32" cy="10" rx="11" ry="4" fill="#2E2E8B" opacity="0.3" />

      {/* Cap top / Mütze */}
      <rect x="19" y="4" width="26" height="8" fill="url(#policeCapGradient)" rx="3" />
      <rect x="21" y="5" width="22" height="4" fill="#2E2E8B" opacity="0.3" />

      {/* Cap band */}
      <rect x="19" y="10" width="26" height="2" fill="#0F0F4A" />

      {/* Cap badge / Abzeichen */}
      <circle cx="32" cy="7" r="4" fill="url(#policeBadgeGradient)" />
      <circle cx="32" cy="7" r="2.5" fill="#0F0F4A" />
      <polygon points="32,5 31,7 32,9 33,7" fill="url(#policeBadgeGradient)" />

      {/* Head / Kopf */}
      <circle cx="32" cy="19" r="11" fill="url(#policeSkinGradient)" />

      {/* Face highlight */}
      <ellipse cx="30" cy="16" rx="5" ry="4" fill="#FFF5E6" opacity="0.3" />

      {/* Eyes / Augen */}
      <ellipse cx="27" cy="17" rx="3" ry="2.5" fill="white" />
      <ellipse cx="37" cy="17" rx="3" ry="2.5" fill="white" />
      <circle cx="27" cy="17" r="2" fill="#3D2314" />
      <circle cx="37" cy="17" r="2" fill="#3D2314" />
      <circle cx="27" cy="17" r="1" fill="black" />
      <circle cx="37" cy="17" r="1" fill="black" />
      <circle cx="28" cy="16" r="0.7" fill="white" />
      <circle cx="38" cy="16" r="0.7" fill="white" />

      {/* Eyebrows - friendly */}
      <path d="M24 14 Q27 12 30 14" stroke="#333333" strokeWidth="1" fill="none" />
      <path d="M34 14 Q37 12 40 14" stroke="#333333" strokeWidth="1" fill="none" />

      {/* Nose */}
      <ellipse cx="32" cy="20" rx="1.5" ry="1" fill="#EEB89B" />

      {/* Mouth / Mund - friendly smile */}
      <path d="M28 24 Q32 27 36 24" stroke="#333333" strokeWidth="1.2" fill="none" />

      {/* Rosy cheeks */}
      <circle cx="24" cy="21" r="2" fill="#FFB6C1" opacity="0.4" />
      <circle cx="40" cy="21" r="2" fill="#FFB6C1" opacity="0.4" />

      {/* Uniform shirt / Uniform */}
      <rect x="19" y="28" width="26" height="23" fill="url(#policeUniformGradient)" rx="3" />

      {/* Uniform shading */}
      <rect x="19" y="28" width="9" height="23" fill="#0F0F4A" opacity="0.2" rx="3" />

      {/* Shirt collar */}
      <path d="M24 28 L28 34 L32 28" fill="#2E2E8B" />
      <path d="M40 28 L36 34 L32 28" fill="#2E2E8B" />

      {/* Tie */}
      <polygon points="32,28 30,32 32,50 34,32" fill="#0F0F4A" />
      <polygon points="32,30 31,32 32,34 33,32" fill="#2E2E8B" opacity="0.5" />

      {/* Chest badge / Abzeichen */}
      <polygon points="24,34 20,42 24,48 28,42" fill="url(#policeBadgeGradient)" />
      <polygon points="24,36 22,42 24,46 26,42" fill="#B8860B" opacity="0.3" />

      {/* Pocket */}
      <rect x="34" y="36" width="8" height="6" fill="#0F0F4A" opacity="0.3" rx="1" />
      <rect x="35" y="37" width="6" height="1" fill="url(#policeBadgeGradient)" opacity="0.5" />

      {/* Name tag */}
      <rect x="35" y="32" width="8" height="3" fill="#0F0F4A" rx="0.5" />
      <rect x="36" y="33" width="6" height="1" fill="#C0C0C0" />

      {/* Arms / Arme */}
      <rect x="9" y="30" width="11" height="7" fill="url(#policeUniformGradient)" rx="3" />
      <rect x="44" y="30" width="11" height="7" fill="url(#policeUniformGradient)" rx="3" />

      {/* Shoulder patches */}
      <ellipse cx="12" cy="31" rx="3" ry="2" fill="url(#policeBadgeGradient)" opacity="0.7" />
      <ellipse cx="52" cy="31" rx="3" ry="2" fill="url(#policeBadgeGradient)" opacity="0.7" />

      {/* Hands / Hände */}
      <circle cx="9" cy="34" r="4" fill="url(#policeSkinGradient)" />
      <circle cx="55" cy="34" r="4" fill="url(#policeSkinGradient)" />

      {/* Belt / Gürtel */}
      <rect x="19" y="46" width="26" height="5" fill="url(#policeBeltGradient)" rx="1" />

      {/* Belt buckle */}
      <rect x="29" y="45" width="6" height="7" fill="url(#policeBadgeGradient)" rx="1" />
      <rect x="30" y="46" width="4" height="5" fill="#333333" rx="0.5" />

      {/* Belt accessories */}
      <rect x="20" y="47" width="4" height="3" fill="#333333" rx="0.5" />
      <rect x="40" y="47" width="4" height="3" fill="#333333" rx="0.5" />

      {/* Legs / Beine */}
      <rect x="21" y="50" width="9" height="13" fill="url(#policeUniformGradient)" rx="2" />
      <rect x="34" y="50" width="9" height="13" fill="url(#policeUniformGradient)" rx="2" />

      {/* Pant leg crease */}
      <line x1="25.5" y1="52" x2="25.5" y2="62" stroke="#0F0F4A" strokeWidth="0.5" opacity="0.3" />
      <line x1="38.5" y1="52" x2="38.5" y2="62" stroke="#0F0F4A" strokeWidth="0.5" opacity="0.3" />

      {/* Shoes / Schuhe */}
      <ellipse cx="25" cy="63" rx="6" ry="2.5" fill="url(#policeShoeGradient)" />
      <ellipse cx="39" cy="63" rx="6" ry="2.5" fill="url(#policeShoeGradient)" />

      {/* Shoe shine */}
      <ellipse cx="24" cy="62" rx="3" ry="1" fill="#4A4A4A" opacity="0.5" />
      <ellipse cx="38" cy="62" rx="3" ry="1" fill="#4A4A4A" opacity="0.5" />

      {/* Radio on shoulder */}
      <rect x="6" y="28" width="3" height="5" fill="#333333" rx="0.5" />
      <rect x="6" y="26" width="1" height="3" fill="#333333" />
    </svg>
  );
}
