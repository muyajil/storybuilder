/**
 * CityScene Sprite Component
 * Enhanced with dramatic skyline, detailed buildings, atmospheric lighting, and urban details
 */

import type { SceneProps } from '../types';

export function CityScene({ width = 800, height = 500, children }: SceneProps) {
  const uniqueId = 'city';

  return (
    <div style={{ position: 'relative', width, height, overflow: 'hidden' }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          {/* Sky gradient - daytime with depth */}
          <linearGradient id={`${uniqueId}-sky`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a237e" />
            <stop offset="15%" stopColor="#283593" />
            <stop offset="35%" stopColor="#3f51b5" />
            <stop offset="55%" stopColor="#5c6bc0" />
            <stop offset="75%" stopColor="#7986cb" />
            <stop offset="100%" stopColor="#9fa8da" />
          </linearGradient>

          {/* Sun gradient */}
          <radialGradient id={`${uniqueId}-sun`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff9c4" />
            <stop offset="40%" stopColor="#fff176" />
            <stop offset="70%" stopColor="#ffee58" />
            <stop offset="100%" stopColor="#fdd835" />
          </radialGradient>

          {/* Sun glow */}
          <radialGradient id={`${uniqueId}-sun-glow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff9c4" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#fff59d" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#fff176" stopOpacity="0" />
          </radialGradient>

          {/* Cloud gradient */}
          <radialGradient id={`${uniqueId}-cloud`} cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#e8eaf6" />
            <stop offset="100%" stopColor="#c5cae9" />
          </radialGradient>

          {/* Building gradients - various styles */}
          <linearGradient id={`${uniqueId}-building-dark`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#37474f" />
            <stop offset="50%" stopColor="#455a64" />
            <stop offset="100%" stopColor="#37474f" />
          </linearGradient>

          <linearGradient id={`${uniqueId}-building-gray`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#546e7a" />
            <stop offset="50%" stopColor="#607d8b" />
            <stop offset="100%" stopColor="#546e7a" />
          </linearGradient>

          <linearGradient id={`${uniqueId}-building-blue`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1565c0" />
            <stop offset="50%" stopColor="#1976d2" />
            <stop offset="100%" stopColor="#1565c0" />
          </linearGradient>

          <linearGradient id={`${uniqueId}-building-brown`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5d4037" />
            <stop offset="50%" stopColor="#6d4c41" />
            <stop offset="100%" stopColor="#5d4037" />
          </linearGradient>

          <linearGradient id={`${uniqueId}-building-glass`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#90caf9" />
            <stop offset="30%" stopColor="#64b5f6" />
            <stop offset="70%" stopColor="#42a5f5" />
            <stop offset="100%" stopColor="#2196f3" />
          </linearGradient>

          {/* Window lit gradient */}
          <linearGradient id={`${uniqueId}-window-lit`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff9c4" />
            <stop offset="100%" stopColor="#ffee58" />
          </linearGradient>

          {/* Window dark gradient */}
          <linearGradient id={`${uniqueId}-window-dark`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#90caf9" />
            <stop offset="100%" stopColor="#64b5f6" />
          </linearGradient>

          {/* Street gradient */}
          <linearGradient id={`${uniqueId}-street`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#424242" />
            <stop offset="50%" stopColor="#303030" />
            <stop offset="100%" stopColor="#212121" />
          </linearGradient>

          {/* Sidewalk gradient */}
          <linearGradient id={`${uniqueId}-sidewalk`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#9e9e9e" />
            <stop offset="50%" stopColor="#bdbdbd" />
            <stop offset="100%" stopColor="#9e9e9e" />
          </linearGradient>

          {/* Tree crown gradient */}
          <radialGradient id={`${uniqueId}-tree-crown`} cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#66bb6a" />
            <stop offset="60%" stopColor="#43a047" />
            <stop offset="100%" stopColor="#2e7d32" />
          </radialGradient>

          {/* Shop awning */}
          <linearGradient id={`${uniqueId}-awning`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e53935" />
            <stop offset="100%" stopColor="#c62828" />
          </linearGradient>

          {/* Hospital cross */}
          <linearGradient id={`${uniqueId}-cross`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef5350" />
            <stop offset="100%" stopColor="#e53935" />
          </linearGradient>

          {/* Atmospheric haze */}
          <linearGradient id={`${uniqueId}-haze`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c5cae9" stopOpacity="0" />
            <stop offset="100%" stopColor="#9fa8da" stopOpacity="0.4" />
          </linearGradient>

          {/* Sun blur filter */}
          <filter id={`${uniqueId}-sun-blur`} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
          </filter>
        </defs>

        {/* Sky background */}
        <rect x="0" y="0" width={width} height={height} fill={`url(#${uniqueId}-sky)`} />

        {/* Sun glow */}
        <circle
          cx={width - 100}
          cy={60}
          r={80}
          fill={`url(#${uniqueId}-sun-glow)`}
          filter={`url(#${uniqueId}-sun-blur)`}
        />

        {/* Sun */}
        <circle cx={width - 100} cy={60} r={35} fill={`url(#${uniqueId}-sun)`} />

        {/* Clouds */}
        <g opacity="0.85">
          <ellipse cx={100} cy={55} rx={55} ry={28} fill={`url(#${uniqueId}-cloud)`} />
          <ellipse cx={135} cy={50} rx={45} ry={22} fill={`url(#${uniqueId}-cloud)`} />
          <ellipse cx={65} cy={60} rx={40} ry={20} fill={`url(#${uniqueId}-cloud)`} />
        </g>
        <g opacity="0.8">
          <ellipse cx={350} cy={40} rx={60} ry={30} fill={`url(#${uniqueId}-cloud)`} />
          <ellipse cx={390} cy={35} rx={50} ry={25} fill={`url(#${uniqueId}-cloud)`} />
          <ellipse cx={310} cy={45} rx={45} ry={22} fill={`url(#${uniqueId}-cloud)`} />
        </g>
        <g opacity="0.6">
          <ellipse cx={550} cy={70} rx={40} ry={20} fill={`url(#${uniqueId}-cloud)`} />
          <ellipse cx={580} cy={65} rx={30} ry={15} fill={`url(#${uniqueId}-cloud)`} />
        </g>

        {/* Background buildings (far) */}
        <g opacity="0.5">
          <rect x={width * 0.05} y={height * 0.35} width={40} height={height * 0.45} fill="#78909c" />
          <rect x={width * 0.12} y={height * 0.28} width={50} height={height * 0.52} fill="#607d8b" />
          <rect x={width * 0.22} y={height * 0.32} width={35} height={height * 0.48} fill="#78909c" />
          <rect x={width * 0.65} y={height * 0.30} width={45} height={height * 0.50} fill="#607d8b" />
          <rect x={width * 0.85} y={height * 0.33} width={55} height={height * 0.47} fill="#78909c" />
        </g>

        {/* Main buildings */}
        {/* Building 1 - Tall office tower */}
        <g transform={`translate(30, ${height * 0.2})`}>
          <rect x="0" y="20" width="85" height={height * 0.6} fill={`url(#${uniqueId}-building-dark)`} />
          {/* Antenna */}
          <line x1="42" y1="20" x2="42" y2="-10" stroke="#455a64" strokeWidth="3" />
          <circle cx="42" cy="-15" r="5" fill="#f44336" />
          {/* Windows */}
          {[...Array(12)].map((_, row) => (
            [...Array(4)].map((_, col) => (
              <rect
                key={`b1-${row}-${col}`}
                x={8 + col * 20}
                y={35 + row * 22}
                width="14"
                height="16"
                fill={(row + col) % 3 === 0 ? `url(#${uniqueId}-window-lit)` : `url(#${uniqueId}-window-dark)`}
                rx="1"
              />
            ))
          ))}
        </g>

        {/* Building 2 - Glass skyscraper */}
        <g transform={`translate(130, ${height * 0.08})`}>
          <rect x="0" y="0" width="100" height={height * 0.72} fill={`url(#${uniqueId}-building-glass)`} />
          {/* Reflective panels */}
          <rect x="0" y="0" width="100" height={height * 0.72} fill="#ffffff" opacity="0.1" />
          {/* Window grid */}
          {[...Array(16)].map((_, row) => (
            [...Array(5)].map((_, col) => (
              <rect
                key={`b2-${row}-${col}`}
                x={5 + col * 19}
                y={8 + row * 22}
                width="15"
                height="18"
                fill={(row + col) % 4 === 0 ? `url(#${uniqueId}-window-lit)` : "#1565c0"}
                opacity={(row + col) % 4 === 0 ? 1 : 0.6}
                rx="1"
              />
            ))
          ))}
          {/* Rooftop details */}
          <rect x="35" y="-15" width="30" height="15" fill="#37474f" />
          <rect x="42" y="-25" width="16" height="10" fill="#455a64" />
        </g>

        {/* Building 3 - Shop/retail */}
        <g transform={`translate(250, ${height * 0.42})`}>
          <rect x="0" y="0" width="100" height={height * 0.38} fill={`url(#${uniqueId}-building-brown)`} />
          {/* Awning */}
          <path
            d={`M-5,${height * 0.22} L105,${height * 0.22} L100,${height * 0.28} L0,${height * 0.28} Z`}
            fill={`url(#${uniqueId}-awning)`}
          />
          {/* Awning stripes */}
          {[...Array(6)].map((_, i) => (
            <path
              key={`awning-${i}`}
              d={`M${5 + i * 18},${height * 0.22} L${10 + i * 18},${height * 0.28}`}
              stroke="#ffffff"
              strokeWidth="8"
              opacity="0.3"
            />
          ))}
          {/* Windows */}
          {[...Array(3)].map((_, row) => (
            [...Array(4)].map((_, col) => (
              <rect
                key={`b3-${row}-${col}`}
                x={10 + col * 23}
                y={15 + row * 28}
                width="18"
                height="22"
                fill={(row + col) % 2 === 0 ? `url(#${uniqueId}-window-lit)` : `url(#${uniqueId}-window-dark)`}
                rx="2"
              />
            ))
          ))}
          {/* Shop window */}
          <rect x="15" y={height * 0.3} width="70" height={height * 0.06} fill="#90caf9" rx="2" />
          {/* Door */}
          <rect x="40" y={height * 0.3 + 20} width="20" height="35" fill="#5d4037" rx="1" />
          <circle cx="55" cy={height * 0.3 + 38} r="2" fill="#ffd54f" />
          {/* Shop sign */}
          <rect x="25" y={height * 0.18} width="50" height="12" fill="#ffffff" rx="2" />
        </g>

        {/* Building 4 - Apartment building */}
        <g transform={`translate(370, ${height * 0.28})`}>
          <rect x="0" y="30" width="75" height={height * 0.52} fill={`url(#${uniqueId}-building-gray)`} />
          {/* Roof detail */}
          <polygon points="0,30 37,-5 75,30" fill="#455a64" />
          {/* Windows with variety */}
          {[...Array(8)].map((_, row) => (
            [...Array(3)].map((_, col) => (
              <g key={`b4-${row}-${col}`}>
                <rect
                  x={12 + col * 22}
                  y={45 + row * 28}
                  width="16"
                  height="20"
                  fill={(row * 3 + col) % 3 === 0 ? `url(#${uniqueId}-window-lit)` : `url(#${uniqueId}-window-dark)`}
                  rx="1"
                />
                {/* Window frame */}
                <line
                  x1={12 + col * 22}
                  y1={55 + row * 28}
                  x2={28 + col * 22}
                  y2={55 + row * 28}
                  stroke="#37474f"
                  strokeWidth="1"
                />
              </g>
            ))
          ))}
          {/* Entrance */}
          <rect x="27" y={height * 0.45} width="22" height="35" fill="#3e2723" rx="2" />
          <rect x="30" y={height * 0.45 + 3} width="16" height="12" fill="#90caf9" rx="1" />
        </g>

        {/* Building 5 - Hospital */}
        <g transform={`translate(${width * 0.58}, ${height * 0.18})`}>
          <rect x="0" y="0" width="110" height={height * 0.62} fill={`url(#${uniqueId}-building-dark)`} />
          {/* White facade */}
          <rect x="5" y="5" width="100" height={height * 0.57} fill="#eceff1" />
          {/* Red cross */}
          <rect x="45" y="15" width="20" height="45" fill={`url(#${uniqueId}-cross)`} rx="2" />
          <rect x="32" y="28" width="46" height="18" fill={`url(#${uniqueId}-cross)`} rx="2" />
          {/* Windows */}
          {[...Array(6)].map((_, row) => (
            [...Array(5)].map((_, col) => (
              <rect
                key={`hosp-${row}-${col}`}
                x={10 + col * 20}
                y={70 + row * 35}
                width="15"
                height="25"
                fill={(row + col) % 2 === 0 ? `url(#${uniqueId}-window-lit)` : `url(#${uniqueId}-window-dark)`}
                rx="1"
              />
            ))
          ))}
          {/* Entrance */}
          <rect x="35" y={height * 0.5} width="40" height="40" fill="#1976d2" rx="2" />
          <rect x="40" y={height * 0.5 + 5} width="30" height="25" fill="#90caf9" rx="1" />
          {/* Emergency sign */}
          <rect x="30" y={height * 0.45} width="50" height="15" fill="#f44336" rx="2" />
        </g>

        {/* Building 6 - Modern tower */}
        <g transform={`translate(${width * 0.78}, ${height * 0.15})`}>
          <rect x="0" y="10" width="95" height={height * 0.65} fill={`url(#${uniqueId}-building-gray)`} />
          {/* Top detail */}
          <rect x="30" y="0" width="35" height="10" fill="#455a64" />
          {/* Windows */}
          {[...Array(14)].map((_, row) => (
            [...Array(4)].map((_, col) => (
              <rect
                key={`b6-${row}-${col}`}
                x={12 + col * 20}
                y={25 + row * 22}
                width="14"
                height="16"
                fill={(row + col) % 3 === 1 ? `url(#${uniqueId}-window-lit)` : `url(#${uniqueId}-window-dark)`}
                rx="1"
              />
            ))
          ))}
        </g>

        {/* Atmospheric haze layer */}
        <rect
          x="0"
          y={height * 0.4}
          width={width}
          height={height * 0.4}
          fill={`url(#${uniqueId}-haze)`}
        />

        {/* Sidewalk */}
        <rect x="0" y={height * 0.8} width={width} height={height * 0.05} fill={`url(#${uniqueId}-sidewalk)`} />

        {/* Street */}
        <rect x="0" y={height * 0.85} width={width} height={height * 0.15} fill={`url(#${uniqueId}-street)`} />

        {/* Road markings - center line */}
        {[...Array(Math.ceil(width / 80))].map((_, i) => (
          <rect
            key={`center-${i}`}
            x={20 + i * 80}
            y={height * 0.91}
            width="50"
            height="5"
            fill="#ffd54f"
            rx="1"
          />
        ))}

        {/* Crosswalk */}
        <g transform={`translate(${width * 0.4}, ${height * 0.85})`}>
          {[...Array(8)].map((_, i) => (
            <rect
              key={`cross-${i}`}
              x={i * 12}
              y="5"
              width="8"
              height={height * 0.12}
              fill="#ffffff"
              rx="1"
            />
          ))}
        </g>

        {/* Street trees */}
        <g transform={`translate(${width * 0.9}, ${height * 0.72})`}>
          <rect x="-4" y="0" width="8" height="40" fill="#5d4037" />
          <ellipse cx="0" cy="-15" rx="30" ry="35" fill={`url(#${uniqueId}-tree-crown)`} />
          <ellipse cx="-15" cy="-5" rx="20" ry="25" fill={`url(#${uniqueId}-tree-crown)`} />
          <ellipse cx="15" cy="-5" rx="20" ry="25" fill={`url(#${uniqueId}-tree-crown)`} />
        </g>

        <g transform={`translate(${width * 0.05}, ${height * 0.74})`}>
          <rect x="-3" y="0" width="6" height="30" fill="#5d4037" />
          <ellipse cx="0" cy="-10" rx="22" ry="28" fill={`url(#${uniqueId}-tree-crown)`} />
          <ellipse cx="-10" cy="0" rx="15" ry="20" fill={`url(#${uniqueId}-tree-crown)`} />
          <ellipse cx="10" cy="0" rx="15" ry="20" fill={`url(#${uniqueId}-tree-crown)`} />
        </g>

        {/* Street lamp */}
        <g transform={`translate(${width * 0.25}, ${height * 0.55})`}>
          <rect x="-3" y="0" width="6" height="100" fill="#37474f" />
          <ellipse cx="0" cy="2" rx="12" ry="4" fill="#455a64" />
          <path d="M0,0 Q-25,-5 -25,-15 Q-25,-25 0,-20" stroke="#37474f" strokeWidth="4" fill="none" />
          <ellipse cx="-25" cy="-18" rx="8" ry="5" fill="#fff9c4" />
        </g>

        {/* Fire hydrant */}
        <g transform={`translate(${width * 0.15}, ${height * 0.78})`}>
          <rect x="-5" y="0" width="10" height="18" fill="#d32f2f" rx="2" />
          <rect x="-8" y="4" width="16" height="4" fill="#b71c1c" rx="1" />
          <rect x="-3" y="-3" width="6" height="5" fill="#d32f2f" rx="1" />
        </g>

        {/* Mailbox */}
        <g transform={`translate(${width * 0.55}, ${height * 0.76})`}>
          <rect x="-8" y="0" width="16" height="25" fill="#1565c0" rx="2" />
          <rect x="-6" y="5" width="12" height="3" fill="#0d47a1" />
          <rect x="-2" y="25" width="4" height="15" fill="#37474f" />
        </g>

        {/* Distant airplane */}
        <g transform={`translate(${width * 0.75}, ${height * 0.08})`} opacity="0.5">
          <ellipse cx="0" cy="0" rx="12" ry="3" fill="#eceff1" />
          <path d="M-5,0 L-12,-8 L-8,0" fill="#eceff1" />
          <path d="M5,0 L12,-6 L8,0" fill="#eceff1" />
          <path d="M-8,0 L-10,4 L-6,0" fill="#eceff1" />
        </g>
      </svg>
      {children}
    </div>
  );
}
