/**
 * PDF Generator
 * =============
 * Core logic for generating children's book PDFs from story data.
 *
 * Process:
 * 1. Traverse story graph to collect all scenes organized by story paths
 * 2. Send to LLM to create a flowing narrative (optional)
 * 3. Generate PDF with scene images, text, and clear branch structure
 *
 * Features:
 * - Preserves all story branches with clear section headers
 * - Shows minigame scenes with meaningful representations
 * - Handles large stories (40+ scenes) efficiently with batched processing
 * - Creates a beautiful children's book format
 */

import jsPDF from 'jspdf';
import type { StoryJson, SceneJson, MiniGameJson } from '../story/StorySchema';
import type { SceneCaptureHandle } from './SceneCapture';

// Quality options for PDF generation
export interface PdfQualityOptions {
  imageScale: 1 | 1.5 | 2;           // 1 = fast, 2 = high quality
  imageFormat: 'png' | 'jpeg';       // jpeg = smaller, faster
  jpegQuality: number;               // 0.75-0.95
  renderDelay: number;               // ms to wait for render
}

export const QUALITY_PRESETS: Record<string, PdfQualityOptions> = {
  print: { imageScale: 2, imageFormat: 'png', jpegQuality: 1, renderDelay: 400 },
  balanced: { imageScale: 1.5, imageFormat: 'jpeg', jpegQuality: 0.85, renderDelay: 200 },
  fast: { imageScale: 1, imageFormat: 'jpeg', jpegQuality: 0.75, renderDelay: 100 },
};

export type QualityPreset = keyof typeof QUALITY_PRESETS;

// PDF Page dimensions (A4 Landscape)
const PAGE_WIDTH = 297; // mm
const PAGE_HEIGHT = 210; // mm
const MARGIN = 15; // mm
const IMAGE_HEIGHT = 120; // mm for scene image

// Font sizes
const TITLE_FONT_SIZE = 24;
const TEXT_FONT_SIZE = 14;
const PAGE_NUMBER_SIZE = 10;

// Performance: batch size for scene capture
const MEMORY_CHUNK_SIZE = 10; // Process this many before clearing
const CAPTURE_DELAY_MS = 50; // Reduced from 100ms for better performance

export interface PdfProgress {
  current: number;
  total: number;
  status: string;
}

export interface StoryPath {
  scenes: SceneJson[];
  branchName?: string;
  /** The scene ID where this branch diverges from the main path */
  branchFromSceneId?: string;
  /** Path index for ordering */
  pathIndex: number;
}

/**
 * Minigame display info for PDF rendering
 */
export interface MiniGameDisplayInfo {
  type: string;
  title: string;
  description: string;
  icon: string;
  instructions?: string;
}

/**
 * Gets display info for a minigame type
 */
export function getMiniGameDisplayInfo(miniGame: MiniGameJson): MiniGameDisplayInfo {
  // Note: Using text icons instead of emojis because jsPDF doesn't render Unicode emojis properly
  const typeInfo: Record<string, { title: string; description: string; icon: string }> = {
    collect: {
      title: 'Sammel-Abenteuer',
      description: 'Sammle alle magischen Gegenstände!',
      icon: '[*]',
    },
    dodge: {
      title: 'Ausweich-Abenteuer',
      description: 'Weiche geschickt allen Hindernissen aus!',
      icon: '[~]',
    },
    catch: {
      title: 'Fang-Spiel',
      description: 'Fange die fallenden Schätze auf!',
      icon: '[o]',
    },
    click: {
      title: 'Klick-Herausforderung',
      description: 'Triff alle Ziele so schnell wie möglich!',
      icon: '[!]',
    },
    snake: {
      title: 'Schlangen-Abenteuer',
      description: 'Wachse und werde zur längsten Schlange!',
      icon: '[S]',
    },
    race: {
      title: 'Rennen',
      description: 'Erreiche das Ziel und weiche Hindernissen aus!',
      icon: '[>]',
    },
    flappy: {
      title: 'Flug-Abenteuer',
      description: 'Fliege geschickt durch alle Hindernisse!',
      icon: '[^]',
    },
  };

  const info = typeInfo[miniGame.type] || {
    title: 'Mini-Spiel',
    description: 'Ein spannendes Abenteuer wartet!',
    icon: '[+]',
  };

  return {
    type: miniGame.type,
    title: miniGame.title || info.title,
    description: info.description,
    icon: info.icon,
    instructions: miniGame.instructions,
  };
}

/**
 * Traverses the story graph and collects all scenes organized by story paths.
 * IMPROVED: Now preserves branch context and doesn't lose scenes during deduplication.
 * Each path includes all scenes from start to end, allowing the same scene to appear
 * in multiple paths if needed for narrative context.
 */
