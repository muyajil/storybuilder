/**
 * GiftBox Sprite Component
 * Enhanced with ribbon gradients and festive textures
 */

import type { ElementProps } from '../types';

export function GiftBox({ x = 0, y = 0, size = 40, color = '#FF69B4' }: ElementProps) {
  // Create color variations
  const boxDark = '#C71585';
  const boxLight = '#FFB6C1';
  const ribbonGold = '#FFD700';
  const ribbonDark = '#B8860B';
  const ribbonLight = '#FFEC8B';
  const shadowColor = '#8B0050';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Box gradient */}
        <linearGradient id="giftBoxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={boxLight} />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor={boxDark} />
          <stop offset="100%" stopColor={shadowColor} />
        </linearGradient>

        {/* Box side gradient */}
        <linearGradient id="giftBoxSideGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={boxDark} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={boxLight} />
        </linearGradient>

        {/* Lid gradient */}
        <linearGradient id="giftLidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={boxLight} />
          <stop offset="40%" stopColor={color} />
          <stop offset="100%" stopColor={boxDark} />
        </linearGradient>

        {/* Ribbon vertical gradient */}
        <linearGradient id="giftRibbonVertical" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={ribbonDark} />
          <stop offset="20%" stopColor={ribbonGold} />
          <stop offset="50%" stopColor={ribbonLight} />
          <stop offset="80%" stopColor={ribbonGold} />
          <stop offset="100%" stopColor={ribbonDark} />
        </linearGradient>

        {/* Ribbon horizontal gradient */}
        <linearGradient id="giftRibbonHorizontal" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={ribbonDark} />
          <stop offset="20%" stopColor={ribbonGold} />
          <stop offset="50%" stopColor={ribbonLight} />
          <stop offset="80%" stopColor={ribbonGold} />
          <stop offset="100%" stopColor={ribbonDark} />
        </linearGradient>

        {/* Bow gradient */}
        <radialGradient id="giftBowGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor={ribbonLight} />
          <stop offset="50%" stopColor={ribbonGold} />
          <stop offset="100%" stopColor={ribbonDark} />
        </radialGradient>

        {/* Bow center gradient */}
        <radialGradient id="giftBowCenter" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor={ribbonLight} />
          <stop offset="40%" stopColor={ribbonGold} />
          <stop offset="100%" stopColor={ribbonDark} />
        </radialGradient>

        {/* Sparkle filter */}
        <filter id="giftSparkle" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.3" />
        </filter>

        {/* Drop shadow filter */}
        <filter id="giftShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#000" floodOpacity="0.3" />
        </filter>

        {/* Wrapping paper pattern */}
        <pattern id="giftPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" fill={color} />
          <circle cx="4" cy="4" r="1" fill={boxLight} opacity="0.3" />
          <circle cx="0" cy="0" r="1" fill={boxLight} opacity="0.2" />
          <circle cx="8" cy="8" r="1" fill={boxLight} opacity="0.2" />
        </pattern>
      </defs>

      {/* Box shadow */}
      <rect x="7" y="14" width="30" height="25" fill="rgba(0,0,0,0.2)" rx="1" />

      {/* Main box body */}
      <rect x="5" y="12" width="30" height="25" fill="url(#giftBoxGradient)" rx="2" filter="url(#giftShadow)" />

      {/* Box pattern overlay */}
      <rect x="5" y="12" width="30" height="25" fill="url(#giftPattern)" opacity="0.3" rx="2" />

      {/* Box front face highlight */}
      <rect x="5" y="12" width="30" height="25" fill="url(#giftBoxSideGradient)" opacity="0.2" rx="2" />

      {/* Box edge details */}
      <line x1="5" y1="12" x2="5" y2="37" stroke={boxDark} strokeWidth="0.5" opacity="0.5" />
      <line x1="35" y1="12" x2="35" y2="37" stroke={boxLight} strokeWidth="0.5" opacity="0.3" />
      <line x1="5" y1="37" x2="35" y2="37" stroke={shadowColor} strokeWidth="0.5" opacity="0.4" />

      {/* Lid shadow */}
      <rect x="5" y="10" width="34" height="6" fill="rgba(0,0,0,0.15)" rx="1" />

      {/* Lid */}
      <rect x="3" y="8" width="34" height="6" fill="url(#giftLidGradient)" rx="1" filter="url(#giftShadow)" />

      {/* Lid edge highlight */}
      <rect x="3" y="8" width="34" height="2" fill={boxLight} opacity="0.4" rx="1" />
      <line x1="3" y1="14" x2="37" y2="14" stroke={boxDark} strokeWidth="0.5" opacity="0.5" />

      {/* Vertical ribbon */}
      <rect x="17" y="8" width="6" height="29" fill="url(#giftRibbonVertical)" />
      <line x1="17" y1="8" x2="17" y2="37" stroke={ribbonDark} strokeWidth="0.3" opacity="0.5" />
      <line x1="23" y1="8" x2="23" y2="37" stroke={ribbonDark} strokeWidth="0.3" opacity="0.5" />
      <line x1="20" y1="8" x2="20" y2="37" stroke={ribbonLight} strokeWidth="0.5" opacity="0.4" />

      {/* Horizontal ribbon */}
      <rect x="3" y="18" width="34" height="6" fill="url(#giftRibbonHorizontal)" />
      <line x1="3" y1="18" x2="37" y2="18" stroke={ribbonDark} strokeWidth="0.3" opacity="0.5" />
      <line x1="3" y1="24" x2="37" y2="24" stroke={ribbonDark} strokeWidth="0.3" opacity="0.5" />
      <line x1="3" y1="21" x2="37" y2="21" stroke={ribbonLight} strokeWidth="0.5" opacity="0.4" />

      {/* Ribbon intersection highlight */}
      <rect x="17" y="18" width="6" height="6" fill={ribbonLight} opacity="0.2" />

      {/* Left bow loop */}
      <ellipse cx="14" cy="6" rx="7" ry="5" fill="url(#giftBowGradient)" filter="url(#giftShadow)" />
      <ellipse cx="13" cy="5" rx="4" ry="3" fill={ribbonLight} opacity="0.3" />
      <path d="M10 6 Q14 4 18 6" stroke={ribbonDark} strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Right bow loop */}
      <ellipse cx="26" cy="6" rx="7" ry="5" fill="url(#giftBowGradient)" filter="url(#giftShadow)" />
      <ellipse cx="25" cy="5" rx="4" ry="3" fill={ribbonLight} opacity="0.3" />
      <path d="M22 6 Q26 4 30 6" stroke={ribbonDark} strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* Bow tails */}
      <path d="M17 8 Q14 10 12 13 Q13 11 15 9" fill="url(#giftBowGradient)" />
      <path d="M23 8 Q26 10 28 13 Q27 11 25 9" fill="url(#giftBowGradient)" />

      {/* Bow center knot */}
      <circle cx="20" cy="6" r="4" fill="url(#giftBowCenter)" filter="url(#giftShadow)" />
      <ellipse cx="19" cy="5" rx="1.5" ry="1" fill={ribbonLight} opacity="0.5" />

      {/* Sparkle highlights */}
      <g filter="url(#giftSparkle)">
        <circle cx="10" cy="15" r="0.8" fill="white" opacity="0.7" />
        <circle cx="30" cy="28" r="0.6" fill="white" opacity="0.5" />
        <circle cx="8" cy="32" r="0.5" fill="white" opacity="0.4" />
        <circle cx="20" cy="3" r="1" fill="white" opacity="0.6" />
      </g>

      {/* Additional bow detail - small loops */}
      <ellipse cx="16" cy="4" rx="2" ry="1.5" fill={ribbonGold} opacity="0.6" />
      <ellipse cx="24" cy="4" rx="2" ry="1.5" fill={ribbonGold} opacity="0.6" />
    </svg>
  );
}
