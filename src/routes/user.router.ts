
import { Router } from "express";
import UserController from "../controllers/user.controller";

const router = Router();
const controller = new UserController();

router.get('/:username', controller.profile);

export default router;