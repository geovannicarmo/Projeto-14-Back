import { insertProduct } from '../controllers/productsControllers.js';
import { Router } from "express";

const router = Router();

router.post('/insertproduct', insertProduct);

export default router;