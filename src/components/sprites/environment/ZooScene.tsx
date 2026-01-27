/**
 * ZooScene Sprite Component
 * High quality composite scene with enhanced sky, landscaping, and zoo elements
 */

import type { SceneProps } from '../types';
import { Sky, Grass, Path, Tree, Cloud, Sun, Fence, Gate } from './index';

export function ZooScene({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{ position: 'relative', width, height, overflow: 'hidden' }}>
      {/* Sky background */}
      <Sky width={width} height={height * 0.7} />

      {/* Distant hills silhouette */}
      <svg
        width={width}
        height={height * 0.3}
        style={{ position: 'absolute', top: height * 0.4, left: 0 }}
      >
        <defs>
          <linearGradient id="zooSceneHillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6B8E6B" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4A6B4A" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <path
          d={`M0 ${height * 0.15} Q${width * 0.15} ${height * 0.05} ${width * 0.3} ${height * 0.12} Q${width * 0.5} ${height * 0.02} ${width * 0.7} ${height * 0.1} Q${width * 0.85} ${height * 0.05} ${width} ${height * 0.15} L${width} ${height * 0.3} L0 ${height * 0.3} Z`}
          fill="url(#zooSceneHillGradient)"
        />
      </svg>

      {/* Sun with glow */}
      <Sun x={width - 100} y={30} size={60} />

      {/* Clouds at different depths */}
      <Cloud x={100} y={50} size={70} />
      <Cloud x={350} y={30} size={90} />
      <Cloud x={550} y={60} size={60} />

      {/* Grass ground */}
      <Grass width={width} height={height * 0.32} />

      {/* Zoo entrance arch */}
      <svg
        width={120}
        height={100}
        style={{ position: 'absolute', left: width / 2 - 60, top: height * 0.28 }}
      >
        <defs>
          <linearGradient id="zooSceneArchGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B7355" />
            <stop offset="50%" stopColor="#6B5335" />
            <stop offset="100%" stopColor="#4B3315" />
          </linearGradient>
          <linearGradient id="zooSceneSignGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#228B22" />
            <stop offset="100%" stopColor="#156015" />
          </linearGradient>
        </defs>
        {/* Arch pillars */}
        <rect x="5" y="30" width="15" height="70" fill="url(#zooSceneArchGradient)" rx="2" />
        <rect x="100" y="30" width="15" height="70" fill="url(#zooSceneArchGradient)" rx="2" />
        {/* Arch top */}
        <path d="M5 35 Q60 -10 115 35" stroke="url(#zooSceneArchGradient)" strokeWidth="12" fill="none" />
        {/* Zoo sign */}
        <rect x="30" y="10" width="60" height="25" fill="url(#zooSceneSignGradient)" rx="3" />
        <text x="60" y="28" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold" fontFamily="sans-serif">ZOO</text>
        {/* Decorative balls on pillars */}
        <circle cx="12" cy="30" r="6" fill="#6B5335" />
        <circle cx="108" cy="30" r="6" fill="#6B5335" />
      </svg>

      {/* Gate */}
      <Gate x={width / 2 - 50} y={height * 0.32} />

      {/* Fences on both sides */}
      <Fence x={0} y={height * 0.55} width={width / 2 - 75} />
      <Fence x={width / 2 + 75} y={height * 0.55} width={width / 2 - 75} />

      {/* Visitor path */}
      <Path width={width} height={55} y={height - 85} />

      {/* Decorative bushes */}
      <svg width={width} height={height} style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
        <defs>
          <radialGradient id="zooSceneBushGradient" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#3aaa3a" />
            <stop offset="100%" stopColor="#1a6a1a" />
          </radialGradient>
        </defs>
        {/* Left side bushes */}
        <ellipse cx={50} cy={height * 0.62} rx={30} ry={20} fill="url(#zooSceneBushGradient)" />
        <ellipse cx={90} cy={height * 0.65} rx={25} ry={18} fill="url(#zooSceneBushGradient)" opacity="0.9" />
        {/* Right side bushes */}
        <ellipse cx={width - 50} cy={height * 0.63} rx={28} ry={18} fill="url(#zooSceneBushGradient)" />
        <ellipse cx={width - 95} cy={height * 0.66} rx={22} ry={15} fill="url(#zooSceneBushGradient)" opacity="0.9" />
        {/* Near entrance bushes */}
        <ellipse cx={width / 2 - 90} cy={height * 0.58} rx={20} ry={14} fill="url(#zooSceneBushGradient)" opacity="0.8" />
        <ellipse cx={width / 2 + 90} cy={height * 0.58} rx={20} ry={14} fill="url(#zooSceneBushGradient)" opacity="0.8" />
      </svg>

      {/* Trees */}
      <Tree x={25} y={height * 0.32} size={75} />
      <Tree x={width - 105} y={height * 0.35} size={68} />

      {/* Flower beds */}
      <svg width={width} height={height} style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
        {/* Left flower bed */}
        {[...Array(5)].map((_, i) => (
          <g key={`flower-left-${i}`}>
            <circle cx={140 + i * 15} cy={height * 0.72} r={4} fill={i % 2 === 0 ? '#FF6B6B' : '#FFD93D'} />
            <circle cx={140 + i * 15} cy={height * 0.72} r={2} fill={i % 2 === 0 ? '#FF9999' : '#FFEE88'} />
            <line x1={140 + i * 15} y1={height * 0.72 + 4} x2={140 + i * 15} y2={height * 0.72 + 10} stroke="#228B22" strokeWidth="1.5" />
          </g>
        ))}
        {/* Right flower bed */}
        {[...Array(5)].map((_, i) => (
          <g key={`flower-right-${i}`}>
            <circle cx={width - 210 + i * 15} cy={height * 0.72} r={4} fill={i % 2 === 0 ? '#FF69B4' : '#87CEEB'} />
            <circle cx={width - 210 + i * 15} cy={height * 0.72} r={2} fill={i % 2 === 0 ? '#FFB6C1' : '#ADD8E6'} />
            <line x1={width - 210 + i * 15} y1={height * 0.72 + 4} x2={width - 210 + i * 15} y2={height * 0.72 + 10} stroke="#228B22" strokeWidth="1.5" />
          </g>
        ))}
      </svg>

      {/* Bench near entrance */}
      <svg width={60} height={30} style={{ position: 'absolute', left: 160, top: height * 0.68 }}>
        <defs>
          <linearGradient id="zooSceneBenchGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B4513" />
            <stop offset="100%" stopColor="#5D3000" />
          </linearGradient>
        </defs>
        {/* Bench seat */}
        <rect x="5" y="10" width="50" height="6" fill="url(#zooSceneBenchGradient)" rx="1" />
        {/* Bench legs */}
        <rect x="8" y="16" width="4" height="12" fill="#5D3000" />
        <rect x="48" y="16" width="4" height="12" fill="#5D3000" />
        {/* Bench back */}
        <rect x="5" y="3" width="50" height="4" fill="url(#zooSceneBenchGradient)" rx="1" />
        <rect x="8" y="7" width="3" height="3" fill="#6B4423" />
        <rect x="49" y="7" width="3" height="3" fill="#6B4423" />
      </svg>

      {/* Information sign */}
      <svg width={30} height={45} style={{ position: 'absolute', left: width - 180, top: height * 0.62 }}>
        <rect x="12" y="15" width="6" height="30" fill="#8B4513" />
        <rect x="2" y="5" width="26" height="18" fill="#2E8B57" rx="2" />
        <text x="15" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontFamily="sans-serif">INFO</text>
      </svg>

      {children}
    </div>
  );
}
