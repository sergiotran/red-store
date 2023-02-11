import { useDataSource } from 'typeorm-extension';
import Category from '@redStore/models/category.model';
import CreateCategoryDto from '@redStore/dtos/category/create-category.dto';
import createError from 'http-errors';

export const findAll = async (relation = false) => {
  try {
    const dataSource = await useDataSource('source');
    const repository = await dataSource.getRepository(Category);
    const data = await repository.find({
      relations: {
        category_products: relation
      }
    });

    return {
      status: 200,
      data
    };
  } catch (error) {
    throw error as Error;
  }
};

export const findOneById = async (id: number, relation = false) => {
  try {
    const dataSource = await useDataSource('source');
    const repository = await dataSource.getRepository(Category);
    const data = await repository.findOne({
      where: {
        category_id: id
      },
      relations: {
        category_products: relation
      }
    });

    return {
      status: 200,
      data
    };
  } catch (error) {
    return {
      status: 404,
      message: 'Category not found',
      data: null
    };
  }
};

export const findOneByField = async (field: keyof Category, value: unknown) => {
  try {
    const dataSource = await useDataSource('source');
    const repository = await dataSource.getRepository(Category);
    const data = await repository.findOne({
      where: {
        [field]: value
      }
    });

    return {
      status: 200,
      data
    };
  } catch (error) {
    return {
      status: 404,
      message: 'Category not found',
      data: null
    };
  }
};

export const create = async (dto: CreateCategoryDto) => {
  const dataSource = await useDataSource('source');
  const repository = await dataSource.getRepository(Category);
  const existData = await findOneByField('category_name', dto.category_name);
  if (existData.data && existData.status === 200) {
    return {
      status: 400,
      message: 'Chuyên mục đã tồn tại',
      data: null
    };
  }

  const data = await repository
    .createQueryBuilder()
    .insert()
    .into(Category)
    .values(dto)
    .execute();

  return {
    status: 201,
    data
  };
};

export const update = async (id: number, dto: Partial<CreateCategoryDto>) => {
  try {
    const dataSource = await useDataSource('source');
    const repository = await dataSource.getRepository(Category);

    const data = await repository
      .createQueryBuilder()
      .update(Category)
      .set(dto)
      .where('category_id = :id', { id })
      .execute();

    return {
      status: 200,
      data
    };
  } catch (error) {
    return {
      status: 400,
      message: 'Something went wrong!',
      data: null
    };
  }
};

export const remove = async (id: number) => {
  try {
    const dataSource = await useDataSource('source');
    const repository = await dataSource.getRepository(Category);

    const data = await repository
      .createQueryBuilder()
      .delete()
      .where('category_id = :id', { id })
      .execute();

    return {
      status: 200,
      data
    };
  } catch (error) {
    return {
      status: 400,
      message: 'Something went wrong!',
      data: null
    };
  }
};
