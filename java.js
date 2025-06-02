function toggleSearchUI() {
    const dropdown = document.getElementById("searchDropdown");
    dropdown.classList.toggle("show");
    if (dropdown.classList.contains("show")) {
      document.getElementById("searchInput").focus();
    }
  }

  function filterOptions() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toUpperCase();
    const links = document.querySelectorAll("#dropdownOptions a");

    links.forEach(link => {
      const txt = link.textContent || link.innerText;
      link.style.display = txt.toUpperCase().includes(filter) ? "" : "none";
    });
  }

  // Optional: Close if clicking outside
  window.onclick = function (event) {
const dropdown = document.getElementById("searchDropdown");
const input = document.getElementById("searchInput");
const options = document.querySelectorAll("#dropdownOptions a");

if (!event.target.closest(".searchContainer")) {
  // Hide the dropdown
  dropdown.classList.remove("show");

  // Clear the input field
  input.value = "";

  // Reset all dropdown items to visible
  options.forEach(option => {
    option.style.display = "";
  });
}
};

document.querySelectorAll('.btn3').forEach(button =>{
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'),100);
    });
});


const cart = JSON.parse(localStorage.getItem("cart")) || {};

function addToCart(productName, productPrice) {
  if (cart[productName]) {
    cart[productName].quantity += 1;
    cart[productName].totalPrice += productPrice;
  } else {
    cart[productName] = {
      quantity: 1,
      totalPrice: productPrice,
    };
  }

  // Save to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartDisplay() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = "";
    for (let product in cart) {
      const listItem = document.createElement("li");
      listItem.innerText = `${product} - Quantity: ${
        cart[product].quantity
      } - Total Price: Rs${cart[product].totalPrice.toFixed(2)}`;
      cartList.appendChild(listItem);
    }
  }

  if (window.location.pathname.endsWith("cart.html")){
    window.addEventListener("DOMContentLoaded", () =>{
        const cart = JSON.parse(localStorage.getItem("cart")) || {};
        const cartList= document.getElementById("cart");

        for (let product in cart) {
            const item = cart[product];
            const li = document.createElement("li");
            li.textContent = `${product} - Quantity: ${item.quantity} - Total: $${item.totalPrice.toFixed(2)}`;
            cartList.appendChild(li);
          }

          const clearBtn = document.getElementById("clearCart");
          clearBtn.addEventListener("click", () =>{
            localStorage.removeItem("cart");
            cartList.innerHTML = "";
          });
        });
      }