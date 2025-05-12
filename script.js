function searchProduct(event) {
  event.preventDefault(); // Prevent form submission and page refresh

  const searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();

  if (searchQuery) {
    // Simple animation: fade-out effect
    document.body.style.transition = "opacity 0.5s ease-out";
    document.body.style.opacity = 0;

    setTimeout(() => {
      // Redirect after animation
      // You can adjust the condition to match specific products or categories
      if (searchQuery === "tshirt") {
        window.location.href = "tshirts.html"; // Redirect to the relevant product page
      } else if (searchQuery === "jacket") {
        window.location.href = "jackets.html";
      } else if (searchQuery === "hoodie") {
        window.location.href = "hoodies.html";
      } else {
        alert("Product not found.");
        window.location.href = "index.html"; // Redirect to the home page if product is not found
      }
    }, 500); // Delay to match the animation duration
  }
}




function addToCart(productName) {
  alert(`✅ '${productName}' added to cart!`);
  // Optional: update cart icon count
  const badge = document.querySelector('.cart-badge');
  if (badge) {
    let count = parseInt(badge.textContent) || 0;
    badge.textContent = count + 1;
  }
}

function buyNow(productName) {
  alert(`🛍️ Redirecting to checkout for '${productName}'...`);
  // Optional: simulate redirection
  window.location.href = "cart.html"; // or replace with your actual checkout page
}




function addToCart(productName) {
  alert(`✅ '${productName}' added to cart!`);
}

function buyNow(productName) {
  alert(`🛍️ Redirecting to checkout for '${productName}'...`);
  window.location.href = "cart.html";
}




  // Navigate to wishlist
  document.querySelector('.wishlist-icon')?.addEventListener('click', function () {
    window.location.href = 'wishlist.html';
  });

  // Navigate to account
  document.querySelector('.account-icon')?.addEventListener('click', function () {
    window.location.href = 'account.html';
  });

  // Navigate to cart
  document.querySelector('.cart-icon')?.addEventListener('click', function () {
    window.location.href = 'cart.html';
  });



