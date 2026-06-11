const SHEETS = {
  README: 'README',
  CONFIG: 'Config',
  STUDENTS: 'Students',
  PAYMENTS: 'Payments',
  DASHBOARD: 'Dashboard',
  PENDING: 'Pending',
  REPORTS: 'Reports',
  TEMPLATES: 'Message Templates',
  AUDIT: 'Audit Log',
};

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const STUDENT_HEADERS = [
  'Student ID',
  'Student Name',
  'Parent/Guardian Name',
  'Phone Number',
  'Batch/Class',
  'Monthly Fee',
  'Status',
  'Notes',
];

const PAYMENT_HEADERS = [
  'Payment ID',
  'Student ID',
  'Student Name',
  'Month',
  'Year',
  'Fee Amount',
  'Amount Paid',
  'Pending Amount',
  'Payment Status',
  'Payment Mode',
  'Payment Date',
  'Notes',
];

const PENDING_HEADERS = [
  'Student ID',
  'Student Name',
  'Phone Number',
  'Batch/Class',
  'Month',
  'Year',
  'Fee Amount',
  'Amount Paid',
  'Pending Amount',
  'Payment Status',
  'WhatsApp Message',
];

const REPORT_HEADERS = [
  'Month',
  'Year',
  'Total Expected',
  'Total Collected',
  'Total Pending',
  'Paid Count',
  'Partial Count',
  'Pending Count',
  'Overpaid Count',
];

const DEMO_STUDENTS = [
  ['STU001', 'Aarav Nair', 'Rajesh Nair', '9876543210', 'Class 8 Maths', 1000, 'Active', 'Demo data'],
  ['STU002', 'Ananya Menon', 'Deepa Menon', '9876543211', 'Class 9 Science', 1200, 'Active', 'Demo data'],
  ['STU003', 'Rohan Sharma', 'Sunil Sharma', '9876543212', 'Class 10 Maths', 1500, 'Active', 'Demo data'],
  ['STU004', 'Meera Iyer', 'Lakshmi Iyer', '9876543213', 'Plus One Commerce', 1800, 'Active', 'Demo data'],
  ['STU005', 'Kabir Khan', 'Ayesha Khan', '9876543214', 'Spoken English', 900, 'Active', 'Demo data'],
  ['STU006', 'Diya Patel', 'Kiran Patel', '9876543215', 'Class 8 Maths', 1000, 'Active', 'Demo data'],
  ['STU007', 'Arjun Pillai', 'Suresh Pillai', '9876543216', 'Class 9 Science', 1200, 'Active', 'Demo data'],
  ['STU008', 'Nandana Das', 'Mohan Das', '9876543217', 'Class 10 Maths', 1500, 'Active', 'Demo data'],
  ['STU009', 'Vivaan Reddy', 'Prakash Reddy', '9876543218', 'Plus One Commerce', 1800, 'Active', 'Demo data'],
  ['STU010', 'Sara Thomas', 'Anil Thomas', '9876543219', 'Spoken English', 900, 'Active', 'Demo data'],
  ['STU011', 'Ishaan Gupta', 'Neha Gupta', '9876543220', 'Class 8 Maths', 1000, 'Active', 'Demo data'],
  ['STU012', 'Aditi Rao', 'Kavitha Rao', '9876543221', 'Class 9 Science', 1200, 'Active', 'Demo data'],
  ['STU013', 'Dev Verma', 'Ritu Verma', '9876543222', 'Class 10 Maths', 1500, 'Active', 'Demo data'],
  ['STU014', 'Sneha Kumar', 'Ajay Kumar', '9876543223', 'Plus One Commerce', 1800, 'Active', 'Demo data'],
  ['STU015', 'Manav Joshi', 'Pooja Joshi', '9876543224', 'Spoken English', 900, 'Active', 'Demo data'],
  ['STU016', 'Pooja Singh', 'Maya Singh', '9876543225', 'Class 8 Maths', 1000, 'Active', 'Demo data'],
  ['STU017', 'Karthik Babu', 'Ramesh Babu', '9876543226', 'Class 9 Science', 1200, 'Active', 'Demo data'],
  ['STU018', 'Riya Jain', 'Amit Jain', '9876543227', 'Class 10 Maths', 1500, 'Active', 'Demo data'],
  ['STU019', 'Aditya Bose', 'Soma Bose', '9876543228', 'Plus One Commerce', 1800, 'Active', 'Demo data'],
  ['STU020', 'Fatima Ali', 'Sameer Ali', '9876543229', 'Spoken English', 900, 'Active', 'Demo data'],
];

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Fee Tracker')
    .addItem('Setup Demo Workbook', 'setupDemoWorkbook')
    .addSeparator()
    .addItem('Add Payment Entry', 'addPaymentEntry')
    .addItem('Refresh Dashboard', 'refreshDashboard')
    .addItem('Generate Pending List', 'generatePendingList')
    .addItem('Generate WhatsApp Messages', 'generateWhatsAppMessages')
    .addItem('Generate Monthly Report', 'generateMonthlyReport')
    .addSeparator()
    .addItem('Clear Demo Data Only', 'clearDemoData')
    .addToUi();
}

