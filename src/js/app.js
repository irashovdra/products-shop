import { getProducts } from "./api/getProducts";
import { createProductList } from "./layout/createCard";
import { getDataFromAddModal } from "./layout/form";
const body = document.querySelector("body");
const form = document.querySelector(".form");

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

form.addEventListener("submit", () => {
  const data = getDataFromAddModal();
  addProduct(data)
    .then((response) => {
      return response.json();
    })
    .then((product) => {
      const data = createProductList(product);
      body.insertAdjacentHTML("beforeend", data);
    })
    .catch((error) => console.log(error));

  getProducts()
    .then((data) => {
      return data.json();
    })
    .then((product) => {
      const data = createProductList(product);
      body.insertAdjacentHTML("beforeend", data);
    });
});
