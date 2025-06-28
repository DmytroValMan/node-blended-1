import { readProducts } from '../utils/readProducts.js';

export const getUniqueCategories = async () => {
  try {
    const products = await readProducts();
    const categoriesArray = products.map((product) => product.category);
    const uniqueCategories = [...new Set(categoriesArray)];
    return uniqueCategories;
  } catch (err) {
    console.error(err);
  }
};

console.log(await getUniqueCategories());
