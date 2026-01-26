/**
 * UMGEBUNGS-KOMPONENTEN / ENVIRONMENT COMPONENTS
 * ==============================================
 * Landschaften, Natur und Gebäude für Spiele!
 * Landscapes, nature and buildings for games!
 */

import type { ReactNode, CSSProperties } from 'react';

// ===== HINTERGRÜNDE / BACKGROUNDS =====

interface BackgroundProps {
  width?: number;
  height?: number;
  children?: ReactNode;
}

/** Himmel mit Farbverlauf / Sky with gradient */
export function Sky({ width = 800, height = 300, children }: BackgroundProps) {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width,
      height,
      background: 'linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%)',
    }}>
      {children}
    </div>
  );
}

/** Nachthimmel / Night sky */
export function NightSky({ width = 800, height = 300, children }: BackgroundProps) {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width,
      height,
      background: 'linear-gradient(to bottom, #0a0a2e 0%, #1a1a4e 50%, #2a2a6e 100%)',
    }}>
      {/* Sterne / Stars */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: (i * 67) % width,
            top: (i * 41) % height,
            width: 2 + (i % 3),
            height: 2 + (i % 3),
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: 0.5 + (i % 5) * 0.1,
          }}
        />
      ))}
      {children}
    </div>
  );
}

/** Sonnenuntergang / Sunset */
export function SunsetSky({ width = 800, height = 300, children }: BackgroundProps) {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width,
      height,
      background: 'linear-gradient(to bottom, #1a1a2e 0%, #4a2a5e 30%, #ff6b6b 60%, #ffd93d 100%)',
    }}>
      {children}
    </div>
  );
}

// ===== BODEN / GROUND =====

interface GroundProps {
  width?: number;
  height?: number;
  y?: number;
  color?: string;
  children?: ReactNode;
}

/** Gras / Grass */
export function Grass({ width = 800, height = 100, color = '#228B22' }: GroundProps) {
  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width,
      height,
      background: `linear-gradient(to bottom, ${color} 0%, #1a6b1a 100%)`,
    }} />
  );
}

/** Sand / Sand */
export function Sand({ width = 800, height = 100, color = '#F4A460' }: GroundProps) {
  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width,
      height,
      background: `linear-gradient(to bottom, ${color} 0%, #DEB887 100%)`,
    }} />
  );
}

/** Wasser / Water */
export function Water({ width = 800, height = 100, color = '#4169E1' }: GroundProps) {
  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width,
      height,
      background: `linear-gradient(to bottom, ${color} 0%, #1a3a8a 100%)`,
      opacity: 0.8,
    }} />
  );
}

/** Schnee / Snow */
export function Snow({ width = 800, height = 100 }: GroundProps) {
  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width,
      height,
      background: 'linear-gradient(to bottom, #FFFFFF 0%, #E8E8E8 100%)',
    }} />
  );
}

/** Weg / Path */
export function Path({ width = 800, height = 60, y = 440, color = '#8B4513' }: GroundProps) {
  return (
    <div style={{
      position: 'absolute',
      top: y,
      left: 0,
      width,
      height,
      background: `linear-gradient(to bottom, ${color} 0%, #654321 100%)`,
      borderTop: '3px solid #5a3a1a',
    }} />
  );
}

// ===== NATUR-ELEMENTE / NATURE ELEMENTS =====

interface ElementProps {
  x?: number;
  y?: number;
  size?: number;
  color?: string;
}

/** Baum / Tree */
export function Tree({ x = 0, y = 0, size = 80, color = '#228B22' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 80 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Stamm / Trunk */}
      <rect x="32" y="70" width="16" height="50" fill="#8B4513" />
      {/* Krone / Crown */}
      <ellipse cx="40" cy="45" rx="35" ry="40" fill={color} />
      <ellipse cx="30" cy="55" rx="25" ry="30" fill={color} opacity="0.8" />
      <ellipse cx="50" cy="55" rx="25" ry="30" fill={color} opacity="0.8" />
    </svg>
  );
}

/** Tannenbaum / Pine tree */
export function PineTree({ x = 0, y = 0, size = 80, color = '#006400' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 80 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Stamm / Trunk */}
      <rect x="35" y="90" width="10" height="30" fill="#8B4513" />
      {/* Ebenen / Layers */}
      <polygon points="40,0 10,40 70,40" fill={color} />
      <polygon points="40,20 5,70 75,70" fill={color} />
      <polygon points="40,45 0,100 80,100" fill={color} />
    </svg>
  );
}

/** Blume / Flower */
export function Flower({ x = 0, y = 0, size = 32, color = '#FF69B4' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 32 48"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Stiel / Stem */}
      <rect x="14" y="20" width="4" height="28" fill="#228B22" />
      {/* Blätter / Leaves */}
      <ellipse cx="10" cy="36" rx="8" ry="4" fill="#228B22" transform="rotate(-30 10 36)" />
      <ellipse cx="22" cy="36" rx="8" ry="4" fill="#228B22" transform="rotate(30 22 36)" />
      {/* Blütenblätter / Petals */}
      <circle cx="16" cy="8" r="6" fill={color} />
      <circle cx="8" cy="14" r="6" fill={color} />
      <circle cx="24" cy="14" r="6" fill={color} />
      <circle cx="10" cy="22" r="6" fill={color} />
      <circle cx="22" cy="22" r="6" fill={color} />
      {/* Mitte / Center */}
      <circle cx="16" cy="15" r="5" fill="#FFD700" />
    </svg>
  );
}

/** Busch / Bush */
export function Bush({ x = 0, y = 0, size = 60, color = '#228B22' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 60 36"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <ellipse cx="15" cy="24" rx="15" ry="12" fill={color} />
      <ellipse cx="30" cy="20" rx="18" ry="16" fill={color} />
      <ellipse cx="45" cy="24" rx="15" ry="12" fill={color} />
    </svg>
  );
}

/** Stein / Rock */
export function Rock({ x = 0, y = 0, size = 40, color = '#808080' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 40 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <ellipse cx="20" cy="16" rx="18" ry="8" fill={color} />
      <ellipse cx="14" cy="12" rx="10" ry="8" fill="#909090" />
      <ellipse cx="28" cy="14" rx="8" ry="6" fill="#707070" />
    </svg>
  );
}

/** Wolke / Cloud */
export function Cloud({ x = 0, y = 0, size = 80, color = 'white' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 80 40"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <ellipse cx="20" cy="28" rx="16" ry="12" fill={color} />
      <ellipse cx="35" cy="22" rx="18" ry="14" fill={color} />
      <ellipse cx="55" cy="24" rx="16" ry="12" fill={color} />
      <ellipse cx="45" cy="30" rx="14" ry="10" fill={color} />
    </svg>
  );
}

/** Sonne / Sun */
export function Sun({ x = 0, y = 0, size = 60 }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Strahlen / Rays */}
      {[...Array(8)].map((_, i) => (
        <line
          key={i}
          x1="30"
          y1="30"
          x2={30 + Math.cos(i * Math.PI / 4) * 28}
          y2={30 + Math.sin(i * Math.PI / 4) * 28}
          stroke="#FFD700"
          strokeWidth="3"
        />
      ))}
      {/* Körper / Body */}
      <circle cx="30" cy="30" r="18" fill="#FFD700" />
      <circle cx="30" cy="30" r="14" fill="#FFA500" />
    </svg>
  );
}

/** Mond / Moon */
export function Moon({ x = 0, y = 0, size = 50 }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <circle cx="25" cy="25" r="20" fill="#F5F5DC" />
      <circle cx="30" cy="25" r="16" fill="#0a0a2e" />
    </svg>
  );
}

// ===== GEBÄUDE / BUILDINGS =====

/** Haus / House */
export function House({ x = 0, y = 0, size = 80, color = '#DEB887' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Dach / Roof */}
      <polygon points="40,5 5,35 75,35" fill="#8B0000" />
      {/* Wand / Wall */}
      <rect x="10" y="35" width="60" height="45" fill={color} />
      {/* Tür / Door */}
      <rect x="32" y="50" width="16" height="30" fill="#8B4513" />
      <circle cx="44" cy="65" r="2" fill="#FFD700" />
      {/* Fenster / Windows */}
      <rect x="16" y="45" width="12" height="12" fill="#87CEEB" />
      <rect x="52" y="45" width="12" height="12" fill="#87CEEB" />
      {/* Fensterkreuze / Window frames */}
      <line x1="22" y1="45" x2="22" y2="57" stroke="white" strokeWidth="1" />
      <line x1="16" y1="51" x2="28" y2="51" stroke="white" strokeWidth="1" />
      <line x1="58" y1="45" x2="58" y2="57" stroke="white" strokeWidth="1" />
      <line x1="52" y1="51" x2="64" y2="51" stroke="white" strokeWidth="1" />
    </svg>
  );
}

/** Schloss / Castle */
export function Castle({ x = 0, y = 0, size = 120, color = '#808080' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Hauptgebäude / Main building */}
      <rect x="20" y="50" width="80" height="70" fill={color} />
      {/* Türme / Towers */}
      <rect x="5" y="30" width="25" height="90" fill={color} />
      <rect x="90" y="30" width="25" height="90" fill={color} />
      {/* Zinnen / Battlements */}
      <rect x="5" y="25" width="8" height="10" fill={color} />
      <rect x="17" y="25" width="8" height="10" fill={color} />
      <rect x="90" y="25" width="8" height="10" fill={color} />
      <rect x="102" y="25" width="8" height="10" fill={color} />
      <rect x="30" y="45" width="8" height="10" fill={color} />
      <rect x="45" y="45" width="8" height="10" fill={color} />
      <rect x="60" y="45" width="8" height="10" fill={color} />
      <rect x="75" y="45" width="8" height="10" fill={color} />
      {/* Tor / Gate */}
      <path d="M45 120 L45 85 Q60 75 75 85 L75 120" fill="#4a3a2a" />
      {/* Fenster / Windows */}
      <rect x="12" y="50" width="10" height="15" fill="#333" />
      <rect x="97" y="50" width="10" height="15" fill="#333" />
      {/* Fahne / Flag */}
      <rect x="58" y="10" width="3" height="35" fill="#8B4513" />
      <polygon points="61,10 85,18 61,26" fill="#FF0000" />
    </svg>
  );
}

/** Zaun / Fence */
export function Fence({ x = 0, y = 0, width = 100, height = 40, color = '#8B4513' }: ElementProps & { width?: number; height?: number }) {
  const posts = Math.floor(width / 20);
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Querbalken / Rails */}
      <rect x="0" y="8" width={width} height="4" fill={color} />
      <rect x="0" y="24" width={width} height="4" fill={color} />
      {/* Pfosten / Posts */}
      {[...Array(posts)].map((_, i) => (
        <rect key={i} x={i * 20 + 6} y="0" width="8" height={height} fill={color} />
      ))}
    </svg>
  );
}

