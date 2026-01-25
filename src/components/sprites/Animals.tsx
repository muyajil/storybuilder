/**
 * TIER-SPRITES / ANIMAL SPRITES
 * =============================
 * Süße Tiere für Zoo, Bauernhof und Natur-Spiele!
 * Cute animals for zoo, farm and nature games!
 */

interface SpriteProps {
  size?: number;
  color?: string;
  flip?: boolean;
}

// ===== ZOO-TIERE / ZOO ANIMALS =====

export function Lion({ size = 64, color = '#D2691E' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Mähne / Mane */}
      <circle cx="32" cy="32" r="28" fill={color} />
      <circle cx="32" cy="32" r="20" fill="#F4A460" />
      {/* Gesicht / Face */}
      <ellipse cx="32" cy="38" rx="8" ry="6" fill="#FFE4B5" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="30" r="4" fill="white" />
      <circle cx="38" cy="30" r="4" fill="white" />
      <circle cx="27" cy="30" r="2" fill="black" />
      <circle cx="39" cy="30" r="2" fill="black" />
      {/* Nase / Nose */}
      <ellipse cx="32" cy="36" rx="3" ry="2" fill="#8B4513" />
      {/* Ohren / Ears */}
      <circle cx="14" cy="18" r="6" fill={color} />
      <circle cx="50" cy="18" r="6" fill={color} />
    </svg>
  );
}

export function Elephant({ size = 64, color = '#808080' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="32" cy="40" rx="24" ry="18" fill={color} />
      {/* Kopf / Head */}
      <circle cx="32" cy="24" r="16" fill={color} />
      {/* Ohren / Ears */}
      <ellipse cx="12" cy="24" rx="10" ry="14" fill={color} />
      <ellipse cx="52" cy="24" rx="10" ry="14" fill={color} />
      <ellipse cx="12" cy="24" rx="6" ry="10" fill="#A9A9A9" />
      <ellipse cx="52" cy="24" rx="6" ry="10" fill="#A9A9A9" />
      {/* Rüssel / Trunk */}
      <path d="M32 32 Q32 50 28 58" stroke={color} strokeWidth="8" fill="none" strokeLinecap="round" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="22" r="3" fill="white" />
      <circle cx="38" cy="22" r="3" fill="white" />
      <circle cx="27" cy="22" r="1.5" fill="black" />
      <circle cx="39" cy="22" r="1.5" fill="black" />
      {/* Stoßzähne / Tusks */}
      <ellipse cx="24" cy="34" rx="2" ry="6" fill="ivory" />
      <ellipse cx="40" cy="34" rx="2" ry="6" fill="ivory" />
    </svg>
  );
}

export function Giraffe({ size = 64, color = '#FFD700' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="32" cy="50" rx="16" ry="12" fill={color} />
      {/* Hals / Neck */}
      <rect x="28" y="16" width="8" height="34" fill={color} />
      {/* Kopf / Head */}
      <ellipse cx="32" cy="12" rx="10" ry="8" fill={color} />
      {/* Flecken / Spots */}
      <circle cx="30" cy="30" r="3" fill="#8B4513" />
      <circle cx="34" cy="40" r="3" fill="#8B4513" />
      <circle cx="28" cy="48" r="3" fill="#8B4513" />
      <circle cx="36" cy="52" r="3" fill="#8B4513" />
      {/* Hörner / Horns */}
      <line x1="28" y1="6" x2="28" y2="2" stroke="#8B4513" strokeWidth="2" />
      <line x1="36" y1="6" x2="36" y2="2" stroke="#8B4513" strokeWidth="2" />
      <circle cx="28" cy="2" r="2" fill="#8B4513" />
      <circle cx="36" cy="2" r="2" fill="#8B4513" />
      {/* Augen / Eyes */}
      <circle cx="28" cy="10" r="2" fill="black" />
      <circle cx="36" cy="10" r="2" fill="black" />
      {/* Beine / Legs */}
      <rect x="20" y="56" width="4" height="8" fill={color} />
      <rect x="40" y="56" width="4" height="8" fill={color} />
    </svg>
  );
}

export function Monkey({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="32" cy="44" rx="14" ry="16" fill={color} />
      {/* Kopf / Head */}
      <circle cx="32" cy="22" r="16" fill={color} />
      {/* Gesicht / Face */}
      <ellipse cx="32" cy="26" rx="10" ry="8" fill="#DEB887" />
      {/* Ohren / Ears */}
      <circle cx="12" cy="22" r="6" fill={color} />
      <circle cx="52" cy="22" r="6" fill={color} />
      <circle cx="12" cy="22" r="4" fill="#DEB887" />
      <circle cx="52" cy="22" r="4" fill="#DEB887" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="20" r="4" fill="white" />
      <circle cx="38" cy="20" r="4" fill="white" />
      <circle cx="27" cy="20" r="2" fill="black" />
      <circle cx="39" cy="20" r="2" fill="black" />
      {/* Nase / Nose */}
      <ellipse cx="32" cy="28" rx="4" ry="3" fill="#DEB887" />
      <circle cx="30" cy="28" r="1" fill="black" />
      <circle cx="34" cy="28" r="1" fill="black" />
      {/* Mund / Mouth */}
      <path d="M28 32 Q32 36 36 32" stroke="black" strokeWidth="1" fill="none" />
      {/* Schwanz / Tail */}
      <path d="M46 44 Q56 40 54 30 Q52 24 48 28" stroke={color} strokeWidth="4" fill="none" />
    </svg>
  );
}

export function Penguin({ size = 64, color = '#1C1C1C' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="32" cy="40" rx="18" ry="22" fill={color} />
      {/* Bauch / Belly */}
      <ellipse cx="32" cy="44" rx="12" ry="16" fill="white" />
      {/* Kopf / Head */}
      <circle cx="32" cy="18" r="14" fill={color} />
      {/* Augen / Eyes */}
      <circle cx="26" cy="16" r="4" fill="white" />
      <circle cx="38" cy="16" r="4" fill="white" />
      <circle cx="27" cy="16" r="2" fill="black" />
      <circle cx="39" cy="16" r="2" fill="black" />
      {/* Schnabel / Beak */}
      <polygon points="32,22 28,28 36,28" fill="#FFA500" />
      {/* Flügel / Wings */}
      <ellipse cx="12" cy="40" rx="6" ry="14" fill={color} />
      <ellipse cx="52" cy="40" rx="6" ry="14" fill={color} />
      {/* Füße / Feet */}
      <ellipse cx="24" cy="60" rx="6" ry="3" fill="#FFA500" />
      <ellipse cx="40" cy="60" rx="6" ry="3" fill="#FFA500" />
    </svg>
  );
}

export function Bear({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="32" cy="44" rx="20" ry="18" fill={color} />
      {/* Kopf / Head */}
      <circle cx="32" cy="22" r="18" fill={color} />
      {/* Ohren / Ears */}
      <circle cx="16" cy="10" r="6" fill={color} />
      <circle cx="48" cy="10" r="6" fill={color} />
      <circle cx="16" cy="10" r="3" fill="#DEB887" />
      <circle cx="48" cy="10" r="3" fill="#DEB887" />
      {/* Schnauze / Snout */}
      <ellipse cx="32" cy="28" rx="8" ry="6" fill="#DEB887" />
      {/* Augen / Eyes */}
      <circle cx="24" cy="20" r="3" fill="black" />
      <circle cx="40" cy="20" r="3" fill="black" />
      <circle cx="25" cy="19" r="1" fill="white" />
      <circle cx="41" cy="19" r="1" fill="white" />
      {/* Nase / Nose */}
      <ellipse cx="32" cy="26" rx="4" ry="3" fill="black" />
    </svg>
  );
}

// ===== BAUERNHOF-TIERE / FARM ANIMALS =====

export function Cow({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="32" cy="40" rx="22" ry="16" fill={color} />
      {/* Flecken / Spots */}
      <ellipse cx="24" cy="38" rx="6" ry="4" fill="black" />
      <ellipse cx="40" cy="44" rx="5" ry="3" fill="black" />
      {/* Kopf / Head */}
      <ellipse cx="32" cy="18" rx="14" ry="12" fill={color} />
      {/* Ohren / Ears */}
      <ellipse cx="14" cy="14" rx="6" ry="4" fill={color} transform="rotate(-30 14 14)" />
      <ellipse cx="50" cy="14" rx="6" ry="4" fill={color} transform="rotate(30 50 14)" />
      {/* Hörner / Horns */}
      <path d="M18 8 Q14 2 10 6" stroke="#F5DEB3" strokeWidth="3" fill="none" />
      <path d="M46 8 Q50 2 54 6" stroke="#F5DEB3" strokeWidth="3" fill="none" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="16" r="3" fill="black" />
      <circle cx="38" cy="16" r="3" fill="black" />
      {/* Schnauze / Snout */}
      <ellipse cx="32" cy="24" rx="8" ry="5" fill="#FFB6C1" />
      <circle cx="29" cy="24" r="1.5" fill="black" />
      <circle cx="35" cy="24" r="1.5" fill="black" />
      {/* Beine / Legs */}
      <rect x="16" y="52" width="6" height="12" fill={color} />
      <rect x="42" y="52" width="6" height="12" fill={color} />
    </svg>
  );
}

export function Pig({ size = 64, color = '#FFB6C1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="32" cy="40" rx="22" ry="16" fill={color} />
      {/* Kopf / Head */}
      <circle cx="32" cy="24" r="16" fill={color} />
      {/* Ohren / Ears */}
      <ellipse cx="18" cy="12" rx="6" ry="8" fill={color} transform="rotate(-20 18 12)" />
      <ellipse cx="46" cy="12" rx="6" ry="8" fill={color} transform="rotate(20 46 12)" />
      {/* Schnauze / Snout */}
      <ellipse cx="32" cy="28" rx="8" ry="6" fill="#FF69B4" />
      <circle cx="29" cy="28" r="2" fill="black" />
      <circle cx="35" cy="28" r="2" fill="black" />
      {/* Augen / Eyes */}
      <circle cx="24" cy="20" r="3" fill="black" />
      <circle cx="40" cy="20" r="3" fill="black" />
      {/* Schwanz / Tail */}
      <path d="M54 40 Q60 36 58 44 Q56 50 60 48" stroke={color} strokeWidth="3" fill="none" />
      {/* Beine / Legs */}
      <rect x="16" y="52" width="6" height="10" fill={color} />
      <rect x="42" y="52" width="6" height="10" fill={color} />
    </svg>
  );
}

export function Chicken({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="32" cy="40" rx="18" ry="14" fill={color} />
      {/* Kopf / Head */}
      <circle cx="32" cy="20" r="12" fill={color} />
      {/* Kamm / Comb */}
      <path d="M28 8 L30 14 L32 8 L34 14 L36 8" fill="#FF0000" />
      {/* Schnabel / Beak */}
      <polygon points="32,24 26,28 32,32 38,28" fill="#FFA500" />
      {/* Augen / Eyes */}
      <circle cx="28" cy="18" r="2" fill="black" />
      <circle cx="36" cy="18" r="2" fill="black" />
      {/* Kehllappen / Wattle */}
      <ellipse cx="32" cy="30" rx="3" ry="4" fill="#FF0000" />
      {/* Schwanz / Tail */}
      <path d="M50 36 Q58 32 56 40 Q54 48 58 44" stroke={color} strokeWidth="4" fill={color} />
      {/* Beine / Legs */}
      <line x1="26" y1="52" x2="26" y2="62" stroke="#FFA500" strokeWidth="2" />
      <line x1="38" y1="52" x2="38" y2="62" stroke="#FFA500" strokeWidth="2" />
      {/* Füße / Feet */}
      <path d="M22 62 L26 62 L30 62" stroke="#FFA500" strokeWidth="2" />
      <path d="M34 62 L38 62 L42 62" stroke="#FFA500" strokeWidth="2" />
    </svg>
  );
}

export function Sheep({ size = 64, color = '#F5F5F5' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Wolle / Wool body */}
      <circle cx="24" cy="40" r="10" fill={color} />
      <circle cx="40" cy="40" r="10" fill={color} />
      <circle cx="32" cy="36" r="12" fill={color} />
      <circle cx="26" cy="32" r="8" fill={color} />
      <circle cx="38" cy="32" r="8" fill={color} />
      {/* Kopf / Head */}
      <ellipse cx="32" cy="20" rx="10" ry="12" fill="#2F2F2F" />
      {/* Ohren / Ears */}
      <ellipse cx="18" cy="18" rx="6" ry="3" fill="#2F2F2F" />
      <ellipse cx="46" cy="18" rx="6" ry="3" fill="#2F2F2F" />
      {/* Augen / Eyes */}
      <circle cx="28" cy="18" r="2" fill="white" />
      <circle cx="36" cy="18" r="2" fill="white" />
      <circle cx="28" cy="18" r="1" fill="black" />
      <circle cx="36" cy="18" r="1" fill="black" />
      {/* Beine / Legs */}
      <rect x="20" y="48" width="4" height="14" fill="#2F2F2F" />
      <rect x="40" y="48" width="4" height="14" fill="#2F2F2F" />
    </svg>
  );
}

// ===== HAUSTIERE / PETS =====

export function Dog({ size = 64, color = '#D2691E' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="32" cy="42" rx="18" ry="14" fill={color} />
      {/* Kopf / Head */}
      <circle cx="32" cy="22" r="14" fill={color} />
      {/* Ohren / Ears */}
      <ellipse cx="16" cy="14" rx="6" ry="10" fill={color} />
      <ellipse cx="48" cy="14" rx="6" ry="10" fill={color} />
      {/* Schnauze / Snout */}
      <ellipse cx="32" cy="28" rx="8" ry="6" fill="#DEB887" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="20" r="4" fill="white" />
      <circle cx="38" cy="20" r="4" fill="white" />
      <circle cx="27" cy="20" r="2" fill="black" />
      <circle cx="39" cy="20" r="2" fill="black" />
      {/* Nase / Nose */}
      <ellipse cx="32" cy="26" rx="4" ry="3" fill="black" />
      {/* Schwanz / Tail */}
      <path d="M50 42 Q58 38 56 48" stroke={color} strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* Beine / Legs */}
      <rect x="18" y="52" width="6" height="10" fill={color} rx="3" />
      <rect x="40" y="52" width="6" height="10" fill={color} rx="3" />
    </svg>
  );
}

