/**
 * EFFEKTE / EFFECTS
 * =================
 * Explosionen, Partikel und Animationen!
 * Explosions, particles and animations!
 */

interface EffectProps {
  x?: number;
  y?: number;
  size?: number;
  color?: string;
}

/** Explosion */
export function Explosion({ x = 0, y = 0, size = 50, color = '#FF4500' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      style={{ position: 'absolute', left: x - size/2, top: y - size/2 }}
    >
      {/* Äußere Strahlen / Outer rays */}
      {[...Array(8)].map((_, i) => (
        <polygon
          key={i}
          points={`25,25 ${25 + Math.cos(i * Math.PI / 4) * 10},${25 + Math.sin(i * Math.PI / 4) * 10} ${25 + Math.cos(i * Math.PI / 4 + 0.2) * 24},${25 + Math.sin(i * Math.PI / 4 + 0.2) * 24} ${25 + Math.cos(i * Math.PI / 4 + 0.4) * 10},${25 + Math.sin(i * Math.PI / 4 + 0.4) * 10}`}
          fill={color}
        />
      ))}
      {/* Mitte / Center */}
      <circle cx="25" cy="25" r="10" fill="#FFFF00" />
      <circle cx="25" cy="25" r="5" fill="white" />
    </svg>
  );
}

/** Funken / Sparkle */
export function Sparkle({ x = 0, y = 0, size = 30, color = '#FFD700' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      style={{ position: 'absolute', left: x - size/2, top: y - size/2 }}
    >
      <polygon points="15,0 17,12 30,15 17,18 15,30 13,18 0,15 13,12" fill={color} />
      <polygon points="15,5 16,13 25,15 16,17 15,25 14,17 5,15 14,13" fill="white" opacity="0.7" />
    </svg>
  );
}

/** Herz / Heart */
export function Heart({ x = 0, y = 0, size = 30, color = '#FF0000' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <path
        d="M15 28 C5 20 0 12 0 8 C0 2 5 0 10 0 C12 0 14 1 15 3 C16 1 18 0 20 0 C25 0 30 2 30 8 C30 12 25 20 15 28"
        fill={color}
      />
      <ellipse cx="8" cy="8" rx="4" ry="3" fill="white" opacity="0.4" />
    </svg>
  );
}

/** Stern / Star */
export function Star({ x = 0, y = 0, size = 30, color = '#FFD700' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <polygon
        points="15,0 18,11 30,11 21,18 24,30 15,23 6,30 9,18 0,11 12,11"
        fill={color}
      />
      <polygon
        points="15,5 17,12 24,12 18,17 20,24 15,20 10,24 12,17 6,12 13,12"
        fill="white"
        opacity="0.3"
      />
    </svg>
  );
}

/** Blitz / Lightning */
export function Lightning({ x = 0, y = 0, size = 40, color = '#FFFF00' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 40 60"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <polygon points="24,0 8,28 18,28 12,60 36,24 24,24 32,0" fill={color} />
      <polygon points="22,5 12,26 20,26 16,50 30,26 22,26 28,5" fill="white" opacity="0.5" />
    </svg>
  );
}

/** Rauch / Smoke */
export function Smoke({ x = 0, y = 0, size = 40, color = '#808080' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <circle cx="12" cy="28" r="10" fill={color} opacity="0.4" />
      <circle cx="20" cy="22" r="12" fill={color} opacity="0.5" />
      <circle cx="28" cy="26" r="10" fill={color} opacity="0.4" />
      <circle cx="20" cy="14" r="10" fill={color} opacity="0.3" />
    </svg>
  );
}

/** Wassertropfen / Water drop */
export function WaterDrop({ x = 0, y = 0, size = 20, color = '#4169E1' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 20 26"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <path
        d="M10 0 Q0 14 0 18 C0 24 4 26 10 26 C16 26 20 24 20 18 Q20 14 10 0"
        fill={color}
      />
      <ellipse cx="6" cy="18" rx="3" ry="4" fill="white" opacity="0.4" />
    </svg>
  );
}

