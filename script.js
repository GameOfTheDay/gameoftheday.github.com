// Function to check if the user is signed in
function isUserSignedIn() {
  // Replace this with your own logic to check if the user is signed in
  // For example, you can use cookies, local storage, or a server-side check
  // Here, we are assuming the user is signed in if a "user" cookie exists
  return document.cookie.includes("user=");
}

// Function to update the UI based on the user's sign-in status
function updateUI() {
  const signInBtn = document.getElementById("signin-btn");
  const signOutBtn = document.getElementById("sign-out-btn");
  const userName = document.getElementById("user-name");

  if (isUserSignedIn()) {
    signInBtn.style.display = "none";
    signOutBtn.style.display = "inline-block";
    userName.textContent = getUsernameFromStorage();
  } else {
    signInBtn.style.display = "inline-block";
    signOutBtn.style.display = "none";
    userName.textContent = "";
  }
}

// Function to retrieve the username from wherever you store it (e.g., cookie, local storage)
function getUsernameFromStorage() {
  // Replace this with your own logic to retrieve the username
  // For example, if you store the username in a cookie called "user", you can retrieve it like this:
  const cookie = document.cookie.split(";").find((c) => c.trim().startsWith("user="));
  if (cookie) {
    return cookie.split("=")[1];
  }
  return null;
}

// Run the updateUI function when the page loads
window.addEventListener("load", updateUI);

// Define an array of usernames with administrator permissions
var adminUsernames = ["Raven", "Jeff", "AdminUser2"]; // Add or remove usernames as needed

function redirectToSignIn() {
  // Redirect to login.html
  window.location.href = "login.html";
}

function signIn() {
  // Perform sign-in logic here
  // ...

  // Update the user name at the top right
  var username = document.getElementById("username-input").value;
  document.getElementById("user-name").textContent = username;

  // Store the username in a cookie
  document.cookie = `user=${username}`;

  // Check if the signed-in user is an administrator
  var isAdmin = adminUsernames.includes(username);
  if (isAdmin) {
    document.getElementById("moderators-btn").style.display = "inline-block";
  }

  // Update the UI
  updateUI();
}

function signOut() {
  // Perform sign-out logic here
  // ...

  // Clear the user name at the top right
  document.getElementById("user-name").textContent = "";

  // Delete the "user" cookie
  document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

  // Hide the moderators button
  document.getElementById("moderators-btn").style.display = "none";

  // Update the UI
  updateUI();
}

