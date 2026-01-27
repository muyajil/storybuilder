/**
 * Raft Sprite Component
 * Enhanced with wood grain textures, realistic rope, water effects, and depth
 */

import type { ElementProps } from '../types';

export function Raft({ x = 0, y = 0, size = 60, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 60 30"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Wood log gradient */}
        <linearGradient id="raftLogGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0724A" />
          <stop offset="20%" stopColor={color} />
          <stop offset="50%" stopColor="#7A5230" />
          <stop offset="80%" stopColor={color} />
          <stop offset="100%" stopColor="#6B4220" />
        </linearGradient>

        {/* Log end grain */}
        <radialGradient id="raftLogEnd" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#5B3A20" />
          <stop offset="30%" stopColor="#6B4A30" />
          <stop offset="60%" stopColor="#7B5A40" />
          <stop offset="100%" stopColor="#6B4A30" />
        </radialGradient>

        {/* Cross beam gradient */}
        <linearGradient id="raftBeamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7A5230" />
          <stop offset="50%" stopColor="#654321" />
          <stop offset="100%" stopColor="#4A3210" />
        </linearGradient>

        {/* Rope texture */}
        <pattern id="raftRopePattern" patternUnits="userSpaceOnUse" width="4" height="4">
          <rect width="4" height="4" fill="#DEB887" />
          <path d="M0 2 Q2 0 4 2" stroke="#C9A875" strokeWidth="0.5" fill="none" />
          <path d="M0 4 Q2 2 4 4" stroke="#C9A875" strokeWidth="0.5" fill="none" />
        </pattern>

        {/* Water reflection */}
        <linearGradient id="raftWaterReflection" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(100,150,200,0.3)" />
          <stop offset="100%" stopColor="rgba(50,100,150,0.1)" />
        </linearGradient>
      </defs>

      {/* Water reflection under raft */}
      <ellipse cx="30" cy="28" rx="28" ry="3" fill="url(#raftWaterReflection)" />

      {/* Shadow on water */}
      <ellipse cx="30" cy="27" rx="26" ry="2" fill="rgba(0,0,0,0.15)" />

      {/* Log shadows */}
      {[...Array(5)].map((_, i) => (
        <rect
          key={`shadow-${i}`}
          x={6 + i * 10}
          y="12"
          width="8"
          height="18"
          fill="rgba(0,0,0,0.15)"
          rx="4"
        />
      ))}

      {/* Main logs */}
      {[...Array(5)].map((_, i) => (
        <g key={i}>
          {/* Log body */}
          <rect
            x={5 + i * 10}
            y="10"
            width="8"
            height="18"
            fill="url(#raftLogGradient)"
            rx="4"
          />
          {/* Wood grain lines */}
          <line
            x1={7 + i * 10}
            y1="12"
            x2={7 + i * 10}
            y2="26"
            stroke="#6B4220"
            strokeWidth="0.5"
            opacity="0.4"
          />
          <line
            x1={9 + i * 10}
            y1="11"
            x2={9 + i * 10}
            y2="27"
            stroke="#6B4220"
            strokeWidth="0.3"
            opacity="0.3"
          />
          <line
            x1={11 + i * 10}
            y1="12"
            x2={11 + i * 10}
            y2="26"
            stroke="#6B4220"
            strokeWidth="0.5"
            opacity="0.4"
          />
          {/* Log end detail (top) */}
          <ellipse
            cx={9 + i * 10}
            cy="10"
            rx="4"
            ry="1.5"
            fill="url(#raftLogEnd)"
          />
          {/* Ring pattern on end */}
          <ellipse
            cx={9 + i * 10}
            cy="10"
            rx="2"
            ry="0.8"
            fill="none"
            stroke="#5B3A20"
            strokeWidth="0.3"
          />
        </g>
      ))}

      {/* Cross beam with depth */}
      <rect x="3" y="14" width="54" height="5" fill="url(#raftBeamGradient)" rx="1" />
      {/* Beam wood grain */}
      <line x1="5" y1="16" x2="55" y2="16" stroke="#4A3210" strokeWidth="0.3" opacity="0.4" />
      <line x1="5" y1="17.5" x2="55" y2="17.5" stroke="#5A4220" strokeWidth="0.5" opacity="0.3" />

      {/* Rope bindings */}
      <rect x="3" y="15.5" width="54" height="3" fill="url(#raftRopePattern)" />

      {/* Individual rope wraps at joints */}
      {[...Array(5)].map((_, i) => (
        <g key={`rope-${i}`}>
          <ellipse
            cx={9 + i * 10}
            cy="17"
            rx="5"
            ry="2"
            fill="none"
            stroke="#DEB887"
            strokeWidth="1.5"
          />
          <ellipse
            cx={9 + i * 10}
            cy="17"
            rx="5"
            ry="2"
            fill="none"
            stroke="#C9A875"
            strokeWidth="0.5"
          />
        </g>
      ))}

      {/* Rope knot detail */}
      <circle cx="7" cy="17" r="1.5" fill="#C9A875" />
      <circle cx="7" cy="17" r="0.8" fill="#B89865" />

      {/* Water splashes at edges */}
      <circle cx="3" cy="25" r="1" fill="rgba(150,200,255,0.4)" />
      <circle cx="57" cy="24" r="0.8" fill="rgba(150,200,255,0.3)" />
      <circle cx="30" cy="27" r="0.6" fill="rgba(150,200,255,0.25)" />

      {/* Highlights on logs */}
      <rect x="6" y="11" width="1" height="10" fill="rgba(255,255,255,0.15)" rx="0.5" />
      <rect x="26" y="11" width="1" height="10" fill="rgba(255,255,255,0.15)" rx="0.5" />
      <rect x="46" y="11" width="1" height="10" fill="rgba(255,255,255,0.15)" rx="0.5" />
    </svg>
  );
}
