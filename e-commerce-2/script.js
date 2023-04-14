let cartItems = [];

function addToCart(itemName, itemPrice) {
  cartItems.push({ name: itemName, price: itemPrice });
  updateCart();
}

function updateCart() {
  let cart = document.getElementById("cart");
  cart.innerHTML = "";
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    let cartItem = document.createElement("li");
    cartItem.innerHTML = `${cartItems[i].name} - $${cartItems[i].price}`;
    cart.appendChild(cartItem);
    total += cartItems[i].price;
  }
  let totalItem = document.createElement("li");
  totalItem.innerHTML = `Total: $${total}`;
  cart.appendChild(totalItem);
}

// Automatically update the cart on the cart and products pages.
if (document.getElementById("cart")) {
  updateCart();
}
