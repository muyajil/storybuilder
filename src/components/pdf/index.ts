/**
 * PDF Export Module
 * =================
 * Components for exporting stories as PDF children's books.
 *
 * Features:
 * - Preserves all story branches with clear chapter structure
 * - Shows minigame scenes with meaningful visual representations
 * - Handles large stories (40+ scenes) efficiently
 * - Creates beautiful children's book format with decorative elements
 */

export { PdfExportButton } from './PdfExportButton';
export { SceneCapture } from './SceneCapture';
export type { SceneCaptureHandle } from './SceneCapture';
export {
  generatePdf,
  downloadPdf,
  collectStoryPaths,
  collectAllScenes,
  createStorySummary,
  createFlowingNarrative,
  generateBookPages,
  generateBookChapters,
  getMiniGameDisplayInfo,
  QUALITY_PRESETS,
} from './pdfGenerator';
export type {
  PdfProgress,
  StoryPath,
  BookPage,
  BookChapter,
  MiniGameDisplayInfo,
  PdfQualityOptions,
  QualityPreset,
} from './pdfGenerator';
