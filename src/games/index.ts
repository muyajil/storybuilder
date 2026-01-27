/**
 * SPIELE-REGISTER / GAME REGISTRY
 * ================================
 * Hier werden alle Spiele registriert.
 * All games are registered here.
 */

import type { GameInfo } from '../types';
import type { StoryJson } from '../components/story/StorySchema';

// === SPIELE IMPORTIEREN / IMPORT GAMES ===
import { DiemagischenGeschwister } from './magische-geschwister/DiemagischenGeschwister';
import { TotoUndDerMannImMond } from './toto-mond/TotoUndDerMannImMond';

// === STORY JSON IMPORTIEREN / IMPORT STORY JSON ===
import magischeGeschwisterStoryData from './magische-geschwister/story.json';
import totoMondStoryData from './toto-mond/story.json';
import { DiemagischenPokemon } from './magische-pokemon/DiemagischenPokemon';

// === SPIELE REGISTRIEREN / REGISTER GAMES ===
export const games: GameInfo[] = [
  {
    id: 'toto-mond',
    name: 'Toto und der Mann im Mond',
    description: 'Ein magisches Abenteuer zum Mond! Hilf Toto, die verlorenen Mondsteine zu finden und dem Mann im Mond sein Leuchten zurückzugeben.',
    component: TotoUndDerMannImMond,
    author: 'Spiele-Spielplatz',
    storyJson: totoMondStoryData as StoryJson,
  },
  {
    id: 'magische-geschwister',
    name: 'Die magischen Geschwister',
    description: 'Eine spannende Geschichte über drei magische Geschwister: eine Zauberin, ein Blitz-Ninja und ein Regenbogen-Ninja.',
    component: DiemagischenGeschwister,
    author: 'Kind',
    storyJson: magischeGeschwisterStoryData as StoryJson,
  },
  {
    id: 'magische-pokemon',
    name: 'Die 3 magischen Pokemon',
    description: 'Ein aufregendes Abenteuer mit drei besonderen Pokemon!',
    component: DiemagischenPokemon,
    author: 'Kind',
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
