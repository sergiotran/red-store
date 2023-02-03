import type { Response, Request } from "express";
import { getViewData } from '@redStore/utils/viewUtils';

class AuthController {
  loginPage(req: Request, res: Response) {
    res.render('login', getViewData({
      title: 'Đăng nhập',
    }, res))
  }
  
  registerPage(req: Request, res: Response) {
    res.render('register', getViewData({
      title: 'Đăng ký',
    }, res))
  }
}

export default AuthController;