document.getElementById("checkout-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value.trim();
    let address = document.getElementById("address").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let pincode = document.getElementById("pincode").value.trim();
    let city = document.getElementById("city").value.trim();

    let isValid = true;

    if (name === "") {
        document.getElementById("name-error").textContent = "Name is required!";
        isValid = false;
    } else {
        document.getElementById("name-error").textContent = "";
    }

    if (address === "") {
        document.getElementById("address-error").textContent = "Address is required!";
        isValid = false;
    } else {
        document.getElementById("address-error").textContent = "";
    }

    if (mobile === "" || !/^\d{10}$/.test(mobile)) {
        document.getElementById("mobile-error").textContent = "Enter a valid 10-digit mobile number!";
        isValid = false;
    } else {
        document.getElementById("mobile-error").textContent = "";
    }

    if (pincode === "" || !/^\d{6}$/.test(pincode)) {
        document.getElementById("pincode-error").textContent = "Enter a valid 6-digit pin code!";
        isValid = false;
    } else {
        document.getElementById("pincode-error").textContent = "";
    }

    if (city === "") {
        document.getElementById("city-error").textContent = "City is required!";
        isValid = false;
    } else {
        document.getElementById("city-error").textContent = "";
    }

    // ✅ Modern Alert using SweetAlert2
    if (!isValid) {
        Swal.fire({
            icon: "error",
            title: "Invalid Details",
            text: "Please fill all fields correctly!",
            confirmButtonColor: "#d33",
            confirmButtonText: "OK"
        });
        return;
    }

    Swal.fire({
        icon: "success",
        title: "Order Placed!",
        text: "Your order has been successfully placed.",
        showConfirmButton: false,
        timer: 2000
    });

    this.reset();
});

document.querySelector(".place-order-btn").addEventListener("click", function () {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let address = document.querySelector("#address").value;
    if (!address.trim()) {
        alert("Please enter your address!");
        return;
    }

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let newOrder = {
        id: orders.length + 1,
        items: cartItems.map(item => item.name),
        address: address,
    };

    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    alert("Order placed successfully!");
    localStorage.removeItem("cart"); // Empty the cart
    window.location.href = "my_orders.html"; // Redirect to orders page
});