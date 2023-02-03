import {APP_TITLE} from '@redStore/constants/global';
import { findAll } from '@redStore/services/product.service';
import { getViewData } from '@redStore/utils/viewUtils';
import type { Response, Request } from "express";

class MainController {
  async homePage(req: Request, res: Response) {
    const products = await findAll();
    res.render('home', getViewData({
      title: APP_TITLE,
      products
    }, res));
  }

  aboutPage(req: Request, res: Response) {
    res.render('about', getViewData({
      title: "Giới thiệu"
    }, res))
  }
}

export default MainController;