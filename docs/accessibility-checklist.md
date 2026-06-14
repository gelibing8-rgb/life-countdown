# Accessibility Checklist

Life Countdown may be used by older adults, people living alone, and mobile-first users. Accessibility checks should be part of every visible UI change.

## Text and readability

1. Keep core text readable on small phone screens.
2. Avoid relying on very small captions for important safety or privacy information.
3. Use clear labels for birth date, target age, reminder time, trusted contacts, and emergency actions.
4. Keep button text direct and action-oriented.
5. Avoid presenting the countdown as a medical or life-expectancy prediction.

## Tap targets

1. Primary controls should be large enough for touch input.
2. Emergency and check-in actions should not sit too close to unrelated buttons.
3. Destructive or sensitive actions should have enough spacing to reduce accidental taps.
4. Links that open phone, SMS, or email clients should be visibly different from passive text.

## Contrast and focus

1. Text must remain legible in the dark visual theme.
2. Interactive controls should have visible focus states.
3. Disabled emergency actions should look disabled and should not be easy to mistake for active controls.
4. Error, warning, and safety-boundary messages should not rely on color alone.

## Forms

1. Every input should have a visible label.
2. Placeholder text should not be the only explanation.
3. Optional contact fields should be clearly optional.
4. Saved state should be understandable without requiring developer tools.

## Safety guardian workflow

1. Check-in links should make clear that the user still confirms sending in the system SMS or email client.
2. Emergency actions should require explicit in-app confirmation before links are generated.
3. The app should not imply that a completed check-in proves health, location, or safety.
4. The app should not imply that a missed check-in proves danger.

## Manual test routine

Before release:

1. Test on a narrow mobile viewport.
2. Test with larger browser text size.
3. Navigate major controls with keyboard focus.
4. Confirm emergency links are not active until confirmation.
5. Confirm SMS and email links still require system-client confirmation.
