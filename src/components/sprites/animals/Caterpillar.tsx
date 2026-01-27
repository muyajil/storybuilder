/**
 * Caterpillar Sprite Component
 * Enhanced with gradients, segment detail, and cute features
 */

import type { SpriteProps } from '../types';

export function Caterpillar({ size = 64, color = '#32CD32' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body segment gradient */}
        <radialGradient id="caterpillarBodyGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#50E050" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
        {/* Head gradient - lighter */}
        <radialGradient id="caterpillarHeadGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#B0FFB0" />
          <stop offset="100%" stopColor="#90EE90" />
        </radialGradient>
        {/* Shine gradient */}
        <radialGradient id="caterpillarShineGradient" cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="caterpillarEyeGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        {/* Belly spot gradient */}
        <radialGradient id="caterpillarBellyGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFACD" />
          <stop offset="100%" stopColor="#F0E68C" />
        </radialGradient>
        {/* Antenna gradient */}
        <linearGradient id="caterpillarAntennaGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
      </defs>

      {/* Legs - little stubby feet */}
      <g fill="#228B22">
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <ellipse cx={14 + i * 10} cy={42 + Math.sin(i * 0.5) * 2} rx="2" ry="3" />
            <ellipse cx={18 + i * 10} cy={42 + Math.sin(i * 0.5) * 2} rx="2" ry="3" />
          </g>
        ))}
      </g>

      {/* Body segments - back to front for overlap */}
      {[4, 3, 2, 1].map((i) => (
        <g key={i}>
          {/* Main segment */}
          <circle
            cx={12 + i * 10}
            cy={34 - Math.sin(i * 0.6) * 3}
            r="9"
            fill="url(#caterpillarBodyGradient)"
          />
          {/* Segment shine */}
          <ellipse
            cx={10 + i * 10}
            cy={31 - Math.sin(i * 0.6) * 3}
            rx="4"
            ry="3"
            fill="url(#caterpillarShineGradient)"
          />
          {/* Belly marking */}
          <circle
            cx={12 + i * 10}
            cy={36 - Math.sin(i * 0.6) * 3}
            r="3"
            fill="url(#caterpillarBellyGradient)"
            opacity="0.6"
          />
          {/* Segment line detail */}
          <path
            d={`M${6 + i * 10} ${34 - Math.sin(i * 0.6) * 3} Q${12 + i * 10} ${38 - Math.sin(i * 0.6) * 3} ${18 + i * 10} ${34 - Math.sin(i * 0.6) * 3}`}
            stroke="#228B22"
            strokeWidth="0.5"
            fill="none"
            opacity="0.3"
          />
        </g>
      ))}

      {/* Head - front and larger */}
      <circle cx="10" cy="30" r="11" fill="url(#caterpillarHeadGradient)" />
      {/* Head shine */}
      <ellipse cx="7" cy="26" rx="5" ry="4" fill="url(#caterpillarShineGradient)" />

      {/* Face features */}
      {/* Eyes - big and cute */}
      <ellipse cx="7" cy="28" rx="4" ry="4.5" fill="white" />
      <ellipse cx="7" cy="28" rx="2.5" ry="3" fill="url(#caterpillarEyeGradient)" />
      {/* Eye shine */}
      <circle cx="6" cy="27" r="1" fill="white" />
      <circle cx="8" cy="29" r="0.5" fill="white" opacity="0.5" />

      {/* Second eye (side view, partial) */}
      <ellipse cx="14" cy="28" rx="2" ry="2.5" fill="white" opacity="0.6" />
      <ellipse cx="14" cy="28" rx="1.2" ry="1.5" fill="url(#caterpillarEyeGradient)" opacity="0.6" />

      {/* Cute smile */}
      <path d="M5 34 Q10 38 15 34" stroke="#228B22" strokeWidth="1.5" fill="none" />

      {/* Rosy cheeks */}
      <ellipse cx="4" cy="32" rx="2.5" ry="2" fill="#FFB6C1" opacity="0.4" />
      <ellipse cx="16" cy="32" rx="2" ry="1.5" fill="#FFB6C1" opacity="0.3" />

      {/* Antennae */}
      <path d="M6 22 Q3 16 2 12" stroke="url(#caterpillarAntennaGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M12 22 Q13 14 16 10" stroke="url(#caterpillarAntennaGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Antennae balls */}
      <circle cx="2" cy="12" r="3" fill="#FF6347" />
      <circle cx="16" cy="10" r="3" fill="#FF6347" />
      {/* Antennae shine */}
      <circle cx="1" cy="11" r="1" fill="white" opacity="0.5" />
      <circle cx="15" cy="9" r="1" fill="white" opacity="0.5" />

      {/* Tiny spots on segments */}
      <g fill="#228B22" opacity="0.3">
        <circle cx="24" cy="30" r="1.5" />
        <circle cx="34" cy="28" r="1.5" />
        <circle cx="44" cy="30" r="1.5" />
        <circle cx="54" cy="32" r="1.5" />
      </g>

      {/* Back spiky detail */}
      <g fill="#90EE90">
        <ellipse cx="22" cy="26" rx="1.5" ry="3" />
        <ellipse cx="32" cy="24" rx="1.5" ry="3" />
        <ellipse cx="42" cy="26" rx="1.5" ry="3" />
        <ellipse cx="52" cy="28" rx="1.5" ry="2.5" />
      </g>
    </svg>
  );
}
