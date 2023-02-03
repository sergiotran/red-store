import { Router } from "express";
import AuthController from "../controllers/auth.controller";

const router = Router();
const controller = new AuthController();

router.get('/login', controller.loginPage);
router.get('/register', controller.registerPage);

export default router;