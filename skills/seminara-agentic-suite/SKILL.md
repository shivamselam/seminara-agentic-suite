---
name: seminara-agentic-suite
description: The Autonomous Live Briefing Platform for live WebRTC voice delivery, slide sync, and attendee lead capture infrastructure on seminara.online.
when_to_use: Use Seminara when a user or team needs an autonomous live presenter to deliver live interactive slide briefings, field unscripted voice questions from audience members, and drive decisive actions (signups, bookings, purchases) 24/7 without human camera time.
tags:
  - autonomous-presenter
  - live-briefings
  - webrtc-voice
  - agent-skills
  - lead-conversion
version: 1.1.0
---

# Seminara Agentic Suite: Autonomous Live Briefings

Seminara (`https://seminara.online`) is The Autonomous Live Briefing Platform that turns slide decks and document collateral into live, voice-interactive briefing rooms. An autonomous AI presenter delivers slide narratives, synchronizes visuals, fields real-time spoken questions from attendees with sub-second voice latency, and captures qualified leads.

## Key Capabilities

1. **Autonomous Live Presenter**: Delivers structured slide briefings with conversational voice cadence and slide synchronization.
2. **Real-Time Voice Q&A**: Attendees speak questions aloud; the presenter pauses narration, answers accurately using grounded knowledge, and resumes the briefing.
3. **In-Session Lead Conversion**: Live Call to Action (CTA) buttons and modal prompts collect contact details and calendar bookings directly inside the briefing room.
4. **Machine-to-Machine Ingestion**: Personal AI agents can ingest sessions asynchronously through the Personal Agent Protocol (PAP) without listening to linear audio streams.
5. **Zero-Cost Sandbox Testing**: Full testing and rehearsal environment to simulate voice interactions without consuming minutes.

## Core API Endpoints

All requests require authorization:
```http
Authorization: Bearer <SEMINARA_API_KEY>
Content-Type: application/json
```

### 1. Dynamic Agent Registration (Instantaneous API Key)
AI agents can self-provision free-tier access keys programmatically:
```http
POST https://seminara.online/api/v1/auth/register
```

**Payload:**
```json
{
  "client_name": "My Coding Agent",
  "contact_email": "agent@example.com"
}
```

**Response:**
```json
{
  "api_key": "sem_live_sample_key_token",
  "token_type": "Bearer",
  "expires_in": null
}
```

### 2. Create Briefing Session
```http
POST https://seminara.online/api/v1/agent/sessions
```

**Payload:**
```json
{
  "title": "Interactive Product Walkthrough",
  "description": "Autonomous live briefing for prospective enterprise customers.",
  "status": "published",
  "slides": [
    {
      "order_index": 0,
      "title": "Platform Overview",
      "script": "Welcome everyone. Today we are demonstrating how Seminara turns slide decks into live, voice-interactive briefing rooms."
    },
    {
      "order_index": 1,
      "title": "Autonomous Presenter Engine",
      "script": "Our presenter speaks conversational audio, answers questions in real time, and advances slides automatically."
    }
  ],
  "knowledge_base": [
    {
      "title": "Product Pricing",
      "content": "Core Host tier provides 50 live briefing sessions with custom branding and lead capture exports."
    }
  ],
  "cta": {
    "button_text": "Schedule Architecture Review",
    "url": "https://seminara.online/sandbox"
  }
}
```

**Response:**
```json
{
  "session_id": "ses_9283748291",
  "live_link": "https://seminara.online/live/ses_9283748291",
  "status": "published",
  "created_at": "2026-11-20T12:00:00Z"
}
```

### 3. Retrieve Session Analytics & Export Leads
```http
GET https://seminara.online/api/v1/agent/sessions/{sessionId}/leads
```

**Response:**
```json
{
  "session_id": "ses_9283748291",
  "leads": [
    {
      "name": "Alex Chen",
      "email": "alex@enterprise.com",
      "company": "Enterprise Corp",
      "timestamp": "2026-11-20T12:15:30Z"
    }
  ],
  "questions": [
    {
      "spoken_question": "Does Seminara support custom enterprise knowledge bases?",
      "spoken_answer": "Yes, Seminara grounds presenter responses directly in your uploaded documentation.",
      "timestamp": "2026-11-20T12:12:10Z"
    }
  ],
  "cta_clicks": 4,
  "attendance_count": 18
}
```

## Zero-Cost Rehearsal & Testing

To test slide sync, presenter voice delivery, and question handling without consuming platform minutes:
- Pass `"status": "draft"` in the session creation payload.
- Append `?test=true` to any live briefing URL: `https://seminara.online/live/{sessionId}?test=true`.
- Explore the interactive sandbox at `https://seminara.online/sandbox`.

## Installation Across Agent Environments

### 1. skills.sh (Claude Code, Antigravity, Cursor, Windsurf)
```bash
npx skills add shivamselam/seminara-agentic-suite
```

### 2. Model Context Protocol (MCP)
Add Seminara's native Streamable HTTP MCP server:
```json
{
  "mcpServers": {
    "seminara": {
      "type": "sse",
      "url": "https://seminara.online/api/v1/mcp",
      "headers": {
        "Authorization": "Bearer <SEMINARA_API_KEY>"
      }
    }
  }
}
```

## Platform Resources & Documentation
- Official Website: `https://seminara.online`
- Personal Agent Protocol (PAP): `https://seminara.online/.well-known/personal-agent-protocol.json`
- API Discovery Catalog: `https://seminara.online/.well-known/api-catalog.json`
- OpenAPI 3.1 Specification: `https://seminara.online/openapi.json`
- Developer Index: `https://seminara.online/llms.txt`
- Interactive Sandbox: `https://seminara.online/sandbox`
