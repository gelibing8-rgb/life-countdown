# iOS Shortcut Check-In Flow

This document describes a low-risk iOS Shortcut path for Life Countdown. It is documentation only; the current PWA does not require iOS Shortcuts to function.

## Goal

Help users open Life Countdown or prepare a daily safety check-in from iPhone without adding backend services, hidden tracking, or silent outbound messages.

## Recommended first shortcut

Create a personal shortcut named `Life Countdown Check-In`:

1. Open URL: `https://gelibing8-rgb.github.io/life-countdown/`
2. Show notification: `Open Life Countdown and confirm today's check-in.`

This keeps the actual check-in inside the PWA, where the user can review the message and choose SMS or email.

## Optional reminder automation

Users may add a personal automation:

1. Trigger: time of day, for example morning;
2. Action: run `Life Countdown Check-In`;
3. Notification: remind the user to open the PWA;
4. No automatic message sending.

## Why not send automatically

Life Countdown should not use a shortcut to silently send a check-in message. The current safety model requires:

1. User review of the check-in content;
2. User choice of trusted contact channel;
3. Final confirmation in the system SMS or email client.

## Future extension ideas

Future versions may document:

1. A shortcut that opens the PWA from a Home Screen icon;
2. A shortcut that copies a check-in template to the clipboard;
3. Calendar or reminder creation for daily check-ins;
4. Apple Watch trigger research, only if accidental activation and consent risks are handled.

## Privacy boundary

The shortcut should not:

1. Read Apple Health data;
2. Read contacts without user action;
3. Send SMS or email silently;
4. Upload check-in history;
5. Replace the PWA's explicit safety confirmation flow.
