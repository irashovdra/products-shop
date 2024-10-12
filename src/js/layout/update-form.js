import { updateProduct } from "../api/updateProduct";
import { getProducts } from "../api/getProducts";
import { createProductList } from "./createProductList";
const productsList = document.querySelector(".products");

export const getDataFromUpdateForm = (event) => {
  event.preventDefault();

  const updatedProduct = {
    id: event.target.elements.id.value,
    productName: event.target.elements.name.value,
    price: event.target.elements.price.value,
    photo: event.target.elements.photo.value,
    quantity: event.target.elements.quantity.value,
    description: event.target.elements.description.value,
  };
  updateProduct(updatedProduct.id, updatedProduct)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      getProducts()
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const product = createProductList(data);
          productsList.innerHTML = product;
        });
    });
  getProducts()
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const product = createProductList(data);
      productsList.innerHTML = product;
    })
    .catch((error) => {
      console.error("Error", error);
    });
  return updatedProduct;
};
