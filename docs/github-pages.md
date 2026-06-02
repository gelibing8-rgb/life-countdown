# GitHub Pages Deployment

Life Countdown is designed to be published as a static PWA through GitHub Pages.

## Target URL

```text
https://gelibing8-rgb.github.io/life-countdown/
```

## Deployment workflow

The repository includes a GitHub Actions workflow:

```text
.github/workflows/pages.yml
```

It deploys the repository root to GitHub Pages on pushes to `main`.

## Repository settings checklist

In GitHub repository settings:

1. Open `Settings`;
2. Open `Pages`;
3. Set source to `GitHub Actions`;
4. Confirm the `Deploy GitHub Pages` workflow has run successfully;
5. Open the target URL on desktop and mobile;
6. Confirm the PWA can load, save settings locally, and show the preview correctly.

## Manual verification

Before relying on the public demo, verify:

1. The app opens without console errors;
2. `assets/manifest.webmanifest` is reachable;
3. `sw.js` is reachable;
4. The birthday and target age form saves locally;
5. Safety guardian mode does not send messages silently;
6. SMS and email actions require user confirmation in the system client.

## Why this matters for open-source review

A public demo makes the project easier to evaluate. Reviewers can see that the project is not only an idea or proposal, but a working privacy-first PWA with a clear maintenance path.