export function Cat({ size = 64, color = '#FFA500' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="32" cy="44" rx="16" ry="12" fill={color} />
      {/* Kopf / Head */}
      <circle cx="32" cy="24" r="14" fill={color} />
      {/* Ohren / Ears */}
      <polygon points="16,18 20,4 26,16" fill={color} />
      <polygon points="48,18 44,4 38,16" fill={color} />
      <polygon points="18,16 21,8 24,15" fill="#FFB6C1" />
      <polygon points="46,16 43,8 40,15" fill="#FFB6C1" />
      {/* Augen / Eyes */}
      <ellipse cx="26" cy="22" rx="4" ry="5" fill="#90EE90" />
      <ellipse cx="38" cy="22" rx="4" ry="5" fill="#90EE90" />
      <ellipse cx="26" cy="22" rx="2" ry="4" fill="black" />
      <ellipse cx="38" cy="22" rx="2" ry="4" fill="black" />
      {/* Nase / Nose */}
      <polygon points="32,28 30,32 34,32" fill="#FFB6C1" />
      {/* Schnurrhaare / Whiskers */}
      <line x1="20" y1="30" x2="10" y2="28" stroke="black" strokeWidth="1" />
      <line x1="20" y1="32" x2="10" y2="32" stroke="black" strokeWidth="1" />
      <line x1="44" y1="30" x2="54" y2="28" stroke="black" strokeWidth="1" />
      <line x1="44" y1="32" x2="54" y2="32" stroke="black" strokeWidth="1" />
      {/* Schwanz / Tail */}
      <path d="M48 44 Q60 40 58 52 Q56 60 52 56" stroke={color} strokeWidth="6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Rabbit({ size = 64, color = '#F5F5F5' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Ohren / Ears */}
      <ellipse cx="24" cy="12" rx="6" ry="16" fill={color} />
      <ellipse cx="40" cy="12" rx="6" ry="16" fill={color} />
      <ellipse cx="24" cy="12" rx="3" ry="12" fill="#FFB6C1" />
      <ellipse cx="40" cy="12" rx="3" ry="12" fill="#FFB6C1" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="48" rx="16" ry="14" fill={color} />
      {/* Kopf / Head */}
      <circle cx="32" cy="32" r="14" fill={color} />
      {/* Augen / Eyes */}
      <circle cx="26" cy="30" r="3" fill="black" />
      <circle cx="38" cy="30" r="3" fill="black" />
      <circle cx="27" cy="29" r="1" fill="white" />
      <circle cx="39" cy="29" r="1" fill="white" />
      {/* Nase / Nose */}
      <ellipse cx="32" cy="36" rx="3" ry="2" fill="#FFB6C1" />
      {/* Schnurrhaare / Whiskers */}
      <line x1="24" y1="36" x2="14" y2="34" stroke="#888" strokeWidth="1" />
      <line x1="24" y1="38" x2="14" y2="40" stroke="#888" strokeWidth="1" />
      <line x1="40" y1="36" x2="50" y2="34" stroke="#888" strokeWidth="1" />
      <line x1="40" y1="38" x2="50" y2="40" stroke="#888" strokeWidth="1" />
      {/* Schwanz / Tail */}
      <circle cx="48" cy="52" r="6" fill={color} />
    </svg>
  );
}

// ===== WASSER-TIERE / WATER ANIMALS =====

export function Fish({ size = 64, color = '#FF6347' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="32" cy="32" rx="20" ry="12" fill={color} />
      {/* Schwanz / Tail */}
      <polygon points="52,32 64,20 64,44" fill={color} />
      {/* Flosse oben / Top fin */}
      <polygon points="28,20 36,8 40,20" fill={color} />
      {/* Flosse unten / Bottom fin */}
      <polygon points="28,44 36,56 40,44" fill={color} />
      {/* Auge / Eye */}
      <circle cx="20" cy="30" r="4" fill="white" />
      <circle cx="21" cy="30" r="2" fill="black" />
      {/* Schuppen / Scales */}
      <path d="M28 28 Q32 32 28 36" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M36 28 Q40 32 36 36" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  );
}

export function Dolphin({ size = 64, color = '#4682B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="32" cy="32" rx="24" ry="12" fill={color} />
      {/* Schnauze / Snout */}
      <ellipse cx="8" cy="32" rx="8" ry="4" fill={color} />
      {/* Schwanzflosse / Tail */}
      <polygon points="56,32 64,24 60,32 64,40" fill={color} />
      {/* Rückenflosse / Dorsal fin */}
      <polygon points="32,20 38,8 42,20" fill={color} />
      {/* Bauch / Belly */}
      <ellipse cx="32" cy="36" rx="16" ry="6" fill="#B0C4DE" />
      {/* Auge / Eye */}
      <circle cx="16" cy="30" r="3" fill="white" />
      <circle cx="17" cy="30" r="1.5" fill="black" />
      {/* Mund / Mouth */}
      <path d="M4 34 Q8 36 12 34" stroke="black" strokeWidth="1" fill="none" />
    </svg>
  );
}

// ===== INSEKTEN & KLEINE TIERE / INSECTS & SMALL ANIMALS =====

export function Butterfly({ size = 64, color = '#FF69B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Linker Flügel / Left wing */}
      <ellipse cx="20" cy="24" rx="16" ry="12" fill={color} />
      <ellipse cx="18" cy="40" rx="12" ry="10" fill={color} />
      <circle cx="18" cy="24" r="4" fill="white" opacity="0.5" />
      {/* Rechter Flügel / Right wing */}
      <ellipse cx="44" cy="24" rx="16" ry="12" fill={color} />
      <ellipse cx="46" cy="40" rx="12" ry="10" fill={color} />
      <circle cx="46" cy="24" r="4" fill="white" opacity="0.5" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="32" rx="4" ry="16" fill="#2F2F2F" />
      {/* Kopf / Head */}
      <circle cx="32" cy="14" r="4" fill="#2F2F2F" />
      {/* Fühler / Antennae */}
      <line x1="30" y1="10" x2="26" y2="4" stroke="#2F2F2F" strokeWidth="1" />
      <line x1="34" y1="10" x2="38" y2="4" stroke="#2F2F2F" strokeWidth="1" />
      <circle cx="26" cy="4" r="2" fill="#2F2F2F" />
      <circle cx="38" cy="4" r="2" fill="#2F2F2F" />
    </svg>
  );
}

export function Bee({ size = 64, color = '#FFD700' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Flügel / Wings */}
      <ellipse cx="24" cy="20" rx="12" ry="8" fill="white" opacity="0.7" />
      <ellipse cx="40" cy="20" rx="12" ry="8" fill="white" opacity="0.7" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="36" rx="14" ry="18" fill={color} />
      {/* Streifen / Stripes */}
      <rect x="18" y="30" width="28" height="4" fill="black" />
      <rect x="18" y="38" width="28" height="4" fill="black" />
      <rect x="18" y="46" width="28" height="4" fill="black" />
      {/* Kopf / Head */}
      <circle cx="32" cy="16" r="10" fill="black" />
      {/* Augen / Eyes */}
      <circle cx="28" cy="14" r="3" fill="white" />
      <circle cx="36" cy="14" r="3" fill="white" />
      {/* Fühler / Antennae */}
      <line x1="28" y1="8" x2="24" y2="2" stroke="black" strokeWidth="2" />
      <line x1="36" y1="8" x2="40" y2="2" stroke="black" strokeWidth="2" />
      {/* Stachel / Stinger */}
      <polygon points="32,54 30,58 34,58" fill="black" />
    </svg>
  );
}

export function Snail({ size = 64, color = '#DEB887' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="24" cy="48" rx="20" ry="8" fill={color} />
      {/* Haus / Shell */}
      <circle cx="40" cy="36" r="18" fill="#8B4513" />
      <circle cx="40" cy="36" r="14" fill="#A0522D" />
      <circle cx="40" cy="36" r="10" fill="#8B4513" />
      <circle cx="40" cy="36" r="6" fill="#A0522D" />
      {/* Kopf / Head */}
      <ellipse cx="10" cy="42" rx="8" ry="10" fill={color} />
      {/* Fühler / Antennae */}
      <line x1="6" y1="36" x2="2" y2="28" stroke={color} strokeWidth="2" />
      <line x1="14" y1="36" x2="18" y2="28" stroke={color} strokeWidth="2" />
      <circle cx="2" cy="28" r="2" fill={color} />
      <circle cx="18" cy="28" r="2" fill={color} />
      {/* Augen / Eyes */}
      <circle cx="2" cy="28" r="1" fill="black" />
      <circle cx="18" cy="28" r="1" fill="black" />
    </svg>
  );
}

// ===== MEHR ZOO-TIERE / MORE ZOO ANIMALS =====

export function Tiger({ size = 64, color = '#FF8C00' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <ellipse cx="32" cy="40" rx="20" ry="16" fill={color} />
      <circle cx="32" cy="22" r="16" fill={color} />
      {/* Streifen / Stripes */}
      <path d="M24 16 L20 28" stroke="black" strokeWidth="2" />
      <path d="M40 16 L44 28" stroke="black" strokeWidth="2" />
      <path d="M32 12 L32 20" stroke="black" strokeWidth="2" />
      <path d="M20 36 L16 48" stroke="black" strokeWidth="2" />
      <path d="M44 36 L48 48" stroke="black" strokeWidth="2" />
      <path d="M32 32 L32 48" stroke="black" strokeWidth="2" />
      {/* Ohren / Ears */}
      <circle cx="18" cy="12" r="5" fill={color} />
      <circle cx="46" cy="12" r="5" fill={color} />
      <circle cx="18" cy="12" r="3" fill="white" />
      <circle cx="46" cy="12" r="3" fill="white" />
      {/* Gesicht / Face */}
      <ellipse cx="32" cy="28" rx="8" ry="6" fill="white" />
      <circle cx="26" cy="20" r="3" fill="white" />
      <circle cx="38" cy="20" r="3" fill="white" />
      <circle cx="26" cy="20" r="1.5" fill="black" />
      <circle cx="38" cy="20" r="1.5" fill="black" />
      <ellipse cx="32" cy="26" rx="3" ry="2" fill="#FF69B4" />
      <path d="M28 30 Q32 34 36 30" stroke="black" strokeWidth="1" fill="none" />
    </svg>
  );
}

export function Zebra({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <ellipse cx="32" cy="40" rx="18" ry="14" fill={color} />
      <ellipse cx="48" cy="28" rx="12" ry="14" fill={color} />
      {/* Streifen / Stripes */}
      <path d="M20 32 L20 48" stroke="black" strokeWidth="3" />
      <path d="M28 30 L28 50" stroke="black" strokeWidth="3" />
      <path d="M36 30 L36 50" stroke="black" strokeWidth="3" />
      <path d="M44 28 L44 44" stroke="black" strokeWidth="2" />
      <path d="M50 20 L50 36" stroke="black" strokeWidth="2" />
      <path d="M56 24 L56 32" stroke="black" strokeWidth="2" />
      {/* Mähne / Mane */}
      <path d="M36 26 Q40 20 44 26" stroke="black" strokeWidth="4" fill="none" />
      {/* Auge / Eye */}
      <circle cx="52" cy="26" r="2" fill="black" />
      {/* Nase / Nose */}
      <ellipse cx="58" cy="32" rx="4" ry="3" fill="#333" />
      {/* Beine / Legs */}
      <rect x="20" y="50" width="4" height="12" fill={color} />
      <rect x="40" y="50" width="4" height="12" fill={color} />
      <path d="M20 52 L20 62" stroke="black" strokeWidth="2" />
      <path d="M40 52 L40 62" stroke="black" strokeWidth="2" />
    </svg>
  );
}

export function Hippo({ size = 64, color = '#808080' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <ellipse cx="32" cy="38" rx="24" ry="18" fill={color} />
      <ellipse cx="52" cy="34" rx="12" ry="14" fill={color} />
      {/* Schnauze / Snout */}
      <ellipse cx="58" cy="38" rx="8" ry="10" fill="#A0A0A0" />
      <circle cx="54" cy="36" r="2" fill="black" />
      <circle cx="62" cy="36" r="2" fill="black" />
      {/* Ohren / Ears */}
      <ellipse cx="44" cy="22" rx="4" ry="6" fill={color} />
      <ellipse cx="54" cy="22" rx="4" ry="6" fill={color} />
      {/* Augen / Eyes */}
      <circle cx="48" cy="30" r="3" fill="white" />
      <circle cx="56" cy="30" r="3" fill="white" />
      <circle cx="48" cy="30" r="1.5" fill="black" />
      <circle cx="56" cy="30" r="1.5" fill="black" />
      {/* Beine / Legs */}
      <rect x="14" y="50" width="8" height="12" fill={color} rx="3" />
      <rect x="42" y="50" width="8" height="12" fill={color} rx="3" />
    </svg>
  );
}

export function Kangaroo({ size = 64, color = '#C19A6B' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Schwanz / Tail */}
      <path d="M16 50 Q4 56 8 44 Q12 36 20 42" fill={color} />
      {/* Körper / Body */}
      <ellipse cx="32" cy="40" rx="14" ry="18" fill={color} />
      {/* Beutel / Pouch */}
      <ellipse cx="34" cy="44" rx="8" ry="10" fill="#DEB887" />
      {/* Baby */}
      <circle cx="34" cy="42" r="5" fill={color} />
      <circle cx="36" cy="40" r="1" fill="black" />
      {/* Kopf / Head */}
      <ellipse cx="40" cy="18" rx="10" ry="12" fill={color} />
      {/* Ohren / Ears */}
      <ellipse cx="34" cy="6" rx="4" ry="8" fill={color} />
      <ellipse cx="46" cy="6" rx="4" ry="8" fill={color} />
      <ellipse cx="34" cy="6" rx="2" ry="6" fill="#DEB887" />
      <ellipse cx="46" cy="6" rx="2" ry="6" fill="#DEB887" />
      {/* Augen / Eyes */}
      <circle cx="36" cy="16" r="2" fill="black" />
      <circle cx="44" cy="16" r="2" fill="black" />
      {/* Nase / Nose */}
      <ellipse cx="48" cy="22" rx="3" ry="2" fill="black" />
      {/* Beine / Legs */}
      <ellipse cx="28" cy="58" rx="8" ry="4" fill={color} />
      <ellipse cx="40" cy="58" rx="8" ry="4" fill={color} />
    </svg>
  );
}

export function Koala({ size = 64, color = '#808080' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <ellipse cx="32" cy="44" rx="16" ry="14" fill={color} />
      <circle cx="32" cy="26" r="18" fill={color} />
      {/* Ohren / Ears */}
      <circle cx="14" cy="20" r="10" fill={color} />
      <circle cx="50" cy="20" r="10" fill={color} />
      <circle cx="14" cy="20" r="6" fill="white" />
      <circle cx="50" cy="20" r="6" fill="white" />
      {/* Augen / Eyes */}
      <circle cx="24" cy="26" r="4" fill="black" />
      <circle cx="40" cy="26" r="4" fill="black" />
      <circle cx="25" cy="25" r="1.5" fill="white" />
      <circle cx="41" cy="25" r="1.5" fill="white" />
      {/* Nase / Nose */}
      <ellipse cx="32" cy="34" rx="6" ry="4" fill="black" />
    </svg>
  );
}

