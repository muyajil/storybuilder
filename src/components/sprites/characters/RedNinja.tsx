/**
 * RedNinja Sprite Component
 * Enhanced with gradients, fire effects, and detailed features
 */

export function RedNinja({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Red suit gradient */}
        <linearGradient id="redNinjaSuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4444" />
          <stop offset="50%" stopColor="#DC143C" />
          <stop offset="100%" stopColor="#8B0000" />
        </linearGradient>
        {/* Dark red accent gradient */}
        <linearGradient id="redNinjaDarkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A00000" />
          <stop offset="50%" stopColor="#8B0000" />
          <stop offset="100%" stopColor="#660000" />
        </linearGradient>
        {/* Skin gradient */}
        <linearGradient id="redNinjaSkinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </linearGradient>
        {/* Fire gradient */}
        <linearGradient id="redNinjaFireGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF4500" />
          <stop offset="30%" stopColor="#FF6600" />
          <stop offset="60%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFFF00" />
        </linearGradient>
        {/* Sword blade gradient */}
        <linearGradient id="redNinjaSwordGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#E0E0E0" />
          <stop offset="70%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#A0A0A0" />
        </linearGradient>
        {/* Sword handle gradient */}
        <linearGradient id="redNinjaHandleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="50%" stopColor="#5C3317" />
          <stop offset="100%" stopColor="#3D2314" />
        </linearGradient>
        {/* Fire glow */}
        <radialGradient id="redNinjaFireGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFF00" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#FF6600" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF0000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Fire aura effect */}
      <ellipse cx="32" cy="40" rx="20" ry="24" fill="url(#redNinjaFireGlow)" opacity="0.3" />

      {/* Hood shadow */}
      <circle cx="33" cy="19" r="14" fill="#660000" opacity="0.4" />

      {/* Hood / Kapuze */}
      <circle cx="32" cy="18" r="14" fill="url(#redNinjaSuitGradient)" />

      {/* Hood highlight */}
      <ellipse cx="28" cy="12" rx="6" ry="4" fill="#FF4444" opacity="0.4" />

      {/* Hood folds */}
      <path d="M20 14 Q26 10 32 10 Q38 10 44 14" stroke="#8B0000" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Headband / Stirnband */}
      <rect x="17" y="10" width="30" height="5" fill="url(#redNinjaDarkGradient)" rx="2" />
      <rect x="19" y="11" width="26" height="2" fill="#A00000" opacity="0.4" />

      {/* Headband tails flowing */}
      <path d="M47 12 Q52 14 54 20" stroke="url(#redNinjaDarkGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M47 13 Q50 16 51 22" stroke="url(#redNinjaDarkGradient)" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Eye slit / Augen-Schlitz */}
      <rect x="19" y="14" width="26" height="10" fill="url(#redNinjaSkinGradient)" rx="3" />

      {/* Eye slit shadow */}
      <rect x="19" y="14" width="26" height="2" fill="#8B0000" opacity="0.15" />

      {/* Eyes - intense */}
      <ellipse cx="26" cy="19" rx="3.5" ry="3" fill="white" />
      <ellipse cx="38" cy="19" rx="3.5" ry="3" fill="white" />
      <circle cx="26" cy="19" r="2.5" fill="#1A1A1A" />
      <circle cx="38" cy="19" r="2.5" fill="#1A1A1A" />
      <circle cx="26" cy="19" r="1.2" fill="black" />
      <circle cx="38" cy="19" r="1.2" fill="black" />
      {/* Eye shine */}
      <circle cx="27" cy="18" r="1" fill="white" />
      <circle cx="39" cy="18" r="1" fill="white" />

      {/* Fierce eyebrows */}
      <path d="M22 15 L30 17" stroke="#333333" strokeWidth="1.2" />
      <path d="M42 15 L34 17" stroke="#333333" strokeWidth="1.2" />

      {/* Body / Körper */}
      <rect x="19" y="32" width="26" height="21" fill="url(#redNinjaSuitGradient)" rx="3" />

      {/* Body shading */}
      <rect x="19" y="32" width="9" height="21" fill="#8B0000" opacity="0.25" rx="3" />

      {/* Chest wrap detail */}
      <path d="M22 34 L42 38" stroke="#A00000" strokeWidth="1" opacity="0.4" />
      <path d="M22 38 L42 42" stroke="#A00000" strokeWidth="1" opacity="0.4" />

      {/* Belt / Gürtel */}
      <rect x="17" y="40" width="30" height="5" fill="url(#redNinjaDarkGradient)" rx="2" />

      {/* Belt knot */}
      <circle cx="32" cy="42" r="3" fill="#8B0000" />
      <path d="M32 45 L30 52" stroke="#8B0000" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M32 45 L34 50" stroke="#8B0000" strokeWidth="2" strokeLinecap="round" />

      {/* Fire symbol on chest */}
      <polygon points="32,33 28,38 30,38 28,43 36,36 33,36 36,33" fill="url(#redNinjaFireGradient)" />

      {/* Arms / Arme */}
      <rect x="6" y="32" width="13" height="7" fill="url(#redNinjaSuitGradient)" rx="3" />
      <rect x="45" y="32" width="13" height="7" fill="url(#redNinjaSuitGradient)" rx="3" />

      {/* Arm shading */}
      <rect x="6" y="32" width="5" height="7" fill="#8B0000" opacity="0.2" rx="3" />

      {/* Arm wrappings */}
      <line x1="8" y1="33" x2="17" y2="37" stroke="#A00000" strokeWidth="0.5" opacity="0.4" />
      <line x1="47" y1="33" x2="56" y2="37" stroke="#A00000" strokeWidth="0.5" opacity="0.4" />

      {/* Hands */}
      <circle cx="5" cy="36" r="4" fill="url(#redNinjaSuitGradient)" />
      <circle cx="59" cy="36" r="4" fill="url(#redNinjaSuitGradient)" />

      {/* Katana on back */}
      <rect x="45" y="4" width="4" height="40" fill="url(#redNinjaSwordGradient)" />
      {/* Sword edge highlight */}
      <rect x="45" y="4" width="1" height="40" fill="#FFFFFF" opacity="0.5" />
      {/* Sword tip */}
      <polygon points="45,4 49,4 47,0" fill="url(#redNinjaSwordGradient)" />

      {/* Sword handle / Griff */}
      <rect x="43" y="42" width="8" height="9" fill="url(#redNinjaHandleGradient)" rx="1" />
      {/* Handle wrap pattern */}
      <path d="M44 43 L50 50" stroke="#3D2314" strokeWidth="1" />
      <path d="M44 46 L50 46" stroke="#3D2314" strokeWidth="1" />
      <path d="M44 50 L50 43" stroke="#3D2314" strokeWidth="1" />

      {/* Sword guard / Tsuba */}
      <ellipse cx="47" cy="42" rx="6" ry="2" fill="#8B0000" />
      <ellipse cx="47" cy="42" rx="4" ry="1" fill="#A00000" opacity="0.5" />

      {/* Legs / Beine */}
      <rect x="21" y="52" width="9" height="12" fill="url(#redNinjaSuitGradient)" rx="2" />
      <rect x="34" y="52" width="9" height="12" fill="url(#redNinjaSuitGradient)" rx="2" />

      {/* Leg shading */}
      <rect x="21" y="52" width="3" height="12" fill="#8B0000" opacity="0.2" rx="2" />
      <rect x="34" y="52" width="3" height="12" fill="#8B0000" opacity="0.2" rx="2" />

      {/* Leg wrappings */}
      <line x1="22" y1="54" x2="29" y2="56" stroke="#A00000" strokeWidth="0.5" opacity="0.4" />
      <line x1="22" y1="58" x2="29" y2="60" stroke="#A00000" strokeWidth="0.5" opacity="0.4" />
      <line x1="35" y1="54" x2="42" y2="56" stroke="#A00000" strokeWidth="0.5" opacity="0.4" />
      <line x1="35" y1="58" x2="42" y2="60" stroke="#A00000" strokeWidth="0.5" opacity="0.4" />

      {/* Tabi boots */}
      <path d="M21 62 L21 64 L26 64 L26 62" fill="#660000" />
      <path d="M26 62 L26 64 L30 64 L30 62" fill="#660000" />
      <path d="M34 62 L34 64 L38 64 L38 62" fill="#660000" />
      <path d="M38 62 L38 64 L43 64 L43 62" fill="#660000" />

      {/* Fire sparks */}
      <circle cx="12" cy="28" r="1.5" fill="#FFD700" opacity="0.7" />
      <circle cx="52" cy="28" r="1.5" fill="#FFD700" opacity="0.7" />
      <circle cx="8" cy="48" r="1" fill="#FF6600" opacity="0.6" />
      <circle cx="56" cy="48" r="1" fill="#FF6600" opacity="0.6" />
    </svg>
  );
}
