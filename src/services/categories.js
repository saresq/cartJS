export const getCategories = async () => {
  let response = require('./categories.json');
  const { categories } = response.data;
  console.log(categories)
  return categories;
};
