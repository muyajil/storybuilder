/**
 * SPIELE-REGISTER / GAME REGISTRY
 * ================================
 * Hier werden alle Spiele registriert.
 * All games are registered here.
 *
 * Um ein neues Spiel hinzuzufügen / To add a new game:
 * 1. Erstelle einen Ordner unter src/games/mein-spiel-name/
 * 2. Erstelle die Spiel-Komponente (z.B. MeinSpiel.tsx)
 * 3. Importiere und registriere das Spiel hier unten
 */

import type { GameInfo } from '../types';
import type { StoryJson } from '../components/story/StorySchema';

// === SPIELE IMPORTIEREN / IMPORT GAMES ===
import { MagicForest } from './magic-forest/MagicForest';
import { LianasOzeanAbenteuer } from './liana-abenteuer/LianasOzeanAbenteuer';
import { DiemagischenGeschwister } from './magische-geschwister/DiemagischenGeschwister';

// === STORY JSON IMPORTIEREN / IMPORT STORY JSON ===
import lianaStoryData from './liana-abenteuer/story.json';
import magischeGeschwisterStoryData from './magische-geschwister/story.json';

// === SPIELE REGISTRIEREN / REGISTER GAMES ===
export const games: GameInfo[] = [
  {
    id: 'magic-forest',
    name: 'Der Magische Wald',
    description: 'Eine interaktive Geschichte mit Entscheidungen durch verschiedene Welten!',
    author: 'Kind',
    component: MagicForest,
    // Note: This game uses React-based Story, not JSON
  },
  {
    id: 'liana-abenteuer',
    name: 'Lianas Ozean-Abenteuer',
    description: 'Prinzessin Liana erlebt ein spannendes Abenteuer am Ozean',
    component: LianasOzeanAbenteuer,
    author: 'Kind',
    storyJson: lianaStoryData as StoryJson,
  },
  {
    id: 'magische-geschwister',
    name: 'Die magischen Geschwister',
    description: 'Eine spannende Geschichte über drei magische Geschwister: eine Zauberin, ein Blitz-Ninja und ein Regenbogen-Ninja.',
    component: DiemagischenGeschwister,
    author: 'Kind',
    storyJson: magischeGeschwisterStoryData as StoryJson,
  },
];

/**
 * Find a game by its ID
 */
export function getGameById(id: string): GameInfo | undefined {
  return games.find(game => game.id === id);
}

/**
 * Get all game IDs
 */
export function getAllGameIds(): string[] {
  return games.map(game => game.id);
}
