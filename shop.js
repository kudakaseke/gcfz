const cart = JSON.parse(localStorage.getItem("gcfz-shop-cart") || "[]");
const cartPanel = document.getElementById("shop-cart");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const checkoutLink = document.querySelector(".checkout-link");

function saveCart() {
  localStorage.setItem("gcfz-shop-cart", JSON.stringify(cart));
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartCount.textContent = count;
  cartTotal.textContent = `US$${total}`;
  if (!cart.length) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
  } else {
    cartItems.innerHTML = cart.map((item, index) => `<div class="cart-item"><div><strong>${item.name}</strong><span>${item.size} · US$${item.price}</span></div><div class="quantity-control"><button type="button" data-action="decrease" data-index="${index}" aria-label="Reduce ${item.name} quantity">−</button><span>${item.quantity}</span><button type="button" data-action="increase" data-index="${index}" aria-label="Increase ${item.name} quantity">+</button></div></div>`).join("");
  }
  const orderLines = cart.map((item) => `${item.quantity} x ${item.name} (${item.size}) - US$${item.price * item.quantity}`).join("%0D%0A");
  checkoutLink.href = `mailto:info@gcfz.org?subject=GCFZ%20shop%20order&body=Hello%20GCFZ,%0D%0A%0D%0AI%20would%20like%20to%20order:%0D%0A${encodeURIComponent(orderLines).replaceAll("%250D%250A", "%0D%0A")}%0D%0A%0D%0ATotal:%20US$${total}`;
  checkoutLink.classList.toggle("disabled", !cart.length);
  saveCart();
}

document.querySelectorAll(".add-to-cart").forEach((button) => button.addEventListener("click", () => {
  const product = button.closest(".product-card");
  const size = product.querySelector("select").value;
  const existing = cart.find((item) => item.id === product.dataset.id && item.size === size);
  if (existing) existing.quantity += 1;
  else cart.push({ id: product.dataset.id, name: product.dataset.name, price: Number(product.dataset.price), size, quantity: 1 });
  renderCart();
  cartPanel.classList.add("open");
}));

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const index = Number(button.dataset.index);
  cart[index].quantity += button.dataset.action === "increase" ? 1 : -1;
  if (cart[index].quantity < 1) cart.splice(index, 1);
  renderCart();
});

document.querySelectorAll(".shop-filters button").forEach((button) => button.addEventListener("click", () => {
  document.querySelectorAll(".shop-filters button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  document.querySelectorAll(".product-card").forEach((card) => {
    card.hidden = button.dataset.filter !== "all" && card.dataset.category !== button.dataset.filter;
  });
}));

document.querySelector(".cart-toggle").addEventListener("click", () => cartPanel.classList.toggle("open"));
document.querySelector(".cart-close").addEventListener("click", () => cartPanel.classList.remove("open"));
checkoutLink.addEventListener("click", (event) => { if (!cart.length) event.preventDefault(); });
renderCart();
