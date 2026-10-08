# Changelog

All notable changes to the Seminara Agentic Suite (SDKs, CLI, agent protocols, and developer specifications) will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-10-08

### Added
- **Personal Agent Protocol (PAP v0.1) Support in TypeScript SDK (`seminara-sdk@1.1.0`)**:
  - Added native `client.pap` client namespace for seamless integration with personal AI assistants (Meta AI, Claude Desktop, and autonomous personal runtimes).
  - Implemented `client.pap.initSession({ mode, personalAgentId, attendeeContext })` supporting low-latency ephemeral guest access (`mode: "guest"`) and user delegation (`mode: "oauth"`).
  - Implemented `client.pap.queryAura({ sessionId, message, attendeeContext })` enabling Agent-to-Agent (A2A) dialogue with the live presenter.
  - Implemented `client.pap.submitLead(sessionId, { attendee, consentedAction, context })` for secure, consented lead conversion.
  - Exported complete TypeScript types: `PapSessionOptions`, `PapSessionResponse`, `PapAuraDialogueOptions`, `PapAuraDialogueResponse`, `PapLeadOptions`, and `PapLeadResponse`.
- **Developer Documentation & Guides**:
  - Published [`docs/personal-agent-protocol.md`](./docs/personal-agent-protocol.md): An architectural guide covering discovery surfaces, guest vs. delegated authorization, A2A dialogue semantics, and Model Context Protocol (MCP) tool bindings.
- **Specification & Discovery Alignment**:
  - Updated `AGENTS.md` with Personal Agent Protocol discovery endpoints, authentication mechanics, and RFC 8288 link relation schemas.
  - Updated `README.md` referencing PAP integration architecture and developer resources.

## [1.0.0] - 2026-09-06

### Added
- **Initial Public Release of Seminara Agentic Suite**:
  - **TypeScript / JavaScript SDK (`seminara-sdk@1.0.0`)**: Client bindings for presentation session provisioning, slide management, analytics querying, and lead exporting.
  - **Python SDK (`seminara@1.0.0`)**: Synchronous and asynchronous Python client supporting modern Pydantic validation.
  - **Command-Line Interface (`seminara-cli@1.0.0`)**: Terminal tool and local stdio Model Context Protocol (MCP) server bridge.
  - **Go Module (`pkg.go.dev/github.com/shivamselam/seminara-agentic-suite/go`)**: Strongly-typed Go client for backend agent runtimes.
  - **Agent Discovery & Protocol Specifications**: Standard RFC discovery catalogs, agent plugin manifests (`.well-known/plugin.json`), and Smithery configuration (`smithery.yaml`).
