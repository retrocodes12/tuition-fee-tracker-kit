# DuesFlow Kit

Google Sheets + Apps Script product for tuition centers and small coaching centers.

Target first paid offer: `₹999` setup. It tracks students, monthly fees, paid/partial/pending/overpaid status, collection totals, pending dues, WhatsApp reminder text, and monthly reports.

## Files

- `src/Code.gs` - single Apps Script file to paste into Google Sheets Apps Script.
- `src/appsscript.json` - Apps Script manifest.
- `docs/client-handover.md` - message and handover flow for a paid client.
- `docs/launch-checklist.md` - final QA, outreach, demo, and delivery plan.
- `docs/testing-checklist.md` - manual QA checklist.
- `docs/template-product-plan.md` - reusable digital template plan.
- `landing/index.html` - simple landing page for selling setup service.
- `video/working-animation.html` - source for animated working demo.
- `assets/tuition-fee-tracker-working-demo.mp4` - rendered animated demo video after running the render script.

## Install In Google Sheets

1. Create a blank Google Sheet.
2. Open `Extensions > Apps Script`.
3. Paste `src/Code.gs` into `Code.gs`.
4. Copy `src/appsscript.json` into project settings manifest if needed.
5. Save project.
6. Reload Google Sheet.
7. Use `DuesFlow > Setup Demo Workbook`.

## First-Run Authorization

When you run the tracker for the first time, Google may ask for permission. This is required because the script edits this Google Sheet. It does not send WhatsApp messages, call external services, use Gmail, or connect to any database.

Use your own Google account and only open the tracker from the Google Sheet shared with you.

## Sellable V1 Scope

Includes:

- Prepared workbook tabs.
- Demo data.
- Custom menu.
- Dashboard refresh.
- Pending list generator.
- Copy-paste WhatsApp reminders.
- Monthly report.
- Basic payment entry prompts.
- README tab.
- Audit log.

Excludes:

- Login, database, payment gateway, automatic WhatsApp sending, AI, mobile app, complex accounting.

## Customization For Client

Edit only:

- `Config` values.
- `Students` rows.
- `Message Templates` reminder text.

Avoid renaming tabs or changing header rows.

Set `Config > Mode` to `Demo` while testing. Change it to `Client` after paid handover. In `Client` mode, `Clear Demo Data Only` is blocked to reduce accidental data loss.

Enter phone numbers as text, for example `9876543210`.

## Demo Sharing

Keep a private master template. Create a separate demo copy for prospects and share it as view-only:

```text
Anyone with the link can view
```

Do not give edit access during sales demo.

## Disclaimer

This tracker helps with fee tracking and basic reports. Please verify totals before making financial decisions. It is not accounting, tax, or GST software.

## Verification

Run checklist in `docs/testing-checklist.md` on a blank Google Sheet before client handover.

## Render Animation Video

```bash
node scripts/render-working-video.mjs
```

Output:

```text
assets/tuition-fee-tracker-working-demo.mp4
```
