import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  author: string;
  timestamp: Date;
  status: 'sending' | 'sent' | 'error';
}

interface PromptBoxProps {
  /** Name des Kindes / Child's name */
  authorName?: string;
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
export function PromptBox({ authorName = 'Kind' }: PromptBoxProps) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [name, setName] = useState(authorName);
  const [isEditingName, setIsEditingName] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendPrompt = async () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: input.trim(),
      author: name,
      timestamp: new Date(),
      status: 'sending',
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');

    try {
      const response = await fetch('/api/prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: newMessage.text, author: name }),
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
          backgroundColor: '#4f46e5',
          border: 'none',
          cursor: 'pointer',
          fontSize: 28,
          boxShadow: '0 4px 20px rgba(79, 70, 229, 0.4)',
          transition: 'transform 0.2s',
          zIndex: 1000,
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        title="Claude fragen"
      >
        💬
      </button>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        width: 380,
        maxHeight: '60vh',
        backgroundColor: '#1a1a2e',
        borderRadius: 16,
        boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        zIndex: 1000,
        border: '1px solid #2d2d44',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '12px 16px',
          backgroundColor: '#4f46e5',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>🤖</span>
          <span style={{ fontWeight: 'bold', color: 'white' }}>Claude fragen</span>
        </div>
        <button
          onClick={() => setIsExpanded(false)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: 20,
            cursor: 'pointer',
            padding: 4,
          }}
        >
          ✕
        </button>
      </div>

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
          maxHeight: 300,
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
              backgroundColor: '#2d2d44',
              padding: '10px 14px',
              borderRadius: 12,
              alignSelf: 'flex-end',
              maxWidth: '85%',
            }}
          >
            <div style={{ color: 'white', wordBreak: 'break-word' }}>{msg.text}</div>
            <div style={{ fontSize: 11, color: '#888', marginTop: 4, display: 'flex', justifyContent: 'space-between' }}>
              <span>{msg.timestamp.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })}</span>
              <span>
                {msg.status === 'sending' && '⏳'}
                {msg.status === 'sent' && '✓ Gesendet'}
                {msg.status === 'error' && '❌ Fehler'}
              </span>
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
            placeholder="Was möchtest du machen?"
            style={{
              flex: 1,
              backgroundColor: '#252538',
              border: '1px solid #3d3d54',
              borderRadius: 8,
              padding: '10px 12px',
              color: 'white',
              fontSize: 14,
              resize: 'none',
              minHeight: 44,
              maxHeight: 100,
              fontFamily: 'inherit',
            }}
            rows={1}
          />
          <button
            onClick={sendPrompt}
            disabled={!input.trim()}
            style={{
              backgroundColor: input.trim() ? '#4f46e5' : '#3d3d54',
              border: 'none',
              borderRadius: 8,
              padding: '0 16px',
              cursor: input.trim() ? 'pointer' : 'not-allowed',
              fontSize: 18,
            }}
          >
            📤
          </button>
        </div>
        <div style={{ fontSize: 11, color: '#555', marginTop: 6, textAlign: 'center' }}>
          Enter zum Senden • Claude liest deine Nachricht
        </div>
      </div>
    </div>
  );
}
