// xmlhttprequest
// 1.readystatechange >>>>> true
// 2.status >>>>> 200
// 3.responseText >>>>> data
// 4.response >>>>> data
// function getApi() {
  
//     let xmlHttp = new XMLHttpRequest();
    
    
//     xmlHttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
            
          
//             let change = JSON.parse(this.responseText); 
            // console.log(change);

//             let text = ""; 

//             for (let i = 0; i < change.length; i++) {
//                  let cartona = `
// <div class="col-lg-4 col-md-6 mb-4 ">
//     <div class="card h-100 shadow-sm border-0 hover-card">
//         <div class="card-body">
//             <div class="d-flex justify-content-between align-items-center mb-3 text-center mb-5">
//                 <span class="badge bg-primary rounded-pill">#${change[i].id}</span>
//                 <small class="text-muted">Post</small>
//             </div>
            
//             <h5 class="card-title fw-bold text-dark text-truncate" title="${change[i].title}">
//                 ${change[i].title}
//             </h5>
            
//             <p class="card-text text-secondary">
//                 ${change[i].body.substring(0, 100)}... </p>
//         </div>
        
//         <div class="card-footer bg-transparent border-0 pb-3">
//             <a href="#" class="btn btn-outline-primary w-100">اقرأ المزيد</a>
//         </div>
//     </div>
// </div>
// `
//                 text = cartona+text;

//             }

          
//             document.querySelector(".test").innerHTML = text;
//         }
//     };


//     xmlHttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
//     xmlHttp.send();
// }

// getApi();


// fetch

// fetch ("https://dummyjson.com/products")
// .then((change)=>{
//     return change.json();
//   })
// .then((data)=>{
  
//   let result =''
//   for (let i = 0; i < data.length; i++) {
//     result += `
//     <div class="col-lg-4 col-md-6 mb-4 ">
//     <div class="card h-100 shadow-sm border-0 hover-card">
//         <div class="card-body">
//             <div class="d-flex justify-content-between align-items-center mb-3 text-center mb-5">
//                 <span class="badge bg-primary rounded-pill">#${data[i].id}</span>
//                 <small class="text-muted">Post</small>
//             </div>
            
//             <h5 class="card-title fw-bold text-dark text-truncate" title="${data[i].title}">
//                 ${data[i].title}
//             </h5>
            
//             <p class="card-text text-secondary">
//                 ${data[i].body.substring(0, 100)}... </p>
//         </div>
        
//         <div class="card-footer bg-transparent border-0 pb-3">
//             <a href="#" class="btn btn-outline-primary w-100">اقراء المزيد</a>
// })
//         </div>
//     </div>
// </div>
//     `
//   }
//   document.querySelector(".test").innerHTML = result;
// })


// axios

// async function getApi(){
//   var result= await fetch("https://dummyjson.com/products",{method:"POST"}).then((change)=>{
//     let change = result.json();
//      let da=change.products
//     })
//     .then((data)=>{
//       for (let i = 0; i < data.length; i++) {
//       let convert =''
//       convert += `
//       <div class="col-lg-4 col-md-6 mb-4 ">
//       <div class="card h-100 shadow-sm border-0 hover-card">
//           <div class="card-body">
//               <div class="d-flex justify-content-between align-items-center mb-3 text-center mb-5">
//                   <span class="badge bg-primary rounded-pill">#${data[i].id}</span>
//                   <small class="text-muted">Post</small>
//               </div>
              
//               <h5 class="card-title fw-bold text-dark text-truncate" title="${data[i].title}">
//                   ${data[i].description}
//               </h5>
              
//               <p class="card-text text-secondary">
//                   ${data[i].body.substring(0, 100)}... </p>
//           </div>
          
//           <div class="card-footer bg-transparent border-0 pb-3">
//               <a href="#" class="btn btn-outline-primary w-100">اقراء المزيد</a>
//           </div>
//       </div>
//   </div>
//       `
//     }
//     document.querySelector(".test").innerHTML = convert;
//   })
// }
// getApi();

// let parent = document.getElementById("parent");
// let output = document.getElementById("output");
// let btn = document.getElementsByClassName("btn");

// async function getData() {
//     try {
//         let data = await fetch("https://dummyjson.com/test");
//         let usersData = await data.json();

//         for (let i = 0; i < btn.length; i++) {
//             btn[i].addEventListener("click", function () {
//                 let user = usersData[i]; 
                
//                 if (user) { 
//                     output.innerHTML = `
//                         <div>
//                             <strong>ID:</strong> ${user.id} <br>
//                             <strong>Name:</strong> ${user.name} <br>
//                             <strong>Email:</strong> ${user.email} <br>
//                             <strong>Address:</strong> <br>
//                             - Street: ${user.address.street} <br>
//                             - Suite: ${user.address.suite} <br>
//                             - City: ${user.address.city} <br>
//                             <strong>Phone:</strong> ${user.phone}<br>
//                             <strong>Website:</strong> ${user.website}<br>
//                         </div>
//                     `;
//                 } else {

//                     output.innerHTML = `"There is no data for this user, you are a good guy"<br><br>`;

//                     let img = document.createElement("img");
//                     // img.src = "./images/filem.jpg";
//                     // img.style.width = "500px";   
//                     // img.style.height = "500px";
//                     img.style.display = "block";      
//                     img.style.margin = "10px auto";    

//                     output.appendChild(img);
//                 }
//             });
//         }

//     } catch (error) {
//         output.innerHTML = "حدث خطأ: " + error.message;
//     }
// }

// getData();

// async function getApi() {
        
//         let response = await fetch("https://dummyjson.com/products");
        
//         let result = await response.json();
//         let data = result.products; 
//         let convert = "";

//         for (let i = 0; i < data.length; i++) {
//             convert += `
//             <div class="col-lg-4 col-md-6 mb-4 w-100 text-center">
//                 <div class="card h-100 shadow-sm border-0 hover-card text-center mb-4">
//                     <img src="${data[i].thumbnail}" class="card-img-top" style="height: 200px;" alt="${data[i].title}" style="height: 200px; object-fit: cover;">
                    
//                     <div class="card-body">
//                         <div class="d-flex justify-content-between align-items-center mb-3">
//                             <span class="badge bg-success rounded-pill">$${data[i].price}</span>
//                             <small class="text-muted">Product</small>
//                         </div>
                        
//                         <h5 class="card-title fw-bold text-dark text-truncate" title="${data[i].title}">
//                             ${data[i].title}
//                         </h5>
                        
//                         <p class="card-text text-secondary">
//                             ${data[i].description.substring(0, 100)}... 
//                         </p>
//                     </div>
                    
//                     <div class="card-footer bg-transparent border-0 pb-3">
//                         <a href="#" class="btn btn-outline-success w-100">شراء الآن</a>
//                     </div>
//                 </div>
//             </div>
//             `;
//         }

//         document.querySelector(".test").innerHTML = convert;
// }

// getApi();





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