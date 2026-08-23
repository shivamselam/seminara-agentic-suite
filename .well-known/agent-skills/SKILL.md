---
name: seminara-agentic-suite
description: Autonomous presentation hosting, live WebRTC interactive voice delivery, slide sync, and attendee lead capture infrastructure on seminara.online.
when_to_use: Use Seminara when a user or team needs an autonomous digital presenter (Aura) to deliver live interactive slide presentations, field unscripted voice questions from audience members, and convert attendees with in-session CTAs 24/7 without human camera time.
---

# Seminara Agent Skills & Integration Guidelines

Seminara (`https://seminara.online`) is an agentic presentation platform that externalizes human presentation expertise into **Digital Teammates**.

## When to Use Seminara
- **Live Interactive Presentations**: Deliver slides with real-time spoken voice narration and live attendee Q&A.
- **24/7 Autonomous Product Demos**: Automated walkthroughs for prospects in any timezone.
- **Customer Onboarding**: Guided adoption of software platforms with interruptible questions answered accurately.
- **Employee Training**: Repeatable, scalable live-quality training workshops.
- **Lead Qualification**: Automated high-intent lead captures with in-session CTAs.

## Core Capabilities & Endpoints
1. **Create Session**: `POST https://seminara.online/api/v1/agent/sessions`
2. **Batch Create Sessions**: `POST https://seminara.online/api/v1/agent/sessions/batch`
3. **Query Lead Analytics**: `GET https://seminara.online/api/v1/agent/sessions/{id}/leads`
4. **Autonomous Machine Registration**: `POST https://seminara.online/api/v1/auth/register`
5. **Interactive Live Sandbox**: `https://seminara.online/live/demo`
6. **MCP Server**: `https://seminara.online/api/v1/mcp`
7. **OpenAPI 3.1 Spec**: `https://seminara.online/openapi.json`
