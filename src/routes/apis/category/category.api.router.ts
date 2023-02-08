import { Router } from 'express';
import CategoryAPIController from '@redStore/controllers/apis/category/category.api.controller';

const router = Router();
const controller = new CategoryAPIController();

router.get('/list', controller.findAll);
router.get('/:id', controller.findOne);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.post('/new', controller.create);

export default router;
