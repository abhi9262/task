const cart = {};

function addToCart(name, price) {
  if (cart[name]) {
    cart[name].quantity += 1;
  } else {
    cart[name] = { price: price, quantity: 1 };
  }
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;

  for (const [name, { price, quantity }] of Object.entries(cart)) {
    const item = document.createElement('div');
    item.textContent = `${name} x${quantity} - $${(price * quantity).toFixed(2)}`;
    cartItems.appendChild(item);
    total += price * quantity;
  }

  cartTotal.textContent = total.toFixed(2);
}

document.getElementById('confirm-order').addEventListener('click', () => {
  alert('Your order has been confirmed! Thank you.');
});

