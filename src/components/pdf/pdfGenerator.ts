/**
 * PDF Generator
 * =============
 * Core logic for generating children's book PDFs from story data.
 *
 * Process:
 * 1. Traverse story graph to collect all scenes
 * 2. Send to LLM to create a flowing narrative
 * 3. Generate PDF with scene images and text
 */

import jsPDF from 'jspdf';
import type { StoryJson, SceneJson } from '../story/StorySchema';
import type { SceneCaptureHandle } from './SceneCapture';

// PDF Page dimensions (A4 Landscape)
const PAGE_WIDTH = 297; // mm
const PAGE_HEIGHT = 210; // mm
const MARGIN = 15; // mm
const IMAGE_HEIGHT = 120; // mm for scene image

// Font sizes
const TEXT_FONT_SIZE = 14;
const PAGE_NUMBER_SIZE = 10;

export interface PdfProgress {
  current: number;
  total: number;
  status: string;
}

export interface StoryPath {
  scenes: SceneJson[];
  branchName?: string;
}

/**
 * Traverses the story graph and collects all unique scenes
 * Returns scenes organized by path through the story
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

  // DFS to collect all paths
  const visited = new Set<string>();

  function traverse(sceneId: string, currentPath: SceneJson[], branchName?: string): void {
    const scene = sceneMap.get(sceneId);
    if (!scene) return;

    // Add scene to path (allow revisiting for different paths)
    currentPath.push(scene);

    // If scene has choices, explore each branch
    if (scene.choices && scene.choices.length > 0) {
      // First choice continues main path
      const firstChoice = scene.choices[0];
      if (!visited.has(`${sceneId}->${firstChoice.nextSceneId}`)) {
        visited.add(`${sceneId}->${firstChoice.nextSceneId}`);
        traverse(firstChoice.nextSceneId, [...currentPath], branchName);
      }

      // Additional choices create new branches
      for (let i = 1; i < scene.choices.length; i++) {
        const choice = scene.choices[i];
        if (!visited.has(`${sceneId}->${choice.nextSceneId}`)) {
          visited.add(`${sceneId}->${choice.nextSceneId}`);
          // Start a new path from the branching point
          const branchPath = [...currentPath.slice(0, -1)]; // Remove current scene
          traverse(choice.nextSceneId, branchPath, choice.text);
        }
      }
    } else if (scene.miniGame?.successSceneId) {
      // Follow mini-game success path
      if (!visited.has(`${sceneId}->${scene.miniGame.successSceneId}`)) {
        visited.add(`${sceneId}->${scene.miniGame.successSceneId}`);
        traverse(scene.miniGame.successSceneId, currentPath, branchName);
      }
    } else if (scene.findTarget?.nextSceneId) {
      // Follow find-target path
      if (!visited.has(`${sceneId}->${scene.findTarget.nextSceneId}`)) {
        visited.add(`${sceneId}->${scene.findTarget.nextSceneId}`);
        traverse(scene.findTarget.nextSceneId, currentPath, branchName);
      }
    } else {
      // End of path - save it
      if (currentPath.length > 0) {
        paths.push({ scenes: [...currentPath], branchName });
      }
    }
  }

  traverse(startSceneId, [], undefined);

  // If no paths were collected (linear story), create one path with all scenes
  if (paths.length === 0) {
    paths.push({ scenes: story.scenes, branchName: undefined });
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
  isBranchStart?: boolean;
  branchName?: string;
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
 * Generates book pages from story and narrative
 */
export function generateBookPages(
  story: StoryJson,
  narrativeMap: Map<string, string>
): BookPage[] {
  const paths = collectStoryPaths(story);
  const pages: BookPage[] = [];
  const addedSceneIds = new Set<string>();
  let pageNumber = 1;

  for (let pathIndex = 0; pathIndex < paths.length; pathIndex++) {
    const path = paths[pathIndex];
    const isBranch = pathIndex > 0;

    for (let i = 0; i < path.scenes.length; i++) {
      const scene = path.scenes[i];

      // Skip if we've already added this scene
      if (addedSceneIds.has(scene.id)) continue;
      addedSceneIds.add(scene.id);

      const narrativeText = narrativeMap.get(scene.id) || '';

      pages.push({
        scene,
        narrativeText,
        pageNumber: pageNumber++,
        isBranchStart: isBranch && i === 0,
        branchName: isBranch && i === 0 ? path.branchName : undefined,
      });
    }
  }

  return pages;
}

/**
 * Main PDF generation function
 */
export async function generatePdf(
  story: StoryJson,
  sceneCapture: SceneCaptureHandle,
  onProgress?: (progress: PdfProgress) => void,
  llmApiEndpoint?: string,
  llmApiKey?: string
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

  // Step 2: Generate book pages
  const pages = generateBookPages(story, narrativeMap);
  const totalSteps = pages.length + 1; // +1 for title page

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

  pdf.addImage(titleImage, 'JPEG', imgX, imgY, imgWidth, imgHeight);

  // Step 4: Generate content pages
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];

    onProgress?.({
      current: i + 2,
      total: totalSteps,
      status: `Seite ${page.pageNumber} von ${pages.length}...`,
    });

    // Add new page
    pdf.addPage();

    // If this is a branch start, add branch indicator
    if (page.isBranchStart && page.branchName) {
      pdf.setFontSize(12);
      pdf.setTextColor(100, 100, 100);
      const branchText = `--- Pfad: ${page.branchName} ---`;
      const textWidth = pdf.getTextWidth(branchText);
      pdf.text(branchText, (PAGE_WIDTH - textWidth) / 2, 12);
    }

    // Capture scene image
    const sceneImage = await sceneCapture.captureScene(page.scene);

    // Calculate image dimensions (maintain aspect ratio)
    const contentImageWidth = PAGE_WIDTH - (MARGIN * 2);
    const contentImageHeight = contentImageWidth / imageRatio;
    const finalImageHeight = Math.min(contentImageHeight, IMAGE_HEIGHT);
    const finalImageWidth = finalImageHeight * imageRatio;
    const contentImgX = (PAGE_WIDTH - finalImageWidth) / 2;
    const contentImgY = MARGIN + (page.isBranchStart ? 8 : 0);

    // Add scene image
    pdf.addImage(sceneImage, 'JPEG', contentImgX, contentImgY, finalImageWidth, finalImageHeight);

    // Add narrative text
    if (page.narrativeText) {
      pdf.setFontSize(TEXT_FONT_SIZE);
      pdf.setTextColor(30, 30, 30);

      const textY = contentImgY + finalImageHeight + 10;
      const textWidth = PAGE_WIDTH - (MARGIN * 4);

      // Split text into lines that fit
      const lines = pdf.splitTextToSize(page.narrativeText, textWidth);

      pdf.text(lines, MARGIN * 2, textY);
    }

    // Add page number
    pdf.setFontSize(PAGE_NUMBER_SIZE);
    pdf.setTextColor(150, 150, 150);
    const pageNumText = `${page.pageNumber}`;
    const pageNumWidth = pdf.getTextWidth(pageNumText);
    pdf.text(pageNumText, (PAGE_WIDTH - pageNumWidth) / 2, PAGE_HEIGHT - 10);
  }

  onProgress?.({ current: totalSteps, total: totalSteps, status: 'Fertig!' });

  return pdf.output('blob');
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