/** Tor / Gate */
export function Gate({ x = 0, y = 0, size = 100, color = '#FFD700' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Pfosten / Posts */}
      <rect x="5" y="10" width="15" height="90" fill="#8B4513" />
      <rect x="80" y="10" width="15" height="90" fill="#8B4513" />
      {/* Bogen / Arch */}
      <path d="M5 10 Q50 -20 95 10" stroke={color} strokeWidth="8" fill="none" />
      {/* Gitter / Bars */}
      <rect x="25" y="10" width="5" height="90" fill="#333" />
      <rect x="40" y="10" width="5" height="90" fill="#333" />
      <rect x="55" y="10" width="5" height="90" fill="#333" />
      <rect x="70" y="10" width="5" height="90" fill="#333" />
      {/* Querbalken / Cross bars */}
      <rect x="20" y="30" width="60" height="5" fill="#333" />
      <rect x="20" y="60" width="60" height="5" fill="#333" />
      {/* Dekoration / Decoration */}
      <circle cx="50" cy="0" r="8" fill={color} />
    </svg>
  );
}

// ===== KOMPLETTE SZENEN / COMPLETE SCENES =====

interface SceneProps {
  width?: number;
  height?: number;
  children?: ReactNode;
  style?: CSSProperties;
}

/** Wiesen-Szene / Meadow scene */
export function MeadowScene({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{ position: 'relative', width, height, overflow: 'hidden' }}>
      <Sky width={width} height={height * 0.7} />
      <Sun x={width - 100} y={30} size={60} />
      <Cloud x={100} y={50} />
      <Cloud x={300} y={80} size={60} />
      <Cloud x={500} y={40} size={100} />
      <Grass width={width} height={height * 0.3} />
      <Tree x={50} y={height * 0.4} />
      <Tree x={width - 130} y={height * 0.42} size={70} />
      <Bush x={200} y={height * 0.75} />
      <Flower x={300} y={height * 0.72} />
      <Flower x={450} y={height * 0.74} color="#FF0000" />
      <Flower x={550} y={height * 0.71} color="#9932CC" />
      {children}
    </div>
  );
}

/** Zoo-Szene / Zoo scene */
export function ZooScene({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{ position: 'relative', width, height, overflow: 'hidden' }}>
      <Sky width={width} height={height * 0.7} />
      <Sun x={width - 100} y={30} size={60} />
      <Cloud x={150} y={60} />
      <Cloud x={400} y={40} size={90} />
      <Grass width={width} height={height * 0.3} />
      <Path width={width} height={50} y={height - 80} />
      <Gate x={width / 2 - 50} y={height * 0.3} />
      <Fence x={0} y={height * 0.55} width={width / 2 - 60} />
      <Fence x={width / 2 + 60} y={height * 0.55} width={width / 2 - 60} />
      <Tree x={30} y={height * 0.35} size={70} />
      <Tree x={width - 100} y={height * 0.38} size={65} />
      {children}
    </div>
  );
}

/** Nacht-Szene / Night scene */
export function NightScene({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{ position: 'relative', width, height, overflow: 'hidden' }}>
      <NightSky width={width} height={height * 0.7} />
      <Moon x={width - 100} y={40} />
      <Grass width={width} height={height * 0.3} color="#1a4a1a" />
      <PineTree x={50} y={height * 0.35} size={90} />
      <PineTree x={width - 120} y={height * 0.4} size={70} />
      {children}
    </div>
  );
}

/** Strand-Szene / Beach scene */
export function BeachScene({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{ position: 'relative', width, height, overflow: 'hidden' }}>
      <Sky width={width} height={height * 0.5} />
      <Sun x={width - 100} y={30} size={60} />
      <Cloud x={100} y={40} />
      <Cloud x={350} y={70} size={70} />
      <Water width={width} height={height * 0.25} />
      <Sand width={width} height={height * 0.25} />
      <Rock x={100} y={height * 0.72} size={50} />
      <Rock x={600} y={height * 0.75} size={35} />
      {children}
    </div>
  );
}

/** Weltraum-Szene / Space scene */
export function SpaceScene({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      position: 'relative',
      width,
      height,
      overflow: 'hidden',
      background: 'linear-gradient(to bottom, #000011 0%, #000033 100%)',
    }}>
      {/* Sterne / Stars */}
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: (i * 73 + 17) % width,
            top: (i * 47 + 23) % height,
            width: 1 + (i % 3),
            height: 1 + (i % 3),
            backgroundColor: 'white',
            borderRadius: '50%',
            opacity: 0.3 + (i % 7) * 0.1,
          }}
        />
      ))}
      {/* Planet */}
      <div style={{
        position: 'absolute',
        right: 50,
        top: 50,
        width: 80,
        height: 80,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, #4a8a4a, #2a4a2a)',
        boxShadow: '0 0 20px rgba(100, 200, 100, 0.3)',
      }} />
      {children}
    </div>
  );
}

// ===== MEHR GEBÄUDE / MORE BUILDINGS =====

/** Scheune / Barn */
export function Barn({ x = 0, y = 0, size = 100, color = '#8B0000' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Dach / Roof */}
      <polygon points="50,5 5,40 95,40" fill="#4a2a1a" />
      {/* Hauptgebäude / Main building */}
      <rect x="10" y="40" width="80" height="60" fill={color} />
      {/* Weißes X / White X */}
      <line x1="20" y1="50" x2="80" y2="90" stroke="white" strokeWidth="4" />
      <line x1="80" y1="50" x2="20" y2="90" stroke="white" strokeWidth="4" />
      {/* Tor / Door */}
      <rect x="35" y="60" width="30" height="40" fill="#4a2a1a" />
      <line x1="50" y1="60" x2="50" y2="100" stroke="#333" strokeWidth="2" />
      {/* Dachfenster / Loft window */}
      <rect x="42" y="25" width="16" height="12" fill="#87CEEB" />
    </svg>
  );
}

/** Leuchtturm / Lighthouse */
export function Lighthouse({ x = 0, y = 0, size = 120, color = 'white' }: ElementProps) {
  return (
    <svg
      width={size * 0.5}
      height={size}
      viewBox="0 0 60 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Turm / Tower */}
      <path d="M20 120 L15 40 L45 40 L40 120 Z" fill={color} />
      {/* Rote Streifen / Red stripes */}
      <rect x="17" y="50" width="26" height="12" fill="#FF0000" />
      <rect x="19" y="74" width="22" height="12" fill="#FF0000" />
      <rect x="21" y="98" width="18" height="12" fill="#FF0000" />
      {/* Laterne / Lantern */}
      <rect x="18" y="25" width="24" height="18" fill="#333" />
      <rect x="20" y="28" width="20" height="12" fill="#FFFF00" />
      {/* Dach / Roof */}
      <polygon points="30,5 12,25 48,25" fill="#333" />
      {/* Umgebung / Railing */}
      <rect x="12" y="38" width="36" height="4" fill="#333" />
    </svg>
  );
}

/** Windmühle / Windmill */
export function Windmill({ x = 0, y = 0, size = 100, color = '#DEB887' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 100 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Gebäude / Building */}
      <path d="M35 120 L40 50 L60 50 L65 120 Z" fill={color} />
      {/* Dach / Roof */}
      <polygon points="50,30 35,50 65,50" fill="#8B4513" />
      {/* Tür / Door */}
      <rect x="43" y="90" width="14" height="30" fill="#8B4513" />
      {/* Fenster / Window */}
      <rect x="44" y="60" width="12" height="10" fill="#87CEEB" />
      {/* Flügel / Blades */}
      <rect x="48" y="35" width="4" height="4" fill="#333" />
      <rect x="48" y="5" width="4" height="32" fill="#8B4513" />
      <rect x="48" y="39" width="4" height="32" fill="#8B4513" />
      <rect x="18" y="35" width="32" height="4" fill="#8B4513" />
      <rect x="50" y="35" width="32" height="4" fill="#8B4513" />
    </svg>
  );
}

/** Schule / School */
export function School({ x = 0, y = 0, size = 120, color = '#B22222' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Hauptgebäude / Main building */}
      <rect x="10" y="40" width="100" height="80" fill={color} />
      {/* Glockenturm / Bell tower */}
      <rect x="45" y="15" width="30" height="30" fill={color} />
      <polygon points="60,0 40,15 80,15" fill={color} />
      {/* Glocke / Bell */}
      <ellipse cx="60" cy="28" rx="6" ry="8" fill="#FFD700" />
      {/* Fenster / Windows */}
      <rect x="20" y="50" width="15" height="20" fill="#87CEEB" />
      <rect x="45" y="50" width="15" height="20" fill="#87CEEB" />
      <rect x="70" y="50" width="15" height="20" fill="#87CEEB" />
      {/* Tür / Door */}
      <rect x="45" y="85" width="30" height="35" fill="#4a3a2a" />
      <circle cx="70" cy="105" r="3" fill="#FFD700" />
      {/* Uhr / Clock */}
      <circle cx="60" cy="55" r="8" fill="white" />
      <line x1="60" y1="55" x2="60" y2="50" stroke="black" strokeWidth="2" />
      <line x1="60" y1="55" x2="64" y2="55" stroke="black" strokeWidth="2" />
    </svg>
  );
}

/** Krankenhaus / Hospital */
export function Hospital({ x = 0, y = 0, size = 120, color = 'white' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Hauptgebäude / Main building */}
      <rect x="10" y="30" width="100" height="90" fill={color} />
      {/* Rotes Kreuz / Red cross */}
      <rect x="50" y="10" width="20" height="40" fill="#FF0000" />
      <rect x="40" y="20" width="40" height="20" fill="#FF0000" />
      {/* Fenster / Windows - 3x2 */}
      <rect x="20" y="45" width="20" height="15" fill="#87CEEB" />
      <rect x="50" y="45" width="20" height="15" fill="#87CEEB" />
      <rect x="80" y="45" width="20" height="15" fill="#87CEEB" />
      <rect x="20" y="70" width="20" height="15" fill="#87CEEB" />
      <rect x="50" y="70" width="20" height="15" fill="#87CEEB" />
      <rect x="80" y="70" width="20" height="15" fill="#87CEEB" />
      {/* Tür / Door */}
      <rect x="45" y="95" width="30" height="25" fill="#4169E1" />
      <rect x="44" y="94" width="32" height="4" fill="#333" />
    </svg>
  );
}

/** Laden / Shop */
export function Shop({ x = 0, y = 0, size = 80, color = '#FFD700' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Gebäude / Building */}
      <rect x="5" y="25" width="70" height="55" fill="#DEB887" />
      {/* Markise / Awning */}
      <path d="M0 25 L40 10 L80 25 L80 35 L0 35 Z" fill={color} />
      {/* Streifen / Stripes */}
      <rect x="0" y="25" width="10" height="10" fill="white" />
      <rect x="20" y="25" width="10" height="10" fill="white" />
      <rect x="40" y="25" width="10" height="10" fill="white" />
      <rect x="60" y="25" width="10" height="10" fill="white" />
      {/* Schaufenster / Display window */}
      <rect x="10" y="40" width="25" height="25" fill="#87CEEB" />
      {/* Tür / Door */}
      <rect x="45" y="40" width="25" height="40" fill="#8B4513" />
      <circle cx="65" cy="60" r="3" fill="#FFD700" />
      {/* Schild / Sign */}
      <rect x="15" y="12" width="50" height="10" fill="#333" />
    </svg>
  );
}

