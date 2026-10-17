---
name: presentation-creation
description: Create and provision live, interactive presentation sessions hosted by autonomous presenter Aura on Seminara.
when_to_use: Use this skill when generating new live presentation rooms, uploading decks, or setting up session agendas.
---

# Presentation Creation Skill

Seminara (`https://seminara.online`) provisions autonomous live presentations where AI presenter Aura delivers slides and answers audience voice questions in real time.

## Quickstart
- Endpoint: `POST https://seminara.online/api/v1/agent/sessions`
- Headers: `Authorization: Bearer <SEMINARA_API_KEY>`
- Zero-cost test: Include `status: "draft"` or append `?test=true` to test rooms without consuming minutes.