/** Musik-Note / Music note */
export function MusicNote({ x = 0, y = 0, size = 24, color = '#000000' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <ellipse cx="6" cy="20" rx="5" ry="4" fill={color} />
      <rect x="10" y="4" width="2" height="18" fill={color} />
      <path d="M12 4 Q20 2 20 10 L12 8" fill={color} />
    </svg>
  );
}

/** Rede-Blase / Speech bubble */
export function SpeechBubble({ x = 0, y = 0, size = 60, color = 'white', text = '' }: EffectProps & { text?: string }) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 60 48"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <ellipse cx="30" cy="20" rx="28" ry="18" fill={color} stroke="#333" strokeWidth="2" />
      <polygon points="20,36 25,36 15,48" fill={color} stroke="#333" strokeWidth="2" />
      <polygon points="20,36 25,36 15,46" fill={color} />
      <text x="30" y="24" textAnchor="middle" fontSize="10" fill="#333">{text}</text>
    </svg>
  );
}

/** Gedanken-Blase / Thought bubble */
export function ThoughtBubble({ x = 0, y = 0, size = 70, color = 'white', text = '' }: EffectProps & { text?: string }) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 70 56"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <ellipse cx="35" cy="22" rx="32" ry="20" fill={color} stroke="#333" strokeWidth="2" />
      <circle cx="15" cy="46" r="5" fill={color} stroke="#333" strokeWidth="1" />
      <circle cx="8" cy="52" r="3" fill={color} stroke="#333" strokeWidth="1" />
      <text x="35" y="26" textAnchor="middle" fontSize="10" fill="#333">{text}</text>
    </svg>
  );
}

/** Münze / Coin */
export function Coin({ x = 0, y = 0, size = 24, color = '#FFD700' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <circle cx="12" cy="12" r="11" fill={color} stroke="#B8860B" strokeWidth="2" />
      <circle cx="12" cy="12" r="8" fill="none" stroke="#B8860B" strokeWidth="1" />
      <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#B8860B">$</text>
    </svg>
  );
}

/** Diamant / Diamond */
export function Diamond({ x = 0, y = 0, size = 24, color = '#00BFFF' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <polygon points="12,2 22,10 12,22 2,10" fill={color} />
      <polygon points="12,2 7,10 12,10" fill="white" opacity="0.4" />
      <polygon points="12,2 17,10 12,10" fill="#87CEEB" />
      <polygon points="7,10 12,22 12,10" fill="#1E90FF" />
    </svg>
  );
}

/** Schlüssel / Key */
export function Key({ x = 0, y = 0, size = 32, color = '#FFD700' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 32 20"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Griff / Handle */}
      <circle cx="8" cy="10" r="6" fill="none" stroke={color} strokeWidth="3" />
      {/* Schaft / Shaft */}
      <rect x="12" y="8" width="16" height="4" fill={color} />
      {/* Bart / Bit */}
      <rect x="24" y="8" width="4" height="8" fill={color} />
      <rect x="20" y="8" width="4" height="6" fill={color} />
    </svg>
  );
}

/** Schatz-Truhe / Treasure chest */
export function TreasureChest({ x = 0, y = 0, size = 48, color = '#8B4513' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 48 36"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Körper / Body */}
      <rect x="2" y="16" width="44" height="20" fill={color} rx="2" />
      {/* Deckel / Lid */}
      <path d="M2 16 Q24 2 46 16" fill={color} />
      {/* Beschläge / Fittings */}
      <rect x="0" y="14" width="48" height="4" fill="#B8860B" />
      <rect x="20" y="4" width="8" height="32" fill="#B8860B" />
      {/* Schloss / Lock */}
      <circle cx="24" cy="24" r="4" fill="#FFD700" />
      <rect x="22" y="24" width="4" height="6" fill="#FFD700" />
    </svg>
  );
}

// ===== MEHR SAMMELBARES / MORE COLLECTIBLES =====

