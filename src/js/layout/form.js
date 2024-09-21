import { getProducts } from "../api/getProducts";
import { addProduct } from "../api/addProduct";

export const getDataFromAddModal = (event) => {
  event.preventDefault();
  const nameValue = event.target.elements.name.value;
  const priceValue = event.target.elements.price.value;
  const quantityValue = event.target.elements.quantity.value;
  const photoValue = event.target.elements.photo.value;
  const descriptionValue = event.target.elements.description.value;
  const newProduct = {
    productName: nameValue,
    price: priceValue,
    quantity: quantityValue,
    photo: photoValue,
    description: descriptionValue,
  };
  return newProduct;
};
