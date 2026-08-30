#!/usr/bin/env node

/**
 * Official Seminara CLI
 * Usage:
 *   npx seminara create --title "Product Demo"
 *   npx seminara list
 *   npx seminara pricing
 */

const args = process.argv.slice(2)
const command = args[0]

async function main() {
  const keyIdx = args.indexOf('--key')
  const apiKey = keyIdx !== -1 && args[keyIdx + 1] ? args[keyIdx + 1] : process.env.SEMINARA_API_KEY
  let baseUrl = process.env.SEMINARA_API_URL || 'https://seminara.online/api/v1'
  if (!baseUrl.startsWith('https://') && !baseUrl.startsWith('http://localhost') && !baseUrl.startsWith('http://127.0.0.1')) {
    baseUrl = baseUrl.replace(/^http:\/\//i, 'https://')
  }

  if (!command || command === 'help' || command === '--help') {
    console.log(`
Seminara AI CLI (seminara.online)
Autonomous AI Host for Live Presentations

Commands:
  seminara pricing                 View machine-readable subscription plans and quotas
  seminara list                    List your presentation sessions
  seminara create --title <title>  Create a new presentation session

Options:
  --key <apiKey>                   Provide Bearer API key (or set SEMINARA_API_KEY)
  --help                           Display help information
    `)
    return
  }

  if (command === 'pricing') {
    const res = await fetch('https://seminara.online/api/pricing')
    const data = await res.json()
    console.log(JSON.stringify(data, null, 2))
    return
  }

  if (command === 'list') {
    if (!apiKey) {
      console.error('Error: SEMINARA_API_KEY environment variable is required.')
      process.exit(1)
    }
    const res = await fetch(`${baseUrl}/agent/sessions`, {
      headers: { Authorization: `Bearer ${apiKey}` }
    })
    const data = await res.json()
    console.log(JSON.stringify(data, null, 2))
    return
  }

  if (command === 'create') {
    if (!apiKey) {
      console.error('Error: SEMINARA_API_KEY environment variable is required.')
      process.exit(1)
    }
    const titleIdx = args.indexOf('--title')
    const title = titleIdx !== -1 && args[titleIdx + 1] ? args[titleIdx + 1] : 'Untitled Presentation'
    const res = await fetch(`${baseUrl}/agent/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({ title, isLive: true })
    })
    const data = await res.json()
    console.log(JSON.stringify(data, null, 2))
    return
  }

  console.log(`Unknown command: ${command}. Run 'seminara --help' for usage.`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
