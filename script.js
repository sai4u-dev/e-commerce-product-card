let cartCount = 0;
let inventory = 34;
const basePrice = 92.5; // ₹59.2
const discountPercent = 20; // 20%

const cartCountDisplay = document.getElementById("cart-count");
const inventoryDisplay = document.getElementById("inventory");
const cartControls = document.getElementById("cart-controls");
const popup = document.getElementById("popup");

function updatePriceDisplay() {
  const discountedPrice = (basePrice * (1 - discountPercent / 100)).toFixed(2);
  document.getElementById("original-price").textContent = `₹${basePrice.toFixed(
    2
  )}`;
  document.getElementById("discounted-price").textContent = discountedPrice;
  document.getElementById(
    "discount-label"
  ).textContent = `${discountPercent}% OFF`;
}

function showPopup(message) {
  popup.textContent = message;
  popup.classList.remove("opacity-0");
  popup.classList.add("opacity-100");

  setTimeout(() => {
    popup.classList.add("opacity-0");
    popup.classList.remove("opacity-100");
  }, 2500);
}

function addToCart() {
  if (inventory <= 0) return;
  cartCount = 1;
  inventory--;
  showPopup("Added 1 item to cart");
  updateUI();
}

function increaseCount() {
  if (inventory <= 0) return;
  cartCount++;
  inventory--;
  showPopup("Item Added to Cart.");
  updateUI();
}

function decreaseCount() {
  if (cartCount <= 0) return;
  cartCount--;
  inventory++;
  if (cartCount === 0) {
    showPopup("Item removed from cart");
  } else {
    showPopup("Item Removed item quantity");
  }
  updateUI();
}
updatePriceDisplay();
function updateUI() {
  cartCountDisplay.textContent = cartCount;
  inventoryDisplay.textContent = inventory;

  if (cartCount === 0) {
    cartControls.innerHTML = `
        <button onclick="addToCart()" class="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition-all duration-200">
          Add to Cart
        </button>
      `;
  } else {
    cartControls.innerHTML = `
        <div class="flex items-center justify-between bg-orange-100 rounded-md p-2">
          <button onclick="decreaseCount()" class="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">−</button>
          <span class="text-black font-semibold">${cartCount}</span>
          <button onclick="increaseCount()" class="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600">+</button>
        </div>
      `;
  }
}
