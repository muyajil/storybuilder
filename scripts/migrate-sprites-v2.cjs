/**
 * Sprite Migration Script v2
 * ==========================
 * Smarter migration that handles:
 * - Multiple interface types per file
 * - Cross-references between components
 * - Scene components that compose other components
 */

const fs = require('fs');
const path = require('path');

const SPRITES_DIR = path.join(__dirname, '../src/components/sprites');

// Extract all interfaces from a file
function extractInterfaces(content) {
  const interfaces = [];
  const interfaceRegex = /interface\s+(\w+)\s*\{[^}]+\}/g;
  let match;
  while ((match = interfaceRegex.exec(content)) !== null) {
    interfaces.push({
      name: match[1],
      content: match[0],
    });
  }
  return interfaces;
}

// Extract function components with their full body
function extractComponents(content) {
  const components = [];
  const lines = content.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const match = line.match(/^export function (\w+)\s*\(/);

    if (match) {
      const name = match[1];
      let braceCount = 0;
      let started = false;
      let componentLines = [];

      // Find the complete function
      for (let j = i; j < lines.length; j++) {
        const currentLine = lines[j];
        componentLines.push(currentLine);

        for (const char of currentLine) {
          if (char === '{') {
            braceCount++;
            started = true;
          } else if (char === '}') {
            braceCount--;
          }
        }

        if (started && braceCount === 0) {
          i = j;
          break;
        }
      }

      components.push({
        name,
        content: componentLines.join('\n'),
      });
    }
    i++;
  }

  return components;
}

// Determine which interface a component uses
function getComponentInterface(componentContent, interfaces) {
  for (const iface of interfaces) {
    // Check if component signature contains the interface name
    const signatureMatch = componentContent.match(/\{[^}]*\}:\s*(\w+)/);
    if (signatureMatch && signatureMatch[1] === iface.name) {
      return iface.name;
    }
    // Also check inline destructuring pattern
    if (componentContent.includes(`: ${iface.name})`)) {
      return iface.name;
    }
  }
  return null;
}

// Check if component uses other components from same file
function getInternalDependencies(componentContent, allComponentNames) {
  const deps = [];
  for (const name of allComponentNames) {
    // Look for JSX usage like <ComponentName or {ComponentName}
    const regex = new RegExp(`<${name}[\\s/>]|\\{${name}\\}`, 'g');
    if (regex.test(componentContent)) {
      deps.push(name);
    }
  }
  return deps;
}

// Create component file with proper imports
function createComponentFile(component, category, interfaces, internalDeps) {
  const { name, content } = component;

  // Determine which interface this component uses
  let usedInterface = null;
  for (const iface of interfaces) {
    if (content.includes(`: ${iface.name})`)) {
      usedInterface = iface.name;
      break;
    }
  }

  // Build imports
  let imports = [];

  // Add type import if needed
  if (usedInterface) {
    imports.push(`import type { ${usedInterface} } from '../types';`);
  }

  // Add internal dependencies
  if (internalDeps.length > 0) {
    imports.push(`import { ${internalDeps.join(', ')} } from './index';`);
  }

  const fileContent = `/**
 * ${name} Sprite Component
 */

${imports.join('\n')}${imports.length > 0 ? '\n\n' : ''}${content}
`;

  const targetDir = path.join(SPRITES_DIR, category);
  const targetFile = path.join(targetDir, `${name}.tsx`);

  fs.writeFileSync(targetFile, fileContent, 'utf8');
  return { name, usedInterface, internalDeps };
}

// Create types.ts with all interfaces
function createTypesFile(allInterfaces) {
  const uniqueInterfaces = new Map();
  for (const iface of allInterfaces) {
    if (!uniqueInterfaces.has(iface.name)) {
      uniqueInterfaces.set(iface.name, iface.content);
    }
  }

  const content = `/**
 * Shared types for sprite components
 */

${Array.from(uniqueInterfaces.values()).join('\n\n')}
`;

  fs.writeFileSync(path.join(SPRITES_DIR, 'types.ts'), content, 'utf8');
  console.log(`Created types.ts with ${uniqueInterfaces.size} interfaces`);
}

// Create index.ts for a category
function createCategoryIndex(category, componentInfos) {
  // Sort by dependencies - components with no deps first
  const sorted = [...componentInfos].sort((a, b) => {
    if (a.internalDeps.length === 0 && b.internalDeps.length > 0) return -1;
    if (a.internalDeps.length > 0 && b.internalDeps.length === 0) return 1;
    return 0;
  });

  const exports = sorted
    .map(info => `export { ${info.name} } from './${info.name}';`)
    .join('\n');

  const indexContent = `/**
 * ${category.charAt(0).toUpperCase() + category.slice(1)} Sprites
 */

${exports}
`;

  const indexFile = path.join(SPRITES_DIR, category, 'index.ts');
  fs.writeFileSync(indexFile, indexContent, 'utf8');
  console.log(`  Created ${category}/index.ts with ${sorted.length} exports`);
}

// Migrate a single source file
function migrateFile(sourceFile, category) {
  console.log(`\nMigrating ${sourceFile} to ${category}/...`);

  const sourcePath = path.join(SPRITES_DIR, sourceFile);
  if (!fs.existsSync(sourcePath)) {
    console.log(`  Skipped: ${sourceFile} not found`);
    return { interfaces: [], components: [] };
  }

  const content = fs.readFileSync(sourcePath, 'utf8');

  // Extract interfaces
  const interfaces = extractInterfaces(content);
  console.log(`  Found ${interfaces.length} interfaces`);

  // Extract components
  const components = extractComponents(content);
  console.log(`  Found ${components.length} components`);

  // Get all component names for dependency checking
  const allNames = components.map(c => c.name);

  // Ensure target directory exists
  const targetDir = path.join(SPRITES_DIR, category);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Create individual files
  const componentInfos = [];
  for (const component of components) {
    const internalDeps = getInternalDependencies(component.content, allNames)
      .filter(dep => dep !== component.name); // Remove self-reference

    const info = createComponentFile(component, category, interfaces, internalDeps);
    componentInfos.push(info);
  }

  // Create index.ts
  createCategoryIndex(category, componentInfos);

  return { interfaces, componentInfos };
}

// Main migration
function main() {
  console.log('Starting sprite migration v2...\n');

  const migrations = [
    { source: 'Animals.tsx', category: 'animals' },
    { source: 'Characters.tsx', category: 'characters' },
    { source: 'Effects.tsx', category: 'effects' },
    { source: 'Environment.tsx', category: 'environment' },
  ];

  const allInterfaces = [];
  const allResults = {};

  for (const { source, category } of migrations) {
    const result = migrateFile(source, category);
    allInterfaces.push(...result.interfaces);
    allResults[category] = result.componentInfos?.length || 0;
  }

  // Create shared types file
  console.log('\nCreating types.ts...');
  createTypesFile(allInterfaces);

  // Create main sprites index
  console.log('\nCreating main index.ts...');
  const mainIndexContent = `/**
 * Sprite Components
 * =================
 * All sprite components organized by category.
 */

// Types
export * from './types';

// Animals
export * from './animals';

// Characters
export * from './characters';

// Effects
export * from './effects';

// Environment
export * from './environment';
`;

  fs.writeFileSync(path.join(SPRITES_DIR, 'index.ts'), mainIndexContent, 'utf8');

  // Summary
  console.log('\n=== Migration Complete ===');
  let total = 0;
  for (const [category, count] of Object.entries(allResults)) {
    console.log(`${category}: ${count} components`);
    total += count;
  }
  console.log(`Total: ${total} components migrated`);
}

main();
