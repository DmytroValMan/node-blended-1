import { readProducts } from '../utils/readProducts.js';

const groupProductsByCategories = async () => {
  try {
    const products = await readProducts();

    const categoriesNames = products.reduce((acc, product) => {
      if (acc[product.category]) {
        acc[product.category].push(product.name);
      } else {
        acc[product.category] = [product.name];
      }
      return acc;
    }, {});
    return categoriesNames;
  } catch (err) {
    console.error(err);
  }
};

console.log(await groupProductsByCategories());
