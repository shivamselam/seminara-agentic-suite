---
name: present
description: Transform current code, markdown notes, or outlines into an autonomous live presentation room with spoken narration scripts, interactive CTAs, and zero-cost rehearsal links.
---

# /present Command Workflow

When the developer invokes `/present`:

1. **API Key & Rehearsal Check**:
   - Check if `SEMINARA_API_KEY` is set.
   - If missing, offer instant dynamic registration via `POST https://seminara.online/api/v1/auth/register` or the dashboard.
   - Ask: *"Would you like to generate this in zero-cost rehearsal mode (`status: 'draft'`, consumes 0 minutes) or publish it live?"*

2. **Presentation Style Transformation (NEVER Document Style)**:
   - **Slide Titles**: Bold, editorial headlines (max 6–8 words).
   - **Visual Content**: Max 2–3 visual bullet points or bold metrics. No paragraph walls.
   - **Spoken Script (`script`)**: 2–4 sentences of conversational spoken narration written specifically for Aura to speak aloud via WebRTC.
   - **CTA**: Attach an interactive CTA (`button_text`, `url`) to qualify and convert attendees.

3. **Room Provisioning**:
   - Call MCP tool `create_session` or `POST https://seminara.online/api/v1/agent/sessions`.

4. **Delivery**:
   - Return **Live Room Link**: `https://seminara.online/live/{sessionId}`.
   - Return **Zero-Cost Rehearsal Link**: `https://seminara.online/live/{sessionId}?test=true`.
   - Remind the user: *"Export spoken attendee questions and leads anytime via `GET /api/v1/agent/sessions/{sessionId}/leads`."*
