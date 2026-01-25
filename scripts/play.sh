#!/bin/bash
# SPIELE STARTEN / START GAMES
# ============================
# Dieses Script startet den Entwicklungsserver und öffnet den Browser.
# This script starts the dev server and opens the browser.

# Konfiguration / Configuration
PORT=5173
URL="http://localhost:$PORT"
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

# Farben für die Ausgabe / Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}=====================================${NC}"
echo -e "${BLUE}   SPIELE-SPIELPLATZ WIRD GESTARTET  ${NC}"
echo -e "${BLUE}=====================================${NC}"
echo ""

# Prüfen ob der Server bereits läuft / Check if server is already running
if lsof -i :$PORT > /dev/null 2>&1; then
    echo -e "${YELLOW}Server läuft bereits auf Port $PORT${NC}"
    echo -e "${GREEN}Öffne Browser...${NC}"

    # Browser öffnen oder fokussieren (macOS) / Open or focus browser (macOS)
    osascript <<EOF
        tell application "System Events"
            set browserRunning to false
            set browserList to {"Google Chrome", "Safari", "Firefox", "Microsoft Edge", "Arc"}

            repeat with browserName in browserList
                if application browserName is running then
                    tell application browserName
                        activate
                        -- Suche nach Tab mit der URL / Search for tab with URL
                        repeat with w in windows
                            repeat with t in tabs of w
                                if URL of t contains "localhost:$PORT" then
                                    set current tab of w to t
                                    set index of w to 1
                                    return
                                end if
                            end repeat
                        end repeat
                        -- Kein Tab gefunden, öffne neue URL / No tab found, open new URL
                        open location "$URL"
                    end tell
                    return
                end if
            end repeat
        end tell

        -- Kein Browser offen, öffne Standard-Browser / No browser open, open default browser
        do shell script "open '$URL'"
EOF
else
    echo -e "${GREEN}Starte Entwicklungsserver...${NC}"
    echo -e "${GREEN}Öffne Browser automatisch...${NC}"
    echo ""

    cd "$PROJECT_DIR"

    # Server starten und Browser öffnen / Start server and open browser
    npm run dev -- --open
fi
