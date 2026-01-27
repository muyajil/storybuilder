/**
 * Zebra Sprite Component
 */

import type { SpriteProps } from '../types';

export function Zebra({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <linearGradient id="zebraBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#E8E8E8" />
        </linearGradient>
        {/* Head gradient */}
        <radialGradient id="zebraHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#F0F0F0" />
        </radialGradient>
        {/* Nose gradient */}
        <radialGradient id="zebraNoseGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#555555" />
          <stop offset="100%" stopColor="#333333" />
        </radialGradient>
        {/* Mane gradient */}
        <linearGradient id="zebraManeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2d2d2d" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        {/* Leg gradient */}
        <linearGradient id="zebraLegGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="80%" stopColor="#E8E8E8" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        {/* Eye gradient */}
        <radialGradient id="zebraEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4a3520" />
          <stop offset="100%" stopColor="#2d1f10" />
        </radialGradient>
        {/* Stripe shadow gradient */}
        <linearGradient id="zebraStripeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="50%" stopColor="#000000" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="34" cy="62" rx="20" ry="3" fill="#000" opacity="0.2" />

      {/* Tail */}
      <path d="M14 38 Q8 42 10 50" stroke="url(#zebraBodyGradient)" strokeWidth="2" fill="none" />
      <path d="M10 48 Q6 52 8 56" stroke="url(#zebraManeGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Back legs */}
      <rect x="18" y="48" width="6" height="14" rx="2" fill="url(#zebraLegGradient)" />
      <rect x="26" y="48" width="6" height="14" rx="2" fill="url(#zebraLegGradient)" />
      {/* Back leg stripes */}
      <path d="M19 50 L23 50" stroke="black" strokeWidth="2" />
      <path d="M19 54 L23 54" stroke="black" strokeWidth="2" />
      <path d="M27 50 L31 50" stroke="black" strokeWidth="2" />
      <path d="M27 54 L31 54" stroke="black" strokeWidth="2" />
      {/* Hooves */}
      <rect x="18" y="60" width="6" height="2" rx="1" fill="#1a1a1a" />
      <rect x="26" y="60" width="6" height="2" rx="1" fill="#1a1a1a" />

      {/* Body */}
      <ellipse cx="30" cy="40" rx="18" ry="12" fill="url(#zebraBodyGradient)" />

      {/* Body highlight */}
      <ellipse cx="24" cy="36" rx="8" ry="5" fill="white" opacity="0.4" />

      {/* Body stripes */}
      <path d="M16 34 Q15 40 16 46" stroke="url(#zebraStripeGradient)" strokeWidth="3" fill="none" />
      <path d="M22 32 Q21 40 22 48" stroke="url(#zebraStripeGradient)" strokeWidth="3" fill="none" />
      <path d="M28 31 Q27 40 28 49" stroke="url(#zebraStripeGradient)" strokeWidth="3" fill="none" />
      <path d="M34 32 Q33 40 34 48" stroke="url(#zebraStripeGradient)" strokeWidth="3" fill="none" />
      <path d="M40 34 Q39 40 40 46" stroke="url(#zebraStripeGradient)" strokeWidth="2.5" fill="none" />

      {/* Neck */}
      <ellipse cx="46" cy="34" rx="8" ry="10" fill="url(#zebraBodyGradient)" />
      {/* Neck stripes */}
      <path d="M42 28 Q41 34 42 40" stroke="black" strokeWidth="2" fill="none" />
      <path d="M46 26 Q45 34 46 42" stroke="black" strokeWidth="2" fill="none" />
      <path d="M50 28 Q49 34 50 40" stroke="black" strokeWidth="2" fill="none" />

      {/* Head */}
      <ellipse cx="54" cy="26" rx="10" ry="12" fill="url(#zebraHeadGradient)" />

      {/* Head highlight */}
      <ellipse cx="50" cy="22" rx="4" ry="3" fill="white" opacity="0.3" />

      {/* Head stripes */}
      <path d="M48 18 Q47 26 48 32" stroke="black" strokeWidth="2" fill="none" />
      <path d="M52 16 Q51 24 52 30" stroke="black" strokeWidth="2" fill="none" />

      {/* Ears */}
      <ellipse cx="48" cy="12" rx="3" ry="5" fill="url(#zebraBodyGradient)" />
      <ellipse cx="56" cy="12" rx="3" ry="5" fill="url(#zebraBodyGradient)" />
      {/* Inner ears */}
      <ellipse cx="48" cy="13" rx="1.5" ry="3" fill="#FFB6C1" opacity="0.5" />
      <ellipse cx="56" cy="13" rx="1.5" ry="3" fill="#FFB6C1" opacity="0.5" />
      {/* Ear stripes */}
      <path d="M47 10 L49 10" stroke="black" strokeWidth="1.5" />
      <path d="M55 10 L57 10" stroke="black" strokeWidth="1.5" />

      {/* Mane */}
      <path d="M44 14 Q46 10 48 14" stroke="url(#zebraManeGradient)" strokeWidth="4" fill="none" />
      <path d="M46 16 Q48 12 50 16" stroke="url(#zebraManeGradient)" strokeWidth="4" fill="none" />
      <path d="M42 20 Q44 16 46 20" stroke="url(#zebraManeGradient)" strokeWidth="3" fill="none" />
      <path d="M40 26 Q42 22 44 26" stroke="url(#zebraManeGradient)" strokeWidth="3" fill="none" />

      {/* Eye - white */}
      <ellipse cx="56" cy="24" rx="3" ry="3.5" fill="white" />
      {/* Eye - iris */}
      <circle cx="56" cy="24" r="2" fill="url(#zebraEyeGradient)" />
      {/* Eye - pupil */}
      <circle cx="56" cy="24" r="1" fill="black" />
      {/* Eye shine */}
      <circle cx="57" cy="23" r="0.7" fill="white" />
      <circle cx="55" cy="25" r="0.4" fill="white" opacity="0.6" />

      {/* Nose / Muzzle */}
      <ellipse cx="60" cy="32" rx="4" ry="3" fill="url(#zebraNoseGradient)" />
      {/* Nose highlight */}
      <ellipse cx="58" cy="31" rx="1.5" ry="1" fill="white" opacity="0.2" />
      {/* Nostrils */}
      <ellipse cx="60" cy="33" rx="1" ry="0.6" fill="#1a1a1a" />
      <ellipse cx="62" cy="32" rx="0.8" ry="0.5" fill="#1a1a1a" />

      {/* Mouth line */}
      <path d="M58 35 Q60 36 62 35" stroke="#444" strokeWidth="0.5" fill="none" />

      {/* Front legs */}
      <rect x="38" y="46" width="5" height="14" rx="2" fill="url(#zebraLegGradient)" />
      <rect x="44" y="44" width="5" height="16" rx="2" fill="url(#zebraLegGradient)" />
      {/* Front leg stripes */}
      <path d="M39 48 L42 48" stroke="black" strokeWidth="2" />
      <path d="M39 52 L42 52" stroke="black" strokeWidth="2" />
      <path d="M45 48 L48 48" stroke="black" strokeWidth="2" />
      <path d="M45 52 L48 52" stroke="black" strokeWidth="2" />
      {/* Front hooves */}
      <rect x="38" y="58" width="5" height="2" rx="1" fill="#1a1a1a" />
      <rect x="44" y="58" width="5" height="2" rx="1" fill="#1a1a1a" />
    </svg>
  );
}
