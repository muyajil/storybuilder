/**
 * Fox Sprite Component
 * Enhanced with gradients, fur texture, and clever expression
 */

import type { SpriteProps } from '../types';

export function Fox({ size = 64, color = '#FF6600' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="foxBodyGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#FF8533" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#CC5200" />
        </radialGradient>
        {/* White fur gradient */}
        <radialGradient id="foxWhiteGrad" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#FFF8F0" />
          <stop offset="100%" stopColor="#F5E8DC" />
        </radialGradient>
        {/* Head gradient */}
        <linearGradient id="foxHeadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8533" />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor="#CC5200" />
        </linearGradient>
        {/* Ear gradient */}
        <linearGradient id="foxEarGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor="#FF8533" />
          <stop offset="100%" stopColor="#2F2F2F" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="foxEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#4a3728" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* Leg gradient */}
        <linearGradient id="foxLegGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="70%" stopColor="#CC5200" />
          <stop offset="100%" stopColor="#2F2F2F" />
        </linearGradient>
      </defs>

      {/* Bushy tail with gradient */}
      <path d="M8 44 Q4 36 12 32 Q20 28 16 40 Q12 52 8 44" fill="url(#foxBodyGrad)" />
      {/* Tail highlight */}
      <path d="M10 40 Q8 36 12 34" stroke="#FF9955" strokeWidth="2" fill="none" opacity="0.4" />
      {/* Tail white tip */}
      <path d="M6 44 Q4 40 8 38 Q12 36 10 42 Q8 48 6 44" fill="url(#foxWhiteGrad)" />
      {/* Tail fur texture */}
      <path d="M10,36 Q12,38 10,40" stroke="#CC5200" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M14,34 Q16,36 14,38" stroke="#CC5200" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Body with gradient */}
      <ellipse cx="32" cy="44" rx="16" ry="12" fill="url(#foxBodyGrad)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="40" rx="8" ry="5" fill="#FF9955" opacity="0.3" />
      {/* Body shadow */}
      <ellipse cx="34" cy="52" rx="12" ry="4" fill="#993D00" opacity="0.2" />

      {/* White chest with gradient */}
      <ellipse cx="38" cy="48" rx="8" ry="8" fill="url(#foxWhiteGrad)" />
      {/* Chest fur texture */}
      <path d="M34,46 Q36,48 34,50" stroke="#E8D8C8" strokeWidth="0.6" fill="none" opacity="0.5" />
      <path d="M40,44 Q42,46 40,48" stroke="#E8D8C8" strokeWidth="0.6" fill="none" opacity="0.5" />

      {/* Head with gradient */}
      <polygon points="44,36 56,20 60,36 56,44 44,44" fill="url(#foxHeadGrad)" />
      {/* Head highlight */}
      <path d="M48,32 L52,24 L54,32" fill="#FF9955" opacity="0.3" />

      {/* Ears with gradient */}
      <polygon points="48,24 44,12 52,20" fill="url(#foxEarGrad)" />
      <polygon points="56,22 58,10 62,20" fill="url(#foxEarGrad)" />
      {/* Ear inner black tips */}
      <polygon points="48,24 46,16 50,22" fill="#2F2F2F" />
      <polygon points="56,22 58,14 60,20" fill="#2F2F2F" />
      {/* Ear highlight */}
      <path d="M48,20 L46,16" stroke="#FF9955" strokeWidth="0.5" opacity="0.4" />
      <path d="M58,18 L58,14" stroke="#FF9955" strokeWidth="0.5" opacity="0.4" />

      {/* White snout with gradient */}
      <polygon points="56,36 64,40 56,44" fill="url(#foxWhiteGrad)" />
      {/* Snout detail */}
      <path d="M58,38 Q60,40 58,42" stroke="#E8D8C8" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Nose with detail */}
      <circle cx="62" cy="40" r="2.5" fill="#1a1a1a" />
      {/* Nose highlight */}
      <ellipse cx="61" cy="39" rx="0.8" ry="0.5" fill="#4a4a4a" opacity="0.5" />

      {/* Eye with depth */}
      <ellipse cx="52" cy="32" rx="2.5" ry="3" fill="white" />
      <circle cx="52" cy="32" r="2" fill="url(#foxEyeGrad)" />
      {/* Eye sparkle */}
      <circle cx="51.5" cy="31.5" r="0.6" fill="white" />
      {/* Clever eyebrow */}
      <path d="M49 29 Q52 28 55 30" stroke="#993D00" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Whisker dots */}
      <circle cx="58" cy="38" r="0.5" fill="#2F2F2F" opacity="0.4" />
      <circle cx="58" cy="42" r="0.5" fill="#2F2F2F" opacity="0.4" />

      {/* Mouth line */}
      <path d="M60 42 Q62 44 60 46" stroke="#993D00" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Legs with gradient */}
      <rect x="24" y="52" width="4" height="10" fill="url(#foxLegGrad)" rx="1" />
      <rect x="38" y="52" width="4" height="10" fill="url(#foxLegGrad)" rx="1" />
      {/* Leg highlights */}
      <rect x="25" y="53" width="1.5" height="6" fill="#FF9955" opacity="0.3" rx="0.5" />
      <rect x="39" y="53" width="1.5" height="6" fill="#FF9955" opacity="0.3" rx="0.5" />
      {/* Paws - dark tips */}
      <ellipse cx="26" cy="62" rx="2.5" ry="1.5" fill="#2F2F2F" />
      <ellipse cx="40" cy="62" rx="2.5" ry="1.5" fill="#2F2F2F" />

      {/* Fur texture on body */}
      <path d="M26,42 Q28,44 26,46" stroke="#CC5200" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M38,40 Q36,42 38,44" stroke="#CC5200" strokeWidth="0.5" fill="none" opacity="0.3" />
    </svg>
  );
}