function setupDemoWorkbook() {
  try {
    createRequiredSheets();
    createReadmeSheet();
    createConfigSheet();
    createStudentsSheet();
    createPaymentsSheet();
    createDashboardSheet();
    createPendingSheet();
    createReportsSheet();
    createMessageTemplatesSheet();
    createAuditLogSheet();
    refreshDashboard();
    generatePendingList();
    generateMonthlyReport();
    protectImportantRanges();
    logAction('Setup Demo Workbook', 'Success', 'Demo workbook created or refreshed.');
    SpreadsheetApp.getUi().alert('Fee Tracker setup complete.');
  } catch (error) {
    logAction('Setup Demo Workbook', 'Error', error.message);
    SpreadsheetApp.getUi().alert('Setup failed: ' + error.message);
  }
}

function createRequiredSheets() {
  Object.keys(SHEETS).forEach(function (key) {
    getOrCreateSheet(SHEETS[key]);
  });
}

function createReadmeSheet() {
  const sheet = getOrCreateSheet(SHEETS.README);
  sheet.clear();
  const rows = [
    ['Tuition Fee Tracker - Simple Guide'],
    ['What this tracker does'],
    ['Tracks students, monthly fees, paid/pending status, pending reminders, and monthly reports.'],
    ['How to add students'],
    ['Go to Students tab. Add a new row with Student ID, name, phone number, batch, monthly fee, and Active status.'],
    ['How to enter payments'],
    ['Use Fee Tracker > Add Payment Entry. Enter student name, month, year, amount paid, payment mode, payment date, and notes.'],
    ['How to refresh dashboard'],
    ['Use Fee Tracker > Refresh Dashboard. It uses Report Month and Report Year from Config.'],
    ['How to check pending fees'],
    ['Use Fee Tracker > Generate Pending List. Pending and partial payments appear in Pending tab.'],
    ['How to copy WhatsApp messages'],
    ['Open Pending tab, copy the WhatsApp Message cell, and send manually. This tracker does not send messages automatically.'],
    ['First-run Google authorization'],
    ['Google may ask for permission the first time you run the tracker. This is required because the script edits this Google Sheet. It does not send WhatsApp messages or access external services.'],
    ['What not to edit'],
    ['Do not rename tabs or edit header rows. Edit Config values only in the Value column.'],
    ['Demo mode and client mode'],
    ['Keep Config > Mode as Demo while testing. Change it to Client after final handover. Client mode blocks Clear Demo Data Only.'],
    ['Phone number format'],
    ['Enter phone numbers as text, for example 9876543210. This tracker does not use phone numbers for automatic WhatsApp sending.'],
    ['Disclaimer'],
    ['This tracker helps with fee tracking and basic reports. Please verify totals before making financial decisions. It is not accounting, tax, or GST software.'],
    ['Support note'],
    ['For help, contact the support number/email stored in Config. One revision is included in Standard package.'],
  ];
  sheet.getRange(1, 1, rows.length, 1).setValues(rows);
  sheet.getRange('A1').setFontSize(18).setFontWeight('bold').setBackground('#1f4e79').setFontColor('#ffffff');
  for (let row = 2; row <= rows.length; row += 2) {
    sheet.getRange(row, 1).setFontWeight('bold').setBackground('#d9ead3');
  }
  sheet.setColumnWidth(1, 760);
}

