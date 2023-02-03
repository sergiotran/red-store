import { getViewData } from "@redStore/utils/viewUtils";
import { findAll } from '@redStore/services/product.service';
import type { Response, Request } from "express";

class ProductController {
  async index(req: Request, res: Response) {
    const products = await findAll();
    res.render('products', getViewData({
      title: 'Sản phẩm',
      products
    }, res))
  }
}

export default ProductController;