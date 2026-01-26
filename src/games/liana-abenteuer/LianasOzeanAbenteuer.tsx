/**
 * Lianas Ozean-Abenteuer
 * ======================
 * An interactive story loaded from JSON.
 */

import { JsonStoryPlayer } from '../../components/story';
import storyData from './story.json';
import type { StoryJson } from '../../components/story';

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;

export function LianasOzeanAbenteuer() {
  return (
    <JsonStoryPlayer
      story={storyData as StoryJson}
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
    />
  );
}
