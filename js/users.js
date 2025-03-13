document.addEventListener("DOMContentLoaded", () => {
    loadUsers();
});

/* ➕ Function to Load Users */
function loadUsers() {
    const users = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "User", password: "123456" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", password: "admin123" }
    ];

    const userTableBody = document.getElementById("userTableBody");
    userTableBody.innerHTML = "";

    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
        `;
        row.addEventListener("click", () => openUserDetails(user)); // ✅ Click to open details
        userTableBody.appendChild(row);
    });
}

/* 🛠 Fix: Encode and Pass User Data Correctly */
function openUserDetails(user) {
    const userData = encodeURIComponent(JSON.stringify(user)); // ✅ Encode data properly
    window.location.href = `user_details.html?data=${userData}`;
}