export function collectStoryPaths(story: StoryJson): StoryPath[] {
  const paths: StoryPath[] = [];
  const sceneMap = new Map<string, SceneJson>();

  // Build scene lookup map
  for (const scene of story.scenes) {
    sceneMap.set(scene.id, scene);
  }

  // Find start scene
  const startSceneId = story.scenes[0]?.id;
  if (!startSceneId) return paths;

  // Track visited edges to prevent infinite loops, but allow scene revisiting
  const visitedEdges = new Set<string>();
  let pathIndex = 0;

  function traverse(
    sceneId: string,
    currentPath: SceneJson[],
    branchName?: string,
    branchFromSceneId?: string
  ): void {
    const scene = sceneMap.get(sceneId);
    if (!scene) return;

    // Add scene to current path
    currentPath.push(scene);

    // Determine next scenes based on scene type
    const nextScenes: Array<{ sceneId: string; choiceText?: string }> = [];

    if (scene.choices && scene.choices.length > 0) {
      // Collect all choices as potential next scenes
      for (const choice of scene.choices) {
        nextScenes.push({ sceneId: choice.nextSceneId, choiceText: choice.text });
      }
    } else if (scene.miniGame?.successSceneId) {
      nextScenes.push({ sceneId: scene.miniGame.successSceneId });
    } else if (scene.findTarget?.nextSceneId) {
      nextScenes.push({ sceneId: scene.findTarget.nextSceneId });
    } else if (scene.autoAdvance?.nextSceneId) {
      nextScenes.push({ sceneId: scene.autoAdvance.nextSceneId });
    }

    if (nextScenes.length === 0) {
      // End of path - save it
      if (currentPath.length > 0) {
        paths.push({
          scenes: [...currentPath],
          branchName,
          branchFromSceneId,
          pathIndex: pathIndex++,
        });
      }
      return;
    }

    // Process each next scene
    for (let i = 0; i < nextScenes.length; i++) {
      const next = nextScenes[i];
      const edgeKey = `${sceneId}->${next.sceneId}`;

      if (visitedEdges.has(edgeKey)) continue;
      visitedEdges.add(edgeKey);

      if (i === 0) {
        // First path continues with current path array
        traverse(next.sceneId, [...currentPath], branchName, branchFromSceneId);
      } else {
        // Additional choices create new branches from this point
        // FIXED: Preserve full path context up to divergence point
        traverse(
          next.sceneId,
          [...currentPath], // Include full path for proper context
          next.choiceText || `Pfad ${pathIndex + 1}`,
          sceneId
        );
      }
    }
  }

  traverse(startSceneId, [], undefined, undefined);

  // If no paths were collected (linear story), create one path with all scenes
  if (paths.length === 0) {
    paths.push({
      scenes: story.scenes,
      branchName: undefined,
      pathIndex: 0,
    });
  }

  return paths;
}

/**
 * Extracts a flat list of all unique scenes preserving order
 */
export function collectAllScenes(story: StoryJson): SceneJson[] {
  const paths = collectStoryPaths(story);
  const seenIds = new Set<string>();
  const scenes: SceneJson[] = [];

  for (const path of paths) {
    for (const scene of path.scenes) {
      if (!seenIds.has(scene.id)) {
        seenIds.add(scene.id);
        scenes.push(scene);
      }
    }
  }

  return scenes;
}

/**
 * Extracts dialogue text from a scene
 */
function getSceneDialogue(scene: SceneJson): string[] {
  if (!scene.dialogue) return [];
  return scene.dialogue.map(d => typeof d === 'string' ? d : d.text);
}

/**
 * Creates a story summary for LLM processing
 */
export function createStorySummary(story: StoryJson): string {
  const scenes = collectAllScenes(story);
  const summary: string[] = [];

  summary.push(`Titel: ${story.title}`);
  summary.push(`Autor: ${story.author}`);
  summary.push('');
  summary.push('Szenen:');

  for (const scene of scenes) {
    summary.push(`\n[Szene: ${scene.id}]`);
    summary.push(`Hintergrund: ${scene.background}`);

    if (scene.characters && scene.characters.length > 0) {
      const chars = scene.characters.map(c => c.sprite).join(', ');
      summary.push(`Charaktere: ${chars}`);
    }

    const dialogue = getSceneDialogue(scene);
    if (dialogue.length > 0) {
      summary.push('Dialog:');
      dialogue.forEach(d => summary.push(`  - "${d}"`));
    }

    if (scene.choices && scene.choices.length > 0) {
      summary.push('Entscheidungen:');
      scene.choices.forEach(c => summary.push(`  - ${c.text} -> ${c.nextSceneId}`));
    }

    if (scene.miniGame) {
      summary.push(`Mini-Spiel: ${scene.miniGame.type}`);
      if (scene.miniGame.instructions) {
        summary.push(`  Anleitung: ${scene.miniGame.instructions}`);
      }
    }

    if (scene.findTarget) {
      summary.push(`Such-Spiel: Finde ${scene.findTarget.sprite}`);
      if (scene.findTarget.hint) {
        summary.push(`  Hinweis: ${scene.findTarget.hint}`);
      }
    }
  }

  return summary.join('\n');
}

/**
 * Represents a page in the book
 */
export interface BookPage {
  scene: SceneJson;
  narrativeText: string;
  pageNumber: number;
  /** Is this the start of a new branch/chapter? */
  isBranchStart?: boolean;
  /** Name of the branch (choice text that led here) */
  branchName?: string;
  /** Is this a minigame scene? */
  isMiniGame?: boolean;
  /** Display info for minigame scenes */
  miniGameInfo?: MiniGameDisplayInfo;
  /** Is this a find-target interactive scene? */
  isFindTarget?: boolean;
  /** Path/chapter number this page belongs to */
  chapterNumber: number;
  /** Total chapters in the book */
  totalChapters: number;
}

/**
 * Represents a chapter in the book (a complete story path)
 */
