document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form from submitting traditionally

    // Get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const role = document.getElementById('role').value;

    // Basic validation
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Placeholder for actual signup logic (e.g., sending data to a server)

    // Redirect based on role
    if (role === 'student') {
        window.location.href = 'student_dashboard.html';  // Redirect to student dashboard
    } else if (role === 'teacher') {
        window.location.href = 'teacher_dashboard.html';  // Redirect to teacher dashboard
    }
});
