// Add a custom menu when the spreadsheet opens
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Netlify")
    .addItem("Trigger Build", "triggerNetlifyBuild")
    .addToUi();
}

// Function to trigger the Netlify build
function triggerNetlifyBuild() {
  // Get the active user's email
  var userEmail = Session.getActiveUser().getEmail();

  // List of authorized users (replace with actual email addresses)
  var authorizedUsers = [
    "your-email@example.com", // Replace with your email
  ];

  // Check if the user is authorized
  if (!authorizedUsers.includes(userEmail)) {
    SpreadsheetApp.getUi().alert("You are not authorized to trigger builds.");
    return;
  }

  // Your Netlify webhook URL (you'll get this from Netlify)
  var webhookUrl = "YOUR_NETLIFY_WEBHOOK_URL";

  try {
    // Make the POST request to Netlify
    var response = UrlFetchApp.fetch(webhookUrl, {
      method: "post",
      muteHttpExceptions: true,
    });

    // Check the response
    if (response.getResponseCode() === 200) {
      SpreadsheetApp.getUi().alert("Build triggered successfully!");
    } else {
      SpreadsheetApp.getUi().alert(
        "Failed to trigger build. Response code: " + response.getResponseCode()
      );
    }
  } catch (error) {
    SpreadsheetApp.getUi().alert("Error triggering build: " + error.toString());
  }
}
