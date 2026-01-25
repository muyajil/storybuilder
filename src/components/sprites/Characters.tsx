/**
 * CHARAKTER-SPRITES / CHARACTER SPRITES
 * =====================================
 * Menschen, Fahrzeuge und mehr!
 * People, vehicles and more!
 */

interface SpriteProps {
  size?: number;
  color?: string;
  flip?: boolean;
}

// ===== MENSCHEN / PEOPLE =====

export function Kid({ size = 64, color = '#FFB6C1', hairColor = '#8B4513' }: SpriteProps & { hairColor?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Haare / Hair */}
      <circle cx="32" cy="16" r="14" fill={hairColor} />
      {/* Kopf / Head */}
      <circle cx="32" cy="18" r="12" fill="#FFDAB9" />
      {/* Augen / Eyes */}
      <circle cx="28" cy="16" r="2" fill="black" />
      <circle cx="36" cy="16" r="2" fill="black" />
      {/* Mund / Mouth */}
      <path d="M28 22 Q32 26 36 22" stroke="black" strokeWidth="1" fill="none" />
      {/* Körper / Body */}
      <rect x="24" y="30" width="16" height="20" fill={color} rx="4" />
      {/* Arme / Arms */}
      <rect x="14" y="32" width="10" height="6" fill={color} rx="3" />
      <rect x="40" y="32" width="10" height="6" fill={color} rx="3" />
      {/* Hände / Hands */}
      <circle cx="14" cy="35" r="4" fill="#FFDAB9" />
      <circle cx="50" cy="35" r="4" fill="#FFDAB9" />
      {/* Beine / Legs */}
      <rect x="24" y="50" width="6" height="14" fill="#4169E1" rx="2" />
      <rect x="34" y="50" width="6" height="14" fill="#4169E1" rx="2" />
      {/* Schuhe / Shoes */}
      <ellipse cx="27" cy="62" rx="5" ry="3" fill="black" />
      <ellipse cx="37" cy="62" rx="5" ry="3" fill="black" />
    </svg>
  );
}

export function Girl({ size = 64, color = '#FF69B4', hairColor = '#FFD700' }: SpriteProps & { hairColor?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Haare / Hair */}
      <ellipse cx="32" cy="20" rx="16" ry="18" fill={hairColor} />
      <ellipse cx="18" cy="28" rx="4" ry="12" fill={hairColor} />
      <ellipse cx="46" cy="28" rx="4" ry="12" fill={hairColor} />
      {/* Kopf / Head */}
      <circle cx="32" cy="18" r="12" fill="#FFDAB9" />
      {/* Augen / Eyes */}
      <circle cx="28" cy="16" r="2" fill="black" />
      <circle cx="36" cy="16" r="2" fill="black" />
      {/* Wimpern / Eyelashes */}
      <line x1="26" y1="14" x2="24" y2="12" stroke="black" strokeWidth="1" />
      <line x1="38" y1="14" x2="40" y2="12" stroke="black" strokeWidth="1" />
      {/* Mund / Mouth */}
      <path d="M28 22 Q32 26 36 22" stroke="#FF69B4" strokeWidth="1" fill="none" />
      {/* Kleid / Dress */}
      <path d="M24 30 L20 54 L44 54 L40 30 Z" fill={color} />
      {/* Arme / Arms */}
      <rect x="12" y="32" width="12" height="5" fill={color} rx="2" />
      <rect x="40" y="32" width="12" height="5" fill={color} rx="2" />
      {/* Hände / Hands */}
      <circle cx="12" cy="35" r="4" fill="#FFDAB9" />
      <circle cx="52" cy="35" r="4" fill="#FFDAB9" />
      {/* Beine / Legs */}
      <rect x="26" y="54" width="4" height="8" fill="#FFDAB9" />
      <rect x="34" y="54" width="4" height="8" fill="#FFDAB9" />
      {/* Schuhe / Shoes */}
      <ellipse cx="28" cy="62" rx="4" ry="2" fill="black" />
      <ellipse cx="36" cy="62" rx="4" ry="2" fill="black" />
    </svg>
  );
}

export function Boy({ size = 64, color = '#4169E1', hairColor = '#8B4513' }: SpriteProps & { hairColor?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Haare / Hair */}
      <rect x="20" y="6" width="24" height="12" fill={hairColor} rx="4" />
      {/* Kopf / Head */}
      <circle cx="32" cy="18" r="12" fill="#FFDAB9" />
      {/* Augen / Eyes */}
      <circle cx="28" cy="16" r="2" fill="black" />
      <circle cx="36" cy="16" r="2" fill="black" />
      {/* Mund / Mouth */}
      <path d="M28 22 Q32 24 36 22" stroke="black" strokeWidth="1" fill="none" />
      {/* T-Shirt */}
      <rect x="22" y="30" width="20" height="18" fill={color} rx="2" />
      {/* Arme / Arms */}
      <rect x="12" y="30" width="10" height="6" fill={color} rx="2" />
      <rect x="42" y="30" width="10" height="6" fill={color} rx="2" />
      {/* Hände / Hands */}
      <circle cx="12" cy="33" r="4" fill="#FFDAB9" />
      <circle cx="52" cy="33" r="4" fill="#FFDAB9" />
      {/* Hose / Pants */}
      <rect x="22" y="48" width="20" height="8" fill="#2F4F4F" />
      {/* Beine / Legs */}
      <rect x="24" y="54" width="6" height="8" fill="#2F4F4F" />
      <rect x="34" y="54" width="6" height="8" fill="#2F4F4F" />
      {/* Schuhe / Shoes */}
      <ellipse cx="27" cy="62" rx="5" ry="3" fill="#8B4513" />
      <ellipse cx="37" cy="62" rx="5" ry="3" fill="#8B4513" />
    </svg>
  );
}

// ===== FAHRZEUGE / VEHICLES =====

export function Car({ size = 64, color = '#FF0000' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Karosserie / Body */}
      <rect x="4" y="28" width="56" height="20" fill={color} rx="4" />
      {/* Dach / Roof */}
      <path d="M16 28 L24 14 L44 14 L52 28" fill={color} />
      {/* Fenster / Windows */}
      <path d="M18 26 L24 16 L32 16 L32 26" fill="#87CEEB" />
      <path d="M34 26 L34 16 L44 16 L50 26" fill="#87CEEB" />
      {/* Räder / Wheels */}
      <circle cx="16" cy="48" r="8" fill="#333" />
      <circle cx="48" cy="48" r="8" fill="#333" />
      <circle cx="16" cy="48" r="4" fill="#666" />
      <circle cx="48" cy="48" r="4" fill="#666" />
      {/* Scheinwerfer / Headlights */}
      <rect x="4" y="32" width="4" height="4" fill="#FFFF00" rx="1" />
      <rect x="56" y="32" width="4" height="4" fill="#FF0000" rx="1" />
    </svg>
  );
}

export function Truck({ size = 64, color = '#4169E1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Laderaum / Cargo */}
      <rect x="4" y="16" width="36" height="32" fill="#808080" />
      {/* Führerhaus / Cabin */}
      <rect x="40" y="24" width="20" height="24" fill={color} rx="2" />
      {/* Fenster / Window */}
      <rect x="44" y="28" width="12" height="10" fill="#87CEEB" />
      {/* Räder / Wheels */}
      <circle cx="16" cy="52" r="8" fill="#333" />
      <circle cx="52" cy="52" r="8" fill="#333" />
      <circle cx="16" cy="52" r="4" fill="#666" />
      <circle cx="52" cy="52" r="4" fill="#666" />
      {/* Scheinwerfer / Headlight */}
      <rect x="56" y="36" width="4" height="4" fill="#FFFF00" />
    </svg>
  );
}

export function Plane({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Rumpf / Body */}
      <ellipse cx="32" cy="32" rx="28" ry="8" fill={color} />
      {/* Nase / Nose */}
      <ellipse cx="58" cy="32" rx="6" ry="4" fill={color} />
      {/* Cockpit / Cockpit */}
      <ellipse cx="50" cy="30" rx="8" ry="4" fill="#87CEEB" />
      {/* Flügel / Wings */}
      <polygon points="24,32 32,8 40,32" fill={color} />
      <polygon points="24,32 32,56 40,32" fill={color} />
      {/* Heck / Tail */}
      <polygon points="4,32 8,20 12,32" fill={color} />
      {/* Triebwerke / Engines */}
      <ellipse cx="28" cy="20" rx="4" ry="6" fill="#333" />
      <ellipse cx="28" cy="44" rx="4" ry="6" fill="#333" />
      {/* Fenster / Windows */}
      <circle cx="44" cy="32" r="2" fill="#87CEEB" />
      <circle cx="38" cy="32" r="2" fill="#87CEEB" />
      <circle cx="32" cy="32" r="2" fill="#87CEEB" />
    </svg>
  );
}

export function Boat({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Rumpf / Hull */}
      <path d="M8 40 L16 56 L48 56 L56 40 Z" fill={color} />
      {/* Deck */}
      <rect x="12" y="36" width="40" height="6" fill="#DEB887" />
      {/* Kabine / Cabin */}
      <rect x="20" y="24" width="20" height="12" fill="white" />
      <rect x="24" y="28" width="6" height="6" fill="#87CEEB" />
      <rect x="34" y="28" width="6" height="6" fill="#87CEEB" />
      {/* Mast */}
      <rect x="30" y="8" width="4" height="16" fill="#8B4513" />
      {/* Flagge / Flag */}
      <polygon points="34,8 46,14 34,20" fill="#FF0000" />
    </svg>
  );
}

export function Rocket({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Spitze / Nose */}
      <polygon points="32,0 24,20 40,20" fill="#FF0000" />
      {/* Rumpf / Body */}
      <rect x="24" y="20" width="16" height="32" fill={color} />
      {/* Fenster / Window */}
      <circle cx="32" cy="32" r="6" fill="#87CEEB" />
      <circle cx="32" cy="32" r="4" fill="#4169E1" />
      {/* Flossen / Fins */}
      <polygon points="24,44 16,56 24,52" fill="#FF0000" />
      <polygon points="40,44 48,56 40,52" fill="#FF0000" />
      {/* Triebwerk / Engine */}
      <rect x="26" y="52" width="12" height="4" fill="#333" />
      {/* Flamme / Flame */}
      <polygon points="28,56 32,64 36,56" fill="#FFA500" />
      <polygon points="30,56 32,62 34,56" fill="#FFFF00" />
    </svg>
  );
}

export function Helicopter({ size = 64, color = '#FF6347' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Hauptrotor / Main rotor */}
      <rect x="8" y="10" width="48" height="4" fill="#333" rx="2" />
      <rect x="30" y="8" width="4" height="8" fill="#333" />
      {/* Rumpf / Body */}
      <ellipse cx="32" cy="32" rx="20" ry="14" fill={color} />
      {/* Cockpit */}
      <ellipse cx="44" cy="30" rx="10" ry="8" fill="#87CEEB" />
      {/* Heck / Tail */}
      <rect x="4" y="28" width="16" height="6" fill={color} />
      {/* Heckrotor / Tail rotor */}
      <ellipse cx="6" cy="24" rx="4" ry="8" fill="#333" />
      {/* Kufen / Skids */}
      <rect x="16" y="44" width="32" height="2" fill="#333" />
      <rect x="18" y="40" width="2" height="6" fill="#333" />
      <rect x="44" y="40" width="2" height="6" fill="#333" />
    </svg>
  );
}

// ===== FANTASY / FANTASY =====

export function Dragon({ size = 64, color = '#228B22' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="32" cy="40" rx="20" ry="14" fill={color} />
      {/* Kopf / Head */}
      <ellipse cx="52" cy="28" rx="12" ry="10" fill={color} />
      {/* Schnauze / Snout */}
      <ellipse cx="60" cy="30" rx="6" ry="4" fill={color} />
      {/* Augen / Eyes */}
      <circle cx="54" cy="26" r="3" fill="#FFD700" />
      <circle cx="55" cy="26" r="1.5" fill="black" />
      {/* Hörner / Horns */}
      <polygon points="48,20 44,10 50,18" fill="#8B4513" />
      <polygon points="56,18 58,8 60,16" fill="#8B4513" />
      {/* Flügel / Wings */}
      <path d="M24 40 L8 20 L16 28 L12 16 L22 26 L20 14 L28 32" fill={color} opacity="0.8" />
      <path d="M40 40 L56 60 L48 52 L52 64 L42 54 L44 66 L36 48" fill={color} opacity="0.8" />
      {/* Schwanz / Tail */}
      <path d="M12 40 Q0 36 4 28 L8 32" fill={color} />
      {/* Feuer / Fire */}
      <ellipse cx="64" cy="32" rx="4" ry="6" fill="#FF4500" />
      <ellipse cx="64" cy="32" rx="2" ry="4" fill="#FFFF00" />
      {/* Bauch / Belly */}
      <ellipse cx="32" cy="44" rx="14" ry="8" fill="#90EE90" />
    </svg>
  );
}

