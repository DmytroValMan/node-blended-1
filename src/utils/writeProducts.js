import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/products.js';

export const writeProducts = async (newProduct) => {
  try {
    const jsonProduct = JSON.stringify(newProduct, null, 2);
    await fs.writeFile(PATH_DB, jsonProduct);
  } catch (err) {
    console.error(err);
  }
};
