/**
 * Mailbox Sprite Component
 * Enhanced with metallic textures and details
 */

import type { ElementProps } from '../types';

export function Mailbox({ x = 0, y = 0, size = 35, color = '#FF0000' }: ElementProps) {
  // Create color variations
  const boxDark = '#8B0000';
  const boxLight = '#FF4444';
  const boxHighlight = '#FF6666';
  const postBrown = '#8B4513';
  const postDark = '#5D3A1A';
  const postLight = '#A0522D';
  const flagGold = '#FFD700';
  const flagDark = '#B8860B';
  const flagLight = '#FFEC8B';
  const doorDark = '#660000';

  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 35 49"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Box gradient */}
        <linearGradient id="mailboxBoxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={boxLight} />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor={boxDark} />
          <stop offset="100%" stopColor="#550000" />
        </linearGradient>

        {/* Box side gradient */}
        <linearGradient id="mailboxSideGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={boxDark} />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor={boxLight} />
        </linearGradient>

        {/* Box top curve gradient */}
        <linearGradient id="mailboxTopGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="50%" stopColor={boxLight} />
          <stop offset="100%" stopColor={boxHighlight} />
        </linearGradient>

        {/* Post wood gradient */}
        <linearGradient id="mailboxPostGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={postDark} />
          <stop offset="30%" stopColor={postBrown} />
          <stop offset="50%" stopColor={postLight} />
          <stop offset="70%" stopColor={postBrown} />
          <stop offset="100%" stopColor={postDark} />
        </linearGradient>

        {/* Flag gradient */}
        <linearGradient id="mailboxFlagGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={flagLight} />
          <stop offset="40%" stopColor={flagGold} />
          <stop offset="100%" stopColor={flagDark} />
        </linearGradient>

        {/* Door gradient */}
        <linearGradient id="mailboxDoorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={boxDark} />
          <stop offset="50%" stopColor={doorDark} />
          <stop offset="100%" stopColor="#440000" />
        </linearGradient>

        {/* Metallic shine effect */}
        <linearGradient id="mailboxShine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="50%" stopColor="white" stopOpacity="0.1" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>

        {/* Drop shadow filter */}
        <filter id="mailboxShadow" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="18" cy="48" rx="10" ry="2" fill="rgba(0,0,0,0.2)" />

      {/* Post shadow */}
      <rect x="16" y="26" width="5" height="23" fill="rgba(0,0,0,0.15)" />

      {/* Post */}
      <rect x="15" y="25" width="5" height="24" fill="url(#mailboxPostGradient)" filter="url(#mailboxShadow)" />

      {/* Post wood grain lines */}
      <g stroke={postDark} strokeWidth="0.3" opacity="0.4">
        <line x1="16" y1="25" x2="16" y2="49" />
        <line x1="18" y1="25" x2="18" y2="49" />
      </g>
      <line x1="17" y1="25" x2="17" y2="49" stroke={postLight} strokeWidth="0.2" opacity="0.3" />

      {/* Post cap */}
      <rect x="14" y="24" width="7" height="2" fill={postBrown} rx="0.5" />

      {/* Mailbox shadow */}
      <rect x="7" y="7" width="25" height="20" fill="rgba(0,0,0,0.15)" rx="2" />

      {/* Mailbox body base */}
      <rect x="5" y="5" width="25" height="20" fill="url(#mailboxBoxGradient)" rx="2" filter="url(#mailboxShadow)" />

      {/* Rounded top */}
      <path d="M5 15 Q17.5 3 30 15" fill="url(#mailboxTopGradient)" />

      {/* Top highlight curve */}
      <path d="M6 14 Q17.5 5 29 14" stroke={boxHighlight} strokeWidth="1" fill="none" opacity="0.5" />

      {/* Box side shading */}
      <rect x="5" y="5" width="25" height="20" fill="url(#mailboxSideGradient)" opacity="0.2" rx="2" />

      {/* Metallic shine */}
      <rect x="5" y="5" width="25" height="20" fill="url(#mailboxShine)" rx="2" />

      {/* Rivets */}
      <g fill={boxDark}>
        <circle cx="8" cy="10" r="1" />
        <circle cx="27" cy="10" r="1" />
        <circle cx="8" cy="22" r="1" />
        <circle cx="27" cy="22" r="1" />
      </g>
      <g fill={boxLight} opacity="0.4">
        <circle cx="7.7" cy="9.7" r="0.4" />
        <circle cx="26.7" cy="9.7" r="0.4" />
        <circle cx="7.7" cy="21.7" r="0.4" />
        <circle cx="26.7" cy="21.7" r="0.4" />
      </g>

      {/* Door frame */}
      <rect x="7" y="17" width="21" height="8" fill={doorDark} rx="1" />

      {/* Door */}
      <rect x="8" y="18" width="19" height="7" fill="url(#mailboxDoorGradient)" rx="1" />

      {/* Door handle/lip */}
      <rect x="8" y="18" width="19" height="1.5" fill={boxDark} rx="0.5" />
      <rect x="8" y="18" width="19" height="0.5" fill={color} opacity="0.5" rx="0.5" />

      {/* Door slot suggestion */}
      <rect x="12" y="20" width="11" height="1" fill="#220000" rx="0.3" />

      {/* Flag pole */}
      <rect x="29" y="9" width="3" height="14" fill="url(#mailboxFlagGradient)" rx="0.5" filter="url(#mailboxShadow)" />

      {/* Flag pole highlight */}
      <line x1="29.5" y1="9" x2="29.5" y2="23" stroke={flagLight} strokeWidth="0.5" opacity="0.5" />

      {/* Flag pivot */}
      <circle cx="30.5" cy="10" r="2" fill={flagDark} />
      <circle cx="30.5" cy="10" r="1.5" fill={flagGold} />
      <circle cx="30" cy="9.5" r="0.5" fill={flagLight} opacity="0.6" />

      {/* Flag (raised position) */}
      <g transform="rotate(-10 30.5 10)">
        <rect x="30" y="6" width="1.5" height="8" fill="url(#mailboxFlagGradient)" />
        <polygon points="31.5,6 35,8 31.5,10" fill="url(#mailboxFlagGradient)" />
        <polygon points="31.5,6 33,7.5 31.5,7.5" fill={flagLight} opacity="0.3" />
      </g>

      {/* Address number */}
      <text x="17.5" y="13" textAnchor="middle" fill="white" fontSize="5" fontFamily="sans-serif" fontWeight="bold" opacity="0.9">123</text>

      {/* Small highlight details */}
      <ellipse cx="10" cy="8" rx="3" ry="2" fill="white" opacity="0.1" />
    </svg>
  );
}
