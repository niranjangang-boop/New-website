/**
 * Orthopaedic camp registration → Google Sheet
 * ============================================
 * Receives registrations from https://drniranjanghag.com/camp/ and appends
 * each one as a row in the bound spreadsheet.
 *
 * ONE-TIME SETUP (about 5 minutes)
 * --------------------------------
 *  1. Go to https://sheets.new and create a sheet. Name it something like
 *     "Ortho Camp Registrations".
 *  2. In that sheet: Extensions → Apps Script. Delete whatever is in the
 *     editor and paste this entire file in. Click the save icon.
 *  3. Click Deploy → New deployment.
 *       • Click the gear next to "Select type" and choose Web app
 *       • Description:      Camp registration endpoint
 *       • Execute as:       Me
 *       • Who has access:   Anyone            ← must be "Anyone", not "Anyone with Google account"
 *     Click Deploy.
 *  4. Google will ask you to authorise it. Choose your account → Advanced →
 *     "Go to <project name> (unsafe)" → Allow. This warning is normal for
 *     your own unpublished script; you are granting it access to your own sheet.
 *  5. Copy the Web app URL. It looks like:
 *       https://script.google.com/macros/s/AKfycb..../exec
 *  6. Send that URL to Claude, or paste it into
 *     src/content/settings.json as "camp_form_endpoint".
 *
 * IF YOU EVER EDIT THIS SCRIPT: you must Deploy → Manage deployments →
 * edit (pencil) → Version: New version → Deploy. Simply saving does not
 * update the live endpoint.
 *
 * PRIVACY NOTE
 * ------------
 * This sheet will hold names and mobile numbers of members of the public.
 * Keep it private — do not use "Anyone with the link can view". Share it only
 * with staff who need it.
 */

var HEADERS = [
  'Timestamp',
  'Name',
  'Mobile',
  'Age',
  'Gender',
  'Preferred slot',
  'Reason',
];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // Reject anything missing the essentials rather than writing junk rows.
    if (!data.name || !data.mobile) {
      return json({ ok: false, error: 'Missing name or mobile' });
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Write the header row once, on the first submission.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(),
      String(data.name).slice(0, 120),
      "'" + String(data.mobile).slice(0, 15), // leading quote keeps leading zeros
      String(data.age || ''),
      String(data.gender || ''),
      String(data.slot || ''),
      String(data.reason || ''),
    ]);

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

// Lets you confirm the deployment is live by opening the URL in a browser.
function doGet() {
  return json({ ok: true, message: 'Camp registration endpoint is live.' });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
