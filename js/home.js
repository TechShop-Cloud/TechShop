// ➕ Admin Option Visibility in Bottom Navigation
document.addEventListener("DOMContentLoaded", () => {
    const userRole = localStorage.getItem('userRole');
    
    if (userRole === 'admin') {
        document.querySelector(".admin-only").style.display = "flex"; // ➕ Show admin option
    }
});

// 🛠 Existing Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h3').textContent;
        showToast(`${productName} added to cart!`);
    });
});

// 🛠 Function to Show a Stylish Toast Notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'cart-toast';
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100); // Delay to trigger animation

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000); // Remove after 3 seconds
}