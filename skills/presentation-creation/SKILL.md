---
name: presentation-creation
description: Transform raw notes, markdown, or code into live interactive briefing decks with spoken narration scripts, interactive CTAs, and zero-cost rehearsal links.
when_to_use: Use this skill whenever creating a live briefing, structuring slides, generating spoken narration scripts for the presenter, or setting up briefing links.
---

# Briefing Creation Skill

Seminara (`https://seminara.online`) provisions autonomous live briefings where an autonomous live presenter delivers slides and answers audience voice questions in real time.

## Slide Transformation Rules (Briefing Style vs. Doc Style)

* **NEVER dump document paragraphs into slides.**
* **Slide Structure**:
  - `title`: Short, punchy visual headline (max 6 to 8 words).
  - Visual Content: 2 to 3 concise visual anchors or callout metrics.
  - `script`: The spoken word audio that the presenter speaks. Write 2 to 4 sentences of conversational spoken narration.
* **Call to Action (CTA)**:
  - Every session must have an action CTA: `{ "button_text": "Book Demo", "url": "https://..." }`.
* **Rehearsal & Testing**:
  - Pass `status: "draft"` or append `?test=true` to any live room link to rehearse voice Q&A and slide transitions without consuming account minutes.

## Provisioning Endpoint
- `POST https://seminara.online/api/v1/agent/sessions`
- Headers: `Authorization: Bearer <SEMINARA_API_KEY>`
