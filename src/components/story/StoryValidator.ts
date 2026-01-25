/**
 * GESCHICHTEN-VALIDIERUNG / STORY VALIDATION
 * ==========================================
 * Überprüft dass alle Szenen verbunden sind und die Geschichte funktioniert!
 * Verifies that all scenes are connected and the story works!
 */

import type { Story, StoryScene } from './StoryPlayer';

export interface ValidationError {
  type: 'missing_scene' | 'unreachable_scene' | 'dead_end' | 'missing_start' | 'circular_only' | 'missing_dialogue';
  message: string;
  sceneId?: string;
  referencedFrom?: string;
}

export interface ValidationWarning {
  type: 'no_transition' | 'long_dialogue' | 'too_many_choices' | 'duplicate_choice';
  message: string;
  sceneId?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
  stats: {
    totalScenes: number;
    reachableScenes: number;
    totalChoices: number;
    maxDepth: number;
    branchingFactor: number;
  };
  graph: StoryGraph;
}

export interface StoryGraph {
  nodes: Map<string, GraphNode>;
  edges: Array<{ from: string; to: string; label?: string }>;
}

interface GraphNode {
  id: string;
  depth: number;
  inDegree: number;
  outDegree: number;
  isStart: boolean;
  isEnd: boolean;
}

/**
 * Validiert eine Geschichte und gibt detaillierte Ergebnisse zurück
 * Validates a story and returns detailed results
 */
export function validateStory(story: Story): ValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationWarning[] = [];
  const sceneMap = new Map<string, StoryScene>();

  // Build scene map
  for (const scene of story.scenes) {
    sceneMap.set(scene.id, scene);
  }

  // Check start scene exists
  if (!sceneMap.has(story.startSceneId)) {
    errors.push({
      type: 'missing_start',
      message: `Start-Szene "${story.startSceneId}" existiert nicht!`,
      sceneId: story.startSceneId,
    });
  }

  // Build graph and check references
  const graph = buildStoryGraph(story, sceneMap, errors, warnings);

  // Find reachable scenes from start
  const reachable = findReachableScenes(story.startSceneId, sceneMap);

  // Check for unreachable scenes
  for (const scene of story.scenes) {
    if (!reachable.has(scene.id)) {
      errors.push({
        type: 'unreachable_scene',
        message: `Szene "${scene.id}" ist nicht erreichbar vom Start!`,
        sceneId: scene.id,
      });
    }
  }

  // Check for dead ends (scenes with no choices that aren't the last scene)
  for (const scene of story.scenes) {
    const hasChoices = scene.choices && scene.choices.length > 0;
    const isLastScene = story.scenes.indexOf(scene) === story.scenes.length - 1;
    const node = graph.nodes.get(scene.id);

    if (!hasChoices && !isLastScene && node && node.outDegree === 0) {
      // Check if it's referenced as a next scene in sequence
      const sceneIndex = story.scenes.findIndex(s => s.id === scene.id);
      const hasNextInSequence = sceneIndex < story.scenes.length - 1;

      if (!hasNextInSequence) {
        errors.push({
          type: 'dead_end',
          message: `Szene "${scene.id}" ist eine Sackgasse ohne Entscheidungen!`,
          sceneId: scene.id,
        });
      }
    }
  }

  // Check for scenes without dialogue (warning)
  for (const scene of story.scenes) {
    if (!scene.dialogue || scene.dialogue.length === 0) {
      warnings.push({
        type: 'long_dialogue',
        message: `Szene "${scene.id}" hat keinen Dialog`,
        sceneId: scene.id,
      });
    }
  }

  // Check for missing transitions (warning)
  for (const scene of story.scenes) {
    if (!scene.transition || scene.transition === 'none') {
      const isFirst = scene.id === story.startSceneId;
      if (!isFirst) {
        warnings.push({
          type: 'no_transition',
          message: `Szene "${scene.id}" hat keinen Übergang definiert`,
          sceneId: scene.id,
        });
      }
    }
  }

  // Calculate stats
  const maxDepth = calculateMaxDepth(story.startSceneId, sceneMap, new Set());
  const totalChoices = story.scenes.reduce((sum, s) => sum + (s.choices?.length || 0), 0);
  const branchingFactor = story.scenes.length > 0 ? totalChoices / story.scenes.length : 0;

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    stats: {
      totalScenes: story.scenes.length,
      reachableScenes: reachable.size,
      totalChoices,
      maxDepth,
      branchingFactor: Math.round(branchingFactor * 100) / 100,
    },
    graph,
  };
}

