# Privacy Impact Checklist

Use this checklist before adding features that touch contacts, notifications, health data, wearable devices, backend services, or outbound communication.

## Data inventory

For every proposed feature, document:

1. What data is collected or generated;
2. Whether the data is stored;
3. Where the data is stored;
4. Whether the data leaves the device;
5. Who can access the data;
6. How the user can remove the data.

## Local-first default

The default answer should remain:

1. No account;
2. No backend;
3. No tracking;
4. No silent outbound messages;
5. No health-data access unless explicitly justified.

If a feature requires changing any of these defaults, it should be documented before implementation.

## Consent review

A feature needs explicit consent if it:

1. Stores trusted contact details;
2. Opens or prepares phone, SMS, or email actions;
3. Sends notifications;
4. Reads health, activity, or wearable data;
5. Shares data with a backend or third party;
6. Changes safety guardian behavior.

## Safety guardian review

Before changing safety guardian behavior, confirm:

1. The app does not silently call, send SMS, or send email;
2. The user confirms outbound actions in the system client;
3. Emergency actions require explicit in-app confirmation;
4. Missing check-ins are not treated as proof of danger;
5. Completed check-ins are not treated as proof of health or location.

## Release requirement

If the feature changes stored data, contacts, notifications, health data, wearable data, backend behavior, or outbound message behavior:

1. Update `PRIVACY.md`;
2. Update `docs/safety-guardian.md` if safety behavior changes;
3. Add or update tests where possible;
4. Mention the privacy impact in `CHANGELOG.md`;
5. Include rollback notes in the pull request.
