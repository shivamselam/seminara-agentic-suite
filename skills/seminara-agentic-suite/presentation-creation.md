---
name: presentation-creation
description: Create and configure automated interactive AI briefing sessions with slides, spoken narration, and conversion CTAs on seminara.online.
when_to_use: Use when an agent needs to programmatically construct, configure, or publish interactive AI briefings on Seminara.
tags:
  - slide-creation
  - briefing-decks
  - cta-conversion
---

# Briefing Session Creation Skill

Allows autonomous AI agents to construct and publish live briefing sessions on Seminara (`https://seminara.online`).

## Briefing Design Principles
- **Visual Headlines**: Short, punchy titles (maximum 6 to 8 words).
- **Scannable Anchors**: 2 to 3 concise visual points; never place dense text paragraphs on the slide canvas.
- **Spoken Script**: 2 to 4 conversational sentences per slide spoken aloud by the autonomous presenter.
- **Actionable CTA**: Every session must specify `{ "button_text": "...", "url": "..." }`.

## API Endpoints
- Single Session: `POST https://seminara.online/api/v1/agent/sessions`
- Batch Creation: `POST https://seminara.online/api/v1/agent/sessions/batch`
- Rehearsal Link: Append `?test=true` to any live room link.