/** Brücke / Bridge */
export function Bridge({ x = 0, y = 0, width = 150, height = 60, color = '#8B4513' }: ElementProps & { width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Bogen / Arch */}
      <path d={`M0 ${height} Q${width/2} ${height * 0.3} ${width} ${height}`} stroke={color} strokeWidth="8" fill="none" />
      {/* Deck */}
      <rect x="0" y={height * 0.4} width={width} height="8" fill={color} />
      {/* Geländer / Railing */}
      <rect x="0" y={height * 0.3} width={width} height="4" fill={color} />
      {/* Pfosten / Posts */}
      {[...Array(Math.floor(width / 20))].map((_, i) => (
        <rect key={i} x={i * 20 + 8} y={height * 0.3} width="4" height={height * 0.15} fill={color} />
      ))}
    </svg>
  );
}

/** Turm / Tower */
export function Tower({ x = 0, y = 0, size = 100, color = '#808080' }: ElementProps) {
  return (
    <svg
      width={size * 0.5}
      height={size}
      viewBox="0 0 50 100"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Hauptturm / Main tower */}
      <rect x="10" y="20" width="30" height="80" fill={color} />
      {/* Zinnen / Battlements */}
      <rect x="5" y="15" width="10" height="10" fill={color} />
      <rect x="20" y="15" width="10" height="10" fill={color} />
      <rect x="35" y="15" width="10" height="10" fill={color} />
      {/* Spitzdach / Pointed roof */}
      <polygon points="25,0 0,20 50,20" fill="#4a3a2a" />
      {/* Fenster / Windows */}
      <rect x="18" y="35" width="14" height="20" fill="#333" />
      <rect x="18" y="65" width="14" height="15" fill="#333" />
      {/* Fahne / Flag */}
      <rect x="23" y="0" width="3" height="10" fill="#8B4513" />
      <polygon points="26,0 40,5 26,10" fill="#FF0000" />
    </svg>
  );
}

// ===== MEHR NATUR / MORE NATURE =====

/** Palme / Palm tree */
export function PalmTree({ x = 0, y = 0, size = 100, color = '#228B22' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 100 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Stamm / Trunk */}
      <path d="M45 120 Q48 80 50 50 Q52 80 55 120" fill="#8B4513" stroke="#654321" strokeWidth="2" />
      {/* Kokosnüsse / Coconuts */}
      <circle cx="48" cy="48" r="5" fill="#8B4513" />
      <circle cx="55" cy="50" r="5" fill="#8B4513" />
      {/* Blätter / Leaves */}
      <ellipse cx="30" cy="40" rx="25" ry="8" fill={color} transform="rotate(-30 30 40)" />
      <ellipse cx="70" cy="40" rx="25" ry="8" fill={color} transform="rotate(30 70 40)" />
      <ellipse cx="50" cy="25" rx="8" ry="25" fill={color} />
      <ellipse cx="25" cy="55" rx="22" ry="6" fill={color} transform="rotate(-60 25 55)" />
      <ellipse cx="75" cy="55" rx="22" ry="6" fill={color} transform="rotate(60 75 55)" />
    </svg>
  );
}

/** Kaktus / Cactus */
export function Cactus({ x = 0, y = 0, size = 60, color = '#228B22' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 60 90"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Hauptstamm / Main stem */}
      <rect x="22" y="20" width="16" height="70" fill={color} rx="8" />
      {/* Arme / Arms */}
      <path d="M22 50 L10 50 L10 30 L18 30 L18 42 L22 42" fill={color} />
      <path d="M38 40 L50 40 L50 20 L42 20 L42 32 L38 32" fill={color} />
      {/* Stacheln / Spines */}
      <line x1="30" y1="25" x2="30" y2="20" stroke="#333" strokeWidth="1" />
      <line x1="26" y1="35" x2="22" y2="33" stroke="#333" strokeWidth="1" />
      <line x1="34" y1="35" x2="38" y2="33" stroke="#333" strokeWidth="1" />
      <line x1="30" y1="50" x2="30" y2="45" stroke="#333" strokeWidth="1" />
      <line x1="30" y1="70" x2="30" y2="65" stroke="#333" strokeWidth="1" />
      {/* Blume / Flower */}
      <circle cx="30" cy="18" r="5" fill="#FF69B4" />
      <circle cx="30" cy="18" r="2" fill="#FFD700" />
    </svg>
  );
}

/** Pilz / Mushroom */
export function Mushroom({ x = 0, y = 0, size = 40, color = '#FF0000' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Stiel / Stem */}
      <rect x="14" y="22" width="12" height="18" fill="#F5F5DC" rx="2" />
      {/* Hut / Cap */}
      <ellipse cx="20" cy="18" rx="18" ry="14" fill={color} />
      {/* Punkte / Dots */}
      <circle cx="12" cy="14" r="3" fill="white" />
      <circle cx="24" cy="10" r="4" fill="white" />
      <circle cx="28" cy="18" r="3" fill="white" />
      <circle cx="16" cy="22" r="2" fill="white" />
    </svg>
  );
}

/** Teich / Pond */
export function Pond({ x = 0, y = 0, size = 100, color = '#4169E1' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 100 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Wasser / Water */}
      <ellipse cx="50" cy="35" rx="48" ry="24" fill={color} opacity="0.7" />
      <ellipse cx="50" cy="35" rx="40" ry="18" fill="#87CEEB" opacity="0.5" />
      {/* Seerosen / Lily pads */}
      <ellipse cx="30" cy="30" rx="8" ry="4" fill="#228B22" />
      <ellipse cx="70" cy="40" rx="6" ry="3" fill="#228B22" />
      {/* Blumen / Flowers */}
      <circle cx="30" cy="28" r="3" fill="#FF69B4" />
    </svg>
  );
}

/** Berg / Mountain */
export function Mountain({ x = 0, y = 0, size = 150, color = '#696969' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 150 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Berg / Mountain */}
      <polygon points="75,0 0,120 150,120" fill={color} />
      {/* Schneekappe / Snow cap */}
      <polygon points="75,0 55,30 95,30" fill="white" />
      <polygon points="75,0 45,45 60,40 75,50 90,40 105,45" fill="white" />
    </svg>
  );
}

/** Hügel / Hill */
export function Hill({ x = 0, y = 0, size = 120, color = '#228B22' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 120 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <ellipse cx="60" cy="50" rx="58" ry="40" fill={color} />
    </svg>
  );
}

/** Wasserfall / Waterfall */
export function Waterfall({ x = 0, y = 0, size = 80, color = '#4169E1' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 80 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Felsen / Rocks */}
      <rect x="0" y="0" width="30" height="50" fill="#696969" />
      <rect x="50" y="0" width="30" height="50" fill="#696969" />
      {/* Wasser / Water */}
      <rect x="30" y="0" width="20" height="100" fill={color} opacity="0.8" />
      {/* Spritzer / Splash */}
      <ellipse cx="40" cy="105" rx="30" ry="10" fill="#87CEEB" opacity="0.6" />
      {/* Schaum / Foam */}
      <circle cx="30" cy="100" r="8" fill="white" opacity="0.7" />
      <circle cx="50" cy="102" r="8" fill="white" opacity="0.7" />
      <circle cx="40" cy="108" r="6" fill="white" opacity="0.5" />
    </svg>
  );
}

// ===== WETTER / WEATHER =====

/** Regentropfen / Raindrops */
export function Rain({ x = 0, y = 0, width = 200, height = 200 }: ElementProps & { width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ position: 'absolute', left: x, top: y, pointerEvents: 'none' }}
    >
      {[...Array(30)].map((_, i) => (
        <line
          key={i}
          x1={(i * 37) % width}
          y1={(i * 23) % height}
          x2={(i * 37) % width + 2}
          y2={(i * 23) % height + 15}
          stroke="#4169E1"
          strokeWidth="2"
          opacity="0.6"
        />
      ))}
    </svg>
  );
}

/** Schneeflocke / Snowflake */
export function Snowflake({ x = 0, y = 0, size = 20, color = 'white' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <line x1="10" y1="0" x2="10" y2="20" stroke={color} strokeWidth="2" />
      <line x1="0" y1="10" x2="20" y2="10" stroke={color} strokeWidth="2" />
      <line x1="3" y1="3" x2="17" y2="17" stroke={color} strokeWidth="2" />
      <line x1="17" y1="3" x2="3" y2="17" stroke={color} strokeWidth="2" />
      <circle cx="10" cy="10" r="3" fill={color} />
    </svg>
  );
}

/** Schneesturm / Snowstorm */
export function Snowfall({ x = 0, y = 0, width = 200, height = 200 }: ElementProps & { width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ position: 'absolute', left: x, top: y, pointerEvents: 'none' }}
    >
      {[...Array(40)].map((_, i) => (
        <circle
          key={i}
          cx={(i * 41 + 13) % width}
          cy={(i * 29 + 7) % height}
          r={2 + (i % 3)}
          fill="white"
          opacity={0.5 + (i % 4) * 0.1}
        />
      ))}
    </svg>
  );
}

// ===== MÖBEL / FURNITURE =====

/** Stuhl / Chair */
export function Chair({ x = 0, y = 0, size = 50, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Rückenlehne / Backrest */}
      <rect x="5" y="5" width="30" height="5" fill={color} />
      <rect x="5" y="5" width="5" height="25" fill={color} />
      <rect x="30" y="5" width="5" height="25" fill={color} />
      {/* Sitzfläche / Seat */}
      <rect x="5" y="25" width="35" height="5" fill={color} />
      {/* Beine / Legs */}
      <rect x="5" y="30" width="5" height="20" fill={color} />
      <rect x="35" y="30" width="5" height="20" fill={color} />
    </svg>
  );
}

/** Tisch / Table */
export function Table({ x = 0, y = 0, size = 80, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 80 48"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Tischplatte / Tabletop */}
      <rect x="0" y="0" width="80" height="8" fill={color} rx="2" />
      {/* Beine / Legs */}
      <rect x="5" y="8" width="6" height="40" fill={color} />
      <rect x="69" y="8" width="6" height="40" fill={color} />
    </svg>
  );
}

