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

// === SPIELE IMPORTIEREN / IMPORT GAMES ===
// Beispiel / Example:
// import { MeinSpiel } from './mein-spiel/MeinSpiel';
import { BeispielSpiel } from './beispiel-spiel/BeispielSpiel';

// === SPIELE REGISTRIEREN / REGISTER GAMES ===
export const games: GameInfo[] = [
  {
    id: 'beispiel-spiel',
    name: 'Beispiel Spiel',
    description: 'Ein einfaches Beispiel-Spiel zum Lernen',
    author: 'System',
    component: BeispielSpiel,
  },
  // Füge hier neue Spiele hinzu / Add new games here:
  // {
  //   id: 'mein-spiel',
  //   name: 'Mein Tolles Spiel',
  //   description: 'Beschreibung des Spiels',
  //   author: 'Dein Name',
  //   component: MeinSpiel,
  // },
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