export function Unicorn({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <ellipse cx="32" cy="40" rx="18" ry="12" fill={color} />
      {/* Kopf / Head */}
      <ellipse cx="50" cy="24" rx="10" ry="12" fill={color} />
      {/* Horn */}
      <polygon points="54,8 52,24 56,24" fill="#FFD700" />
      {/* Mähne / Mane */}
      <path d="M44 16 Q38 20 40 28 Q36 24 38 32" stroke="#FF69B4" strokeWidth="4" fill="none" />
      {/* Auge / Eye */}
      <circle cx="54" cy="22" r="3" fill="black" />
      <circle cx="55" cy="21" r="1" fill="white" />
      {/* Beine / Legs */}
      <rect x="20" y="48" width="4" height="14" fill={color} />
      <rect x="28" y="48" width="4" height="14" fill={color} />
      <rect x="36" y="48" width="4" height="14" fill={color} />
      <rect x="44" y="48" width="4" height="14" fill={color} />
      {/* Hufe / Hooves */}
      <rect x="19" y="60" width="6" height="4" fill="#FFD700" rx="1" />
      <rect x="27" y="60" width="6" height="4" fill="#FFD700" rx="1" />
      <rect x="35" y="60" width="6" height="4" fill="#FFD700" rx="1" />
      <rect x="43" y="60" width="6" height="4" fill="#FFD700" rx="1" />
      {/* Schweif / Tail */}
      <path d="M14 40 Q6 36 8 44 Q4 40 6 48" stroke="#FF69B4" strokeWidth="4" fill="none" />
    </svg>
  );
}

export function Robot({ size = 64, color = '#C0C0C0' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Antenne / Antenna */}
      <rect x="30" y="2" width="4" height="8" fill="#333" />
      <circle cx="32" cy="2" r="3" fill="#FF0000" />
      {/* Kopf / Head */}
      <rect x="18" y="10" width="28" height="20" fill={color} rx="4" />
      {/* Augen / Eyes */}
      <rect x="22" y="16" width="8" height="6" fill="#00FF00" rx="1" />
      <rect x="34" y="16" width="8" height="6" fill="#00FF00" rx="1" />
      {/* Mund / Mouth */}
      <rect x="24" y="24" width="16" height="2" fill="#333" />
      {/* Körper / Body */}
      <rect x="16" y="32" width="32" height="20" fill={color} rx="2" />
      {/* Brust-Panel / Chest panel */}
      <rect x="22" y="36" width="20" height="12" fill="#333" />
      <circle cx="28" cy="42" r="3" fill="#FF0000" />
      <circle cx="36" cy="42" r="3" fill="#00FF00" />
      {/* Arme / Arms */}
      <rect x="6" y="34" width="10" height="6" fill={color} rx="2" />
      <rect x="48" y="34" width="10" height="6" fill={color} rx="2" />
      <circle cx="6" cy="37" r="4" fill="#666" />
      <circle cx="58" cy="37" r="4" fill="#666" />
      {/* Beine / Legs */}
      <rect x="20" y="52" width="8" height="12" fill={color} rx="2" />
      <rect x="36" y="52" width="8" height="12" fill={color} rx="2" />
    </svg>
  );
}

export function Alien({ size = 64, color = '#90EE90' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Kopf / Head */}
      <ellipse cx="32" cy="24" rx="20" ry="22" fill={color} />
      {/* Augen / Eyes */}
      <ellipse cx="24" cy="24" rx="8" ry="10" fill="black" />
      <ellipse cx="40" cy="24" rx="8" ry="10" fill="black" />
      <ellipse cx="24" cy="24" rx="4" ry="6" fill="#90EE90" />
      <ellipse cx="40" cy="24" rx="4" ry="6" fill="#90EE90" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="52" rx="12" ry="10" fill={color} />
      {/* Arme / Arms */}
      <path d="M20 44 Q8 40 6 52" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M44 44 Q56 40 58 52" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Finger / Fingers */}
      <circle cx="4" cy="52" r="3" fill={color} />
      <circle cx="8" cy="56" r="3" fill={color} />
      <circle cx="60" cy="52" r="3" fill={color} />
      <circle cx="56" cy="56" r="3" fill={color} />
    </svg>
  );
}

// ===== BERUFE / PROFESSIONS =====

export function Doctor({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Haare / Hair */}
      <circle cx="32" cy="14" r="12" fill="#333" />
      {/* Kopf / Head */}
      <circle cx="32" cy="16" r="10" fill="#FFDAB9" />
      {/* Augen / Eyes */}
      <circle cx="28" cy="14" r="2" fill="black" />
      <circle cx="36" cy="14" r="2" fill="black" />
      {/* Mund / Mouth */}
      <path d="M28 20 Q32 22 36 20" stroke="black" strokeWidth="1" fill="none" />
      {/* Stethoskop um Hals / Stethoscope */}
      <path d="M24 26 Q24 32 28 34 L36 34 Q40 32 40 26" stroke="#333" strokeWidth="2" fill="none" />
      {/* Kittel / Coat */}
      <rect x="20" y="26" width="24" height="24" fill={color} rx="2" />
      {/* Knöpfe / Buttons */}
      <circle cx="32" cy="34" r="2" fill="#333" />
      <circle cx="32" cy="42" r="2" fill="#333" />
      {/* Arme / Arms */}
      <rect x="10" y="28" width="10" height="6" fill={color} rx="2" />
      <rect x="44" y="28" width="10" height="6" fill={color} rx="2" />
      {/* Hände / Hands */}
      <circle cx="10" cy="31" r="4" fill="#FFDAB9" />
      <circle cx="54" cy="31" r="4" fill="#FFDAB9" />
      {/* Beine / Legs */}
      <rect x="22" y="50" width="8" height="12" fill="#4169E1" rx="2" />
      <rect x="34" y="50" width="8" height="12" fill="#4169E1" rx="2" />
      {/* Schuhe / Shoes */}
      <ellipse cx="26" cy="62" rx="5" ry="2" fill="white" />
      <ellipse cx="38" cy="62" rx="5" ry="2" fill="white" />
    </svg>
  );
}

export function Firefighter({ size = 64, color = '#B22222' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Helm / Helmet */}
      <ellipse cx="32" cy="12" rx="14" ry="10" fill="#FFD700" />
      <rect x="18" y="10" width="28" height="8" fill="#FFD700" />
      {/* Helm-Schild / Helmet badge */}
      <rect x="28" y="8" width="8" height="6" fill={color} />
      {/* Kopf / Head */}
      <circle cx="32" cy="20" r="8" fill="#FFDAB9" />
      {/* Augen / Eyes */}
      <circle cx="29" cy="19" r="2" fill="black" />
      <circle cx="35" cy="19" r="2" fill="black" />
      {/* Jacke / Jacket */}
      <rect x="18" y="28" width="28" height="22" fill={color} rx="2" />
      {/* Gelbe Streifen / Yellow stripes */}
      <rect x="18" y="36" width="28" height="3" fill="#FFD700" />
      <rect x="18" y="44" width="28" height="3" fill="#FFD700" />
      {/* Arme / Arms */}
      <rect x="8" y="30" width="10" height="8" fill={color} rx="2" />
      <rect x="46" y="30" width="10" height="8" fill={color} rx="2" />
      {/* Handschuhe / Gloves */}
      <rect x="6" y="38" width="8" height="6" fill="#FFD700" rx="2" />
      <rect x="50" y="38" width="8" height="6" fill="#FFD700" rx="2" />
      {/* Beine / Legs */}
      <rect x="22" y="50" width="8" height="12" fill={color} rx="2" />
      <rect x="34" y="50" width="8" height="12" fill={color} rx="2" />
      {/* Stiefel / Boots */}
      <rect x="20" y="58" width="10" height="6" fill="#333" rx="2" />
      <rect x="34" y="58" width="10" height="6" fill="#333" rx="2" />
    </svg>
  );
}

export function Police({ size = 64, color = '#191970' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Mütze / Cap */}
      <ellipse cx="32" cy="10" rx="12" ry="6" fill={color} />
      <rect x="20" y="6" width="24" height="6" fill={color} />
      {/* Abzeichen / Badge on cap */}
      <circle cx="32" cy="8" r="3" fill="#FFD700" />
      {/* Kopf / Head */}
      <circle cx="32" cy="18" r="10" fill="#FFDAB9" />
      {/* Augen / Eyes */}
      <circle cx="28" cy="16" r="2" fill="black" />
      <circle cx="36" cy="16" r="2" fill="black" />
      {/* Mund / Mouth */}
      <path d="M28 22 Q32 24 36 22" stroke="black" strokeWidth="1" fill="none" />
      {/* Uniform */}
      <rect x="20" y="28" width="24" height="22" fill={color} rx="2" />
      {/* Abzeichen / Badge */}
      <polygon points="32,32 28,38 32,42 36,38" fill="#FFD700" />
      {/* Arme / Arms */}
      <rect x="10" y="30" width="10" height="6" fill={color} rx="2" />
      <rect x="44" y="30" width="10" height="6" fill={color} rx="2" />
      {/* Hände / Hands */}
      <circle cx="10" cy="33" r="4" fill="#FFDAB9" />
      <circle cx="54" cy="33" r="4" fill="#FFDAB9" />
      {/* Gürtel / Belt */}
      <rect x="20" y="46" width="24" height="4" fill="#333" />
      <rect x="30" y="45" width="4" height="6" fill="#FFD700" />
      {/* Beine / Legs */}
      <rect x="22" y="50" width="8" height="12" fill={color} rx="2" />
      <rect x="34" y="50" width="8" height="12" fill={color} rx="2" />
      {/* Schuhe / Shoes */}
      <ellipse cx="26" cy="62" rx="5" ry="2" fill="black" />
      <ellipse cx="38" cy="62" rx="5" ry="2" fill="black" />
    </svg>
  );
}

export function Chef({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Kochmütze / Chef hat */}
      <ellipse cx="32" cy="12" rx="14" ry="8" fill={color} />
      <rect x="20" y="8" width="24" height="12" fill={color} />
      <circle cx="24" cy="8" r="6" fill={color} />
      <circle cx="32" cy="6" r="6" fill={color} />
      <circle cx="40" cy="8" r="6" fill={color} />
      {/* Kopf / Head */}
      <circle cx="32" cy="22" r="8" fill="#FFDAB9" />
      {/* Augen / Eyes */}
      <circle cx="29" cy="21" r="2" fill="black" />
      <circle cx="35" cy="21" r="2" fill="black" />
      {/* Schnurrbart / Mustache */}
      <path d="M26 26 Q32 28 38 26" stroke="#333" strokeWidth="2" fill="none" />
      {/* Jacke / Jacket */}
      <rect x="18" y="30" width="28" height="20" fill={color} rx="2" />
      {/* Doppelreihe Knöpfe / Double row buttons */}
      <circle cx="26" cy="36" r="2" fill="#333" />
      <circle cx="26" cy="44" r="2" fill="#333" />
      <circle cx="38" cy="36" r="2" fill="#333" />
      <circle cx="38" cy="44" r="2" fill="#333" />
      {/* Arme / Arms */}
      <rect x="8" y="32" width="10" height="6" fill={color} rx="2" />
      <rect x="46" y="32" width="10" height="6" fill={color} rx="2" />
      {/* Hände / Hands */}
      <circle cx="8" cy="35" r="4" fill="#FFDAB9" />
      <circle cx="56" cy="35" r="4" fill="#FFDAB9" />
      {/* Schürze / Apron */}
      <rect x="22" y="44" width="20" height="14" fill="#333" />
      {/* Beine / Legs */}
      <rect x="24" y="54" width="6" height="10" fill="#333" rx="2" />
      <rect x="34" y="54" width="6" height="10" fill="#333" rx="2" />
    </svg>
  );
}

