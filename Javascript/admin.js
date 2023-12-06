let products = [];
let input = document.querySelector('.form');
let out = document.querySelector('.out');
let section = document.querySelector('.pro-container');
let main = document.querySelector('main');
let cart = []


if (products.length === 0) {
  section.innerHTML = `<div class="spinner-border m-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`
}else {
  display(products)
}

function Constructor(id, name, description, price, url, quantity) {
  this.id = id,
    this.name = name,
    this.description = description,
    this.price = price,
    this.url = url,
    this.quantity = 1
}

function search() {
    let searchValue = input.value.toLowerCase();
    let filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchValue) || product.description.toLowerCase().includes(searchValue));
  
    if (filteredProducts.length > 0) {
      display(filteredProducts);
      out.textContent = '';
    } else {
      section.innerHTML = '';
      out.textContent = 'Nothing to see here!';
    }
  }
  
  function sortProducts() {
    let sortedProducts = [...products];
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    display(sortedProducts);
  }
  
  let searchBtn = document.getElementById('searchBtn');
  searchBtn.addEventListener('click', search);
  
  let sortBtn = document.getElementById('sortBtn');
  sortBtn.addEventListener('click', sortProducts);
  

let item = new Constructor(0, 'Graphic Tee:', 'Express your personality with a cool and trendy graphic tee showcasing your favorite bands, quotes, or artistic designs.', 150, 'https://i.postimg.cc/3JTgF62R/f1.jpg');
let item1 = new Constructor(1, 'shirt2', 'cotton shirt', 150, 'https://i.postimg.cc/7LbHmVN5/f2.jpg');
let item2 = new Constructor(2, 'shirt3', 'cotton', 150, 'https://i.postimg.cc/t4kdhXrX/f3.jpg');
let item3 = new Constructor(3, 'Floral Print Blouse: ', 'Bring a touch of femininity to your wardrobe with a delicately patterned floral blouse, ideal for both work and play.', 150, 'https://i.postimg.cc/4x27fnLh/f4.jpg');
let item4 = new Constructor(4, 'shirt5', 'cotton', 150, 'https://i.postimg.cc/25dsdLs1/f5.jpg');
let item5 = new Constructor(5, 'Striped Oxford Shirt', 'Make a statement with this preppy oxford shirt featuring bold stripes, perfect for a polished yet casual appearance.', 150, 'https://i.postimg.cc/xTWhWPYk/f6.jpg');
let item6 = new Constructor(6, 'shirt7', 'cotton', 150, 'https://i.postimg.cc/3NkfqkcC/f7.jpg');
let item7 = new Constructor(7, 'Bohemian-inspired Peasant Blouse', 'Embrace free-spirited vibes with this flowing and airy top adorned with intricate embroidery and tassel details.', 150, 'https://i.postimg.cc/wBFWT5KQ/f8.jpg');
let item8 = new Constructor(8, 'Linen Button-Up Shirt: ', 'Beat the heat in style with a lightweight and breathable linen shirt, ideal for summer days.', 150, 'https://i.postimg.cc/qR5j2kvt/n1.jpg');
let item9 = new Constructor(9, 'Classic White Button-Down Shirt:', 'Timeless and versatile, this crisp white shirt is a wardrobe essential for any occasion.', 150, 'https://i.postimg.cc/GmRw4jfW/n2.jpg');
let item10 = new Constructor(10, 'shirt11', 'cotton', 150, 'https://i.postimg.cc/SQYwV5b0/n3.jpg');
let item12 = new Constructor(12, 'Chambray Denim Shirt', 'A casual and comfortable option, this denim shirt adds a touch of laid-back style to your look.', 150, 'https://i.postimg.cc/5Nnqz4Kf/n4.jpg');
let item13 = new Constructor(13, 'shirt14', 'cotton', 150, 'https://i.postimg.cc/J46ZnTtn/n5.jpg');
let item14 = new Constructor(14, 'Comfort Stretch Cotton Chinos: ', ' Experience all-day comfort in these cotton chinos with a touch of stretch, providing a tailored fit for a polished appearance.', 150, 'https://i.postimg.cc/ydySzjw7/n6.jpg');
let item15 = new Constructor(15, 'shirt16', 'cotton', 150, 'https://i.postimg.cc/mDjhnDHD/n7.jpg');
let item16 = new Constructor(16, 'shirt17', 'cotton', 150, 'https://i.postimg.cc/gkQjQ1nv/n8.jpg');

products.push(item, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item12, item13, item14, item15, item16);

localStorage.setItem('products', JSON.stringify(products));

products = JSON.parse(localStorage.getItem('products'));

function display(productList) {
  let items = productList.map(function (product, index) {
    return `<div class="pro">
            <img src="${product.url}" alt="">
            <div class="des">
                <span>${product.description}</span>
                <h5>${product.name}</h5>
                <div class="star">
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                </div>
                <h4>${product.price}</h4>
            </div>
            <button class="normal">Edit</button>
            <button class="normal">Delete</button>

        </div>`;
  });

  section.innerHTML = items.join('');
}

display(products);

const buttons = [...document.querySelectorAll('#name')]
console.log(buttons)

buttons.forEach((item, i)=>{
  item.addEventListener('click', (e)=>{
    e.preventDefault()
    // console.log("Hi")
    console.log(i)
    let prod = products.find(product => product.id === i)
    console.log(cart)

    cart.push(prod)
    setTimeout(()=>{
      localStorage.setItem("cart", JSON.stringify(cart))
    },100)
  })
})

