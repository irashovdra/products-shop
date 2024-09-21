const e=()=>fetch("http://localhost:3000/products"),t=e=>e.map(({productName:e,price:t,quantity:o,photo:r,description:c,id:n})=>`<li class="product">
      <h2 class="product__name">${e}</h2>
      <p class="product__price">${t}</p>
      <p class="product__quantity">${o}</p>
      <img src="${r}" alt="${e}" class="product__photo">
      <p class="product__description">${c}</p>
      <p class="product__id">${n}</p>
    </li>`).join(""),o=e=>{e.preventDefault();let t=e.target.elements.name.value,o=e.target.elements.price.value,r=e.target.elements.quantity.value;return{productName:t,price:o,quantity:r,photo:e.target.elements.photo.value,description:e.target.elements.description.value}},r=document.querySelector("body"),c=document.querySelector(".form");e().then(e=>e.json()).then(e=>{console.log(e);let o=t(e);r.insertAdjacentHTML("beforeend",o)}).catch(e=>{console.error("Error",e)}),c.addEventListener("submit",()=>{addProduct(o()).then(e=>e.json()).then(e=>{let o=t(e);r.insertAdjacentHTML("beforeend",o)}).catch(e=>console.log(e)),e().then(e=>e.json()).then(e=>{let o=t(e);r.insertAdjacentHTML("beforeend",o)})});
//# sourceMappingURL=index.4612ca1b.js.map
