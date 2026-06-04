# Safety Guardian Notes

Life Countdown includes a safety guardian workflow for people who want a low-friction daily check-in with trusted contacts.

## Scope

The current version only generates user-confirmed SMS, email, and phone links. It does not silently call, send messages, notify contacts in the background, upload contact data, or monitor users.

## Intended users

1. People living alone;
2. Older adults who want a lightweight daily routine;
3. Family members or trusted contacts who want low-disturbance reassurance;
4. Care scenarios where explicit consent is possible.

## Current behavior

1. The user enables safety guardian mode;
2. Trusted contact phone numbers or email addresses are stored locally in the browser;
3. On the first daily open, the app can prepare a check-in message;
4. The user must choose SMS or email and confirm sending in their own device app;
5. The user can generate emergency phone, SMS, and email links for trusted contacts;
6. The web app does not call or send messages by itself.

## Emergency help workflow

The one-click emergency section is intended as a lightweight help request, not a certified emergency-response system.

Current behavior:

1. Uses the existing trusted contact phone and email fields;
2. Generates a `tel:` link for calling the contact;
3. Generates an emergency `sms:` link with a help request template;
4. Generates an emergency `mailto:` link with the same help request;
5. Requires the user to check an in-app confirmation box before links are generated;
6. Requires user confirmation in the phone, SMS, or email client.

## Risk boundaries

1. The app is not an emergency response system;
2. A missing check-in does not prove danger;
3. A completed check-in does not prove health or location;
4. The workflow should not be used for coercive monitoring;
5. Contact information should remain local unless a future version has explicit consent and clear deletion controls;
6. Emergency help actions should remain explicit and user-confirmed unless a future native app has a clear legal, consent, and safety design;
7. The app should reduce accidental emergency actions with clear confirmation, large labels, and cancellation options.

## Future review questions

1. Can a user clearly disable guardian mode?
2. Can a user remove contacts?
3. Is every outbound message confirmed by the user?
4. Could the UI create unnecessary anxiety?
5. Could a reminder or non-check-in create false alarms?
6. Does any future backend collect more data than necessary?
7. Can a wearable-triggered emergency action be cancelled if triggered accidentally?
