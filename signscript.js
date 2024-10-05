document.getElementById('signupForm').addEventListener('submit', async function(e) {
    e.preventDefault();  // Prevent form from submitting traditionally

    // Get values from the form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const role = document.getElementById('role').value;

    // Basic validation
    if (!name || !email || !password || !confirmPassword || !role) {
        alert("Please fill out all fields!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Send signup data to the server
    try {
        const response = await fetch('http://localhost:5000/signup', {  // Ensure this matches your backend URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, role }),  // Send data as JSON
        });

        const data = await response.json();  // Parse the response

        if (response.ok) {
            console.log("Sign up successful with details:", data);
            // Display a success message
            const successMessage = document.getElementById('successMessage');
            successMessage.innerHTML = `<h3>Account Created Successfully!</h3><p>Redirecting...</p>`;

            // Redirect based on role after a short delay
            setTimeout(() => {
                if (role === 'student') {
                    window.location.href = 'student_dashboard.html';  // Redirect to student dashboard
                } else if (role === 'teacher') {
                    window.location.href = 'teacher_dashboard.html';  // Redirect to teacher dashboard
                }
            }, 2000); // Delay for 2 seconds before redirecting
        } else {
            alert(data.error || 'Signup failed, please try again.');  // Handle error response
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during signup');
    }
});

// Ensure your backend code is outside this event listener
// Here's a reminder for your Express server (not part of the frontend code):
app.post('/signup', async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword, role }); // Include role if necessary
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(400).json({ error: 'Error creating user' });
    }
});
