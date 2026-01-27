/**
 * Bicycle Sprite Component
 * Enhanced with gradients and detailed features
 */

import type { SpriteProps } from '../types';

export function Bicycle({ size = 64, color = '#FF4500' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Wheel gradient */}
        <radialGradient id="bicycleWheelGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#666" />
          <stop offset="70%" stopColor="#333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Tire gradient */}
        <radialGradient id="bicycleTireGradient" cx="50%" cy="50%" r="50%">
          <stop offset="80%" stopColor="#333" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </radialGradient>
        {/* Hub gradient */}
        <radialGradient id="bicycleHubGradient" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#888" />
          <stop offset="100%" stopColor="#444" />
        </radialGradient>
        {/* Frame gradient */}
        <linearGradient id="bicycleFrameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6633" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#CC3300" />
        </linearGradient>
        {/* Handlebar gradient */}
        <linearGradient id="bicycleHandlebarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#555" />
          <stop offset="50%" stopColor="#333" />
          <stop offset="100%" stopColor="#555" />
        </linearGradient>
        {/* Seat gradient */}
        <linearGradient id="bicycleSeatGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#444" />
          <stop offset="100%" stopColor="#222" />
        </linearGradient>
      </defs>

      {/* Rear wheel */}
      <circle cx="14" cy="48" r="12" fill="none" stroke="url(#bicycleTireGradient)" strokeWidth="3" />
      {/* Rear wheel spokes */}
      <line x1="14" y1="38" x2="14" y2="58" stroke="#666" strokeWidth="0.5" />
      <line x1="4" y1="48" x2="24" y2="48" stroke="#666" strokeWidth="0.5" />
      <line x1="7" y1="41" x2="21" y2="55" stroke="#666" strokeWidth="0.5" />
      <line x1="7" y1="55" x2="21" y2="41" stroke="#666" strokeWidth="0.5" />
      {/* Rear hub */}
      <circle cx="14" cy="48" r="3" fill="url(#bicycleHubGradient)" />
      <circle cx="14" cy="48" r="1.5" fill="#888" />

      {/* Front wheel */}
      <circle cx="50" cy="48" r="12" fill="none" stroke="url(#bicycleTireGradient)" strokeWidth="3" />
      {/* Front wheel spokes */}
      <line x1="50" y1="38" x2="50" y2="58" stroke="#666" strokeWidth="0.5" />
      <line x1="40" y1="48" x2="60" y2="48" stroke="#666" strokeWidth="0.5" />
      <line x1="43" y1="41" x2="57" y2="55" stroke="#666" strokeWidth="0.5" />
      <line x1="43" y1="55" x2="57" y2="41" stroke="#666" strokeWidth="0.5" />
      {/* Front hub */}
      <circle cx="50" cy="48" r="3" fill="url(#bicycleHubGradient)" />
      <circle cx="50" cy="48" r="1.5" fill="#888" />

      {/* Frame - main triangle */}
      <line x1="14" y1="48" x2="32" y2="32" stroke="url(#bicycleFrameGradient)" strokeWidth="3" strokeLinecap="round" />
      <line x1="32" y1="32" x2="50" y2="48" stroke="url(#bicycleFrameGradient)" strokeWidth="3" strokeLinecap="round" />
      <line x1="14" y1="48" x2="32" y2="48" stroke="url(#bicycleFrameGradient)" strokeWidth="3" strokeLinecap="round" />

      {/* Frame - seat tube and top tube */}
      <line x1="32" y1="32" x2="28" y2="24" stroke="url(#bicycleFrameGradient)" strokeWidth="3" strokeLinecap="round" />
      <line x1="32" y1="48" x2="44" y2="32" stroke="url(#bicycleFrameGradient)" strokeWidth="3" strokeLinecap="round" />

      {/* Fork */}
      <line x1="44" y1="32" x2="50" y2="48" stroke="url(#bicycleFrameGradient)" strokeWidth="3" strokeLinecap="round" />

      {/* Head tube and stem */}
      <line x1="44" y1="32" x2="44" y2="22" stroke="url(#bicycleFrameGradient)" strokeWidth="3" strokeLinecap="round" />

      {/* Handlebar */}
      <path d="M38 20 Q44 18 50 20" stroke="url(#bicycleHandlebarGradient)" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Handle grips */}
      <rect x="36" y="18" width="4" height="4" fill="#222" rx="1" />
      <rect x="48" y="18" width="4" height="4" fill="#222" rx="1" />

      {/* Seat */}
      <ellipse cx="26" cy="22" rx="7" ry="3" fill="url(#bicycleSeatGradient)" />
      {/* Seat post */}
      <line x1="28" y1="24" x2="32" y2="32" stroke="#666" strokeWidth="2" />

      {/* Pedal crank */}
      <circle cx="32" cy="48" r="5" fill="url(#bicycleHubGradient)" />
      <circle cx="32" cy="48" r="2" fill="#666" />
      {/* Chain ring teeth suggestion */}
      <circle cx="32" cy="48" r="5" fill="none" stroke="#555" strokeWidth="0.5" strokeDasharray="1,1" />

      {/* Pedals */}
      <rect x="27" y="51" width="10" height="3" fill="#444" rx="1" />
      <rect x="27" y="51" width="10" height="1" fill="#555" rx="0.5" />

      {/* Chain (simplified) */}
      <path d="M18 48 Q25 52 32 48" stroke="#444" strokeWidth="1" fill="none" strokeDasharray="1,1" />

      {/* Reflector on rear wheel */}
      <circle cx="3" cy="48" r="2" fill="#FF3333" opacity="0.8" />

      {/* Frame highlight */}
      <line x1="16" y1="46" x2="30" y2="34" stroke="white" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}
