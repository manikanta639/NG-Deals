// Sample Product Data
const products = [
  /*
  { 
    id: 22, name: "", category: "", image: "", 
    link: ""
  },{ 
    id: 21, name: "", category: "", image: "", 
    link: ""
  },{ 
    id: 20, name: "", category: "", image: "", 
    link: ""
  },{ 
    id: 19, name: "", category: "", image: "", 
    link: ""
  },{ 
    id: 18, name: "", category: "", image: "", 
    link: ""
  },{ 
    id: 17, name: "", category: "", image: "", 
    link: ""
  },{ 
    id: 16, name: "", category: "", image: "", 
    link: ""
  },{ 
    id: 15, name: "", category: "", image: "", 
    link: ""
  },{ 
    id: 14, name: "", category: "", image: "", 
    link: ""
  },{ 
    id: 13, name: "", category: "", image: "", 
    link: ""
  },{ 
    id: 12, name: "", category: "", image: "", 
    link: ""
  },{ 
    id: 11, name: "", category: "", image: "", 
    link: ""
  },
  { 
    id: 10, name: "", category: "", image: "", 
    link: ""
  },
  { 
    id: 9, name: "", category: "", image: "", 
    link: ""
  },
  { 
    id: 8, name: "", category: "", image: "", 
    link: ""
  },
  { 
    id: 7, name: "", category: "", image: "", 
    link: ""
  },
  { 
    id: 6, name: "", category: "", image: "", 
    link: ""
  },
  { 
    id: 5, name: "", category: "", image: "", 
    link: ""
  },
  */
  { 
    id: 4, name: "Stickers & Decal", category: "Accessories", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/car-sticker/j/g/s/2-color-splash-pikachu-sticker-vibrant-artistic-pok-mon-design-original-imahfcvngvbakwvv.jpeg?q=70&crop=false", 
    link: "https://fkrt.co/BRXTMH"
  },
  { 
    id: 3, 
    name: "Flickering String Lights", 
    category: "Home Appliances", 
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/rice-light/g/i/z/280-string-3-05-1-hdrl-new-10x10-fountain-multi-01-home-delight-original-imah4kfhghpvstnt.jpeg?q=70&crop=false", 
    link: "https://fkrt.co/VJeUBD"
  },
  { 
    id: 2, 
    name: "Solar Wall Lights", 
    category: "Home Appliances", 
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/solar-light-set/g/b/k/1-hhsol-99-6-rgb-1-8-homehop-original-imahfcuducj6msgv.jpeg?q=70&crop=false", 
    link: "https://fkrt.co/Nx9GFJ"
  },
  { 
    id: 1, 
    name: "Led Light For Bike", 
    category: "Home Appliances", 
    image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-light/0/q/8/colours-7-multiple-flashing-pattern-led-motorcycle-bike-pack-of-original-imagrmcrbnxy3jwv.jpeg?q=70&crop=false", 
    link: "https://fkrt.co/cs4UBy"
  },
];

// ✅ Combo Products Data (Scalable) — Do Not Remove
/*const comboProducts = {
  3: [
    {
      name: "Watch 1",
      image: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/a/b/b/-original-imahgcstz6guamgu.jpeg?q=70&crop=false",
      link: "http://bit.ly/48e06hf"
    },
    {
      name: "Watch 2",
      image: "https://rukminim2.flixcart.com/image/832/832/xif0q/watch/l/f/p/-original-imahgcsvkfjz8nxy.jpeg?q=70&crop=false",
      link: "http://bit.ly/3WrzFgN"
    }
  ],
  4: [
    {
      name: "Mixer 1",
      image: "https://rukminim2.flixcart.com/image/832/832/xif0q/mixer-grinder-juicer/x/z/y/-original-imaggzpsspqq6n8p.jpeg?q=70&crop=false",
      link: "http://bit.ly/4nCmCFs"
    },
    {
      name: "Mixer 2",
      image: "https://rukminim2.flixcart.com/image/832/832/xif0q/mixer-grinder-juicer/l/f/p/-original-imahgcsvkfjz8nxy.jpeg?q=70&crop=false",
      link: "http://bit.ly/4o6ozKg"
    }
  ]
};*/

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

    if (product.isCombo && comboProducts[product.id]) {
      const showCombo = () => {
        animatePageTransition(() => {
          renderProducts(comboProducts[product.id], true);
          history.pushState({ page: "combo", comboId: product.id }, "Combo", `#combo-${product.id}`);
        });
      };
      image.addEventListener("click", showCombo);
      button.addEventListener("click", showCombo);
    } else if (product.link) {
      const openLink = () => window.open(product.link, "_blank");
      image.addEventListener("click", openLink);
      button.addEventListener("click", openLink);
    }

    container.appendChild(card);
  });
}

// =====================
// Filter by Category
// =====================
function filterByCategory(category) {
  if (category === "all") {
    animatePageTransition(() => {
      renderProducts(products);
      history.pushState({ page: "home" }, "Home", "#home");
    });
  } else {
    const filtered = products.filter(p => p.category === category);
    animatePageTransition(() => {
      renderProducts(filtered);
      history.pushState({ page: category }, category, `#${category}`);
    });
  }
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
    if (event.state.page === "combo" && event.state.comboId) {
      renderProducts(comboProducts[event.state.comboId], true);
    } else if (event.state.page === "home") {
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
  renderProducts(products);
  document.body.style.opacity = 1;
};

