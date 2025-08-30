
let cartArr = [];
let products = [];


const showProductsInCart=() =>{
   document.getElementById("cartProductCount").innerText = cartArr.length; 
}

const addToCart=(event)=> {
const product = event.target.getAttribute("data-product");
cartArr.push(JSON.parse(product));
localStorage.setItem('cart', JSON.stringify(cartArr))
showProductsInCart()
}

const addEventToBtns=()=> {
  const buttons = document.querySelectorAll('.addToCartBtn');
  for(let i = 0; i < buttons.length; i++) { 
    const button = buttons[i];
    button.addEventListener("click", addToCart);
  }
}


const showProducts = () => {
    for (let i = 0; i < products.length; i++){
        const product = products[i];
        const strProduct = JSON.stringify(product);
      const productItem = document.createElement("li");
      productItem.dataset.id = product.id;
      productItem.classList.add("productListItem");
      const imgAlt = product.imageAlt ? product.imageAlt : `${product.name} image`;
      productItem.innerHTML = `
        <article class="productContainer" aria-labelledby = "product-${product.id}">
            <img src="${product.imgUrl}" alt="${imgAlt}" class="productImgWrapper"/>
            <div class="productDetails">
            <h2 id="product-${product.id}" class="productName">${product.name}</h2>
            <p class="productShortDesc">${product.shortDesc}</p>
            <p class="productPrice">$${product.price}</p>
            <button data-product='${strProduct}' class="addToCartBtn" aria-label="Add to cart"> Add to Cart</button>
            </div>
        </article>`;
        const list = document.getElementById("products");
        list.appendChild(productItem);
    }
    addEventToBtns();
} 


const getProducts = async () => {
    try {
        const res = await fetch("js/productLists.json");
         products = await res.json();
      showProducts();

    } catch (err) {
        console.error("There is an error fetching the products:", err);
    }

}
    
getProducts();
