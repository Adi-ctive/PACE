// Handle login form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("login-message");

    // Dummy validation for demo purposes
    if (username === "teacher" && password === "password") {
        // Redirect to teacher dashboard
        window.location.href = "teacher-dashboard.html"; // Ensure this path is correct
    } else if (username === "student" && password === "password") {
        // Hide the login form and show the main content
        document.getElementById("login").style.display = "none";
        document.getElementById("main-content").style.display = "block";
        openTab(null, "planets"); // Open the first tab
    } else {
        // Show error message if login fails
        message.style.color = "red";
        message.textContent = "Invalid username or password. Please try again.";
    }
}

// Function to handle tab switching (content display)
function openTab(event, tabName) {
    // Hide all tab content
    var tabContent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Reset active class for navigation links
    var navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(function(link) {
        link.classList.remove("active");
    });

    // Show the selected tab content
    document.getElementById(tabName.toLowerCase()).style.display = "block";

    // Highlight the active tab link
    if (event) {
        event.currentTarget.classList.add("active");
    }
}

// Optional: Automatically open the first tab on page load
document.addEventListener("DOMContentLoaded", function() {
    openTab(null, "planets"); // Change this to the default tab you want to show
});
const bumpTexture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/earthbump1k.jpg');
const material = new THREE.MeshPhongMaterial({
    map: texture,                    // Diffuse texture (earth map)
    bumpMap: bumpTexture,            // Bump map for surface details
    bumpScale: 0.05                  // Adjust the bumpiness (0.05 works well)
});
const loader = new THREE.GLTFLoader();
loader.load(
    'path/to/your/model.glb',  // Replace with the actual path to your exported .glb file
    (gltf) => {
        const model = gltf.scene;

        // Scale the model
        model.scale.set(1, 1, 1);  // Adjust scale as needed

        // Center the model (optional)
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);  // Center the model

        scene.add(model);

        function animate() {
            requestAnimationFrame(animate);
            model.rotation.y += 0.01;  // Rotate the model
            renderer.render(scene, camera);
        }
        animate();
    },
    undefined,
    (error) => {
        console.error('An error occurred loading the model:', error);
    }
);