/** Edelstein / Gem */
export function Gem({ x = 0, y = 0, size = 24, color = '#9400D3' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <polygon points="12,2 20,8 20,16 12,22 4,16 4,8" fill={color} />
      <polygon points="12,2 4,8 12,12 20,8" fill="white" opacity="0.3" />
      <polygon points="4,8 4,16 12,12" fill={color} opacity="0.7" />
      <polygon points="20,8 20,16 12,12" fill={color} opacity="0.5" />
    </svg>
  );
}

/** Power-Up */
export function PowerUp({ x = 0, y = 0, size = 32, color = '#00FF00' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <circle cx="16" cy="16" r="14" fill={color} opacity="0.3" />
      <circle cx="16" cy="16" r="10" fill={color} opacity="0.5" />
      <polygon points="16,4 20,14 16,12 12,14" fill="white" />
      <polygon points="16,28 12,18 16,20 20,18" fill="white" />
      <circle cx="16" cy="16" r="4" fill="white" />
    </svg>
  );
}

/** Schild / Shield */
export function Shield({ x = 0, y = 0, size = 32, color = '#4169E1' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 32 38"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <path d="M16 2 L2 8 L2 18 Q2 32 16 36 Q30 32 30 18 L30 8 Z" fill={color} stroke="#2a4a8a" strokeWidth="2" />
      <path d="M16 6 L6 10 L6 18 Q6 28 16 32" fill="white" opacity="0.3" />
      <polygon points="16,12 20,18 16,24 12,18" fill="#FFD700" />
    </svg>
  );
}

/** Apfel / Apple */
export function Apple({ x = 0, y = 0, size = 24, color = '#FF0000' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <ellipse cx="12" cy="14" rx="10" ry="9" fill={color} />
      <ellipse cx="8" cy="12" rx="4" ry="3" fill="white" opacity="0.3" />
      <rect x="11" y="2" width="2" height="6" fill="#8B4513" />
      <ellipse cx="16" cy="5" rx="4" ry="3" fill="#228B22" transform="rotate(30 16 5)" />
    </svg>
  );
}

/** Kirsche / Cherry */
export function Cherry({ x = 0, y = 0, size = 24, color = '#DC143C' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <path d="M12 2 Q8 6 6 14" stroke="#228B22" strokeWidth="2" fill="none" />
      <path d="M12 2 Q16 6 18 14" stroke="#228B22" strokeWidth="2" fill="none" />
      <circle cx="6" cy="18" r="5" fill={color} />
      <circle cx="18" cy="18" r="5" fill={color} />
      <circle cx="4" cy="16" r="2" fill="white" opacity="0.4" />
      <circle cx="16" cy="16" r="2" fill="white" opacity="0.4" />
      <ellipse cx="12" cy="3" rx="3" ry="2" fill="#228B22" />
    </svg>
  );
}

/** Banane / Banana */
export function Banana({ x = 0, y = 0, size = 28, color = '#FFD700' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <path d="M6 24 Q2 16 6 8 Q12 2 20 4 Q14 6 10 12 Q6 18 8 24 Z" fill={color} />
      <path d="M8 22 Q4 16 8 10 Q12 6 18 6" stroke="#8B4513" strokeWidth="1" fill="none" />
      <ellipse cx="19" cy="5" rx="3" ry="2" fill="#8B4513" />
    </svg>
  );
}

/** Trank / Potion */
export function Potion({ x = 0, y = 0, size = 24, color = '#9400D3' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <rect x="9" y="2" width="6" height="4" fill="#C0C0C0" rx="1" />
      <rect x="10" y="5" width="4" height="3" fill="#C0C0C0" />
      <path d="M10 8 L6 14 L6 22 L18 22 L18 14 L14 8 Z" fill="white" opacity="0.3" />
      <path d="M10 8 L6 14 L6 22 L18 22 L18 14 L14 8 Z" fill={color} opacity="0.8" />
      <ellipse cx="12" cy="18" rx="4" ry="2" fill="white" opacity="0.3" />
      <circle cx="10" cy="16" r="1" fill="white" opacity="0.5" />
      <circle cx="14" cy="14" r="1" fill="white" opacity="0.5" />
    </svg>
  );
}

