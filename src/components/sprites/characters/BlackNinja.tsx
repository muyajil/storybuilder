/**
 * BlackNinja Sprite Component
 * Enhanced with gradients and detailed features
 */


export function BlackNinja({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Hood gradient */}
        <radialGradient id="blackNinjaHoodGradient" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#333" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        {/* Body gradient */}
        <linearGradient id="blackNinjaBodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="50%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        {/* Skin gradient */}
        <radialGradient id="blackNinjaSkinGradient" cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="100%" stopColor="#FFDAB9" />
        </radialGradient>
        {/* Belt gradient */}
        <linearGradient id="blackNinjaBeltGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#444" />
          <stop offset="50%" stopColor="#333" />
          <stop offset="100%" stopColor="#222" />
        </linearGradient>
        {/* Scythe blade gradient */}
        <linearGradient id="blackNinjaBladeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0E0E0" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#909090" />
        </linearGradient>
        {/* Wood gradient */}
        <linearGradient id="blackNinjaWoodGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#6B3510" />
        </linearGradient>
        {/* Earth symbol gradient */}
        <radialGradient id="blackNinjaEarthGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#6B3510" />
        </radialGradient>
      </defs>

      {/* Kapuze / Hood */}
      <circle cx="32" cy="18" r="14" fill="url(#blackNinjaHoodGradient)" />
      {/* Hood highlight */}
      <ellipse cx="26" cy="12" rx="5" ry="3" fill="#444" opacity="0.3" />

      {/* Augen-Schlitz / Eye slit */}
      <rect x="20" y="14" width="24" height="8" fill="url(#blackNinjaSkinGradient)" rx="1" />
      {/* Eye slit shadow */}
      <rect x="20" y="14" width="24" height="2" fill="#000" opacity="0.2" />

      {/* Augen / Eyes - intense */}
      <ellipse cx="26" cy="18" rx="2.5" ry="2" fill="white" />
      <ellipse cx="38" cy="18" rx="2.5" ry="2" fill="white" />
      <circle cx="26" cy="18" r="1.5" fill="#1a1a1a" />
      <circle cx="38" cy="18" r="1.5" fill="#1a1a1a" />
      {/* Eye intensity */}
      <circle cx="25.5" cy="17.5" r="0.5" fill="white" />
      <circle cx="37.5" cy="17.5" r="0.5" fill="white" />

      {/* Stirnband / Headband */}
      <rect x="18" y="10" width="28" height="4" fill="url(#blackNinjaBeltGradient)" />
      {/* Headband knot tails */}
      <path d="M46 12 L52 8 L50 14 L46 12" fill="#333" />
      <path d="M46 12 L54 16 L48 14 L46 12" fill="#2a2a2a" />

      {/* Körper / Body */}
      <rect x="20" y="32" width="24" height="20" fill="url(#blackNinjaBodyGradient)" rx="2" />
      {/* Body fold lines */}
      <line x1="28" y1="32" x2="28" y2="52" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.5" />
      <line x1="36" y1="32" x2="36" y2="52" stroke="#0a0a0a" strokeWidth="0.5" opacity="0.5" />

      {/* Gürtel / Belt */}
      <rect x="18" y="40" width="28" height="4" fill="url(#blackNinjaBeltGradient)" />
      {/* Belt buckle */}
      <rect x="30" y="40" width="4" height="4" fill="#444" />

      {/* Erd-Symbol / Earth symbol */}
      <circle cx="32" cy="36" r="4" fill="url(#blackNinjaEarthGradient)" />
      {/* Earth detail */}
      <path d="M30 34 Q32 36 30 38" stroke="#4a3520" strokeWidth="0.5" fill="none" />
      <path d="M34 34 Q32 36 34 38" stroke="#4a3520" strokeWidth="0.5" fill="none" />

      {/* Arme / Arms */}
      <rect x="8" y="32" width="12" height="6" fill="url(#blackNinjaBodyGradient)" rx="2" />
      <rect x="44" y="32" width="12" height="6" fill="url(#blackNinjaBodyGradient)" rx="2" />
      {/* Arm wrappings */}
      <line x1="10" y1="33" x2="18" y2="33" stroke="#333" strokeWidth="0.5" />
      <line x1="10" y1="35" x2="18" y2="35" stroke="#333" strokeWidth="0.5" />
      <line x1="46" y1="33" x2="54" y2="33" stroke="#333" strokeWidth="0.5" />
      <line x1="46" y1="35" x2="54" y2="35" stroke="#333" strokeWidth="0.5" />

      {/* Hands */}
      <circle cx="8" cy="35" r="3" fill="url(#blackNinjaSkinGradient)" />

      {/* Scythe (Kama) */}
      <path d="M52 6 Q62 6 60 16 L54 14 Z" fill="url(#blackNinjaBladeGradient)" />
      {/* Blade edge */}
      <path d="M52 6 Q62 6 60 16" stroke="#666" strokeWidth="0.5" fill="none" />
      {/* Blade shine */}
      <path d="M54 8 Q58 8 58 12" stroke="white" strokeWidth="0.5" fill="none" opacity="0.5" />
      {/* Handle */}
      <rect x="50" y="14" width="3" height="24" fill="url(#blackNinjaWoodGradient)" rx="1" />
      {/* Handle wrap */}
      <line x1="50" y1="18" x2="53" y2="18" stroke="#333" strokeWidth="1" />
      <line x1="50" y1="22" x2="53" y2="22" stroke="#333" strokeWidth="1" />
      <line x1="50" y1="26" x2="53" y2="26" stroke="#333" strokeWidth="1" />

      {/* Beine / Legs */}
      <rect x="22" y="52" width="8" height="12" fill="url(#blackNinjaBodyGradient)" rx="2" />
      <rect x="34" y="52" width="8" height="12" fill="url(#blackNinjaBodyGradient)" rx="2" />
      {/* Leg wrappings */}
      <line x1="23" y1="56" x2="29" y2="56" stroke="#333" strokeWidth="0.5" />
      <line x1="23" y1="60" x2="29" y2="60" stroke="#333" strokeWidth="0.5" />
      <line x1="35" y1="56" x2="41" y2="56" stroke="#333" strokeWidth="0.5" />
      <line x1="35" y1="60" x2="41" y2="60" stroke="#333" strokeWidth="0.5" />

      {/* Tabi boots (split-toe) */}
      <path d="M22 62 L24 64 L26 62 L28 64 L30 62" fill="#1a1a1a" />
      <path d="M34 62 L36 64 L38 62 L40 64 L42 62" fill="#1a1a1a" />
    </svg>
  );
}
