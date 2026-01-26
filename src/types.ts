import type { ComponentType } from 'react';
import type { StoryJson } from './components/story/StorySchema';

/**
 * Game metadata - information about each game
 */
export interface GameInfo {
  /** Unique identifier for the game (use kebab-case, e.g., "mein-erstes-spiel") */
  id: string;
  /** Display name of the game */
  name: string;
  /** Short description of what the game is about */
  description: string;
  /** Who created this game */
  author: string;
  /** The React component that renders the game */
  component: ComponentType;
  /** Optional: Story data in JSON format for PDF export */
  storyJson?: StoryJson;
}

/**
 * Common props that all games receive
 */
export interface GameProps {
  /** Called when the player wants to go back to the menu */
  onExit: () => void;
}

/**
 * Position in 2D space
 */
export interface Position {
  x: number;
  y: number;
}

/**
 * Size of an element
 */
export interface Size {
  width: number;
  height: number;
}

/**
 * A rectangle (for collision detection, etc.)
 */
export interface Rectangle extends Position, Size {}