/**
 * Baut einen Graphen der Geschichte / Builds a graph of the story
 */
function buildStoryGraph(
  story: Story,
  sceneMap: Map<string, StoryScene>,
  errors: ValidationError[],
  warnings: ValidationWarning[]
): StoryGraph {
  const nodes = new Map<string, GraphNode>();
  const edges: Array<{ from: string; to: string; label?: string }> = [];

  // Create nodes
  for (const scene of story.scenes) {
    nodes.set(scene.id, {
      id: scene.id,
      depth: 0,
      inDegree: 0,
      outDegree: 0,
      isStart: scene.id === story.startSceneId,
      isEnd: false,
    });
  }

  // Create edges from choices
  for (const scene of story.scenes) {
    if (scene.choices) {
      const choiceTexts = new Set<string>();

      for (const choice of scene.choices) {
        // Check for duplicate choice text
        if (choiceTexts.has(choice.text)) {
          warnings.push({
            type: 'duplicate_choice',
            message: `Szene "${scene.id}" hat doppelte Entscheidung: "${choice.text}"`,
            sceneId: scene.id,
          });
        }
        choiceTexts.add(choice.text);

        // Check target exists
        if (!sceneMap.has(choice.nextSceneId)) {
          errors.push({
            type: 'missing_scene',
            message: `Szene "${choice.nextSceneId}" existiert nicht (referenziert von "${scene.id}")`,
            sceneId: choice.nextSceneId,
            referencedFrom: scene.id,
          });
        } else {
          edges.push({
            from: scene.id,
            to: choice.nextSceneId,
            label: choice.text,
          });

          // Update degrees
          const fromNode = nodes.get(scene.id);
          const toNode = nodes.get(choice.nextSceneId);
          if (fromNode) fromNode.outDegree++;
          if (toNode) toNode.inDegree++;
        }
      }

      // Check for too many choices
      if (scene.choices.length > 4) {
        warnings.push({
          type: 'too_many_choices',
          message: `Szene "${scene.id}" hat ${scene.choices.length} Entscheidungen (max 4 empfohlen)`,
          sceneId: scene.id,
        });
      }
    }
  }

  // Mark end nodes (no outgoing edges)
  for (const [, node] of nodes) {
    if (node.outDegree === 0) {
      node.isEnd = true;
    }
  }

  // Calculate depths
  calculateDepths(story.startSceneId, nodes, edges, 0, new Set());

  return { nodes, edges };
}

/**
 * Findet alle erreichbaren Szenen / Finds all reachable scenes
 */
function findReachableScenes(
  startId: string,
  sceneMap: Map<string, StoryScene>,
  visited: Set<string> = new Set()
): Set<string> {
  if (visited.has(startId)) return visited;

  const scene = sceneMap.get(startId);
  if (!scene) return visited;

  visited.add(startId);

  // Follow choices
  if (scene.choices) {
    for (const choice of scene.choices) {
      findReachableScenes(choice.nextSceneId, sceneMap, visited);
    }
  }

  // Follow sequential (next scene in array if no choices)
  if (!scene.choices || scene.choices.length === 0) {
    const scenes = Array.from(sceneMap.values());
    const currentIndex = scenes.findIndex(s => s.id === startId);
    if (currentIndex < scenes.length - 1) {
      findReachableScenes(scenes[currentIndex + 1].id, sceneMap, visited);
    }
  }

  return visited;
}

/**
 * Berechnet die maximale Tiefe / Calculates maximum depth
 */
