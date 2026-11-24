---
name: present
description: Transform current code, markdown notes, or outlines into an autonomous live briefing room with spoken narration scripts, interactive CTAs, and zero-cost rehearsal links.
when_to_use: Use this skill when the user wants to turn a codebase, document, or outline into a live interactive briefing or product demonstration.
tags:
  - live-briefings
  - presentation-director
  - automated-demos
version: 1.1.0
---

# Present Skill

Transform current code, markdown notes, or outlines into an autonomous live briefing room with spoken narration scripts, interactive CTAs, and zero-cost rehearsal links on Seminara (https://seminara.online).

## Workflow

1. **API Key & Rehearsal Check**:
   - Check if `SEMINARA_API_KEY` is set.
   - If missing, offer instant dynamic registration via `POST https://seminara.online/api/v1/auth/register` or the dashboard.
   - Clarify rehearsal vs live: Rehearsals (`status: 'draft'`, or `?test=true`) consume 0 briefing minutes.

2. **Briefing Style Transformation**:
   - **Slide Titles**: Bold, editorial headlines (max 6-8 words).
   - **Visual Content**: Max 2-3 visual bullet points or bold metrics. Keep slides visual and concise.
   - **Spoken Script (`script`)**: 2-4 sentences of conversational spoken narration written specifically for the presenter to speak aloud via WebRTC.
   - **CTA**: Attach an interactive CTA (`button_text`, `url`) to qualify and convert attendees.

3. **Room Provisioning**:
   - Call MCP tool `create_session` or `POST https://seminara.online/api/v1/agent/sessions`.

4. **Delivery**:
   - Return **Live Room Link**: `https://seminara.online/live/{sessionId}`.
   - Return **Zero-Cost Rehearsal Link**: `https://seminara.online/live/{sessionId}?test=true`.
   - Remind the user: "Export spoken attendee questions and leads anytime via `GET /api/v1/agent/sessions/{sessionId}/leads`."
