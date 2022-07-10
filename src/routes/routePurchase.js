import purchaseControllers from "../controllers/purchaseControllers.js";
import userMiddleware from "../middleware/userMiddleware.js"
import { Router } from "express";

const router = Router()

router.post('/DatasCompra', userMiddleware, purchaseControllers)

export default router