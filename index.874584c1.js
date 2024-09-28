const e=()=>fetch("http://localhost:3000/products"),t=e=>fetch("http://localhost:3000/products",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}}),o=({id:e,productName:t,price:o,quantity:r,photo:c,description:n})=>`<li class="product">
   <p class="product__id">${e}</p>
      <h2 class="product__name">${t}</h2>
      <p class="product__price">${o}</p>
      <p class="product__quantity">${r}</p>
      <img src="${c}" alt="${t}" class="product__photo">
      <p class="product__description">${n}</p>
    </li>`,r=e=>e.map(e=>o(e)).join(""),c=document.querySelector("body"),n=document.querySelector("body"),s=document.querySelector(".form");e().then(e=>e.json()).then(e=>{let t=r(e);n.insertAdjacentHTML("beforeend",t)}).catch(e=>{console.error("Error",e)}),s.addEventListener("submit",o=>{o.preventDefault();let n=o.target.elements.name.id,s=o.target.elements.name.value,a=o.target.elements.price.value,p={id:n,productName:s,price:a,quantity:o.target.elements.quantity.value,photo:o.target.elements.photo.value,description:o.target.elements.description.value};return t(p),e().then(e=>e.json()).then(e=>{console.log(e);let t=r(e);c.insertAdjacentHTML("beforeend",t)}).catch(e=>{console.error("Error",e)}),p});
//# sourceMappingURL=index.874584c1.js.map
