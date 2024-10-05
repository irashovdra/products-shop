export const updateProduct = (id, updatedProduct) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(updatedProduct),

    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  console.log(id, updatedProduct);
  return fetch(`http://localhost:3000/products/${id}`, options);
};