export function Panda({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <ellipse cx="32" cy="44" rx="18" ry="16" fill={color} />
      <circle cx="32" cy="26" r="18" fill={color} />
      {/* Ohren / Ears */}
      <circle cx="14" cy="14" r="8" fill="black" />
      <circle cx="50" cy="14" r="8" fill="black" />
      {/* Augenflecken / Eye patches */}
      <ellipse cx="22" cy="26" rx="8" ry="10" fill="black" />
      <ellipse cx="42" cy="26" rx="8" ry="10" fill="black" />
      {/* Augen / Eyes */}
      <circle cx="22" cy="26" r="4" fill="white" />
      <circle cx="42" cy="26" r="4" fill="white" />
      <circle cx="23" cy="26" r="2" fill="black" />
      <circle cx="43" cy="26" r="2" fill="black" />
      {/* Nase / Nose */}
      <ellipse cx="32" cy="34" rx="4" ry="3" fill="black" />
      {/* Beine / Legs */}
      <ellipse cx="20" cy="56" rx="6" ry="4" fill="black" />
      <ellipse cx="44" cy="56" rx="6" ry="4" fill="black" />
    </svg>
  );
}

export function Crocodile({ size = 64, color = '#228B22' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Schwanz / Tail */}
      <polygon points="0,36 12,32 12,40" fill={color} />
      {/* Körper / Body */}
      <ellipse cx="28" cy="36" rx="20" ry="10" fill={color} />
      {/* Kopf / Head */}
      <ellipse cx="54" cy="36" rx="14" ry="8" fill={color} />
      {/* Schnauze / Snout */}
      <ellipse cx="62" cy="38" rx="6" ry="4" fill={color} />
      {/* Zähne / Teeth */}
      <path d="M56 42 L58 46 L60 42 L62 46 L64 42" fill="white" />
      {/* Augen / Eyes */}
      <circle cx="50" cy="32" r="3" fill="#FFFF00" />
      <circle cx="50" cy="32" r="1.5" fill="black" />
      {/* Rückenschuppen / Back scales */}
      <path d="M16 28 L20 24 L24 28 L28 24 L32 28 L36 24 L40 28" fill="#006400" />
      {/* Beine / Legs */}
      <ellipse cx="20" cy="44" rx="4" ry="6" fill={color} />
      <ellipse cx="40" cy="44" rx="4" ry="6" fill={color} />
    </svg>
  );
}

export function Rhino({ size = 64, color = '#696969' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <ellipse cx="28" cy="38" rx="22" ry="16" fill={color} />
      <ellipse cx="52" cy="34" rx="12" ry="12" fill={color} />
      {/* Horn */}
      <polygon points="58,26 56,18 60,18" fill="#A9A9A9" />
      <polygon points="54,28 52,24 56,24" fill="#A9A9A9" />
      {/* Ohren / Ears */}
      <ellipse cx="48" cy="22" rx="3" ry="5" fill={color} />
      <ellipse cx="56" cy="22" rx="3" ry="5" fill={color} />
      {/* Augen / Eyes */}
      <circle cx="50" cy="32" r="2" fill="black" />
      {/* Beine / Legs */}
      <rect x="12" y="48" width="8" height="14" fill={color} rx="3" />
      <rect x="36" y="48" width="8" height="14" fill={color} rx="3" />
    </svg>
  );
}

// ===== VÖGEL / BIRDS =====

export function Owl({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <ellipse cx="32" cy="40" rx="18" ry="20" fill={color} />
      {/* Ohren / Ears */}
      <polygon points="16,24 22,14 28,24" fill={color} />
      <polygon points="36,24 42,14 48,24" fill={color} />
      {/* Gesicht / Face */}
      <circle cx="32" cy="34" r="16" fill="#DEB887" />
      {/* Augen / Eyes */}
      <circle cx="24" cy="32" r="8" fill="white" />
      <circle cx="40" cy="32" r="8" fill="white" />
      <circle cx="24" cy="32" r="4" fill="black" />
      <circle cx="40" cy="32" r="4" fill="black" />
      <circle cx="25" cy="31" r="1.5" fill="white" />
      <circle cx="41" cy="31" r="1.5" fill="white" />
      {/* Schnabel / Beak */}
      <polygon points="32,38 28,44 36,44" fill="#FFA500" />
      {/* Flügel / Wings */}
      <ellipse cx="14" cy="44" rx="6" ry="12" fill={color} />
      <ellipse cx="50" cy="44" rx="6" ry="12" fill={color} />
      {/* Füße / Feet */}
      <path d="M24 58 L20 64 M24 58 L24 64 M24 58 L28 64" stroke="#FFA500" strokeWidth="2" />
      <path d="M40 58 L36 64 M40 58 L40 64 M40 58 L44 64" stroke="#FFA500" strokeWidth="2" />
    </svg>
  );
}

export function Parrot({ size = 64, color = '#FF0000' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Schwanz / Tail */}
      <rect x="28" y="48" width="8" height="16" fill="#00FF00" />
      <rect x="24" y="52" width="6" height="12" fill="#0000FF" />
      <rect x="34" y="52" width="6" height="12" fill="#FFFF00" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="38" rx="14" ry="16" fill={color} />
      {/* Kopf / Head */}
      <circle cx="32" cy="20" r="14" fill={color} />
      {/* Schnabel / Beak */}
      <path d="M42 24 Q50 26 46 32 Q42 34 40 30" fill="#333" />
      <path d="M42 26 Q48 28 44 32" fill="#FFA500" />
      {/* Auge / Eye */}
      <circle cx="36" cy="18" r="4" fill="white" />
      <circle cx="37" cy="18" r="2" fill="black" />
      {/* Flügel / Wing */}
      <ellipse cx="22" cy="38" rx="8" ry="12" fill="#00FF00" />
    </svg>
  );
}

export function Eagle({ size = 64, color = '#4a3728' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Flügel / Wings */}
      <path d="M32 32 L4 20 L8 28 L0 24 L6 32 L2 30 L10 36 L32 32" fill={color} />
      <path d="M32 32 L60 20 L56 28 L64 24 L58 32 L62 30 L54 36 L32 32" fill={color} />
      {/* Körper / Body */}
      <ellipse cx="32" cy="40" rx="12" ry="16" fill={color} />
      {/* Kopf / Head */}
      <circle cx="32" cy="22" r="10" fill="white" />
      {/* Schnabel / Beak */}
      <polygon points="38,24 48,28 38,30" fill="#FFD700" />
      {/* Auge / Eye */}
      <circle cx="34" cy="20" r="2" fill="black" />
      {/* Schwanz / Tail */}
      <polygon points="26,54 32,64 38,54" fill={color} />
    </svg>
  );
}

export function Duck({ size = 64, color = '#FFD700' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="32" cy="42" rx="20" ry="14" fill={color} />
      {/* Kopf / Head */}
      <circle cx="50" cy="26" r="12" fill="#228B22" />
      {/* Schnabel / Beak */}
      <ellipse cx="60" cy="30" rx="6" ry="3" fill="#FFA500" />
      {/* Auge / Eye */}
      <circle cx="52" cy="24" r="2" fill="black" />
      {/* Hals / Neck */}
      <path d="M44 34 Q48 38 44 42" fill="#228B22" />
      {/* Ring */}
      <path d="M44 34 Q50 36 44 38" fill="white" />
      {/* Flügel / Wing */}
      <ellipse cx="28" cy="40" rx="10" ry="8" fill="#C9A227" />
      {/* Schwanz / Tail */}
      <polygon points="12,38 6,34 8,42" fill={color} />
    </svg>
  );
}

export function Flamingo({ size = 64, color = '#FF69B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Beine / Legs */}
      <line x1="28" y1="44" x2="24" y2="62" stroke={color} strokeWidth="2" />
      <line x1="36" y1="44" x2="32" y2="58" stroke={color} strokeWidth="2" />
      <line x1="32" y1="58" x2="36" y2="62" stroke={color} strokeWidth="2" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="38" rx="14" ry="10" fill={color} />
      {/* Hals / Neck */}
      <path d="M38 32 Q50 20 46 8" stroke={color} strokeWidth="4" fill="none" />
      {/* Kopf / Head */}
      <circle cx="46" cy="8" r="6" fill={color} />
      {/* Schnabel / Beak */}
      <path d="M50 10 L58 12 L50 14 Z" fill="black" />
      <path d="M50 10 L54 11 L50 12 Z" fill="#FFA500" />
      {/* Auge / Eye */}
      <circle cx="48" cy="7" r="1" fill="black" />
      {/* Flügel / Wing */}
      <ellipse cx="28" cy="36" rx="8" ry="6" fill="#FF1493" />
    </svg>
  );
}

export function Toucan({ size = 64, color = 'black' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="24" cy="40" rx="14" ry="16" fill={color} />
      {/* Kopf / Head */}
      <circle cx="28" cy="22" r="12" fill={color} />
      {/* Schnabel / Beak */}
      <ellipse cx="48" cy="26" rx="16" ry="8" fill="#FFA500" />
      <ellipse cx="48" cy="26" rx="14" ry="6" fill="#FFD700" />
      <path d="M60 26 L64 26" stroke="black" strokeWidth="1" />
      {/* Auge / Eye */}
      <circle cx="32" cy="20" r="4" fill="white" />
      <circle cx="33" cy="20" r="2" fill="black" />
      {/* Brust / Chest */}
      <ellipse cx="24" cy="44" rx="8" ry="10" fill="#FFD700" />
      {/* Schwanz / Tail */}
      <rect x="10" y="50" width="6" height="12" fill={color} />
    </svg>
  );
}

export function Peacock({ size = 64, color = '#0000CD' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Schwanzfedern / Tail feathers */}
      {[...Array(7)].map((_, i) => (
        <g key={i}>
          <ellipse cx={32} cy={8 + i * 4} rx={28 - i * 3} ry={4} fill="#00CED1" />
          <circle cx={12 + i * 3} cy={8 + i * 4} r={3} fill="#FFD700" />
          <circle cx={52 - i * 3} cy={8 + i * 4} r={3} fill="#FFD700" />
          <circle cx={12 + i * 3} cy={8 + i * 4} r={1.5} fill={color} />
          <circle cx={52 - i * 3} cy={8 + i * 4} r={1.5} fill={color} />
        </g>
      ))}
      {/* Körper / Body */}
      <ellipse cx="32" cy="50" rx="12" ry="10" fill={color} />
      {/* Kopf / Head */}
      <circle cx="32" cy="38" r="6" fill={color} />
      {/* Krone / Crown */}
      <line x1="30" y1="32" x2="28" y2="26" stroke={color} strokeWidth="1" />
      <line x1="32" y1="32" x2="32" y2="24" stroke={color} strokeWidth="1" />
      <line x1="34" y1="32" x2="36" y2="26" stroke={color} strokeWidth="1" />
      <circle cx="28" cy="26" r="2" fill="#00CED1" />
      <circle cx="32" cy="24" r="2" fill="#00CED1" />
      <circle cx="36" cy="26" r="2" fill="#00CED1" />
      {/* Schnabel / Beak */}
      <polygon points="32,42 30,46 34,46" fill="#FFA500" />
      {/* Auge / Eye */}
      <circle cx="34" cy="37" r="1" fill="white" />
    </svg>
  );
}

// ===== DINOSAURIER / DINOSAURS =====

export function TRex({ size = 64, color = '#228B22' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Schwanz / Tail */}
      <polygon points="0,40 14,36 14,44" fill={color} />
      {/* Körper / Body */}
      <ellipse cx="28" cy="40" rx="18" ry="14" fill={color} />
      {/* Kopf / Head */}
      <ellipse cx="52" cy="28" rx="14" ry="10" fill={color} />
      {/* Kiefer / Jaw */}
      <ellipse cx="58" cy="34" rx="10" ry="4" fill={color} />
      {/* Zähne / Teeth */}
      <path d="M50 32 L52 36 L54 32 L56 36 L58 32 L60 36 L62 32" fill="white" />
      {/* Auge / Eye */}
      <circle cx="50" cy="26" r="3" fill="#FFFF00" />
      <circle cx="50" cy="26" r="1.5" fill="black" />
      {/* Arme / Arms */}
      <path d="M36 38 L40 44 L38 46" stroke={color} strokeWidth="3" fill="none" />
      {/* Beine / Legs */}
      <rect x="20" y="50" width="8" height="14" fill={color} rx="2" />
      <rect x="34" y="50" width="8" height="14" fill={color} rx="2" />
    </svg>
  );
}

export function Triceratops({ size = 64, color = '#CD853F' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="28" cy="40" rx="20" ry="14" fill={color} />
      {/* Kopfschild / Head frill */}
      <ellipse cx="52" cy="24" rx="12" ry="14" fill={color} />
      {/* Kopf / Head */}
      <ellipse cx="56" cy="36" rx="10" ry="8" fill={color} />
      {/* Hörner / Horns */}
      <polygon points="46,20 44,8 48,8" fill="#F5F5DC" />
      <polygon points="54,18 52,6 56,6" fill="#F5F5DC" />
      <polygon points="62,34 68,30 66,36" fill="#F5F5DC" />
      {/* Auge / Eye */}
      <circle cx="56" cy="32" r="2" fill="black" />
      {/* Beine / Legs */}
      <rect x="14" y="50" width="8" height="12" fill={color} rx="2" />
      <rect x="34" y="50" width="8" height="12" fill={color} rx="2" />
    </svg>
  );
}

export function Brontosaurus({ size = 64, color = '#6B8E23' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Schwanz / Tail */}
      <path d="M2 44 Q8 40 16 42" stroke={color} strokeWidth="6" fill="none" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="44" rx="18" ry="12" fill={color} />
      {/* Hals / Neck */}
      <path d="M44 40 Q56 30 54 16" stroke={color} strokeWidth="8" fill="none" />
      {/* Kopf / Head */}
      <ellipse cx="54" cy="12" rx="8" ry="6" fill={color} />
      {/* Auge / Eye */}
      <circle cx="58" cy="10" r="2" fill="black" />
      {/* Beine / Legs */}
      <rect x="20" y="52" width="6" height="12" fill={color} rx="2" />
      <rect x="38" y="52" width="6" height="12" fill={color} rx="2" />
    </svg>
  );
}

export function Pterodactyl({ size = 64, color = '#8FBC8F' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Flügel / Wings */}
      <polygon points="32,32 0,20 8,32 0,36 32,32" fill={color} />
      <polygon points="32,32 64,20 56,32 64,36 32,32" fill={color} />
      {/* Körper / Body */}
      <ellipse cx="32" cy="34" rx="10" ry="8" fill={color} />
      {/* Kopf / Head */}
      <ellipse cx="32" cy="22" rx="6" ry="8" fill={color} />
      {/* Kamm / Crest */}
      <polygon points="32,14 28,6 36,14" fill={color} />
      {/* Schnabel / Beak */}
      <polygon points="32,26 26,34 32,32 38,34" fill="#FFA500" />
      {/* Augen / Eyes */}
      <circle cx="28" cy="20" r="2" fill="black" />
      <circle cx="36" cy="20" r="2" fill="black" />
      {/* Beine / Legs */}
      <path d="M28 42 L24 52 L20 50 L24 52 L28 50" stroke={color} strokeWidth="2" fill="none" />
      <path d="M36 42 L40 52 L44 50 L40 52 L36 50" stroke={color} strokeWidth="2" fill="none" />
    </svg>
  );
}

