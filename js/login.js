// ➕ Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // ➕ Predefined Admin Credentials
    const adminEmail = "abpdil0@gmail.com";
    const adminPassword = "dilshant123";

    // Retrieve saved user details from localStorage
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (email === adminEmail && password === adminPassword) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userRole', 'admin'); // ➕ Set role as admin
        showModal('Admin Login Successful! Redirecting to Home Page...', 'success');
        setTimeout(() => {
            window.location.href = "home.html"; // ➕ Redirect admin to home page
        }, 2000);
    } else if (email === savedEmail && password === savedPassword) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userRole', 'user'); // ➕ Set role as regular user
        showModal('Login successful! Redirecting to Home Page...', 'success');
        setTimeout(() => {
            window.location.href = "home.html"; 
        }, 2000);
    } else {
        showModal('Invalid email or password. Please try again.', 'error');
    }
});

// ➕ Function to Show a Custom Modal
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

// ➕ Function to Hide/Show Admin Options
function checkAdminAccess() {
    const userRole = localStorage.getItem('userRole');
    const adminElements = document.querySelectorAll('.admin-only');

    if (userRole === 'admin') {
        adminElements.forEach(element => element.style.display = 'block'); // ➕ Show admin-only options
    } else {
        adminElements.forEach(element => element.style.display = 'none'); // ➕ Hide for normal users
    }
}

// Run check on page load
document.addEventListener("DOMContentLoaded", checkAdminAccess);