/**
 * SpeechBubble Sprite Component
 * Enhanced with subtle gradients, soft shadows, and depth
 */

import type { EffectProps } from '../types';

export function SpeechBubble({ x = 0, y = 0, size = 60, text }: EffectProps & { text?: string }) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 60 48"
      style={{ position: 'absolute', left: x, top: y }}
    >
      <defs>
        {/* Bubble gradient */}
        <linearGradient id="speechBubbleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F8F8F8" />
          <stop offset="100%" stopColor="#EEEEEE" />
        </linearGradient>

        {/* Highlight gradient */}
        <linearGradient id="speechBubbleHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.8" />
          <stop offset="50%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        {/* Border gradient */}
        <linearGradient id="speechBubbleBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#555555" />
          <stop offset="50%" stopColor="#333333" />
          <stop offset="100%" stopColor="#444444" />
        </linearGradient>

        {/* Soft shadow filter */}
        <filter id="speechBubbleShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feOffset in="blur" dx="1" dy="2" result="offsetBlur" />
          <feMerge>
            <feMergeNode in="offsetBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Inner glow */}
        <filter id="speechBubbleInnerGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="0.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Text shadow */}
        <filter id="speechBubbleTextShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="0.3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Shadow ellipse */}
      <ellipse cx="32" cy="23" rx="28" ry="18" fill="#000" opacity="0.15" />

      {/* Pointer shadow */}
      <polygon points="22,38 27,38 17,50" fill="#000" opacity="0.1" />

      {/* Main bubble with gradient */}
      <ellipse
        cx="30"
        cy="20"
        rx="28"
        ry="18"
        fill="url(#speechBubbleGrad)"
        stroke="url(#speechBubbleBorder)"
        strokeWidth="2"
        filter="url(#speechBubbleShadow)"
      />

      {/* Speech pointer shadow */}
      <polygon points="21,37 26,37 16,49" fill="url(#speechBubbleGrad)" stroke="url(#speechBubbleBorder)" strokeWidth="2" />

      {/* Pointer cover (hides stroke inside bubble) */}
      <polygon points="20,36 26,36 16,47" fill="url(#speechBubbleGrad)" />

      {/* Inner border highlight */}
      <ellipse
        cx="30"
        cy="20"
        rx="26"
        ry="16"
        fill="none"
        stroke="white"
        strokeWidth="1"
        opacity="0.3"
      />

      {/* Top highlight */}
      <ellipse
        cx="30"
        cy="12"
        rx="20"
        ry="8"
        fill="url(#speechBubbleHighlight)"
        opacity="0.6"
      />

      {/* Small shine spots */}
      <ellipse cx="18" cy="10" rx="4" ry="2" fill="white" opacity="0.5" />
      <circle cx="42" cy="14" r="2" fill="white" opacity="0.3" />

      {/* Subtle edge highlight */}
      <path
        d="M8 20 Q8 8 30 6"
        stroke="white"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
        strokeLinecap="round"
      />

      {/* Text with shadow */}
      <text
        x="30"
        y="25"
        textAnchor="middle"
        fontSize="10"
        fill="#222"
        filter="url(#speechBubbleTextShadow)"
        fontFamily="Arial, sans-serif"
      >
        {text}
      </text>

      {/* Subtle bottom shadow inside bubble */}
      <ellipse
        cx="30"
        cy="32"
        rx="20"
        ry="4"
        fill="#000"
        opacity="0.03"
      />
    </svg>
  );
}
