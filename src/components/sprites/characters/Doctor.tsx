/**
 * Doctor Sprite Component
 * Enhanced with gradients and detailed features
 */

import type { SpriteProps } from '../types';

export function Doctor({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Hair gradient */}
        <radialGradient id="doctorHairGradient" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#444" />
          <stop offset="100%" stopColor="#222" />
        </radialGradient>
        {/* Skin gradient */}
        <radialGradient id="doctorSkinGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </radialGradient>
        {/* Coat gradient */}
        <linearGradient id="doctorCoatGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#E8E8E8" />
        </linearGradient>
        {/* Pants gradient */}
        <linearGradient id="doctorPantsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5B7AB8" />
          <stop offset="100%" stopColor="#4169E1" />
        </linearGradient>
        {/* Stethoscope gradient */}
        <linearGradient id="doctorStethoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#555" />
          <stop offset="50%" stopColor="#333" />
          <stop offset="100%" stopColor="#555" />
        </linearGradient>
      </defs>

      {/* Haare / Hair */}
      <circle cx="32" cy="14" r="12" fill="url(#doctorHairGradient)" />
      {/* Hair highlight */}
      <ellipse cx="26" cy="10" rx="5" ry="3" fill="#555" opacity="0.4" />

      {/* Kopf / Head */}
      <circle cx="32" cy="16" r="10" fill="url(#doctorSkinGradient)" />

      {/* Augen / Eyes */}
      <ellipse cx="28" cy="14" rx="2.5" ry="2" fill="white" />
      <ellipse cx="36" cy="14" rx="2.5" ry="2" fill="white" />
      <circle cx="28" cy="14" r="1.5" fill="#4A7C59" />
      <circle cx="36" cy="14" r="1.5" fill="#4A7C59" />
      {/* Pupils */}
      <circle cx="28" cy="14" r="0.8" fill="#1a1a1a" />
      <circle cx="36" cy="14" r="0.8" fill="#1a1a1a" />
      {/* Eye sparkle */}
      <circle cx="27" cy="13" r="0.5" fill="white" />
      <circle cx="35" cy="13" r="0.5" fill="white" />

      {/* Eyebrows - caring */}
      <path d="M25 11 Q28 10 30 11" stroke="#333" strokeWidth="1" fill="none" />
      <path d="M34 11 Q36 10 39 11" stroke="#333" strokeWidth="1" fill="none" />

      {/* Friendly smile */}
      <path d="M28 20 Q32 23 36 20" stroke="#8B5A2B" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Stethoskop um Hals / Stethoscope */}
      <path d="M24 26 Q22 32 26 36 L38 36 Q42 32 40 26" stroke="url(#doctorStethoGradient)" strokeWidth="2.5" fill="none" />
      {/* Stethoscope chest piece */}
      <circle cx="32" cy="38" r="4" fill="#444" />
      <circle cx="32" cy="38" r="2.5" fill="#666" />
      <circle cx="32" cy="38" r="1" fill="#333" />
      {/* Ear pieces */}
      <circle cx="24" cy="26" r="2" fill="#444" />
      <circle cx="40" cy="26" r="2" fill="#444" />

      {/* Kittel / Coat */}
      <rect x="20" y="28" width="24" height="24" fill="url(#doctorCoatGradient)" rx="3" />
      {/* Coat lapels */}
      <path d="M24 28 L20 36 L24 36 Z" fill="#F5F5F5" />
      <path d="M40 28 L44 36 L40 36 Z" fill="#F5F5F5" />
      {/* Coat center line */}
      <line x1="32" y1="32" x2="32" y2="52" stroke="#E8E8E8" strokeWidth="0.5" />

      {/* Knöpfe / Buttons */}
      <circle cx="32" cy="36" r="1.5" fill="#444" />
      <circle cx="32" cy="36" r="0.8" fill="#555" />
      <circle cx="32" cy="44" r="1.5" fill="#444" />
      <circle cx="32" cy="44" r="0.8" fill="#555" />

      {/* Pocket */}
      <rect x="22" y="38" width="6" height="8" fill="none" stroke="#E0E0E0" strokeWidth="0.5" rx="0.5" />
      {/* Pen in pocket */}
      <rect x="24" y="36" width="1" height="6" fill="#0066CC" />
      <circle cx="24.5" cy="36" r="1" fill="#0066CC" />

      {/* ID badge */}
      <rect x="36" y="38" width="6" height="8" fill="white" stroke="#E0E0E0" strokeWidth="0.5" rx="0.5" />
      <rect x="37" y="39" width="4" height="3" fill="#87CEEB" rx="0.5" />
      <line x1="37" y1="44" x2="41" y2="44" stroke="#CCC" strokeWidth="0.5" />
      <line x1="37" y1="45" x2="40" y2="45" stroke="#CCC" strokeWidth="0.5" />

      {/* Arme / Arms */}
      <rect x="10" y="30" width="10" height="6" fill="url(#doctorCoatGradient)" rx="2" />
      <rect x="44" y="30" width="10" height="6" fill="url(#doctorCoatGradient)" rx="2" />

      {/* Hände / Hands */}
      <circle cx="10" cy="34" r="4.5" fill="url(#doctorSkinGradient)" />
      <circle cx="54" cy="34" r="4.5" fill="url(#doctorSkinGradient)" />

      {/* Beine / Legs */}
      <rect x="22" y="52" width="8" height="10" fill="url(#doctorPantsGradient)" rx="2" />
      <rect x="34" y="52" width="8" height="10" fill="url(#doctorPantsGradient)" rx="2" />
      {/* Leg highlights */}
      <rect x="24" y="52" width="2" height="10" fill="#7B9AD8" opacity="0.3" rx="1" />
      <rect x="36" y="52" width="2" height="10" fill="#7B9AD8" opacity="0.3" rx="1" />

      {/* Schuhe / Shoes - white medical */}
      <ellipse cx="26" cy="62" rx="5" ry="2.5" fill="#F5F5F5" />
      <ellipse cx="38" cy="62" rx="5" ry="2.5" fill="#F5F5F5" />
      {/* Shoe detail */}
      <ellipse cx="26" cy="61" rx="3" ry="1.5" fill="white" />
      <ellipse cx="38" cy="61" rx="3" ry="1.5" fill="white" />

      {/* Clipboard in hand */}
      <rect x="6" y="36" width="8" height="10" fill="#C4A57B" rx="1" />
      <rect x="7" y="37" width="6" height="8" fill="white" rx="0.5" />
      <line x1="8" y1="39" x2="12" y2="39" stroke="#CCC" strokeWidth="0.5" />
      <line x1="8" y1="41" x2="12" y2="41" stroke="#CCC" strokeWidth="0.5" />
      <line x1="8" y1="43" x2="11" y2="43" stroke="#CCC" strokeWidth="0.5" />
    </svg>
  );
}
