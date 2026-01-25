import { useState, useRef, useEffect, useCallback } from 'react';

interface Message {
  id: number;
  text: string;
  author: 'user' | 'claude';
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
}

interface ClaudeStatus {
  status: 'idle' | 'working';
  currentTask?: string;
  lastUpdate: number;
}

interface ClaudeResponse {
  id: number;
  text: string;
  timestamp: string;
}

interface GameContext {
  /** Current screen: 'menu' or 'game' */
  screen: 'menu' | 'game';
  /** Current game ID if in a game */
  gameId?: string;
  /** Current game name if in a game */
  gameName?: string;
}

interface PromptBoxProps {
  /** Name des Kindes / Child's name */
  authorName?: string;
  /** Current game context */
  context?: GameContext;
}

/**
 * PROMPT-BOX / PROMPT BOX
 * =======================
 * Hier können Kinder ihre Wünsche eingeben.
 * Claude liest diese und ändert den Code.
 *
 * Kids can enter their requests here.
 * Claude reads these and modifies the code.
 */
export function PromptBox({ authorName = 'Kind', context }: PromptBoxProps) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [name, setName] = useState(authorName);
  const [isEditingName, setIsEditingName] = useState(false);
  const [claudeStatus, setClaudeStatus] = useState<ClaudeStatus>({ status: 'idle', lastUpdate: 0 });
  const [lastResponseId, setLastResponseId] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Poll for Claude's status and responses
  const pollClaudeStatus = useCallback(async () => {
    try {
      // Get status
      const statusRes = await fetch('/api/status');
      if (statusRes.ok) {
        const status = await statusRes.json();
        setClaudeStatus(status);
      }

      // Get responses
      const responsesRes = await fetch('/api/responses');
      if (responsesRes.ok) {
        const data = await responsesRes.json();
        const responses: ClaudeResponse[] = data.responses || [];

        // Add new responses as messages
        const newResponses = responses.filter(r => r.id > lastResponseId);
        if (newResponses.length > 0) {
          setLastResponseId(Math.max(...responses.map(r => r.id)));
          setMessages(prev => [
            ...prev,
            ...newResponses.map(r => ({
              id: r.id,
              text: r.text,
              author: 'claude' as const,
              timestamp: new Date(r.timestamp),
            }))
          ]);
        }
      }
    } catch {
      // Silently ignore polling errors
    }
  }, [lastResponseId]);

  // Start polling when expanded
  useEffect(() => {
    if (!isExpanded) return;

    pollClaudeStatus(); // Initial poll
    const interval = setInterval(pollClaudeStatus, 2000); // Poll every 2 seconds

    return () => clearInterval(interval);
  }, [isExpanded, pollClaudeStatus]);

  const sendPrompt = async () => {
    if (!input.trim() || claudeStatus.status === 'working') return;

    const newMessage: Message = {
      id: Date.now(),
      text: input.trim(),
      author: 'user',
      timestamp: new Date(),
      status: 'sending',
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');

    try {
      const response = await fetch('/api/prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: newMessage.text,
          author: name,
          context: context || { screen: 'menu' },
        }),
      });

      if (response.ok) {
        setMessages(prev =>
          prev.map(m => m.id === newMessage.id ? { ...m, status: 'sent' } : m)
        );
      } else {
        throw new Error('Failed to send');
      }
    } catch {
      setMessages(prev =>
        prev.map(m => m.id === newMessage.id ? { ...m, status: 'error' } : m)
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendPrompt();
    }
  };

  const isWorking = claudeStatus.status === 'working';

  if (!isExpanded) {
    return (
      <button
        onClick={() => setIsExpanded(true)}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          borderRadius: '50%',
          backgroundColor: isWorking ? '#f59e0b' : '#4f46e5',
          border: 'none',
          cursor: 'pointer',
          fontSize: 28,
          boxShadow: `0 4px 20px ${isWorking ? 'rgba(245, 158, 11, 0.4)' : 'rgba(79, 70, 229, 0.4)'}`,
          transition: 'transform 0.2s, background-color 0.3s',
          zIndex: 1000,
          animation: isWorking ? 'pulse 1.5s infinite' : 'none',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        title={isWorking ? 'Claude arbeitet...' : 'Claude fragen'}
      >
        {isWorking ? '⚙️' : '💬'}
      </button>
    );
  }

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          width: 380,
          maxHeight: '70vh',
          backgroundColor: '#1a1a2e',
          borderRadius: 16,
          boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          zIndex: 1000,
          border: `2px solid ${isWorking ? '#f59e0b' : '#2d2d44'}`,
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '12px 16px',
            backgroundColor: isWorking ? '#f59e0b' : '#4f46e5',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'background-color 0.3s',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontSize: 20,
              animation: isWorking ? 'spin 2s linear infinite' : 'none',
            }}>
              {isWorking ? '⚙️' : '🤖'}
            </span>
            <span style={{ fontWeight: 'bold', color: isWorking ? '#000' : 'white' }}>
              {isWorking ? 'Claude arbeitet...' : 'Claude fragen'}
            </span>
          </div>
          <button
            onClick={() => setIsExpanded(false)}
            style={{
              background: 'none',
              border: 'none',
              color: isWorking ? '#000' : 'white',
              fontSize: 20,
              cursor: 'pointer',
              padding: 4,
            }}
          >
            ✕
          </button>
        </div>

        {/* Working indicator */}
        {isWorking && claudeStatus.currentTask && (
          <div style={{
            padding: '8px 16px',
            backgroundColor: '#fef3c7',
            color: '#92400e',
            fontSize: 13,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}>
            <span style={{ animation: 'spin 1s linear infinite' }}>⏳</span>
            {claudeStatus.currentTask}
          </div>
        )}

        {/* Name editor */}
        <div style={{ padding: '8px 16px', backgroundColor: '#252538', borderBottom: '1px solid #2d2d44' }}>
          {isEditingName ? (
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              onBlur={() => setIsEditingName(false)}
              onKeyDown={e => e.key === 'Enter' && setIsEditingName(false)}
              autoFocus
              style={{
                background: '#1a1a2e',
                border: '1px solid #4f46e5',
                borderRadius: 4,
                padding: '4px 8px',
                color: 'white',
                fontSize: 14,
                width: '100%',
              }}
            />
          ) : (
            <div
              onClick={() => setIsEditingName(true)}
              style={{ color: '#888', fontSize: 13, cursor: 'pointer' }}
            >
              Dein Name: <span style={{ color: '#a5a5ff' }}>{name}</span> (klicken zum ändern)
            </div>
          )}
        </div>

        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            minHeight: 150,
            maxHeight: 350,
          }}
        >
          {messages.length === 0 && (
            <div style={{ color: '#666', textAlign: 'center', padding: 20 }}>
              <p style={{ margin: 0 }}>Schreib was du dir wünschst!</p>
              <p style={{ margin: '8px 0 0', fontSize: 13 }}>
                z.B. "Ich möchte ein neues Spiel" oder "Der Spieler soll schneller sein"
              </p>
            </div>
          )}

          {messages.map(msg => (
            <div
              key={msg.id}
              style={{
                backgroundColor: msg.author === 'claude' ? '#1e3a5f' : '#2d2d44',
                padding: '10px 14px',
                borderRadius: 12,
                alignSelf: msg.author === 'claude' ? 'flex-start' : 'flex-end',
                maxWidth: '85%',
                borderLeft: msg.author === 'claude' ? '3px solid #4f46e5' : 'none',
              }}
            >
              {msg.author === 'claude' && (
                <div style={{ fontSize: 11, color: '#888', marginBottom: 4 }}>
                  🤖 Claude
                </div>
              )}
              <div style={{ color: 'white', wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}>
                {msg.text}
              </div>
              <div style={{ fontSize: 11, color: '#888', marginTop: 4, display: 'flex', justifyContent: 'space-between' }}>
                <span>{msg.timestamp.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}</span>
                {msg.author === 'user' && (
                  <span>
                    {msg.status === 'sending' && '⏳'}
                    {msg.status === 'sent' && '✓ Gesendet'}
                    {msg.status === 'error' && '❌ Fehler'}
                  </span>
                )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div style={{ padding: 12, borderTop: '1px solid #2d2d44' }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isWorking ? 'Bitte warten...' : 'Was möchtest du machen?'}
              disabled={isWorking}
              style={{
                flex: 1,
                backgroundColor: isWorking ? '#1a1a2e' : '#252538',
                border: `1px solid ${isWorking ? '#f59e0b' : '#3d3d54'}`,
                borderRadius: 8,
                padding: '10px 12px',
                color: isWorking ? '#666' : 'white',
                fontSize: 14,
                resize: 'none',
                minHeight: 44,
                maxHeight: 100,
                fontFamily: 'inherit',
                cursor: isWorking ? 'not-allowed' : 'text',
              }}
              rows={1}
            />
            <button
              onClick={sendPrompt}
              disabled={!input.trim() || isWorking}
              style={{
                backgroundColor: (!input.trim() || isWorking) ? '#3d3d54' : '#4f46e5',
                border: 'none',
                borderRadius: 8,
                padding: '0 16px',
                cursor: (!input.trim() || isWorking) ? 'not-allowed' : 'pointer',
                fontSize: 18,
              }}
            >
              📤
            </button>
          </div>
          <div style={{ fontSize: 11, color: '#555', marginTop: 6, textAlign: 'center' }}>
            {isWorking
              ? '⏳ Claude arbeitet gerade... bitte warten'
              : 'Enter zum Senden • Claude liest deine Nachricht'
            }
          </div>
        </div>
      </div>
    </>
  );
}
