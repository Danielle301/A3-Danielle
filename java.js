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
  updateCartCount();
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
        const cartItemsContainer = document.getElementById("cartItems");

        let grandTotal= 0;

        for (let product in cart) {
            const item = cart[product];
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cartItem");

            itemDiv.innerHTML = `
            <div>${product}</div>
            <div>${item.quantity}</div>
            <div>$${item.totalPrice.toFixed(2)}</div>
          `;
    
          cartItemsContainer.appendChild(itemDiv);

          grandTotal += item.totalPrice;
          }
          const totalDiv = document.createElement("div");
          totalDiv.classList.add("cartItem");
          totalDiv.innerHTML = `
            <div><strong>Total</strong></div>
             <div></div>
             <div><strong>$${grandTotal.toFixed(2)}</strong></div>
`;
cartItemsContainer.appendChild(totalDiv);



          const clearBtn = document.getElementById("clearCart");
          clearBtn.addEventListener("click", () =>{
            localStorage.removeItem("cart");
            cartItemsContainer.innerHTML = "";
            updateCartCount();
          });
        });
      }

      function updateCartCount(){
        const cart = JSON.parse(localStorage.getItem("cart")) || {};
        const cartCountElement = document.getElementById("cartCount");
        let totalItems=0;

        for (let product in cart) {
          totalItems += cart[product].quantity;
        }

        if (totalItems > 0) {
          cartCountElement.textContent = totalItems;
          cartCountElement.style.display = "inline-block";
        } else{
          cartCountElement.style.display = "none"
        }
      }


      document.addEventListener("DOMContentLoaded", () => {
        const checkoutBtn = document.getElementById("checkoutButton");
        const checkoutForm = document.getElementById("checkOutForm");
      
        if (checkoutBtn && checkoutForm) {
          checkoutBtn.addEventListener("click", () => {
            checkoutForm.style.display = "grid";
            checkoutBtn.disabled = true;
          });
        }
      });



      document.addEventListener("DOMContentLoaded", () =>{
        updateCartCount();
      });

      document.addEventListener("DOMContentLoaded", () => {
        const checkoutForm = document.getElementById("checkOutForm");
      
        if (checkoutForm) {
          checkoutForm.addEventListener("submit", () => {
            localStorage.removeItem("cart");
            updateCartCount();
          });
        }
      });