import { Router } from "express";
import userMiddleware from "../middleware/userMiddleware.js";
import logOutControllers from "../controllers/logOutControllers.js";

const router = Router()

router.post('/logout', userMiddleware, logOutControllers)


export default router