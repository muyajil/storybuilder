/**
 * ConstructionPup Sprite Component
 * Enhanced with gradients and detailed features
 */

import type { SpriteProps } from '../types';

export function ConstructionPup({ size = 64, color = '#FF8C00' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Helmet gradient */}
        <linearGradient id="constructionPupHelmetGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#CC9900" />
        </linearGradient>
        {/* Fur gradient - gray */}
        <radialGradient id="constructionPupFurGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A0A0A0" />
          <stop offset="100%" stopColor="#707070" />
        </radialGradient>
        {/* Ear gradient */}
        <radialGradient id="constructionPupEarGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#808080" />
          <stop offset="100%" stopColor="#505050" />
        </radialGradient>
        {/* Snout gradient */}
        <radialGradient id="constructionPupSnoutGradient" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#909090" />
        </radialGradient>
        {/* Vest gradient */}
        <linearGradient id="constructionPupVestGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFA033" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#CC7000" />
        </linearGradient>
        {/* Stripe gradient */}
        <linearGradient id="constructionPupStripeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#444" />
          <stop offset="50%" stopColor="#333" />
          <stop offset="100%" stopColor="#444" />
        </linearGradient>
      </defs>

      {/* Helm / Helmet */}
      <ellipse cx="32" cy="10" rx="14" ry="8" fill="url(#constructionPupHelmetGradient)" />
      <rect x="18" y="8" width="28" height="10" fill="url(#constructionPupHelmetGradient)" />
      {/* Helmet brim */}
      <ellipse cx="32" cy="16" rx="16" ry="3" fill="#CC9900" />
      {/* Helmet highlight */}
      <ellipse cx="26" cy="8" rx="6" ry="3" fill="#FFEB99" opacity="0.5" />
      {/* Helmet logo area */}
      <rect x="28" y="6" width="8" height="6" fill="#CC9900" rx="1" />
      <text x="32" y="11" fill="white" fontSize="4" textAnchor="middle" fontFamily="sans-serif">PAW</text>

      {/* Ohren / Ears */}
      <ellipse cx="14" cy="20" rx="6" ry="9" fill="url(#constructionPupEarGradient)" />
      <ellipse cx="14" cy="20" rx="4" ry="6" fill="#606060" />
      <ellipse cx="50" cy="20" rx="6" ry="9" fill="url(#constructionPupEarGradient)" />
      <ellipse cx="50" cy="20" rx="4" ry="6" fill="#606060" />

      {/* Kopf / Head */}
      <ellipse cx="32" cy="24" rx="16" ry="14" fill="url(#constructionPupFurGradient)" />
      {/* Head highlight */}
      <ellipse cx="28" cy="18" rx="6" ry="4" fill="#B0B0B0" opacity="0.4" />

      {/* Schnauze / Snout */}
      <ellipse cx="32" cy="30" rx="8" ry="6" fill="url(#constructionPupSnoutGradient)" />

      {/* Nase / Nose */}
      <ellipse cx="32" cy="28" rx="4" ry="3" fill="black" />
      {/* Nose highlight */}
      <ellipse cx="31" cy="27" rx="1.5" ry="1" fill="#444" />

      {/* Augen / Eyes - friendly */}
      <ellipse cx="24" cy="22" rx="4.5" ry="5" fill="white" />
      <ellipse cx="40" cy="22" rx="4.5" ry="5" fill="white" />
      <circle cx="24" cy="23" r="3" fill="#4A3728" />
      <circle cx="40" cy="23" r="3" fill="#4A3728" />
      {/* Pupils */}
      <circle cx="24" cy="23" r="1.5" fill="black" />
      <circle cx="40" cy="23" r="1.5" fill="black" />
      {/* Eye sparkle */}
      <circle cx="23" cy="21" r="1" fill="white" />
      <circle cx="39" cy="21" r="1" fill="white" />

      {/* Eyebrows - determined */}
      <path d="M20 18 Q24 16 28 18" stroke="#505050" strokeWidth="1.5" fill="none" />
      <path d="M36 18 Q40 16 44 18" stroke="#505050" strokeWidth="1.5" fill="none" />

      {/* Mouth - happy */}
      <path d="M28 34 Q32 36 36 34" stroke="#333" strokeWidth="1" fill="none" />
      {/* Tongue */}
      <ellipse cx="32" cy="35" rx="2" ry="1.5" fill="#FF6B8A" />

      {/* Körper / Body - safety vest */}
      <rect x="20" y="40" width="24" height="18" fill="url(#constructionPupVestGradient)" rx="4" />
      {/* Vest zipper */}
      <line x1="32" y1="42" x2="32" y2="58" stroke="#CC7000" strokeWidth="1" />

      {/* Reflective stripes */}
      <rect x="20" y="47" width="24" height="3" fill="url(#constructionPupStripeGradient)" />
      {/* Stripe reflective detail */}
      <rect x="22" y="48" width="20" height="1" fill="#666" />

      {/* Vest pockets */}
      <rect x="22" y="52" width="6" height="4" fill="#CC7000" rx="0.5" />
      <rect x="36" y="52" width="6" height="4" fill="#CC7000" rx="0.5" />

      {/* Beine / Legs */}
      <rect x="22" y="56" width="8" height="10" fill="url(#constructionPupFurGradient)" rx="3" />
      <rect x="34" y="56" width="8" height="10" fill="url(#constructionPupFurGradient)" rx="3" />
      {/* Leg highlights */}
      <rect x="24" y="58" width="2" height="8" fill="#B0B0B0" opacity="0.3" rx="1" />
      <rect x="36" y="58" width="2" height="8" fill="#B0B0B0" opacity="0.3" rx="1" />

      {/* Paws */}
      <ellipse cx="26" cy="64" rx="5" ry="2" fill="#606060" />
      <ellipse cx="38" cy="64" rx="5" ry="2" fill="#606060" />
      {/* Paw pads hint */}
      <circle cx="24" cy="64" r="1" fill="#505050" />
      <circle cx="28" cy="64" r="1" fill="#505050" />
      <circle cx="36" cy="64" r="1" fill="#505050" />
      <circle cx="40" cy="64" r="1" fill="#505050" />
    </svg>
  );
}
