/**
 * Wagon Sprite Component
 * High quality with wood grain texture, metal details, and realistic wheels
 */

import type { ElementProps } from '../types';

export function Wagon({ x = 0, y = 0, size = 80, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 80 48"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Wood body gradient */}
        <linearGradient id="wagonBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0622D" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#7A4010" />
          <stop offset="100%" stopColor="#5D3000" />
        </linearGradient>
        {/* Wood side gradient */}
        <linearGradient id="wagonSideGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5D3000" />
          <stop offset="20%" stopColor="#7A4010" />
          <stop offset="80%" stopColor={color} />
          <stop offset="100%" stopColor="#6B3A0A" />
        </linearGradient>
        {/* Wheel gradient */}
        <radialGradient id="wagonWheelGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#5a5a5a" />
          <stop offset="70%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#333333" />
        </radialGradient>
        {/* Wheel rim gradient */}
        <linearGradient id="wagonRimGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#555555" />
          <stop offset="50%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#4a4a4a" />
        </linearGradient>
        {/* Shaft wood gradient */}
        <linearGradient id="wagonShaftGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B4423" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#7A4010" />
        </linearGradient>
        {/* Metal hardware gradient */}
        <linearGradient id="wagonMetalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6a6a6a" />
          <stop offset="50%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#3a3a3a" />
        </linearGradient>
        {/* Wood grain pattern */}
        <pattern id="wagonWoodGrain" width="8" height="25" patternUnits="userSpaceOnUse">
          <line x1="2" y1="0" x2="2" y2="25" stroke="#6B3A0A" strokeWidth="0.4" opacity="0.3" />
          <line x1="5" y1="0" x2="5" y2="25" stroke="#5D3000" strokeWidth="0.3" opacity="0.25" />
          <path d="M0 8 Q4 9 8 8" stroke="#5D3000" strokeWidth="0.2" fill="none" opacity="0.2" />
          <path d="M0 18 Q4 17 8 18" stroke="#5D3000" strokeWidth="0.2" fill="none" opacity="0.2" />
        </pattern>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="40" cy="47" rx="32" ry="3" fill="#000000" opacity="0.2" />

      {/* Wagon box / Kasten */}
      <rect x="15" y="8" width="50" height="25" fill="url(#wagonBodyGradient)" />
      <rect x="15" y="8" width="50" height="25" fill="url(#wagonWoodGrain)" />

      {/* Box side shading */}
      <rect x="15" y="8" width="5" height="25" fill="#6B3A0A" opacity="0.3" />
      <rect x="60" y="8" width="5" height="25" fill="#A0622D" opacity="0.2" />

      {/* Box edge details - top rim */}
      <rect x="14" y="6" width="52" height="3" fill="url(#wagonSideGradient)" />
      <line x1="14" y1="7" x2="66" y2="7" stroke="#A0622D" strokeWidth="0.5" opacity="0.5" />

      {/* Vertical slat details */}
      <line x1="25" y1="9" x2="25" y2="32" stroke="#6B3A0A" strokeWidth="0.5" opacity="0.4" />
      <line x1="40" y1="9" x2="40" y2="32" stroke="#6B3A0A" strokeWidth="0.5" opacity="0.4" />
      <line x1="55" y1="9" x2="55" y2="32" stroke="#6B3A0A" strokeWidth="0.5" opacity="0.4" />

      {/* Metal corner brackets */}
      <rect x="15" y="8" width="4" height="4" fill="url(#wagonMetalGradient)" rx="0.5" />
      <rect x="61" y="8" width="4" height="4" fill="url(#wagonMetalGradient)" rx="0.5" />
      <rect x="15" y="29" width="4" height="4" fill="url(#wagonMetalGradient)" rx="0.5" />
      <rect x="61" y="29" width="4" height="4" fill="url(#wagonMetalGradient)" rx="0.5" />

      {/* Left wheel / Linkes Rad */}
      <circle cx="20" cy="40" r="9" fill="url(#wagonWheelGradient)" stroke="url(#wagonRimGradient)" strokeWidth="2" />
      {/* Wheel hub */}
      <circle cx="20" cy="40" r="3" fill="#5a5a5a" />
      <circle cx="20" cy="40" r="1.5" fill="#3a3a3a" />
      {/* Spokes / Speichen */}
      {[...Array(6)].map((_, i) => {
        const angle = i * Math.PI / 3;
        return (
          <line
            key={`left-spoke-${i}`}
            x1={20 + Math.cos(angle) * 3}
            y1={40 + Math.sin(angle) * 3}
            x2={20 + Math.cos(angle) * 7}
            y2={40 + Math.sin(angle) * 7}
            stroke="#4a4a4a"
            strokeWidth="1.5"
          />
        );
      })}
      {/* Wheel highlight */}
      <circle cx="18" cy="38" r="2" fill="#6a6a6a" opacity="0.3" />

      {/* Right wheel / Rechtes Rad */}
      <circle cx="60" cy="40" r="9" fill="url(#wagonWheelGradient)" stroke="url(#wagonRimGradient)" strokeWidth="2" />
      {/* Wheel hub */}
      <circle cx="60" cy="40" r="3" fill="#5a5a5a" />
      <circle cx="60" cy="40" r="1.5" fill="#3a3a3a" />
      {/* Spokes */}
      {[...Array(6)].map((_, i) => {
        const angle = i * Math.PI / 3 + 0.2;
        return (
          <line
            key={`right-spoke-${i}`}
            x1={60 + Math.cos(angle) * 3}
            y1={40 + Math.sin(angle) * 3}
            x2={60 + Math.cos(angle) * 7}
            y2={40 + Math.sin(angle) * 7}
            stroke="#4a4a4a"
            strokeWidth="1.5"
          />
        );
      })}
      {/* Wheel highlight */}
      <circle cx="58" cy="38" r="2" fill="#6a6a6a" opacity="0.3" />

      {/* Axle / Achse */}
      <rect x="18" y="38" width="44" height="4" fill="#4a4a4a" />
      <line x1="18" y1="39" x2="62" y2="39" stroke="#5a5a5a" strokeWidth="0.5" />

      {/* Shaft / Deichsel */}
      <path d="M0 22 L18 20 L18 24 L0 22" fill="url(#wagonShaftGradient)" />
      <line x1="2" y1="22" x2="16" y2="21" stroke="#6B3A0A" strokeWidth="0.5" opacity="0.4" />
      {/* Shaft end ring */}
      <circle cx="2" cy="22" r="2" fill="url(#wagonMetalGradient)" />

      {/* Connection hardware */}
      <rect x="13" y="19" width="4" height="6" fill="url(#wagonMetalGradient)" rx="1" />
    </svg>
  );
}
