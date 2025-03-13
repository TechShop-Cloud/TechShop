document.addEventListener("DOMContentLoaded", () => {
    loadAnalytics();
});

function loadAnalytics() {
    document.getElementById("totalUsers").textContent = 150; 
    document.getElementById("totalOrders").textContent = 320; 
    document.getElementById("revenue").textContent = "12,450"; 
}