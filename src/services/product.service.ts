import { DataSource } from 'typeorm'
import initDatabase from '../app/database';
import Product from '../models/product.model';

export const findAll = async () => {
  try {
    const datasouce = await initDatabase();
    const data = datasouce.getRepository(Product);
    const products = await data.find();

    return products
  } catch (error) {
    throw error as Error; 
  }
}