# Open Source Maintenance Plan

This document explains how Life Countdown should be maintained as a small, privacy-first open-source project.

## Maintenance goals

1. Keep the app usable without an account or backend;
2. Keep personal data local by default;
3. Make sensitive workflows explicit and user-confirmed;
4. Improve accessibility for older users and mobile users;
5. Keep code changes small, tested, and reviewable;
6. Document every wearable, health-data, or notification integration before implementation.

## Weekly maintenance routine

1. Review new issues and classify them as bug, feature, privacy, accessibility, documentation, or integration research;
2. Run `npm run check` before merging JavaScript changes;
3. Check whether privacy notes need updates after any stored-data change;
4. Keep release notes short and factual;
5. Prefer one small PR per behavior change;
6. Close or defer features that require unclear consent, hidden tracking, or unnecessary backend storage.

## Issue priorities

Highest priority:

1. Date and time calculation bugs;
2. Local storage loss or incorrect export behavior;
3. Safety guardian behavior that could mislead users or create false alarms;
4. Privacy boundary regressions;
5. Accessibility issues affecting older users.

Medium priority:

1. PWA installation improvements;
2. Documentation improvements;
3. iOS Shortcut and Android widget examples;
4. Wearable display research;
5. Test coverage.

Lower priority:

1. Visual refinements;
2. Optional personalization;
3. Non-essential integrations.

## Release policy

Patch releases should contain small fixes, documentation updates, or test improvements.

Minor releases should contain visible workflow improvements, such as safety guardian improvements, mobile integration examples, or accessibility upgrades.

Major releases should only be used if the project changes its privacy model, storage model, backend assumptions, or health-data integration scope.

## Review questions before merging

1. Does this change store new data?
2. Does this change send or prepare outbound messages?
3. Does this change notification behavior?
4. Does this change trusted contact handling?
5. Does this change health or wearable data assumptions?
6. Can the change be tested locally?
7. Can the change be rolled back cleanly?
