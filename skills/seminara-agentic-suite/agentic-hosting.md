---
name: agentic-hosting
description: Manage 24/7 autonomous briefing delivery, live Q&A handling, and dynamic knowledge base retrieval on seminara.online.
when_to_use: Use when an agent needs to automate real-time briefing delivery, configure presenter persona, or handle audience voice questions.
tags:
  - autonomous-presenter
  - live-briefings
  - voice-agent
---

# Agentic Hosting Skill

Control the autonomous briefing lifecycle and real-time voice orchestration on Seminara (`https://seminara.online`).

## Core Presenter Behaviors
- **Sub-Second Interruptibility**: Presenter pauses immediately when attendees speak into their microphone.
- **Grounded Q&A**: Answers audience inquiries using the session knowledge base and slide context.
- **Smooth Resumption**: Resumes narration naturally after answering attendee questions.
- **In-Session Lead Conversion**: Highlights the active Call to Action (CTA) at transition points.

## API Endpoint
- Provision Session: `POST https://seminara.online/api/v1/agent/sessions`
- Machine Dialogue (No Voice): `POST https://seminara.online/api/v1/agent/aura/dialogue`
- Sandbox Rehearsal: `https://seminara.online/sandbox`
