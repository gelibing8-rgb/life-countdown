# Suggested Issue Backlog

These issues are ready to create in GitHub after the documentation update is pushed. They show that Life Countdown has a concrete open-source maintenance path.

## 1. Add accessibility checklist for older users

Label suggestion: `accessibility`, `documentation`

Goal:

Create a checklist for font size, tap targets, color contrast, form labels, focus states, and mobile readability.

Why it matters:

The safety guardian workflow may be used by older adults, so the app should be readable and operable on small screens.

## 2. Document iOS Shortcut check-in flow

Label suggestion: `integration`, `documentation`

Goal:

Document a low-risk iOS Shortcut flow that opens the PWA or prepares a user-confirmed daily check-in.

Why it matters:

This keeps phone integration practical without requiring health-data access or a backend.

## 3. Research Android widget options

Label suggestion: `integration`, `research`

Goal:

Compare simple Android widget paths for showing remaining days or opening the PWA.

Why it matters:

Android widget support is a natural next step for a life countdown tool, but should be scoped before implementation.

## 4. Expand tests for daily safety check-in date keys

Label suggestion: `testing`, `safety`

Goal:

Add tests for local calendar date behavior around midnight, timezone differences, and repeated daily opens.

Why it matters:

Incorrect date keys could create confusing safety check-in behavior.

## 5. Add privacy impact checklist for future integrations

Label suggestion: `privacy`, `documentation`

Goal:

Create a checklist for any future feature that touches contacts, notifications, health data, wearable devices, or backend services.

Why it matters:

This helps contributors avoid hidden tracking, unclear consent, or unnecessary data collection.

## 6. Verify GitHub Pages PWA behavior

Label suggestion: `deployment`, `pwa`

Goal:

After deployment, verify that the public demo loads, saves local settings, exposes the manifest, registers the service worker, and works on mobile.

Why it matters:

A working public demo improves project credibility and makes review easier.
