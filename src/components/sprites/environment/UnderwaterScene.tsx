/**
 * UnderwaterScene Sprite Component
 * High quality with deep ocean gradients, bioluminescence, and rich marine details
 */

import type { SceneProps } from '../types';
import { Sand, Rock } from './index';

export function UnderwaterScene({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      position: 'relative',
      width,
      height,
      overflow: 'hidden',
      background: 'linear-gradient(to bottom, #0099AA 0%, #006994 15%, #005577 35%, #004466 55%, #003355 75%, #002233 100%)',
    }}>
      {/* Caustic light patterns on water surface */}
      <svg width="100%" height="40%" style={{ position: 'absolute', top: 0, left: 0 }}>
        <defs>
          <filter id="underwaterCausticBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
          <linearGradient id="underwaterCausticGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Caustic wave patterns */}
        {[...Array(8)].map((_, i) => (
          <ellipse
            key={`caustic-${i}`}
            cx={`${10 + i * 12}%`}
            cy={`${20 + (i % 3) * 15}%`}
            rx={`${8 + (i % 4) * 2}%`}
            ry={`${4 + (i % 3)}%`}
            fill="url(#underwaterCausticGradient)"
            filter="url(#underwaterCausticBlur)"
          />
        ))}
      </svg>

      {/* Light rays / Lichtstrahlen */}
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: 80 + i * 110,
            top: 0,
            width: 50 + (i % 3) * 10,
            height: height * 0.7,
            background: `linear-gradient(to bottom, rgba(255,255,255,${0.15 + (i % 3) * 0.05}), rgba(100,200,255,0.05) 50%, transparent)`,
            transform: `rotate(${-12 + i * 4}deg)`,
            transformOrigin: 'top center',
          }}
        />
      ))}

      {/* Particle dust / Schwebeteilchen */}
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
        {[...Array(40)].map((_, i) => {
          const particleX = (i * 61 + 13) % 100;
          const particleY = (i * 37 + 23) % 100;
          const particleSize = 0.5 + (i % 4) * 0.3;
          return (
            <circle
              key={`particle-${i}`}
              cx={`${particleX}%`}
              cy={`${particleY}%`}
              r={particleSize}
              fill="#AADDFF"
              opacity={0.2 + (i % 5) * 0.1}
            />
          );
        })}
      </svg>

      {/* Bubbles / Blasen */}
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
        <defs>
          <radialGradient id="underwaterBubbleGradient" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
            <stop offset="40%" stopColor="#88DDFF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#66CCEE" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        {[...Array(25)].map((_, i) => {
          const bubbleX = (i * 47 + 23) % 100;
          const bubbleY = (i * 31 + 17) % 100;
          const bubbleSize = 4 + (i % 8) * 1.5;
          return (
            <g key={`bubble-${i}`}>
              <circle
                cx={`${bubbleX}%`}
                cy={`${bubbleY}%`}
                r={bubbleSize}
                fill="url(#underwaterBubbleGradient)"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="0.5"
              />
              {/* Bubble highlight */}
              <circle
                cx={`${bubbleX - 1}%`}
                cy={`${bubbleY - 1}%`}
                r={bubbleSize * 0.3}
                fill="#FFFFFF"
                opacity="0.4"
              />
            </g>
          );
        })}
      </svg>

      {/* Deep water gradient overlay */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '40%',
        background: 'linear-gradient(to top, rgba(0,20,40,0.5), transparent)',
        pointerEvents: 'none',
      }} />

      {/* Seabed / Meeresboden */}
      <Sand width={width} height={height * 0.22} color="#8B7355" />

      {/* Coral formations / Korallen */}
      <div style={{
        position: 'absolute',
        bottom: height * 0.15,
        left: 100,
      }}>
        <svg width="70" height="90" viewBox="0 0 70 90">
          <defs>
            <linearGradient id="underwaterCoral1Gradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#CC4444" />
              <stop offset="50%" stopColor="#FF6B6B" />
              <stop offset="100%" stopColor="#FF8888" />
            </linearGradient>
            <linearGradient id="underwaterCoral2Gradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#CC4488" />
              <stop offset="50%" stopColor="#FF69B4" />
              <stop offset="100%" stopColor="#FF99CC" />
            </linearGradient>
          </defs>
          {/* Main coral branches */}
          <path d="M35 90 L25 50 L15 60 L20 30 L10 40 L25 5" stroke="url(#underwaterCoral1Gradient)" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M35 90 L45 55 L55 65 L50 35 L60 45 L45 10" stroke="url(#underwaterCoral2Gradient)" strokeWidth="5" fill="none" strokeLinecap="round" />
          {/* Coral polyps */}
          <circle cx="25" cy="5" r="4" fill="#FF9999" />
          <circle cx="45" cy="10" r="3.5" fill="#FFAACC" />
          <circle cx="10" cy="40" r="3" fill="#FF8888" />
          <circle cx="60" cy="45" r="3" fill="#FFBBDD" />
        </svg>
      </div>

      <div style={{
        position: 'absolute',
        bottom: height * 0.15,
        left: 500,
      }}>
        <svg width="60" height="70" viewBox="0 0 60 70">
          <defs>
            <linearGradient id="underwaterCoral3Gradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#7744AA" />
              <stop offset="50%" stopColor="#9370DB" />
              <stop offset="100%" stopColor="#BB99EE" />
            </linearGradient>
            <linearGradient id="underwaterCoral4Gradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#CC5533" />
              <stop offset="50%" stopColor="#FF7F50" />
              <stop offset="100%" stopColor="#FFAA88" />
            </linearGradient>
          </defs>
          <path d="M30 70 L20 40 L10 50 L15 20 L5 30 L20 0" stroke="url(#underwaterCoral3Gradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M30 70 L40 45 L50 55 L45 25 L55 35 L40 5" stroke="url(#underwaterCoral4Gradient)" strokeWidth="4" fill="none" strokeLinecap="round" />
          <circle cx="20" cy="0" r="3" fill="#CC99FF" />
          <circle cx="40" cy="5" r="2.5" fill="#FFBB99" />
        </svg>
      </div>

      {/* Seaweed / Algen */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: height * 0.18,
            left: 40 + i * 80,
          }}
        >
          <svg width="25" height="70" viewBox="0 0 25 70">
            <defs>
              <linearGradient id={`underwaterSeaweedGradient${i}`} x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#1a5a1a" />
                <stop offset="50%" stopColor="#228B22" />
                <stop offset="100%" stopColor="#32CD32" />
              </linearGradient>
            </defs>
            <path
              d={`M12 70 Q${5 + (i % 4) * 4} 50 12 35 Q${18 - (i % 3) * 4} 20 12 0`}
              stroke={`url(#underwaterSeaweedGradient${i})`}
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            {/* Secondary frond */}
            <path
              d={`M12 50 Q${3 + (i % 3) * 2} 40 ${5 + i % 4} 25`}
              stroke="#228B22"
              strokeWidth="2"
              fill="none"
              opacity="0.7"
            />
          </svg>
        </div>
      ))}

      {/* Rocks with detail */}
      <Rock x={200} y={height * 0.78} size={60} color="#5a5a5a" />
      <Rock x={650} y={height * 0.8} size={45} color="#4a4a4a" />
      <Rock x={350} y={height * 0.82} size={35} color="#555555" />

      {/* Bioluminescent glow spots */}
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
        <defs>
          <filter id="underwaterBioGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {[...Array(12)].map((_, i) => {
          const glowX = (i * 83 + 37) % 100;
          const glowY = 30 + (i * 47) % 50;
          const glowColor = i % 3 === 0 ? '#00FFFF' : i % 3 === 1 ? '#00FF88' : '#88FFFF';
          return (
            <circle
              key={`glow-${i}`}
              cx={`${glowX}%`}
              cy={`${glowY}%`}
              r={2 + (i % 3)}
              fill={glowColor}
              opacity={0.3 + (i % 4) * 0.1}
              filter="url(#underwaterBioGlow)"
            />
          );
        })}
      </svg>

      {children}
    </div>
  );
}
