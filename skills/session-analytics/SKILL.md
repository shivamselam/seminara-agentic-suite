---
name: session-analytics
description: Retrieve audience engagement, attention duration, question history, and lead capture analytics for Seminara presentation sessions.
when_to_use: Use this skill when querying attendee metrics, exported leads, or room performance.
---

# Session Analytics Skill

Access telemetry and lead qualification data captured during autonomous live presentation sessions on Seminara (`https://seminara.online`).

## Analytics Endpoints
- Get Session Leads: `GET https://seminara.online/api/v1/agent/sessions/{sessionId}/leads`
- Get Session Details: `GET https://seminara.online/api/v1/agent/sessions/{sessionId}`
