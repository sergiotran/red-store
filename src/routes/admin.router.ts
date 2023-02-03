
import { Router } from "express";
import AdminController from "../controllers/admin.controller";

const router = Router();
const controller = new AdminController();

router.get('/dashboard', controller.dashboard);

export default router;