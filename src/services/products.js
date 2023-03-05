export const getProducts = async () => {
  let response = require("./products.json");
  const { products } = response.data;
  return products;
};
