/**
 * ThoughtBubble Sprite Component
 * Enhanced with soft gradients, dreamy effects, and depth
 */

import type { EffectProps } from '../types';

export function ThoughtBubble({ x = 0, y = 0, size = 70, text }: EffectProps & { text?: string }) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 70 56"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Main bubble gradient */}
        <linearGradient id="thoughtBubbleMainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F8F8FF" />
          <stop offset="100%" stopColor="#F0F0F5" />
        </linearGradient>

        {/* Highlight gradient */}
        <linearGradient id="thoughtBubbleHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="50%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        {/* Border gradient */}
        <linearGradient id="thoughtBubbleBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#666666" />
          <stop offset="50%" stopColor="#444444" />
          <stop offset="100%" stopColor="#555555" />
        </linearGradient>

        {/* Small bubble gradient */}
        <radialGradient id="thoughtBubbleSmallGrad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F5F5F8" />
          <stop offset="100%" stopColor="#E8E8EE" />
        </radialGradient>

        {/* Dreamy glow */}
        <radialGradient id="thoughtBubbleDreamyGlow" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="white" stopOpacity="0" />
          <stop offset="80%" stopColor="#E8E8FF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#D0D0FF" stopOpacity="0.3" />
        </radialGradient>

        {/* Soft shadow filter */}
        <filter id="thoughtBubbleShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feOffset in="blur" dx="1" dy="2" result="offsetBlur" />
          <feMerge>
            <feMergeNode in="offsetBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Inner glow */}
        <filter id="thoughtBubbleInnerGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Dreamy blur */}
        <filter id="thoughtBubbleDreamy" x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Dreamy outer glow */}
      <ellipse cx="35" cy="22" rx="34" ry="22" fill="url(#thoughtBubbleDreamyGlow)" />

      {/* Main bubble shadow */}
      <ellipse cx="37" cy="24" rx="32" ry="20" fill="#000" opacity="0.1" />

      {/* Main thought bubble */}
      <ellipse
        cx="35"
        cy="22"
        rx="32"
        ry="20"
        fill="url(#thoughtBubbleMainGrad)"
        stroke="url(#thoughtBubbleBorder)"
        strokeWidth="2"
        filter="url(#thoughtBubbleShadow)"
      />

      {/* Inner border highlight */}
      <ellipse
        cx="35"
        cy="22"
        rx="30"
        ry="18"
        fill="none"
        stroke="white"
        strokeWidth="1"
        opacity="0.4"
      />

      {/* Top highlight */}
      <ellipse
        cx="35"
        cy="14"
        rx="22"
        ry="10"
        fill="url(#thoughtBubbleHighlight)"
        opacity="0.7"
      />

      {/* Shine spots */}
      <ellipse cx="22" cy="12" rx="5" ry="3" fill="white" opacity="0.5" />
      <circle cx="48" cy="16" r="2.5" fill="white" opacity="0.3" />

      {/* Subtle edge highlight */}
      <path
        d="M10 22 Q10 8 35 6"
        stroke="white"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
        strokeLinecap="round"
      />

      {/* Medium connecting bubble shadow */}
      <circle cx="16" cy="47" r="5" fill="#000" opacity="0.08" />

      {/* Medium connecting bubble */}
      <circle
        cx="15"
        cy="46"
        r="5"
        fill="url(#thoughtBubbleSmallGrad)"
        stroke="url(#thoughtBubbleBorder)"
        strokeWidth="1"
        filter="url(#thoughtBubbleInnerGlow)"
      />

      {/* Medium bubble highlight */}
      <circle cx="13" cy="44" r="1.5" fill="white" opacity="0.6" />

      {/* Small connecting bubble shadow */}
      <circle cx="9" cy="53" r="3" fill="#000" opacity="0.06" />

      {/* Small connecting bubble */}
      <circle
        cx="8"
        cy="52"
        r="3"
        fill="url(#thoughtBubbleSmallGrad)"
        stroke="url(#thoughtBubbleBorder)"
        strokeWidth="1"
        filter="url(#thoughtBubbleDreamy)"
      />

      {/* Small bubble highlight */}
      <circle cx="7" cy="51" r="0.8" fill="white" opacity="0.5" />

      {/* Thought content sparkles */}
      <g filter="url(#thoughtBubbleDreamy)" opacity="0.4">
        <circle cx="25" cy="20" r="1" fill="#D0D0FF" />
        <circle cx="45" cy="18" r="0.8" fill="#E0E0FF" />
        <circle cx="30" cy="28" r="0.6" fill="#D8D8FF" />
      </g>

      {/* Text with subtle shadow */}
      <text
        x="35"
        y="27"
        textAnchor="middle"
        fontSize="10"
        fill="#333"
        fontFamily="Arial, sans-serif"
        filter="url(#thoughtBubbleDreamy)"
      >
        {text}
      </text>

      {/* Bottom subtle shadow */}
      <ellipse
        cx="35"
        cy="36"
        rx="22"
        ry="4"
        fill="#000"
        opacity="0.03"
      />
    </svg>
  );
}
