#!/bin/bash
# CLAUDE HELPER FUNCTIONS
# =======================
# Functions for Claude to communicate with the frontend
#
# Usage in Claude session:
#   source scripts/claude-helpers.sh
#   claude_working "Erstelle neues Spiel..."
#   claude_respond "Fertig! Das Spiel ist jetzt verfügbar."
#   claude_idle

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
STATUS_FILE="$PROJECT_DIR/.claude-status.json"
RESPONSES_FILE="$PROJECT_DIR/.claude-responses.json"

# Set Claude status to "working" with optional task description
claude_working() {
    local task="${1:-Arbeite...}"
    echo "{\"status\": \"working\", \"currentTask\": \"$task\", \"lastUpdate\": $(date +%s)000}" > "$STATUS_FILE"
    echo "🔧 Status: working - $task"
}

# Set Claude status to "idle"
claude_idle() {
    echo "{\"status\": \"idle\", \"lastUpdate\": $(date +%s)000}" > "$STATUS_FILE"
    echo "✅ Status: idle"
}

# Send a response message to the frontend
claude_respond() {
    local message="$1"
    local timestamp=$(date -u +"%Y-%m-%dT%H:%M:%S.000Z")
    local id=$(date +%s%3N)

    # Read existing responses or create empty array
    if [ -f "$RESPONSES_FILE" ]; then
        local existing=$(cat "$RESPONSES_FILE")
    else
        local existing='{"responses":[]}'
    fi

    # Add new response using node (more reliable JSON handling)
    node -e "
        const fs = require('fs');
        const data = JSON.parse('$existing');
        data.responses.push({
            id: $id,
            text: $(echo "$message" | node -e "const chunks=[]; process.stdin.on('data',c=>chunks.push(c)); process.stdin.on('end',()=>console.log(JSON.stringify(chunks.join(''))))"),
            timestamp: '$timestamp'
        });
        fs.writeFileSync('$RESPONSES_FILE', JSON.stringify(data, null, 2));
    " 2>/dev/null || {
        # Fallback: simple JSON append
        echo "{\"responses\":[{\"id\":$id,\"text\":\"$message\",\"timestamp\":\"$timestamp\"}]}" > "$RESPONSES_FILE"
    }

    echo "💬 Response sent: $message"
}

# Clear all responses (for starting fresh)
claude_clear_responses() {
    echo '{"responses":[]}' > "$RESPONSES_FILE"
    echo "🗑️ Responses cleared"
}

# Initialize files if needed
if [ ! -f "$STATUS_FILE" ]; then
    claude_idle
fi
if [ ! -f "$RESPONSES_FILE" ]; then
    echo '{"responses":[]}' > "$RESPONSES_FILE"
fi

echo "✨ Claude helpers loaded. Available commands:"
echo "   claude_working 'task description'"
echo "   claude_idle"
echo "   claude_respond 'message'"
echo "   claude_clear_responses"
