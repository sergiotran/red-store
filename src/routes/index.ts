import type { Express } from "express";

import mainRouter from './main.router';
import authRouter from './auth.router';
import productRouter from './product.router';
import userRouter from './user.router';
import adminRouter from './admin.router';
import { getViewData } from "@redStore/utils/viewUtils";

export default function rootRouter(app: Express) {
  // Define routes
  app.use('/', mainRouter);
  app.use('/auth', authRouter);
  app.use('/san-pham', productRouter);
  app.use('/user', userRouter);
  app.use('/_/admin', adminRouter);
  // Handle 404
  app.get('*', (req, res) => {
    res.render('404', getViewData({
      title: 'Lỗi không tìm thấy trang'
    }, res))
  })
}