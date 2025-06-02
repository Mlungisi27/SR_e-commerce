const products = [
    {
        id: 1,
        name: "Men's Classic T-Shirt",
        price: 225,
        category: "male",
        image: "https://via.placeholder.com/300x200/3b82f6/white?text=Men%27s+Classic+T-Shirt",
        description: "Comfortable cotton t-shirt for everyday wear."
    },
    {
        id: 2,
        name: "Women's Summer Dress",
        price: 245,
        category: "female",
        image: "https://via.placeholder.com/300x200/f472b6/white?text=Women%27s+Summer+Dress",
        description: "Lightweight floral dress perfect for summer."
    },
    {
        id: 3,
        name: "Kids' Hoodie",
        price: 230,
        category: "kids",
        image: "https://via.placeholder.com/300x200/10b981/white?text=Kids%27+Hoodie",
        description: "Cozy hoodie for kids, available in multiple colors."
    },
    {
        id: 4,
        name: "Men's Jeans (Sale)",
        price: 350,
        category: "sale",
        image: "https://via.placeholder.com/300x200/f59e0b/white?text=Men%27s+Jeans+Sale",
        description: "Stylish men's jeans at a discounted price."
    },
    {
        id: 5,
        name: "Women's Cardigan",
        price: 240,
        category: "female",
        image: "https://via.placeholder.com/300x200/8b5cf6/white?text=Women%27s+Cardigan",
        description: "Soft knit cardigan for layering."
    },
    {
        id: 6,
        name: "Kids' Sneakers (Sale)",
        price: 200,
        category: "sale",
        image: "https://via.placeholder.com/300x200/ec4899/white?text=Kids%27+Sneakers+Sale",
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