export interface BookChapter {
  chapterNumber: number;
  title: string;
  subtitle?: string;
  pages: BookPage[];
  isMainPath: boolean;
}

/**
 * Calls the LLM to create a flowing narrative from the story structure
 */
export async function createFlowingNarrative(
  story: StoryJson,
  apiEndpoint?: string,
  apiKey?: string
): Promise<Map<string, string>> {
  const scenes = collectAllScenes(story);
  const narrativeMap = new Map<string, string>();

  // If no API endpoint provided, use dialogue directly
  if (!apiEndpoint) {
    for (const scene of scenes) {
      const dialogue = getSceneDialogue(scene);
      narrativeMap.set(scene.id, dialogue.join('\n\n'));
    }
    return narrativeMap;
  }

  // Create prompt for the LLM
  const storySummary = createStorySummary(story);

  const systemPrompt = `Du bist ein Kinderbuch-Autor. Deine Aufgabe ist es, aus einer interaktiven Geschichte ein fließendes Kinderbuch zu machen.

Regeln:
- Schreibe in einfacher, kindgerechter Sprache (Alter 4-8)
- Verwandle die Dialoge in eine zusammenhängende Erzählung
- Behalte den Ton und die Charaktere bei
- Jede Szene sollte 2-4 Sätze haben
- Verwende keine Entscheidungen oder Verzweigungen - erzähle eine lineare Geschichte
- Bei Mini-Spielen: Beschreibe kurz was der Held tut
- Gib das Ergebnis als JSON zurück mit Scene-IDs als Schlüssel

Beispiel-Antwort:
{
  "start": "Es war einmal ein kleines Mädchen namens Liana. Sie stand auf der Straße und träumte von Abenteuern.",
  "wald": "Liana ging in den magischen Wald. Die Bäume flüsterten geheimnisvolle Geschichten."
}`;

  const userPrompt = `Hier ist die Geschichte:\n\n${storySummary}\n\nBitte erstelle eine fließende Kinderbuch-Erzählung für jede Szene.`;

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(apiKey ? { 'Authorization': `Bearer ${apiKey}` } : {}),
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 4000,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
      }),
    });

    if (!response.ok) {
      console.warn('LLM API call failed, using dialogue directly');
      for (const scene of scenes) {
        const dialogue = getSceneDialogue(scene);
        narrativeMap.set(scene.id, dialogue.join('\n\n'));
      }
      return narrativeMap;
    }

    const data = await response.json();
    const content = data.content?.[0]?.text || data.choices?.[0]?.message?.content;

    if (content) {
      // Parse JSON from response
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const narratives = JSON.parse(jsonMatch[0]);
        for (const [sceneId, text] of Object.entries(narratives)) {
          narrativeMap.set(sceneId, text as string);
        }
      }
    }
  } catch (error) {
    console.warn('Error calling LLM, using dialogue directly:', error);
  }

  // Fill in any missing scenes with dialogue
  for (const scene of scenes) {
    if (!narrativeMap.has(scene.id)) {
      const dialogue = getSceneDialogue(scene);
      narrativeMap.set(scene.id, dialogue.join('\n\n'));
    }
  }

  return narrativeMap;
}

/**
 * Generates book chapters from story paths.
 * IMPROVED: Organizes content into clear chapters that preserve branch structure.
 */
export function generateBookChapters(
  story: StoryJson,
  narrativeMap: Map<string, string>
): BookChapter[] {
  const paths = collectStoryPaths(story);
  const chapters: BookChapter[] = [];
  const totalChapters = paths.length;
  let globalPageNumber = 1;

  for (let pathIndex = 0; pathIndex < paths.length; pathIndex++) {
    const path = paths[pathIndex];
    const isMainPath = pathIndex === 0;
    const chapterNumber = pathIndex + 1;

    // Determine chapter title
    let chapterTitle: string;
    let chapterSubtitle: string | undefined;

    if (isMainPath) {
      chapterTitle = 'Die Geschichte';
      chapterSubtitle = undefined;
    } else {
      chapterTitle = `Kapitel ${chapterNumber}`;
      chapterSubtitle = path.branchName
        ? `Was passiert, wenn: "${path.branchName}"`
        : 'Ein anderer Weg';
    }

    const chapterPages: BookPage[] = [];

    for (let i = 0; i < path.scenes.length; i++) {
      const scene = path.scenes[i];
      const narrativeText = narrativeMap.get(scene.id) || '';

      // Determine if this is a minigame or find-target scene
      const isMiniGame = !!scene.miniGame;
      const isFindTarget = !!scene.findTarget;
      const miniGameInfo = isMiniGame && scene.miniGame
        ? getMiniGameDisplayInfo(scene.miniGame)
        : undefined;

      chapterPages.push({
        scene,
        narrativeText,
        pageNumber: globalPageNumber++,
        isBranchStart: i === 0 && !isMainPath,
        branchName: i === 0 && !isMainPath ? path.branchName : undefined,
        isMiniGame,
        miniGameInfo,
        isFindTarget,
        chapterNumber,
        totalChapters,
      });
    }

    chapters.push({
      chapterNumber,
      title: chapterTitle,
      subtitle: chapterSubtitle,
      pages: chapterPages,
      isMainPath,
    });
  }

  return chapters;
}

/**
 * Generates book pages from story and narrative (legacy function, now uses chapters internally)
 */