/** Lampe / Lamp */
export function Lamp({ x = 0, y = 0, size = 60, color = '#FFD700' }: ElementProps) {
  return (
    <svg
      width={size * 0.5}
      height={size}
      viewBox="0 0 30 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Schirm / Shade */}
      <polygon points="15,5 0,25 30,25" fill={color} />
      {/* Stange / Pole */}
      <rect x="13" y="25" width="4" height="30" fill="#333" />
      {/* Fuß / Base */}
      <ellipse cx="15" cy="57" rx="12" ry="4" fill="#333" />
      {/* Licht / Light */}
      <ellipse cx="15" cy="18" rx="8" ry="5" fill="#FFFACD" opacity="0.8" />
    </svg>
  );
}

/** Bett / Bed */
export function Bed({ x = 0, y = 0, size = 100, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 100 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Rahmen / Frame */}
      <rect x="0" y="30" width="100" height="25" fill={color} />
      {/* Kopfteil / Headboard */}
      <rect x="0" y="5" width="10" height="50" fill={color} rx="2" />
      {/* Fußteil / Footboard */}
      <rect x="90" y="20" width="10" height="35" fill={color} rx="2" />
      {/* Matratze / Mattress */}
      <rect x="10" y="25" width="80" height="15" fill="white" rx="2" />
      {/* Kissen / Pillow */}
      <rect x="12" y="27" width="20" height="10" fill="#F0F0F0" rx="3" />
      {/* Decke / Blanket */}
      <rect x="35" y="28" width="52" height="12" fill="#4169E1" rx="2" />
      {/* Beine / Legs */}
      <rect x="2" y="55" width="6" height="5" fill={color} />
      <rect x="92" y="55" width="6" height="5" fill={color} />
    </svg>
  );
}

/** Schrank / Wardrobe */
export function Wardrobe({ x = 0, y = 0, size = 80, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size * 0.8}
      height={size}
      viewBox="0 0 64 80"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Korpus / Body */}
      <rect x="2" y="5" width="60" height="70" fill={color} />
      {/* Türen / Doors */}
      <rect x="4" y="7" width="27" height="66" fill="#A0522D" />
      <rect x="33" y="7" width="27" height="66" fill="#A0522D" />
      {/* Griffe / Handles */}
      <circle cx="28" cy="40" r="3" fill="#FFD700" />
      <circle cx="36" cy="40" r="3" fill="#FFD700" />
      {/* Beine / Legs */}
      <rect x="4" y="75" width="8" height="5" fill={color} />
      <rect x="52" y="75" width="8" height="5" fill={color} />
    </svg>
  );
}

/** Sofa / Couch */
export function Sofa({ x = 0, y = 0, size = 120, color = '#8B0000' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 120 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Rückenlehne / Backrest */}
      <rect x="5" y="5" width="110" height="25" fill={color} rx="5" />
      {/* Sitzfläche / Seat */}
      <rect x="5" y="25" width="110" height="20" fill={color} rx="3" />
      {/* Armlehnen / Armrests */}
      <rect x="0" y="15" width="15" height="35" fill={color} rx="5" />
      <rect x="105" y="15" width="15" height="35" fill={color} rx="5" />
      {/* Kissen / Cushions */}
      <rect x="15" y="28" width="35" height="14" fill="#A52A2A" rx="3" />
      <rect x="55" y="28" width="35" height="14" fill="#A52A2A" rx="3" />
      {/* Beine / Legs */}
      <rect x="10" y="50" width="8" height="10" fill="#333" />
      <rect x="102" y="50" width="8" height="10" fill="#333" />
    </svg>
  );
}

// ===== MEHR BODEN / MORE GROUND =====

/** Lava */
export function Lava({ width = 800, height = 100, color = '#FF4500' }: GroundProps) {
  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width,
      height,
      background: `linear-gradient(to bottom, ${color} 0%, #8B0000 100%)`,
    }} />
  );
}

/** Erde / Dirt */
export function Dirt({ width = 800, height = 100, color = '#8B4513' }: GroundProps) {
  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width,
      height,
      background: `linear-gradient(to bottom, ${color} 0%, #5D3A1A 100%)`,
    }} />
  );
}

/** Steinboden / Stone floor */
export function StoneFloor({ width = 800, height = 100, color = '#808080' }: GroundProps) {
  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width,
      height,
      background: `linear-gradient(to bottom, ${color} 0%, #505050 100%)`,
      borderTop: '3px solid #606060',
    }} />
  );
}

// ===== MEHR SZENEN / MORE SCENES =====

/** Wald-Szene / Forest scene */
export function ForestScene({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{ position: 'relative', width, height, overflow: 'hidden' }}>
      <Sky width={width} height={height * 0.5} />
      {/* Hintergrund-Bäume / Background trees */}
      <div style={{
        position: 'absolute',
        top: height * 0.2,
        left: 0,
        width,
        height: height * 0.5,
        background: 'linear-gradient(to bottom, transparent 0%, #1a4a1a 100%)',
      }} />
      <PineTree x={30} y={height * 0.15} size={120} color="#1a5a1a" />
      <PineTree x={150} y={height * 0.2} size={100} color="#1a5a1a" />
      <Tree x={280} y={height * 0.25} size={90} color="#2a6a2a" />
      <PineTree x={400} y={height * 0.18} size={110} color="#1a5a1a" />
      <Tree x={520} y={height * 0.22} size={95} color="#2a6a2a" />
      <PineTree x={650} y={height * 0.2} size={105} color="#1a5a1a" />
      <Grass width={width} height={height * 0.3} color="#1a5a1a" />
      <Bush x={100} y={height * 0.72} size={50} />
      <Bush x={350} y={height * 0.74} size={40} />
      <Bush x={600} y={height * 0.73} size={55} />
      <Mushroom x={200} y={height * 0.78} size={30} />
      <Mushroom x={500} y={height * 0.76} size={25} color="#FFD700" />
      {children}
    </div>
  );
}

/** Wüsten-Szene / Desert scene */
export function DesertScene({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{ position: 'relative', width, height, overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height,
        background: 'linear-gradient(to bottom, #87CEEB 0%, #FFD700 50%, #F4A460 100%)',
      }} />
      <Sun x={width - 100} y={30} size={70} />
      <Mountain x={50} y={height * 0.3} size={200} color="#DEB887" />
      <Mountain x={300} y={height * 0.35} size={150} color="#D2B48C" />
      <Cactus x={150} y={height * 0.5} size={70} />
      <Cactus x={400} y={height * 0.55} size={50} />
      <Cactus x={600} y={height * 0.52} size={60} />
      <Sand width={width} height={height * 0.3} />
      <Rock x={250} y={height * 0.75} size={40} color="#D2B48C" />
      <Rock x={550} y={height * 0.78} size={30} color="#DEB887" />
      {children}
    </div>
  );
}

/** Arktis-Szene / Arctic scene */
export function ArcticScene({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{ position: 'relative', width, height, overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height,
        background: 'linear-gradient(to bottom, #B0E0E6 0%, #E0FFFF 50%, #FFFFFF 100%)',
      }} />
      <Cloud x={100} y={40} />
      <Cloud x={400} y={60} size={90} />
      <Mountain x={0} y={height * 0.25} size={180} color="#E8E8E8" />
      <Mountain x={200} y={height * 0.3} size={140} color="#F0F0F0" />
      <Mountain x={450} y={height * 0.28} size={160} color="#E8E8E8" />
      <PineTree x={350} y={height * 0.45} size={80} color="#2F4F4F" />
      <PineTree x={550} y={height * 0.48} size={70} color="#2F4F4F" />
      <Snow width={width} height={height * 0.3} />
      <Rock x={100} y={height * 0.75} size={50} color="#B0B0B0" />
      <Rock x={600} y={height * 0.77} size={40} color="#C0C0C0" />
      <Snowfall width={width} height={height * 0.6} />
      {children}
    </div>
  );
}

/** Unterwasser-Szene / Underwater scene */
export function UnderwaterScene({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{
      position: 'relative',
      width,
      height,
      overflow: 'hidden',
      background: 'linear-gradient(to bottom, #006994 0%, #004466 50%, #002233 100%)',
    }}>
      {/* Lichtstrahlen / Light rays */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: 100 + i * 150,
            top: 0,
            width: 40,
            height: height * 0.6,
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)',
            transform: `rotate(${-10 + i * 5}deg)`,
          }}
        />
      ))}
      {/* Blasen / Bubbles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: (i * 47 + 23) % width,
            top: (i * 31 + 17) % height,
            width: 4 + (i % 8),
            height: 4 + (i % 8),
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.4)',
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent)',
          }}
        />
      ))}
      {/* Meeresboden / Seabed */}
      <Sand width={width} height={height * 0.2} color="#8B7355" />
      {/* Korallen / Corals */}
      <div style={{
        position: 'absolute',
        bottom: height * 0.15,
        left: 100,
      }}>
        <svg width="60" height="80" viewBox="0 0 60 80">
          <path d="M30 80 L20 40 L10 50 L15 20 L5 30 L20 0" stroke="#FF6B6B" strokeWidth="4" fill="none" />
          <path d="M30 80 L40 45 L50 55 L45 25 L55 35 L40 5" stroke="#FF69B4" strokeWidth="4" fill="none" />
        </svg>
      </div>
      <div style={{
        position: 'absolute',
        bottom: height * 0.15,
        left: 500,
      }}>
        <svg width="50" height="60" viewBox="0 0 50 60">
          <path d="M25 60 L15 30 L5 40 L10 10 L0 20 L15 0" stroke="#9370DB" strokeWidth="3" fill="none" />
          <path d="M25 60 L35 35 L45 45 L40 15 L50 25 L35 0" stroke="#FF7F50" strokeWidth="3" fill="none" />
        </svg>
      </div>
      {/* Algen / Seaweed */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            bottom: height * 0.18,
            left: 50 + i * 100,
          }}
        >
          <svg width="20" height="60" viewBox="0 0 20 60">
            <path d={`M10 60 Q${5 + (i % 3) * 5} 40 10 30 Q${15 - (i % 3) * 5} 20 10 0`} stroke="#228B22" strokeWidth="3" fill="none" />
          </svg>
        </div>
      ))}
      <Rock x={200} y={height * 0.78} size={60} color="#5a5a5a" />
      <Rock x={650} y={height * 0.8} size={45} color="#4a4a4a" />
      {children}
    </div>
  );
}

