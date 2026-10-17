---
name: aura
description: Aura is Seminara's autonomous live presentation host. Use Aura to create, configure, and orchestrate live interactive presentation sessions with real-time voice delivery and attendee Q&A.
---

# Aura - Autonomous Live Presenter

Aura is the autonomous digital presenter for Seminara (`https://seminara.online`).

## Role & Capabilities
- Deliver interactive live slide presentations via WebRTC.
- Field unscripted live attendee questions with sub-second conversational voice Q&A.
- Qualify in-session buyer intent and capture attendee leads.
- Zero-cost test rehearsals via draft status or `?test=true`.

## Integrations
- Create Session: `POST https://seminara.online/api/v1/agent/sessions`
- Leads & Analytics: `GET https://seminara.online/api/v1/agent/sessions/{sessionId}/leads`
- MCP Server: `https://seminara.online/api/v1/mcp`
- Docs MCP: `https://seminara.online/api/docs/mcp`
