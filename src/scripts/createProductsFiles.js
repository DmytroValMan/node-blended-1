import { readProducts } from '../utils/readProducts.js';
import { writeProductsToFiles } from '../utils/writeProductsToFiles.js';

const createProductsFiles = async () => {
  try {
    const products = await readProducts();
    for (let product of products) {
      const fileName = product.name.split(' ').join('-');
      await writeProductsToFiles(product, fileName);
    }
  } catch (err) {
    console.error(err);
  }
};

createProductsFiles();
