/**
 * Shared types for sprite components
 */

import type { ReactNode, CSSProperties } from 'react';

export interface SpriteProps {
  size?: number;
  color?: string;
  flip?: boolean;
}

export interface EffectProps {
  x?: number;
  y?: number;
  size?: number;
  color?: string;
  count?: number;
  value?: number;
  max?: number;
  progress?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  children?: ReactNode;
}

export interface BackgroundProps {
  width?: number;
  height?: number;
  children?: ReactNode;
}

export interface GroundProps {
  width?: number;
  height?: number;
  y?: number;
  color?: string;
  children?: ReactNode;
}

export interface ElementProps {
  x?: number;
  y?: number;
  size?: number;
  color?: string;
}

export interface SceneProps {
  width?: number;
  height?: number;
  children?: ReactNode;
  style?: CSSProperties;
}