export function Pirate({ size = 64, color = '#8B0000' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Bandana / Bandana */}
      <ellipse cx="32" cy="12" rx="14" ry="8" fill={color} />
      <path d="M18 12 L14 20" stroke={color} strokeWidth="3" />
      {/* Kopf / Head */}
      <circle cx="32" cy="18" r="10" fill="#FFDAB9" />
      {/* Augenklappe / Eye patch */}
      <circle cx="38" cy="16" r="4" fill="black" />
      <line x1="34" y1="12" x2="42" y2="12" stroke="black" strokeWidth="2" />
      {/* Auge / Eye */}
      <circle cx="26" cy="16" r="2" fill="black" />
      {/* Bart / Beard */}
      <path d="M22 22 Q32 32 42 22" fill="#333" />
      {/* Weste / Vest */}
      <rect x="20" y="28" width="24" height="20" fill={color} rx="2" />
      {/* Hemd / Shirt */}
      <path d="M28 28 L28 48 L36 48 L36 28" fill="white" />
      {/* Gürtel / Belt */}
      <rect x="18" y="44" width="28" height="4" fill="#8B4513" />
      <rect x="30" y="43" width="4" height="6" fill="#FFD700" />
      {/* Arme / Arms */}
      <rect x="8" y="30" width="12" height="6" fill="white" rx="2" />
      <rect x="44" y="30" width="12" height="6" fill="white" rx="2" />
      {/* Hände / Hands */}
      <circle cx="8" cy="33" r="4" fill="#FFDAB9" />
      {/* Haken / Hook */}
      <path d="M56 33 Q60 33 60 38 Q60 42 56 42" stroke="#C0C0C0" strokeWidth="3" fill="none" />
      {/* Beine / Legs */}
      <rect x="22" y="48" width="8" height="12" fill="#333" rx="2" />
      <rect x="34" y="48" width="8" height="8" fill="#333" rx="2" />
      {/* Holzbein / Peg leg */}
      <rect x="36" y="56" width="4" height="8" fill="#8B4513" />
    </svg>
  );
}

export function Ninja({ size = 64, color = '#1a1a1a' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Kapuze / Hood */}
      <circle cx="32" cy="18" r="14" fill={color} />
      {/* Augen-Schlitz / Eye slit */}
      <rect x="20" y="14" width="24" height="8" fill="#FFDAB9" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="18" r="2" fill="black" />
      <circle cx="38" cy="18" r="2" fill="black" />
      {/* Körper / Body */}
      <rect x="20" y="32" width="24" height="20" fill={color} rx="2" />
      {/* Gürtel / Belt */}
      <rect x="18" y="40" width="28" height="4" fill="#8B0000" />
      {/* Arme / Arms */}
      <rect x="8" y="32" width="12" height="5" fill={color} rx="2" />
      <rect x="44" y="32" width="12" height="5" fill={color} rx="2" />
      {/* Hände / Hands */}
      <circle cx="8" cy="34" r="4" fill={color} />
      <circle cx="56" cy="34" r="4" fill={color} />
      {/* Schwert / Sword on back */}
      <rect x="44" y="8" width="3" height="36" fill="#C0C0C0" />
      <rect x="42" y="8" width="7" height="6" fill="#8B4513" />
      {/* Beine / Legs */}
      <rect x="22" y="52" width="8" height="12" fill={color} rx="2" />
      <rect x="34" y="52" width="8" height="12" fill={color} rx="2" />
    </svg>
  );
}

export function Astronaut({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Helm / Helmet */}
      <circle cx="32" cy="18" r="16" fill={color} />
      {/* Visier / Visor */}
      <ellipse cx="32" cy="18" rx="10" ry="8" fill="#4169E1" opacity="0.7" />
      {/* Gesicht / Face */}
      <circle cx="32" cy="18" r="8" fill="#FFDAB9" />
      <circle cx="29" cy="17" r="1.5" fill="black" />
      <circle cx="35" cy="17" r="1.5" fill="black" />
      {/* Anzug / Suit */}
      <rect x="18" y="34" width="28" height="22" fill={color} rx="4" />
      {/* Brust-Kontrollen / Chest controls */}
      <rect x="24" y="38" width="16" height="10" fill="#333" rx="2" />
      <circle cx="28" cy="42" r="2" fill="#FF0000" />
      <circle cx="36" cy="42" r="2" fill="#00FF00" />
      <rect x="26" y="44" width="12" height="2" fill="#00BFFF" />
      {/* Arme / Arms */}
      <ellipse cx="12" cy="42" rx="6" ry="10" fill={color} />
      <ellipse cx="52" cy="42" rx="6" ry="10" fill={color} />
      {/* Handschuhe / Gloves */}
      <circle cx="12" cy="52" r="5" fill={color} />
      <circle cx="52" cy="52" r="5" fill={color} />
      {/* Beine / Legs */}
      <ellipse cx="26" cy="60" rx="6" ry="8" fill={color} />
      <ellipse cx="38" cy="60" rx="6" ry="8" fill={color} />
      {/* Rucksack / Backpack */}
      <rect x="8" y="36" width="6" height="16" fill="#C0C0C0" rx="2" />
    </svg>
  );
}

export function Wizard({ size = 64, color = '#4B0082' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Hut / Hat */}
      <polygon points="32,0 18,28 46,28" fill={color} />
      <ellipse cx="32" cy="28" rx="16" ry="4" fill={color} />
      {/* Sterne auf Hut / Stars on hat */}
      <polygon points="28,12 26,16 30,16" fill="#FFD700" />
      <polygon points="36,18 34,22 38,22" fill="#FFD700" />
      {/* Kopf / Head */}
      <circle cx="32" cy="32" r="8" fill="#FFDAB9" />
      {/* Augen / Eyes */}
      <circle cx="29" cy="31" r="2" fill="black" />
      <circle cx="35" cy="31" r="2" fill="black" />
      {/* Bart / Beard */}
      <path d="M24 36 Q32 52 40 36" fill="white" />
      <path d="M26 36 Q32 48 38 36" fill="#E8E8E8" />
      {/* Robe */}
      <path d="M20 40 L16 64 L48 64 L44 40 Z" fill={color} />
      {/* Sterne auf Robe / Stars on robe */}
      <polygon points="28,50 26,54 30,54" fill="#FFD700" />
      <polygon points="38,56 36,60 40,60" fill="#FFD700" />
      {/* Arme / Arms */}
      <path d="M20 42 L8 50" stroke={color} strokeWidth="6" strokeLinecap="round" />
      <path d="M44 42 L56 50" stroke={color} strokeWidth="6" strokeLinecap="round" />
      {/* Zauberstab / Wand */}
      <rect x="54" y="46" width="8" height="3" fill="#8B4513" />
      <polygon points="62,47 64,44 64,50" fill="#FFD700" />
    </svg>
  );
}

export function Fairy({ size = 64, color = '#FF69B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Flügel / Wings */}
      <ellipse cx="16" cy="32" rx="12" ry="20" fill={color} opacity="0.5" />
      <ellipse cx="48" cy="32" rx="12" ry="20" fill={color} opacity="0.5" />
      <ellipse cx="18" cy="32" rx="8" ry="14" fill={color} opacity="0.3" />
      <ellipse cx="46" cy="32" rx="8" ry="14" fill={color} opacity="0.3" />
      {/* Haare / Hair */}
      <ellipse cx="32" cy="18" rx="10" ry="12" fill="#FFD700" />
      {/* Kopf / Head */}
      <circle cx="32" cy="20" r="8" fill="#FFDAB9" />
      {/* Augen / Eyes */}
      <circle cx="29" cy="19" r="2" fill="black" />
      <circle cx="35" cy="19" r="2" fill="black" />
      {/* Mund / Mouth */}
      <path d="M29 23 Q32 25 35 23" stroke="#FF69B4" strokeWidth="1" fill="none" />
      {/* Kleid / Dress */}
      <path d="M26 28 L22 52 L42 52 L38 28 Z" fill={color} />
      {/* Glitzer / Sparkles on dress */}
      <circle cx="30" cy="36" r="1" fill="white" />
      <circle cx="34" cy="42" r="1" fill="white" />
      <circle cx="28" cy="46" r="1" fill="white" />
      {/* Arme / Arms */}
      <path d="M26 30 L18 36" stroke="#FFDAB9" strokeWidth="4" strokeLinecap="round" />
      <path d="M38 30 L46 36" stroke="#FFDAB9" strokeWidth="4" strokeLinecap="round" />
      {/* Zauberstab / Wand */}
      <rect x="44" y="32" width="10" height="2" fill="#FFD700" />
      <polygon points="56,33 60,28 60,38" fill="#FFD700" />
      {/* Beine / Legs */}
      <rect x="28" y="52" width="3" height="8" fill="#FFDAB9" />
      <rect x="33" y="52" width="3" height="8" fill="#FFDAB9" />
      {/* Schuhe / Shoes */}
      <ellipse cx="29" cy="60" rx="3" ry="2" fill={color} />
      <ellipse cx="35" cy="60" rx="3" ry="2" fill={color} />
    </svg>
  );
}

export function Knight({ size = 64, color = '#C0C0C0' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Helm / Helmet */}
      <rect x="20" y="6" width="24" height="24" fill={color} rx="4" />
      {/* Visier-Schlitz / Visor slit */}
      <rect x="22" y="14" width="20" height="4" fill="#333" />
      {/* Helmbusch / Plume */}
      <path d="M32 6 Q40 0 44 6" fill="#FF0000" />
      {/* Rüstung / Armor */}
      <rect x="16" y="30" width="32" height="22" fill={color} rx="2" />
      {/* Brust-Wappen / Chest emblem */}
      <polygon points="32,34 26,44 38,44" fill="#FFD700" />
      {/* Schultern / Shoulders */}
      <ellipse cx="14" cy="34" rx="6" ry="8" fill={color} />
      <ellipse cx="50" cy="34" rx="6" ry="8" fill={color} />
      {/* Arme / Arms */}
      <rect x="6" y="34" width="8" height="16" fill={color} rx="2" />
      <rect x="50" y="34" width="8" height="16" fill={color} rx="2" />
      {/* Handschuhe / Gauntlets */}
      <rect x="4" y="50" width="10" height="6" fill={color} rx="2" />
      <rect x="50" y="50" width="10" height="6" fill={color} rx="2" />
      {/* Schwert / Sword */}
      <rect x="2" y="52" width="16" height="3" fill="#C0C0C0" />
      <rect x="16" y="50" width="4" height="7" fill="#8B4513" />
      {/* Beine / Legs */}
      <rect x="20" y="52" width="10" height="12" fill={color} rx="2" />
      <rect x="34" y="52" width="10" height="12" fill={color} rx="2" />
      {/* Schild / Shield */}
      <ellipse cx="56" cy="44" rx="6" ry="10" fill="#4169E1" />
      <polygon points="56,38 52,48 60,48" fill="#FFD700" />
    </svg>
  );
}

export function Princess({ size = 64, color = '#FF69B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Krone / Crown */}
      <polygon points="20,14 24,6 28,14 32,4 36,14 40,6 44,14" fill="#FFD700" />
      <rect x="20" y="14" width="24" height="4" fill="#FFD700" />
      {/* Juwelen / Jewels */}
      <circle cx="24" cy="10" r="2" fill="#FF0000" />
      <circle cx="32" cy="8" r="2" fill="#00BFFF" />
      <circle cx="40" cy="10" r="2" fill="#FF0000" />
      {/* Haare / Hair */}
      <ellipse cx="32" cy="24" rx="14" ry="16" fill="#FFD700" />
      <ellipse cx="18" cy="32" rx="4" ry="12" fill="#FFD700" />
      <ellipse cx="46" cy="32" rx="4" ry="12" fill="#FFD700" />
      {/* Kopf / Head */}
      <circle cx="32" cy="24" r="10" fill="#FFDAB9" />
      {/* Augen / Eyes */}
      <circle cx="28" cy="22" r="2" fill="black" />
      <circle cx="36" cy="22" r="2" fill="black" />
      {/* Wimpern / Eyelashes */}
      <line x1="26" y1="20" x2="24" y2="18" stroke="black" strokeWidth="1" />
      <line x1="38" y1="20" x2="40" y2="18" stroke="black" strokeWidth="1" />
      {/* Mund / Mouth */}
      <path d="M29 28 Q32 30 35 28" stroke="#FF69B4" strokeWidth="1" fill="none" />
      {/* Kleid / Dress */}
      <path d="M22 34 L14 64 L50 64 L42 34 Z" fill={color} />
      {/* Gürtel / Sash */}
      <rect x="20" y="36" width="24" height="4" fill="#FFD700" />
      {/* Arme / Arms */}
      <path d="M22 36 L12 46" stroke="#FFDAB9" strokeWidth="5" strokeLinecap="round" />
      <path d="M42 36 L52 46" stroke="#FFDAB9" strokeWidth="5" strokeLinecap="round" />
      {/* Hände / Hands */}
      <circle cx="12" cy="46" r="4" fill="#FFDAB9" />
      <circle cx="52" cy="46" r="4" fill="#FFDAB9" />
    </svg>
  );
}

