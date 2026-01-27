/**
 * GreenNinja Sprite Component
 * Enhanced with gradients, detailed outfit, and expressive features
 */

export function GreenNinja({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Skin gradient */}
        <radialGradient id="greenNinjaSkinGradient" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#DEBB9B" />
        </radialGradient>
        {/* Outfit gradient */}
        <linearGradient id="greenNinjaOutfitGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#32CD32" />
          <stop offset="50%" stopColor="#228B22" />
          <stop offset="100%" stopColor="#145A14" />
        </linearGradient>
        {/* Darker outfit gradient */}
        <linearGradient id="greenNinjaDarkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1B8B1B" />
          <stop offset="100%" stopColor="#0A4A0A" />
        </linearGradient>
        {/* Sword gradient */}
        <linearGradient id="greenNinjaSwordGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F0F0F0" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#808080" />
        </linearGradient>
        {/* Gold gradient */}
        <linearGradient id="greenNinjaGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE55C" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Eye glow */}
        <radialGradient id="greenNinjaEyeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#90EE90" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#228B22" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ninja hood/mask */}
      <circle cx="32" cy="18" r="15" fill="url(#greenNinjaOutfitGradient)" />
      {/* Hood details */}
      <path d="M18 14 Q32 8 46 14" stroke="#145A14" strokeWidth="1" fill="none" opacity="0.5" />
      <ellipse cx="32" cy="8" rx="6" ry="3" fill="#145A14" opacity="0.3" />

      {/* Face opening/eye slit area */}
      <rect x="19" y="14" width="26" height="10" fill="url(#greenNinjaSkinGradient)" rx="2" />
      {/* Shadow above eyes */}
      <rect x="19" y="14" width="26" height="3" fill="#145A14" opacity="0.2" />

      {/* Intense ninja eyes */}
      <ellipse cx="26" cy="18" rx="3" ry="2.5" fill="#1A1A1A" />
      <ellipse cx="38" cy="18" rx="3" ry="2.5" fill="#1A1A1A" />
      {/* Eye highlights */}
      <circle cx="25" cy="17" r="1" fill="white" />
      <circle cx="37" cy="17" r="1" fill="white" />
      {/* Intense gaze glow */}
      <ellipse cx="26" cy="18" rx="5" ry="4" fill="url(#greenNinjaEyeGlow)" />
      <ellipse cx="38" cy="18" rx="5" ry="4" fill="url(#greenNinjaEyeGlow)" />

      {/* Determined eyebrows */}
      <path d="M22 14 L28 16" stroke="#4A3728" strokeWidth="1.5" fill="none" />
      <path d="M42 14 L36 16" stroke="#4A3728" strokeWidth="1.5" fill="none" />

      {/* Headband */}
      <rect x="17" y="10" width="30" height="5" fill="url(#greenNinjaDarkGradient)" />
      {/* Headband tails */}
      <path d="M47 12 Q52 10 54 16 Q50 14 48 14" fill="url(#greenNinjaDarkGradient)" />
      <path d="M17 12 Q12 10 10 16 Q14 14 16 14" fill="url(#greenNinjaDarkGradient)" />
      {/* Headband symbol */}
      <rect x="28" y="11" width="8" height="3" fill="url(#greenNinjaGoldGradient)" rx="1" />

      {/* Ninja body/gi */}
      <rect x="18" y="32" width="28" height="22" fill="url(#greenNinjaOutfitGradient)" rx="3" />
      {/* Gi overlap */}
      <path d="M24 32 L32 40 L40 32" fill="#145A14" opacity="0.5" />
      {/* Gi folds */}
      <path d="M22 36 Q32 42 42 36" stroke="#145A14" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* Belt/obi */}
      <rect x="16" y="40" width="32" height="5" fill="url(#greenNinjaDarkGradient)" />
      {/* Belt knot */}
      <ellipse cx="32" cy="42" rx="4" ry="3" fill="url(#greenNinjaDarkGradient)" />
      {/* Belt tails */}
      <rect x="28" y="44" width="3" height="8" fill="url(#greenNinjaDarkGradient)" rx="1" />
      <rect x="33" y="44" width="3" height="6" fill="url(#greenNinjaDarkGradient)" rx="1" />

      {/* Energy symbol on chest */}
      <polygon points="32,34 27,42 37,42" fill="url(#greenNinjaGoldGradient)" />
      {/* Symbol glow */}
      <polygon points="32,35 29,40 35,40" fill="#FFFF80" opacity="0.5" />

      {/* Arms */}
      <rect x="6" y="32" width="12" height="6" fill="url(#greenNinjaOutfitGradient)" rx="2" />
      <rect x="46" y="32" width="12" height="6" fill="url(#greenNinjaOutfitGradient)" rx="2" />
      {/* Arm wraps */}
      <rect x="6" y="34" width="12" height="1" fill="#145A14" />
      <rect x="46" y="34" width="12" height="1" fill="#145A14" />

      {/* Hands */}
      <circle cx="6" cy="36" r="3" fill="url(#greenNinjaSkinGradient)" />
      <circle cx="58" cy="36" r="3" fill="url(#greenNinjaSkinGradient)" />

      {/* Dual Katana swords */}
      {/* Left sword */}
      <rect x="2" y="8" width="3" height="30" fill="url(#greenNinjaSwordGradient)" />
      <rect x="1" y="36" width="5" height="3" fill="#5C3317" rx="1" />
      <rect x="0" y="38" width="7" height="2" fill="url(#greenNinjaGoldGradient)" rx="1" />
      {/* Blade edge */}
      <line x1="2" y1="8" x2="2" y2="36" stroke="#E0E0E0" strokeWidth="0.5" />

      {/* Right sword */}
      <rect x="59" y="8" width="3" height="30" fill="url(#greenNinjaSwordGradient)" />
      <rect x="58" y="36" width="5" height="3" fill="#5C3317" rx="1" />
      <rect x="57" y="38" width="7" height="2" fill="url(#greenNinjaGoldGradient)" rx="1" />
      {/* Blade edge */}
      <line x1="62" y1="8" x2="62" y2="36" stroke="#E0E0E0" strokeWidth="0.5" />

      {/* Legs */}
      <rect x="20" y="52" width="10" height="12" fill="url(#greenNinjaOutfitGradient)" rx="2" />
      <rect x="34" y="52" width="10" height="12" fill="url(#greenNinjaOutfitGradient)" rx="2" />
      {/* Leg wraps */}
      <rect x="20" y="56" width="10" height="1" fill="#145A14" />
      <rect x="34" y="56" width="10" height="1" fill="#145A14" />
      <rect x="20" y="60" width="10" height="1" fill="#145A14" />
      <rect x="34" y="60" width="10" height="1" fill="#145A14" />

      {/* Ninja tabi boots */}
      <ellipse cx="25" cy="64" rx="6" ry="2" fill="url(#greenNinjaDarkGradient)" />
      <ellipse cx="39" cy="64" rx="6" ry="2" fill="url(#greenNinjaDarkGradient)" />
      {/* Split toe detail */}
      <line x1="25" y1="62" x2="25" y2="64" stroke="#0A4A0A" strokeWidth="1" />
      <line x1="39" y1="62" x2="39" y2="64" stroke="#0A4A0A" strokeWidth="1" />
    </svg>
  );
}
