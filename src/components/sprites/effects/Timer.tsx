/**
 * Timer Sprite Component
 * Enhanced with urgency effects, glowing gradients, and dynamic styling
 */

import type { EffectProps } from '../types';

export function Timer({ x = 0, y = 0, time = 60}: EffectProps & { time?: number }) {
  const isUrgent = time <= 10;

  return (
    <svg
      width={60}
      height={28}
      viewBox="0 0 60 28"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Background gradient */}
        <linearGradient id="timerBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(40,40,40,0.9)" />
          <stop offset="50%" stopColor="rgba(20,20,20,0.95)" />
          <stop offset="100%" stopColor="rgba(30,30,30,0.9)" />
        </linearGradient>

        {/* Clock face gradient */}
        <radialGradient id="timerClockGrad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#2A2A2A" />
          <stop offset="70%" stopColor="#1A1A1A" />
          <stop offset="100%" stopColor="#0A0A0A" />
        </radialGradient>

        {/* Red glow gradient for urgent */}
        <radialGradient id="timerUrgentGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF0000" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#FF0000" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF0000" stopOpacity="0" />
        </radialGradient>

        {/* Normal glow gradient */}
        <radialGradient id="timerNormalGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF6666" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#FF0000" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FF0000" stopOpacity="0" />
        </radialGradient>

        {/* Text gradient */}
        <linearGradient id="timerTextGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F0F0F0" />
          <stop offset="100%" stopColor="#DDDDDD" />
        </linearGradient>

        {/* Clock hand gradient */}
        <linearGradient id="timerHandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6666" />
          <stop offset="50%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#CC0000" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="timerGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Text glow */}
        <filter id="timerTextGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Urgent pulse filter */}
        <filter id="timerPulse" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Shadow */}
      <rect x="1" y="1" width="60" height="28" fill="#000" opacity="0.4" rx="5" />

      {/* Background */}
      <rect x="0" y="0" width="60" height="28" fill="url(#timerBgGrad)" rx="4" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

      {/* Top shine */}
      <rect x="2" y="1" width="56" height="8" fill="white" opacity="0.05" rx="3" />

      {/* Inner border */}
      <rect x="1" y="1" width="58" height="26" fill="none" rx="3" stroke="rgba(255,0,0,0.2)" strokeWidth="1" />

      {/* Clock glow background */}
      <circle cx="14" cy="14" r="10" fill={isUrgent ? "url(#timerUrgentGlow)" : "url(#timerNormalGlow)"} filter={isUrgent ? "url(#timerPulse)" : undefined} />

      {/* Clock face */}
      <circle cx="14" cy="14" r="8" fill="url(#timerClockGrad)" stroke="url(#timerHandGrad)" strokeWidth="2" filter="url(#timerGlow)" />

      {/* Clock face inner ring */}
      <circle cx="14" cy="14" r="6.5" fill="none" stroke="#333" strokeWidth="0.5" />

      {/* Clock tick marks */}
      <g stroke="#666" strokeWidth="0.5" opacity="0.6">
        <line x1="14" y1="7" x2="14" y2="8.5" />
        <line x1="14" y1="19.5" x2="14" y2="21" />
        <line x1="7" y1="14" x2="8.5" y2="14" />
        <line x1="19.5" y1="14" x2="21" y2="14" />
      </g>

      {/* Minute hand */}
      <line x1="14" y1="14" x2="14" y2="8" stroke="url(#timerHandGrad)" strokeWidth="2" strokeLinecap="round" filter="url(#timerGlow)" />

      {/* Hour hand */}
      <line x1="14" y1="14" x2="18" y2="14" stroke="url(#timerHandGrad)" strokeWidth="2" strokeLinecap="round" filter="url(#timerGlow)" />

      {/* Center pivot */}
      <circle cx="14" cy="14" r="1.5" fill="#FF4444" />
      <circle cx="14" cy="14" r="0.8" fill="white" opacity="0.7" />

      {/* Clock shine */}
      <ellipse cx="11" cy="11" rx="2" ry="1.5" fill="white" opacity="0.15" />

      {/* Divider line */}
      <line x1="26" y1="6" x2="26" y2="22" stroke="rgba(255,0,0,0.3)" strokeWidth="1" />

      {/* Time text shadow */}
      <text
        x="42"
        y="21"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fill="#000"
        opacity="0.3"
      >
        {time}
      </text>

      {/* Time text */}
      <text
        x="42"
        y="20"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fill={isUrgent ? "#FF4444" : "url(#timerTextGrad)"}
        filter="url(#timerTextGlow)"
      >
        {time}
      </text>

      {/* Urgent warning indicator */}
      {isUrgent && (
        <g filter="url(#timerGlow)">
          <circle cx="54" cy="8" r="3" fill="#FF0000" opacity="0.8" />
          <text x="54" y="10" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">!</text>
        </g>
      )}

      {/* Decorative sparkle */}
      <polygon points="52,20 52.2,20.5 53,20.5 52.2,21 52.4,21.5 52,21 51.6,21.5 51.8,21 51,20.5 51.8,20.5" fill="white" opacity="0.4" />
    </svg>
  );
}