/** Schriftrolle / Scroll */
export function Scroll({ x = 0, y = 0, size = 32, color = '#F5DEB3' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 32 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <rect x="4" y="4" width="24" height="16" fill={color} />
      <ellipse cx="4" cy="12" rx="4" ry="10" fill={color} />
      <ellipse cx="28" cy="12" rx="4" ry="10" fill={color} />
      <ellipse cx="4" cy="12" rx="2" ry="8" fill="#D2B48C" />
      <ellipse cx="28" cy="12" rx="2" ry="8" fill="#D2B48C" />
      <line x1="10" y1="8" x2="22" y2="8" stroke="#8B4513" strokeWidth="1" />
      <line x1="10" y1="12" x2="22" y2="12" stroke="#8B4513" strokeWidth="1" />
      <line x1="10" y1="16" x2="18" y2="16" stroke="#8B4513" strokeWidth="1" />
    </svg>
  );
}

/** Pilz Power-Up / Mushroom power-up */
export function MushroomPowerUp({ x = 0, y = 0, size = 28, color = '#FF0000' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <rect x="10" y="18" width="8" height="10" fill="#F5F5DC" rx="1" />
      <ellipse cx="14" cy="14" rx="13" ry="10" fill={color} />
      <circle cx="8" cy="12" r="4" fill="white" />
      <circle cx="18" cy="10" r="3" fill="white" />
      <circle cx="14" cy="16" r="2" fill="white" />
      <ellipse cx="8" cy="10" rx="2" ry="1" fill="white" opacity="0.5" />
    </svg>
  );
}

// ===== MEHR EFFEKTE / MORE EFFECTS =====

/** Feuer / Fire */
export function Fire({ x = 0, y = 0, size = 32, color = '#FF4500' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 32 38"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <path d="M16 0 Q24 10 22 20 Q28 15 26 28 Q24 38 16 38 Q8 38 6 28 Q4 15 10 20 Q8 10 16 0" fill={color} />
      <path d="M16 8 Q20 14 18 22 Q22 18 20 30 Q18 36 16 36 Q14 36 12 30 Q10 18 14 22 Q12 14 16 8" fill="#FFFF00" />
      <path d="M16 16 Q18 20 17 26 Q19 24 18 32 Q17 36 16 36 Q15 36 14 32 Q13 24 15 26 Q14 20 16 16" fill="white" opacity="0.7" />
    </svg>
  );
}

/** Eis / Ice */
export function Ice({ x = 0, y = 0, size = 28, color = '#00BFFF' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <polygon points="14,0 20,7 28,7 21,14 24,22 14,18 4,22 7,14 0,7 8,7" fill={color} />
      <polygon points="14,4 18,9 24,9 19,14 21,19 14,16 7,19 9,14 4,9 10,9" fill="white" opacity="0.5" />
      <circle cx="14" cy="12" r="3" fill="white" opacity="0.7" />
    </svg>
  );
}

/** Gift / Poison */
export function Poison({ x = 0, y = 0, size = 24, color = '#32CD32' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <circle cx="12" cy="12" r="10" fill={color} opacity="0.6" />
      <circle cx="12" cy="12" r="6" fill={color} />
      <circle cx="8" cy="10" r="2" fill="black" />
      <circle cx="16" cy="10" r="2" fill="black" />
      <path d="M8 16 Q12 12 16 16" stroke="black" strokeWidth="2" fill="none" />
      <circle cx="6" cy="6" r="3" fill={color} opacity="0.4" />
      <circle cx="18" cy="18" r="2" fill={color} opacity="0.4" />
    </svg>
  );
}

/** Magie / Magic */
export function Magic({ x = 0, y = 0, size = 36 }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {[...Array(5)].map((_, i) => (
        <polygon
          key={i}
          points="18,4 20,14 30,14 22,20 24,30 18,24 12,30 14,20 6,14 16,14"
          fill={['#FF69B4', '#9400D3', '#00BFFF', '#FFD700', '#FF4500'][i]}
          opacity={0.6 - i * 0.1}
          transform={`rotate(${i * 15} 18 18) scale(${1 - i * 0.15})`}
          style={{ transformOrigin: 'center' }}
        />
      ))}
    </svg>
  );
}

