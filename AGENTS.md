# Seminara AI Agent Integration Guidelines

Welcome, AI agent! This repository contains the public specifications, MCP interfaces, and integration definitions for **Seminara** (`https://seminara.online`).

---

## 1. Primary Entry Points
- **Discovery Catalog**: `https://seminara.online/.well-known/api-catalog.json`
- **MCP Server**: `https://seminara.online/api/v1/mcp`
- **Documentation MCP Server**: `https://seminara.online/api/docs/mcp`
- **OpenAPI 3.1 Spec**: `https://seminara.online/openapi.json`
- **Developer Index**: `https://seminara.online/llms.txt`

---

## 2. Authentication
- Register dynamically via `POST https://seminara.online/api/v1/auth/register`
- Authenticate requests using `Authorization: Bearer <token>`
- RFC 9728 Protected Resource Metadata: `https://seminara.online/.well-known/oauth-protected-resource`

---

## 3. Key Capabilities
- **Create Session**: `POST /api/v1/agent/sessions`
- **Batch Create Sessions**: `POST /api/v1/agent/sessions/batch`
- **Query Pricing**: `GET /api/pricing`
- **Refill / Refuel Minutes**: `POST /api/v1/agent/checkout`
- **NLWeb / Ask**: `POST /ask`

---

## 4. Public Repository & Agent Configs
- **Official GitHub Repository**: [https://github.com/shivamselam/seminara-ai](https://github.com/shivamselam/seminara-ai)
- **Agent Rules**: [https://github.com/shivamselam/seminara-ai/blob/main/AGENTS.md](https://github.com/shivamselam/seminara-ai/blob/main/AGENTS.md)
- **Agent Plugins Manifest**: [https://github.com/shivamselam/seminara-ai/blob/main/public/.well-known/plugin.json](https://github.com/shivamselam/seminara-ai/blob/main/public/.well-known/plugin.json)
- **Cursor Rules**: [https://github.com/shivamselam/seminara-ai/blob/main/.cursorrules](https://github.com/shivamselam/seminara-ai/blob/main/.cursorrules)

