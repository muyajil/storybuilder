import type { Rectangle } from '../types';

/**
 * Prüft ob zwei Rechtecke sich überlappen / Check if two rectangles overlap
 *
 * Beispiel / Example:
 * ```tsx
 * const player = { x: 10, y: 10, width: 50, height: 50 };
 * const enemy = { x: 40, y: 40, width: 30, height: 30 };
 *
 * if (checkCollision(player, enemy)) {
 *   console.log('Kollision! / Collision!');
 * }
 * ```
 */
export function checkCollision(rect1: Rectangle, rect2: Rectangle): boolean {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}

/**
 * Prüft ob ein Punkt in einem Rechteck ist / Check if a point is inside a rectangle
 */
export function pointInRect(
  x: number,
  y: number,
  rect: Rectangle
): boolean {
  return (
    x >= rect.x &&
    x <= rect.x + rect.width &&
    y >= rect.y &&
    y <= rect.y + rect.height
  );
}

/**
 * Berechnet die Distanz zwischen zwei Punkten / Calculate distance between two points
 */
export function distance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

/**
 * Hält einen Wert innerhalb von Grenzen / Keep a value within bounds
 *
 * Beispiel / Example:
 * ```tsx
 * const x = clamp(playerX, 0, canvasWidth - playerWidth);
 * ```
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

/**
 * Generiert eine Zufallszahl zwischen min und max / Generate random number between min and max
 */
export function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * Generiert eine zufällige ganze Zahl zwischen min und max / Generate random integer between min and max
 */
export function randomIntBetween(min: number, max: number): number {
  return Math.floor(randomBetween(min, max + 1));
}
