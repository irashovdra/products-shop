export const createProductList = (products) => products.map(({ productName, price, quantity, photo, description, id }) => {
      return `<li class="product">
      <h2 class="product__name">${productName}</h2>
      <p class="product__price">${price}</p>
      <p class="product__quantity">${quantity}</p>
      <img src="${photo}" alt="${productName}" class="product__photo">
      <p class="product__description">${description}</p>
      <p class="product__id">${id}</p>
    </li>`;
    })
    .join("");
