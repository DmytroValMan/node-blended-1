import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const generateProducts = async (quantity) => {
  const productsArray = [];
  for (let i = 0; i < quantity; i++) {
    const product = createFakeProduct();
    productsArray.push(product);
  }
  try {
    const currenProducts = await readProducts();
    const updatedContacts = [...currenProducts, ...productsArray];
    await writeProducts(updatedContacts);
  } catch (err) {
    console.error(err);
  }
};

generateProducts(1);
