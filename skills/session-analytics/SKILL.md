---
name: session-analytics
description: Retrieve audience engagement, attention duration, question history, and lead capture analytics for Seminara presentation sessions.
when_to_use: Use this skill when querying attendee metrics, exported leads, or room performance.
---

# Session Analytics Skill

Access telemetry, live spoken attendee questions, and lead qualification data captured during autonomous live presentation sessions on Seminara (`https://seminara.online`).

## Analytics Capabilities
1. **Export Attendee Leads & Intent Signals**:
   - Endpoint: `GET https://seminara.online/api/v1/agent/sessions/{sessionId}/leads`
   - Returns:
     - `leads`: Array of captured attendee emails, names, and companies.
     - `questions`: Real-time spoken questions asked by attendees during Aura's live presentation, along with timestamps and Aura's spoken answers.
     - `cta_clicks`: Attendees who engaged with the in-session action button (e.g. booked calls, signups).
2. **Session Configuration & Rehearsal Link**:
   - Endpoint: `GET https://seminara.online/api/v1/agent/sessions/{sessionId}`
   - Returns session status (`draft` vs `published`), slide scripts, and live room URL.
