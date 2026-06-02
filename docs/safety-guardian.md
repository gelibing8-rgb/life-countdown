# Safety Guardian Notes

Life Countdown includes a safety guardian workflow for people who want a low-friction daily check-in with trusted contacts.

## Scope

The current version only generates user-confirmed SMS and email links. It does not silently send messages, notify contacts in the background, upload contact data, or monitor users.

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
5. The web app does not send messages by itself.

## Risk boundaries

1. The app is not an emergency response system;
2. A missing check-in does not prove danger;
3. A completed check-in does not prove health or location;
4. The workflow should not be used for coercive monitoring;
5. Contact information should remain local unless a future version has explicit consent and clear deletion controls.

## Future review questions

1. Can a user clearly disable guardian mode?
2. Can a user remove contacts?
3. Is every outbound message confirmed by the user?
4. Could the UI create unnecessary anxiety?
5. Could a reminder or non-check-in create false alarms?
6. Does any future backend collect more data than necessary?