export function Ghost({ size = 64, color = 'white' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Körper / Body */}
      <path d="M16 32 Q16 8 32 8 Q48 8 48 32 L48 56 L42 50 L36 56 L32 50 L28 56 L22 50 L16 56 Z" fill={color} opacity="0.9" />
      {/* Augen / Eyes */}
      <ellipse cx="24" cy="28" rx="6" ry="8" fill="black" />
      <ellipse cx="40" cy="28" rx="6" ry="8" fill="black" />
      <ellipse cx="24" cy="26" rx="3" ry="4" fill="white" />
      <ellipse cx="40" cy="26" rx="3" ry="4" fill="white" />
      {/* Mund / Mouth */}
      <ellipse cx="32" cy="42" rx="6" ry="4" fill="black" />
    </svg>
  );
}

export function Vampire({ size = 64, color = '#2F2F2F' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Haare / Hair */}
      <path d="M18 18 L22 4 L28 16 L32 6 L36 16 L42 4 L46 18" fill="black" />
      <ellipse cx="32" cy="20" rx="14" ry="10" fill="black" />
      {/* Kopf / Head */}
      <circle cx="32" cy="22" r="10" fill="#E8E8E8" />
      {/* Augen / Eyes */}
      <circle cx="28" cy="20" r="3" fill="#FF0000" />
      <circle cx="36" cy="20" r="3" fill="#FF0000" />
      <circle cx="28" cy="20" r="1.5" fill="black" />
      <circle cx="36" cy="20" r="1.5" fill="black" />
      {/* Augenbrauen / Eyebrows */}
      <path d="M24 16 L30 18" stroke="black" strokeWidth="2" />
      <path d="M40 16 L34 18" stroke="black" strokeWidth="2" />
      {/* Mund mit Zähnen / Mouth with fangs */}
      <path d="M26 28 Q32 32 38 28" stroke="#8B0000" strokeWidth="1" fill="none" />
      <polygon points="28,28 26,34 30,28" fill="white" />
      <polygon points="36,28 34,34 38,28" fill="white" />
      {/* Umhang / Cape */}
      <path d="M8 34 Q8 64 32 56 Q56 64 56 34 L48 34 L48 52 Q32 48 16 52 L16 34 Z" fill={color} />
      <path d="M8 34 Q8 64 32 56 Q56 64 56 34 L48 34 L48 52 Q32 48 16 52 L16 34 Z" fill="#8B0000" opacity="0.3" />
      {/* Weste / Vest */}
      <rect x="22" y="32" width="20" height="20" fill={color} />
      {/* Hemd / Shirt */}
      <path d="M28 32 L28 52 L36 52 L36 32" fill="white" />
      {/* Medaillon / Medallion */}
      <circle cx="32" cy="38" r="3" fill="#FFD700" />
    </svg>
  );
}

export function Zombie({ size = 64, color = '#9ACD32' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Haare / Hair */}
      <ellipse cx="32" cy="14" rx="12" ry="8" fill="#556B2F" />
      {/* Kopf / Head */}
      <circle cx="32" cy="18" r="12" fill={color} />
      {/* Augen / Eyes - different sizes */}
      <circle cx="26" cy="16" r="4" fill="white" />
      <circle cx="38" cy="18" r="3" fill="white" />
      <circle cx="26" cy="16" r="2" fill="black" />
      <circle cx="38" cy="18" r="1.5" fill="black" />
      {/* Narbe / Scar */}
      <path d="M36 12 L40 20" stroke="#556B2F" strokeWidth="2" />
      {/* Mund / Mouth */}
      <path d="M24 26 Q32 30 40 26" stroke="#333" strokeWidth="2" fill="none" />
      {/* Zerrissenes Hemd / Torn shirt */}
      <rect x="20" y="30" width="24" height="20" fill="#8B4513" />
      <path d="M20 30 L24 40 L20 50" fill={color} />
      <path d="M44 30 L40 38 L44 50" fill={color} />
      {/* Arme / Arms */}
      <rect x="6" y="32" width="14" height="6" fill={color} rx="2" />
      <rect x="44" y="30" width="14" height="6" fill={color} rx="2" />
      {/* Ausgestreckte Hände / Outstretched hands */}
      <ellipse cx="6" cy="35" rx="5" ry="4" fill={color} />
      <ellipse cx="58" cy="33" rx="5" ry="4" fill={color} />
      {/* Beine / Legs */}
      <rect x="22" y="50" width="8" height="14" fill="#4169E1" rx="2" />
      <rect x="34" y="50" width="8" height="14" fill="#4169E1" rx="2" />
    </svg>
  );
}

// ===== MEHR FAHRZEUGE / MORE VEHICLES =====

export function Bicycle({ size = 64, color = '#FF4500' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Räder / Wheels */}
      <circle cx="14" cy="48" r="12" fill="none" stroke="#333" strokeWidth="3" />
      <circle cx="50" cy="48" r="12" fill="none" stroke="#333" strokeWidth="3" />
      <circle cx="14" cy="48" r="2" fill="#333" />
      <circle cx="50" cy="48" r="2" fill="#333" />
      {/* Rahmen / Frame */}
      <line x1="14" y1="48" x2="32" y2="32" stroke={color} strokeWidth="3" />
      <line x1="32" y1="32" x2="50" y2="48" stroke={color} strokeWidth="3" />
      <line x1="32" y1="32" x2="32" y2="20" stroke={color} strokeWidth="3" />
      <line x1="14" y1="48" x2="32" y2="48" stroke={color} strokeWidth="3" />
      <line x1="32" y1="48" x2="44" y2="32" stroke={color} strokeWidth="3" />
      {/* Lenker / Handlebar */}
      <line x1="28" y1="20" x2="40" y2="20" stroke="#333" strokeWidth="3" />
      <line x1="32" y1="20" x2="44" y2="32" stroke={color} strokeWidth="3" />
      {/* Sattel / Seat */}
      <ellipse cx="26" cy="28" rx="6" ry="3" fill="#333" />
      <line x1="28" y1="28" x2="32" y2="32" stroke={color} strokeWidth="2" />
      {/* Pedale / Pedals */}
      <circle cx="32" cy="48" r="4" fill="#333" />
      <rect x="28" y="50" width="8" height="2" fill="#333" />
    </svg>
  );
}

export function Motorcycle({ size = 64, color = '#1a1a1a' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Räder / Wheels */}
      <circle cx="12" cy="48" r="10" fill="#333" />
      <circle cx="52" cy="48" r="10" fill="#333" />
      <circle cx="12" cy="48" r="6" fill="#666" />
      <circle cx="52" cy="48" r="6" fill="#666" />
      {/* Tank / Tank */}
      <ellipse cx="32" cy="36" rx="14" ry="8" fill={color} />
      {/* Motor / Engine */}
      <rect x="22" y="40" width="20" height="10" fill="#C0C0C0" rx="2" />
      {/* Sitz / Seat */}
      <ellipse cx="24" cy="32" rx="8" ry="4" fill="#333" />
      {/* Lenker / Handlebar */}
      <rect x="40" y="24" width="16" height="4" fill="#333" rx="2" />
      {/* Scheinwerfer / Headlight */}
      <circle cx="56" cy="36" r="4" fill="#FFFF00" />
      {/* Auspuff / Exhaust */}
      <rect x="4" y="44" width="12" height="3" fill="#C0C0C0" rx="1" />
    </svg>
  );
}

export function Train({ size = 64, color = '#B22222' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Kessel / Boiler */}
      <rect x="8" y="24" width="40" height="24" fill={color} rx="4" />
      {/* Schornstein / Chimney */}
      <rect x="12" y="12" width="10" height="12" fill="#333" />
      <rect x="10" y="8" width="14" height="6" fill="#333" />
      {/* Rauch / Smoke */}
      <circle cx="17" cy="4" r="4" fill="#808080" opacity="0.6" />
      <circle cx="22" cy="0" r="3" fill="#808080" opacity="0.4" />
      {/* Führerhaus / Cabin */}
      <rect x="48" y="16" width="14" height="32" fill={color} rx="2" />
      <rect x="50" y="20" width="10" height="10" fill="#87CEEB" />
      {/* Räder / Wheels */}
      <circle cx="20" cy="52" r="8" fill="#333" />
      <circle cx="40" cy="52" r="8" fill="#333" />
      <circle cx="56" cy="52" r="6" fill="#333" />
      <circle cx="20" cy="52" r="4" fill="#666" />
      <circle cx="40" cy="52" r="4" fill="#666" />
      {/* Kuhfänger / Cowcatcher */}
      <polygon points="0,52 8,44 8,52" fill="#333" />
      {/* Lampe / Lamp */}
      <circle cx="4" cy="36" r="4" fill="#FFFF00" />
    </svg>
  );
}

export function Bus({ size = 64, color = '#FFD700' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Karosserie / Body */}
      <rect x="4" y="16" width="56" height="32" fill={color} rx="4" />
      {/* Fenster / Windows */}
      <rect x="8" y="20" width="10" height="12" fill="#87CEEB" rx="2" />
      <rect x="22" y="20" width="10" height="12" fill="#87CEEB" rx="2" />
      <rect x="36" y="20" width="10" height="12" fill="#87CEEB" rx="2" />
      <rect x="50" y="20" width="8" height="12" fill="#87CEEB" rx="2" />
      {/* Tür / Door */}
      <rect x="14" y="32" width="8" height="16" fill="#333" rx="1" />
      {/* Räder / Wheels */}
      <circle cx="16" cy="52" r="6" fill="#333" />
      <circle cx="48" cy="52" r="6" fill="#333" />
      <circle cx="16" cy="52" r="3" fill="#666" />
      <circle cx="48" cy="52" r="3" fill="#666" />
      {/* Scheinwerfer / Headlights */}
      <rect x="56" y="28" width="4" height="6" fill="#FFFF00" rx="1" />
      {/* Rücklichter / Tail lights */}
      <rect x="4" y="28" width="4" height="6" fill="#FF0000" rx="1" />
      {/* Schild / Sign */}
      <rect x="18" y="8" width="28" height="8" fill="#333" />
      <text x="32" y="15" fill="white" fontSize="6" textAnchor="middle">SCHULE</text>
    </svg>
  );
}

export function Submarine({ size = 64, color = '#FFD700' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Rumpf / Hull */}
      <ellipse cx="32" cy="38" rx="28" ry="14" fill={color} />
      {/* Turm / Tower */}
      <rect x="26" y="18" width="12" height="14" fill={color} rx="2" />
      {/* Periskop / Periscope */}
      <rect x="30" y="8" width="4" height="12" fill="#333" />
      <rect x="28" y="6" width="8" height="4" fill="#333" />
      {/* Fenster / Windows */}
      <circle cx="18" cy="38" r="5" fill="#87CEEB" />
      <circle cx="32" cy="38" r="5" fill="#87CEEB" />
      <circle cx="46" cy="38" r="5" fill="#87CEEB" />
      <circle cx="32" cy="24" r="3" fill="#87CEEB" />
      {/* Propeller */}
      <ellipse cx="60" cy="38" rx="4" ry="8" fill="#C0C0C0" />
      {/* Tiefenruder / Diving planes */}
      <rect x="4" y="34" width="8" height="8" fill={color} />
    </svg>
  );
}

