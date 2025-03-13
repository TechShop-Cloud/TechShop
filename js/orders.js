document.addEventListener("DOMContentLoaded", function () {
    const ordersList = document.querySelector(".orders-list");
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];

    if (storedOrders.length === 0) {
        ordersList.innerHTML = "<p>No orders placed yet.</p>";
    } else {
        ordersList.innerHTML = "";
        storedOrders.forEach(order => {
            let orderItem = document.createElement("div");
            orderItem.classList.add("order-item");

            let statusClass = "processing"; // Default status
            let statusText = "Processing";

            // Add Order Details
            orderItem.innerHTML = `
                <p><strong>Order ID:</strong> #${order.id}</p>
                <p><strong>Items:</strong> ${order.items.join(", ")}</p>
                <p><strong>Address:</strong> ${order.address}</p>
                <p><strong>Status:</strong> <span class="status ${statusClass}">${statusText}</span></p>
            `;
            ordersList.appendChild(orderItem);
        });
    }
});