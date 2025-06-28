import * as fs from 'node:fs/promises';

import { PATH_FILES_DIR } from '../constants/products.js';

export const writeProductsToFiles = async (newProduct, fileName) => {
  try {
    const jsonProduct = JSON.stringify(newProduct, null, 2);
    await fs.writeFile(`${PATH_FILES_DIR}/${fileName}.json`, jsonProduct);
  } catch (err) {
    console.error(err);
  }
};
