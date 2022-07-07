import { postSingup, postLogin } from '../controllers/singupControllers.js';

import { Router } from "express"

const router = Router();

router.post('/singup', postSingup)

router.post('/login', postLogin)

export default router
