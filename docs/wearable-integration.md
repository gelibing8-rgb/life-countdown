# Wearable Integration Notes

Life Countdown may integrate with phones and wearable devices in future versions. The integration path should remain low-risk, permission-light, and privacy-first.

## Principles

1. Prefer display-only integrations before data-reading integrations;
2. Prefer user-controlled shortcuts and widgets before backend services;
3. Avoid reading health data unless the benefit is clear and consent is explicit;
4. Avoid reverse engineering private wearable APIs;
5. Document every permission before implementing it.

## Candidate paths

## iOS

1. PWA added to Home Screen;
2. iOS Shortcuts for opening the app or preparing a daily check-in;
3. Calendar or reminder export if useful;
4. Apple Watch complication research after the phone workflow is stable.

## Android

1. PWA installation;
2. Android widget research;
3. Notification behavior review;
4. Health Connect research only after documenting the data need.

## Wear OS and Apple Watch

Potential wearable behavior should start with:

1. Showing remaining days or weekly progress;
2. Opening the phone app;
3. Triggering a user-confirmed check-in;
4. Avoiding silent contact notification.

## Health data boundary

The current project does not read Apple Health, Health Connect, wearable sensor data, or activity records.

If future versions read health-related data, the project must document:

1. What data is requested;
2. Why it is needed;
3. Where it is stored;
4. Whether it leaves the device;
5. How users can revoke access;
6. How users can delete related data.
