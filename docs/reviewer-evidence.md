# Reviewer Evidence

This page gives reviewers a short evidence map for Life Countdown.

## Project Links

1. Repository: https://github.com/gelibing8-rgb/life-countdown
2. Live demo: https://gelibing8-rgb.github.io/life-countdown/
3. Pull requests: https://github.com/gelibing8-rgb/life-countdown/pulls
4. Releases: https://github.com/gelibing8-rgb/life-countdown/releases
5. GitHub Pages workflow: https://github.com/gelibing8-rgb/life-countdown/actions/workflows/pages.yml
6. Submission draft: https://github.com/gelibing8-rgb/life-countdown/blob/main/docs/application-submission.md
7. Project impact: https://github.com/gelibing8-rgb/life-countdown/blob/main/docs/project-impact.md
8. Application status update: https://github.com/gelibing8-rgb/life-countdown/blob/main/docs/application-status-2026-07-30.md

## What Is Working Now

1. Local-first PWA for life countdown with a default 80-year horizon.
2. Daily quote rotation with an option to pin a preferred quote.
3. Trusted-contact phone and email fields stored in local browser storage.
4. Daily safety check-in message generation through user-confirmed `sms:` and `mailto:` links.
5. Emergency help links for `tel:`, urgent `sms:`, and urgent `mailto:` after explicit confirmation.
6. JSON export for user-controlled local data backup.
7. Offline app shell through a service worker.

## Safety And Privacy Boundaries

1. No account system.
2. No backend database.
3. No analytics or advertising SDK.
4. No silent phone calls, SMS messages, or emails.
5. No Apple Health, Health Connect, wearable, location, or contact-book access in the current version.
6. Future health or wearable integrations must require explicit consent and minimum necessary permissions.

## Maintenance Evidence

1. Release notes are tracked in `CHANGELOG.md`.
2. Project quality checks run through `npm run check`.
3. Safety boundaries are covered by `tests/safety-boundary.test.cjs`.
4. App shell integrity is covered by `tests/app-shell.test.cjs`.
5. Date and countdown behavior is covered by `tests/life-utils.test.cjs`.
6. Public release materials are covered by `tests/release-metadata.test.cjs`.
7. The application submission draft is kept in `docs/application-submission.md`.
8. Project impact and maintenance commitments are kept in `docs/project-impact.md`.
9. Current application-status notes are kept in `docs/application-status-2026-07-30.md`.

## Why This Fits Open Source Support

Life Countdown is intentionally small, user-facing, and privacy-first. The project uses open maintenance practices to build a careful pattern for daily safety check-ins for older adults, people living alone, and families that need low-friction care without hidden monitoring.

ChatGPT Pro and Codex support would directly improve practical maintenance work: issue triage, tests, accessibility review, privacy review, documentation, mobile integration research, and safe wearable integration planning.
