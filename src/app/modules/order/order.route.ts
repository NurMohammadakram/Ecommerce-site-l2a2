import { Router } from 'express';
import { orderControllers } from './order.controller';

const router = Router();

// order routers
router.post('/', orderControllers.createOrder);
router.get('/', orderControllers.getAllOrder);

export const orderRouters = router;
