# Testing Checklist

| Test Case | Action | Expected Result | Status |
| --- | --- | --- | --- |
| Blank setup | Run `Setup Demo Workbook` on a new Sheet | All tabs created with headers and demo data |  |
| Menu load | Open/reload Google Sheet | `Fee Tracker` menu appears |  |
| Config fallback | Delete one Config value and refresh | System uses safe default |  |
| Dashboard refresh | Click `Refresh Dashboard` | Correct totals shown for selected month/year |  |
| Pending generation | Click `Generate Pending List` | Only Pending and Partial students appear |  |
| WhatsApp messages | Generate Pending List | Each pending/partial student has message text |  |
| Monthly report | Click `Generate Monthly Report` | Month-wise summary appears |  |
| Add valid payment | Use Add Payment Entry with valid data | New payment row added and dashboard updates |  |
| Empty student name | Submit blank student name | User sees validation error |  |
| Invalid amount | Enter non-number amount | User sees validation error |  |
| Partial payment | Amount paid less than fee | Status becomes Partial |  |
| Full payment | Amount paid equals fee | Status becomes Paid |  |
| Overpayment | Amount paid greater than fee | Status becomes Overpaid |  |
| Pending payment | Amount paid is zero | Status becomes Pending |  |
| Missing sheet | Delete Pending tab and regenerate | Sheet is recreated safely |  |
| Clear demo data | Click Clear Demo Data Only | Confirmation appears before clearing |  |
| Client mode clear block | Set Config Mode to Client, click Clear Demo Data Only | Clear action is blocked |  |
| Duplicate student name | Add two students with same name, use Add Payment Entry by name | User is told to use Student ID |  |
| Phone number format | Enter 10-digit phone number | Number stays readable, not scientific notation |  |
| Audit logging | Run any menu action | Audit Log receives timestamped entry |  |
| Mobile readability | Open Sheet on phone | Main tabs are readable enough |  |
| Client handover | Read README only | User can understand basic usage |  |
| Demo sharing | Share demo Sheet | Prospect gets view-only access, not edit access |  |
| Authorization note | Read README | First-run Google permission note is clear |  |

## Manual Totals Check

Default current demo month (`June 2026`) should create 20 current-month payment rows:

- 8 Paid
- 5 Pending
- 5 Partial
- 2 Overpaid

Dashboard counts should match selected Config month/year.
