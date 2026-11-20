---
name: presentation-creation
description: Transform raw notes, markdown, or code into live interactive briefing decks with spoken narration scripts, interactive CTAs, and zero-cost rehearsal links.
when_to_use: Use this skill whenever creating a live briefing, structuring slides, generating spoken narration scripts for the presenter, or setting up briefing links.
tags:
  - slide-creation
  - briefing-decks
  - script-generation
  - cta-conversion
version: 1.1.0
---

# Presentation Creation Skill

Transform raw notes, documents, pitch decks, or technical outlines into structured, voice-interactive briefing sessions on Seminara (`https://seminara.online`).

## Core Principles of Briefing Decks

Live briefing decks operate differently from static reading documents:

1. **Clean Visual Headlines**: Slide titles must be concise visual anchors (maximum 6 to 8 words).
2. **Scannable Visual Anchors**: Use 2 to 3 concise bullet points or data callouts. Never place dense paragraphs on the visual slide canvas.
3. **Conversational Spoken Narration**: The `script` field represents what the autonomous presenter speaks aloud. Write 2 to 4 clear, natural sentences per slide.
4. **Mandatory Call to Action (CTA)**: Every briefing requires an active conversion goal (`button_text` and `url`), such as booking a consultation, starting a trial, or opening documentation.

## Slide Structure Specification

```json
{
  "order_index": 0,
  "title": "Short Visual Headline",
  "script": "Natural conversational sentences spoken by the autonomous host. Keep pacing steady and engaging."
}
```

## API Provisioning

### Single Briefing Creation
```http
POST https://seminara.online/api/v1/agent/sessions
Authorization: Bearer <SEMINARA_API_KEY>
Content-Type: application/json

{
  "title": "SaaS Platform Overview & Architecture",
  "description": "Interactive walkthrough of our core cloud architecture and security guarantees.",
  "status": "published",
  "slides": [
    {
      "order_index": 0,
      "title": "Welcome to CloudFlow",
      "script": "Welcome everyone. Today we are walking through CloudFlow, our autonomous data streaming engine designed for high-throughput teams."
    },
    {
      "order_index": 1,
      "title": "Unified Streaming Architecture",
      "script": "Our engine processes billions of events per second with automatic schema validation and zero data loss guarantees."
    },
    {
      "order_index": 2,
      "title": "Security & Isolation",
      "script": "Each tenant runs in an isolated sandbox with dedicated memory encryption and strict zero trust access controls."
    }
  ],
  "knowledge_base": [
    {
      "title": "Pricing & Tiers",
      "content": "Starter tier is $49 per month. Enterprise tier includes custom VPC peering and dedicated support."
    }
  ],
  "cta": {
    "button_text": "Start Free Trial",
    "url": "https://seminara.online/sandbox"
  }
}
```

### Batch Briefing Creation
For generating personalized briefings at scale:
```http
POST https://seminara.online/api/v1/agent/sessions/batch
Authorization: Bearer <SEMINARA_API_KEY>
Content-Type: application/json

{
  "sessions": [
    {
      "title": "Acme Corp Tailored Demo",
      "status": "published",
      "slides": [
        {
          "order_index": 0,
          "title": "Accelerating Acme Operations",
          "script": "Welcome Acme team. Today we explore how Seminara automates your executive customer briefings."
        }
      ],
      "cta": {
        "button_text": "Schedule Executive Review",
        "url": "https://seminara.online/sandbox"
      }
    }
  ]
}
```

## Script Writing Guidelines

- **Use First-Person Conversational Tone**: Write in direct presenter style ("Welcome everyone", "Notice on this slide", "Let us look at").
- **Avoid Acronym Overload**: Spell out unfamiliar terms on first mention so voice synthesis speaks clearly.
- **Pacing**: Aim for 30 to 45 seconds of spoken narration per slide to maintain high attendee attention.
- **Include Slide Transitions**: Signal movement between slides naturally ("Now let us move to security", "Next, we examine pricing").

## Zero-Cost Rehearsal Links
- Pass `"status": "draft"` during creation to test slide transitions and audio without consuming account minutes.
- Add `?test=true` to any live room link.
- Instant Briefing Creator (Drop a Deck): `https://seminara.online/tools/instant-briefing-creator`.
- Rehearsal playground: `https://seminara.online/sandbox`.
