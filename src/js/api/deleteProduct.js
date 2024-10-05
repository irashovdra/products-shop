export const deleteProduct = (id) => {
  const options = {
    method: "DELETE",
  };
  return fetch(`http://localhost:3000/products/${id}`, options);
};
