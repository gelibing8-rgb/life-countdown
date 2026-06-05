# Changelog

## 0.3.7

Added:

1. Safety-boundary regression checks for README, privacy notes, and safety guardian documentation.

Changed:

1. Expanded `npm run check` to protect the no-silent-call, no-silent-message, and user-confirmation commitments.

## 0.3.6

Added:

1. Emergency help confirmation checkbox before generating call, SMS, or email links.

Changed:

1. Emergency links are cleared and disabled until the user explicitly confirms they need help.

## 0.3.5

Added:

1. One-click emergency help section for safety guardian scenarios.
2. `tel:`, emergency `sms:`, and emergency `mailto:` link generation.
3. Emergency message template that asks trusted contacts to contact or check on the user.

Safety:

1. The PWA still does not silently call or send messages; users must confirm in the phone, SMS, or email client.

## 0.3.4

Added:

1. Static app-shell checks for linked assets, script ordering, and service worker cache coverage.

Changed:

1. Expanded `npm run check` to catch missing PWA shell assets before deployment.

## 0.3.3

Added:

1. Strengthened Codex for Open Source application notes.
2. Added safety guardian and wearable integration documentation.
3. Added open-source maintenance plan, release checklist, GitHub Pages deployment notes, and suggested issue backlog.
4. Added pull request template and expanded issue templates for privacy, safety, and consent review.

## 0.3.2

Changed:

1. Opt GitHub Pages deployment actions into Node.js 24 to avoid upcoming Node.js 20 runner deprecation issues.

## 0.3.1

Fixed:

1. Use local calendar dates for daily safety check-in keys instead of UTC dates.

Added:

1. Small utility module for date helpers.
2. Basic tests for date key and countdown day calculations.

## 0.3.0

Added:

1. Safety guardian positioning for older adults and people living alone.
2. Safety guardian mode switch.
3. Daily first-open safety check-in generation.
4. Updated UI copy, README, and privacy notes for safety check-in boundaries.

## 0.2.0

Added:

1. Daily quote rotation.
2. Pin or unpin quote action.
3. Local contact phone and email fields.
4. Check-in message generation through `sms:` and `mailto:` links.
5. Updated privacy notes and Pro application notes.

## 0.1.0

Added:

1. Local-first PWA prototype.
2. Default 80-year life countdown.
3. Birth date, target age, reminder time, and daily focus fields.
4. Local storage and JSON export.
5. Offline cache through Service Worker.