export function generateBookPages(
  story: StoryJson,
  narrativeMap: Map<string, string>
): BookPage[] {
  const chapters = generateBookChapters(story, narrativeMap);
  return chapters.flatMap(chapter => chapter.pages);
}

/**
 * Renders a chapter title page in the PDF
 */
function renderChapterTitlePage(
  pdf: jsPDF,
  chapter: BookChapter,
  isFirstChapter: boolean
): void {
  if (!isFirstChapter) {
    pdf.addPage();
  }

  // Background color (light gradient effect with decorative border)
  pdf.setFillColor(250, 248, 245);
  pdf.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, 'F');

  // Decorative border
  pdf.setDrawColor(200, 180, 150);
  pdf.setLineWidth(2);
  pdf.rect(MARGIN - 5, MARGIN - 5, PAGE_WIDTH - (MARGIN * 2) + 10, PAGE_HEIGHT - (MARGIN * 2) + 10, 'S');

  // Inner decorative line
  pdf.setDrawColor(220, 200, 170);
  pdf.setLineWidth(0.5);
  pdf.rect(MARGIN, MARGIN, PAGE_WIDTH - (MARGIN * 2), PAGE_HEIGHT - (MARGIN * 2), 'S');

  // Chapter number (decorative)
  if (!chapter.isMainPath) {
    pdf.setFontSize(14);
    pdf.setTextColor(150, 130, 100);
    const chapterLabel = `Kapitel ${chapter.chapterNumber}`;
    const labelWidth = pdf.getTextWidth(chapterLabel);
    pdf.text(chapterLabel, (PAGE_WIDTH - labelWidth) / 2, PAGE_HEIGHT / 2 - 30);
  }

  // Chapter title
  pdf.setFontSize(TITLE_FONT_SIZE);
  pdf.setTextColor(60, 50, 40);
  const titleWidth = pdf.getTextWidth(chapter.title);
  pdf.text(chapter.title, (PAGE_WIDTH - titleWidth) / 2, PAGE_HEIGHT / 2);

  // Decorative line under title
  pdf.setDrawColor(200, 180, 150);
  pdf.setLineWidth(1);
  const lineY = PAGE_HEIGHT / 2 + 8;
  pdf.line(PAGE_WIDTH / 2 - 40, lineY, PAGE_WIDTH / 2 + 40, lineY);

  // Chapter subtitle
  if (chapter.subtitle) {
    pdf.setFontSize(12);
    pdf.setTextColor(100, 90, 80);
    const lines = pdf.splitTextToSize(chapter.subtitle, PAGE_WIDTH - (MARGIN * 4));
    const subtitleY = PAGE_HEIGHT / 2 + 25;
    for (let i = 0; i < lines.length; i++) {
      const lineWidth = pdf.getTextWidth(lines[i]);
      pdf.text(lines[i], (PAGE_WIDTH - lineWidth) / 2, subtitleY + (i * 6));
    }
  }

  // Decorative corners (simple ornaments)
  pdf.setDrawColor(180, 160, 140);
  pdf.setLineWidth(0.5);

  // Top-left corner
  pdf.line(MARGIN + 5, MARGIN + 15, MARGIN + 5, MARGIN + 5);
  pdf.line(MARGIN + 5, MARGIN + 5, MARGIN + 15, MARGIN + 5);

  // Top-right corner
  pdf.line(PAGE_WIDTH - MARGIN - 5, MARGIN + 15, PAGE_WIDTH - MARGIN - 5, MARGIN + 5);
  pdf.line(PAGE_WIDTH - MARGIN - 5, MARGIN + 5, PAGE_WIDTH - MARGIN - 15, MARGIN + 5);

  // Bottom-left corner
  pdf.line(MARGIN + 5, PAGE_HEIGHT - MARGIN - 15, MARGIN + 5, PAGE_HEIGHT - MARGIN - 5);
  pdf.line(MARGIN + 5, PAGE_HEIGHT - MARGIN - 5, MARGIN + 15, PAGE_HEIGHT - MARGIN - 5);

  // Bottom-right corner
  pdf.line(PAGE_WIDTH - MARGIN - 5, PAGE_HEIGHT - MARGIN - 15, PAGE_WIDTH - MARGIN - 5, PAGE_HEIGHT - MARGIN - 5);
  pdf.line(PAGE_WIDTH - MARGIN - 5, PAGE_HEIGHT - MARGIN - 5, PAGE_WIDTH - MARGIN - 15, PAGE_HEIGHT - MARGIN - 5);
}

/**
 * Renders a minigame page with a meaningful visual representation
 */
