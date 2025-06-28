import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const modifyProducts = async () => {
  const products = await readProducts();
  const modifiedProducts = products.map((product) => ({
    name: product.name,
    price: product.price,
    category: product.category,
  }));
  await writeProducts(modifiedProducts);
};

modifyProducts();
