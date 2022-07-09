import { getProduct, getProducts } from '../controllers/productsControllers.js';
import { Router } from "express";

const router = Router();

//router.post('/insertproduct', insertProduct);
router.get('/products', getProducts);
router.get('/product/:productId', getProduct);

export default router;