export function Tractor({ size = 64, color = '#228B22' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Motorhaube / Hood */}
      <rect x="40" y="24" width="18" height="16" fill={color} rx="2" />
      {/* Auspuff / Exhaust */}
      <rect x="52" y="16" width="4" height="10" fill="#333" />
      {/* Kabine / Cabin */}
      <rect x="18" y="14" width="24" height="26" fill={color} rx="2" />
      <rect x="22" y="18" width="16" height="14" fill="#87CEEB" />
      {/* Großes Hinterrad / Large rear wheel */}
      <circle cx="24" cy="50" r="14" fill="#333" />
      <circle cx="24" cy="50" r="10" fill="#666" />
      <circle cx="24" cy="50" r="4" fill="#333" />
      {/* Kleines Vorderrad / Small front wheel */}
      <circle cx="52" cy="50" r="8" fill="#333" />
      <circle cx="52" cy="50" r="5" fill="#666" />
      {/* Scheinwerfer / Headlight */}
      <circle cx="58" cy="30" r="3" fill="#FFFF00" />
    </svg>
  );
}

export function Spaceship({ size = 64, color = '#C0C0C0' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Rumpf / Body */}
      <ellipse cx="32" cy="32" rx="24" ry="12" fill={color} />
      {/* Kuppel / Dome */}
      <ellipse cx="32" cy="26" rx="12" ry="10" fill="#87CEEB" opacity="0.7" />
      {/* Lichter / Lights */}
      <circle cx="16" cy="36" r="3" fill="#FF0000" />
      <circle cx="32" cy="38" r="3" fill="#00FF00" />
      <circle cx="48" cy="36" r="3" fill="#0000FF" />
      {/* Landebeine / Landing legs */}
      <line x1="16" y1="40" x2="8" y2="56" stroke="#666" strokeWidth="3" />
      <line x1="32" y1="42" x2="32" y2="58" stroke="#666" strokeWidth="3" />
      <line x1="48" y1="40" x2="56" y2="56" stroke="#666" strokeWidth="3" />
      {/* Füße / Feet */}
      <ellipse cx="8" cy="58" rx="4" ry="2" fill="#666" />
      <ellipse cx="32" cy="60" rx="4" ry="2" fill="#666" />
      <ellipse cx="56" cy="58" rx="4" ry="2" fill="#666" />
      {/* Antenne / Antenna */}
      <line x1="32" y1="16" x2="32" y2="8" stroke="#333" strokeWidth="2" />
      <circle cx="32" cy="6" r="3" fill="#FF0000" />
    </svg>
  );
}

// ===== SPORT / SPORTS =====

export function SoccerBall({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="28" fill="white" stroke="#333" strokeWidth="2" />
      {/* Fünfecke / Pentagons */}
      <polygon points="32,8 24,18 28,28 36,28 40,18" fill="#333" />
      <polygon points="10,26 8,38 18,44 26,38 22,26" fill="#333" />
      <polygon points="54,26 56,38 46,44 38,38 42,26" fill="#333" />
      <polygon points="18,50 28,48 32,56 24,60 14,54" fill="#333" />
      <polygon points="46,50 36,48 32,56 40,60 50,54" fill="#333" />
    </svg>
  );
}

export function Basketball({ size = 64, color = '#FF7F00' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="28" fill={color} stroke="#333" strokeWidth="2" />
      {/* Linien / Lines */}
      <line x1="32" y1="4" x2="32" y2="60" stroke="#333" strokeWidth="2" />
      <line x1="4" y1="32" x2="60" y2="32" stroke="#333" strokeWidth="2" />
      <path d="M14 10 Q32 24 14 54" stroke="#333" strokeWidth="2" fill="none" />
      <path d="M50 10 Q32 24 50 54" stroke="#333" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function TennisBall({ size = 64, color = '#CCFF00' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="28" fill={color} stroke="#333" strokeWidth="1" />
      {/* Naht / Seam */}
      <path d="M8 20 Q24 32 8 44" stroke="white" strokeWidth="3" fill="none" />
      <path d="M56 20 Q40 32 56 44" stroke="white" strokeWidth="3" fill="none" />
    </svg>
  );
}

export function Baseball({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="28" fill="white" stroke="#333" strokeWidth="2" />
      {/* Nähte / Stitches */}
      <path d="M14 14 Q8 32 14 50" stroke="#FF0000" strokeWidth="2" fill="none" strokeDasharray="4,2" />
      <path d="M50 14 Q56 32 50 50" stroke="#FF0000" strokeWidth="2" fill="none" strokeDasharray="4,2" />
    </svg>
  );
}

export function Football({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Ball */}
      <ellipse cx="32" cy="32" rx="28" ry="16" fill={color} stroke="#333" strokeWidth="2" />
      {/* Nähte / Laces */}
      <line x1="24" y1="32" x2="40" y2="32" stroke="white" strokeWidth="3" />
      <line x1="26" y1="28" x2="26" y2="36" stroke="white" strokeWidth="2" />
      <line x1="30" y1="28" x2="30" y2="36" stroke="white" strokeWidth="2" />
      <line x1="34" y1="28" x2="34" y2="36" stroke="white" strokeWidth="2" />
      <line x1="38" y1="28" x2="38" y2="36" stroke="white" strokeWidth="2" />
    </svg>
  );
}

export function TennisRacket({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Griff / Handle */}
      <rect x="28" y="44" width="8" height="20" fill={color} rx="2" />
      {/* Rahmen / Frame */}
      <ellipse cx="32" cy="24" rx="20" ry="22" fill="none" stroke={color} strokeWidth="4" />
      {/* Bespannung / Strings */}
      <line x1="32" y1="4" x2="32" y2="44" stroke="#CCC" strokeWidth="1" />
      <line x1="24" y1="6" x2="24" y2="42" stroke="#CCC" strokeWidth="1" />
      <line x1="40" y1="6" x2="40" y2="42" stroke="#CCC" strokeWidth="1" />
      <line x1="16" y1="12" x2="16" y2="36" stroke="#CCC" strokeWidth="1" />
      <line x1="48" y1="12" x2="48" y2="36" stroke="#CCC" strokeWidth="1" />
      <line x1="14" y1="16" x2="50" y2="16" stroke="#CCC" strokeWidth="1" />
      <line x1="12" y1="24" x2="52" y2="24" stroke="#CCC" strokeWidth="1" />
      <line x1="14" y1="32" x2="50" y2="32" stroke="#CCC" strokeWidth="1" />
    </svg>
  );
}

export function BaseballBat({ size = 64, color = '#8B4513' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Schläger / Bat */}
      <path d="M8 56 Q4 52 8 48 L48 8 Q56 4 60 8 Q64 12 60 16 L20 56 Q16 60 8 56" fill={color} />
      {/* Griff / Handle wrap */}
      <rect x="8" y="48" width="12" height="8" fill="#333" transform="rotate(-45 14 52)" rx="1" />
    </svg>
  );
}

// ===== WEITERE MENSCHEN / MORE PEOPLE =====

export function Baby({ size = 64, color = '#FFB6C1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Kopf / Head */}
      <circle cx="32" cy="24" r="16" fill="#FFDAB9" />
      {/* Haare / Hair */}
      <path d="M20 16 Q24 8 32 10 Q40 8 44 16" stroke="#8B4513" strokeWidth="3" fill="none" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="22" r="3" fill="black" />
      <circle cx="38" cy="22" r="3" fill="black" />
      <circle cx="27" cy="21" r="1" fill="white" />
      <circle cx="39" cy="21" r="1" fill="white" />
      {/* Wangen / Cheeks */}
      <circle cx="22" cy="28" r="3" fill="#FFB6C1" opacity="0.5" />
      <circle cx="42" cy="28" r="3" fill="#FFB6C1" opacity="0.5" />
      {/* Mund / Mouth */}
      <ellipse cx="32" cy="30" rx="4" ry="2" fill="#FF69B4" />
      {/* Strampler / Onesie */}
      <ellipse cx="32" cy="50" rx="16" ry="14" fill={color} />
      {/* Arme / Arms */}
      <ellipse cx="16" cy="46" rx="6" ry="4" fill={color} />
      <ellipse cx="48" cy="46" rx="6" ry="4" fill={color} />
      {/* Hände / Hands */}
      <circle cx="12" cy="46" r="4" fill="#FFDAB9" />
      <circle cx="52" cy="46" r="4" fill="#FFDAB9" />
      {/* Füße / Feet */}
      <ellipse cx="24" cy="60" rx="6" ry="4" fill={color} />
      <ellipse cx="40" cy="60" rx="6" ry="4" fill={color} />
    </svg>
  );
}

export function Grandma({ size = 64, color = '#9370DB' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Haare / Hair */}
      <ellipse cx="32" cy="16" rx="14" ry="12" fill="#C0C0C0" />
      <circle cx="20" cy="18" r="5" fill="#C0C0C0" />
      <circle cx="44" cy="18" r="5" fill="#C0C0C0" />
      {/* Kopf / Head */}
      <circle cx="32" cy="20" r="10" fill="#FFDAB9" />
      {/* Brille / Glasses */}
      <circle cx="27" cy="18" r="5" fill="none" stroke="#333" strokeWidth="2" />
      <circle cx="37" cy="18" r="5" fill="none" stroke="#333" strokeWidth="2" />
      <line x1="32" y1="18" x2="32" y2="18" stroke="#333" strokeWidth="2" />
      {/* Augen / Eyes */}
      <circle cx="27" cy="18" r="2" fill="black" />
      <circle cx="37" cy="18" r="2" fill="black" />
      {/* Mund / Mouth */}
      <path d="M28 24 Q32 26 36 24" stroke="black" strokeWidth="1" fill="none" />
      {/* Kleid / Dress */}
      <path d="M22 30 L18 60 L46 60 L42 30 Z" fill={color} />
      {/* Arme / Arms */}
      <rect x="10" y="32" width="12" height="5" fill={color} rx="2" />
      <rect x="42" y="32" width="12" height="5" fill={color} rx="2" />
      {/* Hände / Hands */}
      <circle cx="10" cy="35" r="4" fill="#FFDAB9" />
      <circle cx="54" cy="35" r="4" fill="#FFDAB9" />
      {/* Stock / Cane */}
      <rect x="4" y="34" width="3" height="28" fill="#8B4513" rx="1" />
      <rect x="2" y="32" width="8" height="4" fill="#8B4513" rx="2" />
    </svg>
  );
}

export function Grandpa({ size = 64, color = '#4682B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Glatze mit seitlichen Haaren / Bald with side hair */}
      <ellipse cx="32" cy="14" rx="12" ry="8" fill="#FFDAB9" />
      <ellipse cx="18" cy="18" rx="4" ry="6" fill="#C0C0C0" />
      <ellipse cx="46" cy="18" rx="4" ry="6" fill="#C0C0C0" />
      {/* Kopf / Head */}
      <circle cx="32" cy="20" r="10" fill="#FFDAB9" />
      {/* Brille / Glasses */}
      <rect x="22" y="16" width="8" height="6" fill="none" stroke="#333" strokeWidth="2" rx="1" />
      <rect x="34" y="16" width="8" height="6" fill="none" stroke="#333" strokeWidth="2" rx="1" />
      <line x1="30" y1="18" x2="34" y2="18" stroke="#333" strokeWidth="2" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="19" r="2" fill="black" />
      <circle cx="38" cy="19" r="2" fill="black" />
      {/* Schnurrbart / Mustache */}
      <path d="M26 26 Q32 28 38 26" fill="#C0C0C0" />
      {/* Hemd und Weste / Shirt and vest */}
      <rect x="22" y="30" width="20" height="22" fill={color} rx="2" />
      <path d="M28 30 L28 52 L36 52 L36 30" fill="white" />
      {/* Krawatte / Tie */}
      <polygon points="32,32 28,38 32,52 36,38" fill="#8B0000" />
      {/* Arme / Arms */}
      <rect x="12" y="32" width="10" height="5" fill={color} rx="2" />
      <rect x="42" y="32" width="10" height="5" fill={color} rx="2" />
      {/* Hände / Hands */}
      <circle cx="12" cy="35" r="4" fill="#FFDAB9" />
      <circle cx="52" cy="35" r="4" fill="#FFDAB9" />
      {/* Beine / Legs */}
      <rect x="24" y="52" width="6" height="10" fill="#333" rx="2" />
      <rect x="34" y="52" width="6" height="10" fill="#333" rx="2" />
      {/* Schuhe / Shoes */}
      <ellipse cx="27" cy="62" rx="5" ry="2" fill="#8B4513" />
      <ellipse cx="37" cy="62" rx="5" ry="2" fill="#8B4513" />
    </svg>
  );
}

