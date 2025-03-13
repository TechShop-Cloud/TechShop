// Signup Form Submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === "" || email === "" || password === "") {
        showModal("Please fill out all fields!", "error");
        return;
    }

    // Save user details in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('isLoggedIn', 'true'); // Automatically logs in the user

    // Show success message
    showModal('Sign up successful! Redirecting to Home Page...', 'success');

    // Redirect to home page after 2 seconds
    setTimeout(() => {
        window.location.href = "home.html";
    }, 2000);
});

// Function to show a custom modal
function showModal(message, type) {
    const modal = document.createElement('div');
    modal.className = 'custom-modal';
    modal.innerHTML = `
        <div class="modal-content ${type}">
            <p>${message}</p>
        </div>
    `;
    document.body.appendChild(modal);

    // Remove modal after 3 seconds
    setTimeout(() => {
        modal.remove();
    }, 3000);
}