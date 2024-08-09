document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const secretLink = document.getElementById("secretLink");
    const errorMessage = document.getElementById("errorMessage");
    const errorPassword = document.getElementById("errorPassword");
    const forgetForm = document.getElementById("Forget");
    const forgotPasswordMessage = document.getElementById("forgotPasswordMessage");

    // Hide error messages initially
    errorMessage.style.display = "none";
    errorPassword.style.display = "none";

    // Handle login form submission
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const validUsername = "February";
        const validPassword = "020202";

        if (username === validUsername && password === validPassword) {
            // Credentials are correct, redirect to the next page
            window.location.href = "Timeline.html";
        } else {
            // Credentials are incorrect, show the error messages
            errorMessage.style.display = "block";
            errorPassword.style.display = "block";
            secretLink.style.display = "none"; // Hide the link
        }
    });

    // Show the forget password form when the link is clicked
    document.querySelector(a[href='Forgot-monthsary.html']).addEventListener("click", function(event) {
        event.preventDefault();
        forgetForm.style.display = "block";
    });

    // Handle the submission of the forget password form
    forgetForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.querySelector("#Forget").value; // Use the ID 'Forget' to get the email

        // Send the email to the server to handle password reset
        fetch("/send-reset-link", { // Fixed URL to match string literal
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                forgotPasswordMessage.textContent = "Password reset link sent to your email.";
                forgotPasswordMessage.style.display = "block";
            } else {
                forgotPasswordMessage.textContent = "Failed to send password reset link. Please try again.";
                forgotPasswordMessage.style.display = "block";
            }
        })
        .catch(error => {
            console.error('Error:', error); // Log the error to the console
            forgotPasswordMessage.textContent = "An error occurred. Please try again.";
            forgotPasswordMessage.style.display = "block";
        });
    });
});
