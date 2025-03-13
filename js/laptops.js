document.addEventListener("DOMContentLoaded", () => {
       const cartButtons = document.querySelectorAll(".add-cart");

       cartButtons.forEach(button => {
           button.addEventListener("click", () => {
               showCustomAlert("Added to Cart!");
           });
       });
   });

   function showCustomAlert(message) {
       // Create a custom alert box
       const alertBox = document.createElement("div");
       alertBox.className = "custom-alert";
       alertBox.textContent = message;

       // Append the alert box to the body
       document.body.appendChild(alertBox);

       // Add animation class
       alertBox.classList.add("show");

       // Remove the alert box after 3 seconds
       setTimeout(() => {
           alertBox.classList.remove("show");
           setTimeout(() => {
               document.body.removeChild(alertBox);
           }, 300); // Wait for fade-out animation to complete
       }, 3000);
   }