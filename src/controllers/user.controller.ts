import { getViewData } from "@redStore/utils/viewUtils";
import type { Response, Request } from "express";

class UserController {
  profile(req: Request, res: Response) {
    res.render('user-profile', getViewData({
      title: 'Trang thông tin'
    }, res))
  }
}

export default UserController;