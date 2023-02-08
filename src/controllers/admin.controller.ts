/* eslint-disable @typescript-eslint/no-empty-function */
import { getViewData } from '@redStore/utils/viewUtils';
import type { Response, Request } from 'express';
import * as categoryService from '@redStore/services/category.service';
import { removeVietnameseTones } from '@redStore/utils';

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

  async listCategory(req: Request, res: Response) {
    const { query } = req;
    const data = await categoryService.findAll();

    if (query.q) {
      data.data = data.data.filter((category) => {
        const queryString = removeVietnameseTones(query.q as string);
        const isSearchWithId = !Number.isNaN(+queryString);
        if (isSearchWithId) {
          return category.category_id === +queryString;
        }
        return (
          removeVietnameseTones(category.category_name)
            .toLowerCase()
            .indexOf(removeVietnameseTones(query.q as string).toLowerCase()) >
            -1 || category.category_id === +(query.q as string)
        );
      });
    }

    res.render(
      'admin/category/list',
      getViewData(
        {
          title: 'Quản lý chuyên mục',
          categories: data.data || [],
          searchQuery: query.q || '',
          layout: 'admin'
        },
        res
      )
    );
  }
  async categoryDetail(req: Request, res: Response) {
    const id = req.params.id;
    const { status, data } = await categoryService.findOne(+id, true);

    if (!data) {
      return res.redirect('/404');
    }

    res.status(status).render(
      'admin/category/detail',
      getViewData(
        {
          title: `Chuyên mục: ${data.category_name}`,
          category: data,
          layout: 'admin'
        },
        res
      )
    );
  }
  async createCategory(req: Request, res: Response) {
    res.render(
      'admin/category/create',
      getViewData(
        {
          title: 'Tạo mới chuyên mục',
          layout: 'admin'
        },
        res
      )
    );
  }

  /**
   *
   * Discount module
   */
  async listDiscounts(req: Request, res: Response) {
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
  async discountDetail(req: Request, res: Response) {}
  async createDiscount(req: Request, res: Response) {}

  /**
   *
   * Product module
   */
  async listProducts(req: Request, res: Response) {
    res.render(
      'admin/product/list',
      getViewData(
        {
          title: 'Quản lý sản phẩm',
          layout: 'admin'
        },
        res
      )
    );
  }
  async productDetail(req: Request, res: Response) {}
  async createProduct(req: Request, res: Response) {
    res.render(
      'admin/product/create',
      getViewData(
        {
          title: 'Tạo mới sản phẩm',
          layout: 'admin'
        },
        res
      )
    );
  }

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
