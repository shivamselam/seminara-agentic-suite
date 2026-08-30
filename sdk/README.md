<div align="center">
  <h1>Seminara Agentic SDK</h1>
  <p><strong>Official TypeScript & JavaScript SDK for the Seminara AI Presentation Engine.</strong></p>
  
  [![NPM Version](https://img.shields.io/npm/v/seminara-sdk.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/seminara-sdk)
  [![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](./LICENSE)
  [![MCP Protocol](https://img.shields.io/badge/MCP-Supported-orange.svg?style=flat-square)](https://seminara.online/api/v1/mcp)
  [![Documentation](https://img.shields.io/badge/docs-seminara.online-purple.svg?style=flat-square)](https://seminara.online/docs)
  
  <br />
  <a href="https://seminara.online/live/demo"><strong>View Live Presentation Demo »</strong></a>
  ·
  <a href="https://seminara.online/docs/api-overview"><strong>API Reference »</strong></a>
  <br />
  <br />
</div>

## Overview

The **Seminara SDK** lets developers and autonomous AI agents programmatically create, manage, and orchestrate live AI-hosted presentation rooms on [Seminara](https://seminara.online). 

Instead of static videos or scheduling human hosts, Seminara's voice engine (**Aura**) delivers interactive, WebRTC-based presentations that synchronize slides and field unscripted audience questions 24/7.

---

## 📦 Installation

```bash
npm install seminara-sdk
# or
pnpm add seminara-sdk
# or
yarn add seminara-sdk
```

---

## ⚡ Quickstart

### 1. Initialize Client
Get your API key from [seminara.online/settings](https://seminara.online/settings).

```typescript
import { Seminara } from 'seminara-sdk';

const client = new Seminara({
  apiKey: process.env.SEMINARA_API_KEY,
});
```

### 2. Create a Live Presentation Session
Turn a slide deck and knowledge base into an autonomous live room in seconds:

```typescript
const session = await client.sessions.create({
  title: "Q3 Enterprise Demo & Discovery",
  description: "Autonomous product walkthrough with live Q&A handling.",
  pdfUrl: "https://example.com/pitch-deck.pdf",
  knowledgeBase: [
    {
      title: "Pricing & Plans",
      content: "Core Host is $199/mo ($179/mo annually) for 50 presentations and 1,400 minutes.",
    },
    {
      title: "Security & Compliance",
      content: "SOC 2 Type II compliant with end-to-end encrypted WebRTC audio.",
    }
  ],
  ctaText: "Book an Architecture Review",
  ctaUrl: "https://seminara.online/book-meeting",
});

console.log(`Live Session Created: ${session.sessionId}`);
console.log(`Attendee Share Link: ${session.shareLink}`);
console.log(`Live Room URL: ${session.liveLink}`);
```

### 3. Batch Provisioning
Generate dozens of personalized prospect rooms concurrently:

```typescript
const batchJob = await client.sessions.batchCreate([
  {
    title: "Demo for Acme Corp",
    pdfUrl: "https://example.com/acme-deck.pdf",
  },
  {
    title: "Demo for Stark Industries",
    pdfUrl: "https://example.com/stark-deck.pdf",
  }
]);

console.log(`Batch job queued: ${batchJob.job_id}`);
```

---

## 🤖 Agentic Integrations (MCP & WebMCP)

Seminara supports the **Model Context Protocol (MCP)** and **WebMCP** natively. AI agents (like Claude Desktop, Cursor, and browser-based agents) can autonomously discover and execute Seminara actions:

- **MCP Server URL:** `https://seminara.online/api/v1/mcp`
- **Docs MCP Server:** `https://seminara.online/api/docs/mcp`
- **Catalog:** `https://seminara.online/.well-known/api-catalog.json`

---

## 🌐 Multi-Language Ecosystem

- **Python SDK:** [`packages/python`](../python) (`pip install seminara`)
- **Go SDK:** [`packages/go`](../go) (`go get github.com/shivamselam/seminara-agentic-suite/packages/go`)
- **CLI Tool:** [`packages/cli`](../cli) (`npm install -g seminara-cli`)
- **OpenAPI 3.1 Spec:** [`https://seminara.online/openapi.json`](https://seminara.online/openapi.json)

---

## 🔒 Security & Idempotency

All mutation endpoints accept an optional `Idempotency-Key` header to safely retry requests without creating duplicate rooms:

```typescript
const session = await client.sessions.create(
  { title: "Safe Retry Session" },
  "unique-req-uuid-12345"
);
```

---

## 📄 License
MIT License. Created by [Omni AI Club Private Limited](https://omniai.club).
