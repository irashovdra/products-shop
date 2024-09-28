import { createCard } from "./createCard";

export const createProductList = (products) => {
  return products
    .map((product) => {
      return createCard(product);
    })
    .join("");
};