export function Stegosaurus({ size = 64, color = '#556B2F' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Schwanz mit Stacheln / Tail with spikes */}
      <path d="M4 44 Q10 42 16 44" stroke={color} strokeWidth="4" fill="none" />
      <polygon points="6,40 4,34 10,40" fill="#8B4513" />
      <polygon points="10,40 8,34 14,40" fill="#8B4513" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="44" rx="18" ry="10" fill={color} />
      {/* Rückenplatten / Back plates */}
      <polygon points="20,34 18,24 24,34" fill="#8B4513" />
      <polygon points="28,32 26,20 32,32" fill="#8B4513" />
      <polygon points="36,32 34,20 40,32" fill="#8B4513" />
      <polygon points="44,34 42,24 48,34" fill="#8B4513" />
      {/* Kopf / Head */}
      <ellipse cx="54" cy="44" rx="8" ry="6" fill={color} />
      {/* Auge / Eye */}
      <circle cx="58" cy="42" r="2" fill="black" />
      {/* Beine / Legs */}
      <rect x="22" y="50" width="6" height="12" fill={color} rx="2" />
      <rect x="38" y="50" width="6" height="12" fill={color} rx="2" />
    </svg>
  );
}

// ===== MEHR MEERESTIERE / MORE SEA ANIMALS =====

export function Shark({ size = 64, color = '#4682B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="32" cy="32" rx="26" ry="12" fill={color} />
      {/* Kopf / Head */}
      <polygon points="58,32 64,28 64,36" fill={color} />
      {/* Schwanz / Tail */}
      <polygon points="6,32 0,24 4,32 0,40" fill={color} />
      {/* Rückenflosse / Dorsal fin */}
      <polygon points="32,20 28,10 38,20" fill={color} />
      {/* Brustflossen / Pectoral fins */}
      <polygon points="40,40 36,52 48,44" fill={color} />
      <polygon points="24,40 20,52 28,44" fill={color} />
      {/* Bauch / Belly */}
      <ellipse cx="40" cy="36" rx="14" ry="6" fill="#B0C4DE" />
      {/* Auge / Eye */}
      <circle cx="54" cy="30" r="2" fill="black" />
      {/* Kiemen / Gills */}
      <line x1="48" y1="28" x2="48" y2="36" stroke="#2F4F4F" strokeWidth="1" />
      <line x1="52" y1="28" x2="52" y2="36" stroke="#2F4F4F" strokeWidth="1" />
    </svg>
  );
}

export function Octopus({ size = 64, color = '#9932CC' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Tentakel / Tentacles */}
      <path d="M12 36 Q4 44 8 56 Q12 60 16 52" stroke={color} strokeWidth="4" fill="none" />
      <path d="M20 40 Q12 52 18 60 Q24 64 26 54" stroke={color} strokeWidth="4" fill="none" />
      <path d="M32 42 Q32 56 28 64" stroke={color} strokeWidth="4" fill="none" />
      <path d="M32 42 Q32 56 36 64" stroke={color} strokeWidth="4" fill="none" />
      <path d="M44 40 Q52 52 46 60 Q40 64 38 54" stroke={color} strokeWidth="4" fill="none" />
      <path d="M52 36 Q60 44 56 56 Q52 60 48 52" stroke={color} strokeWidth="4" fill="none" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="26" rx="20" ry="18" fill={color} />
      {/* Augen / Eyes */}
      <circle cx="24" cy="24" r="6" fill="white" />
      <circle cx="40" cy="24" r="6" fill="white" />
      <circle cx="24" cy="24" r="3" fill="black" />
      <circle cx="40" cy="24" r="3" fill="black" />
    </svg>
  );
}

export function Whale({ size = 64, color = '#4169E1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="32" cy="36" rx="28" ry="16" fill={color} />
      {/* Schwanzflosse / Tail */}
      <path d="M4 36 Q0 28 4 24 M4 36 Q0 44 4 48" stroke={color} strokeWidth="4" fill="none" />
      {/* Bauch / Belly */}
      <ellipse cx="36" cy="42" rx="18" ry="8" fill="#B0C4DE" />
      {/* Fontäne / Spout */}
      <path d="M52 24 Q54 16 50 12 M52 24 Q56 16 58 12" stroke="#87CEEB" strokeWidth="2" fill="none" />
      {/* Auge / Eye */}
      <circle cx="50" cy="32" r="3" fill="black" />
      {/* Flosse / Fin */}
      <polygon points="32,24 28,14 38,24" fill={color} />
      {/* Brustflosse / Pectoral fin */}
      <ellipse cx="44" cy="44" rx="8" ry="4" fill={color} />
    </svg>
  );
}

export function Turtle({ size = 64, color = '#228B22' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Panzer / Shell */}
      <ellipse cx="32" cy="36" rx="22" ry="16" fill="#8B4513" />
      <ellipse cx="32" cy="34" rx="18" ry="12" fill={color} />
      {/* Panzer-Muster / Shell pattern */}
      <path d="M32 22 L32 46" stroke="#006400" strokeWidth="1" />
      <path d="M20 28 L44 28" stroke="#006400" strokeWidth="1" />
      <path d="M18 38 L46 38" stroke="#006400" strokeWidth="1" />
      {/* Kopf / Head */}
      <ellipse cx="54" cy="36" rx="8" ry="6" fill={color} />
      <circle cx="58" cy="34" r="2" fill="black" />
      {/* Beine / Legs */}
      <ellipse cx="18" cy="28" rx="6" ry="4" fill={color} />
      <ellipse cx="46" cy="28" rx="6" ry="4" fill={color} />
      <ellipse cx="18" cy="44" rx="6" ry="4" fill={color} />
      <ellipse cx="46" cy="44" rx="6" ry="4" fill={color} />
      {/* Schwanz / Tail */}
      <polygon points="10,36 4,34 4,38" fill={color} />
    </svg>
  );
}

export function Crab({ size = 64, color = '#FF4500' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Scheren / Claws */}
      <ellipse cx="8" cy="28" rx="8" ry="6" fill={color} />
      <ellipse cx="4" cy="24" rx="4" ry="6" fill={color} />
      <ellipse cx="56" cy="28" rx="8" ry="6" fill={color} />
      <ellipse cx="60" cy="24" rx="4" ry="6" fill={color} />
      {/* Arme / Arms */}
      <rect x="12" y="26" width="8" height="4" fill={color} />
      <rect x="44" y="26" width="8" height="4" fill={color} />
      {/* Körper / Body */}
      <ellipse cx="32" cy="36" rx="18" ry="14" fill={color} />
      {/* Augen / Eyes */}
      <line x1="26" y1="26" x2="26" y2="18" stroke={color} strokeWidth="2" />
      <line x1="38" y1="26" x2="38" y2="18" stroke={color} strokeWidth="2" />
      <circle cx="26" cy="16" r="4" fill={color} />
      <circle cx="38" cy="16" r="4" fill={color} />
      <circle cx="26" cy="16" r="2" fill="black" />
      <circle cx="38" cy="16" r="2" fill="black" />
      {/* Beine / Legs */}
      <path d="M20 44 L12 54 L8 52" stroke={color} strokeWidth="2" fill="none" />
      <path d="M24 46 L18 58 L14 56" stroke={color} strokeWidth="2" fill="none" />
      <path d="M28 48 L26 60 L22 58" stroke={color} strokeWidth="2" fill="none" />
      <path d="M44 44 L52 54 L56 52" stroke={color} strokeWidth="2" fill="none" />
      <path d="M40 46 L46 58 L50 56" stroke={color} strokeWidth="2" fill="none" />
      <path d="M36 48 L38 60 L42 58" stroke={color} strokeWidth="2" fill="none" />
    </svg>
  );
}

export function Jellyfish({ size = 64, color = '#FF69B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Glocke / Bell */}
      <ellipse cx="32" cy="20" rx="20" ry="16" fill={color} opacity="0.7" />
      <ellipse cx="32" cy="24" rx="16" ry="10" fill={color} opacity="0.5" />
      {/* Tentakel / Tentacles */}
      <path d="M16 32 Q12 44 16 56 Q20 64 18 56" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M24 34 Q20 48 24 60" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M32 36 Q32 52 28 64" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M32 36 Q32 52 36 64" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M40 34 Q44 48 40 60" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M48 32 Q52 44 48 56 Q44 64 46 56" stroke={color} strokeWidth="2" fill="none" opacity="0.6" />
    </svg>
  );
}

export function Seahorse({ size = 64, color = '#FFD700' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <path d="M32 8 Q44 12 44 24 Q44 36 36 44 Q28 52 32 60 Q36 64 34 58" stroke={color} strokeWidth="8" fill="none" />
      {/* Kopf / Head */}
      <circle cx="32" cy="12" r="8" fill={color} />
      {/* Schnauze / Snout */}
      <ellipse cx="24" cy="14" rx="6" ry="3" fill={color} />
      {/* Auge / Eye */}
      <circle cx="34" cy="10" r="2" fill="black" />
      {/* Rückenflosse / Dorsal fin */}
      <path d="M44 24 Q52 20 48 28 Q56 24 52 32 Q58 30 54 36" fill={color} opacity="0.7" />
      {/* Krone / Crown */}
      <polygon points="32,4 30,0 34,2 36,0 34,4" fill={color} />
    </svg>
  );
}

// ===== MEHR KLEINE TIERE / MORE SMALL ANIMALS =====

export function Frog({ size = 64, color = '#32CD32' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Hinterbeine / Back legs */}
      <ellipse cx="12" cy="48" rx="10" ry="6" fill={color} />
      <ellipse cx="52" cy="48" rx="10" ry="6" fill={color} />
      {/* Körper / Body */}
      <ellipse cx="32" cy="42" rx="18" ry="14" fill={color} />
      {/* Kopf / Head */}
      <ellipse cx="32" cy="26" rx="20" ry="14" fill={color} />
      {/* Augen / Eyes */}
      <circle cx="20" cy="18" r="8" fill={color} />
      <circle cx="44" cy="18" r="8" fill={color} />
      <circle cx="20" cy="16" r="5" fill="white" />
      <circle cx="44" cy="16" r="5" fill="white" />
      <circle cx="20" cy="16" r="3" fill="black" />
      <circle cx="44" cy="16" r="3" fill="black" />
      {/* Mund / Mouth */}
      <path d="M22 34 Q32 38 42 34" stroke="#228B22" strokeWidth="2" fill="none" />
      {/* Vorderbeine / Front legs */}
      <ellipse cx="16" cy="50" rx="4" ry="6" fill={color} />
      <ellipse cx="48" cy="50" rx="4" ry="6" fill={color} />
    </svg>
  );
}

export function Snake({ size = 64, color = '#228B22' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <path d="M8 48 Q16 32 32 40 Q48 48 40 32 Q32 16 48 24 Q64 32 56 16" stroke={color} strokeWidth="8" fill="none" strokeLinecap="round" />
      {/* Muster / Pattern */}
      <path d="M8 48 Q16 32 32 40 Q48 48 40 32 Q32 16 48 24 Q64 32 56 16" stroke="#006400" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="8 8" />
      {/* Kopf / Head */}
      <ellipse cx="56" cy="14" rx="6" ry="5" fill={color} />
      {/* Augen / Eyes */}
      <circle cx="58" cy="12" r="2" fill="#FFFF00" />
      <circle cx="58" cy="12" r="1" fill="black" />
      {/* Zunge / Tongue */}
      <path d="M62 16 L66 18 M62 16 L66 14" stroke="#FF0000" strokeWidth="1" />
    </svg>
  );
}

export function Mouse({ size = 64, color = '#808080' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="28" cy="40" rx="18" ry="14" fill={color} />
      {/* Kopf / Head */}
      <ellipse cx="48" cy="36" rx="12" ry="10" fill={color} />
      {/* Ohren / Ears */}
      <circle cx="44" cy="26" r="8" fill={color} />
      <circle cx="56" cy="28" r="8" fill={color} />
      <circle cx="44" cy="26" r="5" fill="#FFB6C1" />
      <circle cx="56" cy="28" r="5" fill="#FFB6C1" />
      {/* Schnauze / Snout */}
      <ellipse cx="58" cy="38" rx="4" ry="3" fill="#FFB6C1" />
      <circle cx="60" cy="36" r="2" fill="black" />
      {/* Auge / Eye */}
      <circle cx="52" cy="34" r="2" fill="black" />
      {/* Schnurrhaare / Whiskers */}
      <line x1="58" y1="38" x2="64" y2="36" stroke="#333" strokeWidth="1" />
      <line x1="58" y1="40" x2="64" y2="42" stroke="#333" strokeWidth="1" />
      {/* Schwanz / Tail */}
      <path d="M10 40 Q4 36 6 44 Q8 52 4 48" stroke={color} strokeWidth="2" fill="none" />
    </svg>
  );
}

export function Hedgehog({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Stacheln / Spines */}
      {[...Array(12)].map((_, i) => (
        <line key={i} x1={20 + i * 3} y1={24 + Math.sin(i) * 4} x2={18 + i * 3} y2={12 + Math.sin(i) * 4} stroke={color} strokeWidth="2" />
      ))}
      {/* Körper / Body */}
      <ellipse cx="32" cy="40" rx="22" ry="16" fill={color} />
      {/* Gesicht / Face */}
      <ellipse cx="52" cy="42" rx="10" ry="10" fill="#DEB887" />
      {/* Nase / Nose */}
      <circle cx="60" cy="44" r="3" fill="black" />
      {/* Augen / Eyes */}
      <circle cx="54" cy="38" r="2" fill="black" />
      {/* Beine / Legs */}
      <ellipse cx="20" cy="54" rx="4" ry="3" fill="#DEB887" />
      <ellipse cx="44" cy="54" rx="4" ry="3" fill="#DEB887" />
    </svg>
  );
}

export function Squirrel({ size = 64, color = '#D2691E' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Schwanz / Tail */}
      <path d="M12 32 Q4 24 8 16 Q16 8 24 16 Q28 24 20 32" fill={color} />
      {/* Körper / Body */}
      <ellipse cx="32" cy="44" rx="14" ry="12" fill={color} />
      {/* Kopf / Head */}
      <circle cx="44" cy="32" r="12" fill={color} />
      {/* Ohren / Ears */}
      <polygon points="38,22 36,14 42,20" fill={color} />
      <polygon points="50,22 52,14 48,20" fill={color} />
      {/* Gesicht / Face */}
      <ellipse cx="50" cy="36" rx="4" ry="3" fill="#DEB887" />
      {/* Augen / Eyes */}
      <circle cx="42" cy="30" r="3" fill="black" />
      <circle cx="43" cy="29" r="1" fill="white" />
      {/* Nase / Nose */}
      <circle cx="52" cy="34" r="2" fill="black" />
      {/* Pfoten mit Nuss / Paws with nut */}
      <ellipse cx="44" cy="48" rx="4" ry="3" fill={color} />
      <ellipse cx="46" cy="46" rx="3" ry="4" fill="#8B4513" />
    </svg>
  );
}

