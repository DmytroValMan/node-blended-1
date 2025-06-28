import { readProducts } from '../utils/readProducts.js';

const getProductsByMinPrice = async (minPrice) => {
  try {
    const products = await readProducts();
    const filterdProducts = products.filter(
      (product) => product.price >= minPrice,
    );
    return filterdProducts;
  } catch (err) {
    console.error(err);
  }
};

console.log(await getProductsByMinPrice(492.79));
