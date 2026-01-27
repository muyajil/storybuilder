/**
 * Genie Sprite Component
 * Enhanced with gradients, magical effects, and expressive features
 */

import type { SpriteProps } from '../types';

export function Genie({ size = 64, color = '#4169E1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="genieBodyGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#6B8DD6" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#2E4A8A" />
        </radialGradient>
        {/* Smoke/vapor gradient */}
        <radialGradient id="genieSmokeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6B8DD6" stopOpacity="0.8" />
          <stop offset="70%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor="#2E4A8A" stopOpacity="0.1" />
        </radialGradient>
        {/* Gold gradient */}
        <linearGradient id="genieGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Turban gradient */}
        <linearGradient id="genieTurbanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7B68EE" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#2E4A8A" />
        </linearGradient>
        {/* Ear gradient */}
        <linearGradient id="genieEarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4169E1" />
          <stop offset="100%" stopColor="#6B8DD6" />
        </linearGradient>
        {/* Magic sparkle gradient */}
        <radialGradient id="genieSparkleGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FFD700" />
        </radialGradient>
      </defs>

      {/* Magical aura */}
      <ellipse cx="32" cy="40" rx="24" ry="20" fill="url(#genieSmokeGradient)" opacity="0.3" />

      {/* Turban */}
      <ellipse cx="32" cy="8" rx="10" ry="6" fill="url(#genieTurbanGradient)" />
      <ellipse cx="32" cy="10" rx="12" ry="8" fill="url(#genieTurbanGradient)" />
      {/* Turban jewel */}
      <circle cx="32" cy="6" r="4" fill="url(#genieGoldGradient)" />
      <circle cx="32" cy="6" r="2" fill="#FF0000" />
      <circle cx="31" cy="5" r="0.8" fill="white" opacity="0.8" />
      {/* Turban feather */}
      <path d="M38 4 Q44 0 46 6 Q42 4 38 6" fill="#FFFFFF" opacity="0.8" />

      {/* Head */}
      <circle cx="32" cy="18" r="11" fill="url(#genieBodyGradient)" />

      {/* Pointed ears */}
      <polygon points="18,16 10,8 22,14" fill="url(#genieEarGradient)" />
      <polygon points="46,16 54,8 42,14" fill="url(#genieEarGradient)" />
      {/* Inner ear */}
      <polygon points="18,16 14,12 20,14" fill="#5B7BC0" opacity="0.5" />
      <polygon points="46,16 50,12 44,14" fill="#5B7BC0" opacity="0.5" />
      {/* Earrings */}
      <circle cx="12" cy="14" r="2" fill="url(#genieGoldGradient)" />
      <circle cx="52" cy="14" r="2" fill="url(#genieGoldGradient)" />

      {/* Expressive eyebrows */}
      <path d="M24 10 Q28 8 30 11" stroke="#2E4A8A" strokeWidth="1.5" fill="none" />
      <path d="M34 11 Q36 8 40 10" stroke="#2E4A8A" strokeWidth="1.5" fill="none" />

      {/* Magical glowing eyes */}
      <ellipse cx="28" cy="15" rx="3" ry="3.5" fill="white" />
      <ellipse cx="36" cy="15" rx="3" ry="3.5" fill="white" />
      <circle cx="28" cy="15" r="1.5" fill="#1A1A1A" />
      <circle cx="36" cy="15" r="1.5" fill="#1A1A1A" />
      {/* Eye glow */}
      <circle cx="27" cy="14" r="1" fill="white" />
      <circle cx="35" cy="14" r="1" fill="white" />

      {/* Goatee */}
      <path d="M30 22 Q32 28 34 22" fill="#2E4A8A" />

      {/* Friendly smile */}
      <path d="M28 20 Q32 24 36 20" stroke="white" strokeWidth="1.5" fill="none" />

      {/* Muscular torso */}
      <ellipse cx="32" cy="38" rx="16" ry="14" fill="url(#genieBodyGradient)" />
      {/* Chest definition */}
      <path d="M26 32 Q32 36 38 32" stroke="#2E4A8A" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Gold cuffs/bracelets */}
      <ellipse cx="32" cy="26" rx="6" ry="2" fill="url(#genieGoldGradient)" />

      {/* Powerful arms */}
      <path d="M16 32 Q10 28 6 32 Q4 36 8 38" fill="url(#genieBodyGradient)" />
      <path d="M48 32 Q54 28 58 32 Q60 36 56 38" fill="url(#genieBodyGradient)" />
      {/* Arm cuffs */}
      <ellipse cx="8" cy="34" rx="4" ry="2" fill="url(#genieGoldGradient)" />
      <ellipse cx="56" cy="34" rx="4" ry="2" fill="url(#genieGoldGradient)" />

      {/* Hands */}
      <ellipse cx="6" cy="38" rx="5" ry="4" fill="url(#genieBodyGradient)" />
      <ellipse cx="58" cy="38" rx="5" ry="4" fill="url(#genieBodyGradient)" />
      {/* Fingers */}
      <circle cx="3" cy="40" r="1.5" fill="url(#genieBodyGradient)" />
      <circle cx="61" cy="40" r="1.5" fill="url(#genieBodyGradient)" />

      {/* Belt/sash */}
      <ellipse cx="32" cy="46" rx="14" ry="3" fill="url(#genieGoldGradient)" />
      <circle cx="32" cy="46" r="3" fill="#FF0000" />

      {/* Smoke tail */}
      <path d="M20 50 Q22 58 28 60 Q32 62 36 60 Q42 58 44 50" fill="url(#genieSmokeGradient)" />
      <ellipse cx="32" cy="58" rx="14" ry="6" fill="url(#genieSmokeGradient)" />
      <ellipse cx="32" cy="62" rx="10" ry="4" fill="url(#genieSmokeGradient)" opacity="0.5" />

      {/* Swirling smoke wisps */}
      <path d="M24 54 Q20 58 24 62" stroke="#6B8DD6" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M40 54 Q44 58 40 62" stroke="#6B8DD6" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Magic sparkles */}
      <circle cx="10" cy="24" r="1.5" fill="url(#genieSparkleGradient)" opacity="0.8" />
      <circle cx="54" cy="22" r="1" fill="url(#genieSparkleGradient)" opacity="0.8" />
      <circle cx="18" cy="44" r="1.2" fill="url(#genieSparkleGradient)" opacity="0.8" />
      <circle cx="46" cy="42" r="0.8" fill="url(#genieSparkleGradient)" opacity="0.8" />
      <circle cx="28" cy="52" r="1" fill="url(#genieSparkleGradient)" opacity="0.6" />
      <circle cx="38" cy="56" r="0.8" fill="url(#genieSparkleGradient)" opacity="0.6" />
    </svg>
  );
}
