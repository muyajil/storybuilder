import { JsonStoryPlayer } from '../../components/story';
import type { StoryJson } from '../../components/story/StorySchema';
import storyData from './story.json';

export function DiemagischenPokemon() {
  return <JsonStoryPlayer story={storyData as StoryJson} width={800} height={500} />;
}