/** Teleport */
export function Teleport({ x = 0, y = 0, size = 40 }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {[...Array(4)].map((_, i) => (
        <ellipse
          key={i}
          cx="20"
          cy="20"
          rx={18 - i * 4}
          ry={6 - i}
          fill="none"
          stroke="#9400D3"
          strokeWidth="2"
          opacity={0.8 - i * 0.2}
        />
      ))}
      <circle cx="20" cy="20" r="4" fill="#FFD700" />
    </svg>
  );
}

/** Scheinwerfer / Spotlight */
export function Spotlight({ x = 0, y = 0, size = 60, color = '#FFFF00' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      style={{ position: 'absolute', left: x, top: y, pointerEvents: 'none' }}
    >
      <defs>
        <radialGradient id="spotlight">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="30" cy="30" r="28" fill="url(#spotlight)" />
    </svg>
  );
}

/** Laser */
export function Laser({ x = 0, y = 0, width = 100, color = '#FF0000' }: EffectProps & { width?: number }) {
  return (
    <svg
      width={width}
      height={8}
      viewBox={`0 0 ${width} 8`}
      style={{ position: 'absolute', left: x, top: y }}
    >
      <rect x="0" y="2" width={width} height="4" fill={color} />
      <rect x="0" y="3" width={width} height="2" fill="white" opacity="0.7" />
    </svg>
  );
}

/** Seifenblase / Bubble */
export function Bubble({ x = 0, y = 0, size = 24, color = '#87CEEB' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <circle cx="12" cy="12" r="10" fill={color} opacity="0.3" />
      <circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="1" opacity="0.6" />
      <ellipse cx="8" cy="8" rx="4" ry="3" fill="white" opacity="0.6" />
    </svg>
  );
}

/** Konfetti / Confetti */
export function Confetti({ x = 0, y = 0, width = 100, height = 100 }: EffectProps & { width?: number; height?: number }) {
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#FF69B4'];
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ position: 'absolute', left: x, top: y, pointerEvents: 'none' }}
    >
      {[...Array(30)].map((_, i) => (
        <rect
          key={i}
          x={(i * 37 + 11) % width}
          y={(i * 23 + 7) % height}
          width={4 + (i % 3)}
          height={8 + (i % 4)}
          fill={colors[i % colors.length]}
          transform={`rotate(${(i * 45) % 360} ${(i * 37 + 11) % width + 2} ${(i * 23 + 7) % height + 4})`}
          opacity={0.7 + (i % 3) * 0.1}
        />
      ))}
    </svg>
  );
}

// ===== UI-ELEMENTE / UI ELEMENTS =====

/** Trophäe / Trophy */
export function Trophy({ x = 0, y = 0, size = 40, color = '#FFD700' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Pokal / Cup */}
      <path d="M10 4 L10 16 Q10 24 20 28 Q30 24 30 16 L30 4 Z" fill={color} />
      {/* Henkel / Handles */}
      <path d="M10 8 Q2 8 2 14 Q2 20 10 20" stroke={color} strokeWidth="3" fill="none" />
      <path d="M30 8 Q38 8 38 14 Q38 20 30 20" stroke={color} strokeWidth="3" fill="none" />
      {/* Glanz / Shine */}
      <ellipse cx="16" cy="12" rx="3" ry="5" fill="white" opacity="0.4" />
      {/* Fuß / Base */}
      <rect x="16" y="28" width="8" height="4" fill={color} />
      <rect x="12" y="32" width="16" height="4" fill={color} />
      <rect x="10" y="36" width="20" height="4" fill="#B8860B" rx="1" />
    </svg>
  );
}

/** Medaille / Medal */
export function Medal({ x = 0, y = 0, size = 32, color = '#FFD700' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ position: 'absolute', left: x, top: y }}
    >
      {/* Band / Ribbon */}
      <polygon points="10,0 14,14 8,14" fill="#FF0000" />
      <polygon points="22,0 18,14 24,14" fill="#0000FF" />
      {/* Medaille / Medal */}
      <circle cx="16" cy="22" r="10" fill={color} stroke="#B8860B" strokeWidth="2" />
      <circle cx="16" cy="22" r="6" fill="none" stroke="#B8860B" strokeWidth="1" />
      <polygon points="16,16 17,20 21,20 18,23 19,27 16,25 13,27 14,23 11,20 15,20" fill="#B8860B" />
    </svg>
  );
}

