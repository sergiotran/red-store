import type { Response, Request } from "express";

class AdminController {
  dashboard(req: Request, res: Response) {
    res.render('admin/dashboard', {
      title: 'Trang quản trị',
      layout: 'admin'
    })
  }
}

export default AdminController;