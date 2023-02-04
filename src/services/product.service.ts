import { useDataSource } from "typeorm-extension";
import Product from '@redStore/models/product.model';

export const findAll = async () => {
  try {
    const dataSource = await useDataSource('source');
    const data = await dataSource.manager.find(Product);
    return data;
  } catch (error) {
    throw error as Error; 
  }
}

export const create = async () => {

};

export const update = async () => {

}

export const remove = async () => {

}