/** Abzeichen / Badge */
export function Badge({ x = 0, y = 0, size = 32, color = '#4169E1' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <polygon points="16,2 20,10 30,10 22,18 26,28 16,22 6,28 10,18 2,10 12,10" fill={color} />
      <polygon points="16,6 18,11 24,11 20,16 22,23 16,19 10,23 12,16 8,11 14,11" fill="white" opacity="0.3" />
      <circle cx="16" cy="14" r="4" fill="white" />
    </svg>
  );
}

/** Häkchen / Checkmark */
export function Checkmark({ x = 0, y = 0, size = 24, color = '#00FF00' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <circle cx="12" cy="12" r="11" fill={color} />
      <path d="M6 12 L10 16 L18 8" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Kreuz / Cross (X mark) */
export function CrossMark({ x = 0, y = 0, size = 24, color = '#FF0000' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <circle cx="12" cy="12" r="11" fill={color} />
      <line x1="7" y1="7" x2="17" y2="17" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="17" y1="7" x2="7" y2="17" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Ausrufezeichen / Exclamation */
export function Exclamation({ x = 0, y = 0, size = 24, color = '#FF0000' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <circle cx="12" cy="12" r="11" fill={color} />
      <rect x="10" y="5" width="4" height="10" fill="white" rx="2" />
      <circle cx="12" cy="18" r="2" fill="white" />
    </svg>
  );
}

/** Fragezeichen / Question */
export function Question({ x = 0, y = 0, size = 24, color = '#4169E1' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <circle cx="12" cy="12" r="11" fill={color} />
      <path d="M8 8 Q8 4 12 4 Q16 4 16 8 Q16 11 12 12 L12 14" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="12" cy="18" r="2" fill="white" />
    </svg>
  );
}

// ===== SPIEL-SYMBOLE / GAME SYMBOLS =====

/** Totenkopf / Skull */
export function Skull({ x = 0, y = 0, size = 28, color = '#F5F5DC' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <ellipse cx="14" cy="12" rx="12" ry="10" fill={color} />
      <rect x="8" y="20" width="12" height="8" fill={color} rx="2" />
      <ellipse cx="9" cy="12" rx="4" ry="5" fill="black" />
      <ellipse cx="19" cy="12" rx="4" ry="5" fill="black" />
      <polygon points="14,14 12,20 16,20" fill="black" />
      <rect x="9" y="22" width="2" height="6" fill="black" />
      <rect x="13" y="22" width="2" height="6" fill="black" />
      <rect x="17" y="22" width="2" height="6" fill="black" />
    </svg>
  );
}

/** Krone / Crown */
export function Crown({ x = 0, y = 0, size = 32, color = '#FFD700' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 32 24"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <polygon points="2,20 4,8 10,14 16,4 22,14 28,8 30,20" fill={color} />
      <rect x="2" y="20" width="28" height="4" fill={color} />
      <circle cx="4" cy="8" r="2" fill={color} />
      <circle cx="16" cy="4" r="2" fill={color} />
      <circle cx="28" cy="8" r="2" fill={color} />
      <circle cx="8" cy="22" r="2" fill="#FF0000" />
      <circle cx="16" cy="22" r="2" fill="#00BFFF" />
      <circle cx="24" cy="22" r="2" fill="#00FF00" />
    </svg>
  );
}

/** Flagge / Flag */
export function Flag({ x = 0, y = 0, size = 32, color = '#FF0000' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <rect x="4" y="2" width="3" height="30" fill="#8B4513" />
      <polygon points="7,2 30,8 7,16" fill={color} />
    </svg>
  );
}

/** Pfeil / Arrow */
export function Arrow({ x = 0, y = 0, size = 32, color = '#333', direction = 'right' }: EffectProps & { direction?: 'up' | 'down' | 'left' | 'right' }) {
  const rotations = { up: -90, down: 90, left: 180, right: 0 };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ position: 'absolute', left: x, top: y, transform: `rotate(${rotations[direction]}deg)` }}
    >
      <polygon points="8,6 24,16 8,26" fill={color} />
    </svg>
  );
}

/** Zielscheibe / Target */
export function Target({ x = 0, y = 0, size = 32, color = '#FF0000' }: EffectProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <circle cx="16" cy="16" r="14" fill={color} />
      <circle cx="16" cy="16" r="10" fill="white" />
      <circle cx="16" cy="16" r="6" fill={color} />
      <circle cx="16" cy="16" r="2" fill="white" />
    </svg>
  );
}

