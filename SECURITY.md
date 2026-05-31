# Security Policy

Life Countdown is a local-first PWA and currently has no backend service.

## Supported Version

The latest `main` branch is the supported development version.

## Reporting a Vulnerability

Please open a GitHub issue for non-sensitive security concerns.

For sensitive reports, contact the maintainer through the GitHub profile associated with this repository.

## Current Security Boundaries

1. No server-side account system.
2. No analytics or advertising SDK.
3. No automatic outbound message sending.
4. No health data access in the current version.
5. Contact phone and email are stored only in browser localStorage.

Future integrations with Apple Health, Health Connect, Apple Watch, Wear OS, or vendor wearable APIs must use explicit user permission and minimal data access.

