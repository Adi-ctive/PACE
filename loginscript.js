document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();  // Prevent default form submission

    // Get the email and password
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Attempt login using the backend
    try {
        const response = await fetch('http://localhost:5000/api/login', {  // Ensure correct backend URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),  // Send email and password for login
        });

        const data = await response.json(); // Parse the response as JSON

        if (response.ok) {
            console.log('Login successful:', data.user);  // Log user data

            // Redirect to a dashboard or main page upon successful login
            window.location.href = 'dashboard.html';  // Replace with your actual dashboard URL
        } else {
            console.error('Login failed:', data.message);
            alert(data.message);  // Show error message to the user
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during login');
    }
});

// Handle guest login
document.getElementById('guestButton').addEventListener('click', function() {
    // Redirect to a guest dashboard or homepage
    window.location.href = 'guest_dashboard.html';  // Redirect to guest dashboard
});
