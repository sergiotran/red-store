import type { Response, Request } from 'express';
import { APP_TITLE } from '@redStore/constants/global';
import { getViewData } from '@redStore/utils/viewUtils';
import { findAll as findAllProducts } from '@redStore/services/product.service';
import { findAll as findAllCategories } from '@redStore/services/category.service';

class MainController {
  async homePage(req: Request, res: Response) {
    const products = await findAllProducts();
    const categories = await findAllCategories();

    res.render(
      'home',
      getViewData(
        {
          title: APP_TITLE,
          products,
          categories
        },
        res
      )
    );
  }

  aboutPage(req: Request, res: Response) {
    res.render(
      'about',
      getViewData(
        {
          title: 'Giới thiệu'
        },
        res
      )
    );
  }

  errorPage(req: Request, res: Response) {
    res.render(
      '404',
      getViewData(
        {
          title: 'Lỗi không tìm thấy trang',
          layout: null
        },
        res
      )
    );
  }
}

export default MainController;
