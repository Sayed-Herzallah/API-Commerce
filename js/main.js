
// --- Constants & DOM Elements ---
const BASE_URL = "https://dummyjson.com";
const productsContainer = document.getElementById("productsContainer");
const loader = document.getElementById("loader");
const errorMsg = document.getElementById("errorMessage");
const noResultsMsg = document.getElementById("noResultsMessage");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");


let allProductsData = [];

// --- Initialization ---
async function initApp() {
    try {
        toggleLoader(true);

        const [products, categories] = await Promise.all([
            fetchData(`${BASE_URL}/products?limit=30`),
            fetchData(`${BASE_URL}/products/categories`)
        ]);

        allProductsData = products.products;
        
        populateCategories(categories);
        renderProducts(allProductsData); 
        setupEventListeners(); 

    } catch (error) {
        showError("عذراً، حدث خطأ في الاتصال بالسيرفر.");
        console.error("Init Error:", error);
    } finally {
        toggleLoader(false);
    }
}

// --- Event Listeners ---
function setupEventListeners() {
 
    searchInput.addEventListener('input', applyFilters);

    categorySelect.addEventListener('change', applyFilters);
}

// --- Filtering Logic ---
function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedCategory = categorySelect.value;

    const filteredProducts = allProductsData.filter(product => {
      
        const matchesSearch = product.title.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });

    renderProducts(filteredProducts);
}

// --- Data Fetching (Generic Function) ---
async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
    return await response.json();
}

// --- Rendering Functions ---
function renderProducts(products) {
    productsContainer.innerHTML = ""; 
    
    if (products.length === 0) {
        noResultsMsg.classList.remove("d-none"); 
        return;
    } else {
        noResultsMsg.classList.add("d-none");
    }

    const productsHTML = products.map(product => {
        const starsHTML = generateStars(product.rating); 
        const discountedPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);

        return `
        <div class="col-lg-3 col-md-6 col-sm-12 animate-fade-in">
            <div class="card h-100 border-0 shadow-sm product-card position-relative">
                 <span class="badge bg-danger discount-badge">خصم ${Math.round(product.discountPercentage)}%</span>
                <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}" loading="lazy">
                
                <div class="card-body d-flex flex-column p-3">
                     <div class="mb-2 text-muted small text-uppercase">${product.category}</div>
                    <h5 class="card-title text-dark text-truncate fw-bold mb-1" title="${product.title}">
                        ${product.title}
                    </h5>
                    
                    <div class="d-flex align-items-center mb-3 rating-stars small">
                        <span class="me-1 fw-bold text-dark">(${product.rating})</span>
                        ${starsHTML}
                    </div>

                     <div class="mt-auto">
                         <div class="d-flex align-items-center">
                            <h5 class="mb-0 me-2 fw-bold text-primary">$${discountedPrice}</h5>
                            <small class="text-muted text-decoration-line-through">$${product.price}</small>
                         </div>
                        <button class="btn btn-primary w-100 mt-3 rounded-pill">
                            <i class="bi bi-cart-plus me-1"></i> إضافة للسلة
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `}).join('');

    productsContainer.innerHTML = productsHTML;
}


function populateCategories(categories) {
    const optionsHTML = categories.map(cat => {
    
        return `<option value="${cat.slug}">${cat.name}</option>`;
    }).join('');

    categorySelect.insertAdjacentHTML('beforeend', optionsHTML);
}


function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHtml = '';

    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="bi bi-star-fill"></i>';
    }
    if (hasHalfStar) {
        starsHtml += '<i class="bi bi-star-half"></i>';
    }
    return starsHtml;
}


function toggleLoader(show) {
    loader.style.display = show ? "block" : "none";
    productsContainer.classList.toggle("d-none", show); 
}

function showError(message) {
    errorMsg.textContent = message;
    errorMsg.classList.remove("d-none");
    productsContainer.innerHTML = "";
}


initApp();
