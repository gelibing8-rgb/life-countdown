# Android Widget Options

This document scopes low-risk Android widget paths for Life Countdown before implementation.

## Goal

Show life countdown or open the PWA from Android without adding backend services, hidden tracking, health-data access, or unnecessary permissions.

## Recommended first path

Start with a documentation-only and PWA-first path:

1. Install the PWA from Chrome or another supported Android browser;
2. Add the installed app icon to the Home Screen;
3. Use the PWA as the source of truth for birth date, target age, reminders, contacts, and check-ins;
4. Keep safety guardian and emergency actions inside the PWA so the existing confirmation boundaries remain intact.

This is the lowest-risk path because it does not require a native Android app, widget provider, backend service, or health-data integration.

## Candidate widget paths

## 1. PWA shortcut

Scope:

1. Home Screen icon opens the PWA;
2. No background data access;
3. No extra permissions;
4. No health-data access.

Tradeoff:

This is simple and privacy-preserving, but it cannot display live countdown data directly inside a native widget.

## 2. Static native widget prototype

Scope:

1. A future Android wrapper could expose a widget that opens the PWA;
2. The widget may show static copy such as `Open Life Countdown`;
3. Countdown calculation remains inside the PWA.

Tradeoff:

This adds native app maintenance cost and should not be the first implementation unless there is real user demand.

## 3. Dynamic native widget

Scope:

1. A native Android app stores the target date locally;
2. A widget displays remaining days;
3. The app and widget require clear storage and deletion behavior.

Tradeoff:

This provides better widget behavior but changes the project scope. It should require a separate privacy review before implementation.

## Health Connect boundary

Life Countdown does not need Health Connect for the current countdown or safety check-in workflow.

Do not request Health Connect permissions unless a future feature has a clear user benefit and a documented data purpose. A simple countdown or check-in reminder does not justify reading health, activity, sleep, heart-rate, or location-related data.

## Recommendation

For the next release cycle:

1. Keep Android support PWA-first;
2. Document installation and Home Screen use;
3. Avoid native widget implementation until there is real user demand;
4. Keep all check-in and emergency flows user-confirmed inside the PWA;
5. Revisit dynamic widgets only after the privacy impact checklist is applied.
