export const addPost = (post) => {
  const options = {
    method: "POST",

    body: JSON.stringify(post),

    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  return fetch("http://localhost:3000/products", options);
};