function createConfigSheet() {
  const sheet = getOrCreateSheet(SHEETS.CONFIG);
  if (!hasUsefulData(sheet)) {
    sheet.clear();
    const rows = [
      ['Setting', 'Value', 'Notes'],
      ['Business Name', 'Demo Tuition Center', 'Shown on dashboard and reminder messages'],
      ['Mode', 'Demo', 'Use Demo while testing. Change to Client after paid handover.'],
      ['Teacher Name', 'Teacher', 'Owner or teacher name'],
      ['Default Monthly Fee', 1000, 'Used when student fee is blank'],
      ['Currency Symbol', '₹', 'Example: ₹'],
      ['Payment Due Day', 10, 'Reminder reference day'],
      ['Report Month', 'June', 'Dashboard month'],
      ['Report Year', 2026, 'Dashboard year'],
      ['Reminder Message Language', 'English', 'English in V1'],
      ['WhatsApp Reminder Prefix', 'Hi, this is a gentle reminder that the tuition fee for', 'Prefix used in generated messages'],
      ['WhatsApp Reminder Closing', 'Kindly clear it when possible. Thank you', 'Closing used in generated messages'],
      ['Support Contact', 'Your WhatsApp number here', 'Seller support contact'],
    ];
    sheet.getRange(1, 1, rows.length, 3).setValues(rows);
  }
  ensureConfigRows([
    ['Mode', 'Demo', 'Use Demo while testing. Change to Client after paid handover.'],
    ['Support Contact', 'Your WhatsApp number here', 'Seller support contact'],
  ]);
  formatHeader(sheet, 1, 3);
  sheet.autoResizeColumns(1, 3);
}

function createStudentsSheet() {
  const sheet = getOrCreateSheet(SHEETS.STUDENTS);
  if (!hasUsefulData(sheet)) {
    sheet.clear();
    sheet.getRange(1, 1, 1, STUDENT_HEADERS.length).setValues([STUDENT_HEADERS]);
    sheet.getRange(2, 1, DEMO_STUDENTS.length, STUDENT_HEADERS.length).setValues(DEMO_STUDENTS);
  }
  formatHeader(sheet, 1, STUDENT_HEADERS.length);
  sheet.getRange('F:F').setNumberFormat('₹#,##0');
  sheet.getRange('D:D').setNumberFormat('@');
  applyValidation(sheet, 7, ['Active', 'Paused', 'Left']);
  sheet.autoResizeColumns(1, STUDENT_HEADERS.length);
}

function createPaymentsSheet() {
  const sheet = getOrCreateSheet(SHEETS.PAYMENTS);
  if (!hasUsefulData(sheet)) {
    sheet.clear();
    sheet.getRange(1, 1, 1, PAYMENT_HEADERS.length).setValues([PAYMENT_HEADERS]);
    const payments = buildDemoPayments();
    sheet.getRange(2, 1, payments.length, PAYMENT_HEADERS.length).setValues(payments);
  }
  formatHeader(sheet, 1, PAYMENT_HEADERS.length);
  sheet.getRange('F:H').setNumberFormat('₹#,##0');
  sheet.getRange('K:K').setNumberFormat('dd-mmm-yyyy');
  applyValidation(sheet, 9, ['Paid', 'Partial', 'Pending', 'Overpaid']);
  applyValidation(sheet, 10, ['Cash', 'UPI', 'Bank Transfer', 'Other']);
  sheet.autoResizeColumns(1, PAYMENT_HEADERS.length);
}

function createDashboardSheet() {
  const sheet = getOrCreateSheet(SHEETS.DASHBOARD);
  sheet.clear();
  sheet.getRange('A1').setValue('Tuition Fee Dashboard').setFontSize(18).setFontWeight('bold');
  sheet.getRange('A3:B13').setValues([
    ['Business Name', ''],
    ['Report Month/Year', ''],
    ['Total Students', ''],
    ['Active Students', ''],
    ['Total Expected Fees', ''],
    ['Total Collected', ''],
    ['Total Pending', ''],
    ['Paid Count', ''],
    ['Partial Count', ''],
    ['Pending Count', ''],
    ['Overpaid Count', ''],
  ]);
  sheet.getRange('D3:E7').setValues([
    ['Payment Mode', 'Collected'],
    ['Cash', ''],
    ['UPI', ''],
    ['Bank Transfer', ''],
    ['Other', ''],
  ]);
  sheet.getRange('G3:I3').setValues([['Batch/Class', 'Expected', 'Collected']]);
  sheet.getRange('A15').setValue('Last Refreshed');
  formatHeader(sheet, 3, 2);
  sheet.getRange('D3:E3').setFontWeight('bold').setBackground('#1f4e79').setFontColor('#ffffff');
  sheet.getRange('G3:I3').setFontWeight('bold').setBackground('#1f4e79').setFontColor('#ffffff');
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, 9);
}

function createPendingSheet() {
  const sheet = getOrCreateSheet(SHEETS.PENDING);
  sheet.clear();
  sheet.getRange(1, 1, 1, PENDING_HEADERS.length).setValues([PENDING_HEADERS]);
  formatHeader(sheet, 1, PENDING_HEADERS.length);
  sheet.getRange('G:I').setNumberFormat('₹#,##0');
  sheet.getRange('C:C').setNumberFormat('@');
  sheet.autoResizeColumns(1, PENDING_HEADERS.length);
}

