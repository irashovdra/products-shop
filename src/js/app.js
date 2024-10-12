import { getProducts } from "./api/getProducts";
import { createProductList } from "./layout/createProductList";
import { getDataFromAddModal } from "./layout/form";
import { deleteProduct } from "./api/deleteProduct";
import { getDataFromUpdateForm } from "./layout/update-form";
const productsList = document.querySelector(".products");
const form = document.querySelector(".form");
const updateForm = document.querySelector(".update-form");

getProducts()
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const product = createProductList(data);
    productsList.innerHTML = product;

    
  })
  .catch((error) => {
    console.error("Error", error);
  });

const deleteProductFromList = async() => {
    const deleteBtns = document.querySelectorAll(".delete__btn");
    deleteBtns.forEach((deleteBtn) => {
      deleteBtn.addEventListener("click", (event) => {
        const id = event.target.id;
        deleteProduct(id)
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
          .catch((error) => console.log("Error:", error));
      });
    });
  }

form.addEventListener("submit", getDataFromAddModal);

updateForm.addEventListener("submit", getDataFromUpdateForm);
