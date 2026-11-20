---
name: session-analytics
description: Retrieve audience engagement, attention duration, question history, and lead capture analytics for Seminara briefing sessions.
when_to_use: Use this skill when querying attendee metrics, exported leads, or room performance.
tags:
  - analytics
  - lead-capture
  - attendee-metrics
  - qna-transcripts
version: 1.1.0
---

# Session Analytics Skill

Access telemetry, live spoken attendee questions, attention duration, and lead qualification data captured during autonomous live briefing sessions on Seminara (`https://seminara.online`).

## Core Analytics Capabilities

1. **Attendee Intent & Lead Capture**: Retrieve contact information captured through in-session Call to Action (CTA) forms.
2. **Spoken Question Transcripts**: Inspect real-time questions asked aloud by attendees, along with the presenter's spoken answers and timestamps.
3. **Engagement Metrics**: Measure viewer count, average dwell time, and drop-off per slide.
4. **CTA Conversion Tracking**: Track total clicks and conversion percentages on session action buttons.

## API Endpoints

### 1. Export Attendee Leads & Interaction History
```http
GET https://seminara.online/api/v1/agent/sessions/{sessionId}/leads
Authorization: Bearer <SEMINARA_API_KEY>
```

**Response:**
```json
{
  "session_id": "ses_9283748291",
  "total_attendees": 24,
  "average_duration_seconds": 340,
  "leads": [
    {
      "lead_id": "lead_01",
      "name": "Sarah Jenkins",
      "email": "sarah.jenkins@acmecorp.com",
      "company": "Acme Corp",
      "title": "VP of Engineering",
      "cta_clicked": true,
      "submitted_at": "2026-11-20T14:22:15Z"
    }
  ],
  "questions": [
    {
      "question_id": "q_101",
      "spoken_question": "Can we connect our internal customer database to the presenter?",
      "spoken_answer": "Yes, Seminara supports dynamic knowledge bases and API endpoints for real-time customer data lookup.",
      "slide_index": 2,
      "timestamp": "2026-11-20T14:18:42Z"
    }
  ],
  "cta_metrics": {
    "impressions": 24,
    "clicks": 9,
    "conversion_rate": 0.375
  }
}
```

### 2. Inspect Session Status & Metadata
```http
GET https://seminara.online/api/v1/agent/sessions/{sessionId}
Authorization: Bearer <SEMINARA_API_KEY>
```

**Response:**
```json
{
  "id": "ses_9283748291",
  "title": "Enterprise Cloud Architecture Briefing",
  "status": "published",
  "live_link": "https://seminara.online/live/ses_9283748291",
  "rehearsal_link": "https://seminara.online/live/ses_9283748291?test=true",
  "total_slides": 5,
  "created_at": "2026-11-20T12:00:00Z"
}
```

## Agent Workflows & CRM Sync

AI agents can use this skill to automate post-session follow-ups:
1. Poll `GET /api/v1/agent/sessions/{sessionId}/leads` following a scheduled briefing.
2. Filter leads with `cta_clicked: true`.
3. Enrich lead records with the specific questions they asked during the live session.
4. Dispatch structured lead data to internal CRM pipelines or scheduling engines.

## Reference Endpoints
- Base API: `https://seminara.online`
- Analytics Documentation: `https://seminara.online/docs/api-overview`
- OpenAPI Specification: `https://seminara.online/openapi.json`
- Sandbox: `https://seminara.online/sandbox`