function createReportsSheet() {
  const sheet = getOrCreateSheet(SHEETS.REPORTS);
  sheet.clear();
  sheet.getRange(1, 1, 1, REPORT_HEADERS.length).setValues([REPORT_HEADERS]);
  formatHeader(sheet, 1, REPORT_HEADERS.length);
  sheet.getRange('C:E').setNumberFormat('₹#,##0');
  sheet.autoResizeColumns(1, REPORT_HEADERS.length);
}

function createMessageTemplatesSheet() {
  const sheet = getOrCreateSheet(SHEETS.TEMPLATES);
  if (!hasUsefulData(sheet)) {
    sheet.clear();
    sheet.getRange(1, 1, 2, 2).setValues([
      ['Template Name', 'Message Text'],
      [
        'Default Reminder',
        'Hi, this is a gentle reminder that the tuition fee for {{studentName}} for {{month}} {{year}} has a pending amount of {{currency}}{{pendingAmount}}. Kindly clear it when possible. Thank you, {{businessName}}.',
      ],
    ]);
  }
  formatHeader(sheet, 1, 2);
  sheet.setColumnWidth(2, 760);
}

function createAuditLogSheet() {
  const sheet = getOrCreateSheet(SHEETS.AUDIT);
  if (!hasUsefulData(sheet)) {
    sheet.clear();
    sheet.getRange(1, 1, 1, 4).setValues([['Timestamp', 'Action', 'Status', 'Message']]);
  }
  formatHeader(sheet, 1, 4);
  sheet.autoResizeColumns(1, 4);
}

function addPaymentEntry() {
  const ui = SpreadsheetApp.getUi();
  try {
    createRequiredSheets();
    const studentQuery = promptValue(ui, 'Student ID or Student Name', 'Enter Student ID first if available. Student name also works when unique.');
    if (!studentQuery) {
      ui.alert('Student ID or student name is required.');
      return;
    }
    const month = promptValue(ui, 'Month', 'Enter month, example: June');
    if (!month) {
      ui.alert('Month is required.');
      return;
    }
    const yearRaw = promptValue(ui, 'Year', 'Enter year, example: 2026');
    const year = Number(yearRaw);
    if (!year || year < 2020 || year > 2100) {
      ui.alert('Enter a valid year.');
      return;
    }
    const amountRaw = promptValue(ui, 'Amount Paid', 'Enter amount paid, example: 1000');
    const amountPaid = Number(amountRaw);
    if (amountRaw === '' || isNaN(amountPaid) || amountPaid < 0) {
      ui.alert('Amount must be a valid number.');
      return;
    }
    const paymentMode = promptValue(ui, 'Payment Mode', 'Cash, UPI, Bank Transfer, or Other. Blank = UPI') || 'UPI';
    const paymentDateText = promptValue(ui, 'Payment Date', 'Enter date as YYYY-MM-DD. Blank = today.');
    const notes = promptValue(ui, 'Notes', 'Optional notes') || '';
    const student = findStudentByIdOrName(studentQuery);
    if (!student) {
      ui.alert('Student not found. Add the student in Students tab first, or use exact Student ID.');
      return;
    }
    if (student.multipleMatches) {
      ui.alert('Multiple students found with this name. Please use Student ID instead.');
      return;
    }
    const feeAmount = Number(student.monthlyFee || getConfigValue('Default Monthly Fee', 1000));
    const pendingAmount = feeAmount - amountPaid;
    const paymentStatus = calculatePaymentStatus(feeAmount, amountPaid);
    const paymentDate = paymentDateText ? new Date(paymentDateText) : new Date();
    if (paymentDateText && isNaN(paymentDate.getTime())) {
      ui.alert('Payment date must be valid. Use YYYY-MM-DD or leave blank.');
      return;
    }
    const paymentSheet = getOrCreateSheet(SHEETS.PAYMENTS);
    ensureHeaders(paymentSheet, PAYMENT_HEADERS);
    paymentSheet.appendRow([
      buildPaymentId(),
      student.id,
      student.name,
      month,
      year,
      feeAmount,
      amountPaid,
      pendingAmount,
      paymentStatus,
      normalizePaymentMode(paymentMode),
      paymentDate,
      notes,
    ]);
    refreshDashboard();
    generatePendingList();
    generateMonthlyReport();
    logAction('Add Payment Entry', 'Success', 'Payment added for ' + student.name + '.');
    ui.alert('Payment entry added.');
  } catch (error) {
    logAction('Add Payment Entry', 'Error', error.message);
    ui.alert('Could not add payment: ' + error.message);
  }
}

