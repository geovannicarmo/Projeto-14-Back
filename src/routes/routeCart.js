import { Router } from "express";
import { getCart, addToCart, deleteFromCart } from '../controllers/cartControllers.js';
import userMiddleware from "../middleware/userMiddleware.js";

const router = Router();

router.get('/cart', userMiddleware, getCart);
router.post('/cart', userMiddleware, addToCart);
router.delete('/cart/:productId', userMiddleware, deleteFromCart);

export default router;