---
name: presentation-creation
description: Create and configure automated interactive AI briefing sessions with slides, audio presenter, and conversion CTAs.
when-to-use: Use when an agent needs to programmatically construct, configure, or publish interactive AI briefings on Seminara.
---

# Briefing Session Creation Skill

Allows autonomous AI agents to programmatically build and publish live briefing sessions on Seminara.

## When to Use This Skill
- Creating interactive pitch briefings, product tours, or training modules.
- Converting slide assets (images/PDFs) into an autonomous voice-hosted briefing.
- Setting custom audience CTAs (e.g. "Book a Demo", "Sign Up Now") and lead capture forms.

## API Endpoint
`POST https://seminara.online/api/v1/agent/sessions`

## Required Parameters
- `title`: String briefing title
- `isLive`: Boolean whether to publish live immediately
- `ctaText`: Optional CTA button label
- `ctaUrl`: Optional conversion destination URL
