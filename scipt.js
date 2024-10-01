// Handle login form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("login-message");

    // Dummy validation for demo purposes
    if (username === "teacher" && password === "password") {
        // Redirect to the teacher dashboard if the user is a teacher
        window.location.href = "teacher-dashboard.html";
    } else if (username === "student" && password === "password") {
        // Hide the login form and show the main content if the user is a student
        document.getElementById("login").style.display = "none";
        document.getElementById("main-content").style.display = "block";
        openTab(null, "student-section");
    } else {
        // Show error message if login fails
        message.style.color = "red";
        message.textContent = "Invalid username or password. Please try again.";
    }
}
