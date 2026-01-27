/**
 * Mermaid Sprite Component
 * Enhanced with gradients, flowing hair, and iridescent scales
 */

import type { SpriteProps } from '../types';

export function Mermaid({ size = 64, color = '#00CED1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Hair gradient */}
        <linearGradient id="mermaidHairGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="50%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>
        {/* Skin gradient */}
        <linearGradient id="mermaidSkinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </linearGradient>
        {/* Tail gradient */}
        <linearGradient id="mermaidTailGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#40E0D0" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#008B8B" />
        </linearGradient>
        {/* Iridescent scale gradient */}
        <linearGradient id="mermaidScaleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#40E0D0" />
          <stop offset="25%" stopColor="#00CED1" />
          <stop offset="50%" stopColor="#20B2AA" />
          <stop offset="75%" stopColor="#48D1CC" />
          <stop offset="100%" stopColor="#00CED1" />
        </linearGradient>
        {/* Crown gradient */}
        <linearGradient id="mermaidCrownGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Top gradient */}
        <linearGradient id="mermaidTopGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5FDDE5" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
        {/* Fin gradient */}
        <linearGradient id="mermaidFinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7FFFD4" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#40E0D0" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* Flowing hair back layer */}
      <ellipse cx="32" cy="18" rx="16" ry="16" fill="url(#mermaidHairGradient)" />
      <ellipse cx="18" cy="28" rx="8" ry="16" fill="url(#mermaidHairGradient)" />
      <ellipse cx="46" cy="28" rx="8" ry="16" fill="url(#mermaidHairGradient)" />
      <ellipse cx="12" cy="42" rx="5" ry="12" fill="#CC0000" />
      <ellipse cx="52" cy="42" rx="5" ry="12" fill="#CC0000" />

      {/* Hair highlights */}
      <ellipse cx="26" cy="14" rx="4" ry="6" fill="#FF6666" opacity="0.5" />
      <ellipse cx="38" cy="16" rx="3" ry="5" fill="#FF6666" opacity="0.5" />

      {/* Crown / Krone */}
      <polygon points="24,6 27,2 30,5 32,1 34,5 37,2 40,6" fill="url(#mermaidCrownGradient)" />
      <circle cx="32" cy="4" r="2" fill="#FF69B4" />
      <circle cx="27" cy="5" r="1" fill="#00CED1" />
      <circle cx="37" cy="5" r="1" fill="#00CED1" />

      {/* Head / Kopf */}
      <circle cx="32" cy="18" r="11" fill="url(#mermaidSkinGradient)" />

      {/* Face highlight */}
      <ellipse cx="30" cy="15" rx="5" ry="4" fill="#FFF5E6" opacity="0.4" />

      {/* Eyes / Augen */}
      <ellipse cx="27" cy="16" rx="3" ry="2.5" fill="white" />
      <ellipse cx="37" cy="16" rx="3" ry="2.5" fill="white" />
      <circle cx="27" cy="16" r="2" fill="#20B2AA" />
      <circle cx="37" cy="16" r="2" fill="#20B2AA" />
      <circle cx="27" cy="16" r="1" fill="black" />
      <circle cx="37" cy="16" r="1" fill="black" />
      <circle cx="28" cy="15" r="0.7" fill="white" />
      <circle cx="38" cy="15" r="0.7" fill="white" />

      {/* Eyelashes */}
      <path d="M24 14 L23 12" stroke="#CC0000" strokeWidth="1" />
      <path d="M40 14 L41 12" stroke="#CC0000" strokeWidth="1" />

      {/* Eyebrows */}
      <path d="M24 13 Q27 11 30 13" stroke="#CC0000" strokeWidth="1" fill="none" />
      <path d="M34 13 Q37 11 40 13" stroke="#CC0000" strokeWidth="1" fill="none" />

      {/* Blush */}
      <ellipse cx="24" cy="20" rx="2" ry="1" fill="#FFB6C1" opacity="0.5" />
      <ellipse cx="40" cy="20" rx="2" ry="1" fill="#FFB6C1" opacity="0.5" />

      {/* Mouth / Mund */}
      <path d="M29 23 Q32 26 35 23" stroke="#FF69B4" strokeWidth="1.5" fill="none" />

      {/* Necklace */}
      <path d="M24 28 Q32 32 40 28" stroke="#FFD700" strokeWidth="1.5" fill="none" />
      <circle cx="32" cy="31" r="2" fill="#FF69B4" />

      {/* Top / Oberteil */}
      <ellipse cx="32" cy="34" rx="11" ry="6" fill="url(#mermaidTopGradient)" />
      <ellipse cx="28" cy="34" rx="4" ry="3" fill="#5FDDE5" opacity="0.5" />
      <ellipse cx="36" cy="34" rx="4" ry="3" fill="#5FDDE5" opacity="0.5" />

      {/* Tail / Schwanz */}
      <ellipse cx="32" cy="48" rx="13" ry="17" fill="url(#mermaidTailGradient)" />

      {/* Tail shimmer */}
      <ellipse cx="32" cy="46" rx="10" ry="12" fill="#7FFFD4" opacity="0.3" />

      {/* Scale pattern / Schuppen-Muster */}
      <ellipse cx="26" cy="42" rx="5" ry="3.5" fill="url(#mermaidScaleGradient)" stroke="#008B8B" strokeWidth="0.5" />
      <ellipse cx="38" cy="42" rx="5" ry="3.5" fill="url(#mermaidScaleGradient)" stroke="#008B8B" strokeWidth="0.5" />
      <ellipse cx="32" cy="46" rx="5" ry="3.5" fill="url(#mermaidScaleGradient)" stroke="#008B8B" strokeWidth="0.5" />
      <ellipse cx="26" cy="50" rx="4" ry="3" fill="url(#mermaidScaleGradient)" stroke="#008B8B" strokeWidth="0.5" />
      <ellipse cx="38" cy="50" rx="4" ry="3" fill="url(#mermaidScaleGradient)" stroke="#008B8B" strokeWidth="0.5" />
      <ellipse cx="32" cy="54" rx="4" ry="3" fill="url(#mermaidScaleGradient)" stroke="#008B8B" strokeWidth="0.5" />

      {/* Fins / Flosse */}
      <ellipse cx="22" cy="60" rx="10" ry="5" fill="url(#mermaidFinGradient)" transform="rotate(-25 22 60)" />
      <ellipse cx="42" cy="60" rx="10" ry="5" fill="url(#mermaidFinGradient)" transform="rotate(25 42 60)" />

      {/* Fin details */}
      <path d="M16 58 Q20 62 24 58" stroke="#40E0D0" strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M40 58 Q44 62 48 58" stroke="#40E0D0" strokeWidth="0.5" fill="none" opacity="0.6" />

      {/* Arms */}
      <path d="M22 34 Q16 38 18 44" stroke="url(#mermaidSkinGradient)" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M42 34 Q48 38 46 44" stroke="url(#mermaidSkinGradient)" strokeWidth="5" strokeLinecap="round" fill="none" />

      {/* Hands */}
      <circle cx="18" cy="44" r="3" fill="url(#mermaidSkinGradient)" />
      <circle cx="46" cy="44" r="3" fill="url(#mermaidSkinGradient)" />

      {/* Sparkles */}
      <circle cx="10" cy="36" r="1" fill="#FFFFFF" opacity="0.8" />
      <circle cx="54" cy="38" r="1" fill="#FFFFFF" opacity="0.8" />
      <circle cx="28" cy="56" r="1" fill="#7FFFD4" opacity="0.8" />
    </svg>
  );
}
