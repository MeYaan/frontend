

function logout() {
  var confirmation = confirm("Are you sure you want to logout?");
  if (confirmation) {
    // Call the logoutUser function from the Home class
    window.location.href = "index.html";
  }
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function toggleDarkMode() {
  const body = document.body;
  const darkModeIcon = document.getElementById("darkModeIcon");

  // Toggle dark mode class on the body
  body.classList.toggle("dark-mode");

  // Check if dark mode is active after toggling
  const isDarkMode = body.classList.contains("dark-mode");

  // Set the mode in localStorage
  localStorage.setItem("darkMode", isDarkMode);

  // Update the dark mode icon based on the mode
  darkModeIcon.src = isDarkMode
    ? "../images/lightmode.png"
    : "../images/nightmode.png";

  // Additional function calls or logic after toggling
  updateEditBioIcon();
}

document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const darkModeIcon = document.getElementById("darkModeIcon");

  // Check if the user's preferred mode is already set in localStorage
  const isDarkMode = localStorage.getItem("darkMode") === "true";

  // If not set, use light mode as the default
  if (isDarkMode === null) {
    localStorage.setItem("darkMode", "false");
  }

  // Apply the mode to the body and update the icon
  body.classList.toggle("dark-mode", isDarkMode);
  darkModeIcon.src = isDarkMode
    ? "../images/lightmode.png"
    : "../images/nightmode.png";
});





