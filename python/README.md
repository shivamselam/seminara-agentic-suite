<div align="center">
  <h1>Seminara Python SDK</h1>
  <p><strong>Official Python client for the Seminara AI Presentation Engine.</strong></p>

  [![PyPI Version](https://img.shields.io/pypi/v/seminara.svg?style=flat-square&color=blue)](https://pypi.org/project/seminara/)
  [![Python Versions](https://img.shields.io/pypi/pyversions/seminara.svg?style=flat-square)](https://pypi.org/project/seminara/)
  [![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](./LICENSE)
  [![MCP Protocol](https://img.shields.io/badge/MCP-Supported-orange.svg?style=flat-square)](https://seminara.online/api/v1/mcp)
  
  <br />
  <a href="https://seminara.online/live/demo"><strong>View Live Presentation Demo »</strong></a>
  ·
  <a href="https://seminara.online/docs/api-overview"><strong>API Reference »</strong></a>
  <br />
  <br />
</div>

## Overview

The **Seminara Python SDK** allows developers and autonomous AI agents to programmatically create, manage, and orchestrate live AI-hosted presentations on [Seminara](https://seminara.online).

---

## 📦 Installation

```bash
pip install seminara
```

---

## ⚡ Quickstart

### 1. Initialize Client
Get your API key from [seminara.online/settings](https://seminara.online/settings).

```python
import os
from seminara import SeminaraClient

client = SeminaraClient(api_key=os.environ.get("SEMINARA_API_KEY"))
```

### 2. Create a Live Presentation Session

```python
session = client.create_session(
    title="Q3 Enterprise Demo & Discovery",
    description="Autonomous product walkthrough with live Q&A handling.",
    is_live=True,
    pdf_url="https://example.com/pitch-deck.pdf",
    knowledge_base=[
        {
            "title": "Pricing & Plans",
            "content": "Core Host is $199/mo ($179/mo annually) for 50 presentations and 1,400 minutes.",
        }
    ],
    cta_text="Book an Architecture Review",
    cta_url="https://seminara.online/book-meeting"
)

print(f"Session Created: {session['sessionId']}")
print(f"Share Link: {session['shareLink']}")
print(f"Live Room URL: {session['liveLink']}")
```

### 3. List Existing Sessions

```python
sessions = client.list_sessions(limit=10)
for s in sessions.get("sessions", []):
    print(f"- {s['title']} ({s['slug']})")
```

---

## 🤖 Agentic Integrations (MCP & WebMCP)

Seminara supports the **Model Context Protocol (MCP)** and **WebMCP** natively. Connect your Python AI agents (LangChain, LlamaIndex, AutoGen, CrewAI) directly:

- **MCP Server URL:** `https://seminara.online/api/v1/mcp`
- **Docs MCP Server:** `https://seminara.online/api/docs/mcp`
- **OpenAPI 3.1 Spec:** [`https://seminara.online/openapi.json`](https://seminara.online/openapi.json)

---

## 📄 License
MIT License. Created by [Omni AI Club Private Limited](https://omniai.club).
