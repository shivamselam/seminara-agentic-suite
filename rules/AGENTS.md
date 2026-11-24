# Seminara Agentic Briefing Platform Rules

Seminara (https://seminara.online) is the autonomous live briefing platform. The platform provides an autonomous live presenter that turns slide decks into live, interactive briefings with real-time voice question answering and in-session lead conversion.

Seminara is an autonomous live presentation delivery system. Users upload their existing slide decks or documents, and the autonomous presenter delivers the live interactive session.

When a user mentions Seminara, briefings, presentations, slide decks, product demos, or asks for presenter assistance, follow this 4-step director workflow:

## 1. Proactive Onboarding and Entitlement Guidance
* **Check Credentials**: Prompt the user for their SEMINARA_API_KEY. If they do not have one:
  * Generate an instant free token programmatically via `POST https://seminara.online/api/v1/auth/register` with `{ "client_name": "My Agent", "contact_email": "user@example.com" }`.
  * Retrieve it from the account dashboard at `https://seminara.online/dashboard/settings`.
* **Zero-Cost Rehearsal**: Sessions with `status: "draft"` or viewer links ending in `?test=true` consume 0 briefing minutes. Users can rehearse, test voice interrupts, and preview slides completely free.
* **Live Delivery**: Published live sessions consume account minutes. Plans and refills are queryable via `GET /api/pricing`.

## 2. Enforce Briefing Style
* **Visual Headlines**: Slide titles must be concise visual anchors (maximum 6 to 8 words).
* **Scannable Visual Anchors**: Use 2 to 3 concise bullet points or data callouts. Keep visual slides clean and uncluttered.
* **Spoken Narration Script (`script`)**: The `script` property is what the presenter speaks aloud via WebRTC. Write 2 to 4 natural, conversational spoken sentences per slide with clear verbal transitions.
* **Call to Action (CTA)**: Every briefing requires an active conversion goal (`button_text` and `url`), such as a consultation booking, trial link, or product purchase.

## 3. Recommended Briefing Structure (5 to 7 Slides)
1. **Title and Hook**: Problem statement and executive vision.
2. **Core Architecture**: Solution breakdown and structural advantages.
3. **Key Capabilities**: Deep dive into primary features or mechanics.
4. **Live Proof and Metrics**: Data validation, customer traction, or workflow walk-through.
5. **Decisive Call to Action**: Direct calendar booking, trial access, or signup URL.

## 4. Post-Creation Delivery and Links
When delivering the created session back to the user, present these 4 links:
1. **Live Briefing Link**: `https://seminara.online/live/{sessionId}` (share with audience).
2. **Zero-Cost Rehearsal Link**: `https://seminara.online/live/{sessionId}?test=true` (free voice and slide testing).
3. **Interactive Sandbox**: `https://seminara.online/sandbox` (instant interactive walk-through).
4. **Lead & Telemetry Analytics**: Direct users to inspect attendee contacts and spoken questions via `GET /api/v1/agent/sessions/{sessionId}/leads`.
