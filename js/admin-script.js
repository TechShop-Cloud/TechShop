// Sample Data for Admin Dashboard
const adminData = {
    totalUsers: 100,
    activeUsers: 75,
    revenue: "$5000",
    activities: [
        "User John Doe registered.",
        "User Jane Doe upgraded to Premium.",
        "New order placed by User123."
    ]
};

// Function to Display Admin Data
function displayAdminData() {
    document.getElementById("total-users").textContent = adminData.totalUsers;
    document.getElementById("active-users").textContent = adminData.activeUsers;
    document.getElementById("revenue").textContent = adminData.revenue;

    const activitiesList = document.getElementById("activities-list");
    activitiesList.innerHTML = adminData.activities.map(activity => `<li>${activity}</li>`).join("");
}

// Load Admin Data When Page Loads
window.onload = displayAdminData;