function renderMiniGameOverlay(
  pdf: jsPDF,
  page: BookPage,
  yOffset: number,
  imageHeight: number
): void {
  if (!page.miniGameInfo) return;

  const info = page.miniGameInfo;

  // Semi-transparent overlay box at bottom of image area
  const overlayHeight = 35;
  const overlayY = yOffset + imageHeight - overlayHeight - 5;

  // Draw overlay background
  pdf.setFillColor(30, 30, 50);
  pdf.setGState(pdf.GState({ opacity: 0.85 }));
  pdf.roundedRect(MARGIN + 10, overlayY, PAGE_WIDTH - (MARGIN * 2) - 20, overlayHeight, 5, 5, 'F');
  pdf.setGState(pdf.GState({ opacity: 1 }));

  // Game icon and title
  pdf.setFontSize(16);
  pdf.setTextColor(255, 215, 0); // Gold color
  const iconTitle = `${info.icon}  ${info.title}`;
  pdf.text(iconTitle, MARGIN + 20, overlayY + 12);

  // Game description
  pdf.setFontSize(11);
  pdf.setTextColor(255, 255, 255);
  pdf.text(info.description, MARGIN + 20, overlayY + 22);

  // Instructions if available
  if (info.instructions) {
    pdf.setFontSize(10);
    pdf.setTextColor(200, 200, 200);
    const instructionsText = `Aufgabe: ${info.instructions}`;
    const truncated = instructionsText.length > 80
      ? instructionsText.substring(0, 77) + '...'
      : instructionsText;
    pdf.text(truncated, MARGIN + 20, overlayY + 30);
  }
}

/**
 * Renders a find-target (seek and find) page overlay
 */
function renderFindTargetOverlay(
  pdf: jsPDF,
  page: BookPage,
  yOffset: number,
  imageHeight: number
): void {
  const findTarget = page.scene.findTarget;
  if (!findTarget) return;

  // Semi-transparent overlay box at bottom of image area
  const overlayHeight = 30;
  const overlayY = yOffset + imageHeight - overlayHeight - 5;

  // Draw overlay background
  pdf.setFillColor(30, 50, 30);
  pdf.setGState(pdf.GState({ opacity: 0.85 }));
  pdf.roundedRect(MARGIN + 10, overlayY, PAGE_WIDTH - (MARGIN * 2) - 20, overlayHeight, 5, 5, 'F');
  pdf.setGState(pdf.GState({ opacity: 1 }));

  // Search icon and title
  pdf.setFontSize(16);
  pdf.setTextColor(100, 255, 100); // Green
  const searchTitle = `Kannst du es finden?`;
  pdf.text(searchTitle, MARGIN + 20, overlayY + 12);

  // Hint
  pdf.setFontSize(11);
  pdf.setTextColor(255, 255, 255);
  const hintText = findTarget.hint || `Finde: ${findTarget.sprite}`;
  pdf.text(hintText, MARGIN + 20, overlayY + 24);
}

/**
 * Renders a visual flowchart showing the story structure
 * Shows all scenes as nodes with arrows showing connections
 */