/** Stadt-Szene / City scene */
export function CityScene({ width = 800, height = 500, children }: SceneProps) {
  return (
    <div style={{ position: 'relative', width, height, overflow: 'hidden' }}>
      <Sky width={width} height={height * 0.6} />
      <Sun x={width - 100} y={30} size={50} />
      <Cloud x={100} y={50} size={60} />
      <Cloud x={350} y={30} size={80} />
      {/* Gebäude / Buildings */}
      <div style={{
        position: 'absolute',
        bottom: height * 0.2,
        left: 30,
      }}>
        <svg width="80" height="180" viewBox="0 0 80 180">
          <rect x="0" y="20" width="80" height="160" fill="#4a4a4a" />
          {[...Array(8)].map((_, row) => (
            [...Array(4)].map((_, col) => (
              <rect key={`${row}-${col}`} x={8 + col * 18} y={30 + row * 18} width="12" height="12" fill="#FFFF99" />
            ))
          ))}
        </svg>
      </div>
      <div style={{
        position: 'absolute',
        bottom: height * 0.2,
        left: 130,
      }}>
        <svg width="100" height="220" viewBox="0 0 100 220">
          <rect x="0" y="0" width="100" height="220" fill="#6a6a6a" />
          {[...Array(10)].map((_, row) => (
            [...Array(5)].map((_, col) => (
              <rect key={`${row}-${col}`} x={8 + col * 18} y={10 + row * 20} width="12" height="14" fill="#87CEEB" />
            ))
          ))}
        </svg>
      </div>
      <Shop x={250} y={height * 0.5} size={100} />
      <div style={{
        position: 'absolute',
        bottom: height * 0.2,
        left: 380,
      }}>
        <svg width="70" height="150" viewBox="0 0 70 150">
          <rect x="0" y="30" width="70" height="120" fill="#8B4513" />
          {[...Array(5)].map((_, row) => (
            [...Array(3)].map((_, col) => (
              <rect key={`${row}-${col}`} x={10 + col * 20} y={40 + row * 22} width="14" height="16" fill="#87CEEB" />
            ))
          ))}
          <rect x="25" y="110" width="20" height="40" fill="#4a3a2a" />
        </svg>
      </div>
      <Hospital x={470} y={height * 0.25} size={100} />
      <div style={{
        position: 'absolute',
        bottom: height * 0.2,
        left: 600,
      }}>
        <svg width="90" height="200" viewBox="0 0 90 200">
          <rect x="0" y="10" width="90" height="190" fill="#5a5a5a" />
          {[...Array(9)].map((_, row) => (
            [...Array(4)].map((_, col) => (
              <rect key={`${row}-${col}`} x={10 + col * 20} y={20 + row * 20} width="14" height="14" fill="#FFFACD" />
            ))
          ))}
        </svg>
      </div>
      {/* Straße / Street */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width,
        height: height * 0.2,
        background: '#333',
      }}>
        {/* Markierungen / Road markings */}
        {[...Array(Math.floor(width / 60))].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              bottom: height * 0.08,
              left: 20 + i * 60,
              width: 40,
              height: 6,
              background: '#FFD700',
            }}
          />
        ))}
      </div>
      <Tree x={720} y={height * 0.55} size={60} />
      {children}
    </div>
  );
}

// ===== MEHR NATUR-ELEMENTE / MORE NATURE ELEMENTS =====

/** Sonnenblume / Sunflower */
export function Sunflower({ x = 0, y = 0, size = 50, color = '#FFD700' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.6}
      viewBox="0 0 50 80"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Stiel / Stem */}
      <rect x="22" y="35" width="6" height="45" fill="#228B22" />
      {/* Blätter / Leaves */}
      <ellipse cx="15" cy="55" rx="12" ry="6" fill="#228B22" transform="rotate(-30 15 55)" />
      <ellipse cx="35" cy="60" rx="10" ry="5" fill="#228B22" transform="rotate(30 35 60)" />
      {/* Blütenblätter / Petals */}
      {[...Array(12)].map((_, i) => (
        <ellipse
          key={i}
          cx={25 + Math.cos(i * Math.PI / 6) * 15}
          cy={20 + Math.sin(i * Math.PI / 6) * 15}
          rx="8"
          ry="4"
          fill={color}
          transform={`rotate(${i * 30} ${25 + Math.cos(i * Math.PI / 6) * 15} ${20 + Math.sin(i * Math.PI / 6) * 15})`}
        />
      ))}
      {/* Mitte / Center */}
      <circle cx="25" cy="20" r="10" fill="#8B4513" />
      <circle cx="25" cy="20" r="7" fill="#654321" />
    </svg>
  );
}

/** Rose / Rose */
export function Rose({ x = 0, y = 0, size = 40, color = '#FF1744' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 40 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Stiel / Stem */}
      <rect x="18" y="25" width="4" height="35" fill="#228B22" />
      {/* Dornen / Thorns */}
      <polygon points="18,35 14,32 18,32" fill="#228B22" />
      <polygon points="22,42 26,39 22,39" fill="#228B22" />
      {/* Blätter / Leaves */}
      <ellipse cx="12" cy="45" rx="8" ry="4" fill="#228B22" transform="rotate(-45 12 45)" />
      <ellipse cx="28" cy="50" rx="7" ry="3" fill="#228B22" transform="rotate(45 28 50)" />
      {/* Blüte / Blossom - layered petals */}
      <ellipse cx="20" cy="15" rx="10" ry="8" fill={color} />
      <ellipse cx="16" cy="12" rx="7" ry="6" fill={color} opacity="0.9" />
      <ellipse cx="24" cy="12" rx="7" ry="6" fill={color} opacity="0.9" />
      <ellipse cx="20" cy="10" rx="5" ry="5" fill={color} />
      <circle cx="20" cy="12" r="4" fill="#8B0000" />
    </svg>
  );
}

/** Tulpe / Tulip */
export function Tulip({ x = 0, y = 0, size = 35, color = '#FF69B4' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 35 52"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Stiel / Stem */}
      <rect x="15" y="22" width="5" height="30" fill="#228B22" />
      {/* Blätter / Leaves */}
      <path d="M15 35 Q5 40 8 52" fill="#228B22" />
      <path d="M20 35 Q30 40 27 52" fill="#228B22" />
      {/* Blüte / Flower */}
      <ellipse cx="12" cy="14" rx="8" ry="14" fill={color} />
      <ellipse cx="23" cy="14" rx="8" ry="14" fill={color} />
      <ellipse cx="17.5" cy="10" rx="6" ry="10" fill={color} opacity="0.8" />
    </svg>
  );
}

/** Löwenzahn / Dandelion */
export function Dandelion({ x = 0, y = 0, size = 30, color = '#FFD700' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 30 45"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Stiel / Stem */}
      <rect x="13" y="18" width="4" height="27" fill="#90EE90" />
      {/* Blätter / Leaves */}
      <path d="M13 30 Q3 28 5 42 Q10 38 13 35" fill="#228B22" />
      <path d="M17 30 Q27 28 25 42 Q20 38 17 35" fill="#228B22" />
      {/* Blüte / Flower */}
      <circle cx="15" cy="12" r="10" fill={color} />
      <circle cx="15" cy="12" r="6" fill="#FFFF00" />
    </svg>
  );
}

/** Pusteblume / Dandelion puff */
export function DandelionPuff({ x = 0, y = 0, size = 40 }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 40 56"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Stiel / Stem */}
      <rect x="18" y="25" width="4" height="31" fill="#90EE90" />
      {/* Pusteblume / Puff */}
      <circle cx="20" cy="15" r="14" fill="none" stroke="#ddd" strokeWidth="0.5" />
      {[...Array(20)].map((_, i) => (
        <line
          key={i}
          x1="20"
          y1="15"
          x2={20 + Math.cos(i * Math.PI / 10) * 14}
          y2={15 + Math.sin(i * Math.PI / 10) * 14}
          stroke="#ddd"
          strokeWidth="0.5"
        />
      ))}
      {[...Array(20)].map((_, i) => (
        <circle
          key={i}
          cx={20 + Math.cos(i * Math.PI / 10) * 14}
          cy={15 + Math.sin(i * Math.PI / 10) * 14}
          r="2"
          fill="white"
          opacity="0.8"
        />
      ))}
    </svg>
  );
}

/** Grasbusch / Grass tuft */
export function GrassTuft({ x = 0, y = 0, size = 30, color = '#228B22' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 30 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <path d="M5 24 Q3 15 7 5" stroke={color} strokeWidth="2" fill="none" />
      <path d="M10 24 Q8 12 12 2" stroke={color} strokeWidth="2" fill="none" />
      <path d="M15 24 Q15 10 15 0" stroke={color} strokeWidth="2" fill="none" />
      <path d="M20 24 Q22 12 18 2" stroke={color} strokeWidth="2" fill="none" />
      <path d="M25 24 Q27 15 23 5" stroke={color} strokeWidth="2" fill="none" />
    </svg>
  );
}

/** Farn / Fern */
export function Fern({ x = 0, y = 0, size = 50, color = '#228B22' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Haupt-Wedel / Main fronds */}
      <path d="M25 50 Q20 30 10 15" stroke={color} strokeWidth="2" fill="none" />
      <path d="M25 50 Q25 25 25 5" stroke={color} strokeWidth="2" fill="none" />
      <path d="M25 50 Q30 30 40 15" stroke={color} strokeWidth="2" fill="none" />
      {/* Kleine Blätter / Small leaves */}
      <path d="M20 35 Q15 32 18 28" fill={color} />
      <path d="M30 35 Q35 32 32 28" fill={color} />
      <path d="M18 25 Q12 22 16 18" fill={color} />
      <path d="M32 25 Q38 22 34 18" fill={color} />
      <path d="M24 20 Q20 15 23 12" fill={color} />
      <path d="M26 20 Q30 15 27 12" fill={color} />
    </svg>
  );
}

/** Ranke / Vine */
export function Vine({ x = 0, y = 0, size = 100, color = '#228B22' }: ElementProps) {
  return (
    <svg
      width={size * 0.4}
      height={size}
      viewBox="0 0 40 100"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Ranke / Vine stem */}
      <path d="M20 0 Q10 25 20 50 Q30 75 20 100" stroke={color} strokeWidth="3" fill="none" />
      {/* Blätter / Leaves */}
      <ellipse cx="10" cy="20" rx="8" ry="5" fill={color} transform="rotate(-30 10 20)" />
      <ellipse cx="30" cy="40" rx="8" ry="5" fill={color} transform="rotate(30 30 40)" />
      <ellipse cx="10" cy="60" rx="8" ry="5" fill={color} transform="rotate(-30 10 60)" />
      <ellipse cx="30" cy="80" rx="8" ry="5" fill={color} transform="rotate(30 30 80)" />
    </svg>
  );
}

/** Bambus / Bamboo */
export function Bamboo({ x = 0, y = 0, size = 120, color = '#90EE90' }: ElementProps) {
  return (
    <svg
      width={size * 0.3}
      height={size}
      viewBox="0 0 36 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Stämme / Stalks */}
      <rect x="5" y="0" width="8" height="120" fill={color} />
      <rect x="22" y="10" width="8" height="110" fill={color} />
      {/* Segmente / Segments */}
      <line x1="5" y1="25" x2="13" y2="25" stroke="#228B22" strokeWidth="2" />
      <line x1="5" y1="50" x2="13" y2="50" stroke="#228B22" strokeWidth="2" />
      <line x1="5" y1="75" x2="13" y2="75" stroke="#228B22" strokeWidth="2" />
      <line x1="5" y1="100" x2="13" y2="100" stroke="#228B22" strokeWidth="2" />
      <line x1="22" y1="35" x2="30" y2="35" stroke="#228B22" strokeWidth="2" />
      <line x1="22" y1="60" x2="30" y2="60" stroke="#228B22" strokeWidth="2" />
      <line x1="22" y1="85" x2="30" y2="85" stroke="#228B22" strokeWidth="2" />
      {/* Blätter / Leaves */}
      <ellipse cx="0" cy="15" rx="10" ry="3" fill="#228B22" transform="rotate(-30 0 15)" />
      <ellipse cx="18" cy="5" rx="12" ry="3" fill="#228B22" transform="rotate(10 18 5)" />
      <ellipse cx="36" cy="20" rx="10" ry="3" fill="#228B22" transform="rotate(30 36 20)" />
    </svg>
  );
}

