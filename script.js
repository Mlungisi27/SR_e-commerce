const products = [
    {
        id: 1,
        name: "Men's Classic T-Shirt",
        price: 225,
        category: "male",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbEZ1xmB48Lv4cke6iJoOKlVLLwyDQdzcgOA&s",
        description: "Comfortable cotton t-shirt for everyday wear."
    },
    {
        id: 2,
        name: "Women's Summer Dress",
        price: 245,
        category: "female",
        image: "https://img.ltwebstatic.com/images3_pi/2024/10/08/c0/1728366488638f69475f44ad1c88fa9d4b5ee9acbf_thumbnail_405x.webp",
        description: "Lightweight floral dress perfect for summer."
    },
    {
        id: 3,
        name: "Kids' Hoodie",
        price: 230,
        category: "kids",
        image: "https://thefoschini.vtexassets.com/arquivos/ids/187259479-1200-1600?v=638836047864930000&width=1200&height=1600&aspect=true",
        description: "Cozy hoodie for kids, available in multiple colors."
    },
    {
        id: 4,
        name: "Men's Jeans (Sale)",
        price: 350,
        category: "sale",
        image: "https://lowkalsa.co.za/cdn/shop/files/DSC5899_900x.jpg?v=1746187868",
        description: "Stylish men's jeans at a discounted price."
    },
    {
        id: 5,
        name: "Women's Cardigan",
        price: 240,
        category: "female",
        image: "https://thefoschini.vtexassets.com/arquivos/ids/188165090-1200-1600?v=638844076482300000&width=1200&height=1600&aspect=true",
        description: "Soft knit cardigan for layering."
    },
    {
        id: 6,
        name: "Kids' Sneakers (Sale)",
        price: 200,
        category: "sale",
        image: "https://lamaraparis.com/cdn/shop/files/46170_671795e07829d4.95458166_IMG_5640.jpg?v=1732182130&width=1000",
        description: "Durable sneakers for kids, now on sale."
    }
];

//shoping cart section all items the customer wants to buy go here//

let cart = {};

// HTML refrences section ,this connects JS to specific parts of the webpage

const cartCountElement = document.getElementById('cart-count');
const productGrid = document.getElementById('product-grid');
const featuredProduct = document.getElementById('featured-products');

// Utility function section ,to format prices to look like 'R900' insread of '900'

function formartPrice(price) {
    return 'R' + price.toFixed(2) //R900
}

console.log('JavaScript Loades successfully');
console.log('We have', products.length, 'products.');

function createProductCard(product) {
    return `
    <div class="product-card">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info"> 
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                ${formartPrice(product.price)}      
            </div>
            <div class="product-actions">
                <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
                <button class="btn btn-secondary btn-small" onclick="viewProduct(${product.id})">
                    View Details
                </button>            
            </div>
        </div>
    </div>`;
}

function displayProducts(productsToShow = products) {
    if (productGrid) {
        const productHTML = productsToShow.map(createProductCard).join('');
        productGrid.innerHTML = productHTML; 
    }
}

function addToCart(productId) {
    alert('Product ${productId} added to cart! ');
}

function viewProduct(productId) {
    const product = products.find(prod => prod.id === productId)
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded displaying products..');
    displayProducts(products)
});