function refreshDashboard() {
  try {
    createDashboardSheet();
    const sheet = getOrCreateSheet(SHEETS.DASHBOARD);
    const month = getConfigValue('Report Month', MONTHS[new Date().getMonth()]);
    const year = Number(getConfigValue('Report Year', new Date().getFullYear()));
    const businessName = getConfigValue('Business Name', 'Tuition Center');
    const students = getStudents();
    const payments = getPayments().filter(function (payment) {
      return String(payment.month).toLowerCase() === String(month).toLowerCase() && Number(payment.year) === year;
    });
    const activeStudents = students.filter(function (student) {
      return String(student.status).toLowerCase() === 'active';
    });
    const totals = summarizePayments(payments);
    sheet.getRange('B3:B13').setValues([
      [businessName],
      [month + ' ' + year],
      [students.length],
      [activeStudents.length],
      [totals.expected],
      [totals.collected],
      [totals.pending],
      [totals.paidCount],
      [totals.partialCount],
      [totals.pendingCount],
      [totals.overpaidCount],
    ]);
    sheet.getRange('B7:B9').setNumberFormat('₹#,##0');
    writePaymentModeSummary(sheet, payments);
    writeBatchSummary(sheet, payments);
    sheet.getRange('B15').setValue(new Date()).setNumberFormat('dd-mmm-yyyy hh:mm');
    sheet.autoResizeColumns(1, 9);
    logAction('Refresh Dashboard', 'Success', 'Dashboard refreshed for ' + month + ' ' + year + '.');
  } catch (error) {
    logAction('Refresh Dashboard', 'Error', error.message);
    throw error;
  }
}

function generatePendingList() {
  try {
    const sheet = getOrCreateSheet(SHEETS.PENDING);
    sheet.clear();
    sheet.getRange(1, 1, 1, PENDING_HEADERS.length).setValues([PENDING_HEADERS]);
    const studentsById = mapStudentsById();
    const rows = getPayments()
      .filter(function (payment) {
        return payment.status === 'Pending' || payment.status === 'Partial';
      })
      .map(function (payment) {
        const student = studentsById[payment.studentId] || {};
        return [
          payment.studentId,
          payment.studentName,
          student.phone || '',
          student.batch || '',
          payment.month,
          payment.year,
          payment.feeAmount,
          payment.amountPaid,
          payment.pendingAmount,
          payment.status,
          buildReminderMessage(payment, student),
        ];
      });
    if (rows.length) {
      sheet.getRange(2, 1, rows.length, PENDING_HEADERS.length).setValues(rows);
    }
    formatHeader(sheet, 1, PENDING_HEADERS.length);
    sheet.getRange('G:I').setNumberFormat('₹#,##0');
    sheet.autoResizeColumns(1, PENDING_HEADERS.length);
    logAction('Generate Pending List', 'Success', rows.length + ' pending/partial rows generated.');
  } catch (error) {
    logAction('Generate Pending List', 'Error', error.message);
    throw error;
  }
}

function generateWhatsAppMessages() {
  try {
    generatePendingList();
    logAction('Generate WhatsApp Messages', 'Success', 'Messages generated in Pending tab.');
    SpreadsheetApp.getUi().alert('WhatsApp messages generated in Pending tab. Copy and send manually.');
  } catch (error) {
    logAction('Generate WhatsApp Messages', 'Error', error.message);
    SpreadsheetApp.getUi().alert('Could not generate messages: ' + error.message);
  }
}

function generateMonthlyReport() {
  try {
    const sheet = getOrCreateSheet(SHEETS.REPORTS);
    sheet.clear();
    sheet.getRange(1, 1, 1, REPORT_HEADERS.length).setValues([REPORT_HEADERS]);
    const grouped = {};
    getPayments().forEach(function (payment) {
      const key = payment.year + '-' + monthNumber(payment.month);
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(payment);
    });
    const rows = Object.keys(grouped)
      .sort()
      .map(function (key) {
        const payments = grouped[key];
        const totals = summarizePayments(payments);
        return [
          payments[0].month,
          payments[0].year,
          totals.expected,
          totals.collected,
          totals.pending,
          totals.paidCount,
          totals.partialCount,
          totals.pendingCount,
          totals.overpaidCount,
        ];
      });
    if (rows.length) {
      sheet.getRange(2, 1, rows.length, REPORT_HEADERS.length).setValues(rows);
    }
    formatHeader(sheet, 1, REPORT_HEADERS.length);
    sheet.getRange('C:E').setNumberFormat('₹#,##0');
    sheet.autoResizeColumns(1, REPORT_HEADERS.length);
    logAction('Generate Monthly Report', 'Success', rows.length + ' month rows generated.');
  } catch (error) {
    logAction('Generate Monthly Report', 'Error', error.message);
    throw error;
  }
}

