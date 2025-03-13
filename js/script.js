document.addEventListener("DOMContentLoaded", () => {
    // Load user data
    const userName = localStorage.getItem("userName") || "John Doe";
    const userUsername = localStorage.getItem("userUsername") || "@johndoe";
    const userEmail = localStorage.getItem("userEmail") || "john.doe@example.com";
    const userJoined = localStorage.getItem("userJoined") || "January 1, 2025";
    const userLocation = localStorage.getItem("userLocation") || "New York, USA";
    const userProfilePic = localStorage.getItem("userProfilePic") || "profile-pic.jpg"; // Default Image

    // Set profile details
    document.getElementById("user-name").textContent = userName;
    document.getElementById("user-username").textContent = userUsername;
    document.getElementById("user-email").textContent = userEmail;
    document.getElementById("user-joined").textContent = `Joined: ${userJoined}`;
    document.getElementById("user-location").textContent = userLocation;
    document.getElementById("profile-pic").src = userProfilePic;
});

// Profile Picture Upload
document.getElementById("profile-upload").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            const imageData = reader.result;
            localStorage.setItem("userProfilePic", imageData);
            document.getElementById("profile-pic").src = imageData;
        };
        reader.readAsDataURL(file);
    }
});