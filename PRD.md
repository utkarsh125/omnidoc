## Omnidoc Collaborative Editor PRD

### Purpose & Vision
Omnidoc delivers real-time, conflict-free rich-text editing built on CRDTs so distributed teams can write together with confidence, even when connections are unreliable.

### Target Users
- Product and engineering teams co-authoring specs, PRDs, and RFCs
- Knowledge workers documenting processes or proposals
- Writers and editors collaborating asynchronously across time zones
- Any group that needs reliable, low-friction multi-user editing

### Problems to Solve
- Maintain a single source of truth without merge conflicts or lost edits
- Keep documents available and editable during network hiccups
- Provide familiar formatting controls without compromising sync fidelity
- Offer clarity on collaborator presence, cursors, and change history

### Desired Outcomes
- Sub-150ms perceived latency for remote edits on stable networks
- Rich formatting (headings, lists, code blocks, quotes) that stays in sync
- Automatic offline reconciliation with no manual merges
- Visibility into who is editing, along with presence indicators and comments

### MVP Feature Scope
- Rich-text toolbar covering core formatting, links, and code snippets
- CRDT-powered engine with per-user cursors, selection highlights, and stable ordering
- Offline-first editing that queues changes and reconciles on reconnect
- Commenting, mentions, and a lightweight version timeline
- Authentication plus document sharing via invite links or shareable URLs

### Non-Goals (Initial Release)
- Workflow automation, review assignments, or complex approval chains
- Heavy media editing (video, advanced image manipulation, large asset storage)
- Exporting to every office format; limit to HTML, Markdown, and PDF initially

### Technical Constraints & Considerations
- CRDT state must remain performant as documents and collaborator counts grow
- Data privacy and security: encryption in transit and at rest, SOC2-ready logging
- Web-first experience with usable (but not fully optimized) mobile web support
- Instrumentation to capture latency, reconciliation health, and usage metrics

### Success Metrics
- Collaboration depth: average concurrent editors per active document
- Reliability: percentage of successful sync cycles and offline reconciliation rate
- Engagement: weekly active documents and median editing session length
- Retention: document reopen rate within seven days

### Risks & Open Questions
- How to keep CRDT payloads lightweight for very long documents
- Ensuring deterministic formatting while extending the rich-text feature set
- UX expectations for offline edits (e.g., pending state indicators, conflict messaging)

### Timeline (High-Level)
- CRDT engine and editor foundation: 4–6 weeks
- Collaboration UX (presence, comments, sharing flows): 3–4 weeks
- Hardening, telemetry, polish, and beta rollout: 4 weeks

### Open Follow-Ups
- Choose the auth/sharing model (SSO, magic links, role-based invites)
- Decide on the initial hosting strategy for low-latency global coverage
- Validate offline UX prototypes with representative users

