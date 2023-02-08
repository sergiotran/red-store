import type { Express } from 'express';

import mainRouter from './main.router';
import authRouter from './auth.router';
import productRouter from './product.router';
import userRouter from './user.router';
import adminRouter from './admin.router';
import apiRouter from './apis';

export default function rootRouter(app: Express) {
  // Define routes
  app.use('/auth', authRouter);
  app.use('/san-pham', productRouter);
  app.use('/user', userRouter);
  app.use('/_/admin/apis', apiRouter);
  app.use('/_/admin', adminRouter);
  app.use('/', mainRouter);
}
