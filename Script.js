document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const secretLink = document.getElementById("secretLink");
    const errorMessage = document.getElementById("errorMessage");
    const errorPassword = document.getElementById("errorPassword");
  
    errorMessage.style.display = "none";
    errorPassword.style.display = "none";
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
   
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const validUsername = "February";
      const validPassword = "172023";
  
      if (username === validUsername && password === validPassword) {
        // Credentials are correct, redirect to the next page
        window.location.href = "Timeline.html";
      } else {
        // Credentials are incorrect, show the error message
        errorMessage.style.display = "block";
        errorPassword.style.display = "block";
        secretLink.style.display = "none"; // Hide the link
      }
    });
  });


  
