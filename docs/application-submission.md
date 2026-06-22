# Codex for Open Source Submission Draft

## Project

Life Countdown: a local-first life countdown and safety guardian PWA for older adults, people living alone, and families who need low-friction daily check-ins.

## Repository And Demo

1. Repository: https://github.com/gelibing8-rgb/life-countdown
2. Live demo: https://gelibing8-rgb.github.io/life-countdown/
3. Reviewer evidence: https://github.com/gelibing8-rgb/life-countdown/blob/main/docs/reviewer-evidence.md
4. Project impact: https://github.com/gelibing8-rgb/life-countdown/blob/main/docs/project-impact.md

## Submission Text

Life Countdown is an open-source, local-first PWA with two connected goals: helping people see their remaining time under a configurable life horizon, and helping older adults or people living alone send lightweight daily safety check-ins to trusted contacts.

The project is intentionally small and careful. It has no backend account system, no analytics SDK, no advertising SDK, and no hidden data upload. Birth date, target age, reminder settings, trusted-contact fields, quote settings, and check-in state are stored locally in the browser. The app generates user-confirmed `sms:`, `mailto:`, and emergency `tel:` links, but it does not silently send messages, emails, or phone calls.

This matters because daily safety check-ins can easily become surveillance, false-alarm systems, or unclear health-data collection. Life Countdown tries to model a safer pattern: visible user action, explicit consent, local-first storage, clear privacy boundaries, and documented wearable integration before any Apple Health, Health Connect, Apple Watch, Wear OS, or vendor device work.

The current project already includes a working PWA, GitHub Pages demo, MIT license, README, privacy notes, security notes, roadmap, release history, PR-based maintenance record, safety guardian documentation, wearable integration notes, accessibility checklist, privacy impact checklist, iOS Shortcut notes, Android widget options, and automated checks through `npm run check`.

ChatGPT Pro and Codex would directly support real maintenance work: improving date and reminder tests, reviewing safety-guardian edge cases, hardening accessibility for older users, expanding privacy reviews, documenting wearable integration paths, improving issue triage, and keeping PRs small, reviewable, and testable. The goal is not to build a large backend product; the goal is to maintain a clear open-source example of privacy-first life countdown and daily safety guardianship.

Although the project is early and does not claim broad adoption metrics, its ecosystem value is clear: it provides a concrete, working reference for consent-based safety check-ins without turning care into hidden monitoring or unnecessary health-data collection.

## Maintenance Proof Points

1. The repository has repeated PR and release maintenance history.
2. The live demo is deployed through GitHub Pages.
3. Runtime behavior is protected by tests for date logic, app shell integrity, safety boundaries, and release metadata.
4. Sensitive behavior is documented before implementation.
5. The project keeps a strict boundary against silent outbound communication and hidden health-data access.
6. Project impact and short-term maintenance commitments are documented in `docs/project-impact.md`.

## Short Fallback Answer

Life Countdown is a working open-source PWA for life countdown and daily safety check-ins. It helps older adults and people living alone send user-confirmed check-ins to trusted contacts while staying local-first and privacy-conscious. The project has a live GitHub Pages demo, release history, tests, privacy and security notes, safety guardian documentation, and wearable integration planning. ChatGPT Pro and Codex would help maintain tests, accessibility, privacy review, issue triage, and safe mobile or wearable integration research.