// ===== STRAND & MEER / BEACH & OCEAN =====

/** Muschel / Seashell */
export function Seashell({ x = 0, y = 0, size = 25, color = '#FFE4C4' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 25 20"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <ellipse cx="12.5" cy="14" rx="11" ry="6" fill={color} />
      <path d="M2 14 Q12.5 0 23 14" fill={color} stroke="#DEB887" strokeWidth="1" />
      {/* Rippen / Ridges */}
      <path d="M5 14 Q12.5 4 20 14" fill="none" stroke="#DEB887" strokeWidth="0.5" />
      <path d="M7 14 Q12.5 6 18 14" fill="none" stroke="#DEB887" strokeWidth="0.5" />
      <path d="M9 14 Q12.5 8 16 14" fill="none" stroke="#DEB887" strokeWidth="0.5" />
    </svg>
  );
}

/** Seestern / Starfish (beach prop) */
export function SeaStar({ x = 0, y = 0, size = 30, color = '#FF6347' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <polygon
        points="15,0 18,11 29,11 20,18 23,29 15,22 7,29 10,18 1,11 12,11"
        fill={color}
      />
      <circle cx="15" cy="15" r="4" fill="#FF4500" />
      {/* Noppen / Bumps */}
      <circle cx="15" cy="5" r="1" fill="#FF4500" />
      <circle cx="24" cy="13" r="1" fill="#FF4500" />
      <circle cx="20" cy="24" r="1" fill="#FF4500" />
      <circle cx="10" cy="24" r="1" fill="#FF4500" />
      <circle cx="6" cy="13" r="1" fill="#FF4500" />
    </svg>
  );
}

/** Anker / Anchor */
export function Anchor({ x = 0, y = 0, size = 50, color = '#4a4a4a' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Ring */}
      <circle cx="25" cy="8" r="5" fill="none" stroke={color} strokeWidth="3" />
      {/* Schaft / Shank */}
      <rect x="23" y="12" width="4" height="30" fill={color} />
      {/* Querbalken / Stock */}
      <rect x="10" y="15" width="30" height="4" fill={color} rx="2" />
      {/* Arme / Arms */}
      <path d="M10 42 Q10 50 25 48" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M40 42 Q40 50 25 48" fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
      {/* Fluken / Flukes */}
      <polygon points="5,42 10,42 10,48 3,45" fill={color} />
      <polygon points="45,42 40,42 40,48 47,45" fill={color} />
    </svg>
  );
}

/** Boje / Buoy */
export function Buoy({ x = 0, y = 0, size = 40, color = '#FF0000' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 40 48"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Boje / Buoy body */}
      <ellipse cx="20" cy="30" rx="15" ry="10" fill={color} />
      <ellipse cx="20" cy="30" rx="15" ry="10" fill="white" clipPath="url(#buoyStripe)" />
      <rect x="5" y="25" width="30" height="5" fill="white" />
      {/* Spitze / Top */}
      <polygon points="20,5 15,20 25,20" fill={color} />
      {/* Stange / Pole */}
      <rect x="18" y="0" width="4" height="8" fill="#333" />
    </svg>
  );
}

/** Strandkorb / Beach chair */
export function BeachChair({ x = 0, y = 0, size = 60, color = '#4169E1' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Rückwand / Back wall */}
      <path d="M10 15 L10 55 L50 55 L50 15 Q30 5 10 15" fill={color} />
      {/* Streifen / Stripes */}
      <rect x="15" y="20" width="30" height="5" fill="white" />
      <rect x="15" y="30" width="30" height="5" fill="white" />
      <rect x="15" y="40" width="30" height="5" fill="white" />
      {/* Sitz / Seat */}
      <rect x="8" y="50" width="44" height="8" fill="#8B4513" />
      {/* Kante / Edge */}
      <path d="M5 15 Q30 3 55 15" fill="none" stroke={color} strokeWidth="4" />
    </svg>
  );
}

/** Sonnenschirm / Beach umbrella */
export function BeachUmbrella({ x = 0, y = 0, size = 80, color = '#FF6347' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Stange / Pole */}
      <rect x="38" y="25" width="4" height="55" fill="#8B4513" />
      {/* Schirm / Umbrella */}
      <path d="M5 25 Q40 0 75 25 Q40 30 5 25" fill={color} />
      {/* Streifen / Stripes */}
      <path d="M20 25 Q40 10 60 25" fill="none" stroke="white" strokeWidth="8" />
      {/* Spitze / Top */}
      <circle cx="40" cy="12" r="3" fill="#FFD700" />
    </svg>
  );
}

/** Sandburg / Sandcastle */
export function Sandcastle({ x = 0, y = 0, size = 60, color = '#F4A460' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 60 48"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Basis / Base */}
      <rect x="5" y="35" width="50" height="13" fill={color} rx="2" />
      {/* Türme / Towers */}
      <rect x="8" y="20" width="12" height="20" fill={color} />
      <rect x="40" y="20" width="12" height="20" fill={color} />
      <rect x="22" y="10" width="16" height="30" fill={color} />
      {/* Zinnen / Battlements */}
      <rect x="8" y="16" width="4" height="6" fill={color} />
      <rect x="16" y="16" width="4" height="6" fill={color} />
      <rect x="40" y="16" width="4" height="6" fill={color} />
      <rect x="48" y="16" width="4" height="6" fill={color} />
      <rect x="24" y="6" width="4" height="6" fill={color} />
      <rect x="32" y="6" width="4" height="6" fill={color} />
      {/* Fahne / Flag */}
      <rect x="29" y="0" width="2" height="10" fill="#8B4513" />
      <polygon points="31,0 38,3 31,6" fill="#FF0000" />
      {/* Fenster / Windows */}
      <rect x="28" y="25" width="4" height="6" fill="#8B4513" />
    </svg>
  );
}

// ===== FANTASY & MAGIE / FANTASY & MAGIC =====

/** Schatztruhe / Treasure chest (scene prop) */
export function Chest({ x = 0, y = 0, size = 50, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 50 40"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Truhe / Chest body */}
      <rect x="2" y="18" width="46" height="20" fill={color} />
      {/* Deckel / Lid */}
      <path d="M2 18 Q25 5 48 18" fill="#A0522D" stroke={color} strokeWidth="2" />
      {/* Metallbänder / Metal bands */}
      <rect x="0" y="16" width="50" height="4" fill="#FFD700" />
      <rect x="0" y="28" width="50" height="3" fill="#FFD700" />
      {/* Schloss / Lock */}
      <rect x="20" y="22" width="10" height="10" fill="#FFD700" rx="2" />
      <circle cx="25" cy="27" r="3" fill="#333" />
      {/* Glanz / Shine */}
      <circle cx="12" cy="12" r="2" fill="#FFD700" />
      <circle cx="38" cy="12" r="2" fill="#FFD700" />
    </svg>
  );
}

/** Magisches Portal / Magic portal */
export function MagicPortal({ x = 0, y = 0, size = 80, color = '#9370DB' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 80 96"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Steinrahmen / Stone frame */}
      <path d="M10 96 L10 30 Q40 0 70 30 L70 96" fill="#696969" stroke="#4a4a4a" strokeWidth="3" />
      {/* Portal-Inneres / Portal interior */}
      <path d="M15 91 L15 33 Q40 8 65 33 L65 91" fill={color} opacity="0.7" />
      {/* Wirbel / Swirl */}
      <ellipse cx="40" cy="55" rx="20" ry="30" fill={color} opacity="0.5" />
      <ellipse cx="40" cy="55" rx="12" ry="20" fill="#E6E6FA" opacity="0.6" />
      {/* Funken / Sparkles */}
      <circle cx="30" cy="40" r="2" fill="white" />
      <circle cx="50" cy="50" r="2" fill="white" />
      <circle cx="35" cy="65" r="2" fill="white" />
      <circle cx="48" cy="75" r="2" fill="white" />
      {/* Runen / Runes */}
      <text x="12" y="60" fill="#FFD700" fontSize="8" fontFamily="serif">☆</text>
      <text x="64" y="60" fill="#FFD700" fontSize="8" fontFamily="serif">☆</text>
    </svg>
  );
}

/** Kristall / Crystal */
export function Crystal({ x = 0, y = 0, size = 40, color = '#00BFFF' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 40 48"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Hauptkristall / Main crystal */}
      <polygon points="20,0 30,15 25,48 15,48 10,15" fill={color} opacity="0.8" />
      <polygon points="20,0 10,15 15,48 20,35" fill={color} opacity="0.6" />
      {/* Kleine Kristalle / Small crystals */}
      <polygon points="5,35 10,25 12,48 3,48" fill={color} opacity="0.7" />
      <polygon points="35,30 38,20 40,48 32,48" fill={color} opacity="0.7" />
      {/* Glanz / Shine */}
      <line x1="18" y1="5" x2="16" y2="20" stroke="white" strokeWidth="2" opacity="0.6" />
    </svg>
  );
}

/** Zaubertrank / Potion bottle */
export function PotionBottle({ x = 0, y = 0, size = 35, color = '#9400D3' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 35 49"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Flasche / Bottle */}
      <ellipse cx="17.5" cy="35" rx="14" ry="12" fill={color} opacity="0.7" />
      <rect x="12" y="10" width="11" height="15" fill={color} opacity="0.5" />
      {/* Hals / Neck */}
      <rect x="14" y="5" width="7" height="8" fill="#87CEEB" opacity="0.5" />
      {/* Korken / Cork */}
      <rect x="13" y="0" width="9" height="6" fill="#8B4513" rx="2" />
      {/* Flüssigkeit / Liquid */}
      <ellipse cx="17.5" cy="38" rx="10" ry="8" fill={color} />
      {/* Blasen / Bubbles */}
      <circle cx="14" cy="32" r="2" fill="white" opacity="0.5" />
      <circle cx="20" cy="36" r="1.5" fill="white" opacity="0.5" />
      <circle cx="17" cy="40" r="1" fill="white" opacity="0.5" />
      {/* Glanz / Shine */}
      <ellipse cx="12" cy="25" rx="2" ry="4" fill="white" opacity="0.3" />
    </svg>
  );
}