function clearDemoData() {
  const ui = SpreadsheetApp.getUi();
  const mode = String(getConfigValue('Mode', 'Demo')).trim().toLowerCase();
  if (mode === 'client') {
    ui.alert('Clear Demo Data Only is blocked because Config Mode is Client. Change Mode to Demo only in a test copy.');
    logAction('Clear Demo Data Only', 'Blocked', 'Mode is Client.');
    return;
  }
  const response = ui.alert(
    'Clear demo data only?',
    'This will remove sample/demo student and payment rows. It keeps headers, Config, README, Message Templates, and Audit Log. Continue?',
    ui.ButtonSet.YES_NO
  );
  if (response !== ui.Button.YES) {
    logAction('Clear Demo Data Only', 'Cancelled', 'User cancelled clear demo data.');
    return;
  }
  const studentCount = deleteRowsByNote(SHEETS.STUDENTS, 8, 'Demo data');
  const paymentCount = deleteRowsByNote(SHEETS.PAYMENTS, 12, 'Demo data');
  createDashboardSheet();
  createPendingSheet();
  createReportsSheet();
  logAction('Clear Demo Data Only', 'Success', studentCount + ' demo students and ' + paymentCount + ' demo payments removed.');
  ui.alert('Demo rows cleared. Header rows and non-demo rows kept.');
}

function getConfigValue(key, fallback) {
  const sheet = getOrCreateSheet(SHEETS.CONFIG);
  const values = sheet.getDataRange().getValues();
  for (let i = 1; i < values.length; i++) {
    if (String(values[i][0]).trim().toLowerCase() === String(key).trim().toLowerCase()) {
      return values[i][1] !== '' && values[i][1] !== null ? values[i][1] : fallback;
    }
  }
  return fallback;
}

function calculatePaymentStatus(feeAmount, amountPaid) {
  const fee = Number(feeAmount) || 0;
  const paid = Number(amountPaid) || 0;
  if (paid === 0) return 'Pending';
  if (paid < fee) return 'Partial';
  if (paid === fee) return 'Paid';
  return 'Overpaid';
}

function logAction(action, status, message) {
  const sheet = getOrCreateSheet(SHEETS.AUDIT);
  if (!hasUsefulData(sheet)) {
    sheet.getRange(1, 1, 1, 4).setValues([['Timestamp', 'Action', 'Status', 'Message']]);
    formatHeader(sheet, 1, 4);
  }
  sheet.appendRow([new Date(), action, status, message]);
}

function getOrCreateSheet(name) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet.getSheetByName(name) || spreadsheet.insertSheet(name);
}

function hasUsefulData(sheet) {
  return sheet.getLastRow() > 1 || sheet.getLastColumn() > 1 || sheet.getRange(1, 1).getValue() !== '';
}

function ensureHeaders(sheet, headers) {
  if (!hasUsefulData(sheet)) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }
}

function formatHeader(sheet, row, columnCount) {
  sheet.setFrozenRows(1);
  sheet
    .getRange(row, 1, 1, columnCount)
    .setFontWeight('bold')
    .setBackground('#1f4e79')
    .setFontColor('#ffffff')
    .setHorizontalAlignment('center');
}

function applyValidation(sheet, column, values) {
  const rule = SpreadsheetApp.newDataValidation().requireValueInList(values, true).setAllowInvalid(false).build();
  sheet.getRange(2, column, Math.max(sheet.getMaxRows() - 1, 1), 1).setDataValidation(rule);
}

function buildDemoPayments() {
  const currentMonth = getConfigValue('Report Month', 'June');
  const currentYear = Number(getConfigValue('Report Year', 2026));
  const previousMonth = MONTHS[Math.max(0, monthNumber(currentMonth) - 2)];
  const statuses = [
    'Paid',
    'Paid',
    'Paid',
    'Paid',
    'Paid',
    'Paid',
    'Paid',
    'Paid',
    'Pending',
    'Pending',
    'Pending',
    'Pending',
    'Pending',
    'Partial',
    'Partial',
    'Partial',
    'Partial',
    'Partial',
    'Overpaid',
    'Overpaid',
  ];
  const modes = ['UPI', 'Cash', 'Bank Transfer'];
  const rows = [];
  DEMO_STUDENTS.forEach(function (student, index) {
    const fee = Number(student[5]);
    const status = statuses[index];
    const paid = amountForStatus(fee, status);
    rows.push([
      'PAY' + Utilities.formatString('%04d', index + 1),
      student[0],
      student[1],
      currentMonth,
      currentYear,
      fee,
      paid,
      fee - paid,
      calculatePaymentStatus(fee, paid),
      modes[index % modes.length],
      new Date(currentYear, monthNumber(currentMonth) - 1, Math.min(index + 1, 28)),
      'Demo data',
    ]);
    const previousPaid = index % 4 === 0 ? fee / 2 : fee;
    rows.push([
      'PAY' + Utilities.formatString('%04d', index + 21),
      student[0],
      student[1],
      previousMonth,
      currentYear,
      fee,
      previousPaid,
      fee - previousPaid,
      calculatePaymentStatus(fee, previousPaid),
      modes[(index + 1) % modes.length],
      new Date(currentYear, monthNumber(previousMonth) - 1, Math.min(index + 1, 28)),
      'Demo data',
    ]);
  });
  return rows;
}