export function Clown({ size = 64, color = '#FF4500' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Haare / Hair */}
      <circle cx="16" cy="18" r="8" fill="#FF0000" />
      <circle cx="48" cy="18" r="8" fill="#FF0000" />
      <circle cx="24" cy="10" r="6" fill="#00FF00" />
      <circle cx="40" cy="10" r="6" fill="#0000FF" />
      {/* Hut / Hat */}
      <polygon points="32,0 26,16 38,16" fill="#FF00FF" />
      {/* Kopf / Head */}
      <circle cx="32" cy="22" r="12" fill="white" />
      {/* Große rote Nase / Big red nose */}
      <circle cx="32" cy="24" r="6" fill="#FF0000" />
      {/* Augen / Eyes */}
      <circle cx="24" cy="18" r="4" fill="white" />
      <circle cx="40" cy="18" r="4" fill="white" />
      <circle cx="24" cy="18" r="2" fill="black" />
      <circle cx="40" cy="18" r="2" fill="black" />
      {/* Augenbrauen / Eyebrows */}
      <path d="M20 14 Q24 10 28 14" stroke="black" strokeWidth="2" fill="none" />
      <path d="M36 14 Q40 10 44 14" stroke="black" strokeWidth="2" fill="none" />
      {/* Großer Mund / Big mouth */}
      <path d="M22 30 Q32 40 42 30" fill="#FF0000" />
      {/* Anzug / Suit */}
      <rect x="20" y="34" width="24" height="20" fill={color} rx="2" />
      {/* Große Knöpfe / Big buttons */}
      <circle cx="32" cy="40" r="4" fill="#FFFF00" />
      <circle cx="32" cy="50" r="4" fill="#00FF00" />
      {/* Kragen / Collar */}
      <ellipse cx="24" cy="36" rx="6" ry="4" fill="#FF00FF" />
      <ellipse cx="40" cy="36" rx="6" ry="4" fill="#00FFFF" />
      {/* Große Schuhe / Big shoes */}
      <ellipse cx="24" cy="60" rx="10" ry="4" fill="#FFFF00" />
      <ellipse cx="40" cy="60" rx="10" ry="4" fill="#FF00FF" />
    </svg>
  );
}

export function Swimmer({ size = 64, color = '#00BFFF' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Badekappe / Swim cap */}
      <ellipse cx="32" cy="14" rx="12" ry="10" fill={color} />
      {/* Kopf / Head */}
      <circle cx="32" cy="16" r="8" fill="#FFDAB9" />
      {/* Brille / Goggles */}
      <ellipse cx="26" cy="14" rx="5" ry="3" fill="#333" />
      <ellipse cx="38" cy="14" rx="5" ry="3" fill="#333" />
      <ellipse cx="26" cy="14" rx="4" ry="2" fill="#87CEEB" />
      <ellipse cx="38" cy="14" rx="4" ry="2" fill="#87CEEB" />
      <line x1="31" y1="14" x2="33" y2="14" stroke="#333" strokeWidth="2" />
      {/* Mund / Mouth */}
      <path d="M29 20 Q32 22 35 20" stroke="black" strokeWidth="1" fill="none" />
      {/* Badeanzug / Swimsuit */}
      <rect x="24" y="24" width="16" height="16" fill={color} rx="2" />
      {/* Arme (Schwimmposition) / Arms (swimming position) */}
      <ellipse cx="12" cy="30" rx="12" ry="4" fill="#FFDAB9" />
      <ellipse cx="52" cy="30" rx="12" ry="4" fill="#FFDAB9" />
      {/* Beine / Legs */}
      <rect x="26" y="40" width="5" height="20" fill="#FFDAB9" rx="2" />
      <rect x="33" y="40" width="5" height="20" fill="#FFDAB9" rx="2" />
      {/* Füße / Feet */}
      <ellipse cx="28" cy="60" rx="4" ry="2" fill="#FFDAB9" />
      <ellipse cx="36" cy="60" rx="4" ry="2" fill="#FFDAB9" />
    </svg>
  );
}

export function Skateboarder({ size = 64, color = '#FF6347' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Helm / Helmet */}
      <ellipse cx="32" cy="12" rx="12" ry="8" fill="#333" />
      {/* Kopf / Head */}
      <circle cx="32" cy="16" r="8" fill="#FFDAB9" />
      {/* Augen / Eyes */}
      <circle cx="29" cy="15" r="2" fill="black" />
      <circle cx="35" cy="15" r="2" fill="black" />
      {/* Mund / Mouth */}
      <path d="M29 20 Q32 22 35 20" stroke="black" strokeWidth="1" fill="none" />
      {/* T-Shirt */}
      <rect x="24" y="24" width="16" height="14" fill={color} rx="2" />
      {/* Arme (ausgestreckt für Balance) / Arms (stretched for balance) */}
      <path d="M24 28 L8 24" stroke={color} strokeWidth="5" strokeLinecap="round" />
      <path d="M40 28 L56 24" stroke={color} strokeWidth="5" strokeLinecap="round" />
      {/* Hände / Hands */}
      <circle cx="8" cy="24" r="4" fill="#FFDAB9" />
      <circle cx="56" cy="24" r="4" fill="#FFDAB9" />
      {/* Hose / Pants */}
      <rect x="24" y="38" width="16" height="10" fill="#4169E1" />
      {/* Beine (gebeugt) / Legs (bent) */}
      <rect x="24" y="46" width="6" height="8" fill="#4169E1" rx="2" />
      <rect x="34" y="46" width="6" height="8" fill="#4169E1" rx="2" />
      {/* Skateboard */}
      <rect x="12" y="56" width="40" height="4" fill="#8B4513" rx="2" />
      {/* Räder / Wheels */}
      <circle cx="18" cy="62" r="3" fill="#333" />
      <circle cx="46" cy="62" r="3" fill="#333" />
    </svg>
  );
}

// ===== RESCUE PUPS =====

export function FirePup({ size = 64, color = '#FF0000' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Helm / Helmet */}
      <ellipse cx="32" cy="12" rx="14" ry="8" fill={color} />
      <rect x="28" y="6" width="8" height="4" fill="#FFD700" />
      {/* Kopf / Head */}
      <ellipse cx="32" cy="24" rx="16" ry="14" fill="#DAA520" />
      {/* Ohren / Ears */}
      <ellipse cx="14" cy="18" rx="6" ry="10" fill="#8B4513" />
      <ellipse cx="50" cy="18" rx="6" ry="10" fill="#8B4513" />
      {/* Schnauze / Snout */}
      <ellipse cx="32" cy="30" rx="8" ry="6" fill="#F5DEB3" />
      {/* Nase / Nose */}
      <ellipse cx="32" cy="28" rx="4" ry="3" fill="black" />
      {/* Augen / Eyes */}
      <circle cx="24" cy="22" r="4" fill="white" />
      <circle cx="40" cy="22" r="4" fill="white" />
      <circle cx="24" cy="22" r="2" fill="black" />
      <circle cx="40" cy="22" r="2" fill="black" />
      {/* Körper / Body */}
      <rect x="20" y="38" width="24" height="18" fill={color} rx="4" />
      {/* Streifen / Stripes */}
      <rect x="20" y="44" width="24" height="3" fill="#FFD700" />
      {/* Beine / Legs */}
      <rect x="22" y="54" width="8" height="10" fill="#DAA520" rx="3" />
      <rect x="34" y="54" width="8" height="10" fill="#DAA520" rx="3" />
    </svg>
  );
}

export function PolicePup({ size = 64, color = '#191970' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Mütze / Cap */}
      <ellipse cx="32" cy="10" rx="14" ry="6" fill={color} />
      <rect x="18" y="8" width="28" height="6" fill={color} />
      <circle cx="32" cy="8" r="4" fill="#FFD700" />
      {/* Kopf / Head */}
      <ellipse cx="32" cy="24" rx="16" ry="14" fill="#D2691E" />
      {/* Ohren / Ears */}
      <polygon points="14,8 8,24 20,20" fill="#8B4513" />
      <polygon points="50,8 56,24 44,20" fill="#8B4513" />
      {/* Schnauze / Snout */}
      <ellipse cx="32" cy="30" rx="8" ry="6" fill="#DEB887" />
      {/* Nase / Nose */}
      <ellipse cx="32" cy="28" rx="4" ry="3" fill="black" />
      {/* Augen / Eyes */}
      <circle cx="24" cy="22" r="4" fill="white" />
      <circle cx="40" cy="22" r="4" fill="white" />
      <circle cx="24" cy="22" r="2" fill="black" />
      <circle cx="40" cy="22" r="2" fill="black" />
      {/* Körper / Body */}
      <rect x="20" y="38" width="24" height="18" fill={color} rx="4" />
      {/* Abzeichen / Badge */}
      <polygon points="32,42 28,48 32,52 36,48" fill="#FFD700" />
      {/* Beine / Legs */}
      <rect x="22" y="54" width="8" height="10" fill="#D2691E" rx="3" />
      <rect x="34" y="54" width="8" height="10" fill="#D2691E" rx="3" />
    </svg>
  );
}

export function ConstructionPup({ size = 64, color = '#FF8C00' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Helm / Helmet */}
      <ellipse cx="32" cy="10" rx="14" ry="8" fill="#FFD700" />
      <rect x="18" y="8" width="28" height="8" fill="#FFD700" />
      {/* Kopf / Head */}
      <ellipse cx="32" cy="24" rx="16" ry="14" fill="#808080" />
      {/* Ohren / Ears */}
      <ellipse cx="14" cy="20" rx="6" ry="8" fill="#696969" />
      <ellipse cx="50" cy="20" rx="6" ry="8" fill="#696969" />
      {/* Schnauze / Snout */}
      <ellipse cx="32" cy="30" rx="8" ry="6" fill="#A9A9A9" />
      {/* Nase / Nose */}
      <ellipse cx="32" cy="28" rx="4" ry="3" fill="black" />
      {/* Augen / Eyes */}
      <circle cx="24" cy="22" r="4" fill="white" />
      <circle cx="40" cy="22" r="4" fill="white" />
      <circle cx="24" cy="22" r="2" fill="black" />
      <circle cx="40" cy="22" r="2" fill="black" />
      {/* Körper / Body */}
      <rect x="20" y="38" width="24" height="18" fill={color} rx="4" />
      {/* Streifen / Stripes */}
      <rect x="20" y="46" width="24" height="3" fill="#333" />
      {/* Beine / Legs */}
      <rect x="22" y="54" width="8" height="10" fill="#808080" rx="3" />
      <rect x="34" y="54" width="8" height="10" fill="#808080" rx="3" />
    </svg>
  );
}

export function MedicPup({ size = 64, color = '#FF69B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Kopf / Head */}
      <ellipse cx="32" cy="20" rx="16" ry="14" fill="#F5F5DC" />
      {/* Ohren / Ears */}
      <ellipse cx="14" cy="14" rx="6" ry="10" fill="#FFB6C1" />
      <ellipse cx="50" cy="14" rx="6" ry="10" fill="#FFB6C1" />
      {/* Fell-Muster / Fur pattern */}
      <ellipse cx="24" cy="16" rx="6" ry="5" fill="#FFB6C1" />
      <ellipse cx="40" cy="16" rx="6" ry="5" fill="#FFB6C1" />
      {/* Schnauze / Snout */}
      <ellipse cx="32" cy="26" rx="8" ry="6" fill="white" />
      {/* Nase / Nose */}
      <ellipse cx="32" cy="24" rx="4" ry="3" fill="black" />
      {/* Augen / Eyes */}
      <circle cx="24" cy="18" r="4" fill="white" />
      <circle cx="40" cy="18" r="4" fill="white" />
      <circle cx="24" cy="18" r="2" fill="black" />
      <circle cx="40" cy="18" r="2" fill="black" />
      {/* Körper / Body */}
      <rect x="20" y="34" width="24" height="18" fill={color} rx="4" />
      {/* Kreuz / Cross */}
      <rect x="29" y="38" width="6" height="12" fill="white" />
      <rect x="26" y="42" width="12" height="4" fill="white" />
      {/* Beine / Legs */}
      <rect x="22" y="50" width="8" height="10" fill="#F5F5DC" rx="3" />
      <rect x="34" y="50" width="8" height="10" fill="#F5F5DC" rx="3" />
    </svg>
  );
}

