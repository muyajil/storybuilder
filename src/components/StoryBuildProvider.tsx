import { createContext, useContext, type ReactNode } from 'react';
import type { StoryBuildContext } from './story';

interface StoryBuildProviderValue {
  onStoryBuildRequest: (context: StoryBuildContext) => void;
}

const StoryBuildContextReact = createContext<StoryBuildProviderValue | null>(null);

export function useStoryBuild() {
  return useContext(StoryBuildContextReact);
}

interface StoryBuildProviderProps {
  children: ReactNode;
  onBuildRequest: (context: StoryBuildContext) => void;
}

export function StoryBuildProvider({ children, onBuildRequest }: StoryBuildProviderProps) {
  return (
    <StoryBuildContextReact.Provider value={{ onStoryBuildRequest: onBuildRequest }}>
      {children}
    </StoryBuildContextReact.Provider>
  );
}
