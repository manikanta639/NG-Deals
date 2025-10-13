// Sample Product Data
const products = [
  /*
  { id: 60, name: "", category: "", image: "", link: ""},
  { id: 59, name: "", category: "", image: "", link: ""},
  { id: 58, name: "", category: "", image: "", link: ""},
  { id: 57, name: "", category: "", image: "", link: ""},
  { id: 56, name: "", category: "", image: "", link: ""},
  { id: 55, name: "", category: "", image: "", link: ""},
  { id: 54, name: "", category: "", image: "", link: ""},
  { id: 53, name: "", category: "", image: "", link: ""},
  { id: 52, name: "", category: "", image: "", link: ""},
  { id: 51, name: "", category: "", image: "", link: ""},
  { id: 50, name: "", category: "", image: "", link: ""},
  { id: 49, name: "", category: "", image: "", link: ""},
  { id: 48, name: "", category: "", image: "", link: ""},
  { id: 47, name: "", category: "", image: "", link: ""},
  { id: 46, name: "", category: "", image: "", link: ""},
  { id: 45, name: "", category: "", image: "", link: ""},
  { id: 44, name: "", category: "", image: "", link: ""},
  { id: 43, name: "", category: "", image: "", link: ""},
  { id: 42, name: "", category: "", image: "", link: ""},
  { id: 41, name: "", category: "", image: "", link: ""},
  { id: 40, name: "", category: "", image: "", link: ""},
  { id: 39, name: "", category: "", image: "", link: ""},
  { id: 38, name: "", category: "", image: "", link: ""},
  { id: 37, name: "", category: "", image: "", link: ""},
  { id: 36, name: "", category: "", image: "", link: ""},
  { id: 35, name: "", category: "", image: "", link: ""},*/
  { id: 34, name: "Wall Clip", category: "gadjets", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/hook/k/p/q/8-1-10-pcs-creative-thumb-wall-hooks-zombula-original-imahec7z6rkfjfnp.jpeg?q=70&crop=false", link: "https://fkrt.co/erSw6H"},
  { id: 33, name: "Makeup Organizer", category: "home appliances", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/vanity-box/f/9/q/portable-dustproof-makeup-organizer-large-cosmetic-storage-original-imagsfyg7vktmvpg.jpeg?q=70&crop=false", link: "https://fkrt.co/D2GsZR"},
  { id: 32, name: "Baby Hair Trimmer", category: "kids", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/trimmer/q/h/s/0-25-4-mm-baby-hair-trimmer-quiet-vacuum-hair-clipper-2-speeds-original-imah8z9z6xc5acfh.jpeg?q=70&crop=false", link: "https://fkrt.co/9ciShC"},
  { id: 31, name: "Solar Garden Light", category: "others", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/solar-light-set/c/m/a/1-gw-913-0-24-gigawatts-original-imahfcgsngqqsxwd.jpeg?q=70&crop=false", link: "https://fkrt.co/AML6Fw"},
  { id: 30, name: "Star Wars Light ", category: "gadjets", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/action-figure/f/a/8/6-star-wars-light-saber-sound-and-light-effect-sabers-without-original-imah48rdekxjkr3j.jpeg?q=70&crop=false", link: "https://fkrt.co/xCaoM6"},
  { id: 29, name: "Decorative Wallpaper", category: "home appliances", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/wall-decoration/m/k/o/decorative-white-gold-wallpaper-70-cm-x-70-cm-pack-of-1-1-original-imahgnemzsyvwmek.jpeg?q=70&crop=false", link: "https://fkrt.co/3taKhl"},
  { id: 28, name: "String Lights", category: "gadjets", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/rice-light/j/c/q/280-string-3-05-1-hdrl-new-10x10-fountain-yellow-01-home-delight-original-imah4kfneg4brxrb.jpeg?q=70&crop=false", link: "https://fkrt.co/DKm5i7"},
  { id: 27, name: "Waterproof Glue", category: "others", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/adhesive-tool/m/t/d/shoe-glue-waterproof-repair-adhesive-instant-strong-repair-tool-original-imagr3wtpufm5gyg.jpeg?q=70&crop=false", link: "https://fkrt.co/SzEnHb"},
  { id: 26, name: "Vera Casa Wallpaper", category: "home appliances", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/wallpaper/t/o/o/200-45-1-wp-1216-2m-vera-casa-original-imahc5aw244hzkgm.jpeg?q=70&crop=false", link: "https://fkrt.co/jNIAc2"},
  { id: 25, name: "Flexible Pipe", category: "others", image: "https://m.media-amazon.com/images/I/61fy-XrNKwL._SL1500_.jpg", link: "https://amzn.to/47a4rzT"},
  { id: 24, name: "Galaxy Light", category: "gadjets", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/table-lamp/l/z/q/galaxy-light-astronaut-space-star-projector-360-adjustable-head-original-imahfzfqy3ggdzff.jpeg?q=70&crop=false", link: "https://fkrt.co/IKIBHE"},
  { id: 23, name: "Cotton Mattress", category: "furniture", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-mattress/q/c/0/single-premium-border-cotton-mattress-spring-duroking-original-imahegzbzrmjwjux.jpeg?q=70&crop=false", link: "https://fkrt.co/Dr2Bjy"},
  { id: 22, name: "Cotton Lumbar Pillow", category: "furniture", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/pillow/x/x/5/6-80561-classic-decorative-bed-pillow-large-wedge-pillows-throw-original-imagyxnfbjdpqmbq.jpeg?q=70&crop=false", link: "https://fkrt.co/hYDCMF"},
  { id: 21, name: "Dining Set", category: "furniture", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/dining-set/l/x/q/147-grey-147-0-rosewood-sheesham-35-rectangle-44-86-35-89-6-original-imahbzhabyzmhszz.jpeg?q=70&crop=false", link: "https://fkrt.co/rWVYIZ"},
  { id: 20, name: "Hand Juicer", category: "home appliances", image: "https://rukminim2.flixcart.com/image/832/832/kmmcrrk0/hand-juicer/y/s/v/na-vatsmart-original-imagfh8gazmc76jc.jpeg?q=70&crop=false", link: "https://fkrt.co/yAGQVV"},
  { id: 19, name: "Wooden Coasters", category: "furniture", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/trivet/l/1/u/1-6pcs-wooden-coasters-tea-coffee-coaster-placemat-for-dining-original-imagxcydy2hgebgp.jpeg?q=70&crop=false", link: "https://fkrt.co/cK1BD2"},
  { id: 18, name: "Electric Chopper", category: "home appliances", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/chopper/r/m/r/premium-electric-chopper-with-3-unique-attachments-garlic-peeler-original-imahdy7kvfteyruw.jpeg?q=70&crop=false", link: "https://fkrt.co/Fz4gyC"},
  { id: 17, name: "Nature Wallpaper", category: "gadjets", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/wallpaper/4/u/e/30-30-1-premium-wall-stickersheet-for-decoration-pack-of-1-original-imahdpxybgwjcv2w.jpeg?q=70&crop=false", link: "https://fkrt.co/omCxvV"},
  { id: 16, name: "Design Switch Board", category: "gadjets", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sticker/t/a/u/medium-heart-design-switch-board-6-25-dbbb0041-decor-villa-original-imah9u2fahfqsyf6.jpeg?q=70&crop=false", link: "https://fkrt.co/wUAW2P"},
  { id: 15, name: "Neck Fan", category: "gadjets", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/usb-gadget/o/5/y/super-quiet-3-speeds-personal-wearable-hemovia-original-imahdqf9mjktgyze.jpeg?q=70&crop=false", link: "https://fkrt.co/qx7FZ6"},
  { id: 14, name: "Sewing Machine", category: "home appliances", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sewing-machine/b/s/d/multifunctional-dual-speed-portable-sewing-machine-with-light-original-imah5r2fzfqcs3gy.jpeg?q=70&crop=false", link: "https://fkrt.co/mQm3Gn"},
  { id: 13, name: "Gps Tracker", category: "gadjets", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/gps-device/e/5/a/gf-08-mini-portable-real-time-personal-and-vehicle-gps-tracker-original-imahgeqvfhj7rhhu.jpeg?q=70&crop=false", link: "https://fkrt.co/iy5DTt"},
  { id: 12, name: "Exhaust Fan", category: "home appliances", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/exhaust-fan/c/9/l/8-200mm-inline-duct-fan-silent-mix-flow-circular-inline-fan-original-imahfp4exhadspzy.jpeg?q=70&crop=false", link: "https://fkrt.co/sE85Rz"},
  { id: 11, name: "Decorative Wallpaper", category: "home appliances", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/wallpaper/2/y/0/70-77-1-pack-of-1-gold-foamsheet-1pc-a-ingorala-original-imahdq5gtaa4zz8x.jpeg?q=70&crop=false", link: "https://fkrt.co/5RitVE"},
  { id: 10, name: "Thermal Laminator", category: "Electronics", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/lamination-machine/x/l/v/9-05-4-98-lm-mini-vms-original-imahdh5vcejpmx2a.jpeg?q=70&crop=false", link: "https://fkrt.co/5V9YNQ"},
  { id: 9, name: "Decoration Lights", category: "gadjets", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/rice-light/g/2/3/280-string-3-05-1-hdrl-new-10x10-fountain-multi-01-home-delight-original-imah4kfhdszs5cnh.jpeg?q=70&crop=false", link: "https://fkrt.co/YGaj29"},
  { id: 8, name: "Sealing Machine", category: "home appliances", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/heat-sealer/f/e/1/10-50-portable-mini-food-sealing-machine-with-cutter-magnet-usb-original-imahg2d5a3pguyyz.jpeg?q=70&crop=false", link: "https://fkrt.co/LeNDeg"},
  { id: 7, name: "Number Lock", category: "gadjets", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/lock/s/5/u/combination-combination-lock-10-digit-push-button-combination-original-imah4ky2crkcp67n.jpeg?q=70&crop=false", link: "https://fkrt.co/3xSoet"},
  { id: 6, name: "Wire Stripper", category: "gadjets", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/plier/h/z/t/10-5-in-1-multifunctional-wire-stripper-combination-original-imah5ggstt5ahjaf.jpeg?q=70&crop=false", link: "https://fkrt.co/YhPPww"},
  { id: 5, name: "WiFi Bulb Camera", category: "gadjets", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/home-security-camera/0/g/z/2-wifi-bulb-camera-1080p-with-360-view-wireless-smart-ip-cctv-original-imahfcty5kpwgtjk.jpeg?q=70&crop=false", link: "https://fkrt.co/s0H6mm"},
  { id: 4, name: "Stickers & Decal", category: "Accessories", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/car-sticker/j/g/s/2-color-splash-pikachu-sticker-vibrant-artistic-pok-mon-design-original-imahfcvngvbakwvv.jpeg?q=70&crop=false", link: "https://fkrt.co/BRXTMH"},
  { id: 3, name: "String Lights", category: "gadjets", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/rice-light/g/i/z/280-string-3-05-1-hdrl-new-10x10-fountain-multi-01-home-delight-original-imah4kfhghpvstnt.jpeg?q=70&crop=false", link: "https://fkrt.co/VJeUBD"},
  { id: 2, name: "Solar Wall Lights", category: "gadjets", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/solar-light-set/g/b/k/1-hhsol-99-6-rgb-1-8-homehop-original-imahfcuducj6msgv.jpeg?q=70&crop=false", link: "https://fkrt.co/Nx9GFJ"},
  { id: 1, name: "Led Light For Bike", category: "gadjets", image: "https://rukminim2.flixcart.com/image/832/832/xif0q/shopsy-light/0/q/8/colours-7-multiple-flashing-pattern-led-motorcycle-bike-pack-of-original-imagrmcrbnxy3jwv.jpeg?q=70&crop=false", link: "https://fkrt.co/cs4UBy"},
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

















