import { Router } from 'express';
import categoryApis from './category/category.api.router';

const router = Router();

router.use('/category', categoryApis);

export default router;
