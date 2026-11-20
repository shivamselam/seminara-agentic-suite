---
name: agentic-hosting
description: Orchestrate Seminara's autonomous live presenter for 24/7 interactive product demos, onboarding walkthroughs, and enterprise training.
when_to_use: Use this skill when configuring AI presenter persona, speech parameters, interruptibility, or knowledge base context.
tags:
  - autonomous-presenter
  - live-briefings
  - voice-agent
  - interactive-demos
version: 1.1.0
---

# Agentic Hosting Skill

Orchestrate autonomous live briefing sessions delivered on Seminara (`https://seminara.online`). This skill governs the behavior, conversational pacing, voice question answering, and runtime controls of Seminara's autonomous live presenter.

## Core Presenter Behaviors

1. **Autonomous Narration Delivery**: The presenter speaks natural audio scripts for each slide in order, advancing visuals synchronously.
2. **Sub-Second Interruptibility**: When an audience member speaks into their microphone, the presenter stops speaking within milliseconds to listen to the question.
3. **Grounded Question Answering**: Answers attendee questions using the session knowledge base, slide content, and predefined platform constraints.
4. **Seamless Narration Resumption**: Once the question is answered, the presenter gracefully transitions back to the slide narrative.
5. **In-Session Lead Conversion**: Highlights the active Call to Action (CTA) at natural transition points.

## Session Configuration Parameters

When provisioning a session via `POST https://seminara.online/api/v1/agent/sessions`:

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `title` | string | Yes | The title of the briefing displayed in the room header. |
| `description` | string | No | Brief context for prospective attendees. |
| `status` | string | No | Set to `"published"` for live delivery or `"draft"` for free rehearsal. |
| `slides` | array | Yes | Ordered array of slide objects (`title`, `order_index`, `script`). |
| `knowledge_base` | array | No | Context documents for grounded Q&A (`title`, `content`). |
| `cta` | object | Yes | Conversion button config (`button_text`, `url`). |

## Example: Configuring an Interactive Product Walkthrough

```http
POST https://seminara.online/api/v1/agent/sessions
Authorization: Bearer <SEMINARA_API_KEY>
Content-Type: application/json

{
  "title": "Enterprise Cloud Architecture Briefing",
  "status": "published",
  "slides": [
    {
      "order_index": 0,
      "title": "Scalable Edge Infrastructure",
      "script": "Hello and welcome. Today we are looking at how our global edge network delivers sub-millisecond latency worldwide."
    },
    {
      "order_index": 1,
      "title": "Security and Compliance",
      "script": "Every transaction is end-to-end encrypted with zero trust access policies built directly into the runtime."
    }
  ],
  "knowledge_base": [
    {
      "title": "Compliance Certifications",
      "content": "Our infrastructure maintains SOC2 Type II, ISO 27001, and HIPAA compliance certifications."
    },
    {
      "title": "Pricing Plans",
      "content": "Enterprise plans start at 50 concurrent briefing rooms with custom domain white-labeling."
    }
  ],
  "cta": {
    "button_text": "Schedule Deep Dive",
    "url": "https://seminara.online/book-meeting"
  }
}
```

## Dialogue API (Machine-to-Machine Ingestion)

For personal agents that need to inspect presenter knowledge or dialogue without opening a WebRTC voice connection:
```http
POST https://seminara.online/api/v1/agent/aura/dialogue
Authorization: Bearer <SEMINARA_API_KEY>
Content-Type: application/json

{
  "session_id": "ses_9283748291",
  "message": "What compliance certifications does your platform hold?"
}
```

**Response:**
```json
{
  "response": "Our infrastructure maintains SOC2 Type II, ISO 27001, and HIPAA compliance certifications.",
  "source_slide_index": 1,
  "confidence": 0.98
}
```

## Rehearsal & Testing Mode

Test presenter cadence and verify question answering without consuming account minutes:
- Pass `"status": "draft"` during session creation.
- Open the rehearsal room with `?test=true`.
- Access the online test bench: `https://seminara.online/sandbox`.

## Verified Endpoints & Resources
- Platform: `https://seminara.online`
- Personal Agent Protocol: `https://seminara.online/.well-known/personal-agent-protocol.json`
- OpenAPI Specification: `https://seminara.online/openapi.json`
- MCP Server: `https://seminara.online/api/v1/mcp`
