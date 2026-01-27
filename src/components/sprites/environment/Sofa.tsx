/**
 * Sofa Sprite Component
 * Enhanced with fabric texture, cushion details, and realistic depth
 */

import type { ElementProps } from '../types';

export function Sofa({ x = 0, y = 0, size = 120, color = '#8B0000' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 120 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main fabric gradient */}
        <linearGradient id="sofaFabricGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A02020" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#700000" />
          <stop offset="100%" stopColor="#500000" />
        </linearGradient>

        {/* Cushion gradient */}
        <linearGradient id="sofaCushionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B52A2A" />
          <stop offset="20%" stopColor="#A52A2A" />
          <stop offset="80%" stopColor="#852020" />
          <stop offset="100%" stopColor="#651515" />
        </linearGradient>

        {/* Armrest gradient */}
        <linearGradient id="sofaArmrestGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#600000" />
          <stop offset="30%" stopColor={color} />
          <stop offset="70%" stopColor="#900010" />
          <stop offset="100%" stopColor="#600000" />
        </linearGradient>

        {/* Fabric texture pattern */}
        <pattern id="sofaFabricTexture" patternUnits="userSpaceOnUse" width="4" height="4">
          <rect width="4" height="4" fill="transparent" />
          <line x1="0" y1="0" x2="4" y2="0" stroke="#500000" strokeWidth="0.3" opacity="0.3" />
          <line x1="0" y1="2" x2="4" y2="2" stroke="#500000" strokeWidth="0.3" opacity="0.3" />
        </pattern>

        {/* Leg gradient */}
        <linearGradient id="sofaLegGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#222" />
          <stop offset="50%" stopColor="#444" />
          <stop offset="100%" stopColor="#222" />
        </linearGradient>
      </defs>

      {/* Shadow under sofa */}
      <ellipse cx="60" cy="58" rx="55" ry="4" fill="rgba(0,0,0,0.2)" />

      {/* Backrest */}
      <rect x="5" y="5" width="110" height="25" fill="url(#sofaFabricGradient)" rx="5" />
      <rect x="5" y="5" width="110" height="25" fill="url(#sofaFabricTexture)" rx="5" />
      {/* Backrest tufting */}
      <circle cx="30" cy="17" r="1.5" fill="#600000" />
      <circle cx="60" cy="17" r="1.5" fill="#600000" />
      <circle cx="90" cy="17" r="1.5" fill="#600000" />
      {/* Backrest highlight */}
      <rect x="8" y="7" width="104" height="3" fill="rgba(255,255,255,0.1)" rx="1.5" />

      {/* Seat base */}
      <rect x="5" y="25" width="110" height="20" fill="url(#sofaFabricGradient)" rx="3" />
      <rect x="5" y="25" width="110" height="20" fill="url(#sofaFabricTexture)" rx="3" />

      {/* Left armrest */}
      <rect x="0" y="15" width="15" height="35" fill="url(#sofaArmrestGradient)" rx="5" />
      <rect x="0" y="15" width="15" height="35" fill="url(#sofaFabricTexture)" rx="5" />
      {/* Armrest highlight */}
      <rect x="2" y="17" width="4" height="25" fill="rgba(255,255,255,0.08)" rx="2" />

      {/* Right armrest */}
      <rect x="105" y="15" width="15" height="35" fill="url(#sofaArmrestGradient)" rx="5" />
      <rect x="105" y="15" width="15" height="35" fill="url(#sofaFabricTexture)" rx="5" />
      {/* Armrest highlight */}
      <rect x="107" y="17" width="4" height="25" fill="rgba(255,255,255,0.08)" rx="2" />

      {/* Cushion 1 */}
      <rect x="17" y="27" width="38" height="15" fill="url(#sofaCushionGradient)" rx="4" />
      <rect x="17" y="27" width="38" height="15" fill="url(#sofaFabricTexture)" />
      {/* Cushion 1 seam */}
      <line x1="36" y1="28" x2="36" y2="41" stroke="#700000" strokeWidth="1" />
      {/* Cushion 1 highlight */}
      <rect x="19" y="28" width="34" height="3" fill="rgba(255,255,255,0.1)" rx="1.5" />
      {/* Cushion 1 shadow at bottom */}
      <rect x="18" y="39" width="36" height="2" fill="rgba(0,0,0,0.15)" rx="1" />

      {/* Cushion 2 */}
      <rect x="58" y="27" width="38" height="15" fill="url(#sofaCushionGradient)" rx="4" />
      <rect x="58" y="27" width="38" height="15" fill="url(#sofaFabricTexture)" />
      {/* Cushion 2 seam */}
      <line x1="77" y1="28" x2="77" y2="41" stroke="#700000" strokeWidth="1" />
      {/* Cushion 2 highlight */}
      <rect x="60" y="28" width="34" height="3" fill="rgba(255,255,255,0.1)" rx="1.5" />
      {/* Cushion 2 shadow at bottom */}
      <rect x="59" y="39" width="36" height="2" fill="rgba(0,0,0,0.15)" rx="1" />

      {/* Throw pillows */}
      <g transform="translate(20, 12) rotate(-10)">
        <ellipse cx="0" cy="0" rx="8" ry="6" fill="#C04040" />
        <ellipse cx="0" cy="0" rx="6" ry="4" fill="#B03030" />
        <ellipse cx="-2" cy="-2" rx="2" ry="1.5" fill="rgba(255,255,255,0.15)" />
      </g>
      <g transform="translate(95, 14) rotate(8)">
        <ellipse cx="0" cy="0" rx="7" ry="5" fill="#A04040" />
        <ellipse cx="0" cy="0" rx="5" ry="3" fill="#903030" />
        <ellipse cx="-1.5" cy="-1.5" rx="1.5" ry="1" fill="rgba(255,255,255,0.12)" />
      </g>

      {/* Legs */}
      <rect x="10" y="50" width="8" height="10" fill="url(#sofaLegGradient)" rx="1" />
      <rect x="102" y="50" width="8" height="10" fill="url(#sofaLegGradient)" rx="1" />
      {/* Leg highlights */}
      <rect x="11" y="51" width="2" height="8" fill="rgba(255,255,255,0.1)" rx="0.5" />
      <rect x="103" y="51" width="2" height="8" fill="rgba(255,255,255,0.1)" rx="0.5" />

      {/* Hidden back legs (partially visible) */}
      <rect x="12" y="45" width="4" height="8" fill="#333" rx="1" />
      <rect x="104" y="45" width="4" height="8" fill="#333" rx="1" />
    </svg>
  );
}
