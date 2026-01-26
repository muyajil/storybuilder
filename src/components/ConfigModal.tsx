import { useState, useEffect } from 'react';

export interface AIConfig {
  provider: 'bedrock-sso' | 'anthropic' | 'openai' | 'google' | 'custom';
  apiKey?: string;
  modelId?: string;
  baseUrl?: string; // For custom OpenAI-compatible endpoints
}

const DEFAULT_MODELS: Record<string, string> = {
  'bedrock-sso': 'anthropic.claude-3-5-sonnet-20240620-v1:0',
  'anthropic': 'claude-sonnet-4-5-20250929',
  'openai': 'gpt-5.2',
  'google': 'gemini-2.5-flash',
  'custom': 'gpt-4o',
};

const PROVIDER_INFO: Record<string, { label: string; icon: string; models: string[] }> = {
  'bedrock-sso': {
    label: 'AWS Bedrock',
    icon: '☁️',
    models: [
      'anthropic.claude-3-5-sonnet-20240620-v1:0',  // Best available on-demand
      'anthropic.claude-3-haiku-20240307-v1:0',     // Fastest, cheapest
      'anthropic.claude-3-sonnet-20240229-v1:0',    // Older but stable
    ],
  },
  'anthropic': {
    label: 'Anthropic',
    icon: '🤖',
    models: [
      'claude-sonnet-4-5-20250929',
      'claude-opus-4-5-20251101',
      'claude-haiku-4-5-20251001',
      'claude-sonnet-4-20250514',
      'claude-opus-4-1-20250805',
    ],
  },
  'openai': {
    label: 'OpenAI',
    icon: '🧠',
    models: ['gpt-5.2', 'gpt-5.1', 'gpt-4o', 'gpt-4o-mini', 'o3', 'o3-mini', 'o1'],
  },
  'google': {
    label: 'Google AI',
    icon: '🔮',
    models: [
      'gemini-2.5-flash',
      'gemini-2.5-pro',
      'gemini-2.5-flash-lite',
      'gemini-3-flash-preview',
      'gemini-3-pro-preview',
    ],
  },
  'custom': {
    label: 'Custom',
    icon: '🔧',
    models: [],
  },
};

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (config: AIConfig) => void;
  currentConfig: AIConfig;
}

