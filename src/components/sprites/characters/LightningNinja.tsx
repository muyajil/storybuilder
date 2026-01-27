/**
 * LightningNinja Sprite Component
 * Enhanced with gradients, electric effects, and detailed features
 */

export function LightningNinja({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Yellow suit gradient */}
        <linearGradient id="lightningNinjaSuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        {/* Blue accent gradient */}
        <linearGradient id="lightningNinjaBlueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00BFFF" />
          <stop offset="50%" stopColor="#1E90FF" />
          <stop offset="100%" stopColor="#0066CC" />
        </linearGradient>
        {/* Electric glow gradient */}
        <radialGradient id="lightningNinjaGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#00BFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#00BFFF" stopOpacity="0" />
        </radialGradient>
        {/* Skin gradient */}
        <linearGradient id="lightningNinjaSkinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </linearGradient>
        {/* Lightning bolt gradient */}
        <linearGradient id="lightningNinjaBoltGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#00BFFF" />
          <stop offset="100%" stopColor="#1E90FF" />
        </linearGradient>
      </defs>

      {/* Electric aura effect */}
      <circle cx="32" cy="32" r="30" fill="url(#lightningNinjaGlow)" opacity="0.3" />

      {/* Hood / Kapuze */}
      <circle cx="32" cy="18" r="14" fill="url(#lightningNinjaSuitGradient)" />
      <circle cx="32" cy="16" r="12" fill="#FFE44D" opacity="0.3" />

      {/* Hood highlight */}
      <ellipse cx="28" cy="12" rx="6" ry="4" fill="#FFFFFF" opacity="0.2" />

      {/* Headband / Stirnband */}
      <rect x="18" y="10" width="28" height="5" fill="url(#lightningNinjaBlueGradient)" rx="2" />
      <rect x="20" y="11" width="24" height="2" fill="#00BFFF" opacity="0.4" />

      {/* Eye slit / Augen-Schlitz */}
      <rect x="20" y="14" width="24" height="9" fill="url(#lightningNinjaSkinGradient)" rx="2" />

      {/* Eyes - electric blue with glow */}
      <ellipse cx="26" cy="18" rx="3" ry="2.5" fill="#FFFFFF" />
      <ellipse cx="38" cy="18" rx="3" ry="2.5" fill="#FFFFFF" />
      <circle cx="26" cy="18" r="2" fill="url(#lightningNinjaBlueGradient)" />
      <circle cx="38" cy="18" r="2" fill="url(#lightningNinjaBlueGradient)" />
      <circle cx="26" cy="17.5" r="0.8" fill="#FFFFFF" />
      <circle cx="38" cy="17.5" r="0.8" fill="#FFFFFF" />
      {/* Eye glow */}
      <circle cx="26" cy="18" r="4" fill="#00BFFF" opacity="0.2" />
      <circle cx="38" cy="18" r="4" fill="#00BFFF" opacity="0.2" />

      {/* Body / Körper */}
      <rect x="20" y="32" width="24" height="20" fill="url(#lightningNinjaSuitGradient)" rx="3" />

      {/* Body shading */}
      <rect x="20" y="32" width="8" height="20" fill="#DAA520" opacity="0.3" rx="3" />

      {/* Belt / Gürtel */}
      <rect x="17" y="40" width="30" height="5" fill="url(#lightningNinjaBlueGradient)" rx="2" />
      <rect x="29" y="39" width="6" height="7" fill="url(#lightningNinjaBlueGradient)" rx="1" />

      {/* Lightning symbol on chest */}
      <polygon points="32,33 27,39 30,39 27,46 38,37 34,37 38,33" fill="url(#lightningNinjaBoltGradient)" />
      <polygon points="32,34 28,39 30.5,39 28,44 36,38 33.5,38 36,34" fill="#FFFFFF" opacity="0.5" />

      {/* Arms / Arme */}
      <rect x="7" y="32" width="13" height="6" fill="url(#lightningNinjaSuitGradient)" rx="3" />
      <rect x="44" y="32" width="13" height="6" fill="url(#lightningNinjaSuitGradient)" rx="3" />

      {/* Hands with electric effect */}
      <circle cx="6" cy="35" r="4" fill="url(#lightningNinjaSuitGradient)" />
      <circle cx="58" cy="35" r="4" fill="url(#lightningNinjaSuitGradient)" />

      {/* Lightning bolts in hands */}
      <polygon points="4,26 2,34 5,31 2,40 8,32 5,34 8,26" fill="url(#lightningNinjaBoltGradient)" />
      <polygon points="60,26 62,34 59,31 62,40 56,32 59,34 56,26" fill="url(#lightningNinjaBoltGradient)" />

      {/* Bolt glow effects */}
      <circle cx="4" cy="33" r="6" fill="#00BFFF" opacity="0.3" />
      <circle cx="60" cy="33" r="6" fill="#00BFFF" opacity="0.3" />

      {/* Legs / Beine */}
      <rect x="22" y="52" width="8" height="12" fill="url(#lightningNinjaSuitGradient)" rx="2" />
      <rect x="34" y="52" width="8" height="12" fill="url(#lightningNinjaSuitGradient)" rx="2" />

      {/* Leg shading */}
      <rect x="22" y="52" width="3" height="12" fill="#DAA520" opacity="0.3" rx="2" />
      <rect x="34" y="52" width="3" height="12" fill="#DAA520" opacity="0.3" rx="2" />

      {/* Electric sparks around */}
      <circle cx="10" cy="24" r="2.5" fill="url(#lightningNinjaGlow)" />
      <circle cx="54" cy="24" r="2.5" fill="url(#lightningNinjaGlow)" />
      <circle cx="14" cy="50" r="1.5" fill="#00BFFF" opacity="0.6" />
      <circle cx="50" cy="50" r="1.5" fill="#00BFFF" opacity="0.6" />

      {/* Small lightning accents */}
      <path d="M12 22 L10 26 L12 25 L10 29" stroke="#00BFFF" strokeWidth="1" fill="none" />
      <path d="M52 22 L54 26 L52 25 L54 29" stroke="#00BFFF" strokeWidth="1" fill="none" />
    </svg>
  );
}
