<div align="center">
  <h1>Seminara Agentic Suite</h1>
  <p><strong>Now your AI agents can autonomously host live presentations for you.</strong></p>
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![NPM Package](https://img.shields.io/npm/v/seminara-sdk.svg?color=blue)](https://www.npmjs.com/package/seminara-sdk)
  [![PyPI Package](https://img.shields.io/pypi/v/seminara.svg?color=blue)](https://pypi.org/project/seminara/)
  [![MCP Compatible](https://img.shields.io/badge/MCP-2026--07--28-emerald.svg)](https://seminara.online/api/v1/mcp)
  [![smithery badge](https://smithery.ai/badge/seminara/autonomous-host)](https://smithery.ai/servers/seminara/autonomous-host)
  
  <br />
  <a href="https://seminara.online/live/demo"><strong>View Live Interactive Demo »</strong></a>
  ·
  <a href="https://seminara.online/docs/api-overview"><strong>API Reference »</strong></a>
  ·
  <a href="https://seminara.online"><strong>Seminara Platform »</strong></a>
  <br />
  <br />
  <img src="./assets/workflow.png" alt="Seminara Agentic Suite Architecture" width="100%" />
  <br />
  <br />
</div>

## The Presentation Layer for AI Agents

Seminara is an autonomous, 24/7 WebRTC presentation host (Aura) that delivers interactive slide decks and fields live audience Q&A.

With the **Seminara Agentic Suite**, this core engine is now fully programmable. You or your autonomous agents can orchestrate live, voice-led presentations entirely through code using our WebMCP integration, CLI, or multi-language SDKs.

---

## 📦 Available Packages & Tools

| Package / Tool | Language | Directory | Installation |
| :--- | :--- | :--- | :--- |
| **`seminara-sdk`** | TypeScript / JavaScript | [`sdk/`](./sdk) | `npm install seminara-sdk` |
| **`seminara`** | Python 3.9+ | [`python/`](./python) | `pip install seminara` |
| **`seminara-cli`** | Command Line CLI | [`cli/`](./cli) | `npm install -g seminara-cli` |
| **`go`** | Go 1.21+ | [`go/`](./go) | `go get github.com/shivamselam/seminara-agentic-suite/go` |

---

## 🚀 Quickstarts: Time to Hello World < 5 Minutes

### 1. Node.js / TypeScript
```bash
npm install seminara-sdk
```

```typescript
import { Seminara } from 'seminara-sdk';

const client = new Seminara({ apiKey: process.env.SEMINARA_API_KEY });

// Instantly generate a live, AI-hosted presentation room
const session = await client.sessions.create({
  title: "Q3 Enterprise Demo & Discovery",
  pdfUrl: "https://example.com/pitch-deck.pdf",
  knowledgeBase: [
    { title: "Pricing", content: "Core Host plan is $199/mo for 50 presentations." }
  ],
  ctaText: "Book Architecture Review",
  ctaUrl: "https://seminara.online/book-meeting"
});

console.log(`Live Session URL: ${session.liveLink}`);
```

### 2. Python
```bash
pip install seminara
```

```python
import os
from seminara import SeminaraClient

client = SeminaraClient(api_key=os.environ.get("SEMINARA_API_KEY"))

session = client.create_session(
    title="Q3 Enterprise Demo & Discovery",
    is_live=True,
    pdf_url="https://example.com/pitch-deck.pdf",
    knowledge_base=[
        {"title": "Pricing", "content": "Core Host plan is $199/mo for 50 presentations."}
    ],
    cta_text="Book Architecture Review",
    cta_url="https://seminara.online/book-meeting"
)

print(f"Live Session Created: {session['liveLink']}")
```

### 3. Command Line (CLI)
```bash
npm install -g seminara-cli

# Set your API key
export SEMINARA_API_KEY="sk_live_..."

# Create a presentation room straight from your terminal
seminara create --title "Q3 Product Launch"

# List active rooms
seminara list
```

---

## 🤖 Model Context Protocol (MCP) & WebMCP

Seminara natively exposes its presentation engine to autonomous agents via MCP:

- **Core Product MCP Server:** `https://seminara.online/api/v1/mcp`
- **Documentation MCP Server:** `https://seminara.online/api/docs/mcp`
- **Discovery Catalog:** `https://seminara.online/.well-known/api-catalog.json`

### Quick Connect: Claude Desktop (`claude_desktop_config.json`)
```json
{
  "mcpServers": {
    "seminara": {
      "type": "sse",
      "url": "https://seminara.online/api/v1/mcp",
      "headers": {
        "Authorization": "Bearer sk_live_your_key_here"
      }
    }
  }
}
```

### Quick Connect: Cursor (`.cursor/mcp.json`)
```json
{
  "mcpServers": {
    "seminara": {
      "type": "sse",
      "url": "https://seminara.online/api/v1/mcp"
    }
  }
}
```

### 1-Click Install via Smithery
```bash
npx -y @smithery/cli install @seminara/autonomous-host --client claude
```

*If you navigate to `https://seminara.online` using a WebMCP-enabled browser, your agent will automatically discover the exposed presentation tools on page load.*

---

## 📖 Documentation & Resources
- **Developer Documentation**: [https://seminara.online/docs](https://seminara.online/docs)
- **API Reference**: [https://seminara.online/docs/api-overview](https://seminara.online/docs/api-overview)
- **OpenAPI 3.1 Spec**: [https://seminara.online/openapi.json](https://seminara.online/openapi.json)
- **Developer Index (llms.txt)**: [https://seminara.online/llms.txt](https://seminara.online/llms.txt)

---

## 📄 License
MIT License. Copyright (c) 2026 Shivam Selam / Omni AI Club Private Limited.
