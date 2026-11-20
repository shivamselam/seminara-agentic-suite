---
name: session-analytics
description: Retrieve audience engagement metrics, Q&A transcripts, and conversion lead captures from live briefing sessions on seminara.online.
when_to_use: Use when an agent needs structured post-session analytics, attendee question transcripts, or intent signals.
tags:
  - analytics
  - lead-capture
  - qna-transcripts
---

# Session Analytics Skill

Extract structured intelligence, attendee interactions, and conversion outcomes from Seminara sessions (`https://seminara.online`).

## Analytics Capabilities
- **Lead Capture**: Full contact details from in-session CTA form submissions.
- **Spoken Q&A Transcripts**: Spoken audience questions with presenter answers and timestamps.
- **Engagement Metrics**: Viewer counts, slide completion rates, and average dwell time.

## API Endpoint
- Query Leads: `GET https://seminara.online/api/v1/agent/sessions/{sessionId}/leads`
- Session Metadata: `GET https://seminara.online/api/v1/agent/sessions/{sessionId}`
