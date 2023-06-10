<!DOCTYPE html>
<html>
<head>
  <title>Website</title>
  <style>
    /* CSS styling for the page */
    body {
      font-family: Arial, sans-serif;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    .form-container {
      max-width: 400px;
      margin: 0 auto;
    }
    .form-input {
      display: block;
      margin-bottom: 10px;
      width: 100%;
      padding: 10px;
      font-size: 16px;
    }
    .form-submit {
      display: block;
      width: 100%;
      padding: 10px;
      background-color: #4CAF50;
      color: white;
      border: none;
      font-size: 16px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to the Website</h1>
    <button id="signin-btn" onclick="redirectToSignIn()">Sign In</button>
  </div>

  <div id="sign-in-page" class="container" style="display: none;">
    <h2>Sign In or Create an Account</h2>
    <div class="form-container">
      <input type="text" id="username-input" class="form-input" placeholder="Username">
      <button id="make-account-btn" class="form-submit" onclick="createAccount()">Make Account</button>
    </div>
  </div>

  <script>
    function redirectToSignIn() {
      // Hide the initial page and show the sign-in page
      document.getElementById("sign-in-page").style.display = "block";
      document.getElementById("signin-btn").style.display = "none";
    }

    function createAccount() {
      // Get the username input value
      var username = document.getElementById("username-input").value;
      
      // You can perform additional validation or checks here if needed
      
      // Store the username in a cookie or local storage for future use
      localStorage.setItem("username", username);
      
      // Redirect the user to the desired page
      window.location.href = "welcome.html";
    }
  </script>
</body>
</html>
