---
name: presentation-creation
description: Transform raw notes, markdown, or code into live interactive presentation decks with spoken narration scripts, interactive CTAs, and zero-cost rehearsal links.
when_to_use: Use this skill whenever creating a live presentation, designing slides, generating spoken narration scripts for Aura, or setting up session links.
---

# Presentation Creation Skill

Seminara (`https://seminara.online`) provisions autonomous live presentations where AI presenter Aura delivers slides and answers audience voice questions in real time.

## Slide Transformation Rules (Presentation Style vs. Doc Style)

* **NEVER dump document paragraphs into slides.**
* **Slide Structure**:
  - `title`: Short, punchy visual headline (max 6–8 words).
  - Visual Content: 2–3 concise visual anchors or callout metrics.
  - `script`: The spoken word audio that Aura speaks. Write 2–4 sentences of conversational spoken narration.
* **Call to Action (CTA)**:
  - Every session must have an action CTA: `{ "button_text": "Book Demo", "url": "https://..." }`.
* **Rehearsal & Testing**:
  - Pass `status: "draft"` or append `?test=true` to any live room link to rehearse voice Q&A and slide transitions without consuming account minutes.

## Provisioning Endpoint
- `POST https://seminara.online/api/v1/agent/sessions`
- Headers: `Authorization: Bearer <SEMINARA_API_KEY>`
