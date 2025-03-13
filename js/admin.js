document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // ✅ Prevent page reload

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("error-message");

        // ✅ Admin Credentials (Change if needed)
        const adminUsername = "Dilshant";
        const adminPassword = "dilshant@123";

        if (username === adminUsername && password === adminPassword) {
            localStorage.setItem("isAdmin", "true"); // ✅ Store login status
            window.location.href = "admin_dashboard.html"; // ✅ Redirect to dashboard
        } else {
            errorMessage.textContent = "Invalid username or password!"; // 🛠 Show error message
        }
    });
});