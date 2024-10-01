document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent default form submission

    // Get the selected role
    const role = document.getElementById('role').value;
    console.log("Selected role:", role);  // Log the selected role for debugging

    // Redirect based on role
    if (role === 'student') {
        window.location.href = 'student-dashboard.html';  // Redirect to student dashboard
    } else if (role === 'teacher') {
        window.location.href = 'teacher-dashboard.html';  // Redirect to teacher dashboard
    } else {
        console.error("No valid role selected.");  // Error if no valid role is selected
    }
});

// Handle guest login
document.getElementById('guestButton').addEventListener('click', function() {
    // Redirect to a guest dashboard or homepage
    window.location.href = 'guest_dashboard.html';  // Redirect to guest dashboard
});
