/**
 * MagicPortal Sprite Component
 * Enhanced with mystical effects and swirling energy
 */

import type { ElementProps } from '../types';

export function MagicPortal({ x = 0, y = 0, size = 80, color = '#9370DB' }: ElementProps) {
  // Create color variations
  const portalDark = '#6A5ACD';
  const portalLight = '#BA55D3';
  const portalBright = '#E6E6FA';
  const portalDeep = '#4B0082';
  const stoneDark = '#4a4a4a';
  const stoneMid = '#696969';
  const stoneLight = '#888888';
  const sparkleGold = '#FFD700';
  const sparkleWhite = '#FFFFFF';

  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 80 96"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Stone frame gradient */}
        <linearGradient id="magicPortalStoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={stoneLight} />
          <stop offset="30%" stopColor={stoneMid} />
          <stop offset="70%" stopColor={stoneDark} />
          <stop offset="100%" stopColor="#333" />
        </linearGradient>

        {/* Portal energy gradient */}
        <radialGradient id="magicPortalEnergyGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={portalBright} />
          <stop offset="30%" stopColor={portalLight} />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor={portalDeep} />
        </radialGradient>

        {/* Swirl gradient */}
        <radialGradient id="magicPortalSwirlGradient" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={sparkleWhite} stopOpacity="0.8" />
          <stop offset="40%" stopColor={portalBright} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>

        {/* Outer glow gradient */}
        <radialGradient id="magicPortalOuterGlow" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="50%" stopColor={portalLight} stopOpacity="0.3" />
          <stop offset="100%" stopColor={portalDark} stopOpacity="0" />
        </radialGradient>

        {/* Rune glow gradient */}
        <radialGradient id="magicPortalRuneGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={sparkleGold} />
          <stop offset="100%" stopColor={sparkleGold} stopOpacity="0" />
        </radialGradient>

        {/* Stone texture pattern */}
        <pattern id="magicPortalStoneTexture" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="6" height="6" fill={stoneMid} />
          <circle cx="2" cy="2" r="1" fill={stoneDark} opacity="0.3" />
          <circle cx="5" cy="4" r="0.8" fill={stoneLight} opacity="0.2" />
        </pattern>

        {/* Drop shadow filter */}
        <filter id="magicPortalShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.4" />
        </filter>

        {/* Glow filter */}
        <filter id="magicPortalGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Sparkle filter */}
        <filter id="magicPortalSparkle" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="sparkle" />
          <feMerge>
            <feMergeNode in="sparkle" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer portal glow */}
      <ellipse cx="40" cy="55" rx="38" ry="45" fill="url(#magicPortalOuterGlow)" />

      {/* Ground shadow */}
      <ellipse cx="42" cy="95" rx="25" ry="4" fill="rgba(0,0,0,0.3)" />

      {/* Stone frame shadow */}
      <path d="M12 96 L12 32 Q40 2 68 32 L68 96" fill="rgba(0,0,0,0.2)" transform="translate(2, 2)" />

      {/* Stone frame */}
      <path d="M10 96 L10 30 Q40 0 70 30 L70 96" fill="url(#magicPortalStoneGradient)" stroke="#333" strokeWidth="3" filter="url(#magicPortalShadow)" />

      {/* Stone texture overlay */}
      <path d="M10 96 L10 30 Q40 0 70 30 L70 96" fill="url(#magicPortalStoneTexture)" opacity="0.4" />

      {/* Stone carved details */}
      <g stroke={stoneDark} strokeWidth="1" fill="none" opacity="0.4">
        <path d="M13 35 Q40 8 67 35" />
        <path d="M12 50 L12 90" />
        <path d="M68 50 L68 90" />
      </g>

      {/* Stone highlight */}
      <path d="M10 30 Q40 0 70 30" stroke={stoneLight} strokeWidth="2" fill="none" opacity="0.5" />

      {/* Portal interior - deep layer */}
      <path d="M15 91 L15 33 Q40 8 65 33 L65 91" fill={portalDeep} />

      {/* Portal energy main layer */}
      <path d="M15 91 L15 33 Q40 8 65 33 L65 91" fill="url(#magicPortalEnergyGradient)" opacity="0.9" />

      {/* Swirling energy layers */}
      <g filter="url(#magicPortalGlow)">
        <ellipse cx="40" cy="55" rx="22" ry="32" fill="url(#magicPortalSwirlGradient)" opacity="0.7" />
        <ellipse cx="40" cy="55" rx="16" ry="24" fill={portalBright} opacity="0.4" />
        <ellipse cx="40" cy="55" rx="10" ry="16" fill="white" opacity="0.3" />
      </g>

      {/* Spiral energy lines */}
      <g stroke={portalBright} strokeWidth="1.5" fill="none" opacity="0.6">
        <path d="M25 70 Q40 50 30 35 Q25 25 35 20" />
        <path d="M55 70 Q40 50 50 35 Q55 25 45 20" />
        <path d="M30 80 Q45 60 35 45 Q30 35 40 30" />
        <path d="M50 80 Q35 60 45 45 Q50 35 40 30" />
      </g>

      {/* Inner swirl details */}
      <g stroke={sparkleWhite} strokeWidth="0.8" fill="none" opacity="0.5">
        <path d="M35 65 Q40 55 38 45 Q35 35 40 30" />
        <path d="M45 65 Q40 55 42 45 Q45 35 40 30" />
      </g>

      {/* Rune stones on frame */}
      <g filter="url(#magicPortalSparkle)">
        {/* Left rune */}
        <circle cx="12" cy="55" r="5" fill="url(#magicPortalRuneGlow)" />
        <text x="12" y="58" textAnchor="middle" fill={sparkleGold} fontSize="8" fontFamily="serif">&#9733;</text>

        {/* Right rune */}
        <circle cx="68" cy="55" r="5" fill="url(#magicPortalRuneGlow)" />
        <text x="68" y="58" textAnchor="middle" fill={sparkleGold} fontSize="8" fontFamily="serif">&#9733;</text>

        {/* Top rune */}
        <circle cx="40" cy="8" r="6" fill="url(#magicPortalRuneGlow)" />
        <text x="40" y="11" textAnchor="middle" fill={sparkleGold} fontSize="10" fontFamily="serif">&#9734;</text>
      </g>

      {/* Floating sparkles */}
      <g filter="url(#magicPortalSparkle)">
        <circle cx="30" cy="40" r="2" fill={sparkleWhite} opacity="0.9" />
        <circle cx="50" cy="45" r="1.5" fill={sparkleWhite} opacity="0.8" />
        <circle cx="35" cy="60" r="2" fill={sparkleWhite} opacity="0.7" />
        <circle cx="48" cy="70" r="1.5" fill={sparkleWhite} opacity="0.8" />
        <circle cx="25" cy="50" r="1" fill={sparkleGold} opacity="0.9" />
        <circle cx="55" cy="55" r="1" fill={sparkleGold} opacity="0.9" />
        <circle cx="40" cy="35" r="2.5" fill={sparkleWhite} opacity="0.9" />
        <circle cx="32" cy="75" r="1.5" fill={sparkleGold} opacity="0.7" />
        <circle cx="47" cy="80" r="1" fill={sparkleWhite} opacity="0.6" />
      </g>

      {/* Energy particles around frame */}
      <g fill={portalLight} opacity="0.5">
        <circle cx="8" cy="45" r="1.5" />
        <circle cx="72" cy="40" r="1.5" />
        <circle cx="20" cy="15" r="1" />
        <circle cx="60" cy="12" r="1" />
        <circle cx="5" cy="70" r="1" />
        <circle cx="75" cy="75" r="1" />
      </g>

      {/* Center bright core */}
      <ellipse cx="40" cy="50" rx="6" ry="8" fill="white" opacity="0.6" filter="url(#magicPortalGlow)" />

      {/* Carved runes on stone */}
      <g fill={stoneLight} opacity="0.4" fontSize="6" fontFamily="serif">
        <text x="12" y="70">&#8734;</text>
        <text x="12" y="80">&#9679;</text>
        <text x="65" y="70">&#8734;</text>
        <text x="65" y="80">&#9679;</text>
      </g>
    </svg>
  );
}
