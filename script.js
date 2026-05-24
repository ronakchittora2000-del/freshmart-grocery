let cart = JSON.parse(
localStorage.getItem("cart")
) || [];

// ADD TO CART
function addToCart(productName) {

cart.push(productName);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert(productName +
" Added To Cart 😎");
}

// SHOW CART ITEMS
function displayCart() {

let cartContainer =
document.getElementById("cartItems");

if(!cartContainer) return;

cartContainer.innerHTML = "";

cart.forEach((item, index) => {


let div =
  document.createElement("div");

div.classList.add("product-card");

div.innerHTML = `
  <h3>${item}</h3>

  <button onclick=
  "removeItem(${index})">
    Remove
  </button>
`;

cartContainer.appendChild(div);


});
}

// REMOVE ITEM
function removeItem(index) {

cart.splice(index, 1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

displayCart();
}

displayCart();
