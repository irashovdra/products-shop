import { getProducts } from "./api/getProducts";
import { createProductList } from "./layout/createProductList";
import { getDataFromAddModal } from "./layout/form";
const body = document.querySelector("body");
const form = document.querySelector(".form");

getProducts()
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const product = createProductList(data);

    body.insertAdjacentHTML("beforeend", product);
  })
  .catch((error) => {
    console.error("Error", error);
  });

form.addEventListener("submit", getDataFromAddModal);
