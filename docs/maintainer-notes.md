# Maintainer Notes

Life Countdown is maintained as a small, privacy-first open-source project.

## Maintenance Workflow

1. Use pull requests for visible changes.
2. Keep changes small and reviewable.
3. Run `npm run check` before merging JavaScript changes.
4. Keep privacy notes updated whenever stored data changes.
5. Avoid adding backend services unless there is a clear user benefit.
6. Treat safety-guardian behavior as a sensitive workflow: avoid silent outbound messages, unclear consent, or hidden tracking.

## Near-Term Tasks

1. Add basic unit tests for date calculations.
2. Add accessibility checks for form labels and color contrast.
3. Add GitHub Pages deployment verification.
4. Add an English privacy summary.
5. Document iOS Shortcut and Android widget integration options.
6. Add older-adult friendly UI checks for text size, contrast, and large tap targets.
7. Prototype explicit-consent notification paths for trusted contacts.

## Review Standards

Pull requests should explain:

1. What changed.
2. Why it matters.
3. Whether local storage, notification, or outbound link behavior changed.
4. How the change was tested.
5. Whether safety-guardian behavior could create false alarms, privacy leakage, or accidental messages.