function amountForStatus(fee, status) {
  if (status === 'Pending') return 0;
  if (status === 'Partial') return Math.round(fee / 2);
  if (status === 'Overpaid') return fee + 100;
  return fee;
}

function getStudents() {
  const sheet = getOrCreateSheet(SHEETS.STUDENTS);
  const values = sheet.getDataRange().getValues();
  return values.slice(1).filter(rowHasData).map(function (row) {
    return {
      id: row[0],
      name: row[1],
      parent: row[2],
      phone: row[3],
      batch: row[4],
      monthlyFee: row[5],
      status: row[6],
      notes: row[7],
    };
  });
}

function getPayments() {
  const sheet = getOrCreateSheet(SHEETS.PAYMENTS);
  const values = sheet.getDataRange().getValues();
  return values.slice(1).filter(rowHasData).map(function (row) {
    return {
      id: row[0],
      studentId: row[1],
      studentName: row[2],
      month: row[3],
      year: row[4],
      feeAmount: Number(row[5]) || 0,
      amountPaid: Number(row[6]) || 0,
      pendingAmount: Number(row[7]) || 0,
      status: row[8] || calculatePaymentStatus(row[5], row[6]),
      mode: row[9] || 'UPI',
      paymentDate: row[10],
      notes: row[11],
    };
  });
}

function rowHasData(row) {
  return row.some(function (cell) {
    return cell !== '' && cell !== null;
  });
}

function mapStudentsById() {
  const map = {};
  getStudents().forEach(function (student) {
    map[student.id] = student;
  });
  return map;
}

function findStudentByName(name) {
  const normalized = String(name).trim().toLowerCase();
  return getStudents().find(function (student) {
    return String(student.name).trim().toLowerCase() === normalized;
  });
}

function findStudentByIdOrName(query) {
  const normalized = String(query).trim().toLowerCase();
  const students = getStudents();
  const idMatch = students.find(function (student) {
    return String(student.id).trim().toLowerCase() === normalized;
  });
  if (idMatch) return idMatch;
  const nameMatches = students.filter(function (student) {
    return String(student.name).trim().toLowerCase() === normalized;
  });
  if (nameMatches.length > 1) {
    return { multipleMatches: true };
  }
  return nameMatches[0] || null;
}

function summarizePayments(payments) {
  return payments.reduce(
    function (summary, payment) {
      summary.expected += payment.feeAmount;
      summary.collected += payment.amountPaid;
      summary.pending += payment.pendingAmount;
      if (payment.status === 'Paid') summary.paidCount++;
      if (payment.status === 'Partial') summary.partialCount++;
      if (payment.status === 'Pending') summary.pendingCount++;
      if (payment.status === 'Overpaid') summary.overpaidCount++;
      return summary;
    },
    {
      expected: 0,
      collected: 0,
      pending: 0,
      paidCount: 0,
      partialCount: 0,
      pendingCount: 0,
      overpaidCount: 0,
    }
  );
}

function writePaymentModeSummary(sheet, payments) {
  const modes = ['Cash', 'UPI', 'Bank Transfer', 'Other'];
  const rows = modes.map(function (mode) {
    const total = payments
      .filter(function (payment) {
        return payment.mode === mode;
      })
      .reduce(function (sum, payment) {
        return sum + payment.amountPaid;
      }, 0);
    return [mode, total];
  });
  sheet.getRange(4, 4, rows.length, 2).setValues(rows);
  sheet.getRange('E4:E7').setNumberFormat('₹#,##0');
}

