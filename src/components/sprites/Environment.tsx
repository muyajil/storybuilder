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
