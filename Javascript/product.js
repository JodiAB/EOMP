// Initialize an empty array to store product information
let products = [];

// Get references to HTML elements
let input = document.querySelector('.form');
let out = document.querySelector('.out');
let section = document.querySelector('.pro-container');
let main = document.querySelector('main');
let cart = [];

// Check if products array is empty and display a loading spinner or products
if (products.length === 0) {
  section.innerHTML = `<div class="spinner-border m-5" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>`;
} else {
  display(products);
}

// Constructor function to create product objects
function Constructor(id, name, price, url, quantity) {
  this.id = id,
  this.name = name,
  this.price = price,
  this.url = url,
  this.quantity = quantity === 1
}

// Function to search for products based on user input
function search() {
  let searchValue = input.value.toLowerCase();
  let filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchValue));

  if (filteredProducts.length > 0) {
    display(filteredProducts);
    out.textContent = '';
  } else {
    section.innerHTML = '';
    out.textContent = 'Nothing to see here!';
  }
}

// Function to sort and display products alphabetically
function sortProducts() {
  let sortedProducts = [...products];
  sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  display(sortedProducts);
}

// Event listeners for search and sort buttons
let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', search);

let sortBtn = document.getElementById('sortBtn');
sortBtn.addEventListener('click', sortProducts);

// Create instances of the Constructor to represent different products
let item = new Constructor(0, 'Graphic Tee:', 150, 'https://i.postimg.cc/3JTgF62R/f1.jpg');
// ... (similar lines for other items)

// Add products to the products array
products.push(item, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item12, item13, item14, item15, item16);

// Store the products array in local storage
localStorage.setItem('products', JSON.stringify(products));

// Retrieve products from local storage
products = JSON.parse(localStorage.getItem('products'));

// Function to display products in the section element
function display(productList) {
  let items = productList.map(function (product, index) {
    return `<div class="pro">
            <img src="${product.url}" alt="">
            <div class="des">
                <h5>${product.name}</h5>
                <div class="star">
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                </div>
                <h4>R${product.price}</h4>
            </div>
            <button value ='${index}' id="name"<i class='bx bxs-cart'></i></button>
        </div>`;
  });

  section.innerHTML = items.join('');
}

// Display the products initially
display(products);

// Get references to cart buttons and add event listeners
const buttons = [...document.querySelectorAll('#name')];
console.log(buttons);

buttons.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(i);
    let prod = products.find(product => product.id === i);
    console.log(cart);

    // Add the selected product to the cart
    cart.push(prod);
    
    // Delay the update of local storage to ensure cart is updated
    setTimeout(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, 100);
  });
});
