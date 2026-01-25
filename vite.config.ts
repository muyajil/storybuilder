import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'prompt-api',
      configureServer(server) {
        const promptsFile = path.resolve(__dirname, 'prompts.log')
        const statusFile = path.resolve(__dirname, '.claude-status.json')
        const responsesFile = path.resolve(__dirname, '.claude-responses.json')

        // Initialize files if they don't exist
        if (!fs.existsSync(statusFile)) {
          fs.writeFileSync(statusFile, JSON.stringify({ status: 'idle', lastUpdate: Date.now() }))
        }
        if (!fs.existsSync(responsesFile)) {
          fs.writeFileSync(responsesFile, JSON.stringify({ responses: [] }))
        }

        // POST /api/prompt - Write a new prompt
        server.middlewares.use('/api/prompt', (req, res) => {
          if (req.method === 'POST') {
            let body = ''
            req.on('data', chunk => { body += chunk })
            req.on('end', () => {
              try {
                const { prompt, author, context } = JSON.parse(body)
                const timestamp = new Date().toISOString()
                const contextInfo = context
                  ? `[Kontext: ${context.screen === 'game' ? `Spiel "${context.gameName}" (${context.gameId})` : 'Hauptmenü'}]`
                  : '[Kontext: Hauptmenü]'
                const entry = `\n[${timestamp}] (${author || 'Kind'}) ${contextInfo}\n${prompt}\n${'─'.repeat(50)}`

                fs.appendFileSync(promptsFile, entry)

                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ success: true }))
              } catch {
                res.writeHead(400, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ error: 'Invalid request' }))
              }
            })
          } else {
            res.writeHead(405)
            res.end()
          }
        })

        // GET /api/status - Get Claude's current status
        server.middlewares.use('/api/status', (req, res) => {
          if (req.method === 'GET') {
            try {
              const content = fs.existsSync(statusFile)
                ? fs.readFileSync(statusFile, 'utf-8')
                : JSON.stringify({ status: 'idle', lastUpdate: Date.now() })
              res.writeHead(200, { 'Content-Type': 'application/json' })
              res.end(content)
            } catch {
              res.writeHead(200, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ status: 'idle', lastUpdate: Date.now() }))
            }
          } else {
            res.writeHead(405)
            res.end()
          }
        })

        // GET /api/responses - Get Claude's responses
        server.middlewares.use('/api/responses', (req, res) => {
          if (req.method === 'GET') {
            try {
              const content = fs.existsSync(responsesFile)
                ? fs.readFileSync(responsesFile, 'utf-8')
                : JSON.stringify({ responses: [] })
              res.writeHead(200, { 'Content-Type': 'application/json' })
              res.end(content)
            } catch {
              res.writeHead(200, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ responses: [] }))
            }
          } else {
            res.writeHead(405)
            res.end()
          }
        })

        // GET /api/prompts - Read all prompts (for debugging)
        server.middlewares.use('/api/prompts', (req, res) => {
          if (req.method === 'GET') {
            try {
              const content = fs.existsSync(promptsFile)
                ? fs.readFileSync(promptsFile, 'utf-8')
                : ''
              res.writeHead(200, { 'Content-Type': 'text/plain' })
              res.end(content)
            } catch {
              res.writeHead(500)
              res.end('Error reading prompts')
            }
          } else {
            res.writeHead(405)
            res.end()
          }
        })
      }
    }
  ],
})
