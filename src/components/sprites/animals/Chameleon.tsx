/**
 * Chameleon Sprite Component
 * Enhanced with gradients, scales, and color-shifting effects
 */

import type { SpriteProps } from '../types';

export function Chameleon({ size = 64, color = '#32CD32' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient with color shift effect */}
        <linearGradient id="chameleonBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#40E0D0" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#9ACD32" />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="chameleonHeadGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#50E050" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Eye dome gradient */}
        <radialGradient id="chameleonEyeDomeGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#B0FFB0" />
          <stop offset="100%" stopColor="#90EE90" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="chameleonEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="60%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FF8C00" />
        </radialGradient>
        {/* Tongue gradient */}
        <linearGradient id="chameleonTongueGradient" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF69B4" />
          <stop offset="100%" stopColor="#FF1493" />
        </linearGradient>
        {/* Tail gradient */}
        <linearGradient id="chameleonTailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
        {/* Shine gradient */}
        <linearGradient id="chameleonShineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        {/* Scale pattern */}
        <pattern id="chameleonScalePattern" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <path d="M0 3 Q3 0 6 3 Q3 6 0 3" fill="none" stroke="#228B22" strokeWidth="0.4" opacity="0.3" />
        </pattern>
      </defs>

      {/* Curled tail */}
      <path d="M52 32 Q62 28 60 36 Q58 44 52 42 Q48 48 52 52 Q48 56 44 52" fill="none" stroke="url(#chameleonTailGradient)" strokeWidth="5" strokeLinecap="round" />
      {/* Tail inner detail */}
      <path d="M52 32 Q60 30 58 36 Q56 42 52 40" fill="none" stroke="#90EE90" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

      {/* Back leg */}
      <path d="M46 38 Q50 44 46 46 Q42 48 44 44" fill={color} />
      {/* Back foot */}
      <g fill="#228B22">
        <ellipse cx="44" cy="46" rx="2" ry="3" />
        <ellipse cx="47" cy="46" rx="2" ry="3" />
      </g>

      {/* Body */}
      <ellipse cx="36" cy="32" rx="18" ry="14" fill="url(#chameleonBodyGradient)" />
      {/* Body scale texture */}
      <ellipse cx="36" cy="32" rx="18" ry="14" fill="url(#chameleonScalePattern)" />
      {/* Body shine */}
      <ellipse cx="30" cy="26" rx="10" ry="6" fill="url(#chameleonShineGradient)" />

      {/* Belly - lighter */}
      <ellipse cx="36" cy="38" rx="12" ry="6" fill="#90EE90" opacity="0.3" />

      {/* Ridge/crest on back */}
      <g fill="#228B22" opacity="0.6">
        <polygon points="26,20 28,16 30,20" />
        <polygon points="32,18 34,13 36,18" />
        <polygon points="38,18 40,14 42,18" />
        <polygon points="44,20 46,16 48,20" />
      </g>

      {/* Front leg */}
      <path d="M22 38 Q18 44 22 46 Q26 48 24 44" fill={color} />
      {/* Front foot with gripping toes */}
      <g fill="#228B22">
        <ellipse cx="20" cy="46" rx="2" ry="3" />
        <ellipse cx="23" cy="47" rx="2" ry="3" />
        <ellipse cx="26" cy="46" rx="2" ry="3" />
      </g>

      {/* Head */}
      <ellipse cx="18" cy="28" rx="12" ry="10" fill="url(#chameleonHeadGradient)" />
      {/* Head scale texture */}
      <ellipse cx="18" cy="28" rx="12" ry="10" fill="url(#chameleonScalePattern)" />
      {/* Head casque (helmet crest) */}
      <path d="M22 20 Q26 14 22 18 Q18 12 14 18 Q10 14 14 20" fill={color} />

      {/* Eye dome - characteristic bulging eye */}
      <circle cx="14" cy="26" r="8" fill="url(#chameleonEyeDomeGradient)" />
      {/* Eye dome shine */}
      <ellipse cx="12" cy="23" rx="3" ry="2" fill="url(#chameleonShineGradient)" />

      {/* Eye - with unique chameleon pupil */}
      <circle cx="14" cy="26" r="5" fill="url(#chameleonEyeGradient)" />
      {/* Circular pupil */}
      <circle cx="14" cy="26" r="2.5" fill="#1a1a1a" />
      {/* Eye shine */}
      <circle cx="12" cy="24" r="1.2" fill="white" />
      <circle cx="15" cy="27" r="0.6" fill="white" opacity="0.5" />

      {/* Snout */}
      <ellipse cx="6" cy="30" rx="4" ry="3" fill={color} />

      {/* Nostril */}
      <circle cx="4" cy="29" r="0.8" fill="#228B22" />

      {/* Tongue - extended and curled */}
      <path d="M8 32 Q2 30 0 28 Q-2 26 2 28" stroke="url(#chameleonTongueGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Tongue tip - sticky pad */}
      <circle cx="0" cy="28" r="2" fill="#FF1493" />

      {/* Color spots - showing color change ability */}
      <g opacity="0.4">
        <circle cx="30" cy="30" r="3" fill="#40E0D0" />
        <circle cx="40" cy="34" r="2.5" fill="#9ACD32" />
        <circle cx="34" cy="26" r="2" fill="#FFD700" />
        <circle cx="44" cy="28" r="2" fill="#FF69B4" />
      </g>

      {/* Stripe pattern */}
      <g stroke="#228B22" strokeWidth="1" opacity="0.3">
        <path d="M24 24 Q30 22 36 24" fill="none" />
        <path d="M26 32 Q32 30 38 32" fill="none" />
        <path d="M24 40 Q30 38 36 40" fill="none" />
      </g>
    </svg>
  );
}
