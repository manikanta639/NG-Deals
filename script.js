// =====================
// Product Data
// =====================
const products = [
  { 
    id: 1, 
    name: "Led Light For Bike", 
    category: "watches", 
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-light/0/q/8/colours-7-multiple-flashing-pattern-led-motorcycle-bike-pack-of-original-imagrmcrbnxy3jwv.jpeg?q=70&crop=false", 
    link: "https://fkrt.co/cs4UBy"
  },
  { 
    id: 2, 
    name: "Solar Wall Lights", 
    category: "watches", 
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/solar-light-set/g/b/k/1-hhsol-99-6-rgb-1-8-homehop-original-imahfcuducj6msgv.jpeg?q=70&crop=false", 
    link: "https://fkrt.co/Nx9GFJ"
  },
  { 
    id: 3, 
    name: "Flickering String Lights", 
    category: "Electronics", 
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/rice-light/g/i/z/280-string-3-05-1-hdrl-new-10x10-fountain-multi-01-home-delight-original-imah4kfhghpvstnt.jpeg?q=70&crop=false", 
    link: "https://fkrt.co/VJeUBD"
  },
  /*{ 
    id: 4, 
    name: "Smart Watch", 
    category: "Electronics", 
    image: "https://m.media-amazon.com/images/I/31TEA0qrUBL._SX342_SY445_QL70_FMwebp_.jpg", 
    link: "https://amzn.to/4nRHt7w"
  },
  { 
    id: 5, 
    name: "Gift Combo Pack", 
    category: "combos", 
    image: "https://m.media-amazon.com/images/I/41TCyNn0GDL._SX342_SY445_.jpg", 
    link: "https://amzn.to/4nRHt7w"
  },
  { 
    id: 6, 
    name: "Casual Shirt", 
    category: "Fashion", 
    image: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30149421/2024/7/8/7305f9f3-5a26-40cd-80ea-f6cb09e6a3601720431638644CantabilMenOpaqueCheckedCasualShirt4.jpg", 
    link: "https://myntr.in/p8WCHF"
  },
  { 
    id: 7, 
    name: "Mixer Grinder", 
    category: "Home Appliances", 
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/mixer-grinder-juicer/o/w/j/-original-imagg8tzqzkfggfs.jpeg?q=70&crop=false", 
    link: "https://fkrt.co/cs4UBy"
  },*/
];


// =====================
// Page Animation
// =====================
function animatePageTransition(callback) {
  const body = document.body;
  body.style.transition = "opacity 0.2s ease-out";
  body.style.opacity = 0;
  setTimeout(() => {
    callback();
    body.style.opacity = 1;
  }, 150);
}


// =====================
// Show/Hide Header
// =====================
function toggleHeaderVisibility(show) {
  const header = document.getElementById("site-header");
  const shopNowDiv = document.querySelector(".cta-btn")?.parentElement;
  if (header) header.style.display = show ? "block" : "none";
  if (shopNowDiv) shopNowDiv.style.display = show ? "block" : "none";
}


// =====================
// Render Products
// =====================
function renderProducts(list, hideHeader = false) {
  toggleHeaderVisibility(!hideHeader);
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  if (!list || list.length === 0) {
    container.innerHTML = `<p>No products found.</p>`;
    return;
  }

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      ${product.id ? `<span class="product-number">#${product.id}</span>` : ""}
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <p class="product-name">${product.name}</p>
      <button class="buy-btn">Buy Now</button>
    `;

    const image = card.querySelector(".product-image");
    const button = card.querySelector(".buy-btn");

    if (product.link) {
      const openLink = () => window.open(product.link, "_blank");
      image.addEventListener("click", openLink);
      button.addEventListener("click", openLink);
    }

    container.appendChild(card);
  });
}


// =====================
// ✅ Dynamic Category Buttons
// =====================
function generateCategoryButtons() {
  const categoryContainer = document.querySelector(".categories");
  categoryContainer.innerHTML = "";

  // Get all unique categories
  const categories = ["all", ...new Set(products.map(p => p.category))];

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    btn.onclick = () => filterByCategory(cat);
    categoryContainer.appendChild(btn);
  });
}


// =====================
// ✅ Flexible Filter by Category
// =====================
function filterByCategory(category) {
  const selected = category.toLowerCase().trim();

  if (selected === "all" || selected === "") {
    animatePageTransition(() => {
      renderProducts(products);
      history.pushState({ page: "home" }, "Home", "#home");
    });
    return;
  }

  const filtered = products.filter(p => 
    p.category && p.category.toLowerCase().trim() === selected
  );

  animatePageTransition(() => {
    if (filtered.length === 0) {
      renderProducts(products); // fallback to all
    } else {
      renderProducts(filtered);
    }
    history.pushState({ page: category }, category, `#${category}`);
  });
}


// =====================
// Search Products
// =====================
function filterProducts() {
  const searchValue = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchValue) || (p.id && p.id.toString().includes(searchValue))
  );
  animatePageTransition(() => renderProducts(filtered));
}


// =====================
// Home Page
// =====================
function showHomePage() {
  animatePageTransition(() => {
    renderProducts(products);
    document.getElementById("search").value = "";
    history.replaceState({ page: "home" }, "Home", "#home");
  });
}


// =====================
// Handle Browser Back/Forward
// =====================
window.onpopstate = function(event) {
  if (event.state) {
    if (event.state.page === "home") {
      showHomePage();
    } else {
      filterByCategory(event.state.page);
    }
  } else {
    showHomePage();
  }
};


// =====================
// Init
// =====================
window.onload = function() {
  history.replaceState({ page: "home" }, "Home", "#home");
  generateCategoryButtons(); // dynamically create categories
  renderProducts(products);
  document.body.style.opacity = 1;
};


