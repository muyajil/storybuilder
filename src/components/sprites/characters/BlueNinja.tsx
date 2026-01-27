/**
 * BlueNinja Sprite Component
 * Enhanced with gradients and detailed features
 */


export function BlueNinja({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Hood gradient */}
        <radialGradient id="blueNinjaHoodGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#4DA6FF" />
          <stop offset="100%" stopColor="#1E90FF" />
        </radialGradient>
        {/* Body gradient */}
        <linearGradient id="blueNinjaBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4DA6FF" />
          <stop offset="50%" stopColor="#1E90FF" />
          <stop offset="100%" stopColor="#1873CC" />
        </linearGradient>
        {/* Skin gradient */}
        <radialGradient id="blueNinjaSkinGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </radialGradient>
        {/* Belt gradient */}
        <linearGradient id="blueNinjaBeltGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0047AB" />
          <stop offset="50%" stopColor="#00008B" />
          <stop offset="100%" stopColor="#000066" />
        </linearGradient>
        {/* Lightning gradient */}
        <linearGradient id="blueNinjaLightningGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFEB3B" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA000" />
        </linearGradient>
        {/* Nunchaku wood gradient */}
        <linearGradient id="blueNinjaNunchakuGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#6B3510" />
        </linearGradient>
      </defs>

      {/* Kapuze / Hood */}
      <circle cx="32" cy="18" r="14" fill="url(#blueNinjaHoodGradient)" />
      {/* Hood highlight */}
      <ellipse cx="26" cy="12" rx="5" ry="3" fill="#6BB8FF" opacity="0.4" />

      {/* Augen-Schlitz / Eye slit */}
      <rect x="20" y="14" width="24" height="8" fill="url(#blueNinjaSkinGradient)" rx="1" />
      {/* Eye slit shadow */}
      <rect x="20" y="14" width="24" height="2" fill="#000" opacity="0.15" />

      {/* Augen / Eyes - focused */}
      <ellipse cx="26" cy="18" rx="2.5" ry="2" fill="white" />
      <ellipse cx="38" cy="18" rx="2.5" ry="2" fill="white" />
      <circle cx="26" cy="18" r="1.5" fill="#1E90FF" />
      <circle cx="38" cy="18" r="1.5" fill="#1E90FF" />
      <circle cx="26" cy="18" r="0.8" fill="#00008B" />
      <circle cx="38" cy="18" r="0.8" fill="#00008B" />
      {/* Eye sparkle */}
      <circle cx="25.5" cy="17.5" r="0.5" fill="white" />
      <circle cx="37.5" cy="17.5" r="0.5" fill="white" />

      {/* Stirnband / Headband */}
      <rect x="18" y="10" width="28" height="4" fill="url(#blueNinjaBeltGradient)" />
      {/* Headband knot tails */}
      <path d="M46 12 L52 8 L50 14 L46 12" fill="#00008B" />
      <path d="M46 12 L54 16 L48 14 L46 12" fill="#0047AB" />

      {/* Körper / Body */}
      <rect x="20" y="32" width="24" height="20" fill="url(#blueNinjaBodyGradient)" rx="2" />
      {/* Body highlights */}
      <rect x="21" y="32" width="2" height="20" fill="#6BB8FF" opacity="0.2" rx="1" />

      {/* Gürtel / Belt */}
      <rect x="18" y="40" width="28" height="4" fill="url(#blueNinjaBeltGradient)" />
      {/* Belt buckle */}
      <rect x="30" y="40" width="4" height="4" fill="#0047AB" />

      {/* Blitz-Symbol / Lightning symbol */}
      <polygon points="32,33 29,37 33,36 30,41 36,35 32,36 35,33" fill="url(#blueNinjaLightningGradient)" />
      {/* Lightning glow */}
      <polygon points="32,33 29,37 33,36 30,41 36,35 32,36 35,33" fill="#FFFF00" opacity="0.3" transform="scale(1.1) translate(-1.6, -1.8)" />

      {/* Arme / Arms */}
      <rect x="8" y="32" width="12" height="6" fill="url(#blueNinjaBodyGradient)" rx="2" />
      <rect x="44" y="32" width="12" height="6" fill="url(#blueNinjaBodyGradient)" rx="2" />
      {/* Arm wrappings */}
      <line x1="10" y1="33" x2="18" y2="33" stroke="#1873CC" strokeWidth="0.5" />
      <line x1="10" y1="35" x2="18" y2="35" stroke="#1873CC" strokeWidth="0.5" />
      <line x1="46" y1="33" x2="54" y2="33" stroke="#1873CC" strokeWidth="0.5" />
      <line x1="46" y1="35" x2="54" y2="35" stroke="#1873CC" strokeWidth="0.5" />

      {/* Hand */}
      <circle cx="8" cy="35" r="3" fill="url(#blueNinjaSkinGradient)" />

      {/* Nunchaku */}
      <rect x="2" y="28" width="10" height="4" fill="url(#blueNinjaNunchakuGradient)" rx="1" />
      <rect x="2" y="36" width="10" height="4" fill="url(#blueNinjaNunchakuGradient)" rx="1" />
      {/* Nunchaku detail rings */}
      <rect x="4" y="28" width="1" height="4" fill="#6B3510" />
      <rect x="9" y="28" width="1" height="4" fill="#6B3510" />
      <rect x="4" y="36" width="1" height="4" fill="#6B3510" />
      <rect x="9" y="36" width="1" height="4" fill="#6B3510" />
      {/* Chain */}
      <path d="M7 32 Q5 34 7 36" stroke="#C0C0C0" strokeWidth="1.5" fill="none" />

      {/* Beine / Legs */}
      <rect x="22" y="52" width="8" height="12" fill="url(#blueNinjaBodyGradient)" rx="2" />
      <rect x="34" y="52" width="8" height="12" fill="url(#blueNinjaBodyGradient)" rx="2" />
      {/* Leg wrappings */}
      <line x1="23" y1="56" x2="29" y2="56" stroke="#1873CC" strokeWidth="0.5" />
      <line x1="23" y1="60" x2="29" y2="60" stroke="#1873CC" strokeWidth="0.5" />
      <line x1="35" y1="56" x2="41" y2="56" stroke="#1873CC" strokeWidth="0.5" />
      <line x1="35" y1="60" x2="41" y2="60" stroke="#1873CC" strokeWidth="0.5" />

      {/* Tabi boots */}
      <path d="M22 62 L24 64 L26 62 L28 64 L30 62" fill="#1873CC" />
      <path d="M34 62 L36 64 L38 62 L40 64 L42 62" fill="#1873CC" />
    </svg>
  );
}