function renderStoryFlowchart(
  pdf: jsPDF,
  story: StoryJson
): void {
  // Background
  pdf.setFillColor(250, 248, 245);
  pdf.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, 'F');

  // Title
  pdf.setFontSize(18);
  pdf.setTextColor(60, 50, 40);
  const title = 'Geschichte-Übersicht';
  const titleWidth = pdf.getTextWidth(title);
  pdf.text(title, (PAGE_WIDTH - titleWidth) / 2, 20);

  // Build scene map and find connections
  const sceneMap = new Map<string, SceneJson>();
  for (const scene of story.scenes) {
    sceneMap.set(scene.id, scene);
  }

  // Calculate positions using simple grid layout
  const startX = MARGIN + 20;
  const startY = 40;
  const nodeWidth = 50;
  const nodeHeight = 25;
  const horizontalGap = 70;
  const verticalGap = 40;

  // BFS to assign levels
  const levels = new Map<string, number>();
  const positions = new Map<string, { x: number; y: number }>();
  const visited = new Set<string>();
  const queue: Array<{ id: string; level: number }> = [];

  const startId = story.scenes[0]?.id;
  if (startId) {
    queue.push({ id: startId, level: 0 });
    levels.set(startId, 0);
  }

  const levelCounts = new Map<number, number>();

  while (queue.length > 0) {
    const { id, level } = queue.shift()!;
    if (visited.has(id)) continue;
    visited.add(id);

    const count = levelCounts.get(level) || 0;
    levelCounts.set(level, count + 1);

    positions.set(id, {
      x: startX + level * horizontalGap,
      y: startY + count * verticalGap,
    });

    const scene = sceneMap.get(id);
    if (!scene) continue;

    // Find next scenes
    const nextIds: string[] = [];
    if (scene.choices) {
      for (const choice of scene.choices) {
        nextIds.push(choice.nextSceneId);
      }
    }
    if (scene.miniGame?.successSceneId) {
      nextIds.push(scene.miniGame.successSceneId);
    }
    if (scene.findTarget?.nextSceneId) {
      nextIds.push(scene.findTarget.nextSceneId);
    }
    if (scene.autoAdvance?.nextSceneId) {
      nextIds.push(scene.autoAdvance.nextSceneId);
    }

    for (const nextId of nextIds) {
      if (!levels.has(nextId)) {
        levels.set(nextId, level + 1);
        queue.push({ id: nextId, level: level + 1 });
      }
    }
  }

  // Draw edges first (behind nodes)
  pdf.setDrawColor(150, 150, 150);
  pdf.setLineWidth(0.5);

  for (const scene of story.scenes) {
    const fromPos = positions.get(scene.id);
    if (!fromPos) continue;

    const nextIds: string[] = [];
    if (scene.choices) {
      for (const choice of scene.choices) {
        nextIds.push(choice.nextSceneId);
      }
    }
    if (scene.miniGame?.successSceneId) {
      nextIds.push(scene.miniGame.successSceneId);
    }
    if (scene.findTarget?.nextSceneId) {
      nextIds.push(scene.findTarget.nextSceneId);
    }
    if (scene.autoAdvance?.nextSceneId) {
      nextIds.push(scene.autoAdvance.nextSceneId);
    }

    for (const nextId of nextIds) {
      const toPos = positions.get(nextId);
      if (toPos) {
        // Draw arrow
        pdf.line(
          fromPos.x + nodeWidth,
          fromPos.y + nodeHeight / 2,
          toPos.x,
          toPos.y + nodeHeight / 2
        );
        // Arrowhead
        const arrowSize = 3;
        pdf.line(toPos.x, toPos.y + nodeHeight / 2, toPos.x - arrowSize, toPos.y + nodeHeight / 2 - arrowSize);
        pdf.line(toPos.x, toPos.y + nodeHeight / 2, toPos.x - arrowSize, toPos.y + nodeHeight / 2 + arrowSize);
      }
    }
  }

  // Draw nodes
  for (const scene of story.scenes) {
    const pos = positions.get(scene.id);
    if (!pos) continue;

    // Determine node color based on type
    let fillColor: [number, number, number] = [255, 255, 255]; // white - regular
    if (scene.choices && scene.choices.length > 1) {
      fillColor = [255, 243, 176]; // yellow - choice/decision
    } else if (scene.miniGame) {
      fillColor = [176, 216, 255]; // blue - minigame
    } else if (!scene.choices && !scene.miniGame && !scene.findTarget && !scene.autoAdvance) {
      fillColor = [176, 255, 176]; // green - ending
    }

    // Draw node
    pdf.setFillColor(...fillColor);
    pdf.setDrawColor(100, 100, 100);
    pdf.setLineWidth(0.5);
    pdf.roundedRect(pos.x, pos.y, nodeWidth, nodeHeight, 3, 3, 'FD');

    // Node label (truncated scene id)
    pdf.setFontSize(8);
    pdf.setTextColor(30, 30, 30);
    const label = scene.id.length > 8 ? scene.id.substring(0, 7) + '..' : scene.id;
    const labelWidth = pdf.getTextWidth(label);
    pdf.text(label, pos.x + (nodeWidth - labelWidth) / 2, pos.y + nodeHeight / 2 + 2);
  }

  // Legend
  const legendY = PAGE_HEIGHT - 30;
  const legendItems = [
    { color: [255, 243, 176] as [number, number, number], label: 'Entscheidung' },
    { color: [176, 216, 255] as [number, number, number], label: 'Mini-Spiel' },
    { color: [176, 255, 176] as [number, number, number], label: 'Ende' },
    { color: [255, 255, 255] as [number, number, number], label: 'Szene' },
  ];

  let legendX = MARGIN;
  pdf.setFontSize(9);
  for (const item of legendItems) {
    pdf.setFillColor(...item.color);
    pdf.setDrawColor(100, 100, 100);
    pdf.roundedRect(legendX, legendY, 12, 8, 2, 2, 'FD');
    pdf.setTextColor(60, 60, 60);
    pdf.text(item.label, legendX + 15, legendY + 6);
    legendX += 55;
  }
}

/**
 * Main PDF generation function
 * IMPROVED: Uses chapter-based organization with better performance and minigame handling
 */