export function ConfigModal({ isOpen, onClose, onSave, currentConfig }: ConfigModalProps) {
  const [provider, setProvider] = useState<AIConfig['provider']>(currentConfig.provider);
  const [apiKey, setApiKey] = useState(currentConfig.apiKey || '');
  const [modelId, setModelId] = useState(currentConfig.modelId || DEFAULT_MODELS[currentConfig.provider]);
  const [baseUrl, setBaseUrl] = useState(currentConfig.baseUrl || '');
  const [showApiKey, setShowApiKey] = useState(false);
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [testError, setTestError] = useState('');

  // Update model when provider changes
  useEffect(() => {
    setModelId(DEFAULT_MODELS[provider] || '');
  }, [provider]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setProvider(currentConfig.provider);
      setApiKey(currentConfig.apiKey || '');
      setModelId(currentConfig.modelId || DEFAULT_MODELS[currentConfig.provider]);
      setBaseUrl(currentConfig.baseUrl || '');
      setTestStatus('idle');
      setTestError('');
    }
  }, [isOpen, currentConfig]);

  const handleSave = () => {
    const config: AIConfig = {
      provider,
      ...(provider !== 'bedrock-sso' && { apiKey }),
      modelId: modelId || DEFAULT_MODELS[provider],
      ...(provider === 'custom' && baseUrl && { baseUrl }),
    };
    onSave(config);
    onClose();
  };

  const handleTest = async () => {
    setTestStatus('testing');
    setTestError('');

    try {
      const response = await fetch('/api/test-config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          provider,
          apiKey: provider !== 'bedrock-sso' ? apiKey : undefined,
          modelId: modelId || DEFAULT_MODELS[provider],
          baseUrl: provider === 'custom' ? baseUrl : undefined,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setTestStatus('success');
      } else {
        setTestStatus('error');
        setTestError(result.error || 'Verbindung fehlgeschlagen');
      }
    } catch (e) {
      setTestStatus('error');
      setTestError(String(e));
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#1a1a2e',
          borderRadius: 16,
          padding: 24,
          width: 450,
          maxWidth: '90vw',
          border: '2px solid #4f46e5',
          boxShadow: '0 8px 32px rgba(79, 70, 229, 0.3)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ color: '#fff', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span>AI Einstellungen</span>
        </h2>

        {/* Provider Selection */}
        <div style={{ marginBottom: 20 }}>
          <label style={{ color: '#888', fontSize: 14, display: 'block', marginBottom: 8 }}>
            Provider
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {Object.entries(PROVIDER_INFO).map(([id, info]) => (
              <button
                key={id}
                onClick={() => setProvider(id as AIConfig['provider'])}
                style={{
                  flex: id === 'custom' ? '1 1 100%' : '1 1 calc(33% - 8px)',
                  padding: '10px 8px',
                  backgroundColor: provider === id ? '#4f46e5' : '#2d2d44',
                  border: provider === id ? '2px solid #7c3aed' : '2px solid transparent',
                  borderRadius: 8,
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: 12,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4,
                  transition: 'all 0.2s',
                }}
              >
                <span style={{ fontSize: 18 }}>{info.icon}</span>
                <span>{info.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* SSO Info */}
        {provider === 'bedrock-sso' && (
          <div style={{
            backgroundColor: '#2d2d44',
            padding: 16,
            borderRadius: 8,
            marginBottom: 20,
            borderLeft: '3px solid #4f46e5',
          }}>
            <p style={{ color: '#fff', margin: 0, fontSize: 14 }}>
              <strong>AWS SSO Login</strong><br />
              Nutzt AWS Bedrock mit SSO-Authentifizierung.<br />
              <span style={{ color: '#888' }}>
                Bei Problemen: <code style={{ backgroundColor: '#1a1a2e', padding: '2px 6px', borderRadius: 4 }}>aws sso login --profile personal</code>
              </span>
            </p>
          </div>
        )}

        {/* API Key Input (for non-SSO) */}
        {provider !== 'bedrock-sso' && (
          <div style={{ marginBottom: 20 }}>
            <label style={{ color: '#888', fontSize: 14, display: 'block', marginBottom: 8 }}>
              API Key
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showApiKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder={provider === 'anthropic' ? 'sk-ant-...' : 'sk-...'}
                style={{
                  width: '100%',
                  padding: '12px 40px 12px 12px',
                  backgroundColor: '#2d2d44',
                  border: '1px solid #444',
                  borderRadius: 8,
                  color: '#fff',
                  fontSize: 14,
                  boxSizing: 'border-box',
                }}
              />
              <button
                onClick={() => setShowApiKey(!showApiKey)}
                style={{
                  position: 'absolute',
                  right: 8,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#888',
                  cursor: 'pointer',
                  fontSize: 16,
                }}
              >
                {showApiKey ? '🙈' : '👁️'}
              </button>
            </div>
          </div>
        )}

        {/* Custom Base URL */}
        {provider === 'custom' && (
          <div style={{ marginBottom: 20 }}>
            <label style={{ color: '#888', fontSize: 14, display: 'block', marginBottom: 8 }}>
              Base URL (OpenAI-kompatibel)
            </label>
            <input
              type="text"
              value={baseUrl}
              onChange={(e) => setBaseUrl(e.target.value)}
              placeholder="https://api.example.com/v1"
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#2d2d44',
                border: '1px solid #444',
                borderRadius: 8,
                color: '#fff',
                fontSize: 14,
                boxSizing: 'border-box',
              }}
            />
            <div style={{ color: '#666', fontSize: 12, marginTop: 6 }}>
              Für OpenAI-kompatible APIs (z.B. Ollama, LM Studio, Together AI)
            </div>
          </div>
        )}

        {/* Model ID */}
        <div style={{ marginBottom: 20 }}>
          <label style={{ color: '#888', fontSize: 14, display: 'block', marginBottom: 8 }}>
            Model
          </label>
          {PROVIDER_INFO[provider]?.models.length > 0 ? (
            <select
              value={modelId}
              onChange={(e) => setModelId(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#2d2d44',
                border: '1px solid #444',
                borderRadius: 8,
                color: '#fff',
                fontSize: 14,
                boxSizing: 'border-box',
                cursor: 'pointer',
              }}
            >
              {PROVIDER_INFO[provider].models.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              value={modelId}
              onChange={(e) => setModelId(e.target.value)}
              placeholder="Model-Name eingeben"
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#2d2d44',
                border: '1px solid #444',
                borderRadius: 8,
                color: '#fff',
                fontSize: 14,
                boxSizing: 'border-box',
              }}
            />
          )}
          {provider === 'custom' && (
            <div style={{ color: '#666', fontSize: 12, marginTop: 6 }}>
              z.B. llama-3.1-70b, mixtral-8x7b, etc.
            </div>
          )}
        </div>

        {/* Test Status */}
        {testStatus !== 'idle' && (
          <div style={{
            padding: 12,
            borderRadius: 8,
            marginBottom: 20,
            backgroundColor: testStatus === 'success' ? '#1a4d2e' : testStatus === 'error' ? '#4d1a1a' : '#2d2d44',
            borderLeft: `3px solid ${testStatus === 'success' ? '#4CAF50' : testStatus === 'error' ? '#ef4444' : '#f59e0b'}`,
          }}>
            {testStatus === 'testing' && (
              <span style={{ color: '#f59e0b' }}>Teste Verbindung...</span>
            )}
            {testStatus === 'success' && (
              <span style={{ color: '#4CAF50' }}>Verbindung erfolgreich!</span>
            )}
            {testStatus === 'error' && (
              <span style={{ color: '#ef4444' }}>Fehler: {testError}</span>
            )}
          </div>
        )}

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 12 }}>
          <button
            onClick={handleTest}
            disabled={testStatus === 'testing' || (provider !== 'bedrock-sso' && !apiKey)}
            style={{
              flex: 1,
              padding: '12px 16px',
              backgroundColor: '#2d2d44',
              border: '1px solid #444',
              borderRadius: 8,
              color: '#fff',
              cursor: 'pointer',
              fontSize: 14,
              opacity: (testStatus === 'testing' || (provider !== 'bedrock-sso' && !apiKey)) ? 0.5 : 1,
            }}
          >
            {testStatus === 'testing' ? '⏳ Teste...' : '🔌 Testen'}
          </button>
          <button
            onClick={onClose}
            style={{
              padding: '12px 16px',
              backgroundColor: '#444',
              border: 'none',
              borderRadius: 8,
              color: '#fff',
              cursor: 'pointer',
              fontSize: 14,
            }}
          >
            Abbrechen
          </button>
          <button
            onClick={handleSave}
            disabled={provider !== 'bedrock-sso' && !apiKey}
            style={{
              flex: 1,
              padding: '12px 16px',
              backgroundColor: '#4f46e5',
              border: 'none',
              borderRadius: 8,
              color: '#fff',
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 'bold',
              opacity: (provider !== 'bedrock-sso' && !apiKey) ? 0.5 : 1,
            }}
          >
            Speichern
          </button>
        </div>
      </div>
    </div>
  );
}

// Load config from localStorage
export function loadAIConfig(): AIConfig {
  try {
    const stored = localStorage.getItem('ai-config');
    if (stored) {
      const config = JSON.parse(stored) as AIConfig;
      // Validate that the saved model is still available
      const availableModels = PROVIDER_INFO[config.provider]?.models || [];
      if (config.modelId && availableModels.length > 0 && !availableModels.includes(config.modelId)) {
        // Model no longer available, reset to default
        config.modelId = DEFAULT_MODELS[config.provider];
        saveAIConfig(config);
      }
      return config;
    }
  } catch {
    // Ignore
  }
  return { provider: 'bedrock-sso', modelId: DEFAULT_MODELS['bedrock-sso'] };
}

// Save config to localStorage
export function saveAIConfig(config: AIConfig) {
  localStorage.setItem('ai-config', JSON.stringify(config));
}
