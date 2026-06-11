# Post-Build Launch Checklist

Do not add more V1 features. The product is sellable now.

Primary job now:

1. Demo.
2. Advance payment.
3. Customization.
4. Handover.
5. Referral.

## Final Product QA

Run this on a clean Google Sheet:

1. Create a new Google Sheet.
2. Open `Extensions > Apps Script`.
3. Paste `src/Code.gs`.
4. Add `src/appsscript.json` manifest if needed.
5. Save.
6. Reload the Sheet.
7. Confirm `DuesFlow` custom menu appears.
8. Run `Setup Demo Workbook`.
9. Run every menu item once.
10. Confirm no user data is deleted unexpectedly.
11. Open on phone using Google Sheets app.
12. Check dashboard and pending list readability.
13. Set `Config > Mode` to `Client` and confirm `Clear Demo Data Only` is blocked.
14. Add two students with the same name and confirm payment entry asks for Student ID instead of silently choosing one.
15. Confirm phone numbers stay readable and are not displayed in scientific notation.

Important file name:

```text
Code.gs
```

Do not name it:

```text
Code. Gs
Code.Gs
code.gs
```

## Sellable Demo Assets

Create these before messaging prospects:

| Asset | Purpose |
| --- | --- |
| Demo Google Sheet link | Show product live |
| 5 screenshots | Send quickly on WhatsApp |
| 30-second screen recording | Best for closing |
| Landing page link | Looks professional |
| Pricing image/text | Avoid price confusion |
| UPI/payment QR | Collect advance fast |

Demo Sheet sharing:

- `Anyone with the link can view`
- Do not give edit access to prospects.
- Keep one private master template.

## First Paid Offer

Use only this offer first:

```text
Standard Setup - ₹999
```

Includes:

- Student list setup
- Payment tracker
- Dashboard
- WhatsApp reminder messages
- Monthly report
- Pending fee list
- One revision

Payment rule:

```text
₹500 advance before customization
₹499 before final handover
```

Do not start custom work without advance.

## First 48-Hour Sales Plan

### Day 1

Find 50 prospects:

- Tuition teachers
- Small coaching centers
- Spoken English institutes
- Computer training centers
- Music/dance teachers

Sources:

- Home tutors
- Google Maps
- Instagram
- WhatsApp groups
- Facebook local groups
- Friends/family contacts
- Nearby tuition boards/posters

Send the first message to all 50.

### Day 2

Follow up with anyone who:

- Saw but did not reply
- Asked price
- Asked "what is this?"
- Said "I use notebook"
- Said "later"

Goal:

```text
50 messages -> 10 replies -> 5 demos -> 1 paid advance
```

## Sales Messages

### First Message

```text
Hi, I made DuesFlow, a simple fee collection tracker for tuition centers.

It shows:
- who is pending
- total monthly collection
- who paid
- ready-to-copy WhatsApp reminder messages

I’m setting it up for a few centers for ₹999. I can show you a demo. Would this be useful for your classes?
```

### When They Ask Price

```text
The Standard setup is ₹999.

It includes student list, payment tracker, dashboard, pending list, WhatsApp reminder messages, and monthly report.

I take ₹500 advance before customization and ₹499 before final handover. I can show you the demo first.
```

### Closing Message For Advance

```text
Okay, I can customize it for your class.

To start, please send:
- teacher/business name
- student names
- monthly fee amount
- batch/class names if any
- current pending fee details if any

Payment is ₹500 advance now and ₹499 before final handover.

You can pay by UPI here: [YOUR UPI ID / QR]
```

## Demo Script

Keep the demo under 2 minutes.

```text
This is made for fee collection tracking.

Here you can see all students and their monthly fee.

This dashboard shows total collection, pending amount, and payment status.

This Pending tab shows only students who have not paid or paid partially.

This column gives ready-to-copy WhatsApp reminder messages.

I will customize this with your student names, fees, and class details.

The setup is ₹999. I start after ₹500 advance and hand over after final payment.
```

## What To Customize After Payment

Ask for only the minimum details:

- Teacher/business name
- Student names
- Batch/class names
- Monthly fee amount
- Phone numbers, optional
- Different fee amounts, if any
- Current pending payments, if any
- Reminder message style

Do not ask too many questions. The client may drop off.

## Delivery Process

After advance:

1. Make a copy of your template.
2. Rename it with client name.
3. Add their Config details.
4. Add students.
5. Add current payment data.
6. Run dashboard/pending/report generation.
7. Check everything.
8. Send preview screenshots.
9. Ask for final ₹499.
10. After final payment, share edit access.

Access rule:

```text
Final handover only after full payment.
```

## Handover Message

```text
Your DuesFlow setup is ready.

Link: [GOOGLE SHEET LINK]

Set up completed:
- student list
- payment tracker
- dashboard
- pending fee list
- WhatsApp reminder messages
- monthly report

How to use:
1. Add new students in the Students tab.
2. Add payments using the DuesFlow menu.
3. Click Refresh Dashboard to update totals.
4. Open Pending tab to see unpaid/partial students.
5. Copy WhatsApp messages and send manually.

Please do not edit formula/header rows unless needed.

One revision is included within 7 days.

If this is useful, please send a small feedback message. Also, if you know another center who needs this, please share my contact.
```

## Do Not Do Now

Avoid:

- Automatic WhatsApp sending
- Login system
- Razorpay integration
- Mobile app
- Multi-branch version
- AI reports
- Spending money on domain or ads
