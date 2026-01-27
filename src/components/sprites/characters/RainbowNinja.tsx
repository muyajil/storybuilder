/**
 * RainbowNinja Sprite Component
 * Enhanced with rich gradients, sparkle effects, and detailed features
 */

export function RainbowNinja({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Main rainbow gradient */}
        <linearGradient id="rainbowNinjaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF0000" />
          <stop offset="17%" stopColor="#FF7F00" />
          <stop offset="33%" stopColor="#FFFF00" />
          <stop offset="50%" stopColor="#00FF00" />
          <stop offset="67%" stopColor="#0000FF" />
          <stop offset="83%" stopColor="#4B0082" />
          <stop offset="100%" stopColor="#8B00FF" />
        </linearGradient>
        {/* Vertical rainbow gradient */}
        <linearGradient id="rainbowNinjaVertical" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF0000" />
          <stop offset="14%" stopColor="#FF7F00" />
          <stop offset="28%" stopColor="#FFFF00" />
          <stop offset="42%" stopColor="#00FF00" />
          <stop offset="56%" stopColor="#00BFFF" />
          <stop offset="70%" stopColor="#0000FF" />
          <stop offset="85%" stopColor="#4B0082" />
          <stop offset="100%" stopColor="#8B00FF" />
        </linearGradient>
        {/* Skin gradient */}
        <linearGradient id="rainbowNinjaSkinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </linearGradient>
        {/* Gold belt gradient */}
        <linearGradient id="rainbowNinjaGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Sparkle glow */}
        <radialGradient id="rainbowNinjaSparkle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        {/* Rainbow aura */}
        <radialGradient id="rainbowNinjaAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
          <stop offset="30%" stopColor="#FF69B4" stopOpacity="0.2" />
          <stop offset="60%" stopColor="#00BFFF" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#8B00FF" stopOpacity="0" />
        </radialGradient>
        {/* Pink eye gradient */}
        <radialGradient id="rainbowNinjaEyeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF91A4" />
          <stop offset="100%" stopColor="#FF69B4" />
        </radialGradient>
      </defs>

      {/* Rainbow aura effect */}
      <circle cx="32" cy="32" r="30" fill="url(#rainbowNinjaAura)" />

      {/* Hood shadow */}
      <circle cx="33" cy="19" r="14" fill="#4B0082" opacity="0.3" />

      {/* Hood / Kapuze */}
      <circle cx="32" cy="18" r="14" fill="url(#rainbowNinjaGradient)" />

      {/* Hood highlight */}
      <ellipse cx="28" cy="12" rx="6" ry="4" fill="#FFFFFF" opacity="0.2" />

      {/* Hood detail folds */}
      <path d="M20 14 Q26 10 32 10 Q38 10 44 14" stroke="url(#rainbowNinjaVertical)" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Headband / Stirnband */}
      <rect x="17" y="10" width="30" height="5" fill="url(#rainbowNinjaGradient)" rx="2" />
      <rect x="19" y="11" width="26" height="2" fill="#FFFFFF" opacity="0.3" />

      {/* Eye slit / Augen-Schlitz */}
      <rect x="19" y="14" width="26" height="10" fill="url(#rainbowNinjaSkinGradient)" rx="3" />

      {/* Eye slit shadow */}
      <rect x="19" y="14" width="26" height="2" fill="#333333" opacity="0.15" />

      {/* Eyes - sparkly rainbow */}
      <ellipse cx="26" cy="19" rx="3.5" ry="3" fill="white" />
      <ellipse cx="38" cy="19" rx="3.5" ry="3" fill="white" />
      <circle cx="26" cy="19" r="2.5" fill="url(#rainbowNinjaEyeGradient)" />
      <circle cx="38" cy="19" r="2.5" fill="url(#rainbowNinjaEyeGradient)" />
      <circle cx="26" cy="19" r="1.2" fill="#4B0082" />
      <circle cx="38" cy="19" r="1.2" fill="#4B0082" />

      {/* Eye sparkles */}
      <circle cx="27" cy="18" r="1" fill="white" />
      <circle cx="39" cy="18" r="1" fill="white" />
      <circle cx="25" cy="20" r="0.5" fill="white" opacity="0.7" />
      <circle cx="37" cy="20" r="0.5" fill="white" opacity="0.7" />

      {/* Body / Körper */}
      <rect x="19" y="32" width="26" height="21" fill="url(#rainbowNinjaVertical)" rx="3" />

      {/* Body shading */}
      <rect x="19" y="32" width="9" height="21" fill="#4B0082" opacity="0.15" rx="3" />

      {/* Belt / Gürtel */}
      <rect x="16" y="40" width="32" height="6" fill="url(#rainbowNinjaGoldGradient)" rx="2" />
      <rect x="18" y="41" width="28" height="3" fill="#FFE44D" opacity="0.3" rx="1" />

      {/* Rainbow symbol on chest */}
      <path d="M24,34 Q32,28 40,34" fill="none" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" />
      <path d="M24,36 Q32,30 40,36" fill="none" stroke="#FF7F00" strokeWidth="2" strokeLinecap="round" />
      <path d="M24,38 Q32,32 40,38" fill="none" stroke="#FFFF00" strokeWidth="2" strokeLinecap="round" />
      <path d="M26,40 Q32,36 38,40" fill="none" stroke="#00FF00" strokeWidth="1.5" strokeLinecap="round" />

      {/* Arms / Arme */}
      <rect x="6" y="32" width="13" height="7" fill="url(#rainbowNinjaGradient)" rx="3" />
      <rect x="45" y="32" width="13" height="7" fill="url(#rainbowNinjaGradient)" rx="3" />

      {/* Arm highlight */}
      <rect x="6" y="32" width="13" height="2" fill="#FFFFFF" opacity="0.2" rx="3" />
      <rect x="45" y="32" width="13" height="2" fill="#FFFFFF" opacity="0.2" rx="3" />

      {/* Hands */}
      <circle cx="5" cy="36" r="4" fill="url(#rainbowNinjaGradient)" />
      <circle cx="59" cy="36" r="4" fill="url(#rainbowNinjaGradient)" />

      {/* Rainbow fans in hands */}
      <ellipse cx="4" cy="30" rx="5" ry="8" fill="url(#rainbowNinjaVertical)" opacity="0.8" />
      <ellipse cx="60" cy="30" rx="5" ry="8" fill="url(#rainbowNinjaVertical)" opacity="0.8" />

      {/* Fan highlights */}
      <ellipse cx="4" cy="28" rx="3" ry="5" fill="#FFFFFF" opacity="0.2" />
      <ellipse cx="60" cy="28" rx="3" ry="5" fill="#FFFFFF" opacity="0.2" />

      {/* Legs / Beine */}
      <rect x="21" y="52" width="9" height="12" fill="#8B00FF" rx="2" />
      <rect x="34" y="52" width="9" height="12" fill="#0000FF" rx="2" />

      {/* Leg gradient overlay */}
      <rect x="21" y="52" width="9" height="12" fill="url(#rainbowNinjaVertical)" opacity="0.5" rx="2" />
      <rect x="34" y="52" width="9" height="12" fill="url(#rainbowNinjaVertical)" opacity="0.5" rx="2" />

      {/* Leg shading */}
      <rect x="21" y="52" width="3" height="12" fill="#4B0082" opacity="0.2" rx="2" />
      <rect x="34" y="52" width="3" height="12" fill="#4B0082" opacity="0.2" rx="2" />

      {/* Sparkles all around */}
      <circle cx="14" cy="24" r="2" fill="url(#rainbowNinjaSparkle)" />
      <circle cx="50" cy="24" r="2" fill="url(#rainbowNinjaSparkle)" />
      <circle cx="10" cy="50" r="1.5" fill="url(#rainbowNinjaSparkle)" />
      <circle cx="54" cy="50" r="1.5" fill="url(#rainbowNinjaSparkle)" />
      <circle cx="32" cy="4" r="1.5" fill="url(#rainbowNinjaSparkle)" />

      {/* Golden sparkle accents */}
      <circle cx="16" cy="42" r="1.5" fill="#FFD700" />
      <circle cx="48" cy="42" r="1.5" fill="#FFD700" />

      {/* Small star shapes */}
      <polygon points="12,48 13,50 15,50 13.5,51.5 14,54 12,52.5 10,54 10.5,51.5 9,50 11,50" fill="#FFD700" opacity="0.7" />
      <polygon points="52,48 53,50 55,50 53.5,51.5 54,54 52,52.5 50,54 50.5,51.5 49,50 51,50" fill="#FFD700" opacity="0.7" />
    </svg>
  );
}
