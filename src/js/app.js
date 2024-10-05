import { deleteProduct } from "./api/deleteProduct";
import { getProducts } from "./api/getProducts";
import { createProductList } from "./layout/createProductList";
import { getDataFromAddModal } from "./layout/form";
import { deleteProduct } from "./api/deleteProduct";
import { updateProduct } from "./api/updateProduct";
import { getDataFromUpdateForm } from "./layout/update-form";
const body = document.querySelector("body");
const form = document.querySelector(".form");
const updateForm = document.querySelector(".update-form");

getProducts()
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const product = createProductList(data);
    body.insertAdjacentHTML("beforeend", product);

    const deleteBtn = document.querySelector(".delete__btn");
    deleteBtn.addEventListener("click", (event) => {
      const id = event.target.id;
      console.log(id);
      deleteProduct(id)
        .then(() => console.log("Post deleted"))
        .catch((error) => console.log("Error:", error));
    });
  })
  .catch((error) => {
    console.error("Error", error);
  });

form.addEventListener("submit", getDataFromAddModal);

updateForm.addEventListener("submit", getDataFromUpdateForm);
