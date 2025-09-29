const products = [

    {
        name: "Safari Trolley",
        image: "https://m.media-amazon.com/images/I/31GTn8d3i2L._SY300_SX300_QL70_FMwebp_.jpg",
        link: "https://amzn.to/46IyXk2",
        number: "101",
    },
    {
        name: "GOBOULT Headphones",
        image: "https://m.media-amazon.com/images/I/71CzM6hiu6L._SL1500_.jpg",
        link: "https://amzn.to/4nimVVG",
        number: "102",

    },
    {
        name: "Iphone 16 Pro Max",
        image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg",
        link: "https://amzn.to/4nRHt7w",
        number: "103",
    },
    {
        name: "Samsung S25 Ultra",
        image: "https://m.media-amazon.com/images/I/41Z6HmfzIML._SY300_SX300_QL70_FMwebp_.jpg",
        link: "https://amzn.to/4myygzK",
        number: "104",

    },
    {
        name: "Oneplus 13",
        image: "https://m.media-amazon.com/images/I/41h2cTyybzL._SY300_SX300_QL70_FMwebp_.jpg",
        link: "https://amzn.to/4mxnmtZ",
        number: "105",
    },
    {
        name: "Xiaomi 15",
        image: "https://m.media-amazon.com/images/I/31S5OWe5VBL._SY300_SX300_QL70_FMwebp_.jpg",
        link: "https://amzn.to/4pC1PTL",
        number: "106",

    },
    {
        name: "Vivo X Fold5",
        image: "https://m.media-amazon.com/images/I/4132NJticPL._SY300_SX300_QL70_FMwebp_.jpg",
        link: "https://amzn.to/425q96f",
        number: "107",
        category: "electronics",
        subcategory: ["mobiles"]
    },
    {
        name: "Oppo Find X8",
        image: "data:image/jpeg;base64,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",
        link: "https://amzn.to/4n4yJdE",
        number: "108",
        
    },
  
];
// Display products
function displayProducts(list) {
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    list.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="product-number">#${product.number}</div>
            <img src="${product.image}" alt="${product.name}">
            <div class="product-name">${product.name}</div>
            <a href="${product.link}" target="_blank">
                <button class="buy-btn">Buy Now</button>
            </a>
        `;

        container.appendChild(card);
    });
}

// Search filter
function filterProducts() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(searchValue) ||
        p.number.toLowerCase().includes(searchValue)
    );
    displayProducts(filtered);
}

// Initial load
displayProducts(products);


















