import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/products.js';

export const readProducts = async () => {
  try {
    const productsJson = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const products = JSON.parse(productsJson);
    return products;
  } catch (err) {
    console.error(err);
    return [];
  }
};