/** Leben / Life (heart with number) */
export function Life({ x = 0, y = 0, size = 40, count = 3 }: EffectProps & { count?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 40 32"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <path
        d="M20 28 C8 20 2 14 2 8 C2 3 6 0 11 0 C14 0 17 2 20 5 C23 2 26 0 29 0 C34 0 38 3 38 8 C38 14 32 20 20 28"
        fill="#FF0000"
      />
      <text x="20" y="18" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">×{count}</text>
    </svg>
  );
}

/** Punkteanzeige / Score display */
export function ScoreDisplay({ x = 0, y = 0, score = 0, color = '#FFD700' }: EffectProps & { score?: number }) {
  return (
    <svg
      width={80}
      height={28}
      viewBox="0 0 80 28"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <rect x="0" y="0" width="80" height="28" fill="rgba(0,0,0,0.6)" rx="4" />
      <polygon points="8,14 12,8 20,8 16,14 20,20 12,20" fill={color} />
      <text x="45" y="20" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">{score}</text>
    </svg>
  );
}

/** Timer */
export function Timer({ x = 0, y = 0, time = 60, color = '#FF0000' }: EffectProps & { time?: number }) {
  return (
    <svg
      width={60}
      height={28}
      viewBox="0 0 60 28"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <rect x="0" y="0" width="60" height="28" fill="rgba(0,0,0,0.6)" rx="4" />
      <circle cx="14" cy="14" r="8" fill="none" stroke={color} strokeWidth="2" />
      <line x1="14" y1="14" x2="14" y2="8" stroke={color} strokeWidth="2" />
      <line x1="14" y1="14" x2="18" y2="14" stroke={color} strokeWidth="2" />
      <text x="40" y="20" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">{time}</text>
    </svg>
  );
}

/** Lebensbalken / Health bar */
export function HealthBar({ x = 0, y = 0, width = 100, health = 100, maxHealth = 100 }: EffectProps & { width?: number; health?: number; maxHealth?: number }) {
  const percentage = Math.max(0, Math.min(100, (health / maxHealth) * 100));
  const barColor = percentage > 50 ? '#00FF00' : percentage > 25 ? '#FFFF00' : '#FF0000';
  return (
    <svg
      width={width}
      height={16}
      viewBox={`0 0 ${width} 16`}
      style={{ position: 'absolute', left: x, top: y }}
    >
      <rect x="0" y="0" width={width} height="16" fill="#333" rx="4" />
      <rect x="2" y="2" width={(width - 4) * percentage / 100} height="12" fill={barColor} rx="3" />
      <rect x="2" y="2" width={(width - 4) * percentage / 100} height="6" fill="white" opacity="0.3" rx="3" />
    </svg>
  );
}

/** Fortschrittsbalken / Progress bar */
export function ProgressBar({ x = 0, y = 0, width = 100, progress = 50, color = '#4169E1' }: EffectProps & { width?: number; progress?: number }) {
  const percentage = Math.max(0, Math.min(100, progress));
  return (
    <svg
      width={width}
      height={12}
      viewBox={`0 0 ${width} 12`}
      style={{ position: 'absolute', left: x, top: y }}
    >
      <rect x="0" y="0" width={width} height="12" fill="#333" rx="6" />
      <rect x="2" y="2" width={(width - 4) * percentage / 100} height="8" fill={color} rx="4" />
    </svg>
  );
}
