document.addEventListener("DOMContentLoaded", () => {
    loadUserDetails();
});

function loadUserDetails() {
    const params = new URLSearchParams(window.location.search);
    const userData = JSON.parse(decodeURIComponent(params.get("data")));

    document.getElementById("userName").textContent = userData.name;
    document.getElementById("userEmail").textContent = userData.email;
    document.getElementById("userPassword").value = userData.password;
    document.getElementById("userRole").value = userData.role;
}

function saveChanges() {
    const newPassword = document.getElementById("userPassword").value;
    const newRole = document.getElementById("userRole").value;

    alert(`Changes Saved: \nNew Password: ${newPassword} \nNew Role: ${newRole}`);
}

function banUser(type) {
    if (type === "temporary") {
        alert("User has been temporarily banned.");
    } else {
        alert("User has been permanently banned.");
    }
}