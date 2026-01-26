/**
 * PDF Export Module
 * =================
 * Components for exporting stories as PDF children's books.
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
} from './pdfGenerator';
export type { PdfProgress, StoryPath, BookPage } from './pdfGenerator';
