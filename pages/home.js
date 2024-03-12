

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