export function Fox({ size = 64, color = '#FF6600' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Schwanz / Tail */}
      <path d="M8 44 Q4 36 12 32 Q20 28 16 40 Q12 52 8 44" fill={color} />
      <path d="M8 44 Q6 40 10 38" fill="white" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="44" rx="16" ry="12" fill={color} />
      {/* Brust / Chest */}
      <ellipse cx="38" cy="48" rx="8" ry="8" fill="white" />
      {/* Kopf / Head */}
      <polygon points="44,36 56,20 60,36 56,44 44,44" fill={color} />
      {/* Ohren / Ears */}
      <polygon points="48,24 44,12 52,20" fill={color} />
      <polygon points="56,22 58,10 62,20" fill={color} />
      <polygon points="48,24 46,16 50,22" fill="black" />
      <polygon points="56,22 58,14 60,20" fill="black" />
      {/* Schnauze / Snout */}
      <polygon points="56,36 64,40 56,44" fill="white" />
      {/* Nase / Nose */}
      <circle cx="62" cy="40" r="2" fill="black" />
      {/* Augen / Eyes */}
      <circle cx="52" cy="32" r="2" fill="black" />
      {/* Beine / Legs */}
      <rect x="24" y="52" width="4" height="10" fill={color} />
      <rect x="38" y="52" width="4" height="10" fill={color} />
    </svg>
  );
}

export function Wolf({ size = 64, color = '#696969' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Schwanz / Tail */}
      <path d="M8 38 Q4 32 10 28 Q6 36 14 34" fill={color} />
      {/* Körper / Body */}
      <ellipse cx="32" cy="42" rx="18" ry="12" fill={color} />
      {/* Brust / Chest */}
      <ellipse cx="42" cy="44" rx="8" ry="8" fill="#A9A9A9" />
      {/* Kopf / Head */}
      <ellipse cx="52" cy="30" rx="12" ry="10" fill={color} />
      {/* Ohren / Ears - spitz */}
      <polygon points="44,22 40,10 48,18" fill={color} />
      <polygon points="56,20 60,8 62,18" fill={color} />
      <polygon points="44,22 42,14 46,20" fill="#A9A9A9" />
      <polygon points="56,20 60,12 60,18" fill="#A9A9A9" />
      {/* Schnauze / Snout */}
      <ellipse cx="60" cy="34" rx="6" ry="4" fill="#A9A9A9" />
      {/* Nase / Nose */}
      <ellipse cx="64" cy="32" rx="2" ry="1.5" fill="black" />
      {/* Augen / Eyes */}
      <ellipse cx="50" cy="28" rx="3" ry="4" fill="#FFD700" />
      <ellipse cx="56" cy="28" rx="3" ry="4" fill="#FFD700" />
      <ellipse cx="50" cy="28" rx="1.5" ry="3" fill="black" />
      <ellipse cx="56" cy="28" rx="1.5" ry="3" fill="black" />
      {/* Beine / Legs */}
      <rect x="20" y="50" width="5" height="12" fill={color} />
      <rect x="28" y="50" width="5" height="12" fill={color} />
      <rect x="36" y="50" width="5" height="12" fill={color} />
      <rect x="44" y="50" width="5" height="12" fill={color} />
    </svg>
  );
}

// ===== ARKTISCHE TIERE / ARCTIC ANIMALS =====

export function PolarBear({ size = 64, color = '#F5F5F5' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <ellipse cx="28" cy="40" rx="20" ry="16" fill={color} />
      <circle cx="48" cy="28" r="14" fill={color} />
      {/* Ohren / Ears */}
      <circle cx="40" cy="16" r="5" fill={color} />
      <circle cx="56" cy="18" r="5" fill={color} />
      {/* Schnauze / Snout */}
      <ellipse cx="56" cy="32" rx="6" ry="5" fill={color} />
      <ellipse cx="58" cy="30" rx="3" ry="2" fill="black" />
      {/* Augen / Eyes */}
      <circle cx="46" cy="26" r="2" fill="black" />
      <circle cx="54" cy="26" r="2" fill="black" />
      {/* Beine / Legs */}
      <ellipse cx="16" cy="54" rx="6" ry="4" fill={color} />
      <ellipse cx="40" cy="54" rx="6" ry="4" fill={color} />
    </svg>
  );
}

export function Seal({ size = 64, color = '#696969' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="28" cy="40" rx="22" ry="12" fill={color} />
      {/* Schwanz / Tail */}
      <path d="M6 40 Q2 36 6 32 Q10 36 6 40 Q2 44 6 48 Q10 44 6 40" fill={color} />
      {/* Kopf / Head */}
      <circle cx="52" cy="36" r="12" fill={color} />
      {/* Schnauze / Snout */}
      <ellipse cx="60" cy="40" rx="4" ry="3" fill={color} />
      <circle cx="62" cy="38" r="2" fill="black" />
      {/* Augen / Eyes */}
      <circle cx="54" cy="34" r="4" fill="black" />
      <circle cx="55" cy="33" r="1.5" fill="white" />
      {/* Schnurrhaare / Whiskers */}
      <line x1="60" y1="40" x2="66" y2="38" stroke="#333" strokeWidth="1" />
      <line x1="60" y1="42" x2="66" y2="44" stroke="#333" strokeWidth="1" />
      {/* Flossen / Flippers */}
      <ellipse cx="40" cy="48" rx="8" ry="4" fill={color} />
    </svg>
  );
}

// ===== BAUERNHOF ERGÄNZUNGEN / FARM ADDITIONS =====

export function Horse({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="28" cy="38" rx="20" ry="14" fill={color} />
      {/* Hals / Neck */}
      <path d="M44 34 Q52 28 50 18" stroke={color} strokeWidth="10" fill="none" />
      {/* Kopf / Head */}
      <ellipse cx="52" cy="16" rx="10" ry="8" fill={color} />
      {/* Ohren / Ears */}
      <polygon points="46,10 44,4 50,8" fill={color} />
      <polygon points="54,8 56,2 58,8" fill={color} />
      {/* Mähne / Mane */}
      <path d="M48 18 Q44 24 48 28 Q44 32 48 36" stroke="#2F2F2F" strokeWidth="3" fill="none" />
      {/* Auge / Eye */}
      <circle cx="56" cy="14" r="2" fill="black" />
      {/* Nüstern / Nostrils */}
      <circle cx="60" cy="18" r="1" fill="black" />
      {/* Schweif / Tail */}
      <path d="M8 38 Q4 44 8 52 Q4 48 6 56" stroke="#2F2F2F" strokeWidth="3" fill="none" />
      {/* Beine / Legs */}
      <rect x="16" y="48" width="4" height="14" fill={color} />
      <rect x="24" y="48" width="4" height="14" fill={color} />
      <rect x="32" y="48" width="4" height="14" fill={color} />
      <rect x="40" y="48" width="4" height="14" fill={color} />
      {/* Hufe / Hooves */}
      <rect x="15" y="60" width="6" height="4" fill="black" rx="1" />
      <rect x="23" y="60" width="6" height="4" fill="black" rx="1" />
      <rect x="31" y="60" width="6" height="4" fill="black" rx="1" />
      <rect x="39" y="60" width="6" height="4" fill="black" rx="1" />
    </svg>
  );
}

export function Goat({ size = 64, color = '#F5F5F5' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <ellipse cx="28" cy="40" rx="18" ry="12" fill={color} />
      <ellipse cx="48" cy="30" rx="12" ry="10" fill={color} />
      {/* Hörner / Horns */}
      <path d="M44 22 Q40 14 44 10" stroke="#8B4513" strokeWidth="3" fill="none" />
      <path d="M52 22 Q56 14 52 10" stroke="#8B4513" strokeWidth="3" fill="none" />
      {/* Ohren / Ears */}
      <ellipse cx="40" cy="28" rx="4" ry="2" fill={color} transform="rotate(-30 40 28)" />
      <ellipse cx="56" cy="28" rx="4" ry="2" fill={color} transform="rotate(30 56 28)" />
      {/* Bart / Beard */}
      <path d="M48 38 Q48 46 44 50" stroke={color} strokeWidth="3" fill="none" />
      {/* Augen / Eyes */}
      <ellipse cx="46" cy="28" rx="2" ry="3" fill="#FFD700" />
      <ellipse cx="50" cy="28" rx="2" ry="3" fill="#FFD700" />
      <rect x="45" y="27" width="2" height="3" fill="black" />
      <rect x="49" y="27" width="2" height="3" fill="black" />
      {/* Nase / Nose */}
      <ellipse cx="48" cy="34" rx="3" ry="2" fill="#FFB6C1" />
      {/* Beine / Legs */}
      <rect x="16" y="48" width="4" height="12" fill={color} />
      <rect x="36" y="48" width="4" height="12" fill={color} />
    </svg>
  );
}

export function Donkey({ size = 64, color = '#808080' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <ellipse cx="28" cy="40" rx="18" ry="12" fill={color} />
      <ellipse cx="48" cy="28" rx="10" ry="10" fill={color} />
      {/* Ohren / Ears - extra lang */}
      <ellipse cx="42" cy="12" rx="4" ry="12" fill={color} />
      <ellipse cx="54" cy="12" rx="4" ry="12" fill={color} />
      <ellipse cx="42" cy="12" rx="2" ry="10" fill="#DEB887" />
      <ellipse cx="54" cy="12" rx="2" ry="10" fill="#DEB887" />
      {/* Schnauze / Snout */}
      <ellipse cx="56" cy="32" rx="6" ry="4" fill="#DEB887" />
      <circle cx="54" cy="32" r="1" fill="black" />
      <circle cx="58" cy="32" r="1" fill="black" />
      {/* Augen / Eyes */}
      <circle cx="46" cy="26" r="2" fill="black" />
      <circle cx="52" cy="26" r="2" fill="black" />
      {/* Mähne / Mane */}
      <rect x="44" y="22" width="8" height="4" fill="#2F2F2F" />
      {/* Beine / Legs */}
      <rect x="16" y="48" width="4" height="14" fill={color} />
      <rect x="36" y="48" width="4" height="14" fill={color} />
    </svg>
  );
}

// ===== SÜSSE KREATUREN / CUTE CREATURES =====
// Niedliche Fantasy-Kreaturen mit Element-Typen
// Cute fantasy creatures with elemental types

// ----- FEUER-KREATUREN / FIRE CREATURES -----

export function Emberpup({ size = 64, color = '#FF4500' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Flammen-Schweif / Flame tail */}
      <ellipse cx="10" cy="38" rx="8" ry="6" fill="#FFD700" />
      <ellipse cx="8" cy="36" rx="6" ry="8" fill={color} />
      <ellipse cx="6" cy="32" rx="4" ry="6" fill="#FF6347" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="40" rx="16" ry="12" fill={color} />
      {/* Kopf / Head */}
      <circle cx="48" cy="30" r="14" fill={color} />
      {/* Ohren / Ears */}
      <polygon points="38,18 36,6 44,14" fill={color} />
      <polygon points="56,16 62,6 58,18" fill={color} />
      <polygon points="38,18 38,10 42,16" fill="#FFD700" />
      <polygon points="56,16 60,10 58,18" fill="#FFD700" />
      {/* Augen / Eyes */}
      <circle cx="44" cy="28" r="5" fill="white" />
      <circle cx="54" cy="28" r="5" fill="white" />
      <circle cx="44" cy="28" r="3" fill="#8B0000" />
      <circle cx="54" cy="28" r="3" fill="#8B0000" />
      <circle cx="45" cy="27" r="1" fill="white" />
      <circle cx="55" cy="27" r="1" fill="white" />
      {/* Nase / Nose */}
      <ellipse cx="49" cy="36" rx="3" ry="2" fill="black" />
      {/* Beine / Legs */}
      <rect x="22" y="48" width="6" height="10" fill={color} rx="2" />
      <rect x="36" y="48" width="6" height="10" fill={color} rx="2" />
      {/* Flammen an Füßen / Flames at feet */}
      <ellipse cx="25" cy="58" rx="4" ry="3" fill="#FFD700" />
      <ellipse cx="39" cy="58" rx="4" ry="3" fill="#FFD700" />
    </svg>
  );
}

export function FlameChick({ size = 64, color = '#FF6347' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Flammen-Kopf / Flame head */}
      <ellipse cx="32" cy="8" rx="8" ry="6" fill="#FFD700" />
      <ellipse cx="28" cy="10" rx="6" ry="8" fill={color} />
      <ellipse cx="36" cy="10" rx="6" ry="8" fill={color} />
      <ellipse cx="32" cy="6" rx="4" ry="6" fill="#FFFF00" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="38" rx="18" ry="16" fill={color} />
      <ellipse cx="32" cy="42" rx="14" ry="10" fill="#FFD700" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="32" r="5" fill="white" />
      <circle cx="38" cy="32" r="5" fill="white" />
      <circle cx="26" cy="32" r="3" fill="black" />
      <circle cx="38" cy="32" r="3" fill="black" />
      <circle cx="27" cy="31" r="1" fill="white" />
      <circle cx="39" cy="31" r="1" fill="white" />
      {/* Schnabel / Beak */}
      <polygon points="32,38 28,44 36,44" fill="#FFA500" />
      {/* Füße / Feet */}
      <path d="M24 54 L20 60 L24 58 L28 60 L24 54" fill="#FFA500" />
      <path d="M40 54 L36 60 L40 58 L44 60 L40 54" fill="#FFA500" />
      {/* Flügel / Wings */}
      <ellipse cx="14" cy="40" rx="6" ry="10" fill={color} />
      <ellipse cx="50" cy="40" rx="6" ry="10" fill={color} />
    </svg>
  );
}