export function SkyPup({ size = 64, color = '#00CED1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Brille / Goggles */}
      <ellipse cx="24" cy="16" rx="8" ry="6" fill="#FF69B4" />
      <ellipse cx="40" cy="16" rx="8" ry="6" fill="#FF69B4" />
      <rect x="30" y="14" width="4" height="4" fill="#FF69B4" />
      {/* Kopf / Head */}
      <ellipse cx="32" cy="24" rx="16" ry="14" fill="#F5DEB3" />
      {/* Ohren / Ears */}
      <ellipse cx="14" cy="18" rx="6" ry="10" fill="#D2B48C" />
      <ellipse cx="50" cy="18" rx="6" ry="10" fill="#D2B48C" />
      {/* Schnauze / Snout */}
      <ellipse cx="32" cy="30" rx="8" ry="6" fill="#FFEFD5" />
      {/* Nase / Nose */}
      <ellipse cx="32" cy="28" rx="4" ry="3" fill="black" />
      {/* Augen / Eyes */}
      <circle cx="24" cy="22" r="4" fill="white" />
      <circle cx="40" cy="22" r="4" fill="white" />
      <circle cx="24" cy="22" r="2" fill="black" />
      <circle cx="40" cy="22" r="2" fill="black" />
      {/* Körper / Body */}
      <rect x="20" y="38" width="24" height="18" fill={color} rx="4" />
      {/* Flügel-Symbol / Wing symbol */}
      <polygon points="32,42 26,48 32,46 38,48" fill="white" />
      {/* Beine / Legs */}
      <rect x="22" y="54" width="8" height="10" fill="#F5DEB3" rx="3" />
      <rect x="34" y="54" width="8" height="10" fill="#F5DEB3" rx="3" />
    </svg>
  );
}

export function RecyclePup({ size = 64, color = '#32CD32' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Mütze / Cap */}
      <ellipse cx="32" cy="10" rx="14" ry="6" fill={color} />
      <rect x="18" y="8" width="28" height="6" fill={color} />
      {/* Kopf / Head */}
      <ellipse cx="32" cy="24" rx="16" ry="14" fill="#A0522D" />
      {/* Ohren / Ears */}
      <ellipse cx="14" cy="18" rx="6" ry="10" fill="#8B4513" />
      <ellipse cx="50" cy="18" rx="6" ry="10" fill="#8B4513" />
      {/* Schnauze / Snout */}
      <ellipse cx="32" cy="30" rx="8" ry="6" fill="#DEB887" />
      {/* Nase / Nose */}
      <ellipse cx="32" cy="28" rx="4" ry="3" fill="black" />
      {/* Augen / Eyes */}
      <circle cx="24" cy="22" r="4" fill="white" />
      <circle cx="40" cy="22" r="4" fill="white" />
      <circle cx="24" cy="22" r="2" fill="black" />
      <circle cx="40" cy="22" r="2" fill="black" />
      {/* Körper / Body */}
      <rect x="20" y="38" width="24" height="18" fill={color} rx="4" />
      {/* Recycling-Symbol */}
      <polygon points="32,42 28,48 32,46 36,48" fill="white" />
      <polygon points="28,48 32,52 36,48 32,50" fill="white" />
      {/* Beine / Legs */}
      <rect x="22" y="54" width="8" height="10" fill="#A0522D" rx="3" />
      <rect x="34" y="54" width="8" height="10" fill="#A0522D" rx="3" />
    </svg>
  );
}

// ===== NINJA HEROES =====

export function RedNinja({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Kapuze / Hood */}
      <circle cx="32" cy="18" r="14" fill="#DC143C" />
      {/* Augen-Schlitz / Eye slit */}
      <rect x="20" y="14" width="24" height="8" fill="#FFDAB9" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="18" r="2" fill="black" />
      <circle cx="38" cy="18" r="2" fill="black" />
      {/* Stirnband / Headband */}
      <rect x="18" y="10" width="28" height="4" fill="#8B0000" />
      {/* Körper / Body */}
      <rect x="20" y="32" width="24" height="20" fill="#DC143C" rx="2" />
      {/* Gürtel / Belt */}
      <rect x="18" y="40" width="28" height="4" fill="#8B0000" />
      {/* Feuer-Symbol / Fire symbol */}
      <polygon points="32,34 28,38 32,36 36,38" fill="#FFD700" />
      {/* Arme / Arms */}
      <rect x="8" y="32" width="12" height="5" fill="#DC143C" rx="2" />
      <rect x="44" y="32" width="12" height="5" fill="#DC143C" rx="2" />
      {/* Katana */}
      <rect x="46" y="8" width="3" height="36" fill="#C0C0C0" />
      <rect x="44" y="8" width="7" height="6" fill="#8B4513" />
      {/* Beine / Legs */}
      <rect x="22" y="52" width="8" height="12" fill="#DC143C" rx="2" />
      <rect x="34" y="52" width="8" height="12" fill="#DC143C" rx="2" />
    </svg>
  );
}

export function BlueNinja({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Kapuze / Hood */}
      <circle cx="32" cy="18" r="14" fill="#1E90FF" />
      {/* Augen-Schlitz / Eye slit */}
      <rect x="20" y="14" width="24" height="8" fill="#FFDAB9" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="18" r="2" fill="black" />
      <circle cx="38" cy="18" r="2" fill="black" />
      {/* Stirnband / Headband */}
      <rect x="18" y="10" width="28" height="4" fill="#00008B" />
      {/* Körper / Body */}
      <rect x="20" y="32" width="24" height="20" fill="#1E90FF" rx="2" />
      {/* Gürtel / Belt */}
      <rect x="18" y="40" width="28" height="4" fill="#00008B" />
      {/* Blitz-Symbol / Lightning symbol */}
      <polygon points="32,34 30,38 34,36 32,40" fill="#FFD700" />
      {/* Arme / Arms */}
      <rect x="8" y="32" width="12" height="5" fill="#1E90FF" rx="2" />
      <rect x="44" y="32" width="12" height="5" fill="#1E90FF" rx="2" />
      {/* Nunchaku */}
      <rect x="4" y="30" width="8" height="3" fill="#8B4513" />
      <rect x="4" y="36" width="8" height="3" fill="#8B4513" />
      {/* Beine / Legs */}
      <rect x="22" y="52" width="8" height="12" fill="#1E90FF" rx="2" />
      <rect x="34" y="52" width="8" height="12" fill="#1E90FF" rx="2" />
    </svg>
  );
}

export function WhiteNinja({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Kapuze / Hood */}
      <circle cx="32" cy="18" r="14" fill="white" stroke="#CCC" strokeWidth="1" />
      {/* Augen-Schlitz / Eye slit */}
      <rect x="20" y="14" width="24" height="8" fill="#FFDAB9" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="18" r="2" fill="black" />
      <circle cx="38" cy="18" r="2" fill="black" />
      {/* Stirnband / Headband */}
      <rect x="18" y="10" width="28" height="4" fill="#C0C0C0" />
      {/* Körper / Body */}
      <rect x="20" y="32" width="24" height="20" fill="white" stroke="#CCC" strokeWidth="1" rx="2" />
      {/* Gürtel / Belt */}
      <rect x="18" y="40" width="28" height="4" fill="#C0C0C0" />
      {/* Eis-Symbol / Ice symbol */}
      <polygon points="32,34 28,38 32,42 36,38" fill="#87CEEB" />
      {/* Arme / Arms */}
      <rect x="8" y="32" width="12" height="5" fill="white" stroke="#CCC" strokeWidth="1" rx="2" />
      <rect x="44" y="32" width="12" height="5" fill="white" stroke="#CCC" strokeWidth="1" rx="2" />
      {/* Shuriken */}
      <polygon points="56,28 52,32 56,36 60,32" fill="#C0C0C0" />
      {/* Beine / Legs */}
      <rect x="22" y="52" width="8" height="12" fill="white" stroke="#CCC" strokeWidth="1" rx="2" />
      <rect x="34" y="52" width="8" height="12" fill="white" stroke="#CCC" strokeWidth="1" rx="2" />
    </svg>
  );
}

export function BlackNinja({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Kapuze / Hood */}
      <circle cx="32" cy="18" r="14" fill="#1a1a1a" />
      {/* Augen-Schlitz / Eye slit */}
      <rect x="20" y="14" width="24" height="8" fill="#FFDAB9" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="18" r="2" fill="black" />
      <circle cx="38" cy="18" r="2" fill="black" />
      {/* Stirnband / Headband */}
      <rect x="18" y="10" width="28" height="4" fill="#333" />
      {/* Körper / Body */}
      <rect x="20" y="32" width="24" height="20" fill="#1a1a1a" rx="2" />
      {/* Gürtel / Belt */}
      <rect x="18" y="40" width="28" height="4" fill="#333" />
      {/* Erd-Symbol / Earth symbol */}
      <circle cx="32" cy="36" r="4" fill="#8B4513" />
      {/* Arme / Arms */}
      <rect x="8" y="32" width="12" height="5" fill="#1a1a1a" rx="2" />
      <rect x="44" y="32" width="12" height="5" fill="#1a1a1a" rx="2" />
      {/* Scythe */}
      <path d="M52 8 Q60 8 58 16 L52 14" fill="#C0C0C0" />
      <rect x="50" y="14" width="3" height="24" fill="#8B4513" />
      {/* Beine / Legs */}
      <rect x="22" y="52" width="8" height="12" fill="#1a1a1a" rx="2" />
      <rect x="34" y="52" width="8" height="12" fill="#1a1a1a" rx="2" />
    </svg>
  );
}

export function GreenNinja({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Kapuze / Hood */}
      <circle cx="32" cy="18" r="14" fill="#228B22" />
      {/* Augen-Schlitz / Eye slit */}
      <rect x="20" y="14" width="24" height="8" fill="#FFDAB9" />
      {/* Augen / Eyes */}
      <circle cx="26" cy="18" r="2" fill="black" />
      <circle cx="38" cy="18" r="2" fill="black" />
      {/* Stirnband / Headband */}
      <rect x="18" y="10" width="28" height="4" fill="#006400" />
      {/* Körper / Body */}
      <rect x="20" y="32" width="24" height="20" fill="#228B22" rx="2" />
      {/* Gürtel / Belt */}
      <rect x="18" y="40" width="28" height="4" fill="#006400" />
      {/* Energie-Symbol / Energy symbol */}
      <polygon points="32,34 28,40 36,40" fill="#FFD700" />
      {/* Arme / Arms */}
      <rect x="8" y="32" width="12" height="5" fill="#228B22" rx="2" />
      <rect x="44" y="32" width="12" height="5" fill="#228B22" rx="2" />
      {/* Dual Swords */}
      <rect x="4" y="10" width="2" height="28" fill="#C0C0C0" />
      <rect x="58" y="10" width="2" height="28" fill="#C0C0C0" />
      {/* Beine / Legs */}
      <rect x="22" y="52" width="8" height="12" fill="#228B22" rx="2" />
      <rect x="34" y="52" width="8" height="12" fill="#228B22" rx="2" />
    </svg>
  );
}

// ===== NATURE RANGERS =====

