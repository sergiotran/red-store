import { getViewData } from '@redStore/utils/viewUtils';
import type { Response, Request } from 'express';
import * as categoryService from '@redStore/services/category.service';
import CreateCategoryDto from '@redStore/dtos/category/create-category.dto';

class AdminController {
  dashboard(req: Request, res: Response) {
    res.render(
      'admin/dashboard',
      getViewData(
        {
          title: 'Trang quản trị',
          layout: 'admin'
        },
        res
      )
    );
  }

  /**
   *
   * Category module
   */
  async categories(req: Request, res: Response) {
    const categories = await categoryService.findAll();

    res.render(
      'admin/category',
      getViewData(
        {
          title: 'Quản lý chuyên mục',
          categories,
          layout: 'admin'
        },
        res
      )
    );
  }
  async category(req: Request, res: Response) {
    const id = req.params.id;
    const category = await categoryService.findOne(+id, true);

    if (!category) {
      return res.redirect('/404');
    }

    res.render(
      'admin/category_detail',
      getViewData(
        {
          title: category!.category_name,
          category,
          layout: 'admin'
        },
        res
      )
    );
  }
  async createCategory(req: Request, res: Response) {
    const { body } = req;
    const data = await categoryService.create(body as CreateCategoryDto);

    res.json(data);
  }
  async updateCategory(req: Request, res: Response) {
    const { body, params } = req;
    const id = params.id;
    const data = await categoryService.update(
      +id,
      body as Partial<CreateCategoryDto>
    );

    res.json(data);
  }
  async removeCategory(req: Request, res: Response) {
    const { params } = req;
    const id = params.id;
    const data = await categoryService.remove(+id);

    res.json(data);
  }

  /**
   *
   * Discount module
   */
  async discounts(req: Request, res: Response) {
    res.render(
      'admin/discount',
      getViewData(
        {
          title: 'Quản lý mã giảm giá',
          layout: 'admin'
        },
        res
      )
    );
  }
  async discount(req: Request, res: Response) {}
  async updateDiscount(req: Request, res: Response) {}
  async removeDiscount(req: Request, res: Response) {}
  async createDiscount(req: Request, res: Response) {}

  /**
   *
   * Product module
   */
  async products(req: Request, res: Response) {
    res.render(
      'admin/product',
      getViewData(
        {
          title: 'Quản lý sản phẩm',
          layout: 'admin'
        },
        res
      )
    );
  }
  async product(req: Request, res: Response) {}
  async createProduct(req: Request, res: Response) {}
  async updateProduct(req: Request, res: Response) {}
  async removeProduct(req: Request, res: Response) {}

  /**
   *
   * User module
   */
  async users(req: Request, res: Response) {
    res.render(
      'admin/user',
      getViewData(
        {
          title: 'Quản lý người dùng',
          layout: 'admin'
        },
        res
      )
    );
  }
  async user(req: Request, res: Response) {}
  async updateUser(req: Request, res: Response) {}
  async removeUser(req: Request, res: Response) {}
  async createUser(req: Request, res: Response) {}
}

export default AdminController;