export function FireDrake({ size = 64, color = '#DC143C' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Flammen-Schweif / Flame tail */}
      <path d="M8 44 Q4 40 8 36 Q12 32 8 28" stroke="#FF4500" strokeWidth="6" fill="none" />
      <ellipse cx="6" cy="28" rx="4" ry="6" fill="#FFD700" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="42" rx="18" ry="14" fill={color} />
      {/* Bauch-Schuppen / Belly scales */}
      <ellipse cx="32" cy="46" rx="10" ry="8" fill="#FFD700" />
      <path d="M24 42 L32 40 L40 42 L32 44 Z" fill="#FFA500" />
      {/* Kopf / Head */}
      <ellipse cx="52" cy="32" rx="12" ry="10" fill={color} />
      {/* Hörner / Horns */}
      <polygon points="48,24 44,14 50,22" fill="#FF8C00" />
      <polygon points="56,24 60,14 54,22" fill="#FF8C00" />
      {/* Augen / Eyes */}
      <circle cx="50" cy="30" r="4" fill="#FFFF00" />
      <circle cx="56" cy="30" r="4" fill="#FFFF00" />
      <ellipse cx="50" cy="30" rx="2" ry="3" fill="black" />
      <ellipse cx="56" cy="30" rx="2" ry="3" fill="black" />
      {/* Nase mit Rauch / Nose with smoke */}
      <circle cx="60" cy="36" r="2" fill="#8B0000" />
      <path d="M62 34 Q66 30 64 26" stroke="#666" strokeWidth="2" fill="none" opacity="0.5" />
      {/* Flügel / Wings */}
      <polygon points="28,28 18,12 12,28 20,32" fill={color} />
      <polygon points="32,28 24,16 20,28" fill="#FF6347" />
      {/* Beine / Legs */}
      <rect x="22" y="52" width="6" height="10" fill={color} rx="2" />
      <rect x="36" y="52" width="6" height="10" fill={color} rx="2" />
    </svg>
  );
}

// ----- WASSER-KREATUREN / WATER CREATURES -----

export function WaterPup({ size = 64, color = '#4169E1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Wasser-Schweif / Water tail */}
      <ellipse cx="10" cy="38" rx="8" ry="6" fill="#87CEEB" />
      <ellipse cx="8" cy="36" rx="6" ry="8" fill={color} />
      {/* Körper / Body */}
      <ellipse cx="32" cy="40" rx="16" ry="12" fill={color} />
      {/* Flossen-Muster / Fin pattern */}
      <ellipse cx="32" cy="36" rx="12" ry="6" fill="#87CEEB" />
      {/* Kopf / Head */}
      <circle cx="48" cy="30" r="14" fill={color} />
      {/* Ohren/Flossen / Ears/Fins */}
      <ellipse cx="38" cy="18" rx="4" ry="10" fill={color} />
      <ellipse cx="58" cy="18" rx="4" ry="10" fill={color} />
      <ellipse cx="38" cy="18" rx="2" ry="8" fill="#87CEEB" />
      <ellipse cx="58" cy="18" rx="2" ry="8" fill="#87CEEB" />
      {/* Augen / Eyes */}
      <circle cx="44" cy="28" r="5" fill="white" />
      <circle cx="54" cy="28" r="5" fill="white" />
      <circle cx="44" cy="28" r="3" fill="#000080" />
      <circle cx="54" cy="28" r="3" fill="#000080" />
      <circle cx="45" cy="27" r="1" fill="white" />
      <circle cx="55" cy="27" r="1" fill="white" />
      {/* Nase / Nose */}
      <ellipse cx="49" cy="36" rx="3" ry="2" fill="#1a1a1a" />
      {/* Beine / Legs */}
      <ellipse cx="25" cy="54" rx="5" ry="4" fill={color} />
      <ellipse cx="39" cy="54" rx="5" ry="4" fill={color} />
      {/* Blasen / Bubbles */}
      <circle cx="60" cy="22" r="2" fill="#87CEEB" opacity="0.7" />
      <circle cx="64" cy="18" r="1.5" fill="#87CEEB" opacity="0.5" />
    </svg>
  );
}

export function BubbleFish({ size = 64, color = '#00CED1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Schwanz / Tail */}
      <ellipse cx="8" cy="32" rx="8" ry="12" fill={color} />
      <ellipse cx="6" cy="32" rx="4" ry="8" fill="#E0FFFF" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="32" rx="20" ry="18" fill={color} />
      <ellipse cx="34" cy="36" rx="14" ry="10" fill="#E0FFFF" />
      {/* Augen / Eyes - groß und süß */}
      <circle cx="40" cy="26" r="10" fill="white" />
      <circle cx="40" cy="26" r="6" fill="#4169E1" />
      <circle cx="42" cy="24" r="2" fill="white" />
      {/* Mund / Mouth */}
      <ellipse cx="52" cy="34" rx="3" ry="2" fill="#FF69B4" />
      {/* Flossen / Fins */}
      <ellipse cx="32" cy="14" rx="8" ry="6" fill={color} />
      <ellipse cx="32" cy="50" rx="6" ry="4" fill={color} />
      {/* Wangen / Cheeks */}
      <circle cx="48" cy="36" r="4" fill="#FFB6C1" opacity="0.6" />
      {/* Blasen / Bubbles */}
      <circle cx="56" cy="20" r="3" fill="#E0FFFF" opacity="0.7" />
      <circle cx="60" cy="26" r="2" fill="#E0FFFF" opacity="0.5" />
      <circle cx="58" cy="14" r="1.5" fill="#E0FFFF" opacity="0.4" />
    </svg>
  );
}

export function WaterSprite({ size = 64, color = '#1E90FF' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Tropfen-Form / Drop shape */}
      <path d="M32 8 Q48 24 48 40 Q48 56 32 56 Q16 56 16 40 Q16 24 32 8" fill={color} />
      <path d="M32 14 Q42 26 42 38 Q42 50 32 50 Q22 50 22 38 Q22 26 32 14" fill="#87CEEB" opacity="0.5" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="34" r="5" fill="white" />
      <circle cx="38" cy="34" r="5" fill="white" />
      <circle cx="26" cy="34" r="3" fill="#000080" />
      <circle cx="38" cy="34" r="3" fill="#000080" />
      <circle cx="27" cy="33" r="1" fill="white" />
      <circle cx="39" cy="33" r="1" fill="white" />
      {/* Mund / Mouth */}
      <path d="M28 42 Q32 46 36 42" stroke="#000080" strokeWidth="2" fill="none" />
      {/* Glanz / Shine */}
      <ellipse cx="24" cy="20" rx="4" ry="6" fill="white" opacity="0.6" />
      {/* Hände / Hands */}
      <ellipse cx="12" cy="40" rx="4" ry="6" fill={color} />
      <ellipse cx="52" cy="40" rx="4" ry="6" fill={color} />
    </svg>
  );
}

// ----- PFLANZEN-KREATUREN / GRASS CREATURES -----

export function LeafPup({ size = 64, color = '#32CD32' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Blatt-Schweif / Leaf tail */}
      <ellipse cx="8" cy="38" rx="8" ry="10" fill="#228B22" />
      <path d="M8 32 L8 44" stroke="#006400" strokeWidth="1" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="40" rx="16" ry="12" fill={color} />
      {/* Blatt-Muster / Leaf pattern */}
      <ellipse cx="32" cy="38" rx="10" ry="6" fill="#90EE90" />
      {/* Kopf / Head */}
      <circle cx="48" cy="30" r="14" fill={color} />
      {/* Blatt-Ohren / Leaf ears */}
      <ellipse cx="38" cy="16" rx="6" ry="10" fill="#228B22" />
      <ellipse cx="58" cy="16" rx="6" ry="10" fill="#228B22" />
      <path d="M38 10 L38 22" stroke="#006400" strokeWidth="1" />
      <path d="M58 10 L58 22" stroke="#006400" strokeWidth="1" />
      {/* Augen / Eyes */}
      <circle cx="44" cy="28" r="5" fill="white" />
      <circle cx="54" cy="28" r="5" fill="white" />
      <circle cx="44" cy="28" r="3" fill="#006400" />
      <circle cx="54" cy="28" r="3" fill="#006400" />
      <circle cx="45" cy="27" r="1" fill="white" />
      <circle cx="55" cy="27" r="1" fill="white" />
      {/* Nase / Nose */}
      <ellipse cx="49" cy="36" rx="3" ry="2" fill="#8B4513" />
      {/* Beine / Legs */}
      <rect x="22" y="48" width="6" height="10" fill={color} rx="2" />
      <rect x="36" y="48" width="6" height="10" fill={color} rx="2" />
      {/* Kleine Blume / Small flower */}
      <circle cx="42" cy="18" r="3" fill="#FFB6C1" />
      <circle cx="42" cy="18" r="1" fill="#FFD700" />
    </svg>
  );
}

export function FlowerBunny({ size = 64, color = '#98FB98' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="32" cy="44" rx="14" ry="12" fill={color} />
      {/* Kopf / Head */}
      <circle cx="32" cy="28" r="16" fill={color} />
      {/* Blumen-Ohren / Flower ears */}
      <ellipse cx="20" cy="10" rx="6" ry="14" fill={color} />
      <ellipse cx="44" cy="10" rx="6" ry="14" fill={color} />
      {/* Blumen an Ohren / Flowers on ears */}
      <circle cx="20" cy="4" r="4" fill="#FF69B4" />
      <circle cx="44" cy="4" r="4" fill="#FF69B4" />
      <circle cx="20" cy="4" r="2" fill="#FFD700" />
      <circle cx="44" cy="4" r="2" fill="#FFD700" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="26" r="5" fill="white" />
      <circle cx="38" cy="26" r="5" fill="white" />
      <circle cx="26" cy="26" r="3" fill="#FF69B4" />
      <circle cx="38" cy="26" r="3" fill="#FF69B4" />
      <circle cx="27" cy="25" r="1" fill="white" />
      <circle cx="39" cy="25" r="1" fill="white" />
      {/* Nase / Nose */}
      <ellipse cx="32" cy="32" rx="2" ry="1.5" fill="#FF69B4" />
      {/* Mund / Mouth */}
      <path d="M30 35 L32 38 L34 35" stroke="#FF69B4" strokeWidth="1" fill="none" />
      {/* Wangen / Cheeks */}
      <circle cx="20" cy="32" r="3" fill="#FFB6C1" opacity="0.6" />
      <circle cx="44" cy="32" r="3" fill="#FFB6C1" opacity="0.6" />
      {/* Füße / Feet */}
      <ellipse cx="24" cy="56" rx="5" ry="3" fill={color} />
      <ellipse cx="40" cy="56" rx="5" ry="3" fill={color} />
      {/* Kleine Blätter / Small leaves */}
      <ellipse cx="16" cy="40" rx="4" ry="2" fill="#228B22" />
      <ellipse cx="48" cy="40" rx="4" ry="2" fill="#228B22" />
    </svg>
  );
}

export function VineSerpent({ size = 64, color = '#228B22' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body - Ranken-Form */}
      <path d="M8 56 Q16 48 24 52 Q32 56 40 48 Q48 40 52 44" stroke={color} strokeWidth="10" fill="none" strokeLinecap="round" />
      {/* Blätter am Körper / Leaves on body */}
      <ellipse cx="16" cy="48" rx="6" ry="3" fill="#90EE90" transform="rotate(-30 16 48)" />
      <ellipse cx="32" cy="52" rx="6" ry="3" fill="#90EE90" transform="rotate(20 32 52)" />
      <ellipse cx="44" cy="44" rx="6" ry="3" fill="#90EE90" transform="rotate(-20 44 44)" />
      {/* Kopf / Head */}
      <circle cx="56" cy="40" r="10" fill={color} />
      {/* Blatt-Kopfschmuck / Leaf headpiece */}
      <ellipse cx="56" cy="28" rx="8" ry="4" fill="#90EE90" />
      <ellipse cx="52" cy="30" rx="4" ry="6" fill="#90EE90" transform="rotate(-30 52 30)" />
      <ellipse cx="60" cy="30" rx="4" ry="6" fill="#90EE90" transform="rotate(30 60 30)" />
      {/* Augen / Eyes */}
      <circle cx="52" cy="38" r="4" fill="white" />
      <circle cx="60" cy="38" r="4" fill="white" />
      <circle cx="52" cy="38" r="2" fill="#8B4513" />
      <circle cx="60" cy="38" r="2" fill="#8B4513" />
      <circle cx="53" cy="37" r="0.5" fill="white" />
      <circle cx="61" cy="37" r="0.5" fill="white" />
      {/* Zunge / Tongue */}
      <path d="M62 44 L66 46 M62 44 L66 42" stroke="#FF69B4" strokeWidth="1" />
      {/* Blume am Schwanz / Flower at tail */}
      <circle cx="8" cy="56" r="4" fill="#FFD700" />
      <circle cx="8" cy="56" r="2" fill="#FF8C00" />
    </svg>
  );
}

// ----- ELEKTRO-KREATUREN / ELECTRIC CREATURES -----

export function SparkMouse({ size = 64, color = '#FFD700' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Blitz-Schweif / Lightning tail */}
      <polygon points="4,36 12,32 8,28 16,24 12,20 20,38 12,34 16,38 8,40" fill={color} />
      {/* Körper / Body */}
      <ellipse cx="36" cy="40" rx="16" ry="12" fill={color} />
      {/* Kopf / Head */}
      <circle cx="48" cy="30" r="14" fill={color} />
      {/* Ohren / Ears */}
      <ellipse cx="38" cy="16" rx="8" ry="12" fill={color} />
      <ellipse cx="58" cy="16" rx="8" ry="12" fill={color} />
      <ellipse cx="38" cy="18" rx="4" ry="6" fill="black" />
      <ellipse cx="58" cy="18" rx="4" ry="6" fill="black" />
      {/* Augen / Eyes */}
      <circle cx="44" cy="28" r="5" fill="white" />
      <circle cx="54" cy="28" r="5" fill="white" />
      <circle cx="44" cy="28" r="3" fill="black" />
      <circle cx="54" cy="28" r="3" fill="black" />
      <circle cx="45" cy="27" r="1" fill="white" />
      <circle cx="55" cy="27" r="1" fill="white" />
      {/* Wangen / Cheeks */}
      <circle cx="40" cy="34" r="4" fill="#FF0000" />
      <circle cx="58" cy="34" r="4" fill="#FF0000" />
      {/* Nase / Nose */}
      <ellipse cx="49" cy="36" rx="2" ry="1.5" fill="black" />
      {/* Füße / Feet */}
      <ellipse cx="28" cy="52" rx="4" ry="3" fill={color} />
      <ellipse cx="44" cy="52" rx="4" ry="3" fill={color} />
      {/* Blitze / Sparks */}
      <polygon points="60,20 64,18 62,22 66,20" fill="#FFF" />
      <polygon points="36,22 40,20 38,24 42,22" fill="#FFF" />
    </svg>
  );
}

