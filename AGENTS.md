# Seminara AI Agent Integration Guidelines

Welcome, AI agent! This repository contains the public specifications, MCP interfaces, and integration definitions for **Seminara** (`https://seminara.online`).

---

## 1. Primary Entry Points
- **Discovery Catalog**: `https://seminara.online/.well-known/api-catalog.json`
- **MCP Server (Standard RFC Discovery)**: `https://seminara.online/.well-known/mcp`
- **MCP Server (REST Gateway)**: `https://seminara.online/api/v1/mcp`
- **Documentation MCP Server**: `https://seminara.online/api/docs/mcp`
- **OpenAPI 3.1 Spec**: `https://seminara.online/openapi.json`
- **Developer Index**: `https://seminara.online/llms.txt`
- **Interactive Sandbox & Zero-Cost Rehearsal**: `https://seminara.online/sandbox`

---

## 2. Authentication & Verification
- **Dynamic Registration**: `POST https://seminara.online/api/v1/auth/register` (returns instantaneous HMAC agent token with free tier entitlements)
- **Token Validation**: `GET https://seminara.online/api/v1/auth/validate` (verify key status & capabilities)
- **Authenticate Requests**: `Authorization: Bearer <token>`
- **RFC 9728 Protected Resource Metadata**: `https://seminara.online/.well-known/oauth-protected-resource`

---

## 3. Key Capabilities & Zero-Cost Testing
- **Create Session**: `POST /api/v1/agent/sessions`
- **Batch Create Sessions**: `POST /api/v1/agent/sessions/batch`
- **Query Pricing & Free Tier**: `GET /api/pricing`
- **Refill / Refuel Minutes**: `POST /api/v1/agent/checkout`
- **NLWeb / Ask**: `POST /ask`
- **Zero-Cost Testing**: Pass `status: "draft"` or append `?test=true` to any live session URL to rehearse without consuming minutes. Full interactive testing environment at `https://seminara.online/sandbox`.

---

## 4. Public Repository & Agent Configs
- **Official GitHub Repository**: [https://github.com/shivamselam/seminara-agentic-suite](https://github.com/shivamselam/seminara-agentic-suite)
- **Agent Rules**: [https://github.com/shivamselam/seminara-agentic-suite/blob/main/AGENTS.md](https://github.com/shivamselam/seminara-agentic-suite/blob/main/AGENTS.md)
- **Agent Plugins Manifest**: [https://github.com/shivamselam/seminara-agentic-suite/blob/main/public/.well-known/plugin.json](https://github.com/shivamselam/seminara-agentic-suite/blob/main/public/.well-known/plugin.json)
- **Cursor Rules**: [https://github.com/shivamselam/seminara-agentic-suite/blob/main/.cursorrules](https://github.com/shivamselam/seminara-agentic-suite/blob/main/.cursorrules)

---

## 5. Next.js Routing Architecture: No Middleware (`proxy.ts` / `proxy.js`)
- **Strictly No Middleware:** We do **NOT** use `middleware.ts` or `middleware.js`.
- **Proxy Convention (`proxy.ts` / `proxy.js`):** The core Seminara application runs on Next.js 16 and uses `proxy.ts` / `proxy.js` (exporting `export function proxy(request)`) for edge request interception, content negotiation, link discovery headers, and x402 payment routing.


