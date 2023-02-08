import { Router } from 'express';
import AdminController from '../controllers/admin.controller';

const router = Router();
const controller = new AdminController();

router.get('/dashboard', controller.dashboard);
// Category
router.get('/category', controller.listCategory);
router.get('/category/new', controller.createCategory);
router.get('/category/:id', controller.categoryDetail);
// Discount
router.get('/discount', controller.listDiscounts);
router.get('/discount/create', controller.createDiscount);
router.get('/discount/:id', controller.discountDetail);
// Product
router.get('/product', controller.listProducts);
router.get('/product/new', controller.createProduct);
router.get('/product/:id', controller.productDetail);
// User
router.get('/user', controller.users);
router.get('/user/:id', controller.user);

export default router;
