import { readProducts } from '../utils/readProducts.js';

const getTotalPrice = async () => {
  try {
    const products = await readProducts();
    const totalPrice = products.reduce(
      (sum, product) => sum + Number(product.price),
      0,
    );
    return totalPrice;
  } catch (err) {
    console.error(err);
  }
};

console.log(await getTotalPrice());
