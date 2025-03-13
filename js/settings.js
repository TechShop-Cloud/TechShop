document.addEventListener("DOMContentLoaded", () => {
    loadSettings();
});

function loadSettings() {
    const maintenanceMode = localStorage.getItem("maintenanceMode") || "off";
    document.getElementById("maintenanceMode").value = maintenanceMode;
}

function updatePassword() {
    alert("Admin password updated successfully!"); 
}

function updateSettings() {
    const mode = document.getElementById("maintenanceMode").value;
    localStorage.setItem("maintenanceMode", mode);
    alert("Settings saved successfully!");
}