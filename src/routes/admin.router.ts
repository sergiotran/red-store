import { Router } from 'express';
import AdminController from '../controllers/admin.controller';

const router = Router();
const controller = new AdminController();

router.get('/dashboard', controller.dashboard);
// Category
router.get('/category', controller.categories);
router.get('/category/:id', controller.category);
router.put('/category/:id', controller.updateCategory);
router.delete('/category/:id', controller.removeCategory);
router.post('/category/create', controller.createCategory);
// Discount
router.get('/discount', controller.discounts);
router.get('/discount/:id', controller.discount);
router.patch('/discount/:id', controller.updateDiscount);
router.delete('/discount/:id', controller.removeDiscount);
router.post('/discount/create', controller.createDiscount);
// Product
router.get('/product', controller.products);
router.get('/product/:id', controller.product);
router.patch('/product/:id', controller.updateProduct);
router.delete('/product/:id', controller.removeProduct);
router.post('/product/create', controller.createProduct);
// User
router.get('/user', controller.users);
router.get('/user/:id', controller.user);
router.patch('/user/:id', controller.updateUser);
router.delete('/user/:id', controller.removeUser);
router.post('/user/create', controller.createUser);

export default router;