/** Zauberstab / Magic wand */
export function MagicWand({ x = 0, y = 0, size = 50, color = '#4a4a4a' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Stab / Wand */}
      <rect x="5" y="22" width="35" height="6" fill={color} rx="2" transform="rotate(-30 22 25)" />
      {/* Spitze / Tip */}
      <polygon points="45,5 48,15 40,12" fill="#FFD700" transform="rotate(-30 22 25)" />
      {/* Funken / Sparkles */}
      <circle cx="42" cy="8" r="2" fill="#FFD700" />
      <circle cx="46" cy="12" r="1.5" fill="#FFD700" />
      <circle cx="44" cy="3" r="1" fill="#FFD700" />
      <circle cx="48" cy="6" r="1" fill="#FFD700" />
      {/* Griff / Handle */}
      <rect x="3" y="35" width="10" height="8" fill="#8B4513" rx="1" transform="rotate(-30 22 25)" />
    </svg>
  );
}

/** Spinnennetz / Spider web */
export function SpiderWeb({ x = 0, y = 0, size = 60, color = 'white' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Radiale Linien / Radial lines */}
      {[...Array(8)].map((_, i) => (
        <line
          key={i}
          x1="30"
          y1="30"
          x2={30 + Math.cos(i * Math.PI / 4) * 28}
          y2={30 + Math.sin(i * Math.PI / 4) * 28}
          stroke={color}
          strokeWidth="1"
          opacity="0.7"
        />
      ))}
      {/* Konzentrische Kreise / Concentric circles */}
      <circle cx="30" cy="30" r="8" fill="none" stroke={color} strokeWidth="0.5" opacity="0.7" />
      <circle cx="30" cy="30" r="15" fill="none" stroke={color} strokeWidth="0.5" opacity="0.7" />
      <circle cx="30" cy="30" r="22" fill="none" stroke={color} strokeWidth="0.5" opacity="0.7" />
      <circle cx="30" cy="30" r="28" fill="none" stroke={color} strokeWidth="0.5" opacity="0.7" />
    </svg>
  );
}

// ===== GEBÄUDE & OBJEKTE / BUILDINGS & OBJECTS =====

/** Zelt / Tent */
export function Tent({ x = 0, y = 0, size = 70, color = '#228B22' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 70 56"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Zelt / Tent body */}
      <polygon points="35,5 5,55 65,55" fill={color} />
      {/* Streifen / Stripes */}
      <polygon points="35,5 20,55 35,55" fill="#1a6a1a" />
      {/* Eingang / Entrance */}
      <polygon points="35,55 28,55 35,30 42,55" fill="#333" />
      {/* Stange / Pole */}
      <rect x="33" y="0" width="4" height="8" fill="#8B4513" />
      {/* Seile / Ropes */}
      <line x1="5" y1="55" x2="0" y2="56" stroke="#8B4513" strokeWidth="1" />
      <line x1="65" y1="55" x2="70" y2="56" stroke="#8B4513" strokeWidth="1" />
    </svg>
  );
}

/** Hütte / Cabin */
export function Cabin({ x = 0, y = 0, size = 90, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 90 90"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Wände / Walls - Holzbalken / Log */}
      <rect x="10" y="40" width="70" height="50" fill={color} />
      {/* Horizontale Balken / Horizontal logs */}
      {[...Array(5)].map((_, i) => (
        <rect key={i} x="10" y={40 + i * 10} width="70" height="10" fill={color} stroke="#654321" strokeWidth="1" />
      ))}
      {/* Dach / Roof */}
      <polygon points="45,10 5,45 85,45" fill="#4a3a2a" />
      {/* Tür / Door */}
      <rect x="35" y="55" width="20" height="35" fill="#654321" />
      <circle cx="50" cy="75" r="2" fill="#FFD700" />
      {/* Fenster / Window */}
      <rect x="15" y="55" width="15" height="15" fill="#87CEEB" />
      <line x1="22.5" y1="55" x2="22.5" y2="70" stroke="#8B4513" strokeWidth="2" />
      <line x1="15" y1="62.5" x2="30" y2="62.5" stroke="#8B4513" strokeWidth="2" />
      {/* Schornstein / Chimney */}
      <rect x="60" y="15" width="12" height="20" fill="#696969" />
    </svg>
  );
}

/** Kirche / Church */
export function Church({ x = 0, y = 0, size = 100, color = 'white' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 100 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Turm / Tower */}
      <rect x="35" y="20" width="30" height="60" fill={color} />
      {/* Dach / Roof */}
      <polygon points="50,0 30,25 70,25" fill="#8B0000" />
      {/* Kreuz / Cross */}
      <rect x="47" y="2" width="6" height="15" fill="#FFD700" />
      <rect x="43" y="6" width="14" height="5" fill="#FFD700" />
      {/* Uhr / Clock */}
      <circle cx="50" cy="40" r="10" fill="#F5F5DC" />
      <line x1="50" y1="40" x2="50" y2="33" stroke="black" strokeWidth="2" />
      <line x1="50" y1="40" x2="55" y2="40" stroke="black" strokeWidth="2" />
      {/* Hauptgebäude / Main building */}
      <rect x="15" y="60" width="70" height="60" fill={color} />
      {/* Tür / Door */}
      <path d="M40 120 L40 85 Q50 75 60 85 L60 120" fill="#8B4513" />
      {/* Fenster / Windows */}
      <path d="M22 75 L22 95 Q27 100 32 95 L32 75" fill="#87CEEB" />
      <path d="M68 75 L68 95 Q73 100 78 95 L78 75" fill="#87CEEB" />
    </svg>
  );
}

/** Brunnen / Well */
export function Well({ x = 0, y = 0, size = 50, color = '#696969' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Basis / Base */}
      <ellipse cx="25" cy="40" rx="20" ry="8" fill={color} />
      <rect x="5" y="30" width="40" height="12" fill={color} />
      <ellipse cx="25" cy="30" rx="20" ry="8" fill="#4a4a4a" />
      {/* Wasser / Water */}
      <ellipse cx="25" cy="32" rx="15" ry="5" fill="#4169E1" />
      {/* Dach / Roof */}
      <rect x="8" y="5" width="4" height="30" fill="#8B4513" />
      <rect x="38" y="5" width="4" height="30" fill="#8B4513" />
      <polygon points="25,0 5,12 45,12" fill="#8B4513" />
      {/* Seil / Rope */}
      <line x1="25" y1="12" x2="25" y2="28" stroke="#8B4513" strokeWidth="2" />
      {/* Eimer / Bucket */}
      <rect x="22" y="26" width="6" height="5" fill="#696969" />
    </svg>
  );
}

/** Lagerfeuer / Campfire */
export function Campfire({ x = 0, y = 0, size = 50, color = '#FF4500' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Holz / Logs */}
      <rect x="8" y="38" width="30" height="6" fill="#8B4513" rx="2" transform="rotate(-15 23 41)" />
      <rect x="12" y="38" width="30" height="6" fill="#8B4513" rx="2" transform="rotate(15 27 41)" />
      {/* Steine / Stones */}
      <ellipse cx="10" cy="45" rx="5" ry="3" fill="#696969" />
      <ellipse cx="25" cy="47" rx="5" ry="3" fill="#696969" />
      <ellipse cx="40" cy="45" rx="5" ry="3" fill="#696969" />
      {/* Feuer / Fire */}
      <ellipse cx="25" cy="35" rx="10" ry="8" fill={color} />
      <ellipse cx="25" cy="28" rx="7" ry="10" fill="#FF6347" />
      <ellipse cx="25" cy="22" rx="4" ry="8" fill="#FFD700" />
      {/* Funken / Sparks */}
      <circle cx="18" cy="15" r="1" fill="#FFD700" />
      <circle cx="30" cy="12" r="1" fill="#FFD700" />
      <circle cx="25" cy="8" r="1" fill="#FFD700" />
    </svg>
  );
}

/** Bank / Bench */
export function Bench({ x = 0, y = 0, size = 70, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 70 35"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Sitzfläche / Seat */}
      <rect x="5" y="10" width="60" height="6" fill={color} rx="1" />
      {/* Rückenlehne / Backrest */}
      <rect x="5" y="2" width="60" height="6" fill={color} rx="1" />
      {/* Stützen / Supports */}
      <rect x="8" y="8" width="4" height="4" fill={color} />
      <rect x="58" y="8" width="4" height="4" fill={color} />
      {/* Beine / Legs */}
      <rect x="10" y="16" width="4" height="19" fill="#4a4a4a" />
      <rect x="56" y="16" width="4" height="19" fill="#4a4a4a" />
    </svg>
  );
}

/** Schild / Sign */
export function Sign({ x = 0, y = 0, size = 50, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 50 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Pfosten / Post */}
      <rect x="22" y="25" width="6" height="35" fill={color} />
      {/* Schildplatte / Sign plate */}
      <rect x="5" y="5" width="40" height="25" fill="#F5F5DC" stroke={color} strokeWidth="2" rx="2" />
      {/* Pfeil / Arrow (optional decoration) */}
      <polygon points="42,17.5 50,17.5 42,12 42,23" fill={color} />
    </svg>
  );
}

/** Briefkasten / Mailbox */
export function Mailbox({ x = 0, y = 0, size = 35, color = '#FF0000' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 35 49"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Pfosten / Post */}
      <rect x="15" y="25" width="5" height="24" fill="#8B4513" />
      {/* Kasten / Box */}
      <rect x="5" y="5" width="25" height="22" fill={color} rx="3" />
      <path d="M5 16 Q17.5 5 30 16" fill={color} />
      {/* Tür / Door */}
      <rect x="8" y="18" width="19" height="7" fill="#8B0000" />
      {/* Fahne / Flag */}
      <rect x="30" y="10" width="3" height="12" fill="#FFD700" />
    </svg>
  );
}

/** Straßenlaterne / Streetlamp */
export function Streetlamp({ x = 0, y = 0, size = 100, color = '#333' }: ElementProps) {
  return (
    <svg
      width={size * 0.4}
      height={size}
      viewBox="0 0 40 100"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Stange / Pole */}
      <rect x="17" y="20" width="6" height="80" fill={color} />
      {/* Laterne / Lantern */}
      <rect x="10" y="5" width="20" height="18" fill={color} />
      <rect x="12" y="7" width="16" height="14" fill="#FFFF99" />
      {/* Kappe / Cap */}
      <polygon points="20,0 5,5 35,5" fill={color} />
      {/* Basis / Base */}
      <rect x="12" y="95" width="16" height="5" fill={color} />
    </svg>
  );
}

/** Fass / Barrel */
export function Barrel({ x = 0, y = 0, size = 40, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 40 48"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Fass / Barrel body */}
      <ellipse cx="20" cy="44" rx="16" ry="4" fill="#654321" />
      <path d="M4 8 Q4 24 4 44 Q20 48 36 44 L36 8 Q20 4 4 8" fill={color} />
      <ellipse cx="20" cy="8" rx="16" ry="5" fill="#A0522D" />
      {/* Metallbänder / Metal bands */}
      <ellipse cx="20" cy="15" rx="17" ry="4" fill="none" stroke="#696969" strokeWidth="2" />
      <ellipse cx="20" cy="30" rx="18" ry="4" fill="none" stroke="#696969" strokeWidth="2" />
    </svg>
  );
}

