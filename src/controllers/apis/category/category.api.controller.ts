import { Request, Response } from 'express';
import * as categoryService from '@redStore/services/category.service';
import CreateCategoryDto from '@redStore/dtos/category/create-category.dto';

class CategoryAPIController {
  async findAll(req: Request, res: Response) {
    const data = (await categoryService.findAll()) || [];
    res.status(data.status).json(data);
  }

  async findOne(req: Request, res: Response) {
    const id = req.params.id;
    const data = await categoryService.findOneById(+id, true);
    res.status(data.status).json(data);
  }

  async create(req: Request, res: Response) {
    const { body } = req;
    const response = await categoryService.create(body as CreateCategoryDto);
    res.status(response.status).json(response);
  }

  async update(req: Request, res: Response) {
    const { body, params } = req;
    const id = params.id;
    const data = await categoryService.update(
      +id,
      body as Partial<CreateCategoryDto>
    );
    res.status(data.status).json(data);
  }

  async delete(req: Request, res: Response) {
    const { params } = req;
    const id = params.id;
    const data = await categoryService.remove(+id);
    res.status(data.status).json(data);
  }
}

export default CategoryAPIController;
