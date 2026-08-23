# Seminara SDK & CLI Suite

Official open-source client SDKs and developer tooling for **Seminara** ([seminara.online](https://seminara.online)).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![API Version](https://img.shields.io/badge/API-v1-blue.svg)](https://seminara.online/docs/api-overview)
[![MCP Compatible](https://img.shields.io/badge/MCP-2026--07--28-emerald.svg)](https://seminara.online/docs/mcp)

---

## 📦 Available Packages

| Package | Language / Tool | Directory | Installation |
| :--- | :--- | :--- | :--- |
| **`@seminara/sdk`** | TypeScript / JavaScript | [`sdk/`](./sdk) | `npm install @seminara/sdk` |
| **`seminara-cli`** | Command Line Tool | [`cli/`](./cli) | `npm install -g seminara-cli` |
| **`seminara`** | Python 3.9+ | [`python/`](./python) | `pip install seminara` |
| **`seminara-go`** | Go 1.21+ | [`go/`](./go) | `go get github.com/shivamselam/seminara-sdk/go` |

---

## 🚀 TypeScript / JavaScript Quickstart

```bash
npm install @seminara/sdk
```

```typescript
import { SeminaraClient } from '@seminara/sdk'

const client = new SeminaraClient({
  apiKey: process.env.SEMINARA_API_KEY, // sk_live_...
})

// Create an interactive presentation session
const session = await client.sessions.create({
  title: 'Q3 Enterprise Product Walkthrough',
  isLive: true,
  ctaText: 'Schedule Technical Demo',
  ctaUrl: 'https://cal.com/enterprise-sales',
})

console.log(`Live Session URL: ${session.liveUrl}`)
```

---

## 💻 CLI Usage

```bash
npm install -g seminara-cli

# Authenticate
seminara auth login

# Create a presentation
seminara sessions create --title "Product Demo" --live

# List active sessions
seminara sessions list
```

---

## 🐍 Python Quickstart

```python
from seminara import SeminaraClient

client = SeminaraClient(api_key="sk_live_...")

session = client.sessions.create(
    title="Investor Pitch Rehearsal",
    is_live=True
)

print(f"Session created: {session.id}")
```

---

## 📖 Developer Documentation

- **Documentation Center**: [https://seminara.online/docs](https://seminara.online/docs)
- **API Reference**: [https://seminara.online/docs/api-overview](https://seminara.online/docs/api-overview)
- **Model Context Protocol (MCP)**: [https://seminara.online/docs/mcp](https://seminara.online/docs/mcp)
- **Agent Rules (AGENTS.md)**: [https://seminara.online/llms.txt](https://seminara.online/llms.txt)

---

## 📄 License

This open-source SDK and CLI suite is released under the [MIT License](./LICENSE).  
Copyright (c) 2026 Shivam Selam / Omni AI Club Private Limited.