export function ThunderBird({ size = 64, color = '#FFD700' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Blitz-Flügel / Lightning wings */}
      <polygon points="8,32 0,24 8,28 4,20 16,32" fill={color} />
      <polygon points="56,32 64,24 56,28 60,20 48,32" fill={color} />
      {/* Körper / Body */}
      <ellipse cx="32" cy="36" rx="14" ry="12" fill={color} />
      <ellipse cx="32" cy="40" rx="10" ry="6" fill="#F5F5DC" />
      {/* Kopf / Head */}
      <circle cx="32" cy="20" r="12" fill={color} />
      {/* Kopffedern / Head feathers */}
      <polygon points="28,8 26,2 30,6 32,0 34,6 38,2 36,8" fill={color} />
      {/* Augen / Eyes */}
      <circle cx="28" cy="18" r="4" fill="white" />
      <circle cx="36" cy="18" r="4" fill="white" />
      <circle cx="28" cy="18" r="2" fill="black" />
      <circle cx="36" cy="18" r="2" fill="black" />
      {/* Schnabel / Beak */}
      <polygon points="32,24 28,30 36,30" fill="#FFA500" />
      {/* Füße / Feet */}
      <path d="M26 48 L22 56 L26 54 L30 56 L26 48" fill="#FFA500" />
      <path d="M38 48 L34 56 L38 54 L42 56 L38 48" fill="#FFA500" />
      {/* Blitz / Lightning bolt */}
      <polygon points="46,10 52,6 48,14 54,10 46,18" fill="#FFF" />
    </svg>
  );
}

export function VoltOrb({ size = 64, color = '#FFFF00' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Energie-Aura / Energy aura */}
      <circle cx="32" cy="32" r="28" fill={color} opacity="0.3" />
      {/* Körper / Body */}
      <circle cx="32" cy="32" r="22" fill={color} />
      <circle cx="32" cy="32" r="18" fill="#FFD700" />
      {/* Blitz-Streifen / Lightning stripes */}
      <path d="M14 32 L22 28 L18 32 L26 28" stroke="black" strokeWidth="2" fill="none" />
      <path d="M50 32 L42 28 L46 32 L38 28" stroke="black" strokeWidth="2" fill="none" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="28" r="6" fill="white" />
      <circle cx="38" cy="28" r="6" fill="white" />
      <circle cx="26" cy="28" r="4" fill="black" />
      <circle cx="38" cy="28" r="4" fill="black" />
      <circle cx="28" cy="26" r="1.5" fill="white" />
      <circle cx="40" cy="26" r="1.5" fill="white" />
      {/* Mund / Mouth */}
      <path d="M26 40 Q32 46 38 40" stroke="black" strokeWidth="2" fill="none" />
      {/* Energie-Punkte / Energy dots */}
      <circle cx="32" cy="10" r="2" fill="#FFF" />
      <circle cx="32" cy="54" r="2" fill="#FFF" />
      <circle cx="10" cy="32" r="2" fill="#FFF" />
      <circle cx="54" cy="32" r="2" fill="#FFF" />
    </svg>
  );
}

// ----- EIS-KREATUREN / ICE CREATURES -----

export function FrostPup({ size = 64, color = '#87CEEB' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Eis-Schweif / Ice tail */}
      <polygon points="4,38 12,34 8,38 14,36 10,42 16,38" fill="#E0FFFF" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="40" rx="16" ry="12" fill={color} />
      <ellipse cx="32" cy="42" rx="10" ry="6" fill="#E0FFFF" />
      {/* Kopf / Head */}
      <circle cx="48" cy="30" r="14" fill={color} />
      {/* Eis-Ohren / Ice ears */}
      <polygon points="38,18 34,4 44,14" fill="#E0FFFF" />
      <polygon points="56,16 58,2 62,14" fill="#E0FFFF" />
      {/* Augen / Eyes */}
      <circle cx="44" cy="28" r="5" fill="white" />
      <circle cx="54" cy="28" r="5" fill="white" />
      <circle cx="44" cy="28" r="3" fill="#4169E1" />
      <circle cx="54" cy="28" r="3" fill="#4169E1" />
      <circle cx="45" cy="27" r="1" fill="white" />
      <circle cx="55" cy="27" r="1" fill="white" />
      {/* Nase / Nose */}
      <ellipse cx="49" cy="36" rx="3" ry="2" fill="#4682B4" />
      {/* Beine / Legs */}
      <rect x="22" y="48" width="6" height="10" fill={color} rx="2" />
      <rect x="36" y="48" width="6" height="10" fill={color} rx="2" />
      {/* Schneeflocken / Snowflakes */}
      <text x="58" y="20" fontSize="8" fill="#FFF">❄</text>
      <text x="36" y="24" fontSize="6" fill="#FFF">❄</text>
    </svg>
  );
}

export function SnowBunny({ size = 64, color = '#F0F8FF' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="32" cy="44" rx="16" ry="14" fill={color} />
      {/* Kopf / Head */}
      <circle cx="32" cy="26" r="16" fill={color} />
      {/* Eis-Ohren / Ice ears */}
      <ellipse cx="20" cy="10" rx="5" ry="12" fill={color} />
      <ellipse cx="44" cy="10" rx="5" ry="12" fill={color} />
      <ellipse cx="20" cy="10" rx="3" ry="8" fill="#87CEEB" />
      <ellipse cx="44" cy="10" rx="3" ry="8" fill="#87CEEB" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="24" r="5" fill="white" />
      <circle cx="38" cy="24" r="5" fill="white" />
      <circle cx="26" cy="24" r="3" fill="#4169E1" />
      <circle cx="38" cy="24" r="3" fill="#4169E1" />
      <circle cx="27" cy="23" r="1" fill="white" />
      <circle cx="39" cy="23" r="1" fill="white" />
      {/* Nase / Nose */}
      <ellipse cx="32" cy="30" rx="2" ry="1.5" fill="#FFB6C1" />
      {/* Mund / Mouth */}
      <path d="M30 34 L32 37 L34 34" stroke="#87CEEB" strokeWidth="1" fill="none" />
      {/* Wangen / Cheeks */}
      <circle cx="20" cy="30" r="3" fill="#B0E0E6" opacity="0.6" />
      <circle cx="44" cy="30" r="3" fill="#B0E0E6" opacity="0.6" />
      {/* Füße / Feet */}
      <ellipse cx="24" cy="58" rx="6" ry="3" fill={color} />
      <ellipse cx="40" cy="58" rx="6" ry="3" fill={color} />
      {/* Eiskristalle / Ice crystals */}
      <polygon points="10,44 8,40 12,42 10,38 14,44" fill="#87CEEB" opacity="0.6" />
      <polygon points="54,44 52,40 56,42 54,38 58,44" fill="#87CEEB" opacity="0.6" />
    </svg>
  );
}

export function IceDragon({ size = 64, color = '#B0E0E6' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Eis-Schweif / Ice tail */}
      <polygon points="2,42 10,38 6,42 14,40 8,46 16,42" fill="#E0FFFF" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="42" rx="18" ry="14" fill={color} />
      {/* Eiskristall-Bauch / Ice crystal belly */}
      <polygon points="32,34 24,44 32,50 40,44" fill="#E0FFFF" />
      {/* Kopf / Head */}
      <ellipse cx="52" cy="30" rx="12" ry="10" fill={color} />
      {/* Eis-Hörner / Ice horns */}
      <polygon points="46,22 42,10 50,18" fill="#E0FFFF" />
      <polygon points="56,20 60,8 58,18" fill="#E0FFFF" />
      {/* Augen / Eyes */}
      <circle cx="50" cy="28" r="4" fill="white" />
      <circle cx="58" cy="28" r="4" fill="white" />
      <circle cx="50" cy="28" r="2" fill="#4169E1" />
      <circle cx="58" cy="28" r="2" fill="#4169E1" />
      {/* Nase mit Frost / Nose with frost */}
      <circle cx="62" cy="34" r="2" fill="#4682B4" />
      <path d="M64 32 Q68 28 66 24" stroke="#E0FFFF" strokeWidth="2" fill="none" opacity="0.7" />
      {/* Flügel / Wings */}
      <polygon points="28,26 16,10 10,26 20,30" fill={color} />
      <polygon points="32,26 22,14 18,26" fill="#E0FFFF" />
      {/* Beine / Legs */}
      <rect x="22" y="52" width="6" height="10" fill={color} rx="2" />
      <rect x="36" y="52" width="6" height="10" fill={color} rx="2" />
    </svg>
  );
}

// ----- GEISTER-KREATUREN / GHOST CREATURES -----

export function SpookyPup({ size = 64, color = '#9370DB' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Geister-Körper / Ghost body */}
      <path d="M16 56 Q16 32 32 24 Q48 32 48 56 Q44 52 40 56 Q36 52 32 56 Q28 52 24 56 Q20 52 16 56" fill={color} opacity="0.8" />
      {/* Kopf / Head */}
      <circle cx="32" cy="28" r="16" fill={color} opacity="0.8" />
      {/* Geister-Ohren / Ghost ears */}
      <ellipse cx="20" cy="16" rx="6" ry="10" fill={color} opacity="0.7" />
      <ellipse cx="44" cy="16" rx="6" ry="10" fill={color} opacity="0.7" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="26" r="6" fill="white" />
      <circle cx="38" cy="26" r="6" fill="white" />
      <circle cx="26" cy="28" r="4" fill="black" />
      <circle cx="38" cy="28" r="4" fill="black" />
      <circle cx="27" cy="27" r="1" fill="white" />
      <circle cx="39" cy="27" r="1" fill="white" />
      {/* Nase / Nose */}
      <ellipse cx="32" cy="34" rx="2" ry="1.5" fill="#4B0082" />
      {/* Mund / Mouth */}
      <path d="M28 38 Q32 42 36 38" stroke="#4B0082" strokeWidth="1.5" fill="none" />
      {/* Geister-Glitzer / Ghost sparkles */}
      <circle cx="12" cy="40" r="2" fill="#FFF" opacity="0.5" />
      <circle cx="52" cy="36" r="1.5" fill="#FFF" opacity="0.5" />
      <circle cx="48" cy="48" r="1" fill="#FFF" opacity="0.4" />
    </svg>
  );
}

export function ShadowCat({ size = 64, color = '#2F2F4F' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Schatten-Schweif / Shadow tail */}
      <path d="M8 32 Q4 24 12 20 Q8 28 16 28" fill={color} opacity="0.8" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="44" rx="16" ry="12" fill={color} opacity="0.9" />
      {/* Kopf / Head */}
      <circle cx="48" cy="32" r="14" fill={color} />
      {/* Spitze Ohren / Pointed ears */}
      <polygon points="38,20 34,6 44,16" fill={color} />
      <polygon points="56,18 60,4 62,16" fill={color} />
      {/* Leuchtende Augen / Glowing eyes */}
      <circle cx="44" cy="30" r="5" fill="#FFD700" />
      <circle cx="54" cy="30" r="5" fill="#FFD700" />
      <ellipse cx="44" cy="30" rx="2" ry="4" fill="black" />
      <ellipse cx="54" cy="30" rx="2" ry="4" fill="black" />
      {/* Nase / Nose */}
      <polygon points="49,36 47,40 51,40" fill="#4B0082" />
      {/* Schnurrhaare / Whiskers */}
      <line x1="46" y1="38" x2="38" y2="36" stroke="#666" strokeWidth="1" opacity="0.5" />
      <line x1="46" y1="40" x2="38" y2="42" stroke="#666" strokeWidth="1" opacity="0.5" />
      <line x1="52" y1="38" x2="60" y2="36" stroke="#666" strokeWidth="1" opacity="0.5" />
      <line x1="52" y1="40" x2="60" y2="42" stroke="#666" strokeWidth="1" opacity="0.5" />
      {/* Beine / Legs */}
      <rect x="22" y="52" width="5" height="10" fill={color} rx="2" />
      <rect x="37" y="52" width="5" height="10" fill={color} rx="2" />
      {/* Schatten-Partikel / Shadow particles */}
      <circle cx="20" cy="36" r="2" fill={color} opacity="0.4" />
      <circle cx="56" cy="48" r="1.5" fill={color} opacity="0.3" />
    </svg>
  );
}

export function PhantomJelly({ size = 64, color = '#9932CC' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Geister-Glocke / Ghost bell */}
      <ellipse cx="32" cy="24" rx="18" ry="16" fill={color} opacity="0.6" />
      <ellipse cx="32" cy="28" rx="14" ry="10" fill={color} opacity="0.4" />
      {/* Geister-Tentakel / Ghost tentacles */}
      <path d="M16 36 Q12 48 18 60" stroke={color} strokeWidth="4" fill="none" opacity="0.5" />
      <path d="M24 38 Q22 52 28 64" stroke={color} strokeWidth="4" fill="none" opacity="0.5" />
      <path d="M32 40 Q32 54 32 64" stroke={color} strokeWidth="4" fill="none" opacity="0.5" />
      <path d="M40 38 Q42 52 36 64" stroke={color} strokeWidth="4" fill="none" opacity="0.5" />
      <path d="M48 36 Q52 48 46 60" stroke={color} strokeWidth="4" fill="none" opacity="0.5" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="22" r="5" fill="white" opacity="0.9" />
      <circle cx="38" cy="22" r="5" fill="white" opacity="0.9" />
      <circle cx="26" cy="22" r="3" fill="#4B0082" />
      <circle cx="38" cy="22" r="3" fill="#4B0082" />
      <circle cx="27" cy="21" r="1" fill="white" />
      <circle cx="39" cy="21" r="1" fill="white" />
      {/* Mund / Mouth */}
      <ellipse cx="32" cy="30" rx="3" ry="2" fill="#4B0082" opacity="0.5" />
      {/* Geister-Glitzer / Ghost sparkles */}
      <circle cx="18" cy="16" r="2" fill="#FFF" opacity="0.4" />
      <circle cx="46" cy="14" r="1.5" fill="#FFF" opacity="0.3" />
      <circle cx="32" cy="10" r="1" fill="#FFF" opacity="0.5" />
    </svg>
  );
}

// ----- FEEN-KREATUREN / FAIRY CREATURES -----

export function PixieCat({ size = 64, color = '#FF69B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Feen-Flügel / Fairy wings */}
      <ellipse cx="16" cy="36" rx="10" ry="16" fill="#FFB6C1" opacity="0.6" />
      <ellipse cx="48" cy="36" rx="10" ry="16" fill="#FFB6C1" opacity="0.6" />
      <ellipse cx="12" cy="32" rx="6" ry="10" fill="#FFC0CB" opacity="0.4" />
      <ellipse cx="52" cy="32" rx="6" ry="10" fill="#FFC0CB" opacity="0.4" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="44" rx="12" ry="10" fill={color} />
      {/* Kopf / Head */}
      <circle cx="32" cy="28" r="14" fill={color} />
      {/* Ohren / Ears */}
      <polygon points="22,16 18,4 28,12" fill={color} />
      <polygon points="42,16 46,4 36,12" fill={color} />
      {/* Augen / Eyes */}
      <circle cx="26" cy="26" r="5" fill="white" />
      <circle cx="38" cy="26" r="5" fill="white" />
      <circle cx="26" cy="26" r="3" fill="#9400D3" />
      <circle cx="38" cy="26" r="3" fill="#9400D3" />
      <circle cx="27" cy="25" r="1" fill="white" />
      <circle cx="39" cy="25" r="1" fill="white" />
      {/* Nase / Nose */}
      <polygon points="32,32 30,35 34,35" fill="#FF1493" />
      {/* Wangen / Cheeks */}
      <circle cx="22" cy="32" r="3" fill="#FFB6C1" opacity="0.6" />
      <circle cx="42" cy="32" r="3" fill="#FFB6C1" opacity="0.6" />
      {/* Schnurrhaare / Whiskers */}
      <line x1="28" y1="33" x2="18" y2="31" stroke="#FFC0CB" strokeWidth="1" />
      <line x1="28" y1="35" x2="18" y2="37" stroke="#FFC0CB" strokeWidth="1" />
      <line x1="36" y1="33" x2="46" y2="31" stroke="#FFC0CB" strokeWidth="1" />
      <line x1="36" y1="35" x2="46" y2="37" stroke="#FFC0CB" strokeWidth="1" />
      {/* Schweif / Tail */}
      <path d="M44 48 Q56 44 52 36 Q60 40 56 48" fill={color} />
      {/* Glitzer / Sparkles */}
      <circle cx="10" cy="24" r="1.5" fill="#FFD700" />
      <circle cx="54" cy="24" r="1" fill="#FFD700" />
      <circle cx="32" cy="10" r="1" fill="#FFD700" />
    </svg>
  );
}

