# Personal Agent Protocol (PAP) Integration Guide

Welcome to the **Personal Agent Protocol (PAP)** developer guide for **Seminara** (`https://seminara.online`).

Seminara is **The Autonomous Live Presentation Platform**. **Aura** is the autonomous live presenter that turns slide decks into live, interactive presentations with real-time voice and text Q&A and in-session lead conversion.

This document outlines how consumer personal AI agents (such as Meta AI, Claude, Siri, and custom agent runtimes) discover Seminara, establish guest or delegated sessions, interact with Aura (Company Agent), and submit attendee leads with verified user consent.

---

## 1. Discovery

Personal agents begin on the website by discovering machine-readable capabilities via RFC 8288 Link headers or standard `.well-known` discovery endpoints:

- **PAP Discovery Manifest**: `https://seminara.online/.well-known/personal-agent-protocol.json`
- **Link Discovery (HTTP Header)**:
  ```http
  Link: </.well-known/personal-agent-protocol.json>; rel="personal-agent-protocol"
  ```
- **Discovery Catalog**: `https://seminara.online/.well-known/api-catalog.json`
- **Agent Card**: `https://seminara.online/.well-known/agent-card.json`
- **MCP Server**: `https://seminara.online/api/v1/mcp`
- **OpenAPI 3.1 Spec**: `https://seminara.online/openapi.json`

---

## 2. Session Initialization & Authentication

Personal Agent Protocol supports two operating modes:

### Mode A: Ephemeral Guest Session (Zero Friction)
When a consumer has not yet logged in or linked an account, the personal agent can initialize an ephemeral **Guest Session** (valid for 1 hour / 3600s TTL). This enables read-only slide inspection, public Q&A with Aura, and attendee interactions.

```http
POST https://seminara.online/api/v1/pap/session
Content-Type: application/json

{
  "mode": "guest",
  "client_name": "Meta AI for Jane Doe"
}
```

Response:
```json
{
  "protocol": "personal-agent-protocol/v0.1",
  "session_id": "pap_sess_1772950000",
  "mode": "guest",
  "token_type": "Bearer",
  "access_token": "sem_guest_...",
  "expires_in": 3600,
  "scopes": ["attendee:act", "sessions:read"],
  "surfaces": {
    "company_agent": {
      "name": "Aura",
      "dialogue_endpoint": "https://seminara.online/api/v1/agent/aura/dialogue"
    },
    "api": {
      "mcp_server": "https://seminara.online/api/v1/mcp",
      "openapi": "https://seminara.online/openapi.json"
    }
  }
}
```

### Mode B: Authenticated & Delegated OAuth Session
When the consumer wants their personal agent to act with full account authority (managing host decks, buying minutes, or viewing private analytics):
1. Request a device authorization code:
   ```http
   POST https://seminara.online/api/v1/oauth/device/code
   ```
2. Direct the user to verify at:
   ```text
   https://seminara.online/activate
   ```
3. Poll for the approved access token:
   ```http
   POST https://seminara.online/api/v1/oauth/token
   ```

---

## 3. Interaction Surfaces

Personal Agent Protocol defines three distinct business surfaces:

### Surface 1: Company Agent (Aura Dialogue)
For interactive conversations, slide queries, and presentation Q&A without requiring WebRTC audio streaming:

```http
POST https://seminara.online/api/v1/agent/aura/dialogue
Authorization: Bearer <token>
Content-Type: application/json

{
  "message": "What are the core capabilities on Slide 2?",
  "session_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "attendee_name": "Jane Doe"
}
```

Response:
```json
{
  "response": "On Slide 2, we highlight sub-second barge-in interruption handling and autonomous slide synchronization...",
  "agent": {
    "name": "Aura",
    "role": "Autonomous Presentation Host",
    "platform": "Seminara"
  },
  "session": {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "title": "Enterprise Solution Overview"
  },
  "cta": {
    "text": "Schedule Architecture Review",
    "url": "https://seminara.online/book"
  },
  "protocol": "personal-agent-protocol/v0.1"
}
```

*Note*: Pass header `Accept: text/event-stream` for live token-by-token Server-Sent Events (SSE) streaming.

### Surface 2: Structured APIs (MCP & OpenAPI)
Personal agents can connect over Model Context Protocol (Streamable HTTP SSE) at `https://seminara.online/api/v1/mcp`:
- `pap_query_aura`: Query presentation outlines and ask Aura questions.
- `submit_attendee_lead`: Register attendee interest and click CTAs.
- `discover_sessions`: Browse public live rooms on Seminara Discover.

### Surface 3: Delegated Attendee Lead Capture
When an attendee approves sharing their contact details or clicking an in-session Call-To-Action (CTA):

```http
POST https://seminara.online/api/v1/agent/sessions/{sessionId}/leads
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "company": "Acme Corp",
  "phone": "+1-555-0199",
  "notes": "Interested in 50 concurrent presentation rooms",
  "cta_clicked": true
}
```

Response:
```json
{
  "success": true,
  "protocol": "personal-agent-protocol/v0.1",
  "message": "Lead registered successfully via Personal Agent Protocol",
  "lead": {
    "id": "7ca6b8c9-...",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "session_id": "3fa85f64-...",
    "session_title": "Enterprise Solution Overview",
    "cta_engaged": true
  }
}
```

---

## 4. TypeScript SDK Example

```typescript
import { Seminara } from 'seminara-sdk';

// Initialize client (can start unauthenticated for guest sessions)
const client = new Seminara();

// 1. Initialize a 1-hour ephemeral guest session
const session = await client.pap.initSession({
  mode: 'guest',
  clientName: 'Personal AI for Alex'
});

console.log('Guest session active:', session.access_token);

// 2. Query Aura about a presentation
const auraReply = await client.pap.queryAura({
  sessionId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  message: 'What is the pricing model shown in the presentation?'
});

console.log('Aura:', auraReply.response);

// 3. Submit consented attendee lead info
const leadResult = await client.pap.submitLead('3fa85f64-5717-4562-b3fc-2c963f66afa6', {
  name: 'Alex Rivera',
  email: 'alex@example.com',
  company: 'Rivera Tech',
  ctaClicked: true
});

console.log('Lead registered:', leadResult.lead.email);
```

---

## 5. Security & Verification Policy
- Ephemeral guest tokens (`sem_guest_...`) expire strictly after 1 hour (3600 seconds).
- Validated via HMAC-SHA256 zero-latency signatures.
- For issues, questions, or enterprise integration, contact: `shivamselam@seminara.online`.
