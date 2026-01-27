/**
 * WhiteNinja Sprite Component
 * Enhanced with gradients and detailed shading
 */

export function WhiteNinja({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Cloth gradient */}
        <linearGradient id="whiteNinjaClothGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </linearGradient>
        {/* Shadow gradient */}
        <linearGradient id="whiteNinjaShadowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D0D0D0" />
          <stop offset="50%" stopColor="#E8E8E8" />
          <stop offset="100%" stopColor="#D0D0D0" />
        </linearGradient>
        {/* Skin gradient */}
        <radialGradient id="whiteNinjaSkinGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="70%" stopColor="#FFDAB9" />
          <stop offset="100%" stopColor="#DEB887" />
        </radialGradient>
        {/* Headband gradient */}
        <linearGradient id="whiteNinjaHeadbandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D8D8D8" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#A8A8A8" />
        </linearGradient>
        {/* Belt gradient */}
        <linearGradient id="whiteNinjaBeltGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D0D0D0" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#A0A0A0" />
        </linearGradient>
        {/* Ice/frost gradient */}
        <radialGradient id="whiteNinjaIceGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E0FFFF" />
          <stop offset="50%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#4682B4" />
        </radialGradient>
        {/* Shuriken gradient */}
        <linearGradient id="whiteNinjaShurikenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#909090" />
        </linearGradient>
      </defs>

      {/* Hood */}
      <circle cx="32" cy="18" r="15" fill="url(#whiteNinjaClothGradient)" />
      {/* Hood shadow */}
      <circle cx="32" cy="18" r="15" fill="none" stroke="#CCC" strokeWidth="1" />
      {/* Hood highlight */}
      <ellipse cx="26" cy="12" rx="6" ry="4" fill="white" opacity="0.4" />
      {/* Hood folds */}
      <path d="M20 22 Q24 24 28 22" stroke="#D0D0D0" strokeWidth="0.5" fill="none" />
      <path d="M36 22 Q40 24 44 22" stroke="#D0D0D0" strokeWidth="0.5" fill="none" />

      {/* Eye slit with face */}
      <rect x="19" y="14" width="26" height="9" fill="url(#whiteNinjaSkinGradient)" rx="2" />
      {/* Eye slit border */}
      <rect x="19" y="14" width="26" height="9" fill="none" stroke="#D0D0D0" strokeWidth="1" rx="2" />

      {/* Eyes */}
      <ellipse cx="26" cy="18" rx="3" ry="2.5" fill="white" />
      <ellipse cx="38" cy="18" rx="3" ry="2.5" fill="white" />
      {/* Pupils */}
      <circle cx="26" cy="18" r="1.8" fill="black" />
      <circle cx="38" cy="18" r="1.8" fill="black" />
      {/* Eye shine */}
      <circle cx="25" cy="17" r="0.6" fill="white" />
      <circle cx="37" cy="17" r="0.6" fill="white" />
      {/* Determined brow line */}
      <path d="M22 15 L30 16" stroke="#DEB887" strokeWidth="0.5" fill="none" />
      <path d="M42 15 L34 16" stroke="#DEB887" strokeWidth="0.5" fill="none" />

      {/* Headband */}
      <rect x="16" y="9" width="32" height="5" fill="url(#whiteNinjaHeadbandGradient)" rx="1" />
      {/* Headband knot */}
      <circle cx="48" cy="11" r="3" fill="url(#whiteNinjaHeadbandGradient)" />
      {/* Headband tails */}
      <path d="M50 11 Q54 8 56 12 Q58 10 60 14" stroke="#C0C0C0" strokeWidth="2" fill="none" />

      {/* Body/Gi */}
      <rect x="19" y="32" width="26" height="22" fill="url(#whiteNinjaClothGradient)" rx="3" />
      {/* Body shadow */}
      <rect x="19" y="32" width="26" height="22" fill="none" stroke="#CCC" strokeWidth="1" rx="3" />
      {/* Gi lapel */}
      <path d="M26 32 L32 42 L38 32" fill="url(#whiteNinjaShadowGradient)" stroke="#D0D0D0" strokeWidth="0.5" />
      {/* Gi folds */}
      <line x1="24" y1="38" x2="24" y2="52" stroke="#D8D8D8" strokeWidth="0.5" />
      <line x1="40" y1="38" x2="40" y2="52" stroke="#D8D8D8" strokeWidth="0.5" />

      {/* Ice symbol on chest */}
      <polygon points="32,35 27,40 32,45 37,40" fill="url(#whiteNinjaIceGradient)" />
      <polygon points="32,36 29,40 32,44 35,40" fill="#ADD8E6" opacity="0.5" />
      {/* Ice crystal sparkle */}
      <circle cx="32" cy="40" r="1" fill="white" opacity="0.7" />

      {/* Belt */}
      <rect x="17" y="42" width="30" height="5" fill="url(#whiteNinjaBeltGradient)" rx="1" />
      {/* Belt knot */}
      <rect x="30" y="41" width="4" height="7" fill="url(#whiteNinjaBeltGradient)" rx="1" />

      {/* Arms */}
      <rect x="6" y="32" width="13" height="6" fill="url(#whiteNinjaClothGradient)" rx="2" />
      <rect x="45" y="32" width="13" height="6" fill="url(#whiteNinjaClothGradient)" rx="2" />
      <rect x="6" y="32" width="13" height="6" fill="none" stroke="#CCC" strokeWidth="0.5" rx="2" />
      <rect x="45" y="32" width="13" height="6" fill="none" stroke="#CCC" strokeWidth="0.5" rx="2" />

      {/* Hands */}
      <circle cx="6" cy="35" r="3" fill="url(#whiteNinjaSkinGradient)" />
      <circle cx="58" cy="35" r="3" fill="url(#whiteNinjaSkinGradient)" />

      {/* Shuriken in hand */}
      <polygon points="58,28 54,32 58,36 62,32" fill="url(#whiteNinjaShurikenGradient)" />
      <circle cx="58" cy="32" r="1.5" fill="#888" />
      {/* Shuriken shine */}
      <line x1="56" y1="30" x2="60" y2="34" stroke="#F0F0F0" strokeWidth="0.5" />

      {/* Legs */}
      <rect x="21" y="54" width="9" height="12" fill="url(#whiteNinjaClothGradient)" rx="2" />
      <rect x="34" y="54" width="9" height="12" fill="url(#whiteNinjaClothGradient)" rx="2" />
      <rect x="21" y="54" width="9" height="12" fill="none" stroke="#CCC" strokeWidth="0.5" rx="2" />
      <rect x="34" y="54" width="9" height="12" fill="none" stroke="#CCC" strokeWidth="0.5" rx="2" />

      {/* Feet wrappings */}
      <rect x="21" y="62" width="9" height="4" fill="#E8E8E8" rx="1" />
      <rect x="34" y="62" width="9" height="4" fill="#E8E8E8" rx="1" />
      {/* Wrapping lines */}
      <line x1="22" y1="63" x2="29" y2="63" stroke="#D0D0D0" strokeWidth="0.5" />
      <line x1="22" y1="65" x2="29" y2="65" stroke="#D0D0D0" strokeWidth="0.5" />
      <line x1="35" y1="63" x2="42" y2="63" stroke="#D0D0D0" strokeWidth="0.5" />
      <line x1="35" y1="65" x2="42" y2="65" stroke="#D0D0D0" strokeWidth="0.5" />

      {/* Snow/frost particles */}
      <circle cx="12" cy="40" r="1" fill="#87CEEB" opacity="0.5" />
      <circle cx="52" cy="44" r="0.8" fill="#87CEEB" opacity="0.4" />
      <circle cx="8" cy="50" r="0.6" fill="#ADD8E6" opacity="0.3" />
    </svg>
  );
}
