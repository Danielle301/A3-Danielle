// changes the show or hide property when the search item is clicked
function toggleSearchUI() {
    const dropdown = document.getElementById("searchDropdown");
    dropdown.classList.toggle("show"); // adds/removes the show class
    if (dropdown.classList.contains("show")) {
      //puts the curser in the input box 
      document.getElementById("searchInput").focus();
    }
  }
//filters the dropdown options based in the input 
  function filterOptions() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toUpperCase(); // makes it all upper case so it matches 
    const links = document.querySelectorAll("#dropdownOptions a"); // the links 

    links.forEach(link => {
      const txt = link.textContent || link.innerText; // if the link includs the typed in text it is shown 
      link.style.display = txt.toUpperCase().includes(filter) ? "" : "none";
    });
  }
  // Close if clicking outside of search function
  window.onclick = function (event) {
const dropdown = document.getElementById("searchDropdown");
const input = document.getElementById("searchInput");
const options = document.querySelectorAll("#dropdownOptions a");
//if the click is outside the search area 
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
// animation when the button is clicked 
document.querySelectorAll('.btn3').forEach(button =>{
    button.addEventListener('click', () => {
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'),100);
    });
});

// get the cart from local storage or make a new empty one 
const cart = JSON.parse(localStorage.getItem("cart")) || {};
// adds a product to cart 
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
            // show product name, quantity and total price
            itemDiv.innerHTML = `
            <div>${product}</div>
            <div>${item.quantity}</div>
            <div>$${item.totalPrice.toFixed(2)}</div>
          `;
    
          cartItemsContainer.appendChild(itemDiv);

          grandTotal += item.totalPrice;
          }

          // add the final row 
          const totalDiv = document.createElement("div");
          totalDiv.classList.add("cartItem");
          totalDiv.innerHTML = `
            <div><strong>Total</strong></div>
             <div></div>
             <div><strong>$${grandTotal.toFixed(2)}</strong></div>
`;
cartItemsContainer.appendChild(totalDiv);


          // clear the cart when button is clicked 
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

        // show the checkout forrm when the button is clicked 
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


      // update card count when page loads 
      document.addEventListener("DOMContentLoaded", () =>{
        updateCartCount();
      });
      // when the form is submitted clear the cart 
      document.addEventListener("DOMContentLoaded", () => {
        const checkoutForm = document.getElementById("checkOutForm");
      
        if (checkoutForm) {
          checkoutForm.addEventListener("submit", () => {
            localStorage.removeItem("cart");
            updateCartCount();
          });
        }
      });