function writeBatchSummary(sheet, payments) {
  const studentsById = mapStudentsById();
  const batchMap = {};
  payments.forEach(function (payment) {
    const student = studentsById[payment.studentId] || {};
    const batch = student.batch || 'Unknown';
    if (!batchMap[batch]) {
      batchMap[batch] = { expected: 0, collected: 0 };
    }
    batchMap[batch].expected += payment.feeAmount;
    batchMap[batch].collected += payment.amountPaid;
  });
  const rows = Object.keys(batchMap).map(function (batch) {
    return [batch, batchMap[batch].expected, batchMap[batch].collected];
  });
  if (rows.length) {
    sheet.getRange(4, 7, rows.length, 3).setValues(rows);
    sheet.getRange(4, 8, rows.length, 2).setNumberFormat('₹#,##0');
  }
}

function buildReminderMessage(payment, student) {
  const template = getReminderTemplate();
  const businessName = getConfigValue('Business Name', 'Tuition Center');
  const currency = getConfigValue('Currency Symbol', '₹');
  return template
    .replace('{{studentName}}', payment.studentName || student.name || 'student')
    .replace('{{month}}', payment.month)
    .replace('{{year}}', payment.year)
    .replace('{{currency}}', currency)
    .replace('{{pendingAmount}}', payment.pendingAmount)
    .replace('{{businessName}}', businessName);
}

function getReminderTemplate() {
  const sheet = getOrCreateSheet(SHEETS.TEMPLATES);
  const values = sheet.getDataRange().getValues();
  for (let i = 1; i < values.length; i++) {
    if (String(values[i][0]).trim() === 'Default Reminder') {
      return values[i][1];
    }
  }
  return 'Hi, this is a gentle reminder that the tuition fee for {{studentName}} for {{month}} {{year}} has a pending amount of {{currency}}{{pendingAmount}}. Kindly clear it when possible. Thank you, {{businessName}}.';
}

function monthNumber(monthName) {
  const index = MONTHS.map(function (month) {
    return month.toLowerCase();
  }).indexOf(String(monthName).toLowerCase());
  return index >= 0 ? index + 1 : new Date().getMonth() + 1;
}

function promptValue(ui, title, message) {
  const response = ui.prompt(title, message, ui.ButtonSet.OK_CANCEL);
  if (response.getSelectedButton() !== ui.Button.OK) {
    return '';
  }
  return response.getResponseText().trim();
}

function normalizePaymentMode(mode) {
  const allowed = ['Cash', 'UPI', 'Bank Transfer', 'Other'];
  const match = allowed.find(function (item) {
    return item.toLowerCase() === String(mode).trim().toLowerCase();
  });
  return match || 'UPI';
}

function buildPaymentId() {
  return 'PAY' + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMddHHmmss');
}

function ensureConfigRows(rows) {
  const sheet = getOrCreateSheet(SHEETS.CONFIG);
  const existing = sheet
    .getDataRange()
    .getValues()
    .slice(1)
    .map(function (row) {
      return String(row[0]).trim().toLowerCase();
    });
  rows.forEach(function (row) {
    if (existing.indexOf(String(row[0]).trim().toLowerCase()) === -1) {
      sheet.appendRow(row);
    }
  });
}

function deleteRowsByNote(sheetName, noteColumn, noteValue) {
  const sheet = getOrCreateSheet(sheetName);
  let deleted = 0;
  for (let row = sheet.getLastRow(); row >= 2; row--) {
    if (String(sheet.getRange(row, noteColumn).getValue()).trim() === noteValue) {
      sheet.deleteRow(row);
      deleted++;
    }
  }
  return deleted;
}

function protectImportantRanges() {
  const targets = [
    { sheet: SHEETS.README, range: 'A1:A1', description: 'Fee Tracker warning - README title' },
    { sheet: SHEETS.CONFIG, range: 'A1:C1', description: 'Fee Tracker warning - Config headers' },
    { sheet: SHEETS.STUDENTS, range: 'A1:H1', description: 'Fee Tracker warning - Students headers' },
    { sheet: SHEETS.PAYMENTS, range: 'A1:L1', description: 'Fee Tracker warning - Payments headers' },
    { sheet: SHEETS.DASHBOARD, range: 'A:I', description: 'Fee Tracker warning - Dashboard' },
    { sheet: SHEETS.PENDING, range: 'A:K', description: 'Fee Tracker warning - Pending' },
    { sheet: SHEETS.REPORTS, range: 'A:I', description: 'Fee Tracker warning - Reports' },
  ];
  targets.forEach(function (target) {
    const sheet = getOrCreateSheet(target.sheet);
    removeProtectionByDescription(sheet, target.description);
    const protection = sheet.getRange(target.range).protect().setDescription(target.description);
    protection.setWarningOnly(true);
  });
}

function removeProtectionByDescription(sheet, description) {
  sheet.getProtections(SpreadsheetApp.ProtectionType.RANGE).forEach(function (protection) {
    if (protection.getDescription() === description) {
      protection.remove();
    }
  });
}
