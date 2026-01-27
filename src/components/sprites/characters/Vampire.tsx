/**
 * Vampire Sprite Component
 * Enhanced with gradients and detailed shading
 */

import type { SpriteProps } from '../types';

export function Vampire({ size = 64, color = '#2F2F2F' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Hair gradient */}
        <radialGradient id="vampireHairGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="70%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* Pale skin gradient */}
        <radialGradient id="vampireSkinGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F0F0F0" />
          <stop offset="100%" stopColor="#D8D8D8" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="vampireEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="70%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#8B0000" />
        </radialGradient>
        {/* Cape gradient */}
        <linearGradient id="vampireCapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Cape inner gradient */}
        <linearGradient id="vampireCapeInnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B0000" />
          <stop offset="50%" stopColor="#660000" />
          <stop offset="100%" stopColor="#4a0000" />
        </linearGradient>
        {/* Vest gradient */}
        <linearGradient id="vampireVestGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Medallion gradient */}
        <radialGradient id="vampireMedallionGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="70%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </radialGradient>
      </defs>

      {/* Cape (behind everything) */}
      <path d="M6 34 Q6 66 32 58 Q58 66 58 34 L50 34 L50 54 Q32 50 14 54 L14 34 Z" fill="url(#vampireCapeGradient)" />
      {/* Cape inner lining */}
      <path d="M10 36 Q10 62 32 56 Q54 62 54 36 L48 36 L48 52 Q32 48 16 52 L16 36 Z" fill="url(#vampireCapeInnerGradient)" />
      {/* Cape collar */}
      <path d="M6 34 L14 34 L18 28 M58 34 L50 34 L46 28" stroke={color} strokeWidth="3" fill="none" />

      {/* Hair base */}
      <ellipse cx="32" cy="20" rx="16" ry="12" fill="url(#vampireHairGradient)" />
      {/* Widow's peak */}
      <path d="M16 18 L22 4 L28 16 L32 6 L36 16 L42 4 L48 18" fill="url(#vampireHairGradient)" />
      {/* Hair shine */}
      <ellipse cx="26" cy="14" rx="4" ry="2" fill="#333" opacity="0.3" />

      {/* Head */}
      <circle cx="32" cy="22" r="11" fill="url(#vampireSkinGradient)" />

      {/* Eyes */}
      <ellipse cx="27" cy="20" rx="4" ry="3" fill="white" />
      <ellipse cx="37" cy="20" rx="4" ry="3" fill="white" />
      {/* Red irises */}
      <circle cx="27" cy="20" r="2.5" fill="url(#vampireEyeGradient)" />
      <circle cx="37" cy="20" r="2.5" fill="url(#vampireEyeGradient)" />
      {/* Pupils */}
      <circle cx="27" cy="20" r="1.2" fill="black" />
      <circle cx="37" cy="20" r="1.2" fill="black" />
      {/* Eye shine */}
      <circle cx="26" cy="19" r="0.6" fill="white" />
      <circle cx="36" cy="19" r="0.6" fill="white" />

      {/* Sinister eyebrows */}
      <path d="M22 15 L30 18" stroke="black" strokeWidth="2" strokeLinecap="round" />
      <path d="M42 15 L34 18" stroke="black" strokeWidth="2" strokeLinecap="round" />

      {/* Nose */}
      <path d="M32 22 L30 26 L32 27 L34 26 Z" fill="#D0D0D0" opacity="0.5" />

      {/* Mouth with fangs */}
      <path d="M26 30 Q32 34 38 30" stroke="#8B0000" strokeWidth="1.5" fill="none" />
      {/* Upper lip */}
      <path d="M26 29 Q32 31 38 29" stroke="#D0D0D0" strokeWidth="0.5" fill="none" />
      {/* Fangs */}
      <polygon points="27,29 25,36 29,29" fill="white" stroke="#DDD" strokeWidth="0.3" />
      <polygon points="37,29 35,36 39,29" fill="white" stroke="#DDD" strokeWidth="0.3" />
      {/* Fang highlights */}
      <line x1="26" y1="30" x2="26" y2="34" stroke="white" strokeWidth="0.5" opacity="0.5" />
      <line x1="38" y1="30" x2="38" y2="34" stroke="white" strokeWidth="0.5" opacity="0.5" />

      {/* Vest */}
      <rect x="22" y="33" width="20" height="22" fill="url(#vampireVestGradient)" rx="2" />
      {/* Vest buttons */}
      <circle cx="32" cy="40" r="1" fill="#444" />
      <circle cx="32" cy="46" r="1" fill="#444" />
      <circle cx="32" cy="52" r="1" fill="#444" />

      {/* White shirt */}
      <path d="M28 33 L28 54 L36 54 L36 33" fill="white" />
      <path d="M29 33 L29 52 L35 52 L35 33" fill="#F5F5F5" />
      {/* Shirt collar */}
      <path d="M28 33 L32 38 L36 33" fill="white" stroke="#DDD" strokeWidth="0.5" />

      {/* Medallion */}
      <circle cx="32" cy="42" r="4" fill="url(#vampireMedallionGradient)" />
      <circle cx="32" cy="42" r="4" fill="none" stroke="#DAA520" strokeWidth="0.5" />
      {/* Medallion detail */}
      <circle cx="32" cy="42" r="2" fill="#DAA520" />
      <circle cx="31" cy="41" r="0.8" fill="#FFE44D" opacity="0.6" />
      {/* Medallion chain */}
      <path d="M28 34 Q30 36 32 38 Q34 36 36 34" stroke="#DAA520" strokeWidth="0.8" fill="none" />

      {/* Bat decorations (on cape) */}
      <path d="M12 50 Q10 48 8 50 L10 52 L12 50 Q14 48 16 50" fill="#1a1a1a" opacity="0.5" />
      <path d="M48 50 Q50 48 52 50 L50 52 L48 50 Q46 48 44 50" fill="#1a1a1a" opacity="0.5" />
    </svg>
  );
}
