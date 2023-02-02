import {APP_TITLE} from '@redStore/constants/global';
import type { Response, Request } from "express";

class MainController {
  homePage(req: Request, res: Response) {
    res.render('home', {
      title: APP_TITLE
    });
  }
}

export default MainController;