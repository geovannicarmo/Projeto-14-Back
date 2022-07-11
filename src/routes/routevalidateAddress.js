import { validateAddressControllers } from "../controllers/validateAddressControllers.js";
import userMiddleware from "../middleware/userMiddleware.js"
import { Router } from "express";

const router = Router();

router.post('/validaEndereco', userMiddleware, validateAddressControllers)

export default router