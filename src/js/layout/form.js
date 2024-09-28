import { addPost } from "../api/addProduct";
import { getProducts } from "../api/getProducts";
import { createProductList } from "./createProductList";
const body = document.querySelector("body");
export const getDataFromAddModal = (event) => {
  event.preventDefault();
  const idValue = event.target.elements.name.id;
  const nameValue = event.target.elements.name.value;
  const priceValue = event.target.elements.price.value;
  const quantityValue = event.target.elements.quantity.value;
  const photoValue = event.target.elements.photo.value;
  const descriptionValue = event.target.elements.description.value;
  const newProduct = {
    id: idValue,
    productName: nameValue,
    price: priceValue,
    quantity: quantityValue,
    photo: photoValue,
    description: descriptionValue,
  };
  addPost(newProduct);
  getProducts()
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const product = createProductList(data);
      body.insertAdjacentHTML("beforeend", product);
    })
    .catch((error) => {
      console.error("Error", error);
    });
  return newProduct;
};