/** Kutsche / Wagon */
export function Wagon({ x = 0, y = 0, size = 80, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 80 48"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Kasten / Box */}
      <rect x="15" y="8" width="50" height="25" fill={color} />
      {/* Räder / Wheels */}
      <circle cx="20" cy="40" r="8" fill="#4a4a4a" stroke="#333" strokeWidth="2" />
      <circle cx="60" cy="40" r="8" fill="#4a4a4a" stroke="#333" strokeWidth="2" />
      {/* Speichen / Spokes */}
      <line x1="20" y1="32" x2="20" y2="48" stroke="#333" strokeWidth="1" />
      <line x1="12" y1="40" x2="28" y2="40" stroke="#333" strokeWidth="1" />
      <line x1="60" y1="32" x2="60" y2="48" stroke="#333" strokeWidth="1" />
      <line x1="52" y1="40" x2="68" y2="40" stroke="#333" strokeWidth="1" />
      {/* Deichsel / Shaft */}
      <rect x="0" y="20" width="18" height="4" fill={color} />
    </svg>
  );
}

/** Floß / Raft */
export function Raft({ x = 0, y = 0, size = 60, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 60 30"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Stämme / Logs */}
      {[...Array(5)].map((_, i) => (
        <rect key={i} x={5 + i * 10} y="10" width="8" height="20" fill={color} rx="4" />
      ))}
      {/* Querbalken / Cross beam */}
      <rect x="3" y="15" width="54" height="4" fill="#654321" />
      {/* Seil / Rope */}
      <line x1="5" y1="17" x2="55" y2="17" stroke="#DEB887" strokeWidth="2" />
    </svg>
  );
}

/** Springbrunnen / Fountain */
export function Fountain({ x = 0, y = 0, size = 70, color = '#696969' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 70 70"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Becken / Basin */}
      <ellipse cx="35" cy="60" rx="30" ry="8" fill={color} />
      <ellipse cx="35" cy="55" rx="28" ry="6" fill="#4169E1" opacity="0.7" />
      <rect x="7" y="50" width="56" height="12" fill={color} />
      {/* Mittelsäule / Central column */}
      <rect x="30" y="30" width="10" height="25" fill={color} />
      <ellipse cx="35" cy="30" rx="8" ry="4" fill={color} />
      {/* Wasser / Water spouts */}
      <path d="M35 30 Q35 10 35 5" stroke="#87CEEB" strokeWidth="3" fill="none" opacity="0.8" />
      <path d="M35 30 Q20 15 15 25" stroke="#87CEEB" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M35 30 Q50 15 55 25" stroke="#87CEEB" strokeWidth="2" fill="none" opacity="0.6" />
      {/* Tropfen / Drops */}
      <circle cx="35" cy="8" r="3" fill="#87CEEB" opacity="0.6" />
    </svg>
  );
}

/** Statue / Statue */
export function Statue({ x = 0, y = 0, size = 60, color = '#808080' }: ElementProps) {
  return (
    <svg
      width={size * 0.6}
      height={size}
      viewBox="0 0 36 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Sockel / Pedestal */}
      <rect x="5" y="50" width="26" height="10" fill={color} />
      <rect x="8" y="45" width="20" height="8" fill={color} />
      {/* Körper / Body */}
      <ellipse cx="18" cy="35" rx="8" ry="12" fill={color} />
      {/* Kopf / Head */}
      <circle cx="18" cy="18" r="8" fill={color} />
      {/* Arme / Arms */}
      <ellipse cx="8" cy="32" rx="3" ry="8" fill={color} transform="rotate(-15 8 32)" />
      <ellipse cx="28" cy="32" rx="3" ry="8" fill={color} transform="rotate(15 28 32)" />
    </svg>
  );
}

/** Fahnenmast / Flag pole */
export function FlagPole({ x = 0, y = 0, size = 60, color = '#FF0000' }: ElementProps) {
  return (
    <svg
      width={size * 0.6}
      height={size}
      viewBox="0 0 36 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Stange / Pole */}
      <rect x="2" y="0" width="4" height="60" fill="#8B4513" />
      {/* Fahne / Flag */}
      <polygon points="6,5 36,12 6,25" fill={color} />
      {/* Wimpel / Pennant detail */}
      <line x1="6" y1="15" x2="30" y2="15" stroke="white" strokeWidth="2" />
    </svg>
  );
}

/** Ballon / Balloon */
export function Balloon({ x = 0, y = 0, size = 40, color = '#FF6347' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 40 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Ballon / Balloon */}
      <ellipse cx="20" cy="18" rx="16" ry="18" fill={color} />
      {/* Glanz / Shine */}
      <ellipse cx="14" cy="12" rx="4" ry="6" fill="white" opacity="0.4" />
      {/* Knoten / Knot */}
      <polygon points="20,36 16,40 24,40" fill={color} />
      {/* Faden / String */}
      <path d="M20 40 Q15 50 20 60" stroke="#333" strokeWidth="1" fill="none" />
    </svg>
  );
}

/** Geschenk / Gift box */
export function GiftBox({ x = 0, y = 0, size = 40, color = '#FF69B4' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Box / Box */}
      <rect x="5" y="12" width="30" height="25" fill={color} />
      {/* Deckel / Lid */}
      <rect x="3" y="8" width="34" height="6" fill={color} />
      {/* Band / Ribbon vertical */}
      <rect x="17" y="8" width="6" height="29" fill="#FFD700" />
      {/* Band horizontal */}
      <rect x="3" y="20" width="34" height="5" fill="#FFD700" />
      {/* Schleife / Bow */}
      <ellipse cx="14" cy="6" rx="6" ry="4" fill="#FFD700" />
      <ellipse cx="26" cy="6" rx="6" ry="4" fill="#FFD700" />
      <circle cx="20" cy="6" r="3" fill="#FFD700" />
    </svg>
  );
}

/** Leiter / Ladder */
export function Ladder({ x = 0, y = 0, size = 80, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size * 0.4}
      height={size}
      viewBox="0 0 32 80"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Holme / Rails */}
      <rect x="2" y="0" width="5" height="80" fill={color} />
      <rect x="25" y="0" width="5" height="80" fill={color} />
      {/* Sprossen / Rungs */}
      {[...Array(7)].map((_, i) => (
        <rect key={i} x="7" y={5 + i * 11} width="18" height="4" fill={color} />
      ))}
    </svg>
  );
}

/** Iglu / Igloo */
export function Igloo({ x = 0, y = 0, size = 70, color = 'white' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 70 49"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Kuppel / Dome */}
      <ellipse cx="35" cy="35" rx="32" ry="25" fill={color} />
      {/* Eislinien / Ice lines */}
      <path d="M10 30 Q35 25 60 30" fill="none" stroke="#E8E8E8" strokeWidth="2" />
      <path d="M15 40 Q35 35 55 40" fill="none" stroke="#E8E8E8" strokeWidth="2" />
      {/* Eingang / Entrance */}
      <ellipse cx="35" cy="45" rx="10" ry="8" fill="#333" />
      <ellipse cx="25" cy="47" rx="8" ry="6" fill={color} />
    </svg>
  );
}

/** Baumhaus / Treehouse */
export function Treehouse({ x = 0, y = 0, size = 100, color = '#8B4513' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 100 120"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Baum / Tree */}
      <rect x="42" y="50" width="16" height="70" fill={color} />
      {/* Baumkrone / Tree crown */}
      <ellipse cx="50" cy="35" rx="40" ry="35" fill="#228B22" />
      <ellipse cx="30" cy="45" rx="25" ry="25" fill="#228B22" />
      <ellipse cx="70" cy="45" rx="25" ry="25" fill="#228B22" />
      {/* Haus / House */}
      <rect x="25" y="40" width="50" height="35" fill="#DEB887" />
      {/* Dach / Roof */}
      <polygon points="50,20 20,45 80,45" fill="#8B0000" />
      {/* Fenster / Window */}
      <rect x="40" y="50" width="12" height="10" fill="#87CEEB" />
      {/* Tür / Door */}
      <rect x="55" y="55" width="10" height="20" fill={color} />
      {/* Leiter / Ladder */}
      <rect x="30" y="75" width="3" height="40" fill={color} />
      <rect x="40" y="75" width="3" height="40" fill={color} />
      {[...Array(4)].map((_, i) => (
        <rect key={i} x="33" y={80 + i * 10} width="7" height="2" fill={color} />
      ))}
    </svg>
  );
}

// ===== MEHR HIMMEL / MORE SKY =====

/** Regenbogen / Rainbow */
export function Rainbow({ x = 0, y = 0, size = 200 }: ElementProps) {
  const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 200 100"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {colors.map((color, i) => (
        <path
          key={i}
          d={`M10 100 Q100 ${10 + i * 8} 190 100`}
          fill="none"
          stroke={color}
          strokeWidth="8"
          opacity="0.7"
        />
      ))}
    </svg>
  );
}

/** Komet / Comet */
export function Comet({ x = 0, y = 0, size = 60, color = '#FFD700' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 60 30"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Schweif / Tail */}
      <polygon points="5,15 55,10 55,20" fill={color} opacity="0.3" />
      <polygon points="20,15 55,12 55,18" fill={color} opacity="0.5" />
      {/* Kopf / Head */}
      <circle cx="55" cy="15" r="5" fill={color} />
      <circle cx="55" cy="15" r="3" fill="white" />
    </svg>
  );
}

/** Heißluftballon / Hot air balloon */
export function HotAirBalloon({ x = 0, y = 0, size = 70, color = '#FF6347' }: ElementProps) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 70 98"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Ballon / Balloon */}
      <ellipse cx="35" cy="30" rx="28" ry="30" fill={color} />
      {/* Streifen / Stripes */}
      <path d="M15 10 Q35 0 55 10 L55 50 Q35 60 15 50 Z" fill={color} />
      <path d="M20 10 Q35 2 50 10 L50 48 Q35 58 20 48 Z" fill="#FFD700" />
      <path d="M25 10 Q35 4 45 10 L45 46 Q35 54 25 46 Z" fill={color} />
      {/* Seile / Ropes */}
      <line x1="20" y1="55" x2="25" y2="75" stroke="#333" strokeWidth="1" />
      <line x1="35" y1="58" x2="35" y2="75" stroke="#333" strokeWidth="1" />
      <line x1="50" y1="55" x2="45" y2="75" stroke="#333" strokeWidth="1" />
      {/* Korb / Basket */}
      <rect x="22" y="75" width="26" height="18" fill="#8B4513" />
      <rect x="20" y="73" width="30" height="4" fill="#A0522D" />
    </svg>
  );
}
