/**
 * FlowerBunny Sprite Component
 * Enhanced with soft gradients, fluffy texture, and adorable floral details
 */

import type { SpriteProps } from '../types';

export function FlowerBunny({ size = 64, color = '#98FB98' }: SpriteProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <defs>
        {/* Body gradient */}
        <radialGradient id="flowerBunnyBodyGrad" cx="40%" cy="30%">
          <stop offset="0%" stopColor="#B0FFB0" />
          <stop offset="50%" stopColor={color} />
          <stop offset="100%" stopColor="#66CD66" />
        </radialGradient>
        {/* Head gradient */}
        <radialGradient id="flowerBunnyHeadGrad" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#B0FFB0" />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor="#78D878" />
        </radialGradient>
        {/* Ear gradient */}
        <linearGradient id="flowerBunnyEarGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor="#B0FFB0" />
        </linearGradient>
        {/* Flower gradient */}
        <radialGradient id="flowerBunnyFlowerGrad" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFB6C1" />
          <stop offset="70%" stopColor="#FF69B4" />
          <stop offset="100%" stopColor="#DB5698" />
        </radialGradient>
        {/* Flower center gradient */}
        <radialGradient id="flowerBunnyCenterGrad" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#FFE44D" />
          <stop offset="100%" stopColor="#FFD700" />
        </radialGradient>
        {/* Eye gradient */}
        <radialGradient id="flowerBunnyEyeGrad" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#FF85C0" />
          <stop offset="50%" stopColor="#FF69B4" />
          <stop offset="100%" stopColor="#DB5698" />
        </radialGradient>
        {/* Leaf gradient */}
        <linearGradient id="flowerBunnyLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#32CD32" />
          <stop offset="50%" stopColor="#228B22" />
          <stop offset="100%" stopColor="#006400" />
        </linearGradient>
        {/* Cheek gradient */}
        <radialGradient id="flowerBunnyCheekGrad" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFB6C1" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFB6C1" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Body with gradient */}
      <ellipse cx="32" cy="44" rx="14" ry="12" fill="url(#flowerBunnyBodyGrad)" />
      {/* Body highlight */}
      <ellipse cx="28" cy="40" rx="8" ry="6" fill="#C0FFC0" opacity="0.4" />
      {/* Body shadow */}
      <ellipse cx="34" cy="52" rx="10" ry="4" fill="#228B22" opacity="0.15" />
      {/* Fluffy texture */}
      <path d="M22,42 Q24,44 22,46" stroke="#78D878" strokeWidth="0.6" fill="none" opacity="0.4" />
      <path d="M42,42 Q40,44 42,46" stroke="#78D878" strokeWidth="0.6" fill="none" opacity="0.4" />

      {/* Head with gradient */}
      <circle cx="32" cy="28" r="16" fill="url(#flowerBunnyHeadGrad)" />
      {/* Head highlight */}
      <ellipse cx="28" cy="22" rx="8" ry="6" fill="#C0FFC0" opacity="0.4" />

      {/* Ears with gradient */}
      <ellipse cx="20" cy="10" rx="6" ry="14" fill="url(#flowerBunnyEarGrad)" />
      <ellipse cx="44" cy="10" rx="6" ry="14" fill="url(#flowerBunnyEarGrad)" />
      {/* Ear inner */}
      <ellipse cx="20" cy="10" rx="3.5" ry="10" fill="#FFDAB9" opacity="0.5" />
      <ellipse cx="44" cy="10" rx="3.5" ry="10" fill="#FFDAB9" opacity="0.5" />

      {/* Flowers on ears */}
      {/* Left flower petals */}
      <ellipse cx="20" cy="2" rx="2" ry="3" fill="url(#flowerBunnyFlowerGrad)" />
      <ellipse cx="17" cy="4" rx="3" ry="2" fill="url(#flowerBunnyFlowerGrad)" />
      <ellipse cx="23" cy="4" rx="3" ry="2" fill="url(#flowerBunnyFlowerGrad)" />
      <ellipse cx="18" cy="6" rx="2" ry="3" fill="url(#flowerBunnyFlowerGrad)" />
      <ellipse cx="22" cy="6" rx="2" ry="3" fill="url(#flowerBunnyFlowerGrad)" />
      {/* Left flower center */}
      <circle cx="20" cy="4" r="2.5" fill="url(#flowerBunnyCenterGrad)" />

      {/* Right flower petals */}
      <ellipse cx="44" cy="2" rx="2" ry="3" fill="url(#flowerBunnyFlowerGrad)" />
      <ellipse cx="41" cy="4" rx="3" ry="2" fill="url(#flowerBunnyFlowerGrad)" />
      <ellipse cx="47" cy="4" rx="3" ry="2" fill="url(#flowerBunnyFlowerGrad)" />
      <ellipse cx="42" cy="6" rx="2" ry="3" fill="url(#flowerBunnyFlowerGrad)" />
      <ellipse cx="46" cy="6" rx="2" ry="3" fill="url(#flowerBunnyFlowerGrad)" />
      {/* Right flower center */}
      <circle cx="44" cy="4" r="2.5" fill="url(#flowerBunnyCenterGrad)" />

      {/* Eyes with depth */}
      <ellipse cx="26" cy="26" rx="5" ry="5.5" fill="white" />
      <ellipse cx="38" cy="26" rx="5" ry="5.5" fill="white" />
      {/* Eye shadow */}
      <ellipse cx="26" cy="27" rx="4.5" ry="5" fill="#f8f8f8" />
      <ellipse cx="38" cy="27" rx="4.5" ry="5" fill="#f8f8f8" />
      {/* Pupils with gradient */}
      <circle cx="26" cy="26" r="3.5" fill="url(#flowerBunnyEyeGrad)" />
      <circle cx="38" cy="26" r="3.5" fill="url(#flowerBunnyEyeGrad)" />
      {/* Eye sparkles */}
      <circle cx="25" cy="25" r="1.2" fill="white" />
      <circle cx="37" cy="25" r="1.2" fill="white" />
      <circle cx="27" cy="27" r="0.5" fill="white" />
      <circle cx="39" cy="27" r="0.5" fill="white" />

      {/* Nose with gradient */}
      <ellipse cx="32" cy="32" rx="2.2" ry="1.8" fill="url(#flowerBunnyFlowerGrad)" />
      {/* Nose highlight */}
      <ellipse cx="31.5" cy="31.5" rx="0.8" ry="0.5" fill="#FFD0D8" opacity="0.6" />

      {/* Cute mouth */}
      <path d="M30 35 L32 38 L34 35" stroke="#FF69B4" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Rosy cheeks with gradient */}
      <ellipse cx="20" cy="32" rx="3.5" ry="2.5" fill="url(#flowerBunnyCheekGrad)" />
      <ellipse cx="44" cy="32" rx="3.5" ry="2.5" fill="url(#flowerBunnyCheekGrad)" />

      {/* Feet with gradient */}
      <ellipse cx="24" cy="56" rx="5" ry="3" fill="url(#flowerBunnyBodyGrad)" />
      <ellipse cx="40" cy="56" rx="5" ry="3" fill="url(#flowerBunnyBodyGrad)" />
      {/* Feet highlights */}
      <ellipse cx="23" cy="55" rx="2" ry="1.5" fill="#C0FFC0" opacity="0.4" />
      <ellipse cx="39" cy="55" rx="2" ry="1.5" fill="#C0FFC0" opacity="0.4" />

      {/* Small leaves on sides */}
      <ellipse cx="16" cy="40" rx="4" ry="2.5" fill="url(#flowerBunnyLeafGrad)" transform="rotate(-15 16 40)" />
      <ellipse cx="48" cy="40" rx="4" ry="2.5" fill="url(#flowerBunnyLeafGrad)" transform="rotate(15 48 40)" />
      {/* Leaf veins */}
      <path d="M14,40 L18,40" stroke="#006400" strokeWidth="0.5" opacity="0.5" />
      <path d="M46,40 L50,40" stroke="#006400" strokeWidth="0.5" opacity="0.5" />

      {/* Small flowers/buds around */}
      <circle cx="12" cy="36" r="1.5" fill="#FF69B4" opacity="0.6" />
      <circle cx="52" cy="36" r="1.5" fill="#FF69B4" opacity="0.6" />
      <circle cx="12" cy="36" r="0.6" fill="#FFD700" />
      <circle cx="52" cy="36" r="0.6" fill="#FFD700" />
    </svg>
  );
}
