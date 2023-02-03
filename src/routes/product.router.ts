import { Router } from "express";
import ProductController from "../controllers/product.controller";

const router = Router();
const controller = new ProductController();

router.get('/', controller.index);

export default router;