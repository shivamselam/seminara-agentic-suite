---
name: presentation-creation
description: Create and configure automated interactive AI presentation sessions with slides, audio host, and conversion CTAs.
when-to-use: Use when an agent needs to programmatically construct, configure, or publish interactive AI presentations on Seminara.
---

# Presentation Creation Skill

Allows autonomous AI agents to programmatically build and publish live presentation sessions on Seminara.

## When to Use This Skill
- Creating interactive pitch decks, product tours, or training modules.
- Converting slide assets (images/PDFs) into an autonomous voice-hosted presentation.
- Setting custom audience CTAs (e.g. "Book a Demo", "Sign Up Now") and lead capture forms.

## API Endpoint
`POST https://seminara.online/api/v1/agent/sessions`

## Required Parameters
- `title`: String presentation title
- `isLive`: Boolean whether to publish live immediately
- `ctaText`: Optional CTA button label
- `ctaUrl`: Optional conversion destination URL