function calculateMaxDepth(
  sceneId: string,
  sceneMap: Map<string, StoryScene>,
  visited: Set<string>,
  currentDepth: number = 0
): number {
  if (visited.has(sceneId)) return currentDepth;

  const scene = sceneMap.get(sceneId);
  if (!scene) return currentDepth;

  visited.add(sceneId);
  let maxDepth = currentDepth;

  if (scene.choices) {
    for (const choice of scene.choices) {
      const depth = calculateMaxDepth(choice.nextSceneId, sceneMap, new Set(visited), currentDepth + 1);
      maxDepth = Math.max(maxDepth, depth);
    }
  }

  return maxDepth;
}

/**
 * Berechnet Tiefen für alle Knoten / Calculates depths for all nodes
 */
function calculateDepths(
  sceneId: string,
  nodes: Map<string, GraphNode>,
  edges: Array<{ from: string; to: string }>,
  depth: number,
  visited: Set<string>
): void {
  if (visited.has(sceneId)) return;
  visited.add(sceneId);

  const node = nodes.get(sceneId);
  if (node) {
    node.depth = Math.max(node.depth, depth);
  }

  const outgoing = edges.filter(e => e.from === sceneId);
  for (const edge of outgoing) {
    calculateDepths(edge.to, nodes, edges, depth + 1, visited);
  }
}

/**
 * Gibt eine lesbare Zusammenfassung der Validierung aus
 * Prints a readable summary of the validation
 */
export function printValidationSummary(result: ValidationResult): string {
  const lines: string[] = [];

  lines.push('═══════════════════════════════════════');
  lines.push(result.isValid ? '✅ GESCHICHTE IST GÜLTIG' : '❌ GESCHICHTE HAT FEHLER');
  lines.push('═══════════════════════════════════════');

  lines.push('');
  lines.push('📊 STATISTIKEN:');
  lines.push(`   Szenen: ${result.stats.reachableScenes}/${result.stats.totalScenes} erreichbar`);
  lines.push(`   Entscheidungen: ${result.stats.totalChoices}`);
  lines.push(`   Maximale Tiefe: ${result.stats.maxDepth}`);
  lines.push(`   Verzweigungsfaktor: ${result.stats.branchingFactor}`);

  if (result.errors.length > 0) {
    lines.push('');
    lines.push('❌ FEHLER:');
    for (const error of result.errors) {
      lines.push(`   • ${error.message}`);
    }
  }

  if (result.warnings.length > 0) {
    lines.push('');
    lines.push('⚠️ WARNUNGEN:');
    for (const warning of result.warnings) {
      lines.push(`   • ${warning.message}`);
    }
  }

  lines.push('');
  lines.push('🗺️ SZENEN-GRAPH:');
  for (const [id, node] of result.graph.nodes) {
    const markers = [
      node.isStart ? '▶ START' : '',
      node.isEnd ? '⏹ ENDE' : '',
    ].filter(Boolean).join(' ');
    lines.push(`   ${id} (Tiefe: ${node.depth}) ${markers}`);

    const outgoing = result.graph.edges.filter(e => e.from === id);
    for (const edge of outgoing) {
      lines.push(`      → ${edge.to} "${edge.label || ''}"`);
    }
  }

  return lines.join('\n');
}

/**
 * Validiert und wirft einen Fehler wenn ungültig
 * Validates and throws if invalid
 */
export function assertValidStory(story: Story): void {
  const result = validateStory(story);
  if (!result.isValid) {
    const errorMessages = result.errors.map(e => e.message).join('\n');
    throw new Error(`Geschichte ist ungültig:\n${errorMessages}`);
  }
}

/**
 * React Hook für Entwicklungs-Validierung
 * React hook for development validation
 */
export function useStoryValidation(story: Story, logToConsole: boolean = true): ValidationResult {
  const result = validateStory(story);

  if (logToConsole && typeof console !== 'undefined') {
    if (!result.isValid) {
      console.error('Story Validation Failed:', result.errors);
    }
    if (result.warnings.length > 0) {
      console.warn('Story Warnings:', result.warnings);
    }
    console.log(printValidationSummary(result));
  }

  return result;
}