export function RedRanger({ size = 64, color = '#FF0000' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Helm / Helmet */}
      <ellipse cx="32" cy="16" rx="14" ry="12" fill={color} />
      {/* Visier / Visor */}
      <ellipse cx="32" cy="18" rx="12" ry="6" fill="#1a1a1a" />
      <ellipse cx="32" cy="18" rx="10" ry="4" fill="#333" opacity="0.5" />
      {/* Tier-Symbol / Animal symbol */}
      <polygon points="32,8 28,14 36,14" fill="#FFD700" />
      {/* Körper / Body */}
      <rect x="20" y="28" width="24" height="22" fill={color} rx="2" />
      {/* Diamant-Muster / Diamond pattern */}
      <polygon points="32,32 26,40 32,48 38,40" fill="white" opacity="0.3" />
      {/* Gürtel / Belt */}
      <rect x="18" y="44" width="28" height="6" fill="#FFD700" />
      <rect x="28" y="42" width="8" height="10" fill="#FFD700" />
      {/* Arme / Arms */}
      <rect x="8" y="30" width="12" height="6" fill={color} rx="2" />
      <rect x="44" y="30" width="12" height="6" fill={color} rx="2" />
      {/* Handschuhe / Gloves */}
      <rect x="4" y="36" width="8" height="8" fill="white" rx="2" />
      <rect x="52" y="36" width="8" height="8" fill="white" rx="2" />
      {/* Beine / Legs */}
      <rect x="22" y="50" width="8" height="14" fill={color} rx="2" />
      <rect x="34" y="50" width="8" height="14" fill={color} rx="2" />
      {/* Stiefel / Boots */}
      <rect x="20" y="58" width="10" height="6" fill="white" rx="2" />
      <rect x="34" y="58" width="10" height="6" fill="white" rx="2" />
    </svg>
  );
}

export function BlueRanger({ size = 64, color = '#0000FF' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Helm / Helmet */}
      <ellipse cx="32" cy="16" rx="14" ry="12" fill={color} />
      {/* Visier / Visor */}
      <ellipse cx="32" cy="18" rx="12" ry="6" fill="#1a1a1a" />
      <ellipse cx="32" cy="18" rx="10" ry="4" fill="#333" opacity="0.5" />
      {/* Tier-Symbol / Animal symbol */}
      <ellipse cx="32" cy="10" rx="4" ry="3" fill="#FFD700" />
      {/* Körper / Body */}
      <rect x="20" y="28" width="24" height="22" fill={color} rx="2" />
      {/* Diamant-Muster / Diamond pattern */}
      <polygon points="32,32 26,40 32,48 38,40" fill="white" opacity="0.3" />
      {/* Gürtel / Belt */}
      <rect x="18" y="44" width="28" height="6" fill="#FFD700" />
      <rect x="28" y="42" width="8" height="10" fill="#FFD700" />
      {/* Arme / Arms */}
      <rect x="8" y="30" width="12" height="6" fill={color} rx="2" />
      <rect x="44" y="30" width="12" height="6" fill={color} rx="2" />
      {/* Handschuhe / Gloves */}
      <rect x="4" y="36" width="8" height="8" fill="white" rx="2" />
      <rect x="52" y="36" width="8" height="8" fill="white" rx="2" />
      {/* Beine / Legs */}
      <rect x="22" y="50" width="8" height="14" fill={color} rx="2" />
      <rect x="34" y="50" width="8" height="14" fill={color} rx="2" />
      {/* Stiefel / Boots */}
      <rect x="20" y="58" width="10" height="6" fill="white" rx="2" />
      <rect x="34" y="58" width="10" height="6" fill="white" rx="2" />
    </svg>
  );
}

export function YellowRanger({ size = 64, color = '#FFD700' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Helm / Helmet */}
      <ellipse cx="32" cy="16" rx="14" ry="12" fill={color} />
      {/* Visier / Visor */}
      <ellipse cx="32" cy="18" rx="12" ry="6" fill="#1a1a1a" />
      <ellipse cx="32" cy="18" rx="10" ry="4" fill="#333" opacity="0.5" />
      {/* Tier-Symbol / Animal symbol */}
      <rect x="28" y="8" width="8" height="6" fill="#B8860B" rx="2" />
      {/* Körper / Body */}
      <rect x="20" y="28" width="24" height="22" fill={color} rx="2" />
      {/* Diamant-Muster / Diamond pattern */}
      <polygon points="32,32 26,40 32,48 38,40" fill="white" opacity="0.3" />
      {/* Gürtel / Belt */}
      <rect x="18" y="44" width="28" height="6" fill="#B8860B" />
      <rect x="28" y="42" width="8" height="10" fill="#B8860B" />
      {/* Arme / Arms */}
      <rect x="8" y="30" width="12" height="6" fill={color} rx="2" />
      <rect x="44" y="30" width="12" height="6" fill={color} rx="2" />
      {/* Handschuhe / Gloves */}
      <rect x="4" y="36" width="8" height="8" fill="white" rx="2" />
      <rect x="52" y="36" width="8" height="8" fill="white" rx="2" />
      {/* Beine / Legs */}
      <rect x="22" y="50" width="8" height="14" fill={color} rx="2" />
      <rect x="34" y="50" width="8" height="14" fill={color} rx="2" />
      {/* Stiefel / Boots */}
      <rect x="20" y="58" width="10" height="6" fill="white" rx="2" />
      <rect x="34" y="58" width="10" height="6" fill="white" rx="2" />
    </svg>
  );
}

export function PinkRanger({ size = 64, color = '#FF69B4' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Helm / Helmet */}
      <ellipse cx="32" cy="16" rx="14" ry="12" fill={color} />
      {/* Visier / Visor */}
      <ellipse cx="32" cy="18" rx="12" ry="6" fill="#1a1a1a" />
      <ellipse cx="32" cy="18" rx="10" ry="4" fill="#333" opacity="0.5" />
      {/* Tier-Symbol / Animal symbol */}
      <path d="M28 10 Q32 6 36 10 Q32 14 28 10" fill="#FFD700" />
      {/* Körper / Body */}
      <rect x="20" y="28" width="24" height="22" fill={color} rx="2" />
      {/* Diamant-Muster / Diamond pattern */}
      <polygon points="32,32 26,40 32,48 38,40" fill="white" opacity="0.3" />
      {/* Gürtel / Belt */}
      <rect x="18" y="44" width="28" height="6" fill="#FFD700" />
      <rect x="28" y="42" width="8" height="10" fill="#FFD700" />
      {/* Arme / Arms */}
      <rect x="8" y="30" width="12" height="6" fill={color} rx="2" />
      <rect x="44" y="30" width="12" height="6" fill={color} rx="2" />
      {/* Handschuhe / Gloves */}
      <rect x="4" y="36" width="8" height="8" fill="white" rx="2" />
      <rect x="52" y="36" width="8" height="8" fill="white" rx="2" />
      {/* Beine / Legs */}
      <rect x="22" y="50" width="8" height="14" fill={color} rx="2" />
      <rect x="34" y="50" width="8" height="14" fill={color} rx="2" />
      {/* Stiefel / Boots */}
      <rect x="20" y="58" width="10" height="6" fill="white" rx="2" />
      <rect x="34" y="58" width="10" height="6" fill="white" rx="2" />
    </svg>
  );
}

// ===== FAIRY TALE CHARACTERS =====

export function Mermaid({ size = 64, color = '#00CED1' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Haare / Hair */}
      <ellipse cx="32" cy="16" rx="14" ry="14" fill="#FF0000" />
      <ellipse cx="20" cy="24" rx="6" ry="12" fill="#FF0000" />
      <ellipse cx="44" cy="24" rx="6" ry="12" fill="#FF0000" />
      {/* Kopf / Head */}
      <circle cx="32" cy="18" r="10" fill="#FFDAB9" />
      {/* Augen / Eyes */}
      <circle cx="28" cy="16" r="2" fill="black" />
      <circle cx="36" cy="16" r="2" fill="black" />
      {/* Mund / Mouth */}
      <path d="M29 22 Q32 24 35 22" stroke="#FF69B4" strokeWidth="1" fill="none" />
      {/* Krone / Crown */}
      <polygon points="26,8 28,4 32,6 36,4 38,8" fill="#FFD700" />
      {/* Oberteil / Top */}
      <ellipse cx="32" cy="32" rx="10" ry="6" fill={color} />
      {/* Schwanz / Tail */}
      <ellipse cx="32" cy="46" rx="12" ry="16" fill={color} />
      <ellipse cx="32" cy="44" rx="10" ry="12" fill="#40E0D0" opacity="0.5" />
      {/* Schuppen-Muster / Scale pattern */}
      <ellipse cx="28" cy="42" rx="4" ry="3" fill={color} stroke="#008B8B" strokeWidth="1" />
      <ellipse cx="36" cy="42" rx="4" ry="3" fill={color} stroke="#008B8B" strokeWidth="1" />
      <ellipse cx="32" cy="48" rx="4" ry="3" fill={color} stroke="#008B8B" strokeWidth="1" />
      {/* Flosse / Fin */}
      <ellipse cx="24" cy="60" rx="8" ry="4" fill={color} transform="rotate(-30 24 60)" />
      <ellipse cx="40" cy="60" rx="8" ry="4" fill={color} transform="rotate(30 40 60)" />
    </svg>
  );
}

export function IcePrincess({ size = 64, color = '#87CEEB' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Haare / Hair */}
      <ellipse cx="32" cy="18" rx="14" ry="16" fill="#F0F8FF" />
      <ellipse cx="18" cy="28" rx="4" ry="14" fill="#F0F8FF" />
      <ellipse cx="46" cy="28" rx="4" ry="14" fill="#F0F8FF" />
      {/* Kopf / Head */}
      <circle cx="32" cy="18" r="10" fill="#FFDAB9" />
      {/* Augen / Eyes */}
      <circle cx="28" cy="16" r="2" fill="#00BFFF" />
      <circle cx="36" cy="16" r="2" fill="#00BFFF" />
      {/* Mund / Mouth */}
      <path d="M29 22 Q32 24 35 22" stroke="#FF69B4" strokeWidth="1" fill="none" />
      {/* Krone / Crown */}
      <polygon points="22,8 26,2 30,8 34,2 38,8 42,2 42,10 22,10" fill={color} />
      {/* Schneeflocken auf Krone / Snowflakes on crown */}
      <circle cx="26" cy="6" r="2" fill="white" />
      <circle cx="34" cy="4" r="2" fill="white" />
      {/* Kleid / Dress */}
      <path d="M24 28 L16 64 L48 64 L40 28 Z" fill={color} />
      {/* Glitzer / Sparkles */}
      <circle cx="28" cy="40" r="2" fill="white" opacity="0.8" />
      <circle cx="36" cy="48" r="2" fill="white" opacity="0.8" />
      <circle cx="30" cy="56" r="2" fill="white" opacity="0.8" />
      {/* Umhang / Cape */}
      <path d="M24 28 Q8 32 12 64 L16 64" fill={color} opacity="0.5" />
      <path d="M40 28 Q56 32 52 64 L48 64" fill={color} opacity="0.5" />
      {/* Arme / Arms */}
      <path d="M24 32 L14 42" stroke="#FFDAB9" strokeWidth="4" strokeLinecap="round" />
      <path d="M40 32 L50 42" stroke="#FFDAB9" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function LionKing({ size = 64, color = '#DAA520' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      {/* Mähne / Mane */}
      <ellipse cx="32" cy="24" rx="24" ry="22" fill="#8B4513" />
      {/* Kopf / Head */}
      <ellipse cx="32" cy="26" rx="16" ry="14" fill={color} />
      {/* Ohren / Ears */}
      <ellipse cx="14" cy="14" rx="6" ry="6" fill={color} />
      <ellipse cx="50" cy="14" rx="6" ry="6" fill={color} />
      <ellipse cx="14" cy="14" rx="3" ry="3" fill="#8B4513" />
      <ellipse cx="50" cy="14" rx="3" ry="3" fill="#8B4513" />
      {/* Schnauze / Snout */}
      <ellipse cx="32" cy="32" rx="8" ry="6" fill="#FFDAB9" />
      {/* Nase / Nose */}
      <ellipse cx="32" cy="30" rx="4" ry="3" fill="#8B4513" />
      {/* Augen / Eyes */}
      <ellipse cx="24" cy="24" rx="4" ry="5" fill="white" />
      <ellipse cx="40" cy="24" rx="4" ry="5" fill="white" />
      <circle cx="24" cy="24" r="2" fill="black" />
      <circle cx="40" cy="24" r="2" fill="black" />
      {/* Krone / Crown */}
      <polygon points="24,6 28,0 32,4 36,0 40,6" fill="#FFD700" />
      {/* Körper / Body */}
      <ellipse cx="32" cy="52" rx="14" ry="12" fill={color} />
      {/* Beine / Legs */}
      <rect x="20" y="56" width="8" height="8" fill={color} rx="2" />
      <rect x="36" y="56" width="8" height="8" fill={color} rx="2" />
    </svg>
  );
}
