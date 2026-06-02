# Release Checklist

Use this checklist before publishing a new Life Countdown release.

## Before release

1. Run `npm run check`;
2. Open the app locally;
3. Test birthday and target age saving;
4. Test JSON export;
5. Test safety guardian mode;
6. Confirm SMS and email links still require user confirmation;
7. Check `PRIVACY.md` if stored data changed;
8. Update `CHANGELOG.md`;
9. Confirm GitHub Pages workflow status after pushing.

## Release notes should include

1. What changed;
2. Why it matters;
3. Whether privacy, contacts, notifications, health data, or outbound messages changed;
4. How it was tested;
5. Known limitations.

## Do not release if

1. The app silently sends messages;
2. The app starts collecting data without documentation;
3. Safety guardian behavior can create unclear false alarms;
4. The app reads health or wearable data without explicit consent documentation;
5. Basic date and countdown tests fail.
