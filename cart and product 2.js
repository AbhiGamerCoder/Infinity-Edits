function addToCart() {
    const cartMessage = document.getElementById('cart-message');
    cartMessage.textContent = "Item added to cart! Click to proceed to checkout.    PROCEED";
    cartMessage.style.cursor = "pointer";
    cartMessage.onclick = showCheckout;

    // Optionally, you can store cart info in local storage or a variable here
}

function showCheckout() {
    document.querySelector('.product-container').style.display = 'none';
    document.getElementById('checkout-container').style.display = 'block';
}

document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

   
});