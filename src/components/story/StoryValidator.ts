/**
 * Story JSON Validator
 * ====================
 * Validates story JSON before saving.
 * Returns all errors at once so the agent can fix everything.
 */

import { isValidSprite, isValidBackground } from './ComponentRegistry';
import type { StoryJson } from './StorySchema';

export interface ValidationError {
  type: string;
  message: string;
  path?: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
}

export function validateStoryJson(story: StoryJson): ValidationResult {
  const errors: ValidationError[] = [];

  // Check basic structure
  if (!story.id || typeof story.id !== 'string') {
    errors.push({ type: 'MISSING_ID', message: 'Story muss eine id haben' });
  }

  if (!story.title || typeof story.title !== 'string') {
    errors.push({ type: 'MISSING_TITLE', message: 'Story muss einen title haben' });
  }

  if (!story.scenes || !Array.isArray(story.scenes) || story.scenes.length === 0) {
    errors.push({ type: 'NO_SCENES', message: 'Story muss mindestens eine Szene haben' });
    return { valid: false, errors };
  }

  // Collect all scene IDs
  const sceneIds = new Set<string>();
  const sceneIdCounts = new Map<string, number>();

  for (const scene of story.scenes) {
    if (scene.id) {
      sceneIds.add(scene.id);
      sceneIdCounts.set(scene.id, (sceneIdCounts.get(scene.id) || 0) + 1);
    }
  }

  // Check for 'start' scene
  if (!sceneIds.has('start')) {
    errors.push({ type: 'NO_START', message: "Keine Szene mit id 'start' gefunden" });
  }

  // Check for duplicate IDs
  for (const [id, count] of sceneIdCounts) {
    if (count > 1) {
      errors.push({
        type: 'DUPLICATE_ID',
        message: `Szenen-ID '${id}' kommt ${count}x vor`,
      });
    }
  }

  // Collect all referenced scene IDs
  const referencedIds = new Set<string>();

  // Validate each scene
  story.scenes.forEach((scene, sceneIndex) => {
    const scenePath = `scenes[${sceneIndex}]`;

    if (!scene.id) {
      errors.push({ type: 'SCENE_NO_ID', message: 'Szene braucht eine id', path: scenePath });
    }

    if (!scene.background) {
      errors.push({
        type: 'SCENE_NO_BACKGROUND',
        message: `Szene '${scene.id}' braucht einen background`,
        path: `${scenePath}.background`,
      });
    } else if (!isValidBackground(scene.background)) {
      errors.push({
        type: 'INVALID_BACKGROUND',
        message: `Unbekannter background '${scene.background}'`,
        path: `${scenePath}.background`,
      });
    }

    if (!scene.dialogue || !Array.isArray(scene.dialogue) || scene.dialogue.length === 0) {
      errors.push({
        type: 'SCENE_NO_DIALOGUE',
        message: `Szene '${scene.id}' braucht mindestens einen dialogue`,
        path: `${scenePath}.dialogue`,
      });
    }

    // Validate characters
    if (scene.characters) {
      scene.characters.forEach((char, charIndex) => {
        const charPath = `${scenePath}.characters[${charIndex}]`;

        if (!char.sprite) {
          errors.push({ type: 'CHAR_NO_SPRITE', message: 'Character braucht einen sprite', path: charPath });
        } else if (!isValidSprite(char.sprite)) {
          errors.push({
            type: 'INVALID_SPRITE',
            message: `Unbekannter sprite '${char.sprite}'`,
            path: `${charPath}.sprite`,
          });
        }

        if (!char.position || !['left', 'center', 'right'].includes(char.position)) {
          errors.push({
            type: 'INVALID_POSITION',
            message: `Ungültige position '${char.position}' - nur left/center/right`,
            path: `${charPath}.position`,
          });
        }

        if (typeof char.size !== 'number' || char.size < 10 || char.size > 300) {
          errors.push({
            type: 'INVALID_SIZE',
            message: `Ungültige size ${char.size} - muss 10-300 sein`,
            path: `${charPath}.size`,
          });
        }
      });
    }

    // Validate choices
    if (scene.choices) {
      const choiceTexts = new Set<string>();

      scene.choices.forEach((choice, choiceIndex) => {
        const choicePath = `${scenePath}.choices[${choiceIndex}]`;

        if (!choice.text) {
          errors.push({ type: 'CHOICE_NO_TEXT', message: 'Choice braucht text', path: choicePath });
        } else if (choiceTexts.has(choice.text)) {
          errors.push({
            type: 'DUPLICATE_CHOICE',
            message: `Doppelter Button-Text '${choice.text}'`,
            path: `${choicePath}.text`,
          });
        }
        choiceTexts.add(choice.text);

        if (!choice.nextSceneId) {
          errors.push({ type: 'CHOICE_NO_NEXT', message: 'Choice braucht nextSceneId', path: choicePath });
        } else {
          referencedIds.add(choice.nextSceneId);
        }
      });

      // Self-loop check
      const allGoToSelf = scene.choices.every(c => c.nextSceneId === scene.id);
      if (allGoToSelf && scene.choices.length > 0) {
        errors.push({
          type: 'SELF_LOOP',
          message: `Alle Choices in '${scene.id}' führen zur gleichen Szene`,
          path: `${scenePath}.choices`,
        });
      }
    }

    // Validate findTarget
    if (scene.findTarget) {
      const ftPath = `${scenePath}.findTarget`;

      if (!scene.findTarget.sprite) {
        errors.push({ type: 'FT_NO_SPRITE', message: 'findTarget braucht sprite', path: ftPath });
      } else if (!isValidSprite(scene.findTarget.sprite)) {
        errors.push({
          type: 'INVALID_SPRITE',
          message: `Unbekannter sprite '${scene.findTarget.sprite}'`,
          path: `${ftPath}.sprite`,
        });
      }

      if (!scene.findTarget.position) {
        errors.push({ type: 'FT_NO_POSITION', message: 'findTarget braucht position', path: ftPath });
      } else {
        const { x, y } = scene.findTarget.position;
        if (typeof x !== 'number' || x < 0 || x > 100) {
          errors.push({ type: 'FT_INVALID_X', message: `position.x muss 0-100 sein (ist ${x})`, path: `${ftPath}.position.x` });
        }
        if (typeof y !== 'number' || y < 0 || y > 100) {
          errors.push({ type: 'FT_INVALID_Y', message: `position.y muss 0-100 sein (ist ${y})`, path: `${ftPath}.position.y` });
        }
      }

      if (!scene.findTarget.nextSceneId) {
        errors.push({ type: 'FT_NO_NEXT', message: 'findTarget braucht nextSceneId', path: ftPath });
      } else {
        referencedIds.add(scene.findTarget.nextSceneId);
      }
    }

    // Dead-end check
    const hasChoices = scene.choices && scene.choices.length > 0;
    const hasFindTarget = !!scene.findTarget;
    const hasMiniGame = !!scene.miniGame;
    const hasAutoAdvance = !!scene.autoAdvance;
    const isEnding = scene.dialogue?.some(d => {
      const text = typeof d === 'string' ? d : d.text;
      return text.includes('Ende') || text.includes('Fortsetzung') || text.includes('THE END');
    });

    if (!hasChoices && !hasFindTarget && !hasMiniGame && !hasAutoAdvance && !isEnding) {
      errors.push({
        type: 'DEAD_END',
        message: `Szene '${scene.id}' hat keinen Ausgang`,
        path: scenePath,
      });
    }
  });

  // Invalid references
  for (const refId of referencedIds) {
    if (!sceneIds.has(refId)) {
      errors.push({ type: 'INVALID_REF', message: `nextSceneId '${refId}' existiert nicht` });
    }
  }

  // Orphan scenes
  for (const scene of story.scenes) {
    if (scene.id !== 'start' && !referencedIds.has(scene.id)) {
      errors.push({ type: 'ORPHAN', message: `Szene '${scene.id}' wird nirgends referenziert` });
    }
  }

  // Item consistency
  const requiredItems = new Set<string>();
  const providedItems = new Set<string>();

  for (const scene of story.scenes) {
    if (scene.choices) {
      for (const choice of scene.choices) {
        if (choice.requiresItems) {
          choice.requiresItems.forEach(item => requiredItems.add(item));
        }
      }
    }

    const allActions = [...(scene.onEnterActions || []), ...(scene.onFindTargetActions || [])];
    for (const action of allActions) {
      if (action.type === 'add_item' && action.item) {
        providedItems.add(action.item);
      }
    }
  }

  for (const item of requiredItems) {
    if (!providedItems.has(item)) {
      errors.push({ type: 'MISSING_ITEM', message: `requiresItems: ['${item}'] aber kein add_item dafür` });
    }
  }

  return { valid: errors.length === 0, errors };
}

// Format for agent
export function formatValidationResult(result: ValidationResult): string {
  if (result.valid) {
    return '✅ Story JSON ist valide!';
  }

  let output = `❌ ${result.errors.length} Fehler:\n\n`;
  for (const error of result.errors) {
    output += `• ${error.message}`;
    if (error.path) output += ` (${error.path})`;
    output += '\n';
  }
  return output;
}
