# Storybuilder

An AI-powered interactive story creation platform for kids. Build branching narratives with characters, scenes, mini-games, and hidden object challenges - all guided by an AI assistant.

## Features

- **AI-Guided Story Creation**: An AI assistant helps kids create interactive stories through conversation
- **Multiple AI Providers**: Support for AWS Bedrock, Anthropic, OpenAI, Google Gemini, and custom OpenAI-compatible APIs
- **Interactive Story System**:
  - Branching narratives with player choices
  - Click-to-find hidden object challenges
  - Mini-games integrated into the story
  - Animated scene transitions
- **Rich Visual Components**:
  - Character sprites (Princess, Knight, Robot, Animals, etc.)
  - Scene backgrounds (Forest, Ocean, Farm, Castle, etc.)
  - Visual effects and animations
- **Dynamic Tool System**: The AI uses tools to read, write, and edit story code in real-time

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- An AI provider account (AWS, Anthropic, OpenAI, or Google)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd storybuilder

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Edit .env with your configuration
```

### Configuration

Create a `.env` file with your preferred AI provider settings:

```env
# AWS Bedrock Configuration (for bedrock-sso provider)
AWS_REGION=eu-central-1
AWS_PROFILE=default
```

### Running

```bash
# Start development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:5173` to start building stories!

## AI Provider Setup

Click the gear icon in the chat panel to configure your AI provider.

### AWS Bedrock (SSO)

1. Configure AWS SSO in your AWS config file
2. Set `AWS_REGION` and `AWS_PROFILE` in `.env`
3. Run `aws sso login --profile <your-profile>` before starting
4. Select "AWS Bedrock" in the config modal

**Supported models:**
- `anthropic.claude-sonnet-4-5-20250929-v1:0`
- `anthropic.claude-opus-4-5-20251101-v1:0`
- `anthropic.claude-haiku-4-5-20251001-v1:0`

### Anthropic (Direct API)

1. Get an API key from [Anthropic Console](https://console.anthropic.com)
2. Select "Anthropic" in the config modal
3. Enter your API key

**Supported models:**
- `claude-sonnet-4-5-20250929`
- `claude-opus-4-5-20251101`
- `claude-haiku-4-5-20251001`

### OpenAI

1. Get an API key from [OpenAI Platform](https://platform.openai.com)
2. Select "OpenAI" in the config modal
3. Enter your API key

**Supported models:**
- `gpt-5.2`, `gpt-5.1`, `gpt-4o`, `gpt-4o-mini`
- `o3`, `o3-mini`, `o1`

### Google Gemini

1. Get an API key from [Google AI Studio](https://aistudio.google.com)
2. Select "Google AI" in the config modal
3. Enter your API key

**Supported models:**
- `gemini-2.5-flash`, `gemini-2.5-pro`
- `gemini-3-flash-preview`, `gemini-3-pro-preview`

### Custom (OpenAI-compatible)

For local models (Ollama, LM Studio) or other OpenAI-compatible APIs:

1. Select "Custom" in the config modal
2. Enter the base URL (e.g., `http://localhost:11434/v1`)
3. Enter API key if required
4. Enter model name

## Project Structure

```
storybuilder/
├── src/
│   ├── components/
│   │   ├── story/           # Story system components
│   │   │   ├── StoryPlayer.tsx    # Main story player
│   │   │   ├── SceneTemplates.tsx # Background scenes
│   │   │   └── MiniGameTemplates.tsx
│   │   ├── sprites/         # Character & object sprites
│   │   │   ├── Animals.tsx
│   │   │   ├── Characters.tsx
│   │   │   ├── Environment.tsx
│   │   │   └── Effects.tsx
│   │   ├── ConfigModal.tsx  # AI provider configuration
│   │   ├── SidePanel.tsx    # Chat interface
│   │   └── ...
│   ├── games/               # Created stories
│   │   └── liana-abenteuer/ # Example story
│   └── App.tsx
├── vite.config.ts           # Server & AI integration
├── .env.example             # Environment template
└── package.json
```

## Story System

### Scene Types

1. **Dialogue Scenes**: Text with character dialogue and choices
2. **Find Target Scenes**: Click-to-find hidden objects
3. **Mini-Game Scenes**: Interactive games within the story

### Creating Stories

Stories are created through conversation with the AI. The AI uses these tools:

| Tool | Description |
|------|-------------|
| `get_story_system` | Learn how to create stories |
| `get_available_sprites` | See available characters/objects |
| `get_available_scenes` | See available backgrounds |
| `get_available_minigames` | See available mini-games |
| `get_patterns` | Best practices for story design |
| `analyze_story` | Analyze story structure and get recommendations |

### Example Story Structure

```tsx
const story = createLinearStory('My Adventure', [
  {
    id: 'start',
    background: <EnchantedForest width={800} height={500} />,
    characters: (
      <CharacterPosition position="center" bottom={80}>
        <Princess size={100} />
      </CharacterPosition>
    ),
    dialogue: ['Welcome to the adventure!'],
    choices: [
      { text: 'Go left', nextSceneId: 'forest' },
      { text: 'Go right', nextSceneId: 'castle' },
    ],
  },
  {
    id: 'find_treasure',
    background: <DeepOcean width={800} height={500} />,
    dialogue: ['Find the hidden treasure!'],
    findTarget: {
      target: <Treasure size={40} />,
      position: { x: 75, y: 30 },
      hint: 'Look carefully...',
      foundText: 'You found it!',
      nextSceneId: 'victory',
    },
  },
]);
```

## Development

### Adding New Sprites

Add sprite components to `src/components/sprites/`:

```tsx
export function MyCharacter({ size = 100 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      {/* SVG content */}
    </svg>
  );
}
```

### Adding New Scenes

Add scene templates to `src/components/story/SceneTemplates.tsx`:

```tsx
export function MyScene({ width, height }: SceneProps) {
  return (
    <svg width={width} height={height}>
      {/* Scene background */}
    </svg>
  );
}
```

### Adding New Mini-Games

Add mini-game templates to `src/components/story/MiniGameTemplates.tsx`.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `AWS_REGION` | AWS region for Bedrock | `eu-central-1` |
| `AWS_PROFILE` | AWS profile name | `default` |
| `AWS_CONFIG_FILE` | Path to AWS config | `~/.aws/config` |

## AI Tools Reference

The AI assistant has access to these tools for building stories:

| Tool | Description |
|------|-------------|
| `read_file` | Read file contents |
| `write_file` | Create new files |
| `edit_file` | Modify existing files |
| `list_files` | List directory contents |
| `search_code` | Search for code patterns |
| `get_story_system` | Get story creation documentation |
| `get_available_sprites` | List available sprite components |
| `get_available_scenes` | List available scene backgrounds |
| `get_available_minigames` | List available mini-game templates |
| `get_patterns` | Get best practices for stories |
| `analyze_story` | Analyze story structure |

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## License

MIT
