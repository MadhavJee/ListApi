
import { Product } from "../models/product.model.js";

export const listProductsService = async () => {
  const products = await Product.find();
  return products;
};


export const createProductService = async (data) => {
  const product = await Product.create(data);
  return product;
};
