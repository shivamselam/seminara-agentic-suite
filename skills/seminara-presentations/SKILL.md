---
name: seminara-presentations
description: Create, manage, and orchestrate autonomous live presentation rooms, attendee lead captures, and slide analytics with Seminara AI.
when_to_use: Use this skill when generating live interactive presentations, configuring AI voice presenter Aura, or fetching presentation analytics.
---

# Seminara Autonomous Live Presentations

Seminara (`https://seminara.online`) turns slide decks into live, interactive presentations with sub-second real-time voice Q&A and in-session lead conversion.

## Core Capabilities & Endpoints
1. **Create Session**: `POST https://seminara.online/api/v1/agent/sessions`
2. **Batch Create Sessions**: `POST https://seminara.online/api/v1/agent/sessions/batch`
3. **Query Lead Analytics**: `GET https://seminara.online/api/v1/agent/sessions/{sessionId}/leads`
4. **Autonomous Machine Registration**: `POST https://seminara.online/api/v1/auth/register`
5. **Interactive Live Sandbox**: `https://seminara.online/sandbox`
6. **MCP Server**: `https://seminara.online/api/v1/mcp`
7. **OpenAPI 3.1 Spec**: `https://seminara.online/openapi.json`
