export const createCard = ({
  id,
  productName,
  price,
  quantity,
  photo,
  description,
}) => {
  return `<li class="product">
   <p class="product__id">${id}</p>
      <h2 class="product__name">${productName}</h2>
      <p class="product__price">${price}</p>
      <p class="product__quantity">${quantity}</p>
      <img src="${photo}" alt="${productName}" class="product__photo">
      <p class="product__description">${description}</p>
    </li>`;
};