export async function generatePdf(
  story: StoryJson,
  sceneCapture: SceneCaptureHandle,
  onProgress?: (progress: PdfProgress) => void,
  llmApiEndpoint?: string,
  llmApiKey?: string,
  qualityOptions: PdfQualityOptions = QUALITY_PRESETS.balanced
): Promise<Blob> {
  // Create PDF in landscape A4
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4',
  });

  // Step 1: Get flowing narrative from LLM
  onProgress?.({ current: 0, total: 100, status: 'Erstelle fließende Geschichte...' });

  const narrativeMap = await createFlowingNarrative(story, llmApiEndpoint, llmApiKey);

  // Step 2: Generate book chapters
  const chapters = generateBookChapters(story, narrativeMap);
  const allPages = chapters.flatMap(c => c.pages);
  const totalSteps = allPages.length + chapters.length + 1; // +chapters for chapter title pages, +1 for title page

  // Step 3: Generate title page
  onProgress?.({ current: 1, total: totalSteps, status: 'Erstelle Titelseite...' });

  const titleImage = await sceneCapture.captureTitlePage(story.title, story.author);

  // Add title image centered
  const imageRatio = 800 / 500; // Original canvas ratio
  const maxImageWidth = PAGE_WIDTH - (MARGIN * 2);
  const maxImageHeight = PAGE_HEIGHT - (MARGIN * 2);

  let imgWidth = maxImageWidth;
  let imgHeight = imgWidth / imageRatio;

  if (imgHeight > maxImageHeight) {
    imgHeight = maxImageHeight;
    imgWidth = imgHeight * imageRatio;
  }

  const imgX = (PAGE_WIDTH - imgWidth) / 2;
  const imgY = (PAGE_HEIGHT - imgHeight) / 2;

  pdf.addImage(titleImage, 'PNG', imgX, imgY, imgWidth, imgHeight);

  // Step 4: Generate content by chapters
  let currentStep = 2;
  let capturedSceneImages = new Map<string, string>();

  // Pre-capture all unique scenes in batches for performance
  const uniqueSceneIds = new Set<string>();
  for (const page of allPages) {
    uniqueSceneIds.add(page.scene.id);
  }

  const uniqueScenes = Array.from(uniqueSceneIds);
  onProgress?.({ current: currentStep, total: totalSteps, status: 'Erfasse Szenenbilder...' });

  // Process scenes in memory-efficient chunks
  // Instead of capturing all at once, we:
  // 1. Capture a chunk
  // 2. Use it to render PDF pages
  // 3. Clear the chunk from memory before next

  for (let chunkStart = 0; chunkStart < uniqueScenes.length; chunkStart += MEMORY_CHUNK_SIZE) {
    const chunkEnd = Math.min(chunkStart + MEMORY_CHUNK_SIZE, uniqueScenes.length);
    const chunkSceneIds = uniqueScenes.slice(chunkStart, chunkEnd);

    // Capture this chunk
    const chunkImages = new Map<string, string>();

    for (const sceneId of chunkSceneIds) {
      const scene = allPages.find(p => p.scene.id === sceneId)?.scene;
      if (scene && !capturedSceneImages.has(sceneId)) {
        try {
          const sceneImage = await sceneCapture.captureScene(scene, qualityOptions);
          chunkImages.set(sceneId, sceneImage);
          capturedSceneImages.set(sceneId, sceneImage); // Keep reference for reuse
        } catch (error) {
          console.warn(`Failed to capture scene ${sceneId}:`, error);
        }

        await new Promise(resolve => setTimeout(resolve, qualityOptions?.renderDelay ?? CAPTURE_DELAY_MS));
      }
    }

    // Update progress
    onProgress?.({
      current: Math.floor(currentStep + (chunkEnd / uniqueScenes.length) * (totalSteps * 0.3)),
      total: totalSteps,
      status: `Erfasse Szene ${chunkEnd} von ${uniqueScenes.length}...`,
    });

    // After every 20 scenes, clear old cached images to free memory
    if (chunkEnd % 20 === 0 && capturedSceneImages.size > 20) {
      // Keep only the most recent 20 images cached
      const entries = Array.from(capturedSceneImages.entries());
      const toKeep = entries.slice(-20);
      capturedSceneImages.clear();
      for (const [k, v] of toKeep) {
        capturedSceneImages.set(k, v);
      }
    }
  }

  currentStep = Math.floor(totalSteps * 0.4);

  // Generate PDF pages by chapter
  for (let chapterIndex = 0; chapterIndex < chapters.length; chapterIndex++) {
    const chapter = chapters[chapterIndex];

    // Add chapter title page for branches (not for main story to keep it flowing)
    if (!chapter.isMainPath) {
      onProgress?.({
        current: currentStep++,
        total: totalSteps,
        status: `Erstelle ${chapter.title}...`,
      });

      renderChapterTitlePage(pdf, chapter, false);
    }

    // Render each page in the chapter
    for (let pageIndex = 0; pageIndex < chapter.pages.length; pageIndex++) {
      const page = chapter.pages[pageIndex];

      onProgress?.({
        current: currentStep++,
        total: totalSteps,
        status: `Seite ${page.pageNumber} von ${allPages.length}...`,
      });

      // Add new page
      pdf.addPage();

      // Calculate image dimensions
      const contentImageWidth = PAGE_WIDTH - (MARGIN * 2);
      const contentImageHeight = contentImageWidth / imageRatio;
      const finalImageHeight = Math.min(contentImageHeight, IMAGE_HEIGHT);
      const finalImageWidth = finalImageHeight * imageRatio;
      const contentImgX = (PAGE_WIDTH - finalImageWidth) / 2;
      let contentImgY = MARGIN;

      // Add chapter indicator at top for branch pages
      if (!chapter.isMainPath && pageIndex === 0) {
        pdf.setFontSize(10);
        pdf.setTextColor(150, 130, 100);
        const chapterIndicator = `${chapter.title}`;
        if (chapter.subtitle) {
          const subtitleShort = chapter.subtitle.length > 50
            ? chapter.subtitle.substring(0, 47) + '...'
            : chapter.subtitle;
          pdf.text(`${chapterIndicator} - ${subtitleShort}`, MARGIN, 10);
        } else {
          pdf.text(chapterIndicator, MARGIN, 10);
        }
        contentImgY += 5;
      }

      // Get cached scene image
      const sceneImage = capturedSceneImages.get(page.scene.id);

      if (sceneImage) {
        // Add scene image (using PNG for lossless quality)
        pdf.addImage(sceneImage, 'PNG', contentImgX, contentImgY, finalImageWidth, finalImageHeight);
      } else {
        // Fallback: draw a placeholder if image capture failed
        pdf.setFillColor(240, 240, 240);
        pdf.rect(contentImgX, contentImgY, finalImageWidth, finalImageHeight, 'F');
        pdf.setFontSize(12);
        pdf.setTextColor(150, 150, 150);
        pdf.text('Szene konnte nicht geladen werden', contentImgX + finalImageWidth / 2 - 40, contentImgY + finalImageHeight / 2);
      }

      // Add minigame overlay if this is a minigame scene
      if (page.isMiniGame && page.miniGameInfo) {
        renderMiniGameOverlay(pdf, page, contentImgY, finalImageHeight);
      }

      // Add find-target overlay if this is a search scene
      if (page.isFindTarget) {
        renderFindTargetOverlay(pdf, page, contentImgY, finalImageHeight);
      }

      // Add narrative text
      const textY = contentImgY + finalImageHeight + 10;
      const textWidth = PAGE_WIDTH - (MARGIN * 4);

      if (page.narrativeText) {
        pdf.setFontSize(TEXT_FONT_SIZE);
        pdf.setTextColor(30, 30, 30);

        // Split text into lines that fit
        const lines = pdf.splitTextToSize(page.narrativeText, textWidth);
        pdf.text(lines, MARGIN * 2, textY);
      } else if (page.isMiniGame && page.miniGameInfo) {
        // For minigame scenes without narrative, add a placeholder narrative
        pdf.setFontSize(TEXT_FONT_SIZE);
        pdf.setTextColor(30, 30, 30);

        const miniGameNarrative = `Jetzt beginnt ein spannendes Abenteuer! ${page.miniGameInfo.description}`;
        const lines = pdf.splitTextToSize(miniGameNarrative, textWidth);
        pdf.text(lines, MARGIN * 2, textY);
      }

      // Add page number with chapter info for branches
      pdf.setFontSize(PAGE_NUMBER_SIZE);
      pdf.setTextColor(150, 150, 150);

      let pageNumText = `${page.pageNumber}`;
      if (!chapter.isMainPath) {
        pageNumText = `${chapter.title} - ${pageNumText}`;
      }

      const pageNumWidth = pdf.getTextWidth(pageNumText);
      pdf.text(pageNumText, (PAGE_WIDTH - pageNumWidth) / 2, PAGE_HEIGHT - 10);
    }
  }

  // Add table of contents / story map at the end for branching stories
  if (chapters.length > 1) {
    pdf.addPage();
    renderTableOfContents(pdf, chapters, story.title);
  }

  // Add flowchart page for branching stories
  if (chapters.length > 1 || story.scenes.length > 5) {
    pdf.addPage();
    renderStoryFlowchart(pdf, story);
  }

  onProgress?.({ current: totalSteps, total: totalSteps, status: 'Fertig!' });

  return pdf.output('blob');
}