export function StarBunny({ size = 64, color = '#FFD700' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Stern-Aura / Star aura */}
      <circle cx="32" cy="32" r="30" fill={color} opacity="0.15" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="44" rx="14" ry="12" fill="#FFFACD" />
      {/* Kopf / Head */}
      <circle cx="32" cy="26" r="16" fill="#FFFACD" />
      {/* Stern-Ohren / Star ears */}
      <polygon points="18,8 20,0 22,8 16,4 24,4" fill={color} />
      <polygon points="42,8 44,0 46,8 40,4 48,4" fill={color} />
      {/* Augen / Eyes */}
      <circle cx="26" cy="24" r="5" fill="white" />
      <circle cx="38" cy="24" r="5" fill="white" />
      <circle cx="26" cy="24" r="3" fill="#FFD700" />
      <circle cx="38" cy="24" r="3" fill="#FFD700" />
      <polygon points="26,24 25,22 27,22" fill="black" />
      <polygon points="38,24 37,22 39,22" fill="black" />
      {/* Nase / Nose */}
      <ellipse cx="32" cy="30" rx="2" ry="1.5" fill="#FFB6C1" />
      {/* Mund / Mouth */}
      <path d="M30 34 L32 37 L34 34" stroke="#FFB6C1" strokeWidth="1" fill="none" />
      {/* Wangen / Cheeks */}
      <polygon points="18,28 16,26 20,26" fill="#FFB6C1" opacity="0.6" />
      <polygon points="46,28 44,26 48,26" fill="#FFB6C1" opacity="0.6" />
      {/* Füße / Feet */}
      <ellipse cx="24" cy="56" rx="6" ry="3" fill="#FFFACD" />
      <ellipse cx="40" cy="56" rx="6" ry="3" fill="#FFFACD" />
      {/* Sterne / Stars */}
      <polygon points="8,44 9,42 10,44 8,43 10,43" fill={color} />
      <polygon points="56,38 57,36 58,38 56,37 58,37" fill={color} />
      <polygon points="52,52 53,50 54,52 52,51 54,51" fill={color} />
    </svg>
  );
}

export function MoonOwl({ size = 64, color = '#4B0082' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Mond-Aura / Moon aura */}
      <circle cx="32" cy="32" r="28" fill="#E6E6FA" opacity="0.2" />
      {/* Flügel / Wings */}
      <ellipse cx="12" cy="40" rx="10" ry="14" fill={color} />
      <ellipse cx="52" cy="40" rx="10" ry="14" fill={color} />
      {/* Körper / Body */}
      <ellipse cx="32" cy="42" rx="16" ry="14" fill={color} />
      <ellipse cx="32" cy="46" rx="10" ry="8" fill="#E6E6FA" />
      {/* Kopf / Head */}
      <circle cx="32" cy="24" r="16" fill={color} />
      {/* Ohr-Büschel / Ear tufts */}
      <polygon points="18,12 14,2 24,8" fill={color} />
      <polygon points="46,12 50,2 40,8" fill={color} />
      {/* Augen / Eyes - groß */}
      <circle cx="24" cy="24" r="8" fill="#FFD700" />
      <circle cx="40" cy="24" r="8" fill="#FFD700" />
      <circle cx="24" cy="24" r="4" fill="black" />
      <circle cx="40" cy="24" r="4" fill="black" />
      <circle cx="26" cy="22" r="2" fill="white" />
      <circle cx="42" cy="22" r="2" fill="white" />
      {/* Schnabel / Beak */}
      <polygon points="32,32 28,38 36,38" fill="#FFA500" />
      {/* Mond-Stirn / Moon forehead */}
      <path d="M28 14 Q32 10 36 14" stroke="#FFD700" strokeWidth="2" fill="none" />
      {/* Füße / Feet */}
      <path d="M26 56 L22 62 L26 60 L30 62 L26 56" fill="#FFA500" />
      <path d="M38 56 L34 62 L38 60 L42 62 L38 56" fill="#FFA500" />
      {/* Sterne / Stars */}
      <circle cx="6" cy="20" r="1" fill="#FFD700" />
      <circle cx="58" cy="18" r="1.5" fill="#FFD700" />
    </svg>
  );
}

// ----- DRACHEN-KREATUREN / DRAGON CREATURES -----

export function BabyDragon({ size = 64, color = '#9400D3' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Kleine Flügel / Small wings */}
      <ellipse cx="16" cy="34" rx="10" ry="8" fill={color} opacity="0.7" />
      <ellipse cx="48" cy="34" rx="10" ry="8" fill={color} opacity="0.7" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="44" rx="14" ry="12" fill={color} />
      {/* Bauch / Belly */}
      <ellipse cx="32" cy="46" rx="8" ry="6" fill="#DDA0DD" />
      {/* Kopf / Head */}
      <circle cx="32" cy="26" r="14" fill={color} />
      {/* Hörner / Horns */}
      <ellipse cx="22" cy="14" rx="3" ry="6" fill="#DDA0DD" />
      <ellipse cx="42" cy="14" rx="3" ry="6" fill="#DDA0DD" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="24" r="5" fill="white" />
      <circle cx="38" cy="24" r="5" fill="white" />
      <circle cx="26" cy="24" r="3" fill="#FF1493" />
      <circle cx="38" cy="24" r="3" fill="#FF1493" />
      <circle cx="27" cy="23" r="1" fill="white" />
      <circle cx="39" cy="23" r="1" fill="white" />
      {/* Nase / Nose */}
      <ellipse cx="32" cy="32" rx="3" ry="2" fill="#8B008B" />
      <circle cx="30" cy="32" r="1" fill="black" />
      <circle cx="34" cy="32" r="1" fill="black" />
      {/* Mund / Mouth */}
      <path d="M28 36 Q32 40 36 36" stroke="#8B008B" strokeWidth="1.5" fill="none" />
      {/* Schweif / Tail */}
      <path d="M46 50 Q56 48 54 40 Q60 44 56 52" fill={color} />
      <polygon points="56,52 60,50 58,56" fill="#DDA0DD" />
      {/* Füße / Feet */}
      <ellipse cx="24" cy="56" rx="5" ry="3" fill={color} />
      <ellipse cx="40" cy="56" rx="5" ry="3" fill={color} />
    </svg>
  );
}

export function CrystalDragon({ size = 64, color = '#00CED1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Kristall-Flügel / Crystal wings */}
      <polygon points="8,36 4,20 16,32 12,16 24,32" fill={color} opacity="0.6" />
      <polygon points="56,36 60,20 48,32 52,16 40,32" fill={color} opacity="0.6" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="44" rx="14" ry="12" fill={color} />
      {/* Kristall-Muster / Crystal pattern */}
      <polygon points="32,36 26,44 32,52 38,44" fill="#E0FFFF" />
      {/* Kopf / Head */}
      <ellipse cx="32" cy="26" rx="12" ry="10" fill={color} />
      {/* Kristall-Hörner / Crystal horns */}
      <polygon points="22,18 18,6 26,14" fill="#E0FFFF" />
      <polygon points="42,18 46,6 38,14" fill="#E0FFFF" />
      {/* Augen / Eyes */}
      <circle cx="28" cy="24" r="4" fill="white" />
      <circle cx="36" cy="24" r="4" fill="white" />
      <circle cx="28" cy="24" r="2" fill="#4169E1" />
      <circle cx="36" cy="24" r="2" fill="#4169E1" />
      {/* Nase / Nose */}
      <ellipse cx="32" cy="30" rx="2" ry="1.5" fill="#008B8B" />
      {/* Schweif / Tail */}
      <polygon points="46,50 56,44 52,52 60,50 50,56" fill={color} />
      {/* Kristall-Spitze / Crystal tip */}
      <polygon points="58,48 64,44 60,52" fill="#E0FFFF" />
      {/* Füße / Feet */}
      <rect x="24" y="52" width="5" height="10" fill={color} rx="2" />
      <rect x="35" y="52" width="5" height="10" fill={color} rx="2" />
      {/* Glitzer / Sparkles */}
      <circle cx="12" cy="28" r="1.5" fill="#FFF" />
      <circle cx="52" cy="28" r="1" fill="#FFF" />
    </svg>
  );
}

// ----- NORMAL-KREATUREN / NORMAL CREATURES -----

export function FluffyPup({ size = 64, color = '#DEB887' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Flauschiger Schweif / Fluffy tail */}
      <circle cx="10" cy="40" r="8" fill={color} />
      <circle cx="6" cy="38" r="6" fill={color} />
      {/* Körper / Body */}
      <ellipse cx="32" cy="42" rx="18" ry="14" fill={color} />
      {/* Flausch-Muster / Fluff pattern */}
      <ellipse cx="32" cy="44" rx="14" ry="10" fill="#F5DEB3" />
      {/* Kopf / Head */}
      <circle cx="48" cy="30" r="16" fill={color} />
      {/* Flausch-Ohren / Fluffy ears */}
      <circle cx="38" cy="16" r="8" fill={color} />
      <circle cx="58" cy="18" r="8" fill={color} />
      <circle cx="38" cy="16" r="5" fill="#F5DEB3" />
      <circle cx="58" cy="18" r="5" fill="#F5DEB3" />
      {/* Augen / Eyes */}
      <circle cx="44" cy="28" r="6" fill="white" />
      <circle cx="54" cy="28" r="6" fill="white" />
      <circle cx="44" cy="28" r="4" fill="#8B4513" />
      <circle cx="54" cy="28" r="4" fill="#8B4513" />
      <circle cx="46" cy="26" r="1.5" fill="white" />
      <circle cx="56" cy="26" r="1.5" fill="white" />
      {/* Nase / Nose */}
      <ellipse cx="49" cy="36" rx="4" ry="3" fill="#1a1a1a" />
      {/* Zunge / Tongue */}
      <ellipse cx="49" cy="42" rx="3" ry="4" fill="#FF69B4" />
      {/* Beine / Legs */}
      <ellipse cx="22" cy="54" rx="6" ry="4" fill={color} />
      <ellipse cx="42" cy="54" rx="6" ry="4" fill={color} />
    </svg>
  );
}

export function CuddleBear({ size = 64, color = '#D2691E' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="32" cy="44" rx="18" ry="16" fill={color} />
      {/* Bauch / Belly */}
      <ellipse cx="32" cy="46" rx="12" ry="10" fill="#DEB887" />
      {/* Kopf / Head */}
      <circle cx="32" cy="22" r="16" fill={color} />
      {/* Ohren / Ears */}
      <circle cx="18" cy="12" r="6" fill={color} />
      <circle cx="46" cy="12" r="6" fill={color} />
      <circle cx="18" cy="12" r="3" fill="#DEB887" />
      <circle cx="46" cy="12" r="3" fill="#DEB887" />
      {/* Schnauze / Snout */}
      <ellipse cx="32" cy="28" rx="6" ry="5" fill="#DEB887" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="20" r="4" fill="white" />
      <circle cx="38" cy="20" r="4" fill="white" />
      <circle cx="26" cy="20" r="2" fill="black" />
      <circle cx="38" cy="20" r="2" fill="black" />
      <circle cx="27" cy="19" r="0.5" fill="white" />
      <circle cx="39" cy="19" r="0.5" fill="white" />
      {/* Nase / Nose */}
      <ellipse cx="32" cy="26" rx="3" ry="2" fill="#1a1a1a" />
      {/* Mund / Mouth */}
      <path d="M30 30 L32 33 L34 30" stroke="#1a1a1a" strokeWidth="1" fill="none" />
      {/* Arme / Arms */}
      <ellipse cx="14" cy="42" rx="6" ry="10" fill={color} />
      <ellipse cx="50" cy="42" rx="6" ry="10" fill={color} />
      {/* Füße / Feet */}
      <ellipse cx="24" cy="58" rx="6" ry="4" fill={color} />
      <ellipse cx="40" cy="58" rx="6" ry="4" fill={color} />
      <ellipse cx="24" cy="58" rx="4" ry="2" fill="#DEB887" />
      <ellipse cx="40" cy="58" rx="4" ry="2" fill="#DEB887" />
    </svg>
  );
}

export function RoundBird({ size = 64, color = '#FF6347' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body - sehr rund */}
      <circle cx="32" cy="36" r="22" fill={color} />
      {/* Bauch / Belly */}
      <ellipse cx="32" cy="42" rx="14" ry="12" fill="#FFE4E1" />
      {/* Kopf-Federn / Head feathers */}
      <ellipse cx="32" cy="12" rx="3" ry="8" fill={color} />
      <ellipse cx="26" cy="14" rx="3" ry="6" fill={color} />
      <ellipse cx="38" cy="14" rx="3" ry="6" fill={color} />
      {/* Augen / Eyes */}
      <circle cx="24" cy="32" r="6" fill="white" />
      <circle cx="40" cy="32" r="6" fill="white" />
      <circle cx="24" cy="32" r="4" fill="black" />
      <circle cx="40" cy="32" r="4" fill="black" />
      <circle cx="26" cy="30" r="1.5" fill="white" />
      <circle cx="42" cy="30" r="1.5" fill="white" />
      {/* Schnabel / Beak */}
      <polygon points="32,40 26,48 38,48" fill="#FFA500" />
      {/* Flügel / Wings */}
      <ellipse cx="12" cy="38" rx="6" ry="10" fill={color} />
      <ellipse cx="52" cy="38" rx="6" ry="10" fill={color} />
      {/* Füße / Feet */}
      <path d="M26 58 L22 64 L26 62 L30 64 L26 58" fill="#FFA500" />
      <path d="M38 58 L34 64 L38 62 L42 64 L38 58" fill="#FFA500" />
      {/* Wangen / Cheeks */}
      <circle cx="18" cy="40" r="4" fill="#FFB6C1" opacity="0.5" />
      <circle cx="46" cy="40" r="4" fill="#FFB6C1" opacity="0.5" />
    </svg>
  );
}
