import { addPost } from "../api/addProduct";
import { getProducts } from "../api/getProducts";
import { createProductList } from "./createProductList";
const productsList = document.querySelector(".products");

export const getDataFromAddModal = (event) => {
  event.preventDefault();
  const idValue = event.target.elements.id.value;
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

  getProducts()
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let idExists = false;
      data.forEach((product) => {
        if (product.id === newProduct.id) {
          idExists = true;
        }
      });
      if (idExists) {
        alert("Id exists");
      } else {
        addPost(newProduct)
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
      }
    })
    .catch((error) => {
      console.error("Error", error);
    });

  return newProduct;
};
