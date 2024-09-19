// Function to handle adding products to cart
function addToCart(productName) {
    alert(productName + ' has been added to your cart!');
}

// Adding event listeners to all "Add to Cart" buttons
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.parentElement.querySelector('h3').innerText;
        addToCart(productName);
    });
});

