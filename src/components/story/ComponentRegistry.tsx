/**
 * Component Registry
 * ==================
 * Maps string names to actual React components.
 * This is the bridge between JSON and React.
 */

import type { ComponentType } from 'react';

// Import all sprites
import * as Animals from '../sprites/Animals';
import * as Characters from '../sprites/Characters';
import * as Environment from '../sprites/Environment';
import * as Effects from '../sprites/Effects';

// Import all backgrounds (from SceneTemplates)
import * as SceneTemplates from './SceneTemplates';

// Sprite props interface
interface SpriteProps {
  size?: number;
}

// Background props interface
interface BackgroundProps {
  width: number;
  height: number;
}

// Build sprite registry
const spriteRegistry: Record<string, ComponentType<SpriteProps>> = {};
const spritesByCategory: Record<string, string[]> = {
  animals: [],
  characters: [],
  environment: [],
  effects: [],
};

// Register animals
Object.entries(Animals).forEach(([name, component]) => {
  if (typeof component === 'function') {
    spriteRegistry[name] = component as ComponentType<SpriteProps>;
    spritesByCategory.animals.push(name);
  }
});

// Register characters
Object.entries(Characters).forEach(([name, component]) => {
  if (typeof component === 'function') {
    spriteRegistry[name] = component as ComponentType<SpriteProps>;
    spritesByCategory.characters.push(name);
  }
});

// Register environment
Object.entries(Environment).forEach(([name, component]) => {
  if (typeof component === 'function') {
    spriteRegistry[name] = component as ComponentType<SpriteProps>;
    spritesByCategory.environment.push(name);
  }
});

// Register effects
Object.entries(Effects).forEach(([name, component]) => {
  if (typeof component === 'function') {
    spriteRegistry[name] = component as ComponentType<SpriteProps>;
    spritesByCategory.effects.push(name);
  }
});

// Build background registry
const backgroundRegistry: Record<string, ComponentType<BackgroundProps>> = {};
const backgroundNames: string[] = [];

// Background components from SceneTemplates (exclude CharacterPosition and helpers)
const backgroundExclusions = ['CharacterPosition', 'default'];
Object.entries(SceneTemplates).forEach(([name, component]) => {
  if (typeof component === 'function' && !backgroundExclusions.includes(name)) {
    backgroundRegistry[name] = component as ComponentType<BackgroundProps>;
    backgroundNames.push(name);
  }
});

// Export registries
export { spriteRegistry, backgroundRegistry, spritesByCategory, backgroundNames };

// Get a sprite component by name
export function getSprite(name: string): ComponentType<SpriteProps> | null {
  return spriteRegistry[name] || null;
}

// Get a background component by name
export function getBackground(name: string): ComponentType<BackgroundProps> | null {
  return backgroundRegistry[name] || null;
}

// Get all available sprites
export function getAvailableSprites() {
  return {
    ...spritesByCategory,
    all: Object.keys(spriteRegistry),
  };
}

// Get all available backgrounds
export function getAvailableBackgrounds() {
  return backgroundNames;
}

// Validate if a sprite exists
export function isValidSprite(name: string): boolean {
  return name in spriteRegistry;
}

// Validate if a background exists
export function isValidBackground(name: string): boolean {
  return name in backgroundRegistry;
}

// Generate schema info for the agent
export function getSchemaInfo() {
  return {
    sprites: spritesByCategory,
    backgrounds: backgroundNames,
    positions: ['left', 'center', 'right'] as const,
    sceneTemplate: {
      id: 'unique_scene_id',
      background: backgroundNames[0] || 'DeepOcean',
      characters: [
        { sprite: 'Princess', position: 'center' as const, size: 90 }
      ],
      dialogue: ['Dialog text here...'],
      choices: [
        { text: '➡️ Continue', nextSceneId: 'next_scene_id' }
      ],
    },
    choiceTemplate: {
      text: 'Button text',
      nextSceneId: 'target_scene_id',
    },
    findTargetTemplate: {
      sprite: 'Starfish',
      size: 40,
      position: { x: 50, y: 50 },
      hint: 'Where is it?',
      foundText: 'Found it!',
      nextSceneId: 'next_scene_id',
    },
  };
}