/**
 * Renders a table of contents showing the story structure
 */
function renderTableOfContents(
  pdf: jsPDF,
  chapters: BookChapter[],
  storyTitle: string
): void {
  // Background
  pdf.setFillColor(250, 248, 245);
  pdf.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, 'F');

  // Title
  pdf.setFontSize(TITLE_FONT_SIZE);
  pdf.setTextColor(60, 50, 40);
  const tocTitle = 'Alle Wege durch die Geschichte';
  const titleWidth = pdf.getTextWidth(tocTitle);
  pdf.text(tocTitle, (PAGE_WIDTH - titleWidth) / 2, 30);

  // Decorative line
  pdf.setDrawColor(200, 180, 150);
  pdf.setLineWidth(1);
  pdf.line(PAGE_WIDTH / 2 - 60, 38, PAGE_WIDTH / 2 + 60, 38);

  // Story title
  pdf.setFontSize(12);
  pdf.setTextColor(100, 90, 80);
  const storyTitleWidth = pdf.getTextWidth(storyTitle);
  pdf.text(storyTitle, (PAGE_WIDTH - storyTitleWidth) / 2, 48);

  // Chapter list
  let yPos = 70;
  const lineHeight = 18;

  for (const chapter of chapters) {
    if (yPos > PAGE_HEIGHT - 40) break; // Don't overflow page

    // Chapter marker
    pdf.setFillColor(chapter.isMainPath ? 100 : 150, chapter.isMainPath ? 149 : 130, chapter.isMainPath ? 237 : 100);
    pdf.circle(MARGIN + 15, yPos - 2, 4, 'F');

    // Chapter title
    pdf.setFontSize(14);
    pdf.setTextColor(60, 50, 40);
    pdf.text(chapter.title, MARGIN + 25, yPos);

    // Page range
    if (chapter.pages.length > 0) {
      const firstPage = chapter.pages[0].pageNumber;
      const lastPage = chapter.pages[chapter.pages.length - 1].pageNumber;
      const pageRange = firstPage === lastPage ? `Seite ${firstPage}` : `Seiten ${firstPage}-${lastPage}`;

      pdf.setFontSize(10);
      pdf.setTextColor(120, 110, 100);
      pdf.text(pageRange, PAGE_WIDTH - MARGIN - pdf.getTextWidth(pageRange), yPos);
    }

    // Subtitle / description
    if (chapter.subtitle) {
      pdf.setFontSize(10);
      pdf.setTextColor(100, 90, 80);
      const subtitleTrunc = chapter.subtitle.length > 70
        ? chapter.subtitle.substring(0, 67) + '...'
        : chapter.subtitle;
      pdf.text(subtitleTrunc, MARGIN + 25, yPos + 10);
      yPos += lineHeight + 8;
    } else {
      yPos += lineHeight;
    }
  }

  // Footer note
  pdf.setFontSize(10);
  pdf.setTextColor(150, 140, 130);
  const footerText = 'Dies ist eine interaktive Geschichte mit mehreren Enden!';
  const footerWidth = pdf.getTextWidth(footerText);
  pdf.text(footerText, (PAGE_WIDTH - footerWidth) / 2, PAGE_HEIGHT - 20);
}

/**
 * Download the PDF
 */
export function downloadPdf(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
