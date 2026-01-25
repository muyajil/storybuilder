import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { ConfigModal, loadAIConfig, saveAIConfig } from './ConfigModal';
import type { AIConfig } from './ConfigModal';

interface Message {
  id: number;
  text: string;
  author: 'user' | 'claude';
  timestamp: Date;
}

interface GameContext {
  screen: 'menu' | 'game';
  gameId?: string;
  gameName?: string;
}

interface SidePanelProps {
  context?: GameContext;
}

export interface SidePanelHandle {
  sendMessage: (message: string) => void;
}

/**
 * CHAT PANEL - Multi-provider AI with streaming
 */
export const SidePanel = forwardRef<SidePanelHandle, SidePanelProps>(function SidePanel({ context }, ref) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState('Kind');
  const [isWorking, setIsWorking] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [aiConfig, setAiConfig] = useState<AIConfig>(() => loadAIConfig());
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Expose sendMessage to parent via ref
  useImperativeHandle(ref, () => ({
    sendMessage: (message: string) => {
      sendPrompt(message);
    }
  }));

  // Auto-scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendPrompt = async (overrideMessage?: string) => {
    const messageText = overrideMessage || input.trim();
    if (!messageText || isWorking) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      author: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const promptText = messageText;
    if (!overrideMessage) setInput('');

    // Create placeholder for streaming response
    const assistantId = Date.now() + 1;
    setMessages(prev => [...prev, {
      id: assistantId,
      text: '',
      author: 'claude',
      timestamp: new Date(),
    }]);

    setIsWorking(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: promptText,
          author: name,
          context: context || { screen: 'menu' },
          aiConfig,
        }),
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) throw new Error('No reader');

      let streamedText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));

              if (data.type === 'token') {
                streamedText += data.text;
                setMessages(prev => prev.map(msg =>
                  msg.id === assistantId
                    ? { ...msg, text: streamedText }
                    : msg
                ));
              } else if (data.type === 'tool') {
                // Show tool usage with details
                const toolEmoji: Record<string, string> = {
                  'read_file': '📖',
                  'write_file': '✏️',
                  'edit_file': '✂️',
                  'list_files': '📁',
                  'search_code': '🔍',
                  'create_game': '🎮',
                  'get_components': '🧩',
                  'get_hooks': '🪝',
                  'get_project_tree': '🌳',
                  'run_command': '⚡',
                };
                const emoji = toolEmoji[data.name] || '🔧';
                let toolInfo = `\n${emoji} ${data.name}`;
                if (data.input?.path) toolInfo += `: ${data.input.path}`;
                if (data.name === 'edit_file' && data.input?.old_text) {
                  const preview = data.input.old_text.substring(0, 60).replace(/\n/g, '↵');
                  toolInfo += `\n   Ersetze: "${preview}..."`;
                }
                if (data.name === 'edit_file' && data.input?.new_text) {
                  const preview = data.input.new_text.substring(0, 60).replace(/\n/g, '↵');
                  toolInfo += `\n   Mit: "${preview}..."`;
                }
                streamedText += toolInfo + '\n';
                setMessages(prev => prev.map(msg =>
                  msg.id === assistantId
                    ? { ...msg, text: streamedText }
                    : msg
                ));
              } else if (data.type === 'tool_result') {
                // Show tool result
                const result = data.result || '';
                const isError = result.includes('Fehler') || result.includes('❌');
                const preview = result.substring(0, 80).replace(/\n/g, ' ');
                streamedText += `   → ${isError ? '❌' : '✅'} ${preview}${result.length > 80 ? '...' : ''}\n`;
                setMessages(prev => prev.map(msg =>
                  msg.id === assistantId
                    ? { ...msg, text: streamedText }
                    : msg
                ));
              } else if (data.type === 'error') {
                setMessages(prev => prev.map(msg =>
                  msg.id === assistantId
                    ? { ...msg, text: `❌ Fehler: ${data.message}` }
                    : msg
                ));
              }
            } catch {
              // Ignore parse errors
            }
          }
        }
      }
    } catch (e) {
      console.error('Failed:', e);
      setMessages(prev => prev.map(msg =>
        msg.id === assistantId
          ? { ...msg, text: `❌ Verbindungsfehler` }
          : msg
      ));
    }

    setIsWorking(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      sendPrompt();
    }
  };

  const clearChat = async () => {
    try {
      await fetch('/api/clear', { method: 'POST' });
      setMessages([]);
    } catch (e) {
      console.error('Failed to clear:', e);
    }
  };

  return (
    <div
      className={isWorking ? 'chat-panel chat-panel-working' : 'chat-panel'}
      style={{
        width: 420,
        minWidth: 420,
        backgroundColor: '#1a1a2e',
        borderLeft: isWorking ? '3px solid #f59e0b' : '2px solid #333',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        boxShadow: isWorking ? '-5px 0 30px rgba(245, 158, 11, 0.3)' : 'none',
      }}
    >
      {/* Header */}
      <div
        className={isWorking ? 'chat-header-working' : ''}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 12px',
          backgroundColor: isWorking ? '#f59e0b' : '#4f46e5',
          color: isWorking ? '#000' : '#fff',
          transition: 'background-color 0.3s',
        }}
      >
        <span style={{ fontWeight: 'bold', fontSize: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
          {isWorking ? (
            <>
              <span className="working-icon">⚙️</span>
              <span>Claude arbeitet</span>
              <span className="loading-dots">
                <span>.</span><span>.</span><span>.</span>
              </span>
            </>
          ) : (
            '💬 Geschichten-Werkstatt'
          )}
        </span>
        <div style={{ display: 'flex', gap: 6 }}>
          <button
            onClick={() => setShowConfig(true)}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: 4,
              padding: '4px 8px',
              color: 'inherit',
              cursor: 'pointer',
              fontSize: 11,
            }}
            title={`${aiConfig.provider}: ${aiConfig.modelId}`}
          >
            ⚙️
          </button>
          <button
            onClick={clearChat}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: 4,
              padding: '4px 8px',
              color: 'inherit',
              cursor: 'pointer',
              fontSize: 11,
            }}
          >
            🗑️ Neu
          </button>
        </div>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflow: 'auto', padding: 10 }}>
        {messages.length === 0 && (
          <div style={{ color: '#888', textAlign: 'center', padding: 30, fontSize: 22 }}>
            👋 Hallo! Schreib mir was du machen willst!
          </div>
        )}
        {messages.map(msg => (
          <div
            key={msg.id}
            style={{
              backgroundColor: msg.author === 'claude' ? '#1e3a5f' : '#2d2d44',
              padding: '8px 10px',
              borderRadius: 8,
              marginBottom: 8,
              borderLeft: msg.author === 'claude' ? '3px solid #4f46e5' : 'none',
            }}
          >
            {msg.author === 'claude' && (
              <div style={{ fontSize: 16, color: '#888', marginBottom: 6 }}>🤖 Claude</div>
            )}
            <div style={{
              color: 'white',
              whiteSpace: 'pre-wrap',
              fontSize: 20,
              lineHeight: 1.7,
            }}>
              {msg.text || (msg.author === 'claude' ? '...' : '')}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input area */}
      <div style={{
        padding: 10,
        borderTop: '1px solid #333',
        backgroundColor: '#252538',
      }}>
        <div style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ color: '#888', fontSize: 18 }}>Ich bin:</span>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            style={{
              background: '#1a1a2e',
              border: '1px solid #444',
              borderRadius: 8,
              padding: '8px 14px',
              color: 'white',
              fontSize: 18,
              width: 140,
            }}
          />
        </div>

        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={isWorking ? 'Warte...' : 'Schreib hier...'}
          disabled={isWorking}
          style={{
            width: '100%',
            minHeight: 80,
            maxHeight: 150,
            background: '#1a1a2e',
            border: '1px solid #444',
            borderRadius: 8,
            padding: '14px',
            color: 'white',
            fontSize: 20,
            resize: 'vertical',
            fontFamily: 'inherit',
          }}
        />

        <button
          onClick={() => sendPrompt()}
          disabled={!input.trim() || isWorking}
          style={{
            marginTop: 12,
            width: '100%',
            background: isWorking ? '#666' : '#4f46e5',
            border: 'none',
            borderRadius: 10,
            padding: '16px',
            color: 'white',
            cursor: isWorking ? 'not-allowed' : 'pointer',
            opacity: (!input.trim() || isWorking) ? 0.6 : 1,
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >
          {isWorking ? '⏳ Moment...' : '📤 Senden'}
        </button>
      </div>

      {/* Config Modal */}
      <ConfigModal
        isOpen={showConfig}
        onClose={() => setShowConfig(false)}
        currentConfig={aiConfig}
        onSave={(config) => {
          setAiConfig(config);
          saveAIConfig(config);
        }}
      />
    </div>
  );
});
